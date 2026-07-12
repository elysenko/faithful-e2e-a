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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RUEYC2SA.js";

// src/app/features/orders/orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function OrdersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " Your order was placed successfully. Thank you! ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 4);
    \u0275\u0275text(2, "You have no orders yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 5);
    \u0275\u0275text(4, "Start shopping");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div", 8)(2, "div")(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "span", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "money");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, order_r1.id));
    \u0275\u0275attribute("data-testid", "order-" + order_r1.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", order_r1.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(7, 11, order_r1.createdAt, "mediumDate"), " \xB7 ", order_r1.items.length, " items");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-placed", order_r1.status === "placed")("badge-shipped", order_r1.status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 14, order_r1.totalCents));
  }
}
function OrdersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, OrdersComponent_Conditional_6_For_2_Template, 14, 18, "a", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
var OrdersComponent = class _OrdersComponent {
  constructor(route) {
    this.route = route;
    this.justPlaced = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("placed") === "1")), { initialValue: false });
    this.orders = signal([
      {
        id: "o-1042",
        userId: "u-shopper",
        status: "placed",
        shipName: "Shopper",
        shipAddress: "123 Market St, Springfield",
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
        shipAddress: "123 Market St, Springfield",
        totalCents: 7999,
        createdAt: "2026-07-04T09:12:00.000Z",
        items: [
          { id: "oi3", productId: "p3", qty: 1, unitPriceCents: 7999, name: "Vertex 4K Webcam" }
        ]
      }
    ]);
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(t) {
      return new (t || _OrdersComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 2, consts: [["data-testid", "orders", 1, "page"], [1, "page-header"], ["data-testid", "order-placed-banner", 1, "alert", "alert-success"], [1, "card", "empty-state"], [1, "muted"], ["routerLink", "/catalog", 1, "btn", "btn-sm", "mt-2"], [1, "stack"], [1, "card", "order-card", 3, "routerLink"], [1, "row", "between"], [1, "order-id"], [1, "text-right"], [1, "badge"], [1, "price", "mt-2"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Your orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, OrdersComponent_Conditional_4_Template, 2, 0, "div", 2)(5, OrdersComponent_Conditional_5_Template, 5, 0, "div", 3)(6, OrdersComponent_Conditional_6_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.justPlaced() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.orders().length === 0 ? 5 : 6);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink, MoneyPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src/app/features/orders/orders.component.ts", lineNumber: 15 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=orders.component-QHZMNPBW.js.map
