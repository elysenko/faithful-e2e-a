import {
  toSignal
} from "./chunk-5T3QUQ7K.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-5PRKSMZW.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  computed,
  inject,
  map,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LLQROSRE.js";

// src/app/features/orders/order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrderDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function OrderDetailComponent_Conditional_4_Template(rf, ctx) {
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
function OrderDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "Order not found.");
    \u0275\u0275elementEnd()();
  }
}
function OrderDetailComponent_Conditional_6_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.name || item_r2.productId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r2.qty, " \xD7 ", \u0275\u0275pipeBind1(5, 4, item_r2.unitPriceCents / 100), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, item_r2.qty * item_r2.unitPriceCents / 100));
  }
}
function OrderDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div")(2, "h1", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 9)(10, "h2");
    \u0275\u0275text(11, "Shipping to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275element(14, "br");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "h2");
    \u0275\u0275text(18, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, OrderDetailComponent_Conditional_6_For_20_Template, 9, 8, "div", 11, _forTrack0);
    \u0275\u0275elementStart(21, "div", 12)(22, "span");
    \u0275\u0275text(23, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "span");
    \u0275\u0275elementStart(25, "span", 13);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Order #", ctx_r0.order().id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Placed ", \u0275\u0275pipeBind2(6, 10, ctx_r0.order().createdAt, "medium"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-placed", ctx_r0.order().status === "placed")("badge-shipped", ctx_r0.order().status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.order().status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order().shipName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.order().shipAddress);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.order().items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 13, ctx_r0.order().totalCents / 100));
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
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
    this.id = toSignal(this.route.paramMap.pipe(map((p) => p.get("id") ?? "")), { initialValue: "" });
    this.order = computed(() => this.orders().find((o) => o.id === this.id()));
  }
  static {
    this.\u0275fac = function OrderDetailComponent_Factory(t) {
      return new (t || _OrderDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "page"], ["routerLink", "/orders", 1, "back"], [1, "spinner"], [1, "alert", "alert-error"], [1, "empty-state"], [1, "head"], [1, "page-title"], [1, "muted"], ["data-testid", "order-status", 1, "badge"], [1, "card", "ship"], [1, "card", "items"], [1, "item-row"], [1, "item-row", "total"], [1, "item-total"], [1, "item-name"]], template: function OrderDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrderDetailComponent_Conditional_3_Template, 1, 0, "div", 2)(4, OrderDetailComponent_Conditional_4_Template, 2, 1)(5, OrderDetailComponent_Conditional_5_Template, 3, 0)(6, OrderDetailComponent_Conditional_6_Template, 28, 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : !ctx.order() ? 5 : 6);
      }
    }, dependencies: [CommonModule, CurrencyPipe, DatePipe, RouterLink], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--sp-4);\n  color: var(--color-info);\n  font-weight: 600;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: var(--sp-4);\n  gap: var(--sp-3);\n}\n.card[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  margin-bottom: var(--sp-4);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-top: 0;\n}\n.ship[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-ink-soft);\n}\n.item-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  gap: var(--sp-4);\n  padding: var(--sp-2) 0;\n  align-items: center;\n}\n.item-row[_ngcontent-%COMP%]    + .item-row[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.item-total[_ngcontent-%COMP%] {\n  min-width: 80px;\n  text-align: right;\n  font-weight: 700;\n}\n.item-row.total[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 800;\n  border-top: 2px solid var(--color-border-strong);\n  margin-top: var(--sp-2);\n}\n/*# sourceMappingURL=order-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src/app/features/orders/order-detail.component.ts", lineNumber: 15 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=order-detail.component-E44HNWA5.js.map
