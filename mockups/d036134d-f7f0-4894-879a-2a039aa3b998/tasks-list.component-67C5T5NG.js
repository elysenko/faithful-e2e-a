import {
  toSignal
} from "./chunk-FSFIGSYB.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56EPECIG.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  Router,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UJBMV62H.js";

// src/app/features/tasks/tasks-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TasksListComponent_For_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.notes);
  }
}
function TasksListComponent_For_19_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("badge-warning", t_r2.status === "Open");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Due ", \u0275\u0275pipeBind2(2, 3, t_r2.dueDate, "MMM d"), "");
  }
}
function TasksListComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 13)(1, "button", 14);
    \u0275\u0275listener("click", function TasksListComponent_For_19_Template_button_click_1_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(t_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TasksListComponent_For_19_Conditional_6_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TasksListComponent_For_19_Conditional_7_Template, 3, 6, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275classProp("done", t_r2.status === "Done");
    \u0275\u0275attribute("data-testid", "task-row-" + t_r2.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-testid", "task-toggle-" + t_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2.status === "Done" ? "\u2713" : "", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, t_r2.notes ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, t_r2.dueDate ? 7 : -1);
  }
}
function TasksListComponent_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 11);
    \u0275\u0275text(1, "No tasks here.");
    \u0275\u0275elementEnd();
  }
}
function TasksListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function TasksListComponent_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreate());
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275listener("click", function TasksListComponent_Conditional_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 22)(3, "h2", 23);
    \u0275\u0275text(4, "New task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function TasksListComponent_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreate());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 25);
    \u0275\u0275listener("ngSubmit", function TasksListComponent_Conditional_21_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275elementStart(8, "div", 26)(9, "label", 27);
    \u0275\u0275text(10, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 26)(13, "label", 29);
    \u0275\u0275text(14, "Due date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 26)(17, "label", 31);
    \u0275\u0275text(18, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "textarea", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 33)(21, "button", 34);
    \u0275\u0275listener("click", function TasksListComponent_Conditional_21_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreate());
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 35);
    \u0275\u0275text(24, "Create");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r2.form.invalid);
  }
}
var TasksListComponent = class _TasksListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.tasks = signal([
      { id: "t1", title: "Send proposal to Globex", dueDate: "2026-07-13", status: "Open", notes: "Include Q3 pricing" },
      { id: "t2", title: "Follow up with Initech CFO", dueDate: "2026-07-15", status: "Open" },
      { id: "t3", title: "Prep discovery call \u2014 Umbrella Co", dueDate: "2026-07-16", status: "Open" },
      { id: "t4", title: "Update CRM records after Q2 review", dueDate: "2026-07-05", status: "Done" },
      { id: "t5", title: "Draft renewal terms for Soylent", dueDate: "2026-07-20", status: "Open", notes: "Coordinate with legal" }
    ]);
    this.filter = signal("all");
    this.filtered = computed(() => {
      const f = this.filter();
      if (f === "all")
        return this.tasks();
      return this.tasks().filter((t) => t.status === f);
    });
    this.openCount = computed(() => this.tasks().filter((t) => t.status === "Open").length);
    this.queryModal = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("modal"))), {
      initialValue: this.route.snapshot.queryParamMap.get("modal")
    });
    this.showCreate = computed(() => this.queryModal() === "new");
    this.form = this.fb.group({
      title: ["", Validators.required],
      dueDate: [""],
      notes: [""]
    });
  }
  setFilter(f) {
    this.filter.set(f);
  }
  toggle(task) {
    this.tasks.update((list) => list.map((t) => t.id === task.id ? __spreadProps(__spreadValues({}, t), { status: t.status === "Open" ? "Done" : "Open" }) : t));
  }
  openCreate() {
    this.router.navigate([], { queryParams: { modal: "new" }, queryParamsHandling: "merge" });
  }
  closeCreate() {
    this.form.reset();
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  submit() {
    if (this.form.invalid)
      return;
    const v = this.form.value;
    const task = {
      id: "tmp-" + this.tasks().length,
      title: v.title,
      dueDate: v.dueDate || void 0,
      status: "Open",
      notes: v.notes || void 0
    };
    this.tasks.update((list) => [task, ...list]);
    this.closeCreate();
  }
  static {
    this.\u0275fac = function TasksListComponent_Factory(t) {
      return new (t || _TasksListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksListComponent, selectors: [["app-tasks-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 9, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["data-testid", "tasks-new", 1, "btn", "btn-primary", 3, "click"], [1, "toolbar", "tabs"], [1, "tab", 3, "click"], ["data-testid", "tasks-filter-open", 1, "tab", 3, "click"], [1, "card"], [1, "task-list"], [1, "task-row", 3, "done"], [1, "muted", "empty"], [1, "overlay"], [1, "task-row"], ["aria-label", "Toggle task", 1, "check", 3, "click"], [1, "task-main"], [1, "task-title"], [1, "task-notes", "muted", "small"], [1, "badge", 3, "badge-warning"], [1, "badge"], [1, "overlay", 3, "click"], ["data-testid", "task-create-modal", 1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn-link", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "t-title"], ["id", "t-title", "formControlName", "title", "data-testid", "task-title", "placeholder", "Call the client", 1, "input"], ["for", "t-due"], ["id", "t-due", "type", "date", "formControlName", "dueDate", 1, "input"], ["for", "t-notes"], ["id", "t-notes", "formControlName", "notes", "placeholder", "Optional details\u2026", 1, "textarea"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", "data-testid", "task-save", 1, "btn", "btn-primary", 3, "disabled"]], template: function TasksListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function TasksListComponent_Template_button_click_7_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275text(8, "+ New task");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function TasksListComponent_Template_button_click_10_listener() {
          return ctx.setFilter("all");
        });
        \u0275\u0275text(11, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 7);
        \u0275\u0275listener("click", function TasksListComponent_Template_button_click_12_listener() {
          return ctx.setFilter("Open");
        });
        \u0275\u0275text(13, "Open");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 6);
        \u0275\u0275listener("click", function TasksListComponent_Template_button_click_14_listener() {
          return ctx.setFilter("Done");
        });
        \u0275\u0275text(15, "Done");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8)(17, "ul", 9);
        \u0275\u0275repeaterCreate(18, TasksListComponent_For_19_Template, 8, 8, "li", 10, _forTrack0, false, TasksListComponent_ForEmpty_20_Template, 2, 0, "li", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(21, TasksListComponent_Conditional_21_Template, 25, 2, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.openCount(), " open");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.filter() === "all");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filter() === "Open");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filter() === "Done");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.filtered());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(21, ctx.showCreate() ? 21 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.tabs[_ngcontent-%COMP%] {\n  gap: var(--space-2);\n}\n.tab[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 var(--space-4);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-pill);\n  color: var(--color-text-muted);\n  font-weight: 600;\n  font-size: var(--text-sm);\n  cursor: pointer;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n  border-color: var(--color-primary);\n}\n.task-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: var(--space-2) var(--space-4);\n}\n.task-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 56px;\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.task-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.check[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  min-width: 28px;\n  border-radius: 50%;\n  border: 2px solid var(--color-border-strong);\n  background: var(--color-surface);\n  color: var(--color-on-primary);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--text-sm);\n}\n.task-row.done[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  border-color: var(--color-success);\n}\n.task-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.task-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.task-row.done[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-6) 0;\n}\n/*# sourceMappingURL=tasks-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksListComponent, { className: "TasksListComponent", filePath: "src/app/features/tasks/tasks-list.component.ts", lineNumber: 16 });
})();
export {
  TasksListComponent
};
//# sourceMappingURL=tasks-list.component-67C5T5NG.js.map
