import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-Y5LH5DTG.js";
import {
  ToastService
} from "./chunk-BTWCFMW5.js";
import {
  CommonModule,
  computed,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UGB4PC52.js";

// src/app/features/admin/report-detail.component.ts
var _c0 = (a0) => ["/users", a0];
function ReportDetailComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275listener("click", function ReportDetailComponent_Conditional_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275text(2, "Dismiss");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function ReportDetailComponent_Conditional_31_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ban());
    });
    \u0275\u0275text(4, "Ban member");
    \u0275\u0275elementEnd()();
  }
}
function ReportDetailComponent_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r1.report().reportedName, " has been banned and logged out.");
  }
}
function ReportDetailComponent_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "\u2713 Report dismissed \u2014 no action taken.");
    \u0275\u0275elementEnd();
  }
}
function ReportDetailComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ReportDetailComponent_Conditional_32_Conditional_1_Template, 2, 1, "p")(2, ReportDetailComponent_Conditional_32_Conditional_2_Template, 2, 0);
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function ReportDetailComponent_Conditional_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(4, "Back to queue");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("resolved-ban", ctx_r1.resolution() === "ban");
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.resolution() === "ban" ? 1 : 2);
  }
}
var ReportDetailComponent = class _ReportDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.toast = inject(ToastService);
    this.reportId = this.route.snapshot.paramMap.get("reportId") ?? "r1";
    this.reports = signal([
      { id: "r1", reportedName: "Chris Blunt", reportedId: "u5", reporterName: "Maya Chen", reason: "Spam or solicitation", status: "pending", createdAt: "12 min ago", details: "Sent me a pitch deck and asked to invest right after matching. Would not stop after I said no." },
      { id: "r2", reportedName: "Sam Ghost", reportedId: "u7", reporterName: "Priya Raman", reason: "Fake or impersonated profile", status: "pending", createdAt: "2 hours ago", details: "Photos look AI-generated and the employer does not exist. Profile has no mutual connections." },
      { id: "r3", reportedName: "Dana Fields", reportedId: "u6", reporterName: "Alex Rivera", reason: "Off-platform scam", status: "pending", createdAt: "Yesterday", details: "Tried to move the conversation to a crypto app immediately after matching." },
      { id: "r4", reportedName: "Chris Blunt", reportedId: "u5", reporterName: "Daniel Okoye", reason: "Harassment or abuse", status: "reviewed", createdAt: "3 days ago", details: "Rude messages after being declined." }
    ]);
    this.resolution = signal(null);
    this.report = computed(() => this.reports().find((r) => r.id === this.reportId) ?? this.reports()[0]);
  }
  ban() {
    this.resolution.set("ban");
    this.toast.push("message", "User banned", `${this.report().reportedName} has been removed.`);
  }
  dismiss() {
    this.resolution.set("dismiss");
    this.toast.push("message", "Report dismissed", "No action taken.");
  }
  back() {
    this.router.navigate(["/admin/reports"]);
  }
  static {
    this.\u0275fac = function ReportDetailComponent_Factory(t) {
      return new (t || _ReportDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDetailComponent, selectors: [["app-report-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 14, consts: [[1, "page"], [1, "page-header"], ["routerLink", "/admin/reports", 1, "back-link"], [1, "card", "detail"], [1, "detail-head"], [1, "badge"], [1, "facts"], [3, "routerLink"], [1, "section-title"], [1, "note"], [1, "actions"], ["data-testid", "report-dismiss", 1, "btn", "btn-outline", 3, "click"], ["data-testid", "report-ban", 1, "btn", "btn-danger", 3, "click"], [1, "resolved"], [1, "btn", "btn-ghost", 3, "click"]], template: function ReportDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2039 Reports");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h1");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "dl", 6)(11, "div")(12, "dt");
        \u0275\u0275text(13, "Reported member");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "dd")(15, "a", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div")(18, "dt");
        \u0275\u0275text(19, "Reported by");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "dd");
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div")(23, "dt");
        \u0275\u0275text(24, "Submitted");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "dd");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "h2", 8);
        \u0275\u0275text(28, "Reporter's note");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "blockquote", 9);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, ReportDetailComponent_Conditional_31_Template, 5, 0, "div", 10)(32, ReportDetailComponent_Conditional_32_Template, 5, 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.report().reason);
        \u0275\u0275advance();
        \u0275\u0275classProp("badge-pending", ctx.report().status === "pending")("badge-reviewed", ctx.report().status === "reviewed");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.report().status, " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, ctx.report().reportedId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", ctx.report().reportedName, " \u2192");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.report().reporterName);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.report().createdAt);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.report().details);
        \u0275\u0275advance();
        \u0275\u0275conditional(31, ctx.resolution() === null ? 31 : 32);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.back-link[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: 600;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n}\n.detail[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.detail-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.detail-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\n.facts[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n  padding-bottom: var(--space-2);\n}\n.facts[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  margin: 0;\n}\n.facts[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  text-align: right;\n}\n.facts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.note[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: var(--space-3) var(--space-4);\n  background: var(--color-surface-alt);\n  border-left: 3px solid var(--color-accent);\n  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;\n  font-style: italic;\n  line-height: 1.5;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.resolved[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-4);\n  border-radius: var(--radius-md);\n  background: var(--color-surface-alt);\n  color: var(--color-text-muted);\n}\n.resolved-ban[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n}\n.resolved[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n}\n/*# sourceMappingURL=report-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDetailComponent, { className: "ReportDetailComponent", filePath: "src/app/features/admin/report-detail.component.ts", lineNumber: 14 });
})();
export {
  ReportDetailComponent
};
//# sourceMappingURL=report-detail.component-OSBMBMXB.js.map
