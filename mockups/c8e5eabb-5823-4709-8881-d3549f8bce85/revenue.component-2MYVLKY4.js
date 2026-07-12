import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
  Router,
  __spreadProps,
  __spreadValues,
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

// src/app/features/revenue/revenue.component.ts
var _forTrack0 = ($index, $item) => $item.month;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.id;
function RevenueComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function RevenueComponent_For_8_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2 === "commission" ? "Commission" : t_r2 === "reconciliation" ? "Reconciliation" : "Revenue", " ");
  }
}
function RevenueComponent_Conditional_9_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 17);
    \u0275\u0275element(2, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", m_r4.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.month);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 4, m_r4.value, "1.0-0"), "");
  }
}
function RevenueComponent_Conditional_9_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275element(4, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r5.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 4, b_r5.value, "1.0-0"), "");
  }
}
function RevenueComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3, "YTD booked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "div", 9);
    \u0275\u0275text(9, "Backlog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 11)(14, "h2", 12);
    \u0275\u0275text(15, "Monthly booked revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14);
    \u0275\u0275repeaterCreate(18, RevenueComponent_Conditional_9_For_19_Template, 8, 7, "div", 15, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 11)(21, "h2", 12);
    \u0275\u0275text(22, "Revenue by account (YTD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275repeaterCreate(24, RevenueComponent_Conditional_9_For_25_Template, 8, 7, "div", 16, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 2, ctx_r2.ytdBooked(), "1.0-0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 5, ctx_r2.totalBacklog(), "1.0-0"), "");
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.monthBars());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.accountBars());
  }
}
function RevenueComponent_Conditional_10_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", c_r6.poNumber, " \u2014 ", c_r6.accountName, " \xB7 $", \u0275\u0275pipeBind2(2, 3, c_r6.commissionDue, "1.0-0"), " due");
  }
}
function RevenueComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 37);
    \u0275\u0275repeaterCreate(5, RevenueComponent_Conditional_10_Conditional_0_For_6_Template, 3, 6, "li", null, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.disputedCommissions().length, " disputed commission(s) need attention:");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.disputedCommissions());
  }
}
function RevenueComponent_Conditional_10_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 35);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 35);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 35);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 39);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.poNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 10, c_r7.bookedAmount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", c_r7.rate, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 13, c_r7.commissionDue, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(15, 16, c_r7.paid, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.commissionBadge(c_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.splitWith || "\u2014");
  }
}
function RevenueComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RevenueComponent_Conditional_10_Conditional_0_Template, 7, 1, "div", 25);
    \u0275\u0275elementStart(1, "div", 26)(2, "button", 27);
    \u0275\u0275text(3, "Export CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5, "Export includes all accruals for the current period. (Mockup \u2014 no-op.)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29)(7, "div", 30)(8, "table", 31)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "PO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 32);
    \u0275\u0275text(16, "Booked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 32);
    \u0275\u0275text(18, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 32);
    \u0275\u0275text(20, "Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 32);
    \u0275\u0275text(22, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Split");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, RevenueComponent_Conditional_10_For_29_Template, 21, 19, "tr", null, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "tfoot")(31, "tr", 33)(32, "td", 34)(33, "strong");
    \u0275\u0275text(34, "Totals");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "td", 35)(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "td", 35)(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "td", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r2.disputedCommissions().length > 0 ? 0 : -1);
    \u0275\u0275advance(28);
    \u0275\u0275repeater(ctx_r2.seed.commissions());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(38, 3, ctx_r2.totalDue(), "1.0-0"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(42, 6, ctx_r2.totalPaid(), "1.0-0"), "");
  }
}
function RevenueComponent_Conditional_11_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275element(9, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 45);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r8.poNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r8.accountName);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.commissionBadge(c_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8.status);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.paidPct(c_r8.paid, c_r8.commissionDue), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" $", \u0275\u0275pipeBind2(12, 10, c_r8.paid, "1.0-0"), " / $", \u0275\u0275pipeBind2(13, 13, c_r8.commissionDue, "1.0-0"), " (", ctx_r2.paidPct(c_r8.paid, c_r8.commissionDue), "%) ");
  }
}
function RevenueComponent_Conditional_11_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div")(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 47);
    \u0275\u0275text(11, "Resolve");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r9.poNumber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", c_r9.accountName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Due $", \u0275\u0275pipeBind2(8, 5, c_r9.commissionDue, "1.0-0"), ", paid $", \u0275\u0275pipeBind2(9, 8, c_r9.paid, "1.0-0"), ". Split: ", c_r9.splitWith || "\u2014", "");
  }
}
function RevenueComponent_Conditional_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, RevenueComponent_Conditional_11_Conditional_8_For_2_Template, 12, 11, "div", 46, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.disputedCommissions());
  }
}
function RevenueComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "No open disputes.");
    \u0275\u0275elementEnd();
  }
}
function RevenueComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 12);
    \u0275\u0275text(1, "Booked vs paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275repeaterCreate(3, RevenueComponent_Conditional_11_For_4_Template, 14, 16, "div", 40, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "h2", 12);
    \u0275\u0275text(7, "Open disputes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, RevenueComponent_Conditional_11_Conditional_8_Template, 3, 0, "div", 13)(9, RevenueComponent_Conditional_11_Conditional_9_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.seed.commissions());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(8, ctx_r2.disputedCommissions().length > 0 ? 8 : 9);
  }
}
var RevenueComponent = class _RevenueComponent {
  paidPct(paid, due) {
    if (due <= 0)
      return 0;
    return Math.min(100, Math.round(paid / due * 100));
  }
  commissionBadge(status) {
    switch (status) {
      case "pending":
        return "badge-warning";
      case "reconciled":
        return "badge-success";
      case "disputed":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  setTab(tab) {
    this.router.navigate([], { queryParams: { tab }, queryParamsHandling: "merge" });
  }
  constructor(seed, route, router) {
    this.seed = seed;
    this.route = route;
    this.router = router;
    this.tabs = ["revenue", "commission", "reconciliation"];
    this.activeTab = signal("revenue");
    this.ytdBooked = computed(() => this.seed.accounts().reduce((s, a) => s + a.ytdRevenue, 0));
    this.totalBacklog = computed(() => this.seed.accounts().reduce((s, a) => s + a.backlogValue, 0));
    this.months = [
      { month: "Feb", value: 118e4 },
      { month: "Mar", value: 165e4 },
      { month: "Apr", value: 142e4 },
      { month: "May", value: 198e4 },
      { month: "Jun", value: 224e4 },
      { month: "Jul", value: 131e4 }
    ];
    this.monthBars = computed(() => {
      const max = Math.max(1, ...this.months.map((m) => m.value));
      return this.months.map((m) => __spreadProps(__spreadValues({}, m), { pct: Math.round(m.value / max * 100) }));
    });
    this.accountBars = computed(() => {
      const rows = this.seed.accounts().filter((a) => a.ytdRevenue > 0).map((a) => ({ name: a.name, value: a.ytdRevenue, pct: 0 }));
      const max = Math.max(1, ...rows.map((r) => r.value));
      rows.forEach((r) => r.pct = Math.round(r.value / max * 100));
      return rows.sort((a, b) => b.value - a.value);
    });
    this.disputedCommissions = computed(() => this.seed.commissions().filter((c) => c.status === "disputed"));
    this.totalDue = computed(() => this.seed.commissions().reduce((s, c) => s + c.commissionDue, 0));
    this.totalPaid = computed(() => this.seed.commissions().reduce((s, c) => s + c.paid, 0));
    const t = this.route.snapshot.queryParamMap.get("tab");
    this.activeTab.set(t && this.tabs.includes(t) ? t : "revenue");
    this.route.queryParamMap.subscribe((q) => {
      const tab = q.get("tab");
      this.activeTab.set(tab && this.tabs.includes(tab) ? tab : "revenue");
    });
  }
  static {
    this.\u0275fac = function RevenueComponent_Factory(t) {
      return new (t || _RevenueComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevenueComponent, selectors: [["app-revenue"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "tabs"], [1, "tab", 3, "active"], [1, "tab", 3, "click"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "chart-section"], [1, "panel-title"], [1, "card", "card-pad"], [1, "col-chart"], [1, "col-item"], [1, "bar-row"], [1, "col-track"], [1, "col-fill"], [1, "col-label"], [1, "col-val", "mono"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill", "ytd"], [1, "bar-val", "mono"], [1, "alert", "alert-warning", "disp-alert"], [1, "commission-actions"], [1, "btn", "btn-sm"], [1, "muted", "note"], [1, "card"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "totals-row"], ["colspan", "4", 1, "right"], [1, "right", "mono"], ["colspan", "2"], [1, "disp-list"], [1, "mono"], [1, "badge"], [1, "recon-row"], [1, "recon-head"], [1, "recon-po", "mono"], [1, "muted"], [1, "bar-fill"], [1, "recon-val", "mono"], [1, "dispute-row"], [1, "btn", "btn-sm", "btn-primary"], [1, "card", "card-pad", "muted"]], template: function RevenueComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Revenue & Commission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Booked revenue, backlog, commission accruals and reconciliation.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275repeaterCreate(7, RevenueComponent_For_8_Template, 2, 3, "button", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, RevenueComponent_Conditional_9_Template, 26, 8)(10, RevenueComponent_Conditional_10_Template, 44, 9)(11, RevenueComponent_Conditional_11_Template, 10, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(9, ctx.activeTab() === "revenue" ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.activeTab() === "commission" ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.activeTab() === "reconciliation" ? 11 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.chart-section[_ngcontent-%COMP%] {\n  margin-top: var(--sp-6);\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.col-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--sp-4);\n  min-height: 200px;\n}\n.col-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.col-track[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 56px;\n  height: 160px;\n  display: flex;\n  align-items: flex-end;\n  background: var(--color-surface-2);\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  overflow: hidden;\n}\n.col-fill[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--color-brand-600);\n  border-radius: var(--radius-sm) var(--radius-sm) 0 0;\n}\n.col-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.col-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-text-muted);\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr auto;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-3);\n}\n.bar-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.bar-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 14px;\n  background: var(--color-surface-2);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--color-brand-600);\n}\n.bar-fill.ytd[_ngcontent-%COMP%] {\n  background: var(--chart-2);\n}\n.disp-alert[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.disp-list[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  padding-left: var(--sp-4);\n}\n.commission-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  flex-wrap: wrap;\n  margin-bottom: var(--sp-4);\n}\n.note[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.totals-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--color-border-strong);\n}\n.recon-row[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.recon-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.recon-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n  margin-bottom: 6px;\n}\n.recon-po[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.recon-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-text-muted);\n  margin-top: 4px;\n}\n.dispute-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  padding: var(--sp-3) 0;\n  border-bottom: 1px solid var(--color-border);\n  flex-wrap: wrap;\n}\n.dispute-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n@media (max-width: 640px) {\n  .bar-row[_ngcontent-%COMP%] {\n    grid-template-columns: 130px 1fr;\n  }\n  .bar-val[_ngcontent-%COMP%] {\n    grid-column: 2;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=revenue.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevenueComponent, { className: "RevenueComponent", filePath: "src/app/features/revenue/revenue.component.ts", lineNumber: 25 });
})();
export {
  RevenueComponent
};
//# sourceMappingURL=revenue.component-2MYVLKY4.js.map
