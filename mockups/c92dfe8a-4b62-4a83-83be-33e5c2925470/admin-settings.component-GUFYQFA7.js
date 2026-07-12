import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-6WBQSCB2.js";
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
} from "./chunk-DARMOPX2.js";

// src/app/features/admin/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function AdminSettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "Saved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.saved(), " credentials updated.");
  }
}
function AdminSettingsComponent_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "Configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Not configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_9_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSettingsComponent_For_9_For_7_Template_input_ngModelChange_3_listener($event) {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.values[f_r5.key], $event) || (ctx_r0.values[f_r5.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const s_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("for", f_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("id", f_r5.key)("name", f_r5.key);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.values[f_r5.key]);
    \u0275\u0275property("placeholder", s_r3.configured ? s_r3.maskedValue : f_r5.placeholder);
  }
}
function AdminSettingsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function AdminSettingsComponent_For_9_Template_form_ngSubmit_0_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save(s_r3));
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminSettingsComponent_For_9_Conditional_4_Template, 2, 0, "span", 5)(5, AdminSettingsComponent_For_9_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, AdminSettingsComponent_For_9_For_7_Template, 4, 6, "div", 9, _forTrack0);
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, s_r3.configured ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(s_r3.fields);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Save ", s_r3.label, "");
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.saved = signal(null);
    this.settings = signal([
      {
        key: "postgresql",
        service: "postgresql",
        label: "PostgreSQL Database",
        configured: true,
        maskedValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
        fields: [
          { key: "DATABASE_URL", label: "Connection URL", placeholder: "postgres://user:pass@host:5432/db" }
        ]
      },
      {
        key: "minio",
        service: "minio",
        label: "MinIO Object Storage",
        configured: false,
        maskedValue: "",
        fields: [
          { key: "MINIO_ENDPOINT", label: "Endpoint", placeholder: "https://minio.example.com" },
          { key: "MINIO_ACCESS_KEY", label: "Access Key", placeholder: "access key" },
          { key: "MINIO_SECRET_KEY", label: "Secret Key", placeholder: "secret key" }
        ]
      }
    ]);
    this.values = {};
  }
  save(setting) {
    this.settings.update((list) => list.map((s) => s.key === setting.key ? __spreadProps(__spreadValues({}, s), { configured: true, maskedValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }) : s));
    this.saved.set(setting.label);
    setTimeout(() => this.saved.set(null), 2500);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "page-title-row"], [1, "muted"], ["role", "status", 1, "notice", "saved"], [1, "settings-grid"], [1, "card", "card-pad"], [1, "badge", "badge-success"], [1, "text-sm"], [1, "card", "card-pad", 3, "ngSubmit"], [1, "row-between"], [1, "field"], ["type", "submit", 1, "btn", "btn-primary"], [1, "badge", "badge-warning"], [3, "for"], [3, "ngModelChange", "id", "name", "ngModel", "placeholder"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Configure credentials for provisioned services. Manager only.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, AdminSettingsComponent_Conditional_6_Template, 5, 1, "div", 2);
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275repeaterCreate(8, AdminSettingsComponent_For_9_Template, 10, 3, "form", 4, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.saved() ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.settings());
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--space-4);\n}\n.settings-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.saved[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n}\n/*# sourceMappingURL=admin-settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/features/admin/admin-settings.component.ts", lineNumber: 13 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=admin-settings.component-GUFYQFA7.js.map
