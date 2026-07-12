import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-CHXIRGAM.js";
import {
  ApiService
} from "./chunk-Y35ABHFS.js";
import {
  Router,
  RouterLink
} from "./chunk-OKK7IX5Q.js";
import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IS4ZVKQ7.js";

// src/app/pages/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.productId;
function CheckoutComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error(), "");
  }
}
function CheckoutComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 14)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const item_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r2.product == null ? null : item_r2.product.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xD7 ", item_r2.qty, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.money(((tmp_12_0 = item_r2.product == null ? null : item_r2.product.priceCents) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : 0) * item_r2.qty));
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor(api, router) {
    this.api = api;
    this.router = router;
    this.shipName = "";
    this.shipAddress = "";
    this.submitting = signal(false);
    this.error = signal(null);
    this.items = signal([
      {
        id: "ci1",
        cartId: "c1",
        productId: "p1",
        qty: 1,
        product: {
          id: "p1",
          name: "Aurora Wireless Headphones",
          description: "",
          priceCents: 18900,
          imageUrl: "",
          stockQty: 24
        }
      },
      {
        id: "ci2",
        cartId: "c1",
        productId: "p2",
        qty: 2,
        product: {
          id: "p2",
          name: "Terra Insulated Bottle",
          description: "",
          priceCents: 3200,
          imageUrl: "",
          stockQty: 120
        }
      }
    ]);
    this.totalCents = computed(() => this.items().reduce((sum, i) => sum + (i.product?.priceCents ?? 0) * i.qty, 0));
  }
  ngOnInit() {
    this.api.getCart().subscribe({
      next: (cart) => this.items.set(cart.items ?? []),
      error: () => {
      }
    });
  }
  submit() {
    if (!this.shipName.trim() || !this.shipAddress.trim()) {
      this.error.set("Enter a shipping name and address.");
      return;
    }
    this.submitting.set(true);
    this.error.set(null);
    this.api.placeOrder({ shipName: this.shipName, shipAddress: this.shipAddress }).subscribe({
      next: (order) => {
        this.submitting.set(false);
        this.router.navigate(["/orders", order.id]);
      },
      error: (err) => {
        this.submitting.set(false);
        this.error.set(err?.error?.message || "Checkout failed. Please review your cart and try again.");
      }
    });
  }
  money(cents) {
    return "$" + (cents / 100).toFixed(2);
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(t) {
      return new (t || _CheckoutComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 6, consts: [[1, "container"], ["routerLink", "/cart", 1, "back-link"], [1, "page-title"], [1, "checkout-layout"], [1, "card", "checkout-form", 3, "ngSubmit"], [1, "field"], ["for", "shipName"], ["id", "shipName", "type", "text", "name", "shipName", "autocomplete", "name", "placeholder", "Ada Lovelace", 3, "ngModelChange", "ngModel"], ["for", "shipAddress"], ["id", "shipAddress", "name", "shipAddress", "autocomplete", "street-address", "placeholder", "123 Analytical Engine Way, London, UK", 3, "ngModelChange", "ngModel"], [1, "error", "checkout-error"], ["type", "submit", 1, "btn", "btn-accent", "btn-block", 3, "disabled"], [1, "summary", "card"], [1, "summary-items"], [1, "summary-item"], [1, "summary-row", "total"], [1, "si-name"], [1, "muted"], [1, "si-price"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h1", 2);
        \u0275\u0275text(4, "Checkout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "form", 4);
        \u0275\u0275listener("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_6_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(7, "h2");
        \u0275\u0275text(8, "Shipping details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
        \u0275\u0275text(11, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.shipName, $event) || (ctx.shipName = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 5)(14, "label", 8);
        \u0275\u0275text(15, "Shipping address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "textarea", 9);
        \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_textarea_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.shipAddress, $event) || (ctx.shipAddress = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, CheckoutComponent_Conditional_17_Template, 2, 1, "p", 10);
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "aside", 12)(21, "h2");
        \u0275\u0275text(22, "Order summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "ul", 13);
        \u0275\u0275repeaterCreate(24, CheckoutComponent_For_25_Template, 7, 3, "li", 14, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 15)(27, "span");
        \u0275\u0275text(28, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.shipName);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.shipAddress);
        \u0275\u0275advance();
        \u0275\u0275conditional(17, ctx.error() ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.submitting());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting() ? "Placing order\u2026" : "Place order \xB7 " + ctx.money(ctx.totalCents()), " ");
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.money(ctx.totalCents()));
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-bottom: var(--space-5);\n}\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: var(--space-5);\n  align-items: start;\n}\n.checkout-form[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.checkout-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--space-4);\n}\n.checkout-error[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  border-radius: var(--radius);\n  background: var(--color-danger-bg);\n  margin-bottom: var(--space-3);\n}\n.summary[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  position: sticky;\n  top: calc(var(--header-h) + var(--space-4));\n}\n.summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--space-3);\n}\n.summary-items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 var(--space-3);\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.si-name[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.si-price[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-weight: 600;\n}\n.summary-row.total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--space-3);\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n@media (max-width: 768px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .summary[_ngcontent-%COMP%] {\n    position: static;\n    order: -1;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/pages/checkout/checkout.component.ts", lineNumber: 20 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=checkout.component-EBM6V3BQ.js.map
