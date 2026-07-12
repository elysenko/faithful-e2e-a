import {
  RouterLink
} from "./chunk-GUFH4IQL.js";
import {
  CommonModule,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ILXJTYNR.js";

// src/app/pages/quiz-result/quiz-result.component.ts
var _c0 = (a0) => ["/courses", a0];
var _c1 = (a0) => ["/quizzes", a0];
function QuizResultComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "span", 1);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Grading your quiz\u2026");
    \u0275\u0275elementEnd()();
  }
}
function QuizResultComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 2);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function QuizResultComponent_Conditional_2_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, ctx_r0.quizId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Retry (", ctx_r0.attemptsRemaining(), " attempt(s) left) ");
  }
}
function QuizResultComponent_Conditional_2_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "\u{1F512} No attempts remaining for this quiz.");
    \u0275\u0275elementEnd();
  }
}
function QuizResultComponent_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuizResultComponent_Conditional_2_Conditional_15_Conditional_0_Template, 2, 4, "a", 13)(1, QuizResultComponent_Conditional_2_Conditional_15_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, ctx_r0.attemptsRemaining() > 0 ? 0 : 1);
  }
}
function QuizResultComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 10);
    \u0275\u0275text(11, "Passing score is 60%.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "a", 12);
    \u0275\u0275text(14, "Back to course");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, QuizResultComponent_Conditional_2_Conditional_15_Template, 2, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pass", ctx_r0.result().passed)("fail", !ctx_r0.result().passed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.result().passed ? "\u{1F389}" : "\u{1F615}");
    \u0275\u0275advance();
    \u0275\u0275classProp("pass", ctx_r0.result().passed)("fail", !ctx_r0.result().passed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.result().scorePct, "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-ok", ctx_r0.result().passed)("badge-danger", !ctx_r0.result().passed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.result().passed ? "Passed" : "Not passed", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.quizTitle);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, ctx_r0.courseId));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(15, !ctx_r0.result().passed ? 15 : -1);
  }
}
var QuizResultComponent = class _QuizResultComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.quizId = "q2";
    this.courseId = "c1";
    this.quizTitle = "CSS Fundamentals Quiz";
    this.result = signal({
      scorePct: 67,
      passed: true,
      correctIdxs: [1, 2, 1]
    });
    this.attemptsRemaining = signal(1);
  }
  static {
    this.\u0275fac = function QuizResultComponent_Factory(t) {
      return new (t || _QuizResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizResultComponent, selectors: [["app-quiz-result"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], [1, "result-wrap"], [1, "card", "result-card"], [1, "result-emoji"], [1, "score"], [1, "verdict", "badge"], [1, "muted", "quiz-name"], [1, "muted", "threshold"], [1, "result-actions"], [1, "btn", "btn-primary", "btn-block", 3, "routerLink"], [1, "btn", "btn-outline", "btn-block", 3, "routerLink"], [1, "blocked-msg", "muted"]], template: function QuizResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, QuizResultComponent_Conditional_0_Template, 4, 0, "div", 0)(1, QuizResultComponent_Conditional_1_Template, 5, 1)(2, QuizResultComponent_Conditional_2_Template, 16, 20);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.loading() ? 0 : ctx.error() ? 1 : 2);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.result-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: var(--space-5);\n}\n.result-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  text-align: center;\n  padding: var(--space-8) var(--space-6);\n  border-top: 4px solid var(--color-border);\n}\n.result-card.pass[_ngcontent-%COMP%] {\n  border-top-color: var(--color-pass);\n}\n.result-card.fail[_ngcontent-%COMP%] {\n  border-top-color: var(--color-fail);\n}\n.result-emoji[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.score[_ngcontent-%COMP%] {\n  font-size: 3.4rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.score.pass[_ngcontent-%COMP%] {\n  color: var(--color-pass);\n}\n.score.fail[_ngcontent-%COMP%] {\n  color: var(--color-fail);\n}\n.verdict[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.quiz-name[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n  font-weight: 600;\n  color: var(--color-ink-soft);\n}\n.threshold[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.result-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  margin-top: var(--space-5);\n}\n.blocked-msg[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n/*# sourceMappingURL=quiz-result.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizResultComponent, { className: "QuizResultComponent", filePath: "src/app/pages/quiz-result/quiz-result.component.ts", lineNumber: 13 });
})();
export {
  QuizResultComponent
};
//# sourceMappingURL=quiz-result.component-XFIFLZQ7.js.map
