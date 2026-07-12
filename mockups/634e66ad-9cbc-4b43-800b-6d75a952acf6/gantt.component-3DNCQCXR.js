import {
  FormsModule
} from "./chunk-7F3Y7YLT.js";
import {
  AuthService
} from "./chunk-CVPORU2Z.js";
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VZ6O3Y2G.js";

// src/app/features/project/schedule/gantt.component.ts
var _forTrack0 = ($index, $item) => $item.x;
var _forTrack1 = ($index, $item) => $item.task.id;
function GanttComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "Planner: tap a bar to edit progress");
    \u0275\u0275elementEnd();
  }
}
function GanttComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "No tasks scheduled for this project yet.");
    \u0275\u0275elementEnd();
  }
}
function GanttComponent_Conditional_8_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 11);
    \u0275\u0275elementStart(1, "text", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("x1", t_r1.x)("y1", 24)("x2", t_r1.x)("y2", ctx_r1.layout().height);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", t_r1.x + 4)("y", 18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.label);
  }
}
function GanttComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 13);
    \u0275\u0275elementStart(1, "text", 14);
    \u0275\u0275text(2, "today");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("x1", ctx_r1.layout().todayX)("y1", 24)("x2", ctx_r1.layout().todayX)("y2", ctx_r1.layout().height);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", ctx_r1.layout().todayX + 4)("y", 34);
  }
}
function GanttComponent_Conditional_8_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 8);
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275attribute("d", d_r3.path);
  }
}
function GanttComponent_Conditional_8_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 15);
    \u0275\u0275listener("click", function GanttComponent_Conditional_8_For_11_Template_g_click_0_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.select(r_r5.task.id));
    });
    \u0275\u0275elementStart(1, "text", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "rect", 17)(4, "rect", 18);
    \u0275\u0275elementStart(5, "text", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedTaskId() === r_r5.task.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", 8)("y", r_r5.y + 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.task.name);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", r_r5.x)("y", r_r5.y)("width", r_r5.w)("height", 22);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.barClass(r_r5.task.progressPct));
    \u0275\u0275attribute("x", r_r5.x)("y", r_r5.y)("width", r_r5.fillW)("height", 22);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", r_r5.x + r_r5.w + 6)("y", r_r5.y + 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r5.task.progressPct, "%");
  }
}
function GanttComponent_Conditional_8_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 22);
    \u0275\u0275text(1, "Progress: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 23);
    \u0275\u0275listener("input", function GanttComponent_Conditional_8_Conditional_12_Conditional_9_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const t_r7 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setProgress(t_r7.id, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", t_r7.progressPct, "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", t_r7.progressPct);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Drag to update \u2014 PATCH /tasks/", t_r7.id, " then re-render.");
  }
}
function GanttComponent_Conditional_8_Conditional_12_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Progress ", t_r7.progressPct, "% \u2014 viewer (read-only).");
  }
}
function GanttComponent_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 20)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 1);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 21);
    \u0275\u0275listener("click", function GanttComponent_Conditional_8_Conditional_12_Template_button_click_7_listener() {
      const t_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.select(t_r7.id));
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, GanttComponent_Conditional_8_Conditional_12_Conditional_9_Template, 7, 3)(10, GanttComponent_Conditional_8_Conditional_12_Conditional_10_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r7.startsOn, " \u2192 ", t_r7.endsOn, "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(9, ctx_r1.auth.isPlanner() ? 9 : 10);
  }
}
function GanttComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5)(2, "defs")(3, "marker", 6);
    \u0275\u0275element(4, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, GanttComponent_Conditional_8_For_6_Template, 3, 7, null, null, _forTrack0);
    \u0275\u0275template(7, GanttComponent_Conditional_8_Conditional_7_Template, 3, 6);
    \u0275\u0275repeaterCreate(8, GanttComponent_Conditional_8_For_9_Template, 1, 1, ":svg:path", 8, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(10, GanttComponent_Conditional_8_For_11_Template, 7, 17, ":svg:g", 9, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, GanttComponent_Conditional_8_Conditional_12_Template, 11, 4, "div", 10);
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("min-width", ctx_r1.layout().width, "px");
    \u0275\u0275attribute("viewBox", "0 0 " + ctx_r1.layout().width + " " + ctx_r1.layout().height);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.layout().ticks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, ctx_r1.layout().todayX !== null ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.layout().deps);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.layout().rows);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, (tmp_7_0 = ctx_r1.selectedTask()) ? 12 : -1, tmp_7_0);
  }
}
var LABEL_W = 180;
var PLOT_W = 720;
var ROW_H = 46;
var TOP = 44;
var BAR_H = 22;
var DAY = 864e5;
var GanttComponent = class _GanttComponent {
  constructor(auth, sv, route) {
    this.auth = auth;
    this.sv = sv;
    this.route = route;
    this.projectId = this.route.parent?.snapshot.paramMap.get("id") ?? "";
    this.refresh = signal(0);
    this.selectedTaskId = signal(null);
    this.tasks = computed(() => {
      this.refresh();
      const phases = this.sv.phasesForProject(this.projectId);
      const order = new Map(phases.map((p, i) => [p.id, i]));
      return this.sv.tasksForProject(this.projectId).slice().sort((a, b) => {
        const pa = order.get(a.phaseId) ?? 0;
        const pb = order.get(b.phaseId) ?? 0;
        if (pa !== pb)
          return pa - pb;
        return a.startsOn.localeCompare(b.startsOn);
      });
    });
    this.layout = computed(() => {
      const tasks = this.tasks();
      const phases = this.sv.phasesForProject(this.projectId);
      const phaseName = new Map(phases.map((p) => [p.id, p.name]));
      if (tasks.length === 0) {
        return { width: LABEL_W + PLOT_W, height: TOP + 40, labelW: LABEL_W, rows: [], deps: [], ticks: [], todayX: null };
      }
      const starts = tasks.map((t) => new Date(t.startsOn).getTime());
      const ends = tasks.map((t) => new Date(t.endsOn).getTime());
      const min = Math.min(...starts);
      const max = Math.max(...ends);
      const span = Math.max(DAY, max - min);
      const x = (ms) => LABEL_W + (ms - min) / span * PLOT_W;
      const rowIndex = new Map(tasks.map((t, i) => [t.id, i]));
      const rows = tasks.map((t, i) => {
        const xs = x(new Date(t.startsOn).getTime());
        const xe = x(new Date(t.endsOn).getTime());
        const w = Math.max(6, xe - xs);
        return {
          task: t,
          phaseName: phaseName.get(t.phaseId) ?? "",
          y: TOP + i * ROW_H,
          x: xs,
          w,
          fillW: w * Math.min(100, Math.max(0, t.progressPct)) / 100
        };
      });
      const deps = [];
      for (const t of tasks) {
        if (!t.dependsOnTaskId)
          continue;
        const from = rowIndex.get(t.dependsOnTaskId);
        const to = rowIndex.get(t.id);
        if (from == null || to == null)
          continue;
        const fr = rows[from];
        const tr = rows[to];
        const x1 = fr.x + fr.w;
        const y1 = fr.y + BAR_H / 2;
        const x2 = tr.x;
        const y2 = tr.y + BAR_H / 2;
        const midX = Math.max(x1 + 14, x2 - 14);
        deps.push({ path: `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2 - 6} ${y2}` });
      }
      const ticks = [];
      const d = new Date(min);
      d.setDate(1);
      d.setMonth(d.getMonth() + 1);
      while (d.getTime() < max) {
        ticks.push({
          x: x(d.getTime()),
          label: d.toLocaleDateString("en-US", { month: "short" })
        });
        d.setMonth(d.getMonth() + 1);
      }
      const now = Date.now();
      const todayX = now >= min && now <= max ? x(now) : null;
      return {
        width: LABEL_W + PLOT_W,
        height: TOP + tasks.length * ROW_H + 10,
        labelW: LABEL_W,
        rows,
        deps,
        ticks,
        todayX
      };
    });
    this.selectedTask = computed(() => this.tasks().find((t) => t.id === this.selectedTaskId()) ?? null);
  }
  select(id) {
    this.selectedTaskId.set(this.selectedTaskId() === id ? null : id);
  }
  setProgress(taskId, value) {
    this.sv.updateTaskProgress(taskId, Number(value));
    this.refresh.update((n) => n + 1);
  }
  barClass(pct) {
    if (pct >= 100)
      return "done";
    if (pct === 0)
      return "todo";
    return "active";
  }
  static {
    this.\u0275fac = function GanttComponent_Factory(t) {
      return new (t || _GanttComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SiteviewService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GanttComponent, selectors: [["app-gantt"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "sched-head"], [1, "muted"], [1, "badge", "badge-info"], [1, "state", "card"], [1, "chart-wrap", "card", "scroll-y"], ["role", "img", "aria-label", "Project Gantt chart"], ["id", "arrow", "markerWidth", "8", "markerHeight", "8", "refX", "6", "refY", "3", "orient", "auto", "markerUnits", "userSpaceOnUse"], ["d", "M0,0 L6,3 L0,6 Z", 1, "arrow-head"], ["marker-end", "url(#arrow)", 1, "dep"], [1, "task-row", 3, "selected"], [1, "editor", "card"], [1, "grid"], [1, "axis-label"], [1, "today"], [1, "today-label"], [1, "task-row", 3, "click"], [1, "row-label"], ["rx", "4", 1, "bar-bg"], ["rx", "4", 1, "bar-fill", 3, "ngClass"], [1, "pct-label"], [1, "editor-head"], [1, "close", 3, "click"], ["for", "prog"], ["id", "prog", "type", "range", "min", "0", "max", "100", "step", "5", 3, "input", "value"], [1, "muted", "hint"]], template: function GanttComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2");
        \u0275\u0275text(3, "Schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "SVG Gantt \xB7 task bars show progress, arrows show dependencies");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, GanttComponent_Conditional_6_Template, 2, 0, "span", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, GanttComponent_Conditional_7_Template, 2, 0, "div", 3)(8, GanttComponent_Conditional_8_Template, 13, 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.auth.isPlanner() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.layout().rows.length === 0 ? 7 : 8);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule], styles: ["\n\n.sched-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-4);\n}\n.sched-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  overflow-x: auto;\n}\nsvg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  font-family: var(--font-sans);\n}\n.grid[_ngcontent-%COMP%] {\n  stroke: var(--color-border);\n  stroke-width: 1;\n}\n.today[_ngcontent-%COMP%] {\n  stroke: var(--color-accent);\n  stroke-width: 1.5;\n  stroke-dasharray: 4 3;\n}\n.today-label[_ngcontent-%COMP%] {\n  fill: var(--color-accent);\n  font-size: 10px;\n  font-weight: 700;\n}\n.axis-label[_ngcontent-%COMP%] {\n  fill: var(--color-text-muted);\n  font-size: 11px;\n  font-weight: 600;\n}\n.arrow-head[_ngcontent-%COMP%] {\n  fill: var(--color-text-muted);\n}\n.dep[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--color-text-muted);\n  stroke-width: 1.5;\n  stroke-dasharray: 3 2;\n}\n.row-label[_ngcontent-%COMP%] {\n  fill: var(--color-text);\n  font-size: 12px;\n  font-weight: 600;\n}\n.pct-label[_ngcontent-%COMP%] {\n  fill: var(--color-text-muted);\n  font-size: 11px;\n}\n.bar-bg[_ngcontent-%COMP%] {\n  fill: var(--color-gantt-bar);\n  opacity: 0.5;\n}\n.bar-fill.active[_ngcontent-%COMP%] {\n  fill: var(--color-gantt-fill);\n}\n.bar-fill.done[_ngcontent-%COMP%] {\n  fill: var(--color-success);\n}\n.bar-fill.todo[_ngcontent-%COMP%] {\n  fill: var(--color-gantt-bar);\n}\n.task-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.task-row[_ngcontent-%COMP%]:hover   .bar-bg[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.task-row.selected[_ngcontent-%COMP%]   .bar-bg[_ngcontent-%COMP%] {\n  stroke: var(--color-accent);\n  stroke-width: 2;\n}\n.editor[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  padding: var(--space-5);\n}\n.editor-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-3);\n}\n.editor-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.close[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--color-text-muted);\n  min-height: 32px;\n  padding: 0 var(--space-2);\n}\n.editor[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  width: 100%;\n  accent-color: var(--color-primary);\n  padding: 0;\n  min-height: 44px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  margin-top: var(--space-1);\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n}\n/*# sourceMappingURL=gantt.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GanttComponent, { className: "GanttComponent", filePath: "src/app/features/project/schedule/gantt.component.ts", lineNumber: 48 });
})();
export {
  GanttComponent
};
//# sourceMappingURL=gantt.component-3DNCQCXR.js.map
