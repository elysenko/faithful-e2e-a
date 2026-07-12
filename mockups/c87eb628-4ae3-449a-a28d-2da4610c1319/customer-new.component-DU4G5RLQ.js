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
} from "./chunk-O3VZIQDQ.js";
import {
  Router,
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-VVK4PSXI.js";

// src/app/pages/customer-new/customer-new.component.ts
function CustomerNewComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function CustomerNewComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
var CustomerNewComponent = class _CustomerNewComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.form = this.fb.nonNullable.group({
      name: ["", Validators.required],
      contactName: [""],
      email: ["", Validators.email],
      phone: [""],
      address: [""]
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.router.navigate(["/customers"]);
  }
  static {
    this.\u0275fac = function CustomerNewComponent_Factory(t) {
      return new (t || _CustomerNewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerNewComponent, selectors: [["app-customer-new"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 7, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/customers"], [1, "faint"], [1, "section-title"], [1, "eyebrow"], [1, "card", "card-pad", "stack", 2, "max-width", "640px", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", 1, "input"], [1, "field-error"], ["for", "contactName"], ["id", "contactName", "type", "text", "formControlName", "contactName", 1, "input"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", 1, "input"], ["for", "phone"], ["id", "phone", "type", "text", "formControlName", "phone", 1, "input"], ["for", "address"], ["id", "address", "rows", "3", "formControlName", "address", 1, "textarea"], [1, "row"], ["type", "submit", 1, "btn", "btn-primary"], ["routerLink", "/customers", 1, "btn", "btn-ghost"]], template: function CustomerNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275text(3, "Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "New customer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "span", 5);
        \u0275\u0275text(10, "Directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h2");
        \u0275\u0275text(12, "New customer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "form", 6);
        \u0275\u0275listener("ngSubmit", function CustomerNewComponent_Template_form_ngSubmit_13_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(14, "div", 7)(15, "label", 8);
        \u0275\u0275text(16, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 9);
        \u0275\u0275template(18, CustomerNewComponent_Conditional_18_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 7)(20, "label", 11);
        \u0275\u0275text(21, "Contact name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7)(24, "label", 13);
        \u0275\u0275text(25, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 14);
        \u0275\u0275template(27, CustomerNewComponent_Conditional_27_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 7)(29, "label", 15);
        \u0275\u0275text(30, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 7)(33, "label", 17);
        \u0275\u0275text(34, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "textarea", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 19)(37, "button", 20);
        \u0275\u0275text(38, "Create customer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "a", 21);
        \u0275\u0275text(40, "Cancel");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("input-invalid", ctx.form.controls.name.invalid && ctx.form.controls.name.touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(18, ctx.form.controls.name.invalid && ctx.form.controls.name.touched ? 18 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("input-invalid", ctx.form.controls.email.invalid && ctx.form.controls.email.touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(27, ctx.form.controls.email.invalid && ctx.form.controls.email.touched ? 27 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerNewComponent, { className: "CustomerNewComponent", filePath: "src/app/pages/customer-new/customer-new.component.ts", lineNumber: 12 });
})();
export {
  CustomerNewComponent
};
//# sourceMappingURL=customer-new.component-DU4G5RLQ.js.map
