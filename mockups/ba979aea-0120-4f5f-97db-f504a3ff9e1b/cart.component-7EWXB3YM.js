import {
  CartService
} from "./chunk-VWLYAYX2.js";
import "./chunk-YUSCFUEV.js";
import {
  MoneyPipe
} from "./chunk-GJW2SICY.js";
import {
  CommonModule,
  RouterLink,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  signal,
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
} from "./chunk-RUEYC2SA.js";

// src/app/features/cart/cart.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/catalog", a0];
function CartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p", 3);
    \u0275\u0275text(2, "Your cart is empty.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 4);
    \u0275\u0275text(4, "Browse products");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "a", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "button", 16);
    \u0275\u0275listener("click", function CartComponent_Conditional_5_For_2_Template_button_click_10_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeQty(item_r2, -1));
    });
    \u0275\u0275text(11, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 18);
    \u0275\u0275listener("click", function CartComponent_Conditional_5_For_2_Template_button_click_14_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeQty(item_r2, 1));
    });
    \u0275\u0275text(15, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 19);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 20);
    \u0275\u0275listener("click", function CartComponent_Conditional_5_For_2_Template_button_click_19_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(item_r2));
    });
    \u0275\u0275text(20, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "cart-row-" + item_r2.productId);
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r2.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r2.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, item_r2.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 11, item_r2.product.priceCents), " each");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("data-testid", "qty-dec-" + item_r2.productId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.qty);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-testid", "qty-inc-" + item_r2.productId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 13, item_r2.product.priceCents * item_r2.qty));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-testid", "remove-" + item_r2.productId);
  }
}
function CartComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, CartComponent_Conditional_5_For_2_Template, 21, 17, "div", 6, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "span", 3);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 10);
    \u0275\u0275text(11, " Proceed to checkout ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.items());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Subtotal (", ctx_r2.itemCount(), " items)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 2, ctx_r2.subtotal()));
  }
}
var CartComponent = class _CartComponent {
  constructor(cart) {
    this.cart = cart;
    this.items = signal([
      {
        id: "ci1",
        productId: "p1",
        qty: 1,
        product: {
          id: "p1",
          name: "Aurora Wireless Headphones",
          description: "Over-ear noise-cancelling headphones.",
          priceCents: 14999,
          imageUrl: "https://picsum.photos/seed/headphones/160/160",
          stockQty: 12
        }
      },
      {
        id: "ci2",
        productId: "p2",
        qty: 2,
        product: {
          id: "p2",
          name: "Nimbus Mechanical Keyboard",
          description: "Hot-swappable 75% keyboard.",
          priceCents: 9900,
          imageUrl: "https://picsum.photos/seed/keyboard/160/160",
          stockQty: 34
        }
      }
    ]);
    this.subtotal = computed(() => this.items().reduce((sum, i) => sum + i.product.priceCents * i.qty, 0));
    this.itemCount = computed(() => this.items().reduce((sum, i) => sum + i.qty, 0));
    effect(() => this.cart.count.set(this.itemCount()));
  }
  changeQty(item, delta) {
    const next = item.qty + delta;
    if (next <= 0) {
      this.remove(item);
      return;
    }
    this.items.update((list) => list.map((i) => i.id === item.id ? __spreadProps(__spreadValues({}, i), { qty: next }) : i));
  }
  remove(item) {
    this.items.update((list) => list.filter((i) => i.id !== item.id));
  }
  static {
    this.\u0275fac = function CartComponent_Factory(t) {
      return new (t || _CartComponent)(\u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [["data-testid", "cart", 1, "page"], [1, "page-header"], [1, "card", "empty-state"], [1, "muted"], ["routerLink", "/catalog", 1, "btn", "btn-sm", "mt-2"], [1, "stack"], [1, "card", "cart-row"], [1, "card", "summary", "mt-4"], [1, "row", "between"], [1, "price"], ["routerLink", "/checkout", "data-testid", "cart-checkout", 1, "btn", "btn-block", "mt-4"], ["width", "72", "height", "72", 3, "src", "alt"], [1, "cart-row-info"], [1, "cart-row-name", 3, "routerLink"], [1, "cart-row-actions"], [1, "qty-control"], ["type", "button", "aria-label", "Decrease quantity", 3, "click"], [1, "qty-value"], ["type", "button", "aria-label", "Increase quantity", 3, "click"], [1, "line-total"], ["type", "button", 1, "btn-ghost", "remove-btn", 3, "click"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Your cart");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, CartComponent_Conditional_4_Template, 5, 0, "div", 2)(5, CartComponent_Conditional_5_Template, 12, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.items().length === 0 ? 4 : 5);
      }
    }, dependencies: [CommonModule, RouterLink, MoneyPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/features/cart/cart.component.ts", lineNumber: 14 });
})();
export {
  CartComponent
};
//# sourceMappingURL=cart.component-7EWXB3YM.js.map
