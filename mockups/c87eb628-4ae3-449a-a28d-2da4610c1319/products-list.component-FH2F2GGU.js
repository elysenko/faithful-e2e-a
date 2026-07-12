import {
  AuthService
} from "./chunk-WUH3AZNU.js";
import {
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  CurrencyPipe,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VVK4PSXI.js";

// src/app/pages/products-list/products-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/products", a0];
function ProductsListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Product create/edit is admin-only.");
    \u0275\u0275elementEnd();
  }
}
function ProductsListComponent_Conditional_11_For_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Out");
    \u0275\u0275elementEnd();
  }
}
function ProductsListComponent_Conditional_11_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Low");
    \u0275\u0275elementEnd();
  }
}
function ProductsListComponent_Conditional_11_For_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "OK");
    \u0275\u0275elementEnd();
  }
}
function ProductsListComponent_Conditional_11_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 11)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 10);
    \u0275\u0275template(12, ProductsListComponent_Conditional_11_For_16_Conditional_12_Template, 2, 0, "span", 12)(13, ProductsListComponent_Conditional_11_For_16_Conditional_13_Template, 2, 0)(14, ProductsListComponent_Conditional_11_For_16_Conditional_14_Template, 2, 0);
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, p_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, p_r1.cost));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, p_r1.price));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(12, p_r1.onHand === 0 ? 12 : p_r1.onHand < 10 ? 13 : 14);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r1.onHand);
  }
}
function ProductsListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 10);
    \u0275\u0275text(9, "Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 10);
    \u0275\u0275text(11, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 10);
    \u0275\u0275text(13, "On hand");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, ProductsListComponent_Conditional_11_For_16_Template, 17, 13, "tr", 11, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
function ProductsListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "No products match your search.");
    \u0275\u0275elementEnd()();
  }
}
var ProductsListComponent = class _ProductsListComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.isAdmin = this.auth.hasRole("admin");
    this.query = signal("");
    this.products = signal([
      { id: "p1", sku: "STL-001", name: "Steel Bolt M8", cost: 0.45, price: 1.2, onHand: 1200 },
      { id: "p2", sku: "STL-002", name: "Steel Nut M8", cost: 0.3, price: 0.9, onHand: 1500 },
      { id: "p3", sku: "PIP-050", name: "PVC Pipe 50mm", cost: 3.2, price: 7.5, onHand: 340 },
      { id: "p4", sku: "PIP-075", name: "PVC Pipe 75mm", cost: 4.8, price: 10.9, onHand: 210 },
      { id: "p5", sku: "WIR-014", name: "Copper Wire 14AWG", cost: 12, price: 24, onHand: 85 },
      { id: "p6", sku: "WIR-012", name: "Copper Wire 12AWG", cost: 15.5, price: 30, onHand: 60 },
      { id: "p7", sku: "PNL-100", name: "Control Panel", cost: 145, price: 320, onHand: 18 },
      { id: "p8", sku: "SEN-200", name: "Proximity Sensor", cost: 22.5, price: 49, onHand: 140 },
      { id: "p9", sku: "VLV-030", name: "Ball Valve 30mm", cost: 9.75, price: 21, onHand: 0 },
      { id: "p10", sku: "GSK-008", name: "Rubber Gasket", cost: 0.85, price: 2.4, onHand: 4 }
    ]);
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      if (!q)
        return this.products();
      return this.products().filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q));
    });
  }
  onSearch(value) {
    this.query.set(value);
  }
  static {
    this.\u0275fac = function ProductsListComponent_Factory(t) {
      return new (t || _ProductsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsListComponent, selectors: [["app-products-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 3, consts: [[1, "container"], [1, "row-between", "section-title"], [1, "stack"], [1, "eyebrow"], [1, "alert", "alert-info"], [1, "filter-bar"], [1, "field"], ["type", "search", "placeholder", "Search by name or SKU\u2026", 1, "input", 3, "input", "value"], [1, "table-wrap"], [1, "data"], [1, "num"], [1, "card-hover", 3, "routerLink"], [1, "badge", "badge-danger"], [1, "badge", "badge-warning"], [1, "badge", "badge-success"], [1, "state"], [1, "state-icon"], [1, "muted"]], template: function ProductsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Inventory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Products");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, ProductsListComponent_Conditional_7_Template, 2, 0, "div", 4);
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "input", 7);
        \u0275\u0275listener("input", function ProductsListComponent_Template_input_input_10_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, ProductsListComponent_Conditional_11_Template, 17, 0, "div", 8)(12, ProductsListComponent_Conditional_12_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.isAdmin ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.query());
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.filtered().length > 0 ? 11 : 12);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsListComponent, { className: "ProductsListComponent", filePath: "src/app/pages/products-list/products-list.component.ts", lineNumber: 13 });
})();
export {
  ProductsListComponent
};
//# sourceMappingURL=products-list.component-FH2F2GGU.js.map
