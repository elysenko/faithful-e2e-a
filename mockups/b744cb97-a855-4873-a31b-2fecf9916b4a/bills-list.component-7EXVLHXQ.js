import {
  AuthService
} from "./chunk-PNFJAIEQ.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
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
  ɵɵtextInterpolate1
} from "./chunk-UQ66P35U.js";

// src/app/pages/bills-list/bills-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/bills", a0];
function BillsListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1, "\uFF0B New bill");
    \u0275\u0275elementEnd();
  }
}
function BillsListComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function BillsListComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("value", s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2);
  }
}
function BillsListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function BillsListComponent_Conditional_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearFilters());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function BillsListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Loading bills\u2026");
    \u0275\u0275elementEnd();
  }
}
function BillsListComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.error());
  }
}
function BillsListComponent_Conditional_41_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function BillsListComponent_Conditional_41_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clearFilters());
    });
    \u0275\u0275text(1, "Reset filters");
    \u0275\u0275elementEnd();
  }
}
function BillsListComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p");
    \u0275\u0275text(2, "No bills match your filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BillsListComponent_Conditional_41_Conditional_3_Template, 2, 0, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, ctx_r3.hasFilters() ? 3 : -1);
  }
}
function BillsListComponent_Conditional_42_For_2_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6);
  }
}
function BillsListComponent_Conditional_42_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 31)(11, "span", 1);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 32);
    \u0275\u0275repeaterCreate(14, BillsListComponent_Conditional_42_For_2_For_15_Template, 2, 1, "span", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r7 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, b_r7.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r7.number);
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + b_r7.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r7.summary);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Session ", b_r7.session, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(b_r7.sectors);
  }
}
function BillsListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, BillsListComponent_Conditional_42_For_2_Template, 16, 10, "a", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.filtered());
  }
}
var BillsListComponent = class _BillsListComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.isEditor = this.auth.isEditor;
    this.statuses = ["introduced", "committee", "passed", "signed", "vetoed"];
    this.session = signal("");
    this.status = signal("");
    this.sector = signal("");
    this.q = signal("");
    this.loading = signal(false);
    this.error = signal("");
    this.bills = signal([
      {
        id: "b1",
        number: "HB0042",
        title: "Renewable Energy Tax Incentives",
        summary: "Establishes tax credits for solar and wind installations across Utah counties.",
        status: "committee",
        session: 2025,
        sectors: ["energy", "environment"]
      },
      {
        id: "b2",
        number: "SB0110",
        title: "Rural Broadband Expansion Act",
        summary: "Funds last-mile fiber deployment to underserved rural districts.",
        status: "passed",
        session: 2025,
        sectors: ["telecom", "infrastructure"]
      },
      {
        id: "b3",
        number: "HB0203",
        title: "Water Rights Modernization",
        summary: "Updates the framework for agricultural and municipal water allocation.",
        status: "introduced",
        session: 2025,
        sectors: ["agriculture", "environment"]
      },
      {
        id: "b4",
        number: "SB0075",
        title: "Grid Resilience & Storage Standards",
        summary: "Mandates battery storage capacity for utility-scale energy providers.",
        status: "signed",
        session: 2024,
        sectors: ["energy"]
      },
      {
        id: "b5",
        number: "HB0301",
        title: "Prescription Drug Price Transparency",
        summary: "Requires disclosure of pricing for pharmacy benefit managers.",
        status: "vetoed",
        session: 2024,
        sectors: ["healthcare"]
      },
      {
        id: "b6",
        number: "SB0158",
        title: "Affordable Housing Density Bonus",
        summary: "Grants density bonuses to developments reserving affordable units.",
        status: "committee",
        session: 2025,
        sectors: ["housing", "real-estate"]
      }
    ]);
    this.sectors = computed(() => {
      const set = /* @__PURE__ */ new Set();
      this.bills().forEach((b) => b.sectors.forEach((s) => set.add(s)));
      return Array.from(set).sort();
    });
    this.filtered = computed(() => {
      const session = this.session().trim();
      const status = this.status();
      const sector = this.sector().trim().toLowerCase();
      const q = this.q().trim().toLowerCase();
      return this.bills().filter((b) => {
        if (session && String(b.session) !== session)
          return false;
        if (status && b.status !== status)
          return false;
        if (sector && !b.sectors.includes(sector))
          return false;
        if (q && !`${b.number} ${b.title}`.toLowerCase().includes(q))
          return false;
        return true;
      });
    });
    this.hasFilters = computed(() => !!(this.session() || this.status() || this.sector() || this.q()));
  }
  ngOnInit() {
    const p = this.route.snapshot.queryParamMap;
    this.session.set(p.get("session") ?? "");
    this.status.set(p.get("status") ?? "");
    this.sector.set(p.get("sector") ?? "");
    this.q.set(p.get("q") ?? "");
  }
  syncParams() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        session: this.session() || null,
        status: this.status() || null,
        sector: this.sector() || null,
        q: this.q() || null
      },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  setSession(v) {
    this.session.set(v);
    this.syncParams();
  }
  setStatus(v) {
    this.status.set(v);
    this.syncParams();
  }
  setSector(v) {
    this.sector.set(v);
    this.syncParams();
  }
  setQuery(v) {
    this.q.set(v);
    this.syncParams();
  }
  clearFilters() {
    this.session.set("");
    this.status.set("");
    this.sector.set("");
    this.q.set("");
    this.syncParams();
  }
  static {
    this.\u0275fac = function BillsListComponent_Factory(t) {
      return new (t || _BillsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillsListComponent, selectors: [["app-bills-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 7, consts: [[1, "page-head"], [1, "muted"], ["routerLink", "/bills/new", 1, "btn", "btn-primary"], [1, "card", "filters"], [1, "field"], ["for", "q"], ["id", "q", "type", "text", "placeholder", "Number or title\u2026", 3, "input", "value"], ["for", "session"], ["id", "session", 3, "change", "value"], ["value", ""], ["value", "2025"], ["value", "2024"], ["for", "status"], ["id", "status", 3, "change", "value"], [3, "value"], ["for", "sector"], ["id", "sector", 3, "change", "value"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", "clear-btn"], [1, "state", "muted"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", "clear-btn", 3, "click"], [1, "state", "error"], [1, "card", "state", "empty"], ["type", "button", 1, "btn", "btn-outline", "btn-sm"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "bill-grid"], [1, "card", "bill-card", 3, "routerLink"], [1, "bill-top"], [1, "bill-number"], [1, "badge", "status-badge"], [1, "bill-title"], [1, "bill-summary"], [1, "bill-foot"], [1, "sectors"], [1, "sector-tag"]], template: function BillsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Bills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Utah legislation tracked by session, status, and sector.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, BillsListComponent_Conditional_6_Template, 2, 0, "a", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "label", 5);
        \u0275\u0275text(10, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 6);
        \u0275\u0275listener("input", function BillsListComponent_Template_input_input_11_listener($event) {
          return ctx.setQuery($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 4)(13, "label", 7);
        \u0275\u0275text(14, "Session");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "select", 8);
        \u0275\u0275listener("change", function BillsListComponent_Template_select_change_15_listener($event) {
          return ctx.setSession($event.target.value);
        });
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "All sessions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 10);
        \u0275\u0275text(19, "2025");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 11);
        \u0275\u0275text(21, "2024");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 4)(23, "label", 12);
        \u0275\u0275text(24, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "select", 13);
        \u0275\u0275listener("change", function BillsListComponent_Template_select_change_25_listener($event) {
          return ctx.setStatus($event.target.value);
        });
        \u0275\u0275elementStart(26, "option", 9);
        \u0275\u0275text(27, "Any status");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(28, BillsListComponent_For_29_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 4)(31, "label", 15);
        \u0275\u0275text(32, "Sector");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "select", 16);
        \u0275\u0275listener("change", function BillsListComponent_Template_select_change_33_listener($event) {
          return ctx.setSector($event.target.value);
        });
        \u0275\u0275elementStart(34, "option", 9);
        \u0275\u0275text(35, "All sectors");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(36, BillsListComponent_For_37_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, BillsListComponent_Conditional_38_Template, 2, 0, "button", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, BillsListComponent_Conditional_39_Template, 2, 0, "p", 18)(40, BillsListComponent_Conditional_40_Template, 2, 1)(41, BillsListComponent_Conditional_41_Template, 4, 1)(42, BillsListComponent_Conditional_42_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.isEditor() ? 6 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.q());
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.session());
        \u0275\u0275advance(10);
        \u0275\u0275property("value", ctx.status());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.sector());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.sectors());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(38, ctx.hasFilters() ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(39, ctx.loading() ? 39 : ctx.error() ? 40 : ctx.filtered().length === 0 ? 41 : 42);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: var(--fs-xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-sm);\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: var(--space-3);\n  align-items: end;\n  padding: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.filters[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  align-self: end;\n  min-height: 44px;\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  text-align: center;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n}\n.bill-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--space-4);\n}\n.bill-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: var(--space-4);\n  color: var(--color-ink);\n  transition:\n    box-shadow .15s,\n    transform .05s,\n    border-color .15s;\n}\n.bill-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n  text-decoration: none;\n}\n.bill-card[_ngcontent-%COMP%]:active {\n  transform: scale(.995);\n}\n.bill-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.bill-number[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-weight: 700;\n  font-size: var(--fs-sm);\n}\n.bill-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-md);\n  line-height: 1.3;\n}\n.bill-summary[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.bill-foot[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n  font-size: var(--fs-xs);\n}\n.sectors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-1);\n  justify-content: flex-end;\n}\n.sector-tag[_ngcontent-%COMP%] {\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-weight: 600;\n}\n.status-badge[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.status-introduced[_ngcontent-%COMP%] {\n  background: var(--color-info-bg);\n  color: var(--color-info);\n}\n.status-committee[_ngcontent-%COMP%] {\n  background: var(--color-warning-bg);\n  color: var(--color-warning);\n}\n.status-passed[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.status-signed[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.status-vetoed[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n}\n@media (max-width: 768px) {\n  .page-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .page-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=bills-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillsListComponent, { className: "BillsListComponent", filePath: "src/app/pages/bills-list/bills-list.component.ts", lineNumber: 14 });
})();
export {
  BillsListComponent
};
//# sourceMappingURL=bills-list.component-7EXVLHXQ.js.map
