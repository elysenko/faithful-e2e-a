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
} from "./chunk-X7NVN2CM.js";
import {
  ActivatedRoute,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KFEQ7DOY.js";

// src/app/pages/boat-form/boat-form.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function BoatFormComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function BoatFormComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.label);
  }
}
function BoatFormComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Seats must be at least 1.");
    \u0275\u0275elementEnd();
  }
}
function BoatFormComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("value", s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2);
  }
}
var BoatFormComponent = class _BoatFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.id = inject(ActivatedRoute).snapshot.paramMap.get("id");
    this.isEdit = !!this.id;
    this.types = [
      { value: "ONE_X", label: "1x \u2014 Single" },
      { value: "TWO_X", label: "2x \u2014 Double" },
      { value: "FOUR_PLUS", label: "4+ \u2014 Coxed four" },
      { value: "EIGHT_PLUS", label: "8+ \u2014 Eight" }
    ];
    this.statuses = ["active", "maintenance", "retired"];
    this.form = this.fb.group({
      name: [this.isEdit ? "Morning Star" : "", [Validators.required]],
      type: [this.isEdit ? "ONE_X" : "ONE_X", [Validators.required]],
      seats: [this.isEdit ? 1 : 1, [Validators.required, Validators.min(1)]],
      status: [this.isEdit ? "active" : "active", [Validators.required]]
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
  static {
    this.\u0275fac = function BoatFormComponent_Factory(t) {
      return new (t || _BoatFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoatFormComponent, selectors: [["app-boat-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 10, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/boats"], [1, "faint"], [1, "section-title"], [1, "stack", 2, "gap", "var(--sp-1)"], [1, "eyebrow"], [1, "card", "card-pad", "stack", 2, "max-width", "640px", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", 1, "input"], [1, "field-error"], ["for", "type"], ["id", "type", "formControlName", "type", 1, "select"], [3, "value"], ["for", "seats"], ["id", "seats", "type", "number", "min", "1", "formControlName", "seats", 1, "input"], ["for", "status"], ["id", "status", "formControlName", "status", 1, "select"], [1, "row"], ["type", "submit", 1, "btn", "btn-primary"], ["routerLink", "/boats", 1, "btn", "btn-ghost"]], template: function BoatFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275text(3, "Boats");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "span", 6);
        \u0275\u0275text(11, "Coach");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h2");
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "form", 7);
        \u0275\u0275listener("ngSubmit", function BoatFormComponent_Template_form_ngSubmit_14_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 9);
        \u0275\u0275text(17, "Boat name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 10);
        \u0275\u0275template(19, BoatFormComponent_Conditional_19_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8)(21, "label", 12);
        \u0275\u0275text(22, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "select", 13);
        \u0275\u0275repeaterCreate(24, BoatFormComponent_For_25_Template, 2, 2, "option", 14, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 8)(27, "label", 15);
        \u0275\u0275text(28, "Seats");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 16);
        \u0275\u0275template(30, BoatFormComponent_Conditional_30_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 8)(32, "label", 17);
        \u0275\u0275text(33, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "select", 18);
        \u0275\u0275repeaterCreate(35, BoatFormComponent_For_36_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 19)(38, "button", 20);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "a", 21);
        \u0275\u0275text(41, "Cancel");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Edit boat" : "New boat");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Edit boat" : "New boat");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("input-invalid", ctx.form.controls.name.invalid && ctx.form.controls.name.touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.form.controls.name.invalid && ctx.form.controls.name.touched ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.types);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("input-invalid", ctx.form.controls.seats.invalid && ctx.form.controls.seats.touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(30, ctx.form.controls.seats.invalid && ctx.form.controls.seats.touched ? 30 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Save changes" : "Add boat");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoatFormComponent, { className: "BoatFormComponent", filePath: "src/app/pages/boat-form/boat-form.component.ts", lineNumber: 13 });
})();
export {
  BoatFormComponent
};
//# sourceMappingURL=boat-form.component-HH6HHFJZ.js.map
