import {
  toSignal
} from "./chunk-5T3QUQ7K.js";
import {
  CartService
} from "./chunk-5W3QQDJZ.js";
import {
  ActivatedRoute,
  Router,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LLQROSRE.js";

// src/app/features/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/product", a0];
function CatalogComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275property("value", m_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1);
  }
}
function CatalogComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
}
function CatalogComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function CatalogComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275text(2, "No products match your filters.");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_Conditional_25_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function CatalogComponent_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 16)(1, "div", 17);
    \u0275\u0275element(2, "img", 18);
    \u0275\u0275template(3, CatalogComponent_Conditional_25_For_2_Conditional_3_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 24);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_25_For_2_Template_button_click_12_listener($event) {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(p_r4, $event));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, p_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r4.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, p_r4.stockQty === 0 ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.manufacturer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, p_r4.priceCents / 100));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", p_r4.stockQty === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4.stockQty === 0 ? "Out of stock" : "Add to cart", " ");
  }
}
function CatalogComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_25_For_2_Template, 14, 13, "a", 16, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visible());
  }
}
var CatalogComponent = class _CatalogComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.cart = inject(CartService);
    this.loading = signal(false);
    this.error = signal(null);
    this.products = signal([
      { id: "p-1", name: "Class J Time-Delay Fuse 30A", description: "600V AC current-limiting, UL listed.", priceCents: 1899, imageUrl: "https://placehold.co/400x300?text=Fuse+30A", stockQty: 48, manufacturer: "Bussmann" },
      { id: "p-2", name: "Class CC Fast-Acting Fuse 15A", description: "600V, rejection-style, for branch circuits.", priceCents: 1299, imageUrl: "https://placehold.co/400x300?text=Fuse+15A", stockQty: 0, manufacturer: "Mersen" },
      { id: "p-3", name: "DIN-Rail Fuse Holder 1P", description: "Finger-safe, 32A, accepts 10x38mm fuses.", priceCents: 749, imageUrl: "https://placehold.co/400x300?text=Holder", stockQty: 120, manufacturer: "Mersen" },
      { id: "p-4", name: "VFD 3HP 480V Drive", description: "Sensorless vector, Modbus RTU, 3-phase.", priceCents: 42900, imageUrl: "https://placehold.co/400x300?text=VFD+3HP", stockQty: 12, manufacturer: "ABB" },
      { id: "p-5", name: "IEC Contactor 25A 24VDC", description: "3-pole, 11kW, aux contact included.", priceCents: 5600, imageUrl: "https://placehold.co/400x300?text=Contactor", stockQty: 34, manufacturer: "Schneider" },
      { id: "p-6", name: "NEMA 4X Enclosure 12x10x6", description: "Powder-coated steel, hinged, gasketed.", priceCents: 8900, imageUrl: "https://placehold.co/400x300?text=Enclosure", stockQty: 7, manufacturer: "Hoffman" }
    ]);
    this.q = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("q") ?? "")), { initialValue: "" });
    this.manufacturer = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("manufacturer") ?? "")), { initialValue: "" });
    this.sort = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("sort") ?? "")), { initialValue: "" });
    this.qValue = computed(() => this.q());
    this.manufacturerValue = computed(() => this.manufacturer());
    this.sortValue = computed(() => this.sort());
    this.manufacturers = computed(() => Array.from(new Set(this.products().map((p) => p.manufacturer).filter(Boolean))));
    this.visible = computed(() => {
      const q = this.q().toLowerCase().trim();
      const man = this.manufacturer();
      let list = this.products().filter((p) => {
        const matchesQ = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
        const matchesMan = !man || p.manufacturer === man;
        return matchesQ && matchesMan;
      });
      switch (this.sort()) {
        case "price-asc":
          list = [...list].sort((a, b) => a.priceCents - b.priceCents);
          break;
        case "price-desc":
          list = [...list].sort((a, b) => b.priceCents - a.priceCents);
          break;
        case "name":
          list = [...list].sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
      return list;
    });
  }
  patch(params) {
    this.router.navigate([], { relativeTo: this.route, queryParams: params, queryParamsHandling: "merge" });
  }
  onSearch(value) {
    this.patch({ q: value || null });
  }
  onManufacturer(value) {
    this.patch({ manufacturer: value || null });
  }
  onSort(value) {
    this.patch({ sort: value || null });
  }
  addToCart(p, event) {
    event.stopPropagation();
    event.preventDefault();
    this.cart.addItem(p, 1);
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(t) {
      return new (t || _CatalogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 4, consts: [[1, "page"], [1, "catalog-head"], [1, "page-title"], [1, "muted"], [1, "filters", "card"], ["type", "search", "placeholder", "Search products\u2026", "data-testid", "catalog-search", 1, "input", "search", 3, "input", "value"], [1, "select", 3, "change", "value"], ["value", ""], [3, "value"], ["value", "price-asc"], ["value", "price-desc"], ["value", "name"], [1, "spinner"], [1, "alert", "alert-error"], [1, "empty-state"], ["data-testid", "product-grid", 1, "grid"], [1, "card", "product-card", 3, "routerLink"], [1, "thumb"], ["width", "400", "height", "300", "loading", "lazy", 3, "src", "alt"], [1, "stock-flag"], [1, "product-body"], [1, "man"], [1, "product-name"], [1, "price"], ["data-testid", "add-to-cart", 1, "btn", "btn-primary", "btn-sm", "add-btn", 3, "click", "disabled"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Industrial fuses, drives, motors & control components.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "input", 5);
        \u0275\u0275listener("input", function CatalogComponent_Template_input_input_7_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "select", 6);
        \u0275\u0275listener("change", function CatalogComponent_Template_select_change_8_listener($event) {
          return ctx.onManufacturer($event.target.value);
        });
        \u0275\u0275elementStart(9, "option", 7);
        \u0275\u0275text(10, "All manufacturers");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(11, CatalogComponent_For_12_Template, 2, 2, "option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "select", 6);
        \u0275\u0275listener("change", function CatalogComponent_Template_select_change_13_listener($event) {
          return ctx.onSort($event.target.value);
        });
        \u0275\u0275elementStart(14, "option", 7);
        \u0275\u0275text(15, "Sort: Featured");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "Price: Low to High");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 10);
        \u0275\u0275text(19, "Price: High to Low");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 11);
        \u0275\u0275text(21, "Name: A\u2013Z");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(22, CatalogComponent_Conditional_22_Template, 1, 0, "div", 12)(23, CatalogComponent_Conditional_23_Template, 2, 1)(24, CatalogComponent_Conditional_24_Template, 3, 0)(25, CatalogComponent_Conditional_25_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("value", ctx.qValue());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.manufacturerValue());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.manufacturers());
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.sortValue());
        \u0275\u0275advance(9);
        \u0275\u0275conditional(22, ctx.loading() ? 22 : ctx.error() ? 23 : ctx.visible().length === 0 ? 24 : 25);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], styles: ["\n\n.catalog-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-3);\n  padding: var(--sp-3);\n  margin-bottom: var(--sp-5);\n  flex-wrap: wrap;\n}\n.filters[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  flex: 2 1 220px;\n}\n.filters[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  flex: 1 1 160px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: var(--sp-4);\n}\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: box-shadow .15s, transform .05s;\n  color: inherit;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-lg);\n}\n.product-card[_ngcontent-%COMP%]:active {\n  transform: scale(.995);\n}\n.thumb[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--color-surface-alt);\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 4 / 3;\n  object-fit: cover;\n}\n.stock-flag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--sp-2);\n  left: var(--sp-2);\n  background: var(--color-danger);\n  color: #fff;\n  font-size: var(--fs-xs);\n  font-weight: 700;\n  padding: 2px var(--sp-2);\n  border-radius: var(--radius-sm);\n}\n.product-body[_ngcontent-%COMP%] {\n  padding: var(--sp-3);\n  flex: 1;\n}\n.man[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--color-muted);\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-base);\n  margin: var(--sp-1) 0 var(--sp-2);\n}\n.price[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 700;\n  color: var(--color-ink);\n  margin: 0;\n}\n.add-btn[_ngcontent-%COMP%] {\n  margin: 0 var(--sp-3) var(--sp-3);\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "src/app/features/catalog/catalog.component.ts", lineNumber: 16 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=catalog.component-ZLX2GTSB.js.map
