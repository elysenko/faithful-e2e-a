import {
  SiteviewService
} from "./chunk-S3M52NQH.js";
import {
  ActivatedRoute
} from "./chunk-VMQX45X4.js";
import {
  CommonModule,
  NgClass,
  computed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VZ6O3Y2G.js";

// src/app/features/project/budget/budget.component.ts
var _forTrack0 = ($index, $item) => $item.y;
var _forTrack1 = ($index, $item) => $item.phaseId;
function BudgetComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "No budget lines recorded for this project yet.");
    \u0275\u0275elementEnd();
  }
}
function BudgetComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 16);
    \u0275\u0275elementStart(1, "text", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("x1", 64)("y1", g_r1.y)("x2", ctx_r1.chart().width - 20)("y2", g_r1.y);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", 58)("y", g_r1.y + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r1.label);
  }
}
function BudgetComponent_Conditional_12_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 18)(1, "circle", 19);
    \u0275\u0275elementStart(2, "text", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("cx", p_r3.planPt.x)("cy", p_r3.planPt.y);
    \u0275\u0275advance();
    \u0275\u0275classProp("over", p_r3.over);
    \u0275\u0275attribute("cx", p_r3.actPt.x)("cy", p_r3.actPt.y);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", p_r3.planPt.x)("y", ctx_r1.chart().height - 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("P", p_r3.order, "");
  }
}
function BudgetComponent_Conditional_12_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 1);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("over", p_r4.over);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Planned ", ctx_r1.usd(p_r4.planned), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Actual ", ctx_r1.usd(p_r4.actual), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r4.over ? "badge-danger" : "badge-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4.over ? "Over budget" : "On budget", " ");
  }
}
function BudgetComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275repeaterCreate(2, BudgetComponent_Conditional_12_For_3_Template, 3, 7, null, null, _forTrack0);
    \u0275\u0275element(4, "polygon", 8)(5, "polyline", 9)(6, "polyline", 10);
    \u0275\u0275repeaterCreate(7, BudgetComponent_Conditional_12_For_8_Template, 4, 9, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 11)(10, "span");
    \u0275\u0275element(11, "i", 12);
    \u0275\u0275text(12, " Cumulative planned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275element(14, "i", 13);
    \u0275\u0275text(15, " Cumulative actual");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 14)(17, "h3");
    \u0275\u0275text(18, "Per-phase detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul");
    \u0275\u0275repeaterCreate(20, BudgetComponent_Conditional_12_For_21_Template, 9, 7, "li", 15, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("viewBox", "0 0 " + ctx_r1.chart().width + " " + ctx_r1.chart().height);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.chart().gridY);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("points", ctx_r1.chart().actualArea);
    \u0275\u0275advance();
    \u0275\u0275attribute("points", ctx_r1.chart().plannedLine);
    \u0275\u0275advance();
    \u0275\u0275attribute("points", ctx_r1.chart().actualLine);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.chart().points);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.chart().points);
  }
}
var W = 680;
var H = 300;
var M = { top: 20, right: 20, bottom: 40, left: 64 };
var BudgetComponent = class _BudgetComponent {
  constructor(sv, route) {
    this.sv = sv;
    this.route = route;
    this.projectId = this.route.parent?.snapshot.paramMap.get("id") ?? "";
    this.chart = computed(() => {
      const phases = this.sv.phasesForProject(this.projectId);
      const plotW = W - M.left - M.right;
      const plotH = H - M.top - M.bottom;
      let cumP = 0;
      let cumA = 0;
      const raw = phases.map((ph) => {
        const lines = this.sv.budgetLines().filter((b) => b.phaseId === ph.id);
        const planned = lines.reduce((s, l) => s + l.plannedCents, 0);
        const actual = lines.reduce((s, l) => s + l.actualCents, 0);
        cumP += planned;
        cumA += actual;
        return { ph, planned, actual, cumPlanned: cumP, cumActual: cumA };
      });
      const maxY = Math.max(1, cumP, cumA);
      const n = Math.max(1, raw.length);
      const xFor = (i) => M.left + (n === 1 ? plotW / 2 : i / (n - 1) * plotW);
      const yFor = (v) => M.top + plotH - v / maxY * plotH;
      const points = raw.map((r, i) => ({
        phaseId: r.ph.id,
        name: r.ph.name,
        order: r.ph.order,
        planned: r.planned,
        actual: r.actual,
        cumPlanned: r.cumPlanned,
        cumActual: r.cumActual,
        over: r.actual > r.planned,
        planPt: { x: xFor(i), y: yFor(r.cumPlanned) },
        actPt: { x: xFor(i), y: yFor(r.cumActual) }
      }));
      const plannedLine = points.map((p) => `${p.planPt.x},${p.planPt.y}`).join(" ");
      const actualLine = points.map((p) => `${p.actPt.x},${p.actPt.y}`).join(" ");
      const baseY = M.top + plotH;
      const actualArea = points.length ? `${points[0].actPt.x},${baseY} ` + points.map((p) => `${p.actPt.x},${p.actPt.y}`).join(" ") + ` ${points[points.length - 1].actPt.x},${baseY}` : "";
      const gridY = [0, 0.25, 0.5, 0.75, 1].map((f) => ({
        y: yFor(maxY * f),
        label: this.usdShort(maxY * f)
      }));
      return {
        width: W,
        height: H,
        points,
        plannedLine,
        actualLine,
        actualArea,
        gridY,
        totalPlanned: cumP,
        totalActual: cumA
      };
    });
  }
  usd(cents) {
    return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  }
  usdShort(cents) {
    const d = cents / 100;
    if (d >= 1e6)
      return `$${(d / 1e6).toFixed(1)}M`;
    if (d >= 1e3)
      return `$${Math.round(d / 1e3)}k`;
    return `$${Math.round(d)}`;
  }
  static {
    this.\u0275fac = function BudgetComponent_Factory(t) {
      return new (t || _BudgetComponent)(\u0275\u0275directiveInject(SiteviewService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BudgetComponent, selectors: [["app-budget"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [[1, "bud-head"], [1, "muted"], [1, "totals"], [1, "tot", "planned"], [1, "tot", "actual"], [1, "state", "card"], [1, "chart-wrap", "card", "scroll-y"], ["role", "img", "aria-label", "Budget burn-down chart"], [1, "area"], [1, "line", "planned"], [1, "line", "actual"], [1, "legend"], [1, "sw", "planned"], [1, "sw", "actual"], [1, "phase-table", "card"], [3, "over"], [1, "grid"], [1, "y-label"], ["r", "3.5", 1, "dot", "planned"], ["r", "4", 1, "dot", "actual"], [1, "x-label"], [1, "p-name"], [1, "p-actual"], [1, "badge", 3, "ngClass"]], template: function BudgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2");
        \u0275\u0275text(3, "Budget Burn-down");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Cumulative planned vs actual spend across phases");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "span", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 4);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, BudgetComponent_Conditional_11_Template, 2, 0, "div", 5)(12, BudgetComponent_Conditional_12_Template, 22, 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("Planned ", ctx.usd(ctx.chart().totalPlanned), "");
        \u0275\u0275advance();
        \u0275\u0275classProp("over", ctx.chart().totalActual > ctx.chart().totalPlanned);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Actual ", ctx.usd(ctx.chart().totalActual), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.chart().points.length === 0 ? 11 : 12);
      }
    }, dependencies: [CommonModule, NgClass], styles: ["\n\n.bud-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-4);\n}\n.bud-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.totals[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.tot.planned[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.tot.actual[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.tot.actual.over[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  overflow-x: auto;\n  margin-bottom: var(--space-4);\n}\nsvg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  min-width: 520px;\n  font-family: var(--font-sans);\n}\n.grid[_ngcontent-%COMP%] {\n  stroke: var(--color-border);\n  stroke-width: 1;\n}\n.y-label[_ngcontent-%COMP%], .x-label[_ngcontent-%COMP%] {\n  fill: var(--color-text-muted);\n  font-size: 10px;\n}\n.x-label[_ngcontent-%COMP%] {\n  text-anchor: middle;\n  font-weight: 600;\n}\n.area[_ngcontent-%COMP%] {\n  fill: var(--color-accent-soft);\n  opacity: 0.6;\n}\n.line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 2.5;\n}\n.line.planned[_ngcontent-%COMP%] {\n  stroke: var(--color-planned);\n  stroke-dasharray: 5 4;\n}\n.line.actual[_ngcontent-%COMP%] {\n  stroke: var(--color-actual);\n}\n.dot.planned[_ngcontent-%COMP%] {\n  fill: var(--color-planned);\n}\n.dot.actual[_ngcontent-%COMP%] {\n  fill: var(--color-actual);\n}\n.dot.actual.over[_ngcontent-%COMP%] {\n  fill: var(--color-danger);\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  margin-top: var(--space-3);\n  font-size: var(--fs-sm);\n  color: var(--color-text-muted);\n}\n.legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.sw[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 3px;\n  border-radius: 2px;\n  display: inline-block;\n}\n.sw.planned[_ngcontent-%COMP%] {\n  background: var(--color-planned);\n}\n.sw.actual[_ngcontent-%COMP%] {\n  background: var(--color-actual);\n}\n.phase-table[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.phase-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--space-3);\n}\n.phase-table[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.phase-table[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5fr 1fr 1fr auto;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.phase-table[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.p-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.p-actual[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.phase-table[_ngcontent-%COMP%]   li.over[_ngcontent-%COMP%]   .p-actual[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .phase-table[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: var(--space-2);\n  }\n  .p-name[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n}\n/*# sourceMappingURL=budget.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BudgetComponent, { className: "BudgetComponent", filePath: "src/app/features/project/budget/budget.component.ts", lineNumber: 42 });
})();
export {
  BudgetComponent
};
//# sourceMappingURL=budget.component-7UOXN7XL.js.map
