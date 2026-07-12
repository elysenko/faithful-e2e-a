import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-3GKCPY4W.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
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
} from "./chunk-ILXJTYNR.js";

// src/app/pages/admin-settings/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.service;
var _forTrack1 = ($index, $item) => $item.key;
function AdminSettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "span", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading settings\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminSettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 4);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AdminSettingsComponent_Conditional_8_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_8_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Not configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_8_For_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSettingsComponent_Conditional_8_For_2_For_12_Template_input_ngModelChange_3_listener($event) {
      const field_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(field_r5.value, $event) || (field_r5.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("id", field_r5.key)("name", field_r5.key)("type", field_r5.secret ? "password" : "text");
    \u0275\u0275twoWayProperty("ngModel", field_r5.value);
    \u0275\u0275property("placeholder", field_r5.label);
  }
}
function AdminSettingsComponent_Conditional_8_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "\u2713 Saved");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 8)(2, "div")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminSettingsComponent_Conditional_8_For_2_Conditional_7_Template, 2, 0, "span", 10)(8, AdminSettingsComponent_Conditional_8_For_2_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "form", 11);
    \u0275\u0275listener("ngSubmit", function AdminSettingsComponent_Conditional_8_For_2_Template_form_ngSubmit_9_listener() {
      const svc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.save(svc_r3));
    });
    \u0275\u0275elementStart(10, "div", 12);
    \u0275\u0275repeaterCreate(11, AdminSettingsComponent_Conditional_8_For_2_For_12_Template, 4, 7, "div", 13, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14);
    \u0275\u0275template(14, AdminSettingsComponent_Conditional_8_For_2_Conditional_14_Template, 2, 0, "span", 10);
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const svc_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(svc_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r3.service);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, svc_r3.configured ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(svc_r3.fields);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(14, ctx_r0.savedService() === svc_r3.service ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Save ", svc_r3.label, "");
  }
}
function AdminSettingsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, AdminSettingsComponent_Conditional_8_For_2_Template, 17, 5, "section", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.services());
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.savedService = signal(null);
    this.services = signal([
      {
        service: "postgresql",
        label: "PostgreSQL Database",
        configured: true,
        fields: [
          { key: "POSTGRES_HOST", label: "Host", value: "db.internal" },
          { key: "POSTGRES_PORT", label: "Port", value: "5432" },
          { key: "POSTGRES_USER", label: "User", value: "learnloop" },
          { key: "POSTGRES_PASSWORD", label: "Password", value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", secret: true }
        ]
      },
      {
        service: "minio",
        label: "MinIO Object Storage",
        configured: false,
        fields: [
          { key: "MINIO_ENDPOINT", label: "Endpoint", value: "" },
          { key: "MINIO_ACCESS_KEY", label: "Access Key", value: "" },
          { key: "MINIO_SECRET_KEY", label: "Secret Key", value: "", secret: true },
          { key: "MINIO_BUCKET", label: "Bucket", value: "" }
        ]
      },
      {
        service: "llm",
        label: "LLM Provider",
        configured: false,
        fields: [
          { key: "LLM_BASE_URL", label: "Base URL", value: "" },
          { key: "LLM_API_KEY", label: "API Key", value: "", secret: true },
          { key: "LLM_MODEL", label: "Model", value: "" }
        ]
      }
    ]);
  }
  save(service) {
    this.services.update((list) => list.map((s) => s.service === service.service ? __spreadProps(__spreadValues({}, s), { configured: s.fields.every((f) => f.value.trim().length > 0) }) : s));
    this.savedService.set(service.service);
    setTimeout(() => this.savedService.set(null), 2500);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "page-head"], [1, "muted"], [1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], [1, "services"], [1, "card", "service"], [1, "service-head"], [1, "muted", "mono", "key"], [1, "badge", "badge-ok"], [3, "ngSubmit"], [1, "fields"], [1, "field"], [1, "service-foot"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm"], [1, "badge", "badge-warn"], [3, "for"], [3, "ngModelChange", "id", "name", "type", "ngModel", "placeholder"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Admin Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Configure credentials for the platform's backing services.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, AdminSettingsComponent_Conditional_6_Template, 4, 0, "div", 2)(7, AdminSettingsComponent_Conditional_7_Template, 5, 1)(8, AdminSettingsComponent_Conditional_8_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.error() ? 7 : 8);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.services[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.service[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.service-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n  padding-bottom: var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n}\n.service-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.key[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: var(--space-3) var(--space-4);\n}\n.fields[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.service-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n}\n/*# sourceMappingURL=admin-settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/pages/admin-settings/admin-settings.component.ts", lineNumber: 13 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=admin-settings.component-MIBA3VIR.js.map
