// views/GuestHome.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import DOMPurify from "dompurify";
import apiFetch from "../apiFetch.js";

class GuestHomeView {
  constructor() {
    this.events = null;
    this.filter = "all";
  }

  init() {
    document.title = "Guest Home - Chinwag";
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
      document
        .querySelector("app-toast")
        ?.show("Error fetching events", "error");
      console.error("[GuestHome] fetchEvents error:", err);
      this.events = null;
      this.render();
    }
  }

  handleTabChange(filter) {
    this.filter = filter;
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
      document.querySelector("app-toast")?.show("Event booked!", "info");
      this.fetchEvents();
    } catch (err) {
      document
        .querySelector("app-toast")
        ?.show(err.message || "Booking failed", "error");
      console.error("[GuestHome] bookEvent error:", err);
      this.render();
    }
  }

  render() {
    const template = html`
      <div>
        <app-header></app-header>
        <div class="events-content">
          <h1 class="title">Have a chinwag...</h1>

          <div class="tab-bar">
            <button
              class="page-tab ${this.filter === "all" ? "active" : ""}"
              @click=${() => this.handleTabChange("all")}
            >
              All
            </button>
            <button
              class="page-tab ${this.filter === "weekend" ? "active" : ""}"
              @click=${() => this.handleTabChange("weekend")}
            >
              This Weekend
            </button>
            <button
              class="page-tab ${this.filter === "nextWeek" ? "active" : ""}"
              @click=${() => this.handleTabChange("nextWeek")}
            >
              Next Week
            </button>
          </div>

          ${this.events === null
            ? html`<div class="spinner">Loading events...</div>`
            : this.events.length === 0
            ? html`<p>No events found for this filter.</p>`
            : html`
                <div class="event-carousel">
                  ${this.events.map(
                    (event) => html`
                      <div class="event-card">
                        <img
                          src="${DOMPurify.sanitize(event.image)}"
                          alt="${event.title}"
                        />
                        <div class="event-card-body">
                          <h2>${DOMPurify.sanitize(event.title)}</h2>
                          <p>${DOMPurify.sanitize(event.description)}</p>
                          <p>Date: ${new Date(event.date).toLocaleString()}</p>
                          <p>Location: ${DOMPurify.sanitize(event.location)}</p>
                          <p>Seats Available: ${event.seatsAvailable}</p>
                          <p>
                            Host: ${DOMPurify.sanitize(event.host.firstName)}
                            ${DOMPurify.sanitize(event.host.lastName)}
                          </p>
                        </div>
                        <div class="button-group">
                          <button
                            class="button primary"
                            @click=${() => this.bookEvent(event._id)}
                            ?disabled=${event.seatsAvailable === 0}
                          >
                            Book Event
                          </button>
                        </div>
                      </div>
                    `
                  )}
                </div>
              `}
        </div>
        <app-toast></app-toast>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default GuestHomeView;
