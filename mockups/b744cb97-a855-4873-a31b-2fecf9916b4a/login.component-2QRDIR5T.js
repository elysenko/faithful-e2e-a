import {
  AuthService
} from "./chunk-PNFJAIEQ.js";
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
} from "./chunk-FGE4ALCS.js";
import {
  CommonModule,
  Router,
  RouterLink,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UQ66P35U.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
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
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.loading = signal(false);
    this.errorMessage = signal("");
    this.form = this.fb.group({
      email: ["editor@beehivewatch.dev", [Validators.required, Validators.email]],
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
      next: () => this.router.navigate(["/bills"]),
      error: () => {
        this.errorMessage.set("Invalid credentials. Please try again.");
        this.loading.set(false);
      }
    });
  }
  demoLogin() {
    this.auth.demoLogin();
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 4, consts: [[1, "login-wrap"], [1, "card", "login-card"], [1, "login-head"], [1, "login-mark"], [1, "muted"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "username"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password"], ["role", "alert", 1, "error"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "login-alt"], ["type", "button", 1, "demo-link", 3, "click"], ["routerLink", "/bills", 1, "browse-link"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F41D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "BeehiveWatch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Editor sign-in \u2014 public browsing needs no account.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
        \u0275\u0275text(12, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 6)(15, "label", 9);
        \u0275\u0275text(16, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, LoginComponent_Conditional_18_Template, 2, 1, "p", 11);
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 13)(22, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_22_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(23, "Skip login \u2014 Demo Mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "a", 15);
        \u0275\u0275text(25, "Browse as a visitor \u2192");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(18, ctx.errorMessage() ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Signing in\u2026" : "Sign in", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.login-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  padding: var(--space-4);\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6);\n}\n.login-head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-5);\n}\n.login-mark[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.login-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 var(--space-1);\n  font-size: var(--fs-xl);\n}\n.login-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-sm);\n}\n.btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-alt[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  padding-top: var(--space-4);\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n}\n.demo-link[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  background: transparent;\n  border: none;\n  color: var(--color-muted);\n  font-family: inherit;\n  font-size: var(--fs-sm);\n  cursor: pointer;\n}\n.demo-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-ink);\n  text-decoration: underline;\n}\n.browse-link[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-2QRDIR5T.js.map
