// apiFetch.js

// apiFetch.js

import Auth, { isTokenExpired } from "./Auth.js";
import { gotoRoute } from "./Router.js";

async function apiFetch(url, options = {}) {
  const token = localStorage.getItem("token");
  if (token && isTokenExpired(token)) {
    document
      .querySelector("app-toast")
      ?.show("Session expired. Please sign in again.", "error");
    Auth.signOut();
    gotoRoute("/signin");
    throw new Error("JWT expired");
  }
  options.headers = options.headers || {};
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  if (!(options.body instanceof FormData)) {
    options.headers["Content-Type"] = "application/json";
  }
  try {
    const res = await fetch(url, options);
    if (res.status === 401 || res.status === 403) {
      document
        .querySelector("app-toast")
        ?.show("Unauthorized. Please sign in again.", "error");
      Auth.signOut();
      gotoRoute("/signin");
      throw new Error("Unauthorized or expired token");
    }
    return res;
  } catch (err) {
    document
      .querySelector("app-toast")
      ?.show("Network error – please check your connection.", "error");
    console.error("[apiFetch] Error:", err);
    throw err;
  }
}

export default apiFetch;
