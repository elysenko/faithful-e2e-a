import {
  ApiService
} from "./chunk-Y35ABHFS.js";
import {
  RouterLink
} from "./chunk-OKK7IX5Q.js";
import {
  CommonModule,
  DatePipe,
  __spreadProps,
  __spreadValues,
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
} from "./chunk-IS4ZVKQ7.js";

// src/app/pages/admin-orders/admin-orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function AdminOrdersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading orders\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminOrdersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
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
function AdminOrdersComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No orders yet.");
    \u0275\u0275elementEnd()();
  }
}
function AdminOrdersComponent_Conditional_10_For_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Shipped");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_10_For_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Placed");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_10_For_18_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_10_For_18_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const o_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markShipped(o_r3));
    });
    \u0275\u0275text(1, " Mark shipped ");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_10_For_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_10_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, AdminOrdersComponent_Conditional_10_For_18_Conditional_14_Template, 2, 0, "span", 14)(15, AdminOrdersComponent_Conditional_10_For_18_Conditional_15_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 11);
    \u0275\u0275template(17, AdminOrdersComponent_Conditional_10_For_18_Conditional_17_Template, 2, 0, "button", 15)(18, AdminOrdersComponent_Conditional_10_For_18_Conditional_18_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, o_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", o_r3.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 8, o_r3.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r3.shipName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.itemCount(o_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.money(o_r3.totalCents));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(14, o_r3.status === "shipped" ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(17, o_r3.status === "placed" ? 17 : 18);
  }
}
function AdminOrdersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Ship to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 10);
    \u0275\u0275text(9, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 10);
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 11);
    \u0275\u0275text(15, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, AdminOrdersComponent_Conditional_10_For_18_Template, 19, 13, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.orders());
  }
}
var AdminOrdersComponent = class _AdminOrdersComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.orders = signal([
      {
        id: "o1002",
        userId: "u-shopper",
        status: "placed",
        shipName: "Ada Lovelace",
        shipAddress: "123 Analytical Engine Way, London",
        totalCents: 25300,
        createdAt: "2026-07-11T14:20:00.000Z",
        items: [
          { id: "oi1", orderId: "o1002", productId: "p1", qty: 1, unitPriceCents: 18900 },
          { id: "oi2", orderId: "o1002", productId: "p2", qty: 2, unitPriceCents: 3200 }
        ]
      },
      {
        id: "o1001",
        userId: "u-shopper",
        status: "shipped",
        shipName: "Grace Hopper",
        shipAddress: "400 Naval Ave, Arlington",
        totalCents: 6400,
        createdAt: "2026-07-04T09:05:00.000Z",
        items: [{ id: "oi3", orderId: "o1001", productId: "p4", qty: 1, unitPriceCents: 6400 }]
      },
      {
        id: "o1000",
        userId: "u-shopper2",
        status: "placed",
        shipName: "Alan Turing",
        shipAddress: "78 Bletchley Park, Milton Keynes",
        totalCents: 14500,
        createdAt: "2026-07-02T16:45:00.000Z",
        items: [{ id: "oi4", orderId: "o1000", productId: "p3", qty: 1, unitPriceCents: 14500 }]
      }
    ]);
  }
  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
    this.api.allOrders().subscribe({
      next: (orders) => {
        this.orders.set(orders);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load orders.");
        this.loading.set(false);
      }
    });
  }
  markShipped(order) {
    this.orders.update((list) => list.map((o) => o.id === order.id ? __spreadProps(__spreadValues({}, o), { status: "shipped" }) : o));
    this.api.setOrderStatus(order.id, "shipped").subscribe({ error: () => {
    } });
  }
  itemCount(order) {
    return order.items.reduce((sum, i) => sum + i.qty, 0);
  }
  money(cents) {
    return "$" + (cents / 100).toFixed(2);
  }
  static {
    this.\u0275fac = function AdminOrdersComponent_Factory(t) {
      return new (t || _AdminOrdersComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOrdersComponent, selectors: [["app-admin-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "container"], [1, "page-head"], [1, "spacer"], ["routerLink", "/admin/products", 1, "btn", "btn-outline", "btn-sm"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], [1, "actions-col"], [1, "order-id", 3, "routerLink"], [1, "muted", "order-date"], [1, "badge", "badge-info"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"], [1, "badge", "badge-warn"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "muted"]], template: function AdminOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementStart(5, "a", 3);
        \u0275\u0275text(6, "Manage products");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, AdminOrdersComponent_Conditional_7_Template, 4, 0, "div", 4)(8, AdminOrdersComponent_Conditional_8_Template, 5, 1)(9, AdminOrdersComponent_Conditional_9_Template, 5, 0)(10, AdminOrdersComponent_Conditional_10_Template, 19, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.loading() ? 7 : ctx.error() ? 8 : ctx.orders().length === 0 ? 9 : 10);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.order-date[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n/*# sourceMappingURL=admin-orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOrdersComponent, { className: "AdminOrdersComponent", filePath: "src/app/pages/admin-orders/admin-orders.component.ts", lineNumber: 18 });
})();
export {
  AdminOrdersComponent
};
//# sourceMappingURL=admin-orders.component-KV37MUZG.js.map
