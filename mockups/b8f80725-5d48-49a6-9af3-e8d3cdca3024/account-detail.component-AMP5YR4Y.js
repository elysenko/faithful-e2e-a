import {
  STAGE_META
} from "./chunk-PDA44FSW.js";
import {
  toSignal
} from "./chunk-PAUVK2ZQ.js";
import {
  ActivatedRoute,
  CommonModule,
  CurrencyPipe,
  DecimalPipe,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S3A6C3F5.js";

// src/app/features/accounts/account-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/accounts", a0, "edit"];
var _c1 = (a0) => ["/contacts", a0];
var _c2 = (a0) => ["/opportunities", a0];
function AccountDetailComponent_For_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, c_r1.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r1.firstName, " ", c_r1.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.phone);
  }
}
function AccountDetailComponent_ForEmpty_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 17)(1, "td", 19)(2, "div", 20);
    \u0275\u0275text(3, "No related contacts.");
    \u0275\u0275elementEnd()()();
  }
}
function AccountDetailComponent_For_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 22);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c2, o_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.stageLabel(o_r2.stage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 5, o_r2.amount, "USD", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r2.closeDate);
  }
}
function AccountDetailComponent_ForEmpty_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 17)(1, "td", 19)(2, "div", 20);
    \u0275\u0275text(3, "No related opportunities.");
    \u0275\u0275elementEnd()()();
  }
}
function AccountDetailComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function AccountDetailComponent_Conditional_91_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 24)(2, "h2");
    \u0275\u0275text(3, "Delete account?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "This will permanently remove ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " and cannot be undone.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 25)(10, "button", 26);
    \u0275\u0275listener("click", function AccountDetailComponent_Conditional_91_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275text(11, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 6);
    \u0275\u0275listener("click", function AccountDetailComponent_Conditional_91_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete());
    });
    \u0275\u0275text(13, "Delete account");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.account().name);
  }
}
var AccountDetailComponent = class _AccountDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.pm = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
    this.qm = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
    this.id = computed(() => this.pm().get("id") ?? "");
    this.showDelete = computed(() => this.qm().get("modal") === "delete");
    this.accounts = signal([
      { id: "a1", name: "Acme Corporation", industry: "Manufacturing", website: "acme.com", phone: "+1 415 555 0100", city: "San Francisco", employees: 4200, annualRevenue: 32e7, owner: "Demo Admin" },
      { id: "a2", name: "Globex Industries", industry: "Technology", website: "globex.io", phone: "+1 212 555 0142", city: "New York", employees: 1800, annualRevenue: 145e6, owner: "Priya Nair" },
      { id: "a3", name: "Initech", industry: "Finance", website: "initech.com", phone: "+1 512 555 0188", city: "Austin", employees: 640, annualRevenue: 58e6, owner: "Marco Diaz" },
      { id: "a4", name: "Umbrella Health", industry: "Healthcare", website: "umbrella-health.org", phone: "+1 617 555 0164", city: "Boston", employees: 9500, annualRevenue: 12e8, owner: "Demo Admin" }
    ]);
    this.contacts = signal([
      { id: "c1", firstName: "Jane", lastName: "Rivera", title: "VP Operations", email: "jane@acme.com", phone: "+1 415 555 0110", accountId: "a1", accountName: "Acme Corporation", owner: "Demo Admin" },
      { id: "c2", firstName: "Sam", lastName: "Okafor", title: "CTO", email: "sam@acme.com", phone: "+1 415 555 0111", accountId: "a1", accountName: "Acme Corporation", owner: "Priya Nair" },
      { id: "c3", firstName: "Lena", lastName: "Park", title: "Procurement Lead", email: "lena@globex.io", phone: "+1 212 555 0150", accountId: "a2", accountName: "Globex Industries", owner: "Marco Diaz" }
    ]);
    this.opportunities = signal([
      { id: "o1", name: "Acme \u2014 Platform Renewal", accountId: "a1", accountName: "Acme Corporation", stage: "NEGOTIATION", amount: 12e4, closeDate: "2026-08-15", probability: 75, owner: "Demo Admin" },
      { id: "o6", name: "Acme Field Service Add-on", accountId: "a1", accountName: "Acme Corporation", stage: "PROPOSAL", amount: 38e3, closeDate: "2026-09-20", probability: 55, owner: "Priya Nair" },
      { id: "o2", name: "Globex Data Migration", accountId: "a2", accountName: "Globex Industries", stage: "PROPOSAL", amount: 84e3, closeDate: "2026-07-30", probability: 60, owner: "Priya Nair" }
    ]);
    this.account = computed(() => this.accounts().find((a) => a.id === this.id()) ?? this.accounts()[0]);
    this.relatedContacts = computed(() => this.contacts().filter((c) => c.accountId === this.account().id));
    this.relatedOpps = computed(() => this.opportunities().filter((o) => o.accountId === this.account().id));
  }
  stageLabel(key) {
    return STAGE_META.find((s) => s.key === key)?.label ?? key;
  }
  askDelete() {
    this.router.navigate([], { queryParams: { modal: "delete" }, queryParamsHandling: "merge" });
  }
  cancelDelete() {
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  confirmDelete() {
    this.accounts.update((list) => list.filter((a) => a.id !== this.account().id));
    this.router.navigate(["/accounts"]);
  }
  static {
    this.\u0275fac = function AccountDetailComponent_Factory(t) {
      return new (t || _AccountDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountDetailComponent, selectors: [["app-account-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 92, vars: 25, consts: [[1, "page"], ["routerLink", "/accounts", 1, "crumb"], [1, "page-head"], [1, "muted"], [1, "toolbar"], [1, "btn", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], [1, "card", "card-pad"], [1, "detail-grid"], [1, "detail-field"], [1, "k"], [1, "v"], [1, "v", "mono"], [1, "section-title"], [1, "table-wrap"], [1, "data"], [3, "routerLink"], [1, "no-hover"], [1, "mono", "muted"], ["colspan", "4"], [1, "empty-state"], [1, "badge"], [1, "mono"], [1, "scrim-modal", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "modal", "card"], [1, "form-actions"], [1, "btn", 3, "click"]], template: function AccountDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "header", 2)(4, "div")(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "a", 5);
        \u0275\u0275text(11, "Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function AccountDetailComponent_Template_button_click_12_listener() {
          return ctx.askDelete();
        });
        \u0275\u0275text(13, "Delete");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "section", 7)(15, "div", 8)(16, "div", 9)(17, "span", 10);
        \u0275\u0275text(18, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 11);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9)(22, "span", 10);
        \u0275\u0275text(23, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 12);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 9)(27, "span", 10);
        \u0275\u0275text(28, "Industry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 11);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 9)(32, "span", 10);
        \u0275\u0275text(33, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span", 11);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 9)(37, "span", 10);
        \u0275\u0275text(38, "Employees");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 12);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 9)(43, "span", 10);
        \u0275\u0275text(44, "Annual revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 12);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 9)(49, "span", 10);
        \u0275\u0275text(50, "Owner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 11);
        \u0275\u0275text(52);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(53, "section", 7)(54, "h2", 13);
        \u0275\u0275text(55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 14)(57, "table", 15)(58, "thead")(59, "tr")(60, "th");
        \u0275\u0275text(61, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "th");
        \u0275\u0275text(63, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "th");
        \u0275\u0275text(65, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th");
        \u0275\u0275text(67, "Phone");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "tbody");
        \u0275\u0275repeaterCreate(69, AccountDetailComponent_For_70_Template, 10, 8, "tr", 16, _forTrack0, false, AccountDetailComponent_ForEmpty_71_Template, 4, 0, "tr", 17);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "section", 7)(73, "h2", 13);
        \u0275\u0275text(74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 14)(76, "table", 15)(77, "thead")(78, "tr")(79, "th");
        \u0275\u0275text(80, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "th");
        \u0275\u0275text(82, "Stage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "th");
        \u0275\u0275text(84, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "th");
        \u0275\u0275text(86, "Close date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "tbody");
        \u0275\u0275repeaterCreate(88, AccountDetailComponent_For_89_Template, 12, 12, "tr", 16, _forTrack0, false, AccountDetailComponent_ForEmpty_90_Template, 4, 0, "tr", 17);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(91, AccountDetailComponent_Conditional_91_Template, 14, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.account().name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.account().industry, " \xB7 ", ctx.account().city, "");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c0, ctx.account().id));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.account().website);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.account().phone);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.account().industry);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.account().city);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 16, ctx.account().employees));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(47, 18, ctx.account().annualRevenue, "USD", "symbol", "1.0-0"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.account().owner);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Contacts (", ctx.relatedContacts().length, ")");
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.relatedContacts());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("Opportunities (", ctx.relatedOpps().length, ")");
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.relatedOpps());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(91, ctx.showDelete() ? 91 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, CurrencyPipe, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=accounts.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountDetailComponent, { className: "AccountDetailComponent", filePath: "src/app/features/accounts/account-detail.component.ts", lineNumber: 14 });
})();
export {
  AccountDetailComponent
};
//# sourceMappingURL=account-detail.component-AMP5YR4Y.js.map
