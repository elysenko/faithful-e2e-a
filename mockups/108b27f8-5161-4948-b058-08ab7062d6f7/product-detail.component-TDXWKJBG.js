import {
  AuthService
} from "./chunk-KRRQR5IJ.js";
import {
  ApiService
} from "./chunk-Y35ABHFS.js";
import {
  ActivatedRoute,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IS4ZVKQ7.js";

// src/app/pages/product-detail/product-detail.component.ts
function ProductDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading product\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
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
function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Sold out");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Only ", p_r2.stockQty, " left");
  }
}
function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "In stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.addToCart());
    });
    \u0275\u0275text(1, " Add to cart ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275text(1, "Log in to buy");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "\u2713 Added to your cart \u2014 ");
    \u0275\u0275elementStart(2, "a", 26);
    \u0275\u0275text(3, "view cart");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "button", 18);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.dec());
    });
    \u0275\u0275text(3, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 20);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.inc());
    });
    \u0275\u0275text(7, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Conditional_8_Template, 2, 0, "button", 21)(9, ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Conditional_9_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Conditional_10_Template, 4, 0, "p", 22)(11, ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Conditional_11_Template, 2, 1, "p", 23);
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.qty() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.qty());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.qty() >= p_r2.stockQty);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(8, ctx_r0.auth.isLoggedIn() ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(10, ctx_r0.added() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, ctx_r0.error() ? 11 : -1);
  }
}
function ProductDetailComponent_Conditional_5_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "This item is currently out of stock.");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductDetailComponent_Conditional_5_Conditional_0_Conditional_9_Template, 2, 0, "span", 12)(10, ProductDetailComponent_Conditional_5_Conditional_0_Conditional_10_Template, 2, 1)(11, ProductDetailComponent_Conditional_5_Conditional_0_Conditional_11_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ProductDetailComponent_Conditional_5_Conditional_0_Conditional_14_Template, 12, 6)(15, ProductDetailComponent_Conditional_5_Conditional_0_Conditional_15_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.money(p_r2.priceCents));
    \u0275\u0275advance();
    \u0275\u0275conditional(9, p_r2.stockQty === 0 ? 9 : p_r2.stockQty <= 5 ? 10 : 11);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r2.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, p_r2.stockQty > 0 ? 14 : 15);
  }
}
function ProductDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailComponent_Conditional_5_Conditional_0_Template, 16, 7, "div", 6);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.product()) ? 0 : -1, tmp_1_0);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  constructor(api, route, auth) {
    this.api = api;
    this.route = route;
    this.auth = auth;
    this.loading = signal(false);
    this.error = signal(null);
    this.added = signal(false);
    this.qty = signal(1);
    this.products = signal([
      {
        id: "p1",
        name: "Aurora Wireless Headphones",
        description: "Over-ear noise-cancelling headphones with 40-hour battery life, plush memory-foam ear cups, and multipoint Bluetooth. Includes a hard travel case and USB-C fast charging.",
        priceCents: 18900,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
        stockQty: 24
      },
      {
        id: "p4",
        name: "Lumen Desk Lamp",
        description: "Dimmable LED desk lamp with five colour temperatures and a wireless charging base for your phone. Sturdy weighted arm holds any angle.",
        priceCents: 6400,
        imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
        stockQty: 3
      },
      {
        id: "p6",
        name: "Grove Ceramic Mug Set",
        description: "Set of four hand-glazed stoneware mugs in assorted earth tones. Microwave and dishwasher safe. Currently sold out \u2014 restock expected soon.",
        priceCents: 4200,
        imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
        stockQty: 0
      }
    ]);
    this.productId = "";
    this.product = computed(() => this.products().find((p) => p.id === this.productId) ?? this.products()[0]);
  }
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id") ?? "";
    this.loading.set(true);
    this.error.set(null);
    this.api.getProduct(this.productId).subscribe({
      next: (product) => {
        this.products.set([product]);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load this product.");
        this.loading.set(false);
      }
    });
  }
  inc() {
    const max = this.product()?.stockQty ?? 1;
    this.qty.update((q) => Math.min(max, q + 1));
  }
  dec() {
    this.qty.update((q) => Math.max(1, q - 1));
  }
  addToCart() {
    const p = this.product();
    if (!p)
      return;
    this.api.addToCart(p.id, this.qty()).subscribe({
      next: () => {
        this.added.set(true);
      },
      error: () => {
        this.error.set("Could not add to cart.");
      }
    });
  }
  money(cents) {
    return "$" + (cents / 100).toFixed(2);
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(t) {
      return new (t || _ProductDetailComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "container"], ["routerLink", "/", 1, "back-link"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "detail"], [1, "detail-media", "card"], ["width", "800", "height", "600", 3, "src", "alt"], [1, "detail-info"], [1, "price-row"], [1, "price"], [1, "badge", "badge-danger"], [1, "detail-desc"], [1, "badge", "badge-warn"], [1, "badge", "badge-ok"], [1, "buy-row"], ["role", "group", "aria-label", "Quantity", 1, "qty-stepper"], ["type", "button", "aria-label", "Decrease", 1, "qty-btn", 3, "click", "disabled"], [1, "qty-value"], ["type", "button", "aria-label", "Increase", 1, "qty-btn", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-accent"], [1, "added-msg", "badge", "badge-ok"], [1, "error"], ["type", "button", 1, "btn", "btn-accent", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-accent"], ["routerLink", "/cart"], [1, "muted"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ProductDetailComponent_Conditional_3_Template, 4, 0, "div", 2)(4, ProductDetailComponent_Conditional_4_Template, 5, 1)(5, ProductDetailComponent_Conditional_5_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() && !ctx.product() ? 4 : ctx.product() ? 5 : -1);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-6);\n  align-items: start;\n}\n.detail-media[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 0;\n}\n.detail-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-height: 460px;\n  object-fit: cover;\n  display: block;\n}\n.detail-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.detail-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.price[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 800;\n}\n.detail-desc[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  font-size: var(--fs-md);\n  line-height: 1.6;\n  margin: 0;\n}\n.buy-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n  margin-top: var(--space-2);\n}\n.qty-stepper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  overflow: hidden;\n  background: var(--color-surface);\n}\n.qty-btn[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: var(--color-surface-alt);\n  color: var(--color-ink);\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  cursor: pointer;\n}\n.qty-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-surface-inset);\n}\n.qty-btn[_ngcontent-%COMP%]:disabled {\n  opacity: .4;\n  cursor: not-allowed;\n}\n.qty-value[_ngcontent-%COMP%] {\n  min-width: 44px;\n  text-align: center;\n  font-weight: 700;\n  font-size: var(--fs-md);\n}\n.buy-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.added-msg[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n@media (max-width: 768px) {\n  .detail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--space-4);\n  }\n  .buy-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src/app/pages/product-detail/product-detail.component.ts", lineNumber: 20 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=product-detail.component-TDXWKJBG.js.map
