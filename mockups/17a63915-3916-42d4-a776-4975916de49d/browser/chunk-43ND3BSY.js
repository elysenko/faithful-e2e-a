import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YMZROMRV.js";
import {
  AuthService,
  ChangeDetectionStrategy,
  Component,
  __spreadProps,
  __spreadValues,
  inject,
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
} from "./chunk-C4FZZUVO.js";

// src/app/admin/admin-settings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminSettingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Settings saved.");
    \u0275\u0275elementEnd();
  }
}
function AdminSettingsComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20)(1, "span", 21)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 1);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "select", 22);
    \u0275\u0275listener("ngModelChange", function AdminSettingsComponent_For_44_Template_select_ngModelChange_6_listener($event) {
      const m_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRole(m_r2.id, $event));
    });
    \u0275\u0275elementStart(7, "option", 23);
    \u0275\u0275text(8, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 24);
    \u0275\u0275text(10, "Member");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", m_r2.role);
    \u0275\u0275attribute("data-testid", "role-" + m_r2.id);
  }
}
var AdminSettingsComponent = class _AdminSettingsComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.currentUser = this.auth.user;
    this.saved = signal(false);
    this.orgName = signal("Cloudline Sales Org");
    this.defaultCurrency = signal("USD");
    this.fiscalStart = signal("February");
    this.members = signal([]);
  }
  save() {
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 1800);
  }
  setRole(id, role) {
    this.members.update((list) => list.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { role }) : m));
  }
  static {
    this.\u0275fac = function AdminSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], decls: 45, vars: 4, consts: [[1, "page-header"], [1, "muted"], [1, "badge", "badge-admin"], [1, "admin-grid"], ["data-testid", "admin-org-form", 1, "card", 3, "ngSubmit"], [1, "section-title"], ["data-testid", "admin-saved", 1, "saved-note"], [1, "form-field"], ["for", "org"], ["id", "org", "name", "org", "data-testid", "admin-org-name", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "currency"], ["id", "currency", "name", "currency", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "USD"], ["value", "EUR"], ["value", "GBP"], ["for", "fiscal"], ["id", "fiscal", "name", "fiscal", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "admin-save", 1, "btn", "btn-primary"], [1, "card"], ["data-testid", "admin-members"], [1, "member-row"], [1, "member-meta"], [1, "input", "role-select", 3, "ngModelChange", "ngModel"], ["value", "ADMIN"], ["value", "USER"]], template: function AdminSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Admin Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Organization configuration and team management.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "span", 2);
        \u0275\u0275text(7, "Admin only");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "form", 4);
        \u0275\u0275listener("ngSubmit", function AdminSettingsComponent_Template_form_ngSubmit_9_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(10, "h2", 5);
        \u0275\u0275text(11, "Organization");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, AdminSettingsComponent_Conditional_12_Template, 2, 0, "p", 6);
        \u0275\u0275elementStart(13, "div", 7)(14, "label", 8);
        \u0275\u0275text(15, "Organization name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 9);
        \u0275\u0275listener("ngModelChange", function AdminSettingsComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.orgName.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 7)(18, "label", 10);
        \u0275\u0275text(19, "Default currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "select", 11);
        \u0275\u0275listener("ngModelChange", function AdminSettingsComponent_Template_select_ngModelChange_20_listener($event) {
          return ctx.defaultCurrency.set($event);
        });
        \u0275\u0275elementStart(21, "option", 12);
        \u0275\u0275text(22, "USD \u2014 US Dollar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "option", 13);
        \u0275\u0275text(24, "EUR \u2014 Euro");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "option", 14);
        \u0275\u0275text(26, "GBP \u2014 British Pound");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 7)(28, "label", 15);
        \u0275\u0275text(29, "Fiscal year start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "select", 16);
        \u0275\u0275listener("ngModelChange", function AdminSettingsComponent_Template_select_ngModelChange_30_listener($event) {
          return ctx.fiscalStart.set($event);
        });
        \u0275\u0275elementStart(31, "option");
        \u0275\u0275text(32, "January");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option");
        \u0275\u0275text(34, "February");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option");
        \u0275\u0275text(36, "April");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "button", 17);
        \u0275\u0275text(38, "Save settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 18)(40, "h2", 5);
        \u0275\u0275text(41, "Team members");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "ul", 19);
        \u0275\u0275repeaterCreate(43, AdminSettingsComponent_For_44_Template, 11, 4, "li", 20, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.saved() ? 12 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.orgName());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.defaultCurrency());
        \u0275\u0275advance(10);
        \u0275\u0275property("ngModel", ctx.fiscalStart());
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.members());
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.admin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 900px) {\n  .admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    align-items: start;\n  }\n}\n.badge-admin[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n.saved-note[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-weight: 600;\n  margin: 0 0 var(--space-3);\n}\n.member-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  min-height: 56px;\n  padding: var(--space-2) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.member-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.member-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.member-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.role-select[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 110px;\n}\n/*# sourceMappingURL=admin-settings.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-settings", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-header">
  <div>
    <h1>Admin Settings</h1>
    <p class="muted">Organization configuration and team management.</p>
  </div>
  <span class="badge badge-admin">Admin only</span>
</div>

<div class="admin-grid">
  <form class="card" (ngSubmit)="save()" data-testid="admin-org-form">
    <h2 class="section-title">Organization</h2>
    @if (saved()) {
      <p class="saved-note" data-testid="admin-saved">Settings saved.</p>
    }
    <div class="form-field">
      <label for="org">Organization name</label>
      <input id="org" class="input" name="org" [ngModel]="orgName()"
        (ngModelChange)="orgName.set($event)" data-testid="admin-org-name" />
    </div>
    <div class="form-field">
      <label for="currency">Default currency</label>
      <select id="currency" class="input" name="currency" [ngModel]="defaultCurrency()"
        (ngModelChange)="defaultCurrency.set($event)">
        <option value="USD">USD \u2014 US Dollar</option>
        <option value="EUR">EUR \u2014 Euro</option>
        <option value="GBP">GBP \u2014 British Pound</option>
      </select>
    </div>
    <div class="form-field">
      <label for="fiscal">Fiscal year start</label>
      <select id="fiscal" class="input" name="fiscal" [ngModel]="fiscalStart()"
        (ngModelChange)="fiscalStart.set($event)">
        <option>January</option>
        <option>February</option>
        <option>April</option>
      </select>
    </div>
    <button class="btn btn-primary" type="submit" data-testid="admin-save">Save settings</button>
  </form>

  <div class="card">
    <h2 class="section-title">Team members</h2>
    <ul data-testid="admin-members">
      @for (m of members(); track m.id) {
        <li class="member-row">
          <span class="member-meta">
            <strong>{{ m.name }}</strong>
            <small class="muted">{{ m.email }}</small>
          </span>
          <select class="input role-select" [ngModel]="m.role"
            (ngModelChange)="setRole(m.id, $event)" [attr.data-testid]="'role-' + m.id">
            <option value="ADMIN">Admin</option>
            <option value="USER">Member</option>
          </select>
        </li>
      }
    </ul>
  </div>
</div>
`, styles: ["/* src/app/admin/admin-settings.component.css */\n.admin-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 900px) {\n  .admin-grid {\n    grid-template-columns: 1fr 1fr;\n    align-items: start;\n  }\n}\n.badge-admin {\n  background: var(--color-primary);\n}\n.saved-note {\n  color: var(--color-success);\n  font-weight: 600;\n  margin: 0 0 var(--space-3);\n}\n.member-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  min-height: 56px;\n  padding: var(--space-2) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.member-row:last-child {\n  border-bottom: none;\n}\n.member-meta {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.member-meta small {\n  font-size: 0.8rem;\n}\n.role-select {\n  width: auto;\n  min-width: 110px;\n}\n/*# sourceMappingURL=admin-settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/admin/admin-settings.component.ts", lineNumber: 14 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=chunk-43ND3BSY.js.map
