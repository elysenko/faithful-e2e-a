import {
  AuthService
} from "./chunk-MIYGEFMU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-3DEXCJGJ.js";
import {
  RouterLink
} from "./chunk-AFRLPGFB.js";
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
} from "./chunk-G3BCJOAS.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var LoginComponent = class _LoginComponent {
  constructor(auth) {
    this.auth = auth;
    this.email = "";
    this.password = "";
    this.submitting = signal(false);
    this.error = signal(null);
  }
  submit() {
    if (!this.email || !this.password) {
      this.error.set("Enter your email and password.");
      return;
    }
    this.submitting.set(true);
    this.error.set(null);
    this.auth.login(this.email, this.password).subscribe({
      error: (err) => {
        this.submitting.set(false);
        this.error.set(err?.error?.message || "Invalid email or password.");
      }
    });
  }
  demo(role) {
    this.auth.demoLogin(role);
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 5, consts: [[1, "auth-shell"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "brand-name"], [1, "muted"], [3, "ngSubmit"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "autocomplete", "email", "placeholder", "you@example.com", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "autocomplete", "current-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], [1, "error"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "auth-alt"], ["routerLink", "/signup"], [1, "demo"], [1, "demo-label"], [1, "demo-row"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "S");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "StockRoom");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1");
        \u0275\u0275text(8, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10, "Log in to manage inventory, record movements and track stock.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 6);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(12, "div", 7)(13, "label", 8);
        \u0275\u0275text(14, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 7)(17, "label", 10);
        \u0275\u0275text(18, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, LoginComponent_Conditional_20_Template, 2, 1, "p", 12);
        \u0275\u0275elementStart(21, "button", 13);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "p", 14);
        \u0275\u0275text(24, " New to StockRoom? ");
        \u0275\u0275elementStart(25, "a", 15);
        \u0275\u0275text(26, "Create an account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 16)(28, "span", 17);
        \u0275\u0275text(29, "Skip login \u2014 Demo Mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 18)(31, "button", 19);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_31_listener() {
          return ctx.demo("manager");
        });
        \u0275\u0275text(32, " Demo as Manager ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 19);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_33_listener() {
          return ctx.demo("clerk");
        });
        \u0275\u0275text(34, " Demo as Clerk ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.error() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.submitting());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting() ? "Signing in\u2026" : "Log in", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.auth-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5) var(--space-4);\n  background:\n    radial-gradient(\n      circle at 12% 18%,\n      var(--color-brand-light),\n      transparent 42%),\n    radial-gradient(\n      circle at 88% 82%,\n      var(--color-accent-light),\n      transparent 42%),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--space-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-5);\n  font-weight: 800;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-bottom: var(--space-1);\n}\n.auth-card[_ngcontent-%COMP%]    > .muted[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  text-align: center;\n  font-size: var(--fs-sm);\n}\n.demo[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  padding-top: var(--space-4);\n  border-top: 1px dashed var(--color-border-strong);\n  text-align: center;\n}\n.demo-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-xs);\n  color: var(--color-muted);\n  margin-bottom: var(--space-2);\n}\n.demo-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.demo-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 19 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-3RXLAOCW.js.map
