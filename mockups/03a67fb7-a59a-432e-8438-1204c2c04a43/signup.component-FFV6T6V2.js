import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-3GKCPY4W.js";
import {
  AuthService
} from "./chunk-UUPNV6ZJ.js";
import {
  RouterLink
} from "./chunk-GUFH4IQL.js";
import {
  CommonModule,
  signal,
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
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ILXJTYNR.js";

// src/app/pages/signup/signup.component.ts
function SignupComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var SignupComponent = class _SignupComponent {
  constructor(auth) {
    this.auth = auth;
    this.name = "";
    this.email = "";
    this.password = "";
    this.confirm = "";
    this.loading = signal(false);
    this.error = signal(null);
  }
  submit() {
    if (!this.name || !this.email || !this.password) {
      this.error.set("Please fill in all fields.");
      return;
    }
    if (this.password !== this.confirm) {
      this.error.set("Passwords do not match.");
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.auth.signup(this.name, this.email, this.password).subscribe({
      next: () => {
        this.loading.set(false);
        this.auth.goHome();
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Could not create your account. Try a different email.");
      }
    });
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(t) {
      return new (t || _SignupComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 7, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "muted", "auth-sub"], [3, "ngSubmit"], [1, "error", "auth-error"], [1, "field"], ["for", "name"], ["id", "name", "name", "name", "type", "text", "autocomplete", "name", "placeholder", "Ada Lovelace", 3, "ngModelChange", "ngModel"], ["for", "email"], ["id", "email", "name", "email", "type", "email", "autocomplete", "email", "placeholder", "you@example.com", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "name", "password", "type", "password", "autocomplete", "new-password", "placeholder", "At least 8 characters", 3, "ngModelChange", "ngModel"], ["for", "confirm"], ["id", "confirm", "name", "confirm", "type", "password", "autocomplete", "new-password", "placeholder", "Re-enter password", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "hint", "muted"], [1, "auth-alt", "muted"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F501}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "LearnLoop");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Create your account to start learning.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(10, SignupComponent_Conditional_10_Template, 2, 1, "p", 6);
        \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
        \u0275\u0275text(13, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 7)(16, "label", 10);
        \u0275\u0275text(17, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 7)(20, "label", 12);
        \u0275\u0275text(21, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 7)(24, "label", 14);
        \u0275\u0275text(25, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.confirm, $event) || (ctx.confirm = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "button", 16);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "p", 17);
        \u0275\u0275text(30, "The first account created becomes the instructor.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 18);
        \u0275\u0275text(32, " Already have an account? ");
        \u0275\u0275elementStart(33, "a", 19);
        \u0275\u0275text(34, "Sign in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(10, ctx.error() ? 10 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.confirm);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Creating account\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5) var(--space-4);\n  background:\n    radial-gradient(\n      1000px 500px at 50% -10%,\n      var(--color-brand-tint),\n      transparent),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  justify-content: center;\n}\n.auth-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  color: var(--color-brand);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.auth-sub[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: var(--space-2) 0 var(--space-5);\n}\n.auth-error[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius);\n  margin-bottom: var(--space-4);\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-align: center;\n  margin-top: var(--space-3);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--space-4);\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/pages/signup/signup.component.ts", lineNumber: 14 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-FFV6T6V2.js.map
