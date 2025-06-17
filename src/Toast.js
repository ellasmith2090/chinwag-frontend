import { html, render } from "lit-html";

const toastContainer = document.createElement("div");
toastContainer.className = "toast-container";
document.body.appendChild(toastContainer);

const Toast = {
  show(message, variant = "primary", duration = 3000) {
    const alert = document.createElement("sl-alert");
    alert.variant = variant;
    alert.duration = duration;
    alert.closable = true;
    alert.innerHTML = message;

    render(html`${alert}`, toastContainer);
    alert.toast();
  },
};

export default Toast;
