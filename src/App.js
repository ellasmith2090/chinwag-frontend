// App.js

import Router from "./Router.js";

const App = {
  apiBase: "https://chinwag-backend.onrender.com",

  async init() {
    this.rootEl = document.getElementById("root");
    if (!this.rootEl) throw new Error("Root element #root not found");
    console.log("[App] Root element found, initializing Router");
    await Router.init();
  },
};

export default App;
