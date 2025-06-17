// views/SignIn.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import { gotoRoute } from "../Router.js";
import Toast from "../Toast.js";

class SignInView {
  constructor() {
    this.loading = false;
  }

  init() {
    document.title = "Sign In - Chinwag";
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

    try {
      await Auth.signIn({ email, password });
    } catch (err) {
      this.loading = false;
      this.render();
    }
  }

  render() {
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
              aria-required="true"
              autocomplete="email"
            ></sl-input>
            <sl-input
              name="password"
              type="password"
              label="Password"
              required
              aria-required="true"
              autocomplete="current-password"
            ></sl-input>
            <sl-button
              type="submit"
              variant="primary"
              ?disabled=${this.loading}
              ?loading=${this.loading}
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
