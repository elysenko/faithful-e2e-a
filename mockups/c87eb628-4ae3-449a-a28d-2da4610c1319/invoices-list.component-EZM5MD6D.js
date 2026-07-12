import {
  ActivatedRoute,
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  CurrencyPipe,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VVK4PSXI.js";

// src/app/pages/invoices-list/invoices-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ["/invoices"];
var _c1 = () => ({ status: null });
var _c2 = () => ({ status: "open" });
var _c3 = () => ({ status: "paid" });
var _c4 = (a0) => ["/invoices", a0];
function InvoicesListComponent_Conditional_18_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 9)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 4);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c4, i_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusBadge(i_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.issuedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, i_r1.total));
  }
}
function InvoicesListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 8)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Issued");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, InvoicesListComponent_Conditional_18_For_16_Template, 13, 12, "tr", 9, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
function InvoicesListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4, "No invoices found.");
    \u0275\u0275elementEnd()();
  }
}
var InvoicesListComponent = class _InvoicesListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.invoices = signal([
      {
        id: "inv1",
        number: "INV-3001",
        salesOrderId: "so4",
        customerId: "c1",
        customerName: "Northwind Traders",
        status: "open",
        issuedAt: "2026-07-02",
        paidAt: null,
        lines: [
          { id: "il1", productId: "p8", productName: "Proximity Sensor", sku: "SEN-200", qty: 15, unitPrice: 49 }
        ],
        total: 735
      },
      {
        id: "inv2",
        number: "INV-3002",
        salesOrderId: "so9",
        customerId: "c2",
        customerName: "Contoso Ltd",
        status: "open",
        issuedAt: "2026-07-05",
        paidAt: null,
        lines: [
          { id: "il2", productId: "p7", productName: "Control Panel", sku: "PNL-100", qty: 15, unitPrice: 320 },
          { id: "il3", productId: "p5", productName: "Copper Wire 14AWG", sku: "WIR-014", qty: 12, unitPrice: 23.79 }
        ],
        total: 5085.5
      },
      {
        id: "inv3",
        number: "INV-3000",
        salesOrderId: "so8",
        customerId: "c3",
        customerName: "Fabrikam Inc",
        status: "paid",
        issuedAt: "2026-06-28",
        paidAt: "2026-07-01",
        lines: [
          { id: "il4", productId: "p3", productName: "PVC Pipe 50mm", sku: "PIP-050", qty: 40, unitPrice: 7.5 },
          { id: "il5", productId: "p1", productName: "Steel Bolt M8", sku: "STL-001", qty: 100, unitPrice: 1.2 }
        ],
        total: 420
      }
    ]);
    this.status = signal(this.route.snapshot.queryParamMap.get("status") ?? "");
    this.filtered = computed(() => {
      const s = this.status();
      if (!s) {
        return this.invoices();
      }
      return this.invoices().filter((i) => i.status === s);
    });
    this.openInvoices = computed(() => this.invoices().filter((i) => i.status === "open"));
    this.openCount = computed(() => this.openInvoices().length);
    this.openSum = computed(() => this.openInvoices().reduce((acc, i) => acc + i.total, 0));
    this.route.queryParamMap.subscribe((params) => {
      this.status.set(params.get("status") ?? "");
    });
  }
  statusBadge(s) {
    return s === "paid" ? "badge-success" : "badge-warning";
  }
  static {
    this.\u0275fac = function InvoicesListComponent_Factory(t) {
      return new (t || _InvoicesListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicesListComponent, selectors: [["app-invoices-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 23, consts: [[1, "container", "stack"], [1, "section-title"], [1, "eyebrow"], [1, "muted", "small"], [1, "num"], [1, "filter-bar", "row", "wrap-gap"], [1, "pill", 3, "routerLink", "queryParams"], [1, "table-wrap"], [1, "data"], [1, "card-hover", 3, "routerLink"], [1, "badge"], [1, "state"], [1, "state-icon"], [1, "muted"]], template: function InvoicesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Billing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Invoices");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementStart(8, "span", 4);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5)(12, "a", 6);
        \u0275\u0275text(13, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 6);
        \u0275\u0275text(15, "Open");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 6);
        \u0275\u0275text(17, "Paid");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, InvoicesListComponent_Conditional_18_Template, 17, 0, "div", 7)(19, InvoicesListComponent_Conditional_19_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.openCount(), " open invoice(s) totalling ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 15, ctx.openSum()));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.status() === "");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c0))("queryParams", \u0275\u0275pureFunction0(18, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.status() === "open");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c0))("queryParams", \u0275\u0275pureFunction0(20, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.status() === "paid");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c0))("queryParams", \u0275\u0275pureFunction0(22, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(18, ctx.filtered().length ? 18 : 19);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicesListComponent, { className: "InvoicesListComponent", filePath: "src/app/pages/invoices-list/invoices-list.component.ts", lineNumber: 12 });
})();
export {
  InvoicesListComponent
};
//# sourceMappingURL=invoices-list.component-EZM5MD6D.js.map
