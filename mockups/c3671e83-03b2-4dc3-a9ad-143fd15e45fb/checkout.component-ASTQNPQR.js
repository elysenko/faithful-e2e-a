import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7PVF4TBR.js";
import {
  CartService
} from "./chunk-5W3QQDJZ.js";
import {
  Router,
  RouterLink
} from "./chunk-5PRKSMZW.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LLQROSRE.js";

// src/app/features/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CheckoutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2, "Your cart is empty.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 3);
    \u0275\u0275text(4, "Browse catalog");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Address is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_4_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function CheckoutComponent_Conditional_4_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r3.qty, " \xD7 ", item_r3.product.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, item_r3.qty * item_r3.product.priceCents / 100));
  }
}
function CheckoutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "form", 5);
    \u0275\u0275listener("ngSubmit", function CheckoutComponent_Conditional_4_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.placeOrder());
    });
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Shipping details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
    \u0275\u0275text(6, "Full name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 8);
    \u0275\u0275template(8, CheckoutComponent_Conditional_4_Conditional_8_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "label", 10);
    \u0275\u0275text(11, "Shipping address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 11);
    \u0275\u0275template(13, CheckoutComponent_Conditional_4_Conditional_13_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CheckoutComponent_Conditional_4_Conditional_14_Template, 2, 1, "div", 9);
    \u0275\u0275elementStart(15, "button", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "aside", 13)(18, "h2");
    \u0275\u0275text(19, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, CheckoutComponent_Conditional_4_For_21_Template, 6, 5, "div", 14, _forTrack0);
    \u0275\u0275elementStart(22, "div", 15)(23, "span");
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 16);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(8, ((tmp_2_0 = ctx_r1.form.get("shipName")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.form.get("shipName")) == null ? null : tmp_2_0.touched) ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(13, ((tmp_3_0 = ctx_r1.form.get("shipAddress")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.form.get("shipAddress")) == null ? null : tmp_3_0.touched) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, ctx_r1.error() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Placing order\u2026" : "Place order", " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.cart.items());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 7, ctx_r1.cart.subtotalCents() / 100));
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.cart = inject(CartService);
    this.submitting = signal(false);
    this.error = signal(null);
    this.form = this.fb.group({
      shipName: ["", [Validators.required]],
      shipAddress: ["", [Validators.required]]
    });
  }
  placeOrder() {
    if (this.form.invalid || this.cart.items().length === 0) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    this.error.set(null);
    setTimeout(() => {
      this.cart.clear();
      this.submitting.set(false);
      this.router.navigate(["/orders", "o-1001"]);
    }, 400);
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(t) {
      return new (t || _CheckoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page"], [1, "page-title"], [1, "empty-state"], ["routerLink", "/catalog", 1, "btn", "btn-primary"], [1, "checkout-layout"], [1, "card", "ship-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "shipName"], ["id", "shipName", "formControlName", "shipName", "autocomplete", "name", "data-testid", "ship-name", 1, "input"], [1, "alert", "alert-error"], ["for", "shipAddress"], ["id", "shipAddress", "formControlName", "shipAddress", "autocomplete", "street-address", "data-testid", "ship-address", 1, "textarea"], ["type", "submit", "data-testid", "place-order", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "summary", "card"], [1, "row"], [1, "row", "total"], ["data-testid", "checkout-total"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Checkout");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CheckoutComponent_Conditional_3_Template, 5, 0, "div", 2)(4, CheckoutComponent_Conditional_4_Template, 28, 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.cart.items().length === 0 ? 3 : 4);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: var(--sp-5);\n  align-items: start;\n}\n.ship-form[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n}\n.ship-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-top: 0;\n}\n.summary[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-2);\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  font-size: var(--fs-sm);\n}\n.row.total[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 800;\n  padding-top: var(--sp-3);\n  margin-top: var(--sp-2);\n  border-top: 1px solid var(--color-border);\n}\n@media (max-width: 768px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/features/checkout/checkout.component.ts", lineNumber: 14 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=checkout.component-ASTQNPQR.js.map
