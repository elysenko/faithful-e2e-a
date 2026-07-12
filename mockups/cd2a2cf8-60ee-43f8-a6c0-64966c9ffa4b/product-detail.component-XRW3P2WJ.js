import {
  ProductService
} from "./chunk-V333DRWV.js";
import {
  CartService
} from "./chunk-4SILDTGW.js";
import {
  MoneyPipe
} from "./chunk-7MEJQ5O4.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink,
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
} from "./chunk-JG2HHNQL.js";

// src/app/features/catalog/product-detail.component.ts
function ProductDetailComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("In stock \xB7 ", p_r2.stockQty, "");
  }
}
function ProductDetailComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Added to cart. ");
    \u0275\u0275elementStart(2, "a", 18);
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
    \u0275\u0275elementStart(3, "div", 5)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProductDetailComponent_Conditional_3_Conditional_10_Template, 2, 1, "span", 8)(11, ProductDetailComponent_Conditional_3_Conditional_11_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "button", 12);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeQty(-1));
    });
    \u0275\u0275text(17, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 13);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 14);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeQty(1));
    });
    \u0275\u0275text(21, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 15);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_3_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart());
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, ProductDetailComponent_Conditional_3_Conditional_24_Template, 4, 0, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, p_r2.priceCents));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(10, p_r2.stockQty > 0 ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.qty() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.qty());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.qty() >= p_r2.stockQty);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", p_r2.stockQty <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r2.stockQty <= 0 ? "Out of stock" : "Add to cart", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(24, ctx_r2.added() ? 24 : -1);
  }
}
function ProductDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p");
    \u0275\u0275text(2, "Product not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 20);
    \u0275\u0275text(4, "Browse catalog");
    \u0275\u0275elementEnd()();
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  constructor(route, productService, cart) {
    this.route = route;
    this.productService = productService;
    this.cart = cart;
    this.product = signal(void 0);
    this.qty = signal(1);
    this.added = signal(false);
    const id = this.route.snapshot.paramMap.get("id");
    if (id)
      this.product.set(this.productService.getById(id));
  }
  changeQty(delta) {
    const p = this.product();
    if (!p)
      return;
    const next = Math.min(Math.max(1, this.qty() + delta), Math.max(1, p.stockQty));
    this.qty.set(next);
  }
  addToCart() {
    const p = this.product();
    if (!p || p.stockQty <= 0)
      return;
    this.cart.addItem(p, this.qty());
    this.added.set(true);
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(t) {
      return new (t || _ProductDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page"], ["routerLink", "/catalog", "data-testid", "back-to-catalog", 1, "back"], [1, "detail"], [1, "detail-media", "card"], ["width", "560", "height", "560", 3, "src", "alt"], [1, "detail-info"], [1, "price-row"], [1, "price"], [1, "badge", "badge-success"], [1, "detail-desc"], [1, "buy-row"], ["role", "group", "aria-label", "Quantity", 1, "qty"], ["aria-label", "Decrease", 1, "qty-btn", 3, "click", "disabled"], ["data-testid", "detail-qty", 1, "qty-val"], ["aria-label", "Increase", 1, "qty-btn", 3, "click", "disabled"], ["data-testid", "detail-add", 1, "btn", "btn-primary", "buy-btn", 3, "click", "disabled"], ["data-testid", "detail-added", 1, "added-note"], [1, "badge", "badge-warning"], ["routerLink", "/cart"], [1, "card", "empty"], ["routerLink", "/catalog", 1, "btn", "btn-primary"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ProductDetailComponent_Conditional_3_Template, 25, 14, "div", 2)(4, ProductDetailComponent_Conditional_4_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, (tmp_0_0 = ctx.product()) ? 3 : 4, tmp_0_0);
      }
    }, dependencies: [CommonModule, RouterLink, MoneyPipe], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n.detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: var(--space-6);\n  align-items: start;\n}\n.detail-media[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.detail-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n}\n.detail-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.price[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: 700;\n}\n.detail-desc[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  margin-bottom: var(--space-5);\n}\n.buy-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  align-items: center;\n  flex-wrap: wrap;\n}\n.qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.qty-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: none;\n  background: var(--color-surface);\n  font-size: var(--text-lg);\n  color: var(--color-text);\n}\n.qty-btn[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.qty-btn[_ngcontent-%COMP%]:disabled {\n  color: var(--color-text-subtle);\n}\n.qty-val[_ngcontent-%COMP%] {\n  min-width: 40px;\n  text-align: center;\n  font-weight: 600;\n}\n.buy-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.added-note[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  padding: var(--space-3);\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border-radius: var(--radius-md);\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n.added-note[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  text-decoration: underline;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-8);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .detail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--space-4);\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src/app/features/catalog/product-detail.component.ts", lineNumber: 16 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=product-detail.component-XRW3P2WJ.js.map
