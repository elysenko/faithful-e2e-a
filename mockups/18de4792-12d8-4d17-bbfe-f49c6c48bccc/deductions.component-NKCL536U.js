import {
  formatCents,
  toCents
} from "./chunk-U6DJL2W7.js";
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
} from "./chunk-MVQ5GWD2.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-OCSIP44N.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YT626SJK.js";

// src/app/pages/wizard/deductions/deductions.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function DeductionsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "No itemized deductions added \u2014 we'll use the standard deduction.");
    \u0275\u0275elementEnd();
  }
}
function DeductionsComponent_Conditional_6_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Capped at $10,000");
    \u0275\u0275elementEnd();
  }
}
function DeductionsComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DeductionsComponent_Conditional_6_For_2_Conditional_4_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 22);
    \u0275\u0275listener("click", function DeductionsComponent_Conditional_6_For_2_Template_button_click_7_listener() {
      const d_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(d_r2.id));
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.kindLabels[d_r2.kind]);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, d_r2.kind === "salt" ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(d_r2.amountCents));
  }
}
function DeductionsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, DeductionsComponent_Conditional_6_For_2_Template, 9, 3, "div", 16, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "span");
    \u0275\u0275text(5, "Itemized total (pre-cap)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.deductions());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.totalCents()));
  }
}
function DeductionsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r4 = ctx.$implicit;
    \u0275\u0275property("value", k_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r4.label);
  }
}
var DeductionsComponent = class _DeductionsComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.returnId = "";
    this.deductions = signal([
      { id: "x1", returnId: "r-2024", kind: "mortgage_interest", amountCents: 94e4 },
      { id: "x2", returnId: "r-2024", kind: "charity", amountCents: 12e4 }
    ]);
    this.kinds = [
      { value: "mortgage_interest", label: "Mortgage interest" },
      { value: "charity", label: "Charitable gifts" },
      { value: "salt", label: "State & local taxes (SALT)" }
    ];
    this.kindLabels = {
      mortgage_interest: "Mortgage interest",
      charity: "Charitable gifts",
      salt: "State & local taxes"
    };
    this.newKind = "mortgage_interest";
    this.newAmount = null;
    this.fmt = formatCents;
    this.returnId = this.route.parent?.snapshot.paramMap.get("id") ?? "";
  }
  totalCents() {
    return this.deductions().reduce((sum, d) => sum + d.amountCents, 0);
  }
  add() {
    if (this.newAmount === null)
      return;
    this.deductions.update((list) => [
      ...list,
      {
        id: "x" + (list.length + 1),
        returnId: this.returnId,
        kind: this.newKind,
        amountCents: toCents(this.newAmount ?? 0)
      }
    ]);
    this.newAmount = null;
  }
  remove(id) {
    this.deductions.update((list) => list.filter((d) => d.id !== id));
  }
  back() {
    this.router.navigate(["/returns", this.returnId, "wizard", "income"]);
  }
  next() {
    this.router.navigate(["/returns", this.returnId, "wizard", "review"]);
  }
  static {
    this.\u0275fac = function DeductionsComponent_Factory(t) {
      return new (t || _DeductionsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeductionsComponent, selectors: [["app-deductions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 3, consts: [[1, "wiz-step"], [1, "lead"], [1, "muted"], [1, "add-form", 3, "ngSubmit"], [1, "add-grid"], [1, "field"], ["for", "ded-kind"], ["id", "ded-kind", "name", "dedKind", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "ded-amount"], ["id", "ded-amount", "name", "dedAmount", "type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-outline"], [1, "wiz-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "item-list"], [1, "item-row"], [1, "total-row"], [1, "item-main"], [1, "item-title"], [1, "item-sub"], [1, "item-amount"], ["type", "button", "aria-label", "Remove deduction", 1, "item-remove", 3, "click"]], template: function DeductionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2");
        \u0275\u0275text(2, "Itemized deductions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, " Add your itemized deductions. We'll automatically compare them against the standard deduction and apply whichever saves you more. ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, DeductionsComponent_Conditional_5_Template, 2, 0, "p", 2)(6, DeductionsComponent_Conditional_6_Template, 8, 1);
        \u0275\u0275elementStart(7, "form", 3);
        \u0275\u0275listener("ngSubmit", function DeductionsComponent_Template_form_ngSubmit_7_listener() {
          return ctx.add();
        });
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label", 6);
        \u0275\u0275text(11, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function DeductionsComponent_Template_select_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newKind, $event) || (ctx.newKind = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(13, DeductionsComponent_For_14_Template, 2, 2, "option", 8, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "label", 9);
        \u0275\u0275text(17, "Amount ($)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function DeductionsComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newAmount, $event) || (ctx.newAmount = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275text(20, "+ Add deduction");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "button", 13);
        \u0275\u0275listener("click", function DeductionsComponent_Template_button_click_22_listener() {
          return ctx.back();
        });
        \u0275\u0275text(23, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 14);
        \u0275\u0275listener("click", function DeductionsComponent_Template_button_click_24_listener() {
          return ctx.next();
        });
        \u0275\u0275text(25, "Review & estimate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.deductions().length === 0 ? 5 : 6);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.newKind);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.kinds);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.newAmount);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm], styles: ["\n\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--space-3) var(--space-4);\n  margin-bottom: var(--space-4);\n  background: var(--color-brand-tint);\n  border-radius: var(--radius);\n  font-variant-numeric: tabular-nums;\n}\n.total-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  color: var(--color-brand-dark);\n}\n/*# sourceMappingURL=deductions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeductionsComponent, { className: "DeductionsComponent", filePath: "src/app/pages/wizard/deductions/deductions.component.ts", lineNumber: 16 });
})();
export {
  DeductionsComponent
};
//# sourceMappingURL=deductions.component-NKCL536U.js.map
