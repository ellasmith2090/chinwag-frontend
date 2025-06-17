// App.js

import Router from "./Router.js";

const isLocal = window.location.hostname === "localhost";

const App = {
  apiBase: isLocal
    ? "http://localhost:3000"
    : "https://chinwag-backend.onrender.com",
  rootEl: null,

  async init() {
    this.rootEl = document.getElementById("root");
    if (!this.rootEl) throw new Error("Root element #root not found");
    console.log("[App] Root element found, initializing Router");
    await Router.init();
  },
};

export default App;
