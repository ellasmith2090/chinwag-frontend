//main.js

import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/shoelace.js";
import "./styles/main.scss";
import App from "./App.js";

console.log("[main.js] Clearing root element");
const rootEl = document.getElementById("root");
rootEl.innerHTML = "";

console.log("[main.js] Initializing App");
App.init().catch((err) => {
  rootEl.innerHTML = `<p style="color:red;">App failed to load: ${err.message}</p>`;
  console.error("[main.js] App init failed:", err);
});
