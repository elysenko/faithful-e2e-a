import {
  toSignal
} from "./chunk-5VJSRZDM.js";
import {
  OrdersService
} from "./chunk-OVSGH2SK.js";
import {
  MoneyPipe
} from "./chunk-ZIOGLSPH.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  Router,
  RouterLink,
  TitleCasePipe,
  computed,
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
} from "./chunk-POJ4OZZ3.js";

// src/app/features/admin/admin-orders.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function AdminOrdersComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function AdminOrdersComponent_For_8_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(f_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.statusFilter() === f_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function AdminOrdersComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 8);
    \u0275\u0275text(2, "No orders in this view.");
    \u0275\u0275elementEnd()();
  }
}
function AdminOrdersComponent_Conditional_10_For_17_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_10_For_17_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const order_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.advance(order_r5.id));
    });
    \u0275\u0275text(1, "Mark shipped");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_10_For_17_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Fulfilled");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_10_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12)(2, "a", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 15);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 11);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 11);
    \u0275\u0275template(19, AdminOrdersComponent_Conditional_10_For_17_Conditional_19_Template, 2, 0, "button", 16)(20, AdminOrdersComponent_Conditional_10_For_17_Conditional_20_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, order_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r5.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.shipName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.customerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 12, order_r5.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-info", order_r5.status === "placed")("badge-success", order_r5.status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 15, order_r5.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 17, order_r5.totalCents));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(19, order_r5.status === "placed" ? 19 : 20);
  }
}
function AdminOrdersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 11);
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, AdminOrdersComponent_Conditional_10_For_17_Template, 21, 21, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.orders());
  }
}
var AdminOrdersComponent = class _AdminOrdersComponent {
  ordersSvc = inject(OrdersService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  filters = [
    { key: "", label: "All" },
    { key: "placed", label: "Placed" },
    { key: "shipped", label: "Shipped" }
  ];
  statusFilter = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("status") ?? "")), {
    initialValue: ""
  });
  orders = computed(() => {
    const status = this.statusFilter();
    const all = this.ordersSvc.orders();
    return status ? all.filter((o) => o.status === status) : all;
  });
  setFilter(status) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { status: status || null },
      queryParamsHandling: "merge"
    });
  }
  advance(id) {
    this.ordersSvc.advanceStatus(id);
  }
  static \u0275fac = function AdminOrdersComponent_Factory(t) {
    return new (t || _AdminOrdersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOrdersComponent, selectors: [["app-admin-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "tabs"], ["type", "button", 1, "tab", 3, "active"], [1, "card", "card-pad"], ["type", "button", 1, "tab", 3, "click"], [1, "muted"], [1, "card", "table-wrap"], [1, "table"], [1, "right"], [1, "mono"], [3, "routerLink"], [1, "muted", "small"], [1, "badge"], ["type", "button", "data-testid", "advance-status", 1, "btn", "btn-sm", "btn-primary"], ["type", "button", "data-testid", "advance-status", 1, "btn", "btn-sm", "btn-primary", 3, "click"]], template: function AdminOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Manage and fulfil customer orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275repeaterCreate(7, AdminOrdersComponent_For_8_Template, 2, 3, "button", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, AdminOrdersComponent_Conditional_9_Template, 3, 0, "div", 6)(10, AdminOrdersComponent_Conditional_10_Template, 18, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.filters);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(9, ctx.orders().length === 0 ? 9 : 10);
    }
  }, dependencies: [CommonModule, TitleCasePipe, DatePipe, RouterLink, MoneyPipe], styles: ["\n\n.small[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=admin-orders.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOrdersComponent, { className: "AdminOrdersComponent", filePath: "src/app/features/admin/admin-orders.component.ts", lineNumber: 17 });
})();
export {
  AdminOrdersComponent
};
//# sourceMappingURL=admin-orders.component-PLXODADV.js.map
