import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  Router,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/tasks/tasks.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TasksComponent_Conditional_28_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r1.title, " (", t_r1.account, ")");
  }
}
function TasksComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span")(2, "strong");
    \u0275\u0275text(3, "Signal-driven nudges");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275repeaterCreate(5, TasksComponent_Conditional_28_For_6_Template, 2, 2, "span", 15, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r1.signalTasks().length, " task(s) were raised automatically from relationship signals: ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.signalTasks());
  }
}
function TasksComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function TasksComponent_For_31_Template_button_click_0_listener() {
      const v_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setView(v_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeView() === v_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r4);
  }
}
function TasksComponent_For_34_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\u21BB");
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "input", 18);
    \u0275\u0275listener("change", function TasksComponent_For_34_Template_input_change_1_listener() {
      const t_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDone(t_r6.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 19)(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275template(5, TasksComponent_For_34_Conditional_5_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 23)(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 25)(15, "button", 26);
    \u0275\u0275listener("click", function TasksComponent_For_34_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.noop());
    });
    \u0275\u0275text(16, "Snooze");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 26);
    \u0275\u0275listener("click", function TasksComponent_For_34_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.noop());
    });
    \u0275\u0275text(18, "Reassign");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("task-done", ctx_r1.isDone(t_r6.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isDone(t_r6.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(5, t_r6.recurring ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", t_r6.account, " \xB7 due ", \u0275\u0275pipeBind2(8, 13, t_r6.due, "MMM d"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.priorityBadge(t_r6.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6.priority);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.sourceBadge(t_r6.source));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6.source);
  }
}
function TasksComponent_ForEmpty_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Nothing in this view. Nicely done.");
    \u0275\u0275elementEnd();
  }
}
var TasksComponent = class _TasksComponent {
  bucketForView(view) {
    switch (view) {
      case "weekly":
        return "week";
      case "overdue":
        return "overdue";
      default:
        return "today";
    }
  }
  isDone(id) {
    return !!this.doneState()[id];
  }
  toggleDone(id) {
    this.doneState.update((s) => __spreadProps(__spreadValues({}, s), { [id]: !s[id] }));
  }
  priorityBadge(priority) {
    switch (priority) {
      case "high":
        return "badge-danger";
      case "medium":
        return "badge-warning";
      case "low":
        return "badge-neutral";
      default:
        return "badge-neutral";
    }
  }
  sourceBadge(source) {
    switch (source) {
      case "signal":
        return "badge-info";
      case "email":
        return "badge-info";
      case "reminder":
        return "badge-neutral";
      case "manual":
        return "badge-neutral";
      default:
        return "badge-neutral";
    }
  }
  setView(view) {
    this.router.navigate([], { queryParams: { view }, queryParamsHandling: "merge" });
  }
  noop() {
  }
  constructor(seed, route, router) {
    this.seed = seed;
    this.route = route;
    this.router = router;
    this.views = ["daily", "weekly", "overdue"];
    this.activeView = signal("daily");
    this.doneState = signal({});
    this.overdueCount = computed(() => this.seed.tasks().filter((t) => t.bucket === "overdue").length);
    this.todayCount = computed(() => this.seed.tasks().filter((t) => t.bucket === "today").length);
    this.weekCount = computed(() => this.seed.tasks().filter((t) => t.bucket === "week").length);
    this.visibleTasks = computed(() => {
      const bucket = this.bucketForView(this.activeView());
      return this.seed.tasks().filter((t) => t.bucket === bucket);
    });
    this.signalTasks = computed(() => this.seed.tasks().filter((t) => t.source === "signal"));
    this.route.queryParamMap.subscribe((q) => {
      const v = q.get("view");
      this.activeView.set(v && this.views.includes(v) ? v : "daily");
    });
  }
  static {
    this.\u0275fac = function TasksComponent_Factory(t) {
      return new (t || _TasksComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 7, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "muted", "stat-note"], [1, "alert", "alert-info", "nudge"], [1, "tabs"], [1, "tab", 3, "active"], [1, "card", "card-pad"], [1, "task", 3, "task-done"], [1, "muted"], [1, "nudge-item"], [1, "tab", 3, "click"], [1, "task"], ["type", "checkbox", 1, "check-box", 3, "change", "checked"], [1, "task-main"], [1, "task-title"], ["title", "Recurring", 1, "recur"], [1, "task-meta", "muted"], [1, "task-badges"], [1, "badge"], [1, "task-actions"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"]], template: function TasksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Tasks & nudges");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Nexus Power CRM \xB7 daily, weekly and overdue work, plus signal-driven nudges");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Overdue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275text(13, "Past due date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 5)(15, "div", 6);
        \u0275\u0275text(16, "Today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 8);
        \u0275\u0275text(20, "Due today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 5)(22, "div", 6);
        \u0275\u0275text(23, "This week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 7);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 8);
        \u0275\u0275text(27, "Coming up");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(28, TasksComponent_Conditional_28_Template, 7, 1, "div", 9);
        \u0275\u0275elementStart(29, "div", 10);
        \u0275\u0275repeaterCreate(30, TasksComponent_For_31_Template, 2, 3, "button", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 12);
        \u0275\u0275repeaterCreate(33, TasksComponent_For_34_Template, 19, 16, "div", 13, _forTrack0, false, TasksComponent_ForEmpty_35_Template, 2, 0, "p", 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275classProp("stat-alert", ctx.overdueCount() > 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.overdueCount());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.todayCount());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.weekCount());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(28, ctx.signalTasks().length > 0 ? 28 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.views);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.visibleTasks());
      }
    }, dependencies: [CommonModule, DatePipe], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.stat-value.stat-alert[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.stat-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.nudge[_ngcontent-%COMP%] {\n  margin: var(--sp-4) 0;\n}\n.nudge-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  font-weight: 600;\n}\n.task[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: var(--sp-3) 0;\n  border-bottom: 1px solid var(--color-border);\n  flex-wrap: wrap;\n}\n.task[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.task-done[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n}\n.check-box[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  min-height: 18px;\n  flex: 0 0 auto;\n}\n.task-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.task-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.task-meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  margin-top: 2px;\n}\n.recur[_ngcontent-%COMP%] {\n  color: var(--color-info);\n  font-weight: 700;\n  margin-left: 6px;\n}\n.task-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.task-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n/*# sourceMappingURL=tasks.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/features/tasks/tasks.component.ts", lineNumber: 14 });
})();
export {
  TasksComponent
};
//# sourceMappingURL=tasks.component-F75WTPBL.js.map
