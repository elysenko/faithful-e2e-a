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
  BOAT_TYPE_LABELS
} from "./chunk-TNBIIBTV.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-GFN35O44.js";
import {
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KFEQ7DOY.js";

// src/app/pages/practice-form/practice-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PracticeFormComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Start time is required.");
    \u0275\u0275elementEnd();
  }
}
function PracticeFormComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Capacity must be at least 1.");
    \u0275\u0275elementEnd();
  }
}
function PracticeFormComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function PracticeFormComponent_For_34_Template_button_click_0_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleBoat(b_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 22)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected-boat", ctx_r2.isSelected(b_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isSelected(b_r2.id) ? "\u2611\uFE0F" : "\u2B1C");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.boatLabel(b_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", b_r2.seats, " seats");
  }
}
var PracticeFormComponent = class _PracticeFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.id = inject(ActivatedRoute).snapshot.paramMap.get("id");
    this.isEdit = !!this.id;
    this.boats = signal([
      { id: "b1", name: "Morning Star", type: "ONE_X", seats: 1, status: "active" },
      { id: "b2", name: "Twin Oars", type: "TWO_X", seats: 2, status: "active" },
      { id: "b3", name: "Quad Squad", type: "FOUR_PLUS", seats: 5, status: "maintenance" },
      { id: "b4", name: "The Octet", type: "EIGHT_PLUS", seats: 9, status: "active" }
    ]);
    this.selectedBoatIds = signal(this.isEdit ? ["b4"] : []);
    this.form = this.fb.group({
      startsAt: [this.isEdit ? "2026-07-15T06:00" : "", [Validators.required]],
      capacity: [this.isEdit ? 8 : 8, [Validators.required, Validators.min(1)]],
      notes: [this.isEdit ? "Steady-state endurance row" : ""]
    });
  }
  boatLabel(t) {
    return BOAT_TYPE_LABELS[t];
  }
  isSelected(id) {
    return this.selectedBoatIds().includes(id);
  }
  toggleBoat(id) {
    this.selectedBoatIds.update((ids) => ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
  static {
    this.\u0275fac = function PracticeFormComponent_Factory(t) {
      return new (t || _PracticeFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PracticeFormComponent, selectors: [["app-practice-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 10, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/schedule"], [1, "faint"], [1, "section-title"], [1, "stack", 2, "gap", "var(--sp-1)"], [1, "eyebrow"], [1, "card", "card-pad", "stack", 2, "max-width", "640px", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "startsAt"], ["id", "startsAt", "type", "datetime-local", "formControlName", "startsAt", 1, "input"], [1, "field-error"], ["for", "capacity"], ["id", "capacity", "type", "number", "min", "1", "formControlName", "capacity", 1, "input"], ["for", "notes"], ["id", "notes", "rows", "3", "formControlName", "notes", "placeholder", "Session focus, meeting point, etc.", 1, "textarea"], [1, "stack", 2, "gap", "var(--sp-2)"], ["type", "button", 1, "card", "card-pad", "row-between", 2, "cursor", "pointer", "padding", "var(--sp-3) var(--sp-4)", 3, "selected-boat"], [1, "row"], ["type", "submit", 1, "btn", "btn-primary"], ["routerLink", "/schedule", 1, "btn", "btn-ghost"], ["type", "button", 1, "card", "card-pad", "row-between", 2, "cursor", "pointer", "padding", "var(--sp-3) var(--sp-4)", 3, "click"], [1, "row", 2, "gap", "var(--sp-2)"], [1, "tag"], [1, "muted", "small"]], template: function PracticeFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275text(3, "Schedule");
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
        \u0275\u0275listener("ngSubmit", function PracticeFormComponent_Template_form_ngSubmit_14_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 9);
        \u0275\u0275text(17, "Date & time");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 10);
        \u0275\u0275template(19, PracticeFormComponent_Conditional_19_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8)(21, "label", 12);
        \u0275\u0275text(22, "Capacity");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 13);
        \u0275\u0275template(24, PracticeFormComponent_Conditional_24_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 8)(26, "label", 14);
        \u0275\u0275text(27, "Notes");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "textarea", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 8)(30, "label");
        \u0275\u0275text(31, "Assign boats");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 16);
        \u0275\u0275repeaterCreate(33, PracticeFormComponent_For_34_Template, 10, 6, "button", 17, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 18)(36, "button", 19);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "a", 20);
        \u0275\u0275text(39, "Cancel");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Edit practice" : "New practice");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Edit practice" : "New practice");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("input-invalid", ctx.form.controls.startsAt.invalid && ctx.form.controls.startsAt.touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.form.controls.startsAt.invalid && ctx.form.controls.startsAt.touched ? 19 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("input-invalid", ctx.form.controls.capacity.invalid && ctx.form.controls.capacity.touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(24, ctx.form.controls.capacity.invalid && ctx.form.controls.capacity.touched ? 24 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.boats());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Save changes" : "Create practice");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.selected-boat[_ngcontent-%COMP%] {\n  border-color: var(--color-brand);\n  box-shadow: 0 0 0 2px var(--color-brand-light);\n}\n/*# sourceMappingURL=practice-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PracticeFormComponent, { className: "PracticeFormComponent", filePath: "src/app/pages/practice-form/practice-form.component.ts", lineNumber: 14 });
})();
export {
  PracticeFormComponent
};
//# sourceMappingURL=practice-form.component-CD6Z5BUB.js.map
