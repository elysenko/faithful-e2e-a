import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-3GKCPY4W.js";
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ILXJTYNR.js";

// src/app/pages/instructor/course-editor/course-editor.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/instructor/courses", a0, "gradebook"];
function CourseEditorComponent_For_12_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 28)(1, "span", 37);
    \u0275\u0275text(2, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 39);
    \u0275\u0275listener("click", function CourseEditorComponent_For_12_For_17_Template_button_click_5_listener() {
      const lesson_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const mod_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLesson(mod_r2, lesson_r5));
    });
    \u0275\u0275text(6, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(lesson_r5.title);
  }
}
function CourseEditorComponent_For_12_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29);
    \u0275\u0275text(1, "No lessons yet.");
    \u0275\u0275elementEnd();
  }
}
function CourseEditorComponent_For_12_For_30_For_12_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "correct");
    \u0275\u0275elementEnd();
  }
}
function CourseEditorComponent_For_12_For_30_For_12_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275template(2, CourseEditorComponent_For_12_For_30_For_12_For_5_Conditional_2_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    const i_r12 = ctx.$index;
    const q_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("correct", i_r12 === q_r13.correctIdx);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r11, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, i_r12 === q_r13.correctIdx ? 2 : -1);
  }
}
function CourseEditorComponent_For_12_For_30_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 49);
    \u0275\u0275repeaterCreate(4, CourseEditorComponent_For_12_For_30_For_12_For_5_Template, 3, 4, "li", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r13.text);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(q_r13.options);
  }
}
function CourseEditorComponent_For_12_For_30_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29);
    \u0275\u0275text(1, "No questions yet.");
    \u0275\u0275elementEnd();
  }
}
function CourseEditorComponent_For_12_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 40)(2, "span", 37);
    \u0275\u0275text(3, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 39);
    \u0275\u0275listener("click", function CourseEditorComponent_For_12_For_30_Template_button_click_8_listener() {
      const quiz_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const mod_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeQuiz(mod_r2, quiz_r10));
    });
    \u0275\u0275text(9, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ol", 42);
    \u0275\u0275repeaterCreate(11, CourseEditorComponent_For_12_For_30_For_12_Template, 6, 1, "li", null, _forTrack0);
    \u0275\u0275template(13, CourseEditorComponent_For_12_For_30_Conditional_13_Template, 2, 0, "li", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "form", 43, 6);
    \u0275\u0275listener("ngSubmit", function CourseEditorComponent_For_12_For_30_Template_form_ngSubmit_14_listener() {
      const quiz_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const qfEl_r14 = \u0275\u0275reference(15);
      const qt_r15 = \u0275\u0275reference(17);
      const qo_r16 = \u0275\u0275reference(19);
      const qc_r17 = \u0275\u0275reference(22);
      const mod_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addQuestion(mod_r2, quiz_r10, qt_r15.value, qo_r16.value, qc_r17.value, qfEl_r14));
    });
    \u0275\u0275element(16, "input", 44, 7)(18, "textarea", 45, 8);
    \u0275\u0275elementStart(20, "div", 46);
    \u0275\u0275element(21, "input", 47, 9);
    \u0275\u0275elementStart(23, "button", 33);
    \u0275\u0275text(24, "+ Question");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_33_0;
    const quiz_r10 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(quiz_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", quiz_r10.attemptLimit, " attempt(s)");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(quiz_r10.questions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(13, ((tmp_33_0 = quiz_r10.questions == null ? null : quiz_r10.questions.length) !== null && tmp_33_0 !== void 0 ? tmp_33_0 : 0) === 0 ? 13 : -1);
  }
}
function CourseEditorComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 20)(2, "h2")(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22)(7, "button", 23);
    \u0275\u0275listener("click", function CourseEditorComponent_For_12_Template_button_click_7_listener() {
      const mod_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.moveModule(mod_r2, -1));
    });
    \u0275\u0275text(8, "\u2191");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 24);
    \u0275\u0275listener("click", function CourseEditorComponent_For_12_Template_button_click_9_listener() {
      const mod_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.moveModule(mod_r2, 1));
    });
    \u0275\u0275text(10, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 25);
    \u0275\u0275listener("click", function CourseEditorComponent_For_12_Template_button_click_11_listener() {
      const mod_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeModule(mod_r2));
    });
    \u0275\u0275text(12, "Delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "h4", 26);
    \u0275\u0275text(14, "Lessons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ul", 27);
    \u0275\u0275repeaterCreate(16, CourseEditorComponent_For_12_For_17_Template, 7, 1, "li", 28, _forTrack0);
    \u0275\u0275template(18, CourseEditorComponent_For_12_Conditional_18_Template, 2, 0, "li", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "form", 30, 0);
    \u0275\u0275listener("ngSubmit", function CourseEditorComponent_For_12_Template_form_ngSubmit_19_listener() {
      const mod_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const lfEl_r6 = \u0275\u0275reference(20);
      const lt_r7 = \u0275\u0275reference(22);
      const lc_r8 = \u0275\u0275reference(24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addLesson(mod_r2, lt_r7.value, lc_r8.value, lfEl_r6));
    });
    \u0275\u0275element(21, "input", 31, 1)(23, "input", 32, 2);
    \u0275\u0275elementStart(25, "button", 33);
    \u0275\u0275text(26, "+ Lesson");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "h4", 26);
    \u0275\u0275text(28, "Quizzes");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(29, CourseEditorComponent_For_12_For_30_Template, 25, 3, "div", 34, _forTrack0);
    \u0275\u0275elementStart(31, "form", 30, 3);
    \u0275\u0275listener("ngSubmit", function CourseEditorComponent_For_12_Template_form_ngSubmit_31_listener() {
      const mod_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const qzEl_r18 = \u0275\u0275reference(32);
      const qzt_r19 = \u0275\u0275reference(34);
      const qzl_r20 = \u0275\u0275reference(36);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addQuiz(mod_r2, qzt_r19.value, qzl_r20.value, qzEl_r18));
    });
    \u0275\u0275element(33, "input", 35, 4)(35, "input", 36, 5);
    \u0275\u0275elementStart(37, "button", 33);
    \u0275\u0275text(38, "+ Quiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mod_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("M", mod_r2.order, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mod_r2.title, "");
    \u0275\u0275advance(11);
    \u0275\u0275repeater(mod_r2.lessons);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(18, mod_r2.lessons.length === 0 ? 18 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(mod_r2.quizzes);
  }
}
var CourseEditorComponent = class _CourseEditorComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.courseId = "c1";
    this.courseTitle = signal("Intro to Web Development");
    this.courseDescription = signal("HTML, CSS, and JavaScript fundamentals.");
    this.modules = signal([
      {
        id: "m1",
        courseId: "c1",
        order: 1,
        title: "Getting Started with HTML",
        lessons: [
          { id: "l1", moduleId: "m1", order: 1, title: "What is HTML?", content: "HTML is the structure of the web." },
          { id: "l2", moduleId: "m1", order: 2, title: "Structure of a Page", content: "Head and body sections." }
        ],
        quizzes: [
          {
            id: "q1",
            moduleId: "m1",
            title: "HTML Basics Quiz",
            attemptLimit: 2,
            questions: [
              { id: "qq1", quizId: "q1", text: "What does HTML stand for?", options: ["HyperText Markup Language", "Hot Mail", "How To Make Lists"], correctIdx: 0 },
              { id: "qq2", quizId: "q1", text: "Which tag defines a paragraph?", options: ["<p>", "<par>", "<text>"], correctIdx: 0 }
            ]
          }
        ]
      },
      {
        id: "m2",
        courseId: "c1",
        order: 2,
        title: "Styling with CSS",
        lessons: [
          { id: "l3", moduleId: "m2", order: 1, title: "Selectors & the Box Model", content: "How CSS targets elements." }
        ],
        quizzes: []
      }
    ]);
    this.newModuleTitle = "";
  }
  addModule() {
    const title = this.newModuleTitle.trim();
    if (!title)
      return;
    const order = this.modules().length + 1;
    this.modules.update((m) => [
      ...m,
      { id: "m-new-" + order, courseId: this.courseId, order, title, lessons: [], quizzes: [] }
    ]);
    this.newModuleTitle = "";
  }
  removeModule(mod) {
    this.modules.update((m) => m.filter((x) => x.id !== mod.id));
  }
  moveModule(mod, dir) {
    this.modules.update((list) => {
      const arr = [...list];
      const i = arr.findIndex((x) => x.id === mod.id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= arr.length)
        return list;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      return arr.map((x, idx) => __spreadProps(__spreadValues({}, x), { order: idx + 1 }));
    });
  }
  // ---- Lessons ----
  addLesson(mod, title, content, form) {
    if (!title.trim())
      return;
    const lesson = {
      id: `${mod.id}-l-${mod.lessons.length + 1}-${title.length}`,
      moduleId: mod.id,
      order: mod.lessons.length + 1,
      title: title.trim(),
      content: content.trim()
    };
    this.updateModule(mod.id, (m) => __spreadProps(__spreadValues({}, m), { lessons: [...m.lessons, lesson] }));
    form.reset();
  }
  removeLesson(mod, lesson) {
    this.updateModule(mod.id, (m) => __spreadProps(__spreadValues({}, m), { lessons: m.lessons.filter((l) => l.id !== lesson.id) }));
  }
  // ---- Quizzes ----
  addQuiz(mod, title, limit, form) {
    if (!title.trim())
      return;
    const quiz = {
      id: "q-new-" + mod.quizzes.length,
      moduleId: mod.id,
      title: title.trim(),
      attemptLimit: Math.max(1, parseInt(limit, 10) || 1),
      questions: []
    };
    this.updateModule(mod.id, (m) => __spreadProps(__spreadValues({}, m), { quizzes: [...m.quizzes, quiz] }));
    form.reset();
  }
  removeQuiz(mod, quiz) {
    this.updateModule(mod.id, (m) => __spreadProps(__spreadValues({}, m), { quizzes: m.quizzes.filter((q) => q.id !== quiz.id) }));
  }
  addQuestion(mod, quiz, text, opts, correct, form) {
    const options = opts.split("\n").map((o) => o.trim()).filter(Boolean);
    if (!text.trim() || options.length < 2)
      return;
    const correctIdx = Math.min(Math.max(0, parseInt(correct, 10) - 1 || 0), options.length - 1);
    const question = {
      id: "qq-new-" + (quiz.questions?.length ?? 0),
      quizId: quiz.id,
      text: text.trim(),
      options,
      correctIdx
    };
    this.updateModule(mod.id, (m) => __spreadProps(__spreadValues({}, m), {
      quizzes: m.quizzes.map((q) => q.id === quiz.id ? __spreadProps(__spreadValues({}, q), { questions: [...q.questions ?? [], question] }) : q)
    }));
    form.reset();
  }
  updateModule(id, fn) {
    this.modules.update((list) => list.map((m) => m.id === id ? fn(m) : m));
  }
  static {
    this.\u0275fac = function CourseEditorComponent_Factory(t) {
      return new (t || _CourseEditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseEditorComponent, selectors: [["app-course-editor"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 5, consts: [["lfEl", ""], ["lt", ""], ["lc", ""], ["qzEl", ""], ["qzt", ""], ["qzl", ""], ["qfEl", ""], ["qt", ""], ["qo", ""], ["qc", ""], ["routerLink", "/instructor/courses", 1, "back", "muted"], [1, "page-head"], [1, "muted"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], [1, "modules"], [1, "card", "module"], [1, "card", "add-module"], [1, "row", "wrap"], ["type", "text", "name", "nm", "placeholder", "Module title", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "module-head"], [1, "order"], [1, "module-tools"], ["type", "button", "aria-label", "Move up", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "button", "aria-label", "Move down", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "sub"], [1, "items"], [1, "item"], [1, "muted", "empty"], [1, "add-form", 3, "ngSubmit"], ["name", "lt", "type", "text", "placeholder", "Lesson title"], ["name", "lc", "type", "text", "placeholder", "Lesson content"], ["type", "submit", 1, "btn", "btn-outline", "btn-sm"], [1, "quiz"], ["name", "qzt", "type", "text", "placeholder", "Quiz title"], ["name", "qzl", "type", "number", "min", "1", "value", "1", "placeholder", "Attempt limit", 1, "narrow"], [1, "item-icon"], [1, "item-title"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "quiz-head"], [1, "badge", "badge-muted"], [1, "questions"], [1, "add-form", "vertical", 3, "ngSubmit"], ["name", "qt", "type", "text", "placeholder", "Question text"], ["name", "qo", "placeholder", "One option per line"], [1, "row"], ["name", "qc", "type", "number", "min", "1", "placeholder", "Correct option # (e.g. 1)", 1, "narrow"], [1, "q-text"], [1, "opts"], [3, "correct"], [1, "badge", "badge-ok"]], template: function CourseEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 10);
        \u0275\u0275text(1, "\u2190 Back to courses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "header", 11)(3, "div")(4, "h1");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 12);
        \u0275\u0275text(7, "Add and organize modules, lessons and quizzes.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "a", 13);
        \u0275\u0275text(9, "View gradebook");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 14);
        \u0275\u0275repeaterCreate(11, CourseEditorComponent_For_12_Template, 39, 3, "section", 15, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "section", 16)(14, "h3");
        \u0275\u0275text(15, "Add a module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 17)(17, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function CourseEditorComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newModuleTitle, $event) || (ctx.newModuleTitle = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 19);
        \u0275\u0275listener("click", function CourseEditorComponent_Template_button_click_18_listener() {
          return ctx.addModule();
        });
        \u0275\u0275text(19, "+ Add module");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("Edit: ", ctx.courseTitle(), "");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, ctx.courseId));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.modules());
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.newModuleTitle);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.modules[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.module[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.module-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-3);\n}\n.module-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.order[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  font-weight: 800;\n  color: var(--color-brand);\n}\n.module-tools[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-1);\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  color: var(--color-muted);\n  margin: var(--space-4) 0 var(--space-2);\n}\n.items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 var(--space-2);\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-1) 0;\n}\n.item-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: var(--space-2) 0;\n  font-size: var(--fs-sm);\n}\n.quiz[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  padding: var(--space-3);\n  margin-bottom: var(--space-3);\n  background: var(--color-surface-alt);\n}\n.quiz-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-2);\n}\n.questions[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n  padding-left: var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.q-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.opts[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: var(--space-1) 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.opts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n}\n.opts[_ngcontent-%COMP%]   li.correct[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-weight: 600;\n}\n.add-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: var(--space-3);\n}\n.add-form.vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: stretch;\n}\n.add-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  min-height: 40px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  font-size: 16px;\n  font-family: inherit;\n  background: var(--color-surface);\n}\n.add-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 72px;\n  padding: var(--space-2) var(--space-3);\n  resize: vertical;\n}\n.add-form[_ngcontent-%COMP%]   .narrow[_ngcontent-%COMP%] {\n  flex: none;\n  width: 160px;\n}\n.add-module[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  margin-top: var(--space-5);\n}\n.add-module[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-md);\n}\n.add-module[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  font-size: 16px;\n  font-family: inherit;\n}\n/*# sourceMappingURL=course-editor.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseEditorComponent, { className: "CourseEditorComponent", filePath: "src/app/pages/instructor/course-editor/course-editor.component.ts", lineNumber: 14 });
})();
export {
  CourseEditorComponent
};
//# sourceMappingURL=course-editor.component-JNY7TJ6L.js.map
