import {
  CartService
} from "./chunk-5W3QQDJZ.js";
import {
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
} from "./chunk-LLQROSRE.js";

// src/app/features/cart/cart.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/product", a0];
function CartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function CartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function CartComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "Your cart is empty.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 5);
    \u0275\u0275text(4, "Browse catalog");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "a", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 19)(9, "button", 20);
    \u0275\u0275listener("click", function CartComponent_Conditional_6_For_3_Template_button_click_9_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.dec(item_r3));
    });
    \u0275\u0275text(10, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 22);
    \u0275\u0275listener("click", function CartComponent_Conditional_6_For_3_Template_button_click_13_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.inc(item_r3));
    });
    \u0275\u0275text(14, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 23);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 24);
    \u0275\u0275listener("click", function CartComponent_Conditional_6_For_3_Template_button_click_18_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(item_r3));
    });
    \u0275\u0275text(19, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r3.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r3.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, item_r3.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 8, item_r3.product.priceCents / 100), " each");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r3.qty);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", item_r3.qty >= item_r3.product.stockQty);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, item_r3.qty * item_r3.product.priceCents / 100));
  }
}
function CartComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275repeaterCreate(2, CartComponent_Conditional_6_For_3_Template, 20, 14, "div", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "aside", 9)(5, "h2");
    \u0275\u0275text(6, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "span");
    \u0275\u0275text(9, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 11)(13, "span");
    \u0275\u0275text(14, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 12);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "a", 13);
    \u0275\u0275text(19, "Proceed to checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 14);
    \u0275\u0275text(21, "Continue shopping");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.cart.items());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.cart.count());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 2, ctx_r0.cart.subtotalCents() / 100));
  }
}
var CartComponent = class _CartComponent {
  constructor() {
    this.cart = inject(CartService);
    this.loading = signal(false);
    this.error = signal(null);
  }
  inc(item) {
    if (item.qty < item.product.stockQty)
      this.cart.setQty(item.id, item.qty + 1);
  }
  dec(item) {
    this.cart.setQty(item.id, item.qty - 1);
  }
  remove(item) {
    this.cart.removeItem(item.id);
  }
  static {
    this.\u0275fac = function CartComponent_Factory(t) {
      return new (t || _CartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "page"], [1, "page-title"], [1, "spinner"], [1, "alert", "alert-error"], [1, "empty-state"], ["routerLink", "/catalog", 1, "btn", "btn-primary"], [1, "cart-layout"], [1, "lines"], ["data-testid", "cart-line", 1, "line", "card"], [1, "summary", "card"], [1, "row"], [1, "row", "total"], ["data-testid", "cart-subtotal"], ["routerLink", "/checkout", "data-testid", "checkout-btn", 1, "btn", "btn-primary", "btn-block"], ["routerLink", "/catalog", 1, "btn", "btn-block", "continue"], ["width", "80", "height", "80", 3, "src", "alt"], [1, "line-info"], [1, "line-name", 3, "routerLink"], [1, "muted"], [1, "stepper"], ["aria-label", "Decrease", 1, "btn", "step", 3, "click"], [1, "qty"], ["aria-label", "Increase", 1, "btn", "step", 3, "click", "disabled"], [1, "line-total"], ["aria-label", "Remove", 1, "btn", "btn-ghost", "remove", 3, "click"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Your Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CartComponent_Conditional_3_Template, 1, 0, "div", 2)(4, CartComponent_Conditional_4_Template, 2, 1)(5, CartComponent_Conditional_5_Template, 5, 0)(6, CartComponent_Conditional_6_Template, 22, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : ctx.cart.items().length === 0 ? 5 : 6);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], styles: ['\n\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: var(--sp-5);\n  align-items: start;\n}\n.lines[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.line[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80px 1fr auto auto auto;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: var(--sp-3);\n}\n.line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: var(--radius);\n  object-fit: cover;\n}\n.line-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.line-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.line-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  min-width: 72px;\n  text-align: right;\n}\n.remove[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  min-height: 44px;\n  min-width: 44px;\n}\n.stepper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.step[_ngcontent-%COMP%] {\n  min-width: 40px;\n  border: none;\n  border-radius: 0;\n  background: var(--color-surface-alt);\n  font-size: var(--fs-lg);\n}\n.qty[_ngcontent-%COMP%] {\n  min-width: 36px;\n  text-align: center;\n  font-weight: 700;\n}\n.summary[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  position: sticky;\n  top: calc(var(--header-h) + var(--sp-4));\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin: 0;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.row.total[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 800;\n  padding-top: var(--sp-3);\n  border-top: 1px solid var(--color-border);\n}\n.continue[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n@media (max-width: 768px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .line[_ngcontent-%COMP%] {\n    grid-template-columns: 64px 1fr auto;\n    grid-template-areas: "img info remove" "img stepper total";\n    row-gap: var(--sp-2);\n  }\n  .line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    grid-area: img;\n    width: 64px;\n    height: 64px;\n  }\n  .line-info[_ngcontent-%COMP%] {\n    grid-area: info;\n  }\n  .stepper[_ngcontent-%COMP%] {\n    grid-area: stepper;\n  }\n  .line-total[_ngcontent-%COMP%] {\n    grid-area: total;\n  }\n  .remove[_ngcontent-%COMP%] {\n    grid-area: remove;\n    justify-self: end;\n  }\n  .summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/features/cart/cart.component.ts", lineNumber: 14 });
})();
export {
  CartComponent
};
//# sourceMappingURL=cart.component-CM6BVPRJ.js.map
