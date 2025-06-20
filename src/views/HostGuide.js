// views/HostGuide.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import { gotoRoute } from "../Router.js";
import DOMPurify from "dompurify";

class HostGuideView {
  async init() {
    document.title = "Welcome to Chinwag - Host";
    if (!Auth.currentUser || Auth.currentUser.accessLevel !== 2) {
      gotoRoute("/signin");
      return;
    }
    this.render();
  }

  async handleGetStarted() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${App.apiBase}/users/${Auth.currentUser.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isFirstLogin: false }),
        }
      );
      if (!response.ok) throw new Error("Failed to update user");
      Auth.currentUser.isFirstLogin = false;
      gotoRoute("/host-home");
    } catch (err) {
      document
        .querySelector("app-toast")
        ?.show("Error getting started", "error");
      console.error(err);
      this.render();
    }
  }

  render() {
    const template = html`
      <div>
        <app-header></app-header>
        <div class="guide-page">
          <div class="guide-header"></div>
          <div class="guide-content">
            <div class="guide-text-block">
              <h1 class="guide-title">Welcome!</h1>
              <p class="guide-subtitle">
                ${DOMPurify.sanitize(
                  "We’re thrilled to have your venue on board. Chinwag is here to help you turn underused tables into new revenue — and make your space a destination for community."
                )}
              </p>
              <h2 class="guide-heading">What is Chinwag?</h2>
              <p class="guide-text">
                ${DOMPurify.sanitize(
                  "Chinwag is a social dining platform where people join communal tables at local venues. For you, it’s a low-effort way to increase bookings, especially during quiet periods."
                )}
              </p>
            </div>
            <div class="guide-features">
              <div class="guide-card">
                <h4>📅 Fill seats</h4>
                <p>Boost off-peak bookings with communal tables.</p>
              </div>
              <div class="guide-card">
                <h4>🛠️ List in seconds</h4>
                <p>Duplicate past events to post in seconds.</p>
              </div>
              <div class="guide-card">
                <h4>📊 Reach a new audience</h4>
                <p>Attract spontaneous diners and social groups.</p>
              </div>
            </div>
            <div class="guide-cta">
              <button
                class="button primary large"
                @click=${this.handleGetStarted.bind(this)}
                aria-label="Get Started as a Host"
              >
                Get Started
              </button>
            </div>
          </div>
          <div class="guide-footer"></div>
        </div>
        <app-toast></app-toast>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default HostGuideView;
