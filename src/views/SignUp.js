// views/signup.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import { gotoRoute } from "../Router.js";
import DOMPurify from "dompurify";
import apiFetch from "../apiFetch.js";

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
      document
        .querySelector("app-toast")
        ?.show("Passwords do not match", "error");
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
      document.querySelector("app-toast")?.show("Account created!", "info");

      gotoRoute(user.accessLevel === 1 ? "/guest-guide" : "/host-guide");
    } catch (err) {
      this.loading = false;
      document
        .querySelector("app-toast")
        ?.show(
          `Sign-up failed: ${err.message || "Please try again."}`,
          "error"
        );
      console.error("[SignUp] Submit failed:", err);
      this.render();
    }
  }

  render() {
    const template = html`
      <div>
        <app-header></app-header>
        <div class="page-content page-centered" role="main">
          <h1>Create Your Account</h1>
          <div class="form-wrapper" aria-label="Sign Up Form">
            <form @submit=${this.submitHandler.bind(this)}>
              <label>
                First Name
                <input name="firstName" required autocomplete="given-name" />
              </label>
              <label>
                Last Name
                <input name="lastName" required autocomplete="family-name" />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autocomplete="email"
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  required
                  autocomplete="new-password"
                  class=${this.passwordMismatch ? "invalid" : ""}
                />
                ${this.passwordMismatch
                  ? html`<span>Passwords do not match</span>`
                  : ""}
              </label>
              <label>
                Confirm Password
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  autocomplete="new-password"
                  class=${this.passwordMismatch ? "invalid" : ""}
                />
                ${this.passwordMismatch
                  ? html`<span>Passwords do not match</span>`
                  : ""}
              </label>
              <fieldset>
                <legend>Register as</legend>
                <label>
                  <input type="radio" name="accessLevel" value="1" checked />
                  Guest
                </label>
                <label>
                  <input type="radio" name="accessLevel" value="2" />
                  Host
                </label>
              </fieldset>
              <button
                type="submit"
                class="button primary"
                ?disabled=${this.loading}
              >
                ${this.loading ? "Signing Up..." : "Sign Up"}
              </button>
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
        <app-toast></app-toast>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default SignUpView;
