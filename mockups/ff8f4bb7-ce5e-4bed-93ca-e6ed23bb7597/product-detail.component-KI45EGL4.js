import {
  AuthService
} from "./chunk-JCBFPNP7.js";
import {
  ProductService
} from "./chunk-DUMMOMHU.js";
import {
  CartService
} from "./chunk-7KV6SYAR.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-GPQOFHD2.js";
import {
  CommonModule,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2VXAXVQ7.js";

// src/app/pages/product-detail/product-detail.component.ts
function ProductDetailComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", p_r1.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r1.name);
  }
}
function ProductDetailComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "IFS");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("In stock \u2014 ", p_r1.stockQty, "");
  }
}
function ProductDetailComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_3_Conditional_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "Added to cart. ");
    \u0275\u0275elementStart(2, "a", 20);
    \u0275\u0275text(3, "View cart \u2192");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_Conditional_3_Conditional_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
function ProductDetailComponent_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "button", 14);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_3_Conditional_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dec());
    });
    \u0275\u0275text(3, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 16);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_3_Conditional_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.inc());
    });
    \u0275\u0275text(7, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_3_Conditional_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ProductDetailComponent_Conditional_3_Conditional_14_Conditional_10_Template, 4, 0, "div", 18)(11, ProductDetailComponent_Conditional_3_Conditional_14_Conditional_11_Template, 2, 1, "div", 19);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.qty());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.adding());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.adding() ? "Adding\u2026" : "Add to cart", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(10, ctx_r2.added() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, ctx_r2.errorMessage() ? 11 : -1);
  }
}
function ProductDetailComponent_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "This item is currently unavailable.");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275template(2, ProductDetailComponent_Conditional_3_Conditional_2_Template, 1, 2, "img", 4)(3, ProductDetailComponent_Conditional_3_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProductDetailComponent_Conditional_3_Conditional_10_Template, 2, 1, "span", 8)(11, ProductDetailComponent_Conditional_3_Conditional_11_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ProductDetailComponent_Conditional_3_Conditional_14_Template, 12, 5)(15, ProductDetailComponent_Conditional_3_Conditional_15_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, p_r1.imageUrl ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.format(p_r1.priceCents));
    \u0275\u0275advance();
    \u0275\u0275conditional(10, p_r1.stockQty > 0 ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, p_r1.stockQty > 0 ? 14 : 15);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  constructor() {
    this.productService = inject(ProductService);
    this.cartService = inject(CartService);
    this.auth = inject(AuthService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.format = formatPrice;
    this.product = signal({
      id: "1",
      name: "CLASS-J Time-Delay Fuse 30A",
      description: "600V industrial time-delay fuse engineered for motor, transformer and welder circuits. UL Listed, current-limiting design with a 200kA interrupting rating. Rejection-style body prevents mis-application in branch circuits.",
      priceCents: 1899,
      imageUrl: null,
      stockQty: 120
    });
    this.qty = signal(1);
    this.adding = signal(false);
    this.added = signal(false);
    this.errorMessage = signal("");
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id)
      return;
    this.productService.get(id).subscribe({
      next: (p) => this.product.set(p),
      error: () => {
      }
    });
  }
  dec() {
    this.qty.update((q) => Math.max(1, q - 1));
  }
  inc() {
    const max = this.product()?.stockQty ?? 1;
    this.qty.update((q) => Math.min(Math.max(1, max), q + 1));
  }
  addToCart() {
    const p = this.product();
    if (!p)
      return;
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(["/login"], { queryParams: { redirect: `/products/${p.id}` } });
      return;
    }
    this.adding.set(true);
    this.errorMessage.set("");
    this.cartService.addItem(p.id, this.qty()).subscribe({
      next: () => {
        this.adding.set(false);
        this.added.set(true);
      },
      error: (err) => {
        this.adding.set(false);
        this.errorMessage.set(err?.error?.message ?? "Could not add to cart.");
      }
    });
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(t) {
      return new (t || _ProductDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "container"], ["routerLink", "/catalog", 1, "back", "link-btn"], [1, "detail"], [1, "media", "card"], ["width", "480", "height", "360", 3, "src", "alt"], [1, "info"], [1, "price-row"], [1, "price"], [1, "badge", "badge-success"], [1, "description"], ["aria-hidden", "true", 1, "media-placeholder"], [1, "badge", "badge-danger"], [1, "buy"], ["role", "group", "aria-label", "Quantity", 1, "stepper"], ["type", "button", "aria-label", "Decrease", 1, "btn", "btn-secondary", 3, "click"], ["data-testid", "qty", 1, "qty"], ["type", "button", "aria-label", "Increase", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "data-testid", "add-to-cart", 1, "btn", "btn-primary", "add-btn", 3, "click", "disabled"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], ["routerLink", "/cart"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ProductDetailComponent_Conditional_3_Template, 16, 6, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, (tmp_0_0 = ctx.product()) ? 3 : -1, tmp_0_0);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--sp-4);\n}\n.detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: var(--sp-6);\n  align-items: start;\n}\n.media[_ngcontent-%COMP%] {\n  aspect-ratio: 4 / 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background: var(--color-surface-alt);\n}\n.media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.media-placeholder[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n  letter-spacing: .12em;\n  color: var(--color-border-strong);\n}\n.info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-3);\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n}\n.price[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n  color: var(--color-brand);\n}\n.description[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  margin-bottom: var(--sp-5);\n}\n.buy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  flex-wrap: wrap;\n}\n.stepper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n}\n.stepper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 44px;\n  padding: 0;\n  font-size: var(--fs-lg);\n}\n.qty[_ngcontent-%COMP%] {\n  min-width: 40px;\n  text-align: center;\n  font-weight: 700;\n  font-size: var(--fs-md);\n}\n.add-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n@media (max-width: 768px) {\n  .detail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--sp-4);\n  }\n  .add-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src/app/pages/product-detail/product-detail.component.ts", lineNumber: 17 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=product-detail.component-KI45EGL4.js.map
