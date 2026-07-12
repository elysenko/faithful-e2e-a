import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  DecimalPipe,
  RouterLink,
  TitleCasePipe,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/projects/projects.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/projects", a0];
function ProjectsComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, s_r1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.countByStage()[s_r1]);
  }
}
function ProjectsComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ProjectsComponent_For_30_Template_button_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter(s_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("chip-active", ctx_r1.filter() === s_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, s_r4), " (", ctx_r1.countByStage()[s_r4], ") ");
  }
}
function ProjectsComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 18);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 20);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, p_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_12_0 = ctx_r1.seed.accountById(p_r5.accountId)) == null ? null : tmp_12_0.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.stageBadge(p_r5.stage));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, p_r5.stage));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 11, p_r5.value, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r5.margin, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.targetClose);
  }
}
function ProjectsComponent_ForEmpty_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2, "No projects in this stage.");
    \u0275\u0275elementEnd()();
  }
}
var ProjectsComponent = class _ProjectsComponent {
  setFilter(f) {
    this.filter.set(f);
  }
  stageBadge(stage) {
    switch (stage) {
      case "quoting":
        return "badge-info";
      case "submitted":
        return "badge-warning";
      case "negotiation":
        return "badge-warning";
      case "awarded":
        return "badge-success";
      case "closed":
        return "badge-neutral";
      default:
        return "badge-neutral";
    }
  }
  constructor(seed) {
    this.seed = seed;
    this.stageWeight = {
      quoting: 0.2,
      submitted: 0.4,
      negotiation: 0.6,
      awarded: 0.9,
      closed: 1
    };
    this.stages = ["quoting", "submitted", "negotiation", "awarded", "closed"];
    this.filter = signal("all");
    this.visibleProjects = computed(() => {
      const f = this.filter();
      const list = this.seed.projects();
      return f === "all" ? list : list.filter((p) => p.stage === f);
    });
    this.totalPipeline = computed(() => this.seed.projects().reduce((sum, p) => sum + p.value, 0));
    this.weightedPipeline = computed(() => this.seed.projects().reduce((sum, p) => sum + p.value * this.stageWeight[p.stage], 0));
    this.countByStage = computed(() => {
      const counts = {};
      for (const s of this.stages)
        counts[s] = 0;
      for (const p of this.seed.projects())
        counts[p.stage] = (counts[p.stage] ?? 0) + 1;
      return counts;
    });
  }
  static {
    this.\u0275fac = function ProjectsComponent_Factory(t) {
      return new (t || _ProjectsComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 12, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid", 2, "margin-bottom", "var(--sp-5)"], [1, "card", "card-pad"], [1, "muted", "stat-label"], [1, "stat-value"], [1, "row", "chips", 2, "margin-bottom", "var(--sp-4)"], [1, "chip", 3, "click"], [1, "chip", 3, "chip-active"], [1, "card"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "muted"], [1, "clickable", 3, "routerLink"], [1, "badge"], [1, "right", "mono"], ["title", "Role-gated / internal", 1, "right", "mono"], [1, "nowrap"], ["colspan", "6", 1, "muted"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Opportunity pipeline across accounts, by stage.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Total pipeline value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 5)(14, "div", 6);
        \u0275\u0275text(15, "Weighted (stage-adjusted)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 7);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 5)(20, "div", 6);
        \u0275\u0275text(21, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 7);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(24, ProjectsComponent_For_25_Template, 6, 4, "div", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 8)(27, "button", 9);
        \u0275\u0275listener("click", function ProjectsComponent_Template_button_click_27_listener() {
          return ctx.setFilter("all");
        });
        \u0275\u0275text(28, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(29, ProjectsComponent_For_30_Template, 3, 6, "button", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 11)(32, "div", 12)(33, "table", 13)(34, "thead")(35, "tr")(36, "th");
        \u0275\u0275text(37, "Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Stage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th", 14);
        \u0275\u0275text(43, "Value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th", 14);
        \u0275\u0275text(45, "Margin ");
        \u0275\u0275elementStart(46, "span", 15);
        \u0275\u0275text(47, "(internal)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49, "Target close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "tbody");
        \u0275\u0275repeaterCreate(51, ProjectsComponent_For_52_Template, 17, 16, "tr", 16, _forTrack0, false, ProjectsComponent_ForEmpty_53_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 6, ctx.totalPipeline(), "1.0-0"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 9, ctx.weightedPipeline(), "1.0-0"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.seed.projects().length);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.stages);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("chip-active", ctx.filter() === "all");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.stages);
        \u0275\u0275advance(22);
        \u0275\u0275repeater(ctx.visibleProjects());
      }
    }, dependencies: [CommonModule, DecimalPipe, TitleCasePipe, RouterLink], styles: ["\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 600;\n  margin-top: var(--sp-1);\n}\n.chips[_ngcontent-%COMP%] {\n  gap: var(--sp-2);\n}\n.chip[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 6px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-surface);\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  cursor: pointer;\n}\n.chip-active[_ngcontent-%COMP%] {\n  background: var(--color-brand-600);\n  border-color: var(--color-brand-600);\n  color: var(--color-text-invert);\n}\ntr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/features/projects/projects.component.ts", lineNumber: 16 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=projects.component-TFEU553V.js.map
