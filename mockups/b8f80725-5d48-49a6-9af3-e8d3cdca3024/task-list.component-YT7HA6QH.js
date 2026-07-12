import {
  TASK_STATUSES
} from "./chunk-PDA44FSW.js";
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
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-S3A6C3F5.js";

// src/app/features/tasks/task-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/tasks", a0];
function TaskListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(s_r1));
  }
}
function TaskListComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 11)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 2);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 2);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, t_r3.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3.subject);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.statusClass(t_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(t_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.priorityClass(t_r3.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.priorityLabel(t_r3.priority));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.dueDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.relatedTo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.owner);
  }
}
function TaskListComponent_ForEmpty_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td", 15)(2, "div", 16);
    \u0275\u0275text(3, "No tasks match your filters.");
    \u0275\u0275elementEnd()()();
  }
}
var TaskListComponent = class _TaskListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.statuses = TASK_STATUSES;
    this.params = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
    this.search = computed(() => this.params().get("q") ?? "");
    this.status = computed(() => this.params().get("status") ?? "");
    this.tasks = signal([
      { id: "t1", subject: "Follow up on renewal quote", status: "OPEN", priority: "HIGH", dueDate: "2026-07-15", relatedTo: "Acme Corporation", owner: "Demo Admin" },
      { id: "t2", subject: "Prepare data migration plan", status: "IN_PROGRESS", priority: "HIGH", dueDate: "2026-07-18", relatedTo: "Globex Data Migration", owner: "Priya Nair" },
      { id: "t3", subject: "Send proposal draft for review", status: "OPEN", priority: "NORMAL", dueDate: "2026-07-22", relatedTo: "Initech", owner: "Marco Diaz" },
      { id: "t4", subject: "Schedule onboarding call", status: "COMPLETED", priority: "NORMAL", dueDate: "2026-07-08", relatedTo: "Umbrella Health", owner: "Demo Admin" },
      { id: "t5", subject: "Update account contact details", status: "DEFERRED", priority: "LOW", dueDate: "2026-08-05", relatedTo: "Soylent Foods", owner: "Priya Nair" },
      { id: "t6", subject: "Draft SOW for field service add-on", status: "IN_PROGRESS", priority: "NORMAL", dueDate: "2026-07-25", relatedTo: "Acme Field Service Add-on", owner: "Marco Diaz" },
      { id: "t7", subject: "Confirm budget approval", status: "OPEN", priority: "HIGH", dueDate: "2026-07-30", relatedTo: "Stark Energy", owner: "Demo Admin" },
      { id: "t8", subject: "Log meeting notes", status: "COMPLETED", priority: "LOW", dueDate: "2026-07-05", relatedTo: "Wayne Media", owner: "Priya Nair" },
      { id: "t9", subject: "Review contract redlines", status: "IN_PROGRESS", priority: "HIGH", dueDate: "2026-08-12", relatedTo: "Hooli Cloud", owner: "Marco Diaz" },
      { id: "t10", subject: "Send thank-you note", status: "DEFERRED", priority: "LOW", dueDate: "2026-08-20", relatedTo: "Pied Piper", owner: "Demo Admin" }
    ]);
    this.filtered = computed(() => {
      const q = this.search().toLowerCase().trim();
      const st = this.status();
      return this.tasks().filter((t) => {
        const matchesQ = !q || t.subject.toLowerCase().includes(q) || t.relatedTo.toLowerCase().includes(q);
        const matchesSt = !st || t.status === st;
        return matchesQ && matchesSt;
      });
    });
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
  onSearch(value) {
    this.router.navigate([], { queryParams: { q: value || null }, queryParamsHandling: "merge" });
  }
  onStatus(value) {
    this.router.navigate([], { queryParams: { status: value || null }, queryParamsHandling: "merge" });
  }
  static {
    this.\u0275fac = function TaskListComponent_Factory(t) {
      return new (t || _TaskListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskListComponent, selectors: [["app-task-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 5, consts: [[1, "page"], [1, "page-head"], [1, "muted"], ["routerLink", "/tasks/new", 1, "btn", "btn-primary"], [1, "toolbar"], ["type", "search", "placeholder", "Search subject or related to\u2026", 1, "input", "search", 3, "input", "value"], [1, "select", 3, "change", "value"], ["value", ""], [3, "value"], [1, "card", "table-wrap"], [1, "data"], [3, "routerLink"], [1, "no-hover"], [1, "badge", 3, "ngClass"], [1, "mono", "muted"], ["colspan", "6"], [1, "empty-state"]], template: function TaskListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3);
        \u0275\u0275text(8, "+ New Task");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "input", 5);
        \u0275\u0275listener("input", function TaskListComponent_Template_input_input_10_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "select", 6);
        \u0275\u0275listener("change", function TaskListComponent_Template_select_change_11_listener($event) {
          return ctx.onStatus($event.target.value);
        });
        \u0275\u0275elementStart(12, "option", 7);
        \u0275\u0275text(13, "All statuses");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, TaskListComponent_For_15_Template, 2, 2, "option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "table", 10)(18, "thead")(19, "tr")(20, "th");
        \u0275\u0275text(21, "Subject");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "Priority");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Due date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th");
        \u0275\u0275text(29, "Related to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th");
        \u0275\u0275text(31, "Owner");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "tbody");
        \u0275\u0275repeaterCreate(33, TaskListComponent_For_34_Template, 16, 11, "tr", 11, _forTrack0, false, TaskListComponent_ForEmpty_35_Template, 4, 0, "tr", 12);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.filtered().length, " of ", ctx.tasks().length, " tasks");
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.search());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.status());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.filtered());
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=tasks.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskListComponent, { className: "TaskListComponent", filePath: "src/app/features/tasks/task-list.component.ts", lineNumber: 14 });
})();
export {
  TaskListComponent
};
//# sourceMappingURL=task-list.component-YT7HA6QH.js.map
