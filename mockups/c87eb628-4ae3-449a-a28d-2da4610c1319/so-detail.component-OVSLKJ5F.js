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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VVK4PSXI.js";

// src/app/pages/so-detail/so-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SoDetailComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Invoiced");
    \u0275\u0275elementEnd();
  }
}
function SoDetailComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Stock decremented.");
    \u0275\u0275elementEnd();
  }
}
function SoDetailComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " Invoice generated. ");
    \u0275\u0275elementStart(2, "a", 22);
    \u0275\u0275text(3, "View invoices");
    \u0275\u0275elementEnd()();
  }
}
function SoDetailComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 17);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 17);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r1.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r1.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, l_r1.unitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 7, l_r1.qty * l_r1.unitPrice));
  }
}
var SoDetailComponent = class _SoDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.id = this.route.snapshot.paramMap.get("id");
    this.orders = signal([
      {
        id: "so1",
        reference: "SO-2001",
        customerId: "c1",
        customerName: "Northwind Traders",
        status: "confirmed",
        createdAt: "2026-07-09",
        total: 730,
        lines: [
          { id: "sol1", productId: "p1", productName: "Steel Bolt M8", sku: "STL-001", qty: 200, unitPrice: 1.2 },
          { id: "sol2", productId: "p8", productName: "Proximity Sensor", sku: "SEN-200", qty: 10, unitPrice: 49 }
        ]
      },
      {
        id: "so2",
        reference: "SO-2002",
        customerId: "c2",
        customerName: "Contoso Ltd",
        status: "draft",
        createdAt: "2026-07-10",
        total: 150,
        lines: [
          { id: "sol3", productId: "p3", productName: "PVC Pipe 50mm", sku: "PIP-050", qty: 20, unitPrice: 7.5 }
        ]
      },
      {
        id: "so3",
        reference: "SO-2003",
        customerId: "c3",
        customerName: "Fabrikam Inc",
        status: "fulfilled",
        createdAt: "2026-07-06",
        total: 880,
        lines: [
          { id: "sol4", productId: "p5", productName: "Copper Wire 14AWG", sku: "WIR-014", qty: 10, unitPrice: 24 },
          { id: "sol5", productId: "p7", productName: "Control Panel", sku: "PNL-100", qty: 2, unitPrice: 320 }
        ]
      },
      {
        id: "so4",
        reference: "SO-2000",
        customerId: "c1",
        customerName: "Northwind Traders",
        status: "invoiced",
        createdAt: "2026-07-02",
        total: 735,
        lines: [
          { id: "sol6", productId: "p8", productName: "Proximity Sensor", sku: "SEN-200", qty: 15, unitPrice: 49 }
        ]
      }
    ]);
    this.order = computed(() => this.orders().find((o) => o.id === this.id) ?? this.orders()[0]);
    this.fulfilled = signal(false);
    this.invoicedNow = signal(false);
  }
  statusBadge(s) {
    switch (s) {
      case "draft":
        return "badge badge-neutral";
      case "confirmed":
        return "badge badge-info";
      case "fulfilled":
        return "badge badge-warning";
      case "invoiced":
        return "badge badge-success";
    }
  }
  setStatus(next) {
    this.orders.update((list) => list.map((o) => o.id === this.id ? __spreadProps(__spreadValues({}, o), { status: next }) : o));
  }
  confirm() {
    if (this.order().status !== "draft")
      return;
    this.setStatus("confirmed");
  }
  fulfill() {
    if (this.order().status !== "confirmed")
      return;
    this.setStatus("fulfilled");
    this.fulfilled.set(true);
  }
  generateInvoice() {
    if (this.order().status !== "fulfilled")
      return;
    this.setStatus("invoiced");
    this.invoicedNow.set(true);
  }
  static {
    this.\u0275fac = function SoDetailComponent_Factory(t) {
      return new (t || _SoDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SoDetailComponent, selectors: [["app-so-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 59, vars: 16, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/sales-orders"], [1, "card", "card-pad", "stack"], [1, "row-between"], [1, "stack"], [1, "eyebrow"], [1, "muted"], [1, "stack", "center"], [1, "faint", "small"], [1, "num", "price"], [1, "badge", "badge-success"], [1, "alert", "alert-info"], [1, "alert", "alert-success"], [1, "section-title"], [1, "table-wrap"], [1, "data"], [1, "num"], [1, "row", "wrap-gap"], ["type", "button", 1, "btn", "btn-dark", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline", 3, "click", "disabled"], ["routerLink", "/invoices"], [1, "tag"]], template: function SoDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "Sales Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "span", 6);
        \u0275\u0275text(9, "Sales Order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h2");
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 7);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 9);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 10);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "currency");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(22, SoDetailComponent_Conditional_22_Template, 2, 0, "div", 11);
        \u0275\u0275elementStart(23, "div", 12);
        \u0275\u0275text(24, " Flow: draft \u2192 confirmed \u2192 fulfilled (stock \u2212) \u2192 invoiced. ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, SoDetailComponent_Conditional_25_Template, 2, 0, "div", 13)(26, SoDetailComponent_Conditional_26_Template, 4, 0, "div", 13);
        \u0275\u0275elementStart(27, "div", 3)(28, "h3", 14);
        \u0275\u0275text(29, "Lines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 15)(31, "table", 16)(32, "thead")(33, "tr")(34, "th");
        \u0275\u0275text(35, "SKU");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th", 17);
        \u0275\u0275text(39, "Qty");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th", 17);
        \u0275\u0275text(41, "Unit price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th", 17);
        \u0275\u0275text(43, "Line total");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "tbody");
        \u0275\u0275repeaterCreate(45, SoDetailComponent_For_46_Template, 14, 9, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(47, "div", 3)(48, "h3", 14);
        \u0275\u0275text(49, "Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 12);
        \u0275\u0275text(51, " Fulfilling decrements on-hand stock. An oversell guard blocks fulfillment when requested quantities exceed available stock. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 18)(53, "button", 19);
        \u0275\u0275listener("click", function SoDetailComponent_Template_button_click_53_listener() {
          return ctx.confirm();
        });
        \u0275\u0275text(54, " Confirm ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "button", 20);
        \u0275\u0275listener("click", function SoDetailComponent_Template_button_click_55_listener() {
          return ctx.fulfill();
        });
        \u0275\u0275text(56, " Fulfill ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "button", 21);
        \u0275\u0275listener("click", function SoDetailComponent_Template_button_click_57_listener() {
          return ctx.generateInvoice();
        });
        \u0275\u0275text(58, " Generate invoice ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" / ", ctx.order().reference, " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.order().reference);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.order().customerName);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.statusBadge(ctx.order().status));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.order().status);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Created ", ctx.order().createdAt, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 14, ctx.order().total));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(22, ctx.order().status === "invoiced" ? 22 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(25, ctx.fulfilled() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(26, ctx.invoicedNow() ? 26 : -1);
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.order().lines);
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", ctx.order().status !== "draft");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.order().status !== "confirmed");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.order().status !== "fulfilled");
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SoDetailComponent, { className: "SoDetailComponent", filePath: "src/app/pages/so-detail/so-detail.component.ts", lineNumber: 12 });
})();
export {
  SoDetailComponent
};
//# sourceMappingURL=so-detail.component-OVSLKJ5F.js.map
