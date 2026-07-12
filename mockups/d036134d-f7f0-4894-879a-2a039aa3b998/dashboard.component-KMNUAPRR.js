import {
  CommonModule,
  DatePipe,
  RouterLink,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UJBMV62H.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function DashboardComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", stat_r1.link);
    \u0275\u0275attribute("data-testid", "stat-" + stat_r1.key);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", stat_r1.accent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function DashboardComponent_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "No summary data.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r2.notes);
  }
}
function DashboardComponent_For_19_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Due ", \u0275\u0275pipeBind2(2, 1, task_r2.dueDate, "MMM d"), "");
  }
}
function DashboardComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 12)(1, "span", 21);
    \u0275\u0275text(2, "\u25CB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DashboardComponent_For_19_Conditional_6_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DashboardComponent_For_19_Conditional_7_Template, 3, 4, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(task_r2.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, task_r2.notes ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, task_r2.dueDate ? 7 : -1);
  }
}
function DashboardComponent_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275text(1, "No upcoming tasks. You're all caught up.");
    \u0275\u0275elementEnd();
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.stats = signal([
      { key: "accounts", label: "Accounts", value: 4, icon: "\u25C8", link: "/accounts", accent: "var(--color-info)" },
      { key: "contacts", label: "Contacts", value: 8, icon: "\u2630", link: "/contacts", accent: "var(--color-primary)" },
      { key: "openOpportunities", label: "Open Opportunities", value: 7, icon: "\u25A6", link: "/pipeline", accent: "var(--stage-proposal)" },
      { key: "upcomingTasks", label: "Upcoming Tasks", value: 3, icon: "\u2713", link: "/tasks", accent: "var(--color-warning)" }
    ]);
    this.upcomingTasks = signal([
      { id: "t1", title: "Send proposal to Globex", dueDate: "2026-07-13", status: "Open", notes: "Include Q3 pricing" },
      { id: "t2", title: "Follow up with Initech CFO", dueDate: "2026-07-15", status: "Open" },
      { id: "t3", title: "Prep discovery call \u2014 Umbrella Co", dueDate: "2026-07-16", status: "Open" }
    ]);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 2, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "stats-grid"], [1, "stat", "card", 3, "routerLink"], [1, "muted"], [1, "card", "widget"], [1, "widget-head"], [1, "widget-title"], ["routerLink", "/tasks", 1, "btn-link"], [1, "task-list"], [1, "task-row"], [1, "muted", "empty"], [1, "quick-links"], ["routerLink", "/accounts", 1, "ql", "card"], ["routerLink", "/pipeline", 1, "ql", "card"], ["routerLink", "/leads", 1, "ql", "card"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], [1, "task-check"], [1, "task-main"], [1, "task-title"], [1, "task-notes", "muted"], [1, "badge", "badge-warning"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Your workspace at a glance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "section", 4);
        \u0275\u0275repeaterCreate(8, DashboardComponent_For_9_Template, 7, 7, "a", 5, _forTrack0, false, DashboardComponent_ForEmpty_10_Template, 2, 0, "p", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "section", 7)(12, "div", 8)(13, "h2", 9);
        \u0275\u0275text(14, "Upcoming tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 10);
        \u0275\u0275text(16, "View all");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "ul", 11);
        \u0275\u0275repeaterCreate(18, DashboardComponent_For_19_Template, 8, 3, "li", 12, _forTrack1, false, DashboardComponent_ForEmpty_20_Template, 2, 0, "li", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "section", 14)(22, "a", 15);
        \u0275\u0275text(23, "Manage accounts \u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "a", 16);
        \u0275\u0275text(25, "Open pipeline \u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "a", 17);
        \u0275\u0275text(27, "Review leads \u2192");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.stats());
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.upcomingTasks());
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ["\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  padding: var(--space-4);\n  color: var(--color-text);\n  transition: transform 0.1s, box-shadow 0.15s;\n}\n.stat[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.stat[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: 700;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--color-text-muted);\n}\n.widget[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  margin-bottom: var(--space-5);\n}\n.widget-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-3);\n}\n.widget-title[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n.task-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.task-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 48px;\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.task-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.task-check[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n  font-size: var(--text-lg);\n}\n.task-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.task-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.task-notes[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-4) 0;\n}\n.quick-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: var(--space-4);\n}\n.ql[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  font-weight: 600;\n  color: var(--color-primary);\n}\n.ql[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-soft);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 22 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-KMNUAPRR.js.map
