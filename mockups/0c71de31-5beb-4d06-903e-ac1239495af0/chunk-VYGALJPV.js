import {
  HttpClient,
  Router
} from "./chunk-AWJ4GWCF.js";
import {
  computed,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-T5L7N4YZ.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api/v1"
};

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
    this.isAdmin = computed(() => this._user()?.role === "admin");
  }
  persist(res) {
    localStorage.setItem(TOKEN_KEY, res.token);
    localStorage.setItem(USER_KEY, JSON.stringify(res.user));
    this._token.set(res.token);
    this._user.set(res.user);
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(tap((res) => this.persist(res)));
  }
  register(name, email, password) {
    return this.http.post(`${this.apiUrl}/auth/register`, { name, email, password }).pipe(tap((res) => this.persist(res)));
  }
  /**
   * Demo Mode — bypasses the live backend so reviewers can inspect the full
   * authenticated UI (and the screenshot pipeline can capture every view).
   */
  demoLogin() {
    const demoUser = {
      id: "demo-admin",
      name: "Demo Admin",
      email: "admin@example.com",
      role: "admin"
    };
    const token = "demo-token";
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem("token", token);
    localStorage.setItem("access_token", token);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem(USER_KEY, JSON.stringify(demoUser));
    localStorage.setItem("user", JSON.stringify(demoUser));
    this._token.set(token);
    this._user.set(demoUser);
    this.router.navigate(["/workspaces"]);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem("token");
    localStorage.removeItem("access_token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    this._token.set(null);
    this._user.set(null);
    this.router.navigate(["/login"]);
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
//# sourceMappingURL=chunk-VYGALJPV.js.map
