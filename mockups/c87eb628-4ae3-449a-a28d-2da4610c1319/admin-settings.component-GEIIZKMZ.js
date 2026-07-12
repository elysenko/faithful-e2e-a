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
  ɵɵtextInterpolate
} from "./chunk-VVK4PSXI.js";

// src/app/pages/admin-settings/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.service;
var _forTrack1 = ($index, $item) => $item.key;
function AdminSettingsComponent_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Not configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_9_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("type", field_r2.secret ? "password" : "text")("value", field_r2.masked)("placeholder", field_r2.label);
  }
}
function AdminSettingsComponent_For_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Saved");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h3", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminSettingsComponent_For_9_Conditional_4_Template, 2, 0, "span", 6)(5, AdminSettingsComponent_For_9_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275repeaterCreate(7, AdminSettingsComponent_For_9_For_8_Template, 4, 4, "div", 8, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminSettingsComponent_For_9_Conditional_9_Template, 2, 0, "div", 9);
    \u0275\u0275elementStart(10, "div", 10)(11, "button", 11);
    \u0275\u0275listener("click", function AdminSettingsComponent_For_9_Template_button_click_11_listener() {
      const svc_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save(svc_r3.service));
    });
    \u0275\u0275text(12, "Save credentials");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const svc_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(svc_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, svc_r3.configured ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(svc_r3.fields);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, ctx_r3.savedFor() === svc_r3.service ? 9 : -1);
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.services = signal([
      {
        service: "postgresql",
        label: "PostgreSQL Database",
        configured: true,
        fields: [
          { key: "host", label: "Host", masked: "db.internal" },
          { key: "port", label: "Port", masked: "5432" },
          { key: "database", label: "Database", masked: "minierp" },
          { key: "user", label: "User", masked: "minierp" },
          { key: "password", label: "Password", masked: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", secret: true }
        ]
      },
      {
        service: "minio",
        label: "MinIO Object Storage",
        configured: false,
        fields: [
          { key: "endpoint", label: "Endpoint", masked: "" },
          { key: "accessKey", label: "Access Key", masked: "" },
          { key: "secretKey", label: "Secret Key", masked: "", secret: true },
          { key: "bucket", label: "Bucket", masked: "" }
        ]
      }
    ]);
    this.savedFor = signal(null);
  }
  save(service) {
    this.services.update((list) => list.map((s) => s.service === service ? __spreadProps(__spreadValues({}, s), { configured: true }) : s));
    this.savedFor.set(service);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "container", "stack"], [1, "section-title"], [1, "eyebrow"], [1, "alert", "alert-info"], [1, "card", "card-pad", "stack"], [1, "row", "row-between", "wrap-gap"], [1, "badge", "badge-success"], [1, "grid-two"], [1, "field"], [1, "alert", "alert-success"], [1, "row"], [1, "btn", "btn-primary", 3, "click"], [1, "badge", "badge-warning"], [1, "input", 3, "type", "value", "placeholder"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Administration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Admin Settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275text(7, " Configure external service credentials. Values are masked once saved. ");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(8, AdminSettingsComponent_For_9_Template, 13, 3, "div", 4, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.services());
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/pages/admin-settings/admin-settings.component.ts", lineNumber: 11 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=admin-settings.component-GEIIZKMZ.js.map
