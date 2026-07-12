import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  DecimalPipe,
  RouterLink,
  TitleCasePipe,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/quotes/quotes.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/quotes", a0];
function QuotesComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function QuotesComponent_For_33_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(s_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("chip-active", ctx_r2.filter() === s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, s_r2), " (", ctx_r2.countByStatus()[s_r2], ") ");
  }
}
function QuotesComponent_For_55_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", q_r4.validationIssues, " issue(s)");
  }
}
function QuotesComponent_For_55_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "clean");
    \u0275\u0275elementEnd();
  }
}
function QuotesComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 15)(1, "td", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 18);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, QuotesComponent_For_55_Conditional_15_Template, 2, 1, "span", 20)(16, QuotesComponent_For_55_Conditional_16_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 21);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, q_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r4.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r4.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statusBadge(q_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, q_r4.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(11, 12, q_r4.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r4.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(15, q_r4.validationIssues > 0 ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r4.reasonCode || "\u2014");
  }
}
function QuotesComponent_ForEmpty_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No quotes in this status.");
    \u0275\u0275elementEnd()();
  }
}
var QuotesComponent = class _QuotesComponent {
  setFilter(f) {
    this.filter.set(f);
  }
  statusBadge(status) {
    switch (status) {
      case "draft":
        return "badge-neutral";
      case "submitted":
        return "badge-info";
      case "won":
        return "badge-success";
      case "lost":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  constructor(seed) {
    this.seed = seed;
    this.statuses = ["draft", "submitted", "won", "lost"];
    this.filter = signal("all");
    this.visibleQuotes = computed(() => {
      const f = this.filter();
      const list = this.seed.quotes();
      return f === "all" ? list : list.filter((q) => q.status === f);
    });
    this.countByStatus = computed(() => {
      const counts = {};
      for (const s of this.statuses)
        counts[s] = 0;
      for (const q of this.seed.quotes())
        counts[q.status] = (counts[q.status] ?? 0) + 1;
      return counts;
    });
    this.winRate = computed(() => {
      const won = this.countByStatus()["won"] ?? 0;
      const lost = this.countByStatus()["lost"] ?? 0;
      const decided = won + lost;
      return decided === 0 ? 0 : Math.round(won / decided * 100);
    });
    this.totalQuoted = computed(() => this.seed.quotes().reduce((sum, q) => sum + q.amount, 0));
    this.openValue = computed(() => this.seed.quotes().filter((q) => q.status === "draft" || q.status === "submitted").reduce((sum, q) => sum + q.amount, 0));
    this.withIssues = computed(() => this.seed.quotes().filter((q) => q.validationIssues > 0).length);
  }
  static {
    this.\u0275fac = function QuotesComponent_Factory(t) {
      return new (t || _QuotesComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuotesComponent, selectors: [["app-quotes"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 13, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid", 2, "margin-bottom", "var(--sp-5)"], [1, "card", "card-pad"], [1, "muted", "stat-label"], [1, "stat-value"], [1, "row", "chips", 2, "margin-bottom", "var(--sp-4)"], [1, "chip", 3, "click"], [1, "chip", 3, "chip-active"], [1, "card"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "clickable", 3, "routerLink"], [1, "mono"], [1, "badge"], [1, "right", "mono"], [1, "nowrap"], [1, "badge", "badge-danger"], [1, "muted"], [1, "badge", "badge-success"], ["colspan", "7", 1, "muted"]], template: function QuotesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Quotes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Quoted opportunities with validation health and outcome tracking.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Win rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6);
        \u0275\u0275text(14, "Total quoted value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 5)(19, "div", 6);
        \u0275\u0275text(20, "Open value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 7);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 5)(25, "div", 6);
        \u0275\u0275text(26, "With validation issues");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 7);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 8)(30, "button", 9);
        \u0275\u0275listener("click", function QuotesComponent_Template_button_click_30_listener() {
          return ctx.setFilter("all");
        });
        \u0275\u0275text(31, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(32, QuotesComponent_For_33_Template, 3, 6, "button", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 11)(35, "div", 12)(36, "table", 13)(37, "thead")(38, "tr")(39, "th");
        \u0275\u0275text(40, "Quote #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th", 14);
        \u0275\u0275text(46, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Created");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Validation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Reason (lost)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "tbody");
        \u0275\u0275repeaterCreate(54, QuotesComponent_For_55_Template, 19, 17, "tr", 15, _forTrack0, false, QuotesComponent_ForEmpty_56_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("", ctx.winRate(), "%");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(17, 7, ctx.totalQuoted(), "1.0-0"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(23, 10, ctx.openValue(), "1.0-0"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.withIssues());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("chip-active", ctx.filter() === "all");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(22);
        \u0275\u0275repeater(ctx.visibleQuotes());
      }
    }, dependencies: [CommonModule, DecimalPipe, TitleCasePipe, RouterLink], styles: ["\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 600;\n  margin-top: var(--sp-1);\n}\n.chips[_ngcontent-%COMP%] {\n  gap: var(--sp-2);\n}\n.chip[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 6px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-surface);\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  cursor: pointer;\n}\n.chip-active[_ngcontent-%COMP%] {\n  background: var(--color-brand-600);\n  border-color: var(--color-brand-600);\n  color: var(--color-text-invert);\n}\ntr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=quotes.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuotesComponent, { className: "QuotesComponent", filePath: "src/app/features/quotes/quotes.component.ts", lineNumber: 16 });
})();
export {
  QuotesComponent
};
//# sourceMappingURL=quotes.component-UDLK2H2E.js.map
