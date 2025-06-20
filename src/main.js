// src/main.js

// src/main.js

import "./styles/main.scss";
import App from "./App.js";
import Router from "./Router.js";
import "./components/Header.js";
import "./components/Toast.js";

// Set the base path for Shoelace assets (only if base-path.js is present)
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
setBasePath("/node_modules/@shoelace-style/shoelace/dist");

// Import the Shoelace loader to register all components
import { defineCustomElements } from "@shoelace-style/shoelace/dist/components/shoelace.js";
defineCustomElements().catch((err) => {
  console.error("Failed to define Shoelace custom elements:", err);
});

// Import the light theme
import "@shoelace-style/shoelace/dist/themes/light.css";

console.log("[main.js] Clearing root element");
const rootEl = document.getElementById("root");
rootEl.innerHTML = "";

console.log("[main.js] Initializing App");
App.init().catch((err) => {
  rootEl.innerHTML = `<p style="color:red;">App failed to load: ${err.message}</p>`;
  console.error("[main.js] App init failed:", err);
});

console.log("[main.js] Initializing Router");
Router.init().catch((err) => {
  console.error("[main.js] Router init failed:", err);
});
