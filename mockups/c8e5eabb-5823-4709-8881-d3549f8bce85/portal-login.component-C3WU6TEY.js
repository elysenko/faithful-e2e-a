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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-A62IECG2.js";

// src/app/features/portal/portal-login/portal-login.component.ts
var PortalLoginComponent = class _PortalLoginComponent {
  constructor(fb, auth) {
    this.fb = fb;
    this.auth = auth;
    this.form = this.fb.group({
      email: ["procurement@qes.com", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }
  submit() {
    if (this.form.invalid)
      return;
    this.auth.portalLogin(this.form.value.email);
  }
  demo() {
    this.auth.portalLogin("procurement@qes.com");
  }
  static {
    this.\u0275fac = function PortalLoginComponent_Factory(t) {
      return new (t || _PortalLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalLoginComponent, selectors: [["app-portal-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 2, consts: [["data-testid", "app-ready", 1, "auth-wrap"], [1, "auth-card"], [1, "brand"], [1, "mark"], [1, "tag"], [1, "muted"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@company.com"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["type", "submit", 1, "btn", "btn-primary", "full", 3, "disabled"], ["data-testid", "demo-mode", 1, "btn", "demo-btn", 3, "click"], [1, "links"], ["routerLink", "/login"]], template: function PortalLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25C8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Nexus Power ");
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "Customer Portal");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "h2");
        \u0275\u0275text(9, "Customer sign in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 5);
        \u0275\u0275text(11, "Access your orders, documents and requests. You only ever see your own company's information.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "form", 6);
        \u0275\u0275listener("ngSubmit", function PortalLoginComponent_Template_form_ngSubmit_12_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(13, "div", 7)(14, "label", 8);
        \u0275\u0275text(15, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7)(18, "label", 10);
        \u0275\u0275text(19, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 12);
        \u0275\u0275text(22, "Sign in");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 13);
        \u0275\u0275listener("click", function PortalLoginComponent_Template_button_click_23_listener() {
          return ctx.demo();
        });
        \u0275\u0275text(24, "Enter portal \u2014 Demo (QES) \u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 14)(26, "a", 15);
        \u0275\u0275text(27, "Internal team sign in \u2192");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(9);
        \u0275\u0275property("disabled", ctx.form.invalid);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 20px;\n  background:\n    linear-gradient(\n      150deg,\n      #0b1c2c,\n      #10283d);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: 32px;\n}\n.brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-brand-700);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.brand[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%] {\n  color: var(--color-accent-600);\n  font-size: 22px;\n}\n.brand[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  background: var(--color-brand-50);\n  color: var(--color-brand-600);\n  padding: 2px 8px;\n  border-radius: 999px;\n}\n.auth-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-top: 18px;\n}\n.form[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.demo-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 14px;\n  background: transparent;\n  border: 1px dashed var(--color-border-strong);\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.demo-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-brand-500);\n  color: var(--color-brand-600);\n}\n.links[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  text-align: center;\n  font-size: var(--fs-sm);\n}\n/*# sourceMappingURL=portal-login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalLoginComponent, { className: "PortalLoginComponent", filePath: "src/app/features/portal/portal-login/portal-login.component.ts", lineNumber: 14 });
})();
export {
  PortalLoginComponent
};
//# sourceMappingURL=portal-login.component-C3WU6TEY.js.map
