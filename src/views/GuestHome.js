// views/GuestHome.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import Toast from "../Toast.js";
import DOMPurify from "dompurify";
import Header from "../components/Header.js";

class GuestHomeView {
  constructor() {
    this.events = [];
    this.filter = "all";
  }

  init() {
    document.title = "Guest Home";
    this.fetchEvents();
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  async fetchEvents() {
    try {
      const query = this.filter === "all" ? "" : `?dateRange=${this.filter}`;
      const response = await fetch(`${App.apiBase}/events${query}`);
      if (!response.ok) throw new Error("Failed to fetch events");
      this.events = await response.json();
      this.render();
    } catch (err) {
      Toast.show("Error fetching events");
      console.error(err);
    }
  }

  handleTabChange(e) {
    this.filter = e.target.panel;
    this.fetchEvents();
  }

  async bookEvent(eventId) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${App.apiBase}/bookings`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId }),
      });
      if (!response.ok) throw new Error((await response.json()).message);
      Toast.show("Event booked!");
      this.fetchEvents();
    } catch (err) {
      Toast.show(err.message || "Booking failed");
      console.error(err);
    }
  }

  render() {
    const template = html`
      <div>
        ${Header.render()}
        <div class="page-content">
          <h1>Available Events</h1>
          <div class="carousel-container">
            <sl-tab-group @sl-tab-show=${this.handleTabChange}>
              <sl-tab slot="nav" panel="all" active>All</sl-tab>
              <sl-tab slot="nav" panel="weekend">This Weekend</sl-tab>
              <sl-tab slot="nav" panel="nextWeek">Next Week</sl-tab>
            </sl-tab-group>
            <sl-carousel navigation pagination>
              ${this.events.map(
                (event) => html`
                  <sl-carousel-item>
                    <div class="event-card">
                      <img
                        src="${DOMPurify.sanitize(event.image)}"
                        alt="${DOMPurify.sanitize(event.title)}"
                        width="300"
                      />
                      <h2>${DOMPurify.sanitize(event.title)}</h2>
                      <p>${DOMPurify.sanitize(event.description)}</p>
                      <p>Date: ${new Date(event.date).toLocaleString()}</p>
                      <p>Location: ${DOMPurify.sanitize(event.location)}</p>
                      <p>Seats Available: ${event.seatsAvailable}</p>
                      <p>
                        Host: ${DOMPurify.sanitize(event.host.firstName)}
                        ${DOMPurify.sanitize(event.host.lastName)}
                      </p>
                      <sl-button
                        @click=${() => this.bookEvent(event._id)}
                        variant="primary"
                        ?disabled=${event.seatsAvailable === 0}
                      >
                        Book Event
                      </sl-button>
                    </div>
                  </sl-carousel-item>
                `
              )}
            </sl-carousel>
          </div>
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new GuestHomeView();
