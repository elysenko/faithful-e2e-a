import {
  CartService
} from "./chunk-4SILDTGW.js";
import {
  MoneyPipe
} from "./chunk-7MEJQ5O4.js";
import {
  CommonModule,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JG2HHNQL.js";

// src/app/features/cart/cart.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Your cart is empty.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 3);
    \u0275\u0275text(6, "Start shopping");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 17)(9, "div", 18)(10, "button", 19);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_3_Template_button_click_10_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQty(item_r2.id, item_r2.qty - 1));
    });
    \u0275\u0275text(11, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 21);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_3_Template_button_click_14_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQty(item_r2.id, item_r2.qty + 1));
    });
    \u0275\u0275text(15, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span", 22);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 23);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_3_Template_button_click_19_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(item_r2.id));
    });
    \u0275\u0275text(20, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "cart-row-" + item_r2.productId);
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r2.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r2.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 9, item_r2.product.priceCents), " each");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r2.qty);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", item_r2.qty >= item_r2.product.stockQty);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, item_r2.qty * item_r2.product.priceCents));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-testid", "remove-" + item_r2.productId);
  }
}
function CartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275repeaterCreate(2, CartComponent_Conditional_4_For_3_Template, 21, 13, "div", 6, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "aside", 7)(5, "h2");
    \u0275\u0275text(6, "Order summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 8)(14, "span", 9);
    \u0275\u0275text(15, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 10);
    \u0275\u0275text(17, "Free");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 11)(19, "span");
    \u0275\u0275text(20, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "a", 13);
    \u0275\u0275text(25, " Proceed to checkout ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 14);
    \u0275\u0275text(27, "Continue shopping");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.items());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Items (", ctx_r2.count(), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 3, ctx_r2.subtotalCents()));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 5, ctx_r2.subtotalCents()));
  }
}
var CartComponent = class _CartComponent {
  constructor(cart) {
    this.cart = cart;
    this.items = this.cart.items;
    this.subtotalCents = this.cart.subtotalCents;
    this.count = this.cart.count;
  }
  updateQty(itemId, qty) {
    this.cart.updateQty(itemId, qty);
  }
  remove(itemId) {
    this.cart.removeItem(itemId);
  }
  static {
    this.\u0275fac = function CartComponent_Factory(t) {
      return new (t || _CartComponent)(\u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page"], ["data-testid", "cart-empty", 1, "card", "empty"], [1, "empty-mark"], ["routerLink", "/catalog", 1, "btn", "btn-primary"], [1, "cart-layout"], [1, "cart-items"], [1, "card", "cart-row"], [1, "card", "summary"], [1, "summary-row"], [1, "muted"], [1, "badge", "badge-success"], [1, "summary-row", "total"], ["data-testid", "cart-total"], ["routerLink", "/checkout", "data-testid", "to-checkout", 1, "btn", "btn-primary", "btn-block"], ["routerLink", "/catalog", 1, "btn", "btn-ghost", "btn-block"], ["width", "72", "height", "72", 3, "src", "alt"], [1, "cart-row-info"], [1, "cart-row-controls"], [1, "qty"], ["aria-label", "Decrease", 1, "qty-btn", 3, "click"], [1, "qty-val"], ["aria-label", "Increase", 1, "qty-btn", 3, "click", "disabled"], [1, "line-total"], ["aria-label", "Remove", 1, "remove", 3, "click"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Your cart");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CartComponent_Conditional_3_Template, 7, 0, "div", 1)(4, CartComponent_Conditional_4_Template, 28, 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.items().length === 0 ? 3 : 4);
      }
    }, dependencies: [CommonModule, RouterLink, MoneyPipe], styles: ["\n\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: var(--space-5);\n  align-items: start;\n}\n.cart-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.cart-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  padding: var(--space-3) var(--space-4);\n}\n.cart-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-md);\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.cart-row-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cart-row-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: var(--text-base);\n}\n.cart-row-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n}\n.qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.qty-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: var(--color-surface);\n  font-size: var(--text-lg);\n}\n.qty-btn[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.qty-val[_ngcontent-%COMP%] {\n  min-width: 32px;\n  text-align: center;\n  font-weight: 600;\n}\n.line-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  min-width: 72px;\n  text-align: right;\n}\n.remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-danger);\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n.summary[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  position: sticky;\n  top: calc(var(--navbar-height) + var(--space-4));\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  margin: 0;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.summary-row.total[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--space-3);\n  font-size: var(--text-lg);\n  font-weight: 700;\n}\n.summary[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-8);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  align-items: center;\n}\n.empty-mark[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n@media (max-width: 768px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cart-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .cart-row-controls[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/features/cart/cart.component.ts", lineNumber: 14 });
})();
export {
  CartComponent
};
//# sourceMappingURL=cart.component-ESR4FB2M.js.map
