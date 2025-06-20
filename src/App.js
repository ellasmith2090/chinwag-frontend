//app.js

import Router from "./Router.js";

const App = {
  // Switch base URL depending on environment
  apiBase:
    window.location.hostname === "localhost"
      ? "http://localhost:3000/api"
      : "https://chinwag-backend.onrender.com/api",

  rootEl: null,

  async init() {
    this.rootEl = document.getElementById("root");
    if (!this.rootEl) {
      console.error("[App] Root element #root not found");
      throw new Error("Root element #root not found");
    }
    console.log("[App] Initialising with apiBase:", this.apiBase);
    await Router.init();
  },
};

export default App;
