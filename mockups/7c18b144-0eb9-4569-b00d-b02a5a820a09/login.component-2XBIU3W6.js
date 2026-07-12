import {
  AuthService
} from "./chunk-WP3WOTWG.js";
import {
  ActivatedRoute
} from "./chunk-Y5LH5DTG.js";
import "./chunk-QKG44OY5.js";
import "./chunk-BTWCFMW5.js";
import {
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UGB4PC52.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
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
    this.errorMessage = signal("");
  }
  ngOnInit() {
    const params = this.route.snapshot.queryParamMap;
    const token = params.get("token");
    const error = params.get("error");
    if (token) {
      this.auth.completeOAuth(token);
      return;
    }
    if (error === "denied") {
      this.errorMessage.set("LinkedIn sign-in was cancelled. Please try again to continue.");
    }
  }
  signInWithLinkedIn() {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 1, consts: [[1, "login"], [1, "login-hero"], [1, "brand"], [1, "brand-mark"], [1, "brand-heart"], [1, "brand-name"], [1, "brand-tagline"], [1, "login-card", "card"], [1, "login-title"], [1, "muted", "login-sub"], ["role", "alert", "data-testid", "login-error", 1, "alert"], ["data-testid", "login-linkedin", 1, "btn", "btn-linkedin", "btn-block", 3, "click"], [1, "li-badge"], [1, "login-terms", "muted"], [1, "login-divider"], ["data-testid", "login-demo", 1, "btn-demo", 3, "click"], [1, "login-perks"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "perk-check"], ["d", "m5 12 4.5 4.5L19 7"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "\u2665");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "ProLink");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Where professional networks spark real connections.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "h2", 8);
        \u0275\u0275text(13, "Sign in to continue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 9);
        \u0275\u0275text(15, " We use LinkedIn to verify you're a real professional \u2014 no passwords, no fake profiles. ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, LoginComponent_Conditional_16_Template, 2, 1, "div", 10);
        \u0275\u0275elementStart(17, "button", 11);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_17_listener() {
          return ctx.signInWithLinkedIn();
        });
        \u0275\u0275elementStart(18, "span", 12);
        \u0275\u0275text(19, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Sign in with LinkedIn ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 13);
        \u0275\u0275text(22, " By continuing you agree to our Community Guidelines and Privacy Policy. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 14)(24, "span");
        \u0275\u0275text(25, "or");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "button", 15);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_26_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(27, " Skip login \u2014 explore Demo Mode ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "ul", 16)(29, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(30, "svg", 17);
        \u0275\u0275element(31, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, "Verified professionals only");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(34, "svg", 17);
        \u0275\u0275element(35, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "Matches based on shared industries");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(37, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 17);
        \u0275\u0275element(39, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, "Private, respectful conversations");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275conditional(16, ctx.errorMessage() ? 16 : -1);
      }
    }, dependencies: [CommonModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.login[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-5);\n  padding: var(--space-6) var(--space-4) calc(var(--space-6) + var(--safe-bottom));\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-primary-soft) 0%,\n      var(--color-bg) 45%,\n      var(--color-accent-soft) 100%);\n}\n.login-hero[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.brand[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  margin: 0 auto var(--space-3);\n  border-radius: var(--radius-lg);\n  background: var(--color-primary);\n  color: var(--color-text-oncolor);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-md);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 800;\n}\n.brand-heart[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -8px;\n  bottom: -8px;\n  width: 30px;\n  height: 30px;\n  border-radius: var(--radius-pill);\n  background: var(--color-accent);\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  letter-spacing: -0.5px;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  margin-top: var(--space-2);\n  max-width: 320px;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-5);\n  text-align: center;\n}\n.login-title[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\n.login-sub[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 var(--space-4);\n  font-size: var(--text-sm);\n}\n.btn-linkedin[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-3);\n  min-height: 52px;\n  border-radius: var(--radius-pill);\n  background: var(--color-primary);\n  color: var(--color-text-oncolor);\n  font-size: var(--text-base);\n  font-weight: 700;\n}\n.btn-linkedin[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-hover);\n}\n.btn-linkedin[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.li-badge[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 5px;\n  background: var(--color-text-oncolor);\n  color: var(--color-primary);\n  font-weight: 800;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-terms[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  margin-top: var(--space-3);\n}\n.login-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin: var(--space-4) 0;\n  color: var(--color-text-faint);\n  font-size: var(--text-xs);\n}\n.login-divider[_ngcontent-%COMP%]::before, .login-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--color-border);\n}\n.btn-demo[_ngcontent-%COMP%] {\n  min-height: 44px;\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  text-decoration: underline;\n}\n.btn-demo[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n.alert[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  border-radius: var(--radius-sm);\n  padding: var(--space-3);\n  font-size: var(--text-sm);\n  margin-bottom: var(--space-4);\n}\n.login-perks[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n}\n.login-perks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.perk-check[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 13 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-2XBIU3W6.js.map
