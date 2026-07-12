import {
  RouterLink
} from "./chunk-JU25ONEJ.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DARMOPX2.js";

// src/app/features/reports/low-stock.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ type: "IN" });
function LowStockComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function LowStockComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
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
function LowStockComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "All items are above their reorder thresholds.");
    \u0275\u0275elementEnd();
  }
}
function LowStockComponent_Conditional_9_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 10)(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 7)(16, "a", 13);
    \u0275\u0275text(17, "Restock");
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
    \u0275\u0275textInterpolate1("/ ", item_r2.unit, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.totalQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.reorderAt);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("-", ctx_r0.shortfall(item_r2), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(7, _c0));
  }
}
function LowStockComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "table", 6)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 7);
    \u0275\u0275text(10, "On hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 7);
    \u0275\u0275text(12, "Reorder at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 7);
    \u0275\u0275text(14, "Shortfall");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, LowStockComponent_Conditional_9_For_18_Template, 18, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.items());
  }
}
var LowStockComponent = class _LowStockComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.items = signal([
      { id: "2", sku: "SR-1002", name: "Hex Nut M6", description: "Standard hex nut", unit: "pcs", reorderAt: 100, totalQty: 80 },
      { id: "4", sku: "SR-1004", name: "PVC Pipe 20mm", description: "Rigid PVC conduit", unit: "m", reorderAt: 40, totalQty: 15 },
      { id: "6", sku: "SR-1006", name: "LED Panel 40W", description: "Ceiling LED panel", unit: "pcs", reorderAt: 20, totalQty: 12 }
    ]);
  }
  shortfall(item) {
    return item.reorderAt - item.totalQty;
  }
  static {
    this.\u0275fac = function LowStockComponent_Factory(t) {
      return new (t || _LowStockComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LowStockComponent, selectors: [["app-low-stock"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "page-title-row"], [1, "muted"], [1, "state"], [1, "state-icon"], [1, "card"], [1, "table-wrap"], [1, "data"], [1, "text-right"], [1, "mono"], [1, "muted", "text-sm"], [1, "text-right", "mono"], [1, "text-right", "mono", "muted"], [1, "badge", "badge-danger"], ["routerLink", "/movements/new", 1, "btn", "btn-secondary", "btn-sm", 3, "queryParams"]], template: function LowStockComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Low-Stock Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Items whose total on-hand quantity is below their reorder threshold.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, LowStockComponent_Conditional_6_Template, 4, 0, "div", 2)(7, LowStockComponent_Conditional_7_Template, 4, 1)(8, LowStockComponent_Conditional_8_Template, 4, 0)(9, LowStockComponent_Conditional_9_Template, 19, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.error() ? 7 : ctx.items().length === 0 ? 8 : 9);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.btn-sm[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 0 var(--space-3);\n  font-size: var(--font-size-sm);\n}\n/*# sourceMappingURL=low-stock.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LowStockComponent, { className: "LowStockComponent", filePath: "src/app/features/reports/low-stock.component.ts", lineNumber: 13 });
})();
export {
  LowStockComponent
};
//# sourceMappingURL=low-stock.component-2BKABE3Z.js.map
