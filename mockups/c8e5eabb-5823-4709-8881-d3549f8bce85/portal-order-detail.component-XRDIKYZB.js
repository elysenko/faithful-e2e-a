import {
  AuthService
} from "./chunk-HEI6KB7T.js";
import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
  RouterLink,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
} from "./chunk-A62IECG2.js";

// src/app/features/portal/portal-order-detail/portal-order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function PortalOrderDetailComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span");
    \u0275\u0275text(2, "Scheduled ship date is ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.order.slippageDays, " days");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" after your requested delivery date (", ctx_r0.order.rdd, "). Your SSD is ", ctx_r0.order.ssd, ".");
  }
}
function PortalOrderDetailComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("On track \u2014 scheduled ship date (", ctx_r0.order.ssd, ") meets your requested delivery date (", ctx_r0.order.rdd, ").");
  }
}
function PortalOrderDetailComponent_Conditional_1_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275element(1, "span", 19);
    \u0275\u0275elementStart(2, "div")(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275classProp("done", m_r2.done);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.detail);
  }
}
function PortalOrderDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 2);
    \u0275\u0275text(2, "\u2190 Back to orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4)(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, PortalOrderDetailComponent_Conditional_1_Conditional_8_Template, 6, 3, "div", 6)(9, PortalOrderDetailComponent_Conditional_1_Conditional_9_Template, 3, 2);
    \u0275\u0275elementStart(10, "div", 7)(11, "h2", 8);
    \u0275\u0275text(12, "Order summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9)(14, "div")(15, "div", 10);
    \u0275\u0275text(16, "PO Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "div", 10);
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12)(23, "span", 5);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div")(26, "div", 10);
    \u0275\u0275text(27, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 12);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "div", 10);
    \u0275\u0275text(33, "Requested delivery (RDD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 11);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div")(37, "div", 10);
    \u0275\u0275text(38, "Scheduled ship (SSD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 11);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "div", 10);
    \u0275\u0275text(43, "Lead time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 12);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 13)(47, "h2", 8);
    \u0275\u0275text(48, "Order timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ul", 14);
    \u0275\u0275repeaterCreate(50, PortalOrderDetailComponent_Conditional_1_For_51_Template, 7, 4, "li", 15, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "p", 16);
    \u0275\u0275text(53, "This is a read-only view of your order status.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.order.poNumber);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.statusBadge(ctx_r0.order.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.order.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, ctx_r0.order.slippage ? 8 : 9);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.order.poNumber);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r0.statusBadge(ctx_r0.order.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.order.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(30, 13, ctx_r0.order.amount, "1.0-0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.order.rdd);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order.ssd);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.order.leadTimeWeeks, " weeks");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.milestones(ctx_r0.order));
  }
}
function PortalOrderDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1", 3);
    \u0275\u0275text(2, "Order not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, "This order is not available on your account.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 22);
    \u0275\u0275text(6, "\u2190 Back to orders");
    \u0275\u0275elementEnd();
  }
}
var PortalOrderDetailComponent = class _PortalOrderDetailComponent {
  constructor(seed, auth) {
    this.seed = seed;
    this.auth = auth;
    this.route = inject(ActivatedRoute);
    const id = this.route.snapshot.paramMap.get("id");
    const found = id ? this.seed.orderById(id) : void 0;
    this.order = found && found.accountName.includes("QES") ? found : void 0;
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
  // Read-only illustrative milestone timeline derived from the order status.
  milestones(o) {
    const order = ["confirmed", "in-production", "shipped", "delivered"];
    const idx = order.indexOf(o.status);
    return [
      { label: "Order confirmed", detail: `PO ${o.poNumber} accepted`, done: idx >= 0 },
      { label: "In production", detail: `Lead time ~${o.leadTimeWeeks} weeks`, done: idx >= 1 },
      { label: "Shipped", detail: `Scheduled ship date ${o.ssd}`, done: idx >= 2 },
      { label: "Delivered", detail: `Requested delivery ${o.rdd}`, done: idx >= 3 }
    ];
  }
  static {
    this.\u0275fac = function PortalOrderDetailComponent_Factory(t) {
      return new (t || _PortalOrderDetailComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalOrderDetailComponent, selectors: [["app-portal-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "page"], [1, "page-header"], ["routerLink", "/portal/orders", 1, "btn", "btn-ghost", "btn-sm", "back"], [1, "page-title"], [1, "page-sub"], [1, "badge"], [1, "alert", "alert-warning", "banner"], [1, "card", "card-pad"], [1, "section-title"], [1, "grid", "detail-grid"], [1, "muted", "lbl"], [1, "mono", "val"], [1, "val"], [1, "card", "card-pad", "timeline-card"], [1, "timeline"], [1, "milestone", 3, "done"], [1, "muted", "note"], [1, "alert", "alert-info", "banner"], [1, "milestone"], [1, "marker"], [1, "ms-label"], [1, "muted", "ms-detail"], ["routerLink", "/portal/orders", 1, "btn", "btn-primary"]], template: function PortalOrderDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PortalOrderDetailComponent_Conditional_1_Template, 54, 16)(2, PortalOrderDetailComponent_Conditional_2_Template, 7, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.order ? 1 : 2);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], styles: ['\n\n.back[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-3);\n}\n.banner[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-5);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}\n.lbl[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.val[_ngcontent-%COMP%] {\n  font-size: var(--fs-base);\n  font-weight: 600;\n  margin-top: 4px;\n}\n.timeline-card[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n.timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.milestone[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-3);\n  padding: 0 0 var(--sp-5) var(--sp-2);\n  position: relative;\n}\n.milestone[_ngcontent-%COMP%]:not(:last-child)::before {\n  content: "";\n  position: absolute;\n  left: 9px;\n  top: 16px;\n  bottom: 0;\n  width: 2px;\n  background: var(--color-border);\n}\n.marker[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 14px;\n  height: 14px;\n  border-radius: 999px;\n  margin-top: 2px;\n  background: var(--color-surface);\n  border: 2px solid var(--color-border-strong);\n  z-index: 1;\n}\n.milestone.done[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  border-color: var(--color-success);\n}\n.ms-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.ms-detail[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  margin-top: 2px;\n}\n.note[_ngcontent-%COMP%] {\n  margin-top: var(--sp-4);\n  font-size: var(--fs-sm);\n  font-style: italic;\n}\n/*# sourceMappingURL=portal-order-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalOrderDetailComponent, { className: "PortalOrderDetailComponent", filePath: "src/app/features/portal/portal-order-detail/portal-order-detail.component.ts", lineNumber: 21 });
})();
export {
  PortalOrderDetailComponent
};
//# sourceMappingURL=portal-order-detail.component-XRDIKYZB.js.map
