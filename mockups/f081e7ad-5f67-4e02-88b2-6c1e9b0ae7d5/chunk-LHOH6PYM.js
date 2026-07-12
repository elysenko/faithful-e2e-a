import {
  HttpClient,
  Router,
  computed,
  of,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NK42F6RC.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api"
};

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var USER_KEY = "user";
function readStoredUser() {
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
    this._token = signal(localStorage.getItem(TOKEN_KEY));
    this._user = signal(readStoredUser());
    this.isLoggedIn = computed(() => !!this._token());
    this.token = this._token.asReadonly();
    this.user = this._user.asReadonly();
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/admin/login`, { email, password }).pipe(tap((response) => this.persist(response.token, response.user)));
  }
  /**
   * Demo Mode bypass — lets reviewers (and the screenshot capture system) reach the full
   * authenticated admin UI without a live backend. Seeds mock admin credentials and navigates
   * straight to the admin dashboard.
   */
  demoLogin() {
    const user = {
      id: "demo-admin",
      email: "admin@newswire.local",
      name: "Demo Admin"
    };
    this.persist("demo-token", user);
    this.router.navigate(["/admin"]);
    return of(void 0);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem("access_token");
    localStorage.removeItem("isAuthenticated");
    this._token.set(null);
    this._user.set(null);
    this.router.navigate(["/admin/login"]);
  }
  persist(token, user) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem("access_token", token);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this._token.set(token);
    this._user.set(user);
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
//# sourceMappingURL=chunk-LHOH6PYM.js.map
