import {
  AuthService
} from "./chunk-YAQBASOF.js";
import "./chunk-PG5KNRNN.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-7UZQWTM6.js";
import {
  CommonModule,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RDDARQHK.js";

// src/app/pages/projects-list/projects-list.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/projects", a0];
function ProjectsListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275text(1, "\uFF0B New project");
    \u0275\u0275elementEnd();
  }
}
function ProjectsListComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ProjectsListComponent_For_10_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(s_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filter() === s_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.label);
  }
}
function ProjectsListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading projects\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ProjectsListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function ProjectsListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275text(2, "\u{1F3D7}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No projects match this filter.");
    \u0275\u0275elementEnd()();
  }
}
function ProjectsListComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13)(1, "div", 14)(2, "h3", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 19)(14, "div", 20)(15, "span", 21);
    \u0275\u0275text(16, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 23);
    \u0275\u0275element(20, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 25);
    \u0275\u0275text(22, "Open project \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, p_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.statusClass(p_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(p_r4.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r4.phaseCount, " phases");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", p_r4.taskCount, " tasks");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", p_r4.progressPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", p_r4.progressPct, "%");
  }
}
function ProjectsListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ProjectsListComponent_Conditional_14_For_2_Template, 23, 12, "a", 13, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.visible());
  }
}
var ProjectsListComponent = class _ProjectsListComponent {
  constructor(auth, route, router) {
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.projects = signal([
      { id: "p1", name: "Riverside Community Center", status: "active", phaseCount: 3, taskCount: 8, progressPct: 46 },
      { id: "p2", name: "Harbor Point Residential Tower", status: "active", phaseCount: 5, taskCount: 21, progressPct: 62 },
      { id: "p3", name: "Oakwood Elementary Retrofit", status: "planning", phaseCount: 4, taskCount: 12, progressPct: 8 },
      { id: "p4", name: "Meridian Logistics Warehouse", status: "on_hold", phaseCount: 3, taskCount: 9, progressPct: 34 },
      { id: "p5", name: "Cedar Falls Pedestrian Bridge", status: "complete", phaseCount: 2, taskCount: 6, progressPct: 100 }
    ]);
    this.filter = signal("all");
    this.statuses = [
      { key: "all", label: "All" },
      { key: "planning", label: "Planning" },
      { key: "active", label: "Active" },
      { key: "on_hold", label: "On hold" },
      { key: "complete", label: "Complete" }
    ];
    this.visible = computed(() => {
      const f = this.filter();
      const all = this.projects();
      return f === "all" ? all : all.filter((p) => p.status === f);
    });
  }
  ngOnInit() {
    const s = this.route.snapshot.queryParamMap.get("status");
    if (s)
      this.filter.set(s);
  }
  setFilter(status) {
    this.filter.set(status);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { status: status === "all" ? null : status },
      queryParamsHandling: "merge"
    });
  }
  statusLabel(s) {
    return { planning: "Planning", active: "Active", on_hold: "On hold", complete: "Complete" }[s];
  }
  statusClass(s) {
    return {
      planning: "badge-muted",
      active: "badge-info",
      on_hold: "badge-warn",
      complete: "badge-ok"
    }[s];
  }
  static {
    this.\u0275fac = function ProjectsListComponent_Factory(t) {
      return new (t || _ProjectsListComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsListComponent, selectors: [["app-projects-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 2, consts: [[1, "page"], [1, "page-head"], [1, "spacer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"], [1, "sub"], [1, "filters", "no-print"], ["type", "button", 1, "chip", 3, "active"], [1, "state"], ["type", "button", 1, "chip", 3, "click"], [1, "spinner"], [1, "state-icon"], [1, "state-error"], [1, "grid"], [1, "card", "project-card", 3, "routerLink"], [1, "pc-head"], [1, "pc-name"], [1, "badge"], [1, "pc-meta"], [1, "dot"], [1, "pc-progress"], [1, "pc-progress-head"], [1, "muted"], [1, "pc-pct"], [1, "bar"], [1, "bar-fill"], [1, "pc-open"]], template: function ProjectsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275template(5, ProjectsListComponent_Conditional_5_Template, 2, 0, "button", 3);
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, "Site plans, schedules and budgets across your active builds.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275repeaterCreate(9, ProjectsListComponent_For_10_Template, 2, 3, "button", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, ProjectsListComponent_Conditional_11_Template, 4, 0, "div", 7)(12, ProjectsListComponent_Conditional_12_Template, 5, 1)(13, ProjectsListComponent_Conditional_13_Template, 5, 0)(14, ProjectsListComponent_Conditional_14_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.auth.isPlanner() ? 5 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.loading() ? 11 : ctx.error() ? 12 : ctx.visible().length === 0 ? 13 : 14);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-5);\n}\n.chip[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 var(--space-4);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-pill);\n  background: var(--color-surface);\n  color: var(--color-ink-soft);\n  font-family: inherit;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: background .15s, border-color .15s;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n}\n.chip.active[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n  border-color: var(--color-brand);\n  color: var(--color-text-inverse);\n}\n.project-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  padding: var(--space-5);\n  color: inherit;\n  transition:\n    transform .08s,\n    box-shadow .15s,\n    border-color .15s;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n}\n.project-card[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.pc-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n}\n.pc-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  flex: 1;\n}\n.pc-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n}\n.pc-meta[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: var(--color-faint);\n}\n.pc-progress[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.pc-progress-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--fs-sm);\n  margin-bottom: var(--space-1);\n}\n.pc-pct[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: var(--radius-pill);\n  background: var(--color-surface-inset);\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: var(--radius-pill);\n  background: var(--color-accent);\n}\n.pc-open[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  color: var(--color-brand);\n}\n/*# sourceMappingURL=projects-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsListComponent, { className: "ProjectsListComponent", filePath: "src/app/pages/projects-list/projects-list.component.ts", lineNumber: 22 });
})();
export {
  ProjectsListComponent
};
//# sourceMappingURL=projects-list.component-DLVDFX3I.js.map
