import {
  HttpClient,
  Router,
  computed,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QZ7UG3YY.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api/v1"
};

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var USER_KEY = "user";
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.apiUrl = environment.apiUrl;
    this._token = signal(localStorage.getItem(TOKEN_KEY));
    this._user = signal(this.readUser());
    this.isLoggedIn = computed(() => !!this._token());
    this.token = this._token.asReadonly();
    this.user = this._user.asReadonly();
    this.isAdmin = computed(() => this._user()?.role === "admin");
  }
  /** Admin credential login. POST /admin/login -> { token }. */
  adminLogin(username, password) {
    return this.http.post(`${this.apiUrl}/admin/login`, { username, password }).pipe(tap((response) => {
      this.persistSession(response.token, { username, role: response.role ?? "admin" });
    }));
  }
  /**
   * Demo Mode bypass — lets reviewers and the screenshot system reach the
   * authenticated admin UI without a live backend. Seeds mock admin credentials
   * and navigates to the admin dashboard.
   */
  demoLogin() {
    const demoUser = { username: "demo-admin", role: "admin" };
    const demoToken = "demo-token";
    this.persistSession(demoToken, demoUser);
    localStorage.setItem("access_token", demoToken);
    localStorage.setItem("isAuthenticated", "true");
    this.router.navigate(["/admin"]);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem("access_token");
    localStorage.removeItem("isAuthenticated");
    this._token.set(null);
    this._user.set(null);
    this.router.navigate(["/admin/login"]);
  }
  persistSession(token, user) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this._token.set(token);
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
//# sourceMappingURL=chunk-X5DHVSOG.js.map
