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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/portal/portal-dashboard/portal-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ modal: "new" });
var _c1 = (a0) => ["/portal/orders", a0];
function PortalDashboardComponent_Conditional_41_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 21)(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, o_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.poNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 8, o_r1.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r1.ssd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.rdd);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.deliveryBadge(o_r1).cls);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deliveryBadge(o_r1).label);
  }
}
function PortalDashboardComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "table", 20)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "PO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "SSD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "RDD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Delivery");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, PortalDashboardComponent_Conditional_41_For_16_Template, 13, 13, "tr", 21, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.recentOrders());
  }
}
function PortalDashboardComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, "No orders on file.");
    \u0275\u0275elementEnd();
  }
}
function PortalDashboardComponent_Conditional_49_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 25)(1, "div")(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r3.kind, " \xB7 ", r_r3.createdAt, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.requestBadge(r_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.status);
  }
}
function PortalDashboardComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 18);
    \u0275\u0275repeaterCreate(1, PortalDashboardComponent_Conditional_49_For_2_Template, 8, 6, "li", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.recentRequests());
  }
}
function PortalDashboardComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, "No open requests.");
    \u0275\u0275elementEnd();
  }
}
function PortalDashboardComponent_Conditional_57_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
function PortalDashboardComponent_Conditional_57_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 25)(1, "div")(2, "div", 26);
    \u0275\u0275template(3, PortalDashboardComponent_Conditional_57_For_2_Conditional_3_Template, 1, 0, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, !n_r4.read ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.body);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.date);
  }
}
function PortalDashboardComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 18);
    \u0275\u0275repeaterCreate(1, PortalDashboardComponent_Conditional_57_For_2_Template, 9, 4, "li", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.recentNotifications());
  }
}
function PortalDashboardComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, "No notifications.");
    \u0275\u0275elementEnd();
  }
}
var PortalDashboardComponent = class _PortalDashboardComponent {
  constructor(seed, auth) {
    this.seed = seed;
    this.auth = auth;
    this.orders = computed(() => this.seed.orders().filter((o) => o.accountName.includes("QES")));
    this.requests = computed(() => this.seed.portalRequests());
    this.notifications = computed(() => this.seed.portalNotifications());
    this.openOrders = computed(() => this.orders().filter((o) => o.status !== "delivered"));
    this.onTrack = computed(() => this.orders().filter((o) => !o.slippage));
    this.delayed = computed(() => this.orders().filter((o) => o.slippage));
    this.openRequests = computed(() => this.requests().filter((r) => r.status !== "accepted"));
    this.unread = computed(() => this.notifications().filter((n) => !n.read));
    this.recentOrders = computed(() => this.orders().slice(0, 3));
    this.recentRequests = computed(() => this.requests().slice(0, 4));
    this.recentNotifications = computed(() => this.notifications().slice(0, 4));
  }
  deliveryBadge(o) {
    return o.slippage ? { cls: "badge-warning", label: `Delayed ${o.slippageDays}d` } : { cls: "badge-success", label: "On time" };
  }
  requestBadge(status) {
    switch (status) {
      case "submitted":
        return "badge-info";
      case "in-review":
        return "badge-warning";
      case "quoted":
        return "badge-success";
      case "accepted":
        return "badge-success";
      default:
        return "badge-neutral";
    }
  }
  static {
    this.\u0275fac = function PortalDashboardComponent_Factory(t) {
      return new (t || _PortalDashboardComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalDashboardComponent, selectors: [["app-portal-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 59, vars: 12, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad"], [1, "muted", "stat-label"], [1, "stat-value"], [1, "stat-suffix"], [1, "row", "quick-actions"], ["routerLink", "/portal/pricing-requests", 1, "btn", "btn-primary", 3, "queryParams"], ["routerLink", "/portal/project-requests", 1, "btn", 3, "queryParams"], [1, "grid", "panels"], [1, "panel-head"], [1, "panel-title"], ["routerLink", "/portal/orders", 1, "btn", "btn-ghost", "btn-sm"], [1, "table-wrap"], ["routerLink", "/portal/pricing-requests", 1, "btn", "btn-ghost", "btn-sm"], [1, "list"], ["routerLink", "/portal/notifications", 1, "btn", "btn-ghost", "btn-sm"], [1, "table"], [1, "clickable", 3, "routerLink"], [1, "mono"], [1, "badge"], [1, "muted"], [1, "list-item"], [1, "list-title"], [1, "muted", "list-sub"], ["aria-label", "unread", 1, "dot"], [1, "muted", "list-date"]], template: function PortalDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Welcome, QES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Your orders, requests, and updates with Nexus Power \u2014 read-only account view.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Open orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6);
        \u0275\u0275text(14, "On track");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementStart(17, "span", 8);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 5)(20, "div", 6);
        \u0275\u0275text(21, "Open requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 7);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 5)(25, "div", 6);
        \u0275\u0275text(26, "Unread notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 7);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 9)(30, "a", 10);
        \u0275\u0275text(31, "Request pricing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "a", 11);
        \u0275\u0275text(33, "Request a project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 12)(35, "div", 5)(36, "div", 13)(37, "h2", 14);
        \u0275\u0275text(38, "Your recent orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "a", 15);
        \u0275\u0275text(40, "View all");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, PortalDashboardComponent_Conditional_41_Template, 17, 0, "div", 16)(42, PortalDashboardComponent_Conditional_42_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 5)(44, "div", 13)(45, "h2", 14);
        \u0275\u0275text(46, "Your requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "a", 17);
        \u0275\u0275text(48, "View all");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(49, PortalDashboardComponent_Conditional_49_Template, 3, 0, "ul", 18)(50, PortalDashboardComponent_Conditional_50_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 5)(52, "div", 13)(53, "h2", 14);
        \u0275\u0275text(54, "Latest notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "a", 19);
        \u0275\u0275text(56, "View all");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(57, PortalDashboardComponent_Conditional_57_Template, 3, 0, "ul", 18)(58, PortalDashboardComponent_Conditional_58_Template, 2, 0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.openOrders().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.onTrack().length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("/ ", ctx.delayed().length, " delayed");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.openRequests().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.unread().length);
        \u0275\u0275advance(2);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(10, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(11, _c0));
        \u0275\u0275advance(9);
        \u0275\u0275conditional(41, ctx.recentOrders().length ? 41 : 42);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(49, ctx.recentRequests().length ? 49 : 50);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(57, ctx.recentNotifications().length ? 57 : 58);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], styles: ["\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 700;\n  margin-top: 6px;\n}\n.stat-suffix[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n.quick-actions[_ngcontent-%COMP%] {\n  margin: var(--sp-5) 0;\n}\n.panels[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--sp-4);\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  padding: 12px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.list-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.list-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  margin-top: 2px;\n}\n.list-date[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  white-space: nowrap;\n}\n.dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--color-accent-600);\n  margin-right: 4px;\n}\n/*# sourceMappingURL=portal-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalDashboardComponent, { className: "PortalDashboardComponent", filePath: "src/app/features/portal/portal-dashboard/portal-dashboard.component.ts", lineNumber: 15 });
})();
export {
  PortalDashboardComponent
};
//# sourceMappingURL=portal-dashboard.component-VQ6ISZQ5.js.map
