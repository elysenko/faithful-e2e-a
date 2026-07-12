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

// src/app/features/contacts/contact-form.component.ts
function ContactFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "First name is required.");
    \u0275\u0275elementEnd();
  }
}
function ContactFormComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Last name is required.");
    \u0275\u0275elementEnd();
  }
}
function ContactFormComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "A valid email is required.");
    \u0275\u0275elementEnd();
  }
}
function ContactFormComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275property("value", a_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1);
  }
}
function ContactFormComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Account is required.");
    \u0275\u0275elementEnd();
  }
}
var ContactFormComponent = class _ContactFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.accounts = [
      "Acme Corporation",
      "Globex Industries",
      "Initech",
      "Umbrella Health",
      "Soylent Foods",
      "Stark Energy",
      "Wayne Media",
      "Hooli Cloud",
      "Vandelay Imports",
      "Pied Piper"
    ];
    this.pm = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
    this.editId = computed(() => this.pm().get("id"));
    this.isEdit = computed(() => !!this.editId());
    this.form = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      title: [""],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      accountName: ["Acme Corporation", [Validators.required]]
    });
    if (this.isEdit()) {
      this.form.patchValue({
        firstName: "Jane",
        lastName: "Rivera",
        title: "VP Operations",
        email: "jane@acme.com",
        phone: "+1 415 555 0110",
        accountName: "Acme Corporation"
      });
    }
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const target = this.isEdit() ? ["/contacts", this.editId()] : ["/contacts"];
    this.router.navigate(target);
  }
  cancel() {
    this.router.navigate(this.isEdit() ? ["/contacts", this.editId()] : ["/contacts"]);
  }
  static {
    this.\u0275fac = function ContactFormComponent_Factory(t) {
      return new (t || _ContactFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactFormComponent, selectors: [["app-contact-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 8, consts: [[1, "page"], ["routerLink", "/contacts", 1, "crumb"], [1, "page-head"], [1, "muted"], [1, "card", "card-pad", "form-narrow", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "firstName"], ["id", "firstName", "formControlName", "firstName", "placeholder", "First name", 1, "input"], [1, "field-error"], ["for", "lastName"], ["id", "lastName", "formControlName", "lastName", "placeholder", "Last name", 1, "input"], ["for", "title"], ["id", "title", "formControlName", "title", "placeholder", "Job title", 1, "input"], ["for", "email"], ["id", "email", "formControlName", "email", "placeholder", "name@company.com", 1, "input"], ["for", "phone"], ["id", "phone", "formControlName", "phone", "placeholder", "+1 555 000 0000", 1, "input"], ["for", "accountName"], ["id", "accountName", "formControlName", "accountName", 1, "select"], [3, "value"], [1, "form-actions"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"]], template: function ContactFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Contacts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "header", 2)(4, "div")(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "form", 4);
        \u0275\u0275listener("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_9_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
        \u0275\u0275text(12, "First name *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 7);
        \u0275\u0275template(14, ContactFormComponent_Conditional_14_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 5)(16, "label", 9);
        \u0275\u0275text(17, "Last name *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 10);
        \u0275\u0275template(19, ContactFormComponent_Conditional_19_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 5)(21, "label", 11);
        \u0275\u0275text(22, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 5)(25, "label", 13);
        \u0275\u0275text(26, "Email *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 14);
        \u0275\u0275template(28, ContactFormComponent_Conditional_28_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 5)(30, "label", 15);
        \u0275\u0275text(31, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 5)(34, "label", 17);
        \u0275\u0275text(35, "Account *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "select", 18);
        \u0275\u0275repeaterCreate(37, ContactFormComponent_For_38_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, ContactFormComponent_Conditional_39_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 20)(41, "button", 21);
        \u0275\u0275listener("click", function ContactFormComponent_Template_button_click_41_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(42, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 22);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_7_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Edit contact" : "New contact");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Update the contact details." : "Add a person to your CRM.");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(14, ((tmp_3_0 = ctx.form.get("firstName")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("firstName")) == null ? null : tmp_3_0.touched) ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_4_0 = ctx.form.get("lastName")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("lastName")) == null ? null : tmp_4_0.touched) ? 19 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(28, ((tmp_5_0 = ctx.form.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("email")) == null ? null : tmp_5_0.touched) ? 28 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.accounts);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(39, ((tmp_7_0 = ctx.form.get("accountName")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.form.get("accountName")) == null ? null : tmp_7_0.touched) ? 39 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Save changes" : "Create contact");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=contacts.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactFormComponent, { className: "ContactFormComponent", filePath: "src/app/features/contacts/contact-form.component.ts", lineNumber: 14 });
})();
export {
  ContactFormComponent
};
//# sourceMappingURL=contact-form.component-TYITMKA3.js.map
