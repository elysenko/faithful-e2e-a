import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-VXD3V2JR.js";
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
} from "./chunk-5S2USPPB.js";

// src/app/pages/admin-settings/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.service;
var _forTrack1 = ($index, $item) => $item.key;
function AdminSettingsComponent_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Not configured");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_8_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", s_r2.key)("placeholder", s_r2.value ? s_r2.value : "Enter " + s_r2.label);
  }
}
function AdminSettingsComponent_For_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
}
function AdminSettingsComponent_For_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save ");
  }
}
function AdminSettingsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 7);
    \u0275\u0275template(5, AdminSettingsComponent_For_8_Conditional_5_Template, 2, 0, "span", 8)(6, AdminSettingsComponent_For_8_Conditional_6_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, AdminSettingsComponent_For_8_For_8_Template, 4, 3, "label", 9, _forTrack1);
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275element(10, "span", 7);
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275listener("click", function AdminSettingsComponent_For_8_Template_button_click_11_listener() {
      const group_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save(group_r3));
    });
    \u0275\u0275template(12, AdminSettingsComponent_For_8_Conditional_12_Template, 1, 0, "span", 12)(13, AdminSettingsComponent_For_8_Conditional_13_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(5, group_r3.configured ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r3.settings);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.savingService() === group_r3.service);
    \u0275\u0275advance();
    \u0275\u0275conditional(12, ctx_r3.savingService() === group_r3.service ? 12 : 13);
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.savingService = signal("");
    this.serviceLabels = {
      postgresql: "PostgreSQL",
      minio: "MinIO Object Storage"
    };
    this.settings = signal([
      { key: "DATABASE_URL", service: "postgresql", label: "Database URL", value: "postgres://***", configured: true },
      { key: "MINIO_ENDPOINT", service: "minio", label: "Endpoint", value: "", configured: false },
      { key: "MINIO_ACCESS_KEY", service: "minio", label: "Access Key", value: "", configured: false },
      { key: "MINIO_SECRET_KEY", service: "minio", label: "Secret Key", value: "", configured: false }
    ]);
    this.form = new FormGroup({});
    this.groups = computed(() => {
      const bySvc = /* @__PURE__ */ new Map();
      for (const s of this.settings()) {
        const list = bySvc.get(s.service) ?? [];
        list.push(s);
        bySvc.set(s.service, list);
      }
      return Array.from(bySvc.entries()).map(([service, list]) => ({
        service,
        label: this.serviceLabels[service] ?? service,
        settings: list,
        configured: list.every((s) => s.configured)
      }));
    });
    for (const s of this.settings()) {
      this.form.addControl(s.key, new FormControl("", { nonNullable: true }));
    }
  }
  save(group) {
    this.savingService.set(group.service);
    const values = {};
    for (const s of group.settings) {
      values[s.key] = this.form.controls[s.key]?.value ?? "";
    }
    console.log("Saving settings for", group.service, values);
    setTimeout(() => {
      this.settings.update((list) => list.map((s) => s.service === group.service ? __spreadProps(__spreadValues({}, s), { configured: true }) : s));
      this.savingService.set("");
    }, 500);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "page", "stack"], [1, "page-head"], [1, "muted"], [1, "stack", 3, "formGroup"], [1, "card", "card-pad", "service", "stack"], [1, "row", "service-head"], [1, "service-name"], [1, "spacer"], [1, "badge", "badge-ok"], [1, "stack"], [1, "row", "form-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner"], [1, "badge", "badge-warn"], ["type", "text", "autocomplete", "off", 1, "field", 3, "formControlName", "placeholder"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h1");
        \u0275\u0275text(3, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Service configuration.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 3);
        \u0275\u0275repeaterCreate(7, AdminSettingsComponent_For_8_Template, 14, 4, "div", 4, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.groups());
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.service[_ngcontent-%COMP%] {\n  gap: var(--space-4);\n}\n.service-head[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.service-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.form-actions[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=admin-settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/pages/admin-settings/admin-settings.component.ts", lineNumber: 20 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=admin-settings.component-NBK2O2TU.js.map
