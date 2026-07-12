import {
  toSignal
} from "./chunk-6BXBCN5T.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7F3Y7YLT.js";
import {
  AuthService
} from "./chunk-CVPORU2Z.js";
import {
  SiteviewService
} from "./chunk-S3M52NQH.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-VMQX45X4.js";
import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VZ6O3Y2G.js";

// src/app/features/projects/projects-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/projects", a0];
function ProjectsListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ProjectsListComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1, "+ New project");
    \u0275\u0275elementEnd();
  }
}
function ProjectsListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading projects\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProjectsListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 7);
    \u0275\u0275text(2, "No projects yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2);
    \u0275\u0275text(4, "Projects will appear here once created.");
    \u0275\u0275elementEnd()();
  }
}
function ProjectsListComponent_Conditional_10_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.hazardCount(p_r3.id), " hazard", ctx_r1.hazardCount(p_r3.id) === 1 ? "" : "s", "");
  }
}
function ProjectsListComponent_Conditional_10_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275listener("click", function ProjectsListComponent_Conditional_10_For_2_Conditional_14_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(p_r3.id, p_r3.name, $event));
    });
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275listener("click", function ProjectsListComponent_Conditional_10_For_2_Conditional_14_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(p_r3.id, $event));
    });
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function ProjectsListComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "div", 10)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProjectsListComponent_Conditional_10_For_2_Conditional_4_Template, 2, 2, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12)(6, "span")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " phases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span")(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " tasks");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ProjectsListComponent_Conditional_10_For_2_Conditional_14_Template, 5, 0, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, p_r3.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r1.hazardCount(p_r3.id) > 0 ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.phaseCount(p_r3.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.taskCount(p_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(14, ctx_r1.auth.isPlanner() ? 14 : -1);
  }
}
function ProjectsListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, ProjectsListComponent_Conditional_10_For_2_Template, 15, 8, "a", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.projects());
  }
}
function ProjectsListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ProjectsListComponent_Conditional_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function ProjectsListComponent_Conditional_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "label", 19);
    \u0275\u0275text(6, "Project name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectsListComponent_Conditional_11_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.draftName, $event) || (ctx_r1.draftName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function ProjectsListComponent_Conditional_11_Template_input_focus_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.syncDraft());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "button", 22);
    \u0275\u0275listener("click", function ProjectsListComponent_Conditional_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 23);
    \u0275\u0275listener("click", function ProjectsListComponent_Conditional_11_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(12, "Save");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editId() ? "Edit project" : "New project");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draftName);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.draftName.trim());
  }
}
var ProjectsListComponent = class _ProjectsListComponent {
  constructor(auth, sv, router, route) {
    this.auth = auth;
    this.sv = sv;
    this.router = router;
    this.route = route;
    this.qp = toSignal(this.route.queryParamMap, { requireSync: true });
    this.projects = this.sv.projects;
    this.loading = signal(false);
    this.modalOpen = computed(() => this.qp().get("modal") === "project");
    this.editId = computed(() => this.qp().get("id"));
    this.draftName = "";
  }
  phaseCount(projectId) {
    return this.sv.phasesForProject(projectId).length;
  }
  taskCount(projectId) {
    return this.sv.tasksForProject(projectId).length;
  }
  hazardCount(projectId) {
    return this.sv.getDashboard(projectId).openHazards;
  }
  openCreate() {
    this.draftName = "";
    this.router.navigate([], { queryParams: { modal: "project" }, queryParamsHandling: "merge" });
  }
  openEdit(id, name, ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.draftName = name;
    this.router.navigate([], { queryParams: { modal: "project", id }, queryParamsHandling: "merge" });
  }
  closeModal() {
    this.router.navigate([], { queryParams: { modal: null, id: null }, queryParamsHandling: "merge" });
  }
  save() {
    const name = this.draftName.trim();
    if (!name)
      return;
    const id = this.editId();
    if (id)
      this.sv.updateProject(id, name);
    else
      this.sv.createProject(name);
    this.closeModal();
  }
  remove(id, ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.sv.deleteProject(id);
  }
  // keep draftName synced when opening edit modal via deep-link
  syncDraft() {
    const id = this.editId();
    if (id && !this.draftName) {
      this.draftName = this.sv.getProject(id)?.name ?? "";
    }
  }
  static {
    this.\u0275fac = function ProjectsListComponent_Factory(t) {
      return new (t || _ProjectsListComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SiteviewService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsListComponent, selectors: [["app-projects-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [[1, "page"], [1, "page-head"], [1, "muted"], [1, "btn", "btn-accent"], [1, "state", "card"], [1, "modal-backdrop"], [1, "btn", "btn-accent", 3, "click"], [1, "empty-title"], [1, "grid"], [1, "project-card", "card", 3, "routerLink"], [1, "pc-head"], [1, "badge", "badge-danger"], [1, "pc-stats"], [1, "pc-actions"], [1, "btn", "btn-ghost", "sm", 3, "click"], [1, "btn", "btn-ghost", "sm", "danger", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", "card", 3, "click"], [1, "field"], ["for", "pname"], ["id", "pname", "type", "text", "placeholder", "e.g. Riverside Tower", 3, "ngModelChange", "focus", "ngModel"], [1, "modal-actions"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function ProjectsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Construction projects you have access to");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ProjectsListComponent_Conditional_7_Template, 2, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, ProjectsListComponent_Conditional_8_Template, 2, 0, "div", 4)(9, ProjectsListComponent_Conditional_9_Template, 5, 0)(10, ProjectsListComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, ProjectsListComponent_Conditional_11_Template, 13, 3, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.auth.isPlanner() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.loading() ? 8 : ctx.projects().length === 0 ? 9 : 10);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(11, ctx.modalOpen() ? 11 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: var(--space-1);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: var(--space-4);\n}\n.project-card[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  transition: box-shadow 0.15s ease, transform 0.05s ease;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  text-decoration: none;\n}\n.project-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.995);\n}\n.pc-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.pc-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  color: var(--color-primary);\n}\n.pc-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n}\n.pc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  margin-top: auto;\n}\n.btn.sm[_ngcontent-%COMP%] {\n  min-height: 38px;\n  padding: 0 0.8rem;\n  font-size: var(--fs-xs);\n}\n.btn.sm.danger[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n  background: rgba(27, 36, 48, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--space-5);\n}\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  margin-bottom: var(--space-4);\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n@media (max-width: 768px) {\n  .modal-backdrop[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    padding: 0;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-width: none;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n    padding-bottom: calc(var(--space-5) + var(--safe-bottom));\n  }\n}\n/*# sourceMappingURL=projects-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsListComponent, { className: "ProjectsListComponent", filePath: "src/app/features/projects/projects-list.component.ts", lineNumber: 16 });
})();
export {
  ProjectsListComponent
};
//# sourceMappingURL=projects-list.component-7SB4XZMV.js.map
