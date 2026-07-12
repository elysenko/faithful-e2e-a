import {
  CartService
} from "./chunk-7KV6SYAR.js";
import {
  RouterLink
} from "./chunk-GPQOFHD2.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
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
  ɵɵtextInterpolate1
} from "./chunk-2VXAXVQ7.js";

// src/app/pages/cart/cart.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/products", a0];
function CartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
    \u0275\u0275text(2, "Your cart is empty.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 3);
    \u0275\u0275text(4, "Browse catalog");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_4_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r2.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r2.product.name);
  }
}
function CartComponent_Conditional_4_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "IFS");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12);
    \u0275\u0275template(2, CartComponent_Conditional_4_For_3_Conditional_2_Template, 1, 2, "img", 13)(3, CartComponent_Conditional_4_For_3_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "a", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 2);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16)(10, "button", 17);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_3_Template_button_click_10_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeQty(item_r2, item_r2.quantity - 1));
    });
    \u0275\u0275text(11, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 19);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_3_Template_button_click_14_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeQty(item_r2, item_r2.quantity + 1));
    });
    \u0275\u0275text(15, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 21);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_3_Template_button_click_18_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(item_r2));
    });
    \u0275\u0275text(19, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, item_r2.product.imageUrl ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, item_r2.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.format(item_r2.product.priceCents), " each");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.format(item_r2.product.priceCents * item_r2.quantity));
  }
}
function CartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275repeaterCreate(2, CartComponent_Conditional_4_For_3_Template, 20, 8, "div", 6, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "aside", 7)(5, "h3");
    \u0275\u0275text(6, "Order summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "span");
    \u0275\u0275text(9, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "span");
    \u0275\u0275text(14, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Calculated at checkout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a", 11);
    \u0275\u0275text(18, " Proceed to checkout ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.items());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.format(ctx_r2.subtotal()));
  }
}
var CartComponent = class _CartComponent {
  constructor() {
    this.cartService = inject(CartService);
    this.format = formatPrice;
    this.items = signal([
      {
        id: "ci1",
        productId: "1",
        quantity: 2,
        product: { id: "1", name: "CLASS-J Time-Delay Fuse 30A", description: "600V industrial time-delay fuse.", priceCents: 1899, imageUrl: null, stockQty: 120 }
      },
      {
        id: "ci2",
        productId: "6",
        quantity: 1,
        product: { id: "6", name: "Midget Fuse 10A 500V (Pack of 10)", description: "Fast-acting control-circuit fuses.", priceCents: 3200, imageUrl: null, stockQty: 200 }
      }
    ]);
    this.loading = signal(false);
    this.subtotal = computed(() => this.items().reduce((sum, i) => sum + i.product.priceCents * i.quantity, 0));
  }
  ngOnInit() {
    this.cartService.load().subscribe({
      next: (cart) => this.items.set(cart.items),
      error: () => {
      }
    });
  }
  changeQty(item, quantity) {
    if (quantity < 1)
      return;
    this.cartService.updateItem(item.id, quantity).subscribe({
      next: (cart) => this.items.set(cart.items),
      error: () => {
        this.items.update((list) => list.map((i) => i.id === item.id ? __spreadProps(__spreadValues({}, i), { quantity }) : i));
      }
    });
  }
  remove(item) {
    this.cartService.removeItem(item.id).subscribe({
      next: (cart) => this.items.set(cart.items),
      error: () => {
        this.items.update((list) => list.filter((i) => i.id !== item.id));
      }
    });
  }
  static {
    this.\u0275fac = function CartComponent_Factory(t) {
      return new (t || _CartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "container"], [1, "empty", "card"], [1, "muted"], ["routerLink", "/catalog", 1, "btn", "btn-primary"], [1, "cart-layout"], [1, "lines"], ["data-testid", "cart-line", 1, "line", "card"], [1, "summary", "card"], [1, "summary-row"], ["data-testid", "cart-subtotal"], [1, "summary-row", "muted"], ["routerLink", "/checkout", "data-testid", "go-checkout", 1, "btn", "btn-primary", "btn-block", "checkout-btn"], ["aria-hidden", "true", 1, "thumb"], ["width", "72", "height", "72", 3, "src", "alt"], [1, "line-info"], [1, "line-name", 3, "routerLink"], [1, "stepper"], ["type", "button", "aria-label", "Decrease", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "qty"], ["type", "button", "aria-label", "Increase", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "line-total"], ["type", "button", "aria-label", "Remove", 1, "link-btn", "remove", 3, "click"], [1, "thumb-ph"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Your cart");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CartComponent_Conditional_3_Template, 5, 0, "div", 1)(4, CartComponent_Conditional_4_Template, 19, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.items().length === 0 ? 3 : 4);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ['\n\n.empty[_ngcontent-%COMP%] {\n  padding: var(--sp-8);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--sp-4);\n}\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: var(--sp-5);\n  align-items: start;\n}\n.lines[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.line[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72px minmax(0, 1fr) auto auto auto;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: var(--sp-3);\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius);\n  background: var(--color-surface-alt);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumb-ph[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-border-strong);\n}\n.line-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.line-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-ink);\n}\n.stepper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n}\n.stepper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 36px;\n  padding: 0;\n}\n.qty[_ngcontent-%COMP%] {\n  min-width: 28px;\n  text-align: center;\n  font-weight: 700;\n}\n.line-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  min-width: 80px;\n  text-align: right;\n}\n.remove[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n  min-height: 44px;\n}\n.summary[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  position: sticky;\n  top: calc(var(--header-h) + var(--sp-4));\n}\n.summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-3);\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--sp-2) 0;\n  font-size: var(--fs-base);\n}\n.checkout-btn[_ngcontent-%COMP%] {\n  margin-top: var(--sp-4);\n}\n@media (max-width: 768px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .line[_ngcontent-%COMP%] {\n    grid-template-columns: 56px minmax(0, 1fr) auto;\n    grid-template-areas: "thumb info total" "thumb stepper remove";\n    row-gap: var(--sp-2);\n  }\n  .thumb[_ngcontent-%COMP%] {\n    grid-area: thumb;\n    width: 56px;\n    height: 56px;\n  }\n  .line-info[_ngcontent-%COMP%] {\n    grid-area: info;\n  }\n  .line-total[_ngcontent-%COMP%] {\n    grid-area: total;\n  }\n  .stepper[_ngcontent-%COMP%] {\n    grid-area: stepper;\n  }\n  .remove[_ngcontent-%COMP%] {\n    grid-area: remove;\n    text-align: right;\n    justify-self: end;\n  }\n  .summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/pages/cart/cart.component.ts", lineNumber: 15 });
})();
export {
  CartComponent
};
//# sourceMappingURL=cart.component-LM54D7YQ.js.map
