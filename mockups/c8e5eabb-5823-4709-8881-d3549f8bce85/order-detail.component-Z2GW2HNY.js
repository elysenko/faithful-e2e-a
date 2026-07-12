import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
  RouterLink,
  computed,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/orders/order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.ref;
var _forTrack1 = ($index, $item) => $item.date;
function OrderDetailComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Slippage detected: scheduled ship date is ", o_r1.slippageDays, " days past requested delivery date.");
  }
}
function OrderDetailComponent_Conditional_3_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.rdd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.ssd);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.lineBadge(l_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r2.status);
  }
}
function OrderDetailComponent_Conditional_3_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", e_r4.date, " \xB7 ", e_r4.actor, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.note);
  }
}
function OrderDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, OrderDetailComponent_Conditional_3_Conditional_13_Template, 3, 1, "div", 9);
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12);
    \u0275\u0275text(17, "Requested delivery (RDD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 11)(21, "div", 12);
    \u0275\u0275text(22, "Scheduled ship (SSD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 11)(26, "div", 12);
    \u0275\u0275text(27, "Lead time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 14);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 15)(31, "button", 16);
    \u0275\u0275text(32, "Log expedite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 17);
    \u0275\u0275text(34, "Request new SSD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 18);
    \u0275\u0275text(36, "Open RMA for this order");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 19)(38, "h2", 20);
    \u0275\u0275text(39, "Per-line delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 21)(41, "div", 22)(42, "table", 23)(43, "thead")(44, "tr")(45, "th");
    \u0275\u0275text(46, "Line");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
    \u0275\u0275text(50, "RDD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "SSD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "tbody");
    \u0275\u0275repeaterCreate(56, OrderDetailComponent_Conditional_3_For_57_Template, 12, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(58, "div", 19)(59, "h2", 20);
    \u0275\u0275text(60, "Expedite log");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 24);
    \u0275\u0275repeaterCreate(62, OrderDetailComponent_Conditional_3_For_63_Template, 5, 3, "div", 25, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r1 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r1.poNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r1.accountName);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.statusBadge(o_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 12, o_r1.amount, "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(13, o_r1.slippage ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(o_r1.rdd);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("stat-alert", o_r1.slippage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.ssd);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", o_r1.leadTimeWeeks, " wk");
    \u0275\u0275advance(27);
    \u0275\u0275repeater(ctx_r2.lines);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.expediteLog);
  }
}
function OrderDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div")(2, "strong");
    \u0275\u0275text(3, "Order not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5, "No order matches this id. ");
    \u0275\u0275elementStart(6, "a", 30);
    \u0275\u0275text(7, "Return to orders");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ".");
    \u0275\u0275elementEnd()()();
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
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
  lineBadge(status) {
    switch (status) {
      case "shipped":
        return "badge-success";
      case "slipping":
        return "badge-danger";
      case "on-track":
        return "badge-success";
      default:
        return "badge-neutral";
    }
  }
  constructor(seed) {
    this.seed = seed;
    this.id = inject(ActivatedRoute).snapshot.paramMap.get("id") ?? "";
    this.order = computed(() => this.seed.orderById(this.id));
    this.lines = [
      { ref: "Line 001", description: "Emax 2 E6.2 4000A ACB", rdd: "2026-08-30", ssd: "2026-09-18", status: "slipping" },
      { ref: "Line 002", description: "Tmax XT6 800A feeders (x8)", rdd: "2026-08-30", ssd: "2026-08-28", status: "on-track" },
      { ref: "Line 003", description: "SafeGear MV section", rdd: "2026-08-15", ssd: "2026-08-14", status: "shipped" }
    ];
    this.expediteLog = [
      { date: "2026-07-06", actor: "You", note: "Escalated to ABB scheduler \u2014 requested slot recovery on E6.2 line." },
      { date: "2026-07-02", actor: "ABB Ops", note: "Acknowledged slippage; new SSD candidate under review." }
    ];
  }
  static {
    this.\u0275fac = function OrderDetailComponent_Factory(t) {
      return new (t || _OrderDetailComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page"], ["routerLink", "/orders", 1, "btn", "btn-ghost", "btn-sm", "back"], [1, "page-header"], [1, "ord-header"], [1, "page-title"], [1, "head-meta"], [1, "muted"], [1, "badge"], [1, "ord-amount", "mono"], [1, "alert", "alert-danger", "big-alert"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value", "sm", "mono"], [1, "stat-value", "sm"], [1, "actions-bar"], [1, "btn", "btn-primary", "btn-sm"], [1, "btn", "btn-sm"], ["routerLink", "/warranty", 1, "btn", "btn-sm"], [1, "detail-section"], [1, "panel-title"], [1, "card"], [1, "table-wrap"], [1, "table"], [1, "card", "card-pad"], [1, "log-entry"], [1, "mono"], [1, "log-meta", "mono"], [1, "log-note"], [1, "alert", "alert-danger"], ["routerLink", "/orders"]], template: function OrderDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrderDetailComponent_Conditional_3_Template, 64, 15)(4, OrderDetailComponent_Conditional_4_Template, 9, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, (tmp_0_0 = ctx.order()) ? 3 : 4, tmp_0_0);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: var(--sp-3);\n}\n.ord-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--sp-4);\n  flex-wrap: wrap;\n}\n.head-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n  margin-top: 6px;\n}\n.ord-amount[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.big-alert[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-5);\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.stat-value.sm[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.stat-value.stat-alert[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n  margin: var(--sp-5) 0;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.log-entry[_ngcontent-%COMP%] {\n  padding: var(--sp-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.log-entry[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.log-meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-text-muted);\n  margin-bottom: 2px;\n}\n.log-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n/*# sourceMappingURL=order-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src/app/features/orders/order-detail.component.ts", lineNumber: 28 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=order-detail.component-Z2GW2HNY.js.map
