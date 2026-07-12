import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  RouterLink,
  TitleCasePipe,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/validation/validation.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.item.id;
var _c0 = (a0) => ["/quotes", a0];
function ValidationComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "label", 16)(14, "input", 17);
    \u0275\u0275listener("change", function ValidationComponent_For_44_Template_input_change_14_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleActive(r_r2.id, r_r2.active));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td", 18);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.family);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.severityBadge(r_r2.severity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, r_r2.severity));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.triggers);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r2.isActive(r_r2.id, r_r2.active));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isActive(r_r2.id, r_r2.active) ? "On" : "Off");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.description);
  }
}
function ValidationComponent_For_63_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, res_r4.quote.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(res_r4.quote.number);
  }
}
function ValidationComponent_For_63_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(res_r4.item.quoteId);
  }
}
function ValidationComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, ValidationComponent_For_63_Conditional_10_Template, 2, 4, "a", 20)(11, ValidationComponent_For_63_Conditional_11_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const res_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(res_r4.item.partNumber);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.resultBadge(res_r4.item.validationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, res_r4.item.validationStatus));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r4.item.validationNote || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(10, res_r4.quote ? 10 : 11);
  }
}
function ValidationComponent_ForEmpty_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, "No open validation results.");
    \u0275\u0275elementEnd()();
  }
}
var ValidationComponent = class _ValidationComponent {
  isActive(id, seeded) {
    const state = this.activeState();
    return id in state ? state[id] : seeded;
  }
  toggleActive(id, seeded) {
    const current = this.isActive(id, seeded);
    this.activeState.update((s) => __spreadProps(__spreadValues({}, s), { [id]: !current }));
  }
  severityBadge(severity) {
    return severity === "error" ? "badge-danger" : "badge-warning";
  }
  resultBadge(status) {
    switch (status) {
      case "error":
        return "badge-danger";
      case "warning":
        return "badge-warning";
      default:
        return "badge-success";
    }
  }
  constructor(seed) {
    this.seed = seed;
    this.activeState = signal({});
    this.activeRulesCount = computed(() => this.seed.validationRules().filter((r) => this.isActive(r.id, r.active)).length);
    this.totalTriggers = computed(() => this.seed.validationRules().reduce((sum, r) => sum + r.triggers, 0));
    this.recentResults = computed(() => this.seed.lineItems().filter((l) => l.validationStatus !== "ok").map((l) => ({
      item: l,
      quote: this.seed.quoteById(l.quoteId)
    })));
    this.openIssues = computed(() => this.recentResults().length);
  }
  static {
    this.\u0275fac = function ValidationComponent_Factory(t) {
      return new (t || _ValidationComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ValidationComponent, selectors: [["app-validation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid", 2, "margin-bottom", "var(--sp-5)"], [1, "card", "card-pad"], [1, "muted", "stat-label"], [1, "stat-value"], [1, "card", 2, "margin-bottom", "var(--sp-5)"], [1, "card-pad"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "card"], [1, "badge"], [1, "right", "mono"], [1, "toggle"], ["type", "checkbox", 3, "change", "checked"], [1, "muted"], [1, "mono"], [1, "mono", 3, "routerLink"], [1, "muted", "mono"], ["colspan", "4", 1, "muted"]], template: function ValidationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Validation Engine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Configurable submittal rules and recent line-item validation results.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Active rules");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6);
        \u0275\u0275text(14, "Total triggers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 5)(18, "div", 6);
        \u0275\u0275text(19, "Open issues");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 7);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 8)(23, "div", 9)(24, "h3");
        \u0275\u0275text(25, "Rules");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 10)(27, "table", 11)(28, "thead")(29, "tr")(30, "th");
        \u0275\u0275text(31, "Rule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Family");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35, "Severity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th", 12);
        \u0275\u0275text(37, "Triggers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "tbody");
        \u0275\u0275repeaterCreate(43, ValidationComponent_For_44_Template, 19, 11, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "div", 13)(46, "div", 9)(47, "h3");
        \u0275\u0275text(48, "Recent results");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 10)(50, "table", 11)(51, "thead")(52, "tr")(53, "th");
        \u0275\u0275text(54, "Part #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th");
        \u0275\u0275text(58, "Note");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "th");
        \u0275\u0275text(60, "Quote");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "tbody");
        \u0275\u0275repeaterCreate(62, ValidationComponent_For_63_Template, 12, 8, "tr", null, _forTrack1, false, ValidationComponent_ForEmpty_64_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate2("", ctx.activeRulesCount(), " / ", ctx.seed.validationRules().length, "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.totalTriggers());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.openIssues());
        \u0275\u0275advance(22);
        \u0275\u0275repeater(ctx.seed.validationRules());
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.recentResults());
      }
    }, dependencies: [CommonModule, TitleCasePipe, RouterLink], styles: ["\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 600;\n  margin-top: var(--sp-1);\n}\n.toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  margin: 0;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-text-muted);\n  cursor: pointer;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  min-height: 0;\n  accent-color: var(--color-brand-600);\n  cursor: pointer;\n}\n/*# sourceMappingURL=validation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ValidationComponent, { className: "ValidationComponent", filePath: "src/app/features/validation/validation.component.ts", lineNumber: 14 });
})();
export {
  ValidationComponent
};
//# sourceMappingURL=validation.component-LGBAFQVQ.js.map
