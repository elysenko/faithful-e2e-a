import {
  LEAD_STATUSES
} from "./chunk-KI2LTX35.js";
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
  ApiService,
  errorMessage
} from "./chunk-NVB2XA36.js";
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
  ɵɵtextInterpolate
} from "./chunk-C4FZZUVO.js";

// src/app/leads/leads.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LeadsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Loading leads\u2026");
    \u0275\u0275elementEnd();
  }
}
function LeadsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "No leads yet.");
    \u0275\u0275elementEnd();
  }
}
function LeadsComponent_Conditional_10_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 23)(9, "span", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "lead-" + l_r1.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r1.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r1.email || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r1.status);
  }
}
function LeadsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 19)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, LeadsComponent_Conditional_10_For_14_Template, 11, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.leads());
  }
}
function LeadsComponent_Conditional_14_Template(rf, ctx) {
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
function LeadsComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
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
var LeadsComponent = class _LeadsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.statuses = LEAD_STATUSES;
    this.loading = signal(true);
    this.error = signal(null);
    this.saving = signal(false);
    this.leads = signal([]);
    this.name = signal("");
    this.company = signal("");
    this.email = signal("");
    this.status = signal("New");
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loading.set(true);
      try {
        this.leads.set(yield this.api.listLeads());
      } catch (err) {
        this.error.set(errorMessage(err, "Could not load leads."));
      } finally {
        this.loading.set(false);
      }
    });
  }
  create() {
    return __async(this, null, function* () {
      this.error.set(null);
      if (!this.name().trim()) {
        this.error.set("Name is required.");
        return;
      }
      this.saving.set(true);
      try {
        const created = yield this.api.createLead({
          name: this.name().trim(),
          email: this.email().trim() || void 0,
          status: this.status()
        });
        const lead = __spreadProps(__spreadValues({}, created), { company: this.company().trim() });
        this.leads.update((list) => [lead, ...list]);
        this.name.set("");
        this.company.set("");
        this.email.set("");
        this.status.set("New");
      } catch (err) {
        this.error.set(errorMessage(err, "Could not create the lead."));
      } finally {
        this.saving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function LeadsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LeadsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeadsComponent, selectors: [["app-leads"]], decls: 35, vars: 6, consts: [[1, "page-header"], [1, "muted"], [1, "list-layout", "with-form"], ["data-testid", "leads-loading", 1, "muted"], ["data-testid", "leads-empty", 1, "empty-state"], [1, "table-wrap"], [1, "create-form", "card", 3, "ngSubmit"], ["data-testid", "leads-error", 1, "error-text"], [1, "form-field"], ["for", "name"], ["id", "name", "name", "name", "placeholder", "Tom Becker", "data-testid", "lead-name", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "company"], ["id", "company", "name", "company", "placeholder", "Wayne Ltd", "data-testid", "lead-company", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "placeholder", "tom@wayne.co", "data-testid", "lead-email", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "status"], ["id", "status", "name", "status", "data-testid", "lead-status", 1, "input", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "submit", "data-testid", "lead-create", 1, "btn", "btn-primary", "block"], ["data-testid", "leads-list", 1, "table"], ["data-label", "Name"], ["data-label", "Company"], ["data-label", "Email"], ["data-label", "Status"], [1, "badge"]], template: function LeadsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Leads");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Prospects not yet converted.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div");
        \u0275\u0275template(8, LeadsComponent_Conditional_8_Template, 2, 0, "p", 3)(9, LeadsComponent_Conditional_9_Template, 2, 0, "div", 4)(10, LeadsComponent_Conditional_10_Template, 15, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 6);
        \u0275\u0275listener("ngSubmit", function LeadsComponent_Template_form_ngSubmit_11_listener() {
          return ctx.create();
        });
        \u0275\u0275elementStart(12, "h2");
        \u0275\u0275text(13, "New lead");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, LeadsComponent_Conditional_14_Template, 2, 1, "p", 7);
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 9);
        \u0275\u0275text(17, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275listener("ngModelChange", function LeadsComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.name.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 8)(20, "label", 11);
        \u0275\u0275text(21, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 12);
        \u0275\u0275listener("ngModelChange", function LeadsComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.company.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 8)(24, "label", 13);
        \u0275\u0275text(25, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 14);
        \u0275\u0275listener("ngModelChange", function LeadsComponent_Template_input_ngModelChange_26_listener($event) {
          return ctx.email.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 8)(28, "label", 15);
        \u0275\u0275text(29, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "select", 16);
        \u0275\u0275listener("ngModelChange", function LeadsComponent_Template_select_ngModelChange_30_listener($event) {
          return ctx.status.set($event);
        });
        \u0275\u0275repeaterCreate(31, LeadsComponent_For_32_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "button", 18);
        \u0275\u0275text(34, " Create lead ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.loading() ? 8 : ctx.leads().length === 0 ? 9 : 10);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.error() ? 14 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.name());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.company());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.email());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.status());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.statuses);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.list-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 900px) {\n  .list-layout.with-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 320px;\n    align-items: start;\n  }\n  .create-form[_ngcontent-%COMP%] {\n    position: sticky;\n    top: var(--space-4);\n  }\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.row-link[_ngcontent-%COMP%] {\n  color: var(--color-primary-dark);\n  font-weight: 600;\n}\n.create-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: var(--space-4);\n}\n.amount[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.check-btn[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: transparent;\n  color: var(--color-primary);\n  font-size: 1.2rem;\n  cursor: pointer;\n}\ntr.done[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n}\n.stage-badge[_ngcontent-%COMP%] {\n  color: var(--color-text-inverse);\n}\n.stage-prospecting[_ngcontent-%COMP%] {\n  background: var(--stage-prospecting);\n}\n.stage-qualification[_ngcontent-%COMP%] {\n  background: var(--stage-qualification);\n}\n.stage-proposal[_ngcontent-%COMP%] {\n  background: var(--stage-proposal);\n}\n.stage-negotiation[_ngcontent-%COMP%] {\n  background: var(--stage-negotiation);\n}\n.stage-closedwon[_ngcontent-%COMP%] {\n  background: var(--stage-won);\n}\n.stage-closedlost[_ngcontent-%COMP%] {\n  background: var(--stage-lost);\n}\n@media (max-width: 640px) {\n  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: var(--space-2) 0;\n    border-bottom: 1px solid var(--color-border);\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: none;\n    padding: var(--space-1) var(--space-4);\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    display: inline-block;\n    min-width: 96px;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    color: var(--color-text-muted);\n  }\n}\n/*# sourceMappingURL=list.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeadsComponent, [{
    type: Component,
    args: [{ selector: "app-leads", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-header">
  <div>
    <h1>Leads</h1>
    <p class="muted">Prospects not yet converted.</p>
  </div>
</div>

<div class="list-layout with-form">
  <div>
    @if (loading()) {
      <p class="muted" data-testid="leads-loading">Loading leads\u2026</p>
    } @else if (leads().length === 0) {
      <div class="empty-state" data-testid="leads-empty">No leads yet.</div>
    } @else {
      <div class="table-wrap">
        <table class="table" data-testid="leads-list">
          <thead>
            <tr><th>Name</th><th>Company</th><th>Email</th><th>Status</th></tr>
          </thead>
          <tbody>
            @for (l of leads(); track l.id) {
              <tr [attr.data-testid]="'lead-' + l.id">
                <td data-label="Name"><strong>{{ l.name }}</strong></td>
                <td data-label="Company">{{ l.company }}</td>
                <td data-label="Email">{{ l.email || '\u2014' }}</td>
                <td data-label="Status"><span class="badge">{{ l.status }}</span></td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>

  <form class="create-form card" (ngSubmit)="create()">
    <h2>New lead</h2>
    @if (error()) {
      <p class="error-text" data-testid="leads-error">{{ error() }}</p>
    }
    <div class="form-field">
      <label for="name">Name</label>
      <input id="name" class="input" name="name" placeholder="Tom Becker"
        [ngModel]="name()" (ngModelChange)="name.set($event)" data-testid="lead-name" />
    </div>
    <div class="form-field">
      <label for="company">Company</label>
      <input id="company" class="input" name="company" placeholder="Wayne Ltd"
        [ngModel]="company()" (ngModelChange)="company.set($event)" data-testid="lead-company" />
    </div>
    <div class="form-field">
      <label for="email">Email</label>
      <input id="email" class="input" type="email" name="email" placeholder="tom@wayne.co"
        [ngModel]="email()" (ngModelChange)="email.set($event)" data-testid="lead-email" />
    </div>
    <div class="form-field">
      <label for="status">Status</label>
      <select id="status" class="input" name="status"
        [ngModel]="status()" (ngModelChange)="status.set($event)" data-testid="lead-status">
        @for (s of statuses; track s) {
          <option [value]="s">{{ s }}</option>
        }
      </select>
    </div>
    <button class="btn btn-primary block" type="submit" data-testid="lead-create">
      Create lead
    </button>
  </form>
</div>
`, styles: ["/* src/app/shared/list.css */\n.list-layout {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-5);\n}\n@media (min-width: 900px) {\n  .list-layout.with-form {\n    grid-template-columns: 1fr 320px;\n    align-items: start;\n  }\n  .create-form {\n    position: sticky;\n    top: var(--space-4);\n  }\n}\n.table-wrap {\n  overflow-x: auto;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.row-link {\n  color: var(--color-primary-dark);\n  font-weight: 600;\n}\n.create-form h2 {\n  font-size: 1rem;\n  margin-bottom: var(--space-4);\n}\n.amount {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.check-btn {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: transparent;\n  color: var(--color-primary);\n  font-size: 1.2rem;\n  cursor: pointer;\n}\ntr.done td strong {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n}\n.stage-badge {\n  color: var(--color-text-inverse);\n}\n.stage-prospecting {\n  background: var(--stage-prospecting);\n}\n.stage-qualification {\n  background: var(--stage-qualification);\n}\n.stage-proposal {\n  background: var(--stage-proposal);\n}\n.stage-negotiation {\n  background: var(--stage-negotiation);\n}\n.stage-closedwon {\n  background: var(--stage-won);\n}\n.stage-closedlost {\n  background: var(--stage-lost);\n}\n@media (max-width: 640px) {\n  .table thead {\n    display: none;\n  }\n  .table,\n  .table tbody,\n  .table tr,\n  .table td {\n    display: block;\n    width: 100%;\n  }\n  .table tr {\n    padding: var(--space-2) 0;\n    border-bottom: 1px solid var(--color-border);\n  }\n  .table td {\n    border: none;\n    padding: var(--space-1) var(--space-4);\n  }\n  .table td::before {\n    content: attr(data-label);\n    display: inline-block;\n    min-width: 96px;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    color: var(--color-text-muted);\n  }\n}\n/*# sourceMappingURL=list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeadsComponent, { className: "LeadsComponent", filePath: "src/app/leads/leads.component.ts", lineNumber: 20 });
})();
export {
  LeadsComponent
};
//# sourceMappingURL=chunk-N4GUZNZM.js.map
