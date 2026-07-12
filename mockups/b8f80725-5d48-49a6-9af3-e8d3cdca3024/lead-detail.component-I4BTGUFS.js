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

// src/app/features/leads/lead-detail.component.ts
var _c0 = (a0) => ["/leads", a0, "edit"];
function LeadDetailComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function LeadDetailComponent_Conditional_54_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 15)(2, "h2");
    \u0275\u0275text(3, "Delete lead?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "This will permanently remove ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " and cannot be undone.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "button", 17);
    \u0275\u0275listener("click", function LeadDetailComponent_Conditional_54_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(11, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function LeadDetailComponent_Conditional_54_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(13, "Delete lead");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.lead().firstName, " ", ctx_r1.lead().lastName, "");
  }
}
var LeadDetailComponent = class _LeadDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.pm = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
    this.qm = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
    this.id = computed(() => this.pm().get("id") ?? "");
    this.showDelete = computed(() => this.qm().get("modal") === "delete");
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
    this.lead = computed(() => this.leads().find((l) => l.id === this.id()) ?? this.leads()[0]);
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
  askDelete() {
    this.router.navigate([], { queryParams: { modal: "delete" }, queryParamsHandling: "merge" });
  }
  cancelDelete() {
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  confirmDelete() {
    this.leads.update((list) => list.filter((l) => l.id !== this.lead().id));
    this.router.navigate(["/leads"]);
  }
  static {
    this.\u0275fac = function LeadDetailComponent_Factory(t) {
      return new (t || _LeadDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeadDetailComponent, selectors: [["app-lead-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 17, consts: [[1, "page"], ["routerLink", "/leads", 1, "crumb"], [1, "page-head"], [1, "muted"], [1, "badge", 3, "ngClass"], [1, "toolbar"], [1, "btn", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], [1, "card", "card-pad"], [1, "detail-grid"], [1, "detail-field"], [1, "k"], [1, "v"], [1, "v", "mono"], [1, "scrim-modal", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "modal", "card"], [1, "form-actions"], [1, "btn", 3, "click"]], template: function LeadDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Leads");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "header", 2)(4, "div")(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementStart(9, "span", 4);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 5)(12, "a", 6);
        \u0275\u0275text(13, "Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 7);
        \u0275\u0275listener("click", function LeadDetailComponent_Template_button_click_14_listener() {
          return ctx.askDelete();
        });
        \u0275\u0275text(15, "Delete");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "section", 8)(17, "div", 9)(18, "div", 10)(19, "span", 11);
        \u0275\u0275text(20, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10)(24, "span", 11);
        \u0275\u0275text(25, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 10)(29, "span", 11);
        \u0275\u0275text(30, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 10)(34, "span", 11);
        \u0275\u0275text(35, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 13);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 10)(39, "span", 11);
        \u0275\u0275text(40, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "span", 12)(42, "span", 4);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 10)(45, "span", 11);
        \u0275\u0275text(46, "Source");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 12);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 10)(50, "span", 11);
        \u0275\u0275text(51, "Owner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span", 12);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(54, LeadDetailComponent_Conditional_54_Template, 14, 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.lead().firstName, " ", ctx.lead().lastName, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.lead().company, " \xB7 ");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.statusClass(ctx.lead().status));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.statusLabel(ctx.lead().status));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, ctx.lead().id));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.lead().company);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.lead().title);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.lead().email);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.lead().phone);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", ctx.statusClass(ctx.lead().status));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.statusLabel(ctx.lead().status));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.lead().source);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.lead().owner);
        \u0275\u0275advance();
        \u0275\u0275conditional(54, ctx.showDelete() ? 54 : -1);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=leads.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeadDetailComponent, { className: "LeadDetailComponent", filePath: "src/app/features/leads/lead-detail.component.ts", lineNumber: 14 });
})();
export {
  LeadDetailComponent
};
//# sourceMappingURL=lead-detail.component-I4BTGUFS.js.map
