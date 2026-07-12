import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-FGE4ALCS.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UQ66P35U.js";

// src/app/pages/bill-form/bill-form.component.ts
function BillFormComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
var BillFormComponent = class _BillFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.statuses = ["introduced", "committee", "passed", "signed", "vetoed"];
    this.billId = signal(null);
    this.saving = signal(false);
    this.isEdit = computed(() => !!this.billId());
    this.form = this.fb.group({
      number: ["", [Validators.required]],
      title: ["", [Validators.required]],
      summary: [""],
      status: ["introduced", [Validators.required]],
      session: [2025, [Validators.required]],
      sectors: [""]
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.billId.set(id);
    if (id) {
      this.form.patchValue({
        number: "HB0042",
        title: "Renewable Energy Tax Incentives",
        summary: "Establishes refundable tax credits for solar and wind installations.",
        status: "committee",
        session: 2025,
        sectors: "energy, environment"
      });
    }
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const id = this.billId();
    setTimeout(() => {
      this.saving.set(false);
      this.router.navigate(id ? ["/bills", id] : ["/bills"]);
    }, 250);
  }
  cancel() {
    const id = this.billId();
    this.router.navigate(id ? ["/bills", id] : ["/bills"]);
  }
  static {
    this.\u0275fac = function BillFormComponent_Factory(t) {
      return new (t || _BillFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillFormComponent, selectors: [["app-bill-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 4, consts: [["routerLink", "/bills", 1, "back-link"], [1, "card", "form-card"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "field"], ["for", "number"], ["id", "number", "type", "text", "formControlName", "number", "placeholder", "HB0042"], ["for", "session"], ["id", "session", "type", "number", "formControlName", "session"], ["for", "title"], ["id", "title", "type", "text", "formControlName", "title", "placeholder", "Short bill title"], ["for", "summary"], ["id", "summary", "formControlName", "summary", "rows", "4", "placeholder", "Plain-language summary\u2026"], ["for", "status"], ["id", "status", "formControlName", "status"], [3, "value"], ["for", "sectors"], ["id", "sectors", "type", "text", "formControlName", "sectors", "placeholder", "energy, environment"], [1, "hint", "muted"], [1, "form-foot"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function BillFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275text(1, "\u2190 All bills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 1)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 2);
        \u0275\u0275listener("ngSubmit", function BillFormComponent_Template_form_ngSubmit_5_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "label", 5);
        \u0275\u0275text(9, "Bill number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 4)(12, "label", 7);
        \u0275\u0275text(13, "Session");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "label", 9);
        \u0275\u0275text(17, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 4)(20, "label", 11);
        \u0275\u0275text(21, "Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "textarea", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 3)(24, "div", 4)(25, "label", 13);
        \u0275\u0275text(26, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "select", 14);
        \u0275\u0275repeaterCreate(28, BillFormComponent_For_29_Template, 2, 2, "option", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 4)(31, "label", 16);
        \u0275\u0275text(32, "Sectors");
        \u0275\u0275elementEnd();
        \u0275\u0275element(33, "input", 17);
        \u0275\u0275elementStart(34, "span", 18);
        \u0275\u0275text(35, "Comma-separated, lowercase.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 19)(37, "button", 20);
        \u0275\u0275listener("click", function BillFormComponent_Template_button_click_37_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(38, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 21);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Edit bill" : "New bill");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(23);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(11);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : ctx.isEdit() ? "Save changes" : "Create bill", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.form-card[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: var(--space-5);\n}\n.form-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: var(--fs-xl);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--space-3);\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.form-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n  margin-top: var(--space-3);\n}\n@media (max-width: 768px) {\n  .form-foot[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .form-foot[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=bill-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillFormComponent, { className: "BillFormComponent", filePath: "src/app/pages/bill-form/bill-form.component.ts", lineNumber: 14 });
})();
export {
  BillFormComponent
};
//# sourceMappingURL=bill-form.component-D2F3PGBI.js.map
