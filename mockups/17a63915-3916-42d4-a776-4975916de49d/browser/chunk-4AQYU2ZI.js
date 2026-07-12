import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-FI25ZY7O.js";
import {
  ApiService,
  errorMessage
} from "./chunk-YJSS5FSF.js";
import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  __async,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UEP77ZUH.js";

// src/app/accounts/accounts.component.ts
var _c0 = (a0) => ["/accounts", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AccountsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Loading accounts\u2026");
    \u0275\u0275elementEnd();
  }
}
function AccountsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " No accounts yet. Create your first account to get started. ");
    \u0275\u0275elementEnd();
  }
}
function AccountsComponent_Conditional_10_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15)(2, "a", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "account-" + a_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, a_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.industry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.employees || "\u2014");
  }
}
function AccountsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Employees");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, AccountsComponent_Conditional_10_For_12_Template, 8, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.accounts());
  }
}
function AccountsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
var AccountsComponent = class _AccountsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.loading = signal(true);
    this.error = signal(null);
    this.accounts = signal([]);
    this.name = signal("");
    this.industry = signal("");
    this.saving = signal(false);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.load();
    });
  }
  load() {
    return __async(this, null, function* () {
      this.loading.set(true);
      try {
        this.accounts.set(yield this.api.listAccounts());
      } catch (err) {
        this.error.set(errorMessage(err, "Could not load accounts."));
      } finally {
        this.loading.set(false);
      }
    });
  }
  create() {
    return __async(this, null, function* () {
      this.error.set(null);
      if (!this.name().trim()) {
        this.error.set("Account name is required.");
        return;
      }
      this.saving.set(true);
      try {
        const account = yield this.api.createAccount({
          name: this.name().trim(),
          industry: this.industry().trim() || void 0
        });
        this.accounts.update((list) => [account, ...list]);
        this.name.set("");
        this.industry.set("");
      } catch (err) {
        this.error.set(errorMessage(err, "Could not create the account."));
      } finally {
        this.saving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function AccountsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountsComponent, selectors: [["app-accounts"]], decls: 25, vars: 4, consts: [[1, "page-header"], [1, "muted"], [1, "list-layout", "with-form"], ["data-testid", "accounts-loading", 1, "muted"], ["data-testid", "accounts-empty", 1, "empty-state"], [1, "table-wrap"], [1, "create-form", "card", 3, "ngSubmit"], ["data-testid", "accounts-error", 1, "error-text"], [1, "form-field"], ["for", "name"], ["id", "name", "name", "name", "placeholder", "Acme Corp", "data-testid", "account-name", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "industry"], ["id", "industry", "name", "industry", "placeholder", "Technology", "data-testid", "account-industry", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "account-create", 1, "btn", "btn-primary", "block"], ["data-testid", "accounts-list", 1, "table"], ["data-label", "Name"], [1, "row-link", 3, "routerLink"], ["data-label", "Industry"], ["data-label", "Employees"]], template: function AccountsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Companies you do business with.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div");
        \u0275\u0275template(8, AccountsComponent_Conditional_8_Template, 2, 0, "p", 3)(9, AccountsComponent_Conditional_9_Template, 2, 0, "div", 4)(10, AccountsComponent_Conditional_10_Template, 13, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 6);
        \u0275\u0275listener("ngSubmit", function AccountsComponent_Template_form_ngSubmit_11_listener() {
          return ctx.create();
        });
        \u0275\u0275elementStart(12, "h2");
        \u0275\u0275text(13, "New account");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, AccountsComponent_Conditional_14_Template, 2, 1, "p", 7);
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 9);
        \u0275\u0275text(17, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275listener("ngModelChange", function AccountsComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.name.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 8)(20, "label", 11);
        \u0275\u0275text(21, "Industry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 12);
        \u0275\u0275listener("ngModelChange", function AccountsComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.industry.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 13);
        \u0275\u0275text(24, " Create account ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.loading() ? 8 : ctx.accounts().length === 0 ? 9 : 10);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.error() ? 14 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.name());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.industry());
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.list-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 900px) {\n  .list-layout.with-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 320px;\n    align-items: start;\n  }\n  .create-form[_ngcontent-%COMP%] {\n    position: sticky;\n    top: var(--space-4);\n  }\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.row-link[_ngcontent-%COMP%] {\n  color: var(--color-primary-dark);\n  font-weight: 600;\n}\n.create-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: var(--space-4);\n}\n.amount[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.check-btn[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: transparent;\n  color: var(--color-primary);\n  font-size: 1.2rem;\n  cursor: pointer;\n}\ntr.done[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n}\n.stage-badge[_ngcontent-%COMP%] {\n  color: var(--color-text-inverse);\n}\n.stage-prospecting[_ngcontent-%COMP%] {\n  background: var(--stage-prospecting);\n}\n.stage-qualification[_ngcontent-%COMP%] {\n  background: var(--stage-qualification);\n}\n.stage-proposal[_ngcontent-%COMP%] {\n  background: var(--stage-proposal);\n}\n.stage-negotiation[_ngcontent-%COMP%] {\n  background: var(--stage-negotiation);\n}\n.stage-closedwon[_ngcontent-%COMP%] {\n  background: var(--stage-won);\n}\n.stage-closedlost[_ngcontent-%COMP%] {\n  background: var(--stage-lost);\n}\n@media (max-width: 640px) {\n  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: var(--space-2) 0;\n    border-bottom: 1px solid var(--color-border);\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: none;\n    padding: var(--space-1) var(--space-4);\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    display: inline-block;\n    min-width: 96px;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    color: var(--color-text-muted);\n  }\n}\n/*# sourceMappingURL=list.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountsComponent, [{
    type: Component,
    args: [{ selector: "app-accounts", standalone: true, imports: [FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-header">
  <div>
    <h1>Accounts</h1>
    <p class="muted">Companies you do business with.</p>
  </div>
</div>

<div class="list-layout with-form">
  <div>
    @if (loading()) {
      <p class="muted" data-testid="accounts-loading">Loading accounts\u2026</p>
    } @else if (accounts().length === 0) {
      <div class="empty-state" data-testid="accounts-empty">
        No accounts yet. Create your first account to get started.
      </div>
    } @else {
      <div class="table-wrap">
        <table class="table" data-testid="accounts-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Industry</th>
              <th>Employees</th>
            </tr>
          </thead>
          <tbody>
            @for (a of accounts(); track a.id) {
              <tr [attr.data-testid]="'account-' + a.id">
                <td data-label="Name">
                  <a class="row-link" [routerLink]="['/accounts', a.id]">{{ a.name }}</a>
                </td>
                <td data-label="Industry">{{ a.industry }}</td>
                <td data-label="Employees">{{ a.employees || '\u2014' }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>

  <form class="create-form card" (ngSubmit)="create()">
    <h2>New account</h2>
    @if (error()) {
      <p class="error-text" data-testid="accounts-error">{{ error() }}</p>
    }
    <div class="form-field">
      <label for="name">Name</label>
      <input id="name" class="input" name="name" placeholder="Acme Corp"
        [ngModel]="name()" (ngModelChange)="name.set($event)" data-testid="account-name" />
    </div>
    <div class="form-field">
      <label for="industry">Industry</label>
      <input id="industry" class="input" name="industry" placeholder="Technology"
        [ngModel]="industry()" (ngModelChange)="industry.set($event)" data-testid="account-industry" />
    </div>
    <button class="btn btn-primary block" type="submit" data-testid="account-create">
      Create account
    </button>
  </form>
</div>
`, styles: ["/* src/app/shared/list.css */\n.list-layout {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 900px) {\n  .list-layout.with-form {\n    grid-template-columns: 1fr 320px;\n    align-items: start;\n  }\n  .create-form {\n    position: sticky;\n    top: var(--space-4);\n  }\n}\n.table-wrap {\n  overflow-x: auto;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.row-link {\n  color: var(--color-primary-dark);\n  font-weight: 600;\n}\n.create-form h2 {\n  font-size: 1rem;\n  margin-bottom: var(--space-4);\n}\n.amount {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.check-btn {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: transparent;\n  color: var(--color-primary);\n  font-size: 1.2rem;\n  cursor: pointer;\n}\ntr.done td strong {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n}\n.stage-badge {\n  color: var(--color-text-inverse);\n}\n.stage-prospecting {\n  background: var(--stage-prospecting);\n}\n.stage-qualification {\n  background: var(--stage-qualification);\n}\n.stage-proposal {\n  background: var(--stage-proposal);\n}\n.stage-negotiation {\n  background: var(--stage-negotiation);\n}\n.stage-closedwon {\n  background: var(--stage-won);\n}\n.stage-closedlost {\n  background: var(--stage-lost);\n}\n@media (max-width: 640px) {\n  .table thead {\n    display: none;\n  }\n  .table,\n  .table tbody,\n  .table tr,\n  .table td {\n    display: block;\n    width: 100%;\n  }\n  .table tr {\n    padding: var(--space-2) 0;\n    border-bottom: 1px solid var(--color-border);\n  }\n  .table td {\n    border: none;\n    padding: var(--space-1) var(--space-4);\n  }\n  .table td::before {\n    content: attr(data-label);\n    display: inline-block;\n    min-width: 96px;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    color: var(--color-text-muted);\n  }\n}\n/*# sourceMappingURL=list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountsComponent, { className: "AccountsComponent", filePath: "src/app/accounts/accounts.component.ts", lineNumber: 21 });
})();
export {
  AccountsComponent
};
//# sourceMappingURL=chunk-4AQYU2ZI.js.map
