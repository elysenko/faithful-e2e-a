import {
  ApiService
} from "./chunk-W2TRM4ZO.js";
import "./chunk-QKG44OY5.js";
import {
  CommonModule,
  RouterLink,
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

// src/app/pages/my-courses/my-courses.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/courses", a0];
function MyCoursesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your courses\u2026");
    \u0275\u0275elementEnd()();
  }
}
function MyCoursesComponent_Conditional_8_Template(rf, ctx) {
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
function MyCoursesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "You are not enrolled in any courses yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 8);
    \u0275\u0275text(6, "Explore the catalog");
    \u0275\u0275elementEnd()();
  }
}
function MyCoursesComponent_Conditional_10_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "\u2713 Completed");
    \u0275\u0275elementEnd();
  }
}
function MyCoursesComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 14)(12, "div", 15)(13, "span", 12);
    \u0275\u0275text(14, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "span", 2);
    \u0275\u0275elementStart(16, "span", 16);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 17);
    \u0275\u0275element(19, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, MyCoursesComponent_Conditional_10_For_2_Conditional_20_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const en_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, en_r2.courseId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(en_r2.course == null ? null : en_r2.course.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(en_r2.course == null ? null : en_r2.course.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4D6} ", (en_r2.course == null ? null : en_r2.course.lessonCount) || 0, " lessons");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4DD} ", (en_r2.course == null ? null : en_r2.course.quizCount) || 0, " quizzes");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", en_r2.progressPct || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", en_r2.progressPct || 0, "%");
    \u0275\u0275classProp("done", (en_r2.progressPct || 0) >= 100);
    \u0275\u0275advance();
    \u0275\u0275conditional(20, (en_r2.progressPct || 0) >= 100 ? 20 : -1);
  }
}
function MyCoursesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, MyCoursesComponent_Conditional_10_For_2_Template, 21, 13, "a", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.enrollments());
  }
}
var MyCoursesComponent = class _MyCoursesComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.enrollments = signal([
      {
        id: "e1",
        courseId: "c1",
        userId: "demo-student",
        progressPct: 40,
        course: {
          id: "c1",
          title: "Intro to Web Development",
          description: "HTML, CSS, and the fundamentals of the browser.",
          lessonCount: 3,
          quizCount: 1
        }
      },
      {
        id: "e2",
        courseId: "c2",
        userId: "demo-student",
        progressPct: 75,
        course: {
          id: "c2",
          title: "JavaScript Foundations",
          description: "Variables, functions, and control flow.",
          lessonCount: 8,
          quizCount: 2
        }
      },
      {
        id: "e3",
        courseId: "c3",
        userId: "demo-student",
        progressPct: 100,
        course: {
          id: "c3",
          title: "Design Thinking Essentials",
          description: "Empathise, frame, and prototype.",
          lessonCount: 5,
          quizCount: 1
        }
      }
    ]);
  }
  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
    this.api.myCourses().subscribe({
      next: (enrollments) => {
        this.enrollments.set(enrollments);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load your courses. Please try again.");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function MyCoursesComponent_Factory(t) {
      return new (t || _MyCoursesComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyCoursesComponent, selectors: [["app-my-courses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "page"], [1, "page-head"], [1, "spacer"], ["routerLink", "/", 1, "btn", "btn-outline", "btn-sm"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "enroll-list"], [1, "card", "enroll-card", 3, "routerLink"], [1, "ec-main"], [1, "muted"], [1, "ec-meta"], [1, "ec-progress"], [1, "row"], [1, "progress-pct"], [1, "progress-track"], [1, "progress-fill"], [1, "badge", "badge-ok"]], template: function MyCoursesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "My courses");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementStart(5, "a", 3);
        \u0275\u0275text(6, "Browse catalog");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, MyCoursesComponent_Conditional_7_Template, 4, 0, "div", 4)(8, MyCoursesComponent_Conditional_8_Template, 5, 1)(9, MyCoursesComponent_Conditional_9_Template, 7, 0)(10, MyCoursesComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.loading() ? 7 : ctx.error() ? 8 : ctx.enrollments().length === 0 ? 9 : 10);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--container);\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4) var(--space-8);\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.enroll-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.enroll-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-5);\n  align-items: center;\n  padding: var(--space-4);\n  color: var(--color-ink);\n  transition: box-shadow .15s, border-color .15s;\n}\n.enroll-card[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n}\n.ec-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.ec-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.ec-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n  margin-top: var(--space-1);\n}\n.ec-progress[_ngcontent-%COMP%] {\n  width: 220px;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.progress-pct[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--color-brand);\n}\n.progress-track[_ngcontent-%COMP%] {\n  height: 10px;\n  background: var(--color-surface-inset);\n  border-radius: var(--radius-pill);\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-brand);\n  border-radius: var(--radius-pill);\n  transition: width .3s ease;\n}\n.progress-fill.done[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom) + var(--space-5));\n  }\n  .enroll-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: var(--space-3);\n  }\n  .ec-progress[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=my-courses.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyCoursesComponent, { className: "MyCoursesComponent", filePath: "src/app/pages/my-courses/my-courses.component.ts", lineNumber: 18 });
})();
export {
  MyCoursesComponent
};
//# sourceMappingURL=my-courses.component-TA7ZN4GH.js.map
