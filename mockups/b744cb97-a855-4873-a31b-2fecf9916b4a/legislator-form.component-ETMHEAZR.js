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
} from "./chunk-FGE4ALCS.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UQ66P35U.js";

// src/app/pages/legislator-form/legislator-form.component.ts
function LegislatorFormComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1);
  }
}
var LegislatorFormComponent = class _LegislatorFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.chambers = ["house", "senate"];
    this.legislatorId = signal(null);
    this.saving = signal(false);
    this.isEdit = computed(() => !!this.legislatorId());
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      chamber: ["house", [Validators.required]],
      district: ["", [Validators.required]],
      party: ["", [Validators.required]]
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.legislatorId.set(id);
    if (id) {
      this.form.patchValue({
        name: "Sen. Marcia Holloway",
        chamber: "senate",
        district: "S-12",
        party: "Republican"
      });
    }
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    const id = this.legislatorId();
    setTimeout(() => {
      this.saving.set(false);
      this.router.navigate(id ? ["/legislators", id] : ["/legislators"]);
    }, 250);
  }
  cancel() {
    const id = this.legislatorId();
    this.router.navigate(id ? ["/legislators", id] : ["/legislators"]);
  }
  static {
    this.\u0275fac = function LegislatorFormComponent_Factory(t) {
      return new (t || _LegislatorFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LegislatorFormComponent, selectors: [["app-legislator-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 4, consts: [["routerLink", "/legislators", 1, "back-link"], [1, "card", "form-card"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "Sen. Jane Doe"], [1, "form-grid"], ["for", "chamber"], ["id", "chamber", "formControlName", "chamber"], [3, "value"], ["for", "district"], ["id", "district", "type", "text", "formControlName", "district", "placeholder", "S-12"], ["for", "party"], ["id", "party", "type", "text", "formControlName", "party", "placeholder", "Republican / Democrat / Independent"], [1, "form-foot"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function LegislatorFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275text(1, "\u2190 All legislators");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 1)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 2);
        \u0275\u0275listener("ngSubmit", function LegislatorFormComponent_Template_form_ngSubmit_5_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(6, "div", 3)(7, "label", 4);
        \u0275\u0275text(8, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "input", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Chamber");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "select", 8);
        \u0275\u0275repeaterCreate(15, LegislatorFormComponent_For_16_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 3)(18, "label", 10);
        \u0275\u0275text(19, "District");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 3)(22, "label", 12);
        \u0275\u0275text(23, "Party");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 14)(26, "button", 15);
        \u0275\u0275listener("click", function LegislatorFormComponent_Template_button_click_26_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(27, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 16);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Edit legislator" : "New legislator");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.chambers);
        \u0275\u0275advance(13);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : ctx.isEdit() ? "Save changes" : "Create legislator", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.form-card[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: var(--space-5);\n}\n.form-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: var(--fs-xl);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--space-3);\n}\n.form-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n  margin-top: var(--space-3);\n}\n@media (max-width: 768px) {\n  .form-foot[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .form-foot[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=legislator-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LegislatorFormComponent, { className: "LegislatorFormComponent", filePath: "src/app/pages/legislator-form/legislator-form.component.ts", lineNumber: 14 });
})();
export {
  LegislatorFormComponent
};
//# sourceMappingURL=legislator-form.component-ETMHEAZR.js.map
