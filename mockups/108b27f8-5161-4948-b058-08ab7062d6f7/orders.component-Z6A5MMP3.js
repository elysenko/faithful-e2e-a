import {
  ApiService
} from "./chunk-Y35ABHFS.js";
import {
  RouterLink
} from "./chunk-OKK7IX5Q.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IS4ZVKQ7.js";

// src/app/pages/orders/orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function OrdersComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your orders\u2026");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function OrdersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "You haven't placed any orders yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 6);
    \u0275\u0275text(6, "Start shopping");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_Conditional_6_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Shipped");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_Conditional_6_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Placed");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 8)(2, "div", 9)(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 12)(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, OrdersComponent_Conditional_6_For_2_Conditional_13_Template, 2, 0, "span", 15)(14, OrdersComponent_Conditional_6_For_2_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, order_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Order #", order_r2.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, order_r2.createdAt, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.itemCount(order_r2), " item", ctx_r0.itemCount(order_r2) === 1 ? "" : "s", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.money(order_r2.totalCents));
    \u0275\u0275advance();
    \u0275\u0275conditional(13, order_r2.status === "shipped" ? 13 : 14);
  }
}
function OrdersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275repeaterCreate(1, OrdersComponent_Conditional_6_For_2_Template, 15, 12, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.orders());
  }
}
var OrdersComponent = class _OrdersComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.orders = signal([
      {
        id: "o1002",
        userId: "demo-shopper",
        status: "placed",
        shipName: "Ada Lovelace",
        shipAddress: "123 Analytical Engine Way, London",
        totalCents: 25300,
        createdAt: "2026-07-11T14:20:00.000Z",
        items: [
          {
            id: "oi1",
            orderId: "o1002",
            productId: "p1",
            qty: 1,
            unitPriceCents: 18900,
            product: { id: "p1", name: "Aurora Wireless Headphones", description: "", priceCents: 18900, imageUrl: "", stockQty: 24 }
          },
          {
            id: "oi2",
            orderId: "o1002",
            productId: "p2",
            qty: 2,
            unitPriceCents: 3200,
            product: { id: "p2", name: "Terra Insulated Bottle", description: "", priceCents: 3200, imageUrl: "", stockQty: 120 }
          }
        ]
      },
      {
        id: "o1001",
        userId: "demo-shopper",
        status: "shipped",
        shipName: "Ada Lovelace",
        shipAddress: "123 Analytical Engine Way, London",
        totalCents: 6400,
        createdAt: "2026-07-04T09:05:00.000Z",
        items: [
          {
            id: "oi3",
            orderId: "o1001",
            productId: "p4",
            qty: 1,
            unitPriceCents: 6400,
            product: { id: "p4", name: "Lumen Desk Lamp", description: "", priceCents: 6400, imageUrl: "", stockQty: 3 }
          }
        ]
      }
    ]);
  }
  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
    this.api.myOrders().subscribe({
      next: (orders) => {
        this.orders.set(orders);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load your orders.");
        this.loading.set(false);
      }
    });
  }
  itemCount(order) {
    return order.items.reduce((sum, i) => sum + i.qty, 0);
  }
  money(cents) {
    return "$" + (cents / 100).toFixed(2);
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(t) {
      return new (t || _OrdersComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "container"], [1, "page-title"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "order-list"], [1, "card", "order-row", 3, "routerLink"], [1, "order-main"], [1, "order-id"], [1, "order-date", "muted"], [1, "order-meta"], [1, "muted"], [1, "order-total"], [1, "badge", "badge-info"], [1, "badge", "badge-warn"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Your orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrdersComponent_Conditional_3_Template, 4, 0, "div", 2)(4, OrdersComponent_Conditional_4_Template, 5, 1)(5, OrdersComponent_Conditional_5_Template, 7, 0)(6, OrdersComponent_Conditional_6_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : ctx.orders().length === 0 ? 5 : 6);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ["\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-bottom: var(--space-5);\n}\n.order-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.order-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-4);\n  color: inherit;\n  transition:\n    box-shadow .15s,\n    border-color .15s,\n    transform .05s;\n}\n.order-row[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n}\n.order-row[_ngcontent-%COMP%]:active {\n  transform: scale(.99);\n}\n.order-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.order-date[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.order-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.order-total[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n@media (max-width: 768px) {\n  .order-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--space-2);\n  }\n  .order-meta[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src/app/pages/orders/orders.component.ts", lineNumber: 18 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=orders.component-Z6A5MMP3.js.map
