import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-CHXIRGAM.js";
import {
  ApiService
} from "./chunk-Y35ABHFS.js";
import {
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IS4ZVKQ7.js";

// src/app/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/products", a0];
function HomeComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading products\u2026");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
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
function HomeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 11);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No products match your search.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_18_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Sold out");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_18_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Only ", p_r2.stockQty, " left");
  }
}
function HomeComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13)(1, "div", 14);
    \u0275\u0275element(2, "img", 15);
    \u0275\u0275template(3, HomeComponent_Conditional_18_For_2_Conditional_3_Template, 2, 0, "span", 16)(4, HomeComponent_Conditional_18_For_2_Conditional_4_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "h3", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 20)(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 22);
    \u0275\u0275text(14, "View");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, p_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r2.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, p_r2.stockQty === 0 ? 3 : p_r2.stockQty <= 5 ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.money(p_r2.priceCents));
  }
}
function HomeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_18_For_2_Template, 15, 9, "a", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filtered());
  }
}
var HomeComponent = class _HomeComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.query = "";
    this.q = signal("");
    this.products = signal([
      {
        id: "p1",
        name: "Aurora Wireless Headphones",
        description: "Over-ear noise-cancelling headphones with 40-hour battery life.",
        priceCents: 18900,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
        stockQty: 24
      },
      {
        id: "p2",
        name: "Terra Insulated Bottle",
        description: "Double-walled stainless steel bottle, keeps drinks cold for 24h.",
        priceCents: 3200,
        imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
        stockQty: 120
      },
      {
        id: "p3",
        name: "Nomad Leather Backpack",
        description: "Full-grain leather commuter pack with padded laptop sleeve.",
        priceCents: 14500,
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
        stockQty: 8
      },
      {
        id: "p4",
        name: "Lumen Desk Lamp",
        description: "Dimmable LED desk lamp with wireless charging base.",
        priceCents: 6400,
        imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
        stockQty: 3
      },
      {
        id: "p5",
        name: "Pulse Smart Watch",
        description: "Fitness tracking, heart-rate, and notifications on a bright AMOLED display.",
        priceCents: 22900,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
        stockQty: 15
      },
      {
        id: "p6",
        name: "Grove Ceramic Mug Set",
        description: "Set of four hand-glazed stoneware mugs. Limited restock.",
        priceCents: 4200,
        imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80",
        stockQty: 0
      }
    ]);
    this.filtered = computed(() => {
      const term = this.q().trim().toLowerCase();
      if (!term)
        return this.products();
      return this.products().filter((p) => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));
    });
  }
  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
    this.api.listProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load products. Please try again.");
        this.loading.set(false);
      }
    });
  }
  search() {
    this.q.set(this.query);
  }
  money(cents) {
    return "$" + (cents / 100).toFixed(2);
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 2, consts: [[1, "hero"], [1, "hero-inner"], [1, "badge", "badge-brand"], [1, "container"], [1, "page-head"], [1, "spacer"], [1, "search", 3, "ngSubmit"], ["type", "search", "name", "q", "placeholder", "Search products\u2026", "aria-label", "Search products", 3, "ngModelChange", "ngModel"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "grid"], [1, "card", "product-card", 3, "routerLink"], [1, "thumb"], ["width", "600", "height", "400", "loading", "lazy", 3, "src", "alt"], [1, "badge", "badge-danger", "stock-flag"], [1, "product-body"], [1, "product-name"], [1, "product-desc"], [1, "product-foot"], [1, "price"], [1, "btn", "btn-accent", "btn-sm"], [1, "badge", "badge-warn", "stock-flag"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Storefront");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Shop the essentials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Browse the catalog, add to your cart, and check out in seconds.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "h1");
        \u0275\u0275text(11, "Catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "span", 5);
        \u0275\u0275elementStart(13, "form", 6);
        \u0275\u0275listener("ngSubmit", function HomeComponent_Template_form_ngSubmit_13_listener() {
          return ctx.search();
        });
        \u0275\u0275elementStart(14, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.query, $event) || (ctx.query = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function HomeComponent_Template_input_ngModelChange_14_listener($event) {
          return ctx.q.set($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, HomeComponent_Conditional_15_Template, 4, 0, "div", 8)(16, HomeComponent_Conditional_16_Template, 5, 1)(17, HomeComponent_Conditional_17_Template, 5, 0)(18, HomeComponent_Conditional_18_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.query);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.loading() ? 15 : ctx.error() ? 16 : ctx.filtered().length === 0 ? 17 : 18);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 15% 20%,\n      var(--color-brand-light),\n      transparent 45%),\n    radial-gradient(\n      circle at 90% 30%,\n      var(--color-accent-light),\n      transparent 40%),\n    var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  max-width: var(--container);\n  margin: 0 auto;\n  padding: var(--space-8) var(--space-4);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--space-3);\n}\n.hero-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.hero-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  max-width: 48ch;\n  font-size: var(--fs-md);\n  margin: 0;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n  flex-wrap: wrap;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  max-width: 340px;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  font-size: 16px;\n  font-family: inherit;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-brand);\n  box-shadow: 0 0 0 3px var(--color-brand-light);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: var(--space-4);\n}\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  color: inherit;\n  transition:\n    box-shadow .15s,\n    transform .05s,\n    border-color .15s;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n}\n.product-card[_ngcontent-%COMP%]:active {\n  transform: scale(.99);\n}\n.thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3 / 2;\n  background: var(--color-surface-inset);\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.stock-flag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--space-2);\n  left: var(--space-2);\n}\n.product-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: var(--space-4);\n  flex: 1;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.product-desc[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n  margin-top: auto;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 800;\n  color: var(--color-ink);\n}\n@media (max-width: 768px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    padding: var(--space-6) var(--space-4);\n  }\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 20 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=home.component-U3CS2SVO.js.map
