import {
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  CurrencyPipe,
  NgClass,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VVK4PSXI.js";

// src/app/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ status: "open" });
function DashboardComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 19)(1, "span", 20);
    \u0275\u0275text(2, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "badge-" + a_r1.tone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r1.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.when);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.data = signal({
      openOrders: 4,
      unpaidInvoices: { count: 2, sum: 5820.5 },
      stockValue: 18734.25
    });
    this.activity = signal([
      { id: "a1", when: "Today 09:14", text: "PO-1001 marked ordered (Acme Industrial Supply)", tone: "info" },
      { id: "a2", when: "Today 08:52", text: "SO-2003 fulfilled \u2014 stock decremented", tone: "success" },
      { id: "a3", when: "Yesterday", text: "Invoice INV-3000 marked paid", tone: "success" },
      { id: "a4", when: "Yesterday", text: "Product VLV-030 is out of stock", tone: "danger" }
    ]);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 10, consts: [[1, "stack"], [1, "section-title"], [1, "eyebrow"], [2, "margin", "0"], [1, "kpi-grid"], ["routerLink", "/sales-orders", 1, "card", "card-pad", "card-hover", "kpi", 2, "text-decoration", "none"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-sub"], ["routerLink", "/invoices", 1, "card", "card-pad", "card-hover", "kpi", 2, "text-decoration", "none", 3, "queryParams"], ["routerLink", "/products", 1, "card", "card-pad", "card-hover", "kpi", 2, "text-decoration", "none"], [1, "grid-two"], [1, "card", "card-pad"], [1, "wrap-gap", 2, "margin-top", "var(--sp-3)"], ["routerLink", "/sales-orders/new", 1, "btn", "btn-primary"], ["routerLink", "/purchase-orders/new", 1, "btn", "btn-outline"], ["routerLink", "/customers/new", 1, "btn", "btn-outline"], ["routerLink", "/products", 1, "btn", "btn-ghost"], [1, "stack", 2, "gap", "var(--sp-2)", "margin-top", "var(--sp-3)"], [1, "row", 2, "align-items", "flex-start", "gap", "var(--sp-3)"], [1, "badge", 3, "ngClass"], [1, "text-xs", "muted"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
        \u0275\u0275text(4, "Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2", 3);
        \u0275\u0275text(6, "Dashboard");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4)(8, "a", 5)(9, "span", 6);
        \u0275\u0275text(10, "Open Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Purchase + sales orders in progress");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "a", 9)(16, "span", 6);
        \u0275\u0275text(17, "Unpaid Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 7);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 8);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "a", 10)(24, "span", 6);
        \u0275\u0275text(25, "Stock Value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 7);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 8);
        \u0275\u0275text(30, "Cost \xD7 on-hand across all products");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 11)(32, "div", 12)(33, "h3");
        \u0275\u0275text(34, "Quick actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 13)(36, "a", 14);
        \u0275\u0275text(37, "New sales order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "a", 15);
        \u0275\u0275text(39, "New purchase order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "a", 16);
        \u0275\u0275text(41, "Add customer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "a", 17);
        \u0275\u0275text(43, "View products");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 12)(45, "h3");
        \u0275\u0275text(46, "Recent activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "ul", 18);
        \u0275\u0275repeaterCreate(48, DashboardComponent_For_49_Template, 8, 3, "li", 19, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.data().openOrders);
        \u0275\u0275advance(3);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(9, _c0));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.data().unpaidInvoices.count);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 5, ctx.data().unpaidInvoices.sum), " outstanding");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 7, ctx.data().stockValue));
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.activity());
      }
    }, dependencies: [CommonModule, NgClass, CurrencyPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 12 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-KFGZTI42.js.map
