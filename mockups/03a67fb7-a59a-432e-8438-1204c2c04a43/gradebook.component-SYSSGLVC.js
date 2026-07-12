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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ILXJTYNR.js";

// src/app/pages/instructor/gradebook/gradebook.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.userId;
var _c0 = (a0) => ["/instructor/courses", a0, "edit"];
function GradebookComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "span", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading gradebook\u2026");
    \u0275\u0275elementEnd()();
  }
}
function GradebookComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function GradebookComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No students are enrolled yet.");
    \u0275\u0275elementEnd()();
  }
}
function GradebookComponent_Conditional_13_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(quiz_r2.title);
  }
}
function GradebookComponent_Conditional_13_For_12_For_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    const quiz_r3 = \u0275\u0275nextContext().$implicit;
    const row_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("badge-ok", (tmp_22_0 = ctx_r0.scoreFor(row_r4.scores, quiz_r3.id)) == null ? null : tmp_22_0.passed)("badge-danger", !((tmp_23_0 = ctx_r0.scoreFor(row_r4.scores, quiz_r3.id)) == null ? null : tmp_23_0.passed));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_24_0 = ctx_r0.scoreFor(row_r4.scores, quiz_r3.id)) == null ? null : tmp_24_0.bestScorePct, "% ");
  }
}
function GradebookComponent_Conditional_13_For_12_For_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function GradebookComponent_Conditional_13_For_12_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 10);
    \u0275\u0275template(1, GradebookComponent_Conditional_13_For_12_For_14_Conditional_1_Template, 2, 5, "span", 18)(2, GradebookComponent_Conditional_13_For_12_For_14_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_21_0;
    const quiz_r3 = ctx.$implicit;
    const row_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ((tmp_21_0 = ctx_r0.scoreFor(row_r4.scores, quiz_r3.id)) == null ? null : tmp_21_0.bestScorePct) != null ? 1 : 2);
  }
}
function GradebookComponent_Conditional_13_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 12)(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 10)(8, "div", 15)(9, "div", 16);
    \u0275\u0275element(10, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(13, GradebookComponent_Conditional_13_For_12_For_14_Template, 3, 1, "td", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r4.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.studentEmail);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", row_r4.progressPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r4.progressPct, "%");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.gradebook().quizzes);
  }
}
function GradebookComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 10);
    \u0275\u0275text(7, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, GradebookComponent_Conditional_13_For_9_Template, 2, 1, "th", 10, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, GradebookComponent_Conditional_13_For_12_Template, 15, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "p", 11);
    \u0275\u0275text(14, "Scores show each student's best attempt. Passing threshold is 60%.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.gradebook().quizzes);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.gradebook().rows);
  }
}
var GradebookComponent = class _GradebookComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.courseId = "c1";
    this.gradebook = signal({
      courseId: "c1",
      courseTitle: "Intro to Web Development",
      quizzes: [
        { id: "q1", title: "HTML Basics Quiz" },
        { id: "q2", title: "CSS Fundamentals Quiz" }
      ],
      rows: [
        {
          userId: "u1",
          studentName: "Ada Lovelace",
          studentEmail: "ada@demo",
          progressPct: 100,
          scores: [
            { quizId: "q1", quizTitle: "HTML Basics Quiz", bestScorePct: 100, lastScorePct: 100, passed: true },
            { quizId: "q2", quizTitle: "CSS Fundamentals Quiz", bestScorePct: 80, lastScorePct: 80, passed: true }
          ]
        },
        {
          userId: "u2",
          studentName: "Grace Hopper",
          studentEmail: "grace@demo",
          progressPct: 60,
          scores: [
            { quizId: "q1", quizTitle: "HTML Basics Quiz", bestScorePct: 67, lastScorePct: 67, passed: true },
            { quizId: "q2", quizTitle: "CSS Fundamentals Quiz", bestScorePct: 40, lastScorePct: 40, passed: false }
          ]
        },
        {
          userId: "u3",
          studentName: "Alan Turing",
          studentEmail: "alan@demo",
          progressPct: 25,
          scores: [
            { quizId: "q1", quizTitle: "HTML Basics Quiz", bestScorePct: null, lastScorePct: null, passed: false },
            { quizId: "q2", quizTitle: "CSS Fundamentals Quiz", bestScorePct: null, lastScorePct: null, passed: false }
          ]
        }
      ]
    });
  }
  scoreFor(scores, quizId) {
    return scores.find((s) => s.quizId === quizId);
  }
  static {
    this.\u0275fac = function GradebookComponent_Factory(t) {
      return new (t || _GradebookComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GradebookComponent, selectors: [["app-gradebook"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 5, consts: [["routerLink", "/instructor/courses", 1, "back", "muted"], [1, "page-head"], [1, "muted"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], [1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], [1, "card", "table-wrap"], [1, "table"], [1, "center"], [1, "muted", "note"], [1, "student"], [1, "s-name"], [1, "muted", "s-email"], [1, "prog-cell"], [1, "progress"], [1, "prog-pct"], [1, "badge", 3, "badge-ok", "badge-danger"], [1, "badge"]], template: function GradebookComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275text(1, "\u2190 Back to courses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "header", 1)(3, "div")(4, "h1");
        \u0275\u0275text(5, "Gradebook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 2);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "a", 3);
        \u0275\u0275text(9, "Edit content");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, GradebookComponent_Conditional_10_Template, 4, 0, "div", 4)(11, GradebookComponent_Conditional_11_Template, 5, 1)(12, GradebookComponent_Conditional_12_Template, 5, 0)(13, GradebookComponent_Conditional_13_Template, 15, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.gradebook().courseTitle);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, ctx.courseId));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(10, ctx.loading() ? 10 : ctx.error() ? 11 : ctx.gradebook().rows.length === 0 ? 12 : 13);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  padding: var(--space-2);\n  overflow-x: auto;\n  overscroll-behavior-y: contain;\n}\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.student[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.s-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  white-space: nowrap;\n}\n.s-email[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.prog-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-width: 120px;\n}\n.prog-cell[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.prog-pct[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  font-weight: 700;\n  color: var(--color-brand);\n  width: 34px;\n  text-align: right;\n}\n.note[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n  font-size: var(--fs-xs);\n}\n/*# sourceMappingURL=gradebook.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GradebookComponent, { className: "GradebookComponent", filePath: "src/app/pages/instructor/gradebook/gradebook.component.ts", lineNumber: 13 });
})();
export {
  GradebookComponent
};
//# sourceMappingURL=gradebook.component-SYSSGLVC.js.map
