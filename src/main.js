//main.js

import "@shoelace-style/shoelace/dist/shoelace.js";
import "./styles/main.scss";
import App from "./App.js";

// Clear rootEl and log
console.log("[main.js] Clearing root element");
document.getElementById("root").innerHTML = "";

// Initialize the app
console.log("[main.js] Initializing App");
App.init().catch((err) => {
  document.getElementById("root").innerHTML = `
    <p style="color:red;">App failed to load: ${err.message}</p>
  `;
  console.error("[main.js] App init failed:", err);
});
