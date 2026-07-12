import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3GKCPY4W.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ILXJTYNR.js";

// src/app/pages/instructor/courses-list/courses-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/instructor/courses", a0, "edit"];
var _c1 = (a0) => ["/instructor/courses", a0, "gradebook"];
function CoursesListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "h3");
    \u0275\u0275text(2, "New course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "label", 6);
    \u0275\u0275text(5, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function CoursesListComponent_Conditional_8_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newTitle, $event) || (ctx_r1.newTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "label", 8);
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 9);
    \u0275\u0275twoWayListener("ngModelChange", function CoursesListComponent_Conditional_8_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newDescription, $event) || (ctx_r1.newDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 10);
    \u0275\u0275listener("click", function CoursesListComponent_Conditional_8_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275text(12, "Create course");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTitle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newDescription);
  }
}
function CoursesListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "span", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CoursesListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 12);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function CoursesListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 12);
    \u0275\u0275text(2, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "You have not created any courses yet.");
    \u0275\u0275elementEnd()();
  }
}
function CoursesListComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 1);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18)(9, "a", 19);
    \u0275\u0275text(10, "Edit content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 19);
    \u0275\u0275text(12, "Gradebook");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 20);
    \u0275\u0275listener("click", function CoursesListComponent_Conditional_12_For_2_Template_button_click_13_listener() {
      const course_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(course_r4));
    });
    \u0275\u0275text(14, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", course_r4.moduleCount, " modules \xB7 ", course_r4.lessonCount, " lessons");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, course_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, course_r4.id));
  }
}
function CoursesListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, CoursesListComponent_Conditional_12_For_2_Template, 15, 10, "div", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.courses());
  }
}
var CoursesListComponent = class _CoursesListComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.courses = signal([
      {
        id: "c1",
        title: "Intro to Web Development",
        description: "HTML, CSS, and JavaScript fundamentals.",
        moduleCount: 4,
        lessonCount: 12
      },
      {
        id: "c4",
        title: "Introduction to Machine Learning",
        description: "A gentle, hands-on tour of modern ML.",
        moduleCount: 5,
        lessonCount: 15
      }
    ]);
    this.showForm = signal(false);
    this.newTitle = "";
    this.newDescription = "";
  }
  toggleForm() {
    this.showForm.update((v) => !v);
  }
  create() {
    if (!this.newTitle.trim())
      return;
    const course = {
      id: "new-" + this.newTitle.toLowerCase().replace(/\s+/g, "-"),
      title: this.newTitle.trim(),
      description: this.newDescription.trim(),
      moduleCount: 0,
      lessonCount: 0
    };
    this.courses.update((list) => [...list, course]);
    this.newTitle = "";
    this.newDescription = "";
    this.showForm.set(false);
  }
  remove(course) {
    this.courses.update((list) => list.filter((c) => c.id !== course.id));
  }
  static {
    this.\u0275fac = function CoursesListComponent_Factory(t) {
      return new (t || _CoursesListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursesListComponent, selectors: [["app-instructor-courses-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 3, consts: [[1, "page-head"], [1, "muted"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "card", "create-form"], [1, "state"], [1, "field"], ["for", "title"], ["id", "title", "name", "title", "type", "text", "placeholder", "e.g. Intro to Python", 3, "ngModelChange", "ngModel"], ["for", "desc"], ["id", "desc", "name", "desc", "placeholder", "What will students learn?", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "spinner"], [1, "state-icon"], [1, "error"], [1, "course-rows"], [1, "card", "course-row"], [1, "course-info"], [1, "muted", "meta"], [1, "course-actions"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function CoursesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Your Courses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Create and manage the courses you teach.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 2);
        \u0275\u0275listener("click", function CoursesListComponent_Template_button_click_6_listener() {
          return ctx.toggleForm();
        });
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, CoursesListComponent_Conditional_8_Template, 13, 2, "section", 3)(9, CoursesListComponent_Conditional_9_Template, 4, 0, "div", 4)(10, CoursesListComponent_Conditional_10_Template, 5, 1)(11, CoursesListComponent_Conditional_11_Template, 5, 0)(12, CoursesListComponent_Conditional_12_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.showForm() ? "Cancel" : "+ New course", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.showForm() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.loading() ? 9 : ctx.error() ? 10 : ctx.courses().length === 0 ? 11 : 12);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.create-form[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  margin-bottom: var(--space-5);\n}\n.create-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-md);\n}\n.course-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.course-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-4) var(--space-5);\n  flex-wrap: wrap;\n}\n.course-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.course-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--space-1);\n}\n.course-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-1);\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.course-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=courses-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursesListComponent, { className: "CoursesListComponent", filePath: "src/app/pages/instructor/courses-list/courses-list.component.ts", lineNumber: 14 });
})();
export {
  CoursesListComponent
};
//# sourceMappingURL=courses-list.component-ND6DGWVY.js.map
