// App.js

import Router from "./Router.js";

const App = {
  apiBase: "https://chinwag-backend.onrender.com",
  rootEl: null,

  async init() {
    this.rootEl = document.getElementById("root");
    if (!this.rootEl) throw new Error("Root element #root not found");
    console.log("[App] Initialising...");
    await Router.init();
  },
};

export default App;
