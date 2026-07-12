import {
  OrdersService
} from "./chunk-OVSGH2SK.js";
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
} from "./chunk-GWKRIMRY.js";
import {
  AuthService
} from "./chunk-7JCEHVK2.js";
import {
  MoneyPipe
} from "./chunk-ZIOGLSPH.js";
import {
  CartService
} from "./chunk-5BMZVV5A.js";
import {
  CommonModule,
  Router,
  RouterLink,
  computed,
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
} from "./chunk-POJ4OZZ3.js";

// src/app/features/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CheckoutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 5);
    \u0275\u0275text(2, "Your cart is empty \u2014 nothing to check out.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 6);
    \u0275\u0275text(4, "Browse the catalog");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Please enter a full delivery address.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function CheckoutComponent_Conditional_7_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 5);
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
    \u0275\u0275textInterpolate2("", item_r3.name, " \xD7 ", item_r3.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, item_r3.unitPriceCents * item_r3.quantity));
  }
}
function CheckoutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "form", 8);
    \u0275\u0275listener("ngSubmit", function CheckoutComponent_Conditional_7_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.placeOrder());
    });
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Shipping address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "label", 10);
    \u0275\u0275text(6, "Full name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 11);
    \u0275\u0275template(8, CheckoutComponent_Conditional_7_Conditional_8_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "label", 13);
    \u0275\u0275text(11, "Delivery address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 14);
    \u0275\u0275template(13, CheckoutComponent_Conditional_7_Conditional_13_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CheckoutComponent_Conditional_7_Conditional_14_Template, 2, 1, "div", 15);
    \u0275\u0275elementStart(15, "button", 16);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "aside", 17)(18, "h2");
    \u0275\u0275text(19, "Order summary");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, CheckoutComponent_Conditional_7_For_21_Template, 6, 5, "div", 18, _forTrack0);
    \u0275\u0275elementStart(22, "div", 19)(23, "span");
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "a", 20);
    \u0275\u0275text(29, "Edit cart");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(8, ctx_r1.form.controls.shipName.invalid && ctx_r1.form.controls.shipName.touched ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(13, ctx_r1.form.controls.shipAddress.invalid && ctx_r1.form.controls.shipAddress.touched ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, ctx_r1.errorMessage() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Placing order\u2026" : "Place order", " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.cart.items());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 7, ctx_r1.cart.subtotalCents()));
  }
}
var CheckoutComponent = class _CheckoutComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  cart = inject(CartService);
  orders = inject(OrdersService);
  auth = inject(AuthService);
  submitting = signal(false);
  errorMessage = signal("");
  form = this.fb.nonNullable.group({
    shipName: [this.auth.user()?.name ?? "", [Validators.required]],
    shipAddress: ["", [Validators.required, Validators.minLength(6)]]
  });
  outOfStock = computed(() => this.cart.items().some((i) => i.quantity > i.stockQty));
  placeOrder() {
    if (this.form.invalid || this.cart.items().length === 0) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.outOfStock()) {
      this.errorMessage.set("Some items exceed available stock. Please adjust your cart.");
      return;
    }
    this.submitting.set(true);
    const { shipName, shipAddress } = this.form.getRawValue();
    const order = this.orders.placeOrder(this.cart.items(), shipName, shipAddress, this.auth.user()?.email ?? "guest@demo");
    this.cart.clear();
    this.router.navigate(["/orders", order.id]);
  }
  static \u0275fac = function CheckoutComponent_Factory(t) {
    return new (t || _CheckoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "card", "card-pad", "empty"], [1, "muted"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "checkout-layout"], [1, "card", "card-pad", "ship-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "shipName"], ["id", "shipName", "type", "text", "formControlName", "shipName", "autocomplete", "name", "data-testid", "ship-name"], [1, "error"], ["for", "shipAddress"], ["id", "shipAddress", "rows", "3", "formControlName", "shipAddress", "autocomplete", "street-address", "data-testid", "ship-address", "placeholder", "Street, city, postal code"], [1, "alert", "alert-danger"], ["type", "submit", "data-testid", "place-order", 1, "btn", "btn-accent", "btn-block", 3, "disabled"], [1, "summary", "card", "card-pad"], [1, "line"], [1, "line", "total"], ["routerLink", "/cart", 1, "btn", "btn-ghost", "btn-block"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Checkout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Enter your shipping details to place the order.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, CheckoutComponent_Conditional_6_Template, 5, 0, "div", 4)(7, CheckoutComponent_Conditional_7_Template, 30, 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(6, ctx.cart.items().length === 0 ? 6 : 7);
    }
  }, dependencies: [CommonModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MoneyPipe], styles: ["\n\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: var(--sp-5);\n  align-items: start;\n}\n.ship-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.ship-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-2);\n}\n.summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-2);\n  position: sticky;\n  top: calc(var(--topbar-h) + var(--sp-4));\n}\n.line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  font-size: var(--fs-sm);\n}\n.line.total[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--sp-3);\n  margin-top: var(--sp-2);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-4);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/features/checkout/checkout.component.ts", lineNumber: 17 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=checkout.component-WRLMHNRI.js.map
