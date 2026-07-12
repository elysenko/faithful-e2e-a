import {
  toSignal
} from "./chunk-5VJSRZDM.js";
import {
  MoneyPipe
} from "./chunk-ZIOGLSPH.js";
import {
  CartService
} from "./chunk-5BMZVV5A.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink,
  computed,
  inject,
  map,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-POJ4OZZ3.js";

// src/app/features/product-detail/product-detail.component.ts
function ProductDetailComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Only ", p_r2.stockQty, " left");
  }
}
function ProductDetailComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "In stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_3_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, " Added to cart. ");
    \u0275\u0275elementStart(2, "a", 21);
    \u0275\u0275text(3, "View cart \u2192");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "h1", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductDetailComponent_Conditional_3_Conditional_9_Template, 2, 0, "span", 8)(10, ProductDetailComponent_Conditional_3_Conditional_10_Template, 2, 1)(11, ProductDetailComponent_Conditional_3_Conditional_11_Template, 2, 0);
    \u0275\u0275elementStart(12, "p", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "span", 12);
    \u0275\u0275text(17, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13)(19, "button", 14);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.decrement());
    });
    \u0275\u0275text(20, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 16);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_3_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.increment());
    });
    \u0275\u0275text(24, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 17);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_3_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ProductDetailComponent_Conditional_3_Conditional_27_Template, 4, 0, "div", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, p_r2.priceCents));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, p_r2.stockQty === 0 ? 9 : p_r2.stockQty <= 5 ? 10 : 11);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r2.description);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.quantity() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.quantity());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.quantity() >= p_r2.stockQty);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", p_r2.stockQty === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r2.stockQty === 0 ? "Out of stock" : "Add to cart", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(27, ctx_r2.added() ? 27 : -1);
  }
}
function ProductDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 23);
    \u0275\u0275text(2, "Product not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 24);
    \u0275\u0275text(4, "Return to catalog");
    \u0275\u0275elementEnd()();
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  route = inject(ActivatedRoute);
  cart = inject(CartService);
  // Backend-provided data — declared as a signal per the mockup data contract (GET /api/products/:id).
  products = signal([
    {
      id: "p-1",
      name: "Aurora Wireless Headphones",
      description: "Over-ear noise-cancelling headphones with 30-hour battery life, plush memory-foam ear cushions, and multipoint Bluetooth pairing. Includes a hard-shell travel case and USB-C fast charging.",
      priceCents: 12999,
      imageUrl: "https://picsum.photos/seed/aurora/800/600",
      stockQty: 24
    },
    {
      id: "p-2",
      name: "Nimbus Mechanical Keyboard",
      description: "Hot-swappable 75% mechanical keyboard with PBT double-shot keycaps, gasket-mounted plate, and per-key RGB. Connects over USB-C or 2.4GHz wireless.",
      priceCents: 8900,
      imageUrl: "https://picsum.photos/seed/nimbus/800/600",
      stockQty: 12
    },
    {
      id: "p-3",
      name: "Terra Insulated Bottle 1L",
      description: "Double-walled stainless steel bottle keeps drinks cold for 24 hours or hot for 12. Leak-proof lid with an integrated carry handle. BPA-free and dishwasher safe.",
      priceCents: 3200,
      imageUrl: "https://picsum.photos/seed/terra/800/600",
      stockQty: 60
    },
    {
      id: "p-4",
      name: "Lumen LED Desk Lamp",
      description: "Dimmable LED desk lamp with five color temperatures, a wireless charging base, and a USB-C pass-through port. Flicker-free and eye-care certified.",
      priceCents: 4500,
      imageUrl: "https://picsum.photos/seed/lumen/800/600",
      stockQty: 0
    },
    {
      id: "p-5",
      name: "Pulse Fitness Tracker",
      description: "Water-resistant fitness tracker with continuous heart-rate, SpO2, and sleep monitoring. Seven-day battery life and 40+ workout modes.",
      priceCents: 7999,
      imageUrl: "https://picsum.photos/seed/pulse/800/600",
      stockQty: 5
    },
    {
      id: "p-6",
      name: "Vertex Laptop Backpack",
      description: "Weatherproof 22L backpack with a padded 16-inch laptop sleeve, hidden anti-theft pocket, and a luggage pass-through strap. Made from recycled ripstop nylon.",
      priceCents: 6400,
      imageUrl: "https://picsum.photos/seed/vertex/800/600",
      stockQty: 33
    }
  ]);
  productId = toSignal(this.route.paramMap.pipe(map((p) => p.get("id"))), {
    initialValue: null
  });
  product = computed(() => this.products().find((p) => p.id === this.productId()) ?? null);
  quantity = signal(1);
  added = signal(false);
  increment() {
    const max = this.product()?.stockQty ?? 1;
    this.quantity.update((q) => Math.min(q + 1, Math.max(max, 1)));
  }
  decrement() {
    this.quantity.update((q) => Math.max(1, q - 1));
  }
  addToCart() {
    const p = this.product();
    if (!p || p.stockQty === 0)
      return;
    this.cart.addProduct(p, this.quantity());
    this.added.set(true);
  }
  static \u0275fac = function ProductDetailComponent_Factory(t) {
    return new (t || _ProductDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page"], ["routerLink", "/", 1, "back", "muted"], [1, "detail"], [1, "media", "card"], ["width", "800", "height", "600", 3, "src", "alt"], [1, "info"], [1, "page-title"], [1, "price"], [1, "badge", "badge-danger"], [1, "desc"], [1, "buy", "card", "card-pad"], [1, "qty-row"], [1, "qty-label"], [1, "stepper"], ["type", "button", "aria-label", "Decrease quantity", 1, "btn", "btn-sm", 3, "click", "disabled"], ["data-testid", "qty-value", 1, "qty-value"], ["type", "button", "aria-label", "Increase quantity", 1, "btn", "btn-sm", 3, "click", "disabled"], ["type", "button", "data-testid", "add-to-cart", 1, "btn", "btn-accent", "btn-block", 3, "click", "disabled"], ["role", "status", 1, "alert", "alert-success"], [1, "badge", "badge-warning"], [1, "badge", "badge-success"], ["routerLink", "/cart"], [1, "card", "card-pad"], [1, "muted"], ["routerLink", "/", 1, "btn", "btn-sm", "btn-primary"]], template: function ProductDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275text(2, "\u2190 Back to catalog");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ProductDetailComponent_Conditional_3_Template, 28, 14, "div", 2)(4, ProductDetailComponent_Conditional_4_Template, 5, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional(3, (tmp_0_0 = ctx.product()) ? 3 : 4, tmp_0_0);
    }
  }, dependencies: [CommonModule, RouterLink, MoneyPipe], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--sp-4);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 1fr;\n  gap: var(--sp-5);\n  align-items: start;\n}\n.media[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.price[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-600);\n}\n.desc[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: var(--fs-base);\n}\n.buy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-4);\n  margin-top: var(--sp-2);\n}\n.qty-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.qty-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n}\n.stepper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 44px;\n  padding: 0;\n  font-size: var(--fs-lg);\n}\n.qty-value[_ngcontent-%COMP%] {\n  min-width: 32px;\n  text-align: center;\n  font-weight: 700;\n  font-size: var(--fs-md);\n}\n@media (max-width: 768px) {\n  .detail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src/app/features/product-detail/product-detail.component.ts", lineNumber: 17 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=product-detail.component-IXQYSPHA.js.map
