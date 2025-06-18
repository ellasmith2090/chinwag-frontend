// apiFetch.js

import Auth, { isTokenExpired } from "./Auth.js";
import { gotoRoute } from "./Router.js";
import Toast from "./components/Toast.js";

async function apiFetch(url, options = {}) {
  const token = localStorage.getItem("token");

  if (token && isTokenExpired(token)) {
    Toast.show("Session expired. Please sign in again.");
    Auth.signOut();
    gotoRoute("/signin");
    throw new Error("JWT expired");
  }

  if (token) {
    options.headers = {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    };
  }

  try {
    const res = await fetch(url, options);

    if (res.status === 401 || res.status === 403) {
      Toast.show("Unauthorized. Please sign in again.");
      Auth.signOut();
      gotoRoute("/signin");
      throw new Error("Unauthorized or expired token");
    }

    return res;
  } catch (err) {
    Toast.show("Network error – please check your connection.");
    console.error("[apiFetch] Error:", err);
    throw err;
  }
}

export default apiFetch;
