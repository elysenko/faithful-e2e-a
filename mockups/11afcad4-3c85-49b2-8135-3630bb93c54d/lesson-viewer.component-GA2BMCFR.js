import {
  ApiService
} from "./chunk-W2TRM4ZO.js";
import "./chunk-QKG44OY5.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LGQVWVXM.js";

// src/app/pages/lesson-viewer/lesson-viewer.component.ts
var _c0 = (a0) => ["/courses", a0];
function LessonViewerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading lesson\u2026");
    \u0275\u0275elementEnd()();
  }
}
function LessonViewerComponent_Conditional_4_Template(rf, ctx) {
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
function LessonViewerComponent_Conditional_5_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "\u2713 Completed");
    \u0275\u0275elementEnd();
  }
}
function LessonViewerComponent_Conditional_5_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const para_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(para_r2);
  }
}
function LessonViewerComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 6)(1, "div", 7)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LessonViewerComponent_Conditional_5_Conditional_0_Conditional_4_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275repeaterCreate(6, LessonViewerComponent_Conditional_5_Conditional_0_For_7_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "div", 11)(10, "span", 12);
    \u0275\u0275text(11, "Course progress");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "span", 13);
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 15);
    \u0275\u0275element(16, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 17);
    \u0275\u0275text(18, "Continue course");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r3.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r0.marked() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.paragraphs(l_r3.content));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.progressPct(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressPct(), "%");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, ctx_r0.courseId));
  }
}
function LessonViewerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LessonViewerComponent_Conditional_5_Conditional_0_Template, 19, 8);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.lesson()) ? 0 : -1, tmp_1_0);
  }
}
var LessonViewerComponent = class _LessonViewerComponent {
  constructor(api, route) {
    this.api = api;
    this.route = route;
    this.loading = signal(false);
    this.error = signal(null);
    this.marked = signal(false);
    this.progressPct = signal(40);
    this.lesson = signal({
      id: "l1",
      moduleId: "m1",
      order: 1,
      title: "What is HTML?",
      content: "HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a page using a series of elements that tell the browser how to display content.\n\nEvery HTML document starts with a <!DOCTYPE html> declaration and is built from nested elements such as headings, paragraphs, lists, links, and images.\n\nIn the next lesson we will look at how individual elements and their tags work together to give a page meaning and structure.",
      viewed: true
    });
    this.courseId = "";
    this.lessonId = "";
  }
  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get("id") ?? "";
    this.lessonId = this.route.snapshot.paramMap.get("lessonId") ?? "";
    this.loading.set(true);
    this.error.set(null);
    this.api.getLesson(this.lessonId).subscribe({
      next: (lesson) => {
        this.lesson.set(lesson);
        this.loading.set(false);
        this.api.viewLesson(this.lessonId).subscribe({
          next: (p) => {
            this.marked.set(true);
            this.progressPct.set(p.progressPct);
          },
          error: () => {
          }
        });
      },
      error: () => {
        this.error.set("Could not load this lesson. Please try again.");
        this.loading.set(false);
      }
    });
  }
  paragraphs(content) {
    return content.split("\n").filter((p) => p.trim().length > 0);
  }
  static {
    this.\u0275fac = function LessonViewerComponent_Factory(t) {
      return new (t || _LessonViewerComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LessonViewerComponent, selectors: [["app-lesson-viewer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [[1, "page"], [1, "back-link", 3, "routerLink"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "card", "lesson"], [1, "lesson-top"], [1, "badge", "badge-ok"], [1, "lesson-body"], [1, "lesson-foot", "card"], [1, "row"], [1, "muted"], [1, "spacer"], [1, "progress-pct"], [1, "progress-track"], [1, "progress-fill"], [1, "btn", "btn-primary", "btn-block", 3, "routerLink"]], template: function LessonViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to course");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, LessonViewerComponent_Conditional_3_Template, 4, 0, "div", 2)(4, LessonViewerComponent_Conditional_4_Template, 5, 1)(5, LessonViewerComponent_Conditional_5_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, ctx.courseId));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : 5);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4) var(--space-8);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.lesson[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  margin-bottom: var(--space-4);\n}\n.lesson-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.lesson-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  flex: 1;\n}\n.lesson-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.lesson-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-ink-soft);\n  font-size: var(--fs-md);\n  line-height: 1.7;\n}\n.lesson-foot[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.progress-pct[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--color-brand);\n}\n.progress-track[_ngcontent-%COMP%] {\n  height: 10px;\n  background: var(--color-surface-inset);\n  border-radius: var(--radius-pill);\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-brand);\n  border-radius: var(--radius-pill);\n  transition: width .3s ease;\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom) + var(--space-5));\n  }\n  .lesson[_ngcontent-%COMP%] {\n    padding: var(--space-4);\n  }\n}\n/*# sourceMappingURL=lesson-viewer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LessonViewerComponent, { className: "LessonViewerComponent", filePath: "src/app/pages/lesson-viewer/lesson-viewer.component.ts", lineNumber: 19 });
})();
export {
  LessonViewerComponent
};
//# sourceMappingURL=lesson-viewer.component-GA2BMCFR.js.map
