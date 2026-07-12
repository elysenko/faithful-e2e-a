import {
  AuthService
} from "./chunk-E5YQJQ2W.js";
import {
  RouterLink
} from "./chunk-ZM34OTSI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-C7DKJWEU.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HP7M3I25.js";

// src/app/pages/signup/signup.component.ts
function SignupComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("value", r_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1);
  }
}
function SignupComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
var SignupComponent = class _SignupComponent {
  constructor(auth) {
    this.auth = auth;
    this.name = "";
    this.email = "";
    this.password = "";
    this.confirm = "";
    this.role = "developer";
    this.roles = ["developer", "admin"];
    this.submitting = signal(false);
    this.error = signal(null);
  }
  submit() {
    if (!this.name || !this.email || !this.password) {
      this.error.set("Fill in your name, email and password.");
      return;
    }
    if (this.password !== this.confirm) {
      this.error.set("Passwords do not match.");
      return;
    }
    this.submitting.set(true);
    this.error.set(null);
    this.auth.signup(this.name, this.email, this.password).subscribe({
      error: (err) => {
        this.submitting.set(false);
        this.error.set(err?.error?.message || "Could not create your account.");
      }
    });
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(t) {
      return new (t || _SignupComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 8, consts: [[1, "auth-shell"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "brand-name"], [1, "muted"], ["data-testid", "signup-form", 3, "ngSubmit"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "name", "name", "autocomplete", "name", "placeholder", "Ada Lovelace", "data-testid", "signup-name", 3, "ngModelChange", "ngModel"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "autocomplete", "email", "placeholder", "you@example.com", "data-testid", "signup-email", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "autocomplete", "new-password", "placeholder", "At least 8 characters", "data-testid", "signup-password", 3, "ngModelChange", "ngModel"], ["for", "confirm"], ["id", "confirm", "type", "password", "name", "confirm", "autocomplete", "new-password", "placeholder", "Re-enter password", 3, "ngModelChange", "ngModel"], ["for", "role"], ["id", "role", "name", "role", "data-testid", "signup-role", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "hint"], [1, "error"], ["type", "submit", "data-testid", "signup-submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "auth-alt"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "</>");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "CodeDeck");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1");
        \u0275\u0275text(8, "Create your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10, "The first account becomes the admin; later teammates default to the developer role.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 6);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(12, "div", 7)(13, "label", 8);
        \u0275\u0275text(14, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 7)(17, "label", 10);
        \u0275\u0275text(18, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7)(21, "label", 12);
        \u0275\u0275text(22, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 7)(25, "label", 14);
        \u0275\u0275text(26, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.confirm, $event) || (ctx.confirm = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 7)(29, "label", 16);
        \u0275\u0275text(30, "Requested role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_select_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.role, $event) || (ctx.role = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(32, SignupComponent_For_33_Template, 2, 2, "option", 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span", 19);
        \u0275\u0275text(35, "The very first account always becomes an admin.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(36, SignupComponent_Conditional_36_Template, 2, 1, "p", 20);
        \u0275\u0275elementStart(37, "button", 21);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "p", 22);
        \u0275\u0275text(40, " Already have an account? ");
        \u0275\u0275elementStart(41, "a", 23);
        \u0275\u0275text(42, "Log in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.confirm);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.roles);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(36, ctx.error() ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.submitting());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting() ? "Creating\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.auth-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5) var(--space-4);\n  background:\n    radial-gradient(\n      circle at 12% 18%,\n      var(--color-brand-light),\n      transparent 42%),\n    radial-gradient(\n      circle at 88% 82%,\n      var(--color-accent-light),\n      transparent 42%),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  padding: var(--space-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-5);\n  font-weight: 800;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n  font-family: var(--font-mono);\n  font-size: var(--fs-sm);\n  font-weight: 800;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-bottom: var(--space-1);\n}\n.auth-card[_ngcontent-%COMP%]    > .muted[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  text-align: center;\n  font-size: var(--fs-sm);\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/pages/signup/signup.component.ts", lineNumber: 20 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-DJEDRCMA.js.map
