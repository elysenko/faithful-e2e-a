import {
  OrderService
} from "./chunk-QKJLD3U2.js";
import {
  MoneyPipe
} from "./chunk-7MEJQ5O4.js";
import {
  CommonModule,
  DatePipe,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵtextInterpolate3
} from "./chunk-JG2HHNQL.js";

// src/app/features/orders/orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function OrdersComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "You haven\u2019t placed any orders yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 3);
    \u0275\u0275text(6, "Start shopping");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "div", 6)(2, "div", 7)(3, "span", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11)(11, "span", 12);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 13);
    \u0275\u0275text(15, "\u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, order_r1.id));
    \u0275\u0275attribute("data-testid", "order-" + order_r1.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", order_r1.id, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.badgeClass(order_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind2(9, 10, order_r1.createdAt, "mediumDate"), " \xB7 ", order_r1.items.length, " item", order_r1.items.length === 1 ? "" : "s", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, order_r1.totalCents));
  }
}
function OrdersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, OrdersComponent_Conditional_4_For_2_Template, 16, 17, "a", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
var OrdersComponent = class _OrdersComponent {
  constructor(orderService) {
    this.orderService = orderService;
    this.orders = this.orderService.orders;
  }
  badgeClass(status) {
    if (status === "delivered")
      return "badge-success";
    if (status === "cancelled")
      return "badge-warning";
    return "badge-primary";
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(t) {
      return new (t || _OrdersComponent)(\u0275\u0275directiveInject(OrderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page"], ["data-testid", "orders-empty", 1, "card", "empty"], [1, "empty-mark"], ["routerLink", "/catalog", 1, "btn", "btn-primary"], [1, "order-list"], [1, "card", "order-card", 3, "routerLink"], [1, "order-main"], [1, "order-id-row"], [1, "order-id"], [1, "badge"], [1, "muted"], [1, "order-side"], [1, "order-total"], [1, "chevron"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Your orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrdersComponent_Conditional_3_Template, 7, 0, "div", 1)(4, OrdersComponent_Conditional_4_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.orders().length === 0 ? 3 : 4);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink, MoneyPipe], styles: ["\n\n.order-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.order-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-4);\n  color: var(--color-text);\n  min-height: 44px;\n  transition: box-shadow 0.15s ease;\n}\n.order-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n.order-card[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.order-id-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: 2px;\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.order-side[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.order-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--text-lg);\n}\n.chevron[_ngcontent-%COMP%] {\n  color: var(--color-text-subtle);\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-8);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  align-items: center;\n}\n.empty-mark[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n/*# sourceMappingURL=orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src/app/features/orders/orders.component.ts", lineNumber: 14 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=orders.component-7ZBCSGIM.js.map
