import {
  ActivatedRoute,
  RouterLink
} from "./chunk-CBFZCQFA.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I3S7QF5E.js";

// src/app/pages/invoice-print/invoice-print.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/invoices", a0];
function InvoicePrintComponent_Conditional_7_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 15);
    \u0275\u0275text(2, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, i_r1.paidAt, "mediumDate"), "");
  }
}
function InvoicePrintComponent_Conditional_7_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
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
function InvoicePrintComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div")(3, "div", 7)(4, "span", 8);
    \u0275\u0275text(5, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "MiniERP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 10);
    \u0275\u0275text(9, "MiniERP Inc \xB7 100 Commerce Way \xB7 billing@minierp.example");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11)(11, "h1");
    \u0275\u0275text(12, "INVOICE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 14)(18, "div")(19, "div", 15);
    \u0275\u0275text(20, "Bill to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 16);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 10);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 10);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 17)(28, "div")(29, "span", 15);
    \u0275\u0275text(30, "Issued");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "span", 15);
    \u0275\u0275text(35, "Sales order");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, InvoicePrintComponent_Conditional_7_Conditional_37_Template, 5, 4, "div");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "table", 18)(39, "thead")(40, "tr")(41, "th");
    \u0275\u0275text(42, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 19);
    \u0275\u0275text(44, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 19);
    \u0275\u0275text(46, "Unit price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 19);
    \u0275\u0275text(48, "Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody");
    \u0275\u0275repeaterCreate(50, InvoicePrintComponent_Conditional_7_For_51_Template, 9, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "tfoot")(53, "tr")(54, "td", 20)(55, "strong");
    \u0275\u0275text(56, "Total due");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "td", 19)(58, "strong");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(60, "p", 21);
    \u0275\u0275text(61, "Thank you for your business.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(i_r1.id.toUpperCase());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", i_r1.status === "paid" ? "badge-ok" : "badge-warn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r1.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((i_r1.customer == null ? null : i_r1.customer.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.customer == null ? null : i_r1.customer.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.customer == null ? null : i_r1.customer.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 10, i_r1.issuedAt, "mediumDate"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", i_r1.salesOrderId.toUpperCase(), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(37, i_r1.paidAt ? 37 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(i_r1.lines);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.money(ctx_r2.totalCents()));
  }
}
var InvoicePrintComponent = class _InvoicePrintComponent {
  constructor(route) {
    this.route = route;
    this.loading = signal(false);
    this.id = "";
    this.invoice = signal({
      id: "inv1",
      salesOrderId: "so4",
      status: "open",
      issuedAt: "2026-07-10T00:00:00Z",
      paidAt: null,
      customer: { id: "c1", name: "Northwind Traders", email: "orders@northwind.example", phone: "+1 202 555 0180" },
      lines: [
        { id: "il1", invoiceId: "inv1", productId: "p1", description: "Widget", qty: 30, unitPriceCents: 999 }
      ],
      totalCents: 29970
    });
    this.totalCents = computed(() => (this.invoice().lines ?? []).reduce((s, l) => s + l.qty * l.unitPriceCents, 0));
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
  }
  money(cents) {
    return (cents / 100).toLocaleString(void 0, { style: "currency", currency: "USD" });
  }
  print() {
    window.print();
  }
  static {
    this.\u0275fac = function InvoicePrintComponent_Factory(t) {
      return new (t || _InvoicePrintComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicePrintComponent, selectors: [["app-invoice-print"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "print-page"], [1, "toolbar", "no-print", 2, "margin-bottom", "var(--space-4)"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"], [1, "spacer"], [1, "btn", "btn-primary", 3, "click"], [1, "sheet", "card"], [1, "sheet-head"], [1, "brand-row"], [1, "brand-mark"], [1, "brand-name"], [1, "muted"], [1, "inv-meta"], [1, "mono"], [1, "badge", 3, "ngClass"], [1, "sheet-parties"], [1, "lbl"], [1, "strong"], [1, "right"], [1, "table"], [1, "num"], ["colspan", "3", 1, "num"], [1, "muted", "center", 2, "margin-top", "var(--space-6)"]], template: function InvoicePrintComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 3);
        \u0275\u0275elementStart(5, "button", 4);
        \u0275\u0275listener("click", function InvoicePrintComponent_Template_button_click_5_listener() {
          return ctx.print();
        });
        \u0275\u0275text(6, "\u{1F5A8} Print");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, InvoicePrintComponent_Conditional_7_Template, 62, 13, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, ctx.id));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(7, (tmp_1_0 = ctx.invoice()) ? 7 : -1, tmp_1_0);
      }
    }, dependencies: [CommonModule, NgClass, DatePipe, RouterLink], styles: ["\n\n.print-page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 780px;\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4);\n}\n.sheet[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n}\n.sheet-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-6);\n}\n.brand-row[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-weight: 800;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n  font-weight: 800;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.inv-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.inv-meta[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  letter-spacing: .06em;\n  color: var(--color-brand);\n}\n.sheet-parties[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--space-5);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-5);\n}\n.sheet-parties[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.lbl[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--color-muted);\n}\n.strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--color-border);\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: block;\n  }\n  .print-page[_ngcontent-%COMP%] {\n    padding: 0;\n    max-width: 100%;\n  }\n  .sheet[_ngcontent-%COMP%] {\n    border: none;\n    box-shadow: none;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=invoice-print.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicePrintComponent, { className: "InvoicePrintComponent", filePath: "src/app/pages/invoice-print/invoice-print.component.ts", lineNumber: 17 });
})();
export {
  InvoicePrintComponent
};
//# sourceMappingURL=invoice-print.component-TIELU2NY.js.map
