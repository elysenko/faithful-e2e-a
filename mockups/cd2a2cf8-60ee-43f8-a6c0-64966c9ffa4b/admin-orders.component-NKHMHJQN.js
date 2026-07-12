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
  computed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵtextInterpolate1
} from "./chunk-JG2HHNQL.js";

// src/app/features/admin/admin-orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function AdminOrdersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p");
    \u0275\u0275text(2, "No orders have been placed yet.");
    \u0275\u0275elementEnd()();
  }
}
function AdminOrdersComponent_Conditional_16_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 12);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 8)(18, "a", 13);
    \u0275\u0275text(19, "View");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-testid", "admin-order-" + order_r1.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r1.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 10, order_r1.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r1.userEmail || order_r1.shipName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.badgeClass(order_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r1.items.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, order_r1.totalCents));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, order_r1.id));
  }
}
function AdminOrdersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "table", 7)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 8);
    \u0275\u0275text(11, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 8);
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, AdminOrdersComponent_Conditional_16_For_17_Template, 20, 17, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
var AdminOrdersComponent = class _AdminOrdersComponent {
  constructor(orderService) {
    this.orderService = orderService;
    this.orders = this.orderService.orders;
    this.revenueCents = computed(() => this.orders().reduce((sum, o) => sum + o.totalCents, 0));
  }
  badgeClass(status) {
    if (status === "delivered")
      return "badge-success";
    if (status === "cancelled")
      return "badge-warning";
    return "badge-primary";
  }
  static {
    this.\u0275fac = function AdminOrdersComponent_Factory(t) {
      return new (t || _AdminOrdersComponent)(\u0275\u0275directiveInject(OrderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOrdersComponent, selectors: [["app-admin-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 5, consts: [[1, "page"], [1, "stats"], [1, "card", "stat"], [1, "stat-label", "muted"], [1, "stat-value"], [1, "card", "empty"], [1, "card", "table-wrap"], [1, "admin-table"], [1, "num"], [1, "order-id"], [1, "muted", "date"], [1, "badge"], [1, "num", "total"], [1, "btn", "btn-secondary", "btn-sm", 3, "routerLink"]], template: function AdminOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "All orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "span", 3);
        \u0275\u0275text(6, "Total orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 2)(10, "span", 3);
        \u0275\u0275text(11, "Total revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 4);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "money");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, AdminOrdersComponent_Conditional_15_Template, 3, 0, "div", 5)(16, AdminOrdersComponent_Conditional_16_Template, 18, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.orders().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 3, ctx.revenueCents()));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(15, ctx.orders().length === 0 ? 15 : 16);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink, MoneyPipe], styles: ["\n\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.stat[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: 700;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.admin-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 640px;\n}\n.admin-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .admin-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: var(--space-3) var(--space-4);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.admin-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n  display: block;\n}\n.date[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.total[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-8);\n  text-align: center;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=admin-orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOrdersComponent, { className: "AdminOrdersComponent", filePath: "src/app/features/admin/admin-orders.component.ts", lineNumber: 14 });
})();
export {
  AdminOrdersComponent
};
//# sourceMappingURL=admin-orders.component-NKHMHJQN.js.map
