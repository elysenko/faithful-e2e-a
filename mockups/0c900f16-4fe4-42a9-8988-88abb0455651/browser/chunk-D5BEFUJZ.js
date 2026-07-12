import {
  Router
} from "./chunk-K67ZUJ4Y.js";
import {
  HttpClient,
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-N4ECCACJ.js";

// src/app/core/auth.service.ts
var STORAGE_KEYS = {
  token: "token",
  accessToken: "access_token",
  user: "user",
  isAuthenticated: "isAuthenticated"
};
var AuthService = class _AuthService {
  constructor() {
    this.router = inject(Router);
    this.http = inject(HttpClient);
    this.authState = signal(this.readPersistedAuth());
    this.currentUser = signal(this.readPersistedUser());
    this.isAuthenticated = computed(() => this.authState());
    this.user = computed(() => this.currentUser());
  }
  readPersistedAuth() {
    try {
      return localStorage.getItem(STORAGE_KEYS.isAuthenticated) === "true";
    } catch {
      return false;
    }
  }
  readPersistedUser() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.user);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  persist(user, token) {
    try {
      localStorage.setItem(STORAGE_KEYS.token, token);
      localStorage.setItem(STORAGE_KEYS.accessToken, token);
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
      localStorage.setItem(STORAGE_KEYS.isAuthenticated, "true");
    } catch {
    }
  }
  /**
   * Admin credential login against the NestJS auth API. On success the issued
   * JWT is persisted (the interceptor attaches it to admin-only requests) and
   * the admin is routed to the console. Errors propagate so the login form can
   * show "Invalid email or password".
   */
  login(email, password) {
    return this.http.post("/api/auth/login", { email, password }).pipe(tap((res) => {
      const user = {
        id: res.user.id,
        email: res.user.email,
        name: res.user.name ?? res.user.email,
        role: "admin"
      };
      this.persist(user, res.token);
      this.currentUser.set(user);
      this.authState.set(true);
      this.router.navigate(["/admin/jobs"]);
    }));
  }
  /**
   * Demo Mode bypass — flips the client-side auth signal so the admin console
   * is reachable without credentials. Admin-only API calls still require a real
   * JWT, so live data only populates after a genuine sign-in.
   */
  demoLogin() {
    const user = {
      id: "admin-demo",
      email: "demo.admin@noaa-viz.local",
      name: "Demo Admin",
      role: "admin"
    };
    this.persist(user, "demo-mode");
    this.currentUser.set(user);
    this.authState.set(true);
    this.router.navigate(["/admin/jobs"]);
  }
  logout() {
    try {
      Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
    } catch {
    }
    this.currentUser.set(null);
    this.authState.set(false);
    this.router.navigate(["/admin/login"]);
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-D5BEFUJZ.js.map
