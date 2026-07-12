import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VXD3V2JR.js";
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
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-5S2USPPB.js";

// src/app/pages/tenant-new/tenant-new.component.ts
function TenantNewComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 8);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function TenantNewComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 8);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function TenantNewComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 8);
    \u0275\u0275text(1, "Password must be at least 6 characters.");
    \u0275\u0275elementEnd();
  }
}
function TenantNewComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
function TenantNewComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create Tenant ");
  }
}
var TenantNewComponent = class _TenantNewComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.loading = signal(false);
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      role: ["tenant", [Validators.required]]
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    const payload = this.form.getRawValue();
    console.log("Creating tenant", payload);
    setTimeout(() => {
      this.loading.set(false);
      this.router.navigate(["/tenants"]);
    }, 500);
  }
  cancel() {
    this.router.navigate(["/tenants"]);
  }
  static {
    this.\u0275fac = function TenantNewComponent_Factory(t) {
      return new (t || _TenantNewComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantNewComponent, selectors: [["app-tenant-new"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 7, consts: [[1, "page", "stack"], [1, "page-head"], ["routerLink", "/tenants", 1, "back-link"], [1, "muted"], [1, "card", "card-pad"], [1, "stack", 3, "ngSubmit", "formGroup"], [1, "stack"], ["type", "text", "formControlName", "name", "autocomplete", "name", "placeholder", "Full name", 1, "field"], [1, "error"], ["type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "tenant@demo", 1, "field"], ["type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "At least 6 characters", 1, "field"], ["formControlName", "role", 1, "field"], ["value", "tenant"], ["value", "manager"], [1, "muted", "note"], [1, "row", "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click", "disabled"], [1, "spacer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner"]], template: function TenantNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back to Tenants");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "New Tenant");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "Create a sign-in for a tenant or manager.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function TenantNewComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(10, "label", 6)(11, "span");
        \u0275\u0275text(12, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 7);
        \u0275\u0275template(14, TenantNewComponent_Conditional_14_Template, 2, 0, "small", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "label", 6)(16, "span");
        \u0275\u0275text(17, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 9);
        \u0275\u0275template(19, TenantNewComponent_Conditional_19_Template, 2, 0, "small", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "label", 6)(21, "span");
        \u0275\u0275text(22, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 10);
        \u0275\u0275template(24, TenantNewComponent_Conditional_24_Template, 2, 0, "small", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "label", 6)(26, "span");
        \u0275\u0275text(27, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "select", 11)(29, "option", 12);
        \u0275\u0275text(30, "Tenant");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 13);
        \u0275\u0275text(32, "Manager");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "p", 14);
        \u0275\u0275text(34, " The tenant signs in with these credentials to view their lease and pay. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 15)(36, "button", 16);
        \u0275\u0275listener("click", function TenantNewComponent_Template_button_click_36_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(37, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "span", 17);
        \u0275\u0275elementStart(39, "button", 18);
        \u0275\u0275template(40, TenantNewComponent_Conditional_40_Template, 1, 0, "span", 19)(41, TenantNewComponent_Conditional_41_Template, 1, 0);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(14, ctx.form.controls.name.touched && ctx.form.controls.name.invalid ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ctx.form.controls.email.touched && ctx.form.controls.email.invalid ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(24, ctx.form.controls.password.touched && ctx.form.controls.password.invalid ? 24 : -1);
        \u0275\u0275advance(12);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(40, ctx.loading() ? 40 : 41);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  margin-top: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-muted);\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-brand);\n  text-decoration: none;\n}\n.note[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.form-actions[_ngcontent-%COMP%] {\n  gap: var(--space-3);\n  align-items: center;\n}\nselect.field[_ngcontent-%COMP%] {\n  appearance: auto;\n}\n/*# sourceMappingURL=tenant-new.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantNewComponent, { className: "TenantNewComponent", filePath: "src/app/pages/tenant-new/tenant-new.component.ts", lineNumber: 14 });
})();
export {
  TenantNewComponent
};
//# sourceMappingURL=tenant-new.component-TKCDO7QT.js.map
