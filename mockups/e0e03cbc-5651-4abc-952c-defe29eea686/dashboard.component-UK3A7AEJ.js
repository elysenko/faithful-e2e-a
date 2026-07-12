import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  RouterLink
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5S2USPPB.js";

// src/app/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label + $item.unit;
function DashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard\u2026");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function DashboardComponent_Conditional_8_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Attention");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_8_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u{1F5D2}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2);
    \u0275\u0275text(4, "No recent activity.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_8_Conditional_54_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25)(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "span", 28);
    \u0275\u0275elementStart(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cents");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.unit);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("credit", item_r2.kind === "payment");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, item_r2.amountCents));
  }
}
function DashboardComponent_Conditional_8_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 22);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_8_Conditional_54_For_2_Template, 12, 8, "li", 23, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.activity());
  }
}
function DashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7, "Active Leases");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 10);
    \u0275\u0275text(10, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275text(15, "Total Outstanding");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 9)(17, "div", 10);
    \u0275\u0275text(18, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275text(20);
    \u0275\u0275template(21, DashboardComponent_Conditional_8_Conditional_21_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12);
    \u0275\u0275text(23, "Delinquent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 9)(25, "div", 10);
    \u0275\u0275text(26, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 11);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 12);
    \u0275\u0275text(30, "Units");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 9)(32, "div", 10);
    \u0275\u0275text(33, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 11);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 12);
    \u0275\u0275text(37, "Tenants");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 15)(39, "h2", 16);
    \u0275\u0275text(40, "Quick actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 17)(42, "a", 18);
    \u0275\u0275text(43, "Post Charges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "a", 19);
    \u0275\u0275text(45, "View Delinquency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a", 20);
    \u0275\u0275text(47, "Add Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "a", 21);
    \u0275\u0275text(49, "Add Tenant");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 15)(51, "h2", 16);
    \u0275\u0275text(52, "Recent activity");
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, DashboardComponent_Conditional_8_Conditional_53_Template, 5, 0, "div", 5)(54, DashboardComponent_Conditional_8_Conditional_54_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.stats().activeLeases);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 7, ctx_r0.stats().totalOutstandingCents));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().delinquentCount, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(21, ctx_r0.stats().delinquentCount > 0 ? 21 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().unitsCount);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().tenantsCount);
    \u0275\u0275advance(18);
    \u0275\u0275conditional(53, ctx_r0.activity().length === 0 ? 53 : 54);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal("");
    this.stats = signal({
      activeLeases: 3,
      totalOutstandingCents: 36e4,
      delinquentCount: 1,
      unitsCount: 4,
      tenantsCount: 3
    });
    this.activity = signal([
      { icon: "\u{1F4B5}", label: "Payment received", unit: "Unit 101", amountCents: 12e4, kind: "payment" },
      { icon: "\u23F0", label: "Late fee posted", unit: "Unit 201", amountCents: 5e3, kind: "lateFee" },
      { icon: "\u{1F9FE}", label: "Rent charged", unit: "Unit 102", amountCents: 18e4, kind: "charge" }
    ]);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "page", "stack"], [1, "page-head"], [1, "muted"], ["role", "status", "aria-live", "polite", 1, "state"], [1, "spinner"], [1, "state"], [1, "state-icon"], [1, "error"], [1, "kpi-grid"], [1, "card", "kpi"], [1, "kpi-icon"], [1, "kpi-num"], [1, "kpi-label"], [1, "card", "kpi", "kpi-emphasis"], [1, "badge", "badge-danger"], [1, "card", "card-pad"], [1, "section-title"], [1, "actions"], ["routerLink", "/post-charges", 1, "btn", "btn-primary"], ["routerLink", "/delinquency", 1, "btn", "btn-outline"], ["routerLink", "/units/new", 1, "btn", "btn-outline"], ["routerLink", "/tenants/new", 1, "btn", "btn-outline"], [1, "activity-list"], [1, "activity-item"], ["aria-hidden", "true", 1, "activity-icon"], [1, "activity-text"], [1, "activity-label"], [1, "activity-unit", "muted"], [1, "spacer"], [1, "activity-amount"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h1");
        \u0275\u0275text(3, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Portfolio overview");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, DashboardComponent_Conditional_6_Template, 4, 0, "div", 3)(7, DashboardComponent_Conditional_7_Template, 5, 1)(8, DashboardComponent_Conditional_8_Template, 55, 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.error() ? 7 : 8);
      }
    }, dependencies: [CommonModule, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  margin-top: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  font-weight: 700;\n  color: var(--color-muted);\n  margin-bottom: var(--space-4);\n}\n.card-pad[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: var(--space-4);\n}\n.kpi[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  line-height: 1;\n}\n.kpi-num[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n  color: var(--color-ink);\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  font-weight: 700;\n  color: var(--color-muted);\n}\n.kpi-emphasis[_ngcontent-%COMP%] {\n  border-color: var(--color-brand);\n  background: var(--color-surface);\n}\n.kpi-emphasis[_ngcontent-%COMP%]   .kpi-num[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n}\n.activity-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.activity-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.activity-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  line-height: 1;\n}\n.activity-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.activity-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-ink);\n}\n.activity-unit[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.activity-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n  white-space: nowrap;\n}\n.activity-amount.credit[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 22 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-UK3A7AEJ.js.map
