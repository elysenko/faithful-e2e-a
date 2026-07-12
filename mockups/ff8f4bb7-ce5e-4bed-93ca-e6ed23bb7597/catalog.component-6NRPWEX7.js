import {
  ProductService
} from "./chunk-DUMMOMHU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TBK5QOPH.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-GPQOFHD2.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2VXAXVQ7.js";

// src/app/shared/product-card.component.ts
var _c0 = (a0) => ["/products", a0];
function ProductCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "IFS");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.product.stockQty, " in stock");
  }
}
var ProductCardComponent = class _ProductCardComponent {
  constructor() {
    this.format = formatPrice;
  }
  get outOfStock() {
    return this.product.stockQty <= 0;
  }
  static {
    this.\u0275fac = function ProductCardComponent_Factory(t) {
      return new (t || _ProductCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 9, consts: [[1, "product-card", 3, "routerLink"], [1, "thumb"], ["width", "240", "height", "160", "loading", "lazy", 3, "src", "alt"], [1, "badge", "badge-danger", "stock-flag"], [1, "body"], [1, "name"], [1, "desc"], [1, "foot"], [1, "price"], [1, "stock", "muted"], ["aria-hidden", "true", 1, "thumb-placeholder"]], template: function ProductCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
        \u0275\u0275template(2, ProductCardComponent_Conditional_2_Template, 1, 2, "img", 2)(3, ProductCardComponent_Conditional_3_Template, 2, 0)(4, ProductCardComponent_Conditional_4_Template, 2, 0, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "h3", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "span", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, ProductCardComponent_Conditional_13_Template, 2, 1, "span", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, ctx.product.id));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, ctx.product.imageUrl ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(4, ctx.outOfStock ? 4 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.product.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.product.description);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.format(ctx.product.priceCents));
        \u0275\u0275advance();
        \u0275\u0275conditional(13, !ctx.outOfStock ? 13 : -1);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  color: inherit;\n  transition: box-shadow .15s, transform .05s;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow);\n  text-decoration: none;\n}\n.product-card[_ngcontent-%COMP%]:active {\n  transform: scale(.99);\n}\n.thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3 / 2;\n  background: var(--color-surface-alt);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumb-placeholder[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 700;\n  letter-spacing: .1em;\n  color: var(--color-border-strong);\n}\n.stock-flag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--sp-2);\n  left: var(--sp-2);\n}\n.body[_ngcontent-%COMP%] {\n  padding: var(--sp-3);\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin: 0 0 var(--sp-1);\n}\n.desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  margin: 0 0 var(--sp-3);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.foot[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: var(--sp-2);\n}\n.price[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.stock[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n/*# sourceMappingURL=product-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src/app/shared/product-card.component.ts", lineNumber: 14 });
})();

// src/app/pages/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CatalogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("No products match \u201C", ctx_r0.query(), "\u201D.");
  }
}
function CatalogComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 7);
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275property("product", product_r2);
  }
}
function CatalogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_10_For_2_Template, 1, 1, "app-product-card", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filtered());
  }
}
var CatalogComponent = class _CatalogComponent {
  constructor() {
    this.productService = inject(ProductService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.products = signal([
      { id: "1", name: "CLASS-J Time-Delay Fuse 30A", description: "600V industrial time-delay fuse for motor and transformer protection.", priceCents: 1899, imageUrl: null, stockQty: 120 },
      { id: "2", name: "CLASS-CC Fast-Acting Fuse 15A", description: "Rejection-style branch-circuit fuse, 600VAC, current-limiting.", priceCents: 1249, imageUrl: null, stockQty: 84 },
      { id: "3", name: "DIN-Rail Fuse Holder (3-Pole)", description: "Panel-mount 3-pole holder for 10x38mm cylindrical fuses.", priceCents: 2450, imageUrl: null, stockQty: 46 },
      { id: "4", name: "Semiconductor Fuse 63A aR", description: "Ultra-fast aR fuse for protecting SCRs and IGBTs in drives.", priceCents: 5675, imageUrl: null, stockQty: 0 },
      { id: "5", name: "Fused Disconnect Switch 100A", description: "3-phase heavy-duty safety switch, NEMA 3R enclosure.", priceCents: 18900, imageUrl: null, stockQty: 12 },
      { id: "6", name: "Midget Fuse 10A 500V (Pack of 10)", description: '13/32" x 1-1/2" fast-acting control-circuit fuses.', priceCents: 3200, imageUrl: null, stockQty: 200 }
    ]);
    this.query = signal("");
    this.loading = signal(false);
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      if (!q)
        return this.products();
      return this.products().filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    });
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.query.set(params.get("q") ?? "");
      this.fetch();
    });
  }
  onSearch(value) {
    this.router.navigate([], {
      queryParams: { q: value || null },
      queryParamsHandling: "merge"
    });
  }
  fetch() {
    this.loading.set(true);
    this.productService.list(this.query()).subscribe({
      next: (list) => {
        this.products.set(list);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(t) {
      return new (t || _CatalogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "container"], [1, "catalog-head"], [1, "muted"], [1, "search"], ["type", "search", "placeholder", "Search products\u2026", "data-testid", "catalog-search", "aria-label", "Search products", 3, "ngModelChange", "ngModel"], [1, "empty", "card"], [1, "grid-cards"], [3, "product"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Industrial fuses, holders & disconnects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "input", 4);
        \u0275\u0275listener("ngModelChange", function CatalogComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(9, CatalogComponent_Conditional_9_Template, 3, 1, "div", 5)(10, CatalogComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.query());
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.filtered().length === 0 ? 9 : 10);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ProductCardComponent], styles: ["\n\n.catalog-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: var(--sp-4);\n  flex-wrap: wrap;\n  margin-bottom: var(--sp-5);\n}\n.catalog-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-1);\n}\n.search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n  max-width: 360px;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--sp-8);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .search[_ngcontent-%COMP%] {\n    max-width: none;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "src/app/pages/catalog/catalog.component.ts", lineNumber: 16 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=catalog.component-6NRPWEX7.js.map
