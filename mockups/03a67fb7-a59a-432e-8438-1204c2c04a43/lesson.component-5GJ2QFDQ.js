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
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ILXJTYNR.js";

// src/app/pages/lesson/lesson.component.ts
var _c0 = (a0) => ["/courses", a0];
function LessonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "span", 1);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading lesson\u2026");
    \u0275\u0275elementEnd()();
  }
}
function LessonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 2);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LessonComponent_Conditional_2_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "\u2713 Marked complete");
    \u0275\u0275elementEnd();
  }
}
function LessonComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1, "\u2190 Back to course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "article", 5)(3, "header", 6)(4, "span", 7);
    \u0275\u0275text(5, "Lesson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, LessonComponent_Conditional_2_Conditional_0_Conditional_8_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 9);
    \u0275\u0275elementStart(10, "footer", 10)(11, "a", 11);
    \u0275\u0275text(12, "Back to course");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, ctx_r0.courseId));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(l_r2.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, ctx_r0.marked() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", l_r2.content, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, ctx_r0.courseId));
  }
}
function LessonComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 2);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Lesson not found.");
    \u0275\u0275elementEnd()();
  }
}
function LessonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LessonComponent_Conditional_2_Conditional_0_Template, 13, 9)(1, LessonComponent_Conditional_2_Conditional_1_Template, 5, 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.lesson()) ? 0 : 1, tmp_1_0);
  }
}
var LessonComponent = class _LessonComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.marked = signal(false);
    this.lesson = signal({
      id: "l1",
      moduleId: "m1",
      order: 1,
      title: "What is HTML?",
      content: "<p>HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the <strong>structure</strong> of a page using elements.</p><h3>Key ideas</h3><ul><li>Elements are written with <em>tags</em> like &lt;p&gt; and &lt;h1&gt;.</li><li>Tags usually come in pairs: an opening and a closing tag.</li><li>The browser reads HTML and renders it into the page you see.</li></ul><p>In the next lesson we will look at how a full page is structured from head to body.</p>",
      completed: false
    });
    this.courseId = "c1";
  }
  ngOnInit() {
    this.marked.set(true);
  }
  static {
    this.\u0275fac = function LessonComponent_Factory(t) {
      return new (t || _LessonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LessonComponent, selectors: [["app-lesson"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], [1, "back", "muted", 3, "routerLink"], [1, "lesson", "card"], [1, "lesson-head"], [1, "badge", "badge-muted"], [1, "badge", "badge-ok"], [1, "lesson-body", 3, "innerHTML"], [1, "lesson-foot"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function LessonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LessonComponent_Conditional_0_Template, 4, 0, "div", 0)(1, LessonComponent_Conditional_1_Template, 5, 1)(2, LessonComponent_Conditional_2_Template, 2, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.loading() ? 0 : ctx.error() ? 1 : 2);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.lesson[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: var(--space-6);\n}\n.lesson-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  align-items: flex-start;\n  margin-bottom: var(--space-5);\n  padding-bottom: var(--space-4);\n  border-bottom: 1px solid var(--color-border);\n}\n.lesson-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.lesson-body[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  line-height: 1.7;\n  font-size: var(--fs-md);\n}\n.lesson-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.lesson-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: var(--space-5) 0 var(--space-2);\n  color: var(--color-ink);\n  font-size: var(--fs-md);\n}\n.lesson-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n}\n.lesson-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  padding-left: var(--space-5);\n}\n.lesson-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.lesson-foot[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n}\n/*# sourceMappingURL=lesson.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LessonComponent, { className: "LessonComponent", filePath: "src/app/pages/lesson/lesson.component.ts", lineNumber: 13 });
})();
export {
  LessonComponent
};
//# sourceMappingURL=lesson.component-5GJ2QFDQ.js.map
