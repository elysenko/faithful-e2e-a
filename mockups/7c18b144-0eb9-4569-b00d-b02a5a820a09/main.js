import {
  AuthService
} from "./chunk-WP3WOTWG.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-Y5LH5DTG.js";
import "./chunk-QKG44OY5.js";
import "./chunk-BTWCFMW5.js";
import {
  catchError,
  inject,
  provideHttpClient,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-UGB4PC52.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [["data-testid", "app-ready"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "router-outlet");
        \u0275\u0275elementEnd();
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
  if (!auth.isLoggedIn())
    return router.createUrlTree(["/login"]);
  if (auth.isAdmin())
    return true;
  return router.createUrlTree(["/feed"]);
};

// src/app/core/guards/profile-complete.guard.ts
var profileCompleteGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const user = auth.user();
  if (user && !user.profileComplete) {
    return router.createUrlTree(["/profile/edit"]);
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-2XBIU3W6.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["feed"], label: "Login" } }
  },
  {
    path: "",
    loadComponent: () => import("./main-layout.component-PRNJIRDT.js").then((m) => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "feed",
        loadComponent: () => import("./feed.component-HBY5F7JJ.js").then((m) => m.FeedComponent),
        canActivate: [profileCompleteGuard],
        data: { flow: { flowId: "feed", node: "feed", showInNavbar: true, label: "Discover", scope: "all", edgesTo: ["user-profile", "matches"] } }
      },
      {
        path: "matches",
        loadComponent: () => import("./matches.component-AFTNLPHR.js").then((m) => m.MatchesComponent),
        data: { flow: { flowId: "matches", node: "matches", showInNavbar: true, label: "Matches", scope: "all", edgesTo: ["conversation"] } }
      },
      {
        path: "matches/:matchId",
        loadComponent: () => import("./conversation.component-LJ73VPSX.js").then((m) => m.ConversationComponent),
        data: { flow: { flowId: "conversation", node: "conversation", label: "Conversation", edgesTo: ["matches", "user-profile"] } }
      },
      {
        path: "users/:userId",
        loadComponent: () => import("./user-profile.component-QLQ3HEPZ.js").then((m) => m.UserProfileComponent),
        data: { flow: { flowId: "user-profile", node: "user-profile", label: "Member Profile", edgesTo: ["feed", "conversation"] } }
      },
      {
        path: "profile/edit",
        loadComponent: () => import("./profile-edit.component-7GYVLRJT.js").then((m) => m.ProfileEditComponent),
        data: { flow: { flowId: "profile-edit", node: "profile-edit", showInNavbar: true, label: "Profile", scope: "all", edgesTo: ["feed"] } }
      },
      {
        path: "settings",
        loadComponent: () => import("./settings.component-GDGAB2MP.js").then((m) => m.SettingsComponent),
        data: { flow: { flowId: "settings", node: "settings", showInNavbar: true, label: "Settings", scope: "all", edgesTo: ["login", "profile-edit"] } }
      },
      {
        path: "admin/moderation",
        loadComponent: () => import("./moderation.component-7GOW7UBV.js").then((m) => m.ModerationComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-moderation", node: "admin-moderation", showInNavbar: true, label: "Admin", scope: "admin", edgesTo: ["admin-reports"] } }
      },
      {
        path: "admin/reports",
        loadComponent: () => import("./reports.component-NMSFTDI7.js").then((m) => m.ReportsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-reports", node: "admin-reports", label: "Reports Queue", scope: "admin", edgesTo: ["report-detail"] } }
      },
      {
        path: "admin/reports/:reportId",
        loadComponent: () => import("./report-detail.component-OSBMBMXB.js").then((m) => m.ReportDetailComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "report-detail", node: "report-detail", label: "Report Detail", scope: "admin", edgesTo: ["admin-reports", "admin-moderation"] } }
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
