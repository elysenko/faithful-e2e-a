import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-C7DKJWEU.js";
import {
  CommonModule,
  NgClass,
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
} from "./chunk-HP7M3I25.js";

// src/app/pages/settings/settings.component.ts
var _forTrack0 = ($index, $item) => $item.service;
var _forTrack1 = ($index, $item) => $item.key;
function SettingsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading settings\u2026");
    \u0275\u0275elementEnd()();
  }
}
function SettingsComponent_Conditional_7_For_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_7_For_2_For_12_Template_input_ngModelChange_5_listener($event) {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.edits[s_r5.key], $event) || (ctx_r2.edits[s_r5.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("for", s_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", s_r5.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.key);
    \u0275\u0275advance();
    \u0275\u0275property("id", s_r5.key)("name", s_r5.key);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.edits[s_r5.key]);
    \u0275\u0275property("placeholder", s_r5.configured ? s_r5.value : "Not set \u2014 enter a value");
  }
}
function SettingsComponent_Conditional_7_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Saved");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8)(2, "div")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275elementStart(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 12);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_Conditional_7_For_2_Template_form_ngSubmit_10_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save(g_r2));
    });
    \u0275\u0275repeaterCreate(11, SettingsComponent_Conditional_7_For_2_For_12_Template, 6, 7, "div", 13, _forTrack1);
    \u0275\u0275elementStart(13, "div", 14)(14, "button", 15);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SettingsComponent_Conditional_7_For_2_Conditional_16_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(g_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r2.blurb);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.isConfigured(g_r2) ? "badge-ok" : "badge-warn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isConfigured(g_r2) ? "Configured" : "Not configured", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r2.settings);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Save ", g_r2.label, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(16, ctx_r2.savedFor() === g_r2.service ? 16 : -1);
  }
}
function SettingsComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function SettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, SettingsComponent_Conditional_7_For_2_Template, 17, 6, "div", 6, _forTrack0);
    \u0275\u0275template(3, SettingsComponent_Conditional_7_Conditional_3_Template, 2, 1, "p", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.groups());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.error() ? 3 : -1);
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.savedFor = signal(null);
    this.settings = signal([
      { key: "POSTGRESQL_URL", service: "postgresql", label: "Connection URL", value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", configured: true },
      { key: "POSTGRESQL_POOL_MAX", service: "postgresql", label: "Max pool size", value: "10", configured: true },
      { key: "MINIO_ENDPOINT", service: "minio", label: "Endpoint", value: "", configured: false },
      { key: "MINIO_ACCESS_KEY", service: "minio", label: "Access key", value: "", configured: false },
      { key: "MINIO_SECRET_KEY", service: "minio", label: "Secret key", value: "", configured: false }
    ]);
    this.edits = {};
    this.groups = signal([]);
  }
  ngOnInit() {
    this.rebuild();
  }
  rebuild() {
    const meta = {
      postgresql: { label: "PostgreSQL", blurb: "Primary database connection." },
      minio: { label: "MinIO (object storage)", blurb: "S3-compatible object storage backend." }
    };
    const byService = /* @__PURE__ */ new Map();
    for (const s of this.settings()) {
      const arr = byService.get(s.service) ?? [];
      arr.push(s);
      byService.set(s.service, arr);
    }
    this.groups.set([...byService.entries()].map(([service, settings]) => ({
      service,
      label: meta[service]?.label ?? service,
      blurb: meta[service]?.blurb ?? "",
      settings
    })));
  }
  isConfigured(group) {
    return group.settings.length > 0 && group.settings.every((s) => s.configured);
  }
  save(group) {
    this.error.set(null);
    this.settings.update((list) => list.map((s) => s.service === group.service && this.edits[s.key] ? __spreadProps(__spreadValues({}, s), { value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", configured: true }) : s));
    this.edits = {};
    this.rebuild();
    this.savedFor.set(group.service);
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(t) {
      return new (t || _SettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page"], [1, "page-head"], [1, "sub"], [1, "state"], [1, "spinner"], [1, "stack"], [1, "card", "card-pad"], [1, "error"], [1, "service-head"], [1, "muted", "service-blurb"], [1, "spacer"], [1, "badge", 3, "ngClass"], [3, "ngSubmit"], [1, "field"], [1, "toolbar"], ["type", "submit", 1, "btn", "btn-primary"], [1, "badge", "badge-ok"], [3, "for"], [1, "mono", "muted", "key-hint"], [3, "ngModelChange", "id", "name", "ngModel", "placeholder"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Backing service credentials. Values are stored masked; leave a field blank to keep the current value.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, SettingsComponent_Conditional_6_Template, 4, 0, "div", 3)(7, SettingsComponent_Conditional_7_Template, 4, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : 7);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.service-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.service-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.service-blurb[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n  font-size: var(--fs-sm);\n}\n.key-hint[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  font-weight: 400;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-top: var(--space-2);\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/pages/settings/settings.component.ts", lineNumber: 27 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=settings.component-UQ5SCAS5.js.map
