import {
  AuthService
} from "./chunk-YCX24YH2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-MVQ5GWD2.js";
import {
  RouterLink
} from "./chunk-OCSIP44N.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YT626SJK.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(auth) {
    this.auth = auth;
    this.email = "";
    this.password = "";
    this.error = "";
  }
  submit() {
    this.error = "";
    if (!this.email || !this.password) {
      this.error = "Enter your email and password.";
      return;
    }
    this.auth.login(this.email, this.password);
  }
  demo() {
    this.auth.demoLogin();
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 3, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "brand-name"], [1, "auth-tagline"], [3, "ngSubmit"], [1, "field"], ["for", "email"], ["id", "email", "name", "email", "type", "email", "autocomplete", "email", "placeholder", "you@example.com", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "name", "password", "type", "password", "autocomplete", "current-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], ["role", "alert", 1, "error"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "auth-alt"], ["routerLink", "/signup"], [1, "auth-divider"], ["type", "button", 1, "demo-link", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "EF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "EasyFile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Your guided 1040 tax organizer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 6);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(10, "div", 7)(11, "label", 8);
        \u0275\u0275text(12, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 7)(15, "label", 10);
        \u0275\u0275text(16, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, LoginComponent_Conditional_18_Template, 2, 1, "p", 12);
        \u0275\u0275elementStart(19, "button", 13);
        \u0275\u0275text(20, "Sign in");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "p", 14);
        \u0275\u0275text(22, " New to EasyFile? ");
        \u0275\u0275elementStart(23, "a", 15);
        \u0275\u0275text(24, "Create an account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 16)(26, "span");
        \u0275\u0275text(27, "or");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "button", 17);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_28_listener() {
          return ctx.demo();
        });
        \u0275\u0275text(29, " Skip login \u2014 Demo Mode ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance();
        \u0275\u0275conditional(18, ctx.error ? 18 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ['\n\n.auth-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  min-height: 100svh;\n  padding: var(--space-4);\n  background:\n    radial-gradient(\n      1200px 500px at 50% -10%,\n      var(--color-brand-tint),\n      transparent),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6) var(--space-5);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-2);\n  font-weight: 800;\n  font-size: var(--fs-lg);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n  font-size: var(--fs-sm);\n  font-weight: 800;\n}\n.auth-tagline[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-muted);\n  margin-bottom: var(--space-5);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: var(--fs-sm);\n  margin: var(--space-4) 0 0;\n}\n.auth-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: var(--space-4) 0;\n  color: var(--color-faint);\n  font-size: var(--fs-xs);\n}\n.auth-divider[_ngcontent-%COMP%]::before, .auth-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--color-border);\n}\n.auth-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 var(--space-3);\n}\n.demo-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 40px;\n  border: 1px dashed var(--color-border-strong);\n  border-radius: var(--radius);\n  background: transparent;\n  color: var(--color-muted);\n  font-family: inherit;\n  font-size: var(--fs-sm);\n  cursor: pointer;\n}\n.demo-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  color: var(--color-ink-soft);\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 15 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-KM6LJQ4V.js.map
