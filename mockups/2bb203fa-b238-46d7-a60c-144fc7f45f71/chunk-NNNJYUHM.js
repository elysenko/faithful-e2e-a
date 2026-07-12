import {
  SocketService
} from "./chunk-BE3JJKRU.js";
import {
  Router
} from "./chunk-34OIK6OJ.js";
import {
  HttpClient,
  computed,
  environment,
  finalize,
  inject,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ODOZMLE5.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var ACCESS_KEY = "access_token";
var USER_KEY = "user";
var AUTH_FLAG = "isAuthenticated";
var DEMO_USER = {
  id: "me",
  name: "Jordan Avery",
  role: "admin",
  pictureUrl: "https://i.pravatar.cc/150?img=12",
  profileComplete: true
};
var AuthService = class _AuthService {
  constructor(router) {
    this.router = router;
    this.apiUrl = environment.apiUrl;
    this.http = inject(HttpClient);
    this.socket = inject(SocketService);
    this._user = signal(this.readUser());
    this.user = this._user.asReadonly();
    this.isLoggedIn = computed(() => !!this._user());
    this.isAdmin = computed(() => this._user()?.role === "admin");
    if (this._user() && localStorage.getItem(TOKEN_KEY)) {
      this.socket.connect(localStorage.getItem(TOKEN_KEY));
    }
  }
  readUser() {
    if (!localStorage.getItem(TOKEN_KEY))
      return null;
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : DEMO_USER;
  }
  /** Kicks off the real LinkedIn OAuth flow (backend redirect). */
  loginWithLinkedIn() {
    window.location.href = `${this.apiUrl}/auth/linkedin`;
  }
  /**
   * Completes the OAuth callback: persist the JWT, hydrate the session user
   * from GET {apiUrl}/auth/me, connect the realtime socket, then land on /feed.
   */
  completeOAuth(token) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCESS_KEY, token);
    localStorage.setItem(AUTH_FLAG, "true");
    this.http.get(`${this.apiUrl}/auth/me`).subscribe({
      next: (user) => {
        this.setUser(user);
        this.socket.connect(token);
        this.router.navigate(["/feed"]);
      },
      error: () => {
        this.router.navigate(["/login"], { queryParams: { error: "denied" } });
      }
    });
  }
  /** Stores the hydrated user in the signal and localStorage. */
  setUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this._user.set(user);
  }
  /**
   * Demo Mode bypass — lets reviewers and screenshot capture explore the full
   * authenticated UI without a live LinkedIn backend. Seeds an admin session.
   */
  demoLogin() {
    const token = "demo.jwt.token";
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCESS_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(DEMO_USER));
    localStorage.setItem(AUTH_FLAG, "true");
    this._user.set(DEMO_USER);
    this.socket.connect(token);
    this.router.navigate(["/feed"]);
  }
  logout() {
    this.http.post(`${this.apiUrl}/auth/logout`, {}).pipe(finalize(() => this.clearSession())).subscribe({ next: () => {
    }, error: () => {
    } });
  }
  clearSession() {
    this.socket.disconnect();
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(AUTH_FLAG);
    this._user.set(null);
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-NNNJYUHM.js.map
