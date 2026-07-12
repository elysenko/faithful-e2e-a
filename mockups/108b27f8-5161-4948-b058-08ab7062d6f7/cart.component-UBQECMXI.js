import {
  ApiService
} from "./chunk-Y35ABHFS.js";
import {
  RouterLink
} from "./chunk-OKK7IX5Q.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IS4ZVKQ7.js";

// src/app/pages/cart/cart.component.ts
var _forTrack0 = ($index, $item) => $item.productId;
var _c0 = (a0) => ["/products", a0];
function CartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.itemCount(), " item", ctx_r0.itemCount() === 1 ? "" : "s", "");
  }
}
function CartComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your cart\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function CartComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 6);
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Your cart is empty.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 7);
    \u0275\u0275text(6, "Browse the catalog");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10)(1, "a", 17);
    \u0275\u0275element(2, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "a", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 22)(9, "button", 23);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_For_3_Template_button_click_9_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dec(item_r3));
    });
    \u0275\u0275text(10, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 25);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_For_3_Template_button_click_13_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.inc(item_r3));
    });
    \u0275\u0275text(14, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 26);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 27);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_For_3_Template_button_click_17_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(item_r3));
    });
    \u0275\u0275text(18, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, item_r3.productId));
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r3.product == null ? null : item_r3.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r3.product == null ? null : item_r3.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, item_r3.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.product == null ? null : item_r3.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.money((tmp_16_0 = item_r3.product == null ? null : item_r3.product.priceCents) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : 0), " each");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r3.qty);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.money(ctx_r0.lineTotal(item_r3)));
  }
}
function CartComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "ul", 9);
    \u0275\u0275repeaterCreate(2, CartComponent_Conditional_8_For_3_Template, 19, 12, "li", 10, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "aside", 11)(5, "h2");
    \u0275\u0275text(6, "Order summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "span");
    \u0275\u0275text(9, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 13)(13, "span");
    \u0275\u0275text(14, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Calculated at checkout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "span");
    \u0275\u0275text(19, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "a", 15);
    \u0275\u0275text(23, "Checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 16);
    \u0275\u0275text(25, "Continue shopping");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.items());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.money(ctx_r0.totalCents()));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.money(ctx_r0.totalCents()));
  }
}
var CartComponent = class _CartComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
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
          description: "Over-ear noise-cancelling headphones.",
          priceCents: 18900,
          imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
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
          description: "Double-walled stainless steel bottle.",
          priceCents: 3200,
          imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&q=80",
          stockQty: 120
        }
      }
    ]);
    this.totalCents = computed(() => this.items().reduce((sum, i) => sum + (i.product?.priceCents ?? 0) * i.qty, 0));
    this.itemCount = computed(() => this.items().reduce((sum, i) => sum + i.qty, 0));
  }
  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
    this.api.getCart().subscribe({
      next: (cart) => {
        this.items.set(cart.items ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load your cart.");
        this.loading.set(false);
      }
    });
  }
  lineTotal(item) {
    return (item.product?.priceCents ?? 0) * item.qty;
  }
  inc(item) {
    this.setQty(item, item.qty + 1);
  }
  dec(item) {
    if (item.qty <= 1) {
      this.remove(item);
      return;
    }
    this.setQty(item, item.qty - 1);
  }
  setQty(item, qty) {
    this.items.update((list) => list.map((i) => i.productId === item.productId ? __spreadProps(__spreadValues({}, i), { qty }) : i));
    this.api.updateCartItem(item.productId, qty).subscribe({ error: () => {
    } });
  }
  remove(item) {
    this.items.update((list) => list.filter((i) => i.productId !== item.productId));
    this.api.removeCartItem(item.productId).subscribe({ error: () => {
    } });
  }
  money(cents) {
    return "$" + (cents / 100).toFixed(2);
  }
  static {
    this.\u0275fac = function CartComponent_Factory(t) {
      return new (t || _CartComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "container"], [1, "page-head"], [1, "badge", "badge-muted"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "cart-layout"], [1, "cart-lines", "card"], [1, "cart-line"], [1, "summary", "card"], [1, "summary-row"], [1, "summary-row", "muted"], [1, "summary-row", "total"], ["routerLink", "/checkout", 1, "btn", "btn-accent", "btn-block"], ["routerLink", "/", 1, "btn", "btn-ghost", "btn-block"], [1, "line-thumb", 3, "routerLink"], ["width", "80", "height", "80", 3, "src", "alt"], [1, "line-main"], [1, "line-name", 3, "routerLink"], [1, "line-unit", "muted"], ["role", "group", "aria-label", "Quantity", 1, "qty-stepper"], ["type", "button", "aria-label", "Decrease", 1, "qty-btn", 3, "click"], [1, "qty-value"], ["type", "button", "aria-label", "Increase", 1, "qty-btn", 3, "click"], [1, "line-total"], ["type", "button", "aria-label", "Remove", 1, "btn", "btn-ghost", "btn-sm", "remove", 3, "click"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Your cart");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, CartComponent_Conditional_4_Template, 2, 2, "span", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, CartComponent_Conditional_5_Template, 4, 0, "div", 3)(6, CartComponent_Conditional_6_Template, 5, 1)(7, CartComponent_Conditional_7_Template, 7, 0)(8, CartComponent_Conditional_8_Template, 26, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.items().length > 0 ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.loading() ? 5 : ctx.error() ? 6 : ctx.items().length === 0 ? 7 : 8);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ['\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: var(--space-5);\n  align-items: start;\n}\n.cart-lines[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.cart-line[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80px 1fr auto auto auto;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) var(--space-4);\n  border-bottom: 1px solid var(--color-border);\n}\n.cart-line[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.line-thumb[_ngcontent-%COMP%] {\n  display: block;\n  width: 80px;\n  height: 80px;\n  border-radius: var(--radius);\n  overflow: hidden;\n  background: var(--color-surface-inset);\n}\n.line-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.line-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.line-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.line-unit[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.qty-stepper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.qty-btn[_ngcontent-%COMP%] {\n  min-width: 40px;\n  min-height: 44px;\n  border: none;\n  background: var(--color-surface-alt);\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  cursor: pointer;\n  color: var(--color-ink);\n}\n.qty-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-inset);\n}\n.qty-value[_ngcontent-%COMP%] {\n  min-width: 36px;\n  text-align: center;\n  font-weight: 700;\n}\n.line-total[_ngcontent-%COMP%] {\n  font-weight: 800;\n  white-space: nowrap;\n}\n.remove[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  min-height: 44px;\n}\n.remove[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n}\n.summary[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  position: sticky;\n  top: calc(var(--header-h) + var(--space-4));\n}\n.summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--fs-base);\n}\n.summary-row.total[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--space-3);\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n@media (max-width: 768px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cart-line[_ngcontent-%COMP%] {\n    grid-template-columns: 64px 1fr auto;\n    grid-template-areas: "thumb main total" "thumb qty  remove";\n    row-gap: var(--space-2);\n  }\n  .line-thumb[_ngcontent-%COMP%] {\n    grid-area: thumb;\n    width: 64px;\n    height: 64px;\n  }\n  .line-main[_ngcontent-%COMP%] {\n    grid-area: main;\n  }\n  .qty-stepper[_ngcontent-%COMP%] {\n    grid-area: qty;\n  }\n  .line-total[_ngcontent-%COMP%] {\n    grid-area: total;\n    text-align: right;\n  }\n  .remove[_ngcontent-%COMP%] {\n    grid-area: remove;\n    justify-self: end;\n  }\n  .summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/pages/cart/cart.component.ts", lineNumber: 18 });
})();
export {
  CartComponent
};
//# sourceMappingURL=cart.component-UBQECMXI.js.map
