import { html, render } from "lit-html";

const Toast = {
  show(message, variant = "primary", duration = 3000) {
    const toastContainer = document.createElement("div");
    toastContainer.style.position = "fixed";
    toastContainer.style.top = "20px";
    toastContainer.style.right = "20px";
    toastContainer.style.zIndex = "1000";
    document.body.appendChild(toastContainer);

    const template = html`
      <sl-alert
        variant="${variant}"
        duration="${duration}"
        closable
        style="margin-bottom: 10px;"
      >
        <sl-icon slot="icon" name="info-circle"></sl-icon>
        ${message}
      </sl-alert>
    `;
    render(template, toastContainer);

    setTimeout(() => {
      toastContainer.remove();
    }, duration + 500);
  },
};

export default Toast;
