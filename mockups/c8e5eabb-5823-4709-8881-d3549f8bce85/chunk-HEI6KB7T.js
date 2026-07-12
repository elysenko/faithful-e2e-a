import {
  HttpClient,
  Router,
  computed,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-A62IECG2.js";

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
    this.isPortal = computed(() => this._user()?.role === "customer");
    this.canSeeMargins = computed(() => {
      const r = this._user()?.role;
      return r === "admin" || r === "sales";
    });
  }
  readUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  persist(token, user) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem("token", token);
    localStorage.setItem("access_token", token);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this._token.set(token);
    this._user.set(user);
  }
  /** Real backend login (available once the service layer is wired). */
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(tap((response) => {
      const user = { name: email.split("@")[0], email, role: "admin" };
      this.persist(response.token, user);
    }));
  }
  /** Client-simulated internal login for the mockup (no backend required). */
  mockLogin(email, role = "admin") {
    this.persist("mock-internal-token", {
      name: email.split("@")[0] || "Nexus User",
      email,
      role
    });
    this.router.navigate(["/dashboard"]);
  }
  /** Demo Mode bypass — seeds admin session and jumps to the dashboard. */
  demoLogin() {
    this.persist("demo-admin-token", {
      name: "Demo Admin",
      email: "demo@nexuspower.com",
      role: "admin"
    });
    this.router.navigate(["/dashboard"]);
  }
  /** Client-simulated signup — first signup becomes admin. */
  signup(name, email) {
    this.persist("mock-internal-token", { name, email, role: "admin" });
    this.router.navigate(["/dashboard"]);
  }
  /** Customer portal login — scoped to a single account (QES seeded). */
  portalLogin(email) {
    this.persist("mock-portal-token", {
      name: email.split("@")[0] || "Portal User",
      email,
      role: "customer",
      accountScope: "acc-qes"
    });
    this.router.navigate(["/portal"]);
  }
  logout() {
    [TOKEN_KEY, "token", "access_token", "isAuthenticated", USER_KEY].forEach((k) => localStorage.removeItem(k));
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
//# sourceMappingURL=chunk-HEI6KB7T.js.map
