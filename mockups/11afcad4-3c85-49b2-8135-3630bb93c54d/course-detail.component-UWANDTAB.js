import {
  AuthService
} from "./chunk-QXOV56IR.js";
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
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LGQVWVXM.js";

// src/app/pages/course-detail/course-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [];
var _c1 = (a0, a1) => ["/courses", a0, "lessons", a1];
var _c2 = (a0) => ["/quizzes", a0];
function CourseDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading course\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
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
function CourseDetailComponent_Conditional_5_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1, "Log in to enroll");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_5_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u2713 Enrolled");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_5_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_5_Conditional_0_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.enroll());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.enrolling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.enrolling() ? "Enrolling\u2026" : "Enroll now", " ");
  }
}
function CourseDetailComponent_Conditional_5_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3, "Your progress");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 19);
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275element(8, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", c_r3.progressPct || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r3.progressPct || 0, "%");
  }
}
function CourseDetailComponent_Conditional_5_Conditional_0_For_15_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 19);
    \u0275\u0275elementStart(7, "span", 29);
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lesson_r4 = ctx.$implicit;
    const c_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(3, _c1, c_r3.id, lesson_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r4.viewed ? "\u2705" : "\u{1F4D6}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r4.title);
  }
}
function CourseDetailComponent_Conditional_5_Conditional_0_For_15_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 30)(2, "span", 27);
    \u0275\u0275text(3, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 31);
    \u0275\u0275text(7, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const quiz_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c2, quiz_r5.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(quiz_r5.title);
  }
}
function CourseDetailComponent_Conditional_5_Conditional_0_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 25);
    \u0275\u0275repeaterCreate(7, CourseDetailComponent_Conditional_5_Conditional_0_For_15_For_8_Template, 9, 6, "li", null, _forTrack0);
    \u0275\u0275repeaterCreate(9, CourseDetailComponent_Conditional_5_Conditional_0_For_15_For_10_Template, 10, 4, "li", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mod_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mod_r6.order);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mod_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(mod_r6.lessons || \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(mod_r6.quizzes || \u0275\u0275pureFunction0(3, _c0));
  }
}
function CourseDetailComponent_Conditional_5_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No modules in this course yet.");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10);
    \u0275\u0275template(9, CourseDetailComponent_Conditional_5_Conditional_0_Conditional_9_Template, 2, 0, "a", 11)(10, CourseDetailComponent_Conditional_5_Conditional_0_Conditional_10_Template, 2, 0)(11, CourseDetailComponent_Conditional_5_Conditional_0_Conditional_11_Template, 2, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, CourseDetailComponent_Conditional_5_Conditional_0_Conditional_12_Template, 9, 3, "div", 12);
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275repeaterCreate(14, CourseDetailComponent_Conditional_5_Conditional_0_For_15_Template, 11, 4, "section", 14, _forTrack0);
    \u0275\u0275template(16, CourseDetailComponent_Conditional_5_Conditional_0_Conditional_16_Template, 5, 0, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, !ctx_r0.auth.isLoggedIn() ? 9 : c_r3.enrolled ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(12, c_r3.enrolled ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(c_r3.modules || \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(16, (c_r3.modules || \u0275\u0275pureFunction0(6, _c0)).length === 0 ? 16 : -1);
  }
}
function CourseDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CourseDetailComponent_Conditional_5_Conditional_0_Template, 17, 7);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.course()) ? 0 : -1, tmp_1_0);
  }
}
var CourseDetailComponent = class _CourseDetailComponent {
  constructor(api, route, auth) {
    this.api = api;
    this.route = route;
    this.auth = auth;
    this.loading = signal(false);
    this.error = signal(null);
    this.enrolling = signal(false);
    this.course = signal({
      id: "c1",
      title: "Intro to Web Development",
      description: "Build your first web pages from scratch. Learn HTML structure, CSS styling, and the fundamentals of how the browser renders your work.",
      enrolled: false,
      progressPct: 40,
      modules: [
        {
          id: "m1",
          courseId: "c1",
          order: 1,
          title: "HTML Basics",
          lessons: [
            { id: "l1", moduleId: "m1", order: 1, title: "What is HTML?", content: "", viewed: true },
            { id: "l2", moduleId: "m1", order: 2, title: "Elements & Tags", content: "", viewed: true }
          ],
          quizzes: []
        },
        {
          id: "m2",
          courseId: "c1",
          order: 2,
          title: "Styling with CSS",
          lessons: [
            { id: "l3", moduleId: "m2", order: 1, title: "Selectors & Properties", content: "", viewed: false }
          ],
          quizzes: [
            { id: "q1", moduleId: "m2", title: "CSS Fundamentals Quiz", attemptLimit: 1 }
          ]
        }
      ]
    });
    this.courseId = "";
  }
  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get("id") ?? "";
    this.loading.set(true);
    this.error.set(null);
    this.api.getCourse(this.courseId).subscribe({
      next: (course) => {
        this.course.set(course);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load this course. Please try again.");
        this.loading.set(false);
      }
    });
  }
  enroll() {
    if (!this.auth.isLoggedIn())
      return;
    this.enrolling.set(true);
    this.api.enroll(this.courseId).subscribe({
      next: () => {
        const c = this.course();
        if (c)
          this.course.set(__spreadProps(__spreadValues({}, c), { enrolled: true }));
        this.enrolling.set(false);
      },
      error: () => this.enrolling.set(false)
    });
  }
  static {
    this.\u0275fac = function CourseDetailComponent_Factory(t) {
      return new (t || _CourseDetailComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseDetailComponent, selectors: [["app-course-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "page"], ["routerLink", "/", 1, "back-link"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "course-head"], [1, "ch-main"], [1, "badge", "badge-brand"], [1, "muted"], [1, "ch-actions"], ["routerLink", "/login", 1, "btn", "btn-primary", "btn-block"], [1, "progress-block", "card"], [1, "modules"], [1, "card", "module"], [1, "badge", "badge-ok", "enrolled-badge"], ["type", "button", 1, "btn", "btn-accent", "btn-block", 3, "click", "disabled"], [1, "progress-row"], [1, "progress-label"], [1, "spacer"], [1, "progress-pct"], [1, "progress-track"], [1, "progress-fill"], [1, "module-head"], [1, "module-order"], [1, "lesson-list"], [1, "lesson-row", 3, "routerLink"], [1, "lesson-icon"], [1, "lesson-title"], [1, "lesson-go"], [1, "lesson-row", "quiz-row", 3, "routerLink"], [1, "badge", "badge-muted"]], template: function CourseDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CourseDetailComponent_Conditional_3_Template, 4, 0, "div", 2)(4, CourseDetailComponent_Conditional_4_Template, 5, 1)(5, CourseDetailComponent_Conditional_5_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : 5);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 840px;\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4) var(--space-8);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.course-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-4);\n  align-items: flex-start;\n  margin-bottom: var(--space-5);\n}\n.ch-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 240px;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.ch-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.ch-actions[_ngcontent-%COMP%] {\n  width: 220px;\n  max-width: 100%;\n}\n.enrolled-badge[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 var(--space-4);\n  font-size: var(--fs-base);\n  width: 100%;\n  justify-content: center;\n}\n.progress-block[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.progress-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: var(--space-2);\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n}\n.progress-pct[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--color-brand);\n}\n.progress-track[_ngcontent-%COMP%] {\n  height: 10px;\n  background: var(--color-surface-inset);\n  border-radius: var(--radius-pill);\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-brand);\n  border-radius: var(--radius-pill);\n  transition: width .3s ease;\n}\n.modules[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.module[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n}\n.module-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-3);\n}\n.module-order[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-pill);\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-weight: 800;\n  font-size: var(--fs-sm);\n}\n.module-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.lesson-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.lesson-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 48px;\n  padding: var(--space-2) var(--space-2);\n  border-radius: var(--radius);\n  color: var(--color-ink);\n}\n.lesson-row[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  text-decoration: none;\n}\n.lesson-row[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-inset);\n}\n.lesson-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.lesson-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.lesson-go[_ngcontent-%COMP%] {\n  color: var(--color-faint);\n  font-size: var(--fs-lg);\n}\n.quiz-row[_ngcontent-%COMP%]   .lesson-title[_ngcontent-%COMP%] {\n  color: var(--color-brand-dark);\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom) + var(--space-5));\n  }\n  .ch-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=course-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseDetailComponent, { className: "CourseDetailComponent", filePath: "src/app/pages/course-detail/course-detail.component.ts", lineNumber: 20 });
})();
export {
  CourseDetailComponent
};
//# sourceMappingURL=course-detail.component-UWANDTAB.js.map
