import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-MR6JWV3P.js";
import {
  environment
} from "./chunk-PG5KNRNN.js";
import {
  CommonModule,
  HttpClient,
  HttpParams,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RDDARQHK.js";

// src/app/core/api.service.ts
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
    this.base = environment.apiUrl;
  }
  // ---- Users ----
  me() {
    return this.http.get(`${this.base}/users/me`);
  }
  // ---- Projects ----
  listProjects(status) {
    let params = new HttpParams();
    if (status)
      params = params.set("status", status);
    return this.http.get(`${this.base}/projects`, { params });
  }
  getProject(id) {
    return this.http.get(`${this.base}/projects/${id}`);
  }
  createProject(body) {
    return this.http.post(`${this.base}/projects`, body);
  }
  updateProject(id, body) {
    return this.http.patch(`${this.base}/projects/${id}`, body);
  }
  deleteProject(id) {
    return this.http.delete(`${this.base}/projects/${id}`);
  }
  // ---- Phases (nested under project) ----
  listPhases(projectId) {
    return this.http.get(`${this.base}/projects/${projectId}/phases`);
  }
  createPhase(projectId, body) {
    return this.http.post(`${this.base}/projects/${projectId}/phases`, body);
  }
  updatePhase(phaseId, body) {
    return this.http.patch(`${this.base}/phases/${phaseId}`, body);
  }
  deletePhase(phaseId) {
    return this.http.delete(`${this.base}/phases/${phaseId}`);
  }
  // ---- Tasks ----
  listTasks(projectId) {
    let params = new HttpParams();
    if (projectId)
      params = params.set("projectId", projectId);
    return this.http.get(`${this.base}/tasks`, { params });
  }
  getTask(id) {
    return this.http.get(`${this.base}/tasks/${id}`);
  }
  createTask(body) {
    return this.http.post(`${this.base}/tasks`, body);
  }
  updateTask(id, body) {
    return this.http.patch(`${this.base}/tasks/${id}`, body);
  }
  updateTaskProgress(id, progressPct) {
    return this.http.patch(`${this.base}/tasks/${id}/progress`, { progressPct });
  }
  deleteTask(id) {
    return this.http.delete(`${this.base}/tasks/${id}`);
  }
  // ---- Milestones ----
  listMilestones(projectId) {
    let params = new HttpParams();
    if (projectId)
      params = params.set("projectId", projectId);
    return this.http.get(`${this.base}/milestones`, { params });
  }
  createMilestone(body) {
    return this.http.post(`${this.base}/milestones`, body);
  }
  updateMilestone(id, body) {
    return this.http.patch(`${this.base}/milestones/${id}`, body);
  }
  deleteMilestone(id) {
    return this.http.delete(`${this.base}/milestones/${id}`);
  }
  // ---- Budget (BudgetLine per phase) ----
  listBudget(phaseId) {
    return this.http.get(`${this.base}/phases/${phaseId}/budget`);
  }
  createBudgetLine(phaseId, body) {
    return this.http.post(`${this.base}/phases/${phaseId}/budget`, body);
  }
  updateBudgetLine(id, body) {
    return this.http.patch(`${this.base}/budget/${id}`, body);
  }
  deleteBudgetLine(id) {
    return this.http.delete(`${this.base}/budget/${id}`);
  }
  // ---- Site plan + markers ----
  getSitePlan(projectId) {
    return this.http.get(`${this.base}/projects/${projectId}/siteplan`);
  }
  updateSitePlan(id, body) {
    return this.http.patch(`${this.base}/siteplan/${id}`, body);
  }
  createMarker(planId, body) {
    return this.http.post(`${this.base}/siteplan/${planId}/markers`, body);
  }
  updateMarker(id, body) {
    return this.http.patch(`${this.base}/markers/${id}`, body);
  }
  deleteMarker(id) {
    return this.http.delete(`${this.base}/markers/${id}`);
  }
  // ---- Dashboard ----
  getDashboard(projectId) {
    return this.http.get(`${this.base}/dashboard/${projectId}`);
  }
  // ---- Admin settings (planner) ----
  getSettings() {
    return this.http.get(`${this.base}/admin/settings`);
  }
  updateSettings(body) {
    return this.http.patch(`${this.base}/admin/settings`, body);
  }
  static {
    this.\u0275fac = function ApiService_Factory(t) {
      return new (t || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/settings/settings.component.ts
var _forTrack0 = ($index, $item) => $item.service;
var _forTrack1 = ($index, $item) => $item.key;
function SettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "\u2705 Settings saved.");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r0.error(), "");
  }
}
function SettingsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading settings\u2026");
    \u0275\u0275elementEnd()();
  }
}
function SettingsComponent_Conditional_9_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Configured");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_9_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Not configured");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_9_For_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_9_For_2_For_10_Template_input_ngModelChange_5_listener($event) {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.draft[s_r4.key], $event) || (ctx_r0.draft[s_r4.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("for", s_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", s_r4.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.key);
    \u0275\u0275advance();
    \u0275\u0275property("id", s_r4.key)("name", s_r4.key);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.draft[s_r4.key]);
    \u0275\u0275property("placeholder", s_r4.configured ? s_r4.value : "Not set \u2014 enter a value");
  }
}
function SettingsComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "div", 11)(2, "div")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SettingsComponent_Conditional_9_For_2_Conditional_7_Template, 2, 0, "span", 13)(8, SettingsComponent_Conditional_9_For_2_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, SettingsComponent_Conditional_9_For_2_For_10_Template, 6, 7, "div", 14, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(g_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r5.blurb);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, g_r5.configured ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r5.settings);
  }
}
function SettingsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_Conditional_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275repeaterCreate(1, SettingsComponent_Conditional_9_For_2_Template, 11, 3, "section", 8, _forTrack0);
    \u0275\u0275elementStart(3, "div", 9)(4, "button", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.groups());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : "Save settings", " ");
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.loading = signal(false);
    this.saving = signal(false);
    this.saved = signal(false);
    this.error = signal(null);
    this.settings = signal([
      { key: "DATABASE_URL", service: "postgresql", label: "Connection URL", value: "postgres://\u2022\u2022\u2022\u2022\u2022\u2022@db:5432/siteview", configured: true },
      { key: "DATABASE_POOL_MAX", service: "postgresql", label: "Max pool size", value: "10", configured: true },
      { key: "MINIO_ENDPOINT", service: "minio", label: "Endpoint", value: "", configured: false },
      { key: "MINIO_ACCESS_KEY", service: "minio", label: "Access key", value: "", configured: false },
      { key: "MINIO_SECRET_KEY", service: "minio", label: "Secret key", value: "", configured: false }
    ]);
    this.meta = {
      postgresql: { title: "PostgreSQL", blurb: "Primary database connection." },
      minio: { title: "MinIO", blurb: "S3-compatible object storage for site-plan images." }
    };
    this.groups = computed(() => {
      const order = ["postgresql", "minio"];
      return order.map((service) => {
        const settings = this.settings().filter((s) => s.service === service);
        return {
          service,
          title: this.meta[service]?.title ?? service,
          blurb: this.meta[service]?.blurb ?? "",
          settings,
          configured: settings.length > 0 && settings.every((s) => s.configured)
        };
      });
    });
    this.draft = {};
  }
  save() {
    const payload = {};
    for (const [key, value] of Object.entries(this.draft)) {
      if (value && value.trim().length > 0)
        payload[key] = value.trim();
    }
    this.saving.set(true);
    this.saved.set(false);
    this.error.set(null);
    this.settings.update((list) => list.map((s) => payload[s.key] ? __spreadProps(__spreadValues({}, s), { value: payload[s.key], configured: true }) : s));
    this.draft = {};
    this.saving.set(false);
    this.saved.set(true);
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(t) {
      return new (t || _SettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "page", "narrow"], [1, "page-head"], [1, "sub"], [1, "save-banner"], ["role", "alert", 1, "save-banner"], [1, "state"], [1, "spinner"], [3, "ngSubmit"], [1, "card", "service-card"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "service-head"], [1, "muted"], [1, "badge", "badge-ok"], [1, "field"], [1, "badge", "badge-warn"], [3, "for"], [1, "mono", "muted", "key-hint"], [3, "ngModelChange", "id", "name", "ngModel", "placeholder"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Admin settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Configure the backing services this SiteView instance depends on.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, SettingsComponent_Conditional_6_Template, 2, 0, "div", 3)(7, SettingsComponent_Conditional_7_Template, 2, 1, "div", 4)(8, SettingsComponent_Conditional_8_Template, 4, 0, "div", 5)(9, SettingsComponent_Conditional_9_Template, 6, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.saved() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.error() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.loading() ? 8 : 9);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\nh1[_ngcontent-%COMP%]    + .muted[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 var(--space-5);\n}\n.save-banner[_ngcontent-%COMP%] {\n  padding: var(--space-3) var(--space-4);\n  margin-bottom: var(--space-4);\n  border-radius: var(--radius);\n  background: var(--color-success-bg);\n  color: var(--color-success);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.service-card[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  margin-bottom: var(--space-4);\n}\n.service-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.service-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.service-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n}\n.key-hint[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  font-weight: 400;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-2);\n}\n@media (max-width: 560px) {\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/pages/settings/settings.component.ts", lineNumber: 31 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=settings.component-2YWKHINU.js.map
