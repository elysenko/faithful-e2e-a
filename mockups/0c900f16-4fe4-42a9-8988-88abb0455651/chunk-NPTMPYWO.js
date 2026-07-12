import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-K6HGRTQ7.js";
import "./chunk-B3EMQL3E.js";
import {
  ChangeDetectionStrategy,
  Component,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵtextInterpolate
} from "./chunk-FGCV4IXY.js";

// src/app/admin-settings/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function AdminSettingsComponent_For_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, " Configured ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-testid", "badge-" + svc_r2.key);
  }
}
function AdminSettingsComponent_For_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, " Not configured ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-testid", "badge-" + svc_r2.key);
  }
}
function AdminSettingsComponent_For_8_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 10)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 14);
    \u0275\u0275listener("ngModelChange", function AdminSettingsComponent_For_8_For_11_Template_input_ngModelChange_3_listener($event) {
      const field_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const svc_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateField(svc_r2.key, field_r5.key, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r5 = ctx.$implicit;
    const svc_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("type", field_r5.type)("placeholder", field_r5.placeholder)("ngModel", field_r5.value)("name", svc_r2.key + "-" + field_r5.key);
  }
}
function AdminSettingsComponent_For_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, " \u2713 Credentials saved ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-testid", "saved-" + svc_r2.key);
  }
}
function AdminSettingsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 4);
    \u0275\u0275listener("submit", function AdminSettingsComponent_For_8_Template_form_submit_0_listener($event) {
      const svc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.save(svc_r2.key));
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminSettingsComponent_For_8_Conditional_7_Template, 2, 1, "span", 7)(8, AdminSettingsComponent_For_8_Conditional_8_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275repeaterCreate(10, AdminSettingsComponent_For_8_For_11_Template, 4, 5, "label", 10, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11);
    \u0275\u0275template(13, AdminSettingsComponent_For_8_Conditional_13_Template, 2, 1, "span", 12);
    \u0275\u0275elementStart(14, "button", 13);
    \u0275\u0275text(15, " Save credentials ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const svc_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "service-" + svc_r2.key);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(svc_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r2.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(svc_r2.configured ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(svc_r2.fields);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.savedKey() === svc_r2.key ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-testid", "save-" + svc_r2.key);
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.services = signal([
      {
        key: "postgresql",
        label: "PostgreSQL",
        description: "Primary store for stations, observations & climate normals.",
        configured: true,
        fields: [
          { key: "host", label: "Host", type: "text", placeholder: "db.internal", value: "pg.weather-2.internal" },
          { key: "port", label: "Port", type: "number", placeholder: "5432", value: "5432" },
          { key: "database", label: "Database", type: "text", placeholder: "weather", value: "weather_prod" },
          { key: "username", label: "Username", type: "text", placeholder: "app", value: "weather_app" },
          { key: "password", label: "Password", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: "storedsecret" }
        ]
      },
      {
        key: "redis",
        label: "Redis",
        description: "Frame cache for computed interpolation results.",
        configured: false,
        fields: [
          { key: "host", label: "Host", type: "text", placeholder: "cache.internal", value: "" },
          { key: "port", label: "Port", type: "number", placeholder: "6379", value: "" },
          { key: "password", label: "Password", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: "" }
        ]
      }
    ]);
    this.savedKey = signal(null);
  }
  updateField(serviceKey, fieldKey, value) {
    this.services.update((list) => list.map((s) => s.key !== serviceKey ? s : __spreadProps(__spreadValues({}, s), {
      fields: s.fields.map((f) => f.key === fieldKey ? __spreadProps(__spreadValues({}, f), { value }) : f)
    })));
  }
  save(serviceKey) {
    this.services.update((list) => list.map((s) => s.key !== serviceKey ? s : __spreadProps(__spreadValues({}, s), { configured: s.fields.every((f) => f.value.trim() !== "") })));
    this.savedKey.set(serviceKey);
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], decls: 9, vars: 0, consts: [["data-testid", "admin-settings-page", 1, "page"], [1, "page-head"], [1, "services"], [1, "svc-card"], [1, "svc-card", 3, "submit"], [1, "svc-head"], [1, "svc-id"], [1, "badge", "configured"], [1, "badge", "unconfigured"], [1, "fields"], [1, "field"], [1, "svc-foot"], [1, "saved-note"], ["type", "submit", 1, "save-btn"], [3, "ngModelChange", "type", "placeholder", "ngModel", "name"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
        \u0275\u0275text(3, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Connection credentials for the deployment's backing services.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275repeaterCreate(7, AdminSettingsComponent_For_8_Template, 16, 6, "form", 3, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.services());
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n}\n.services[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.svc-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: var(--space-5);\n  box-shadow: var(--shadow-sm);\n}\n.svc-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.svc-id[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.svc-id[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n}\n.badge[_ngcontent-%COMP%] {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: var(--radius-pill);\n  font-size: 0.74rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.configured[_ngcontent-%COMP%] {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n}\n.badge.configured[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--color-success);\n}\n.badge.unconfigured[_ngcontent-%COMP%] {\n  background: var(--color-surface-3);\n  color: var(--color-text-muted);\n}\n.badge.unconfigured[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--color-text-faint);\n}\n.fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: var(--space-3);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  min-height: 44px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  background: var(--color-surface);\n  color: var(--color-text);\n  width: 100%;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary);\n}\n.svc-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n}\n.saved-note[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-success);\n}\n.save-btn[_ngcontent-%COMP%] {\n  appearance: none;\n  border: none;\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n  font-size: 0.88rem;\n  font-weight: 600;\n  padding: 11px 18px;\n  min-height: 44px;\n  border-radius: var(--radius);\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.save-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-hover);\n}\n.save-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n/*# sourceMappingURL=admin-settings.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-settings", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [FormsModule], template: `<div class="page" data-testid="admin-settings-page">
  <header class="page-head">
    <h1>Settings</h1>
    <p>Connection credentials for the deployment's backing services.</p>
  </header>

  <div class="services">
    @for (svc of services(); track svc.key) {
      <form
        class="svc-card"
        (submit)="$event.preventDefault(); save(svc.key)"
        [attr.data-testid]="'service-' + svc.key"
      >
        <div class="svc-head">
          <div class="svc-id">
            <h2>{{ svc.label }}</h2>
            <p>{{ svc.description }}</p>
          </div>
          @if (svc.configured) {
            <span class="badge configured" [attr.data-testid]="'badge-' + svc.key">
              Configured
            </span>
          } @else {
            <span class="badge unconfigured" [attr.data-testid]="'badge-' + svc.key">
              Not configured
            </span>
          }
        </div>

        <div class="fields">
          @for (field of svc.fields; track field.key) {
            <label class="field">
              <span>{{ field.label }}</span>
              <input
                [type]="field.type"
                [placeholder]="field.placeholder"
                [ngModel]="field.value"
                (ngModelChange)="updateField(svc.key, field.key, $event)"
                [name]="svc.key + '-' + field.key"
              />
            </label>
          }
        </div>

        <div class="svc-foot">
          @if (savedKey() === svc.key) {
            <span class="saved-note" [attr.data-testid]="'saved-' + svc.key">
              \u2713 Credentials saved
            </span>
          }
          <button type="submit" class="save-btn" [attr.data-testid]="'save-' + svc.key">
            Save credentials
          </button>
        </div>
      </form>
    }
  </div>
</div>
`, styles: ['/* src/app/admin-settings/admin-settings.component.css */\n:host {\n  display: block;\n}\n.page {\n  max-width: 760px;\n  margin: 0 auto;\n}\n.page-head {\n  margin-bottom: var(--space-5);\n}\n.page-head h1 {\n  font-size: 1.5rem;\n  margin: 0;\n}\n.page-head p {\n  margin: var(--space-1) 0 0;\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n}\n.services {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.svc-card {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: var(--space-5);\n  box-shadow: var(--shadow-sm);\n}\n.svc-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.svc-id h2 {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.svc-id p {\n  margin: var(--space-1) 0 0;\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n}\n.badge {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: var(--radius-pill);\n  font-size: 0.74rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge.configured {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n}\n.badge.configured::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--color-success);\n}\n.badge.unconfigured {\n  background: var(--color-surface-3);\n  color: var(--color-text-muted);\n}\n.badge.unconfigured::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--color-text-faint);\n}\n.fields {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: var(--space-3);\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.field span {\n  font-size: 0.74rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.field input {\n  padding: 10px 12px;\n  min-height: 44px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  background: var(--color-surface);\n  color: var(--color-text);\n  width: 100%;\n}\n.field input:focus {\n  border-color: var(--color-primary);\n}\n.svc-foot {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n}\n.saved-note {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-success);\n}\n.save-btn {\n  appearance: none;\n  border: none;\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n  font-size: 0.88rem;\n  font-weight: 600;\n  padding: 11px 18px;\n  min-height: 44px;\n  border-radius: var(--radius);\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.save-btn:hover {\n  background: var(--color-primary-hover);\n}\n.save-btn:active {\n  transform: scale(0.99);\n}\n/*# sourceMappingURL=admin-settings.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/admin-settings/admin-settings.component.ts", lineNumber: 17 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=chunk-NPTMPYWO.js.map
