import {
  HttpClient,
  Router,
  computed,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4ZKGBDGO.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api/v1"
};

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "auth_token";
var ACCESS_TOKEN_KEY = "access_token";
var USER_KEY = "user";
var AUTH_FLAG_KEY = "isAuthenticated";
var PROFILE_COMPLETE_KEY = "profile_complete";
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
    this._profileComplete = signal(localStorage.getItem(PROFILE_COMPLETE_KEY) === "true");
    this.user = this._user.asReadonly();
    this.token = this._token.asReadonly();
    this.isLoggedIn = computed(() => !!this._token());
    this.isAdmin = computed(() => this._user()?.role === "admin");
    this.profileComplete = this._profileComplete.asReadonly();
  }
  /** Begin the real LinkedIn OAuth flow. In the live app this redirects the browser
   *  to the API's OAuth entry point; the mockup routes through the callback screen. */
  loginWithLinkedIn() {
    this.router.navigate(["/auth/callback"]);
  }
  /** Demo bypass — seeds a mock admin session so reviewers can inspect the full,
   *  authenticated UI without a live backend or LinkedIn credentials. */
  demoLogin() {
    const demoUser = {
      id: "me",
      name: "Alex Morgan",
      email: "alex.morgan@example.com",
      role: "admin",
      jobTitle: "Product Design Lead",
      employer: "Northwind Labs",
      headline: "Design leader \u2022 ex-Figma \u2022 building calmer software"
    };
    const token = "demo.jwt.token";
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(demoUser));
    localStorage.setItem(AUTH_FLAG_KEY, "true");
    localStorage.setItem(PROFILE_COMPLETE_KEY, "true");
    this._token.set(token);
    this._user.set(demoUser);
    this._profileComplete.set(true);
    this.router.navigate(["/feed"]);
  }
  /** Called by the profile-completion screen once bio + at least one photo are present. */
  markProfileComplete() {
    localStorage.setItem(PROFILE_COMPLETE_KEY, "true");
    this._profileComplete.set(true);
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(AUTH_FLAG_KEY);
    localStorage.removeItem(PROFILE_COMPLETE_KEY);
    this._token.set(null);
    this._user.set(null);
    this._profileComplete.set(false);
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
//# sourceMappingURL=chunk-REEGUVE2.js.map
