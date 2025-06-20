// views/profile.js

import { html, render } from "lit-html";
import App from "../App.js";
import Auth from "../Auth.js";
import apiFetch from "../apiFetch.js";
import DOMPurify from "dompurify";
import Header from "../components/Header.js";
import defaultAvatar from "../images/defaultavatar.png";

class ProfileView {
  constructor() {
    this.user = null;
    this.loading = true;
    this.saving = false;
    this.passwordMismatch = false;
    this.avatarPreview = defaultAvatar;
    this.selectedFile = null;
    this.fileLoading = false;
  }

  init() {
    document.title = "Profile - Chinwag";
    this.fetchUser();
  }

  disconnectedCallback() {
    if (this.avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(this.avatarPreview);
    }
  }

  getSafeAvatarUrl(avatar) {
    if (typeof avatar === "string" && avatar.startsWith("/uploads")) {
      return `${App.apiBase.replace("/api", "")}${avatar}`;
    }
    return defaultAvatar;
  }

  async fetchUser() {
    try {
      console.log("[ProfileView] Fetching user for ID:", Auth.currentUser.id);
      const response = await apiFetch(
        `${App.apiBase}/users/${Auth.currentUser.id}`
      );
      if (!response.ok) throw new Error("Failed to fetch profile");
      this.user = await response.json();
      this.avatarPreview = this.getSafeAvatarUrl(this.user.avatar);
      this.loading = false;
      this.render();
    } catch (err) {
      this.loading = false;
      console.error("[ProfileView] Fetch error:", err);
      this.render();
    }
  }

  handleAvatarChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    this.fileLoading = true;
    this.render();
    const validTypes = ["image/png", "image/jpeg"];
    const maxSize = 2 * 1024 * 1024;
    if (!validTypes.includes(file.type)) {
      document
        .querySelector("app-toast")
        .show("Please select a PNG or JPEG image", "error");
      this.fileLoading = false;
      this.render();
      return;
    }
    if (file.size > maxSize) {
      document
        .querySelector("app-toast")
        .show("Image must be smaller than 2MB", "error");
      this.fileLoading = false;
      this.render();
      return;
    }
    if (this.avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(this.avatarPreview);
    }
    this.selectedFile = file;
    this.avatarPreview = URL.createObjectURL(file);
    this.fileLoading = false;
    this.render();
  }

  resetAvatarPreview() {
    if (this.avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(this.avatarPreview);
    }
    this.selectedFile = null;
    this.avatarPreview = this.getSafeAvatarUrl(this.user.avatar);
    this.render();
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
    const newPassword = form.querySelector('[name="newPassword"]').value;
    const confirmPassword = form.querySelector(
      '[name="confirmPassword"]'
    ).value;
    if (newPassword && newPassword !== confirmPassword) {
      this.passwordMismatch = true;
      this.saving = false;
      this.render();
      return;
    }
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      if (this.selectedFile) formData.append("avatar", this.selectedFile);
      if (newPassword) formData.append("password", newPassword);
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
      if (this.avatarPreview.startsWith("blob:")) {
        URL.revokeObjectURL(this.avatarPreview);
      }
      this.avatarPreview = this.getSafeAvatarUrl(updatedUser.avatar);
      this.selectedFile = null;
      this.passwordMismatch = false;
      this.saving = false;
      document.querySelector("app-toast").show("Profile updated");
      this.render();
    } catch (err) {
      this.saving = false;
      document
        .querySelector("app-toast")
        .show(err.message || "Failed to update profile", "error");
      console.error("[ProfileView] Update error:", err);
      this.render();
    }
  }

  render() {
    if (typeof this.avatarPreview !== "string") {
      console.warn(
        "[ProfileView] avatarPreview is not a string:",
        this.avatarPreview
      );
      this.avatarPreview = defaultAvatar;
    }
    const template = html`
      <div>
        ${Header.render()}
        <div class="page-content">
          ${this.loading
            ? html`<div>Loading...</div>`
            : html`
                <h1>Your Profile</h1>
                <div class="avatar-section">
                  <div class="avatar-wrapper">
                    <img
                      src="${this.avatarPreview}"
                      alt="User Avatar"
                      class="avatar-preview"
                      @error=${(e) => {
                        console.error(
                          "[ProfileView] Image load error for src:",
                          e.target.src
                        );
                        e.target.src = defaultAvatar;
                      }}
                    />
                  </div>
                  <div class="avatar-controls">
                    <label class="upload-button">
                      <input
                        name="avatar"
                        type="file"
                        accept="image/png,image/jpeg"
                        @change=${this.handleAvatarChange.bind(this)}
                        ?disabled=${this.fileLoading}
                      />
                      <button ?disabled=${this.fileLoading}>
                        Choose Image
                      </button>
                    </label>
                    ${this.selectedFile
                      ? html`
                          <button @click=${this.resetAvatarPreview.bind(this)}>
                            Remove Selected Image
                          </button>
                        `
                      : ""}
                  </div>
                </div>
                <div class="form-wrapper">
                  <form @submit=${this.submitHandler.bind(this)}>
                    <label>
                      First Name
                      <input
                        name="firstName"
                        value="${DOMPurify.sanitize(this.user.firstName)}"
                        required
                      />
                    </label>
                    <label>
                      Last Name
                      <input
                        name="lastName"
                        value="${DOMPurify.sanitize(this.user.lastName)}"
                        required
                      />
                    </label>
                    <label>
                      Email
                      <input
                        name="email"
                        type="email"
                        value="${DOMPurify.sanitize(this.user.email)}"
                        required
                      />
                    </label>
                    <label>
                      New Password
                      <input name="newPassword" type="password" />
                    </label>
                    <label>
                      Confirm New Password
                      <input
                        name="confirmPassword"
                        type="password"
                        class=${this.passwordMismatch ? "invalid" : ""}
                      />
                      ${this.passwordMismatch
                        ? html`<span>Passwords do not match</span>`
                        : ""}
                    </label>
                    <button type="submit" ?disabled=${this.saving}>
                      ${this.saving ? "Saving..." : "Save Changes"}
                    </button>
                  </form>
                </div>
              `}
        </div>
        <app-toast></app-toast>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default ProfileView;
