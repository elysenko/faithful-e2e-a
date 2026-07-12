import {
  RouterLink
} from "./chunk-Y5LH5DTG.js";
import {
  CommonModule,
  computed,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UGB4PC52.js";

// src/app/features/admin/reports.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/admin/reports", a0];
function ReportsComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 7)(2, "div", 8)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, r_r1.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r1.reportedName);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-pending", r_r1.status === "pending")("badge-reviewed", r_r1.status === "reviewed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Reported by ", r_r1.reporterName, " \xB7 ", r_r1.createdAt, "");
  }
}
function ReportsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275repeaterCreate(1, ReportsComponent_Conditional_11_For_2_Template, 11, 12, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visible());
  }
}
function ReportsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 14);
    \u0275\u0275element(3, "circle", 15)(4, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Queue clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 17);
    \u0275\u0275text(8, "No pending reports right now. Nice work.");
    \u0275\u0275elementEnd()();
  }
}
var ReportsComponent = class _ReportsComponent {
  constructor() {
    this.reports = signal([
      { id: "r1", reportedName: "Chris Blunt", reportedId: "u5", reporterName: "Maya Chen", reason: "Spam or solicitation", status: "pending", createdAt: "12 min ago", details: "Sent me a pitch deck and asked to invest right after matching." },
      { id: "r2", reportedName: "Sam Ghost", reportedId: "u7", reporterName: "Priya Raman", reason: "Fake or impersonated profile", status: "pending", createdAt: "2 hours ago", details: "Photos look AI-generated and the employer does not exist." },
      { id: "r3", reportedName: "Dana Fields", reportedId: "u6", reporterName: "Alex Rivera", reason: "Off-platform scam", status: "pending", createdAt: "Yesterday", details: "Tried to move the conversation to a crypto app immediately." },
      { id: "r4", reportedName: "Chris Blunt", reportedId: "u5", reporterName: "Daniel Okoye", reason: "Harassment or abuse", status: "reviewed", createdAt: "3 days ago", details: "Rude messages after being declined." }
    ]);
    this.filter = signal("pending");
    this.pendingCount = computed(() => this.reports().filter((r) => r.status === "pending").length);
    this.visible = computed(() => this.filter() === "pending" ? this.reports().filter((r) => r.status === "pending") : this.reports());
  }
  setFilter(f) {
    this.filter.set(f);
  }
  static {
    this.\u0275fac = function ReportsComponent_Factory(t) {
      return new (t || _ReportsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "badge", "badge-pending"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "report-list"], [1, "report", "card", 3, "routerLink"], [1, "report-top"], [1, "badge"], [1, "report-reason"], [1, "report-meta", "muted"], [1, "empty-state"], ["aria-hidden", "true", 1, "empty-emoji"], ["width", "52", "height", "52", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "9"], ["d", "m8 12 2.8 2.8L16 9.5"], [1, "muted"]], template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Reports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_7_listener() {
          return ctx.setFilter("pending");
        });
        \u0275\u0275text(8, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function ReportsComponent_Template_button_click_9_listener() {
          return ctx.setFilter("all");
        });
        \u0275\u0275text(10, "All");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, ReportsComponent_Conditional_11_Template, 3, 0, "ul", 6)(12, ReportsComponent_Conditional_12_Template, 9, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.pendingCount(), " pending");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filter() === "pending");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filter() === "all");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.visible().length ? 11 : 12);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  background: var(--color-surface-alt);\n  border-radius: var(--radius-pill);\n  padding: var(--space-1);\n  margin-bottom: var(--space-4);\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 40px;\n  border-radius: var(--radius-pill);\n  font-size: var(--text-sm);\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  color: var(--color-primary);\n  box-shadow: var(--shadow-sm);\n}\n.report-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.report[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--space-4);\n  transition: transform 0.06s ease;\n}\n.report[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n.report-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.report-reason[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: 600;\n  margin-top: var(--space-2);\n  color: var(--color-accent);\n}\n.report-meta[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  margin-top: var(--space-1);\n}\n.empty-emoji[_ngcontent-%COMP%] {\n  font-size: 52px;\n  margin-bottom: var(--space-3);\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/features/admin/reports.component.ts", lineNumber: 13 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=reports.component-NMSFTDI7.js.map
