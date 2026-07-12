import {
  AuthService
} from "./chunk-REEGUVE2.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  inject,
  provideHttpClient,
  provideRouter,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-4ZKGBDGO.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/app/core/guards/auth.guard.ts
var TOKEN_KEY = "auth_token";
var authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/core/guards/admin.guard.ts
var adminGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(["/login"]);
  }
  if (!auth.isAdmin()) {
    return router.createUrlTree(["/feed"]);
  }
  return true;
};

// src/app/core/guards/complete-profile.guard.ts
var completeProfileGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(["/login"]);
  }
  if (!auth.profileComplete()) {
    return router.createUrlTree(["/profile/edit"], { queryParams: { onboarding: 1 } });
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  // ---- Public ----
  {
    path: "login",
    loadComponent: () => import("./login.component-QV7GRK33.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, label: "Login", edgesTo: ["auth-callback", "feed"] } }
  },
  {
    path: "auth/callback",
    loadComponent: () => import("./auth-callback.component-M2RKNF6B.js").then((m) => m.AuthCallbackComponent),
    data: { flow: { flowId: "auth-callback", node: "auth-callback", label: "Signing in", edgesTo: ["feed"] } }
  },
  // ---- Authenticated shell ----
  {
    path: "",
    loadComponent: () => import("./shell.component-ZFYPOILP.js").then((m) => m.ShellComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "feed",
        loadComponent: () => import("./feed.component-NQP7WLCA.js").then((m) => m.FeedComponent),
        canActivate: [completeProfileGuard],
        data: { flow: { flowId: "feed", node: "feed", showInNavbar: true, label: "Discover", scope: "all", edgesTo: ["matches", "profile-view", "profile-edit"] } }
      },
      {
        path: "matches",
        loadComponent: () => import("./matches.component-WRX5WP4I.js").then((m) => m.MatchesComponent),
        data: { flow: { flowId: "matches", node: "matches", showInNavbar: true, label: "Matches", scope: "all", edgesTo: ["conversation", "feed"] } }
      },
      {
        path: "matches/:matchId",
        loadComponent: () => import("./conversation.component-4DSTZWUC.js").then((m) => m.ConversationComponent),
        data: { flow: { flowId: "conversation", node: "conversation", label: "Conversation", edgesTo: ["matches", "profile-view"] } }
      },
      {
        path: "profile/edit",
        loadComponent: () => import("./profile-edit.component-RJFJIFF2.js").then((m) => m.ProfileEditComponent),
        data: { flow: { flowId: "profile-edit", node: "profile-edit", showInNavbar: true, label: "Profile", scope: "all", edgesTo: ["feed"] } }
      },
      {
        path: "profile/:userId",
        loadComponent: () => import("./public-profile.component-6WRWOR3H.js").then((m) => m.PublicProfileComponent),
        data: { flow: { flowId: "profile-view", node: "profile-view", label: "Member profile", edgesTo: ["matches", "feed"] } }
      },
      {
        path: "settings",
        loadComponent: () => import("./settings.component-7I7NXCMO.js").then((m) => m.SettingsComponent),
        data: { flow: { flowId: "settings", node: "settings", label: "Settings", edgesTo: ["profile-edit", "admin"] } }
      },
      {
        path: "admin",
        loadComponent: () => import("./admin-dashboard.component-LEHNTIDC.js").then((m) => m.AdminDashboardComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin", node: "admin", showInNavbar: true, label: "Moderation", scope: "admin", edgesTo: ["admin-reports", "profile-view"] } }
      },
      {
        path: "admin/reports",
        loadComponent: () => import("./admin-reports.component-BPZXCCPH.js").then((m) => m.AdminReportsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-reports", node: "admin-reports", label: "Reports queue", scope: "admin", edgesTo: ["admin", "profile-view"] } }
      }
    ]
  },
  { path: "**", redirectTo: "login" }
];

// src/app/core/interceptors/auth.interceptor.ts
var TOKEN_KEY2 = "auth_token";
var authInterceptor = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY2);
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401) {
      localStorage.removeItem(TOKEN_KEY2);
      router.navigate(["/login"]);
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
