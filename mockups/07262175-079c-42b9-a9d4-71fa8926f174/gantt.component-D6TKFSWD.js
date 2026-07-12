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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RDDARQHK.js";

// src/app/features/gantt/gantt.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.x;
function GanttComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Drag across a bar to update its progress. Arrows show task dependencies. ");
  }
}
function GanttComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Read-only view. Arrows show task dependencies. ");
  }
}
function GanttComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const i_r2 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", i_r2 === 0 ? "var(--color-phase-a)" : i_r2 === 1 ? "var(--color-phase-b)" : "var(--color-phase-c)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r1.name, " ");
  }
}
function GanttComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 14);
    \u0275\u0275elementStart(1, "text", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tk_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("x1", tk_r3.x)("y1", ctx_r3.headerH)("x2", tk_r3.x)("y2", ctx_r3.height() - 8);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", tk_r3.x + 4)("y", ctx_r3.headerH - 12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tk_r3.label);
  }
}
function GanttComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 16);
    \u0275\u0275elementStart(1, "text", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const i_r6 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("y", ctx_r3.headerH + i_r6 * ctx_r3.rowH)("width", ctx_r3.width())("height", ctx_r3.rowH)("fill", i_r6 % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-alt)");
    \u0275\u0275advance();
    \u0275\u0275attribute("y", ctx_r3.headerH + i_r6 * ctx_r3.rowH + ctx_r3.rowH / 2 + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.name);
  }
}
function GanttComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 11);
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275attribute("d", a_r7.d);
  }
}
function GanttComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 12);
    \u0275\u0275element(1, "rect", 18)(2, "rect", 19);
    \u0275\u0275elementStart(3, "text", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "rect", 21);
    \u0275\u0275listener("pointerdown", function GanttComponent_For_24_Template_rect_pointerdown_5_listener($event) {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onBarDown($event, r_r9));
    })("pointermove", function GanttComponent_For_24_Template_rect_pointermove_5_listener($event) {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onBarMove($event, r_r9));
    })("pointerup", function GanttComponent_For_24_Template_rect_pointerup_5_listener() {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onBarUp(r_r9));
    });
    \u0275\u0275elementStart(6, "title");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("x", r_r9.x)("y", r_r9.y)("width", r_r9.w)("height", r_r9.h)("fill", r_r9.phaseColorVar);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", r_r9.x)("y", r_r9.y)("width", r_r9.progW)("height", r_r9.h)("fill", r_r9.phaseColorVar);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", r_r9.x + 6)("y", r_r9.y + r_r9.h / 2 + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r9.progressPct, "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("editable", ctx_r3.auth.isPlanner());
    \u0275\u0275attribute("x", r_r9.x)("y", r_r9.y)("width", r_r9.w)("height", r_r9.h);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r9.name, " \u2014 ", r_r9.progressPct, "%");
  }
}
var DAY = 864e5;
var GanttComponent = class _GanttComponent {
  day(iso) {
    return Math.floor(Date.parse(iso) / DAY);
  }
  phaseColorFor(phaseId) {
    const idx = this.phases().findIndex((p) => p.id === phaseId);
    return this.phaseColors[idx % this.phaseColors.length];
  }
  constructor(auth, route) {
    this.auth = auth;
    this.route = route;
    this.projectId = signal("");
    this.phases = signal([
      { id: "ph1", projectId: "p1", name: "Site Prep & Foundation", order: 1 },
      { id: "ph2", projectId: "p1", name: "Structure & Envelope", order: 2 },
      { id: "ph3", projectId: "p1", name: "Interior & Fit-out", order: 3 }
    ]);
    this.tasks = signal([
      { id: "t1", phaseId: "ph1", name: "Site clearing", startsOn: "2026-03-02", endsOn: "2026-03-13", progressPct: 100, dependsOnTaskId: null },
      { id: "t2", phaseId: "ph1", name: "Excavation", startsOn: "2026-03-16", endsOn: "2026-03-27", progressPct: 100, dependsOnTaskId: "t1" },
      { id: "t3", phaseId: "ph1", name: "Foundation pour", startsOn: "2026-03-30", endsOn: "2026-04-17", progressPct: 70, dependsOnTaskId: "t2" },
      { id: "t4", phaseId: "ph2", name: "Steel frame erection", startsOn: "2026-04-20", endsOn: "2026-05-15", progressPct: 40, dependsOnTaskId: "t3" },
      { id: "t5", phaseId: "ph2", name: "Roofing", startsOn: "2026-05-18", endsOn: "2026-06-05", progressPct: 10, dependsOnTaskId: "t4" },
      { id: "t6", phaseId: "ph2", name: "Exterior cladding", startsOn: "2026-05-25", endsOn: "2026-06-19", progressPct: 5, dependsOnTaskId: "t4" },
      { id: "t7", phaseId: "ph3", name: "MEP rough-in", startsOn: "2026-06-08", endsOn: "2026-06-26", progressPct: 0, dependsOnTaskId: "t5" },
      { id: "t8", phaseId: "ph3", name: "Interior finishes", startsOn: "2026-06-29", endsOn: "2026-07-24", progressPct: 0, dependsOnTaskId: "t7" }
    ]);
    this.labelW = 156;
    this.headerH = 34;
    this.rowH = 46;
    this.barH = 24;
    this.pxPerDay = 7;
    this.dragId = null;
    this.phaseColors = ["var(--color-phase-a)", "var(--color-phase-b)", "var(--color-phase-c)"];
    this.minDay = computed(() => Math.min(...this.tasks().map((t) => this.day(t.startsOn))));
    this.maxDay = computed(() => Math.max(...this.tasks().map((t) => this.day(t.endsOn))));
    this.width = computed(() => this.labelW + (this.maxDay() - this.minDay() + 2) * this.pxPerDay + 24);
    this.height = computed(() => this.headerH + this.tasks().length * this.rowH + 8);
    this.rows = computed(() => {
      const min = this.minDay();
      return this.tasks().map((t, i) => {
        const x = this.labelW + (this.day(t.startsOn) - min) * this.pxPerDay;
        const w = Math.max((this.day(t.endsOn) - this.day(t.startsOn) + 1) * this.pxPerDay, 8);
        const y = this.headerH + i * this.rowH + (this.rowH - this.barH) / 2;
        return {
          id: t.id,
          name: t.name,
          phaseColorVar: this.phaseColorFor(t.phaseId),
          x,
          y,
          w,
          h: this.barH,
          progW: Math.round(w * t.progressPct / 100),
          progressPct: t.progressPct,
          startsOn: t.startsOn,
          endsOn: t.endsOn
        };
      });
    });
    this.arrows = computed(() => {
      const byId = new Map(this.rows().map((r) => [r.id, r]));
      const out = [];
      for (const t of this.tasks()) {
        if (!t.dependsOnTaskId)
          continue;
        const from = byId.get(t.dependsOnTaskId);
        const to = byId.get(t.id);
        if (!from || !to)
          continue;
        const x1 = from.x + from.w;
        const y1 = from.y + from.h / 2;
        const x2 = to.x;
        const y2 = to.y + to.h / 2;
        const midX = Math.max(x1 + 10, x2 - 12);
        out.push({ id: `${t.dependsOnTaskId}->${t.id}`, d: `M ${x1} ${y1} H ${midX} V ${y2} H ${x2 - 2}` });
      }
      return out;
    });
    this.ticks = computed(() => {
      const min = this.minDay();
      const max = this.maxDay();
      const out = [];
      for (let d = min; d <= max; d += 14) {
        const x = this.labelW + (d - min) * this.pxPerDay;
        const label = new Date(d * DAY).toLocaleDateString("en-US", { month: "short", day: "numeric" });
        out.push({ x, label });
      }
      return out;
    });
  }
  ngOnInit() {
    this.route.parent?.paramMap.subscribe((p) => this.projectId.set(p.get("id") ?? ""));
  }
  // ---- Planner drag-to-set-progress ----
  onBarDown(evt, row) {
    if (!this.auth.isPlanner())
      return;
    evt.target.setPointerCapture?.(evt.pointerId);
    this.dragId = row.id;
    this.applyProgress(evt, row);
  }
  onBarMove(evt, row) {
    if (this.dragId !== row.id)
      return;
    this.applyProgress(evt, row);
  }
  onBarUp(row) {
    if (this.dragId === row.id) {
      this.dragId = null;
    }
  }
  applyProgress(evt, row) {
    const svg = evt.currentTarget.ownerSVGElement;
    if (!svg)
      return;
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm)
      return;
    const loc = pt.matrixTransform(ctm.inverse());
    const pct = Math.max(0, Math.min(100, Math.round((loc.x - row.x) / row.w * 100)));
    this.tasks.update((list) => list.map((t) => t.id === row.id ? __spreadProps(__spreadValues({}, t), { progressPct: pct }) : t));
  }
  static {
    this.\u0275fac = function GanttComponent_Factory(t) {
      return new (t || _GanttComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GanttComponent, selectors: [["app-gantt"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 8, consts: [[1, "gantt-wrap"], [1, "gantt-head"], [1, "g-title"], [1, "hint"], [1, "phase-legend"], [1, "pl-item"], [1, "scroll-x", "gantt-scroll"], ["role", "img", "aria-label", "Project schedule Gantt chart", 1, "gantt-svg"], ["id", "arrow", "markerWidth", "8", "markerHeight", "8", "refX", "6", "refY", "3", "orient", "auto", "markerUnits", "userSpaceOnUse"], ["d", "M0,0 L6,3 L0,6 Z", "fill", "var(--color-faint)"], ["stroke", "var(--color-border-strong)", "stroke-width", "1"], ["fill", "none", "stroke", "var(--color-faint)", "stroke-width", "1.5", "stroke-dasharray", "3 2", "marker-end", "url(#arrow)"], [1, "bar-group"], [1, "pl-sw"], ["stroke", "var(--color-border)", "stroke-width", "1"], [1, "g-tick"], ["x", "0"], ["x", "12", 1, "g-label"], ["rx", "5", "opacity", "0.22"], ["rx", "5"], [1, "g-bar-pct"], ["rx", "5", "fill", "transparent", 1, "bar-hit", 3, "pointerdown", "pointermove", "pointerup"]], template: function GanttComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h3", 2);
        \u0275\u0275text(4, "Schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275template(6, GanttComponent_Conditional_6_Template, 1, 0)(7, GanttComponent_Conditional_7_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275repeaterCreate(9, GanttComponent_For_10_Template, 3, 3, "span", 5, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 7)(13, "defs")(14, "marker", 8);
        \u0275\u0275element(15, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(16, GanttComponent_For_17_Template, 3, 7, null, null, _forTrack1);
        \u0275\u0275element(18, "line", 10);
        \u0275\u0275repeaterCreate(19, GanttComponent_For_20_Template, 3, 6, null, null, _forTrack0);
        \u0275\u0275repeaterCreate(21, GanttComponent_For_22_Template, 1, 1, ":svg:path", 11, _forTrack0);
        \u0275\u0275repeaterCreate(23, GanttComponent_For_24_Template, 8, 21, ":svg:g", 12, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.auth.isPlanner() ? 6 : 7);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.phases());
        \u0275\u0275advance(3);
        \u0275\u0275attribute("width", ctx.width())("height", ctx.height())("viewBox", "0 0 " + ctx.width() + " " + ctx.height());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.ticks());
        \u0275\u0275advance(2);
        \u0275\u0275attribute("x1", ctx.labelW)("y1", ctx.headerH)("x2", ctx.width())("y2", ctx.headerH);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.arrows());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.rows());
      }
    }, dependencies: [CommonModule], styles: ["\n\n.gantt-wrap[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n}\n.gantt-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  padding: var(--space-4) var(--space-5);\n  border-bottom: 1px solid var(--color-border);\n}\n.g-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: 2px;\n}\n.phase-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-left: auto;\n}\n.pl-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-xs);\n  color: var(--color-muted);\n}\n.pl-sw[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n}\n.gantt-scroll[_ngcontent-%COMP%] {\n  padding: var(--space-2) 0;\n}\n.gantt-svg[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-sans);\n}\n.g-tick[_ngcontent-%COMP%] {\n  font-size: 11px;\n  fill: var(--color-muted);\n}\n.g-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  fill: var(--color-ink-soft);\n}\n.g-bar-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  fill: var(--color-text-inverse);\n  pointer-events: none;\n}\n.bar-hit[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.bar-hit.editable[_ngcontent-%COMP%] {\n  cursor: ew-resize;\n}\n.bar-hit.editable[_ngcontent-%COMP%]:hover {\n  stroke: var(--color-brand);\n  stroke-width: 2;\n}\n/*# sourceMappingURL=gantt.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GanttComponent, { className: "GanttComponent", filePath: "src/app/features/gantt/gantt.component.ts", lineNumber: 40 });
})();
export {
  GanttComponent
};
//# sourceMappingURL=gantt.component-D6TKFSWD.js.map
