import {
  RouterLink
} from "./chunk-AFRLPGFB.js";
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G3BCJOAS.js";

// src/app/pages/low-stock-report/low-stock-report.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/items", a0];
var _c1 = () => ["/movements/new"];
var _c2 = (a0) => ({ type: "IN", itemId: a0 });
function LowStockReportComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.rows().length, " item(s)");
  }
}
function LowStockReportComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "span", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function LowStockReportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LowStockReportComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "All items are above their reorder thresholds.");
    \u0275\u0275elementEnd()();
  }
}
function LowStockReportComponent_Conditional_11_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "a", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 10)(13, "span", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 11)(16, "a", 17);
    \u0275\u0275text(17, "Restock");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.sku);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, r_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", r_r2.onHand, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.reorderAt);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("-", ctx_r0.deficit(r_r2), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c1))("queryParams", \u0275\u0275pureFunction1(12, _c2, r_r2.id));
  }
}
function LowStockReportComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 10);
    \u0275\u0275text(9, "On hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 10);
    \u0275\u0275text(11, "Reorder at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 10);
    \u0275\u0275text(13, "Short by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 11);
    \u0275\u0275text(15, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, LowStockReportComponent_Conditional_11_For_18_Template, 18, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.rows());
  }
}
var LowStockReportComponent = class _LowStockReportComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.rows = signal([
      { id: "i6", sku: "SKU-1006", name: "Rubber Gasket 50mm", unit: "pcs", onHand: 0, reorderAt: 80 },
      { id: "i3", sku: "SKU-1003", name: "PVC Pipe 20mm", unit: "pcs", onHand: 12, reorderAt: 50 },
      { id: "i8", sku: "SKU-1008", name: "Paint Can White 5L", unit: "cans", onHand: 18, reorderAt: 25 },
      { id: "i2", sku: "SKU-1002", name: "Copper Wire 2mm", unit: "m", onHand: 85, reorderAt: 200 }
    ]);
  }
  deficit(r) {
    return Math.max(0, r.reorderAt - r.onHand);
  }
  static {
    this.\u0275fac = function LowStockReportComponent_Factory(t) {
      return new (t || _LowStockReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LowStockReportComponent, selectors: [["app-low-stock-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "container"], [1, "page-head"], [1, "muted"], [1, "badge", "badge-danger", "count-badge"], [1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], [1, "actions-col"], [1, "mono"], [3, "routerLink"], [1, "muted", "unit"], [1, "num", "muted"], [1, "badge", "badge-danger"], [1, "btn", "btn-accent", "btn-sm", 3, "routerLink", "queryParams"]], template: function LowStockReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Low stock report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Items below their reorder threshold \u2014 replenish these soon.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, LowStockReportComponent_Conditional_7_Template, 2, 1, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, LowStockReportComponent_Conditional_8_Template, 4, 0, "div", 4)(9, LowStockReportComponent_Conditional_9_Template, 5, 1)(10, LowStockReportComponent_Conditional_10_Template, 5, 0)(11, LowStockReportComponent_Conditional_11_Template, 19, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.rows().length > 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.loading() ? 8 : ctx.error() ? 9 : ctx.rows().length === 0 ? 10 : 11);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n}\n.count-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.unit[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .page-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=low-stock-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LowStockReportComponent, { className: "LowStockReportComponent", filePath: "src/app/pages/low-stock-report/low-stock-report.component.ts", lineNumber: 17 });
})();
export {
  LowStockReportComponent
};
//# sourceMappingURL=low-stock-report.component-KKAMBNMD.js.map
