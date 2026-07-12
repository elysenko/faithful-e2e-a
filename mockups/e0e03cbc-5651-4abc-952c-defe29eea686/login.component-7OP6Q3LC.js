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
} from "./chunk-VXD3V2JR.js";
import {
  AuthService
} from "./chunk-T6HJ4SPB.js";
import {
  Router,
  RouterLink
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
  signal,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5S2USPPB.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function LoginComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
}
function LoginComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign in ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.loading = signal(false);
    this.errorMessage = signal("");
    this.form = this.fb.group({
      email: ["manager@demo", [Validators.required, Validators.email]],
      password: ["demo1234", [Validators.required]]
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    const { email, password } = this.form.getRawValue();
    this.auth.login(email, password).subscribe({
      next: () => {
        this.router.navigate(["/dashboard"]);
      },
      error: () => {
        this.errorMessage.set("Invalid credentials. Please try again.");
        this.loading.set(false);
      }
    });
  }
  demoManager() {
    this.auth.demoLogin("manager");
  }
  demoTenant() {
    this.auth.demoLogin("tenant");
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 6, consts: [[1, "auth-shell"], [1, "auth-card", "card"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "muted", "brand-tagline"], [1, "stack", 3, "ngSubmit", "formGroup"], [1, "error"], [1, "stack"], ["type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@example.com", 1, "field"], ["type", "password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "Your password", 1, "field"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "spinner"], [1, "demo-row"], ["type", "button", 1, "btn", "btn-sm", "demo-link", 3, "click"], [1, "auth-footer", "stack"], ["routerLink", "/signup", 1, "create-link"], [1, "muted", "creds-hint"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "R");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "RentDesk");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Sign in to your rent portal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 6);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(10, LoginComponent_Conditional_10_Template, 2, 1, "p", 7);
        \u0275\u0275elementStart(11, "label", 8)(12, "span");
        \u0275\u0275text(13, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 9);
        \u0275\u0275template(15, LoginComponent_Conditional_15_Template, 2, 0, "small", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "label", 8)(17, "span");
        \u0275\u0275text(18, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 10);
        \u0275\u0275template(20, LoginComponent_Conditional_20_Template, 2, 0, "small", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 11);
        \u0275\u0275template(22, LoginComponent_Conditional_22_Template, 1, 0, "span", 12)(23, LoginComponent_Conditional_23_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 13)(25, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_25_listener() {
          return ctx.demoManager();
        });
        \u0275\u0275text(26, " Skip login \u2014 Demo Mode ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_27_listener() {
          return ctx.demoTenant();
        });
        \u0275\u0275text(28, " Demo as tenant ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15)(30, "a", 16);
        \u0275\u0275text(31, "Create an account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p", 17);
        \u0275\u0275text(33, " Seeded demo: manager@demo / tenant1@demo \xB7 password demo1234 ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.errorMessage() ? 10 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(15, ctx.form.controls.email.touched && ctx.form.controls.email.invalid ? 15 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(20, ctx.form.controls.password.touched && ctx.form.controls.password.invalid ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.loading() ? 22 : 23);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-shell[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n  background: var(--color-surface);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 26rem;\n  padding: var(--space-6);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-lg);\n  background: var(--color-brand);\n  color: var(--color-surface);\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-brand);\n  font-size: 1.75rem;\n  font-weight: 700;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 var(--space-5);\n}\n.demo-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  justify-content: center;\n  margin-top: var(--space-4);\n}\n.demo-link[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-muted);\n  border: none;\n  padding: var(--space-2) var(--space-3);\n  min-height: 44px;\n}\n.demo-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-ink);\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  padding-top: var(--space-4);\n  border-top: 1px solid var(--color-border);\n  text-align: center;\n}\n.create-link[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n  font-weight: 600;\n  text-decoration: none;\n}\n.create-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.creds-hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-7OP6Q3LC.js.map
