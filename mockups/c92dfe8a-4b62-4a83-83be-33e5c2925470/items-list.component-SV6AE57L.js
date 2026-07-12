import {
  AuthService
} from "./chunk-2ZMDFIT5.js";
import {
  RouterLink
} from "./chunk-JU25ONEJ.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-DARMOPX2.js";

// src/app/features/items/items-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ form: "new" });
var _c1 = (a0) => ["/items", a0];
function ItemsListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1, "+ New Item");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ItemsListComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1, "View report \u2192");
    \u0275\u0275elementEnd();
  }
}
function ItemsListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4, "item(s) at or below reorder threshold.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ItemsListComponent_Conditional_10_Conditional_5_Template, 2, 0, "a", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.lowCount(), " low");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(5, ctx_r0.auth.isAdmin() ? 5 : -1);
  }
}
function ItemsListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 10);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Loading items\u2026");
    \u0275\u0275elementEnd();
  }
}
function ItemsListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 10);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ItemsListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 10);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "No items yet.");
    \u0275\u0275elementEnd();
  }
}
function ItemsListComponent_Conditional_14_For_20_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Low");
    \u0275\u0275elementEnd();
  }
}
function ItemsListComponent_Conditional_14_For_20_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "OK");
    \u0275\u0275elementEnd();
  }
}
function ItemsListComponent_Conditional_14_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 1);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, ItemsListComponent_Conditional_14_For_20_Conditional_13_Template, 2, 0, "span", 20)(14, ItemsListComponent_Conditional_14_For_20_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 14)(16, "a", 21);
    \u0275\u0275text(17, "Details \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.sku);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.totalQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.reorderAt);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(13, ctx_r0.isLow(item_r2) ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, item_r2.id));
  }
}
function ItemsListComponent_Conditional_14_For_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Low");
    \u0275\u0275elementEnd();
  }
}
function ItemsListComponent_Conditional_14_For_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "OK");
    \u0275\u0275elementEnd();
  }
}
function ItemsListComponent_Conditional_14_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16)(1, "div", 23)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ItemsListComponent_Conditional_14_For_23_Conditional_4_Template, 2, 0, "span", 20)(5, ItemsListComponent_Conditional_14_For_23_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25)(9, "span", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12, "on hand");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 24);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, item_r3.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r0.isLow(item_r3) ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r3.sku, " \xB7 ", item_r3.unit, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r3.totalQty, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("reorder @ ", item_r3.reorderAt, "");
  }
}
function ItemsListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "table", 13)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 14);
    \u0275\u0275text(12, "On hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 14);
    \u0275\u0275text(14, "Reorder at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, ItemsListComponent_Conditional_14_For_20_Template, 18, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275repeaterCreate(22, ItemsListComponent_Conditional_14_For_23_Template, 15, 9, "a", 16, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.items());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.items());
  }
}
var ItemsListComponent = class _ItemsListComponent {
  constructor(auth) {
    this.auth = auth;
    this.loading = signal(false);
    this.error = signal(null);
    this.items = signal([
      { id: "1", sku: "SR-1001", name: "Steel Bolt M6", description: "Zinc-plated hex bolt", unit: "pcs", reorderAt: 100, totalQty: 340 },
      { id: "2", sku: "SR-1002", name: "Hex Nut M6", description: "Standard hex nut", unit: "pcs", reorderAt: 100, totalQty: 80 },
      { id: "3", sku: "SR-1003", name: "Copper Wire 2mm", description: "Insulated copper wire", unit: "m", reorderAt: 50, totalQty: 220 },
      { id: "4", sku: "SR-1004", name: "PVC Pipe 20mm", description: "Rigid PVC conduit", unit: "m", reorderAt: 40, totalQty: 15 },
      { id: "5", sku: "SR-1005", name: "Safety Gloves L", description: "Cut-resistant gloves", unit: "pair", reorderAt: 30, totalQty: 96 },
      { id: "6", sku: "SR-1006", name: "LED Panel 40W", description: "Ceiling LED panel", unit: "pcs", reorderAt: 20, totalQty: 12 },
      { id: "7", sku: "SR-1007", name: "Cable Tie 200mm", description: "Nylon cable tie", unit: "pcs", reorderAt: 200, totalQty: 1500 },
      { id: "8", sku: "SR-1008", name: "Circuit Breaker 16A", description: "Single-pole MCB", unit: "pcs", reorderAt: 25, totalQty: 60 }
    ]);
    this.lowCount = computed(() => this.items().filter((i) => i.totalQty < i.reorderAt).length);
  }
  isLow(item) {
    return item.totalQty < item.reorderAt;
  }
  static {
    this.\u0275fac = function ItemsListComponent_Factory(t) {
      return new (t || _ItemsListComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemsListComponent, selectors: [["app-items-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 3, consts: [[1, "page-title-row"], [1, "muted"], [1, "row", "wrap"], ["routerLink", "/movements/new", 1, "btn", "btn-secondary"], ["routerLink", "/admin/items", 1, "btn", "btn-primary", 3, "queryParams"], [1, "notice"], [1, "state"], [1, "badge", "badge-warning"], [1, "muted", "text-sm"], ["routerLink", "/reports/low-stock", 1, "text-sm"], [1, "state-icon"], [1, "card", "desktop-only"], [1, "table-wrap"], [1, "data"], [1, "text-right"], [1, "mobile-only", "stack"], [1, "card", "card-pad", "item-card", 3, "routerLink"], [1, "mono"], [1, "text-right", "mono"], [1, "text-right", "mono", "muted"], [1, "badge", "badge-danger"], [3, "routerLink"], [1, "badge", "badge-success"], [1, "row-between"], [1, "muted", "text-sm", "mono"], [1, "row-between", "qty-row"], [1, "mono", "qty"]], template: function ItemsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "All tracked inventory items and their total on-hand quantity.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "a", 3);
        \u0275\u0275text(8, "\u{1F501} Record Movement");
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ItemsListComponent_Conditional_9_Template, 2, 2, "a", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, ItemsListComponent_Conditional_10_Template, 6, 2, "div", 5)(11, ItemsListComponent_Conditional_11_Template, 4, 0, "div", 6)(12, ItemsListComponent_Conditional_12_Template, 4, 1)(13, ItemsListComponent_Conditional_13_Template, 4, 0)(14, ItemsListComponent_Conditional_14_Template, 24, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(9, ctx.auth.isAdmin() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.lowCount() > 0 ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.loading() ? 11 : ctx.error() ? 12 : ctx.items().length === 0 ? 13 : 14);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.item-card[_ngcontent-%COMP%] {\n  display: block;\n}\n.item-card[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: var(--shadow-md);\n}\n.item-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n.qty-row[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n}\n.qty[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n}\n/*# sourceMappingURL=items-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemsListComponent, { className: "ItemsListComponent", filePath: "src/app/features/items/items-list.component.ts", lineNumber: 14 });
})();
export {
  ItemsListComponent
};
//# sourceMappingURL=items-list.component-SV6AE57L.js.map
