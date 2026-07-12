import {
  HttpClient,
  Router,
  computed,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UJBMV62H.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api/v1"
};

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var USER_KEY = "auth_user";
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.apiUrl = environment.apiUrl;
    this._token = signal(localStorage.getItem(TOKEN_KEY));
    this._user = signal(this.readStoredUser());
    this.isLoggedIn = computed(() => !!this._token());
    this.token = this._token.asReadonly();
    this.currentUser = this._user.asReadonly();
  }
  readStoredUser() {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
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
  signup(name, email, password) {
    return this.http.post(`${this.apiUrl}/auth/register`, { name, email, password }).pipe(tap((res) => this.persist(res)));
  }
  /**
   * Demo Mode bypass — lets reviewers and screenshot automation reach the
   * authenticated UI without a live backend. Seeds mock admin credentials
   * and navigates to the dashboard.
   */
  demoLogin() {
    const user = {
      id: "demo-admin",
      name: "Demo Admin",
      email: "demo@nimbus.crm",
      role: "admin"
    };
    const token = "demo-token";
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("access_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", "true");
    this._token.set(token);
    this._user.set(user);
    this.router.navigate(["/dashboard"]);
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
//# sourceMappingURL=chunk-2Y3HOCZI.js.map
