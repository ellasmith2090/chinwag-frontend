//main.js

import "./styles/main.scss"; // Import SCSS for Parcel to bundle
import App from "./App.js";

// Optional: show a quick loading message
document.getElementById("root").innerHTML = "<p>Loading Chinwag...</p>";

// Initialize the app (includes routing)
App.init().catch((err) => {
  document.getElementById("root").innerHTML = `
    <p style="color:red;">App failed to load: ${err.message}</p>
  `;
  console.error("[main.js] App init failed:", err);
});
