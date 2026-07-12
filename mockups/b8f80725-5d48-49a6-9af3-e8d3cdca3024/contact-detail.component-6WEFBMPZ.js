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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S3A6C3F5.js";

// src/app/features/contacts/contact-detail.component.ts
var _c0 = (a0) => ["/accounts", a0];
var _c1 = (a0) => ["/contacts", a0, "edit"];
function ContactDetailComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function ContactDetailComponent_Conditional_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 15)(2, "h2");
    \u0275\u0275text(3, "Delete contact?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "This will permanently remove ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " and cannot be undone.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "button", 17);
    \u0275\u0275listener("click", function ContactDetailComponent_Conditional_44_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(11, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function ContactDetailComponent_Conditional_44_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(13, "Delete contact");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.contact().firstName, " ", ctx_r1.contact().lastName, "");
  }
}
var ContactDetailComponent = class _ContactDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.pm = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
    this.qm = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
    this.id = computed(() => this.pm().get("id") ?? "");
    this.showDelete = computed(() => this.qm().get("modal") === "delete");
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
    this.contact = computed(() => this.contacts().find((c) => c.id === this.id()) ?? this.contacts()[0]);
  }
  askDelete() {
    this.router.navigate([], { queryParams: { modal: "delete" }, queryParamsHandling: "merge" });
  }
  cancelDelete() {
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  confirmDelete() {
    this.contacts.update((list) => list.filter((c) => c.id !== this.contact().id));
    this.router.navigate(["/contacts"]);
  }
  static {
    this.\u0275fac = function ContactDetailComponent_Factory(t) {
      return new (t || _ContactDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactDetailComponent, selectors: [["app-contact-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 19, consts: [[1, "page"], ["routerLink", "/contacts", 1, "crumb"], [1, "page-head"], [1, "muted"], [3, "routerLink"], [1, "toolbar"], [1, "btn", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], [1, "card", "card-pad"], [1, "detail-grid"], [1, "detail-field"], [1, "k"], [1, "v"], [1, "v", "mono"], [1, "scrim-modal", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "modal", "card"], [1, "form-actions"], [1, "btn", 3, "click"]], template: function ContactDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Contacts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "header", 2)(4, "div")(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementStart(9, "a", 4);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 5)(12, "a", 6);
        \u0275\u0275text(13, "Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 7);
        \u0275\u0275listener("click", function ContactDetailComponent_Template_button_click_14_listener() {
          return ctx.askDelete();
        });
        \u0275\u0275text(15, "Delete");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "section", 8)(17, "div", 9)(18, "div", 10)(19, "span", 11);
        \u0275\u0275text(20, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10)(24, "span", 11);
        \u0275\u0275text(25, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 10)(29, "span", 11);
        \u0275\u0275text(30, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 13);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 10)(34, "span", 11);
        \u0275\u0275text(35, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 12)(37, "a", 4);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 10)(40, "span", 11);
        \u0275\u0275text(41, "Owner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "span", 12);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(44, ContactDetailComponent_Conditional_44_Template, 14, 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.contact().firstName, " ", ctx.contact().lastName, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.contact().title, " \xB7 ");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, ctx.contact().accountId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.contact().accountName);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c1, ctx.contact().id));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.contact().title);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.contact().email);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.contact().phone);
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, ctx.contact().accountId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.contact().accountName);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.contact().owner);
        \u0275\u0275advance();
        \u0275\u0275conditional(44, ctx.showDelete() ? 44 : -1);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=contacts.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactDetailComponent, { className: "ContactDetailComponent", filePath: "src/app/features/contacts/contact-detail.component.ts", lineNumber: 14 });
})();
export {
  ContactDetailComponent
};
//# sourceMappingURL=contact-detail.component-6WEFBMPZ.js.map
