// views/SignIn.js

// views/SignIn.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import { gotoRoute } from "../Router.js";
import Toast from "../components/Toast.js";

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
      Toast.show("Please enter a valid email address.", "warning");
      this.loading = false;
      this.render();
      return;
    }

    try {
      await Auth.signIn({ email, password });
      // Auth.signIn() handles redirection
    } catch (err) {
      this.loading = false;

      if (process.env.NODE_ENV === "development") {
        console.error("[SignInView] Login error:", err);
      }

      if (err.message.includes("User doesn't exist")) {
        Toast.show("No account found. Redirecting to Sign Up...", "warning");
        setTimeout(() => gotoRoute("/signup"), 2000);
      } else if (err.message.includes("Password or email is incorrect")) {
        Toast.show("Incorrect email or password.", "warning");
      } else {
        Toast.show(`Login failed: ${err.message}`, "danger");
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
              ?disabled=${this.loading}
              ?loading=${this.loading}
              aria-label="Submit Sign In"
            >
              Sign In
            </sl-button>
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
    `;
    render(template, App.rootEl);
  }
}

export default new SignInView();
