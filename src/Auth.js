// auth.js

import { gotoRoute } from "./Router.js";
import Toast from "./Toast.js";
import App from "./App.js";

const Auth = {
  currentUser: null,
  async signIn({ email, password }) {
    try {
      console.log(
        "[Auth] Attempting sign-in to:",
        `${App.apiBase}/auth/signin`
      );
      const response = await fetch(`${App.apiBase}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const errorData = await response.text();
        console.error("[Auth] Sign-in response:", errorData);
        try {
          const jsonError = JSON.parse(errorData);
          throw new Error(jsonError.message || "Sign-in failed");
        } catch {
          throw new Error("Server returned invalid response");
        }
      }
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
      console.error("[Auth] signIn failed:", err.message);
      throw err;
    }
  },
  async signUp({ firstName, lastName, email, password, accessLevel }) {
    try {
      console.log(
        "[Auth] Attempting sign-up to:",
        `${App.apiBase}/auth/signup`
      );
      const response = await fetch(`${App.apiBase}/auth/signup`, {
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
      if (!response.ok) {
        const errorData = await response.text();
        console.error("[Auth] Sign-up response:", errorData);
        try {
          const jsonError = JSON.parse(errorData);
          throw new Error(jsonError.message || "Sign-up failed");
        } catch {
          throw new Error("Server returned invalid response");
        }
      }
      const { accessToken, user } = await response.json();
      localStorage.setItem("token", accessToken);
      this.currentUser = user;
      Toast.show("Account created!");
      gotoRoute(user.accessLevel === 1 ? "/guest-guide" : "/host-guide");
    } catch (err) {
      console.error("[Auth] signUp failed:", err.message);
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
      if (!response.ok) {
        localStorage.removeItem("token");
        return false;
      }
      this.currentUser = await response.json();
      return true;
    } catch (err) {
      console.error("[Auth] check failed:", err.message);
      localStorage.removeItem("token");
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
