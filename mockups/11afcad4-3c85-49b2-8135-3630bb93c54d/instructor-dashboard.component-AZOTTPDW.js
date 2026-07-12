import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-OG6PBVX4.js";
import {
  ApiService
} from "./chunk-W2TRM4ZO.js";
import "./chunk-QKG44OY5.js";
import {
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LGQVWVXM.js";

// src/app/pages/instructor-dashboard/instructor-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/instructor/courses", a0];
var _c1 = (a0) => ["/instructor/courses", a0, "gradebook"];
function InstructorDashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "label", 8);
    \u0275\u0275text(5, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorDashboardComponent_Conditional_9_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formTitle, $event) || (ctx_r1.formTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "label", 10);
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 11);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorDashboardComponent_Conditional_9_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formDescription, $event) || (ctx_r1.formDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 12)(12, "button", 13);
    \u0275\u0275listener("click", function InstructorDashboardComponent_Conditional_9_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 14);
    \u0275\u0275listener("click", function InstructorDashboardComponent_Conditional_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "Edit course" : "New course");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formTitle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formDescription);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.formTitle.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingId ? "Save changes" : "Create course", " ");
  }
}
function InstructorDashboardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading courses\u2026");
    \u0275\u0275elementEnd()();
  }
}
function InstructorDashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function InstructorDashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 17);
    \u0275\u0275text(2, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No courses yet. Create your first course.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorDashboardComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 23)(14, "a", 24);
    \u0275\u0275text(15, "Manage content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 24);
    \u0275\u0275text(17, "Gradebook");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 25);
    \u0275\u0275listener("click", function InstructorDashboardComponent_Conditional_13_For_2_Template_button_click_18_listener() {
      const course_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(course_r4));
    });
    \u0275\u0275text(19, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 26);
    \u0275\u0275listener("click", function InstructorDashboardComponent_Conditional_13_For_2_Template_button_click_20_listener() {
      const course_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(course_r4));
    });
    \u0275\u0275text(21, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4E6} ", course_r4.moduleCount || 0, " modules");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4D6} ", course_r4.lessonCount || 0, " lessons");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4DD} ", course_r4.quizCount || 0, " quizzes");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, course_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c1, course_r4.id));
  }
}
function InstructorDashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, InstructorDashboardComponent_Conditional_13_For_2_Template, 22, 11, "div", 19, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.courses());
  }
}
var InstructorDashboardComponent = class _InstructorDashboardComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.courses = signal([
      {
        id: "c1",
        title: "Intro to Web Development",
        description: "HTML, CSS, and the fundamentals of the browser.",
        moduleCount: 2,
        lessonCount: 3,
        quizCount: 1
      },
      {
        id: "c2",
        title: "JavaScript Foundations",
        description: "Variables, functions, and control flow.",
        moduleCount: 3,
        lessonCount: 8,
        quizCount: 2
      }
    ]);
    this.showForm = signal(false);
    this.editingId = null;
    this.formTitle = "";
    this.formDescription = "";
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
  openCreate() {
    this.editingId = null;
    this.formTitle = "";
    this.formDescription = "";
    this.showForm.set(true);
  }
  openEdit(course) {
    this.editingId = course.id;
    this.formTitle = course.title;
    this.formDescription = course.description;
    this.showForm.set(true);
  }
  cancel() {
    this.showForm.set(false);
  }
  save() {
    if (!this.formTitle.trim())
      return;
    const body = { title: this.formTitle.trim(), description: this.formDescription.trim() };
    if (this.editingId) {
      const id = this.editingId;
      this.api.updateCourse(id, body).subscribe({
        next: () => this.courses.update((cs) => cs.map((c) => c.id === id ? __spreadValues(__spreadValues({}, c), body) : c))
      });
    } else {
      this.api.createCourse(body).subscribe({
        next: (created) => this.courses.update((cs) => [...cs, created])
      });
      this.courses.update((cs) => [
        ...cs,
        __spreadProps(__spreadValues({ id: "new-" + cs.length }, body), { moduleCount: 0, lessonCount: 0, quizCount: 0 })
      ]);
    }
    this.showForm.set(false);
  }
  remove(course) {
    this.api.deleteCourse(course.id).subscribe({ error: () => {
    } });
    this.courses.update((cs) => cs.filter((c) => c.id !== course.id));
  }
  static {
    this.\u0275fac = function InstructorDashboardComponent_Factory(t) {
      return new (t || _InstructorDashboardComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorDashboardComponent, selectors: [["app-instructor-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 2, consts: [[1, "page"], [1, "page-head"], [1, "badge", "badge-brand"], [1, "spacer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "card", "course-form"], [1, "state"], [1, "field"], ["for", "title"], ["id", "title", "type", "text", "name", "title", "placeholder", "e.g. Intro to Web Development", 3, "ngModelChange", "ngModel"], ["for", "desc"], ["id", "desc", "name", "desc", "placeholder", "What will students learn?", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "course-list"], [1, "card", "course-row"], [1, "cr-main"], [1, "muted"], [1, "cr-meta"], [1, "cr-actions"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function InstructorDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Instructor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 2);
        \u0275\u0275text(5, "Courses");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "span", 3);
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function InstructorDashboardComponent_Template_button_click_7_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275text(8, "+ New course");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, InstructorDashboardComponent_Conditional_9_Template, 16, 5, "div", 5)(10, InstructorDashboardComponent_Conditional_10_Template, 4, 0, "div", 6)(11, InstructorDashboardComponent_Conditional_11_Template, 5, 1)(12, InstructorDashboardComponent_Conditional_12_Template, 5, 0)(13, InstructorDashboardComponent_Conditional_13_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(9, ctx.showForm() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.loading() ? 10 : ctx.error() ? 11 : ctx.courses().length === 0 ? 12 : 13);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--container);\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4) var(--space-8);\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.course-form[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.course-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  margin-bottom: var(--space-4);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  justify-content: flex-end;\n}\n.course-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.course-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  align-items: center;\n  padding: var(--space-4);\n}\n.cr-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.cr-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.cr-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-4);\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n  margin-top: var(--space-1);\n}\n.cr-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom) + var(--space-5));\n  }\n  .course-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .cr-actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=instructor-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorDashboardComponent, { className: "InstructorDashboardComponent", filePath: "src/app/pages/instructor-dashboard/instructor-dashboard.component.ts", lineNumber: 20 });
})();
export {
  InstructorDashboardComponent
};
//# sourceMappingURL=instructor-dashboard.component-AZOTTPDW.js.map
