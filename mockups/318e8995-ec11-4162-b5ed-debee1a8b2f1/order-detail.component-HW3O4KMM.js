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

// src/app/features/orders/order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/products", a0];
function OrderDetailComponent_Conditional_3_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 10);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, item_r1.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, item_r1.unitPriceCents));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, item_r1.unitPriceCents * item_r1.quantity));
  }
}
function OrderDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "table", 9)(14, "thead")(15, "tr")(16, "th");
    \u0275\u0275text(17, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 10);
    \u0275\u0275text(19, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 10);
    \u0275\u0275text(21, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 10);
    \u0275\u0275text(23, "Line");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, OrderDetailComponent_Conditional_3_For_26_Template, 12, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "tfoot")(28, "tr")(29, "td", 11);
    \u0275\u0275text(30, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 12);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "money");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(34, "aside", 13)(35, "h2");
    \u0275\u0275text(36, "Shipping to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 14);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 15);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "hr");
    \u0275\u0275elementStart(42, "p", 16);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r2 = ctx;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Order ", o_r2.reference, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Placed ", \u0275\u0275pipeBind2(7, 11, o_r2.createdAt, "medium"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-info", o_r2.status === "placed")("badge-success", o_r2.status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 14, o_r2.status), " ");
    \u0275\u0275advance(16);
    \u0275\u0275repeater(o_r2.items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 16, o_r2.totalCents));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(o_r2.shipName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.shipAddress);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("A confirmation was sent to ", o_r2.customerEmail, ".");
  }
}
function OrderDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p", 15);
    \u0275\u0275text(2, "Order not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 19);
    \u0275\u0275text(4, "Back to orders");
    \u0275\u0275elementEnd()();
  }
}
var OrderDetailComponent = class _OrderDetailComponent {
  route = inject(ActivatedRoute);
  ordersSvc = inject(OrdersService);
  orderId = toSignal(this.route.paramMap.pipe(map((p) => p.get("id"))), {
    initialValue: null
  });
  order = computed(() => this.ordersSvc.orders().find((o) => o.id === this.orderId()) ?? null);
  static \u0275fac = function OrderDetailComponent_Factory(t) {
    return new (t || _OrderDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page"], ["routerLink", "/orders", 1, "back", "muted"], [1, "card", "card-pad", "confirmation"], [1, "row-between"], [1, "page-title"], [1, "page-sub"], [1, "badge"], [1, "detail-grid"], [1, "card", "table-wrap"], [1, "table"], [1, "right"], ["colspan", "3", 1, "right", "total-label"], [1, "right", "total-value"], [1, "card", "card-pad", "ship"], [1, "ship-name"], [1, "muted"], [1, "muted", "small"], [3, "routerLink"], [1, "card", "card-pad"], ["routerLink", "/orders", 1, "btn", "btn-sm", "btn-primary"]], template: function OrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275text(2, "\u2190 Back to orders");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, OrderDetailComponent_Conditional_3_Template, 44, 18)(4, OrderDetailComponent_Conditional_4_Template, 5, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional(3, (tmp_0_0 = ctx.order()) ? 3 : 4, tmp_0_0);
    }
  }, dependencies: [CommonModule, TitleCasePipe, DatePipe, RouterLink, MoneyPipe], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--sp-4);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.confirmation[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: var(--sp-5);\n  align-items: start;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.total-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--fs-md);\n}\n.ship[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-3);\n}\n.ship-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0 0 2px;\n}\n.ship[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid var(--color-border);\n  margin: var(--sp-4) 0;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=order-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src/app/features/orders/order-detail.component.ts", lineNumber: 17 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=order-detail.component-HW3O4KMM.js.map
