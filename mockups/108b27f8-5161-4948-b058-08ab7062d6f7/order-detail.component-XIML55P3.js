import {
  ApiService
} from "./chunk-Y35ABHFS.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-OKK7IX5Q.js";
import {
  CommonModule,
  DatePipe,
  computed,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IS4ZVKQ7.js";

// src/app/pages/order-detail/order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/products", a0];
function OrderDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading order\u2026");
    \u0275\u0275elementEnd()();
  }
}
function OrderDetailComponent_Conditional_4_Template(rf, ctx) {
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
function OrderDetailComponent_Conditional_5_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Shipped");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_Conditional_5_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Placed");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_Conditional_5_Conditional_0_For_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r2.product == null ? null : item_r2.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r2.product == null ? null : item_r2.product.name);
  }
}
function OrderDetailComponent_Conditional_5_Conditional_0_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 12);
    \u0275\u0275template(1, OrderDetailComponent_Conditional_5_Conditional_0_For_15_Conditional_1_Template, 1, 2, "img", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "a", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (item_r2.product == null ? null : item_r2.product.imageUrl) ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, item_r2.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.product == null ? null : item_r2.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.money(item_r2.unitPriceCents), " \xD7 ", item_r2.qty, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.money(item_r2.unitPriceCents * item_r2.qty));
  }
}
function OrderDetailComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, OrderDetailComponent_Conditional_5_Conditional_0_Conditional_7_Template, 2, 0, "span", 8)(8, OrderDetailComponent_Conditional_5_Conditional_0_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "h2");
    \u0275\u0275text(12, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 11);
    \u0275\u0275repeaterCreate(14, OrderDetailComponent_Conditional_5_Conditional_0_For_15_Template, 9, 8, "li", 12, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "span");
    \u0275\u0275text(18, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "aside", 14)(22, "h2");
    \u0275\u0275text(23, "Shipping to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 15);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 16);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Order #", o_r3.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Placed ", \u0275\u0275pipeBind2(6, 6, o_r3.createdAt, "medium"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, o_r3.status === "shipped" ? 7 : 8);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(o_r3.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.money(o_r3.totalCents));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r3.shipName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r3.shipAddress);
  }
}
function OrderDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderDetailComponent_Conditional_5_Conditional_0_Template, 28, 9);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.order()) ? 0 : -1, tmp_1_0);
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  constructor(api, route) {
    this.api = api;
    this.route = route;
    this.loading = signal(false);
    this.error = signal(null);
    this.orders = signal([
      {
        id: "o1002",
        userId: "demo-shopper",
        status: "placed",
        shipName: "Ada Lovelace",
        shipAddress: "123 Analytical Engine Way, London, UK",
        totalCents: 25300,
        createdAt: "2026-07-11T14:20:00.000Z",
        items: [
          {
            id: "oi1",
            orderId: "o1002",
            productId: "p1",
            qty: 1,
            unitPriceCents: 18900,
            product: {
              id: "p1",
              name: "Aurora Wireless Headphones",
              description: "",
              priceCents: 18900,
              imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
              stockQty: 24
            }
          },
          {
            id: "oi2",
            orderId: "o1002",
            productId: "p2",
            qty: 2,
            unitPriceCents: 3200,
            product: {
              id: "p2",
              name: "Terra Insulated Bottle",
              description: "",
              priceCents: 3200,
              imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&q=80",
              stockQty: 120
            }
          }
        ]
      }
    ]);
    this.orderId = "";
    this.order = computed(() => this.orders().find((o) => o.id === this.orderId) ?? this.orders()[0]);
  }
  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get("id") ?? "";
    this.loading.set(true);
    this.error.set(null);
    this.api.getOrder(this.orderId).subscribe({
      next: (order) => {
        this.orders.set([order]);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load this order.");
        this.loading.set(false);
      }
    });
  }
  money(cents) {
    return "$" + (cents / 100).toFixed(2);
  }
  static {
    this.\u0275fac = function OrderDetailComponent_Factory(t) {
      return new (t || _OrderDetailComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "container"], ["routerLink", "/orders", 1, "back-link"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "order-head"], [1, "muted"], [1, "badge", "badge-info"], [1, "order-grid"], [1, "card", "items-card"], [1, "item-list"], [1, "item-row"], [1, "order-total-row"], [1, "card", "ship-card"], [1, "ship-name"], [1, "muted", "ship-addr"], [1, "badge", "badge-warn"], ["width", "56", "height", "56", 1, "item-thumb", 3, "src", "alt"], [1, "item-main"], [1, "item-name", 3, "routerLink"], [1, "item-total"]], template: function OrderDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrderDetailComponent_Conditional_3_Template, 4, 0, "div", 2)(4, OrderDetailComponent_Conditional_4_Template, 5, 1)(5, OrderDetailComponent_Conditional_5_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() && !ctx.order() ? 4 : ctx.order() ? 5 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.order-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.order-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.order-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n  font-size: var(--fs-sm);\n}\n.order-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: var(--space-5);\n  align-items: start;\n}\n.items-card[_ngcontent-%COMP%], .ship-card[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n}\n.items-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ship-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--space-3);\n}\n.item-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.item-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.item-thumb[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius);\n  object-fit: cover;\n  background: var(--color-surface-inset);\n}\n.item-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.item-total[_ngcontent-%COMP%] {\n  font-weight: 800;\n  white-space: nowrap;\n}\n.order-total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--space-3);\n  padding-top: var(--space-3);\n  border-top: 2px solid var(--color-border);\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n.ship-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n}\n.ship-addr[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .order-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=order-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src/app/pages/order-detail/order-detail.component.ts", lineNumber: 18 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=order-detail.component-XIML55P3.js.map
