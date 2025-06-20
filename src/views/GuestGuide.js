// views/GuestGuide.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import { gotoRoute } from "../Router.js";
import DOMPurify from "dompurify";

class GuestGuideView {
  async init() {
    document.title = "Welcome to Chinwag - Guest";
    if (!Auth.currentUser || Auth.currentUser.accessLevel !== 1) {
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
      gotoRoute("/guest-home");
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
                  "We’re so glad you’re here. Chinwag connects people who crave meaningful, in-person experiences over a shared meal — no awkward planning or group chats required."
                )}
              </p>
              <h2 class="guide-heading">What is Chinwag?</h2>
              <p class="guide-text">
                ${DOMPurify.sanitize(
                  "Chinwag helps you find and join communal dining tables hosted at local cafes and restaurants. Whether you’re new in town or just want to shake up your social routine, Chinwag makes it easy to connect — no algorithms or matching required."
                )}
              </p>
            </div>
            <div class="guide-features">
              <div class="guide-card">
                <h4>🍽️ Meet new people</h4>
                <p>No planning, no pressure — just show up.</p>
              </div>
              <div class="guide-card">
                <h4>🗓️ Spontaneous plans</h4>
                <p>Join an event tonight or this weekend.</p>
              </div>
              <div class="guide-card">
                <h4>🧭 The unexpected</h4>
                <p>Discover great venues and better convo.</p>
              </div>
            </div>
            <div class="guide-cta">
              <sl-button
                class="button primary large"
                @click=${this.handleGetStarted.bind(this)}
                aria-label="Get Started as a Guest"
              >
                Get Started
              </sl-button>
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

export default GuestGuideView;
