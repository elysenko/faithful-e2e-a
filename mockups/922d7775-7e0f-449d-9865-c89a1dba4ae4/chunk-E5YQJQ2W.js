import {
  HttpClient,
  Router
} from "./chunk-ZM34OTSI.js";
import {
  computed,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HP7M3I25.js";

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
    this.isAdmin = computed(() => this._user()?.role === "admin");
  }
  hasRole(...roles) {
    const r = this._user()?.role;
    return r ? roles.includes(r) : false;
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(tap((res) => this.persist(res)));
  }
  /** Open signup — first user server-side becomes admin, later ones developers. */
  signup(name, email, password) {
    return this.http.post(`${this.apiUrl}/auth/signup`, { name, email, password }).pipe(tap((res) => this.persist(res)));
  }
  /**
   * Refresh the authenticated user from the real backend (`GET /users/me`) and
   * update the cached signal + localStorage. Resilient: on error (e.g. demo
   * token, transient failure) the cached user is preserved.
   */
  refresh() {
    return this.http.get(`${this.apiUrl}/users/me`).pipe(tap((user) => {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      this._user.set(user);
    }));
  }
  persist(res) {
    const token = res.access_token || res.token || "";
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCESS_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(res.user));
    localStorage.setItem(AUTH_FLAG, "true");
    this._user.set(res.user);
    this.router.navigate(["/"]);
  }
  /** Demo Mode — bypass the backend so reviewers can inspect the authenticated UI. */
  demoLogin(role = "admin") {
    const names = {
      admin: "Demo Admin",
      developer: "Demo Developer"
    };
    const user = {
      id: `demo-${role}`,
      email: `${role}@demo`,
      name: names[role],
      role
    };
    const token = "demo-token";
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCESS_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(AUTH_FLAG, "true");
    this._user.set(user);
    this.router.navigate(["/"]);
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
//# sourceMappingURL=chunk-E5YQJQ2W.js.map
