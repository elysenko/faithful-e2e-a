import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7F3Y7YLT.js";
import {
  SiteviewService
} from "./chunk-S3M52NQH.js";
import {
  CommonModule,
  NgClass,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VZ6O3Y2G.js";

// src/app/features/admin/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.service;
var _forTrack1 = ($index, $item) => $item.key;
function AdminSettingsComponent_For_9_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSettingsComponent_For_9_For_9_Template_input_ngModelChange_4_listener($event) {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(f_r2.value, $event) || (f_r2.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function AdminSettingsComponent_For_9_For_9_Template_button_click_5_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const s_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save(s_r3.service, f_r2.key, f_r2.value));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const s_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("for", s_r3.service + "-" + f_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", s_r3.service + "-" + f_r2.key)("type", f_r2.masked ? "password" : "text");
    \u0275\u0275twoWayProperty("ngModel", f_r2.value);
    \u0275\u0275property("placeholder", f_r2.masked ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : "Enter " + f_r2.label.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.savedKey === s_r3.service + ":" + f_r2.key ? "Saved \u2713" : "Save", " ");
  }
}
function AdminSettingsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, AdminSettingsComponent_For_9_For_9_Template, 7, 7, "div", 8, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", s_r3.configured ? "badge-success" : "badge-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r3.configured ? "Configured" : "Not configured", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.service);
    \u0275\u0275advance();
    \u0275\u0275repeater(s_r3.fields);
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor(sv) {
    this.sv = sv;
    this.services = this.sv.serviceSettings;
    this.savedKey = null;
  }
  save(service, key, value) {
    this.sv.updateServiceSetting(service, key, value);
    this.savedKey = `${service}:${key}`;
    setTimeout(() => this.savedKey = null, 1500);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(t) {
      return new (t || _AdminSettingsComponent)(\u0275\u0275directiveInject(SiteviewService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "page"], [1, "page-head"], [1, "muted"], [1, "svc-grid"], [1, "svc", "card"], [1, "svc-head"], [1, "badge", 3, "ngClass"], [1, "muted", "svc-key"], [1, "field"], [1, "field-row"], [3, "ngModelChange", "id", "type", "ngModel", "placeholder"], [1, "btn", "btn-primary", "sm", 3, "click"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Admin \xB7 Service Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Configure backing services for this deployment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275repeaterCreate(8, AdminSettingsComponent_For_9_Template, 10, 4, "div", 4, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.services());
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.svc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--space-4);\n}\n.svc[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.svc-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.svc-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.svc-key[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-size: var(--fs-xs);\n  margin-bottom: var(--space-4);\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.field-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  align-items: stretch;\n}\n.field-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.btn.sm[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  font-size: var(--fs-xs);\n  white-space: nowrap;\n}\n/*# sourceMappingURL=admin-settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/features/admin/admin-settings.component.ts", lineNumber: 13 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=admin-settings.component-4NLQBDHE.js.map
