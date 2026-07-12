import {
  RouterLink
} from "./chunk-GUFH4IQL.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-ILXJTYNR.js";

// src/app/pages/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/courses", a0];
function CatalogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "span", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading courses\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_Conditional_9_Template(rf, ctx) {
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
function CatalogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 5);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No courses are available yet.");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_Conditional_11_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Enrolled");
    \u0275\u0275elementEnd();
  }
}
function CatalogComponent_Conditional_11_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Continue");
    \u0275\u0275elementEnd();
  }
}
function CatalogComponent_Conditional_11_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_11_For_2_Conditional_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const course_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.enroll(course_r3, $event));
    });
    \u0275\u0275text(1, "Enroll");
    \u0275\u0275elementEnd();
  }
}
function CatalogComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 9)(2, "div", 10)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CatalogComponent_Conditional_11_For_2_Conditional_5_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CatalogComponent_Conditional_11_For_2_Conditional_11_Template, 2, 0, "span", 15)(12, CatalogComponent_Conditional_11_For_2_Conditional_12_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, course_r3.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(course_r3.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, course_r3.enrolled ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", course_r3.moduleCount, " modules \xB7 ", course_r3.lessonCount, " lessons");
    \u0275\u0275advance();
    \u0275\u0275conditional(11, course_r3.enrolled ? 11 : 12);
  }
}
function CatalogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_11_For_2_Template, 13, 9, "a", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.courses());
  }
}
var CatalogComponent = class _CatalogComponent {
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
        id: "c2",
        title: "Data Structures & Algorithms",
        description: "Master arrays, linked lists, trees, and the core algorithms every engineer should know.",
        moduleCount: 6,
        lessonCount: 20,
        enrolled: false,
        progressPct: 0
      },
      {
        id: "c3",
        title: "Designing for Accessibility",
        description: "Practical techniques for building inclusive interfaces that work for everyone.",
        moduleCount: 3,
        lessonCount: 9,
        enrolled: false,
        progressPct: 0
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
  enroll(course, ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.courses.update((list) => list.map((c) => c.id === course.id ? __spreadProps(__spreadValues({}, c), { enrolled: true }) : c));
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(t) {
      return new (t || _CatalogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "page-head"], [1, "muted"], ["routerLink", "/my-courses", 1, "btn", "btn-outline", "btn-sm"], [1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], [1, "grid"], [1, "card", "course-card", 3, "routerLink"], [1, "course-body"], [1, "course-top"], [1, "badge", "badge-ok"], [1, "muted", "course-desc"], [1, "course-foot"], [1, "muted", "meta"], [1, "btn", "btn-outline", "btn-sm"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Course Catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Browse courses and enroll to start learning.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "a", 2);
        \u0275\u0275text(7, "My Courses");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, CatalogComponent_Conditional_8_Template, 4, 0, "div", 3)(9, CatalogComponent_Conditional_9_Template, 5, 1)(10, CatalogComponent_Conditional_10_Template, 5, 0)(11, CatalogComponent_Conditional_11_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(8, ctx.loading() ? 8 : ctx.error() ? 9 : ctx.courses().length === 0 ? 10 : 11);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.course-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: var(--space-4);\n  color: inherit;\n  transition:\n    box-shadow .15s,\n    transform .05s,\n    border-color .15s;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n  text-decoration: none;\n}\n.course-card[_ngcontent-%COMP%]:active {\n  transform: scale(.995);\n}\n.course-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.course-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.course-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.course-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.course-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n  margin-top: var(--space-4);\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "src/app/pages/catalog/catalog.component.ts", lineNumber: 13 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=catalog.component-Z5CIPMGJ.js.map
