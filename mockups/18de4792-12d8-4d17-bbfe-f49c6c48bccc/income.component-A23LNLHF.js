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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YT626SJK.js";

// src/app/pages/wizard/income/income.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function IncomeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "No income added yet.");
    \u0275\u0275elementEnd();
  }
}
function IncomeComponent_Conditional_6_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const i_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r2.fmt(i_r2.withheldCents), " withheld ");
  }
}
function IncomeComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275template(6, IncomeComponent_Conditional_6_For_2_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 24);
    \u0275\u0275listener("click", function IncomeComponent_Conditional_6_For_2_Template_button_click_9_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(i_r2.id));
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r2.payer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.kindLabels[i_r2.kind], " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(6, i_r2.kind === "w2" && i_r2.withheldCents ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(i_r2.amountCents));
  }
}
function IncomeComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, IncomeComponent_Conditional_6_For_2_Template, 11, 4, "div", 18, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "span");
    \u0275\u0275text(5, "Total income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.income());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.totalCents()));
  }
}
function IncomeComponent_For_14_Template(rf, ctx) {
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
function IncomeComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 25);
    \u0275\u0275text(2, "Tax withheld ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_Conditional_23_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newWithheld, $event) || (ctx_r2.newWithheld = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newWithheld);
  }
}
var IncomeComponent = class _IncomeComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.returnId = "";
    this.income = signal([
      { id: "i1", returnId: "r-2024", kind: "w2", payer: "Northwind LLC", amountCents: 685e4, withheldCents: 78e4 }
    ]);
    this.kinds = [
      { value: "w2", label: "W-2 wages" },
      { value: "int", label: "Interest (1099-INT)" },
      { value: "nec", label: "Self-employment (1099-NEC)" }
    ];
    this.kindLabels = {
      w2: "W-2 wages",
      int: "Interest",
      nec: "Self-employment"
    };
    this.newKind = "w2";
    this.newPayer = "";
    this.newAmount = null;
    this.newWithheld = null;
    this.fmt = formatCents;
    this.returnId = this.route.parent?.snapshot.paramMap.get("id") ?? "";
  }
  totalCents() {
    return this.income().reduce((sum, i) => sum + i.amountCents, 0);
  }
  add() {
    if (!this.newPayer || this.newAmount === null)
      return;
    this.income.update((list) => [
      ...list,
      {
        id: "i" + (list.length + 1),
        returnId: this.returnId,
        kind: this.newKind,
        payer: this.newPayer,
        amountCents: toCents(this.newAmount ?? 0),
        withheldCents: this.newKind === "w2" ? toCents(this.newWithheld ?? 0) : null
      }
    ]);
    this.newPayer = "";
    this.newAmount = null;
    this.newWithheld = null;
  }
  remove(id) {
    this.income.update((list) => list.filter((i) => i.id !== id));
  }
  back() {
    this.router.navigate(["/returns", this.returnId, "wizard", "dependents"]);
  }
  next() {
    this.router.navigate(["/returns", this.returnId, "wizard", "deductions"]);
  }
  static {
    this.\u0275fac = function IncomeComponent_Factory(t) {
      return new (t || _IncomeComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncomeComponent, selectors: [["app-income"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 5, consts: [[1, "wiz-step"], [1, "lead"], [1, "muted"], [1, "add-form", 3, "ngSubmit"], [1, "add-grid"], [1, "field"], ["for", "inc-kind"], ["id", "inc-kind", "name", "incKind", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "inc-payer"], ["id", "inc-payer", "name", "incPayer", "type", "text", "placeholder", "Employer / payer", 3, "ngModelChange", "ngModel"], ["for", "inc-amount"], ["id", "inc-amount", "name", "incAmount", "type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-outline"], [1, "wiz-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "item-list"], [1, "item-row"], [1, "total-row"], [1, "item-main"], [1, "item-title"], [1, "item-sub"], [1, "item-amount"], ["type", "button", "aria-label", "Remove income", 1, "item-remove", 3, "click"], ["for", "inc-withheld"], ["id", "inc-withheld", "name", "incWithheld", "type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", 3, "ngModelChange", "ngModel"]], template: function IncomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2");
        \u0275\u0275text(2, "Add your income");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Enter every W-2, interest, and self-employment source for the year.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, IncomeComponent_Conditional_5_Template, 2, 0, "p", 2)(6, IncomeComponent_Conditional_6_Template, 8, 1);
        \u0275\u0275elementStart(7, "form", 3);
        \u0275\u0275listener("ngSubmit", function IncomeComponent_Template_form_ngSubmit_7_listener() {
          return ctx.add();
        });
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label", 6);
        \u0275\u0275text(11, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_Template_select_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newKind, $event) || (ctx.newKind = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(13, IncomeComponent_For_14_Template, 2, 2, "option", 8, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5)(16, "label", 9);
        \u0275\u0275text(17, "Payer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newPayer, $event) || (ctx.newPayer = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 5)(20, "label", 11);
        \u0275\u0275text(21, "Amount ($)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function IncomeComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newAmount, $event) || (ctx.newAmount = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(23, IncomeComponent_Conditional_23_Template, 4, 1, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 13);
        \u0275\u0275text(25, "+ Add income");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 14)(27, "button", 15);
        \u0275\u0275listener("click", function IncomeComponent_Template_button_click_27_listener() {
          return ctx.back();
        });
        \u0275\u0275text(28, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 16);
        \u0275\u0275listener("click", function IncomeComponent_Template_button_click_29_listener() {
          return ctx.next();
        });
        \u0275\u0275text(30, "Continue");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.income().length === 0 ? 5 : 6);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.newKind);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.kinds);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.newPayer);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newAmount);
        \u0275\u0275advance();
        \u0275\u0275conditional(23, ctx.newKind === "w2" ? 23 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm], styles: ["\n\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--space-3) var(--space-4);\n  margin-bottom: var(--space-4);\n  background: var(--color-brand-tint);\n  border-radius: var(--radius);\n  font-variant-numeric: tabular-nums;\n}\n.total-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  color: var(--color-brand-dark);\n}\n/*# sourceMappingURL=income.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncomeComponent, { className: "IncomeComponent", filePath: "src/app/pages/wizard/income/income.component.ts", lineNumber: 16 });
})();
export {
  IncomeComponent
};
//# sourceMappingURL=income.component-A23LNLHF.js.map
