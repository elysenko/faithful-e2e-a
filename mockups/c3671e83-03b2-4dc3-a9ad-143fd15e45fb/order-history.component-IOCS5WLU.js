import {
  RouterLink
} from "./chunk-5PRKSMZW.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  signal,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LLQROSRE.js";

// src/app/features/orders/order-history.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function OrderHistoryComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function OrderHistoryComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function OrderHistoryComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "You have no orders yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 5);
    \u0275\u0275text(4, "Start shopping");
    \u0275\u0275elementEnd()();
  }
}
function OrderHistoryComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div", 8)(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, o_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Order #", o_r2.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 10, o_r2.createdAt, "mediumDate"), " \xB7 ", o_r2.items.length, " item(s)");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-placed", o_r2.status === "placed")("badge-shipped", o_r2.status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, o_r2.totalCents / 100));
  }
}
function OrderHistoryComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, OrderHistoryComponent_Conditional_6_For_2_Template, 12, 17, "a", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.orders());
  }
}
var OrderHistoryComponent = class _OrderHistoryComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.orders = signal([
      {
        id: "o-1001",
        userId: "demo-admin",
        status: "placed",
        shipName: "Demo Admin",
        shipAddress: "482 Industrial Pkwy, Salt Lake City, UT 84104",
        totalCents: 4597,
        createdAt: "2026-07-10T15:24:00Z",
        items: [
          { id: "oi-1", productId: "p-1", qty: 2, unitPriceCents: 1899, name: "Class J Time-Delay Fuse 30A" },
          { id: "oi-2", productId: "p-3", qty: 1, unitPriceCents: 749, name: "DIN-Rail Fuse Holder 1P" }
        ]
      },
      {
        id: "o-1000",
        userId: "demo-admin",
        status: "shipped",
        shipName: "Demo Admin",
        shipAddress: "482 Industrial Pkwy, Salt Lake City, UT 84104",
        totalCents: 42900,
        createdAt: "2026-07-02T09:10:00Z",
        items: [
          { id: "oi-3", productId: "p-4", qty: 1, unitPriceCents: 42900, name: "VFD 3HP 480V Drive" }
        ]
      }
    ]);
  }
  static {
    this.\u0275fac = function OrderHistoryComponent_Factory(t) {
      return new (t || _OrderHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderHistoryComponent, selectors: [["app-order-history"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "page"], [1, "page-title"], [1, "spinner"], [1, "alert", "alert-error"], [1, "empty-state"], ["routerLink", "/catalog", 1, "btn", "btn-primary"], [1, "orders"], ["data-testid", "order-row", 1, "order", "card", 3, "routerLink"], [1, "order-main"], [1, "order-id"], [1, "muted"], [1, "badge"], [1, "order-total"]], template: function OrderHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Your Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrderHistoryComponent_Conditional_3_Template, 1, 0, "div", 2)(4, OrderHistoryComponent_Conditional_4_Template, 2, 1)(5, OrderHistoryComponent_Conditional_5_Template, 5, 0)(6, OrderHistoryComponent_Conditional_6_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : ctx.orders().length === 0 ? 5 : 6);
      }
    }, dependencies: [CommonModule, CurrencyPipe, DatePipe, RouterLink], styles: ['\n\n.orders[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.order[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  align-items: center;\n  gap: var(--sp-4);\n  padding: var(--sp-4);\n  color: inherit;\n  transition: box-shadow .15s;\n}\n.order[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow);\n}\n.order-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.order-total[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n@media (max-width: 768px) {\n  .order[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr auto;\n    grid-template-areas: "main total" "badge total";\n  }\n  .order-main[_ngcontent-%COMP%] {\n    grid-area: main;\n  }\n  .order[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    grid-area: badge;\n    justify-self: start;\n  }\n  .order-total[_ngcontent-%COMP%] {\n    grid-area: total;\n    align-self: center;\n  }\n}\n/*# sourceMappingURL=order-history.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderHistoryComponent, { className: "OrderHistoryComponent", filePath: "src/app/features/orders/order-history.component.ts", lineNumber: 13 });
})();
export {
  OrderHistoryComponent
};
//# sourceMappingURL=order-history.component-IOCS5WLU.js.map
