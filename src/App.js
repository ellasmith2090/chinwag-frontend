// App.js
import Router from "./Router.js";

const App = {
  apiBase: process.env.API_BASE_URL || "http://localhost:3000",
  rootEl: null,

  async init() {
    this.rootEl = document.getElementById("root");
    if (!this.rootEl) throw new Error("Root element #root not found");

    console.log("[App] Initialising...");
    await Router.init();
  },
};

export default App;
