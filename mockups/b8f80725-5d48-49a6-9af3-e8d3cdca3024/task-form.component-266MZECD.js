import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TMCGQTI4.js";
import {
  TASK_PRIORITIES,
  TASK_STATUSES
} from "./chunk-PDA44FSW.js";
import {
  toSignal
} from "./chunk-PAUVK2ZQ.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  computed,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-S3A6C3F5.js";

// src/app/features/tasks/task-form.component.ts
function TaskFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Subject is required.");
    \u0275\u0275elementEnd();
  }
}
function TaskFormComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function TaskFormComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275property("value", p_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2);
  }
}
function TaskFormComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Due date is required.");
    \u0275\u0275elementEnd();
  }
}
var TaskFormComponent = class _TaskFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.statuses = TASK_STATUSES;
    this.priorities = TASK_PRIORITIES;
    this.pm = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
    this.editId = computed(() => this.pm().get("id"));
    this.isEdit = computed(() => !!this.editId());
    this.form = this.fb.group({
      subject: ["", [Validators.required]],
      status: ["OPEN", [Validators.required]],
      priority: ["NORMAL", [Validators.required]],
      dueDate: ["", [Validators.required]],
      relatedTo: [""]
    });
    if (this.isEdit()) {
      this.form.patchValue({
        subject: "Follow up on renewal quote",
        status: "OPEN",
        priority: "HIGH",
        dueDate: "2026-07-15",
        relatedTo: "Acme Corporation"
      });
    }
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const target = this.isEdit() ? ["/tasks", this.editId()] : ["/tasks"];
    this.router.navigate(target);
  }
  cancel() {
    this.router.navigate(this.isEdit() ? ["/tasks", this.editId()] : ["/tasks"]);
  }
  static {
    this.\u0275fac = function TaskFormComponent_Factory(t) {
      return new (t || _TaskFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskFormComponent, selectors: [["app-task-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 6, consts: [[1, "page"], ["routerLink", "/tasks", 1, "crumb"], [1, "page-head"], [1, "muted"], [1, "card", "card-pad", "form-narrow", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "subject"], ["id", "subject", "formControlName", "subject", "placeholder", "Task subject", 1, "input"], [1, "field-error"], ["for", "status"], ["id", "status", "formControlName", "status", 1, "select"], [3, "value"], ["for", "priority"], ["id", "priority", "formControlName", "priority", 1, "select"], ["for", "dueDate"], ["id", "dueDate", "type", "date", "formControlName", "dueDate", 1, "input"], ["for", "relatedTo"], ["id", "relatedTo", "formControlName", "relatedTo", "placeholder", "Account or opportunity", 1, "input"], [1, "form-actions"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"]], template: function TaskFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "header", 2)(4, "div")(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "form", 4);
        \u0275\u0275listener("ngSubmit", function TaskFormComponent_Template_form_ngSubmit_9_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
        \u0275\u0275text(12, "Subject *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 7);
        \u0275\u0275template(14, TaskFormComponent_Conditional_14_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 5)(16, "label", 9);
        \u0275\u0275text(17, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "select", 10);
        \u0275\u0275repeaterCreate(19, TaskFormComponent_For_20_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 5)(22, "label", 12);
        \u0275\u0275text(23, "Priority");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "select", 13);
        \u0275\u0275repeaterCreate(25, TaskFormComponent_For_26_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 5)(28, "label", 14);
        \u0275\u0275text(29, "Due date *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 15);
        \u0275\u0275template(31, TaskFormComponent_Conditional_31_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 5)(33, "label", 16);
        \u0275\u0275text(34, "Related to");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 18)(37, "button", 19);
        \u0275\u0275listener("click", function TaskFormComponent_Template_button_click_37_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(38, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 20);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_6_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Edit task" : "New task");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Update the task details." : "Add a task to your CRM.");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(14, ((tmp_3_0 = ctx.form.get("subject")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("subject")) == null ? null : tmp_3_0.touched) ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.priorities);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(31, ((tmp_6_0 = ctx.form.get("dueDate")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.form.get("dueDate")) == null ? null : tmp_6_0.touched) ? 31 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Save changes" : "Create task");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=tasks.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskFormComponent, { className: "TaskFormComponent", filePath: "src/app/features/tasks/task-form.component.ts", lineNumber: 15 });
})();
export {
  TaskFormComponent
};
//# sourceMappingURL=task-form.component-266MZECD.js.map
