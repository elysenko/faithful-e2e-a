import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-3DEXCJGJ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-AFRLPGFB.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G3BCJOAS.js";

// src/app/pages/movement-record/movement-record.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MovementRecordComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Movement recorded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 2);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275listener("click", function MovementRecordComponent_Conditional_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recordAnother());
    });
    \u0275\u0275text(9, "Record another");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("click", function MovementRecordComponent_Conditional_7_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToItems());
    });
    \u0275\u0275text(11, "Back to items");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("The ", ctx_r1.type(), " movement has been logged and stock balances updated.");
  }
}
function MovementRecordComponent_Conditional_8_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function MovementRecordComponent_Conditional_8_For_6_Template_button_click_0_listener() {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setType(t_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.type() === t_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5, " ");
  }
}
function MovementRecordComponent_Conditional_8_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r6 = ctx.$implicit;
    \u0275\u0275property("value", it_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", it_r6.sku, " \u2014 ", it_r6.name, "");
  }
}
function MovementRecordComponent_Conditional_8_Conditional_15_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r8 = ctx.$implicit;
    \u0275\u0275property("value", l_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r8.name);
  }
}
function MovementRecordComponent_Conditional_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 25);
    \u0275\u0275text(2, "From location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function MovementRecordComponent_Conditional_8_Conditional_15_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.fromLocId, $event) || (ctx_r1.model.fromLocId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 14);
    \u0275\u0275text(5, "Select source\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, MovementRecordComponent_Conditional_8_Conditional_15_For_7_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.fromLocId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.locations());
  }
}
function MovementRecordComponent_Conditional_8_Conditional_16_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r10 = ctx.$implicit;
    \u0275\u0275property("value", l_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r10.name);
  }
}
function MovementRecordComponent_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 27);
    \u0275\u0275text(2, "To location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function MovementRecordComponent_Conditional_8_Conditional_16_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.toLocId, $event) || (ctx_r1.model.toLocId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 14);
    \u0275\u0275text(5, "Select destination\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, MovementRecordComponent_Conditional_8_Conditional_16_For_7_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.toLocId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.locations());
  }
}
function MovementRecordComponent_Conditional_8_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function MovementRecordComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 8);
    \u0275\u0275listener("ngSubmit", function MovementRecordComponent_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "label");
    \u0275\u0275text(3, "Movement type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275repeaterCreate(5, MovementRecordComponent_Conditional_8_For_6_Template, 2, 3, "button", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9)(8, "label", 12);
    \u0275\u0275text(9, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function MovementRecordComponent_Conditional_8_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.itemId, $event) || (ctx_r1.model.itemId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(11, "option", 14);
    \u0275\u0275text(12, "Select an item\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, MovementRecordComponent_Conditional_8_For_14_Template, 2, 3, "option", 15, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, MovementRecordComponent_Conditional_8_Conditional_15_Template, 8, 1, "div", 9)(16, MovementRecordComponent_Conditional_8_Conditional_16_Template, 8, 1, "div", 9);
    \u0275\u0275elementStart(17, "div", 9)(18, "label", 16);
    \u0275\u0275text(19, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function MovementRecordComponent_Conditional_8_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.qty, $event) || (ctx_r1.model.qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 9)(22, "label", 18);
    \u0275\u0275text(23, "Note ");
    \u0275\u0275elementStart(24, "span", 2);
    \u0275\u0275text(25, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function MovementRecordComponent_Conditional_8_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.note, $event) || (ctx_r1.model.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, MovementRecordComponent_Conditional_8_Conditional_27_Template, 2, 1, "p", 20);
    \u0275\u0275elementStart(28, "div", 21)(29, "button", 22);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 23);
    \u0275\u0275listener("click", function MovementRecordComponent_Conditional_8_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToItems());
    });
    \u0275\u0275text(32, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.types);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.itemId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.items());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(15, ctx_r1.needsFrom ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(16, ctx_r1.needsTo ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.qty);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.note);
    \u0275\u0275advance();
    \u0275\u0275conditional(27, ctx_r1.error() ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Recording\u2026" : "Record " + ctx_r1.type(), " ");
  }
}
var MovementRecordComponent = class _MovementRecordComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.saving = signal(false);
    this.error = signal(null);
    this.done = signal(false);
    this.types = ["IN", "OUT", "TRANSFER"];
    this.type = signal("IN");
    this.items = signal([
      { id: "i1", sku: "SKU-1001", name: "Steel Bolt M6", unit: "pcs", reorderAt: 100, onHand: 340 },
      { id: "i2", sku: "SKU-1002", name: "Copper Wire 2mm", unit: "m", reorderAt: 200, onHand: 85 },
      { id: "i3", sku: "SKU-1003", name: "PVC Pipe 20mm", unit: "pcs", reorderAt: 50, onHand: 12 },
      { id: "i6", sku: "SKU-1006", name: "Rubber Gasket 50mm", unit: "pcs", reorderAt: 80, onHand: 0 }
    ]);
    this.locations = signal([
      { id: "l1", name: "Main Warehouse", zone: "A" },
      { id: "l2", name: "Storefront", zone: "B" },
      { id: "l3", name: "Overflow Depot", zone: "C" }
    ]);
    this.model = { itemId: "", fromLocId: "", toLocId: "", qty: 1, note: "" };
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((p) => {
      const t = (p.get("type") ?? "").toUpperCase();
      if (this.types.includes(t))
        this.type.set(t);
      const itemId = p.get("itemId");
      if (itemId)
        this.model.itemId = itemId;
    });
  }
  setType(t) {
    this.type.set(t);
    this.error.set(null);
  }
  get needsFrom() {
    return this.type() === "OUT" || this.type() === "TRANSFER";
  }
  get needsTo() {
    return this.type() === "IN" || this.type() === "TRANSFER";
  }
  submit() {
    if (!this.model.itemId) {
      this.error.set("Select an item.");
      return;
    }
    if (this.needsFrom && !this.model.fromLocId) {
      this.error.set("Select a source location.");
      return;
    }
    if (this.needsTo && !this.model.toLocId) {
      this.error.set("Select a destination location.");
      return;
    }
    if (this.type() === "TRANSFER" && this.model.fromLocId === this.model.toLocId) {
      this.error.set("Source and destination must differ.");
      return;
    }
    if (!this.model.qty || this.model.qty <= 0) {
      this.error.set("Quantity must be greater than zero.");
      return;
    }
    this.error.set(null);
    this.saving.set(true);
    this.saving.set(false);
    this.done.set(true);
  }
  recordAnother() {
    this.done.set(false);
    this.model = { itemId: "", fromLocId: "", toLocId: "", qty: 1, note: "" };
  }
  goToItems() {
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function MovementRecordComponent_Factory(t) {
      return new (t || _MovementRecordComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovementRecordComponent, selectors: [["app-movement-record"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "container", "narrow"], ["routerLink", "/", 1, "back-link"], [1, "muted"], [1, "card", "success-card"], [1, "success-icon"], [1, "form-actions", "center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [1, "card", "form-card", 3, "ngSubmit"], [1, "field"], ["role", "group", "aria-label", "Movement type", 1, "segmented"], ["type", "button", 1, "seg", 3, "active"], ["for", "item"], ["id", "item", "name", "item", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "qty"], ["id", "qty", "type", "number", "name", "qty", "min", "1", 3, "ngModelChange", "ngModel"], ["for", "note"], ["id", "note", "name", "note", "placeholder", "Reference, reason, PO number\u2026", 3, "ngModelChange", "ngModel"], [1, "error"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-accent", 3, "disabled"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "button", 1, "seg", 3, "click"], ["for", "from"], ["id", "from", "name", "from", 3, "ngModelChange", "ngModel"], ["for", "to"], ["id", "to", "name", "to", 3, "ngModelChange", "ngModel"]], template: function MovementRecordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h1");
        \u0275\u0275text(4, "Record movement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Log stock coming in, going out, or transferring between locations.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, MovementRecordComponent_Conditional_7_Template, 12, 1, "div", 3)(8, MovementRecordComponent_Conditional_8_Template, 33, 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.done() ? 7 : 8);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\nh1[_ngcontent-%COMP%]    + .muted[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 var(--space-5);\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.segmented[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-1);\n  padding: var(--space-1);\n  background: var(--color-surface-inset);\n  border-radius: var(--radius);\n}\n.seg[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 44px;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  color: var(--color-ink-soft);\n  font-family: inherit;\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  cursor: pointer;\n  transition: background .15s, color .15s;\n}\n.seg[_ngcontent-%COMP%]:active {\n  transform: scale(.98);\n}\n.seg.active[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  color: var(--color-brand-dark);\n  box-shadow: var(--shadow-sm);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n}\n.form-actions.center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.success-card[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.success-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n@media (max-width: 560px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=movement-record.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovementRecordComponent, { className: "MovementRecordComponent", filePath: "src/app/pages/movement-record/movement-record.component.ts", lineNumber: 19 });
})();
export {
  MovementRecordComponent
};
//# sourceMappingURL=movement-record.component-SSOFEXK2.js.map
