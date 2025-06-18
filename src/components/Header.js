// components/header.js

// components/Header.js

import { html } from "lit-html";
import Auth from "../Auth.js";
import { gotoRoute } from "../Router.js";

const Header = {
  render() {
    const isHost = Auth.currentUser?.accessLevel === 2;

    return html`
      <header class="site-header">
        <div class="header-content">
          <h1
            class="logo"
            @click=${() => gotoRoute(isHost ? "/host-home" : "/guest-home")}
          >
            Chinwag
          </h1>

          <sl-tab-group class="nav-tabs">
            <sl-tab
              slot="nav"
              panel="home"
              @click=${() => gotoRoute(isHost ? "/host-home" : "/guest-home")}
            >
              Home
            </sl-tab>
            <sl-tab
              slot="nav"
              panel="bookings"
              @click=${() =>
                gotoRoute(isHost ? "/host-bookings" : "/guest-bookings")}
            >
              Bookings
            </sl-tab>
            <sl-tab
              slot="nav"
              panel="profile"
              @click=${() => gotoRoute("/profile")}
            >
              Profile
            </sl-tab>
            <sl-tab slot="nav" panel="logout" @click=${() => Auth.signOut()}>
              Logout
            </sl-tab>
          </sl-tab-group>
        </div>
      </header>
    `;
  },
};

export default Header;
