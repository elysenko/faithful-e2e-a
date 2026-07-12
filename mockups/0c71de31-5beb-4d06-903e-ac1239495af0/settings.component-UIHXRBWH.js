import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RWVAJSBE.js";
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
} from "./chunk-T5L7N4YZ.js";

// src/app/features/admin/settings.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function AdminSettingsComponent_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "\u25CF Configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u25CF Not configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label");
    \u0275\u0275text(2, "Current value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("value", s_r2.value);
  }
}
function AdminSettingsComponent_For_9_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Saved");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 5)(1, "div", 6)(2, "div")(3, "h2", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminSettingsComponent_For_9_Conditional_7_Template, 2, 0, "span", 9)(8, AdminSettingsComponent_For_9_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminSettingsComponent_For_9_Conditional_9_Template, 4, 1, "div", 10);
    \u0275\u0275elementStart(10, "div", 10)(11, "label");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSettingsComponent_For_9_Template_input_ngModelChange_13_listener($event) {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.drafts[s_r2.key], $event) || (ctx_r2.drafts[s_r2.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275template(15, AdminSettingsComponent_For_9_Conditional_15_Template, 2, 0, "span", 13);
    \u0275\u0275elementStart(16, "button", 14);
    \u0275\u0275listener("click", function AdminSettingsComponent_For_9_Template_button_click_16_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save(s_r2));
    });
    \u0275\u0275text(17, "Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "setting-" + s_r2.key);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.key);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, s_r2.configured ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, s_r2.configured ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("for", "draft-" + s_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.configured ? "Update credentials" : "Set credentials");
    \u0275\u0275advance();
    \u0275\u0275property("id", "draft-" + s_r2.key);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.drafts[s_r2.key]);
    \u0275\u0275attribute("data-testid", "input-" + s_r2.key);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(15, ctx_r2.savedKey() === s_r2.key ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r2.drafts[s_r2.key] || "").trim());
    \u0275\u0275attribute("data-testid", "save-" + s_r2.key);
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.settings = signal([
      { key: "postgresql", label: "PostgreSQL", value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", configured: true },
      { key: "minio", label: "MinIO Object Storage", value: "", configured: false }
    ]);
    this.drafts = {};
    this.savedKey = signal(null);
  }
  save(setting) {
    const value = (this.drafts[setting.key] ?? "").trim();
    if (!value)
      return;
    this.settings.update((list) => list.map((s) => s.key === setting.key ? __spreadProps(__spreadValues({}, s), { value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", configured: true }) : s));
    this.drafts[setting.key] = "";
    this.savedKey.set(setting.key);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "page"], [1, "page-head"], [1, "page-title"], [1, "muted"], ["data-testid", "settings-list", 1, "settings-list"], [1, "svc", "card"], [1, "svc-head"], [1, "svc-name"], [1, "svc-key", "muted"], ["data-testid", "status-configured", 1, "badge", "badge-ok"], [1, "field"], ["type", "password", "placeholder", "Connection string / secret", 3, "ngModelChange", "id", "ngModel"], [1, "svc-actions"], [1, "badge", "badge-ok"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["data-testid", "status-unconfigured", 1, "badge", "badge-off"], ["type", "text", "readonly", "", 3, "value"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Backing services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Configure the credentials CodeDeck uses for its backing services.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275repeaterCreate(8, AdminSettingsComponent_For_9_Template, 18, 13, "article", 5, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.settings());
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 780px;\n  margin: 0 auto;\n  padding: var(--space-6) var(--space-5);\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: var(--fs-xl);\n}\n.muted[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.settings-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.svc[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.svc-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.svc-name[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: var(--fs-md);\n}\n.svc-key[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: var(--fs-xs);\n}\n.svc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding: var(--space-4);\n  }\n  .svc-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/features/admin/settings.component.ts", lineNumber: 13 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=settings.component-UIHXRBWH.js.map
