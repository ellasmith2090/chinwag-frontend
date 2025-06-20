// router.js

import SignInView from "./views/SignIn.js";
import SignUpView from "./views/SignUp.js";
import GuestGuideView from "./views/GuestGuide.js";
import HostGuideView from "./views/HostGuide.js";
import ProfileView from "./views/Profile.js";
import GuestHomeView from "./views/GuestHome.js";
import HostHomeView from "./views/HostHome.js";
import GuestBookingsView from "./views/GuestBookings.js";
import HostBookingsView from "./views/HostBookings.js";
import Auth from "./Auth.js";

const Router = {
  routes: {
    "/signin": SignInView,
    "/signup": SignUpView,
    "/guest-guide": GuestGuideView,
    "/host-guide": HostGuideView,
    "/profile": ProfileView,
    "/guest-home": GuestHomeView,
    "/host-home": HostHomeView,
    "/guest-bookings": GuestBookingsView,
    "/host-bookings": HostBookingsView,
  },
  async init() {
    window.addEventListener("popstate", () => this.route());
    await this.route();
  },
  async route() {
    const path = window.location.pathname;
    console.log("[Router] Routing to:", path);
    const View = this.routes[path] || SignInView;
    console.log("[Router] View:", View);
    if (typeof View !== "function") {
      console.error(
        "[Router] Error: View is not a constructor for path:",
        path,
        "View:",
        View
      );
      document.querySelector("app-toast")?.show("Failed to load page", "error");
      return;
    }
    const isAuthenticated = await Auth.check();
    if (!isAuthenticated && !["/signin", "/signup"].includes(path)) {
      gotoRoute("/signin");
      return;
    }
    if (isAuthenticated) {
      const { accessLevel } = Auth.currentUser;
      if (path === "/guest-guide" && accessLevel !== 1) {
        gotoRoute("/host-home");
        return;
      }
      if (path === "/host-guide" && accessLevel !== 2) {
        gotoRoute("/guest-home");
        return;
      }
      if (path === "/guest-home" && accessLevel !== 1) {
        gotoRoute("/host-home");
        return;
      }
      if (path === "/host-home" && accessLevel !== 2) {
        gotoRoute("/guest-home");
        return;
      }
      if (path === "/guest-bookings" && accessLevel !== 1) {
        gotoRoute("/host-home");
        return;
      }
      if (path === "/host-bookings" && accessLevel !== 2) {
        gotoRoute("/guest-home");
        return;
      }
    }
    try {
      const view = new View();
      view.init();
      view.render();
    } catch (err) {
      console.error("[Router] Error instantiating view for path:", path, err);
      document.querySelector("app-toast")?.show("Failed to load page", "error");
    }
  },
};

export function gotoRoute(path) {
  if (process.env.NODE_ENV === "development") {
    console.log("[Router] Navigating to:", path);
  }
  history.pushState({}, "", path);
  Router.route();
}

export function anchorRoute(e) {
  e.preventDefault();
  const path = e.currentTarget.getAttribute("href");
  if (path) {
    if (process.env.NODE_ENV === "development") {
      console.log("[Router] Anchor route to:", path);
    }
    gotoRoute(path);
  }
}

export default Router;
