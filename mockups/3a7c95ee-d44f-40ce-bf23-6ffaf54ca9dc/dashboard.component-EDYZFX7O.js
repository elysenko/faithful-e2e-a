import {
  RouterLink
} from "./chunk-CBFZCQFA.js";
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-I3S7QF5E.js";

// src/app/pages/dashboard/dashboard.component.ts
var _c0 = () => ({ modal: "new" });
function DashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard\u2026");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
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
function DashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "a", 8)(2, "span", 9);
    \u0275\u0275text(3, "\u{1F9FE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5, "Open purchase orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 12)(9, "span", 9);
    \u0275\u0275text(10, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12, "Open sales orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "a", 13)(16, "span", 9);
    \u0275\u0275text(17, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 10);
    \u0275\u0275text(19, "Unpaid invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 11);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "a", 14)(23, "span", 9);
    \u0275\u0275text(24, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 10);
    \u0275\u0275text(26, "Stock value on hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 11);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 15)(30, "h2", 16);
    \u0275\u0275text(31, "Quick actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 17)(33, "a", 18);
    \u0275\u0275text(34, "New sales order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 19);
    \u0275\u0275text(36, "New purchase order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 20);
    \u0275\u0275text(38, "Manage customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "a", 21);
    \u0275\u0275text(40, "Manage products");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().openPurchaseOrders);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().openSalesOrders);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().unpaidInvoices);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.money(ctx_r0.stats().stockValueCents));
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(7, _c0));
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.stats = signal({
      openPurchaseOrders: 3,
      openSalesOrders: 4,
      unpaidInvoices: 2,
      stockValueCents: 421500
    });
  }
  ngOnInit() {
  }
  money(cents) {
    return (cents / 100).toLocaleString(void 0, { style: "currency", currency: "USD" });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "page"], [1, "page-head"], [1, "sub"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "stat-grid"], ["routerLink", "/purchase-orders", 1, "card", "stat", "link-row"], [1, "stat-icon"], [1, "stat-label"], [1, "stat-value"], ["routerLink", "/sales-orders", 1, "card", "stat", "link-row"], ["routerLink", "/invoices", 1, "card", "stat", "link-row"], ["routerLink", "/products", 1, "card", "stat", "link-row"], [1, "stack", 2, "margin-top", "var(--space-6)"], [2, "font-size", "var(--fs-lg)"], [1, "toolbar"], ["routerLink", "/sales-orders", 1, "btn", "btn-primary", 3, "queryParams"], ["routerLink", "/purchase-orders", 1, "btn", "btn-outline", 3, "queryParams"], ["routerLink", "/customers", 1, "btn", "btn-outline"], ["routerLink", "/products", 1, "btn", "btn-outline"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Live snapshot of purchasing, sales and cash across MiniERP.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, DashboardComponent_Conditional_6_Template, 4, 0, "div", 3)(7, DashboardComponent_Conditional_7_Template, 5, 1)(8, DashboardComponent_Conditional_8_Template, 41, 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.error() ? 7 : 8);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow .15s, transform .05s;\n}\n.stat[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow);\n  text-decoration: none;\n}\n.stat[_ngcontent-%COMP%]:active {\n  transform: scale(.99);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 18 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-EDYZFX7O.js.map
