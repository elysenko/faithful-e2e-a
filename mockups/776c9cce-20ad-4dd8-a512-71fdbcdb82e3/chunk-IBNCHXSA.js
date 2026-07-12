import {
  HttpClient,
  Router
} from "./chunk-GFN35O44.js";
import {
  computed,
  map,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KFEQ7DOY.js";

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
var DEMO_PASSWORD = "demo1234";
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.apiUrl = environment.apiUrl;
    this._user = signal(this.readUser());
    this.user = this._user.asReadonly();
    this.isLoggedIn = computed(() => !!this._user());
    this.role = computed(() => this._user()?.role ?? null);
    this.isCoach = computed(() => this._user()?.role === "coach");
  }
  /** Verify credentials against the backend and persist the returned JWT + user. */
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(map((res) => this.handleAuth(res)));
  }
  /** Sign up. The first account ever created becomes coach (full_auth model). */
  signup(email, password, name) {
    return this.http.post(`${this.apiUrl}/auth/register`, {
      email,
      password,
      name: name ?? email.split("@")[0]
    }).pipe(map((res) => this.handleAuth(res)));
  }
  /**
   * Demo Mode — bypasses the live backend so reviewers can inspect the full
   * authenticated UI (and the screenshot pipeline can capture every view).
   * Logs in as a seeded coach so all coach-only affordances are visible.
   */
  demoLogin() {
    const demoUser = {
      id: "demo-coach",
      name: "Demo Coach",
      email: "coach@demo",
      role: "coach",
      level: "competitive"
    };
    this.persist(demoUser, "demo-token");
    this.router.navigate(["/home"]);
  }
  /** Quick role switcher — authenticates against the matching seeded demo user. */
  loginAs(role) {
    const email = role === "coach" ? "coach@demo" : "rower1@demo";
    this.login(email, DEMO_PASSWORD).subscribe({
      next: () => this.router.navigate(["/home"]),
      error: () => this.router.navigate(["/login"])
    });
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
  /**
   * Fetch the live authenticated user from the backend and refresh local state.
   * Used by the app shell so the header/nav reflect the real server-side user.
   */
  refreshCurrentUser() {
    return this.http.get(`${this.apiUrl}/users/me`).pipe(map((user) => {
      const token = localStorage.getItem(TOKEN_KEY) ?? "";
      this.persist(user, token);
      return user;
    }));
  }
  handleAuth(res) {
    const token = res.access_token ?? res.token ?? "";
    this.persist(res.user, token);
    return { user: res.user, token };
  }
  persist(user, token) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCESS_KEY, token);
    localStorage.setItem("token", token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(ROLE_KEY, user.role);
    localStorage.setItem(AUTH_FLAG, "true");
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
//# sourceMappingURL=chunk-IBNCHXSA.js.map
