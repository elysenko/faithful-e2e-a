import {
  HttpClient,
  Router
} from "./chunk-PGTF2OAP.js";
import {
  computed,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5S2USPPB.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "/api"
};

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "token";
var ACCESS_KEY = "access_token";
var USER_KEY = "user";
var AUTH_FLAG = "isAuthenticated";
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
    this._user = signal(readUser());
    this.user = this._user.asReadonly();
    this.isLoggedIn = computed(() => !!this._user());
    this.role = computed(() => this._user()?.role ?? null);
    this.isManager = computed(() => this._user()?.role === "manager");
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(tap((res) => this.persist(res)));
  }
  signup(name, email, password) {
    return this.http.post(`${this.apiUrl}/auth/signup`, { name, email, password }).pipe(tap((res) => this.persist(res)));
  }
  persist(res) {
    const token = res.access_token || res.token || "";
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCESS_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(res.user));
    localStorage.setItem(AUTH_FLAG, "true");
    this._user.set(res.user);
  }
  /** Demo Mode — bypass the backend so reviewers can inspect the authenticated UI. */
  demoLogin(role = "manager") {
    const user = role === "manager" ? { id: "demo-manager", email: "manager@demo", name: "Demo Manager", role: "manager" } : { id: "demo-tenant", email: "tenant1@demo", name: "Demo Tenant", role: "tenant" };
    const token = "demo-token";
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCESS_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(AUTH_FLAG, "true");
    this._user.set(user);
    this.router.navigate([role === "manager" ? "/dashboard" : "/my-lease"]);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(AUTH_FLAG);
    this._user.set(null);
    this.router.navigate(["/login"]);
  }
  token() {
    return localStorage.getItem(TOKEN_KEY);
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
//# sourceMappingURL=chunk-T6HJ4SPB.js.map
