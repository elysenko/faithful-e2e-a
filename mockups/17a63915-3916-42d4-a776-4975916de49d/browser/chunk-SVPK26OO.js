import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-FI25ZY7O.js";
import {
  ApiService,
  errorMessage
} from "./chunk-YJSS5FSF.js";
import {
  ActivatedRoute,
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  __async,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
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
  ɵɵtextInterpolate1
} from "./chunk-UEP77ZUH.js";

// src/app/accounts/account-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AccountDetailComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "Saved");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "No related contacts.");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_0_Conditional_44_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.email);
  }
}
function AccountDetailComponent_Conditional_0_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, AccountDetailComponent_Conditional_0_Conditional_44_For_2_Template, 5, 2, "li", 24, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.contacts());
  }
}
function AccountDetailComponent_Conditional_0_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "No related opportunities.");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_0_Conditional_52_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "span")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r4.stage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\\$", o_r4.amount.toLocaleString(), "");
  }
}
function AccountDetailComponent_Conditional_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, AccountDetailComponent_Conditional_0_Conditional_52_For_2_Template, 8, 3, "li", 24, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.opportunities());
  }
}
function AccountDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "a", 1);
    \u0275\u0275text(3, "\u2190 Accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 2);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AccountDetailComponent_Conditional_0_Conditional_8_Template, 2, 0, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 4)(10, "form", 5);
    \u0275\u0275listener("ngSubmit", function AccountDetailComponent_Conditional_0_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(11, "h2", 6);
    \u0275\u0275text(12, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "label", 9);
    \u0275\u0275text(16, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 10);
    \u0275\u0275listener("ngModelChange", function AccountDetailComponent_Conditional_0_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.patch("name", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 8)(19, "label", 11);
    \u0275\u0275text(20, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 12);
    \u0275\u0275listener("ngModelChange", function AccountDetailComponent_Conditional_0_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.patch("industry", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 8)(23, "label", 13);
    \u0275\u0275text(24, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 14);
    \u0275\u0275listener("ngModelChange", function AccountDetailComponent_Conditional_0_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.patch("website", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 8)(27, "label", 15);
    \u0275\u0275text(28, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 16);
    \u0275\u0275listener("ngModelChange", function AccountDetailComponent_Conditional_0_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.patch("phone", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 8)(31, "label", 17);
    \u0275\u0275text(32, "Employees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 18);
    \u0275\u0275listener("ngModelChange", function AccountDetailComponent_Conditional_0_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.patch("employees", +$event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 19);
    \u0275\u0275text(35, "Save changes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 20)(37, "div", 21)(38, "div", 22)(39, "h2", 6);
    \u0275\u0275text(40, "Contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 2);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, AccountDetailComponent_Conditional_0_Conditional_43_Template, 2, 0, "div", 23)(44, AccountDetailComponent_Conditional_0_Conditional_44_Template, 3, 0, "ul");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 21)(46, "div", 22)(47, "h2", 6);
    \u0275\u0275text(48, "Opportunities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 2);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, AccountDetailComponent_Conditional_0_Conditional_51_Template, 2, 0, "div", 23)(52, AccountDetailComponent_Conditional_0_Conditional_52_Template, 3, 0, "ul");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const acct_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(acct_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acct_r5.industry);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saved() ? 8 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", acct_r5.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", acct_r5.industry);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", acct_r5.website);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", acct_r5.phone);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", acct_r5.employees);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.contacts().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contacts().length === 0 ? 43 : 44);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.opportunities().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.opportunities().length === 0 ? 51 : 52);
  }
}
var AccountDetailComponent = class _AccountDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.api = inject(ApiService);
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    this.loading = signal(true);
    this.saved = signal(false);
    this.error = signal(null);
    this.account = signal([]);
    this.contacts = signal([]);
    this.opportunities = signal([]);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loading.set(true);
      try {
        const detail = yield this.api.accountDetail(this.id);
        this.account.set([detail.account]);
        this.contacts.set(detail.contacts);
        this.opportunities.set(detail.opportunities);
      } catch (err) {
        this.error.set(errorMessage(err, "Could not load this account."));
      } finally {
        this.loading.set(false);
      }
    });
  }
  save() {
    return __async(this, null, function* () {
      const current = this.account()[0];
      if (!current)
        return;
      this.error.set(null);
      try {
        const updated = yield this.api.updateAccount({
          id: current.id,
          name: current.name,
          industry: current.industry || void 0
        });
        this.account.set([__spreadValues(__spreadValues({}, current), updated)]);
        this.saved.set(true);
        setTimeout(() => this.saved.set(false), 1800);
      } catch (err) {
        this.error.set(errorMessage(err, "Could not save changes."));
      }
    });
  }
  patch(key, value) {
    this.account.update((list) => {
      const next = [...list];
      if (next[0])
        next[0] = __spreadProps(__spreadValues({}, next[0]), { [key]: value });
      return next;
    });
  }
  static {
    this.\u0275fac = function AccountDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountDetailComponent, selectors: [["app-account-detail"]], decls: 1, vars: 1, consts: [[1, "page-header"], ["routerLink", "/accounts", 1, "row-link"], [1, "muted"], ["data-testid", "account-saved", 1, "badge", "badge-ok"], [1, "detail-grid"], ["data-testid", "account-edit", 1, "card", 3, "ngSubmit"], [1, "section-title"], [1, "form-grid"], [1, "form-field"], ["for", "name"], ["id", "name", "name", "name", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "industry"], ["id", "industry", "name", "industry", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "website"], ["id", "website", "name", "website", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["id", "phone", "name", "phone", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "employees"], ["id", "employees", "type", "number", "name", "employees", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "account-save", 1, "btn", "btn-primary"], [1, "related"], [1, "card"], [1, "related-head"], [1, "empty-state"], [1, "mini-row"], [1, "amount"]], template: function AccountDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AccountDetailComponent_Conditional_0_Template, 53, 12);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.account()[0]) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 960px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1.4fr 1fr;\n    align-items: start;\n  }\n}\n.related[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.related-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.related-head[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mini-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  min-height: 48px;\n  padding: var(--space-2) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.mini-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.mini-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n}\n.amount[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n  color: var(--color-primary-dark);\n}\n.badge-ok[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.row-link[_ngcontent-%COMP%] {\n  color: var(--color-primary-dark);\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=account-detail.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountDetailComponent, [{
    type: Component,
    args: [{ selector: "app-account-detail", standalone: true, imports: [FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (account()[0]; as acct) {
  <div class="page-header">
    <div>
      <a class="row-link" routerLink="/accounts">\u2190 Accounts</a>
      <h1>{{ acct.name }}</h1>
      <p class="muted">{{ acct.industry }}</p>
    </div>
    @if (saved()) {
      <span class="badge badge-ok" data-testid="account-saved">Saved</span>
    }
  </div>

  <div class="detail-grid">
    <form class="card" (ngSubmit)="save()" data-testid="account-edit">
      <h2 class="section-title">Details</h2>
      <div class="form-grid">
        <div class="form-field">
          <label for="name">Name</label>
          <input id="name" class="input" name="name" [ngModel]="acct.name"
            (ngModelChange)="patch('name', $event)" />
        </div>
        <div class="form-field">
          <label for="industry">Industry</label>
          <input id="industry" class="input" name="industry" [ngModel]="acct.industry"
            (ngModelChange)="patch('industry', $event)" />
        </div>
        <div class="form-field">
          <label for="website">Website</label>
          <input id="website" class="input" name="website" [ngModel]="acct.website"
            (ngModelChange)="patch('website', $event)" />
        </div>
        <div class="form-field">
          <label for="phone">Phone</label>
          <input id="phone" class="input" name="phone" [ngModel]="acct.phone"
            (ngModelChange)="patch('phone', $event)" />
        </div>
        <div class="form-field">
          <label for="employees">Employees</label>
          <input id="employees" class="input" type="number" name="employees"
            [ngModel]="acct.employees" (ngModelChange)="patch('employees', +$event)" />
        </div>
      </div>
      <button class="btn btn-primary" type="submit" data-testid="account-save">Save changes</button>
    </form>

    <div class="related">
      <div class="card">
        <div class="related-head">
          <h2 class="section-title">Contacts</h2>
          <span class="muted">{{ contacts().length }}</span>
        </div>
        @if (contacts().length === 0) {
          <div class="empty-state">No related contacts.</div>
        } @else {
          <ul>
            @for (c of contacts(); track c.id) {
              <li class="mini-row">
                <strong>{{ c.name }}</strong>
                <small class="muted">{{ c.email }}</small>
              </li>
            }
          </ul>
        }
      </div>

      <div class="card">
        <div class="related-head">
          <h2 class="section-title">Opportunities</h2>
          <span class="muted">{{ opportunities().length }}</span>
        </div>
        @if (opportunities().length === 0) {
          <div class="empty-state">No related opportunities.</div>
        } @else {
          <ul>
            @for (o of opportunities(); track o.id) {
              <li class="mini-row">
                <span>
                  <strong>{{ o.name }}</strong>
                  <small class="muted">{{ o.stage }}</small>
                </span>
                <span class="amount">\\\${{ o.amount.toLocaleString() }}</span>
              </li>
            }
          </ul>
        }
      </div>
    </div>
  </div>
}
`, styles: ["/* src/app/accounts/account-detail.component.css */\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 960px) {\n  .detail-grid {\n    grid-template-columns: 1.4fr 1fr;\n    align-items: start;\n  }\n}\n.related {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.related-head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.related-head .section-title {\n  margin-top: 0;\n}\n.mini-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  min-height: 48px;\n  padding: var(--space-2) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.mini-row:last-child {\n  border-bottom: none;\n}\n.mini-row small {\n  display: block;\n  font-size: 0.8rem;\n}\n.amount {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n  color: var(--color-primary-dark);\n}\n.badge-ok {\n  background: var(--color-success);\n}\n.row-link {\n  color: var(--color-primary-dark);\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=account-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountDetailComponent, { className: "AccountDetailComponent", filePath: "src/app/accounts/account-detail.component.ts", lineNumber: 21 });
})();
export {
  AccountDetailComponent
};
//# sourceMappingURL=chunk-SVPK26OO.js.map
