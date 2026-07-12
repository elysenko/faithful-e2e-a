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
} from "./chunk-KNIBP2U6.js";

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
var TOKEN_KEY = "token";
var authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "tasks", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-VUDJR77S.js").then((m) => m.LoginComponent),
    data: {
      flow: { flowId: "login", node: "login", entry: true, edgesTo: ["signup", "tasks"], label: "Login" }
    }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-RBDZ2MCR.js").then((m) => m.SignupComponent),
    data: {
      flow: { flowId: "signup", node: "signup", edgesTo: ["login", "tasks"], label: "Sign up" }
    }
  },
  {
    path: "tasks",
    loadComponent: () => import("./tasks.component-HRLH6KWP.js").then((m) => m.TasksComponent),
    canActivate: [authGuard],
    data: {
      flow: { flowId: "tasks", node: "tasks", showInNavbar: true, label: "Tasks", scope: "all", edgesTo: ["login"] }
    }
  },
  { path: "**", redirectTo: "tasks" }
];

// src/app/core/interceptors/auth.interceptor.ts
var TOKEN_KEY2 = "token";
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
