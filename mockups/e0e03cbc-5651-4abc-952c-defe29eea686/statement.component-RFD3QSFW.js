import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  RouterLink
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5S2USPPB.js";

// src/app/pages/statement/statement.component.ts
var _forTrack0 = ($index, $item) => $item.entry.id;
var _c0 = (a0) => ["/receipt", a0];
function StatementComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading statement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function StatementComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function StatementComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2, "\u{1F9FE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No ledger activity yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6, "Charges and payments will appear here.");
    \u0275\u0275elementEnd()();
  }
}
function StatementComponent_Conditional_11_For_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275text(1, "Receipt");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, row_r2.entry.receiptId));
  }
}
function StatementComponent_Conditional_11_For_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "cents");
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2212", \u0275\u0275pipeBind1(1, 1, -row_r2.signedCents), " ");
  }
}
function StatementComponent_Conditional_11_For_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "cents");
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, row_r2.signedCents), " ");
  }
}
function StatementComponent_Conditional_11_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StatementComponent_Conditional_11_For_24_Conditional_6_Template, 2, 3, "a", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 16);
    \u0275\u0275template(11, StatementComponent_Conditional_11_For_24_Conditional_11_Template, 2, 3)(12, StatementComponent_Conditional_11_For_24_Conditional_12_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 21);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "cents");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.entry.postedOn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r2.entry.note);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, row_r2.entry.type === "payment" && row_r2.entry.receiptId ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.badgeClass(row_r2.entry.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabel(row_r2.entry.type), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("credit", row_r2.signedCents < 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, row_r2.signedCents < 0 ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, row_r2.runningCents));
  }
}
function StatementComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3, "Current balance");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 12);
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cents");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 14)(9, "table", 15)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 16);
    \u0275\u0275text(19, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 16);
    \u0275\u0275text(21, "Balance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, StatementComponent_Conditional_11_For_24_Template, 16, 12, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 1, ctx_r0.balance()));
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.rows());
  }
}
var StatementComponent = class _StatementComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal("");
    this.entries = signal([
      { id: "e1", leaseId: "l1", type: "charge", amountCents: 12e4, postedOn: "2026-05-01", period: "2026-05", note: "Rent \u2014 May 2026" },
      { id: "e2", leaseId: "l1", type: "payment", amountCents: 12e4, postedOn: "2026-05-03", period: null, note: "Payment received", receiptId: "r1" },
      { id: "e3", leaseId: "l1", type: "charge", amountCents: 12e4, postedOn: "2026-06-01", period: "2026-06", note: "Rent \u2014 June 2026" },
      { id: "e4", leaseId: "l1", type: "payment", amountCents: 12e4, postedOn: "2026-06-04", period: null, note: "Payment received", receiptId: "r2" },
      { id: "e5", leaseId: "l1", type: "charge", amountCents: 12e4, postedOn: "2026-07-01", period: "2026-07", note: "Rent \u2014 July 2026" }
    ]);
    this.rows = computed(() => {
      let running = 0;
      return this.entries().map((entry) => {
        const signedCents = entry.type === "payment" ? -entry.amountCents : entry.amountCents;
        running += signedCents;
        return { entry, signedCents, runningCents: running };
      });
    });
    this.balance = computed(() => {
      const r = this.rows();
      return r.length ? r[r.length - 1].runningCents : 0;
    });
  }
  badgeClass(type) {
    switch (type) {
      case "payment":
        return "badge-ok";
      case "lateFee":
        return "badge-danger";
      default:
        return "badge-info";
    }
  }
  typeLabel(type) {
    switch (type) {
      case "payment":
        return "Payment";
      case "lateFee":
        return "Late fee";
      default:
        return "Charge";
    }
  }
  static {
    this.\u0275fac = function StatementComponent_Factory(t) {
      return new (t || _StatementComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatementComponent, selectors: [["app-statement"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "page", "stack"], [1, "page-head"], ["routerLink", "/my-lease", 1, "back-link"], [1, "muted"], ["role", "status", "aria-live", "polite", 1, "state"], [1, "spinner"], [1, "state"], [1, "state-icon"], [1, "error"], [1, "card", "card-pad", "balance-summary"], [1, "row"], [1, "summary-label"], [1, "spacer"], [1, "summary-amount"], [1, "table-wrap", "card"], [1, "table"], [1, "num"], [1, "nowrap"], [1, "desc"], [1, "receipt-link", 3, "routerLink"], [1, "badge"], [1, "num", "strong"]], template: function StatementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back to My Lease");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Statement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "Unit 101 \xB7 Alex Rivera");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, StatementComponent_Conditional_8_Template, 4, 0, "div", 4)(9, StatementComponent_Conditional_9_Template, 5, 1)(10, StatementComponent_Conditional_10_Template, 7, 0)(11, StatementComponent_Conditional_11_Template, 25, 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(8, ctx.loading() ? 8 : ctx.error() ? 9 : ctx.rows().length === 0 ? 10 : 11);
      }
    }, dependencies: [CommonModule, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  margin-top: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-muted);\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-brand);\n  text-decoration: none;\n}\n.balance-summary[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-5);\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  font-weight: 700;\n  color: var(--color-muted);\n}\n.summary-amount[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 800;\n  color: var(--color-ink);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table[_ngcontent-%COMP%] {\n  min-width: 640px;\n}\n.table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: var(--color-muted);\n}\n.desc[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-ink);\n}\n.receipt-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: var(--space-1);\n  font-size: var(--fs-xs);\n  font-weight: 700;\n  color: var(--color-brand);\n}\n.num.strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.num.credit[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-weight: 700;\n}\n.badge[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n/*# sourceMappingURL=statement.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatementComponent, { className: "StatementComponent", filePath: "src/app/pages/statement/statement.component.ts", lineNumber: 22 });
})();
export {
  StatementComponent
};
//# sourceMappingURL=statement.component-RFD3QSFW.js.map
