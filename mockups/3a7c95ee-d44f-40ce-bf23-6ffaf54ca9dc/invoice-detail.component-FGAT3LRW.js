import {
  AuthService
} from "./chunk-Q2IOEOSU.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-CBFZCQFA.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I3S7QF5E.js";

// src/app/pages/invoice-detail/invoice-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/invoices", a0, "print"];
function InvoiceDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceDetailComponent_Conditional_5_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, i_r1.paidAt, "mediumDate"));
  }
}
function InvoiceDetailComponent_Conditional_5_Conditional_0_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.money(l_r2.unitPriceCents));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.money(l_r2.qty * l_r2.unitPriceCents));
  }
}
function InvoiceDetailComponent_Conditional_5_Conditional_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function InvoiceDetailComponent_Conditional_5_Conditional_0_Conditional_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.pay());
    });
    \u0275\u0275text(1, "Mark as paid");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.working());
  }
}
function InvoiceDetailComponent_Conditional_5_Conditional_0_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Paid in full");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_5_Conditional_0_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Only sales or admin can record payment.");
    \u0275\u0275elementEnd();
  }
}
function InvoiceDetailComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 6);
    \u0275\u0275elementStart(6, "a", 7);
    \u0275\u0275text(7, "Print view");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "span", 11);
    \u0275\u0275text(12, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10)(16, "span", 11);
    \u0275\u0275text(17, "From sales order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 13);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "span", 11);
    \u0275\u0275text(22, "Issued");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 12);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, InvoiceDetailComponent_Conditional_5_Conditional_0_Conditional_26_Template, 6, 4, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "h2", 14);
    \u0275\u0275text(28, "Lines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 15)(30, "table", 16)(31, "thead")(32, "tr")(33, "th");
    \u0275\u0275text(34, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 17);
    \u0275\u0275text(36, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 17);
    \u0275\u0275text(38, "Unit price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 17);
    \u0275\u0275text(40, "Line total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "tbody");
    \u0275\u0275repeaterCreate(42, InvoiceDetailComponent_Conditional_5_Conditional_0_For_43_Template, 9, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "tfoot")(45, "tr")(46, "td", 18)(47, "strong");
    \u0275\u0275text(48, "Total due");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "td", 17)(50, "strong");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(52, "div", 19);
    \u0275\u0275template(53, InvoiceDetailComponent_Conditional_5_Conditional_0_Conditional_53_Template, 2, 1, "button", 20)(54, InvoiceDetailComponent_Conditional_5_Conditional_0_Conditional_54_Template, 2, 0)(55, InvoiceDetailComponent_Conditional_5_Conditional_0_Conditional_55_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Invoice ", i_r1.id.toUpperCase(), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", i_r1.status === "paid" ? "badge-ok" : "badge-warn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, i_r1.id));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((i_r1.customer == null ? null : i_r1.customer.name) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(i_r1.salesOrderId.toUpperCase());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 10, i_r1.issuedAt, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(26, i_r1.paidAt ? 26 : -1);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(i_r1.lines);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.money(ctx_r2.totalCents()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(53, i_r1.status === "open" && ctx_r2.canPay() ? 53 : i_r1.status === "paid" ? 54 : 55);
  }
}
function InvoiceDetailComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 24);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Invoice not found.");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InvoiceDetailComponent_Conditional_5_Conditional_0_Template, 56, 15)(1, InvoiceDetailComponent_Conditional_5_Conditional_1_Template, 5, 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r2.invoice()) ? 0 : 1, tmp_1_0);
  }
}
var InvoiceDetailComponent = class _InvoiceDetailComponent {
  constructor(auth, route) {
    this.auth = auth;
    this.route = route;
    this.loading = signal(false);
    this.error = signal(null);
    this.working = signal(false);
    this.id = "";
    this.invoice = signal({
      id: "inv1",
      salesOrderId: "so4",
      status: "open",
      issuedAt: "2026-07-10T00:00:00Z",
      paidAt: null,
      customer: { id: "c1", name: "Northwind Traders", email: "orders@northwind.example" },
      lines: [
        { id: "il1", invoiceId: "inv1", productId: "p1", description: "Widget", qty: 30, unitPriceCents: 999 }
      ],
      totalCents: 29970
    });
    this.canPay = computed(() => this.auth.isSales());
    this.totalCents = computed(() => (this.invoice().lines ?? []).reduce((s, l) => s + l.qty * l.unitPriceCents, 0));
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
  }
  money(cents) {
    return (cents / 100).toLocaleString(void 0, { style: "currency", currency: "USD" });
  }
  pay() {
    this.working.set(true);
    this.invoice.update((i) => __spreadProps(__spreadValues({}, i), { status: "paid", paidAt: "2026-07-12T00:00:00Z" }));
    this.working.set(false);
  }
  static {
    this.\u0275fac = function InvoiceDetailComponent_Factory(t) {
      return new (t || _InvoiceDetailComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceDetailComponent, selectors: [["app-invoice-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "page"], [1, "page-head"], ["routerLink", "/invoices", 1, "btn", "btn-ghost", "btn-sm"], [1, "state"], [1, "spinner"], [1, "badge", 3, "ngClass"], [1, "spacer"], [1, "btn", "btn-outline", 3, "routerLink"], [1, "card", "card-pad"], [1, "dl"], [1, "dl-row"], [1, "dl-key"], [1, "dl-val"], [1, "dl-val", "mono"], [2, "font-size", "var(--fs-lg)", "margin-top", "var(--space-5)"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], ["colspan", "3", 1, "num"], [1, "toolbar", 2, "margin-top", "var(--space-5)"], [1, "btn", "btn-primary", 3, "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "badge", "badge-ok"], [1, "hint"], [1, "state-icon"]], template: function InvoiceDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Invoices");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, InvoiceDetailComponent_Conditional_4_Template, 4, 0, "div", 3)(5, InvoiceDetailComponent_Conditional_5_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.loading() ? 4 : 5);
      }
    }, dependencies: [CommonModule, NgClass, DatePipe, RouterLink], styles: ["\n\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--color-border);\n}\n/*# sourceMappingURL=invoice-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceDetailComponent, { className: "InvoiceDetailComponent", filePath: "src/app/pages/invoice-detail/invoice-detail.component.ts", lineNumber: 18 });
})();
export {
  InvoiceDetailComponent
};
//# sourceMappingURL=invoice-detail.component-FGAT3LRW.js.map
