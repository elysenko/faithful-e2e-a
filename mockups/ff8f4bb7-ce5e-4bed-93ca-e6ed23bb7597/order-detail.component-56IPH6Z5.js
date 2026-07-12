import {
  OrderService
} from "./chunk-27DN5E6I.js";
import {
  ActivatedRoute,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2VXAXVQ7.js";

// src/app/pages/order-detail/order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrderDetailComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " \u{1F389} Order placed! A confirmation has been recorded. ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_Conditional_3_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r1.productName, " \xD7 ", item_r1.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.format(item_r1.unitPriceCents * item_r1.quantity));
  }
}
function OrderDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderDetailComponent_Conditional_3_Conditional_0_Template, 2, 0, "div", 2);
    \u0275\u0275elementStart(1, "div", 3)(2, "div")(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "h3");
    \u0275\u0275text(13, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, OrderDetailComponent_Conditional_3_For_15_Template, 5, 3, "div", 8, _forTrack0);
    \u0275\u0275elementStart(16, "div", 9)(17, "span");
    \u0275\u0275text(18, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "aside", 10)(22, "h3");
    \u0275\u0275text(23, "Shipping to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 11);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 12);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r1.justPlaced() ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order #", o_r3.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Placed ", \u0275\u0275pipeBind2(7, 11, o_r3.createdAt, "medium"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-info", o_r3.status === "placed")("badge-success", o_r3.status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r3.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(o_r3.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.format(o_r3.totalCents));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r3.shipName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r3.shipAddress);
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  constructor() {
    this.orderService = inject(OrderService);
    this.route = inject(ActivatedRoute);
    this.format = formatPrice;
    this.justPlaced = signal(false);
    this.order = signal({
      id: "1042",
      status: "placed",
      totalCents: 6998,
      shipName: "Jane Doe",
      shipAddress: "120 Foundry Rd, Ogden, UT 84401",
      createdAt: "2026-07-08T09:05:00Z",
      items: [
        { id: "oi1", productId: "1", productName: "CLASS-J Time-Delay Fuse 30A", quantity: 2, unitPriceCents: 1899 },
        { id: "oi2", productId: "6", productName: "Midget Fuse 10A 500V (Pack of 10)", quantity: 1, unitPriceCents: 3200 }
      ]
    });
  }
  ngOnInit() {
    this.justPlaced.set(this.route.snapshot.queryParamMap.get("placed") === "1");
    const id = this.route.snapshot.paramMap.get("id");
    if (!id)
      return;
    this.orderService.get(id).subscribe({
      next: (o) => this.order.set(o),
      error: () => {
      }
    });
  }
  static {
    this.\u0275fac = function OrderDetailComponent_Factory(t) {
      return new (t || _OrderDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "container"], ["routerLink", "/orders", 1, "back", "link-btn"], ["data-testid", "order-confirmed", 1, "alert", "alert-success"], [1, "order-head"], [1, "muted"], [1, "badge"], [1, "order-grid"], [1, "items", "card"], [1, "item-row"], [1, "item-total"], [1, "ship", "card"], [1, "ship-name"], [1, "muted", "ship-addr"], [1, "item-name"]], template: function OrderDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrderDetailComponent_Conditional_3_Template, 28, 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, (tmp_0_0 = ctx.order()) ? 3 : -1, tmp_0_0);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--sp-4);\n}\n.order-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--sp-4);\n  margin-bottom: var(--sp-5);\n}\n.order-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-1);\n}\n.order-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 300px;\n  gap: var(--sp-5);\n  align-items: start;\n}\n.items[_ngcontent-%COMP%], .ship[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n}\n.items[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .ship[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-3);\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  padding: var(--sp-2) 0;\n}\n.item-name[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n}\n.item-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: var(--sp-3);\n  padding-top: var(--sp-3);\n  border-top: 1px solid var(--color-border);\n  font-weight: 700;\n  font-size: var(--fs-md);\n}\n.ship-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0 0 var(--sp-1);\n}\n.ship-addr[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-line;\n}\n@media (max-width: 768px) {\n  .order-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=order-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src/app/pages/order-detail/order-detail.component.ts", lineNumber: 15 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=order-detail.component-56IPH6Z5.js.map
