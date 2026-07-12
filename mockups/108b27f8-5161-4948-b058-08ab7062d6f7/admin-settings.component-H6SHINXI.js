import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CHXIRGAM.js";
import {
  ApiService
} from "./chunk-Y35ABHFS.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IS4ZVKQ7.js";

// src/app/pages/admin-settings/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function AdminSettingsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading settings\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminSettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
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
function AdminSettingsComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AdminSettingsComponent_Conditional_7_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_7_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "Not configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_7_For_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Current: ");
    \u0275\u0275elementStart(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r3.maskedValue);
  }
}
function AdminSettingsComponent_Conditional_7_For_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "\u2713 Saved");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_Conditional_7_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 9)(1, "div", 10)(2, "div")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminSettingsComponent_Conditional_7_For_3_Conditional_7_Template, 2, 0, "span", 12)(8, AdminSettingsComponent_Conditional_7_For_3_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminSettingsComponent_Conditional_7_For_3_Conditional_9_Template, 4, 1, "p", 13);
    \u0275\u0275elementStart(10, "div", 14)(11, "label");
    \u0275\u0275text(12, "Credential / connection string");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSettingsComponent_Conditional_7_For_3_Template_input_ngModelChange_13_listener($event) {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.drafts[s_r3.key], $event) || (ctx_r0.drafts[s_r3.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 16);
    \u0275\u0275template(15, AdminSettingsComponent_Conditional_7_For_3_Conditional_15_Template, 2, 0, "span", 12);
    \u0275\u0275element(16, "span", 17);
    \u0275\u0275elementStart(17, "button", 18);
    \u0275\u0275listener("click", function AdminSettingsComponent_Conditional_7_For_3_Template_button_click_17_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.save(s_r3));
    });
    \u0275\u0275text(18, "Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.key);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, s_r3.configured ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, s_r3.maskedValue ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("for", "val-" + s_r3.key);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "val-" + s_r3.key)("name", "val-" + s_r3.key);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.drafts[s_r3.key]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(15, ctx_r0.savedKey() === s_r3.key ? 15 : -1);
  }
}
function AdminSettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminSettingsComponent_Conditional_7_Conditional_0_Template, 2, 1, "p", 7);
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275repeaterCreate(2, AdminSettingsComponent_Conditional_7_For_3_Template, 19, 9, "section", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.error() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.settings());
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.savedKey = signal(null);
    this.drafts = {};
    this.settings = signal([
      { key: "postgresql", label: "PostgreSQL database", configured: true, maskedValue: "postgres://\u2022\u2022\u2022\u2022\u2022\u2022@db:5432/storefront" },
      { key: "minio", label: "MinIO object storage", configured: false, maskedValue: null }
    ]);
  }
  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
    this.api.getSettings().subscribe({
      next: (settings) => {
        this.settings.set(settings);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load service settings.");
        this.loading.set(false);
      }
    });
  }
  save(setting) {
    const value = (this.drafts[setting.key] ?? "").trim();
    if (!value) {
      this.error.set("Enter a value before saving.");
      return;
    }
    this.error.set(null);
    this.settings.update((list) => list.map((s) => s.key === setting.key ? __spreadProps(__spreadValues({}, s), { configured: true, maskedValue: this.mask(value) }) : s));
    this.drafts[setting.key] = "";
    this.savedKey.set(setting.key);
    this.api.updateSettings({ [setting.key]: value }).subscribe({ error: () => {
    } });
  }
  mask(value) {
    return value.length <= 4 ? "\u2022\u2022\u2022\u2022" : value.slice(0, 4) + "\u2022\u2022\u2022\u2022\u2022\u2022";
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "container", "narrow"], [1, "page-title"], [1, "muted", "intro"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "error"], [1, "settings-list"], [1, "card", "service-card"], [1, "service-head"], [1, "service-key"], [1, "badge", "badge-ok"], [1, "current", "muted"], [1, "field"], ["type", "text", "placeholder", "Enter new value", "autocomplete", "off", 3, "ngModelChange", "id", "name", "ngModel"], [1, "service-actions"], [1, "spacer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "badge", "badge-warn"], [1, "mono"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Service settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4, "Configure credentials for the provisioned backing services.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, AdminSettingsComponent_Conditional_5_Template, 4, 0, "div", 3)(6, AdminSettingsComponent_Conditional_6_Template, 5, 1)(7, AdminSettingsComponent_Conditional_7_Template, 4, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.loading() ? 5 : ctx.error() && ctx.settings().length === 0 ? 6 : 7);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-bottom: var(--space-1);\n}\n.intro[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.settings-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.service-card[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.service-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-3);\n}\n.service-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.service-key[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: var(--space-1);\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-sm);\n  background: var(--color-surface-inset);\n  color: var(--color-muted);\n  font-family: var(--font-mono);\n  font-size: var(--fs-xs);\n}\n.current[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  margin: 0 0 var(--space-3);\n}\n.service-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n/*# sourceMappingURL=admin-settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/pages/admin-settings/admin-settings.component.ts", lineNumber: 19 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=admin-settings.component-H6SHINXI.js.map
