import {
  AuthService
} from "./chunk-HEI6KB7T.js";
import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  DecimalPipe,
  RouterLink,
  computed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtextInterpolate1
} from "./chunk-A62IECG2.js";

// src/app/features/portal/portal-orders/portal-orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/portal/orders", a0];
function PortalOrdersComponent_Conditional_23_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 11)(1, "td", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, o_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.poNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 11, o_r1.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r1.rdd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.ssd);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusBadge(o_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.deliveryBadge(o_r1).cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deliveryBadge(o_r1).label);
  }
}
function PortalOrdersComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "RDD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "SSD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Delivery");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, PortalOrdersComponent_Conditional_23_For_18_Template, 16, 16, "tr", 11, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
function PortalOrdersComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "No orders on file for your account.");
    \u0275\u0275elementEnd();
  }
}
var PortalOrdersComponent = class _PortalOrdersComponent {
  constructor(seed, auth) {
    this.seed = seed;
    this.auth = auth;
    this.orders = computed(() => this.seed.orders().filter((o) => o.accountName.includes("QES")));
    this.totalOpen = computed(() => this.orders().filter((o) => o.status !== "delivered").length);
    this.onTime = computed(() => this.orders().filter((o) => !o.slippage).length);
    this.delayed = computed(() => this.orders().filter((o) => o.slippage).length);
  }
  statusBadge(status) {
    switch (status) {
      case "confirmed":
        return "badge-info";
      case "in-production":
        return "badge-warning";
      case "shipped":
        return "badge-success";
      case "delivered":
        return "badge-neutral";
      default:
        return "badge-neutral";
    }
  }
  deliveryBadge(o) {
    return o.slippage ? { cls: "badge-warning", label: `Delayed ${o.slippageDays}d` } : { cls: "badge-success", label: "On time" };
  }
  static {
    this.\u0275fac = function PortalOrdersComponent_Factory(t) {
      return new (t || _PortalOrdersComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalOrdersComponent, selectors: [["app-portal-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 4, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad"], [1, "muted", "stat-label"], [1, "stat-value"], [1, "card", "card-pad", "orders-card"], [1, "table-wrap"], [1, "table"], [1, "clickable", 3, "routerLink"], [1, "mono"], [1, "badge"], [1, "muted"]], template: function PortalOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Your Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Read-only order status for QES. Comparing your requested date (RDD) against the scheduled ship date (SSD).");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Total open");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6);
        \u0275\u0275text(14, "On time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 5)(18, "div", 6);
        \u0275\u0275text(19, "Delayed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 7);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 8);
        \u0275\u0275template(23, PortalOrdersComponent_Conditional_23_Template, 19, 0, "div", 9)(24, PortalOrdersComponent_Conditional_24_Template, 2, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.totalOpen());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.onTime());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.delayed());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(23, ctx.orders().length ? 23 : 24);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], styles: ["\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 700;\n  margin-top: 6px;\n}\n.orders-card[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=portal-orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalOrdersComponent, { className: "PortalOrdersComponent", filePath: "src/app/features/portal/portal-orders/portal-orders.component.ts", lineNumber: 15 });
})();
export {
  PortalOrdersComponent
};
//# sourceMappingURL=portal-orders.component-A2ZKLJDG.js.map
