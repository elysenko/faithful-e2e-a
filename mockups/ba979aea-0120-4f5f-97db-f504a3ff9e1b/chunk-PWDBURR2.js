import {
  environment
} from "./chunk-YUSCFUEV.js";
import {
  HttpClient,
  Router,
  computed,
  of,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RUEYC2SA.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var USER_KEY = "auth_user";
function readUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.apiUrl = environment.apiUrl;
    this._token = signal(localStorage.getItem(TOKEN_KEY));
    this._user = signal(readUser());
    this.isLoggedIn = computed(() => !!this._token());
    this.token = this._token.asReadonly();
    this.user = this._user.asReadonly();
    this.role = computed(() => this._user()?.role ?? null);
    this.isAdmin = computed(() => this._user()?.role === "admin");
  }
  /**
   * Mockup login: resolves locally so every screen is reachable without a live backend.
   * `admin@demo` (or any email containing "admin") yields an admin session so reviewers
   * can inspect the admin UI. All other emails yield a shopper (role `user`) session.
   */
  login(email, _password) {
    const isAdmin = /admin/i.test(email);
    const user = {
      id: isAdmin ? "u-admin" : "u-shopper",
      name: isAdmin ? "Admin User" : "Shopper",
      email,
      role: isAdmin ? "admin" : "user"
    };
    this.persistSession(user, `mock-token-${user.role}`);
    return of({ user, token: `mock-token-${user.role}` });
  }
  signup(name, email, _password) {
    const user = { id: "u-shopper", name, email, role: "user" };
    this.persistSession(user, "mock-token-user");
    return of({ user, token: "mock-token-user" });
  }
  /** Demo Mode bypass — logs in as admin and jumps into the catalog. */
  demoLogin() {
    const user = {
      id: "u-admin",
      name: "Demo Admin",
      email: "admin@demo",
      role: "admin"
    };
    this.persistSession(user, "mock-token-admin");
    this.router.navigate(["/catalog"]);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem("token");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    this._token.set(null);
    this._user.set(null);
    this.router.navigate(["/login"]);
  }
  persistSession(user, token) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("access_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", "true");
    this._token.set(token);
    this._user.set(user);
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
//# sourceMappingURL=chunk-PWDBURR2.js.map
