import {
  toSignal
} from "./chunk-PAUVK2ZQ.js";
import {
  ActivatedRoute,
  CommonModule,
  NgClass,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-S3A6C3F5.js";

// src/app/features/tasks/task-detail.component.ts
var _c0 = (a0) => ["/tasks", a0, "edit"];
function TaskDetailComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_47_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 15)(2, "h2");
    \u0275\u0275text(3, "Delete task?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "This will permanently remove ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " and cannot be undone.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "button", 17);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_47_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(11, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_47_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(13, "Delete task");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.task().subject);
  }
}
var TaskDetailComponent = class _TaskDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.pm = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
    this.qm = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
    this.id = computed(() => this.pm().get("id") ?? "");
    this.showDelete = computed(() => this.qm().get("modal") === "delete");
    this.tasks = signal([
      { id: "t1", subject: "Follow up on renewal quote", status: "OPEN", priority: "HIGH", dueDate: "2026-07-15", relatedTo: "Acme Corporation", owner: "Demo Admin" },
      { id: "t2", subject: "Prepare data migration plan", status: "IN_PROGRESS", priority: "HIGH", dueDate: "2026-07-18", relatedTo: "Globex Data Migration", owner: "Priya Nair" },
      { id: "t3", subject: "Send proposal draft for review", status: "OPEN", priority: "NORMAL", dueDate: "2026-07-22", relatedTo: "Initech", owner: "Marco Diaz" },
      { id: "t4", subject: "Schedule onboarding call", status: "COMPLETED", priority: "NORMAL", dueDate: "2026-07-08", relatedTo: "Umbrella Health", owner: "Demo Admin" }
    ]);
    this.task = computed(() => this.tasks().find((t) => t.id === this.id()) ?? this.tasks()[0]);
  }
  statusClass(s) {
    switch (s) {
      case "OPEN":
        return "badge-info";
      case "IN_PROGRESS":
        return "badge-warning";
      case "COMPLETED":
        return "badge-success";
      default:
        return "badge";
    }
  }
  statusLabel(s) {
    return s === "IN_PROGRESS" ? "In Progress" : s.charAt(0) + s.slice(1).toLowerCase();
  }
  priorityClass(p) {
    switch (p) {
      case "HIGH":
        return "badge-error";
      case "NORMAL":
        return "badge-info";
      default:
        return "badge";
    }
  }
  priorityLabel(p) {
    return p.charAt(0) + p.slice(1).toLowerCase();
  }
  askDelete() {
    this.router.navigate([], { queryParams: { modal: "delete" }, queryParamsHandling: "merge" });
  }
  cancelDelete() {
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  confirmDelete() {
    this.tasks.update((list) => list.filter((t) => t.id !== this.task().id));
    this.router.navigate(["/tasks"]);
  }
  static {
    this.\u0275fac = function TaskDetailComponent_Factory(t) {
      return new (t || _TaskDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskDetailComponent, selectors: [["app-task-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 16, consts: [[1, "page"], ["routerLink", "/tasks", 1, "crumb"], [1, "page-head"], [1, "muted"], [1, "badge", 3, "ngClass"], [1, "toolbar"], [1, "btn", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], [1, "card", "card-pad"], [1, "detail-grid"], [1, "detail-field"], [1, "k"], [1, "v"], [1, "v", "mono"], [1, "scrim-modal", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "modal", "card"], [1, "form-actions"], [1, "btn", 3, "click"]], template: function TaskDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "header", 2)(4, "div")(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3)(8, "span", 4);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " \xB7 ");
        \u0275\u0275elementStart(11, "span", 4);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 5)(14, "a", 6);
        \u0275\u0275text(15, "Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 7);
        \u0275\u0275listener("click", function TaskDetailComponent_Template_button_click_16_listener() {
          return ctx.askDelete();
        });
        \u0275\u0275text(17, "Delete");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "section", 8)(19, "div", 9)(20, "div", 10)(21, "span", 11);
        \u0275\u0275text(22, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 12)(24, "span", 4);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 10)(27, "span", 11);
        \u0275\u0275text(28, "Priority");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 12)(30, "span", 4);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 10)(33, "span", 11);
        \u0275\u0275text(34, "Due date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 13);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 10)(38, "span", 11);
        \u0275\u0275text(39, "Related to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 12);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 10)(43, "span", 11);
        \u0275\u0275text(44, "Owner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 12);
        \u0275\u0275text(46);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(47, TaskDetailComponent_Conditional_47_Template, 14, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.task().subject);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.statusClass(ctx.task().status));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.statusLabel(ctx.task().status));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.priorityClass(ctx.task().priority));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.priorityLabel(ctx.task().priority));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, ctx.task().id));
        \u0275\u0275advance(10);
        \u0275\u0275property("ngClass", ctx.statusClass(ctx.task().status));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.statusLabel(ctx.task().status));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", ctx.priorityClass(ctx.task().priority));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.priorityLabel(ctx.task().priority));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.task().dueDate);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.task().relatedTo);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.task().owner);
        \u0275\u0275advance();
        \u0275\u0275conditional(47, ctx.showDelete() ? 47 : -1);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=tasks.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskDetailComponent, { className: "TaskDetailComponent", filePath: "src/app/features/tasks/task-detail.component.ts", lineNumber: 14 });
})();
export {
  TaskDetailComponent
};
//# sourceMappingURL=task-detail.component-HUKLJ3QK.js.map
