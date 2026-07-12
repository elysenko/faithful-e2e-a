import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  DecimalPipe,
  RouterLink,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-A62IECG2.js";

// src/app/features/orders/orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
var _c0 = (a0) => ["/orders", a0];
function OrdersComponent_Conditional_28_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", o_r1.poNumber, " \u2014 SSD ", o_r1.slippageDays, " days past RDD (", o_r1.accountName, ")");
  }
}
function OrdersComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 20);
    \u0275\u0275repeaterCreate(5, OrdersComponent_Conditional_28_For_6_Template, 2, 3, "li", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Delivery slippage detected on ", ctx_r1.slippingOrders().length, " order(s):");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.slippingOrders());
  }
}
function OrdersComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function OrdersComponent_For_31_Template_button_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatus(s_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("chip-active", ctx_r1.statusFilter() === s_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4 === "all" ? "All" : s_r4);
  }
}
function OrdersComponent_For_55_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Slipping ", o_r5.slippageDays, "d");
  }
}
function OrdersComponent_For_55_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "On track");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 15)(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 23);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, OrdersComponent_For_55_Conditional_18_Template, 2, 1, "span", 25)(19, OrdersComponent_For_55_Conditional_19_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, o_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.poNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 11, o_r5.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r5.rdd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.ssd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.leadTimeWeeks);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusBadge(o_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(18, o_r5.slippage ? 18 : 19);
  }
}
function OrdersComponent_ForEmpty_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "No orders in this status.");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275element(4, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r6.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 4, b_r6.value, "1.0-0"), "");
  }
}
var OrdersComponent = class _OrdersComponent {
  setStatus(status) {
    this.statusFilter.set(status);
  }
  statusBadge(status) {
    switch (status) {
      case "confirmed":
        return "badge-info";
      case "in-production":
        return "badge-warning";
      case "shipped":
        return "badge-success";
      case "delivered":
        return "badge-neutral";
      default:
        return "badge-neutral";
    }
  }
  constructor(seed) {
    this.seed = seed;
    this.statuses = ["all", "confirmed", "in-production", "shipped", "delivered"];
    this.statusFilter = signal("all");
    this.totalBacklog = computed(() => this.seed.orders().reduce((sum, o) => sum + o.amount, 0));
    this.inProduction = computed(() => this.seed.orders().filter((o) => o.status === "in-production").length);
    this.slippingOrders = computed(() => this.seed.orders().filter((o) => o.slippage));
    this.slippingCount = computed(() => this.slippingOrders().length);
    this.onTimePct = computed(() => {
      const total = this.seed.orders().length;
      if (total === 0)
        return 100;
      const onTime = total - this.slippingCount();
      return Math.round(onTime / total * 100);
    });
    this.filteredOrders = computed(() => {
      const f = this.statusFilter();
      if (f === "all")
        return this.seed.orders();
      return this.seed.orders().filter((o) => o.status === f);
    });
    this.accountBars = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const o of this.seed.orders()) {
        map.set(o.accountName, (map.get(o.accountName) ?? 0) + o.amount);
      }
      const rows = Array.from(map.entries()).map(([name, value]) => ({ name, value, pct: 0 }));
      const max = Math.max(1, ...rows.map((r) => r.value));
      rows.forEach((r) => r.pct = Math.round(r.value / max * 100));
      return rows.sort((a, b) => b.value - a.value);
    });
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(t) {
      return new (t || _OrdersComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 11, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "alert", "alert-warning", "slip-alert"], [1, "card", "card-pad", "chips-bar"], [1, "btn", "btn-sm", "chip", 3, "chip-active"], [1, "card"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "clickable", 3, "routerLink"], [1, "chart-section"], [1, "panel-title"], [1, "card", "card-pad"], [1, "bar-row"], [1, "slip-list"], [1, "btn", "btn-sm", "chip", 3, "click"], [1, "mono"], [1, "right", "mono"], [1, "badge"], [1, "badge", "badge-danger"], [1, "badge", "badge-success"], ["colspan", "8", 1, "muted"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-val", "mono"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Open Orders & Backlog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Track open POs, production status and delivery slippage against requested dates.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Total backlog value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 5)(14, "div", 6);
        \u0275\u0275text(15, "In production");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 7);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 5)(19, "div", 6);
        \u0275\u0275text(20, "On-time %");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 7);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 5)(24, "div", 6);
        \u0275\u0275text(25, "Slipping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 7);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(28, OrdersComponent_Conditional_28_Template, 7, 1, "div", 8);
        \u0275\u0275elementStart(29, "div", 9);
        \u0275\u0275repeaterCreate(30, OrdersComponent_For_31_Template, 2, 3, "button", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 11)(33, "div", 12)(34, "table", 13)(35, "thead")(36, "tr")(37, "th");
        \u0275\u0275text(38, "PO");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th", 14);
        \u0275\u0275text(42, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "RDD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "SSD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th", 14);
        \u0275\u0275text(48, "Lead (wk)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Schedule");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "tbody");
        \u0275\u0275repeaterCreate(54, OrdersComponent_For_55_Template, 20, 16, "tr", 15, _forTrack0, false, OrdersComponent_ForEmpty_56_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "div", 16)(58, "h2", 17);
        \u0275\u0275text(59, "Backlog value by account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 18);
        \u0275\u0275repeaterCreate(61, OrdersComponent_For_62_Template, 8, 7, "div", 19, _forTrack1);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 8, ctx.totalBacklog(), "1.0-0"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.inProduction());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.onTimePct(), "%");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("stat-alert", ctx.slippingCount() > 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.slippingCount());
        \u0275\u0275advance();
        \u0275\u0275conditional(28, ctx.slippingOrders().length > 0 ? 28 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(24);
        \u0275\u0275repeater(ctx.filteredOrders());
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.accountBars());
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.stat-value.stat-alert[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.slip-alert[_ngcontent-%COMP%] {\n  margin: var(--sp-4) 0;\n}\n.slip-list[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  padding-left: var(--sp-4);\n}\n.slip-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.chips-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n  margin: var(--sp-4) 0;\n}\n.chip[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.chip-active[_ngcontent-%COMP%] {\n  background: var(--color-brand-600);\n  color: #fff;\n  border-color: var(--color-brand-600);\n}\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.chart-section[_ngcontent-%COMP%] {\n  margin-top: var(--sp-6);\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr auto;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-3);\n}\n.bar-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.bar-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 14px;\n  background: var(--color-surface-2);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--color-brand-600);\n}\n@media (max-width: 640px) {\n  .bar-row[_ngcontent-%COMP%] {\n    grid-template-columns: 120px 1fr;\n  }\n  .bar-val[_ngcontent-%COMP%] {\n    grid-column: 2;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src/app/features/orders/orders.component.ts", lineNumber: 20 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=orders.component-UDILGUP4.js.map
