// router.js

import SignInView from "./src/views/SignIn.js";
import SignUpView from "./src/views/SignUp.js";
import GuestGuideView from "./src/views/GuestGuide.js";
import HostGuideView from "./src/views/HostGuide.js";
import ProfileView from "./src/views/Profile.js";
import GuestHomeView from "./src/views/GuestHome.js";
import HostHomeView from "./src/views/HostHome.js";
import GuestBookingsView from "./src/views/GuestBookings.js";
import HostBookingsView from "./src/views/HostBookings.js";
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
    const view = this.routes[path] || SignInView;
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

    view.init();
    view.render();
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
