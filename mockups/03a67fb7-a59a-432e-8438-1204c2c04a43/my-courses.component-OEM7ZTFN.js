import {
  RouterLink
} from "./chunk-GUFH4IQL.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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

// src/app/pages/my-courses/my-courses.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/courses", a0];
function MyCoursesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "span", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your courses\u2026");
    \u0275\u0275elementEnd()();
  }
}
function MyCoursesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 5);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function MyCoursesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 5);
    \u0275\u0275text(2, "\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "You haven't enrolled in any courses yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 2);
    \u0275\u0275text(6, "Explore the catalog");
    \u0275\u0275elementEnd()();
  }
}
function MyCoursesComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 9)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12)(8, "span", 13);
    \u0275\u0275text(9, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 15);
    \u0275\u0275element(13, "span");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, course_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r2.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", course_r2.progressPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", course_r2.progressPct, "%");
  }
}
function MyCoursesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, MyCoursesComponent_Conditional_11_For_2_Template, 14, 8, "a", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.courses());
  }
}
var MyCoursesComponent = class _MyCoursesComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.courses = signal([
      {
        id: "c1",
        title: "Intro to Web Development",
        description: "Learn HTML, CSS, and JavaScript fundamentals to build your first responsive website.",
        moduleCount: 4,
        lessonCount: 12,
        enrolled: true,
        progressPct: 45
      },
      {
        id: "c4",
        title: "Introduction to Machine Learning",
        description: "From linear regression to neural networks \u2014 a gentle, hands-on tour of modern ML.",
        moduleCount: 5,
        lessonCount: 15,
        enrolled: true,
        progressPct: 10
      }
    ]);
  }
  static {
    this.\u0275fac = function MyCoursesComponent_Factory(t) {
      return new (t || _MyCoursesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyCoursesComponent, selectors: [["app-my-courses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "page-head"], [1, "muted"], ["routerLink", "/catalog", 1, "btn", "btn-primary", "btn-sm"], [1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], [1, "grid"], [1, "card", "course-card", 3, "routerLink"], [1, "course-body"], [1, "muted", "course-desc"], [1, "progress-block"], [1, "progress-row"], [1, "muted", "meta"], [1, "pct"], [1, "progress"]], template: function MyCoursesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "My Courses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Pick up where you left off.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "a", 2);
        \u0275\u0275text(7, "Browse Catalog");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, MyCoursesComponent_Conditional_8_Template, 4, 0, "div", 3)(9, MyCoursesComponent_Conditional_9_Template, 5, 1)(10, MyCoursesComponent_Conditional_10_Template, 7, 0)(11, MyCoursesComponent_Conditional_11_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(8, ctx.loading() ? 8 : ctx.error() ? 9 : ctx.courses().length === 0 ? 10 : 11);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.course-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-4);\n  color: inherit;\n  transition: box-shadow .15s, border-color .15s;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n  text-decoration: none;\n}\n.course-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.course-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.course-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.progress-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.progress-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.pct[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--fs-sm);\n  color: var(--color-brand);\n}\n/*# sourceMappingURL=my-courses.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyCoursesComponent, { className: "MyCoursesComponent", filePath: "src/app/pages/my-courses/my-courses.component.ts", lineNumber: 13 });
})();
export {
  MyCoursesComponent
};
//# sourceMappingURL=my-courses.component-OEM7ZTFN.js.map
