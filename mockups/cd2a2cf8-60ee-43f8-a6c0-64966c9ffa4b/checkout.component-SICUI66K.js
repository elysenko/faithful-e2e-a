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
} from "./chunk-BFWEJMPJ.js";
import {
  CartService
} from "./chunk-4SILDTGW.js";
import {
  OrderService
} from "./chunk-QKJLD3U2.js";
import {
  MoneyPipe
} from "./chunk-7MEJQ5O4.js";
import {
  CommonModule,
  Router,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
} from "./chunk-JG2HHNQL.js";

// src/app/features/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CheckoutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2, "Your cart is empty \u2014 nothing to check out.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 3);
    \u0275\u0275text(4, "Browse catalog");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Address is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_6_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r3.qty, " \xD7 ", item_r3.product.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, item_r3.qty * item_r3.product.priceCents));
  }
}
function CheckoutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "form", 5);
    \u0275\u0275listener("ngSubmit", function CheckoutComponent_Conditional_6_Template_form_ngSubmit_1_listener() {
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
    \u0275\u0275template(8, CheckoutComponent_Conditional_6_Conditional_8_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "label", 10);
    \u0275\u0275text(11, "Shipping address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 11);
    \u0275\u0275template(13, CheckoutComponent_Conditional_6_Conditional_13_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 12);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "aside", 13)(18, "h2");
    \u0275\u0275text(19, "Your order");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, CheckoutComponent_Conditional_6_For_21_Template, 6, 5, "div", 14, _forTrack0);
    \u0275\u0275elementStart(22, "div", 15)(23, "span");
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 16);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "money");
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
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.placing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.placing ? "Placing order\u2026" : "Place order \xB7 " + \u0275\u0275pipeBind1(16, 6, ctx_r1.subtotalCents()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.items());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 8, ctx_r1.subtotalCents()));
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor(fb, cart, orders, router) {
    this.fb = fb;
    this.cart = cart;
    this.orders = orders;
    this.router = router;
    this.items = this.cart.items;
    this.subtotalCents = this.cart.subtotalCents;
    this.placing = false;
    this.form = this.fb.group({
      shipName: ["", [Validators.required]],
      shipAddress: ["", [Validators.required]]
    });
  }
  placeOrder() {
    if (this.form.invalid || this.items().length === 0)
      return;
    this.placing = true;
    const { shipName, shipAddress } = this.form.value;
    const order = this.orders.placeOrder(this.items(), shipName, shipAddress);
    this.cart.clear();
    this.router.navigate(["/orders", order.id]);
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(t) {
      return new (t || _CheckoutComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "page"], ["routerLink", "/cart", 1, "back"], ["data-testid", "checkout-empty", 1, "card", "empty"], ["routerLink", "/catalog", 1, "btn", "btn-primary"], [1, "checkout-layout"], [1, "card", "ship-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "shipName"], ["id", "shipName", "type", "text", "formControlName", "shipName", "autocomplete", "name", "data-testid", "ship-name", "placeholder", "Jane Doe"], [1, "error"], ["for", "shipAddress"], ["id", "shipAddress", "rows", "3", "formControlName", "shipAddress", "autocomplete", "street-address", "data-testid", "ship-address", "placeholder", "123 Main St, City, Country"], ["type", "submit", "data-testid", "place-order", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "card", "summary"], [1, "summary-line"], [1, "summary-line", "total"], ["data-testid", "checkout-total"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h1");
        \u0275\u0275text(4, "Checkout");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, CheckoutComponent_Conditional_5_Template, 5, 0, "div", 2)(6, CheckoutComponent_Conditional_6_Template, 28, 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.items().length === 0 ? 5 : 6);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, MoneyPipe], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: var(--space-5);\n  align-items: start;\n}\n.ship-form[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.ship-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  margin-top: 0;\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.summary[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  position: sticky;\n  top: calc(var(--navbar-height) + var(--space-4));\n}\n.summary-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--space-3);\n  font-size: var(--text-sm);\n}\n.summary-line.total[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--space-3);\n  margin-top: var(--space-2);\n  font-size: var(--text-base);\n  font-weight: 700;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-8);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .summary[_ngcontent-%COMP%] {\n    position: static;\n    order: -1;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/features/checkout/checkout.component.ts", lineNumber: 16 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=checkout.component-SICUI66K.js.map
