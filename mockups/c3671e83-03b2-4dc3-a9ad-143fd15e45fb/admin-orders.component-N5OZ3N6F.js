import {
  RouterLink
} from "./chunk-5PRKSMZW.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  __spreadProps,
  __spreadValues,
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
} from "./chunk-LLQROSRE.js";

// src/app/features/admin/admin-orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
function AdminOrdersComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function AdminOrdersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2, "No orders yet.");
    \u0275\u0275elementEnd()();
  }
}
function AdminOrdersComponent_Conditional_5_For_17_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_5_For_17_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const o_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.advance(o_r2));
    });
    \u0275\u0275text(1, "Mark shipped");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_5_For_17_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_5_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 7);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 8);
    \u0275\u0275template(16, AdminOrdersComponent_Conditional_5_For_17_Conditional_16_Template, 2, 0, "button", 9)(17, AdminOrdersComponent_Conditional_5_For_17_Conditional_17_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, o_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", o_r2.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.shipName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 11, o_r2.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, o_r2.totalCents / 100));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-placed", o_r2.status === "placed")("badge-shipped", o_r2.status === "shipped");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(16, o_r2.status === "placed" ? 16 : 17);
  }
}
function AdminOrdersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "table", 5)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, AdminOrdersComponent_Conditional_5_For_17_Template, 18, 18, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.orders());
  }
}
var AdminOrdersComponent = class _AdminOrdersComponent {
  constructor() {
    this.loading = signal(false);
    this.orders = signal([
      { id: "o-1001", userId: "u-shopper", status: "placed", shipName: "Jane Rivera", shipAddress: "482 Industrial Pkwy, SLC, UT", totalCents: 4597, createdAt: "2026-07-10T15:24:00Z", items: [{ id: "oi-1", productId: "p-1", qty: 2, unitPriceCents: 1899 }, { id: "oi-2", productId: "p-3", qty: 1, unitPriceCents: 749 }] },
      { id: "o-1000", userId: "u-shopper", status: "shipped", shipName: "Jane Rivera", shipAddress: "482 Industrial Pkwy, SLC, UT", totalCents: 42900, createdAt: "2026-07-02T09:10:00Z", items: [{ id: "oi-3", productId: "p-4", qty: 1, unitPriceCents: 42900 }] },
      { id: "o-0999", userId: "u-mike", status: "placed", shipName: "Mike Chen", shipAddress: "17 Foundry Rd, Reno, NV", totalCents: 5600, createdAt: "2026-06-28T11:02:00Z", items: [{ id: "oi-4", productId: "p-5", qty: 1, unitPriceCents: 5600 }] }
    ]);
  }
  advance(order) {
    if (order.status !== "placed")
      return;
    this.orders.update((list) => list.map((o) => o.id === order.id ? __spreadProps(__spreadValues({}, o), { status: "shipped" }) : o));
  }
  static {
    this.\u0275fac = function AdminOrdersComponent_Factory(t) {
      return new (t || _AdminOrdersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOrdersComponent, selectors: [["app-admin-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "page"], [1, "page-title"], [1, "spinner"], [1, "empty-state"], [1, "card", "table-wrap"], [1, "table"], [1, "order-link", 3, "routerLink"], [1, "badge"], [1, "cell-actions"], ["data-testid", "advance-order", 1, "btn", "btn-sm", "btn-primary"], ["data-testid", "advance-order", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "muted"]], template: function AdminOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "All Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, AdminOrdersComponent_Conditional_3_Template, 1, 0, "div", 2)(4, AdminOrdersComponent_Conditional_4_Template, 3, 0)(5, AdminOrdersComponent_Conditional_5_Template, 18, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.orders().length === 0 ? 4 : 5);
      }
    }, dependencies: [CommonModule, CurrencyPipe, DatePipe, RouterLink], styles: ["\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 640px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: var(--sp-3);\n  border-bottom: 1px solid var(--color-border);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--color-muted);\n}\n.order-link[_ngcontent-%COMP%] {\n  color: var(--color-info);\n  font-weight: 700;\n}\n.cell-actions[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=admin-orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOrdersComponent, { className: "AdminOrdersComponent", filePath: "src/app/features/admin/admin-orders.component.ts", lineNumber: 13 });
})();
export {
  AdminOrdersComponent
};
//# sourceMappingURL=admin-orders.component-N5OZ3N6F.js.map
