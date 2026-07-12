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

// src/app/pages/so-new/so-new.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SoNewComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.name);
  }
}
function SoNewComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Customer is required.");
    \u0275\u0275elementEnd();
  }
}
function SoNewComponent_For_25_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
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
function SoNewComponent_For_25_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Product is required.");
    \u0275\u0275elementEnd();
  }
}
function SoNewComponent_For_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prod_r4 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, prod_r4.price), " each \xB7 ", prod_r4.onHand, " on hand ");
  }
}
function SoNewComponent_For_25_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Minimum quantity is 1.");
    \u0275\u0275elementEnd();
  }
}
function SoNewComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 6)(2, "label");
    \u0275\u0275text(3, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 22)(5, "option", 8);
    \u0275\u0275text(6, "Select a product\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, SoNewComponent_For_25_For_8_Template, 2, 3, "option", 9, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SoNewComponent_For_25_Conditional_9_Template, 2, 0, "span", 10)(10, SoNewComponent_For_25_Conditional_10_Template, 3, 4, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "label");
    \u0275\u0275text(13, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275template(15, SoNewComponent_For_25_Conditional_15_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 25)(17, "label");
    \u0275\u0275text(18, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 26);
    \u0275\u0275listener("click", function SoNewComponent_For_25_Template_button_click_19_listener() {
      const $index_r5 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeLine($index_r5));
    });
    \u0275\u0275text(20, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    const line_r7 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", $index_r5);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r5.products());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, ((tmp_12_0 = line_r7.get("product")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = line_r7.get("product")) == null ? null : tmp_12_0.invalid) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, (tmp_13_0 = ctx_r5.productFor((tmp_13_0 = line_r7.get("product")) == null ? null : tmp_13_0.value)) ? 10 : -1, tmp_13_0);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(15, ((tmp_14_0 = line_r7.get("qty")) == null ? null : tmp_14_0.touched) && ((tmp_14_0 = line_r7.get("qty")) == null ? null : tmp_14_0.invalid) ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r5.lines.length === 1);
  }
}
var SoNewComponent = class _SoNewComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.customers = signal([
      { id: "c1", name: "Northwind Traders" },
      { id: "c2", name: "Contoso Ltd" },
      { id: "c3", name: "Fabrikam Inc" }
    ]);
    this.products = signal([
      { id: "p1", sku: "STL-001", name: "Steel Bolt M8", cost: 0.45, price: 1.2, onHand: 1200 },
      { id: "p3", sku: "PIP-050", name: "PVC Pipe 50mm", cost: 3.2, price: 7.5, onHand: 340 },
      { id: "p8", sku: "SEN-200", name: "Proximity Sensor", cost: 22.5, price: 49, onHand: 140 }
    ]);
    this.form = this.fb.group({
      customer: ["", Validators.required],
      lines: this.fb.array([this.newLine()])
    });
  }
  get lines() {
    return this.form.get("lines");
  }
  newLine() {
    return this.fb.group({
      product: ["", Validators.required],
      qty: [1, [Validators.required, Validators.min(1)]]
    });
  }
  addLine() {
    this.lines.push(this.newLine());
  }
  removeLine(i) {
    this.lines.removeAt(i);
  }
  productFor(id) {
    return this.products().find((p) => p.id === id);
  }
  estimatedTotal() {
    return this.lines.controls.reduce((sum, ctrl) => {
      const product = this.productFor(ctrl.get("product")?.value);
      const qty = Number(ctrl.get("qty")?.value) || 0;
      return sum + (product ? product.price * qty : 0);
    }, 0);
  }
  submit() {
    if (this.form.invalid)
      return;
    this.router.navigate(["/sales-orders"]);
  }
  static {
    this.\u0275fac = function SoNewComponent_Factory(t) {
      return new (t || _SoNewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SoNewComponent, selectors: [["app-so-new"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 6, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/sales-orders"], [1, "section-title"], [1, "eyebrow"], [1, "card", "card-pad", "stack", 3, "ngSubmit", "formGroup"], [1, "field"], ["formControlName", "customer", 1, "select"], ["value", ""], [3, "value"], [1, "field-error"], [1, "divider"], ["formArrayName", "lines", 1, "stack"], [1, "row", "wrap-gap", 3, "formGroupName"], [1, "row"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "row-between"], [1, "muted"], [1, "num", "price"], [1, "row", "wrap-gap"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["routerLink", "/sales-orders", 1, "btn", "btn-ghost"], ["formControlName", "product", 1, "select"], [1, "faint", "small"], ["type", "number", "min", "1", "formControlName", "qty", 1, "input"], [1, "field", "center"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click", "disabled"]], template: function SoNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "Sales Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, " / New ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "span", 4);
        \u0275\u0275text(7, "Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h2");
        \u0275\u0275text(9, "New sales order");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "form", 5);
        \u0275\u0275listener("ngSubmit", function SoNewComponent_Template_form_ngSubmit_10_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(11, "div", 6)(12, "label");
        \u0275\u0275text(13, "Customer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "select", 7)(15, "option", 8);
        \u0275\u0275text(16, "Select a customer\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(17, SoNewComponent_For_18_Template, 2, 2, "option", 9, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, SoNewComponent_Conditional_19_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "div", 11);
        \u0275\u0275elementStart(21, "h3", 3);
        \u0275\u0275text(22, "Lines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 12);
        \u0275\u0275repeaterCreate(24, SoNewComponent_For_25_Template, 21, 5, "div", 13, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 14)(27, "button", 15);
        \u0275\u0275listener("click", function SoNewComponent_Template_button_click_27_listener() {
          return ctx.addLine();
        });
        \u0275\u0275text(28, " Add line ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "div", 11);
        \u0275\u0275elementStart(30, "div", 16)(31, "span", 17);
        \u0275\u0275text(32, "Estimated total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 18);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 19)(37, "button", 20);
        \u0275\u0275text(38, " Create draft SO ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "a", 21);
        \u0275\u0275text(40, "Cancel");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.customers());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(19, ((tmp_2_0 = ctx.form.get("customer")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.form.get("customer")) == null ? null : tmp_2_0.invalid) ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.lines.controls);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 4, ctx.estimatedTotal()));
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.form.invalid);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SoNewComponent, { className: "SoNewComponent", filePath: "src/app/pages/so-new/so-new.component.ts", lineNumber: 13 });
})();
export {
  SoNewComponent
};
//# sourceMappingURL=so-new.component-GFDONHNB.js.map
