import {
  CartService
} from "./chunk-VWLYAYX2.js";
import "./chunk-YUSCFUEV.js";
import {
  toSignal
} from "./chunk-A5Y7O3ZK.js";
import {
  MoneyPipe
} from "./chunk-GJW2SICY.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink,
  computed,
  map,
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
} from "./chunk-RUEYC2SA.js";

// src/app/features/catalog/catalog-detail.component.ts
function CatalogDetailComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function CatalogDetailComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r2.stockQty, " in stock");
  }
}
function CatalogDetailComponent_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Unavailable ");
  }
}
function CatalogDetailComponent_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.added() ? "Added to cart \u2713" : "Add to cart", " ");
  }
}
function CatalogDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CatalogDetailComponent_Conditional_3_Conditional_9_Template, 2, 0, "span", 7)(10, CatalogDetailComponent_Conditional_3_Conditional_10_Template, 2, 1);
    \u0275\u0275elementStart(11, "p", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275listener("click", function CatalogDetailComponent_Conditional_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart());
    });
    \u0275\u0275template(14, CatalogDetailComponent_Conditional_3_Conditional_14_Template, 1, 0)(15, CatalogDetailComponent_Conditional_3_Conditional_15_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, p_r2.priceCents));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, p_r2.stockQty === 0 ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", p_r2.stockQty === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, p_r2.stockQty === 0 ? 14 : 15);
  }
}
function CatalogDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p", 12);
    \u0275\u0275text(2, "Product not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 13);
    \u0275\u0275text(4, "Return to shop");
    \u0275\u0275elementEnd()();
  }
}
var CatalogDetailComponent = class _CatalogDetailComponent {
  constructor(route, cart) {
    this.route = route;
    this.cart = cart;
    this.routeId = toSignal(this.route.paramMap.pipe(map((p) => p.get("id"))), {
      initialValue: null
    });
    this.added = signal(false);
    this.products = signal([
      {
        id: "p1",
        name: "Aurora Wireless Headphones",
        description: "Over-ear noise-cancelling headphones with 30-hour battery life, plush memory-foam ear cups, and multipoint Bluetooth. Includes a hard travel case and USB-C fast charging.",
        priceCents: 14999,
        imageUrl: "https://picsum.photos/seed/headphones/720/540",
        stockQty: 12
      },
      {
        id: "p2",
        name: "Nimbus Mechanical Keyboard",
        description: "Hot-swappable 75% mechanical keyboard with tactile brown switches, PBT double-shot keycaps, and per-key RGB. Wireless and wired modes supported.",
        priceCents: 9900,
        imageUrl: "https://picsum.photos/seed/keyboard/720/540",
        stockQty: 34
      },
      {
        id: "p3",
        name: "Vertex 4K Webcam",
        description: "Ultra-sharp 4K webcam with AI auto-framing, low-light correction, and a dual-microphone array. Clamps to any monitor or tripod.",
        priceCents: 7999,
        imageUrl: "https://picsum.photos/seed/webcam/720/540",
        stockQty: 8
      },
      {
        id: "p4",
        name: "Terra Standing Desk Mat",
        description: "Ergonomic anti-fatigue mat with contoured comfort zones and a durable non-slip base. Designed for long standing sessions.",
        priceCents: 5499,
        imageUrl: "https://picsum.photos/seed/deskmat/720/540",
        stockQty: 20
      },
      {
        id: "p5",
        name: "Lumen Desk Lamp",
        description: "Dimmable LED desk lamp with a 10W wireless charging base, USB-C passthrough, and five color temperatures. Touch controls with memory.",
        priceCents: 6299,
        imageUrl: "https://picsum.photos/seed/lamp/720/540",
        stockQty: 15
      },
      {
        id: "p6",
        name: "Cobalt Travel Backpack",
        description: 'Water-resistant 22L travel backpack with a padded 16" laptop sleeve, hidden security pocket, and luggage pass-through strap.',
        priceCents: 11999,
        imageUrl: "https://picsum.photos/seed/backpack/720/540",
        stockQty: 0
      }
    ]);
    this.product = computed(() => this.products().find((p) => p.id === this.routeId()));
  }
  addToCart() {
    const p = this.product();
    if (!p || p.stockQty <= 0)
      return;
    this.cart.count.update((n) => n + 1);
    this.added.set(true);
    setTimeout(() => this.added.set(false), 1500);
  }
  static {
    this.\u0275fac = function CatalogDetailComponent_Factory(t) {
      return new (t || _CatalogDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogDetailComponent, selectors: [["app-catalog-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [["data-testid", "catalog-detail", 1, "page"], ["routerLink", "/catalog", 1, "back-link"], [1, "detail-layout", "mt-4"], [1, "detail-media"], ["width", "720", "height", "540", 3, "src", "alt"], [1, "detail-info"], [1, "price", "price-lg"], [1, "badge", "badge-out"], [1, "mt-4"], ["data-testid", "detail-add-to-cart", 1, "btn", "btn-block", "mt-4", 3, "click", "disabled"], [1, "badge", "badge-shipped"], [1, "card", "mt-4"], [1, "muted"], ["routerLink", "/catalog", 1, "btn", "btn-secondary", "btn-sm", "mt-2"]], template: function CatalogDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to shop");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CatalogDetailComponent_Conditional_3_Template, 16, 10, "div", 2)(4, CatalogDetailComponent_Conditional_4_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, (tmp_0_0 = ctx.product()) ? 3 : 4, tmp_0_0);
      }
    }, dependencies: [CommonModule, RouterLink, MoneyPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogDetailComponent, { className: "CatalogDetailComponent", filePath: "src/app/features/catalog/catalog-detail.component.ts", lineNumber: 16 });
})();
export {
  CatalogDetailComponent
};
//# sourceMappingURL=catalog-detail.component-XNBVDVGW.js.map
