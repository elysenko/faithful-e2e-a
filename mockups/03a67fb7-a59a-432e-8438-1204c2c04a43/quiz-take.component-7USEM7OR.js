import {
  Router,
  RouterLink
} from "./chunk-GUFH4IQL.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ILXJTYNR.js";

// src/app/pages/quiz-take/quiz-take.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/courses", a0];
var _c1 = (a0) => ["/quizzes", a0, "result"];
function QuizTakeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "span", 1);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading quiz\u2026");
    \u0275\u0275elementEnd()();
  }
}
function QuizTakeComponent_Conditional_1_Template(rf, ctx) {
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
function QuizTakeComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 2);
    \u0275\u0275text(2, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "No attempts remaining");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 8);
    \u0275\u0275text(8, "View last result");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("You have used all ", ctx_r0.quiz().attemptLimit, " attempt(s) for this quiz.");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, ctx_r0.quiz().id));
  }
}
function QuizTakeComponent_Conditional_2_Conditional_8_For_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function QuizTakeComponent_Conditional_2_Conditional_8_For_3_For_5_Template_button_click_0_listener() {
      const oi_r4 = \u0275\u0275restoreView(_r3).$index;
      const qi_r5 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.select(qi_r5, oi_r4));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const oi_r4 = ctx.$index;
    const qi_r5 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.isSelected(qi_r5, oi_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isSelected(qi_r5, oi_r4) ? "\u25CF" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6);
  }
}
function QuizTakeComponent_Conditional_2_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 11)(1, "p", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275repeaterCreate(4, QuizTakeComponent_Conditional_2_Conditional_8_For_3_For_5_Template, 5, 4, "button", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r7.text);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(q_r7.options);
  }
}
function QuizTakeComponent_Conditional_2_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Answer every question to submit.");
    \u0275\u0275elementEnd();
  }
}
function QuizTakeComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275listener("ngSubmit", function QuizTakeComponent_Conditional_2_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(1, "ol", 10);
    \u0275\u0275repeaterCreate(2, QuizTakeComponent_Conditional_2_Conditional_8_For_3_Template, 6, 1, "li", 11, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275template(5, QuizTakeComponent_Conditional_2_Conditional_8_Conditional_5_Template, 2, 0, "span", 6);
    \u0275\u0275elementStart(6, "button", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.quiz().questions);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(5, !ctx_r0.answeredAll() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.answeredAll() || ctx_r0.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting() ? "Submitting\u2026" : "Submit quiz", " ");
  }
}
function QuizTakeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1, "\u2190 Back to course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "header", 5)(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, QuizTakeComponent_Conditional_2_Conditional_7_Template, 9, 4, "div", 7)(8, QuizTakeComponent_Conditional_2_Conditional_8_Template, 8, 3);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, ctx_r0.courseId));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.quiz().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Passing score is 60%. Attempt ", ((tmp_3_0 = ctx_r0.quiz().attemptsUsed) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0) + 1, " of ", ctx_r0.quiz().attemptLimit, ". ");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r0.blocked() ? 7 : 8);
  }
}
var QuizTakeComponent = class _QuizTakeComponent {
  constructor(router) {
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.submitting = signal(false);
    this.courseId = "c1";
    this.quiz = signal({
      id: "q2",
      moduleId: "m2",
      title: "CSS Fundamentals Quiz",
      attemptLimit: 2,
      attemptsUsed: 0,
      passed: false,
      questions: [
        {
          id: "qq1",
          quizId: "q2",
          text: "Which CSS property controls the space inside an element, between content and border?",
          options: ["margin", "padding", "gap", "border-spacing"]
        },
        {
          id: "qq2",
          quizId: "q2",
          text: "Which value of display enables Flexbox layout on a container?",
          options: ["block", "grid", "flex", "inline"]
        },
        {
          id: "qq3",
          quizId: "q2",
          text: 'What does the selector ".btn" target?',
          options: ['An element with id "btn"', 'Elements with class "btn"', "The <btn> tag", "All buttons"]
        }
      ]
    });
    this.answers = signal([]);
    this.blocked = computed(() => {
      const q = this.quiz();
      return (q.attemptsUsed ?? 0) >= q.attemptLimit;
    });
    this.answeredAll = computed(() => {
      const total = this.quiz().questions?.length ?? 0;
      const a = this.answers();
      return total > 0 && a.filter((v) => v !== void 0 && v !== null).length === total;
    });
  }
  select(qIndex, optIndex) {
    this.answers.update((a) => {
      const next = [...a];
      next[qIndex] = optIndex;
      return next;
    });
  }
  isSelected(qIndex, optIndex) {
    return this.answers()[qIndex] === optIndex;
  }
  submit() {
    if (!this.answeredAll() || this.blocked())
      return;
    this.submitting.set(true);
    this.router.navigate(["/quizzes", this.quiz().id, "result"]);
  }
  static {
    this.\u0275fac = function QuizTakeComponent_Factory(t) {
      return new (t || _QuizTakeComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizTakeComponent, selectors: [["app-quiz-take"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], [1, "back", "muted", 3, "routerLink"], [1, "quiz-head"], [1, "muted"], [1, "card", "blocked"], [1, "btn", "btn-outline", 3, "routerLink"], [3, "ngSubmit"], [1, "questions"], [1, "question", "card"], [1, "submit-bar"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "q-text"], [1, "options"], ["type", "button", 1, "option", 3, "selected"], ["type", "button", 1, "option", 3, "click"], [1, "opt-mark"]], template: function QuizTakeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, QuizTakeComponent_Conditional_0_Template, 4, 0, "div", 0)(1, QuizTakeComponent_Conditional_1_Template, 5, 1)(2, QuizTakeComponent_Conditional_2_Template, 9, 7);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.loading() ? 0 : ctx.error() ? 1 : 2);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.quiz-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.quiz-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-bottom: var(--space-1);\n}\n.blocked[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  text-align: center;\n  padding: var(--space-8) var(--space-5);\n}\n.blocked[_ngcontent-%COMP%]   .state-icon[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n}\n.questions[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  counter-reset: q;\n}\n.question[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.q-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fs-md);\n  margin: 0 0 var(--space-4);\n}\n.q-text[_ngcontent-%COMP%]::before {\n  counter-increment: q;\n  content: counter(q) ". ";\n  color: var(--color-brand);\n  font-weight: 800;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 48px;\n  padding: 0 var(--space-4);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  color: var(--color-ink);\n  font-size: var(--fs-base);\n  font-family: inherit;\n  text-align: left;\n  cursor: pointer;\n  transition: border-color .12s, background .12s;\n}\n.option[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-brand);\n}\n.option.selected[_ngcontent-%COMP%] {\n  border-color: var(--color-brand);\n  background: var(--color-brand-light);\n}\n.opt-mark[_ngcontent-%COMP%] {\n  width: 16px;\n  color: var(--color-brand);\n  font-size: var(--fs-sm);\n}\n.submit-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  margin-top: var(--space-5);\n}\n/*# sourceMappingURL=quiz-take.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizTakeComponent, { className: "QuizTakeComponent", filePath: "src/app/pages/quiz-take/quiz-take.component.ts", lineNumber: 13 });
})();
export {
  QuizTakeComponent
};
//# sourceMappingURL=quiz-take.component-7USEM7OR.js.map
