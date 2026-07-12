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
  ɵɵnextContext,
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

// src/app/pages/po-detail/po-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PoDetailComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Received \u2014 stock has been incremented.");
    \u0275\u0275elementEnd();
  }
}
function PoDetailComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Stock incremented for ", ctx_r0.receivedCount(), " line(s). ");
  }
}
function PoDetailComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 16);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r2.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r2.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r2.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, line_r2.unitCost));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, ctx_r0.lineTotal(line_r2)));
  }
}
var PoDetailComponent = class _PoDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.orders = signal([
      {
        id: "po1",
        reference: "PO-1001",
        supplierId: "s1",
        supplierName: "Acme Industrial Supply",
        status: "ordered",
        createdAt: "2026-07-08",
        total: 560,
        lines: [
          { id: "pol1", productId: "p3", productName: "PVC Pipe 50mm", sku: "PIP-050", qty: 100, unitCost: 3.2 },
          { id: "pol2", productId: "p5", productName: "Copper Wire 14AWG", sku: "WIR-014", qty: 20, unitCost: 12 }
        ]
      },
      {
        id: "po2",
        reference: "PO-1002",
        supplierId: "s2",
        supplierName: "Globex Materials",
        status: "draft",
        createdAt: "2026-07-10",
        total: 375,
        lines: [
          { id: "pol3", productId: "p1", productName: "Steel Bolt M8", sku: "STL-001", qty: 500, unitCost: 0.45 },
          { id: "pol4", productId: "p2", productName: "Steel Nut M8", sku: "STL-002", qty: 500, unitCost: 0.3 }
        ]
      },
      {
        id: "po3",
        reference: "PO-1000",
        supplierId: "s1",
        supplierName: "Acme Industrial Supply",
        status: "received",
        createdAt: "2026-07-01",
        total: 725,
        lines: [
          { id: "pol5", productId: "p7", productName: "Control Panel", sku: "PNL-100", qty: 5, unitCost: 145 }
        ]
      }
    ]);
    this.id = inject(ActivatedRoute).snapshot.paramMap.get("id");
    this.order = computed(() => this.orders().find((o) => o.id === this.id) ?? this.orders()[0]);
    this.received = signal(false);
    this.receivedCount = signal(0);
  }
  statusBadge(s) {
    switch (s) {
      case "draft":
        return "badge badge-neutral";
      case "ordered":
        return "badge badge-info";
      case "received":
        return "badge badge-success";
    }
  }
  lineTotal(line) {
    return line.qty * line.unitCost;
  }
  markOrdered() {
    this.orders.update((list) => list.map((o) => o.id === this.id ? __spreadProps(__spreadValues({}, o), { status: "ordered" }) : o));
  }
  receiveStock() {
    this.receivedCount.set(this.order().lines.length);
    this.orders.update((list) => list.map((o) => o.id === this.id ? __spreadProps(__spreadValues({}, o), { status: "received" }) : o));
    this.received.set(true);
  }
  static {
    this.\u0275fac = function PoDetailComponent_Factory(t) {
      return new (t || _PoDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PoDetailComponent, selectors: [["app-po-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 14, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/purchase-orders"], [1, "card", "card-pad", "stack"], [1, "row-between"], [1, "stack"], [1, "eyebrow"], [1, "muted"], [1, "stack", "center"], [1, "small", "muted"], [1, "price", "num"], [1, "badge", "badge-success"], [1, "alert", "alert-success"], [1, "alert", "alert-info"], [1, "table-wrap"], [1, "data"], [1, "num"], [1, "row", "wrap-gap"], [1, "btn", "btn-dark", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "tag"]], template: function PoDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "Purchase Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "span", 6);
        \u0275\u0275text(9, "Purchase Order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h2");
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 7);
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
        \u0275\u0275template(22, PoDetailComponent_Conditional_22_Template, 2, 0, "div", 11)(23, PoDetailComponent_Conditional_23_Template, 2, 1, "div", 12);
        \u0275\u0275elementStart(24, "div", 13);
        \u0275\u0275text(25, " Flow: draft \u2192 ordered \u2192 received. Stock is incremented when the order is received. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 14)(27, "table", 15)(28, "thead")(29, "tr")(30, "th");
        \u0275\u0275text(31, "SKU");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th", 16);
        \u0275\u0275text(35, "Qty");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th", 16);
        \u0275\u0275text(37, "Unit cost");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th", 16);
        \u0275\u0275text(39, "Line total");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "tbody");
        \u0275\u0275repeaterCreate(41, PoDetailComponent_For_42_Template, 13, 9, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 17)(44, "button", 18);
        \u0275\u0275listener("click", function PoDetailComponent_Template_button_click_44_listener() {
          return ctx.markOrdered();
        });
        \u0275\u0275text(45, " Mark as Ordered ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 19);
        \u0275\u0275listener("click", function PoDetailComponent_Template_button_click_46_listener() {
          return ctx.receiveStock();
        });
        \u0275\u0275text(47, " Receive stock ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" / ", ctx.order().reference, " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.order().reference);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.order().supplierName);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.statusBadge(ctx.order().status));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.order().status);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Created ", ctx.order().createdAt, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 12, ctx.order().total));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(22, ctx.order().status === "received" ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(23, ctx.received() ? 23 : -1);
        \u0275\u0275advance(18);
        \u0275\u0275repeater(ctx.order().lines);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.order().status !== "draft");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.order().status !== "ordered");
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PoDetailComponent, { className: "PoDetailComponent", filePath: "src/app/pages/po-detail/po-detail.component.ts", lineNumber: 12 });
})();
export {
  PoDetailComponent
};
//# sourceMappingURL=po-detail.component-N6PJUYLW.js.map
