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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ILXJTYNR.js";

// src/app/pages/course-detail/course-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/lessons", a0];
var _c1 = (a0) => ["/quizzes", a0];
function CourseDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "span", 1);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading course\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_Conditional_1_Template(rf, ctx) {
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
function CourseDetailComponent_Conditional_2_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_2_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.enroll());
    });
    \u0275\u0275text(1, "Enroll");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_2_Conditional_0_For_19_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "Lesson");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lesson_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, lesson_r3.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("done", lesson_r3.completed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lesson_r3.completed ? "\u2713" : "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(lesson_r3.title);
  }
}
function CourseDetailComponent_Conditional_2_Conditional_0_For_19_For_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Passed");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_2_Conditional_0_For_19_For_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Quiz");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_2_Conditional_0_For_19_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CourseDetailComponent_Conditional_2_Conditional_0_For_19_For_9_Conditional_8_Template, 2, 0, "span", 24)(9, CourseDetailComponent_Conditional_2_Conditional_0_For_19_For_9_Conditional_9_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const quiz_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, quiz_r4.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("done", quiz_r4.passed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(quiz_r4.passed ? "\u2713" : "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(quiz_r4.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, quiz_r4.passed ? 8 : 9);
  }
}
function CourseDetailComponent_Conditional_2_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "h2", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 18);
    \u0275\u0275repeaterCreate(6, CourseDetailComponent_Conditional_2_Conditional_0_For_19_For_7_Template, 10, 7, "li", null, _forTrack0);
    \u0275\u0275repeaterCreate(8, CourseDetailComponent_Conditional_2_Conditional_0_For_19_For_9_Template, 10, 8, "li", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mod_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Module ", mod_r5.order, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mod_r5.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(mod_r5.lessons);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(mod_r5.quizzes);
  }
}
function CourseDetailComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1, "\u2190 Back to my courses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "header", 5)(3, "div", 6)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, CourseDetailComponent_Conditional_2_Conditional_0_Conditional_8_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "section", 9)(10, "div", 10)(11, "span");
    \u0275\u0275text(12, "Your progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275element(16, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275repeaterCreate(18, CourseDetailComponent_Conditional_2_Conditional_0_For_19_Template, 10, 2, "section", 14, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, !ctx_r0.enrolled() ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", c_r6.progressPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r6.progressPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(c_r6.modules);
  }
}
function CourseDetailComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 2);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Course not found.");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CourseDetailComponent_Conditional_2_Conditional_0_Template, 20, 6)(1, CourseDetailComponent_Conditional_2_Conditional_1_Template, 5, 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.course()) ? 0 : 1, tmp_1_0);
  }
}
var CourseDetailComponent = class _CourseDetailComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.course = signal({
      id: "c1",
      title: "Intro to Web Development",
      description: "Learn HTML, CSS, and JavaScript fundamentals to build your first responsive website.",
      enrolled: true,
      progressPct: 45,
      modules: [
        {
          id: "m1",
          courseId: "c1",
          order: 1,
          title: "Getting Started with HTML",
          lessons: [
            { id: "l1", moduleId: "m1", order: 1, title: "What is HTML?", content: "", completed: true },
            { id: "l2", moduleId: "m1", order: 2, title: "Structure of a Page", content: "", completed: true }
          ],
          quizzes: [
            { id: "q1", moduleId: "m1", title: "HTML Basics Quiz", attemptLimit: 2, passed: true, attemptsUsed: 1 }
          ]
        },
        {
          id: "m2",
          courseId: "c1",
          order: 2,
          title: "Styling with CSS",
          lessons: [
            { id: "l3", moduleId: "m2", order: 1, title: "Selectors & the Box Model", content: "", completed: false },
            { id: "l4", moduleId: "m2", order: 2, title: "Flexbox Layout", content: "", completed: false }
          ],
          quizzes: [
            { id: "q2", moduleId: "m2", title: "CSS Fundamentals Quiz", attemptLimit: 1, passed: false, attemptsUsed: 0 }
          ]
        }
      ]
    });
    this.enrolled = signal(true);
  }
  enroll() {
    this.enrolled.set(true);
  }
  static {
    this.\u0275fac = function CourseDetailComponent_Factory(t) {
      return new (t || _CourseDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseDetailComponent, selectors: [["app-course-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], ["routerLink", "/my-courses", 1, "back", "muted"], [1, "course-head", "card"], [1, "course-head-main"], [1, "muted"], ["type", "button", 1, "btn", "btn-primary"], [1, "progress-card", "card"], [1, "progress-row"], [1, "pct"], [1, "progress"], [1, "modules"], [1, "module", "card"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "module-title"], [1, "module-order"], [1, "items"], [1, "item", 3, "routerLink"], [1, "tick"], [1, "item-icon"], [1, "item-title"], [1, "item-type", "muted"], [1, "badge", "badge-ok"]], template: function CourseDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CourseDetailComponent_Conditional_0_Template, 4, 0, "div", 0)(1, CourseDetailComponent_Conditional_1_Template, 5, 1)(2, CourseDetailComponent_Conditional_2_Template, 2, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.loading() ? 0 : ctx.error() ? 1 : 2);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.course-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-5);\n  margin-bottom: var(--space-4);\n}\n.course-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-bottom: var(--space-2);\n}\n.course-head-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.progress-card[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-5);\n  margin-bottom: var(--space-5);\n}\n.progress-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-2);\n  font-weight: 600;\n}\n.pct[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n  font-weight: 800;\n}\n.modules[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.module[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-5);\n}\n.module-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  display: flex;\n  align-items: baseline;\n  gap: var(--space-2);\n  margin-bottom: var(--space-3);\n}\n.module-order[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  color: var(--color-brand);\n  font-weight: 700;\n}\n.items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 48px;\n  padding: var(--space-2) var(--space-2);\n  border-radius: var(--radius);\n  color: var(--color-ink);\n}\n.item[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  text-decoration: none;\n}\n.item-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.item-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n}\n.item-type[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.tick[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  flex: none;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  border: 2px solid var(--color-border-strong);\n  font-size: var(--fs-xs);\n  font-weight: 800;\n  color: #fff;\n}\n.tick.done[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  border-color: var(--color-success);\n}\n/*# sourceMappingURL=course-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseDetailComponent, { className: "CourseDetailComponent", filePath: "src/app/pages/course-detail/course-detail.component.ts", lineNumber: 13 });
})();
export {
  CourseDetailComponent
};
//# sourceMappingURL=course-detail.component-KO77U3LQ.js.map
