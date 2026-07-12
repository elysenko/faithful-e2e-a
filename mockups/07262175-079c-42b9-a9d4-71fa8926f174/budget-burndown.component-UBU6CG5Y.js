import {
  AuthService
} from "./chunk-YAQBASOF.js";
import "./chunk-PG5KNRNN.js";
import {
  ActivatedRoute
} from "./chunk-7UZQWTM6.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RDDARQHK.js";

// src/app/features/budget/budget-burndown.component.ts
var _forTrack0 = ($index, $item) => $item.y;
var _forTrack1 = ($index, $item) => $item.d;
var _forTrack2 = ($index, $item) => $item.x;
var _forTrack3 = ($index, $item) => $item.id;
function BudgetBurndownComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 22);
    \u0275\u0275elementStart(1, "text", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("x1", ctx_r1.padL)("y1", g_r1.y)("x2", ctx_r1.vw - ctx_r1.padR)("y2", g_r1.y);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", ctx_r1.padL - 8)("y", g_r1.y + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r1.label);
  }
}
function BudgetBurndownComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 12);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275attribute("d", s_r3.d)("stroke", s_r3.over ? "var(--color-danger)" : "var(--color-accent)");
  }
}
function BudgetBurndownComponent_For_29_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 24);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const p_r5 = ctx_r3.$implicit;
    const $index_r6 = ctx_r3.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("cx", p_r5.x)("cy", p_r5.y)("fill", ctx_r1.rows()[$index_r6 - 1].over ? "var(--color-danger)" : "var(--color-accent)");
  }
}
function BudgetBurndownComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BudgetBurndownComponent_For_29_Conditional_0_Template, 1, 3, ":svg:circle", 24);
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    \u0275\u0275conditional(0, $index_r6 > 0 ? 0 : -1);
  }
}
function BudgetBurndownComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const xl_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("over", xl_r7.over);
    \u0275\u0275attribute("x", xl_r7.x)("y", ctx_r1.vh - ctx_r1.padB + 22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(xl_r7.label);
  }
}
function BudgetBurndownComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("over-row", r_r8.over);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r8.phaseName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dollars(r_r8.plannedCents));
    \u0275\u0275advance();
    \u0275\u0275classProp("over-text", r_r8.over);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.dollars(r_r8.actualCents));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(r_r8.over ? "badge-danger" : "badge-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", r_r8.over ? "+" : "", "", ctx_r1.dollars(r_r8.actualCents - r_r8.plannedCents), " ");
  }
}
var BudgetBurndownComponent = class _BudgetBurndownComponent {
  get innerW() {
    return this.vw - this.padL - this.padR;
  }
  get innerH() {
    return this.vh - this.padT - this.padB;
  }
  cumulative(pick) {
    const out = [0];
    let sum = 0;
    for (const l of this.lines()) {
      sum += pick(l);
      out.push(sum);
    }
    return out;
  }
  xFor(i) {
    const n = this.lines().length;
    return this.padL + (n === 0 ? 0 : i / n * this.innerW);
  }
  yFor(v) {
    return this.padT + this.innerH * (1 - v / this.maxY());
  }
  constructor(auth, route) {
    this.auth = auth;
    this.route = route;
    this.projectId = signal("");
    this.lines = signal([
      { id: "b1", phaseId: "ph1", phaseName: "Site Prep & Foundation", plannedCents: 42e5, actualCents: 398e4 },
      { id: "b2", phaseId: "ph2", phaseName: "Structure & Envelope", plannedCents: 86e5, actualCents: 935e4 },
      { id: "b3", phaseId: "ph3", phaseName: "Interior & Fit-out", plannedCents: 51e5, actualCents: 24e5 }
    ]);
    this.vw = 660;
    this.vh = 320;
    this.padL = 64;
    this.padR = 20;
    this.padT = 20;
    this.padB = 54;
    this.rows = computed(() => this.lines().map((l) => __spreadProps(__spreadValues({}, l), { over: l.actualCents > l.plannedCents })));
    this.maxY = computed(() => {
      const p = this.cumulative((l) => l.plannedCents);
      const a = this.cumulative((l) => l.actualCents);
      return Math.max(...p, ...a, 1);
    });
    this.plannedPts = computed(() => this.cumulative((l) => l.plannedCents).map((v, i) => ({ x: this.xFor(i), y: this.yFor(v) })));
    this.actualPts = computed(() => this.cumulative((l) => l.actualCents).map((v, i) => ({ x: this.xFor(i), y: this.yFor(v) })));
    this.plannedArea = computed(() => {
      const pts = this.plannedPts();
      if (pts.length === 0)
        return "";
      const baseY = this.yFor(0);
      const line = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
      return `${line} L ${pts[pts.length - 1].x} ${baseY} L ${pts[0].x} ${baseY} Z`;
    });
    this.plannedLine = computed(() => this.plannedPts().map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" "));
    this.actualSegs = computed(() => {
      const pts = this.actualPts();
      const rows = this.rows();
      const segs = [];
      for (let i = 1; i < pts.length; i++) {
        segs.push({ d: `M ${pts[i - 1].x} ${pts[i - 1].y} L ${pts[i].x} ${pts[i].y}`, over: rows[i - 1]?.over ?? false });
      }
      return segs;
    });
    this.gridLines = computed(() => {
      const out = [];
      const steps = 4;
      for (let i = 0; i <= steps; i++) {
        const v = this.maxY() / steps * i;
        out.push({ y: this.yFor(v), label: this.short(v) });
      }
      return out;
    });
    this.xLabels = computed(() => this.rows().map((l, i) => ({ x: this.xFor(i + 1), label: this.abbrev(l.phaseName ?? ""), over: l.over })));
    this.totalPlanned = computed(() => this.lines().reduce((s, l) => s + l.plannedCents, 0));
    this.totalActual = computed(() => this.lines().reduce((s, l) => s + l.actualCents, 0));
    this.overBudget = computed(() => this.totalActual() > this.totalPlanned());
    this.actualEndY = computed(() => {
      const pts = this.actualPts();
      return pts[pts.length - 1]?.y ?? 0;
    });
    this.actualEndX = computed(() => {
      const pts = this.actualPts();
      return pts[pts.length - 1]?.x ?? 0;
    });
  }
  ngOnInit() {
    this.route.parent?.paramMap.subscribe((p) => this.projectId.set(p.get("id") ?? ""));
  }
  dollars(cents) {
    return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  }
  short(cents) {
    const d = cents / 100;
    return d >= 1e3 ? `$${Math.round(d / 1e3)}k` : `$${Math.round(d)}`;
  }
  abbrev(name) {
    return name.length > 16 ? name.slice(0, 15) + "\u2026" : name;
  }
  static {
    this.\u0275fac = function BudgetBurndownComponent_Factory(t) {
      return new (t || _BudgetBurndownComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BudgetBurndownComponent, selectors: [["app-budget-burndown"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 15, consts: [[1, "budget-wrap"], [1, "bud-head"], [1, "bud-title"], [1, "hint"], [1, "bud-totals"], [1, "bt-label", "muted"], [1, "bt-val"], [1, "badge"], [1, "card", "card-pad", "chart-card"], ["width", "100%", "preserveAspectRatio", "xMidYMid meet", "role", "img", "aria-label", "Budget burn-down chart"], ["fill", "var(--color-brand-light)", "opacity", "0.7"], ["fill", "none", "stroke", "var(--color-brand)", "stroke-width", "2.5", "stroke-linejoin", "round", "stroke-dasharray", "6 3"], ["fill", "none", "stroke-width", "3", "stroke-linejoin", "round", "stroke-linecap", "round"], ["text-anchor", "middle", 1, "bud-xlabel", 3, "over"], ["stroke", "var(--color-border-strong)", "stroke-width", "1"], [1, "legend"], [1, "sw", "planned"], [1, "sw", "actual"], [1, "sw", "over"], [1, "card", "phase-table-card"], [1, "table"], [3, "over-row"], ["stroke", "var(--color-border)", "stroke-width", "1"], ["text-anchor", "end", 1, "bud-axis"], ["r", "4", "stroke", "var(--color-surface)", "stroke-width", "1.5"], ["text-anchor", "middle", 1, "bud-xlabel"]], template: function BudgetBurndownComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h3", 2);
        \u0275\u0275text(4, "Budget burn-down");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Cumulative planned vs. actual spend across phases.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div")(9, "span", 5);
        \u0275\u0275text(10, "Planned");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 6);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div")(14, "span", 5);
        \u0275\u0275text(15, "Actual");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 6);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "span", 7);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 9);
        \u0275\u0275repeaterCreate(22, BudgetBurndownComponent_For_23_Template, 3, 7, null, null, _forTrack0);
        \u0275\u0275element(24, "path", 10)(25, "path", 11);
        \u0275\u0275repeaterCreate(26, BudgetBurndownComponent_For_27_Template, 1, 2, ":svg:path", 12, _forTrack1);
        \u0275\u0275repeaterCreate(28, BudgetBurndownComponent_For_29_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275repeaterCreate(30, BudgetBurndownComponent_For_31_Template, 2, 5, ":svg:text", 13, _forTrack2);
        \u0275\u0275element(32, "line", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "div", 15)(34, "span");
        \u0275\u0275element(35, "i", 16);
        \u0275\u0275text(36, " Planned (cumulative)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275element(38, "i", 17);
        \u0275\u0275text(39, " Actual (cumulative)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span");
        \u0275\u0275element(41, "i", 18);
        \u0275\u0275text(42, " Over budget");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 19)(44, "table", 20)(45, "thead")(46, "tr")(47, "th");
        \u0275\u0275text(48, "Phase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Planned");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Actual");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "th");
        \u0275\u0275text(54, "Variance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "tbody");
        \u0275\u0275repeaterCreate(56, BudgetBurndownComponent_For_57_Template, 10, 11, "tr", 21, _forTrack3);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.dollars(ctx.totalPlanned()));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("over", ctx.overBudget());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.dollars(ctx.totalActual()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.overBudget() ? "badge-danger" : "badge-ok");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.overBudget() ? "Over budget" : "Within budget", " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("viewBox", "0 0 " + ctx.vw + " " + ctx.vh)("height", ctx.vh);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.gridLines());
        \u0275\u0275advance(2);
        \u0275\u0275attribute("d", ctx.plannedArea());
        \u0275\u0275advance();
        \u0275\u0275attribute("d", ctx.plannedLine());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.actualSegs());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.actualPts());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.xLabels());
        \u0275\u0275advance(2);
        \u0275\u0275attribute("x1", ctx.padL)("y1", ctx.vh - ctx.padB)("x2", ctx.vw - ctx.padR)("y2", ctx.vh - ctx.padB);
        \u0275\u0275advance(24);
        \u0275\u0275repeater(ctx.rows());
      }
    }, dependencies: [CommonModule], styles: ["\n\n.budget-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.bud-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n}\n.bud-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: 2px;\n}\n.bud-totals[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.bt-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-xs);\n}\n.bt-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 800;\n}\n.bt-val.over[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-4) var(--space-3);\n}\n.chart-card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-sans);\n}\n.bud-axis[_ngcontent-%COMP%] {\n  font-size: 11px;\n  fill: var(--color-muted);\n}\n.bud-xlabel[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  fill: var(--color-ink-soft);\n}\n.bud-xlabel.over[_ngcontent-%COMP%] {\n  fill: var(--color-danger);\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  margin-top: var(--space-2);\n  font-size: var(--fs-xs);\n  color: var(--color-muted);\n}\n.legend[_ngcontent-%COMP%]   .sw[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 4px;\n  border-radius: 2px;\n  margin-right: 5px;\n  vertical-align: 3px;\n}\n.legend[_ngcontent-%COMP%]   .sw.planned[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n}\n.legend[_ngcontent-%COMP%]   .sw.actual[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n}\n.legend[_ngcontent-%COMP%]   .sw.over[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n}\n.phase-table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.over-row[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n}\n.over-text[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-weight: 700;\n}\n/*# sourceMappingURL=budget-burndown.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BudgetBurndownComponent, { className: "BudgetBurndownComponent", filePath: "src/app/features/budget/budget-burndown.component.ts", lineNumber: 28 });
})();
export {
  BudgetBurndownComponent
};
//# sourceMappingURL=budget-burndown.component-UBU6CG5Y.js.map
