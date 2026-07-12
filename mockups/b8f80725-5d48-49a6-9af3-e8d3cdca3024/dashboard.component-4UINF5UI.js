import {
  STAGE_META
} from "./chunk-PDA44FSW.js";
import {
  CommonModule,
  CurrencyPipe,
  RouterLink,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-S3A6C3F5.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/opportunities", a0];
function DashboardComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6, "View all \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275styleProp("--accent", c_r1.accent);
    \u0275\u0275property("routerLink", c_r1.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.value);
  }
}
function DashboardComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 21);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, o_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r2.stageColor(o_r2.stage));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.stageLabel(o_r2.stage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 8, o_r2.amount, "USD", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r2.closeDate);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.stageMeta = STAGE_META;
    this.stats = signal({
      accounts: 12,
      contacts: 34,
      opportunities: 21,
      leads: 15,
      tasks: 18,
      openPipeline: 1284e3,
      wonThisQuarter: 486e3
    });
    this.recentOpportunities = signal([
      { id: "o1", name: "Acme \u2014 Platform Renewal", accountId: "a1", accountName: "Acme Corporation", stage: "NEGOTIATION", amount: 12e4, closeDate: "2026-08-15", probability: 75, owner: "Demo Admin" },
      { id: "o2", name: "Globex Data Migration", accountId: "a2", accountName: "Globex Industries", stage: "PROPOSAL", amount: 84e3, closeDate: "2026-07-30", probability: 60, owner: "Priya Nair" },
      { id: "o3", name: "Initech Security Suite", accountId: "a3", accountName: "Initech", stage: "QUALIFICATION", amount: 45e3, closeDate: "2026-09-05", probability: 40, owner: "Marco Diaz" },
      { id: "o4", name: "Umbrella Analytics Rollout", accountId: "a4", accountName: "Umbrella Health", stage: "PROSPECTING", amount: 21e4, closeDate: "2026-10-12", probability: 20, owner: "Demo Admin" },
      { id: "o5", name: "Soylent Cloud Expansion", accountId: "a5", accountName: "Soylent Foods", stage: "CLOSED_WON", amount: 156e3, closeDate: "2026-06-28", probability: 100, owner: "Priya Nair" }
    ]);
  }
  get cards() {
    const s = this.stats();
    return [
      { key: "accounts", label: "Accounts", value: s.accounts, link: "/accounts", accent: "var(--stage-qualification)" },
      { key: "contacts", label: "Contacts", value: s.contacts, link: "/contacts", accent: "var(--stage-needs)" },
      { key: "opportunities", label: "Opportunities", value: s.opportunities, link: "/opportunities", accent: "var(--stage-proposal)" },
      { key: "leads", label: "Leads", value: s.leads, link: "/leads", accent: "var(--stage-won)" },
      { key: "tasks", label: "Open Tasks", value: s.tasks, link: "/tasks", accent: "var(--stage-negotiation)" }
    ];
  }
  stageLabel(key) {
    return this.stageMeta.find((s) => s.key === key)?.label ?? key;
  }
  stageColor(key) {
    return this.stageMeta.find((s) => s.key === key)?.color ?? "var(--color-text-muted)";
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 12, consts: [[1, "page"], [1, "page-head"], [1, "muted"], ["routerLink", "/opportunities/board", 1, "btn", "btn-primary"], [1, "stat-grid"], [1, "stat", "card", 3, "routerLink", "--accent"], [1, "metric-grid"], [1, "card", "card-pad", "metric"], [1, "stat-label"], [1, "metric-value", "mono"], [1, "metric-value", "mono", "won"], [1, "card", "recent"], [1, "recent-head"], ["routerLink", "/opportunities"], [1, "table-wrap"], [1, "data"], [3, "routerLink"], [1, "stat", "card", 3, "routerLink"], [1, "stat-value", "mono"], [1, "stat-link"], [1, "badge"], [1, "mono"], [1, "muted", "mono"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Your team's sales activity at a glance.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3);
        \u0275\u0275text(8, "Open Pipeline Board");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "section", 4);
        \u0275\u0275repeaterCreate(10, DashboardComponent_For_11_Template, 7, 5, "a", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "section", 6)(13, "div", 7)(14, "span", 8);
        \u0275\u0275text(15, "Open Pipeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 9);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 2);
        \u0275\u0275text(20, "Across all active opportunities");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 7)(22, "span", 8);
        \u0275\u0275text(23, "Won This Quarter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 10);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 2);
        \u0275\u0275text(28, "Closed / won revenue");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "section", 11)(30, "div", 12)(31, "h2");
        \u0275\u0275text(32, "Recent Opportunities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "a", 13);
        \u0275\u0275text(34, "See all");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 14)(36, "table", 15)(37, "thead")(38, "tr")(39, "th");
        \u0275\u0275text(40, "Opportunity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "Stage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Close date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "tbody");
        \u0275\u0275repeaterCreate(50, DashboardComponent_For_51_Template, 13, 15, "tr", 16, _forTrack1);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.cards);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(18, 2, ctx.stats().openPipeline, "USD", "symbol", "1.0-0"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(26, 7, ctx.stats().wonThisQuarter, "USD", "symbol", "1.0-0"));
        \u0275\u0275advance(25);
        \u0275\u0275repeater(ctx.recentOpportunities());
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], styles: ["\n\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: var(--space-4);\n}\n.stat[_ngcontent-%COMP%] {\n  --accent: var(--color-brand);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  padding: var(--space-4);\n  border-left: 4px solid var(--accent);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.12s ease, transform 0.06s ease;\n}\n.stat[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  text-decoration: none;\n  transform: translateY(-2px);\n}\n.stat[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: 700;\n}\n.stat-link[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--color-brand);\n  font-weight: 600;\n}\n.metric-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: var(--space-4);\n}\n.metric[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: 700;\n  color: var(--color-brand-dark);\n}\n.metric-value.won[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.recent[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-4) var(--space-2);\n}\n.recent-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-2);\n}\n.recent-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 22 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-4UINF5UI.js.map
