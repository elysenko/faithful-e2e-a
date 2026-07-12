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
  EventEmitter,
  Router,
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
} from "./chunk-POJ4OZZ3.js";

// src/app/shared/product-card.component.ts
var _c0 = (a0) => ["/products", a0];
function ProductCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Low stock");
    \u0275\u0275elementEnd();
  }
}
var ProductCardComponent = class _ProductCardComponent {
  product;
  addToCart = new EventEmitter();
  onAdd(event) {
    event.preventDefault();
    event.stopPropagation();
    this.addToCart.emit(this.product);
  }
  static \u0275fac = function ProductCardComponent_Factory(t) {
    return new (t || _ProductCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, outputs: { addToCart: "addToCart" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 12, consts: [[1, "product-card", 3, "routerLink"], [1, "thumb"], ["width", "400", "height", "300", "loading", "lazy", 3, "src", "alt"], [1, "badge", "badge-danger", "stock-flag"], [1, "body"], [1, "name"], [1, "desc", "muted"], [1, "foot"], [1, "price"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled"], [1, "badge", "badge-warning", "stock-flag"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275template(3, ProductCardComponent_Conditional_3_Template, 2, 0, "span", 3)(4, ProductCardComponent_Conditional_4_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "h3", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "span", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_14_listener($event) {
        return ctx.onAdd($event);
      });
      \u0275\u0275text(15, " Add ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, ctx.product.id));
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx.product.name);
      \u0275\u0275advance();
      \u0275\u0275conditional(3, ctx.product.stockQty === 0 ? 3 : ctx.product.stockQty <= 5 ? 4 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.product.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.product.description);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, ctx.product.priceCents));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.product.stockQty === 0);
    }
  }, dependencies: [CommonModule, RouterLink, MoneyPipe], styles: ["\n\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  color: inherit;\n  transition: box-shadow 0.15s, transform 0.05s;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow);\n  text-decoration: none;\n}\n.product-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.995);\n}\n.thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 4 / 3;\n  background: var(--color-surface-2);\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.stock-flag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n.body[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n}\n.foot[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n}\n.price[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  color: var(--color-brand-600);\n}\n/*# sourceMappingURL=product-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src/app/shared/product-card.component.ts", lineNumber: 14 });
})();

// src/app/features/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CatalogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 8);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch(""));
    });
    \u0275\u0275text(4, "Clear search");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("No products match \u201C", ctx_r1.query(), "\u201D.");
  }
}
function CatalogComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-card", 11);
    \u0275\u0275listener("addToCart", function CatalogComponent_Conditional_10_For_2_Template_app_product_card_addToCart_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    \u0275\u0275property("product", product_r4);
  }
}
function CatalogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_10_For_2_Template, 1, 1, "app-product-card", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
var CatalogComponent = class _CatalogComponent {
  cart = inject(CartService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  // Backend-provided data — declared as a signal per the mockup data contract (GET /api/products).
  products = signal([
    {
      id: "p-1",
      name: "Aurora Wireless Headphones",
      description: "Over-ear noise-cancelling headphones with 30-hour battery life.",
      priceCents: 12999,
      imageUrl: "https://picsum.photos/seed/aurora/400/300",
      stockQty: 24
    },
    {
      id: "p-2",
      name: "Nimbus Mechanical Keyboard",
      description: "Hot-swappable 75% mechanical keyboard with PBT keycaps.",
      priceCents: 8900,
      imageUrl: "https://picsum.photos/seed/nimbus/400/300",
      stockQty: 12
    },
    {
      id: "p-3",
      name: "Terra Insulated Bottle 1L",
      description: "Double-walled stainless steel bottle, keeps drinks cold for 24h.",
      priceCents: 3200,
      imageUrl: "https://picsum.photos/seed/terra/400/300",
      stockQty: 60
    },
    {
      id: "p-4",
      name: "Lumen LED Desk Lamp",
      description: "Dimmable desk lamp with wireless charging base and USB-C port.",
      priceCents: 4500,
      imageUrl: "https://picsum.photos/seed/lumen/400/300",
      stockQty: 0
    },
    {
      id: "p-5",
      name: "Pulse Fitness Tracker",
      description: "Water-resistant tracker with heart-rate and sleep monitoring.",
      priceCents: 7999,
      imageUrl: "https://picsum.photos/seed/pulse/400/300",
      stockQty: 5
    },
    {
      id: "p-6",
      name: "Vertex Laptop Backpack",
      description: "Weatherproof 22L backpack with padded 16-inch laptop sleeve.",
      priceCents: 6400,
      imageUrl: "https://picsum.photos/seed/vertex/400/300",
      stockQty: 33
    }
  ]);
  query = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("q") ?? "")), {
    initialValue: ""
  });
  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q)
      return this.products();
    return this.products().filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  });
  onSearch(value) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: value || null },
      queryParamsHandling: "merge"
    });
  }
  addToCart(product) {
    this.cart.addProduct(product, 1);
  }
  static \u0275fac = function CatalogComponent_Factory(t) {
    return new (t || _CatalogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [[1, "page"], [1, "page-header", "row-between"], [1, "page-title"], [1, "page-sub"], [1, "search"], ["type", "search", "placeholder", "Search products\u2026", "aria-label", "Search products", 3, "input", "value"], [1, "card", "card-pad", "empty"], [1, "muted"], ["type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "grid", "catalog-grid"], [3, "product"], [3, "addToCart", "product"]], template: function CatalogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Shop the catalog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "input", 5);
      \u0275\u0275listener("input", function CatalogComponent_Template_input_input_8_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(9, CatalogComponent_Conditional_9_Template, 5, 1, "div", 6)(10, CatalogComponent_Conditional_10_Template, 3, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Free shipping on orders over $75 \u2014 ", ctx.filtered().length, " products available.");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.query());
      \u0275\u0275advance();
      \u0275\u0275conditional(9, ctx.filtered().length === 0 ? 9 : 10);
    }
  }, dependencies: [CommonModule, ProductCardComponent], styles: ["\n\n.search[_ngcontent-%COMP%] {\n  min-width: 240px;\n  flex: 1;\n  max-width: 360px;\n}\n.catalog-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .search[_ngcontent-%COMP%] {\n    max-width: none;\n    width: 100%;\n  }\n  .catalog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  }\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "src/app/features/catalog/catalog.component.ts", lineNumber: 17 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=catalog.component-GJ7RFM7X.js.map
