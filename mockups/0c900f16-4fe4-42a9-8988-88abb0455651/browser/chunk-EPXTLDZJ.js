import {
  HttpClient,
  Router
} from "./chunk-H4FLBSDN.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-FGCV4IXY.js";

// src/app/core/auth.service.ts
var STORAGE_KEYS = {
  token: "token",
  accessToken: "access_token",
  user: "user",
  isAuthenticated: "isAuthenticated"
};
var AuthService = class _AuthService {
  constructor() {
    this.router = inject(Router);
    this.http = inject(HttpClient);
    this.authState = signal(this.readPersistedAuth());
    this.currentUser = signal(this.readPersistedUser());
    this.isAuthenticated = computed(() => this.authState());
    this.user = computed(() => this.currentUser());
  }
  readPersistedAuth() {
    try {
      return localStorage.getItem(STORAGE_KEYS.isAuthenticated) === "true";
    } catch {
      return false;
    }
  }
  readPersistedUser() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.user);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  persist(user) {
    try {
      const token = "mock-admin-jwt-token";
      localStorage.setItem(STORAGE_KEYS.token, token);
      localStorage.setItem(STORAGE_KEYS.accessToken, token);
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
      localStorage.setItem(STORAGE_KEYS.isAuthenticated, "true");
    } catch {
    }
  }
  /** Standard credential login (mock — accepts any non-empty values). */
  login(email) {
    const user = {
      id: "admin-1",
      email,
      name: email.split("@")[0] || "Administrator",
      role: "admin"
    };
    this.persist(user);
    this.currentUser.set(user);
    this.authState.set(true);
    this.router.navigate(["/admin/jobs"]);
  }
  /** Demo Mode bypass — logs in as a mock admin and jumps to the console. */
  demoLogin() {
    const user = {
      id: "admin-demo",
      email: "demo.admin@noaa-viz.local",
      name: "Demo Admin",
      role: "admin"
    };
    this.persist(user);
    this.currentUser.set(user);
    this.authState.set(true);
    this.router.navigate(["/admin/jobs"]);
  }
  logout() {
    try {
      Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
    } catch {
    }
    this.currentUser.set(null);
    this.authState.set(false);
    this.router.navigate(["/admin/login"]);
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

export {
  AuthService
};
//# sourceMappingURL=chunk-EPXTLDZJ.js.map
