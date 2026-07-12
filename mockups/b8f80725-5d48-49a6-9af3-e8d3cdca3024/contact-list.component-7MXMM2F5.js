import {
  toSignal
} from "./chunk-PAUVK2ZQ.js";
import {
  ActivatedRoute,
  CommonModule,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-S3A6C3F5.js";

// src/app/features/contacts/contact-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/contacts", a0];
function ContactListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275property("value", a_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.name);
  }
}
function ContactListComponent_For_34_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 2);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, c_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r2.firstName, " ", c_r2.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.owner);
  }
}
function ContactListComponent_ForEmpty_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td", 14)(2, "div", 15);
    \u0275\u0275text(3, "No contacts match your filters.");
    \u0275\u0275elementEnd()()();
  }
}
var ContactListComponent = class _ContactListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.params = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
    this.search = computed(() => this.params().get("q") ?? "");
    this.accountId = computed(() => this.params().get("accountId") ?? "");
    this.contacts = signal([
      { id: "c1", firstName: "Jane", lastName: "Rivera", title: "VP Operations", email: "jane@acme.com", phone: "+1 415 555 0110", accountId: "a1", accountName: "Acme Corporation", owner: "Demo Admin" },
      { id: "c2", firstName: "Sam", lastName: "Okafor", title: "CTO", email: "sam@acme.com", phone: "+1 415 555 0111", accountId: "a1", accountName: "Acme Corporation", owner: "Priya Nair" },
      { id: "c3", firstName: "Lena", lastName: "Park", title: "Procurement Lead", email: "lena@globex.io", phone: "+1 212 555 0150", accountId: "a2", accountName: "Globex Industries", owner: "Marco Diaz" },
      { id: "c4", firstName: "David", lastName: "Chen", title: "CFO", email: "david@initech.com", phone: "+1 512 555 0190", accountId: "a3", accountName: "Initech", owner: "Demo Admin" },
      { id: "c5", firstName: "Maria", lastName: "Santos", title: "Head of IT", email: "maria@umbrella-health.org", phone: "+1 617 555 0166", accountId: "a4", accountName: "Umbrella Health", owner: "Priya Nair" },
      { id: "c6", firstName: "Tom", lastName: "Bauer", title: "Supply Chain Director", email: "tom@soylentfoods.com", phone: "+1 312 555 0173", accountId: "a5", accountName: "Soylent Foods", owner: "Marco Diaz" },
      { id: "c7", firstName: "Aisha", lastName: "Khan", title: "VP Engineering", email: "aisha@starkenergy.com", phone: "+1 213 555 0135", accountId: "a6", accountName: "Stark Energy", owner: "Demo Admin" },
      { id: "c8", firstName: "Noah", lastName: "Bennett", title: "Content Director", email: "noah@waynemedia.tv", phone: "+1 646 555 0121", accountId: "a7", accountName: "Wayne Media", owner: "Priya Nair" },
      { id: "c9", firstName: "Grace", lastName: "Liu", title: "Cloud Architect", email: "grace@hooli.com", phone: "+1 408 555 0157", accountId: "a8", accountName: "Hooli Cloud", owner: "Marco Diaz" },
      { id: "c10", firstName: "Oscar", lastName: "Reyes", title: "Founder", email: "oscar@piedpiper.com", phone: "+1 650 555 0104", accountId: "a10", accountName: "Pied Piper", owner: "Demo Admin" }
    ]);
    this.accountOptions = computed(() => {
      const seen = /* @__PURE__ */ new Map();
      for (const c of this.contacts()) {
        if (!seen.has(c.accountId))
          seen.set(c.accountId, c.accountName);
      }
      return Array.from(seen, ([id, name]) => ({ id, name }));
    });
    this.filtered = computed(() => {
      const q = this.search().toLowerCase().trim();
      const acc = this.accountId();
      return this.contacts().filter((c) => {
        const name = `${c.firstName} ${c.lastName}`.toLowerCase();
        const matchesQ = !q || name.includes(q) || c.email.toLowerCase().includes(q);
        const matchesAcc = !acc || c.accountId === acc;
        return matchesQ && matchesAcc;
      });
    });
  }
  onSearch(value) {
    this.router.navigate([], { queryParams: { q: value || null }, queryParamsHandling: "merge" });
  }
  onAccount(value) {
    this.router.navigate([], { queryParams: { accountId: value || null }, queryParamsHandling: "merge" });
  }
  static {
    this.\u0275fac = function ContactListComponent_Factory(t) {
      return new (t || _ContactListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactListComponent, selectors: [["app-contact-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 5, consts: [[1, "page"], [1, "page-head"], [1, "muted"], ["routerLink", "/contacts/new", 1, "btn", "btn-primary"], [1, "toolbar"], ["type", "search", "placeholder", "Search name or email\u2026", 1, "input", "search", 3, "input", "value"], [1, "select", 3, "change", "value"], ["value", ""], [3, "value"], [1, "card", "table-wrap"], [1, "data"], [3, "routerLink"], [1, "no-hover"], [1, "mono", "muted"], ["colspan", "6"], [1, "empty-state"]], template: function ContactListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Contacts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3);
        \u0275\u0275text(8, "+ New Contact");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "input", 5);
        \u0275\u0275listener("input", function ContactListComponent_Template_input_input_10_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "select", 6);
        \u0275\u0275listener("change", function ContactListComponent_Template_select_change_11_listener($event) {
          return ctx.onAccount($event.target.value);
        });
        \u0275\u0275elementStart(12, "option", 7);
        \u0275\u0275text(13, "All accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, ContactListComponent_For_15_Template, 2, 2, "option", 8, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "table", 10)(18, "thead")(19, "tr")(20, "th");
        \u0275\u0275text(21, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th");
        \u0275\u0275text(29, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th");
        \u0275\u0275text(31, "Owner");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "tbody");
        \u0275\u0275repeaterCreate(33, ContactListComponent_For_34_Template, 14, 10, "tr", 11, _forTrack0, false, ContactListComponent_ForEmpty_35_Template, 4, 0, "tr", 12);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.filtered().length, " of ", ctx.contacts().length, " contacts");
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.search());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.accountId());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.accountOptions());
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.filtered());
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=contacts.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactListComponent, { className: "ContactListComponent", filePath: "src/app/features/contacts/contact-list.component.ts", lineNumber: 14 });
})();
export {
  ContactListComponent
};
//# sourceMappingURL=contact-list.component-7MXMM2F5.js.map
