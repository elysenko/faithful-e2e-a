import {
  HttpClient,
  Router
} from "./chunk-BEE4MSIP.js";
import {
  computed,
  of,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VVK4PSXI.js";

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
  }
  /** Demo login — infers a role from the email prefix so the seeded demo users work offline. */
  login(email, _password) {
    const role = this.roleFromEmail(email);
    const user = { id: "u-" + role, email, role };
    this.persist(user);
    return of({ user, token: this.readToken() });
  }
  /** Signup — first user becomes admin in the full_auth model. */
  signup(email, _password) {
    const user = { id: "u-new", email, role: "admin" };
    this.persist(user);
    return of({ user, token: this.readToken() });
  }
  /** One-click demo bypass used by the login page + screenshot capture. Logs in as admin. */
  demoLogin() {
    this.loginAs("admin");
  }
  /** Quick role switcher for reviewing role-scoped nav without a backend. */
  loginAs(role) {
    const email = `${role}@minierp.dev`;
    this.persist({ id: "u-" + role, email, role });
    this.router.navigate(["/dashboard"]);
  }
  logout() {
    [TOKEN_KEY, ACCESS_KEY, USER_KEY, ROLE_KEY, AUTH_FLAG, "token"].forEach((k) => localStorage.removeItem(k));
    this._user.set(null);
    this.router.navigate(["/login"]);
  }
  hasRole(...roles) {
    const r = this.role();
    return !!r && roles.includes(r);
  }
  persist(user) {
    const token = this.fakeToken(user);
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCESS_KEY, token);
    localStorage.setItem("token", token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(ROLE_KEY, user.role);
    localStorage.setItem(AUTH_FLAG, "true");
    this._user.set(user);
  }
  roleFromEmail(email) {
    const e = email.toLowerCase();
    if (e.startsWith("sales"))
      return "sales";
    if (e.startsWith("purchasing"))
      return "purchasing";
    return "admin";
  }
  fakeToken(user) {
    const header = btoa(JSON.stringify({ alg: "none", typ: "JWT" }));
    const payload = btoa(JSON.stringify({ sub: user.id, email: user.email, role: user.role }));
    return `${header}.${payload}.mock`;
  }
  readToken() {
    return localStorage.getItem(ACCESS_KEY);
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
//# sourceMappingURL=chunk-WUH3AZNU.js.map
