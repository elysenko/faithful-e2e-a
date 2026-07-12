import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
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
  STAGE_META
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

// src/app/features/opportunities/opportunity-form.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function OpportunityFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function OpportunityFormComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
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
function OpportunityFormComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("value", s_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.label);
  }
}
function OpportunityFormComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Enter a valid amount.");
    \u0275\u0275elementEnd();
  }
}
function OpportunityFormComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Close date is required.");
    \u0275\u0275elementEnd();
  }
}
var OpportunityFormComponent = class _OpportunityFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.stageMeta = STAGE_META;
    this.pm = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
    this.editId = computed(() => this.pm().get("id"));
    this.isEdit = computed(() => !!this.editId());
    this.accounts = ["Acme Corporation", "Globex Industries", "Initech", "Umbrella Health", "Soylent Foods", "Stark Energy", "Wayne Media", "Hooli Cloud"];
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      accountName: ["Acme Corporation", [Validators.required]],
      stage: ["PROSPECTING", [Validators.required]],
      amount: [0, [Validators.required, Validators.min(0)]],
      probability: [20, [Validators.min(0), Validators.max(100)]],
      closeDate: ["", [Validators.required]]
    });
    if (this.isEdit()) {
      this.form.patchValue({
        name: "Acme \u2014 Platform Renewal",
        accountName: "Acme Corporation",
        stage: "NEGOTIATION",
        amount: 12e4,
        probability: 75,
        closeDate: "2026-08-15"
      });
    }
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.router.navigate(this.isEdit() ? ["/opportunities", this.editId()] : ["/opportunities"]);
  }
  cancel() {
    this.router.navigate(this.isEdit() ? ["/opportunities", this.editId()] : ["/opportunities"]);
  }
  static {
    this.\u0275fac = function OpportunityFormComponent_Factory(t) {
      return new (t || _OpportunityFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpportunityFormComponent, selectors: [["app-opportunity-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 7, consts: [[1, "page"], ["routerLink", "/opportunities", 1, "crumb"], [1, "page-head"], [1, "muted"], [1, "card", "card-pad", "form-narrow", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "formControlName", "name", "placeholder", "Deal name", 1, "input"], [1, "field-error"], ["for", "accountName"], ["id", "accountName", "formControlName", "accountName", 1, "select"], [3, "value"], ["for", "stage"], ["id", "stage", "formControlName", "stage", 1, "select"], ["for", "amount"], ["id", "amount", "type", "number", "formControlName", "amount", "min", "0", 1, "input"], ["for", "probability"], ["id", "probability", "type", "number", "formControlName", "probability", "min", "0", "max", "100", 1, "input"], ["for", "closeDate"], ["id", "closeDate", "type", "date", "formControlName", "closeDate", 1, "input"], [1, "form-actions"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"]], template: function OpportunityFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Opportunities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "header", 2)(4, "div")(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "form", 4);
        \u0275\u0275listener("ngSubmit", function OpportunityFormComponent_Template_form_ngSubmit_9_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
        \u0275\u0275text(12, "Opportunity name *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 7);
        \u0275\u0275template(14, OpportunityFormComponent_Conditional_14_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 5)(16, "label", 9);
        \u0275\u0275text(17, "Account *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "select", 10);
        \u0275\u0275repeaterCreate(19, OpportunityFormComponent_For_20_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 5)(22, "label", 12);
        \u0275\u0275text(23, "Stage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "select", 13);
        \u0275\u0275repeaterCreate(25, OpportunityFormComponent_For_26_Template, 2, 2, "option", 11, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 5)(28, "label", 14);
        \u0275\u0275text(29, "Amount (USD) *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 15);
        \u0275\u0275template(31, OpportunityFormComponent_Conditional_31_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 5)(33, "label", 16);
        \u0275\u0275text(34, "Probability (%)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 5)(37, "label", 18);
        \u0275\u0275text(38, "Close date *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "input", 19);
        \u0275\u0275template(40, OpportunityFormComponent_Conditional_40_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 20)(42, "button", 21);
        \u0275\u0275listener("click", function OpportunityFormComponent_Template_button_click_42_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(43, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 22);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Edit opportunity" : "New opportunity");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Update this deal." : "Add a deal to your pipeline.");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(14, ((tmp_3_0 = ctx.form.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("name")) == null ? null : tmp_3_0.touched) ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.accounts);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.stageMeta);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(31, ((tmp_6_0 = ctx.form.get("amount")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("amount")) == null ? null : tmp_6_0.touched) ? 31 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(40, ((tmp_7_0 = ctx.form.get("closeDate")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.form.get("closeDate")) == null ? null : tmp_7_0.touched) ? 40 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Save changes" : "Create opportunity");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.forecast[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: 700;\n  color: var(--color-brand-dark);\n  margin-top: var(--space-2);\n}\n/*# sourceMappingURL=opportunities.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpportunityFormComponent, { className: "OpportunityFormComponent", filePath: "src/app/features/opportunities/opportunity-form.component.ts", lineNumber: 15 });
})();
export {
  OpportunityFormComponent
};
//# sourceMappingURL=opportunity-form.component-ZS4QKWNH.js.map
