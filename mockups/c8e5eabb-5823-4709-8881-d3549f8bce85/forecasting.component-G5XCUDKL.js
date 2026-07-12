import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  DecimalPipe,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-A62IECG2.js";

// src/app/features/forecasting/forecasting.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.family;
function ForecastingComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ForecastingComponent_For_51_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setScenario(s_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("chip-active", ctx_r2.scenarioFilter() === s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2 === "all" ? "All scenarios" : s_r2);
  }
}
function ForecastingComponent_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 20);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 21)(13, "div", 22);
    \u0275\u0275element(14, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td")(18, "span", 25);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r4.breakerFamily);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.window);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.units);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 10, f_r4.value, "1.0-0"), "");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", f_r4.confidence, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r4.confidence, "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.scenarioBadge(f_r4.scenario));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.scenario);
  }
}
function ForecastingComponent_ForEmpty_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2, "No forecast lines in this scenario.");
    \u0275\u0275elementEnd()();
  }
}
function ForecastingComponent_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275element(4, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.family);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r5.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 4, b_r5.value, "1.0-0"), "");
  }
}
var ForecastingComponent = class _ForecastingComponent {
  setScenario(scenario) {
    this.scenarioFilter.set(scenario);
  }
  scenarioBadge(scenario) {
    switch (scenario) {
      case "committed":
        return "badge-success";
      case "best-case":
        return "badge-warning";
      default:
        return "badge-neutral";
    }
  }
  constructor(seed) {
    this.seed = seed;
    this.scenarios = ["all", "committed", "best-case"];
    this.scenarioFilter = signal("all");
    this.totalValue = computed(() => this.seed.forecasts().reduce((s, f) => s + f.value, 0));
    this.committedValue = computed(() => this.seed.forecasts().filter((f) => f.scenario === "committed").reduce((s, f) => s + f.value, 0));
    this.bestCaseValue = computed(() => this.seed.forecasts().filter((f) => f.scenario === "best-case").reduce((s, f) => s + f.value, 0));
    this.weightedValue = computed(() => Math.round(this.seed.forecasts().reduce((s, f) => s + f.value * f.confidence / 100, 0)));
    this.filteredForecasts = computed(() => {
      const f = this.scenarioFilter();
      const rows = f === "all" ? this.seed.forecasts() : this.seed.forecasts().filter((r) => r.scenario === f);
      return [...rows].sort((a, b) => a.breakerFamily.localeCompare(b.breakerFamily) || b.value - a.value);
    });
    this.familyBars = computed(() => {
      const order = ["E6.2", "XT7", "XT4", "E4.2", "XT6"];
      const map = /* @__PURE__ */ new Map();
      for (const f of this.seed.forecasts()) {
        map.set(f.breakerFamily, (map.get(f.breakerFamily) ?? 0) + f.value);
      }
      const rows = order.filter((fam) => map.has(fam)).map((fam) => ({ family: fam, value: map.get(fam) ?? 0, pct: 0 }));
      const max = Math.max(1, ...rows.map((r) => r.value));
      rows.forEach((r) => r.pct = Math.round(r.value / max * 100));
      return rows;
    });
  }
  static {
    this.\u0275fac = function ForecastingComponent_Factory(t) {
      return new (t || _ForecastingComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForecastingComponent, selectors: [["app-forecasting"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 79, vars: 17, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "alert", "alert-info", "ares-note"], [1, "card", "card-pad", "chips-bar"], [1, "btn", "btn-sm", "chip", 3, "chip-active"], [1, "card"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "chart-section"], [1, "panel-title"], [1, "card", "card-pad"], [1, "bar-row"], [1, "btn", "btn-sm", "chip", 3, "click"], [1, "right", "mono"], [1, "conf-cell"], [1, "conf-track"], [1, "conf-fill"], [1, "conf-val"], [1, "badge"], ["colspan", "6", 1, "muted"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-val", "mono"]], template: function ForecastingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Forecasting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Forecast by breaker family across delivery windows \u2014 rolls up design-ins, quotes and backlog. Featuring the NOVVA ARES 2H 2026 program.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Total forecast");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 5)(14, "div", 6);
        \u0275\u0275text(15, "Committed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 7);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 5)(20, "div", 6);
        \u0275\u0275text(21, "Best-case");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 7);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 5)(26, "div", 6);
        \u0275\u0275text(27, "Weighted");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 7);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 8)(32, "div");
        \u0275\u0275text(33, " Forecast consolidates active ");
        \u0275\u0275elementStart(34, "strong");
        \u0275\u0275text(35, "design-ins");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, ", open ");
        \u0275\u0275elementStart(37, "strong");
        \u0275\u0275text(38, "quotes");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " and confirmed ");
        \u0275\u0275elementStart(40, "strong");
        \u0275\u0275text(41, "backlog");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " into a single view. The ");
        \u0275\u0275elementStart(43, "strong");
        \u0275\u0275text(44, "NOVVA ARES");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, " program drives all five breaker families across the ");
        \u0275\u0275elementStart(46, "strong");
        \u0275\u0275text(47, "2H 2026");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " delivery window. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 9);
        \u0275\u0275repeaterCreate(50, ForecastingComponent_For_51_Template, 2, 3, "button", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 11)(53, "div", 12)(54, "table", 13)(55, "thead")(56, "tr")(57, "th");
        \u0275\u0275text(58, "Breaker family");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "th");
        \u0275\u0275text(60, "Window");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "th", 14);
        \u0275\u0275text(62, "Units");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "th", 14);
        \u0275\u0275text(64, "Value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "th");
        \u0275\u0275text(66, "Confidence");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "th");
        \u0275\u0275text(68, "Scenario");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "tbody");
        \u0275\u0275repeaterCreate(70, ForecastingComponent_For_71_Template, 20, 13, "tr", null, _forTrack0, false, ForecastingComponent_ForEmpty_72_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(73, "div", 15)(74, "h2", 16);
        \u0275\u0275text(75, "By breaker family");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 17);
        \u0275\u0275repeaterCreate(77, ForecastingComponent_For_78_Template, 8, 7, "div", 18, _forTrack1);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 5, ctx.totalValue(), "1.0-0"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 8, ctx.committedValue(), "1.0-0"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(24, 11, ctx.bestCaseValue(), "1.0-0"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(30, 14, ctx.weightedValue(), "1.0-0"), "");
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.scenarios);
        \u0275\u0275advance(20);
        \u0275\u0275repeater(ctx.filteredForecasts());
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.familyBars());
      }
    }, dependencies: [CommonModule, DecimalPipe], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.ares-note[_ngcontent-%COMP%] {\n  margin: var(--sp-4) 0;\n}\n.chips-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n  margin: var(--sp-4) 0;\n}\n.chip[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.chip-active[_ngcontent-%COMP%] {\n  background: var(--color-brand-600);\n  color: #fff;\n  border-color: var(--color-brand-600);\n}\n.conf-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  min-width: 140px;\n}\n.conf-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--color-surface-2);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.conf-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--chart-2);\n}\n.conf-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-text-muted);\n  min-width: 34px;\n  text-align: right;\n}\n.chart-section[_ngcontent-%COMP%] {\n  margin-top: var(--sp-6);\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr auto;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-3);\n}\n.bar-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.bar-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 14px;\n  background: var(--color-surface-2);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--color-brand-600);\n}\n@media (max-width: 640px) {\n  .bar-row[_ngcontent-%COMP%] {\n    grid-template-columns: 90px 1fr;\n  }\n  .bar-val[_ngcontent-%COMP%] {\n    grid-column: 2;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=forecasting.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForecastingComponent, { className: "ForecastingComponent", filePath: "src/app/features/forecasting/forecasting.component.ts", lineNumber: 20 });
})();
export {
  ForecastingComponent
};
//# sourceMappingURL=forecasting.component-G5XCUDKL.js.map
