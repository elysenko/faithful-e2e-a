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
} from "./chunk-TMCGQTI4.js";
import {
  LEAD_STATUSES
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-S3A6C3F5.js";

// src/app/features/leads/lead-form.component.ts
function LeadFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "First name is required.");
    \u0275\u0275elementEnd();
  }
}
function LeadFormComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Last name is required.");
    \u0275\u0275elementEnd();
  }
}
function LeadFormComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Company is required.");
    \u0275\u0275elementEnd();
  }
}
function LeadFormComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "A valid email is required.");
    \u0275\u0275elementEnd();
  }
}
function LeadFormComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(s_r1));
  }
}
var LeadFormComponent = class _LeadFormComponent {
  statusLabel(s) {
    return s.charAt(0) + s.slice(1).toLowerCase();
  }
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.statuses = LEAD_STATUSES;
    this.pm = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
    this.editId = computed(() => this.pm().get("id"));
    this.isEdit = computed(() => !!this.editId());
    this.form = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      company: ["", [Validators.required]],
      title: [""],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      status: ["NEW", [Validators.required]],
      source: ["Web"]
    });
    if (this.isEdit()) {
      this.form.patchValue({
        firstName: "Olivia",
        lastName: "Bennett",
        company: "Northwind Traders",
        title: "Operations Manager",
        email: "olivia.bennett@northwind.com",
        phone: "+1 415 555 0201",
        status: "NEW",
        source: "Web"
      });
    }
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const target = this.isEdit() ? ["/leads", this.editId()] : ["/leads"];
    this.router.navigate(target);
  }
  cancel() {
    this.router.navigate(this.isEdit() ? ["/leads", this.editId()] : ["/leads"]);
  }
  static {
    this.\u0275fac = function LeadFormComponent_Factory(t) {
      return new (t || _LeadFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeadFormComponent, selectors: [["app-lead-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 8, consts: [[1, "page"], ["routerLink", "/leads", 1, "crumb"], [1, "page-head"], [1, "muted"], [1, "card", "card-pad", "form-narrow", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "firstName"], ["id", "firstName", "formControlName", "firstName", "placeholder", "First name", 1, "input"], [1, "field-error"], ["for", "lastName"], ["id", "lastName", "formControlName", "lastName", "placeholder", "Last name", 1, "input"], ["for", "company"], ["id", "company", "formControlName", "company", "placeholder", "Company name", 1, "input"], ["for", "title"], ["id", "title", "formControlName", "title", "placeholder", "Job title", 1, "input"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "name@company.com", 1, "input"], ["for", "phone"], ["id", "phone", "formControlName", "phone", "placeholder", "+1 555 000 0000", 1, "input"], ["for", "status"], ["id", "status", "formControlName", "status", 1, "select"], [3, "value"], ["for", "source"], ["id", "source", "formControlName", "source", "placeholder", "Web", 1, "input"], [1, "form-actions"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"]], template: function LeadFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Leads");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "header", 2)(4, "div")(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "form", 4);
        \u0275\u0275listener("ngSubmit", function LeadFormComponent_Template_form_ngSubmit_9_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
        \u0275\u0275text(12, "First name *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 7);
        \u0275\u0275template(14, LeadFormComponent_Conditional_14_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 5)(16, "label", 9);
        \u0275\u0275text(17, "Last name *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 10);
        \u0275\u0275template(19, LeadFormComponent_Conditional_19_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 5)(21, "label", 11);
        \u0275\u0275text(22, "Company *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 12);
        \u0275\u0275template(24, LeadFormComponent_Conditional_24_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 5)(26, "label", 13);
        \u0275\u0275text(27, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 5)(30, "label", 15);
        \u0275\u0275text(31, "Email *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 16);
        \u0275\u0275template(33, LeadFormComponent_Conditional_33_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 5)(35, "label", 17);
        \u0275\u0275text(36, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "input", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 5)(39, "label", 19);
        \u0275\u0275text(40, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "select", 20);
        \u0275\u0275repeaterCreate(42, LeadFormComponent_For_43_Template, 2, 2, "option", 21, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 5)(45, "label", 22);
        \u0275\u0275text(46, "Source");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "input", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 24)(49, "button", 25);
        \u0275\u0275listener("click", function LeadFormComponent_Template_button_click_49_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(50, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 26);
        \u0275\u0275text(52);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Edit lead" : "New lead");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Update the lead details." : "Add a prospect to your CRM.");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(14, ((tmp_3_0 = ctx.form.get("firstName")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("firstName")) == null ? null : tmp_3_0.touched) ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_4_0 = ctx.form.get("lastName")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("lastName")) == null ? null : tmp_4_0.touched) ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(24, ((tmp_5_0 = ctx.form.get("company")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("company")) == null ? null : tmp_5_0.touched) ? 24 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(33, ((tmp_6_0 = ctx.form.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("email")) == null ? null : tmp_6_0.touched) ? 33 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Save changes" : "Create lead");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=leads.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeadFormComponent, { className: "LeadFormComponent", filePath: "src/app/features/leads/lead-form.component.ts", lineNumber: 15 });
})();
export {
  LeadFormComponent
};
//# sourceMappingURL=lead-form.component-3WMFI7MS.js.map
