import {
  AuthService
} from "./chunk-YAQBASOF.js";
import "./chunk-PG5KNRNN.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-7UZQWTM6.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵtextInterpolate3
} from "./chunk-RDDARQHK.js";

// src/app/pages/project-detail/project-detail.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function ProjectDetailComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_3_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit());
    });
    \u0275\u0275text(1, "\u270E Edit");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "View only");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 7)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8)(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, ProjectDetailComponent_Conditional_3_Conditional_9_Template, 2, 0, "button", 11)(10, ProjectDetailComponent_Conditional_3_Conditional_10_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pr_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pr_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusClass(pr_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(pr_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", pr_r3.phaseCount, " phases \xB7 ", pr_r3.taskCount, " tasks \xB7 ", pr_r3.progressPct, "% complete");
    \u0275\u0275advance();
    \u0275\u0275conditional(9, ctx_r1.auth.isPlanner() ? 9 : 10);
  }
}
function ProjectDetailComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", t_r4.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.label);
  }
}
function ProjectDetailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "h2");
    \u0275\u0275text(4, "Edit project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 20)(8, "label", 21);
    \u0275\u0275text(9, "Project name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20)(12, "label", 23);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 24)(15, "option", 25);
    \u0275\u0275text(16, "Planning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 26);
    \u0275\u0275text(18, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 27);
    \u0275\u0275text(20, "On hold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 28);
    \u0275\u0275text(22, "Complete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 29)(24, "button", 30);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_9_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(25, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 31);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_9_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(27, "Save changes");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("value", (tmp_1_0 = ctx_r1.project()) == null ? null : tmp_1_0.name);
  }
}
var ProjectDetailComponent = class _ProjectDetailComponent {
  constructor(auth, route, router) {
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.projectId = signal("");
    this.modal = signal(null);
    this.project = signal({
      id: "p1",
      name: "Riverside Community Center",
      status: "active",
      phaseCount: 3,
      taskCount: 8,
      progressPct: 46
    });
    this.tabs = [
      { label: "Dashboard", icon: "\u{1F4CA}", path: "dashboard" },
      { label: "Schedule", icon: "\u{1F4C5}", path: "schedule" },
      { label: "Milestones", icon: "\u{1F6A9}", path: "milestones" },
      { label: "Budget", icon: "\u{1F4B0}", path: "budget" },
      { label: "Site Plan", icon: "\u{1F5FA}\uFE0F", path: "siteplan" }
    ];
  }
  ngOnInit() {
    this.route.paramMap.subscribe((p) => this.projectId.set(p.get("id") ?? ""));
    this.route.queryParamMap.subscribe((q) => this.modal.set(q.get("modal")));
  }
  openEdit() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: "edit" },
      queryParamsHandling: "merge"
    });
  }
  closeModal() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: null },
      queryParamsHandling: "merge"
    });
  }
  statusLabel(s) {
    return { planning: "Planning", active: "Active", on_hold: "On hold", complete: "Complete" }[s];
  }
  statusClass(s) {
    return { planning: "badge-muted", active: "badge-info", on_hold: "badge-warn", complete: "badge-ok" }[s];
  }
  static {
    this.\u0275fac = function ProjectDetailComponent_Factory(t) {
      return new (t || _ProjectDetailComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailComponent, selectors: [["app-project-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "page", "detail-page"], ["routerLink", "/projects", 1, "back-link"], [1, "detail-head"], ["aria-label", "Project views", 1, "tabs", "scroll-x"], ["routerLinkActive", "active", 1, "tab", 3, "routerLink"], [1, "tab-body"], [1, "modal-scrim"], [1, "dh-titles"], [1, "dh-meta"], [1, "badge"], [1, "muted"], ["type", "button", 1, "btn", "btn-outline", "btn-sm"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "badge", "badge-muted", "view-only"], ["aria-hidden", "true", 1, "tab-icon"], [1, "tab-label"], [1, "modal-scrim", 3, "click"], [1, "modal", "card", 3, "click"], [1, "modal-head"], ["type", "button", "aria-label", "Close", 1, "icon-x", 3, "click"], [1, "field"], ["for", "pname"], ["id", "pname", "type", "text", 3, "value"], ["for", "pstatus"], ["id", "pstatus"], ["value", "planning"], ["value", "active", "selected", ""], ["value", "on_hold"], ["value", "complete"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ProjectDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 All projects");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ProjectDetailComponent_Conditional_3_Template, 11, 8, "div", 2);
        \u0275\u0275elementStart(4, "nav", 3);
        \u0275\u0275repeaterCreate(5, ProjectDetailComponent_For_6_Template, 5, 3, "a", 4, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ProjectDetailComponent_Conditional_9_Template, 28, 1, "div", 6);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, (tmp_0_0 = ctx.project()) ? 3 : -1, tmp_0_0);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(9, ctx.modal() === "edit" && ctx.auth.isPlanner() ? 9 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-muted);\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-brand);\n}\n.detail-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n  margin: var(--space-3) 0 var(--space-4);\n}\n.dh-titles[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.dh-titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-bottom: var(--space-2);\n}\n.dh-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  font-size: var(--fs-sm);\n}\n.view-only[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-1);\n  padding: var(--space-1);\n  margin-bottom: var(--space-5);\n  background: var(--color-surface-inset);\n  border-radius: var(--radius);\n}\n.tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-height: 44px;\n  padding: 0 var(--space-4);\n  border-radius: var(--radius-sm);\n  color: var(--color-ink-soft);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  white-space: nowrap;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: var(--color-surface-alt);\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  color: var(--color-brand-dark);\n  box-shadow: var(--shadow-sm);\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.tab-body[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n.modal-scrim[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: var(--space-4);\n  background: rgba(22, 32, 47, 0.45);\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n  padding: var(--space-5);\n  animation: _ngcontent-%COMP%_sheet-up .18s ease-out;\n}\n@keyframes _ngcontent-%COMP%_sheet-up {\n  from {\n    transform: translateY(16px);\n    opacity: .6;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: var(--space-4);\n}\n.modal-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: var(--fs-lg);\n}\n.icon-x[_ngcontent-%COMP%] {\n  width: 40px;\n  min-height: 40px;\n  border: none;\n  border-radius: var(--radius);\n  background: var(--color-surface-alt);\n  font-size: var(--fs-md);\n  cursor: pointer;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-2);\n}\n.modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (min-width: 640px) {\n  .modal-scrim[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=project-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailComponent, { className: "ProjectDetailComponent", filePath: "src/app/pages/project-detail/project-detail.component.ts", lineNumber: 25 });
})();
export {
  ProjectDetailComponent
};
//# sourceMappingURL=project-detail.component-IER5XPD4.js.map
