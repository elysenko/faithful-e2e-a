import {
  toSignal
} from "./chunk-A5Y7O3ZK.js";
import {
  MoneyPipe
} from "./chunk-GJW2SICY.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  RouterLink,
  computed,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RUEYC2SA.js";

// src/app/features/orders/order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrderDetailComponent_Conditional_3_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "order-item-" + item_r1.productId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, item_r1.unitPriceCents));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, item_r1.unitPriceCents * item_r1.qty));
  }
}
function OrderDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "h3");
    \u0275\u0275text(11, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 6)(13, "table", 7)(14, "thead")(15, "tr")(16, "th");
    \u0275\u0275text(17, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Line total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, OrderDetailComponent_Conditional_3_For_26_Template, 11, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 8)(28, "strong");
    \u0275\u0275text(29, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong", 9);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 10)(34, "h3");
    \u0275\u0275text(35, "Shipping to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 3);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Order #", o_r2.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Placed ", \u0275\u0275pipeBind2(6, 10, o_r2.createdAt, "medium"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-placed", o_r2.status === "placed")("badge-shipped", o_r2.status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r2.status);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(o_r2.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 13, o_r2.totalCents));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(o_r2.shipName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.shipAddress);
  }
}
function OrderDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 3);
    \u0275\u0275text(2, "Order not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 11);
    \u0275\u0275text(4, "Back to orders");
    \u0275\u0275elementEnd()();
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  constructor(route) {
    this.route = route;
    this.routeId = toSignal(this.route.paramMap.pipe(map((p) => p.get("id"))), {
      initialValue: null
    });
    this.orders = signal([
      {
        id: "o-1042",
        userId: "u-shopper",
        status: "placed",
        shipName: "Shopper",
        shipAddress: "123 Market St, Springfield, IL 62704",
        totalCents: 34799,
        createdAt: "2026-07-11T14:30:00.000Z",
        items: [
          { id: "oi1", productId: "p1", qty: 1, unitPriceCents: 14999, name: "Aurora Wireless Headphones" },
          { id: "oi2", productId: "p2", qty: 2, unitPriceCents: 9900, name: "Nimbus Mechanical Keyboard" }
        ]
      },
      {
        id: "o-1039",
        userId: "u-shopper",
        status: "shipped",
        shipName: "Shopper",
        shipAddress: "123 Market St, Springfield, IL 62704",
        totalCents: 7999,
        createdAt: "2026-07-04T09:12:00.000Z",
        items: [
          { id: "oi3", productId: "p3", qty: 1, unitPriceCents: 7999, name: "Vertex 4K Webcam" }
        ]
      }
    ]);
    this.order = computed(() => this.orders().find((o) => o.id === this.routeId()));
  }
  static {
    this.\u0275fac = function OrderDetailComponent_Factory(t) {
      return new (t || _OrderDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [["data-testid", "order-detail", 1, "page"], ["routerLink", "/orders", 1, "back-link"], [1, "page-header", "mt-2"], [1, "muted"], [1, "badge"], [1, "card"], [1, "table-wrap"], [1, "data"], [1, "row", "between", "total-line", "mt-4"], [1, "price"], [1, "card", "mt-4"], ["routerLink", "/orders", 1, "btn", "btn-secondary", "btn-sm", "mt-2"]], template: function OrderDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrderDetailComponent_Conditional_3_Template, 40, 15)(4, OrderDetailComponent_Conditional_4_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, (tmp_0_0 = ctx.order()) ? 3 : 4, tmp_0_0);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink, MoneyPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src/app/features/orders/order-detail.component.ts", lineNumber: 15 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=order-detail.component-QA3LDGD2.js.map
