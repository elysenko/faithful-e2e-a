import {
  ApiService
} from "./chunk-NVB2XA36.js";
import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  __async,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-C4FZZUVO.js";

// src/app/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Loading summary\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", s_r1.link);
    \u0275\u0275attribute("data-testid", "stat-" + s_r1.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.label);
  }
}
function DashboardComponent_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "No upcoming tasks. You're all caught up.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_7_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 11)(1, "span", 12);
    \u0275\u0275text(2, "\u25CB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 1);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 14)(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 1);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(task_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r2.relatedTo);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-warn", task_r2.status !== "Completed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Due ", task_r2.dueDate, "");
  }
}
function DashboardComponent_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_7_Conditional_6_For_2_Template, 13, 6, "li", 11, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.upcomingTasks());
  }
}
function DashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_7_For_2_Template, 7, 5, "a", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 5);
    \u0275\u0275text(4, "Upcoming tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DashboardComponent_Conditional_7_Conditional_5_Template, 2, 0, "div", 6)(6, DashboardComponent_Conditional_7_Conditional_6_Template, 3, 0, "ul", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.stats());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.upcomingTasks().length === 0 ? 5 : 6);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.api = inject(ApiService);
    this.loading = signal(true);
    this.summary = signal({
      accounts: 0,
      contacts: 0,
      openOpportunities: 0,
      upcomingTasks: 0
    });
    this.upcomingTasks = signal([]);
    this.stats = computed(() => {
      const s = this.summary();
      return [
        { key: "accounts", label: "Accounts", value: s.accounts, icon: "\u{1F3E2}", link: "/accounts" },
        { key: "contacts", label: "Contacts", value: s.contacts, icon: "\u{1F464}", link: "/contacts" },
        { key: "opps", label: "Open Opportunities", value: s.openOpportunities, icon: "\u{1F4B0}", link: "/opportunities" },
        { key: "tasks", label: "Upcoming Tasks", value: s.upcomingTasks, icon: "\u2713", link: "/tasks" }
      ];
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loading.set(true);
      try {
        const [summary, tasks] = yield Promise.all([
          this.api.dashboardSummary(),
          this.api.upcomingTasks()
        ]);
        this.summary.set(summary);
        this.upcomingTasks.set(tasks);
      } catch {
      } finally {
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 8, vars: 1, consts: [[1, "page-header"], [1, "muted"], ["data-testid", "dashboard-loading", 1, "muted"], ["data-testid", "stat-cards", 1, "stat-grid"], [1, "stat-card", "card", 3, "routerLink"], [1, "section-title"], ["data-testid", "tasks-empty", 1, "empty-state"], ["data-testid", "upcoming-tasks", 1, "task-list", "card"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label", "muted"], [1, "task-row"], [1, "task-check"], [1, "task-body"], [1, "task-due"], [1, "badge"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Your pipeline at a glance.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, DashboardComponent_Conditional_6_Template, 2, 0, "p", 2)(7, DashboardComponent_Conditional_7_Template, 7, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading() ? 6 : 7);
      }
    }, dependencies: [RouterLink], styles: ["\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  padding: var(--space-4);\n  transition: box-shadow 0.15s, transform 0.05s;\n}\n.stat-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n  box-shadow: var(--shadow-md);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--color-primary-dark);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.task-list[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.task-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 56px;\n  padding: var(--space-3) var(--space-4);\n  border-bottom: 1px solid var(--color-border);\n}\n.task-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.task-check[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: 1.2rem;\n}\n.task-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.task-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.task-due[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n  text-align: right;\n}\n.badge-warn[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n}\n@media (max-width: 480px) {\n  .task-value[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-header">
  <div>
    <h1>Dashboard</h1>
    <p class="muted">Your pipeline at a glance.</p>
  </div>
</div>

@if (loading()) {
  <p class="muted" data-testid="dashboard-loading">Loading summary\u2026</p>
} @else {
  <section class="stat-grid" data-testid="stat-cards">
    @for (s of stats(); track s.key) {
      <a class="stat-card card" [routerLink]="s.link" [attr.data-testid]="'stat-' + s.key">
        <span class="stat-icon">{{ s.icon }}</span>
        <span class="stat-value">{{ s.value }}</span>
        <span class="stat-label muted">{{ s.label }}</span>
      </a>
    }
  </section>

  <h2 class="section-title">Upcoming tasks</h2>
  @if (upcomingTasks().length === 0) {
    <div class="empty-state" data-testid="tasks-empty">No upcoming tasks. You're all caught up.</div>
  } @else {
    <ul class="task-list card" data-testid="upcoming-tasks">
      @for (task of upcomingTasks(); track task.id) {
        <li class="task-row">
          <span class="task-check">\u25CB</span>
          <span class="task-body">
            <strong>{{ task.title }}</strong>
            <small class="muted">{{ task.relatedTo }}</small>
          </span>
          <span class="task-due">
            <span class="badge" [class.badge-warn]="task.status !== 'Completed'">{{ task.status }}</span>
            <small class="muted">Due {{ task.dueDate }}</small>
          </span>
        </li>
      }
    </ul>
  }
}
`, styles: ["/* src/app/dashboard/dashboard.component.css */\n.stat-card {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  padding: var(--space-4);\n  transition: box-shadow 0.15s, transform 0.05s;\n}\n.stat-card:active {\n  transform: scale(0.99);\n  box-shadow: var(--shadow-md);\n}\n.stat-icon {\n  font-size: 1.4rem;\n}\n.stat-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--color-primary-dark);\n}\n.stat-label {\n  font-size: 0.85rem;\n}\n.task-list {\n  padding: 0;\n  overflow: hidden;\n}\n.task-row {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 56px;\n  padding: var(--space-3) var(--space-4);\n  border-bottom: 1px solid var(--color-border);\n}\n.task-row:last-child {\n  border-bottom: none;\n}\n.task-check {\n  color: var(--color-primary);\n  font-size: 1.2rem;\n}\n.task-body {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.task-body small {\n  font-size: 0.8rem;\n}\n.task-due {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n  text-align: right;\n}\n.badge-warn {\n  background: var(--color-warning);\n}\n@media (max-width: 480px) {\n  .task-value {\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/dashboard/dashboard.component.ts", lineNumber: 21 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-VVESROR5.js.map
