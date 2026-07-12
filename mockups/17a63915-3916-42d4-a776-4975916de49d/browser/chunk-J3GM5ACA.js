import {
  STAGES
} from "./chunk-KI2LTX35.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-FI25ZY7O.js";
import {
  ApiService,
  errorMessage
} from "./chunk-YJSS5FSF.js";
import {
  ChangeDetectionStrategy,
  Component,
  __async,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UEP77ZUH.js";

// src/app/opportunities/opportunities.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OpportunitiesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Loading opportunities\u2026");
    \u0275\u0275elementEnd();
  }
}
function OpportunitiesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "No opportunities yet.");
    \u0275\u0275elementEnd();
  }
}
function OpportunitiesComponent_Conditional_10_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 22)(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-testid", "opportunity-" + o_r1.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + ctx_r1.stageClass(o_r1.stage));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.stage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\\$", o_r1.amount.toLocaleString(), "");
  }
}
function OpportunitiesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 19)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, OpportunitiesComponent_Conditional_10_For_14_Template, 11, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.opportunities());
  }
}
function OpportunitiesComponent_Conditional_14_Template(rf, ctx) {
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
function OpportunitiesComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3);
  }
}
function OpportunitiesComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275property("value", a_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r4.name);
  }
}
var OpportunitiesComponent = class _OpportunitiesComponent {
  constructor() {
    this.api = inject(ApiService);
    this.stages = STAGES;
    this.loading = signal(true);
    this.error = signal(null);
    this.saving = signal(false);
    this.accounts = signal([]);
    this.opportunities = signal([]);
    this.name = signal("");
    this.amount = signal(null);
    this.stage = signal("Prospecting");
    this.accountId = signal("");
  }
  stageClass(stage) {
    return "stage-" + stage.toLowerCase();
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loading.set(true);
      try {
        const [opportunities, accounts] = yield Promise.all([
          this.api.listOpportunities(),
          this.api.listAccounts()
        ]);
        this.opportunities.set(opportunities);
        this.accounts.set(accounts);
        if (accounts[0])
          this.accountId.set(accounts[0].id);
      } catch (err) {
        this.error.set(errorMessage(err, "Could not load opportunities."));
      } finally {
        this.loading.set(false);
      }
    });
  }
  create() {
    return __async(this, null, function* () {
      this.error.set(null);
      if (!this.name().trim() || !this.amount() || this.amount() <= 0) {
        this.error.set("Name and a positive amount are required.");
        return;
      }
      if (!this.accountId()) {
        this.error.set("Create an account first, then link the opportunity to it.");
        return;
      }
      this.saving.set(true);
      try {
        const created = yield this.api.createOpportunity({
          name: this.name().trim(),
          amount: this.amount(),
          stage: this.stage(),
          accountId: this.accountId()
        });
        const acct = this.accounts().find((a) => a.id === this.accountId());
        const opp = __spreadProps(__spreadValues({}, created), { accountName: acct?.name ?? created.accountName });
        this.opportunities.update((list) => [opp, ...list]);
        this.name.set("");
        this.amount.set(null);
      } catch (err) {
        this.error.set(errorMessage(err, "Could not create the opportunity."));
      } finally {
        this.saving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function OpportunitiesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OpportunitiesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpportunitiesComponent, selectors: [["app-opportunities"]], decls: 37, vars: 6, consts: [[1, "page-header"], [1, "muted"], [1, "list-layout", "with-form"], ["data-testid", "opportunities-loading", 1, "muted"], ["data-testid", "opportunities-empty", 1, "empty-state"], [1, "table-wrap"], [1, "create-form", "card", 3, "ngSubmit"], ["data-testid", "opportunities-error", 1, "error-text"], [1, "form-field"], ["for", "name"], ["id", "name", "name", "name", "placeholder", "Acme \u2014 New Deal", "data-testid", "opportunity-name", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "amount"], ["id", "amount", "type", "number", "name", "amount", "placeholder", "25000", "data-testid", "opportunity-amount", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "stage"], ["id", "stage", "name", "stage", "data-testid", "opportunity-stage", 1, "input", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "account"], ["id", "account", "name", "account", "data-testid", "opportunity-account", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "opportunity-create", 1, "btn", "btn-primary", "block"], ["data-testid", "opportunities-list", 1, "table"], ["data-label", "Name"], ["data-label", "Account"], ["data-label", "Stage"], [1, "badge", "stage-badge"], ["data-label", "Amount", 1, "amount"]], template: function OpportunitiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Opportunities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Deals moving through your pipeline.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div");
        \u0275\u0275template(8, OpportunitiesComponent_Conditional_8_Template, 2, 0, "p", 3)(9, OpportunitiesComponent_Conditional_9_Template, 2, 0, "div", 4)(10, OpportunitiesComponent_Conditional_10_Template, 15, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 6);
        \u0275\u0275listener("ngSubmit", function OpportunitiesComponent_Template_form_ngSubmit_11_listener() {
          return ctx.create();
        });
        \u0275\u0275elementStart(12, "h2");
        \u0275\u0275text(13, "New opportunity");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, OpportunitiesComponent_Conditional_14_Template, 2, 1, "p", 7);
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 9);
        \u0275\u0275text(17, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275listener("ngModelChange", function OpportunitiesComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.name.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 8)(20, "label", 11);
        \u0275\u0275text(21, "Amount (USD)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 12);
        \u0275\u0275listener("ngModelChange", function OpportunitiesComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.amount.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 8)(24, "label", 13);
        \u0275\u0275text(25, "Stage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "select", 14);
        \u0275\u0275listener("ngModelChange", function OpportunitiesComponent_Template_select_ngModelChange_26_listener($event) {
          return ctx.stage.set($event);
        });
        \u0275\u0275repeaterCreate(27, OpportunitiesComponent_For_28_Template, 2, 2, "option", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 8)(30, "label", 16);
        \u0275\u0275text(31, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "select", 17);
        \u0275\u0275listener("ngModelChange", function OpportunitiesComponent_Template_select_ngModelChange_32_listener($event) {
          return ctx.accountId.set($event);
        });
        \u0275\u0275repeaterCreate(33, OpportunitiesComponent_For_34_Template, 2, 2, "option", 15, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "button", 18);
        \u0275\u0275text(36, " Create opportunity ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.loading() ? 8 : ctx.opportunities().length === 0 ? 9 : 10);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.error() ? 14 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.name());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.amount());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.stage());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.stages);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.accountId());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.accounts());
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.list-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 900px) {\n  .list-layout.with-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 320px;\n    align-items: start;\n  }\n  .create-form[_ngcontent-%COMP%] {\n    position: sticky;\n    top: var(--space-4);\n  }\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.row-link[_ngcontent-%COMP%] {\n  color: var(--color-primary-dark);\n  font-weight: 600;\n}\n.create-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: var(--space-4);\n}\n.amount[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.check-btn[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: transparent;\n  color: var(--color-primary);\n  font-size: 1.2rem;\n  cursor: pointer;\n}\ntr.done[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n}\n.stage-badge[_ngcontent-%COMP%] {\n  color: var(--color-text-inverse);\n}\n.stage-prospecting[_ngcontent-%COMP%] {\n  background: var(--stage-prospecting);\n}\n.stage-qualification[_ngcontent-%COMP%] {\n  background: var(--stage-qualification);\n}\n.stage-proposal[_ngcontent-%COMP%] {\n  background: var(--stage-proposal);\n}\n.stage-negotiation[_ngcontent-%COMP%] {\n  background: var(--stage-negotiation);\n}\n.stage-closedwon[_ngcontent-%COMP%] {\n  background: var(--stage-won);\n}\n.stage-closedlost[_ngcontent-%COMP%] {\n  background: var(--stage-lost);\n}\n@media (max-width: 640px) {\n  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: var(--space-2) 0;\n    border-bottom: 1px solid var(--color-border);\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: none;\n    padding: var(--space-1) var(--space-4);\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    display: inline-block;\n    min-width: 96px;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    color: var(--color-text-muted);\n  }\n}\n/*# sourceMappingURL=list.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpportunitiesComponent, [{
    type: Component,
    args: [{ selector: "app-opportunities", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-header">
  <div>
    <h1>Opportunities</h1>
    <p class="muted">Deals moving through your pipeline.</p>
  </div>
</div>

<div class="list-layout with-form">
  <div>
    @if (loading()) {
      <p class="muted" data-testid="opportunities-loading">Loading opportunities\u2026</p>
    } @else if (opportunities().length === 0) {
      <div class="empty-state" data-testid="opportunities-empty">No opportunities yet.</div>
    } @else {
      <div class="table-wrap">
        <table class="table" data-testid="opportunities-list">
          <thead>
            <tr><th>Name</th><th>Account</th><th>Stage</th><th>Amount</th></tr>
          </thead>
          <tbody>
            @for (o of opportunities(); track o.id) {
              <tr [attr.data-testid]="'opportunity-' + o.id">
                <td data-label="Name"><strong>{{ o.name }}</strong></td>
                <td data-label="Account">{{ o.accountName }}</td>
                <td data-label="Stage">
                  <span class="badge stage-badge" [class]="'badge ' + stageClass(o.stage)">{{ o.stage }}</span>
                </td>
                <td data-label="Amount" class="amount">\\\${{ o.amount.toLocaleString() }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>

  <form class="create-form card" (ngSubmit)="create()">
    <h2>New opportunity</h2>
    @if (error()) {
      <p class="error-text" data-testid="opportunities-error">{{ error() }}</p>
    }
    <div class="form-field">
      <label for="name">Name</label>
      <input id="name" class="input" name="name" placeholder="Acme \u2014 New Deal"
        [ngModel]="name()" (ngModelChange)="name.set($event)" data-testid="opportunity-name" />
    </div>
    <div class="form-field">
      <label for="amount">Amount (USD)</label>
      <input id="amount" class="input" type="number" name="amount" placeholder="25000"
        [ngModel]="amount()" (ngModelChange)="amount.set($event)" data-testid="opportunity-amount" />
    </div>
    <div class="form-field">
      <label for="stage">Stage</label>
      <select id="stage" class="input" name="stage"
        [ngModel]="stage()" (ngModelChange)="stage.set($event)" data-testid="opportunity-stage">
        @for (s of stages; track s) {
          <option [value]="s">{{ s }}</option>
        }
      </select>
    </div>
    <div class="form-field">
      <label for="account">Account</label>
      <select id="account" class="input" name="account"
        [ngModel]="accountId()" (ngModelChange)="accountId.set($event)" data-testid="opportunity-account">
        @for (a of accounts(); track a.id) {
          <option [value]="a.id">{{ a.name }}</option>
        }
      </select>
    </div>
    <button class="btn btn-primary block" type="submit" data-testid="opportunity-create">
      Create opportunity
    </button>
  </form>
</div>
`, styles: ["/* src/app/shared/list.css */\n.list-layout {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 900px) {\n  .list-layout.with-form {\n    grid-template-columns: 1fr 320px;\n    align-items: start;\n  }\n  .create-form {\n    position: sticky;\n    top: var(--space-4);\n  }\n}\n.table-wrap {\n  overflow-x: auto;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.row-link {\n  color: var(--color-primary-dark);\n  font-weight: 600;\n}\n.create-form h2 {\n  font-size: 1rem;\n  margin-bottom: var(--space-4);\n}\n.amount {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.check-btn {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: transparent;\n  color: var(--color-primary);\n  font-size: 1.2rem;\n  cursor: pointer;\n}\ntr.done td strong {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n}\n.stage-badge {\n  color: var(--color-text-inverse);\n}\n.stage-prospecting {\n  background: var(--stage-prospecting);\n}\n.stage-qualification {\n  background: var(--stage-qualification);\n}\n.stage-proposal {\n  background: var(--stage-proposal);\n}\n.stage-negotiation {\n  background: var(--stage-negotiation);\n}\n.stage-closedwon {\n  background: var(--stage-won);\n}\n.stage-closedlost {\n  background: var(--stage-lost);\n}\n@media (max-width: 640px) {\n  .table thead {\n    display: none;\n  }\n  .table,\n  .table tbody,\n  .table tr,\n  .table td {\n    display: block;\n    width: 100%;\n  }\n  .table tr {\n    padding: var(--space-2) 0;\n    border-bottom: 1px solid var(--color-border);\n  }\n  .table td {\n    border: none;\n    padding: var(--space-1) var(--space-4);\n  }\n  .table td::before {\n    content: attr(data-label);\n    display: inline-block;\n    min-width: 96px;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    color: var(--color-text-muted);\n  }\n}\n/*# sourceMappingURL=list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpportunitiesComponent, { className: "OpportunitiesComponent", filePath: "src/app/opportunities/opportunities.component.ts", lineNumber: 20 });
})();
export {
  OpportunitiesComponent
};
//# sourceMappingURL=chunk-J3GM5ACA.js.map
