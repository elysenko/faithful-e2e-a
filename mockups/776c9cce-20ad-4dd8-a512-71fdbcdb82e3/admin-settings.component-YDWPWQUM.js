import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KFEQ7DOY.js";

// src/app/pages/admin-settings/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.service;
var _forTrack1 = ($index, $item) => $item.key;
function AdminSettingsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Settings saved.");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_12_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("for", f_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("id", f_r1.key)("type", f_r1.secret ? "password" : "text")("value", f_r1.masked)("placeholder", f_r1.secret ? "Enter " + f_r1.label.toLowerCase() : f_r1.label);
  }
}
function AdminSettingsComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 10)(2, "h3", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, AdminSettingsComponent_For_12_For_7_Template, 4, 6, "div", 13, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r2.configured ? "badge-success" : "badge-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2.configured ? "Configured" : "Needs setup", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(s_r2.fields);
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.settings = signal([
      {
        service: "postgresql",
        label: "PostgreSQL",
        configured: true,
        fields: [
          { key: "POSTGRES_HOST", label: "Host", masked: "db.internal" },
          { key: "POSTGRES_PASSWORD", label: "Password", masked: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", secret: true }
        ]
      },
      {
        service: "minio",
        label: "MinIO (object storage)",
        configured: false,
        fields: [
          { key: "MINIO_ACCESS_KEY", label: "Access key", masked: "" },
          { key: "MINIO_SECRET_KEY", label: "Secret key", masked: "", secret: true }
        ]
      }
    ]);
    this.saved = signal(false);
  }
  save() {
    this.saved.set(true);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 1, consts: [[1, "container", "stack"], [1, "section-title"], [1, "stack", 2, "gap", "var(--sp-1)"], [1, "eyebrow"], [1, "muted"], [1, "alert", "alert-success"], [1, "stack"], [1, "card", "card-pad", "stack"], [1, "row"], [1, "btn", "btn-primary", 3, "click"], [1, "row-between"], [2, "margin", "0"], [1, "badge"], [1, "field", 2, "margin", "0"], [3, "for"], [1, "input", 3, "id", "type", "value", "placeholder"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Coach");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Configure backing-service credentials for the club deployment.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, AdminSettingsComponent_Conditional_9_Template, 2, 0, "div", 5);
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275repeaterCreate(11, AdminSettingsComponent_For_12_Template, 8, 4, "div", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
        \u0275\u0275listener("click", function AdminSettingsComponent_Template_button_click_14_listener() {
          return ctx.save();
        });
        \u0275\u0275text(15, "Save settings");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(9, ctx.saved() ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.settings());
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
//# sourceMappingURL=admin-settings.component-YDWPWQUM.js.map
