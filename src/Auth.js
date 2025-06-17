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

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Sign-in failed");
      }

      const { accessToken, user } = await response.json();
      localStorage.setItem("token", accessToken);
      this.currentUser = user;

      Toast.show(`Welcome back, ${user.firstName}!`);

      const redirectPath = user.isFirstLogin
        ? user.accessLevel === 1
          ? "/guest-guide"
          : "/host-guide"
        : user.accessLevel === 1
        ? "/guest-home"
        : "/host-home";

      gotoRoute(redirectPath);
    } catch (err) {
      Toast.show(
        err.message || "Failed to sign in. Please check your connection."
      );
      console.error("[Auth] signIn failed:", err);
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

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Sign-up failed");
      }

      Toast.show("Account created! Please sign in.");
      gotoRoute("/signin");
    } catch (err) {
      Toast.show(
        err.message || "Failed to sign up. Please check your connection."
      );
      console.error("[Auth] signUp failed:", err);
      throw err;
    }
  },

  async check() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.currentUser = null;
      return false;
    }

    try {
      const response = await fetch(`${App.apiBase}/auth/validate`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error("Invalid token");
      }

      this.currentUser = (await response.json()).user;
      return true;
    } catch (err) {
      console.warn("[Auth] Session check failed:", err.message);
      localStorage.removeItem("token");
      this.currentUser = null;
      return false;
    }
  },

  signOut() {
    localStorage.removeItem("token");
    this.currentUser = null;
    Toast.show("Signed out successfully");
    gotoRoute("/signin");
  },
};

export default Auth;
