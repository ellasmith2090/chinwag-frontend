// views/hosthome.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import DOMPurify from "dompurify";

class HostBookingsView {
  constructor() {
    this.bookings = [];
    this.loading = true;
    this.removingBookingId = null;
  }

  init() {
    document.title = "Host Bookings - Chinwag";
    this.fetchBookings();
  }

  async fetchBookings() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${App.apiBase}/bookings/host`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch bookings");
      this.bookings = await response.json();
      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      document
        .querySelector("app-toast")
        ?.show("Error fetching bookings", "error");
      console.error(err);
      this.render();
    }
  }

  async updateNote(bookingId, notes) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${App.apiBase}/bookings/${bookingId}/notes`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ notes: DOMPurify.sanitize(notes) }),
        }
      );
      if (!response.ok) throw new Error("Failed to update notes");
      document.querySelector("app-toast")?.show("Notes updated", "info");
      this.fetchBookings();
    } catch (err) {
      document
        .querySelector("app-toast")
        ?.show(err.message || "Failed to update notes", "error");
      console.error(err);
      this.render();
    }
  }

  async removeBooking(bookingId) {
    this.removingBookingId = bookingId;
    this.render();
  }

  async confirmRemove(bookingId) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${App.apiBase}/bookings/${bookingId}/cancel`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) throw new Error("Failed to remove booking");
      document.querySelector("app-toast")?.show("Booking removed", "info");
      this.removingBookingId = null;
      this.fetchBookings();
    } catch (err) {
      document
        .querySelector("app-toast")
        ?.show(err.message || "Failed to remove booking", "error");
      console.error(err);
      this.removingBookingId = null;
      this.render();
    }
  }

  groupBookingsByEvent() {
    const events = {};
    this.bookings.forEach((booking) => {
      const eventId = booking.event._id;
      if (!events[eventId]) {
        events[eventId] = {
          event: booking.event,
          bookings: [],
        };
      }
      events[eventId].bookings.push(booking);
    });
    return Object.values(events);
  }

  render() {
    const eventGroups = this.groupBookingsByEvent();
    const template = html`
      <div>
        <app-header></app-header>
        <div class="page-content">
          <h1>Your Event Bookings</h1>
          ${this.loading
            ? html`<div class="spinner">Loading...</div>`
            : eventGroups.length === 0
            ? html`<p>No bookings found for your events.</p>`
            : eventGroups.map(
                ({ event, bookings }) => html`
                  <div class="event-section">
                    <h2>${DOMPurify.sanitize(event.title)}</h2>
                    <div class="booking-grid">
                      ${bookings.map(
                        (booking) => html`
                          <div class="booking-card">
                            <div class="card-header">
                              <img
                                src="${DOMPurify.sanitize(
                                  booking.guest.avatar.startsWith("/uploads")
                                    ? `${App.apiBase}${booking.guest.avatar}`
                                    : `/images/defaultavatar.png`
                                )}"
                                alt="Avatar for ${DOMPurify.sanitize(
                                  booking.guest.firstName
                                )}"
                                class="avatar"
                                @error=${(e) =>
                                  (e.target.src = `/images/defaultavatar.png`)}
                                loading="lazy"
                              />
                              <span
                                >${DOMPurify.sanitize(
                                  `${booking.guest.firstName} ${booking.guest.lastName}`
                                )}</span
                              >
                            </div>
                            <div>
                              <strong>Email:</strong>
                              ${DOMPurify.sanitize(booking.guest.email)}
                            </div>
                            <div>
                              <strong>Notes:</strong>
                              <input
                                value="${DOMPurify.sanitize(
                                  booking.hostNotes || ""
                                )}"
                                @change=${(e) =>
                                  this.updateNote(booking._id, e.target.value)}
                              />
                            </div>
                            <div class="card-footer">
                              <button
                                class="button danger"
                                @click=${() => this.removeBooking(booking._id)}
                                aria-label="Remove ${DOMPurify.sanitize(
                                  booking.guest.firstName
                                )}"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        `
                      )}
                    </div>
                  </div>
                `
              )}
          ${this.removingBookingId
            ? html`
                <div class="dialog-overlay">
                  <div class="dialog">
                    <h2>Confirm Removal</h2>
                    <p>Are you sure you want to remove this guest?</p>
                    <div class="dialog-footer">
                      <button
                        class="button primary"
                        @click=${() =>
                          this.confirmRemove(this.removingBookingId)}
                      >
                        Confirm
                      </button>
                      <button
                        class="button"
                        @click=${() => {
                          this.removingBookingId = null;
                          this.render();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              `
            : ""}
        </div>
        <app-toast></app-toast>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default HostBookingsView;
