import {
  OrderService
} from "./chunk-27DN5E6I.js";
import {
  CommonModule,
  DatePipe,
  __spreadProps,
  __spreadValues,
  formatPrice,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2VXAXVQ7.js";

// src/app/admin/admin-orders/admin-orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminOrdersComponent_For_21_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function AdminOrdersComponent_For_21_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const order_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.advance(order_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.advancing() === order_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.advancing() === order_r2.id ? "Updating\u2026" : "Advance to shipped", " ");
  }
}
function AdminOrdersComponent_For_21_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1, "Shipped");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 6)(1, "td")(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 4);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 10);
    \u0275\u0275template(17, AdminOrdersComponent_For_21_Conditional_17_Template, 2, 2, "button", 11)(18, AdminOrdersComponent_For_21_Conditional_18_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const order_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r2.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 11, order_r2.createdAt, "shortDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = order_r2.user == null ? null : order_r2.user.name) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : order_r2.shipName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.user == null ? null : order_r2.user.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-info", order_r2.status === "placed")("badge-success", order_r2.status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.format(order_r2.totalCents));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(17, order_r2.status === "placed" ? 17 : 18);
  }
}
var AdminOrdersComponent = class _AdminOrdersComponent {
  constructor() {
    this.orderService = inject(OrderService);
    this.format = formatPrice;
    this.orders = signal([
      {
        id: "1042",
        status: "placed",
        totalCents: 6998,
        shipName: "Jane Doe",
        shipAddress: "120 Foundry Rd, Ogden, UT",
        createdAt: "2026-07-08T09:05:00Z",
        items: [
          { id: "oi1", productId: "1", productName: "CLASS-J Time-Delay Fuse 30A", quantity: 2, unitPriceCents: 1899 },
          { id: "oi2", productId: "6", productName: "Midget Fuse 10A 500V", quantity: 1, unitPriceCents: 3200 }
        ],
        user: { id: "u2", email: "shopper@demo", name: "Jane Doe" }
      },
      {
        id: "1041",
        status: "shipped",
        totalCents: 18900,
        shipName: "Sam Carter",
        shipAddress: "8 Grid Ave, Provo, UT",
        createdAt: "2026-07-06T14:12:00Z",
        items: [
          { id: "oi3", productId: "5", productName: "Fused Disconnect Switch 100A", quantity: 1, unitPriceCents: 18900 }
        ],
        user: { id: "u3", email: "sam@demo", name: "Sam Carter" }
      }
    ]);
    this.advancing = signal(null);
  }
  ngOnInit() {
    this.orderService.listAll().subscribe({
      next: (list) => this.orders.set(list),
      error: () => {
      }
    });
  }
  advance(order) {
    if (order.status !== "placed")
      return;
    this.advancing.set(order.id);
    this.orderService.advanceStatus(order.id, "shipped").subscribe({
      next: (updated) => {
        this.orders.update((list) => list.map((o) => o.id === updated.id ? updated : o));
        this.advancing.set(null);
      },
      error: () => {
        this.orders.update((list) => list.map((o) => o.id === order.id ? __spreadProps(__spreadValues({}, o), { status: "shipped" }) : o));
        this.advancing.set(null);
      }
    });
  }
  static {
    this.\u0275fac = function AdminOrdersComponent_Factory(t) {
      return new (t || _AdminOrdersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOrdersComponent, selectors: [["app-admin-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 0, consts: [[1, "container"], [1, "muted"], [1, "card", "table-wrap"], [1, "admin-table"], [1, "num"], [1, "actions-col"], ["data-testid", "admin-order-row"], [1, "order-id"], [1, "muted", "block"], [1, "badge"], [1, "actions"], ["type", "button", "data-testid", "advance-status", 1, "btn", "btn-secondary", "btn-sm", 3, "disabled"], ["type", "button", "data-testid", "advance-status", 1, "btn", "btn-secondary", "btn-sm", 3, "click", "disabled"]], template: function AdminOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "All orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Advance placed orders to shipped");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2)(6, "table", 3)(7, "thead")(8, "tr")(9, "th");
        \u0275\u0275text(10, "Order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "th");
        \u0275\u0275text(12, "Customer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th", 4);
        \u0275\u0275text(16, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th", 5);
        \u0275\u0275text(18, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "tbody");
        \u0275\u0275repeaterCreate(20, AdminOrdersComponent_For_21_Template, 19, 14, "tr", 6, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275repeater(ctx.orders());
      }
    }, dependencies: [CommonModule, DatePipe], styles: ["\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-top: var(--sp-4);\n}\n.admin-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--fs-base);\n  min-width: 640px;\n}\n.admin-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .admin-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--sp-3);\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: top;\n}\n.admin-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  text-transform: uppercase;\n  letter-spacing: .03em;\n}\n.admin-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.block[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-xs);\n}\n.actions-col[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=admin-orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOrdersComponent, { className: "AdminOrdersComponent", filePath: "src/app/admin/admin-orders/admin-orders.component.ts", lineNumber: 14 });
})();
export {
  AdminOrdersComponent
};
//# sourceMappingURL=admin-orders.component-SBAOIN67.js.map
