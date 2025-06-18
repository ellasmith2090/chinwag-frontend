// views/profile.js
import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import Toast from "../components/Toast.js";
import DOMPurify from "dompurify";
import Header from "../components/Header.js";
import apiFetch from "../apiFetch.js";

class ProfileView {
  constructor() {
    this.user = null;
    this.loading = true;
    this.saving = false;
    this.passwordMismatch = false;
    this.showPasswordDialog = false;
    this.avatarPreview = null;
  }

  init() {
    document.title = "Profile - Chinwag";
    this.fetchUser();
  }

  async fetchUser() {
    try {
      const response = await apiFetch(
        `${App.apiBase}/users/${Auth.currentUser.id}`
      );
      if (!response.ok) throw new Error("Failed to fetch profile");
      this.user = await response.json();
      this.avatarPreview = this.user.avatar.startsWith("/uploads")
        ? `${App.apiBase}${this.user.avatar}`
        : "/images/default-avatar.png";
      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      Toast.show("Error fetching profile");
      console.error(err);
      this.render();
    }
  }

  handleAvatarChange(e) {
    const file = e.target.files[0];
    if (file) {
      this.avatarPreview = URL.createObjectURL(file);
      this.render();
    }
  }

  async submitHandler(e) {
    e.preventDefault();
    if (this.saving) return;
    this.saving = true;
    this.render();

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
    const bio = DOMPurify.sanitize(
      form.querySelector('[name="bio"]').value.trim()
    );
    const avatar = form.querySelector('[name="avatar"]').files[0];

    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("bio", bio);
      if (avatar) formData.append("avatar", avatar);

      const response = await apiFetch(
        `${App.apiBase}/users/${Auth.currentUser.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) throw new Error((await response.json()).message);

      const updatedUser = await response.json();
      Auth.currentUser = { ...Auth.currentUser, ...updatedUser };
      this.user = updatedUser;
      this.avatarPreview = updatedUser.avatar.startsWith("/uploads")
        ? `${App.apiBase}${updatedUser.avatar}`
        : "/images/default-avatar.png";
      this.saving = false;
      Toast.show("Profile updated");
      this.render();
    } catch (err) {
      this.saving = false;
      Toast.show(err.message || "Failed to update profile");
      this.render();
    }
  }

  async submitPasswordHandler(e) {
    e.preventDefault();
    this.passwordMismatch = false;

    const form = e.target;
    const currentPassword = form.querySelector(
      '[name="currentPassword"]'
    ).value;
    const newPassword = form.querySelector('[name="newPassword"]').value;
    const confirmPassword = form.querySelector(
      '[name="confirmPassword"]'
    ).value;

    if (newPassword !== confirmPassword) {
      this.passwordMismatch = true;
      this.render();
      return;
    }

    try {
      const response = await apiFetch(
        `${App.apiBase}/users/${Auth.currentUser.id}/password`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ currentPassword, newPassword }),
        }
      );

      if (!response.ok) throw new Error((await response.json()).message);
      this.showPasswordDialog = false;
      Toast.show("Password updated");
      this.render();
    } catch (err) {
      Toast.show(err.message || "Failed to update password");
      this.render();
    }
  }

  render() {
    const template = html`
      <div>
        ${Header.render()}
        <div class="page-content">
          ${this.loading
            ? html`<sl-spinner></sl-spinner>`
            : html`
                <h1>Your Profile</h1>
                <div class="form-wrapper">
                  <form @submit=${this.submitHandler.bind(this)}>
                    <div class="avatar-section">
                      <img
                        src="${DOMPurify.sanitize(this.avatarPreview)}"
                        alt="Profile avatar"
                        class="avatar-preview"
                        @error=${(e) =>
                          (e.target.src = "/images/default-avatar.png")}
                        loading="lazy"
                      />
                      <sl-input
                        name="avatar"
                        type="file"
                        accept="image/*"
                        @change=${this.handleAvatarChange.bind(this)}
                        label="Upload Avatar"
                      ></sl-input>
                    </div>
                    <sl-input
                      name="firstName"
                      label="First Name"
                      value="${DOMPurify.sanitize(this.user.firstName)}"
                      required
                      autocomplete="given-name"
                    ></sl-input>
                    <sl-input
                      name="lastName"
                      label="Last Name"
                      value="${DOMPurify.sanitize(this.user.lastName)}"
                      required
                      autocomplete="family-name"
                    ></sl-input>
                    <sl-input
                      name="email"
                      type="email"
                      label="Email"
                      value="${DOMPurify.sanitize(this.user.email)}"
                      required
                      autocomplete="email"
                    ></sl-input>
                    <sl-textarea
                      name="bio"
                      label="Bio"
                      value="${DOMPurify.sanitize(this.user.bio)}"
                    ></sl-textarea>
                    <sl-button
                      type="submit"
                      variant="primary"
                      ?disabled=${this.saving}
                      ?loading=${this.saving}
                    >
                      Save Profile
                    </sl-button>
                    <sl-button
                      variant="default"
                      @click=${() => {
                        this.showPasswordDialog = true;
                        this.render();
                      }}
                    >
                      Change Password
                    </sl-button>
                  </form>
                </div>
                ${this.showPasswordDialog
                  ? html`
                      <sl-dialog
                        label="Change Password"
                        open
                        @sl-request-close=${() => {
                          this.showPasswordDialog = false;
                          this.render();
                        }}
                      >
                        <form @submit=${this.submitPasswordHandler.bind(this)}>
                          <sl-input
                            name="currentPassword"
                            type="password"
                            label="Current Password"
                            required
                            autocomplete="current-password"
                          ></sl-input>
                          <sl-input
                            name="newPassword"
                            type="password"
                            label="New Password"
                            required
                            autocomplete="new-password"
                            help-text=${this.passwordMismatch
                              ? "Passwords do not match"
                              : ""}
                            ?invalid=${this.passwordMismatch}
                          ></sl-input>
                          <sl-input
                            name="confirmPassword"
                            type="password"
                            label="Confirm New Password"
                            required
                            autocomplete="new-password"
                            help-text=${this.passwordMismatch
                              ? "Passwords do not match"
                              : ""}
                            ?invalid=${this.passwordMismatch}
                          ></sl-input>
                          <sl-button
                            slot="footer"
                            type="submit"
                            variant="primary"
                          >
                            Update Password
                          </sl-button>
                          <sl-button
                            slot="footer"
                            variant="default"
                            @click=${() => {
                              this.showPasswordDialog = false;
                              this.render();
                            }}
                          >
                            Cancel
                          </sl-button>
                        </form>
                      </sl-dialog>
                    `
                  : ""}
              `}
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new ProfileView();
