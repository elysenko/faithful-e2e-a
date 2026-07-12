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
} from "./chunk-O3VZIQDQ.js";
import {
  CommonModule,
  inject,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VVK4PSXI.js";

// src/app/pages/users/users.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UsersComponent_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "A valid email is required.");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_11_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 8);
    \u0275\u0275listener("ngSubmit", function UsersComponent_Conditional_11_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "label");
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 10);
    \u0275\u0275template(5, UsersComponent_Conditional_11_Conditional_5_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "label");
    \u0275\u0275text(8, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 12)(10, "option", 13);
    \u0275\u0275text(11, "sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 14);
    \u0275\u0275text(13, "purchasing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 15);
    \u0275\u0275text(15, "admin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 9)(17, "label");
    \u0275\u0275text(18, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 16);
    \u0275\u0275template(20, UsersComponent_Conditional_11_Conditional_20_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "button", 18);
    \u0275\u0275text(23, " Create user ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 19);
    \u0275\u0275listener("click", function UsersComponent_Conditional_11_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleForm());
    });
    \u0275\u0275text(25, " Cancel ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(5, ctx_r1.form.controls.email.invalid && ctx_r1.form.controls.email.touched ? 5 : -1);
    \u0275\u0275advance(15);
    \u0275\u0275conditional(20, ctx_r1.form.controls.password.invalid && ctx_r1.form.controls.password.touched ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.form.invalid);
  }
}
function UsersComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 21);
    \u0275\u0275text(7, "Active");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r3.role);
  }
}
var UsersComponent = class _UsersComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.users = signal([
      { id: "u1", email: "admin@minierp.dev", role: "admin" },
      { id: "u2", email: "sales@minierp.dev", role: "sales" },
      { id: "u3", email: "purchasing@minierp.dev", role: "purchasing" }
    ]);
    this.showForm = signal(false);
    this.form = this.fb.nonNullable.group({
      email: ["", [Validators.required, Validators.email]],
      role: ["sales", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  toggleForm() {
    this.showForm.update((v) => !v);
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const { email, role } = this.form.getRawValue();
    this.users.update((list) => [
      ...list,
      { id: "u-" + email, email, role }
    ]);
    this.form.reset({ email: "", role: "sales", password: "" });
    this.showForm.set(false);
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(t) {
      return new (t || _UsersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 1, consts: [[1, "container", "stack"], [1, "section-title", "row-between"], [1, "eyebrow"], [1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-info"], [1, "card", "card-pad", "stack", 3, "formGroup"], [1, "table-wrap"], [1, "data"], [1, "card", "card-pad", "stack", 3, "ngSubmit", "formGroup"], [1, "field"], ["type", "email", "formControlName", "email", 1, "input"], [1, "field-error"], ["formControlName", "role", 1, "select"], ["value", "sales"], ["value", "purchasing"], ["value", "admin"], ["type", "password", "formControlName", "password", 1, "input"], [1, "row"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], [1, "badge", "badge-neutral"], [1, "muted"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
        \u0275\u0275text(4, "Administration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function UsersComponent_Template_button_click_7_listener() {
          return ctx.toggleForm();
        });
        \u0275\u0275text(8, "Invite user");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275text(10, "User management is admin-only.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, UsersComponent_Conditional_11_Template, 26, 4, "form", 5);
        \u0275\u0275elementStart(12, "div", 6)(13, "table", 7)(14, "thead")(15, "tr")(16, "th");
        \u0275\u0275text(17, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Status");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275repeaterCreate(23, UsersComponent_For_24_Template, 8, 2, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(11, ctx.showForm() ? 11 : -1);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.users());
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/pages/users/users.component.ts", lineNumber: 16 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=users.component-YNQOTMLJ.js.map
