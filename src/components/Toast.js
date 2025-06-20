// Toast.js

import { LitElement, html, css } from "lit";

class AppToast extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 12px 24px;
      border-radius: 4px;
      color: white;
      font-family: var(--font-stack);
      display: none;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    :host([visible]) {
      display: block;
    }
    :host([data-type="info"]) {
      background-color: var(--toast-bg, #4caf50);
    }
    :host([data-type="error"]) {
      background-color: #f44336;
    }
  `;

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

if (!customElements.get("app-toast")) {
  customElements.define("app-toast", AppToast);
}

export default AppToast;
