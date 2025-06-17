// Toast.js
import { html, render } from "lit-html";

const Toast = {
  show(message, variant = "primary", duration = 3000) {
    let container = document.getElementById("toast-container");

    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast-wrapper";

    const template = html`
      <sl-alert
        variant="${variant}"
        duration="${duration}"
        closable
        class="toast"
      >
        <sl-icon slot="icon" name="info-circle"></sl-icon>
        ${message}
      </sl-alert>
    `;

    render(template, toast);
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, duration + 300);
  },
};

export default Toast;
