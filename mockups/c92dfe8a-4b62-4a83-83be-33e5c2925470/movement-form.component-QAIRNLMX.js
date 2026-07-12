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
} from "./chunk-6WBQSCB2.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-JU25ONEJ.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-DARMOPX2.js";

// src/app/features/movements/movement-form.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function MovementFormComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function MovementFormComponent_For_12_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectType(t_r2.value));
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.type === t_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.hint);
  }
}
function MovementFormComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", item_r4.sku, " \u2014 ", item_r4.name, "");
  }
}
function MovementFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Please choose an item");
    \u0275\u0275elementEnd();
  }
}
function MovementFormComponent_Conditional_23_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r5 = ctx.$implicit;
    \u0275\u0275property("value", loc_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", loc_r5.name, " (Zone ", loc_r5.zone, ")");
  }
}
function MovementFormComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 23);
    \u0275\u0275text(2, "From location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 24)(4, "option", 8);
    \u0275\u0275text(5, "Source\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, MovementFormComponent_Conditional_23_For_7_Template, 2, 3, "option", 9, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.locations());
  }
}
function MovementFormComponent_Conditional_24_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r6 = ctx.$implicit;
    \u0275\u0275property("value", loc_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", loc_r6.name, " (Zone ", loc_r6.zone, ")");
  }
}
function MovementFormComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 25);
    \u0275\u0275text(2, "To location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 26)(4, "option", 8);
    \u0275\u0275text(5, "Destination\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, MovementFormComponent_Conditional_24_For_7_Template, 2, 3, "option", 9, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.locations());
  }
}
function MovementFormComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Quantity must be at least 1");
    \u0275\u0275elementEnd();
  }
}
function MovementFormComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
var MovementFormComponent = class _MovementFormComponent {
  constructor(fb, route, router) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.submitting = signal(false);
    this.errorMessage = signal(null);
    this.types = [
      { value: "IN", label: "Stock In", hint: "Receive stock into a location" },
      { value: "OUT", label: "Stock Out", hint: "Remove stock from a location" },
      { value: "TRANSFER", label: "Transfer", hint: "Move stock between locations" }
    ];
    this.items = signal([
      { id: "1", sku: "SR-1001", name: "Steel Bolt M6", description: "", unit: "pcs", reorderAt: 100, totalQty: 340 },
      { id: "2", sku: "SR-1002", name: "Hex Nut M6", description: "", unit: "pcs", reorderAt: 100, totalQty: 80 },
      { id: "3", sku: "SR-1003", name: "Copper Wire 2mm", description: "", unit: "m", reorderAt: 50, totalQty: 220 },
      { id: "6", sku: "SR-1006", name: "LED Panel 40W", description: "", unit: "pcs", reorderAt: 20, totalQty: 12 }
    ]);
    this.locations = signal([
      { id: "L1", name: "Main Warehouse", zone: "A" },
      { id: "L2", name: "Overflow Depot", zone: "B" },
      { id: "L3", name: "Front Store", zone: "C" }
    ]);
    this.form = this.fb.group({
      type: ["IN", Validators.required],
      itemId: ["", Validators.required],
      fromLocId: [""],
      toLocId: [""],
      qty: [1, [Validators.required, Validators.min(1)]],
      note: [""]
    });
  }
  ngOnInit() {
    const type = this.route.snapshot.queryParamMap.get("type");
    if (type && ["IN", "OUT", "TRANSFER"].includes(type)) {
      this.form.patchValue({ type });
    }
    this.form.get("type").valueChanges.subscribe((t) => {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { type: t },
        queryParamsHandling: "merge",
        replaceUrl: true
      });
    });
  }
  get type() {
    return this.form.get("type").value;
  }
  get needsFrom() {
    return this.type === "OUT" || this.type === "TRANSFER";
  }
  get needsTo() {
    return this.type === "IN" || this.type === "TRANSFER";
  }
  selectType(t) {
    this.form.patchValue({ type: t });
  }
  onSubmit() {
    this.errorMessage.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    if (this.needsFrom && !v.fromLocId) {
      this.errorMessage.set("A source location is required.");
      return;
    }
    if (this.needsTo && !v.toLocId) {
      this.errorMessage.set("A destination location is required.");
      return;
    }
    if (this.type === "TRANSFER" && v.fromLocId === v.toLocId) {
      this.errorMessage.set("Source and destination must be different.");
      return;
    }
    this.submitting.set(true);
    setTimeout(() => {
      this.submitting.set(false);
      if (this.needsFrom && v.qty > 60) {
        this.errorMessage.set("Insufficient stock at the source location (409).");
        return;
      }
      this.router.navigate(["/items", v.itemId]);
    }, 400);
  }
  static {
    this.\u0275fac = function MovementFormComponent_Factory(t) {
      return new (t || _MovementFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovementFormComponent, selectors: [["app-movement-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 8, consts: [[1, "page-title-row"], [1, "muted"], [1, "card", "card-pad", "form-card", 3, "ngSubmit", "formGroup"], [1, "field"], [1, "type-grid"], ["type", "button", 1, "type-btn", 3, "selected"], ["for", "itemId"], ["id", "itemId", "formControlName", "itemId"], ["value", "", "disabled", ""], [3, "value"], [1, "field-error"], [1, "loc-grid"], ["for", "qty"], ["id", "qty", "type", "number", "min", "1", "formControlName", "qty", "inputmode", "numeric"], ["for", "note"], [1, "muted", "text-sm"], ["id", "note", "formControlName", "note", "placeholder", "e.g. Supplier delivery, line 3 assembly\u2026"], ["role", "alert", 1, "field-error", "banner"], [1, "actions"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["type", "button", 1, "type-btn", 3, "click"], [1, "type-label"], [1, "type-hint", "muted", "text-sm"], ["for", "fromLocId"], ["id", "fromLocId", "formControlName", "fromLocId"], ["for", "toLocId"], ["id", "toLocId", "formControlName", "toLocId"]], template: function MovementFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Record Movement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Log a stock IN, OUT, or TRANSFER. Recorded to the audit log.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "form", 2);
        \u0275\u0275listener("ngSubmit", function MovementFormComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(7, "div", 3)(8, "label");
        \u0275\u0275text(9, "Movement type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 4);
        \u0275\u0275repeaterCreate(11, MovementFormComponent_For_12_Template, 5, 4, "button", 5, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 3)(14, "label", 6);
        \u0275\u0275text(15, "Item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "select", 7)(17, "option", 8);
        \u0275\u0275text(18, "Select an item\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(19, MovementFormComponent_For_20_Template, 2, 3, "option", 9, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, MovementFormComponent_Conditional_21_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 11);
        \u0275\u0275template(23, MovementFormComponent_Conditional_23_Template, 8, 0, "div", 3)(24, MovementFormComponent_Conditional_24_Template, 8, 0, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 3)(26, "label", 12);
        \u0275\u0275text(27, "Quantity");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 13);
        \u0275\u0275template(29, MovementFormComponent_Conditional_29_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 3)(31, "label", 14);
        \u0275\u0275text(32, "Note ");
        \u0275\u0275elementStart(33, "span", 15);
        \u0275\u0275text(34, "(optional)");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(35, "textarea", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, MovementFormComponent_Conditional_36_Template, 2, 1, "div", 17);
        \u0275\u0275elementStart(37, "div", 18)(38, "button", 19);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_6_0;
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.types);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(21, ((tmp_3_0 = ctx.form.get("itemId")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("itemId")) == null ? null : tmp_3_0.touched) ? 21 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(23, ctx.needsFrom ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(24, ctx.needsTo ? 24 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(29, ((tmp_6_0 = ctx.form.get("qty")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("qty")) == null ? null : tmp_6_0.touched) ? 29 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(36, ctx.errorMessage() ? 36 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.submitting());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting() ? "Recording\u2026" : "Record " + ctx.type, " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.form-card[_ngcontent-%COMP%] {\n  max-width: 560px;\n}\n.type-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: var(--space-2);\n}\n.type-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  align-items: flex-start;\n  text-align: left;\n  min-height: 60px;\n  padding: var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n  background: var(--color-surface);\n  cursor: pointer;\n  font-family: inherit;\n  transition: border 0.15s ease, background 0.15s ease;\n}\n.type-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.type-btn.selected[_ngcontent-%COMP%] {\n  border-color: var(--color-primary);\n  background: var(--color-primary-soft);\n}\n.type-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.loc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--space-3);\n}\n.banner[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  background: var(--color-danger-bg);\n  border-radius: var(--radius-md);\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n}\n/*# sourceMappingURL=movement-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovementFormComponent, { className: "MovementFormComponent", filePath: "src/app/features/movements/movement-form.component.ts", lineNumber: 14 });
})();
export {
  MovementFormComponent
};
//# sourceMappingURL=movement-form.component-QAIRNLMX.js.map
