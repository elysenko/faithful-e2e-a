import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-OG6PBVX4.js";
import {
  CommonModule,
  RouterLink,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LGQVWVXM.js";

// src/app/pages/admin-settings/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.service;
var _forTrack1 = ($index, $item) => $item.key;
function AdminSettingsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading settings\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminSettingsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AdminSettingsComponent_Conditional_10_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_10_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Not configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_10_For_2_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5.value);
  }
}
function AdminSettingsComponent_Conditional_10_For_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminSettingsComponent_Conditional_10_For_2_For_10_Conditional_3_Template, 2, 1, "p", 20);
    \u0275\u0275elementStart(4, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSettingsComponent_Conditional_10_For_2_For_10_Template_input_ngModelChange_4_listener($event) {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.drafts[s_r5.key], $event) || (ctx_r0.drafts[s_r5.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("for", s_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, s_r5.configured && s_r5.value ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("id", s_r5.key)("name", s_r5.key);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.drafts[s_r5.key]);
    \u0275\u0275property("placeholder", s_r5.configured ? "Enter a new value to replace" : "Enter " + s_r5.label.toLowerCase());
  }
}
function AdminSettingsComponent_Conditional_10_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", g_r3.title, " settings saved.");
  }
}
function AdminSettingsComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("ngSubmit", function AdminSettingsComponent_Conditional_10_For_2_Template_form_ngSubmit_0_listener() {
      const g_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveGroup(g_r3));
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminSettingsComponent_Conditional_10_For_2_Conditional_7_Template, 2, 0, "span", 13)(8, AdminSettingsComponent_Conditional_10_For_2_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, AdminSettingsComponent_Conditional_10_For_2_For_10_Template, 5, 7, "div", 14, _forTrack1);
    \u0275\u0275template(11, AdminSettingsComponent_Conditional_10_For_2_Conditional_11_Template, 2, 1, "p", 15);
    \u0275\u0275elementStart(12, "div", 16)(13, "button", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const g_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(g_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r3.blurb);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, g_r3.configured ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r3.settings);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(11, ctx_r0.saved() === g_r3.title ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Save ", g_r3.title, "");
  }
}
function AdminSettingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, AdminSettingsComponent_Conditional_10_For_2_Template, 15, 5, "form", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.groups());
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.saved = signal(null);
    this.settings = signal([
      { key: "DATABASE_URL", service: "postgresql", label: "Connection URL", value: "postgres://\u2026@db:5432/learnloop", configured: true },
      { key: "MINIO_ENDPOINT", service: "minio", label: "Endpoint", value: "", configured: false },
      { key: "MINIO_ACCESS_KEY", service: "minio", label: "Access key", value: "", configured: false },
      { key: "MINIO_SECRET_KEY", service: "minio", label: "Secret key", value: "", configured: false },
      { key: "LLM_API_BASE", service: "llm", label: "API base URL", value: "", configured: false },
      { key: "LLM_API_KEY", service: "llm", label: "API key", value: "", configured: false }
    ]);
    this.drafts = {};
    this.serviceMeta = {
      postgresql: { title: "PostgreSQL", blurb: "Primary application database." },
      minio: { title: "MinIO Object Storage", blurb: "S3-compatible object storage for course media uploads." },
      llm: { title: "LLM Provider", blurb: "Language model credentials for AI-assisted authoring." }
    };
    this.groups = computed(() => {
      const byService = /* @__PURE__ */ new Map();
      for (const s of this.settings()) {
        if (!byService.has(s.service))
          byService.set(s.service, []);
        byService.get(s.service).push(s);
      }
      return [...byService.entries()].map(([service, settings]) => ({
        service,
        title: this.serviceMeta[service]?.title ?? service,
        blurb: this.serviceMeta[service]?.blurb ?? "",
        settings,
        configured: settings.every((s) => s.configured)
      }));
    });
  }
  ngOnInit() {
    for (const s of this.settings())
      this.drafts[s.key] = "";
  }
  saveGroup(group) {
    this.saved.set(null);
    this.error.set(null);
    this.settings.update((list) => list.map((s) => {
      if (s.service !== group.service)
        return s;
      const draft = this.drafts[s.key];
      return draft ? __spreadProps(__spreadValues({}, s), { value: draft, configured: true }) : s;
    }));
    for (const s of group.settings)
      this.drafts[s.key] = "";
    this.saved.set(group.title);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "page", "narrow"], [1, "page-head"], ["routerLink", "/instructor", 1, "back-link"], [1, "sub"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "stack"], [1, "card", "card-pad", "service"], [1, "card", "card-pad", "service", 3, "ngSubmit"], [1, "service-head"], [1, "muted"], [1, "badge", "badge-ok"], [1, "field"], [1, "ok-note"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary"], [1, "badge", "badge-warn"], [3, "for"], [1, "current", "mono"], ["type", "text", 3, "ngModelChange", "id", "name", "ngModel", "placeholder"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "Configure credentials for provisioned backing services.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, AdminSettingsComponent_Conditional_8_Template, 4, 0, "div", 4)(9, AdminSettingsComponent_Conditional_9_Template, 5, 1)(10, AdminSettingsComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(8, ctx.loading() ? 8 : ctx.error() ? 9 : 10);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n.back-link[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  width: 100%;\n}\n.service-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.service-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: 2px;\n}\n.service-head[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  margin: 0;\n}\n.current[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  background: var(--color-surface-inset);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius);\n  margin: 0 0 var(--space-1);\n  overflow-x: auto;\n}\n.ok-note[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: var(--space-2);\n}\n/*# sourceMappingURL=admin-settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/pages/admin-settings/admin-settings.component.ts", lineNumber: 28 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=admin-settings.component-HR7I3I4H.js.map
