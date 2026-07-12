import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VXD3V2JR.js";
import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
  computed,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5S2USPPB.js";

// src/app/pages/unit-form/unit-form.component.ts
function UnitFormComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Edit Unit ", ctx_r0.form.controls.number.value, " ");
  }
}
function UnitFormComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " New Unit ");
  }
}
function UnitFormComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 7);
    \u0275\u0275text(6, "Back to Units");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function UnitFormComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 6);
    \u0275\u0275text(1, "Unit number is required.");
    \u0275\u0275elementEnd();
  }
}
function UnitFormComponent_Conditional_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 6);
    \u0275\u0275text(1, "Enter the number of bedrooms.");
    \u0275\u0275elementEnd();
  }
}
function UnitFormComponent_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 6);
    \u0275\u0275text(1, "Enter a monthly rent amount.");
    \u0275\u0275elementEnd();
  }
}
function UnitFormComponent_Conditional_10_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function UnitFormComponent_Conditional_10_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEdit() ? "Save changes" : "Create unit", " ");
  }
}
function UnitFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "form", 9);
    \u0275\u0275listener("ngSubmit", function UnitFormComponent_Conditional_10_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(2, "div", 10)(3, "label", 11);
    \u0275\u0275text(4, "Unit number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 12);
    \u0275\u0275template(6, UnitFormComponent_Conditional_10_Conditional_6_Template, 2, 0, "small", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "label", 13);
    \u0275\u0275text(9, "Bedrooms");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 14);
    \u0275\u0275template(11, UnitFormComponent_Conditional_10_Conditional_11_Template, 2, 0, "small", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10)(13, "label", 15);
    \u0275\u0275text(14, "Monthly rent (USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 16);
    \u0275\u0275template(16, UnitFormComponent_Conditional_10_Conditional_16_Template, 2, 0, "small", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17)(18, "a", 18);
    \u0275\u0275text(19, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "span", 19);
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275template(22, UnitFormComponent_Conditional_10_Conditional_22_Template, 1, 0, "span", 21)(23, UnitFormComponent_Conditional_10_Conditional_23_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "aside", 22)(25, "span", 23);
    \u0275\u0275text(26, "Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 24);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 25)(30, "span", 3);
    \u0275\u0275text(31, "Bedrooms");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "span", 19);
    \u0275\u0275elementStart(33, "span", 26);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 25)(36, "span", 3);
    \u0275\u0275text(37, "Monthly rent");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "span", 19);
    \u0275\u0275elementStart(39, "span", 27);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "cents");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(6, ctx_r0.form.controls.number.touched && ctx_r0.form.controls.number.invalid ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(11, ctx_r0.form.controls.bedrooms.touched && ctx_r0.form.controls.bedrooms.invalid ? 11 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(16, ctx_r0.form.controls.rentDollars.touched && ctx_r0.form.controls.rentDollars.invalid ? 16 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(22, ctx_r0.loading() ? 22 : 23);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Unit ", ctx_r0.form.controls.number.value || "\u2014", "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.form.controls.bedrooms.value);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 9, ctx_r0.previewCents()));
  }
}
var UnitFormComponent = class _UnitFormComponent {
  constructor(fb, route, router) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.loading = signal(false);
    this.error = signal("");
    this.units = signal([
      { id: "u1", number: "101", bedrooms: 1, rentCents: 12e4 },
      { id: "u2", number: "102", bedrooms: 2, rentCents: 18e4 },
      { id: "u3", number: "201", bedrooms: 2, rentCents: 19e4 },
      { id: "u4", number: "202", bedrooms: 3, rentCents: 24e4 }
    ]);
    this.editId = signal(null);
    this.isEdit = computed(() => this.editId() !== null);
    this.form = this.fb.group({
      number: ["", [Validators.required]],
      bedrooms: [1, [Validators.required, Validators.min(0)]],
      rentDollars: [0, [Validators.required, Validators.min(0)]]
    });
    this.previewCents = signal(0);
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      const existing = this.units().find((u) => u.id === id);
      if (!existing) {
        this.error.set("Unit not found.");
        return;
      }
      this.editId.set(id);
      this.form.patchValue({
        number: existing.number,
        bedrooms: existing.bedrooms,
        rentDollars: existing.rentCents / 100
      });
    }
    this.previewCents.set(Math.round((this.form.controls.rentDollars.value ?? 0) * 100));
    this.form.controls.rentDollars.valueChanges.subscribe((v) => {
      this.previewCents.set(Math.round((Number(v) || 0) * 100));
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const raw = this.form.getRawValue();
    const payload = {
      id: this.editId() ?? void 0,
      number: raw.number,
      bedrooms: Number(raw.bedrooms),
      rentCents: Math.round((Number(raw.rentDollars) || 0) * 100)
    };
    this.loading.set(true);
    console.log(this.isEdit() ? "Update unit" : "Create unit", payload);
    setTimeout(() => {
      this.loading.set(false);
      this.router.navigate(["/units"]);
    }, 450);
  }
  static {
    this.\u0275fac = function UnitFormComponent_Factory(t) {
      return new (t || _UnitFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnitFormComponent, selectors: [["app-unit-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [[1, "page", "stack"], [1, "page-head"], ["routerLink", "/units", 1, "back-link"], [1, "muted"], [1, "state"], [1, "state-icon"], [1, "error"], ["routerLink", "/units", 1, "btn", "btn-outline", "btn-sm"], [1, "form-grid"], [1, "card", "card-pad", "stack", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "uf-number"], ["id", "uf-number", "type", "text", "formControlName", "number", "placeholder", "e.g. 101", 1, "field-input"], ["for", "uf-bedrooms"], ["id", "uf-bedrooms", "type", "number", "min", "0", "step", "1", "formControlName", "bedrooms", 1, "field-input"], ["for", "uf-rent"], ["id", "uf-rent", "type", "number", "min", "0", "step", "1", "formControlName", "rentDollars", 1, "field-input"], [1, "row", "form-actions"], ["routerLink", "/units", 1, "btn", "btn-outline"], [1, "spacer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner"], [1, "card", "card-pad", "preview", "stack"], [1, "preview-title"], [1, "preview-number"], [1, "preview-row"], [1, "preview-val"], [1, "preview-val", "strong"]], template: function UnitFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back to Units");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275template(5, UnitFormComponent_Conditional_5_Template, 1, 1)(6, UnitFormComponent_Conditional_6_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, UnitFormComponent_Conditional_9_Template, 7, 1, "div", 4)(10, UnitFormComponent_Conditional_10_Template, 42, 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.isEdit() ? 5 : 6);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEdit() ? "Update the details for this unit." : "Add a rentable unit to your portfolio.", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.error() ? 9 : 10);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  margin-top: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-muted);\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-brand);\n  text-decoration: none;\n}\n.card-pad[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);\n  gap: var(--space-5);\n  align-items: start;\n}\n.field-input[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  color: var(--color-ink);\n  font-size: 16px;\n  font-family: inherit;\n}\n.field-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-brand);\n  box-shadow: 0 0 0 3px var(--color-brand-light);\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n}\n.preview[_ngcontent-%COMP%] {\n  position: sticky;\n  top: var(--space-4);\n  background: var(--color-surface-alt);\n}\n.preview-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  font-weight: 700;\n  color: var(--color-muted);\n}\n.preview-number[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 800;\n  color: var(--color-ink);\n}\n.preview-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.preview-val[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-ink);\n}\n.preview-val.strong[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .preview[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=unit-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnitFormComponent, { className: "UnitFormComponent", filePath: "src/app/pages/unit-form/unit-form.component.ts", lineNumber: 15 });
})();
export {
  UnitFormComponent
};
//# sourceMappingURL=unit-form.component-4JJ7FJ7T.js.map
