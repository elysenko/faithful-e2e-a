import {
  toSignal
} from "./chunk-5T3QUQ7K.js";
import {
  CartService
} from "./chunk-5W3QQDJZ.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-5PRKSMZW.js";
import {
  CommonModule,
  CurrencyPipe,
  computed,
  inject,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
} from "./chunk-LLQROSRE.js";

// src/app/features/product-detail/product-detail.component.ts
function ProductDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function ProductDetailComponent_Conditional_4_Template(rf, ctx) {
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
function ProductDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "Product not found.");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_Conditional_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.product().stockQty, " in stock");
  }
}
function ProductDetailComponent_Conditional_6_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Added to cart. ");
    \u0275\u0275elementStart(2, "a", 22);
    \u0275\u0275text(3, "View cart \u2192");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275element(2, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ProductDetailComponent_Conditional_6_Conditional_13_Template, 2, 0, "p", 13)(14, ProductDetailComponent_Conditional_6_Conditional_14_Template, 2, 1);
    \u0275\u0275elementStart(15, "div", 14)(16, "div", 15)(17, "button", 16);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.dec());
    });
    \u0275\u0275text(18, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 17);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 18);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.inc());
    });
    \u0275\u0275text(22, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 19);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_6_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addToCart());
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ProductDetailComponent_Conditional_6_Conditional_25_Template, 4, 0, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.product().imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.product().name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.product().manufacturer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.product().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 15, ctx_r0.product().priceCents / 100));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.product().description);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r0.product().stockQty === 0 ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r0.product().stockQty === 0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.qty() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.qty());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.qty() >= ctx_r0.product().stockQty);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.product().stockQty === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product().stockQty === 0 ? "Out of stock" : "Add to cart", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(25, ctx_r0.added() ? 25 : -1);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.cart = inject(CartService);
    this.loading = signal(false);
    this.error = signal(null);
    this.qty = signal(1);
    this.added = signal(false);
    this.products = signal([
      { id: "p-1", name: "Class J Time-Delay Fuse 30A", description: "600V AC current-limiting, UL listed. Time-delay characteristic ideal for motor and transformer circuits with inrush.", priceCents: 1899, imageUrl: "https://placehold.co/600x480?text=Fuse+30A", stockQty: 48, manufacturer: "Bussmann" },
      { id: "p-2", name: "Class CC Fast-Acting Fuse 15A", description: "600V rejection-style fuse for branch circuit and control transformer protection.", priceCents: 1299, imageUrl: "https://placehold.co/600x480?text=Fuse+15A", stockQty: 0, manufacturer: "Mersen" },
      { id: "p-3", name: "DIN-Rail Fuse Holder 1P", description: "Finger-safe single-pole holder, 32A rated, accepts 10x38mm cylindrical fuses.", priceCents: 749, imageUrl: "https://placehold.co/600x480?text=Holder", stockQty: 120, manufacturer: "Mersen" },
      { id: "p-4", name: "VFD 3HP 480V Drive", description: "Sensorless vector variable frequency drive with Modbus RTU, 3-phase input.", priceCents: 42900, imageUrl: "https://placehold.co/600x480?text=VFD+3HP", stockQty: 12, manufacturer: "ABB" },
      { id: "p-5", name: "IEC Contactor 25A 24VDC", description: "3-pole, 11kW contactor with 24VDC coil and auxiliary contact included.", priceCents: 5600, imageUrl: "https://placehold.co/600x480?text=Contactor", stockQty: 34, manufacturer: "Schneider" },
      { id: "p-6", name: "NEMA 4X Enclosure 12x10x6", description: "Powder-coated steel enclosure, hinged door, gasketed for washdown environments.", priceCents: 8900, imageUrl: "https://placehold.co/600x480?text=Enclosure", stockQty: 7, manufacturer: "Hoffman" }
    ]);
    this.id = toSignal(this.route.paramMap.pipe(map((p) => p.get("id") ?? "")), { initialValue: "" });
    this.product = computed(() => this.products().find((p) => p.id === this.id()));
  }
  inc() {
    const p = this.product();
    if (p && this.qty() < p.stockQty)
      this.qty.update((q) => q + 1);
  }
  dec() {
    if (this.qty() > 1)
      this.qty.update((q) => q - 1);
  }
  addToCart() {
    const p = this.product();
    if (!p || p.stockQty === 0)
      return;
    this.cart.addItem(p, this.qty());
    this.added.set(true);
    setTimeout(() => this.added.set(false), 2e3);
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(t) {
      return new (t || _ProductDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "page"], ["routerLink", "/catalog", 1, "back"], [1, "spinner"], [1, "alert", "alert-error"], [1, "empty-state"], [1, "detail"], [1, "media", "card"], ["width", "600", "height", "480", 3, "src", "alt"], [1, "info"], [1, "man"], [1, "page-title"], [1, "price"], [1, "desc"], [1, "badge", "badge-placed", "stock-out"], [1, "buy-row"], [1, "stepper"], ["aria-label", "Decrease", 1, "btn", "step", 3, "click", "disabled"], ["data-testid", "qty", 1, "qty"], ["aria-label", "Increase", 1, "btn", "step", 3, "click", "disabled"], ["data-testid", "add-to-cart", 1, "btn", "btn-primary", "add", 3, "click", "disabled"], [1, "alert", "alert-info", "added-msg"], [1, "in-stock"], ["routerLink", "/cart"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ProductDetailComponent_Conditional_3_Template, 1, 0, "div", 2)(4, ProductDetailComponent_Conditional_4_Template, 2, 1)(5, ProductDetailComponent_Conditional_5_Template, 3, 0)(6, ProductDetailComponent_Conditional_6_Template, 26, 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : !ctx.product() ? 5 : 6);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--sp-4);\n  color: var(--color-info);\n  font-weight: 600;\n}\n.detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: var(--sp-6);\n  align-items: start;\n}\n.media[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 5 / 4;\n  object-fit: cover;\n}\n.man[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--color-muted);\n}\n.price[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 800;\n  margin: var(--sp-2) 0;\n}\n.desc[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  margin-bottom: var(--sp-4);\n}\n.in-stock[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-weight: 600;\n}\n.stock-out[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-3);\n}\n.buy-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-3);\n  align-items: center;\n  margin-top: var(--sp-4);\n}\n.stepper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.stepper.disabled[_ngcontent-%COMP%] {\n  opacity: .5;\n}\n.step[_ngcontent-%COMP%] {\n  min-width: 44px;\n  border: none;\n  border-radius: 0;\n  background: var(--color-surface-alt);\n  font-size: var(--fs-lg);\n}\n.qty[_ngcontent-%COMP%] {\n  min-width: 44px;\n  text-align: center;\n  font-weight: 700;\n}\n.add[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.added-msg[_ngcontent-%COMP%] {\n  margin-top: var(--sp-4);\n}\n@media (max-width: 768px) {\n  .detail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--sp-4);\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src/app/features/product-detail/product-detail.component.ts", lineNumber: 16 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=product-detail.component-ADBKUQA7.js.map
