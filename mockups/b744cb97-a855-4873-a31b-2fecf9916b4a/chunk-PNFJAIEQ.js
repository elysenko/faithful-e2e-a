import {
  HttpClient,
  Router,
  computed,
  map,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UQ66P35U.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "/api"
};

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var ACCESS_KEY = "access_token";
var USER_KEY = "user";
var ROLE_KEY = "role";
var AUTH_FLAG = "isAuthenticated";
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.apiUrl = environment.apiUrl;
    this._user = signal(this.readUser());
    this.user = this._user.asReadonly();
    this.isLoggedIn = computed(() => !!this._user());
    this.role = computed(() => this._user()?.role ?? null);
    this.isEditor = computed(() => this._user()?.role === "editor");
  }
  /** Verify editor credentials against the backend and persist the returned JWT + user. */
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(map((res) => this.handleAuth(res)));
  }
  /**
   * Demo Mode — bypasses the live backend so reviewers can inspect the full
   * editor UI (and the screenshot pipeline can capture write controls).
   * Logs in as the seeded editor and lands on the bills list.
   */
  demoLogin() {
    const demoUser = {
      id: "demo-editor",
      email: "editor@beehivewatch.dev",
      role: "editor",
      name: "Demo Editor"
    };
    this.persist(demoUser, "demo-token");
    this.router.navigate(["/bills"]);
  }
  logout() {
    [TOKEN_KEY, ACCESS_KEY, USER_KEY, ROLE_KEY, AUTH_FLAG, "token"].forEach((k) => localStorage.removeItem(k));
    this._user.set(null);
    this.router.navigate(["/bills"]);
  }
  hasRole(...roles) {
    const r = this.role();
    return !!r && roles.includes(r);
  }
  handleAuth(res) {
    const token = res.access_token ?? res.token ?? "";
    this.persist(res.user, token);
    return { user: res.user, token };
  }
  persist(user, token) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCESS_KEY, token);
    localStorage.setItem("token", token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(ROLE_KEY, user.role);
    localStorage.setItem(AUTH_FLAG, "true");
    this._user.set(user);
  }
  readUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-PNFJAIEQ.js.map
