import {
  RouterLink
} from "./chunk-CBFZCQFA.js";
import {
  CommonModule,
  NgClass,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-I3S7QF5E.js";

// src/app/pages/invoices/invoices.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/invoices", a0];
function InvoicesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading invoices\u2026");
    \u0275\u0275elementEnd()();
  }
}
function InvoicesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 5);
    \u0275\u0275text(2, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No invoices yet.");
    \u0275\u0275elementEnd()();
  }
}
function InvoicesComponent_Conditional_8_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 9)(1, "td", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, i_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.id.toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((i_r1.customer == null ? null : i_r1.customer.name) || i_r1.salesOrderId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", i_r1.status === "paid" ? "badge-ok" : "badge-warn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.money(i_r1.totalCents));
  }
}
function InvoicesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "table", 7)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 8);
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, InvoicesComponent_Conditional_8_For_14_Template, 10, 8, "tr", 9, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.invoices());
  }
}
var InvoicesComponent = class _InvoicesComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.invoices = signal([
      {
        id: "inv1",
        salesOrderId: "so4",
        status: "open",
        issuedAt: "2026-07-10T00:00:00Z",
        customer: { id: "c1", name: "Northwind Traders", email: "orders@northwind.example" },
        totalCents: 29970
      },
      {
        id: "inv2",
        salesOrderId: "so3",
        status: "open",
        issuedAt: "2026-07-06T00:00:00Z",
        customer: { id: "c3", name: "Fabrikam Inc", email: "buy@fabrikam.example" },
        totalCents: 124950
      },
      {
        id: "inv3",
        salesOrderId: "so2",
        status: "paid",
        issuedAt: "2026-06-28T00:00:00Z",
        paidAt: "2026-07-02T00:00:00Z",
        customer: { id: "c2", name: "Contoso Ltd", email: "ap@contoso.example" },
        totalCents: 74970
      }
    ]);
  }
  ngOnInit() {
  }
  money(cents) {
    return ((cents ?? 0) / 100).toLocaleString(void 0, { style: "currency", currency: "USD" });
  }
  static {
    this.\u0275fac = function InvoicesComponent_Factory(t) {
      return new (t || _InvoicesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicesComponent, selectors: [["app-invoices"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "page"], [1, "page-head"], [1, "sub"], [1, "state"], [1, "spinner"], [1, "state-icon"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], [1, "link-row", 3, "routerLink"], [1, "mono"], [1, "badge", 3, "ngClass"]], template: function InvoicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Invoices are generated from fulfilled sales orders.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, InvoicesComponent_Conditional_6_Template, 4, 0, "div", 3)(7, InvoicesComponent_Conditional_7_Template, 5, 0)(8, InvoicesComponent_Conditional_8_Template, 15, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.invoices().length === 0 ? 7 : 8);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n/*# sourceMappingURL=invoices.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicesComponent, { className: "InvoicesComponent", filePath: "src/app/pages/invoices/invoices.component.ts", lineNumber: 14 });
})();
export {
  InvoicesComponent
};
//# sourceMappingURL=invoices.component-6EGNGMOJ.js.map
