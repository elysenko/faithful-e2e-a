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
  ɵɵtextInterpolate2
} from "./chunk-UQ66P35U.js";

// src/app/pages/legislators-list/legislators-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/legislators", a0];
function LegislatorsListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1, "\uFF0B New legislator");
    \u0275\u0275elementEnd();
  }
}
function LegislatorsListComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("value", p_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r1);
  }
}
function LegislatorsListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LegislatorsListComponent_Conditional_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function LegislatorsListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "Loading legislators\u2026");
    \u0275\u0275elementEnd();
  }
}
function LegislatorsListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function LegislatorsListComponent_Conditional_33_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function LegislatorsListComponent_Conditional_33_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(1, "Reset filters");
    \u0275\u0275elementEnd();
  }
}
function LegislatorsListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p");
    \u0275\u0275text(2, "No legislators match your filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LegislatorsListComponent_Conditional_33_Conditional_3_Template, 2, 0, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, ctx_r2.hasFilters() ? 3 : -1);
  }
}
function LegislatorsListComponent_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "h3", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 27)(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, l_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.name.slice(4, 6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("chamber-" + l_r5.chamber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r5.chamber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", l_r5.party, " \xB7 District ", l_r5.district, " ");
  }
}
function LegislatorsListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, LegislatorsListComponent_Conditional_34_For_2_Template, 10, 10, "a", 23, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filtered());
  }
}
var LegislatorsListComponent = class _LegislatorsListComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.isEditor = this.auth.isEditor;
    this.chamber = signal("");
    this.party = signal("");
    this.q = signal("");
    this.loading = signal(false);
    this.error = signal("");
    this.legislators = signal([
      { id: "l1", name: "Sen. Marcia Holloway", chamber: "senate", district: "S-12", party: "Republican" },
      { id: "l2", name: "Rep. David Cho", chamber: "house", district: "H-40", party: "Democrat" },
      { id: "l3", name: "Rep. Ana Whitfield", chamber: "house", district: "H-08", party: "Republican" },
      { id: "l4", name: "Sen. Grace Tillman", chamber: "senate", district: "S-03", party: "Democrat" },
      { id: "l5", name: "Rep. Owen Barnett", chamber: "house", district: "H-22", party: "Republican" },
      { id: "l6", name: "Sen. Priya Raman", chamber: "senate", district: "S-19", party: "Democrat" },
      { id: "l7", name: "Rep. Lucas Ferrer", chamber: "house", district: "H-51", party: "Independent" },
      { id: "l8", name: "Sen. Karl Osborne", chamber: "senate", district: "S-07", party: "Republican" }
    ]);
    this.parties = computed(() => Array.from(new Set(this.legislators().map((l) => l.party))).sort());
    this.filtered = computed(() => {
      const chamber = this.chamber();
      const party = this.party();
      const q = this.q().trim().toLowerCase();
      return this.legislators().filter((l) => {
        if (chamber && l.chamber !== chamber)
          return false;
        if (party && l.party !== party)
          return false;
        if (q && !`${l.name} ${l.district}`.toLowerCase().includes(q))
          return false;
        return true;
      });
    });
    this.hasFilters = computed(() => !!(this.chamber() || this.party() || this.q()));
  }
  ngOnInit() {
    const p = this.route.snapshot.queryParamMap;
    this.chamber.set(p.get("chamber") ?? "");
    this.party.set(p.get("party") ?? "");
    this.q.set(p.get("q") ?? "");
  }
  syncParams() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        chamber: this.chamber() || null,
        party: this.party() || null,
        q: this.q() || null
      },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  setChamber(v) {
    this.chamber.set(v);
    this.syncParams();
  }
  setParty(v) {
    this.party.set(v);
    this.syncParams();
  }
  setQuery(v) {
    this.q.set(v);
    this.syncParams();
  }
  clearFilters() {
    this.chamber.set("");
    this.party.set("");
    this.q.set("");
    this.syncParams();
  }
  static {
    this.\u0275fac = function LegislatorsListComponent_Factory(t) {
      return new (t || _LegislatorsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LegislatorsListComponent, selectors: [["app-legislators-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 6, consts: [[1, "page-head"], [1, "muted"], ["routerLink", "/legislators/new", 1, "btn", "btn-primary"], [1, "card", "filters"], [1, "field"], ["for", "q"], ["id", "q", "type", "text", "placeholder", "Name or district\u2026", 3, "input", "value"], ["for", "chamber"], ["id", "chamber", 3, "change", "value"], ["value", ""], ["value", "house"], ["value", "senate"], ["for", "party"], ["id", "party", 3, "change", "value"], [3, "value"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", "clear-btn"], [1, "state", "muted"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", "clear-btn", 3, "click"], [1, "state", "error"], [1, "card", "state", "empty"], ["type", "button", 1, "btn", "btn-outline", "btn-sm"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "leg-grid"], [1, "card", "leg-card", 3, "routerLink"], [1, "leg-avatar"], [1, "leg-body"], [1, "leg-name"], [1, "leg-meta", "muted"], [1, "badge", "chamber-badge"]], template: function LegislatorsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Legislators");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Utah House and Senate members, their votes, and disclosed interests.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, LegislatorsListComponent_Conditional_6_Template, 2, 0, "a", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "label", 5);
        \u0275\u0275text(10, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 6);
        \u0275\u0275listener("input", function LegislatorsListComponent_Template_input_input_11_listener($event) {
          return ctx.setQuery($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 4)(13, "label", 7);
        \u0275\u0275text(14, "Chamber");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "select", 8);
        \u0275\u0275listener("change", function LegislatorsListComponent_Template_select_change_15_listener($event) {
          return ctx.setChamber($event.target.value);
        });
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "Both chambers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 10);
        \u0275\u0275text(19, "House");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 11);
        \u0275\u0275text(21, "Senate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 4)(23, "label", 12);
        \u0275\u0275text(24, "Party");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "select", 13);
        \u0275\u0275listener("change", function LegislatorsListComponent_Template_select_change_25_listener($event) {
          return ctx.setParty($event.target.value);
        });
        \u0275\u0275elementStart(26, "option", 9);
        \u0275\u0275text(27, "All parties");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(28, LegislatorsListComponent_For_29_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, LegislatorsListComponent_Conditional_30_Template, 2, 0, "button", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, LegislatorsListComponent_Conditional_31_Template, 2, 0, "p", 16)(32, LegislatorsListComponent_Conditional_32_Template, 2, 1)(33, LegislatorsListComponent_Conditional_33_Template, 4, 1)(34, LegislatorsListComponent_Conditional_34_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.isEditor() ? 6 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.q());
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.chamber());
        \u0275\u0275advance(10);
        \u0275\u0275property("value", ctx.party());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.parties());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(30, ctx.hasFilters() ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(31, ctx.loading() ? 31 : ctx.error() ? 32 : ctx.filtered().length === 0 ? 33 : 34);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: var(--fs-xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-sm);\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: var(--space-3);\n  align-items: end;\n  padding: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.filters[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  text-align: center;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n}\n.leg-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--space-4);\n}\n.leg-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-4);\n  color: var(--color-ink);\n  transition: box-shadow .15s, border-color .15s;\n}\n.leg-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n  text-decoration: none;\n}\n.leg-avatar[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  flex-shrink: 0;\n  border-radius: var(--radius-pill);\n  background: var(--color-steel);\n  color: #fff;\n  font-weight: 700;\n}\n.leg-body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.leg-name[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: var(--fs-md);\n}\n.leg-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  margin: 0;\n  font-size: var(--fs-sm);\n}\n.chamber-badge[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.chamber-house[_ngcontent-%COMP%] {\n  background: var(--color-info-bg);\n  color: var(--color-info);\n}\n.chamber-senate[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n@media (max-width: 768px) {\n  .page-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .page-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=legislators-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LegislatorsListComponent, { className: "LegislatorsListComponent", filePath: "src/app/pages/legislators-list/legislators-list.component.ts", lineNumber: 14 });
})();
export {
  LegislatorsListComponent
};
//# sourceMappingURL=legislators-list.component-XQDL5RSR.js.map
