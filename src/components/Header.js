// components/header.js

import { LitElement, html } from "lit";
import Auth from "../Auth.js";
import { gotoRoute } from "../Router.js";

class AppHeader extends LitElement {
  static properties = {
    currentTab: { type: String },
  };

  constructor() {
    super();
    this.currentTab = "home";
  }

  updated() {
    const path = window.location.pathname;
    if (path.includes("bookings")) this.currentTab = "bookings";
    else if (path.includes("profile")) this.currentTab = "profile";
    else this.currentTab = "home";
  }

  render() {
    const isHost = Auth.currentUser?.accessLevel === 2;
    return html`
      <header class="site-header">
        <div class="image-overlay"></div>
        <div class="header-content">
          <div
            class="logo"
            @click=${() => gotoRoute(isHost ? "/host-home" : "/guest-home")}
            role="button"
            aria-label="Go to home"
          >
            Chinwag
          </div>
          <nav class="nav-tabs">
            <button
              class="nav-tab ${this.currentTab === "home" ? "active" : ""}"
              @click=${() => gotoRoute(isHost ? "/host-home" : "/guest-home")}
            >
              Home
            </button>
            <button
              class="nav-tab ${this.currentTab === "bookings" ? "active" : ""}"
              @click=${() =>
                gotoRoute(isHost ? "/host-bookings" : "/guest-bookings")}
            >
              Bookings
            </button>
            <button
              class="nav-tab ${this.currentTab === "profile" ? "active" : ""}"
              @click=${() => gotoRoute("/profile")}
            >
              Profile
            </button>
            <button class="nav-tab" @click=${() => Auth.signOut()}>
              Logout
            </button>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
export default AppHeader;
