import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-7PVF4TBR.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LLQROSRE.js";

// src/app/features/admin/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminSettingsComponent_For_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Not configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_7_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_21_0;
    let tmp_24_0;
    const key_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", key_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_21_0 = ctx_r2.settingFor(key_r2)) == null ? null : tmp_21_0.label) || key_r2);
    \u0275\u0275advance();
    \u0275\u0275property("id", key_r2)("formControlName", key_r2)("placeholder", ((tmp_24_0 = ctx_r2.settingFor(key_r2)) == null ? null : tmp_24_0.configured) ? ((tmp_24_0 = ctx_r2.settingFor(key_r2)) == null ? null : tmp_24_0.value) || "Configured" : "Not set");
  }
}
function AdminSettingsComponent_For_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "\u2713 Saved");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 2);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminSettingsComponent_For_7_Conditional_7_Template, 2, 0, "span", 6)(8, AdminSettingsComponent_For_7_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, AdminSettingsComponent_For_7_For_10_Template, 4, 5, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275template(12, AdminSettingsComponent_For_7_Conditional_12_Template, 2, 0, "span", 9);
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275listener("click", function AdminSettingsComponent_For_7_Template_button_click_13_listener() {
      const service_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveService(service_r4));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(service_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r4.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r2.isServiceConfigured(service_r4) ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(service_r4.keys);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(12, ctx_r2.savedKey() === service_r4.id ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-testid", "save-" + service_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Save ", service_r4.label, " ");
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.savedKey = signal(null);
    this.services = [
      { id: "postgresql", label: "PostgreSQL", description: "Primary application database.", keys: ["DATABASE_URL"] },
      { id: "minio", label: "MinIO Object Storage", description: "S3-compatible storage for product images.", keys: ["MINIO_ENDPOINT", "MINIO_ACCESS_KEY", "MINIO_SECRET_KEY"] }
    ];
    this.settings = signal([
      { key: "DATABASE_URL", label: "Connection URL", configured: true, value: "postgres://\u2022\u2022\u2022\u2022\u2022\u2022@db:5432/store" },
      { key: "MINIO_ENDPOINT", label: "Endpoint", configured: false, value: "" },
      { key: "MINIO_ACCESS_KEY", label: "Access Key", configured: false, value: "" },
      { key: "MINIO_SECRET_KEY", label: "Secret Key", configured: false, value: "" }
    ]);
    this.form = this.fb.group({});
    for (const s of this.settings()) {
      this.form.addControl(s.key, this.fb.control(""));
    }
  }
  settingFor(key) {
    return this.settings().find((s) => s.key === key);
  }
  isServiceConfigured(service) {
    return service.keys.every((k) => this.settingFor(k)?.configured);
  }
  saveService(service) {
    this.settings.update((list) => list.map((s) => {
      if (!service.keys.includes(s.key))
        return s;
      const entered = this.form.get(s.key)?.value ?? "";
      return entered ? __spreadProps(__spreadValues({}, s), { configured: true, value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }) : s;
    }));
    this.savedKey.set(service.id);
    setTimeout(() => this.savedKey.set(null), 2e3);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page"], [1, "page-title"], [1, "muted"], [3, "formGroup"], [1, "card", "service"], [1, "service-head"], [1, "badge", "badge-shipped"], [1, "field"], [1, "service-actions"], [1, "saved"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "badge", "badge-placed"], [3, "for"], [1, "input", 3, "id", "formControlName", "placeholder"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Service Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4, "Configure backing service credentials. Secrets are stored masked.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 3);
        \u0275\u0275repeaterCreate(6, AdminSettingsComponent_For_7_Template, 15, 6, "div", 4, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.services);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.service[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  margin-bottom: var(--sp-4);\n  max-width: 640px;\n}\n.service-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n}\n.service-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin: 0 0 var(--sp-1);\n}\n.service-head[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-sm);\n}\n.service-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  margin-top: var(--sp-2);\n}\n.saved[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n/*# sourceMappingURL=admin-settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/features/admin/admin-settings.component.ts", lineNumber: 20 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=admin-settings.component-F5A5OLXI.js.map
