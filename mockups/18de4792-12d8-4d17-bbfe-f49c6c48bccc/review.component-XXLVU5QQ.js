import {
  formatCents
} from "./chunk-U6DJL2W7.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-OCSIP44N.js";
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
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YT626SJK.js";

// src/app/pages/wizard/review/review.component.ts
function ReviewComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, "Calculating your estimate\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReviewComponent_Conditional_6_Template(rf, ctx) {
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
function ReviewComponent_Conditional_7_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 18);
    \u0275\u0275text(2, "\u2713 Marked complete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " This return is now filed in EasyFile. ");
    \u0275\u0275elementEnd();
  }
}
function ReviewComponent_Conditional_7_Conditional_0_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_7_Conditional_0_Conditional_55_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markComplete());
    });
    \u0275\u0275text(1, "Mark complete");
    \u0275\u0275elementEnd();
  }
}
function ReviewComponent_Conditional_7_Conditional_0_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_7_Conditional_0_Conditional_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.print());
    });
    \u0275\u0275text(1, "\u{1F5A8} Print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 19);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_7_Conditional_0_Conditional_56_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.done());
    });
    \u0275\u0275text(3, "Done");
    \u0275\u0275elementEnd();
  }
}
function ReviewComponent_Conditional_7_Conditional_0_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_7_Conditional_0_Conditional_57_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.print());
    });
    \u0275\u0275text(1, " \u{1F5A8} Print this summary ");
    \u0275\u0275elementEnd();
  }
}
function ReviewComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ReviewComponent_Conditional_7_Conditional_0_Conditional_5_Template, 4, 0, "div", 7);
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9)(8, "span");
    \u0275\u0275text(9, "Gross income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "span");
    \u0275\u0275text(14, " Deduction applied ");
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 11)(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12)(23, "span");
    \u0275\u0275text(24, "Taxable income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 9)(28, "span");
    \u0275\u0275text(29, "Tax (2024 brackets)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 9)(33, "span");
    \u0275\u0275text(34, "Child Tax Credit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 12)(38, "span");
    \u0275\u0275text(39, "Tax after credits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 9)(43, "span");
    \u0275\u0275text(44, "Federal tax withheld");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 13)(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 14)(53, "button", 15);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_7_Conditional_0_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275text(54, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, ReviewComponent_Conditional_7_Conditional_0_Conditional_55_Template, 2, 0, "button", 16)(56, ReviewComponent_Conditional_7_Conditional_0_Conditional_56_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, ReviewComponent_Conditional_7_Conditional_0_Conditional_57_Template, 2, 0, "button", 17);
  }
  if (rf & 2) {
    const e_r6 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("refund", ctx_r0.refundIsPositive())("owed", !ctx_r0.refundIsPositive());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.refundIsPositive() ? "Estimated refund" : "Estimated amount owed", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmt(ctx_r0.refundIsPositive() ? e_r6.refundCents : -e_r6.refundCents));
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ctx_r0.completed() ? 5 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.fmt(e_r6.grossCents));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-ok", e_r6.deductionUsed === "standard")("badge-info", e_r6.deductionUsed === "itemized");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r6.deductionUsed === "standard" ? "Standard" : "Itemized", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212 ", ctx_r0.fmt(e_r6.deductionCents), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Standard ", ctx_r0.fmt(e_r6.standardCents), " vs itemized ", ctx_r0.fmt(e_r6.itemizedCents), " \u2014 larger applied");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(e_r6.taxableCents));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(e_r6.taxCents));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u2212 ", ctx_r0.fmt(e_r6.ctcCents), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(e_r6.taxAfterCreditsCents));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(e_r6.withholdingCents));
    \u0275\u0275advance();
    \u0275\u0275classProp("refund", ctx_r0.refundIsPositive())("owed", !ctx_r0.refundIsPositive());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.refundIsPositive() ? "Refund" : "Amount owed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmt(ctx_r0.refundIsPositive() ? e_r6.refundCents : -e_r6.refundCents));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(55, !ctx_r0.completed() ? 55 : 56);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(57, !ctx_r0.completed() ? 57 : -1);
  }
}
function ReviewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReviewComponent_Conditional_7_Conditional_0_Template, 58, 29);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.estimate()) ? 0 : -1, tmp_1_0);
  }
}
var ReviewComponent = class _ReviewComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.returnId = "";
    this.loading = signal(false);
    this.error = signal("");
    this.completed = signal(false);
    this.estimate = signal({
      grossCents: 685e4,
      withholdingCents: 78e4,
      itemizedCents: 106e4,
      standardCents: 146e4,
      deductionUsed: "standard",
      deductionCents: 146e4,
      taxableCents: 539e4,
      taxCents: 764e3,
      ctcCents: 2e5,
      taxAfterCreditsCents: 564e3,
      refundCents: 216e3
    });
    this.refundIsPositive = computed(() => (this.estimate()?.refundCents ?? 0) >= 0);
    this.fmt = formatCents;
    this.returnId = this.route.parent?.snapshot.paramMap.get("id") ?? "";
  }
  back() {
    this.router.navigate(["/returns", this.returnId, "wizard", "deductions"]);
  }
  markComplete() {
    this.completed.set(true);
  }
  print() {
    window.print();
  }
  done() {
    this.router.navigate(["/returns"]);
  }
  static {
    this.\u0275fac = function ReviewComponent_Factory(t) {
      return new (t || _ReviewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewComponent, selectors: [["app-review"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "wiz-step", "review"], [1, "lead", "no-print"], [1, "state"], [1, "state", "state-error"], [1, "result-card", "card"], [1, "result-label"], [1, "result-amount"], [1, "complete-banner"], [1, "card", "breakdown"], [1, "line"], [1, "badge"], [1, "line", "sub", "muted"], [1, "line", "strong"], [1, "line", "total"], [1, "wiz-actions", "no-print"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-ghost", "btn-block", "print-link", "no-print"], [1, "badge", "badge-ok"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", "btn-block", "print-link", "no-print", 3, "click"]], template: function ReviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2");
        \u0275\u0275text(2, "Your 2024 estimate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "Recalculated on the server from everything you entered.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ReviewComponent_Conditional_5_Template, 2, 0, "div", 2)(6, ReviewComponent_Conditional_6_Template, 2, 1)(7, ReviewComponent_Conditional_7_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.loading() ? 5 : ctx.error() ? 6 : ctx.estimate() ? 7 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.result-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-1);\n  padding: var(--space-6) var(--space-4);\n  margin-bottom: var(--space-4);\n  text-align: center;\n}\n.result-card.refund[_ngcontent-%COMP%] {\n  background: var(--color-refund-bg);\n  border-color: var(--color-refund);\n}\n.result-card.owed[_ngcontent-%COMP%] {\n  background: var(--color-owed-bg);\n  border-color: var(--color-owed);\n}\n.result-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink-soft);\n}\n.result-amount[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n}\n.result-card.refund[_ngcontent-%COMP%]   .result-amount[_ngcontent-%COMP%] {\n  color: var(--color-refund);\n}\n.result-card.owed[_ngcontent-%COMP%]   .result-amount[_ngcontent-%COMP%] {\n  color: var(--color-owed);\n}\n.complete-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-3) var(--space-4);\n  margin-bottom: var(--space-4);\n  background: var(--color-success-bg);\n  border-radius: var(--radius);\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n}\n.breakdown[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-5);\n}\n.line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--space-3);\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n  font-variant-numeric: tabular-nums;\n}\n.line[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.line.sub[_ngcontent-%COMP%] {\n  padding-top: 0;\n  border-bottom: none;\n  font-size: var(--fs-xs);\n}\n.line.strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.line[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: var(--space-2);\n}\n.line.total[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  padding-top: var(--space-4);\n  border-top: 2px solid var(--color-border-strong);\n  border-bottom: none;\n  font-weight: 800;\n  font-size: var(--fs-md);\n}\n.line.total.refund[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--color-refund);\n}\n.line.total.owed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--color-owed);\n}\n.print-link[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n  color: var(--color-muted);\n}\n@media print {\n  .result-card[_ngcontent-%COMP%] {\n    border: 2px solid var(--color-ink);\n  }\n  .breakdown[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: 1px solid var(--color-ink);\n  }\n}\n/*# sourceMappingURL=review.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewComponent, { className: "ReviewComponent", filePath: "src/app/pages/wizard/review/review.component.ts", lineNumber: 15 });
})();
export {
  ReviewComponent
};
//# sourceMappingURL=review.component-XXLVU5QQ.js.map
