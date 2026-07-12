import {
  OrderService
} from "./chunk-27DN5E6I.js";
import {
  RouterLink
} from "./chunk-GPQOFHD2.js";
import {
  CommonModule,
  DatePipe,
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
} from "./chunk-2VXAXVQ7.js";

// src/app/pages/order-history/order-history.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function OrderHistoryComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
    \u0275\u0275text(2, "You haven't placed any orders yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 3);
    \u0275\u0275text(4, "Start shopping");
    \u0275\u0275elementEnd()();
  }
}
function OrderHistoryComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 2);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, order_r1.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Order #", order_r1.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 10, order_r1.createdAt, "mediumDate"), " \xB7 ", order_r1.items.length, " item(s)");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-info", order_r1.status === "placed")("badge-success", order_r1.status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.format(order_r1.totalCents));
  }
}
function OrderHistoryComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, OrderHistoryComponent_Conditional_4_For_2_Template, 11, 15, "a", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
var OrderHistoryComponent = class _OrderHistoryComponent {
  constructor() {
    this.orderService = inject(OrderService);
    this.format = formatPrice;
    this.orders = signal([
      {
        id: "1042",
        status: "shipped",
        totalCents: 6998,
        shipName: "Jane Doe",
        shipAddress: "120 Foundry Rd, Ogden, UT",
        createdAt: "2026-07-02T15:20:00Z",
        items: [
          { id: "oi1", productId: "1", productName: "CLASS-J Time-Delay Fuse 30A", quantity: 2, unitPriceCents: 1899 },
          { id: "oi2", productId: "6", productName: "Midget Fuse 10A 500V (Pack of 10)", quantity: 1, unitPriceCents: 3200 }
        ]
      },
      {
        id: "1039",
        status: "placed",
        totalCents: 18900,
        shipName: "Jane Doe",
        shipAddress: "120 Foundry Rd, Ogden, UT",
        createdAt: "2026-07-08T09:05:00Z",
        items: [
          { id: "oi3", productId: "5", productName: "Fused Disconnect Switch 100A", quantity: 1, unitPriceCents: 18900 }
        ]
      }
    ]);
    this.loading = signal(false);
  }
  ngOnInit() {
    this.loading.set(true);
    this.orderService.listMine().subscribe({
      next: (list) => {
        this.orders.set(list);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static {
    this.\u0275fac = function OrderHistoryComponent_Factory(t) {
      return new (t || _OrderHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderHistoryComponent, selectors: [["app-order-history"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "container"], [1, "empty", "card"], [1, "muted"], ["routerLink", "/catalog", 1, "btn", "btn-primary"], [1, "order-list"], ["data-testid", "order-row", 1, "order-row", "card", 3, "routerLink"], [1, "order-main"], [1, "order-id"], [1, "badge"], [1, "order-total"]], template: function OrderHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Your orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrderHistoryComponent_Conditional_3_Template, 5, 0, "div", 1)(4, OrderHistoryComponent_Conditional_4_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.orders().length === 0 ? 3 : 4);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ['\n\n.empty[_ngcontent-%COMP%] {\n  padding: var(--sp-8);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--sp-4);\n}\n.order-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.order-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: var(--sp-4);\n  padding: var(--sp-4);\n  color: inherit;\n}\n.order-row[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: var(--shadow);\n}\n.order-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.order-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  min-width: 80px;\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .order-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr auto;\n    grid-template-areas: "main total" "badge total";\n    row-gap: var(--sp-2);\n  }\n  .order-main[_ngcontent-%COMP%] {\n    grid-area: main;\n  }\n  .badge[_ngcontent-%COMP%] {\n    grid-area: badge;\n    justify-self: start;\n  }\n  .order-total[_ngcontent-%COMP%] {\n    grid-area: total;\n    align-self: center;\n  }\n}\n/*# sourceMappingURL=order-history.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderHistoryComponent, { className: "OrderHistoryComponent", filePath: "src/app/pages/order-history/order-history.component.ts", lineNumber: 15 });
})();
export {
  OrderHistoryComponent
};
//# sourceMappingURL=order-history.component-CZAWA4SP.js.map
