// views/signup.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import { gotoRoute } from "../Router.js";
import Toast from "../components/Toast.js";
import DOMPurify from "dompurify";
import apiFetch from "../apiFetch.js"; // ✅ import

class SignUpView {
  constructor() {
    this.loading = false;
    this.passwordMismatch = false;
  }

  init() {
    document.title = "Sign Up - Chinwag";
    this.render();
  }

  async submitHandler(e) {
    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    this.passwordMismatch = false;

    const form = e.target;
    const firstName = DOMPurify.sanitize(
      form.querySelector('[name="firstName"]').value.trim()
    );
    const lastName = DOMPurify.sanitize(
      form.querySelector('[name="lastName"]').value.trim()
    );
    const email = DOMPurify.sanitize(
      form.querySelector('[name="email"]').value.trim()
    );
    const password = form.querySelector('[name="password"]').value;
    const confirmPassword = form.querySelector(
      '[name="confirmPassword"]'
    ).value;
    const accessLevel = parseInt(
      form.querySelector('[name="accessLevel"]').value
    );

    if (password !== confirmPassword) {
      this.passwordMismatch = true;
      this.loading = false;
      this.render();
      Toast.show("Passwords do not match");
      return;
    }

    try {
      const response = await apiFetch(`${App.apiBase}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          accessLevel,
        }),
      });

      if (!response.ok) throw new Error((await response.json()).message);

      const { accessToken, user } = await response.json();
      localStorage.setItem("token", accessToken);
      Auth.currentUser = user;
      Toast.show("Account created!");

      gotoRoute(user.accessLevel === 1 ? "/guest-guide" : "/host-guide");
    } catch (err) {
      this.loading = false;
      Toast.show(`Sign-up failed: ${err.message || "Please try again."}`);
      console.error("[SignUp] Submit failed:", err);
      this.render();
    }
  }

  render() {
    const template = html`
      <div class="page-content page-centered" role="main">
        <h1>Create Your Account</h1>
        <div class="form-wrapper" aria-label="Sign Up Form">
          <form @submit=${this.submitHandler.bind(this)}>
            <sl-input
              name="firstName"
              label="First Name"
              required
              autocomplete="given-name"
            ></sl-input>
            <sl-input
              name="lastName"
              label="Last Name"
              required
              autocomplete="family-name"
            ></sl-input>
            <sl-input
              name="email"
              type="email"
              label="Email"
              required
              autocomplete="email"
            ></sl-input>
            <sl-input
              name="password"
              type="password"
              label="Password"
              required
              autocomplete="new-password"
              help-text=${this.passwordMismatch ? "Passwords do not match" : ""}
              ?invalid=${this.passwordMismatch}
            ></sl-input>
            <sl-input
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              required
              autocomplete="new-password"
              help-text=${this.passwordMismatch ? "Passwords do not match" : ""}
              ?invalid=${this.passwordMismatch}
            ></sl-input>
            <sl-radio-group
              name="accessLevel"
              label="Register as"
              required
              value="1"
            >
              <sl-radio value="1">Guest</sl-radio>
              <sl-radio value="2">Host</sl-radio>
            </sl-radio-group>
            <sl-button
              type="submit"
              variant="primary"
              ?disabled=${this.loading}
              ?loading=${this.loading}
            >
              Sign Up
            </sl-button>
          </form>
          <p>
            Already have an account?
            <a
              href="/signin"
              @click=${(e) => {
                e.preventDefault();
                gotoRoute("/signin");
              }}
              aria-label="Go to Sign In"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new SignUpView();
