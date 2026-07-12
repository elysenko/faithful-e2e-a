import {
  AuthService
} from "./chunk-T6HJ4SPB.js";
import {
  Router
} from "./chunk-PGTF2OAP.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-5S2USPPB.js";

// src/app/pages/landing.component.ts
var LandingComponent = class _LandingComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  ngOnInit() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return;
    }
    this.router.navigate([this.auth.isManager() ? "/dashboard" : "/my-lease"]);
  }
  static {
    this.\u0275fac = function LandingComponent_Factory(t) {
      return new (t || _LandingComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[2, "padding", "2rem", "text-align", "center", "color", "var(--color-muted)"]], template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "Loading\u2026");
        \u0275\u0275elementEnd();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/pages/landing.component.ts", lineNumber: 10 });
})();
export {
  LandingComponent
};
//# sourceMappingURL=landing.component-OEDNWOPQ.js.map
