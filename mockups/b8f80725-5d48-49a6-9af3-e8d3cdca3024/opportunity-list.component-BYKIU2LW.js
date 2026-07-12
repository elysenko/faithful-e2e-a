import {
  STAGE_META
} from "./chunk-PDA44FSW.js";
import {
  toSignal
} from "./chunk-PAUVK2ZQ.js";
import {
  ActivatedRoute,
  CommonModule,
  CurrencyPipe,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S3A6C3F5.js";

// src/app/features/opportunities/opportunity-list.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/opportunities", a0];
function OpportunityListComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.label);
  }
}
function OpportunityListComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 2);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, o_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r2.stageColor(o_r2.stage));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.stageLabel(o_r2.stage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 10, o_r2.amount, "USD", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", o_r2.probability, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.closeDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.owner);
  }
}
function OpportunityListComponent_ForEmpty_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 13)(1, "td", 17)(2, "div", 18);
    \u0275\u0275text(3, "No opportunities match your filters.");
    \u0275\u0275elementEnd()()();
  }
}
var OpportunityListComponent = class _OpportunityListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.stageMeta = STAGE_META;
    this.params = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
    this.stage = computed(() => this.params().get("stage") ?? "");
    this.search = computed(() => this.params().get("q") ?? "");
    this.opportunities = signal([
      { id: "o1", name: "Acme \u2014 Platform Renewal", accountId: "a1", accountName: "Acme Corporation", stage: "NEGOTIATION", amount: 12e4, closeDate: "2026-08-15", probability: 75, owner: "Demo Admin" },
      { id: "o2", name: "Globex Data Migration", accountId: "a2", accountName: "Globex Industries", stage: "PROPOSAL", amount: 84e3, closeDate: "2026-07-30", probability: 60, owner: "Priya Nair" },
      { id: "o3", name: "Initech Security Suite", accountId: "a3", accountName: "Initech", stage: "QUALIFICATION", amount: 45e3, closeDate: "2026-09-05", probability: 40, owner: "Marco Diaz" },
      { id: "o4", name: "Umbrella Analytics Rollout", accountId: "a4", accountName: "Umbrella Health", stage: "PROSPECTING", amount: 21e4, closeDate: "2026-10-12", probability: 20, owner: "Demo Admin" },
      { id: "o5", name: "Soylent Cloud Expansion", accountId: "a5", accountName: "Soylent Foods", stage: "CLOSED_WON", amount: 156e3, closeDate: "2026-06-28", probability: 100, owner: "Priya Nair" },
      { id: "o6", name: "Acme Field Service Add-on", accountId: "a1", accountName: "Acme Corporation", stage: "PROPOSAL", amount: 38e3, closeDate: "2026-09-20", probability: 55, owner: "Priya Nair" },
      { id: "o7", name: "Stark Energy Grid Platform", accountId: "a6", accountName: "Stark Energy", stage: "NEEDS_ANALYSIS", amount: 34e4, closeDate: "2026-11-01", probability: 45, owner: "Marco Diaz" },
      { id: "o8", name: "Wayne Media CDP", accountId: "a7", accountName: "Wayne Media", stage: "QUALIFICATION", amount: 72e3, closeDate: "2026-08-22", probability: 35, owner: "Demo Admin" },
      { id: "o9", name: "Hooli Cloud Migration", accountId: "a8", accountName: "Hooli Cloud", stage: "NEGOTIATION", amount: 265e3, closeDate: "2026-07-18", probability: 80, owner: "Priya Nair" },
      { id: "o10", name: "Pied Piper Compression Pilot", accountId: "a10", accountName: "Pied Piper", stage: "PROSPECTING", amount: 28e3, closeDate: "2026-10-30", probability: 15, owner: "Marco Diaz" },
      { id: "o11", name: "Vandelay Import Portal", accountId: "a9", accountName: "Vandelay Imports", stage: "CLOSED_LOST", amount: 51e3, closeDate: "2026-06-10", probability: 0, owner: "Demo Admin" },
      { id: "o12", name: "Umbrella Telehealth Suite", accountId: "a4", accountName: "Umbrella Health", stage: "PROPOSAL", amount: 19e4, closeDate: "2026-09-14", probability: 65, owner: "Priya Nair" }
    ]);
    this.filtered = computed(() => {
      const q = this.search().toLowerCase().trim();
      const st = this.stage();
      return this.opportunities().filter((o) => {
        const mq = !q || o.name.toLowerCase().includes(q) || o.accountName.toLowerCase().includes(q);
        const ms = !st || o.stage === st;
        return mq && ms;
      });
    });
  }
  stageLabel(key) {
    return this.stageMeta.find((s) => s.key === key)?.label ?? key;
  }
  stageColor(key) {
    return this.stageMeta.find((s) => s.key === key)?.color ?? "var(--color-text-muted)";
  }
  onSearch(v) {
    this.router.navigate([], { queryParams: { q: v || null }, queryParamsHandling: "merge" });
  }
  onStage(v) {
    this.router.navigate([], { queryParams: { stage: v || null }, queryParamsHandling: "merge" });
  }
  static {
    this.\u0275fac = function OpportunityListComponent_Factory(t) {
      return new (t || _OpportunityListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpportunityListComponent, selectors: [["app-opportunity-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 5, consts: [[1, "page"], [1, "page-head"], [1, "muted"], [1, "toolbar"], ["routerLink", "/opportunities/board", 1, "btn"], ["routerLink", "/opportunities/new", 1, "btn", "btn-primary"], ["type", "search", "placeholder", "Search deal or account\u2026", 1, "input", "search", 3, "input", "value"], [1, "select", 3, "change", "value"], ["value", ""], [3, "value"], [1, "card", "table-wrap"], [1, "data"], [3, "routerLink"], [1, "no-hover"], [1, "badge"], [1, "mono"], [1, "mono", "muted"], ["colspan", "7"], [1, "empty-state"]], template: function OpportunityListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Opportunities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "a", 4);
        \u0275\u0275text(9, "Board view");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 5);
        \u0275\u0275text(11, "+ New Opportunity");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 3)(13, "input", 6);
        \u0275\u0275listener("input", function OpportunityListComponent_Template_input_input_13_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "select", 7);
        \u0275\u0275listener("change", function OpportunityListComponent_Template_select_change_14_listener($event) {
          return ctx.onStage($event.target.value);
        });
        \u0275\u0275elementStart(15, "option", 8);
        \u0275\u0275text(16, "All stages");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(17, OpportunityListComponent_For_18_Template, 2, 2, "option", 9, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 10)(20, "table", 11)(21, "thead")(22, "tr")(23, "th");
        \u0275\u0275text(24, "Opportunity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th");
        \u0275\u0275text(28, "Stage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th");
        \u0275\u0275text(30, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32, "Prob.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Close date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Owner");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "tbody");
        \u0275\u0275repeaterCreate(38, OpportunityListComponent_For_39_Template, 18, 17, "tr", 12, _forTrack1, false, OpportunityListComponent_ForEmpty_40_Template, 4, 0, "tr", 13);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.filtered().length, " of ", ctx.opportunities().length, " deals");
        \u0275\u0275advance(7);
        \u0275\u0275property("value", ctx.search());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.stage());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.stageMeta);
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.filtered());
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.forecast[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: 700;\n  color: var(--color-brand-dark);\n  margin-top: var(--space-2);\n}\n/*# sourceMappingURL=opportunities.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpportunityListComponent, { className: "OpportunityListComponent", filePath: "src/app/features/opportunities/opportunity-list.component.ts", lineNumber: 14 });
})();
export {
  OpportunityListComponent
};
//# sourceMappingURL=opportunity-list.component-BYKIU2LW.js.map
