import {
  toSignal
} from "./chunk-6BXBCN5T.js";
import {
  SiteviewService
} from "./chunk-S3M52NQH.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-VMQX45X4.js";
import {
  CommonModule,
  computed,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VZ6O3Y2G.js";

// src/app/features/project/project-shell.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function ProjectShellComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2, "Project not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 2);
    \u0275\u0275text(4, "Back to projects");
    \u0275\u0275elementEnd()();
  }
}
function ProjectShellComponent_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", t_r1.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.label);
  }
}
function ProjectShellComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "a", 4);
    \u0275\u0275text(2, "\u2190 Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "nav", 5);
    \u0275\u0275repeaterCreate(6, ProjectShellComponent_Conditional_1_For_7_Template, 5, 3, "a", 6, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275element(9, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.project()) == null ? null : tmp_1_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.tabs());
  }
}
var ProjectShellComponent = class _ProjectShellComponent {
  constructor(sv, route) {
    this.sv = sv;
    this.route = route;
    this.projectId = toSignal(this.route.paramMap.pipe(map((p) => p.get("id") ?? "")), { initialValue: this.route.snapshot.paramMap.get("id") ?? "" });
    this.project = computed(() => this.sv.getProject(this.projectId()));
    this.notFound = computed(() => !this.project());
    this.tabs = signal([
      { path: "dashboard", label: "Dashboard", icon: "\u{1F4CA}" },
      { path: "schedule", label: "Schedule", icon: "\u{1F4C5}" },
      { path: "milestones", label: "Milestones", icon: "\u{1F6A9}" },
      { path: "budget", label: "Budget", icon: "\u{1F4B0}" },
      { path: "siteplan", label: "Site Plan", icon: "\u{1F5FA}\uFE0F" }
    ]);
  }
  static {
    this.\u0275fac = function ProjectShellComponent_Factory(t) {
      return new (t || _ProjectShellComponent)(\u0275\u0275directiveInject(SiteviewService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectShellComponent, selectors: [["app-project-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "state", "card"], [1, "empty-title"], ["routerLink", "/projects", 1, "btn", "btn-primary"], [1, "proj-head"], ["routerLink", "/projects", 1, "back"], [1, "tabs", "scroll-y"], ["routerLinkActive", "active", 3, "routerLink"], [1, "tab-body"], [1, "tab-ico"], [1, "tab-label"]], template: function ProjectShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectShellComponent_Conditional_0_Template, 5, 0, "div", 0)(1, ProjectShellComponent_Conditional_1_Template, 10, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.notFound() ? 0 : 1);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.proj-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: var(--fs-sm);\n  color: var(--color-text-muted);\n  margin-bottom: var(--space-2);\n}\n.proj-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-1);\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: var(--space-5);\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n  -webkit-overflow-scrolling: touch;\n}\n.tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-height: 44px;\n  padding: 0 var(--space-4);\n  white-space: nowrap;\n  color: var(--color-text-muted);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  border-bottom: 2px solid transparent;\n}\n.tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n  text-decoration: none;\n}\n.tabs[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  border-bottom-color: var(--color-accent);\n}\n.tab-ico[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n}\n.state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: var(--space-2);\n}\n@media (max-width: 768px) {\n  .tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0 var(--space-3);\n  }\n  .tab-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .tab-ico[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    min-width: 56px;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=project-shell.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectShellComponent, { className: "ProjectShellComponent", filePath: "src/app/features/project/project-shell.component.ts", lineNumber: 15 });
})();
export {
  ProjectShellComponent
};
//# sourceMappingURL=project-shell.component-D6HMSPUB.js.map
