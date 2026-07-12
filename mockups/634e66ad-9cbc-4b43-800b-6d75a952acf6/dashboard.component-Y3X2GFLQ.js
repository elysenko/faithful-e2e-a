import {
  SiteviewService
} from "./chunk-S3M52NQH.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-VMQX45X4.js";
import {
  CommonModule,
  NgClass,
  computed,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-VZ6O3Y2G.js";

// src/app/features/project/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.phaseId;
var _c0 = (a0, a1, a2) => ({ "badge-success": a0, "badge-warning": a1, "badge-danger": a2 });
var _c1 = (a0) => ["/projects", a0, "schedule"];
var _c2 = (a0) => ["/projects", a0, "siteplan"];
var _c3 = (a0) => ["/projects", a0, "budget"];
function DashboardComponent_Conditional_0_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 11);
    \u0275\u0275element(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("over", v_r1.over);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", v_r1.phaseName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Planned ", ctx_r1.usd(v_r1.plannedCents), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Actual ", ctx_r1.usd(v_r1.actualCents), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", v_r1.over ? "badge-danger" : "badge-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", v_r1.over ? "+" : "", "", ctx_r1.variancePct(v_r1.plannedCents, v_r1.actualCents), "% ");
  }
}
function DashboardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3, "Schedule Health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 7);
    \u0275\u0275text(12, "View schedule \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 1)(14, "span", 2);
    \u0275\u0275text(15, "Open Hazards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 3)(17, "span", 4);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 5);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p", 6);
    \u0275\u0275text(22, "Hazard markers on the site plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 7);
    \u0275\u0275text(24, "View site plan \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 1)(26, "span", 2);
    \u0275\u0275text(27, "Budget Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 3)(29, "span", 4);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 5);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "p", 6);
    \u0275\u0275text(34, "Phases exceeding planned spend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 7);
    \u0275\u0275text(36, "View budget \u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 8)(38, "h2");
    \u0275\u0275text(39, "Per-phase budget variance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ul", 9);
    \u0275\u0275repeaterCreate(41, DashboardComponent_Conditional_0_For_42_Template, 11, 8, "li", 10, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.healthClass(d_r3.scheduleHealthPct));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r3.scheduleHealthPct, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(21, _c0, d_r3.scheduleHealthPct >= 75, d_r3.scheduleHealthPct >= 50 && d_r3.scheduleHealthPct < 75, d_r3.scheduleHealthPct < 50));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r3.scheduleHealthPct >= 75 ? "On track" : d_r3.scheduleHealthPct >= 50 ? "Watch" : "Behind", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", d_r3.onTrackCount, " on track \xB7 ", d_r3.behindCount, " behind of ", d_r3.totalTasks, " tasks");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c1, ctx_r1.pid));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(d_r3.openHazards > 0 ? "bad" : "good");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.openHazards);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", d_r3.openHazards > 0 ? "badge-danger" : "badge-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r3.openHazards > 0 ? "Action needed" : "Clear", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c2, ctx_r1.pid));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.countOver(d_r3) > 0 ? "bad" : "good");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.countOver(d_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.countOver(d_r3) > 0 ? "badge-danger" : "badge-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.countOver(d_r3) > 0 ? "Over on " + ctx_r1.countOver(d_r3) + " phase" + (ctx_r1.countOver(d_r3) === 1 ? "" : "s") : "Within budget", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c3, ctx_r1.pid));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(d_r3.phaseVariances);
  }
}
function DashboardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Loading dashboard\u2026");
    \u0275\u0275elementEnd();
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(sv, route) {
    this.sv = sv;
    this.route = route;
    this.projectId = this.route.parent?.snapshot.paramMap.get("id") ?? "";
    this.dash = computed(() => this.sv.getDashboard(this.projectId));
    this.pid = this.projectId;
  }
  healthClass(pct) {
    if (pct >= 75)
      return "good";
    if (pct >= 50)
      return "warn";
    return "bad";
  }
  usd(cents) {
    return (cents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    });
  }
  variancePct(planned, actual) {
    if (!planned)
      return 0;
    return Math.round((actual - planned) / planned * 100);
  }
  countOver(d) {
    return d.phaseVariances.filter((v) => v.over).length;
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(SiteviewService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "cards"], [1, "stat", "card"], [1, "stat-label"], [1, "health"], [1, "health-num"], [1, "badge", 3, "ngClass"], [1, "muted", "stat-sub"], [1, "stat-link", 3, "routerLink"], [1, "variance", "card"], [1, "variance-list"], [3, "over"], [1, "v-name"], [1, "v-dot"], [1, "v-figures"], [1, "muted"], [1, "v-actual"], [1, "state", "card"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DashboardComponent_Conditional_0_Template, 43, 31)(1, DashboardComponent_Conditional_1_Template, 2, 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(0, (tmp_0_0 = ctx.dash()) ? 0 : 1, tmp_0_0);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.stat[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 700;\n}\n.health[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.health-num[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n}\n.health.good[_ngcontent-%COMP%]   .health-num[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.health.warn[_ngcontent-%COMP%]   .health-num[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.health.bad[_ngcontent-%COMP%]   .health-num[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.stat-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.stat-link[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  margin-top: auto;\n}\n.variance[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.variance[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  margin-bottom: var(--space-4);\n}\n.variance-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.variance-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.variance-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.v-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-weight: 600;\n}\n.v-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  background: var(--color-success);\n}\n.variance-list[_ngcontent-%COMP%]   li.over[_ngcontent-%COMP%]   .v-dot[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n}\n.v-figures[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.v-actual[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.variance-list[_ngcontent-%COMP%]   li.over[_ngcontent-%COMP%]   .v-actual[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .v-figures[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/project/dashboard/dashboard.component.ts", lineNumber: 13 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-Y3X2GFLQ.js.map
