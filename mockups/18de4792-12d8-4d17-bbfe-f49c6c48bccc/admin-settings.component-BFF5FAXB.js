import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-MVQ5GWD2.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
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
} from "./chunk-YT626SJK.js";

// src/app/pages/admin-settings/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.service;
var _forTrack1 = ($index, $item) => $item.key;
function AdminSettingsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, "Loading settings\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_5_For_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSettingsComponent_Conditional_5_For_2_For_12_Template_input_ngModelChange_3_listener($event) {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(f_r5.value, $event) || (f_r5.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("for", f_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("id", f_r5.key)("name", f_r5.key)("type", f_r5.secret ? "password" : "text");
    \u0275\u0275twoWayProperty("ngModel", f_r5.value);
    \u0275\u0275property("placeholder", f_r5.label);
  }
}
function AdminSettingsComponent_Conditional_5_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "\u2713 Saved");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "form", 9);
    \u0275\u0275listener("ngSubmit", function AdminSettingsComponent_Conditional_5_For_2_Template_form_ngSubmit_9_listener() {
      const svc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save(svc_r2));
    });
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275repeaterCreate(11, AdminSettingsComponent_Conditional_5_For_2_For_12_Template, 4, 7, "div", 11, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 12);
    \u0275\u0275template(14, AdminSettingsComponent_Conditional_5_For_2_Conditional_14_Template, 2, 0, "span", 13);
    \u0275\u0275elementStart(15, "button", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const svc_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(svc_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r2.service);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-ok", svc_r2.configured)("badge-warn", !svc_r2.configured);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", svc_r2.configured ? "Configured" : "Not configured", " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(svc_r2.fields);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(14, ctx_r2.saved() === svc_r2.service ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Save ", svc_r2.label, "");
  }
}
function AdminSettingsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, AdminSettingsComponent_Conditional_5_For_2_Template, 17, 9, "div", 4, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.services());
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.loading = signal(false);
    this.saved = signal("");
    this.services = signal([
      {
        service: "postgresql",
        label: "PostgreSQL database",
        configured: true,
        fields: [
          { key: "POSTGRES_HOST", label: "Host", value: "db.internal", secret: false },
          { key: "POSTGRES_USER", label: "User", value: "easyfile", secret: false },
          { key: "POSTGRES_PASSWORD", label: "Password", value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", secret: true }
        ]
      },
      {
        service: "minio",
        label: "MinIO object storage",
        configured: false,
        fields: [
          { key: "MINIO_ENDPOINT", label: "Endpoint", value: "", secret: false },
          { key: "MINIO_ACCESS_KEY", label: "Access key", value: "", secret: false },
          { key: "MINIO_SECRET_KEY", label: "Secret key", value: "", secret: true }
        ]
      }
    ]);
  }
  save(svc) {
    this.services.update((list) => list.map((s) => s.service === svc.service ? __spreadProps(__spreadValues({}, s), { configured: s.fields.every((f) => f.value.trim().length > 0) }) : s));
    this.saved.set(svc.service);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "page"], [1, "page-head"], [1, "state"], [1, "stack"], [1, "card", "svc-card"], [1, "svc-head"], [1, "svc-title"], [1, "svc-key"], [1, "badge"], [3, "ngSubmit"], [1, "svc-grid"], [1, "field"], [1, "svc-actions"], [1, "badge", "badge-ok"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm"], [3, "ngModelChange", "id", "name", "type", "ngModel", "placeholder"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Service settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, AdminSettingsComponent_Conditional_4_Template, 2, 0, "div", 2)(5, AdminSettingsComponent_Conditional_5_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.loading() ? 4 : 5);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.svc-card[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.svc-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.svc-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: var(--fs-md);\n}\n.svc-key[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: var(--fs-xs);\n  color: var(--color-muted);\n  background: var(--color-surface-inset);\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-sm);\n}\n.svc-head[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.svc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--space-3);\n}\n.svc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n}\n/*# sourceMappingURL=admin-settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/pages/admin-settings/admin-settings.component.ts", lineNumber: 20 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=admin-settings.component-BFF5FAXB.js.map
