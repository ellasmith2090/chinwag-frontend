//main.js

import "./styles/main.scss"; // Already present, ensure no errors
import App from "./App.js";

// Clear loading message before init to avoid interference
document.getElementById("root").innerHTML = "";

// Initialize the app (includes routing)
App.init().catch((err) => {
  document.getElementById("root").innerHTML = `
    <p style="color:red;">App failed to load: ${err.message}</p>
  `;
  console.error("[main.js] App init failed:", err);
});
