// views/GuestHome.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import Toast from "../components/Toast.js";
import DOMPurify from "dompurify";
import Header from "../components/Header.js";
import apiFetch from "../apiFetch.js";

class GuestHomeView {
  constructor() {
    this.events = null;
    this.filter = "all";
  }

  init() {
    document.title = "Guest Home";
    this.handleTabChange = this.handleTabChange.bind(this);
    this.render();
    this.fetchEvents();
  }

  async fetchEvents() {
    try {
      const query = this.filter === "all" ? "" : `?dateRange=${this.filter}`;
      const response = await apiFetch(`${App.apiBase}/events${query}`);
      if (!response.ok) throw new Error("Failed to fetch events");
      this.events = await response.json();
      this.render();
    } catch (err) {
      Toast.show("Error fetching events");
      console.error("[GuestHome] fetchEvents error:", err);
      this.events = [];
      this.render();
    }
  }

  handleTabChange(e) {
    this.filter = e.target.panel;
    this.events = null;
    this.render();
    this.fetchEvents();
  }

  async bookEvent(eventId) {
    try {
      const response = await apiFetch(`${App.apiBase}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId }),
      });
      if (!response.ok) throw new Error((await response.json()).message);
      Toast.show("Event booked!");
      this.fetchEvents();
    } catch (err) {
      Toast.show(err.message || "Booking failed");
      console.error("[GuestHome] bookEvent error:", err);
    }
  }

  render() {
    const template = html`
      <div>
        ${Header.render()}
        <div class="page-content">
          <h1 class="title">Have a chinwag...</h1>

          <div class="tab-bar">
            <sl-tab-group @sl-tab-show=${this.handleTabChange}>
              <sl-tab
                slot="nav"
                class="page-tab ${this.filter === "all" ? "active" : ""}"
                panel="all"
                ?active=${this.filter === "all"}
              >
                All
              </sl-tab>
              <sl-tab
                slot="nav"
                class="page-tab ${this.filter === "weekend" ? "active" : ""}"
                panel="weekend"
                ?active=${this.filter === "weekend"}
              >
                This Weekend
              </sl-tab>
              <sl-tab
                slot="nav"
                class="page-tab ${this.filter === "nextWeek" ? "active" : ""}"
                panel="nextWeek"
                ?active=${this.filter === "nextWeek"}
              >
                Next Week
              </sl-tab>
            </sl-tab-group>
          </div>

          ${this.events === null
            ? html`<sl-spinner
                style="margin: 2rem auto; display: block;"
              ></sl-spinner>`
            : this.events.length === 0
            ? html`<p>No events found for this filter.</p>`
            : html`
                <sl-carousel navigation pagination>
                  ${this.events.map(
                    (event) => html`
                      <sl-carousel-item>
                        <div class="event-card">
                          <img
                            src="${DOMPurify.sanitize(event.image)}"
                            alt="${DOMPurify.sanitize(event.title)}"
                          />
                          <div class="event-card-body">
                            <h2>${DOMPurify.sanitize(event.title)}</h2>
                            <p>${DOMPurify.sanitize(event.description)}</p>
                            <p>
                              Date: ${new Date(event.date).toLocaleString()}
                            </p>
                            <p>
                              Location: ${DOMPurify.sanitize(event.location)}
                            </p>
                            <p>Seats Available: ${event.seatsAvailable}</p>
                            <p>
                              Host: ${DOMPurify.sanitize(event.host.firstName)}
                              ${DOMPurify.sanitize(event.host.lastName)}
                            </p>
                          </div>
                          <div class="button-group">
                            <sl-button
                              @click=${() => this.bookEvent(event._id)}
                              variant="primary"
                              ?disabled=${event.seatsAvailable === 0}
                            >
                              Book Event
                            </sl-button>
                          </div>
                        </div>
                      </sl-carousel-item>
                    `
                  )}
                </sl-carousel>
              `}
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new GuestHomeView();
