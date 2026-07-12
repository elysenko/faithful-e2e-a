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

// src/app/pages/instructor-course-editor/instructor-course-editor.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/instructor/courses", a0, "gradebook"];
var _c1 = () => [];
var _c2 = (a0) => ["/quizzes", a0];
function InstructorCourseEditorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading course\u2026");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseEditorComponent_Conditional_4_Template(rf, ctx) {
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
function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 19);
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_For_13_Template_button_click_6_listener() {
      const lesson_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const mod_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeLesson(mod_r4, lesson_r6));
    });
    \u0275\u0275text(7, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r6.order);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r6.title);
  }
}
function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24);
    \u0275\u0275text(1, "No lessons yet.");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23)(1, "span", 32);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "span", 19);
    \u0275\u0275elementStart(8, "a", 34);
    \u0275\u0275text(9, "Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 31);
    \u0275\u0275listener("click", function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_For_23_Template_button_click_10_listener() {
      const quiz_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const mod_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeQuiz(mod_r4, quiz_r8));
    });
    \u0275\u0275text(11, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const quiz_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(quiz_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", quiz_r8.attemptLimit, " attempt(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c2, quiz_r8.id));
  }
}
function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24);
    \u0275\u0275text(1, "No quizzes yet.");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 16)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 19);
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275listener("click", function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Template_button_click_7_listener() {
      const mod_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeModule(mod_r4));
    });
    \u0275\u0275text(8, "Delete module");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h4", 21);
    \u0275\u0275text(10, "\u{1F4D6} Lessons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 22);
    \u0275\u0275repeaterCreate(12, InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_For_13_Template, 8, 2, "li", 23, _forTrack0);
    \u0275\u0275template(14, InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Conditional_14_Template, 2, 0, "li", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 25)(16, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Template_input_ngModelChange_16_listener($event) {
      const mod_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.lessonDrafts[mod_r4.id], $event) || (ctx_r0.lessonDrafts[mod_r4.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 27);
    \u0275\u0275listener("click", function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Template_button_click_17_listener() {
      const mod_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addLesson(mod_r4));
    });
    \u0275\u0275text(18, "+ Lesson");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "h4", 21);
    \u0275\u0275text(20, "\u{1F4DD} Quizzes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ul", 22);
    \u0275\u0275repeaterCreate(22, InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_For_23_Template, 12, 5, "li", 23, _forTrack0);
    \u0275\u0275template(24, InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Conditional_24_Template, 2, 0, "li", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 25)(26, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Template_input_ngModelChange_26_listener($event) {
      const mod_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.quizDrafts[mod_r4.id], $event) || (ctx_r0.quizDrafts[mod_r4.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 27);
    \u0275\u0275listener("click", function InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Template_button_click_27_listener() {
      const mod_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addQuiz(mod_r4));
    });
    \u0275\u0275text(28, "+ Quiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mod_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mod_r4.order);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mod_r4.title);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(mod_r4.lessons || \u0275\u0275pureFunction0(8, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(14, (mod_r4.lessons || \u0275\u0275pureFunction0(9, _c1)).length === 0 ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", "lesson-" + mod_r4.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lessonDrafts[mod_r4.id]);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(mod_r4.quizzes || \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(24, (mod_r4.quizzes || \u0275\u0275pureFunction0(11, _c1)).length === 0 ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", "quiz-" + mod_r4.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.quizDrafts[mod_r4.id]);
  }
}
function InstructorCourseEditorComponent_Conditional_5_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No modules yet. Add your first module above.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseEditorComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 6)(1, "div")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 7);
    \u0275\u0275text(5, "Manage modules, lessons, quizzes and questions.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 8);
    \u0275\u0275text(7, "View gradebook");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9)(9, "div", 10)(10, "label", 11);
    \u0275\u0275text(11, "New module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12)(13, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditorComponent_Conditional_5_Conditional_0_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newModuleTitle, $event) || (ctx_r0.newModuleTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 14);
    \u0275\u0275listener("click", function InstructorCourseEditorComponent_Conditional_5_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addModule());
    });
    \u0275\u0275text(15, "Add module");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275repeaterCreate(17, InstructorCourseEditorComponent_Conditional_5_Conditional_0_For_18_Template, 29, 12, "section", 16, _forTrack0);
    \u0275\u0275template(19, InstructorCourseEditorComponent_Conditional_5_Conditional_0_Conditional_19_Template, 5, 0, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r9.title);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, c_r9.id));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newModuleTitle);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.newModuleTitle.trim());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(c_r9.modules || \u0275\u0275pureFunction0(7, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(19, (c_r9.modules || \u0275\u0275pureFunction0(8, _c1)).length === 0 ? 19 : -1);
  }
}
function InstructorCourseEditorComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InstructorCourseEditorComponent_Conditional_5_Conditional_0_Template, 20, 9);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.course()) ? 0 : -1, tmp_1_0);
  }
}
var InstructorCourseEditorComponent = class _InstructorCourseEditorComponent {
  constructor(api, route) {
    this.api = api;
    this.route = route;
    this.loading = signal(false);
    this.error = signal(null);
    this.course = signal({
      id: "c1",
      title: "Intro to Web Development",
      description: "HTML, CSS, and the fundamentals of the browser.",
      modules: [
        {
          id: "m1",
          courseId: "c1",
          order: 1,
          title: "HTML Basics",
          lessons: [
            { id: "l1", moduleId: "m1", order: 1, title: "What is HTML?", content: "" },
            { id: "l2", moduleId: "m1", order: 2, title: "Elements & Tags", content: "" }
          ],
          quizzes: []
        },
        {
          id: "m2",
          courseId: "c1",
          order: 2,
          title: "Styling with CSS",
          lessons: [{ id: "l3", moduleId: "m2", order: 1, title: "Selectors & Properties", content: "" }],
          quizzes: [{ id: "q1", moduleId: "m2", title: "CSS Fundamentals Quiz", attemptLimit: 1 }]
        }
      ]
    });
    this.courseId = "";
    this.newModuleTitle = "";
    this.lessonDrafts = {};
    this.quizDrafts = {};
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
  patchModules(fn) {
    const c = this.course();
    if (!c)
      return;
    this.course.set(__spreadProps(__spreadValues({}, c), { modules: fn(c.modules ?? []) }));
  }
  addModule() {
    const title = this.newModuleTitle.trim();
    if (!title)
      return;
    const order = (this.course()?.modules?.length ?? 0) + 1;
    this.api.createModule(this.courseId, { title, order }).subscribe({ error: () => {
    } });
    this.patchModules((mods) => [
      ...mods,
      { id: "m-new-" + mods.length, courseId: this.courseId, order, title, lessons: [], quizzes: [] }
    ]);
    this.newModuleTitle = "";
  }
  removeModule(mod) {
    this.api.deleteModule(mod.id).subscribe({ error: () => {
    } });
    this.patchModules((mods) => mods.filter((m) => m.id !== mod.id));
  }
  addLesson(mod) {
    const title = (this.lessonDrafts[mod.id] ?? "").trim();
    if (!title)
      return;
    const order = (mod.lessons?.length ?? 0) + 1;
    this.api.createLesson(mod.id, { title, order, content: "" }).subscribe({ error: () => {
    } });
    const lesson = { id: "l-new-" + order, moduleId: mod.id, order, title, content: "" };
    this.patchModules((mods) => mods.map((m) => m.id === mod.id ? __spreadProps(__spreadValues({}, m), { lessons: [...m.lessons ?? [], lesson] }) : m));
    this.lessonDrafts[mod.id] = "";
  }
  removeLesson(mod, lesson) {
    this.api.deleteLesson(lesson.id).subscribe({ error: () => {
    } });
    this.patchModules((mods) => mods.map((m) => m.id === mod.id ? __spreadProps(__spreadValues({}, m), { lessons: (m.lessons ?? []).filter((l) => l.id !== lesson.id) }) : m));
  }
  addQuiz(mod) {
    const title = (this.quizDrafts[mod.id] ?? "").trim();
    if (!title)
      return;
    this.api.createQuiz(mod.id, { title, attemptLimit: 1 }).subscribe({ error: () => {
    } });
    const quiz = { id: "q-new-" + (mod.quizzes?.length ?? 0), moduleId: mod.id, title, attemptLimit: 1 };
    this.patchModules((mods) => mods.map((m) => m.id === mod.id ? __spreadProps(__spreadValues({}, m), { quizzes: [...m.quizzes ?? [], quiz] }) : m));
    this.quizDrafts[mod.id] = "";
  }
  removeQuiz(mod, quiz) {
    this.api.deleteQuiz(quiz.id).subscribe({ error: () => {
    } });
    this.patchModules((mods) => mods.map((m) => m.id === mod.id ? __spreadProps(__spreadValues({}, m), { quizzes: (m.quizzes ?? []).filter((q) => q.id !== quiz.id) }) : m));
  }
  static {
    this.\u0275fac = function InstructorCourseEditorComponent_Factory(t) {
      return new (t || _InstructorCourseEditorComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorCourseEditorComponent, selectors: [["app-instructor-course-editor"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "page"], ["routerLink", "/instructor", 1, "back-link"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "editor-head"], [1, "muted"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], [1, "card", "add-module"], [1, "field", "add-field"], ["for", "newmod"], [1, "add-row"], ["id", "newmod", "type", "text", "name", "newmod", "placeholder", "Module title", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "modules"], [1, "card", "module"], [1, "module-head"], [1, "module-order"], [1, "spacer"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "sub-head"], [1, "item-list"], [1, "item-row"], [1, "item-empty", "muted"], [1, "add-row", "inline"], ["type", "text", "placeholder", "New lesson title", 3, "ngModelChange", "name", "ngModel"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], ["type", "text", "placeholder", "New quiz title", 3, "ngModelChange", "name", "ngModel"], [1, "item-order"], [1, "item-title"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "item-icon"], [1, "badge", "badge-muted"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"]], template: function InstructorCourseEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to instructor dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, InstructorCourseEditorComponent_Conditional_3_Template, 4, 0, "div", 2)(4, InstructorCourseEditorComponent_Conditional_4_Template, 5, 1)(5, InstructorCourseEditorComponent_Conditional_5_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : 5);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 840px;\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4) var(--space-8);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.editor-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.editor-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.editor-head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.add-module[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.add-field[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.add-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n}\n.add-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  font-size: 16px;\n  font-family: inherit;\n  background: var(--color-surface);\n}\n.add-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-brand);\n  box-shadow: 0 0 0 3px var(--color-brand-light);\n}\n.add-row.inline[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  margin-bottom: var(--space-4);\n}\n.modules[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.module[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n}\n.module-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-3);\n}\n.module-order[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-pill);\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-weight: 800;\n  font-size: var(--fs-sm);\n}\n.module-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.sub-head[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  text-transform: uppercase;\n  letter-spacing: .03em;\n  margin: var(--space-3) 0 var(--space-2);\n}\n.item-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 44px;\n  padding: 0 var(--space-2);\n  border-radius: var(--radius);\n  background: var(--color-surface-alt);\n}\n.item-order[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border-radius: var(--radius-pill);\n  background: var(--color-surface-inset);\n  color: var(--color-muted);\n  font-size: var(--fs-xs);\n  font-weight: 700;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.item-empty[_ngcontent-%COMP%] {\n  padding: var(--space-2);\n  font-size: var(--fs-sm);\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom) + var(--space-5));\n  }\n  .add-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .editor-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=instructor-course-editor.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorCourseEditorComponent, { className: "InstructorCourseEditorComponent", filePath: "src/app/pages/instructor-course-editor/instructor-course-editor.component.ts", lineNumber: 20 });
})();
export {
  InstructorCourseEditorComponent
};
//# sourceMappingURL=instructor-course-editor.component-6LY5FYN6.js.map
