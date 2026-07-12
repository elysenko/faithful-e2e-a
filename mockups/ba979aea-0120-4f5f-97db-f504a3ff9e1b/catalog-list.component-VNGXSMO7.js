import {
  CartService
} from "./chunk-VWLYAYX2.js";
import "./chunk-YUSCFUEV.js";
import {
  MoneyPipe
} from "./chunk-GJW2SICY.js";
import {
  CommonModule,
  RouterLink,
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
  ɵɵtextInterpolate1
} from "./chunk-RUEYC2SA.js";

// src/app/features/catalog/catalog-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/catalog", a0];
function CatalogListComponent_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function CatalogListComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4)(1, "div", 5);
    \u0275\u0275element(2, "img", 6);
    \u0275\u0275template(3, CatalogListComponent_For_9_Conditional_3_Template, 2, 0, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8)(5, "h3", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11)(10, "span", 12);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275listener("click", function CatalogListComponent_For_9_Template_button_click_13_listener($event) {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart(product_r2, $event));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, product_r2.id));
    \u0275\u0275attribute("data-testid", "product-card-" + product_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", product_r2.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, product_r2.stockQty === 0 ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, product_r2.priceCents));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", product_r2.stockQty === 0);
    \u0275\u0275attribute("data-testid", "add-to-cart-" + product_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.addedId() === product_r2.id ? "Added \u2713" : "Add", " ");
  }
}
var CatalogListComponent = class _CatalogListComponent {
  constructor(cart) {
    this.cart = cart;
    this.addedId = signal(null);
    this.products = signal([
      {
        id: "p1",
        name: "Aurora Wireless Headphones",
        description: "Over-ear noise-cancelling headphones with 30-hour battery life.",
        priceCents: 14999,
        imageUrl: "https://picsum.photos/seed/headphones/480/360",
        stockQty: 12
      },
      {
        id: "p2",
        name: "Nimbus Mechanical Keyboard",
        description: "Hot-swappable 75% keyboard with tactile brown switches.",
        priceCents: 9900,
        imageUrl: "https://picsum.photos/seed/keyboard/480/360",
        stockQty: 34
      },
      {
        id: "p3",
        name: "Vertex 4K Webcam",
        description: "Ultra-sharp 4K webcam with auto-framing and low-light correction.",
        priceCents: 7999,
        imageUrl: "https://picsum.photos/seed/webcam/480/360",
        stockQty: 8
      },
      {
        id: "p4",
        name: "Terra Standing Desk Mat",
        description: "Ergonomic anti-fatigue mat with contoured comfort zones.",
        priceCents: 5499,
        imageUrl: "https://picsum.photos/seed/deskmat/480/360",
        stockQty: 20
      },
      {
        id: "p5",
        name: "Lumen Desk Lamp",
        description: "Dimmable LED lamp with wireless charging base and USB-C port.",
        priceCents: 6299,
        imageUrl: "https://picsum.photos/seed/lamp/480/360",
        stockQty: 15
      },
      {
        id: "p6",
        name: "Cobalt Travel Backpack",
        description: "Water-resistant 22L backpack with padded laptop sleeve.",
        priceCents: 11999,
        imageUrl: "https://picsum.photos/seed/backpack/480/360",
        stockQty: 0
      }
    ]);
  }
  addToCart(product, event) {
    event.preventDefault();
    event.stopPropagation();
    if (product.stockQty <= 0)
      return;
    this.cart.count.update((n) => n + 1);
    this.addedId.set(product.id);
    setTimeout(() => this.addedId.set(null), 1500);
  }
  static {
    this.\u0275fac = function CatalogListComponent_Factory(t) {
      return new (t || _CatalogListComponent)(\u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogListComponent, selectors: [["app-catalog-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [["data-testid", "app-ready", 1, "page"], [1, "page-header"], [1, "muted"], ["data-testid", "catalog-grid", 1, "grid"], [1, "card", "product-card", 3, "routerLink"], [1, "product-thumb"], ["width", "480", "height", "360", "loading", "lazy", 3, "src", "alt"], [1, "badge", "badge-out", "thumb-badge"], [1, "product-body"], [1, "product-name"], [1, "muted", "product-desc"], [1, "row", "between", "mt-2"], [1, "price"], [1, "btn", "btn-sm", 3, "click", "disabled"]], template: function CatalogListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Shop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Browse our latest gear and accessories.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275repeaterCreate(8, CatalogListComponent_For_9_Template, 15, 15, "a", 4, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.products());
      }
    }, dependencies: [CommonModule, RouterLink, MoneyPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogListComponent, { className: "CatalogListComponent", filePath: "src/app/features/catalog/catalog-list.component.ts", lineNumber: 14 });
})();
export {
  CatalogListComponent
};
//# sourceMappingURL=catalog-list.component-VNGXSMO7.js.map
