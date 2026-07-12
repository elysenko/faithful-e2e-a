import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  DecimalPipe,
  computed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/design-ins/design-ins.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DesignInsComponent_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " (");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, ") ");
  }
  if (rf & 2) {
    const a_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.competingBod);
  }
}
function DesignInsComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span")(2, "strong");
    \u0275\u0275text(3, "Design-in protection alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u2014 specified project ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275template(8, DesignInsComponent_For_7_Conditional_8_Template, 4, 1);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(a_r1.projectName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", a_r1.accountName, ") reached bid with competing BOD ");
    \u0275\u0275advance();
    \u0275\u0275conditional(8, a_r1.competingBod ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(". Specifier: ", a_r1.specifier, ". ");
  }
}
function DesignInsComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.stageLabel(s_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.countForStage(s_r2));
  }
}
function DesignInsComponent_For_24_For_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Protection alert");
    \u0275\u0275elementEnd();
  }
}
function DesignInsComponent_For_24_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, DesignInsComponent_For_24_For_7_Conditional_12_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    \u0275\u0275classProp("di-alert", d_r4.protectionAlert);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.projectName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Specifier: ", d_r4.specifier, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.breakerFamily);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(11, 8, d_r4.value, "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, d_r4.protectionAlert ? 12 : -1);
  }
}
function DesignInsComponent_For_24_ForEmpty_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "No cards");
    \u0275\u0275elementEnd();
  }
}
function DesignInsComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 16)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, DesignInsComponent_For_24_For_7_Template, 13, 11, "div", 18, _forTrack0, false, DesignInsComponent_For_24_ForEmpty_8_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.stageLabel(s_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.countForStage(s_r5));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.cardsForStage(s_r5));
  }
}
var DesignInsComponent = class _DesignInsComponent {
  cardsForStage(stage) {
    return this.seed.designIns().filter((d) => d.stage === stage);
  }
  countForStage(stage) {
    return this.cardsForStage(stage).length;
  }
  stageLabel(stage) {
    return stage === "basis-of-design" ? "Basis of Design" : stage.charAt(0).toUpperCase() + stage.slice(1);
  }
  constructor(seed) {
    this.seed = seed;
    this.stages = ["identified", "specified", "basis-of-design", "bidding", "booked"];
    this.alerts = computed(() => this.seed.designIns().filter((d) => d.protectionAlert));
    this.bookedCount = computed(() => this.seed.designIns().filter((d) => d.stage === "booked").length);
    this.totalCount = computed(() => this.seed.designIns().length);
    this.captureRate = computed(() => {
      const total = this.totalCount();
      return total === 0 ? 0 : Math.round(this.bookedCount() / total * 100);
    });
  }
  static {
    this.\u0275fac = function DesignInsComponent_Factory(t) {
      return new (t || _DesignInsComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesignInsComponent, selectors: [["app-design-ins"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "alert", "alert-danger", 2, "margin-bottom", "var(--sp-3)"], [1, "card", "card-pad", 2, "margin-bottom", "var(--sp-5)"], [1, "row", 2, "justify-content", "space-between", "align-items", "baseline"], [1, "muted"], [1, "bar-track", 2, "margin-top", "var(--sp-3)"], [1, "bar-fill"], [1, "row", "stage-counts", 2, "margin-top", "var(--sp-4)"], [1, "stage-count"], [1, "kanban"], [1, "kanban-col"], [1, "muted", "stat-label"], [1, "stat-value"], [1, "kanban-head"], [1, "badge", "badge-neutral"], [1, "card", "card-pad", "di-card", 3, "di-alert"], [1, "kanban-empty", "muted"], [1, "card", "card-pad", "di-card"], [1, "di-title"], [1, "di-meta"], [1, "di-meta", "mono"], [1, "di-value"], [1, "badge", "badge-danger", 2, "margin-top", "var(--sp-2)"]], template: function DesignInsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Design-In Pipeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Specifier-driven opportunities from identification through booking.");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(6, DesignInsComponent_For_7_Template, 10, 4, "div", 4, _forTrack0);
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "h3");
        \u0275\u0275text(11, "Capture rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div")(13, "strong");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 8);
        \u0275\u0275element(18, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 10);
        \u0275\u0275repeaterCreate(20, DesignInsComponent_For_21_Template, 5, 2, "div", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 12);
        \u0275\u0275repeaterCreate(23, DesignInsComponent_For_24_Template, 9, 3, "div", 13, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.alerts());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.captureRate(), "%");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("(", ctx.bookedCount(), " booked / ", ctx.totalCount(), " total)");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.captureRate(), "%");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.stages);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.stages);
      }
    }, dependencies: [CommonModule, DecimalPipe], styles: ["\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 600;\n  margin-top: var(--sp-1);\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 12px;\n  border-radius: 999px;\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-success);\n  border-radius: 999px;\n}\n.stage-counts[_ngcontent-%COMP%] {\n  gap: var(--sp-5);\n}\n.stage-count[_ngcontent-%COMP%] {\n  min-width: 90px;\n}\n.kanban[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--sp-4);\n  align-items: start;\n}\n.kanban-col[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: var(--sp-3);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.kanban-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  color: var(--color-text);\n}\n.kanban-empty[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  text-align: center;\n  font-size: var(--fs-sm);\n}\n.di-card[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--color-brand-500);\n}\n.di-alert[_ngcontent-%COMP%] {\n  border-left-color: var(--color-danger);\n}\n.di-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.di-meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-text-muted);\n  margin-top: var(--sp-1);\n}\n.di-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: var(--sp-2);\n}\n/*# sourceMappingURL=design-ins.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesignInsComponent, { className: "DesignInsComponent", filePath: "src/app/features/design-ins/design-ins.component.ts", lineNumber: 14 });
})();
export {
  DesignInsComponent
};
//# sourceMappingURL=design-ins.component-XAXCLNMI.js.map
