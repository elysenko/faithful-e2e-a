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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LGQVWVXM.js";

// src/app/pages/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/courses", a0];
function CatalogComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading courses\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
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
function CatalogComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No courses published yet. Check back soon.");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_Conditional_18_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", course_r2.quizCount, " quiz", course_r2.quizCount === 1 ? "" : "zes", "");
  }
}
function CatalogComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12)(1, "div", 13)(2, "span", 2);
    \u0275\u0275text(3, "Course");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CatalogComponent_Conditional_18_For_2_Conditional_4_Template, 2, 2, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "span", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, course_r2.id));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(4, course_r2.quizCount ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4E6} ", course_r2.moduleCount || 0, " modules");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4D6} ", course_r2.lessonCount || 0, " lessons");
  }
}
function CatalogComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_18_For_2_Template, 14, 8, "a", 12, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.courses());
  }
}
var CatalogComponent = class _CatalogComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.courses = signal([
      {
        id: "c1",
        title: "Intro to Web Development",
        description: "Build your first web pages from scratch. Learn HTML structure, CSS styling, and the fundamentals of how the browser renders your work.",
        moduleCount: 2,
        lessonCount: 3,
        quizCount: 1
      },
      {
        id: "c2",
        title: "JavaScript Foundations",
        description: "Master variables, functions, and control flow. A hands-on path from your first console.log to writing real interactive logic.",
        moduleCount: 3,
        lessonCount: 8,
        quizCount: 2
      },
      {
        id: "c3",
        title: "Design Thinking Essentials",
        description: "A practical introduction to empathising with users, framing problems, and prototyping solutions that people actually want.",
        moduleCount: 2,
        lessonCount: 5,
        quizCount: 1
      },
      {
        id: "c4",
        title: "Data Literacy for Everyone",
        description: "Read charts with confidence, spot misleading statistics, and turn raw numbers into a story your team can act on.",
        moduleCount: 4,
        lessonCount: 10,
        quizCount: 3
      }
    ]);
  }
  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
    this.api.listCourses().subscribe({
      next: (courses) => {
        this.courses.set(courses);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load courses. Please try again.");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(t) {
      return new (t || _CatalogComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 1, consts: [[1, "hero"], [1, "hero-inner"], [1, "badge", "badge-brand"], ["routerLink", "/my-courses", 1, "btn", "btn-primary"], [1, "page"], [1, "page-head"], [1, "spacer"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "grid"], [1, "card", "course-card", 3, "routerLink"], [1, "cc-top"], [1, "badge", "badge-muted"], [1, "cc-title"], [1, "cc-desc"], [1, "cc-foot"], [1, "cc-meta"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "LearnLoop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Learn something new, one loop at a time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Browse hands-on courses, enroll in a tap, and watch your progress climb as you complete lessons and pass quizzes.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 3);
        \u0275\u0275text(9, "My courses");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 4)(11, "div", 5)(12, "h1");
        \u0275\u0275text(13, "Course catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, CatalogComponent_Conditional_15_Template, 4, 0, "div", 7)(16, CatalogComponent_Conditional_16_Template, 5, 1)(17, CatalogComponent_Conditional_17_Template, 5, 0)(18, CatalogComponent_Conditional_18_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275conditional(15, ctx.loading() ? 15 : ctx.error() ? 16 : ctx.courses().length === 0 ? 17 : 18);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 15% 20%,\n      var(--color-brand-light),\n      transparent 45%),\n    radial-gradient(\n      circle at 85% 80%,\n      var(--color-accent-light),\n      transparent 45%),\n    var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--container);\n  margin: 0 auto;\n  padding: var(--space-8) var(--space-4);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--space-3);\n}\n.hero-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  max-width: 18ch;\n}\n.hero-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  max-width: 52ch;\n  font-size: var(--fs-md);\n}\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--container);\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4) var(--space-8);\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--space-4);\n}\n.course-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: var(--space-4);\n  color: var(--color-ink);\n  transition:\n    box-shadow .15s,\n    transform .05s,\n    border-color .15s;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n}\n.course-card[_ngcontent-%COMP%]:active {\n  transform: scale(.99);\n}\n.cc-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.cc-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.cc-desc[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-size: var(--fs-base);\n  flex: 1;\n}\n.cc-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  margin-top: var(--space-2);\n}\n.cc-meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom) + var(--space-5));\n  }\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "src/app/pages/catalog/catalog.component.ts", lineNumber: 18 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=catalog.component-MIWX7RYM.js.map
