import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X7NVN2CM.js";
import {
  RouterLink
} from "./chunk-GFN35O44.js";
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
} from "./chunk-KFEQ7DOY.js";

// src/app/pages/condition-new/condition-new.component.ts
function ConditionNewComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Date is required.");
    \u0275\u0275elementEnd();
  }
}
function ConditionNewComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Water temperature is required.");
    \u0275\u0275elementEnd();
  }
}
function ConditionNewComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Wind speed is required.");
    \u0275\u0275elementEnd();
  }
}
var ConditionNewComponent = class _ConditionNewComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.form = this.fb.group({
      loggedOn: ["2026-07-12T05:30", [Validators.required]],
      waterTempC: [19, [Validators.required]],
      windKts: [8, [Validators.required, Validators.min(0)]],
      note: [""]
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
  static {
    this.\u0275fac = function ConditionNewComponent_Factory(t) {
      return new (t || _ConditionNewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConditionNewComponent, selectors: [["app-condition-new"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 10, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/conditions"], [1, "faint"], [1, "section-title"], [1, "stack", 2, "gap", "var(--sp-1)"], [1, "eyebrow"], [1, "card", "card-pad", "stack", 2, "max-width", "640px", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "loggedOn"], ["id", "loggedOn", "type", "datetime-local", "formControlName", "loggedOn", 1, "input"], [1, "field-error"], [1, "grid-two"], [1, "field", 2, "margin", "0"], ["for", "waterTempC"], ["id", "waterTempC", "type", "number", "step", "0.1", "formControlName", "waterTempC", 1, "input"], ["for", "windKts"], ["id", "windKts", "type", "number", "step", "0.1", "min", "0", "formControlName", "windKts", 1, "input"], ["for", "note"], ["id", "note", "rows", "3", "formControlName", "note", "placeholder", "e.g. Calm, light chop near the north bank", 1, "textarea"], [1, "row"], ["type", "submit", 1, "btn", "btn-primary"], ["routerLink", "/conditions", 1, "btn", "btn-ghost"]], template: function ConditionNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275text(3, "Conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "Log conditions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "span", 6);
        \u0275\u0275text(11, "Water & weather");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h2");
        \u0275\u0275text(13, "Log conditions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "form", 7);
        \u0275\u0275listener("ngSubmit", function ConditionNewComponent_Template_form_ngSubmit_14_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 9);
        \u0275\u0275text(17, "Date & time");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 10);
        \u0275\u0275template(19, ConditionNewComponent_Conditional_19_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "label", 14);
        \u0275\u0275text(23, "Water temp (\xB0C)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 15);
        \u0275\u0275template(25, ConditionNewComponent_Conditional_25_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13)(27, "label", 16);
        \u0275\u0275text(28, "Wind (kts)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 17);
        \u0275\u0275template(30, ConditionNewComponent_Conditional_30_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 8)(32, "label", 18);
        \u0275\u0275text(33, "Note");
        \u0275\u0275elementEnd();
        \u0275\u0275element(34, "textarea", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 20)(36, "button", 21);
        \u0275\u0275text(37, "Save log");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "a", 22);
        \u0275\u0275text(39, "Cancel");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("input-invalid", ctx.form.controls.loggedOn.invalid && ctx.form.controls.loggedOn.touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.form.controls.loggedOn.invalid && ctx.form.controls.loggedOn.touched ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("input-invalid", ctx.form.controls.waterTempC.invalid && ctx.form.controls.waterTempC.touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(25, ctx.form.controls.waterTempC.invalid && ctx.form.controls.waterTempC.touched ? 25 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("input-invalid", ctx.form.controls.windKts.invalid && ctx.form.controls.windKts.touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(30, ctx.form.controls.windKts.invalid && ctx.form.controls.windKts.touched ? 30 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConditionNewComponent, { className: "ConditionNewComponent", filePath: "src/app/pages/condition-new/condition-new.component.ts", lineNumber: 12 });
})();
export {
  ConditionNewComponent
};
//# sourceMappingURL=condition-new.component-IMDODGSH.js.map
