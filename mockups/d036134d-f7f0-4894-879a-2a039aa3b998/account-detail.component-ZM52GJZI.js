import {
  OPPORTUNITY_STAGES
} from "./chunk-JSKLNDIT.js";
import {
  toSignal
} from "./chunk-FSFIGSYB.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56EPECIG.js";
import {
  ActivatedRoute,
  CommonModule,
  CurrencyPipe,
  RouterLink,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  map,
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
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UJBMV62H.js";

// src/app/features/accounts/account-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AccountDetailComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function AccountDetailComponent_Conditional_3_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit());
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 16);
    \u0275\u0275listener("ngSubmit", function AccountDetailComponent_Conditional_3_Conditional_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "label", 18);
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "label", 20);
    \u0275\u0275text(7, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22)(10, "div", 17)(11, "label", 23);
    \u0275\u0275text(12, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "label", 25);
    \u0275\u0275text(16, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 27)(19, "button", 28);
    \u0275\u0275listener("click", function AccountDetailComponent_Conditional_3_Conditional_7_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 29);
    \u0275\u0275text(22, "Save changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(21);
    \u0275\u0275property("disabled", ctx_r1.form.invalid);
  }
}
function AccountDetailComponent_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "dl", 31)(2, "div")(3, "dt");
    \u0275\u0275text(4, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dd");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "dt");
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dd");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "dt");
    \u0275\u0275text(14, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const a_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(a_r4.website || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r4.phone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r4.industry);
  }
}
function AccountDetailComponent_Conditional_3_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "div")(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.phone || "");
  }
}
function AccountDetailComponent_Conditional_3_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 14);
    \u0275\u0275text(1, "No contacts yet.");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_3_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "div")(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.stageLabel(o_r6.stage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 3, o_r6.amount, "USD", "symbol", "1.0-0"));
  }
}
function AccountDetailComponent_Conditional_3_ForEmpty_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 14);
    \u0275\u0275text(1, "No opportunities yet.");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "h1", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AccountDetailComponent_Conditional_3_Conditional_6_Template, 2, 0, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AccountDetailComponent_Conditional_3_Conditional_7_Template, 23, 2, "form", 6)(8, AccountDetailComponent_Conditional_3_Conditional_8_Template, 17, 3);
    \u0275\u0275elementStart(9, "section", 7)(10, "div", 8)(11, "h2", 9);
    \u0275\u0275text(12, "Contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 11)(16, "ul", 12);
    \u0275\u0275repeaterCreate(17, AccountDetailComponent_Conditional_3_For_18_Template, 8, 3, "li", 13, _forTrack0, false, AccountDetailComponent_Conditional_3_ForEmpty_19_Template, 2, 0, "li", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "section", 7)(21, "div", 8)(22, "h2", 9);
    \u0275\u0275text(23, "Opportunities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 10);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 11)(27, "ul", 12);
    \u0275\u0275repeaterCreate(28, AccountDetailComponent_Conditional_3_For_29_Template, 9, 8, "li", 13, _forTrack0, false, AccountDetailComponent_Conditional_3_ForEmpty_30_Template, 2, 0, "li", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.industry);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, !ctx_r1.editing() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r1.editing() ? 7 : 8);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.contacts().length);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.contacts());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.opportunities().length);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.opportunities());
  }
}
function AccountDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "p", 36);
    \u0275\u0275text(2, "Account not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 37);
    \u0275\u0275text(4, "Back to accounts");
    \u0275\u0275elementEnd()();
  }
}
var AccountDetailComponent = class _AccountDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.fb = inject(FormBuilder);
    this.stages = OPPORTUNITY_STAGES;
    this.id = toSignal(this.route.paramMap.pipe(map((p) => p.get("id"))), {
      initialValue: this.route.snapshot.paramMap.get("id")
    });
    this.accounts = signal([
      { id: "1", name: "Globex Corporation", industry: "Manufacturing", website: "globex.com", phone: "+1 415 555 0132" },
      { id: "2", name: "Initech", industry: "Software", website: "initech.io", phone: "+1 512 555 0148" },
      { id: "3", name: "Umbrella Co", industry: "Healthcare", website: "umbrella.co", phone: "+1 212 555 0199" },
      { id: "4", name: "Soylent Industries", industry: "Food & Beverage", website: "soylent.com", phone: "+1 305 555 0170" }
    ]);
    this.relatedContacts = signal([
      { id: "c1", name: "Hank Scorpio", email: "hank@globex.com", phone: "+1 415 555 0140", accountId: "1" },
      { id: "c2", name: "Mona Vale", email: "mona@globex.com", accountId: "1" },
      { id: "c3", name: "Peter Gibbons", email: "peter@initech.io", accountId: "2" }
    ]);
    this.relatedOpportunities = signal([
      { id: "o1", name: "Globex \u2014 Platform license", amount: 48e3, stage: "Proposal", accountId: "1", closeDate: "2026-08-01" },
      { id: "o2", name: "Globex \u2014 Support renewal", amount: 12e3, stage: "Negotiation", accountId: "1", closeDate: "2026-07-28" },
      { id: "o3", name: "Initech \u2014 Migration", amount: 3e4, stage: "Qualification", accountId: "2" }
    ]);
    this.account = computed(() => this.accounts().find((a) => a.id === this.id()));
    this.contacts = computed(() => this.relatedContacts().filter((c) => c.accountId === this.id()));
    this.opportunities = computed(() => this.relatedOpportunities().filter((o) => o.accountId === this.id()));
    this.editing = signal(false);
    this.form = this.fb.group({
      name: ["", Validators.required],
      industry: ["", Validators.required],
      website: [""],
      phone: [""]
    });
  }
  stageLabel(key) {
    return this.stages.find((s) => s.key === key)?.label ?? key;
  }
  startEdit() {
    const a = this.account();
    if (!a)
      return;
    this.form.patchValue({
      name: a.name,
      industry: a.industry,
      website: a.website ?? "",
      phone: a.phone ?? ""
    });
    this.editing.set(true);
  }
  cancelEdit() {
    this.editing.set(false);
  }
  save() {
    if (this.form.invalid)
      return;
    const v = this.form.value;
    this.accounts.update((list) => list.map((a) => a.id === this.id() ? __spreadProps(__spreadValues({}, a), { name: v.name, industry: v.industry, website: v.website || void 0, phone: v.phone || void 0 }) : a));
    this.editing.set(false);
  }
  static {
    this.\u0275fac = function AccountDetailComponent_Factory(t) {
      return new (t || _AccountDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountDetailComponent, selectors: [["app-account-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page"], ["routerLink", "/accounts", 1, "back-link"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["data-testid", "account-edit", 1, "btn", "btn-ghost"], [1, "card", "edit-card", 3, "formGroup"], [1, "related"], [1, "related-head"], [1, "related-title"], [1, "badge"], [1, "card"], [1, "rel-list"], [1, "rel-row"], [1, "muted", "empty"], ["data-testid", "account-edit", 1, "btn", "btn-ghost", 3, "click"], [1, "card", "edit-card", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "e-name"], ["id", "e-name", "formControlName", "name", 1, "input"], ["for", "e-industry"], ["id", "e-industry", "formControlName", "industry", 1, "input"], [1, "grid-2"], ["for", "e-website"], ["id", "e-website", "formControlName", "website", 1, "input"], ["for", "e-phone"], ["id", "e-phone", "formControlName", "phone", 1, "input"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", "data-testid", "account-update", 1, "btn", "btn-primary", 3, "disabled"], [1, "card", "detail-card"], [1, "detail-grid"], [1, "strong"], [1, "muted", "small"], [1, "amount"], [1, "card", "empty-state"], [1, "muted"], ["routerLink", "/accounts", 1, "btn", "btn-primary"]], template: function AccountDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, AccountDetailComponent_Conditional_3_Template, 31, 8)(4, AccountDetailComponent_Conditional_4_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, (tmp_0_0 = ctx.account()) ? 3 : 4, tmp_0_0);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n.detail-card[_ngcontent-%COMP%], .edit-card[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  margin-bottom: var(--space-5);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: var(--space-4);\n  margin: 0;\n}\n.detail-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-faint);\n}\n.detail-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n  font-weight: 600;\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4);\n}\n.related[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.related-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-3);\n}\n.related-title[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n.rel-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.rel-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  min-height: 56px;\n  padding: var(--space-3) var(--space-4);\n  border-bottom: 1px solid var(--color-border);\n}\n.rel-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-success);\n  white-space: nowrap;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  align-items: center;\n}\n@media (max-width: 560px) {\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=account-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountDetailComponent, { className: "AccountDetailComponent", filePath: "src/app/features/accounts/account-detail.component.ts", lineNumber: 16 });
})();
export {
  AccountDetailComponent
};
//# sourceMappingURL=account-detail.component-ZM52GJZI.js.map
