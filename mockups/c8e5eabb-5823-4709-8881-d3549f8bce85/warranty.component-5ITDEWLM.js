import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  computed,
  signal,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4
} from "./chunk-A62IECG2.js";

// src/app/features/warranty/warranty.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.family;
function WarrantyComponent_Conditional_22_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4("", c_r1.claimNumber, " \u2014 ", c_r1.accountName, " \xB7 ", c_r1.product, " (", c_r1.ageDays, " days)");
  }
}
function WarrantyComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 21);
    \u0275\u0275repeaterCreate(5, WarrantyComponent_Conditional_22_For_6_Template, 2, 4, "li", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.breachedClaims().length, " claim(s) past SLA:");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.breachedClaims());
  }
}
function WarrantyComponent_For_28_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function WarrantyComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, WarrantyComponent_For_28_Conditional_5_Template, 2, 0, "span", 25);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const \u0275$index_58_r5 = ctx.$index;
    const \u0275$count_58_r6 = ctx.$count;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.stepLabel(s_r3));
    \u0275\u0275advance();
    \u0275\u0275conditional(5, !(\u0275$index_58_r5 === \u0275$count_58_r6 - 1) ? 5 : -1);
  }
}
function WarrantyComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function WarrantyComponent_For_31_Template_button_click_0_listener() {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatus(s_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("chip-active", ctx_r1.statusFilter() === s_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r8 === "all" ? "All" : ctx_r1.stepLabel(s_r8));
  }
}
function WarrantyComponent_For_55_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "SLA breached");
    \u0275\u0275elementEnd();
  }
}
function WarrantyComponent_For_55_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Within SLA");
    \u0275\u0275elementEnd();
  }
}
function WarrantyComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, WarrantyComponent_For_55_Conditional_17_Template, 2, 0, "span", 29)(18, WarrantyComponent_For_55_Conditional_18_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.claimNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.product);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusBadge(c_r9.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stepLabel(c_r9.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.mfrClaimNumber || "\u2014 pending");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.openedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r9.ageDays, "d");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(17, c_r9.slaBreached ? 17 : 18);
  }
}
function WarrantyComponent_ForEmpty_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2, "No claims in this status.");
    \u0275\u0275elementEnd()();
  }
}
function WarrantyComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275element(4, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r10.family);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r10.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r10.claims);
  }
}
var WarrantyComponent = class _WarrantyComponent {
  setStatus(status) {
    this.statusFilter.set(status);
  }
  statusBadge(status) {
    switch (status) {
      case "open":
        return "badge-warning";
      case "submitted":
        return "badge-info";
      case "mfr-review":
        return "badge-info";
      case "approved":
        return "badge-success";
      case "closed":
        return "badge-neutral";
      default:
        return "badge-neutral";
    }
  }
  stepLabel(status) {
    return status === "mfr-review" ? "MFR review" : status.charAt(0).toUpperCase() + status.slice(1);
  }
  constructor(seed) {
    this.seed = seed;
    this.workflow = ["open", "submitted", "mfr-review", "approved", "closed"];
    this.statuses = ["all", "open", "submitted", "mfr-review", "approved", "closed"];
    this.statusFilter = signal("all");
    this.openClaims = computed(() => this.seed.warrantyClaims().filter((c) => c.status !== "closed").length);
    this.breachedClaims = computed(() => this.seed.warrantyClaims().filter((c) => c.slaBreached));
    this.breachedCount = computed(() => this.breachedClaims().length);
    this.avgAge = computed(() => {
      const claims = this.seed.warrantyClaims();
      if (claims.length === 0)
        return 0;
      return Math.round(claims.reduce((s, c) => s + c.ageDays, 0) / claims.length);
    });
    this.filteredClaims = computed(() => {
      const f = this.statusFilter();
      if (f === "all")
        return this.seed.warrantyClaims();
      return this.seed.warrantyClaims().filter((c) => c.status === f);
    });
    this.lineBars = computed(() => {
      const rows = [
        { family: "Tmax XT", claims: 5, pct: 0 },
        { family: "SafeGear MV", claims: 3, pct: 0 },
        { family: "VD4 / ADVAC", claims: 2, pct: 0 }
      ];
      const max = Math.max(1, ...rows.map((r) => r.claims));
      rows.forEach((r) => r.pct = Math.round(r.claims / max * 100));
      return rows;
    });
  }
  static {
    this.\u0275fac = function WarrantyComponent_Factory(t) {
      return new (t || _WarrantyComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WarrantyComponent, selectors: [["app-warranty"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 7, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "alert", "alert-danger", "sla-alert"], [1, "workflow-section"], [1, "panel-title"], [1, "stepper"], [1, "card", "card-pad", "chips-bar"], [1, "btn", "btn-sm", "chip", 3, "chip-active"], [1, "card"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "chart-section"], [1, "card", "card-pad"], [1, "bar-row"], [1, "sla-list"], [1, "step"], [1, "step-dot"], [1, "step-label"], [1, "step-arrow"], [1, "btn", "btn-sm", "chip", 3, "click"], [1, "mono"], [1, "badge"], [1, "badge", "badge-danger"], [1, "badge", "badge-success"], ["colspan", "8", 1, "muted"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-val", "mono"]], template: function WarrantyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Warranty & RMA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "RMA workflow with manufacturer claim tracking and SLA monitoring.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Open claims");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6);
        \u0275\u0275text(14, "SLA breached");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 5)(18, "div", 6);
        \u0275\u0275text(19, "Avg age (days)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 7);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(22, WarrantyComponent_Conditional_22_Template, 7, 1, "div", 8);
        \u0275\u0275elementStart(23, "div", 9)(24, "h2", 10);
        \u0275\u0275text(25, "Claim workflow");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 11);
        \u0275\u0275repeaterCreate(27, WarrantyComponent_For_28_Template, 6, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 12);
        \u0275\u0275repeaterCreate(30, WarrantyComponent_For_31_Template, 2, 3, "button", 13, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 14)(33, "div", 15)(34, "table", 16)(35, "thead")(36, "tr")(37, "th");
        \u0275\u0275text(38, "Claim");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "MFR claim #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Opened");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th", 17);
        \u0275\u0275text(50, "Age");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "SLA");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "tbody");
        \u0275\u0275repeaterCreate(54, WarrantyComponent_For_55_Template, 19, 10, "tr", null, _forTrack0, false, WarrantyComponent_ForEmpty_56_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "div", 18)(58, "h2", 10);
        \u0275\u0275text(59, "Claim rate by line");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 19);
        \u0275\u0275repeaterCreate(61, WarrantyComponent_For_62_Template, 7, 4, "div", 20, _forTrack1);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.openClaims());
        \u0275\u0275advance(4);
        \u0275\u0275classProp("stat-alert", ctx.breachedCount() > 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.breachedCount());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.avgAge());
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.breachedClaims().length > 0 ? 22 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.workflow);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(24);
        \u0275\u0275repeater(ctx.filteredClaims());
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.lineBars());
      }
    }, dependencies: [CommonModule], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.stat-value.stat-alert[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.sla-alert[_ngcontent-%COMP%] {\n  margin: var(--sp-4) 0;\n}\n.sla-list[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  padding-left: var(--sp-4);\n}\n.sla-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.workflow-section[_ngcontent-%COMP%] {\n  margin: var(--sp-5) 0;\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  flex-wrap: wrap;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  padding: 10px 16px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  background: var(--color-surface-2);\n}\n.step-dot[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 999px;\n  background: var(--color-brand-600);\n  color: #fff;\n  font-weight: 700;\n  font-size: var(--fs-xs);\n}\n.step-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.step-arrow[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n  font-size: var(--fs-lg);\n}\n.chips-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n  margin: var(--sp-4) 0;\n}\n.chip[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.chip-active[_ngcontent-%COMP%] {\n  background: var(--color-brand-600);\n  color: #fff;\n  border-color: var(--color-brand-600);\n}\n.chart-section[_ngcontent-%COMP%] {\n  margin-top: var(--sp-6);\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 180px 1fr auto;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-3);\n}\n.bar-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.bar-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 14px;\n  background: var(--color-surface-2);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--color-accent-600);\n}\n@media (max-width: 640px) {\n  .bar-row[_ngcontent-%COMP%] {\n    grid-template-columns: 120px 1fr;\n  }\n  .bar-val[_ngcontent-%COMP%] {\n    grid-column: 2;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=warranty.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WarrantyComponent, { className: "WarrantyComponent", filePath: "src/app/features/warranty/warranty.component.ts", lineNumber: 20 });
})();
export {
  WarrantyComponent
};
//# sourceMappingURL=warranty.component-5ITDEWLM.js.map
