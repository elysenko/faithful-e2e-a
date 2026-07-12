import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
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
} from "./chunk-O3VZIQDQ.js";
import {
  Router,
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  CurrencyPipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-VVK4PSXI.js";

// src/app/pages/po-new/po-new.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PoNewComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.name);
  }
}
function PoNewComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Supplier is required.");
    \u0275\u0275elementEnd();
  }
}
function PoNewComponent_For_35_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("value", p_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r3.name, " (", p_r3.sku, ")");
  }
}
function PoNewComponent_For_35_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Product is required.");
    \u0275\u0275elementEnd();
  }
}
function PoNewComponent_For_35_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Qty must be at least 1.");
    \u0275\u0275elementEnd();
  }
}
function PoNewComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 16)(1, "td")(2, "select", 25)(3, "option", 9);
    \u0275\u0275text(4, "Select a product\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, PoNewComponent_For_35_For_6_Template, 2, 3, "option", 10, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PoNewComponent_For_35_Conditional_7_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 15);
    \u0275\u0275element(9, "input", 26);
    \u0275\u0275template(10, PoNewComponent_For_35_Conditional_10_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 27);
    \u0275\u0275listener("click", function PoNewComponent_For_35_Template_button_click_12_listener() {
      const $index_r4 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeLine($index_r4));
    });
    \u0275\u0275text(13, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    const line_r6 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", $index_r4);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r4.products());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, ((tmp_12_0 = line_r6.get("product")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = line_r6.get("product")) == null ? null : tmp_12_0.invalid) ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(10, ((tmp_13_0 = line_r6.get("qty")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = line_r6.get("qty")) == null ? null : tmp_13_0.invalid) ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r4.lines.length === 1);
  }
}
var PoNewComponent = class _PoNewComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.suppliers = signal([
      { id: "s1", name: "Acme Industrial Supply", contactName: "Jane Cole", email: "sales@acme.example" },
      { id: "s2", name: "Globex Materials", contactName: "Ravi Patel", email: "orders@globex.example" }
    ]);
    this.products = signal([
      { id: "p1", sku: "STL-001", name: "Steel Bolt M8", cost: 0.45, price: 1.2, onHand: 1200 },
      { id: "p3", sku: "PIP-050", name: "PVC Pipe 50mm", cost: 3.2, price: 7.5, onHand: 340 },
      { id: "p7", sku: "PNL-100", name: "Control Panel", cost: 145, price: 320, onHand: 18 }
    ]);
    this.form = this.fb.group({
      supplier: ["", Validators.required],
      lines: this.fb.array([this.createLine()])
    });
  }
  get lines() {
    return this.form.get("lines");
  }
  createLine() {
    return this.fb.group({
      product: ["", Validators.required],
      qty: [1, [Validators.required, Validators.min(1)]]
    });
  }
  addLine() {
    this.lines.push(this.createLine());
  }
  removeLine(i) {
    this.lines.removeAt(i);
  }
  estimatedTotal() {
    return this.lines.controls.reduce((sum, ctrl) => {
      const productId = ctrl.get("product")?.value;
      const qty = Number(ctrl.get("qty")?.value) || 0;
      const product = this.products().find((p) => p.id === productId);
      return sum + (product ? product.cost * qty : 0);
    }, 0);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.router.navigate(["/purchase-orders"]);
  }
  static {
    this.\u0275fac = function PoNewComponent_Factory(t) {
      return new (t || _PoNewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PoNewComponent, selectors: [["app-po-new"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 5, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/purchase-orders"], [1, "card", "card-pad", "stack"], [1, "section-title"], [1, "eyebrow"], [1, "stack", 3, "ngSubmit", "formGroup"], [1, "field"], ["formControlName", "supplier", 1, "select"], ["value", ""], [3, "value"], [1, "field-error"], [1, "divider"], ["formArrayName", "lines", 1, "table-wrap"], [1, "data"], [1, "num"], [3, "formGroupName"], [1, "row-between"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [1, "row", "center"], [1, "muted", "small"], [1, "price", "num"], [1, "row", "wrap-gap"], ["type", "submit", 1, "btn", "btn-primary"], ["routerLink", "/purchase-orders", 1, "btn", "btn-ghost"], ["formControlName", "product", 1, "select"], ["type", "number", "min", "1", "formControlName", "qty", 1, "input"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click", "disabled"]], template: function PoNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "Purchase Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, " / New ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "span", 5);
        \u0275\u0275text(8, "Procurement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h2");
        \u0275\u0275text(10, "New Purchase Order");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "form", 6);
        \u0275\u0275listener("ngSubmit", function PoNewComponent_Template_form_ngSubmit_11_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(12, "div", 7)(13, "label");
        \u0275\u0275text(14, "Supplier");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "select", 8)(16, "option", 9);
        \u0275\u0275text(17, "Select a supplier\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(18, PoNewComponent_For_19_Template, 2, 2, "option", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, PoNewComponent_Conditional_20_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "div", 12);
        \u0275\u0275elementStart(22, "h3", 4);
        \u0275\u0275text(23, "Lines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 13)(25, "table", 14)(26, "thead")(27, "tr")(28, "th");
        \u0275\u0275text(29, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th", 15);
        \u0275\u0275text(31, "Qty");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "th");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "tbody");
        \u0275\u0275repeaterCreate(34, PoNewComponent_For_35_Template, 14, 4, "tr", 16, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 17)(37, "button", 18);
        \u0275\u0275listener("click", function PoNewComponent_Template_button_click_37_listener() {
          return ctx.addLine();
        });
        \u0275\u0275text(38, "Add line");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 19)(40, "span", 20);
        \u0275\u0275text(41, "Estimated total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "span", 21);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "currency");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(45, "div", 12);
        \u0275\u0275elementStart(46, "div", 22)(47, "button", 23);
        \u0275\u0275text(48, "Create draft PO");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "a", 24);
        \u0275\u0275text(50, "Cancel");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.suppliers());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(20, ((tmp_2_0 = ctx.form.get("supplier")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.form.get("supplier")) == null ? null : tmp_2_0.invalid) ? 20 : -1);
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.lines.controls);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 3, ctx.estimatedTotal()));
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PoNewComponent, { className: "PoNewComponent", filePath: "src/app/pages/po-new/po-new.component.ts", lineNumber: 13 });
})();
export {
  PoNewComponent
};
//# sourceMappingURL=po-new.component-DWLEVXPU.js.map
