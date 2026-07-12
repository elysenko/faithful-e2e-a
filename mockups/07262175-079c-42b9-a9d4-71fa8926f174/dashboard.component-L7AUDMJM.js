import {
  ActivatedRoute,
  RouterLink
} from "./chunk-7UZQWTM6.js";
import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RDDARQHK.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.phaseId;
var _c0 = (a0) => ["/projects", a0, "schedule"];
var _c1 = (a0) => ["/projects", a0, "siteplan"];
var _c2 = (a0) => ["/projects", a0, "budget"];
function DashboardComponent_Conditional_0_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29)(7, "div", 30);
    \u0275\u0275element(8, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275element(10, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 33)(12, "span", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("over", p_r1.overBudget);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.phaseName);
    \u0275\u0275advance();
    \u0275\u0275classMap(p_r1.overBudget ? "badge-danger" : "badge-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r1.overBudget ? "Over" : "OK", " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.barPct(p_r1.plannedCents), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.barPct(p_r1.actualCents), "%");
    \u0275\u0275classProp("over", p_r1.overBudget);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Planned ", ctx_r1.dollars(p_r1.plannedCents), "");
    \u0275\u0275advance();
    \u0275\u0275classProp("over-text", p_r1.overBudget);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Actual ", ctx_r1.dollars(p_r1.actualCents), "");
  }
}
function DashboardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Schedule health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 4);
    \u0275\u0275element(6, "circle", 5)(7, "circle", 6);
    \u0275\u0275elementStart(8, "text", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "text", 8);
    \u0275\u0275text(11, "on track");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "p", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 10);
    \u0275\u0275text(15, "View schedule \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11)(17, "h3", 2);
    \u0275\u0275text(18, "Open hazards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 12)(20, "span", 13);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 14);
    \u0275\u0275text(23, "\u26A0\uFE0F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p", 15);
    \u0275\u0275text(25, "Active hazard markers on the site plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 10);
    \u0275\u0275text(27, "Open site plan \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 11)(29, "h3", 2);
    \u0275\u0275text(30, "Budget to date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 16)(32, "div")(33, "span", 17);
    \u0275\u0275text(34, "Planned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 18);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "span", 17);
    \u0275\u0275text(39, "Actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 18);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "span", 19);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "a", 10);
    \u0275\u0275text(45, "View burn-down \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 20)(47, "h3", 2);
    \u0275\u0275text(48, "Budget variance by phase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 21);
    \u0275\u0275repeaterCreate(50, DashboardComponent_Conditional_0_For_51_Template, 16, 16, "div", 22, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 23)(53, "span");
    \u0275\u0275element(54, "i", 24);
    \u0275\u0275text(55, " Planned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275element(57, "i", 25);
    \u0275\u0275text(58, " Actual");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275attribute("r", ctx_r1.R);
    \u0275\u0275advance();
    \u0275\u0275attribute("r", ctx_r1.R)("stroke", ctx_r1.healthTone() === "ok" ? "var(--color-success)" : ctx_r1.healthTone() === "warn" ? "var(--color-warning)" : "var(--color-danger)")("stroke-dasharray", ctx_r1.C)("stroke-dashoffset", ctx_r1.dashOffset());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.healthPct(), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", d_r3.scheduleHealth.onTrack, " of ", d_r3.scheduleHealth.total, " tasks on schedule ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c0, ctx_r1.projectId()));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("danger", d_r3.openHazards > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r3.openHazards);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c1, ctx_r1.projectId()));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.dollars(ctx_r1.totalPlanned()));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("over", ctx_r1.overallOver());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.dollars(ctx_r1.totalActual()));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.overallOver() ? "badge-danger" : "badge-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.overallOver() ? "Over budget" : "Within budget", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c2, ctx_r1.projectId()));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(d_r3.phases);
  }
}
function DashboardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "div", 35);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard\u2026");
    \u0275\u0275elementEnd()();
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(route) {
    this.route = route;
    this.projectId = signal("");
    this.dashboard = signal({
      scheduleHealth: { onTrack: 5, total: 8 },
      phases: [
        { phaseId: "ph1", phaseName: "Site Prep & Foundation", plannedCents: 42e5, actualCents: 398e4, overBudget: false },
        { phaseId: "ph2", phaseName: "Structure & Envelope", plannedCents: 86e5, actualCents: 935e4, overBudget: true },
        { phaseId: "ph3", phaseName: "Interior & Fit-out", plannedCents: 51e5, actualCents: 24e5, overBudget: false }
      ],
      openHazards: 2
    });
    this.R = 52;
    this.C = 2 * Math.PI * 52;
    this.healthPct = computed(() => {
      const d = this.dashboard();
      if (!d || d.scheduleHealth.total === 0)
        return 0;
      return Math.round(d.scheduleHealth.onTrack / d.scheduleHealth.total * 100);
    });
    this.dashOffset = computed(() => this.C * (1 - this.healthPct() / 100));
    this.healthTone = computed(() => {
      const p = this.healthPct();
      return p >= 75 ? "ok" : p >= 50 ? "warn" : "danger";
    });
    this.totalPlanned = computed(() => (this.dashboard()?.phases ?? []).reduce((s, p) => s + p.plannedCents, 0));
    this.totalActual = computed(() => (this.dashboard()?.phases ?? []).reduce((s, p) => s + p.actualCents, 0));
    this.overallOver = computed(() => this.totalActual() > this.totalPlanned());
  }
  ngOnInit() {
    this.route.parent?.paramMap.subscribe((p) => this.projectId.set(p.get("id") ?? ""));
  }
  dollars(cents) {
    return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  }
  /** Bar width % for a phase's actual vs the largest planned value on screen. */
  barPct(cents) {
    const max = Math.max(this.totalPlanned(), this.totalActual(), 1);
    const phaseMax = Math.max(...(this.dashboard()?.phases ?? []).map((p) => Math.max(p.plannedCents, p.actualCents)), 1);
    return Math.round(cents / phaseMax * 100);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "dash-grid"], [1, "card", "card-pad", "gauge-card"], [1, "card-title"], [1, "gauge"], ["viewBox", "0 0 130 130", "width", "130", "height", "130", "role", "img", "aria-label", "Schedule health gauge"], ["cx", "65", "cy", "65", "fill", "none", "stroke", "var(--color-surface-inset)", "stroke-width", "12"], ["cx", "65", "cy", "65", "fill", "none", "stroke-width", "12", "stroke-linecap", "round", "transform", "rotate(-90 65 65)"], ["x", "65", "y", "61", "text-anchor", "middle", 1, "gauge-pct"], ["x", "65", "y", "80", "text-anchor", "middle", 1, "gauge-sub"], [1, "gauge-caption", "muted"], [1, "card-link", 3, "routerLink"], [1, "card", "card-pad", "stat-card"], [1, "stat-big"], [1, "stat-num"], ["aria-hidden", "true", 1, "stat-icon"], [1, "muted"], [1, "budget-summary"], [1, "bs-label", "muted"], [1, "bs-val"], [1, "badge"], [1, "card", "card-pad", "variance"], [1, "variance-list"], [1, "variance-row", 3, "over"], [1, "legend"], [1, "sw", "planned"], [1, "sw", "actual"], [1, "variance-row"], [1, "vr-head"], [1, "vr-name"], [1, "vr-bars"], [1, "vr-track"], [1, "vr-planned"], [1, "vr-actual"], [1, "vr-figures"], [1, "state"], [1, "spinner"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DashboardComponent_Conditional_0_Template, 59, 27)(1, DashboardComponent_Conditional_1_Template, 4, 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(0, (tmp_0_0 = ctx.dashboard()) ? 0 : 1, tmp_0_0);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.dash-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--space-3);\n}\n.card-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: var(--space-3);\n  font-size: var(--fs-sm);\n  font-weight: 700;\n}\n.gauge-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.gauge[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.gauge-pct[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  fill: var(--color-ink);\n}\n.gauge-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  fill: var(--color-muted);\n}\n.gauge-caption[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 0;\n  font-size: var(--fs-sm);\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-card.danger[_ngcontent-%COMP%] {\n  border-color: var(--color-danger);\n}\n.stat-big[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-1);\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.budget-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-5);\n  margin-bottom: var(--space-3);\n}\n.bs-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-xs);\n}\n.bs-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 800;\n}\n.bs-val.over[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.variance-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.variance-row[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  border-radius: var(--radius);\n  background: var(--color-surface-alt);\n}\n.variance-row.over[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n}\n.vr-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-2);\n}\n.vr-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--fs-sm);\n}\n.vr-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: var(--space-2);\n}\n.vr-track[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: var(--radius-pill);\n  background: var(--color-surface-inset);\n  overflow: hidden;\n}\n.vr-planned[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: var(--radius-pill);\n  background: var(--color-brand);\n}\n.vr-actual[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: var(--radius-pill);\n  background: var(--color-accent);\n}\n.vr-actual.over[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n}\n.vr-figures[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--fs-xs);\n}\n.over-text[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-weight: 700;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  margin-top: var(--space-4);\n  font-size: var(--fs-xs);\n  color: var(--color-muted);\n}\n.legend[_ngcontent-%COMP%]   .sw[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  margin-right: 4px;\n  vertical-align: -1px;\n}\n.legend[_ngcontent-%COMP%]   .sw.planned[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n}\n.legend[_ngcontent-%COMP%]   .sw.actual[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 21 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-L7AUDMJM.js.map
