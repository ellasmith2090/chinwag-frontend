// views/GuestBookings.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import DOMPurify from "dompurify";

class GuestBookingsView {
  constructor() {
    this.bookings = [];
    this.loading = true;
    this.activeFilter = "Upcoming";
    this.cancellingBookingId = null;
  }

  init() {
    document.title = "Your Bookings - Chinwag";
    this.fetchBookings();
  }

  async fetchBookings() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${App.apiBase}/bookings/guest`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch bookings");
      this.bookings = await response.json();
      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      const toast = document.querySelector("app-toast");
      if (toast) {
        toast.show("Error fetching bookings", "error");
      } else {
        console.warn("[GuestBookings.js] Toast not available:", err.message);
      }
      console.error(err);
      this.render();
    }
  }

  handleTabClick(filter) {
    this.activeFilter = filter;
    this.render();
  }

  async cancelBooking(bookingId) {
    this.cancellingBookingId = bookingId;
    this.render();
  }

  async confirmCancel(bookingId) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${App.apiBase}/bookings/${bookingId}/cancel`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) throw new Error("Failed to cancel booking");
      const toast = document.querySelector("app-toast");
      if (toast) {
        toast.show("Booking cancelled", "info");
      } else {
        console.warn(
          "[GuestBookings.js] Toast not available: Booking cancelled"
        );
      }
      this.cancellingBookingId = null;
      this.fetchBookings();
    } catch (err) {
      const toast = document.querySelector("app-toast");
      if (toast) {
        toast.show(err.message || "Failed to cancel booking", "error");
      } else {
        console.warn("[GuestBookings.js] Toast not available:", err.message);
      }
      console.error(err);
      this.cancellingBookingId = null;
      this.render();
    }
  }

  getFilteredBookings() {
    const now = new Date();
    return this.bookings.filter((booking) =>
      this.activeFilter === "Upcoming"
        ? new Date(booking.event.date) >= now && booking.status === "confirmed"
        : new Date(booking.event.date) < now || booking.status === "cancelled"
    );
  }

  render() {
    const filteredBookings = this.getFilteredBookings();
    const template = html`
      <div>
        <app-header></app-header>
        <div class="page-content">
          <h1>Your Bookings</h1>

          <div class="tab-bar">
            <button
              class="page-tab ${this.activeFilter === "Upcoming"
                ? "active"
                : ""}"
              @click=${() => this.handleTabClick("Upcoming")}
            >
              Upcoming
            </button>
            <button
              class="page-tab ${this.activeFilter === "Past" ? "active" : ""}"
              @click=${() => this.handleTabClick("Past")}
            >
              Past
            </button>
          </div>

          ${this.loading
            ? html`<div class="spinner">Loading...</div>`
            : filteredBookings.length === 0
            ? html`<p>No ${this.activeFilter.toLowerCase()} bookings found.</p>`
            : html`
                <div class="booking-grid">
                  ${filteredBookings.map(
                    (booking) => html`
                      <div class="booking-card">
                        <img
                          src="${DOMPurify.sanitize(
                            booking.event.image.startsWith("/uploads")
                              ? `${App.apiBase}${booking.event.image}`
                              : `/images/default-event.png`
                          )}"
                          alt="${DOMPurify.sanitize(booking.event.title)}"
                          @error=${(e) =>
                            (e.target.src = `/images/default-event.png`)}
                          loading="lazy"
                        />
                        <h3>${DOMPurify.sanitize(booking.event.title)}</h3>
                        <p>
                          <strong>Date:</strong>
                          ${new Date(booking.event.date).toLocaleString()}
                        </p>
                        <p>
                          <strong>Location:</strong>
                          ${DOMPurify.sanitize(booking.event.location)}
                        </p>
                        <p>
                          <strong>Status:</strong>
                          ${DOMPurify.sanitize(booking.status)}
                        </p>
                        <p>
                          <strong>Host:</strong>
                          ${DOMPurify.sanitize(
                            `${booking.event.host.firstName} ${booking.event.host.lastName}`
                          )}
                        </p>
                        <p>
                          <strong>Host Email:</strong>
                          ${DOMPurify.sanitize(booking.event.host.email)}
                        </p>
                        <div class="card-footer">
                          <button
                            class="button primary"
                            @click=${() =>
                              window.open(`mailto:${booking.event.host.email}`)}
                            aria-label="Contact Host"
                          >
                            Contact Host
                          </button>
                          ${booking.status === "confirmed"
                            ? html`
                                <button
                                  class="button danger"
                                  @click=${() =>
                                    this.cancelBooking(booking._id)}
                                  aria-label="Cancel Booking"
                                >
                                  Cancel Booking
                                </button>
                              `
                            : ""}
                        </div>
                      </div>
                    `
                  )}
                </div>
              `}
          ${this.cancellingBookingId
            ? html`
                <div class="dialog-overlay">
                  <div class="dialog">
                    <h2>Confirm Cancellation</h2>
                    <p>Are you sure you want to cancel this booking?</p>
                    <div class="dialog-footer">
                      <button
                        class="button primary"
                        @click=${() =>
                          this.confirmCancel(this.cancellingBookingId)}
                      >
                        Confirm
                      </button>
                      <button
                        class="button"
                        @click=${() => {
                          this.cancellingBookingId = null;
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

export default GuestBookingsView;
