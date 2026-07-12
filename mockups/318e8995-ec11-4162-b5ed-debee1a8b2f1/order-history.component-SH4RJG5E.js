import {
  OrdersService
} from "./chunk-OVSGH2SK.js";
import {
  AuthService
} from "./chunk-7JCEHVK2.js";
import {
  MoneyPipe
} from "./chunk-ZIOGLSPH.js";
import {
  CommonModule,
  DatePipe,
  RouterLink,
  TitleCasePipe,
  computed,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
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
} from "./chunk-POJ4OZZ3.js";

// src/app/features/orders/order-history.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function OrderHistoryComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 5);
    \u0275\u0275text(2, "You haven't placed any orders yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 6);
    \u0275\u0275text(4, "Start shopping");
    \u0275\u0275elementEnd()();
  }
}
function OrderHistoryComponent_Conditional_7_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 11);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 9)(16, "a", 12);
    \u0275\u0275text(17, "View");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 10, order_r1.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r1.items.length);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-info", order_r1.status === "placed")("badge-success", order_r1.status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, order_r1.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, order_r1.totalCents));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, order_r1.id));
  }
}
function OrderHistoryComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 8)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 9);
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, OrderHistoryComponent_Conditional_7_For_17_Template, 18, 19, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
var OrderHistoryComponent = class _OrderHistoryComponent {
  ordersSvc = inject(OrdersService);
  auth = inject(AuthService);
  orders = computed(() => {
    const email = this.auth.user()?.email;
    const mine = this.ordersSvc.orders().filter((o) => o.customerEmail === email);
    return mine.length ? mine : this.ordersSvc.orders();
  });
  static \u0275fac = function OrderHistoryComponent_Factory(t) {
    return new (t || _OrderHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderHistoryComponent, selectors: [["app-order-history"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "card", "card-pad", "empty"], [1, "muted"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "card", "table-wrap"], [1, "table"], [1, "right"], [1, "mono"], [1, "badge"], [1, "btn", "btn-sm", 3, "routerLink"]], template: function OrderHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Your orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, OrderHistoryComponent_Conditional_6_Template, 5, 0, "div", 4)(7, OrderHistoryComponent_Conditional_7_Template, 18, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.orders().length, " order(s)");
      \u0275\u0275advance();
      \u0275\u0275conditional(6, ctx.orders().length === 0 ? 6 : 7);
    }
  }, dependencies: [CommonModule, TitleCasePipe, DatePipe, RouterLink, MoneyPipe], styles: ["\n\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-4);\n  align-items: center;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=order-history.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderHistoryComponent, { className: "OrderHistoryComponent", filePath: "src/app/features/orders/order-history.component.ts", lineNumber: 16 });
})();
export {
  OrderHistoryComponent
};
//# sourceMappingURL=order-history.component-SH4RJG5E.js.map
