// views/HostBookings.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import Toast from "../components/Toast.js";
import DOMPurify from "dompurify";
import Header from "../components/Header.js";

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
      Toast.show("Error fetching bookings");
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
      Toast.show("Notes updated");
      this.fetchBookings();
    } catch (err) {
      Toast.show(err.message || "Failed to update notes");
      console.error(err);
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
      Toast.show("Booking removed");
      this.removingBookingId = null;
      this.fetchBookings();
    } catch (err) {
      Toast.show(err.message || "Failed to remove booking");
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
        ${Header.render()}
        <div class="page-content">
          <h1>Your Event Bookings</h1>
          ${this.loading
            ? html`<sl-spinner></sl-spinner>`
            : eventGroups.length === 0
            ? html`<p>No bookings found for your events.</p>`
            : eventGroups.map(
                ({ event, bookings }) => html`
                  <div class="event-section">
                    <h2>${DOMPurify.sanitize(event.title)}</h2>
                    <div class="booking-grid">
                      ${bookings.map(
                        (booking) => html`
                          <sl-card class="booking-card">
                            <div slot="header">
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
                              <sl-input
                                value="${DOMPurify.sanitize(
                                  booking.hostNotes || ""
                                )}"
                                @sl-change=${(e) =>
                                  this.updateNote(booking._id, e.target.value)}
                              ></sl-input>
                            </div>
                            <div slot="footer">
                              <sl-button
                                variant="danger"
                                @click=${() => this.removeBooking(booking._id)}
                                aria-label="Remove ${DOMPurify.sanitize(
                                  booking.guest.firstName
                                )}"
                              >
                                Remove
                              </sl-button>
                            </div>
                          </sl-card>
                        `
                      )}
                    </div>
                  </div>
                `
              )}
          ${this.removingBookingId
            ? html`
                <sl-dialog label="Confirm Removal" open>
                  <p>Are you sure you want to remove this guest?</p>
                  <sl-button
                    slot="footer"
                    variant="primary"
                    @click=${() => this.confirmRemove(this.removingBookingId)}
                  >
                    Confirm
                  </sl-button>
                  <sl-button
                    slot="footer"
                    variant="default"
                    @click=${() => {
                      this.removingBookingId = null;
                      this.render();
                    }}
                  >
                    Cancel
                  </sl-button>
                </sl-dialog>
              `
            : ""}
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new HostBookingsView();
