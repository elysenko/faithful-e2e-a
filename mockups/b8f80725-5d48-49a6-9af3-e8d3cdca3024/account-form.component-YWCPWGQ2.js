import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TMCGQTI4.js";
import {
  INDUSTRIES
} from "./chunk-PDA44FSW.js";
import {
  toSignal
} from "./chunk-PAUVK2ZQ.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  computed,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-S3A6C3F5.js";

// src/app/features/accounts/account-form.component.ts
function AccountFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Account name is required.");
    \u0275\u0275elementEnd();
  }
}
function AccountFormComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275property("value", i_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r1);
  }
}
var AccountFormComponent = class _AccountFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.industries = INDUSTRIES;
    this.pm = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
    this.editId = computed(() => this.pm().get("id"));
    this.isEdit = computed(() => !!this.editId());
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      industry: ["Technology", [Validators.required]],
      website: [""],
      phone: [""],
      city: [""],
      employees: [0, [Validators.min(0)]],
      annualRevenue: [0, [Validators.min(0)]]
    });
    if (this.isEdit()) {
      this.form.patchValue({
        name: "Acme Corporation",
        industry: "Manufacturing",
        website: "acme.com",
        phone: "+1 415 555 0100",
        city: "San Francisco",
        employees: 4200,
        annualRevenue: 32e7
      });
    }
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const target = this.isEdit() ? ["/accounts", this.editId()] : ["/accounts"];
    this.router.navigate(target);
  }
  cancel() {
    this.router.navigate(this.isEdit() ? ["/accounts", this.editId()] : ["/accounts"]);
  }
  static {
    this.\u0275fac = function AccountFormComponent_Factory(t) {
      return new (t || _AccountFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountFormComponent, selectors: [["app-account-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 5, consts: [[1, "page"], ["routerLink", "/accounts", 1, "crumb"], [1, "page-head"], [1, "muted"], [1, "card", "card-pad", "form-narrow", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "formControlName", "name", "placeholder", "Company name", 1, "input"], [1, "field-error"], ["for", "industry"], ["id", "industry", "formControlName", "industry", 1, "select"], [3, "value"], ["for", "website"], ["id", "website", "formControlName", "website", "placeholder", "company.com", 1, "input"], ["for", "phone"], ["id", "phone", "formControlName", "phone", "placeholder", "+1 555 000 0000", 1, "input"], ["for", "city"], ["id", "city", "formControlName", "city", "placeholder", "City", 1, "input"], ["for", "employees"], ["id", "employees", "type", "number", "formControlName", "employees", "min", "0", 1, "input"], ["for", "annualRevenue"], ["id", "annualRevenue", "type", "number", "formControlName", "annualRevenue", "min", "0", 1, "input"], [1, "form-actions"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"]], template: function AccountFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "header", 2)(4, "div")(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "form", 4);
        \u0275\u0275listener("ngSubmit", function AccountFormComponent_Template_form_ngSubmit_9_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
        \u0275\u0275text(12, "Account name *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 7);
        \u0275\u0275template(14, AccountFormComponent_Conditional_14_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 5)(16, "label", 9);
        \u0275\u0275text(17, "Industry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "select", 10);
        \u0275\u0275repeaterCreate(19, AccountFormComponent_For_20_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 5)(22, "label", 12);
        \u0275\u0275text(23, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 5)(26, "label", 14);
        \u0275\u0275text(27, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 5)(30, "label", 16);
        \u0275\u0275text(31, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 5)(34, "label", 18);
        \u0275\u0275text(35, "Employees");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 5)(38, "label", 20);
        \u0275\u0275text(39, "Annual revenue (USD)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 22)(42, "button", 23);
        \u0275\u0275listener("click", function AccountFormComponent_Template_button_click_42_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(43, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 24);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Edit account" : "New account");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Update the account details." : "Add a company to your CRM.");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(14, ((tmp_3_0 = ctx.form.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("name")) == null ? null : tmp_3_0.touched) ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.industries);
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Save changes" : "Create account");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=accounts.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountFormComponent, { className: "AccountFormComponent", filePath: "src/app/features/accounts/account-form.component.ts", lineNumber: 15 });
})();
export {
  AccountFormComponent
};
//# sourceMappingURL=account-form.component-YWCPWGQ2.js.map
