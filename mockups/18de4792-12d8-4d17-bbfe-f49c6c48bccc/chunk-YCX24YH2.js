import {
  Router
} from "./chunk-OCSIP44N.js";
import {
  computed,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YT626SJK.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var USER_KEY = "user";
var AuthService = class _AuthService {
  constructor(router) {
    this.router = router;
    this._user = signal(this.restoreUser());
    this.user = this._user.asReadonly();
    this.isLoggedIn = computed(() => this._user() !== null);
    this.isAdmin = computed(() => this._user()?.role === "admin");
  }
  hasRole(...roles) {
    const r = this._user()?.role;
    return r ? roles.includes(r) : false;
  }
  login(email, _password) {
    const role = email.startsWith("admin") ? "admin" : "filer";
    this.persist({ id: "me", email, name: email.split("@")[0], role }, "mock-jwt-token");
    this.router.navigate(["/returns"]);
  }
  signup(name, email, _password) {
    this.persist({ id: "me", email, name, role: "filer" }, "mock-jwt-token");
    this.router.navigate(["/returns"]);
  }
  /** Demo Mode bypass — logs in as an admin filer so reviewers can inspect all screens. */
  demoLogin() {
    const user = {
      id: "demo-admin",
      email: "admin@easyfile.dev",
      name: "Demo Admin",
      role: "admin"
    };
    this.persist(user, "demo-admin-token");
    localStorage.setItem("access_token", "demo-admin-token");
    localStorage.setItem("isAuthenticated", "true");
    this.router.navigate(["/returns"]);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("access_token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem(USER_KEY);
    this._user.set(null);
    this.router.navigate(["/login"]);
  }
  persist(user, token) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this._user.set(user);
  }
  restoreUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-YCX24YH2.js.map
