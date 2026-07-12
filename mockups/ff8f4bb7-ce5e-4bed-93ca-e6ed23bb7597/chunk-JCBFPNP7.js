import {
  Router
} from "./chunk-GPQOFHD2.js";
import {
  API_BASE,
  HttpClient,
  computed,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-2VXAXVQ7.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var USER_KEY = "auth_user";
function readUser() {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw)
    return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
var AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.router = inject(Router);
    this._token = signal(localStorage.getItem(TOKEN_KEY));
    this._user = signal(readUser());
    this.currentUser = this._user.asReadonly();
    this.token = this._token.asReadonly();
    this.isLoggedIn = computed(() => !!this._token());
    this.isAdmin = computed(() => this._user()?.role === "admin");
  }
  login(email, password) {
    return this.http.post(`${API_BASE}/auth/login`, { email, password }).pipe(tap((res) => this.persist(res)));
  }
  signup(name, email, password) {
    return this.http.post(`${API_BASE}/auth/signup`, { name, email, password }).pipe(tap((res) => this.persist(res)));
  }
  /** Demo Mode — populate a mock admin session so the full authenticated UI is
   *  reviewable without a live backend, then jump into the catalog. */
  demoLogin() {
    const demoUser = {
      id: "demo-admin",
      email: "admin@demo",
      name: "Demo Admin",
      role: "admin"
    };
    const demoToken = "demo-token";
    localStorage.setItem(TOKEN_KEY, demoToken);
    localStorage.setItem("token", demoToken);
    localStorage.setItem("access_token", demoToken);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem(USER_KEY, JSON.stringify(demoUser));
    localStorage.setItem("user", JSON.stringify(demoUser));
    this._token.set(demoToken);
    this._user.set(demoUser);
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
  persist(res) {
    localStorage.setItem(TOKEN_KEY, res.token);
    localStorage.setItem(USER_KEY, JSON.stringify(res.user));
    this._token.set(res.token);
    this._user.set(res.user);
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-JCBFPNP7.js.map
