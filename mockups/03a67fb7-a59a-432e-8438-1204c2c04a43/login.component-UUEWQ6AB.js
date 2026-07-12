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

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_10_Template(rf, ctx) {
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
var LoginComponent = class _LoginComponent {
  constructor(auth) {
    this.auth = auth;
    this.email = "";
    this.password = "";
    this.loading = signal(false);
    this.error = signal(null);
  }
  submit() {
    if (!this.email || !this.password) {
      this.error.set("Enter your email and password.");
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.auth.login(this.email, this.password).subscribe({
      next: () => {
        this.loading.set(false);
        this.auth.goHome();
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Invalid email or password.");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 5, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "muted", "auth-sub"], [3, "ngSubmit"], [1, "error", "auth-error"], [1, "field"], ["for", "email"], ["id", "email", "name", "email", "type", "email", "autocomplete", "email", "placeholder", "you@example.com", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "name", "password", "type", "password", "autocomplete", "current-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "auth-alt", "muted"], ["routerLink", "/signup"], [1, "demo"], [1, "demo-label", "muted"], [1, "demo-btns"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F501}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "LearnLoop");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Sign in to continue learning.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(10, LoginComponent_Conditional_10_Template, 2, 1, "p", 6);
        \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
        \u0275\u0275text(13, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 7)(16, "label", 10);
        \u0275\u0275text(17, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "p", 13);
        \u0275\u0275text(22, " New to LearnLoop? ");
        \u0275\u0275elementStart(23, "a", 14);
        \u0275\u0275text(24, "Create an account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 15)(26, "span", 16);
        \u0275\u0275text(27, "Skip login \u2014 Demo Mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 17)(29, "button", 18);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_29_listener() {
          return ctx.demo("student");
        });
        \u0275\u0275text(30, "Demo as Student");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 18);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_31_listener() {
          return ctx.demo("instructor");
        });
        \u0275\u0275text(32, "Demo as Instructor");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(10, ctx.error() ? 10 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Signing in\u2026" : "Sign in", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5) var(--space-4);\n  background:\n    radial-gradient(\n      1000px 500px at 50% -10%,\n      var(--color-brand-tint),\n      transparent),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  justify-content: center;\n}\n.auth-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  color: var(--color-brand);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.auth-sub[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: var(--space-2) 0 var(--space-5);\n}\n.auth-error[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius);\n  margin-bottom: var(--space-4);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--space-4);\n}\n.demo[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  padding-top: var(--space-4);\n  border-top: 1px dashed var(--color-border);\n  text-align: center;\n}\n.demo-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  display: block;\n  margin-bottom: var(--space-2);\n}\n.demo-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  justify-content: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-UUEWQ6AB.js.map
