// views/hosthome.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import Toast from "../Toast.js";
import DOMPurify from "dompurify";
import { gotoRoute } from "../Router.js";

class HostHomeView {
  constructor() {
    this.events = [];
  }

  init() {
    document.title = "Host Home";
    this.fetchEvents();
    this.submitHandler = this.submitHandler.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
  }

  async fetchEvents() {
    try {
      const response = await fetch(
        `${App.apiBase}/events?host=${Auth.currentUser.id}`
      );
      if (!response.ok) throw new Error("Failed to fetch events");
      this.events = await response.json();
      this.render();
    } catch (err) {
      Toast.show("Error fetching events");
      console.error(err);
    }
  }

  async submitHandler(e) {
    e.preventDefault();
    const form = e.target;
    const title = DOMPurify.sanitize(
      form.querySelector('[name="title"]').value
    );
    const description = DOMPurify.sanitize(
      form.querySelector('[name="description"]').value
    );
    const date = DOMPurify.sanitize(form.querySelector('[name="date"]').value);
    const location = DOMPurify.sanitize(
      form.querySelector('[name="location"]').value
    );
    const image = form.querySelector('[name="image"]').files[0];

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("date", date);
      formData.append("location", location);
      if (image) formData.append("image", image);

      const response = await fetch(`${App.apiBase}/events`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!response.ok) throw new Error(await response.json().message);
      Toast.show("Event created!");
      this.fetchEvents();
    } catch (err) {
      Toast.show(err.message || "Event creation failed");
      console.error(err);
    }
  }

  async deleteEvent(eventId) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${App.apiBase}/events/${eventId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error(await response.json().message);
      Toast.show("Event deleted");
      this.fetchEvents();
    } catch (err) {
      Toast.show(err.message || "Deletion failed");
      console.error(err);
    }
  }

  render() {
    const template = html`
      <div class="page-content">
        <h1>Your Events</h1>
        <form @submit=${this.submitHandler}>
          <sl-input name="title" label="Event Title" required></sl-input>
          <sl-textarea
            name="description"
            label="Description"
            required
          ></sl-textarea>
          <sl-input
            name="date"
            type="datetime-local"
            label="Date and Time"
            required
          ></sl-input>
          <sl-input name="location" label="Location" required></sl-input>
          <input type="file" name="image" accept="image/*" />
          <sl-button type="submit" variant="primary">Create Event</sl-button>
        </form>
        <h2>Existing Events</h2>
        ${this.events.map(
          (event) => html`
            <div class="event-card">
              <img
                src="${DOMPurify.sanitize(event.image)}"
                alt="${event.title}"
                width="300"
              />
              <h3>${DOMPurify.sanitize(event.title)}</h3>
              <p>${DOMPurify.sanitize(event.description)}</p>
              <p>Date: ${new Date(event.date).toLocaleString()}</p>
              <p>Location: ${DOMPurify.sanitize(event.location)}</p>
              <sl-button
                @click=${() => this.deleteEvent(event._id)}
                variant="danger"
                >Delete</sl-button
              >
            </div>
          `
        )}
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new HostHomeView();
