import {
  LEAD_STATUSES
} from "./chunk-PDA44FSW.js";
import {
  toSignal
} from "./chunk-PAUVK2ZQ.js";
import {
  ActivatedRoute,
  CommonModule,
  NgClass,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-S3A6C3F5.js";

// src/app/features/leads/lead-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/leads", a0];
function LeadListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(s_r1));
  }
}
function LeadListComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 11)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 2);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 2);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 2);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, l_r3.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", l_r3.firstName, " ", l_r3.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r3.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.statusClass(l_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(l_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r3.source);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r3.owner);
  }
}
function LeadListComponent_ForEmpty_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td", 14)(2, "div", 15);
    \u0275\u0275text(3, "No leads match your filters.");
    \u0275\u0275elementEnd()()();
  }
}
var LeadListComponent = class _LeadListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.statuses = LEAD_STATUSES;
    this.params = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
    this.search = computed(() => this.params().get("q") ?? "");
    this.status = computed(() => this.params().get("status") ?? "");
    this.leads = signal([
      { id: "l1", firstName: "Olivia", lastName: "Bennett", company: "Northwind Traders", title: "Operations Manager", email: "olivia.bennett@northwind.com", phone: "+1 415 555 0201", status: "NEW", source: "Web", owner: "Demo Admin" },
      { id: "l2", firstName: "Ethan", lastName: "Kim", company: "Contoso Ltd", title: "IT Director", email: "ethan.kim@contoso.com", phone: "+1 212 555 0212", status: "CONTACTED", source: "Referral", owner: "Priya Nair" },
      { id: "l3", firstName: "Sophia", lastName: "Martinez", company: "Fabrikam Inc", title: "VP Marketing", email: "sophia.martinez@fabrikam.com", phone: "+1 512 555 0223", status: "QUALIFIED", source: "Event", owner: "Marco Diaz" },
      { id: "l4", firstName: "Liam", lastName: "Nguyen", company: "Tailspin Toys", title: "Procurement Lead", email: "liam.nguyen@tailspin.com", phone: "+1 617 555 0234", status: "UNQUALIFIED", source: "Cold Call", owner: "Demo Admin" },
      { id: "l5", firstName: "Ava", lastName: "Thompson", company: "Adventure Works", title: "CEO", email: "ava.thompson@adventure-works.com", phone: "+1 312 555 0245", status: "CONVERTED", source: "Partner", owner: "Priya Nair" },
      { id: "l6", firstName: "Noah", lastName: "Patel", company: "Wingtip Toys", title: "Head of Sales", email: "noah.patel@wingtip.com", phone: "+1 213 555 0256", status: "NEW", source: "Web", owner: "Marco Diaz" },
      { id: "l7", firstName: "Isabella", lastName: "Rossi", company: "Proseware Inc", title: "CFO", email: "isabella.rossi@proseware.com", phone: "+1 646 555 0267", status: "CONTACTED", source: "Event", owner: "Demo Admin" },
      { id: "l8", firstName: "Mason", lastName: "Clark", company: "Lucerne Publishing", title: "Editor in Chief", email: "mason.clark@lucerne.com", phone: "+1 408 555 0278", status: "QUALIFIED", source: "Referral", owner: "Priya Nair" },
      { id: "l9", firstName: "Mia", lastName: "Johansson", company: "Coho Vineyard", title: "General Manager", email: "mia.johansson@coho.com", phone: "+1 305 555 0289", status: "UNQUALIFIED", source: "Cold Call", owner: "Marco Diaz" },
      { id: "l10", firstName: "James", lastName: "Okoro", company: "Alpine Ski House", title: "Founder", email: "james.okoro@alpineski.com", phone: "+1 650 555 0290", status: "CONVERTED", source: "Partner", owner: "Demo Admin" }
    ]);
    this.filtered = computed(() => {
      const q = this.search().toLowerCase().trim();
      const st = this.status();
      return this.leads().filter((l) => {
        const name = `${l.firstName} ${l.lastName}`.toLowerCase();
        const matchesQ = !q || name.includes(q) || l.company.toLowerCase().includes(q);
        const matchesSt = !st || l.status === st;
        return matchesQ && matchesSt;
      });
    });
  }
  statusClass(s) {
    switch (s) {
      case "NEW":
        return "badge-info";
      case "CONTACTED":
        return "badge-warning";
      case "QUALIFIED":
        return "badge-success";
      case "CONVERTED":
        return "badge-success";
      case "UNQUALIFIED":
        return "badge-error";
    }
  }
  statusLabel(s) {
    return s.charAt(0) + s.slice(1).toLowerCase();
  }
  onSearch(value) {
    this.router.navigate([], { queryParams: { q: value || null }, queryParamsHandling: "merge" });
  }
  onStatus(value) {
    this.router.navigate([], { queryParams: { status: value || null }, queryParamsHandling: "merge" });
  }
  static {
    this.\u0275fac = function LeadListComponent_Factory(t) {
      return new (t || _LeadListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeadListComponent, selectors: [["app-lead-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 5, consts: [[1, "page"], [1, "page-head"], [1, "muted"], ["routerLink", "/leads/new", 1, "btn", "btn-primary"], [1, "toolbar"], ["type", "search", "placeholder", "Search name or company\u2026", 1, "input", "search", 3, "input", "value"], [1, "select", 3, "change", "value"], ["value", ""], [3, "value"], [1, "card", "table-wrap"], [1, "data"], [3, "routerLink"], [1, "no-hover"], [1, "badge", 3, "ngClass"], ["colspan", "6"], [1, "empty-state"]], template: function LeadListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Leads");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3);
        \u0275\u0275text(8, "+ New Lead");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "input", 5);
        \u0275\u0275listener("input", function LeadListComponent_Template_input_input_10_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "select", 6);
        \u0275\u0275listener("change", function LeadListComponent_Template_select_change_11_listener($event) {
          return ctx.onStatus($event.target.value);
        });
        \u0275\u0275elementStart(12, "option", 7);
        \u0275\u0275text(13, "All statuses");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, LeadListComponent_For_15_Template, 2, 2, "option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "table", 10)(18, "thead")(19, "tr")(20, "th");
        \u0275\u0275text(21, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th");
        \u0275\u0275text(29, "Source");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th");
        \u0275\u0275text(31, "Owner");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "tbody");
        \u0275\u0275repeaterCreate(33, LeadListComponent_For_34_Template, 15, 11, "tr", 11, _forTrack0, false, LeadListComponent_ForEmpty_35_Template, 4, 0, "tr", 12);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.filtered().length, " of ", ctx.leads().length, " leads");
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.search());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.status());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.filtered());
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=leads.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeadListComponent, { className: "LeadListComponent", filePath: "src/app/features/leads/lead-list.component.ts", lineNumber: 14 });
})();
export {
  LeadListComponent
};
//# sourceMappingURL=lead-list.component-FUVFEJGR.js.map
