import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FO3CHQ4J.js";
import {
  AuthService
} from "./chunk-HEI6KB7T.js";
import {
  CommonModule,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-A62IECG2.js";

// src/app/features/signup/signup.component.ts
function SignupComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
var SignupComponent = class _SignupComponent {
  constructor(fb, auth) {
    this.fb = fb;
    this.auth = auth;
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirm: ["", [Validators.required]]
    }, { validators: (g) => g.get("password")?.value === g.get("confirm")?.value ? null : { mismatch: true } });
  }
  submit() {
    if (this.form.invalid)
      return;
    this.auth.signup(this.form.value.name, this.form.value.email);
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(t) {
      return new (t || _SignupComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 3, consts: [["data-testid", "app-ready", 1, "auth-wrap"], [1, "auth-card"], [1, "brand"], [1, "mark"], [1, "muted"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "formControlName", "name", "autocomplete", "name", "placeholder", "Jordan Rivera"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@nexuspower.com"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "At least 6 characters"], ["for", "confirm"], ["id", "confirm", "type", "password", "formControlName", "confirm", "autocomplete", "new-password", "placeholder", "Re-enter password"], [1, "err"], ["type", "submit", 1, "btn", "btn-primary", "full", 3, "disabled"], [1, "links"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25C8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Nexus Power");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "Create your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 4);
        \u0275\u0275text(9, "The first account created becomes the workspace admin.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "form", 5);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_10_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(11, "div", 6)(12, "label", 7);
        \u0275\u0275text(13, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 6)(16, "label", 9);
        \u0275\u0275text(17, "Work email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 6)(20, "label", 11);
        \u0275\u0275text(21, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 6)(24, "label", 13);
        \u0275\u0275text(25, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 14);
        \u0275\u0275template(27, SignupComponent_Conditional_27_Template, 2, 0, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 16);
        \u0275\u0275text(29, "Create account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 17)(31, "a", 18);
        \u0275\u0275text(32, "\u2190 Back to sign in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(17);
        \u0275\u0275conditional(27, (ctx.form.errors == null ? null : ctx.form.errors["mismatch"]) && ((tmp_1_0 = ctx.form.get("confirm")) == null ? null : tmp_1_0.touched) ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.form.invalid);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 20px;\n  background:\n    linear-gradient(\n      150deg,\n      var(--color-brand-900),\n      var(--color-brand-700));\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: 32px;\n}\n.brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-brand-700);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.brand[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%] {\n  color: var(--color-accent-600);\n  font-size: 22px;\n}\n.auth-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-top: 18px;\n}\n.form[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.err[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-size: var(--fs-xs);\n  margin-top: 4px;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.links[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  text-align: center;\n  font-size: var(--fs-sm);\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/signup/signup.component.ts", lineNumber: 14 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-63JEODXD.js.map
