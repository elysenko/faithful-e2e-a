import {
  AuthService
} from "./chunk-REEGUVE2.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-4ZKGBDGO.js";

// src/app/features/auth-callback/auth-callback.component.ts
var AuthCallbackComponent = class _AuthCallbackComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.timer = null;
  }
  ngOnInit() {
    this.timer = setTimeout(() => this.auth.demoLogin(), 900);
  }
  ngOnDestroy() {
    if (this.timer)
      clearTimeout(this.timer);
  }
  static {
    this.\u0275fac = function AuthCallbackComponent_Factory(t) {
      return new (t || _AuthCallbackComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthCallbackComponent, selectors: [["app-auth-callback"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 0, consts: [["data-testid", "app-ready", 1, "callback"], ["aria-hidden", "true", 1, "spinner"], [1, "callback-title"], [1, "muted"]], template: function AuthCallbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "h1", 2);
        \u0275\u0275text(3, "Signing you in\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Bringing across your LinkedIn profile.");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [CommonModule], styles: ["\n\n.callback[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-3);\n  padding: var(--space-6);\n  text-align: center;\n}\n.callback-title[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 4px solid var(--color-primary-soft);\n  border-top-color: var(--color-primary);\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin-bottom: var(--space-2);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=auth-callback.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthCallbackComponent, { className: "AuthCallbackComponent", filePath: "src/app/features/auth-callback/auth-callback.component.ts", lineNumber: 15 });
})();
export {
  AuthCallbackComponent
};
//# sourceMappingURL=auth-callback.component-M2RKNF6B.js.map
