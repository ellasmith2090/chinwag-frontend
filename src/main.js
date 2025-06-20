//main.js

import "./styles/main.scss";
import App from "./App.js";
import Router from "./Router.js";
import "./components/Header.js";
import "./components/Toast.js";

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
