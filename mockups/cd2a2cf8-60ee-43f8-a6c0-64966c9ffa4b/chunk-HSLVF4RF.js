import {
  HttpClient,
  Router,
  computed,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JG2HHNQL.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api/v1"
};

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var USER_KEY = "auth_user";
function readStoredUser() {
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
    this._user = signal(readStoredUser());
    this.isLoggedIn = computed(() => !!this._token());
    this.token = this._token.asReadonly();
    this.user = this._user.asReadonly();
    this.role = computed(() => this._user()?.role ?? null);
    this.isAdmin = computed(() => this._user()?.role === "admin");
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(tap((response) => this.persist(response)));
  }
  signup(name, email, password) {
    return this.http.post(`${this.apiUrl}/auth/register`, {
      name,
      email,
      password,
      passwordconf: password
    }).pipe(tap((response) => this.persist(response)));
  }
  /** Demo bypass — sets a mock admin session so reviewers can inspect the full UI. */
  demoLogin(role = "admin") {
    const user = {
      id: role === "admin" ? "demo-admin" : "demo-shopper",
      name: role === "admin" ? "Demo Admin" : "Demo Shopper",
      email: role === "admin" ? "admin@demo" : "shopper@demo",
      role
    };
    this.persist({ token: `demo-${role}-token`, user });
    localStorage.setItem("access_token", `demo-${role}-token`);
    localStorage.setItem("isAuthenticated", "true");
    this.router.navigate([role === "admin" ? "/admin/products" : "/catalog"]);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem("access_token");
    localStorage.removeItem("isAuthenticated");
    this._token.set(null);
    this._user.set(null);
    this.router.navigate(["/login"]);
  }
  persist(response) {
    localStorage.setItem(TOKEN_KEY, response.token);
    this._token.set(response.token);
    if (response.user) {
      localStorage.setItem(USER_KEY, JSON.stringify(response.user));
      this._user.set(response.user);
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
//# sourceMappingURL=chunk-HSLVF4RF.js.map
