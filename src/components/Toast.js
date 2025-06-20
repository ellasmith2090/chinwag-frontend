// Toast.js

import { LitElement, html } from "lit";

class AppToast extends LitElement {
  static properties = {
    message: { type: String },
    type: { type: String, attribute: "data-type" },
    visible: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.message = "";
    this.type = "info";
    this.visible = false;
  }

  show(message, type = "info") {
    this.message = message;
    this.type = type;
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
    }, 3000);
  }

  render() {
    return html`<span>${this.message}</span>`;
  }
}

// Prevent multiple registrations
if (!customElements.get("app-toast")) {
  customElements.define("app-toast", AppToast);
}

export default AppToast;
