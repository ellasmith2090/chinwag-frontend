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
    if (!this.rootEl) throw new Error("Root element #root not found");
    console.log("[App] Initialising...");
    await Router.init();
  },
};

export default App;
