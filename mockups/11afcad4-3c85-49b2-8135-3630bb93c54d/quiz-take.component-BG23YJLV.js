import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RadioControlValueAccessor,
  ɵNgNoValidate
} from "./chunk-OG6PBVX4.js";
import {
  ApiService
} from "./chunk-W2TRM4ZO.js";
import "./chunk-QKG44OY5.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink,
  __spreadProps,
  __spreadValues,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LGQVWVXM.js";

// src/app/pages/quiz-take/quiz-take.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [];
var _c1 = () => ["/my-courses"];
function QuizTakeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading quiz\u2026");
    \u0275\u0275elementEnd()();
  }
}
function QuizTakeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function QuizTakeComponent_Conditional_3_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx;
    \u0275\u0275classProp("pass", r_r3.passed)("fail", !r_r3.passed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", r_r3.scorePct, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.passed ? "Passed! \u{1F389}" : "Not passed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("You answered ", r_r3.correct, " of ", r_r3.total, " questions correctly.");
  }
}
function QuizTakeComponent_Conditional_3_Conditional_0_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Your last score was ", q_r4.lastScorePct, "%.");
  }
}
function QuizTakeComponent_Conditional_3_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 17);
    \u0275\u0275text(2, "Attempts exhausted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QuizTakeComponent_Conditional_3_Conditional_0_Conditional_8_Conditional_5_Template, 2, 1, "p", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("You have used all ", q_r4.attemptLimit, " attempt(s) for this quiz.");
    \u0275\u0275advance();
    \u0275\u0275conditional(5, q_r4.lastScorePct != null ? 5 : -1);
  }
}
function QuizTakeComponent_Conditional_3_Conditional_0_For_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 22)(1, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function QuizTakeComponent_Conditional_3_Conditional_0_For_11_For_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const qi_r6 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.answers[qi_r6], $event) || (ctx_r0.answers[qi_r6] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const oi_r8 = ctx.$index;
    const qi_r6 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.answers[qi_r6] === oi_r8);
    \u0275\u0275advance();
    \u0275\u0275property("name", "q" + qi_r6)("value", oi_r8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.answers[qi_r6]);
    \u0275\u0275property("disabled", ctx_r0.exhausted() || !!ctx_r0.result());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r7);
  }
}
function QuizTakeComponent_Conditional_3_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fieldset", 11)(1, "legend", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275repeaterCreate(6, QuizTakeComponent_Conditional_3_Conditional_0_For_11_For_7_Template, 4, 7, "label", 21, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r9 = ctx.$implicit;
    const qi_r6 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.exhausted() || !!ctx_r0.result());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(qi_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(question_r9.text);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(question_r9.options);
  }
}
function QuizTakeComponent_Conditional_3_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function QuizTakeComponent_Conditional_3_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.submitting() || ctx_r0.exhausted() || !ctx_r0.allAnswered());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting() ? "Grading\u2026" : ctx_r0.exhausted() ? "No attempts left" : "Submit answers", " ");
  }
}
function QuizTakeComponent_Conditional_3_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275text(1, "Back to my courses");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c1));
  }
}
function QuizTakeComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 5)(1, "span", 6);
    \u0275\u0275text(2, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, QuizTakeComponent_Conditional_3_Conditional_0_Conditional_7_Template, 8, 8, "div", 8)(8, QuizTakeComponent_Conditional_3_Conditional_0_Conditional_8_Template, 6, 2, "div", 9);
    \u0275\u0275elementStart(9, "form", 10);
    \u0275\u0275listener("ngSubmit", function QuizTakeComponent_Conditional_3_Conditional_0_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275repeaterCreate(10, QuizTakeComponent_Conditional_3_Conditional_0_For_11_Template, 8, 3, "fieldset", 11, _forTrack0);
    \u0275\u0275template(12, QuizTakeComponent_Conditional_3_Conditional_0_Conditional_12_Template, 2, 1, "p", 12)(13, QuizTakeComponent_Conditional_3_Conditional_0_Conditional_13_Template, 2, 2, "button", 13)(14, QuizTakeComponent_Conditional_3_Conditional_0_Conditional_14_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const q_r4 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Attempts used ", q_r4.attemptsUsed || 0, " of ", q_r4.attemptLimit, ". Pass mark is 70%. ");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, (tmp_5_0 = ctx_r0.result()) ? 7 : -1, tmp_5_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, ctx_r0.exhausted() && !ctx_r0.result() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(q_r4.questions || \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, ctx_r0.error() && ctx_r0.quiz() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, !ctx_r0.result() ? 13 : 14);
  }
}
function QuizTakeComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuizTakeComponent_Conditional_3_Conditional_0_Template, 15, 8);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.quiz()) ? 0 : -1, tmp_1_0);
  }
}
var QuizTakeComponent = class _QuizTakeComponent {
  constructor(api, route) {
    this.api = api;
    this.route = route;
    this.loading = signal(false);
    this.error = signal(null);
    this.submitting = signal(false);
    this.result = signal(null);
    this.quiz = signal({
      id: "q1",
      moduleId: "m2",
      title: "CSS Fundamentals Quiz",
      attemptLimit: 1,
      attemptsUsed: 0,
      lastScorePct: null,
      passed: false,
      questions: [
        {
          id: "qq1",
          quizId: "q1",
          text: "Which CSS property changes the text colour of an element?",
          options: ["font-color", "color", "text-style", "foreground"]
        },
        {
          id: "qq2",
          quizId: "q1",
          text: 'What does the "C" in CSS stand for?',
          options: ["Cascading", "Computed", "Coded", "Central"]
        },
        {
          id: "qq3",
          quizId: "q1",
          text: "Which selector targets an element by its id attribute?",
          options: [".name", "#name", "*name", "@name"]
        }
      ]
    });
    this.answers = [];
    this.quizId = "";
    this.attemptsLeft = computed(() => {
      const q = this.quiz();
      if (!q)
        return 0;
      return Math.max(0, q.attemptLimit - (q.attemptsUsed ?? 0));
    });
    this.exhausted = computed(() => this.attemptsLeft() === 0);
  }
  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get("id") ?? "";
    this.loading.set(true);
    this.error.set(null);
    this.api.getQuiz(this.quizId).subscribe({
      next: (quiz) => {
        this.quiz.set(quiz);
        this.answers = new Array((quiz.questions ?? []).length).fill(-1);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load this quiz. Please try again.");
        this.loading.set(false);
      }
    });
  }
  allAnswered() {
    const q = this.quiz();
    if (!q)
      return false;
    const count = (q.questions ?? []).length;
    return this.answers.length === count && this.answers.every((a) => a >= 0);
  }
  submit() {
    if (this.exhausted() || !this.allAnswered())
      return;
    this.submitting.set(true);
    this.error.set(null);
    this.api.submitAttempt(this.quizId, this.answers).subscribe({
      next: (res) => {
        this.result.set(res);
        this.submitting.set(false);
        const q = this.quiz();
        if (q)
          this.quiz.set(__spreadProps(__spreadValues({}, q), { attemptsUsed: (q.attemptsUsed ?? 0) + 1 }));
      },
      error: (err) => {
        this.submitting.set(false);
        this.error.set(err?.status === 409 ? "You have used all your attempts for this quiz." : "Could not submit your answers. Please try again.");
      }
    });
  }
  static {
    this.\u0275fac = function QuizTakeComponent_Factory(t) {
      return new (t || _QuizTakeComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizTakeComponent, selectors: [["app-quiz-take"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "page"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "quiz-head"], [1, "badge", "badge-brand"], [1, "muted"], [1, "card", "result", 3, "pass", "fail"], [1, "card", "notice"], [3, "ngSubmit"], [1, "card", "question", 3, "disabled"], [1, "error"], ["type", "submit", 1, "btn", "btn-accent", "btn-block", "btn-submit", 3, "disabled"], [1, "card", "result"], [1, "result-score"], [1, "result-body"], [1, "badge", "badge-warn"], [1, "q-text"], [1, "q-num"], [1, "options"], [1, "option", 3, "selected"], [1, "option"], ["type", "radio", 3, "ngModelChange", "name", "value", "ngModel", "disabled"], [1, "btn", "btn-primary", "btn-block", "btn-submit", 3, "routerLink"]], template: function QuizTakeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, QuizTakeComponent_Conditional_1_Template, 4, 0, "div", 1)(2, QuizTakeComponent_Conditional_2_Template, 5, 1)(3, QuizTakeComponent_Conditional_3_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.loading() ? 1 : ctx.error() && !ctx.quiz() ? 2 : 3);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4) var(--space-8);\n}\n.quiz-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  align-items: flex-start;\n}\n.quiz-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  padding: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.result.pass[_ngcontent-%COMP%] {\n  border-color: var(--color-success);\n  background: var(--color-success-bg);\n}\n.result.fail[_ngcontent-%COMP%] {\n  border-color: var(--color-warning);\n  background: var(--color-warning-bg);\n}\n.result-score[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n}\n.result.pass[_ngcontent-%COMP%]   .result-score[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.result.fail[_ngcontent-%COMP%]   .result-score[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.result-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.notice[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  align-items: flex-start;\n}\n.question[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-4);\n  border: 1px solid var(--color-border);\n}\n.question[disabled][_ngcontent-%COMP%] {\n  opacity: .85;\n}\n.q-text[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  font-weight: 700;\n  font-size: var(--fs-md);\n  color: var(--color-ink);\n  margin-bottom: var(--space-3);\n  padding: 0;\n}\n.q-num[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  min-width: 24px;\n  height: 24px;\n  border-radius: var(--radius-pill);\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-size: var(--fs-sm);\n  font-weight: 800;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  cursor: pointer;\n  font-size: var(--fs-base);\n  transition: border-color .12s, background .12s;\n}\n.option[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-brand);\n}\n.option.selected[_ngcontent-%COMP%] {\n  border-color: var(--color-brand);\n  background: var(--color-brand-tint);\n}\n.option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--color-brand);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom) + var(--space-5));\n  }\n}\n/*# sourceMappingURL=quiz-take.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizTakeComponent, { className: "QuizTakeComponent", filePath: "src/app/pages/quiz-take/quiz-take.component.ts", lineNumber: 21 });
})();
export {
  QuizTakeComponent
};
//# sourceMappingURL=quiz-take.component-BG23YJLV.js.map
