import {
  HttpClient,
  Router
} from "./chunk-VMQX45X4.js";
import {
  computed,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VZ6O3Y2G.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api/v1"
};

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var USER_KEY = "user";
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
    this.isPlanner = computed(() => this._user()?.role === "admin");
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(tap((response) => this.persistSession(response.token, response.user)));
  }
  register(name, email, password, passwordconf) {
    return this.http.post(`${this.apiUrl}/auth/register`, {
      name,
      email,
      password,
      passwordconf
    }).pipe(tap((response) => this.persistSession(response.token, response.user)));
  }
  /** Demo Mode — lets reviewers inspect the authenticated planner UI without a live backend. */
  demoLogin() {
    const demoUser = {
      id: "demo-admin",
      name: "Demo Planner",
      email: "admin@example.com",
      role: "admin"
    };
    const demoToken = "demo-token";
    localStorage.setItem("access_token", demoToken);
    localStorage.setItem("isAuthenticated", "true");
    this.persistSession(demoToken, demoUser);
    this.router.navigate(["/projects"]);
  }
  persistSession(token, user) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this._token.set(token);
    this._user.set(user);
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
//# sourceMappingURL=chunk-CVPORU2Z.js.map
