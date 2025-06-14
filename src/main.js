//main.js

import { gotoRoute } from "./Router.js";
import Toast from "./Toast.js";
import App from "./App.js";

const Auth = {
  currentUser: null,
  async signIn({ email, password }) {
    try {
      const response = await fetch(`${App.apiBase}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error((await response.json()).message);
      const { accessToken, user } = await response.json();
      localStorage.setItem("token", accessToken);
      this.currentUser = user;
      Toast.show("Welcome back!");
      gotoRoute(
        user.isFirstLogin
          ? user.accessLevel === 1
            ? "/guest-guide"
            : "/host-guide"
          : user.accessLevel === 1
          ? "/guest-home"
          : "/host-home"
      );
    } catch (err) {
      Toast.show(err.message || "Sign-in failed");
      throw err;
    }
  },
  async signUp({ firstName, lastName, email, password, accessLevel }) {
    try {
      const response = await fetch(`${App.apiBase}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          accessLevel,
        }),
      });
      if (!response.ok) throw new Error((await response.json()).message);
      Toast.show("Account created! Please sign in.");
      gotoRoute("/signin");
    } catch (err) {
      Toast.show(err.message || "Sign-up failed");
      throw err;
    }
  },
  async check() {
    const token = localStorage.getItem("token");
    if (!token) return false;
    try {
      const response = await fetch(`${App.apiBase}/auth/validate`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Invalid token");
      this.currentUser = (await response.json()).user;
      return true;
    } catch (err) {
      localStorage.removeItem("token");
      this.currentUser = null;
      return false;
    }
  },
  signOut() {
    localStorage.removeItem("token");
    this.currentUser = null;
    Toast.show("Signed out");
    gotoRoute("/signin");
  },
};

export default Auth;
