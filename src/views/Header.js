// router.js

import SignInView from "./SignInView.js";
import SignUpView from "./SignUp.js";
import GuestGuideView from "./GuestGuide.js";
import HostGuideView from "./HostGuide.js";
import ProfileView from "./views/Profile.js";
import GuestHomeView from "./GuestHome.js";
import HostHomeView from "./HostHome.js";
import GuestBookingsView from "./GuestBookings.js";
import HostBookingsView from "./HostBookings.js";
import Auth from "../Auth.js";

const Router = {
  routes: {
    "/SignIn": SignInView,
    "/SignUp": SignUpView,
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
    const view = this.routes[path] || SignInView;
    const isAuthenticated = await Auth.check();

    if (!isAuthenticated && !["/SignIn", "/SignUp"].includes(path)) {
      gotoRoute("/SignIn");
      return;
    }

    if (isAuthenticated) {
      const { accessLevel, isFirstLogin } = Auth.currentUser;
      if (isFirstLogin && !["/guest-guide", "/host-guide"].includes(path)) {
        gotoRoute(accessLevel === 1 ? "/guest-guide" : "/host-guide");
        return;
      }
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
  history.pushState({}, "", path);
  Router.route();
}

export default Router;
