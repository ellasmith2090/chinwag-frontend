// App.js

import Router from "./Router.js";

const App = {
  apiBase: process.env.API_BASE_URL || "http://localhost:3000",
  rootEl: document.getElementById("root"),
  async init() {
    await Router.init();
  },
};

export default App;
