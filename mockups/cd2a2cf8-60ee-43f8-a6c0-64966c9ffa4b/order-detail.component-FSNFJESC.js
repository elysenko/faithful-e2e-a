import {
  OrderService
} from "./chunk-QKJLD3U2.js";
import {
  MoneyPipe
} from "./chunk-7MEJQ5O4.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  RouterLink,
  signal,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JG2HHNQL.js";

// src/app/features/orders/order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrderDetailComponent_Conditional_3_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "img", 12);
    \u0275\u0275elementStart(2, "div", 13)(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "line-" + item_r1.productId);
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r1.product == null ? null : item_r1.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", (item_r1.product == null ? null : item_r1.product.name) || "Product");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((item_r1.product == null ? null : item_r1.product.name) || item_r1.productId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Qty ", item_r1.qty, " \xB7 ", \u0275\u0275pipeBind1(7, 7, item_r1.unitPriceCents), " each");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, item_r1.qty * item_r1.unitPriceCents));
  }
}
function OrderDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "h2");
    \u0275\u0275text(12, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, OrderDetailComponent_Conditional_3_For_14_Template, 11, 11, "div", 7, _forTrack0);
    \u0275\u0275elementStart(15, "div", 8)(16, "span");
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "aside", 10)(22, "h2");
    \u0275\u0275text(23, "Shipping to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 11);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 3);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Order #", o_r2.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Placed ", \u0275\u0275pipeBind2(6, 8, o_r2.createdAt, "medium"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.badgeClass(o_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(o_r2.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 11, o_r2.totalCents));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(o_r2.shipName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.shipAddress);
  }
}
function OrderDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p");
    \u0275\u0275text(2, "Order not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 17);
    \u0275\u0275text(4, "Back to orders");
    \u0275\u0275elementEnd()();
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  constructor(route, orderService) {
    this.route = route;
    this.orderService = orderService;
    this.order = signal(void 0);
    const id = this.route.snapshot.paramMap.get("id");
    if (id)
      this.order.set(this.orderService.getById(id));
  }
  badgeClass(status) {
    if (status === "delivered")
      return "badge-success";
    if (status === "cancelled")
      return "badge-warning";
    return "badge-primary";
  }
  static {
    this.\u0275fac = function OrderDetailComponent_Factory(t) {
      return new (t || _OrderDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page"], ["routerLink", "/orders", "data-testid", "back-to-orders", 1, "back"], [1, "order-head"], [1, "muted"], ["data-testid", "order-status", 1, "badge"], [1, "detail-grid"], [1, "card", "items-card"], [1, "line"], [1, "line", "total"], ["data-testid", "order-total"], [1, "card", "ship-card"], [1, "ship-name"], ["width", "56", "height", "56", 3, "src", "alt"], [1, "line-info"], [1, "line-name"], [1, "line-total"], [1, "card", "empty"], ["routerLink", "/orders", 1, "btn", "btn-primary"]], template: function OrderDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OrderDetailComponent_Conditional_3_Template, 28, 13)(4, OrderDetailComponent_Conditional_4_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, (tmp_0_0 = ctx.order()) ? 3 : 4, tmp_0_0);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink, MoneyPipe], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n.order-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.order-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  margin-bottom: 2px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 300px;\n  gap: var(--space-5);\n  align-items: start;\n}\n.items-card[_ngcontent-%COMP%], .ship-card[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.items-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ship-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  margin-top: 0;\n}\n.line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n}\n.line-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.line-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.line-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.line.total[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-top: var(--space-3);\n  font-size: var(--text-lg);\n  font-weight: 700;\n  justify-content: space-between;\n}\n.ship-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0 0 var(--space-1);\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-8);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=order-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src/app/features/orders/order-detail.component.ts", lineNumber: 15 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=order-detail.component-FSNFJESC.js.map
