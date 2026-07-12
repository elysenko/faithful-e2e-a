import {
  AuthService,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-UKEMHCBE.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KNIBP2U6.js";

// src/app/features/tasks/tasks.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function TasksComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function TasksComponent_For_22_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(f_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filter() === f_r2.key);
    \u0275\u0275attribute("data-testid", "filter-" + f_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function TasksComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19)(1, "label", 20)(2, "input", 21);
    \u0275\u0275listener("change", function TasksComponent_For_25_Template_input_change_2_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDone(task_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 24);
    \u0275\u0275listener("click", function TasksComponent_For_25_Template_button_click_6_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteTask(task_r5));
    });
    \u0275\u0275text(7, " \u2715 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    \u0275\u0275classProp("is-done", task_r5.done);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", task_r5.done);
    \u0275\u0275attribute("data-testid", "toggle-" + task_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r5.title);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-testid", "delete-" + task_r5.id);
  }
}
function TasksComponent_ForEmpty_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " You haven't completed any tasks. ");
  }
}
function TasksComponent_ForEmpty_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No active tasks \u2014 you're all caught up! ");
  }
}
function TasksComponent_ForEmpty_26_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Add your first task above to get started. ");
  }
}
function TasksComponent_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17)(1, "p", 25);
    \u0275\u0275text(2, "Nothing here yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275template(4, TasksComponent_ForEmpty_26_Conditional_4_Template, 1, 0)(5, TasksComponent_ForEmpty_26_Conditional_5_Template, 1, 0)(6, TasksComponent_ForEmpty_26_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(4, ctx_r2.filter() === "done" ? 4 : ctx_r2.filter() === "active" ? 5 : 6);
  }
}
var TasksComponent = class _TasksComponent {
  constructor(route, router, auth) {
    this.route = route;
    this.router = router;
    this.auth = auth;
    this.tasks = signal([
      { id: "1", title: "Draft the Q3 roadmap", done: false, createdAt: "2026-07-01T09:00:00Z" },
      { id: "2", title: "Review pull request #482", done: false, createdAt: "2026-07-02T11:30:00Z" },
      { id: "3", title: "Reply to onboarding emails", done: true, createdAt: "2026-07-02T14:15:00Z" },
      { id: "4", title: "Prepare demo for stakeholders", done: false, createdAt: "2026-07-03T08:45:00Z" },
      { id: "5", title: "Update dependency versions", done: true, createdAt: "2026-07-03T16:20:00Z" }
    ]);
    this.filter = signal("all");
    this.newTitle = "";
    this.filters = [
      { key: "all", label: "All" },
      { key: "active", label: "Active" },
      { key: "done", label: "Done" }
    ];
    this.visibleTasks = computed(() => {
      const f = this.filter();
      return this.tasks().filter((t) => f === "active" ? !t.done : f === "done" ? t.done : true);
    });
    this.activeCount = computed(() => this.tasks().filter((t) => !t.done).length);
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const f = params.get("filter");
      this.filter.set(f === "active" || f === "done" ? f : "all");
    });
  }
  setFilter(f) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { filter: f },
      queryParamsHandling: "merge"
    });
  }
  addTask() {
    const title = this.newTitle.trim();
    if (!title)
      return;
    const task = {
      id: `local-${this.tasks().length + 1}-${title.length}`,
      title,
      done: false,
      createdAt: "2026-07-07T00:00:00Z"
    };
    this.tasks.update((list) => [task, ...list]);
    this.newTitle = "";
  }
  toggleDone(task) {
    this.tasks.update((list) => list.map((t) => t.id === task.id ? __spreadProps(__spreadValues({}, t), { done: !t.done }) : t));
  }
  deleteTask(task) {
    this.tasks.update((list) => list.filter((t) => t.id !== task.id));
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function TasksComponent_Factory(t) {
      return new (t || _TasksComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 5, consts: [[1, "app-bar"], [1, "app-bar-inner"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], ["type", "button", "data-testid", "logout", 1, "logout-btn", 3, "click"], [1, "page"], [1, "header-row"], [1, "page-title"], [1, "page-sub"], [1, "add-form", 3, "ngSubmit"], ["type", "text", "name", "newTitle", "placeholder", "Add a new task\u2026", "data-testid", "new-task-input", "aria-label", "New task title", 1, "add-input", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "add-task", 1, "btn-add", 3, "disabled"], ["aria-label", "Filter tasks", 1, "filter-tabs"], ["type", "button", 1, "filter-tab", 3, "active"], [1, "task-list"], [1, "task-row", 3, "is-done"], [1, "empty-state"], ["type", "button", 1, "filter-tab", 3, "click"], [1, "task-row"], [1, "task-check"], ["type", "checkbox", "aria-label", "Toggle task done", 3, "change", "checked"], [1, "checkmark"], [1, "task-title"], ["type", "button", "aria-label", "Delete task", 1, "delete-btn", 3, "click"], [1, "empty-title"], [1, "empty-sub"]], template: function TasksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u2713");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Task Tracker");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function TasksComponent_Template_button_click_7_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(8, " Log out ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "main", 6)(10, "section", 7)(11, "div")(12, "h1", 8);
        \u0275\u0275text(13, "My tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "form", 10);
        \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_16_listener() {
          return ctx.addTask();
        });
        \u0275\u0275elementStart(17, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function TasksComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newTitle, $event) || (ctx.newTitle = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275text(19, " Add ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "nav", 13);
        \u0275\u0275repeaterCreate(21, TasksComponent_For_22_Template, 2, 4, "button", 14, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "ul", 15);
        \u0275\u0275repeaterCreate(24, TasksComponent_For_25_Template, 8, 6, "li", 16, _forTrack1, false, TasksComponent_ForEmpty_26_Template, 7, 1, "li", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate2("", ctx.activeCount(), " active \xB7 ", ctx.tasks().length, " total");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.newTitle);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.newTitle.trim());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.filters);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.visibleTasks());
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: [`

[_nghost-%COMP%] {
  display: block;
  min-height: 100vh;
  min-height: 100svh;
  background: var(--color-bg);
}
.app-bar[_ngcontent-%COMP%] {
  position: sticky;
  top: 0;
  z-index: 10;
  height: var(--header-height);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}
.app-bar-inner[_ngcontent-%COMP%] {
  max-width: var(--content-max);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--space-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.brand-mark[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-weight: 700;
}
.brand-name[_ngcontent-%COMP%] {
  font-weight: 700;
  font-size: var(--font-size-md);
}
.logout-btn[_ngcontent-%COMP%] {
  min-height: 44px;
  padding: 0 var(--space-3);
  background: transparent;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  font-weight: 600;
}
.logout-btn[_ngcontent-%COMP%]:active {
  background: var(--color-surface-alt);
}
.page[_ngcontent-%COMP%] {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--space-5) var(--space-4);
  padding-bottom: calc(var(--space-7) + var(--safe-bottom));
}
.header-row[_ngcontent-%COMP%] {
  margin-bottom: var(--space-4);
}
.page-title[_ngcontent-%COMP%] {
  font-size: var(--font-size-xl);
  font-weight: 700;
}
.page-sub[_ngcontent-%COMP%] {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  margin-top: var(--space-1);
}
.add-form[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}
.add-input[_ngcontent-%COMP%] {
  flex: 1;
  min-height: 48px;
  padding: 0 var(--space-3);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
}
.add-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-soft);
}
.btn-add[_ngcontent-%COMP%] {
  min-width: 72px;
  min-height: 48px;
  padding: 0 var(--space-4);
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-weight: 600;
}
.btn-add[_ngcontent-%COMP%]:active:not(:disabled) {
  background: var(--color-primary-active);
}
.btn-add[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
}
.filter-tabs[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--space-1);
  background: var(--color-surface-alt);
  border-radius: var(--radius-pill);
  padding: var(--space-1);
  margin-bottom: var(--space-4);
}
.filter-tab[_ngcontent-%COMP%] {
  flex: 1;
  min-height: 44px;
  border: none;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  font-weight: 600;
}
.filter-tab.active[_ngcontent-%COMP%] {
  background: var(--color-surface);
  color: var(--color-primary);
  box-shadow: var(--shadow-sm);
}
.task-list[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.task-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-height: 56px;
  padding: var(--space-2) var(--space-3);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
.task-check[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.task-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
}
.checkmark[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
  border: 2px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  transition: background 0.15s ease, border-color 0.15s ease;
}
.task-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {
  background: var(--color-primary) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E") center / 16px no-repeat;
  border-color: var(--color-primary);
}
.task-title[_ngcontent-%COMP%] {
  flex: 1;
  color: var(--color-text);
  word-break: break-word;
}
.is-done[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] {
  color: var(--color-text-subtle);
  text-decoration: line-through;
}
.delete-btn[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border: none;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--color-text-subtle);
  font-size: var(--font-size-md);
}
.delete-btn[_ngcontent-%COMP%]:active {
  background: var(--color-danger-soft);
  color: var(--color-danger);
}
.empty-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: var(--space-7) var(--space-4);
  color: var(--color-text-muted);
}
.empty-title[_ngcontent-%COMP%] {
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-1);
}
.empty-sub[_ngcontent-%COMP%] {
  font-size: var(--font-size-sm);
}
/*# sourceMappingURL=tasks.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/features/tasks/tasks.component.ts", lineNumber: 15 });
})();
export {
  TasksComponent
};
//# sourceMappingURL=tasks.component-HRLH6KWP.js.map
