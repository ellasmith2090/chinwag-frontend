// views/GuestBookings.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import Toast from "../Toast.js";
import DOMPurify from "dompurify";
import Header from "../components/Header.js";

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
      Toast.show("Error fetching bookings");
      console.error(err);
      this.render();
    }
  }

  handleTabClick(e) {
    this.activeFilter = e.target.panel;
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
      Toast.show("Booking cancelled");
      this.cancellingBookingId = null;
      this.fetchBookings();
    } catch (err) {
      Toast.show(err.message || "Failed to cancel booking");
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
        ${Header.render()}
        <div class="page-content">
          <h1>Your Bookings</h1>
          <sl-tab-group @sl-tab-show=${this.handleTabClick.bind(this)}>
            <sl-tab slot="nav" panel="Upcoming" active>Upcoming</sl-tab>
            <sl-tab slot="nav" panel="Past">Past</sl-tab>
          </sl-tab-group>
          ${this.loading
            ? html`<sl-spinner></sl-spinner>`
            : filteredBookings.length === 0
            ? html`<p>No ${this.activeFilter.toLowerCase()} bookings found.</p>`
            : html`
                <div class="booking-grid">
                  ${filteredBookings.map(
                    (booking) => html`
                      <sl-card class="booking-card">
                        <img
                          slot="image"
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
                        <div slot="footer">
                          <sl-button
                            variant="primary"
                            @click=${() =>
                              window.open(`mailto:${booking.event.host.email}`)}
                            aria-label="Contact Host"
                          >
                            Contact Host
                          </sl-button>
                          ${booking.status === "confirmed"
                            ? html`
                                <sl-button
                                  variant="danger"
                                  @click=${() =>
                                    this.cancelBooking(booking._id)}
                                  aria-label="Cancel Booking"
                                >
                                  Cancel Booking
                                </sl-button>
                              `
                            : ""}
                        </div>
                      </sl-card>
                    `
                  )}
                </div>
              `}
          ${this.cancellingBookingId
            ? html`
                <sl-dialog label="Confirm Cancellation" open>
                  <p>Are you sure you want to cancel this booking?</p>
                  <sl-button
                    slot="footer"
                    variant="primary"
                    @click=${() => this.confirmCancel(this.cancellingBookingId)}
                  >
                    Confirm
                  </sl-button>
                  <sl-button
                    slot="footer"
                    variant="default"
                    @click=${() => {
                      this.cancellingBookingId = null;
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

export default new GuestBookingsView();
