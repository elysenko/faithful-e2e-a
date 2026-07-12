import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YT626SJK.js";

// src/app/pages/admin-stats/admin-stats.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function AdminStatsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, "Loading stats\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminStatsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AdminStatsComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.label);
  }
}
function AdminStatsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, AdminStatsComponent_Conditional_6_For_2_Template, 7, 3, "div", 5, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4, " Admins see aggregate counts only \u2014 individual returns remain private to each filer. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.cards);
  }
}
var AdminStatsComponent = class _AdminStatsComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal("");
    this.stats = signal({
      userCount: 128,
      returnCount: 214,
      draftCount: 96,
      completeCount: 118
    });
  }
  get cards() {
    const s = this.stats();
    return [
      { label: "Users", value: s.userCount, icon: "\u{1F465}" },
      { label: "Returns", value: s.returnCount, icon: "\u{1F4C4}" },
      { label: "Drafts", value: s.draftCount, icon: "\u270F\uFE0F" },
      { label: "Completed", value: s.completeCount, icon: "\u2705" }
    ];
  }
  static {
    this.\u0275fac = function AdminStatsComponent_Factory(t) {
      return new (t || _AdminStatsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStatsComponent, selectors: [["app-admin-stats"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "page"], [1, "page-head"], [1, "state"], [1, "state", "state-error"], [1, "stat-grid"], [1, "stat-card", "card"], [1, "muted", "note"], ["aria-hidden", "true", 1, "stat-icon"], [1, "stat-value"], [1, "stat-label"]], template: function AdminStatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Admin overview");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, AdminStatsComponent_Conditional_4_Template, 2, 0, "div", 2)(5, AdminStatsComponent_Conditional_5_Template, 2, 1)(6, AdminStatsComponent_Conditional_6_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.loading() ? 4 : ctx.error() ? 5 : 6);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: var(--space-4);\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  padding: var(--space-5);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n  color: var(--color-ink);\n  font-variant-numeric: tabular-nums;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  font-weight: 600;\n}\n.note[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  font-size: var(--fs-sm);\n}\n/*# sourceMappingURL=admin-stats.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminStatsComponent, { className: "AdminStatsComponent", filePath: "src/app/pages/admin-stats/admin-stats.component.ts", lineNumber: 13 });
})();
export {
  AdminStatsComponent
};
//# sourceMappingURL=admin-stats.component-W3HRZLKK.js.map
