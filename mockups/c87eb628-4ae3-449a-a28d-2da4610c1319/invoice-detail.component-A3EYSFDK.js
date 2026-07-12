import {
  ActivatedRoute,
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  CurrencyPipe,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VVK4PSXI.js";

// src/app/pages/invoice-detail/invoice-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ["/invoices"];
function InvoiceDetailComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Paid: ", ctx_r0.invoice().paidAt, "");
  }
}
function InvoiceDetailComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 24);
    \u0275\u0275text(2, "PAID");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceDetailComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 13);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r2.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r2.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r2.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, line_r2.unitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, line_r2.qty * line_r2.unitPrice));
  }
}
var InvoiceDetailComponent = class _InvoiceDetailComponent {
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
    this.id = this.route.snapshot.paramMap.get("id");
    this.invoice = computed(() => this.invoices().find((i) => i.id === this.id) ?? this.invoices()[0]);
  }
  statusBadge(s) {
    return s === "paid" ? "badge-success" : "badge-warning";
  }
  print() {
    window.print();
  }
  markPaid() {
    const current = this.invoice();
    if (current.status !== "open") {
      return;
    }
    this.invoices.update((list) => list.map((i) => i.id === current.id ? __spreadProps(__spreadValues({}, i), { status: "paid", paidAt: "2026-07-12" }) : i));
  }
  static {
    this.\u0275fac = function InvoiceDetailComponent_Factory(t) {
      return new (t || _InvoiceDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceDetailComponent, selectors: [["app-invoice-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 75, vars: 20, consts: [[1, "container", "stack"], [1, "row", "row-between", "no-print", "wrap-gap"], [1, "breadcrumb", 3, "routerLink"], [1, "row", "wrap-gap"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "card", "card-pad", "stack"], [1, "row", "row-between", "wrap-gap"], [1, "stack"], [1, "eyebrow"], [1, "muted", "small"], [1, "stack", "center"], [1, "section-title"], [1, "num"], [1, "badge"], [1, "divider"], [1, "small", "muted"], [1, "row"], [1, "table-wrap"], [1, "data"], [1, "row", "row-between"], [1, "spacer"], [1, "muted"], [1, "price", "num"], [1, "badge", "badge-success"]], template: function InvoiceDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back to invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275listener("click", function InvoiceDetailComponent_Template_button_click_5_listener() {
          return ctx.print();
        });
        \u0275\u0275text(6, "Print");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function InvoiceDetailComponent_Template_button_click_7_listener() {
          return ctx.markPaid();
        });
        \u0275\u0275text(8, " Mark as paid ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9);
        \u0275\u0275text(13, "MiniERP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275text(15, "123 Industrial Way, Springfield");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "h2");
        \u0275\u0275text(19, "INVOICE");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 14);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(24, "div", 15);
        \u0275\u0275elementStart(25, "div", 7)(26, "div", 8)(27, "div", 9);
        \u0275\u0275text(28, "Bill to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 8)(32, "div", 16);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, InvoiceDetailComponent_Conditional_34_Template, 2, 1, "div", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(35, InvoiceDetailComponent_Conditional_35_Template, 3, 0, "div", 17);
        \u0275\u0275elementStart(36, "div", 18)(37, "table", 19)(38, "thead")(39, "tr")(40, "th");
        \u0275\u0275text(41, "SKU");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Qty");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Unit price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49, "Amount");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "tbody");
        \u0275\u0275repeaterCreate(51, InvoiceDetailComponent_For_52_Template, 13, 9, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "div", 20);
        \u0275\u0275element(54, "span", 21);
        \u0275\u0275elementStart(55, "div", 8)(56, "div", 7)(57, "span", 22);
        \u0275\u0275text(58, "Subtotal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "span", 13);
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 7)(63, "span", 22);
        \u0275\u0275text(64, "Tax");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "span", 13);
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(68, "div", 15);
        \u0275\u0275elementStart(69, "div", 7)(70, "span");
        \u0275\u0275text(71, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "span", 23);
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "currency");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c0));
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.invoice().status !== "open");
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.invoice().number);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.statusBadge(ctx.invoice().status));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.invoice().status);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.invoice().customerName);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Issued: ", ctx.invoice().issuedAt, "");
        \u0275\u0275advance();
        \u0275\u0275conditional(34, ctx.invoice().paidAt ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(35, ctx.invoice().status === "paid" ? 35 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.invoice().lines);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 13, ctx.invoice().total));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 15, 0));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 17, ctx.invoice().total));
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceDetailComponent, { className: "InvoiceDetailComponent", filePath: "src/app/pages/invoice-detail/invoice-detail.component.ts", lineNumber: 12 });
})();
export {
  InvoiceDetailComponent
};
//# sourceMappingURL=invoice-detail.component-A3EYSFDK.js.map
