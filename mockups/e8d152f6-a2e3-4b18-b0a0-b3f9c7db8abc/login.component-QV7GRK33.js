import {
  AuthService
} from "./chunk-REEGUVE2.js";
import {
  ActivatedRoute,
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ZKGBDGO.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.route = inject(ActivatedRoute);
    this.loading = signal(false);
    this.errorMessage = signal("");
    const error = this.route.snapshot.queryParamMap.get("error");
    if (error === "oauth_denied") {
      this.errorMessage.set("LinkedIn sign-in was cancelled. Please try again to continue.");
    } else if (error === "oauth_unavailable") {
      this.errorMessage.set("LinkedIn is temporarily unreachable. Please try again in a moment.");
    }
  }
  continueWithLinkedIn() {
    this.loading.set(true);
    this.auth.loginWithLinkedIn();
  }
  demoLogin() {
    this.auth.demoLogin();
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 3, consts: [["data-testid", "app-ready", 1, "auth"], [1, "auth-hero"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "hero-title"], [1, "hero-sub"], [1, "hero-points"], [1, "dot"], [1, "auth-panel"], [1, "auth-card", "card"], [1, "auth-heading"], [1, "auth-copy", "muted"], ["role", "alert", 1, "auth-error"], ["data-testid", "login-linkedin", 1, "linkedin-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"], [1, "terms", "subtle"], [1, "divider"], ["data-testid", "login-demo", 1, "demo-btn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, "R");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Rapport");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "Date on your wavelength.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, " Rapport is professional dating for ambitious people. Sign in with LinkedIn, and we bring across your name, photo, and role \u2014 so conversations start with real context. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "ul", 7)(12, "li");
        \u0275\u0275element(13, "span", 8);
        \u0275\u0275text(14, " Verified LinkedIn identities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "li");
        \u0275\u0275element(16, "span", 8);
        \u0275\u0275text(17, " Match on career & ambition");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275element(19, "span", 8);
        \u0275\u0275text(20, " Message only after a mutual like");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 9)(22, "div", 10)(23, "h2", 11);
        \u0275\u0275text(24, "Welcome to Rapport");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 12);
        \u0275\u0275text(26, "Sign in or create your account with LinkedIn.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, LoginComponent_Conditional_27_Template, 2, 1, "div", 13);
        \u0275\u0275elementStart(28, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_28_listener() {
          return ctx.continueWithLinkedIn();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(29, "svg", 15);
        \u0275\u0275element(30, "path", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(32, "p", 17);
        \u0275\u0275text(33, " By continuing you agree to Rapport's Terms and acknowledge our Privacy Policy. We never post to LinkedIn on your behalf. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 18)(35, "span");
        \u0275\u0275text(36, "or");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "button", 19);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_37_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(38, " Skip login \u2014 explore Demo Mode ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(27);
        \u0275\u0275conditional(27, ctx.errorMessage() ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Connecting\u2026" : "Continue with LinkedIn", " ");
      }
    }, dependencies: [CommonModule], styles: ['\n\n.auth[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.auth-hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: var(--space-4);\n  padding: var(--space-8) var(--space-7);\n  color: #fff;\n  background:\n    radial-gradient(\n      120% 120% at 15% 10%,\n      rgba(255, 255, 255, 0.16),\n      transparent 45%),\n    linear-gradient(\n      150deg,\n      #2447c0,\n      #2f5bea 40%,\n      #ec4d6b 130%);\n  overflow: hidden;\n}\n.auth-hero[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: var(--space-4);\n}\n.auth-hero[_ngcontent-%COMP%]   .brand-mark[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.16);\n  font-weight: 800;\n}\n.auth-hero[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  font-weight: 800;\n}\n.hero-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: var(--text-3xl);\n  line-height: 1.1;\n  max-width: 12ch;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.86);\n  font-size: var(--text-lg);\n  max-width: 46ch;\n  line-height: 1.55;\n}\n.hero-points[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: var(--space-3) 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.95);\n}\n.hero-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.hero-points[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #fff;\n  flex: none;\n  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);\n}\n.auth-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-6) var(--space-4);\n  background: var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6);\n}\n.auth-heading[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\n.auth-copy[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  margin-bottom: var(--space-5);\n}\n.auth-error[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border-radius: var(--radius-md);\n  padding: 10px 14px;\n  font-size: var(--text-sm);\n  font-weight: 500;\n  margin-bottom: var(--space-4);\n}\n.linkedin-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  min-height: 52px;\n  border: none;\n  border-radius: var(--radius-md);\n  background: #0a66c2;\n  color: #fff;\n  font-size: var(--text-base);\n  font-weight: 700;\n  transition: background 0.15s ease, transform 0.05s ease;\n}\n.linkedin-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.linkedin-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #084e96;\n}\n.linkedin-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n.linkedin-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: default;\n}\n.terms[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  font-size: var(--text-xs);\n  line-height: 1.5;\n}\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: var(--space-5) 0;\n  color: var(--color-text-subtle);\n  font-size: var(--text-sm);\n}\n.divider[_ngcontent-%COMP%]::before, .divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--color-border);\n}\n.demo-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  background: transparent;\n  border: 1px dashed var(--color-border-strong);\n  border-radius: var(--radius-md);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  font-weight: 600;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.demo-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  color: var(--color-text);\n}\n@media (max-width: 860px) {\n  .auth[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auth-hero[_ngcontent-%COMP%] {\n    padding: var(--space-6) var(--space-5);\n    gap: var(--space-3);\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n  .hero-sub[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n  .hero-points[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 13 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-QV7GRK33.js.map
