import {
  OrderService
} from "./chunk-27DN5E6I.js";
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
} from "./chunk-TBK5QOPH.js";
import {
  CartService
} from "./chunk-7KV6SYAR.js";
import {
  Router,
  RouterLink
} from "./chunk-GPQOFHD2.js";
import {
  CommonModule,
  computed,
  formatPrice,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2VXAXVQ7.js";

// src/app/pages/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CheckoutComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Address is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function CheckoutComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r2.product.name, " \xD7 ", item_r2.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.format(item_r2.product.priceCents * item_r2.quantity));
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.cartService = inject(CartService);
    this.orderService = inject(OrderService);
    this.router = inject(Router);
    this.format = formatPrice;
    this.items = signal([
      {
        id: "ci1",
        productId: "1",
        quantity: 2,
        product: { id: "1", name: "CLASS-J Time-Delay Fuse 30A", description: "", priceCents: 1899, imageUrl: null, stockQty: 120 }
      },
      {
        id: "ci2",
        productId: "6",
        quantity: 1,
        product: { id: "6", name: "Midget Fuse 10A 500V (Pack of 10)", description: "", priceCents: 3200, imageUrl: null, stockQty: 200 }
      }
    ]);
    this.submitting = signal(false);
    this.errorMessage = signal("");
    this.total = computed(() => this.items().reduce((sum, i) => sum + i.product.priceCents * i.quantity, 0));
    this.form = this.fb.group({
      shipName: ["", [Validators.required]],
      shipAddress: ["", [Validators.required]]
    });
  }
  ngOnInit() {
    this.cartService.load().subscribe({
      next: (cart) => this.items.set(cart.items),
      error: () => {
      }
    });
  }
  placeOrder() {
    if (this.form.invalid)
      return;
    this.submitting.set(true);
    this.errorMessage.set("");
    const { shipName, shipAddress } = this.form.value;
    this.orderService.checkout({ shipName, shipAddress }).subscribe({
      next: (order) => {
        this.cartService.clearLocal();
        this.router.navigate(["/orders", order.id], { queryParams: { placed: "1" } });
      },
      error: (err) => {
        this.submitting.set(false);
        this.errorMessage.set(err?.error?.message ?? "Checkout failed \u2014 an item may be out of stock.");
      }
    });
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(t) {
      return new (t || _CheckoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 7, consts: [[1, "container"], ["routerLink", "/cart", 1, "back", "link-btn"], [1, "checkout-layout"], ["novalidate", "", 1, "ship", "card", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "shipName"], ["id", "shipName", "type", "text", "formControlName", "shipName", "autocomplete", "name", "data-testid", "ship-name", "placeholder", "Jane Doe"], [1, "error"], ["for", "shipAddress"], ["id", "shipAddress", "formControlName", "shipAddress", "data-testid", "ship-address", "placeholder", "Street, city, state, ZIP"], [1, "alert", "alert-danger"], ["type", "submit", "data-testid", "place-order", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "summary", "card"], [1, "summary-line"], [1, "summary-total"], ["data-testid", "checkout-total"], [1, "s-name"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h1");
        \u0275\u0275text(4, "Checkout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2)(6, "form", 3);
        \u0275\u0275listener("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_6_listener() {
          return ctx.placeOrder();
        });
        \u0275\u0275elementStart(7, "h3");
        \u0275\u0275text(8, "Shipping details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 4)(10, "label", 5);
        \u0275\u0275text(11, "Recipient name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "input", 6);
        \u0275\u0275template(13, CheckoutComponent_Conditional_13_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 4)(15, "label", 8);
        \u0275\u0275text(16, "Shipping address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "textarea", 9);
        \u0275\u0275template(18, CheckoutComponent_Conditional_18_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, CheckoutComponent_Conditional_19_Template, 2, 1, "div", 10);
        \u0275\u0275elementStart(20, "button", 11);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "aside", 12)(23, "h3");
        \u0275\u0275text(24, "Order summary");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(25, CheckoutComponent_For_26_Template, 5, 3, "div", 13, _forTrack0);
        \u0275\u0275elementStart(27, "div", 14)(28, "span");
        \u0275\u0275text(29, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 15);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(13, ((tmp_1_0 = ctx.form.get("shipName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("shipName")) == null ? null : tmp_1_0.touched) ? 13 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(18, ((tmp_2_0 = ctx.form.get("shipAddress")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("shipAddress")) == null ? null : tmp_2_0.touched) ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.errorMessage() ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.submitting());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting() ? "Placing order\u2026" : "Place order", " ");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.format(ctx.total()));
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--sp-4);\n}\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: var(--sp-5);\n  align-items: start;\n}\n.ship[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n}\n.ship[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.summary[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  position: sticky;\n  top: calc(var(--header-h) + var(--sp-4));\n}\n.summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-3);\n}\n.summary-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  padding: var(--sp-2) 0;\n  font-size: var(--fs-sm);\n}\n.s-name[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n}\n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--sp-3);\n  padding-top: var(--sp-3);\n  border-top: 1px solid var(--color-border);\n  font-weight: 700;\n  font-size: var(--fs-md);\n}\n@media (max-width: 768px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .summary[_ngcontent-%COMP%] {\n    position: static;\n    order: -1;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/pages/checkout/checkout.component.ts", lineNumber: 17 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=checkout.component-63VB2TET.js.map
