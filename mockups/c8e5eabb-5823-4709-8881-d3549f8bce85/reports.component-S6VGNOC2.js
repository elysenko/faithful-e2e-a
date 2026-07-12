import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
  Router,
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
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/reports/reports.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
var _c0 = (a0) => ["/accounts", a0];
function ReportsComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ReportsComponent_For_32_Template_button_click_0_listener() {
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
    \u0275\u0275textInterpolate(t_r2);
  }
}
function ReportsComponent_Conditional_33_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275element(8, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 4, b_r4.value, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", b_r4.pct, "%");
  }
}
function ReportsComponent_Conditional_33_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 2, b_r5.value, "1.0-0"), "");
  }
}
function ReportsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h2", 12);
    \u0275\u0275text(2, "YTD revenue by account");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ReportsComponent_Conditional_33_For_4_Template, 9, 7, "div", 18, _forTrack1);
    \u0275\u0275elementStart(5, "div", 19)(6, "table", 20)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 21);
    \u0275\u0275text(12, "YTD revenue");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, ReportsComponent_Conditional_33_For_15_Template, 6, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.revenueBars());
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r2.revenueBars());
  }
}
function ReportsComponent_Conditional_34_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275element(7, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r6.value);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r6.pct, "%");
    \u0275\u0275classProp("fill-danger", b_r6.label === "Lost");
  }
}
function ReportsComponent_Conditional_34_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 28);
    \u0275\u0275text(7, "won");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 13);
    \u0275\u0275text(9, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 27);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r7.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r7.accountName);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 3, q_r7.amount, "1.0-0"), "");
  }
}
function ReportsComponent_Conditional_34_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 29);
    \u0275\u0275text(7, "lost");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 27);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r8.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r8.accountName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r8.reasonCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 4, q_r8.amount, "1.0-0"), "");
  }
}
function ReportsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h2", 12);
    \u0275\u0275text(2, "Win vs loss");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ReportsComponent_Conditional_34_For_4_Template, 8, 6, "div", 18, _forTrack1);
    \u0275\u0275elementStart(5, "div", 19)(6, "table", 20)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Quote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 21);
    \u0275\u0275text(18, "Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, ReportsComponent_Conditional_34_For_21_Template, 13, 6, "tr", null, _forTrack0);
    \u0275\u0275repeaterCreate(22, ReportsComponent_Conditional_34_For_23_Template, 13, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.winrateBars());
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.wonQuotes());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.lostQuotes());
  }
}
function ReportsComponent_Conditional_35_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275element(8, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 4, b_r9.value, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", b_r9.pct, "%");
  }
}
function ReportsComponent_Conditional_35_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 2, b_r10.value, "1.0-0"), "");
  }
}
function ReportsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h2", 12);
    \u0275\u0275text(2, "Order backlog by account");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ReportsComponent_Conditional_35_For_4_Template, 9, 7, "div", 18, _forTrack1);
    \u0275\u0275elementStart(5, "div", 19)(6, "table", 20)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 21);
    \u0275\u0275text(12, "Backlog");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, ReportsComponent_Conditional_35_For_15_Template, 6, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.backlogBars());
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r2.backlogBars());
  }
}
function ReportsComponent_Conditional_36_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275element(7, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r11.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r11.value);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r11.pct, "%");
    \u0275\u0275classProp("fill-danger", b_r11.label === "Slipping");
  }
}
function ReportsComponent_Conditional_36_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r12.poNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r12.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r12.rdd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r12.ssd);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(o_r12.slippage ? "badge-danger" : "badge-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r12.slippage ? "slipping" : "on time");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", o_r12.slippageDays, "d");
  }
}
function ReportsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h2", 12);
    \u0275\u0275text(2, "On-time delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ReportsComponent_Conditional_36_For_4_Template, 8, 6, "div", 18, _forTrack1);
    \u0275\u0275elementStart(5, "div", 19)(6, "table", 20)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "PO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "RDD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "SSD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 21);
    \u0275\u0275text(20, "Slippage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, ReportsComponent_Conditional_36_For_23_Template, 14, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.otdBars());
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.seed.orders());
  }
}
function ReportsComponent_Conditional_37_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275element(7, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r13.value);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r13.pct, "%");
    \u0275\u0275classProp("fill-danger", b_r13.badgeClass === "badge-danger")("fill-warning", b_r13.badgeClass === "badge-warning");
  }
}
function ReportsComponent_Conditional_37_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r14.healthScore);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.connectionClass(a_r14.connectionLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r14.connectionLevel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r14.healthWhy);
  }
}
function ReportsComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h2", 12);
    \u0275\u0275text(2, "Account health & connection");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ReportsComponent_Conditional_37_For_4_Template, 8, 8, "div", 18, _forTrack1);
    \u0275\u0275elementStart(5, "div", 19)(6, "table", 20)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Connection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Why");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, ReportsComponent_Conditional_37_For_19_Template, 10, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.healthBars());
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r2.customerAccounts());
  }
}
function ReportsComponent_Conditional_38_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 27);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 30);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r15.poNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r15.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 7, c_r15.commissionDue, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 10, c_r15.paid, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(c_r15.status === "reconciled" ? "badge-success" : c_r15.status === "disputed" ? "badge-danger" : "badge-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r15.status);
  }
}
function ReportsComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h2", 12);
    \u0275\u0275text(2, "Commission due vs paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 22)(5, "span", 23);
    \u0275\u0275text(6, "Total due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275element(11, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 18)(13, "div", 22)(14, "span", 23);
    \u0275\u0275text(15, "Total paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 24);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 25);
    \u0275\u0275element(20, "div", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 19)(22, "table", 20)(23, "thead")(24, "tr")(25, "th");
    \u0275\u0275text(26, "PO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 21);
    \u0275\u0275text(30, "Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 21);
    \u0275\u0275text(32, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "tbody");
    \u0275\u0275repeaterCreate(36, ReportsComponent_Conditional_38_For_37_Template, 14, 13, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(9, 6, ctx_r2.commissionDueTotal(), "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", 100, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 9, ctx_r2.commissionPaidTotal(), "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.commissionDueTotal() > 0 ? ctx_r2.commissionPaidTotal() / ctx_r2.commissionDueTotal() * 100 : 0, "%");
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.seed.commissions());
  }
}
function ReportsComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 32)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 34);
    \u0275\u0275listener("click", function ReportsComponent_For_46_Template_button_click_8_listener() {
      const a_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openQbr(a_r17.id));
    });
    \u0275\u0275text(9, "Generate QBR");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r17.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.connectionClass(a_r17.connectionLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r17.connectionLevel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r17.industry, " \xB7 health ", a_r17.healthScore, "");
  }
}
function ReportsComponent_Conditional_47_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r19);
  }
}
function ReportsComponent_Conditional_47_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r20);
  }
}
function ReportsComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function ReportsComponent_Conditional_47_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeQbr());
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275listener("click", function ReportsComponent_Conditional_47_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "h3", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function ReportsComponent_Conditional_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeQbr());
    });
    \u0275\u0275text(6, "Close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "div", 40)(9, "div")(10, "span", 41);
    \u0275\u0275text(11, "YTD revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 24);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "span", 41);
    \u0275\u0275text(17, "Backlog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 24);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "span", 41);
    \u0275\u0275text(23, "Open quotes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 24);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "h4", 42);
    \u0275\u0275text(27, "Goals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 13);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "h4", 42);
    \u0275\u0275text(31, "Whitespace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ul", 43);
    \u0275\u0275repeaterCreate(33, ReportsComponent_Conditional_47_For_34_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h4", 42);
    \u0275\u0275text(36, "Next actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ul", 43);
    \u0275\u0275repeaterCreate(38, ReportsComponent_Conditional_47_For_39_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 44);
    \u0275\u0275text(41, "Open account");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const a_r21 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("QBR \u2014 ", a_r21.name, "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(14, 7, a_r21.ytdRevenue, "1.0-0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(20, 10, a_r21.backlogValue, "1.0-0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(a_r21.openQuotes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", a_r21.healthWhy, " Focus this quarter is holding the relationship strong and converting open pipeline in ", a_r21.industry, ".");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.qbrWhitespace());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.qbrNextActions());
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, a_r21.id));
  }
}
var ReportsComponent = class _ReportsComponent {
  pct(rows) {
    const max = Math.max(1, ...rows.map((r) => r.value));
    rows.forEach((r) => r.pct = Math.round(r.value / max * 100));
    return rows;
  }
  connectionClass(level) {
    switch (level) {
      case "strong":
        return "badge-success";
      case "developing":
        return "badge-warning";
      case "at-risk":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  setTab(tab) {
    this.router.navigate([], { queryParams: { tab, panel: null, account: null }, queryParamsHandling: "merge" });
  }
  openQbr(id) {
    this.router.navigate([], { queryParams: { panel: "qbr", account: id }, queryParamsHandling: "merge" });
  }
  closeQbr() {
    this.router.navigate([], { queryParams: { panel: null, account: null }, queryParamsHandling: "merge" });
  }
  constructor(seed, route, router) {
    this.seed = seed;
    this.route = route;
    this.router = router;
    this.tabs = ["revenue", "winrate", "backlog", "otd", "health", "commission"];
    this.activeTab = signal("revenue");
    this.qbrAccountId = signal(null);
    this.customerAccounts = computed(() => this.seed.accounts().filter((a) => a.type === "end-customer"));
    this.totalRevenue = computed(() => this.seed.accounts().reduce((s, a) => s + a.ytdRevenue, 0));
    this.totalBacklog = computed(() => this.seed.accounts().reduce((s, a) => s + a.backlogValue, 0));
    this.winRate = computed(() => {
      const decided = this.seed.quotes().filter((q) => q.status === "won" || q.status === "lost");
      if (decided.length === 0)
        return 0;
      return Math.round(decided.filter((q) => q.status === "won").length / decided.length * 100);
    });
    this.commissionDue = computed(() => this.seed.commissions().reduce((s, c) => s + (c.commissionDue - c.paid), 0));
    this.revenueBars = computed(() => this.pct(this.customerAccounts().map((a) => ({ label: a.name, value: a.ytdRevenue, pct: 0 })).sort((x, y) => y.value - x.value)));
    this.wonQuotes = computed(() => this.seed.quotes().filter((q) => q.status === "won"));
    this.lostQuotes = computed(() => this.seed.quotes().filter((q) => q.status === "lost"));
    this.winrateBars = computed(() => this.pct([
      { label: "Won", value: this.wonQuotes().length, pct: 0, badgeClass: "badge-success" },
      { label: "Lost", value: this.lostQuotes().length, pct: 0, badgeClass: "badge-danger" }
    ]));
    this.backlogBars = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const o of this.seed.orders()) {
        map.set(o.accountName, (map.get(o.accountName) ?? 0) + o.amount);
      }
      return this.pct(Array.from(map.entries()).map(([label, value]) => ({ label, value, pct: 0 })).sort((a, b) => b.value - a.value));
    });
    this.otdBars = computed(() => {
      const total = this.seed.orders().length;
      const slipping = this.seed.orders().filter((o) => o.slippage).length;
      return this.pct([
        { label: "On time", value: total - slipping, pct: 0, badgeClass: "badge-success" },
        { label: "Slipping", value: slipping, pct: 0, badgeClass: "badge-danger" }
      ]);
    });
    this.healthBars = computed(() => this.customerAccounts().map((a) => ({
      label: a.name,
      value: a.healthScore,
      pct: a.healthScore,
      badgeClass: this.connectionClass(a.connectionLevel)
    })).sort((x, y) => y.value - x.value));
    this.commissionDueTotal = computed(() => this.seed.commissions().reduce((s, c) => s + c.commissionDue, 0));
    this.commissionPaidTotal = computed(() => this.seed.commissions().reduce((s, c) => s + c.paid, 0));
    this.qbrAccount = computed(() => {
      const id = this.qbrAccountId();
      return id ? this.seed.accountById(id) : void 0;
    });
    this.qbrWhitespace = computed(() => {
      const a = this.qbrAccount();
      if (!a)
        return [];
      return [
        `Expand ${a.industry} footprint beyond current backlog of $${a.backlogValue.toLocaleString()}`,
        `Introduce adjacent breaker families not yet quoted this year`,
        a.singleThreadRisk ? `Build a second relationship to reduce single-thread risk` : `Deepen multi-contact coverage to protect continuity`
      ];
    });
    this.qbrNextActions = computed(() => {
      const a = this.qbrAccount();
      if (!a)
        return [];
      return [
        `Schedule executive QBR review with ${a.name.split("\u2014")[0].trim()}`,
        `Refresh forecast against ${a.openQuotes} open quote(s)`,
        a.connectionLevel === "at-risk" ? `Prioritize reconnect to move health above 70` : `Sustain cadence to hold ${a.healthScore} health`
      ];
    });
    this.route.queryParamMap.subscribe((q) => {
      const t = q.get("tab");
      this.activeTab.set(t && this.tabs.includes(t) ? t : "revenue");
      this.qbrAccountId.set(q.get("panel") === "qbr" ? q.get("account") : null);
    });
  }
  static {
    this.\u0275fac = function ReportsComponent_Factory(t) {
      return new (t || _ReportsComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 20, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "tabs"], [1, "tab", 3, "active"], [1, "card", "card-pad"], [1, "card", "card-pad", "qbr-section"], [1, "rep-title"], [1, "muted"], [1, "grid", "qbr-grid"], [1, "card", "card-pad", "qbr-card"], [1, "modal-scrim"], [1, "tab", 3, "click"], [1, "bar-row"], [1, "table-wrap", "rep-table"], [1, "table"], [1, "right"], [1, "bar-head"], [1, "bar-name"], [1, "mono"], [1, "bar-track"], [1, "bar-fill"], [1, "right", "mono"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], [1, "badge"], [1, "bar-fill", "fill-success"], [1, "qbr-card-head"], [1, "muted", "qbr-card-sub"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "modal-scrim", 3, "click"], [1, "modal", "card", 3, "click"], [1, "modal-head"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "modal-body"], [1, "qbr-stat-row"], [1, "decode-label"], [1, "qbr-h"], [1, "qbr-list"], [1, "btn", "btn-sm", 3, "routerLink"]], template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Reports & QBRs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Nexus Power CRM \xB7 revenue, win rate, backlog, on-time delivery, health and commission");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "YTD revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 5)(14, "div", 6);
        \u0275\u0275text(15, "Total backlog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 7);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 5)(20, "div", 6);
        \u0275\u0275text(21, "Win rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 7);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 5)(25, "div", 6);
        \u0275\u0275text(26, "Commission outstanding");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 7);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 8);
        \u0275\u0275repeaterCreate(31, ReportsComponent_For_32_Template, 2, 3, "button", 9, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, ReportsComponent_Conditional_33_Template, 16, 0, "div", 10)(34, ReportsComponent_Conditional_34_Template, 24, 0, "div", 10)(35, ReportsComponent_Conditional_35_Template, 16, 0, "div", 10)(36, ReportsComponent_Conditional_36_Template, 24, 0, "div", 10)(37, ReportsComponent_Conditional_37_Template, 20, 0, "div", 10)(38, ReportsComponent_Conditional_38_Template, 38, 12, "div", 10);
        \u0275\u0275elementStart(39, "div", 11)(40, "h2", 12);
        \u0275\u0275text(41, "Quarterly business reviews");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p", 13);
        \u0275\u0275text(43, "Auto-assemble a QBR for any customer account.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 14);
        \u0275\u0275repeaterCreate(45, ReportsComponent_For_46_Template, 10, 6, "div", 15, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(47, ReportsComponent_Conditional_47_Template, 42, 15, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_12_0;
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 11, ctx.totalRevenue(), "1.0-0"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 14, ctx.totalBacklog(), "1.0-0"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.winRate(), "%");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(29, 17, ctx.commissionDue(), "1.0-0"), "");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(33, ctx.activeTab() === "revenue" ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(34, ctx.activeTab() === "winrate" ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(35, ctx.activeTab() === "backlog" ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(36, ctx.activeTab() === "otd" ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(37, ctx.activeTab() === "health" ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(38, ctx.activeTab() === "commission" ? 38 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.customerAccounts());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(47, (tmp_12_0 = ctx.qbrAccount()) ? 47 : -1, tmp_12_0);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.rep-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.rep-table[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n.bar-row[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.bar-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--fs-sm);\n  margin-bottom: 5px;\n}\n.bar-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 12px;\n  background: var(--color-surface-2);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-brand-600);\n  border-radius: 999px;\n}\n.fill-success[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.fill-warning[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n}\n.fill-danger[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n}\n.qbr-section[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n.qbr-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  margin-top: var(--sp-4);\n}\n.qbr-card[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-2);\n  align-items: flex-start;\n}\n.qbr-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  gap: var(--sp-2);\n}\n.qbr-card-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.decode-label[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-weight: 600;\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.modal-scrim[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(11, 28, 44, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-4);\n  z-index: 50;\n}\n.modal[_ngcontent-%COMP%] {\n  max-width: 600px;\n  width: 100%;\n  box-shadow: var(--shadow-lg);\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-4) var(--sp-5);\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 0;\n  background: var(--color-surface);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n}\n.qbr-stat-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-5);\n  margin-bottom: var(--sp-4);\n  flex-wrap: wrap;\n}\n.qbr-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-base);\n  margin: var(--sp-4) 0 6px;\n}\n.qbr-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: var(--sp-5);\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n}\n.qbr-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/features/reports/reports.component.ts", lineNumber: 21 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=reports.component-S6VGNOC2.js.map
