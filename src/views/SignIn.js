// views/SignIn.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import { gotoRoute } from "../Router.js";

class SignInView {
  constructor() {
    this.loading = false;
  }

  init() {
    document.title = "Sign In - Chinwag";
    if (process.env.NODE_ENV === "development") {
      console.log("[SignInView] init() called");
    }
    this.render();
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
      document
        .querySelector("app-toast")
        ?.show("Please enter a valid email address.", "warning");
      this.loading = false;
      this.render();
      return;
    }

    try {
      await Auth.signIn({ email, password });
    } catch (err) {
      this.loading = false;

      if (process.env.NODE_ENV === "development") {
        console.error("[SignInView] Login error:", err);
      }

      if (err.message.includes("User doesn't exist")) {
        document
          .querySelector("app-toast")
          ?.show("No account found. Redirecting to Sign Up...", "warning");
        setTimeout(() => gotoRoute("/signup"), 2000);
      } else if (err.message.includes("Password or email is incorrect")) {
        document
          .querySelector("app-toast")
          ?.show("Incorrect email or password.", "warning");
      } else {
        document
          .querySelector("app-toast")
          ?.show(`Login failed: ${err.message}`, "error");
      }

      this.render();
    }
  }

  render() {
    if (process.env.NODE_ENV === "development") {
      console.log("[SignInView] render() called");
    }

    const template = html`
      <div>
        <app-header></app-header>
        <div class="page-content page-centered" role="main">
          <h1>Sign In</h1>
          <div class="form-wrapper" aria-label="Sign In Form">
            <form @submit=${this.submitHandler.bind(this)}>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autocomplete="email"
                  aria-required="true"
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  required
                  autocomplete="current-password"
                  aria-required="true"
                />
              </label>
              <button
                type="submit"
                class="button primary"
                ?disabled=${this.loading}
                aria-label="Submit Sign In"
              >
                ${this.loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <p>
              Don't have an account?
              <a
                href="/signup"
                @click=${(e) => {
                  e.preventDefault();
                  gotoRoute("/signup");
                }}
                aria-label="Go to Sign Up"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
        <app-toast></app-toast>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default SignInView;
