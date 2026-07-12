import {
  AuthService
} from "./chunk-UUPNV6ZJ.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
  withInterceptors
} from "./chunk-GUFH4IQL.js";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-ILXJTYNR.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor(auth) {
    this.auth = auth;
    this.title = "LearnLoop";
  }
  ngOnInit() {
    if (this.auth.isLoggedIn() && this.auth.token() && this.auth.token() !== "demo-token") {
      this.auth.refresh().subscribe({ error: () => {
      } });
    }
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(AuthService));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 18 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/core/guards/role.guard.ts
var roleGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(["/login"]);
  }
  return auth.isInstructor() ? true : router.createUrlTree(["/catalog"]);
};

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./login.component-UUEWQ6AB.js").then((m) => m.LoginComponent),
    data: { flow: { node: "login", label: "Login", entry: true, edgesTo: ["signup", "catalog", "instructor-courses"] } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-FFV6T6V2.js").then((m) => m.SignupComponent),
    data: { flow: { node: "signup", label: "Sign up", edgesTo: ["login", "catalog"] } }
  },
  {
    path: "",
    loadComponent: () => import("./layout.component-AWZBK6PL.js").then((m) => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      // ---- Student ----
      {
        path: "catalog",
        loadComponent: () => import("./catalog.component-Z5CIPMGJ.js").then((m) => m.CatalogComponent),
        data: { flow: { node: "catalog", label: "Catalog", showInNavbar: true, scope: "student", edgesTo: ["course-detail", "my-courses"] } }
      },
      {
        path: "my-courses",
        loadComponent: () => import("./my-courses.component-OEM7ZTFN.js").then((m) => m.MyCoursesComponent),
        data: { flow: { node: "my-courses", label: "My Courses", showInNavbar: true, scope: "student", edgesTo: ["course-detail", "catalog"] } }
      },
      {
        path: "courses/:id",
        loadComponent: () => import("./course-detail.component-KO77U3LQ.js").then((m) => m.CourseDetailComponent),
        data: { flow: { node: "course-detail", label: "Course", scope: "student", edgesTo: ["lesson", "quiz-take", "my-courses"] } }
      },
      {
        path: "lessons/:id",
        loadComponent: () => import("./lesson.component-5GJ2QFDQ.js").then((m) => m.LessonComponent),
        data: { flow: { node: "lesson", label: "Lesson", scope: "student", edgesTo: ["course-detail"] } }
      },
      {
        path: "quizzes/:id/result",
        loadComponent: () => import("./quiz-result.component-XFIFLZQ7.js").then((m) => m.QuizResultComponent),
        data: { flow: { node: "quiz-result", label: "Quiz Result", scope: "student", edgesTo: ["course-detail", "quiz-take"] } }
      },
      {
        path: "quizzes/:id",
        loadComponent: () => import("./quiz-take.component-7USEM7OR.js").then((m) => m.QuizTakeComponent),
        data: { flow: { node: "quiz-take", label: "Quiz", scope: "student", edgesTo: ["quiz-result", "course-detail"] } }
      },
      // ---- Instructor ----
      {
        path: "instructor/courses",
        canActivate: [roleGuard],
        loadComponent: () => import("./courses-list.component-ND6DGWVY.js").then((m) => m.CoursesListComponent),
        data: { flow: { node: "instructor-courses", label: "Courses", showInNavbar: true, scope: "instructor", edgesTo: ["course-editor", "gradebook"] } }
      },
      {
        path: "instructor/courses/:id/edit",
        canActivate: [roleGuard],
        loadComponent: () => import("./course-editor.component-JNY7TJ6L.js").then((m) => m.CourseEditorComponent),
        data: { flow: { node: "course-editor", label: "Edit Course", scope: "instructor", edgesTo: ["instructor-courses", "gradebook"] } }
      },
      {
        path: "instructor/courses/:id/gradebook",
        canActivate: [roleGuard],
        loadComponent: () => import("./gradebook.component-SYSSGLVC.js").then((m) => m.GradebookComponent),
        data: { flow: { node: "gradebook", label: "Gradebook", scope: "instructor", edgesTo: ["instructor-courses"] } }
      },
      {
        path: "admin/settings",
        canActivate: [roleGuard],
        loadComponent: () => import("./admin-settings.component-MIBA3VIR.js").then((m) => m.AdminSettingsComponent),
        data: { flow: { node: "admin-settings", label: "Settings", showInNavbar: true, scope: "instructor", edgesTo: ["instructor-courses"] } }
      }
    ]
  },
  { path: "**", redirectTo: "catalog" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = localStorage.getItem("token") || localStorage.getItem("access_token");
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withHashLocation(), withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
