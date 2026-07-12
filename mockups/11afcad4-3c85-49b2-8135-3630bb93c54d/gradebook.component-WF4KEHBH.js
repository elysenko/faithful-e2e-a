import {
  ApiService
} from "./chunk-W2TRM4ZO.js";
import "./chunk-QKG44OY5.js";
import {
  ActivatedRoute,
  CommonModule,
  NgClass,
  RouterLink,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LGQVWVXM.js";

// src/app/pages/gradebook/gradebook.component.ts
var _forTrack0 = ($index, $item) => $item.quizId;
var _forTrack1 = ($index, $item) => $item.userId;
var _c0 = (a0) => ["/instructor/courses", a0];
function GradebookComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading gradebook\u2026");
    \u0275\u0275elementEnd()();
  }
}
function GradebookComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
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
function GradebookComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "\u{1F9D1}\u200D\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No students enrolled yet.");
    \u0275\u0275elementEnd()();
  }
}
function GradebookComponent_Conditional_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r2.quizTitle);
  }
}
function GradebookComponent_Conditional_11_For_12_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const score_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.scoreClass(score_r3.scorePct));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", score_r3.scorePct == null ? "\u2014" : score_r3.scorePct + "%", " ");
  }
}
function GradebookComponent_Conditional_11_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 10)(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(7, GradebookComponent_Conditional_11_For_12_For_8_Template, 3, 2, "td", null, _forTrack0);
    \u0275\u0275elementStart(9, "td")(10, "div", 18)(11, "div", 19);
    \u0275\u0275element(12, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 21);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r4.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.studentEmail);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r4.scores);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", row_r4.progressPct, "%");
    \u0275\u0275classProp("done", row_r4.progressPct >= 100);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r4.progressPct, "%");
  }
}
function GradebookComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 9)(2, "thead")(3, "tr")(4, "th", 10);
    \u0275\u0275text(5, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, GradebookComponent_Conditional_11_For_7_Template, 2, 1, "th", null, _forTrack0);
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Progress");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, GradebookComponent_Conditional_11_For_12_Template, 15, 7, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "p", 11);
    \u0275\u0275element(14, "span", 12);
    \u0275\u0275text(15, " \u2265 70% (pass) \xA0 ");
    \u0275\u0275element(16, "span", 13);
    \u0275\u0275text(17, " < 70% \xA0 ");
    \u0275\u0275element(18, "span", 14);
    \u0275\u0275text(19, " not attempted ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.quizColumns());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.rows());
  }
}
var GradebookComponent = class _GradebookComponent {
  constructor(api, route) {
    this.api = api;
    this.route = route;
    this.loading = signal(false);
    this.error = signal(null);
    this.rows = signal([
      {
        userId: "u1",
        studentName: "Ada Lovelace",
        studentEmail: "ada@demo",
        progressPct: 100,
        scores: [
          { quizId: "q1", quizTitle: "CSS Fundamentals Quiz", scorePct: 90 },
          { quizId: "q2", quizTitle: "JS Basics Quiz", scorePct: 80 }
        ]
      },
      {
        userId: "u2",
        studentName: "Grace Hopper",
        studentEmail: "grace@demo",
        progressPct: 60,
        scores: [
          { quizId: "q1", quizTitle: "CSS Fundamentals Quiz", scorePct: 70 },
          { quizId: "q2", quizTitle: "JS Basics Quiz", scorePct: null }
        ]
      },
      {
        userId: "u3",
        studentName: "Alan Turing",
        studentEmail: "alan@demo",
        progressPct: 25,
        scores: [
          { quizId: "q1", quizTitle: "CSS Fundamentals Quiz", scorePct: 50 },
          { quizId: "q2", quizTitle: "JS Basics Quiz", scorePct: null }
        ]
      }
    ]);
    this.courseId = "";
    this.quizColumns = computed(() => {
      const first = this.rows()[0];
      return first ? first.scores.map((s) => ({ quizId: s.quizId, quizTitle: s.quizTitle })) : [];
    });
  }
  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get("id") ?? "";
    this.loading.set(true);
    this.error.set(null);
    this.api.getGradebook(this.courseId).subscribe({
      next: (rows) => {
        this.rows.set(rows);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load the gradebook. Please try again.");
        this.loading.set(false);
      }
    });
  }
  scoreClass(score) {
    if (score == null)
      return "muted";
    return score >= 70 ? "pass" : "fail";
  }
  static {
    this.\u0275fac = function GradebookComponent_Factory(t) {
      return new (t || _GradebookComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GradebookComponent, selectors: [["app-gradebook"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[1, "page"], [1, "back-link", 3, "routerLink"], [1, "page-head"], [1, "badge", "badge-brand"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "card", "table-wrap"], [1, "table", "gradebook"], [1, "sticky-col"], [1, "legend", "muted"], [1, "dot", "pass"], [1, "dot", "fail"], [1, "dot", "none"], [1, "student"], [1, "student-name"], [1, "student-email", "muted"], [1, "prog-cell"], [1, "progress-track"], [1, "progress-fill"], [1, "prog-num"], [1, "score", 3, "ngClass"]], template: function GradebookComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to course editor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "h1");
        \u0275\u0275text(5, "Gradebook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, GradebookComponent_Conditional_8_Template, 4, 0, "div", 4)(9, GradebookComponent_Conditional_9_Template, 5, 1)(10, GradebookComponent_Conditional_10_Template, 5, 0)(11, GradebookComponent_Conditional_11_Template, 20, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, ctx.courseId));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.rows().length, " students");
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.loading() ? 8 : ctx.error() ? 9 : ctx.rows().length === 0 ? 10 : 11);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--container);\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4) var(--space-8);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n}\n.gradebook[_ngcontent-%COMP%] {\n  min-width: 520px;\n}\n.gradebook[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .gradebook[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.sticky-col[_ngcontent-%COMP%] {\n  position: sticky;\n  left: 0;\n  background: var(--color-surface);\n  z-index: 1;\n}\n.gradebook[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sticky-col[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n}\n.student[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.student-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.student-email[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.score[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 48px;\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  font-weight: 700;\n  font-size: var(--fs-sm);\n}\n.score.pass[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.score.fail[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n}\n.score.muted[_ngcontent-%COMP%] {\n  background: var(--color-surface-inset);\n  color: var(--color-faint);\n}\n.prog-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-width: 120px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--color-surface-inset);\n  border-radius: var(--radius-pill);\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-brand);\n  border-radius: var(--radius-pill);\n}\n.progress-fill.done[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.prog-num[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  color: var(--color-ink-soft);\n}\n.legend[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n  font-size: var(--fs-sm);\n  display: flex;\n  align-items: center;\n  gap: var(--space-1);\n  flex-wrap: wrap;\n}\n.dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.dot.pass[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.dot.fail[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n}\n.dot.none[_ngcontent-%COMP%] {\n  background: var(--color-faint);\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom) + var(--space-5));\n  }\n}\n/*# sourceMappingURL=gradebook.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GradebookComponent, { className: "GradebookComponent", filePath: "src/app/pages/gradebook/gradebook.component.ts", lineNumber: 18 });
})();
export {
  GradebookComponent
};
//# sourceMappingURL=gradebook.component-WF4KEHBH.js.map
