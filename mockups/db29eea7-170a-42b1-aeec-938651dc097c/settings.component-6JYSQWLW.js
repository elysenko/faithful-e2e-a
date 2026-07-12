import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-3DEXCJGJ.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  computed,
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
} from "./chunk-G3BCJOAS.js";

// src/app/pages/settings/settings.component.ts
var _forTrack0 = ($index, $item) => $item.service;
var _forTrack1 = ($index, $item) => $item.key;
function SettingsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, "\u2705 Settings saved.");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_For_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Configured");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_For_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Not configured");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_For_8_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_For_8_For_10_Template_input_ngModelChange_5_listener($event) {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.draft[s_r2.key], $event) || (ctx_r2.draft[s_r2.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", s_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", s_r2.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.key);
    \u0275\u0275advance();
    \u0275\u0275property("id", s_r2.key)("name", s_r2.key);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.draft[s_r2.key]);
    \u0275\u0275property("placeholder", s_r2.configured ? s_r2.value : "Not set \u2014 enter a value");
  }
}
function SettingsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 7)(2, "div")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 1);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SettingsComponent_For_8_Conditional_7_Template, 2, 0, "span", 8)(8, SettingsComponent_For_8_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, SettingsComponent_For_8_For_10_Template, 6, 7, "div", 9, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(g_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r4.blurb);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, g_r4.configured ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r4.settings);
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor() {
    this.saving = signal(false);
    this.saved = signal(false);
    this.settings = signal([
      { key: "DATABASE_URL", service: "postgresql", label: "Connection URL", value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", configured: true },
      { key: "MINIO_ENDPOINT", service: "minio", label: "Endpoint", value: "", configured: false },
      { key: "MINIO_ACCESS_KEY", service: "minio", label: "Access key", value: "", configured: false },
      { key: "MINIO_SECRET_KEY", service: "minio", label: "Secret key", value: "", configured: false },
      { key: "LLM_API_KEY", service: "llm", label: "API key", value: "", configured: false }
    ]);
    this.meta = {
      postgresql: { title: "PostgreSQL", blurb: "Primary database connection." },
      minio: { title: "MinIO", blurb: "S3-compatible object storage." },
      llm: { title: "LLM Provider", blurb: "Model API used for assistive features." }
    };
    this.groups = computed(() => {
      const order = ["postgresql", "minio", "llm"];
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
    this.saving.set(true);
    this.saved.set(false);
    this.settings.update((list) => list.map((s) => this.draft[s.key] ? __spreadProps(__spreadValues({}, s), { value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", configured: true }) : s));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [[1, "container", "narrow"], [1, "muted"], [1, "save-banner"], [3, "ngSubmit"], [1, "card", "service-card"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "service-head"], [1, "badge", "badge-ok"], [1, "field"], [1, "badge", "badge-warn"], [3, "for"], [1, "mono", "muted", "key-hint"], [3, "ngModelChange", "id", "name", "ngModel", "placeholder"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Admin settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Configure the backing services this StockRoom instance depends on.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, SettingsComponent_Conditional_5_Template, 2, 0, "div", 2);
        \u0275\u0275elementStart(6, "form", 3);
        \u0275\u0275listener("ngSubmit", function SettingsComponent_Template_form_ngSubmit_6_listener() {
          return ctx.save();
        });
        \u0275\u0275repeaterCreate(7, SettingsComponent_For_8_Template, 11, 3, "section", 4, _forTrack0);
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.saved() ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.groups());
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : "Save settings", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\nh1[_ngcontent-%COMP%]    + .muted[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 var(--space-5);\n}\n.save-banner[_ngcontent-%COMP%] {\n  padding: var(--space-3) var(--space-4);\n  margin-bottom: var(--space-4);\n  border-radius: var(--radius);\n  background: var(--color-success-bg);\n  color: var(--color-success);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.service-card[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  margin-bottom: var(--space-4);\n}\n.service-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.service-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.service-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n}\n.key-hint[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  font-weight: 400;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-2);\n}\n@media (max-width: 560px) {\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/pages/settings/settings.component.ts", lineNumber: 26 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=settings.component-6JYSQWLW.js.map
