// views/SignIn.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import { gotoRoute, anchorRoute } from "../Router.js";
import Toast from "../Toast.js";

class SignInView {
  constructor() {
    this.loading = false;
  }

  init() {
    document.title = "Sign In - Chinwag";
    if (process.env.NODE_ENV === "development") {
      console.log("[SignInView] init() called");
    }

    App.rootEl.innerHTML = `<p>Loading sign in form...</p>`;
    // Wait to ensure Shoelace elements are registered
    setTimeout(() => this.render(), 0);
  }

  async submitHandler(e) {
    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    this.render();

    const form = e.target;
    const email = form.querySelector('[name="email"]').value.trim();
    const password = form.querySelector('[name="password"]').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show("⚠️ Please enter a valid email address.", "warning");
      this.loading = false;
      this.render();
      return;
    }

    try {
      await Auth.signIn({ email, password });
      Toast.show("✅ Signed in successfully!", "success");

      const user = Auth.currentUser;
      gotoRoute(
        user.isFirstLogin
          ? user.accessLevel === 1
            ? "/guest-guide"
            : "/host-guide"
          : user.accessLevel === 1
          ? "/guest-home"
          : "/host-home"
      );
    } catch (err) {
      this.loading = false;
      if (process.env.NODE_ENV === "development") {
        console.error("[SignInView] Login error:", err);
      }

      if (err.status === 404) {
        Toast.show("No account found. Redirecting to Sign Up...", "warning");
        setTimeout(() => gotoRoute("/signup"), 2000);
      } else if (err.status === 401) {
        Toast.show("Incorrect password. Please try again.", "warning");
      } else {
        Toast.show(
          `❌ Login failed: ${err.message || "Unknown error"}`,
          "danger"
        );
      }
      this.render();
    }
  }

  render() {
    if (process.env.NODE_ENV === "development") {
      console.log("[SignInView] render() called");
    }

    const template = html`
      <div class="page-content page-centered" role="main">
        <h1>Sign In</h1>
        <div class="form-wrapper" aria-label="Sign In Form">
          <form @submit=${this.submitHandler.bind(this)}>
            <sl-input
              name="email"
              type="email"
              label="Email"
              required
              autocomplete="email"
              aria-required="true"
            ></sl-input>

            <sl-input
              name="password"
              type="password"
              label="Password"
              required
              autocomplete="current-password"
              aria-required="true"
            ></sl-input>

            <sl-button
              type="submit"
              variant="primary"
              class="primary"
              ?disabled=${this.loading}
              ?loading=${this.loading}
              aria-label="Submit Sign In"
            >
              Sign In
            </sl-button>
          </form>
          <p>
            Don't have an account?
            <a href="/signup" @click=${anchorRoute} aria-label="Go to Sign Up">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    `;

    // Defer rendering to ensure Shoelace is fully ready
    setTimeout(() => render(template, App.rootEl), 0);
  }
}

export default new SignInView();
