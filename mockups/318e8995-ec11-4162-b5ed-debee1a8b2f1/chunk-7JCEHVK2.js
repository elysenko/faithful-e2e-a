import {
  HttpClient,
  Router,
  catchError,
  computed,
  inject,
  map,
  of,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-POJ4OZZ3.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api/v1"
};

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "token";
var USER_KEY = "user";
var AuthService = class _AuthService {
  apiUrl = environment.apiUrl;
  http = inject(HttpClient);
  router = inject(Router);
  _user = signal(this.readStoredUser());
  user = this._user.asReadonly();
  isLoggedIn = computed(() => !!this._user());
  isAdmin = computed(() => this._user()?.role === "admin");
  readStoredUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  persist(token, user) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem("access_token", token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem("isAuthenticated", "true");
    this._user.set(user);
  }
  /** Real login endpoint. In the mockup, falls back to a local session so the form stays usable offline. */
  login(email, password) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(tap((res) => this.persist(res.token, res.user)), map((res) => res.user), catchError(() => {
      const role = email.startsWith("admin") ? "admin" : "shopper";
      const user = { id: "local", email, name: email.split("@")[0], role };
      this.persist("demo-token", user);
      return of(user);
    }));
  }
  /** Real signup endpoint (shopper accounts). Falls back to a local session in the mockup. */
  signup(name, email, password) {
    return this.http.post(`${this.apiUrl}/auth/register`, { name, email, password }).pipe(tap((res) => this.persist(res.token, res.user)), map((res) => res.user), catchError(() => {
      const user = { id: "local", email, name, role: "shopper" };
      this.persist("demo-token", user);
      return of(user);
    }));
  }
  /** Demo Mode bypass — signs in as a seeded admin and jumps into the authenticated app. */
  demoLogin() {
    const user = { id: "demo-admin", email: "admin@demo", name: "Demo Admin", role: "admin" };
    this.persist("demo-admin-token", user);
    this.router.navigate(["/admin/products"]);
  }
  /** Demo Mode bypass — signs in as a seeded shopper. */
  demoLoginShopper() {
    const user = { id: "demo-shopper", email: "shopper@demo", name: "Demo Shopper", role: "shopper" };
    this.persist("demo-shopper-token", user);
    this.router.navigate(["/"]);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("access_token");
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem("isAuthenticated");
    this._user.set(null);
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function AuthService_Factory(t) {
    return new (t || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-7JCEHVK2.js.map
