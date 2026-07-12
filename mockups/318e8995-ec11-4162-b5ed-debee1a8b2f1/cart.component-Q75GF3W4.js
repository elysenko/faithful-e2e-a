import {
  MoneyPipe
} from "./chunk-ZIOGLSPH.js";
import {
  CartService
} from "./chunk-5BMZVV5A.js";
import {
  CommonModule,
  RouterLink,
  computed,
  inject,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-POJ4OZZ3.js";

// src/app/features/cart/cart.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/products", a0];
function CartComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 5);
    \u0275\u0275text(2, "Your cart is empty.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 6);
    \u0275\u0275text(4, "Browse the catalog");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_7_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "a", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18)(9, "button", 19);
    \u0275\u0275listener("click", function CartComponent_Conditional_7_For_3_Template_button_click_9_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dec(item_r2.id, item_r2.quantity));
    });
    \u0275\u0275text(10, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 21);
    \u0275\u0275listener("click", function CartComponent_Conditional_7_For_3_Template_button_click_13_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.inc(item_r2.id, item_r2.quantity));
    });
    \u0275\u0275text(14, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 22);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 23);
    \u0275\u0275listener("click", function CartComponent_Conditional_7_For_3_Template_button_click_18_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(item_r2.id));
    });
    \u0275\u0275text(19, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, item_r2.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 8, item_r2.unitPriceCents), " each");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r2.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", item_r2.quantity >= item_r2.stockQty);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, item_r2.unitPriceCents * item_r2.quantity));
  }
}
function CartComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275repeaterCreate(2, CartComponent_Conditional_7_For_3_Template, 20, 14, "div", 9, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "aside", 10)(5, "h2");
    \u0275\u0275text(6, "Order summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11)(8, "span", 5);
    \u0275\u0275text(9, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11)(14, "span", 5);
    \u0275\u0275text(15, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12)(20, "span");
    \u0275\u0275text(21, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a", 13);
    \u0275\u0275text(26, "Proceed to checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 14);
    \u0275\u0275text(28, "Continue shopping");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.cart.items());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 3, ctx_r2.cart.subtotalCents()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.shippingCents() === 0 ? "Free" : \u0275\u0275pipeBind1(18, 5, ctx_r2.shippingCents()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 7, ctx_r2.totalCents()));
  }
}
var FREE_SHIP_THRESHOLD = 7500;
var SHIP_FEE = 599;
var CartComponent = class _CartComponent {
  cart = inject(CartService);
  shippingCents = computed(() => this.cart.subtotalCents() === 0 || this.cart.subtotalCents() >= FREE_SHIP_THRESHOLD ? 0 : SHIP_FEE);
  totalCents = computed(() => this.cart.subtotalCents() + this.shippingCents());
  inc(itemId, qty) {
    this.cart.updateQuantity(itemId, qty + 1);
  }
  dec(itemId, qty) {
    this.cart.updateQuantity(itemId, qty - 1);
  }
  remove(itemId) {
    this.cart.removeItem(itemId);
  }
  static \u0275fac = function CartComponent_Factory(t) {
    return new (t || _CartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "card", "card-pad", "empty"], [1, "muted"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "cart-layout"], [1, "items", "card"], [1, "cart-item"], [1, "summary", "card", "card-pad"], [1, "line"], [1, "line", "total"], ["routerLink", "/checkout", "data-testid", "go-checkout", 1, "btn", "btn-accent", "btn-block"], ["routerLink", "/", 1, "btn", "btn-ghost", "btn-block"], ["width", "80", "height", "80", 3, "src", "alt"], [1, "ci-info"], [1, "ci-name", 3, "routerLink"], [1, "stepper"], ["type", "button", "aria-label", "Decrease", 1, "btn", "btn-sm", 3, "click"], [1, "qty-value"], ["type", "button", "aria-label", "Increase", 1, "btn", "btn-sm", 3, "click", "disabled"], [1, "ci-line"], ["type", "button", "aria-label", "Remove item", 1, "btn", "btn-sm", "btn-ghost", "remove", 3, "click"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Your cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, CartComponent_Conditional_6_Template, 5, 0, "div", 4)(7, CartComponent_Conditional_7_Template, 29, 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.cart.count(), " item(s)");
      \u0275\u0275advance();
      \u0275\u0275conditional(6, ctx.cart.items().length === 0 ? 6 : 7);
    }
  }, dependencies: [CommonModule, RouterLink, MoneyPipe], styles: ['\n\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: var(--sp-5);\n  align-items: start;\n}\n.items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80px 1fr auto auto auto;\n  gap: var(--sp-4);\n  align-items: center;\n  padding: var(--sp-4);\n  border-bottom: 1px solid var(--color-border);\n}\n.cart-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cart-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n}\n.ci-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.ci-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.ci-line[_ngcontent-%COMP%] {\n  font-weight: 700;\n  white-space: nowrap;\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n}\n.stepper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 36px;\n  padding: 0;\n}\n.qty-value[_ngcontent-%COMP%] {\n  min-width: 24px;\n  text-align: center;\n  font-weight: 700;\n}\n.remove[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n}\n.remove[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n}\n.summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n  position: sticky;\n  top: calc(var(--topbar-h) + var(--sp-4));\n}\n.summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--fs-base);\n}\n.line.total[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--sp-3);\n  margin-top: var(--sp-2);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-4);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cart-item[_ngcontent-%COMP%] {\n    grid-template-columns: 64px 1fr auto;\n    grid-template-areas: "img info remove" "img stepper line";\n    row-gap: var(--sp-2);\n  }\n  .cart-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    grid-area: img;\n    width: 64px;\n    height: 64px;\n  }\n  .ci-info[_ngcontent-%COMP%] {\n    grid-area: info;\n  }\n  .stepper[_ngcontent-%COMP%] {\n    grid-area: stepper;\n  }\n  .ci-line[_ngcontent-%COMP%] {\n    grid-area: line;\n    text-align: right;\n  }\n  .remove[_ngcontent-%COMP%] {\n    grid-area: remove;\n    justify-self: end;\n  }\n  .summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/features/cart/cart.component.ts", lineNumber: 17 });
})();
export {
  CartComponent
};
//# sourceMappingURL=cart.component-Q75GF3W4.js.map
