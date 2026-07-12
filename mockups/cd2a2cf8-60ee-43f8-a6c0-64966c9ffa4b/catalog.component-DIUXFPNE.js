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
  Router,
  RouterLink,
  computed,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JG2HHNQL.js";

// src/app/features/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/catalog", a0];
function CatalogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("No products match \u201C", ctx_r0.query(), "\u201D.");
  }
}
function CatalogComponent_Conditional_12_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function CatalogComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 9);
    \u0275\u0275element(2, "img", 10);
    \u0275\u0275template(3, CatalogComponent_Conditional_12_For_2_Conditional_3_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "h3", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 17);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_12_For_2_Template_button_click_13_listener($event) {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToCart(product_r3, $event));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, product_r3.id));
    \u0275\u0275attribute("data-testid", "product-" + product_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r3.imageUrl, \u0275\u0275sanitizeUrl)("alt", product_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, product_r3.stockQty <= 0 ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, product_r3.priceCents));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", product_r3.stockQty <= 0);
    \u0275\u0275attribute("data-testid", "add-" + product_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.justAdded() === product_r3.id ? "Added \u2713" : "Add", " ");
  }
}
function CatalogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_12_For_2_Template, 15, 15, "a", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filtered());
  }
}
var CatalogComponent = class _CatalogComponent {
  constructor(productService, cart, route, router) {
    this.productService = productService;
    this.cart = cart;
    this.route = route;
    this.router = router;
    this.query = signal("");
    this.justAdded = signal(null);
    this.filtered = computed(() => {
      const q2 = this.query().trim().toLowerCase();
      return this.productService.products().filter((p) => !q2 || p.name.toLowerCase().includes(q2) || p.description.toLowerCase().includes(q2));
    });
    const q = this.route.snapshot.queryParamMap.get("q");
    if (q)
      this.query.set(q);
  }
  onSearch(value) {
    this.query.set(value);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: value || null },
      queryParamsHandling: "merge"
    });
  }
  addToCart(product, event) {
    event.stopPropagation();
    event.preventDefault();
    if (product.stockQty <= 0)
      return;
    this.cart.addItem(product);
    this.justAdded.set(product.id);
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(t) {
      return new (t || _CatalogComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [[1, "page"], [1, "catalog-head"], [1, "muted"], [1, "search"], [1, "search-icon"], ["type", "search", "placeholder", "Search products\u2026", "data-testid", "catalog-search", "aria-label", "Search products", 3, "input", "value"], [1, "card", "empty"], ["data-testid", "product-grid", 1, "grid"], [1, "card", "product", 3, "routerLink"], [1, "thumb"], ["width", "280", "height", "200", "loading", "lazy", 3, "src", "alt"], [1, "badge", "badge-warning", "stock-tag"], [1, "product-body"], [1, "product-name"], [1, "product-desc", "muted"], [1, "product-foot"], [1, "price"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Shop the catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "span", 4);
        \u0275\u0275text(9, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 5);
        \u0275\u0275listener("input", function CatalogComponent_Template_input_input_10_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, CatalogComponent_Conditional_11_Template, 3, 1, "div", 6)(12, CatalogComponent_Conditional_12_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.filtered().length, " product", ctx.filtered().length === 1 ? "" : "s", " available");
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.query());
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.filtered().length === 0 ? 11 : 12);
      }
    }, dependencies: [CommonModule, RouterLink, MoneyPipe], styles: ["\n\n.catalog-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-5);\n}\n.catalog-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  margin-bottom: var(--space-1);\n}\n.search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 220px;\n  max-width: 340px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: var(--space-4);\n}\n.product[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  color: var(--color-text);\n  transition: box-shadow 0.15s ease, transform 0.1s ease;\n}\n.product[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.product[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 4 / 3;\n  background: var(--color-surface-alt);\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.stock-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--space-2);\n  left: var(--space-2);\n}\n.product-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: var(--space-4);\n  flex: 1;\n}\n.product-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-base);\n}\n.product-desc[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n  padding-top: var(--space-2);\n}\n.price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--text-lg);\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-8);\n  text-align: center;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "src/app/features/catalog/catalog.component.ts", lineNumber: 16 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=catalog.component-DIUXFPNE.js.map
