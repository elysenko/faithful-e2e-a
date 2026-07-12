import {
  INDUSTRIES
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
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-S3A6C3F5.js";

// src/app/features/accounts/account-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/accounts", a0];
function AccountListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275property("value", i_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r1);
  }
}
function AccountListComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 11)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 2);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 14);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 14);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 2);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, a_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.industry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, a_r2.employees));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 9, a_r2.annualRevenue, "USD", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.owner);
  }
}
function AccountListComponent_ForEmpty_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td", 15)(2, "div", 16);
    \u0275\u0275text(3, "No accounts match your filters.");
    \u0275\u0275elementEnd()()();
  }
}
var AccountListComponent = class _AccountListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.industries = INDUSTRIES;
    this.params = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
    this.search = computed(() => this.params().get("q") ?? "");
    this.industry = computed(() => this.params().get("industry") ?? "");
    this.accounts = signal([
      { id: "a1", name: "Acme Corporation", industry: "Manufacturing", website: "acme.com", phone: "+1 415 555 0100", city: "San Francisco", employees: 4200, annualRevenue: 32e7, owner: "Demo Admin" },
      { id: "a2", name: "Globex Industries", industry: "Technology", website: "globex.io", phone: "+1 212 555 0142", city: "New York", employees: 1800, annualRevenue: 145e6, owner: "Priya Nair" },
      { id: "a3", name: "Initech", industry: "Finance", website: "initech.com", phone: "+1 512 555 0188", city: "Austin", employees: 640, annualRevenue: 58e6, owner: "Marco Diaz" },
      { id: "a4", name: "Umbrella Health", industry: "Healthcare", website: "umbrella-health.org", phone: "+1 617 555 0164", city: "Boston", employees: 9500, annualRevenue: 12e8, owner: "Demo Admin" },
      { id: "a5", name: "Soylent Foods", industry: "Retail", website: "soylentfoods.com", phone: "+1 312 555 0171", city: "Chicago", employees: 2300, annualRevenue: 21e7, owner: "Priya Nair" },
      { id: "a6", name: "Stark Energy", industry: "Energy", website: "starkenergy.com", phone: "+1 213 555 0133", city: "Los Angeles", employees: 7600, annualRevenue: 89e7, owner: "Marco Diaz" },
      { id: "a7", name: "Wayne Media", industry: "Media", website: "waynemedia.tv", phone: "+1 646 555 0119", city: "New York", employees: 1200, annualRevenue: 96e6, owner: "Demo Admin" },
      { id: "a8", name: "Hooli Cloud", industry: "Technology", website: "hooli.com", phone: "+1 408 555 0155", city: "Palo Alto", employees: 5400, annualRevenue: 54e7, owner: "Priya Nair" },
      { id: "a9", name: "Vandelay Imports", industry: "Retail", website: "vandelay.co", phone: "+1 305 555 0177", city: "Miami", employees: 320, annualRevenue: 24e6, owner: "Marco Diaz" },
      { id: "a10", name: "Pied Piper", industry: "Technology", website: "piedpiper.com", phone: "+1 650 555 0102", city: "Palo Alto", employees: 140, annualRevenue: 12e6, owner: "Demo Admin" }
    ]);
    this.filtered = computed(() => {
      const q = this.search().toLowerCase().trim();
      const ind = this.industry();
      return this.accounts().filter((a) => {
        const matchesQ = !q || a.name.toLowerCase().includes(q) || a.city.toLowerCase().includes(q);
        const matchesInd = !ind || a.industry === ind;
        return matchesQ && matchesInd;
      });
    });
  }
  onSearch(value) {
    this.router.navigate([], { queryParams: { q: value || null }, queryParamsHandling: "merge" });
  }
  onIndustry(value) {
    this.router.navigate([], { queryParams: { industry: value || null }, queryParamsHandling: "merge" });
  }
  static {
    this.\u0275fac = function AccountListComponent_Factory(t) {
      return new (t || _AccountListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountListComponent, selectors: [["app-account-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 5, consts: [[1, "page"], [1, "page-head"], [1, "muted"], ["routerLink", "/accounts/new", 1, "btn", "btn-primary"], [1, "toolbar"], ["type", "search", "placeholder", "Search name or city\u2026", 1, "input", "search", 3, "input", "value"], [1, "select", 3, "change", "value"], ["value", ""], [3, "value"], [1, "card", "table-wrap"], [1, "data"], [3, "routerLink"], [1, "no-hover"], [1, "badge", "badge-info"], [1, "mono"], ["colspan", "6"], [1, "empty-state"]], template: function AccountListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3);
        \u0275\u0275text(8, "+ New Account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "input", 5);
        \u0275\u0275listener("input", function AccountListComponent_Template_input_input_10_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "select", 6);
        \u0275\u0275listener("change", function AccountListComponent_Template_select_change_11_listener($event) {
          return ctx.onIndustry($event.target.value);
        });
        \u0275\u0275elementStart(12, "option", 7);
        \u0275\u0275text(13, "All industries");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, AccountListComponent_For_15_Template, 2, 2, "option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "table", 10)(18, "thead")(19, "tr")(20, "th");
        \u0275\u0275text(21, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "Industry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Employees");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th");
        \u0275\u0275text(29, "Annual revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th");
        \u0275\u0275text(31, "Owner");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "tbody");
        \u0275\u0275repeaterCreate(33, AccountListComponent_For_34_Template, 17, 16, "tr", 11, _forTrack0, false, AccountListComponent_ForEmpty_35_Template, 4, 0, "tr", 12);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.filtered().length, " of ", ctx.accounts().length, " accounts");
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.search());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.industry());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.industries);
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.filtered());
      }
    }, dependencies: [CommonModule, DecimalPipe, CurrencyPipe, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=accounts.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountListComponent, { className: "AccountListComponent", filePath: "src/app/features/accounts/account-list.component.ts", lineNumber: 15 });
})();
export {
  AccountListComponent
};
//# sourceMappingURL=account-list.component-IX2WC66W.js.map
