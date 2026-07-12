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

// src/app/pages/signup/signup.component.ts
function SignupComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var SignupComponent = class _SignupComponent {
  constructor(auth) {
    this.auth = auth;
    this.name = "";
    this.email = "";
    this.password = "";
    this.confirm = "";
    this.error = "";
  }
  submit() {
    this.error = "";
    if (!this.name || !this.email || !this.password) {
      this.error = "Fill in every field to continue.";
      return;
    }
    if (this.password !== this.confirm) {
      this.error = "Passwords do not match.";
      return;
    }
    this.auth.signup(this.name, this.email, this.password);
  }
  demo() {
    this.auth.demoLogin();
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(t) {
      return new (t || _SignupComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 5, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "brand-name"], [1, "auth-tagline"], [3, "ngSubmit"], [1, "field"], ["for", "name"], ["id", "name", "name", "name", "type", "text", "autocomplete", "name", "placeholder", "Jordan Filer", 3, "ngModelChange", "ngModel"], ["for", "email"], ["id", "email", "name", "email", "type", "email", "autocomplete", "email", "placeholder", "you@example.com", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "name", "password", "type", "password", "autocomplete", "new-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], ["for", "confirm"], ["id", "confirm", "name", "confirm", "type", "password", "autocomplete", "new-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], ["role", "alert", 1, "error"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "auth-alt"], ["routerLink", "/login"], [1, "auth-divider"], ["type", "button", 1, "demo-link", 3, "click"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "EF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "EasyFile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Create your account to start filing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 6);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(10, "div", 7)(11, "label", 8);
        \u0275\u0275text(12, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 7)(15, "label", 10);
        \u0275\u0275text(16, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 7)(19, "label", 12);
        \u0275\u0275text(20, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 7)(23, "label", 14);
        \u0275\u0275text(24, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.confirm, $event) || (ctx.confirm = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(26, SignupComponent_Conditional_26_Template, 2, 1, "p", 16);
        \u0275\u0275elementStart(27, "button", 17);
        \u0275\u0275text(28, "Create account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "p", 18);
        \u0275\u0275text(30, " Already have an account? ");
        \u0275\u0275elementStart(31, "a", 19);
        \u0275\u0275text(32, "Sign in");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 20)(34, "span");
        \u0275\u0275text(35, "or");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "button", 21);
        \u0275\u0275listener("click", function SignupComponent_Template_button_click_36_listener() {
          return ctx.demo();
        });
        \u0275\u0275text(37, " Skip signup \u2014 Demo Mode ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.confirm);
        \u0275\u0275advance();
        \u0275\u0275conditional(26, ctx.error ? 26 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ['\n\n.auth-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  min-height: 100svh;\n  padding: var(--space-4);\n  background:\n    radial-gradient(\n      1200px 500px at 50% -10%,\n      var(--color-brand-tint),\n      transparent),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6) var(--space-5);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-2);\n  font-weight: 800;\n  font-size: var(--fs-lg);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n  font-size: var(--fs-sm);\n  font-weight: 800;\n}\n.auth-tagline[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-muted);\n  margin-bottom: var(--space-5);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: var(--fs-sm);\n  margin: var(--space-4) 0 0;\n}\n.auth-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: var(--space-4) 0;\n  color: var(--color-faint);\n  font-size: var(--fs-xs);\n}\n.auth-divider[_ngcontent-%COMP%]::before, .auth-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--color-border);\n}\n.auth-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 var(--space-3);\n}\n.demo-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 40px;\n  border: 1px dashed var(--color-border-strong);\n  border-radius: var(--radius);\n  background: transparent;\n  color: var(--color-muted);\n  font-family: inherit;\n  font-size: var(--fs-sm);\n  cursor: pointer;\n}\n.demo-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  color: var(--color-ink-soft);\n}\n/*# sourceMappingURL=signup.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/pages/signup/signup.component.ts", lineNumber: 15 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-T3DS5PDM.js.map
