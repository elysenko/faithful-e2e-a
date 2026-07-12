import {
  Router
} from "./chunk-WJ46E35X.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-BZREI57W.js";

// src/app/core/auth.service.ts
var STORAGE_KEY = "user";
var AuthService = class _AuthService {
  constructor() {
    this.router = inject(Router);
    this.user = signal(this.restore());
    this.isAuthenticated = computed(() => this.user() !== null);
    this.isAdmin = computed(() => this.user()?.role === "ADMIN");
  }
  restore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  persist(user) {
    const token = "mock-jwt-" + user.id;
    localStorage.setItem("token", token);
    localStorage.setItem("access_token", token);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    this.user.set(user);
  }
  /** Mockup login: accepts any well-formed credentials. */
  login(email, role = "USER") {
    const name = email.split("@")[0].replace(/[._-]/g, " ") || "Demo User";
    this.persist({
      id: "u-" + Math.abs(hash(email)),
      name: titleCase(name),
      email,
      role
    });
  }
  signup(name, email) {
    this.persist({ id: "u-" + Math.abs(hash(email)), name, email, role: "USER" });
  }
  /** Demo Mode bypass — signs in as an admin and jumps to the dashboard. */
  demoLogin() {
    this.persist({
      id: "demo-admin",
      name: "Demo Admin",
      email: "demo.admin@cloudline.crm",
      role: "ADMIN"
    });
    this.router.navigate(["/dashboard"]);
  }
  logout() {
    ["token", "access_token", "isAuthenticated", STORAGE_KEY].forEach((k) => localStorage.removeItem(k));
    this.user.set(null);
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
function hash(value) {
  let h = 0;
  for (let i = 0; i < value.length; i++) {
    h = (h << 5) - h + value.charCodeAt(i);
    h |= 0;
  }
  return h;
}
function titleCase(value) {
  return value.replace(/\b\w/g, (c) => c.toUpperCase());
}

export {
  AuthService
};
//# sourceMappingURL=chunk-UUE5QASQ.js.map
