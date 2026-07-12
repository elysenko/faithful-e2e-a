import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-FI25ZY7O.js";
import {
  ApiService,
  errorMessage
} from "./chunk-YJSS5FSF.js";
import {
  ChangeDetectionStrategy,
  Component,
  __async,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UEP77ZUH.js";

// src/app/tasks/tasks.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TasksComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Loading tasks\u2026");
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "No tasks yet. Add your first follow-up.");
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_Conditional_10_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 18)(2, "button", 19);
    \u0275\u0275listener("click", function TasksComponent_Conditional_10_For_15_Template_button_click_2_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggle(t_r2.id));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 20)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 23)(12, "span", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275classProp("done", t_r2.status === "Completed");
    \u0275\u0275attribute("data-testid", "task-" + t_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-testid", "task-toggle-" + t_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2.status === "Completed" ? "\u2713" : "\u25CB", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.relatedTo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.dueDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.status);
  }
}
function TasksComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 16)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th");
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Related to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, TasksComponent_Conditional_10_For_15_Template, 14, 9, "tr", 17, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.tasks());
  }
}
function TasksComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
var TasksComponent = class _TasksComponent {
  constructor() {
    this.api = inject(ApiService);
    this.loading = signal(true);
    this.error = signal(null);
    this.saving = signal(false);
    this.tasks = signal([]);
    this.title = signal("");
    this.dueDate = signal("");
    this.relatedTo = signal("");
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loading.set(true);
      try {
        this.tasks.set(yield this.api.listTasks());
      } catch (err) {
        this.error.set(errorMessage(err, "Could not load tasks."));
      } finally {
        this.loading.set(false);
      }
    });
  }
  /**
   * Completion is toggled locally — the backend exposes task create/list but
   * no update-status procedure, so this is an in-session UI state only.
   */
  toggle(id) {
    this.tasks.update((list) => list.map((t) => t.id === id ? __spreadProps(__spreadValues({}, t), { status: t.status === "Completed" ? "Open" : "Completed" }) : t));
  }
  create() {
    return __async(this, null, function* () {
      this.error.set(null);
      if (!this.title().trim() || !this.dueDate()) {
        this.error.set("Title and a due date are required.");
        return;
      }
      this.saving.set(true);
      try {
        const created = yield this.api.createTask({
          title: this.title().trim(),
          dueDate: this.dueDate()
        });
        const task = __spreadProps(__spreadValues({}, created), { relatedTo: this.relatedTo().trim() || "General" });
        this.tasks.update((list) => [task, ...list]);
        this.title.set("");
        this.dueDate.set("");
        this.relatedTo.set("");
      } catch (err) {
        this.error.set(errorMessage(err, "Could not create the task."));
      } finally {
        this.saving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function TasksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], decls: 29, vars: 5, consts: [[1, "page-header"], [1, "muted"], [1, "list-layout", "with-form"], ["data-testid", "tasks-loading", 1, "muted"], ["data-testid", "tasks-empty", 1, "empty-state"], [1, "table-wrap"], [1, "create-form", "card", 3, "ngSubmit"], ["data-testid", "tasks-error", 1, "error-text"], [1, "form-field"], ["for", "title"], ["id", "title", "name", "title", "placeholder", "Call Acme about renewal", "data-testid", "task-title", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "due"], ["id", "due", "type", "date", "name", "due", "data-testid", "task-due", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "related"], ["id", "related", "name", "related", "placeholder", "Acme Corp", "data-testid", "task-related", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "task-create", 1, "btn", "btn-primary", "block"], ["data-testid", "tasks-list", 1, "table"], [3, "done"], ["data-label", "Done"], ["type", "button", "aria-label", "Toggle complete", 1, "check-btn", 3, "click"], ["data-label", "Task"], ["data-label", "Related to"], ["data-label", "Due"], ["data-label", "Status"], [1, "badge"]], template: function TasksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Your follow-ups and to-dos.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div");
        \u0275\u0275template(8, TasksComponent_Conditional_8_Template, 2, 0, "p", 3)(9, TasksComponent_Conditional_9_Template, 2, 0, "div", 4)(10, TasksComponent_Conditional_10_Template, 16, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 6);
        \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_11_listener() {
          return ctx.create();
        });
        \u0275\u0275elementStart(12, "h2");
        \u0275\u0275text(13, "New task");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, TasksComponent_Conditional_14_Template, 2, 1, "p", 7);
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 9);
        \u0275\u0275text(17, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275listener("ngModelChange", function TasksComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.title.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 8)(20, "label", 11);
        \u0275\u0275text(21, "Due date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 12);
        \u0275\u0275listener("ngModelChange", function TasksComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.dueDate.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 8)(24, "label", 13);
        \u0275\u0275text(25, "Related to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 14);
        \u0275\u0275listener("ngModelChange", function TasksComponent_Template_input_ngModelChange_26_listener($event) {
          return ctx.relatedTo.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "button", 15);
        \u0275\u0275text(28, " Create task ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.loading() ? 8 : ctx.tasks().length === 0 ? 9 : 10);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.error() ? 14 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.title());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.dueDate());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.relatedTo());
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.list-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 900px) {\n  .list-layout.with-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 320px;\n    align-items: start;\n  }\n  .create-form[_ngcontent-%COMP%] {\n    position: sticky;\n    top: var(--space-4);\n  }\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.row-link[_ngcontent-%COMP%] {\n  color: var(--color-primary-dark);\n  font-weight: 600;\n}\n.create-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: var(--space-4);\n}\n.amount[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.check-btn[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: transparent;\n  color: var(--color-primary);\n  font-size: 1.2rem;\n  cursor: pointer;\n}\ntr.done[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n}\n.stage-badge[_ngcontent-%COMP%] {\n  color: var(--color-text-inverse);\n}\n.stage-prospecting[_ngcontent-%COMP%] {\n  background: var(--stage-prospecting);\n}\n.stage-qualification[_ngcontent-%COMP%] {\n  background: var(--stage-qualification);\n}\n.stage-proposal[_ngcontent-%COMP%] {\n  background: var(--stage-proposal);\n}\n.stage-negotiation[_ngcontent-%COMP%] {\n  background: var(--stage-negotiation);\n}\n.stage-closedwon[_ngcontent-%COMP%] {\n  background: var(--stage-won);\n}\n.stage-closedlost[_ngcontent-%COMP%] {\n  background: var(--stage-lost);\n}\n@media (max-width: 640px) {\n  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: var(--space-2) 0;\n    border-bottom: 1px solid var(--color-border);\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: none;\n    padding: var(--space-1) var(--space-4);\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    display: inline-block;\n    min-width: 96px;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    color: var(--color-text-muted);\n  }\n}\n/*# sourceMappingURL=list.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksComponent, [{
    type: Component,
    args: [{ selector: "app-tasks", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-header">
  <div>
    <h1>Tasks</h1>
    <p class="muted">Your follow-ups and to-dos.</p>
  </div>
</div>

<div class="list-layout with-form">
  <div>
    @if (loading()) {
      <p class="muted" data-testid="tasks-loading">Loading tasks\u2026</p>
    } @else if (tasks().length === 0) {
      <div class="empty-state" data-testid="tasks-empty">No tasks yet. Add your first follow-up.</div>
    } @else {
      <div class="table-wrap">
        <table class="table" data-testid="tasks-list">
          <thead>
            <tr><th></th><th>Task</th><th>Related to</th><th>Due</th><th>Status</th></tr>
          </thead>
          <tbody>
            @for (t of tasks(); track t.id) {
              <tr [attr.data-testid]="'task-' + t.id" [class.done]="t.status === 'Completed'">
                <td data-label="Done">
                  <button class="check-btn" type="button" (click)="toggle(t.id)"
                    [attr.data-testid]="'task-toggle-' + t.id" aria-label="Toggle complete">
                    {{ t.status === 'Completed' ? '\u2713' : '\u25CB' }}
                  </button>
                </td>
                <td data-label="Task"><strong>{{ t.title }}</strong></td>
                <td data-label="Related to">{{ t.relatedTo }}</td>
                <td data-label="Due">{{ t.dueDate }}</td>
                <td data-label="Status"><span class="badge">{{ t.status }}</span></td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>

  <form class="create-form card" (ngSubmit)="create()">
    <h2>New task</h2>
    @if (error()) {
      <p class="error-text" data-testid="tasks-error">{{ error() }}</p>
    }
    <div class="form-field">
      <label for="title">Title</label>
      <input id="title" class="input" name="title" placeholder="Call Acme about renewal"
        [ngModel]="title()" (ngModelChange)="title.set($event)" data-testid="task-title" />
    </div>
    <div class="form-field">
      <label for="due">Due date</label>
      <input id="due" class="input" type="date" name="due"
        [ngModel]="dueDate()" (ngModelChange)="dueDate.set($event)" data-testid="task-due" />
    </div>
    <div class="form-field">
      <label for="related">Related to</label>
      <input id="related" class="input" name="related" placeholder="Acme Corp"
        [ngModel]="relatedTo()" (ngModelChange)="relatedTo.set($event)" data-testid="task-related" />
    </div>
    <button class="btn btn-primary block" type="submit" data-testid="task-create">
      Create task
    </button>
  </form>
</div>
`, styles: ["/* src/app/shared/list.css */\n.list-layout {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 900px) {\n  .list-layout.with-form {\n    grid-template-columns: 1fr 320px;\n    align-items: start;\n  }\n  .create-form {\n    position: sticky;\n    top: var(--space-4);\n  }\n}\n.table-wrap {\n  overflow-x: auto;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.row-link {\n  color: var(--color-primary-dark);\n  font-weight: 600;\n}\n.create-form h2 {\n  font-size: 1rem;\n  margin-bottom: var(--space-4);\n}\n.amount {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.check-btn {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: transparent;\n  color: var(--color-primary);\n  font-size: 1.2rem;\n  cursor: pointer;\n}\ntr.done td strong {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n}\n.stage-badge {\n  color: var(--color-text-inverse);\n}\n.stage-prospecting {\n  background: var(--stage-prospecting);\n}\n.stage-qualification {\n  background: var(--stage-qualification);\n}\n.stage-proposal {\n  background: var(--stage-proposal);\n}\n.stage-negotiation {\n  background: var(--stage-negotiation);\n}\n.stage-closedwon {\n  background: var(--stage-won);\n}\n.stage-closedlost {\n  background: var(--stage-lost);\n}\n@media (max-width: 640px) {\n  .table thead {\n    display: none;\n  }\n  .table,\n  .table tbody,\n  .table tr,\n  .table td {\n    display: block;\n    width: 100%;\n  }\n  .table tr {\n    padding: var(--space-2) 0;\n    border-bottom: 1px solid var(--color-border);\n  }\n  .table td {\n    border: none;\n    padding: var(--space-1) var(--space-4);\n  }\n  .table td::before {\n    content: attr(data-label);\n    display: inline-block;\n    min-width: 96px;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    color: var(--color-text-muted);\n  }\n}\n/*# sourceMappingURL=list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/tasks/tasks.component.ts", lineNumber: 20 });
})();
export {
  TasksComponent
};
//# sourceMappingURL=chunk-IOHFKXR5.js.map
