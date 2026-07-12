import {
  AvatarComponent
} from "./chunk-2YFTR47U.js";
import {
  CommonModule,
  Router,
  RouterLink,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4ZKGBDGO.js";

// src/app/features/admin/admin-reports.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminReportsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p");
    \u0275\u0275text(2, "Nothing here. The queue is clear. \u{1F389}");
    \u0275\u0275elementEnd()();
  }
}
function AdminReportsComponent_Conditional_18_For_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function AdminReportsComponent_Conditional_18_For_2_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resolve(r_r2));
    });
    \u0275\u0275text(1, "Mark reviewed");
    \u0275\u0275elementEnd();
  }
}
function AdminReportsComponent_Conditional_18_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Resolved");
    \u0275\u0275elementEnd();
  }
}
function AdminReportsComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17)(11, "button", 18);
    \u0275\u0275listener("click", function AdminReportsComponent_Conditional_18_For_2_Template_button_click_11_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewProfile(r_r2.targetId));
    });
    \u0275\u0275element(12, "app-avatar", 19);
    \u0275\u0275elementStart(13, "span")(14, "small", 14);
    \u0275\u0275text(15, "Reported");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 20);
    \u0275\u0275element(19, "app-avatar", 19);
    \u0275\u0275elementStart(20, "span")(21, "small", 14);
    \u0275\u0275text(22, "By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 21)(26, "button", 22);
    \u0275\u0275listener("click", function AdminReportsComponent_Conditional_18_For_2_Template_button_click_26_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewProfile(r_r2.targetId));
    });
    \u0275\u0275text(27, "View profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AdminReportsComponent_Conditional_18_For_2_Conditional_28_Template, 2, 0, "button", 23)(29, AdminReportsComponent_Conditional_18_For_2_Conditional_29_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill-warning", r_r2.status === "pending")("pill-success", r_r2.status === "reviewed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r2.status === "pending" ? "Pending" : "Reviewed", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u201C", r_r2.detail, "\u201D");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", r_r2.targetName)("size", 36);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r2.targetName);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", r_r2.reporterName)("size", 36);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r2.reporterName);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(28, r_r2.status === "pending" ? 28 : 29);
  }
}
function AdminReportsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 10);
    \u0275\u0275repeaterCreate(1, AdminReportsComponent_Conditional_18_For_2_Template, 30, 15, "li", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.visible());
  }
}
var AdminReportsComponent = class _AdminReportsComponent {
  constructor() {
    this.router = inject(Router);
    this.reports = signal([
      { id: "r1", reporterName: "Aisha Khan", targetName: "Rick Vaughn", targetId: "u212", reason: "Harassment or abusive messages", detail: "Kept sending unsolicited messages after I asked him to stop.", status: "pending", createdAt: "10 min ago" },
      { id: "r2", reporterName: "Sofia Ramos", targetName: "Rick Vaughn", targetId: "u212", reason: "Off-platform / scam behaviour", detail: "Tried to move the conversation to WhatsApp to sell a course.", status: "pending", createdAt: "2 hours ago" },
      { id: "r3", reporterName: "Priya Nair", targetName: "Deleted Spammer", targetId: "u219", reason: "Spam or solicitation", detail: "Profile is clearly a bot posting promo links.", status: "reviewed", createdAt: "Yesterday" },
      { id: "r4", reporterName: "Daniel Osei", targetName: "Rick Vaughn", targetId: "u212", reason: "Fake or impersonated profile", detail: "Photos do not match the LinkedIn identity.", status: "pending", createdAt: "Yesterday" }
    ]);
    this.filter = signal("pending");
    this.visible = computed(() => {
      const f = this.filter();
      if (f === "all")
        return this.reports();
      return this.reports().filter((r) => r.status === f);
    });
    this.pendingCount = computed(() => this.reports().filter((r) => r.status === "pending").length);
  }
  setFilter(f) {
    this.filter.set(f);
  }
  resolve(report) {
    this.reports.update((list) => list.map((r) => r.id === report.id ? __spreadProps(__spreadValues({}, r), { status: "reviewed" }) : r));
  }
  viewProfile(targetId) {
    this.router.navigate(["/profile", targetId]);
  }
  static {
    this.\u0275fac = function AdminReportsComponent_Factory(t) {
      return new (t || _AdminReportsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminReportsComponent, selectors: [["app-admin-reports"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 9, consts: [[1, "page"], [1, "page-header"], ["routerLink", "/admin", 1, "crumb"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M15.75 19.5 8.25 12l7.5-7.5", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "page-title"], [1, "page-subtitle"], [1, "tabs"], [1, "tab-pill", 3, "click"], [1, "empty"], [1, "report-list"], [1, "report-card", "card"], [1, "report-head"], [1, "pill"], [1, "subtle"], [1, "report-reason"], [1, "report-detail", "muted"], [1, "report-parties"], [1, "party", 3, "click"], [3, "name", "size"], [1, "party"], [1, "report-actions"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "resolved-note"]], template: function AdminReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Moderation ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "h1", 5);
        \u0275\u0275text(7, "Reports queue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
        \u0275\u0275listener("click", function AdminReportsComponent_Template_button_click_11_listener() {
          return ctx.setFilter("pending");
        });
        \u0275\u0275text(12, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function AdminReportsComponent_Template_button_click_13_listener() {
          return ctx.setFilter("reviewed");
        });
        \u0275\u0275text(14, "Reviewed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 8);
        \u0275\u0275listener("click", function AdminReportsComponent_Template_button_click_15_listener() {
          return ctx.setFilter("all");
        });
        \u0275\u0275text(16, "All");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, AdminReportsComponent_Conditional_17_Template, 3, 0, "div", 9)(18, AdminReportsComponent_Conditional_18_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate2("", ctx.pendingCount(), " report", ctx.pendingCount() === 1 ? "" : "s", " awaiting review");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filter() === "pending");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filter() === "reviewed");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.filter() === "all");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(17, ctx.visible().length === 0 ? 17 : 18);
      }
    }, dependencies: [CommonModule, RouterLink, AvatarComponent], styles: ["\n\n.crumb[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: var(--text-sm);\n  font-weight: 600;\n  color: var(--color-text-muted);\n  margin-bottom: 8px;\n}\n.crumb[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: var(--space-4);\n}\n.tab-pill[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 16px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-surface);\n  color: var(--color-text-muted);\n  font-weight: 600;\n  font-size: var(--text-sm);\n}\n.tab-pill.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: #fff;\n}\n.report-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.report-card[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n}\n.report-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-3);\n}\n.report-head[_ngcontent-%COMP%]   .subtle[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.report-reason[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--text-base);\n}\n.report-detail[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: var(--text-sm);\n  font-style: italic;\n}\n.report-parties[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  margin: var(--space-4) 0;\n  flex-wrap: wrap;\n}\n.party[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: none;\n  border: none;\n  padding: 0;\n  text-align: left;\n}\n.party[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.party[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.party[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n}\n.report-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  align-items: center;\n}\n.resolved-note[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-success);\n  font-weight: 600;\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=admin-reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminReportsComponent, { className: "AdminReportsComponent", filePath: "src/app/features/admin/admin-reports.component.ts", lineNumber: 14 });
})();
export {
  AdminReportsComponent
};
//# sourceMappingURL=admin-reports.component-BPZXCCPH.js.map
