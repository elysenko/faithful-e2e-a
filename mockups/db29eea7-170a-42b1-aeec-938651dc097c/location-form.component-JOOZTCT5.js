import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-3DEXCJGJ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-AFRLPGFB.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G3BCJOAS.js";

// src/app/pages/location-form/location-form.component.ts
function LocationFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var LocationFormComponent = class _LocationFormComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.editId = signal(null);
    this.saving = signal(false);
    this.error = signal(null);
    this.locations = signal([
      { id: "l1", name: "Main Warehouse", zone: "A" },
      { id: "l2", name: "Storefront", zone: "B" },
      { id: "l3", name: "Overflow Depot", zone: "C" }
    ]);
    this.model = { name: "", zone: "" };
  }
  get isEdit() {
    return this.editId() !== null;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.editId.set(id);
      const existing = this.locations().find((l) => l.id === id);
      if (existing) {
        this.model = { name: existing.name, zone: existing.zone ?? "" };
      }
    }
  }
  submit() {
    if (!this.model.name) {
      this.error.set("Name is required.");
      return;
    }
    this.error.set(null);
    this.saving.set(true);
    this.router.navigate(["/locations"]);
  }
  cancel() {
    this.router.navigate(["/locations"]);
  }
  static {
    this.\u0275fac = function LocationFormComponent_Factory(t) {
      return new (t || _LocationFormComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocationFormComponent, selectors: [["app-location-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 7, consts: [[1, "container", "narrow"], ["routerLink", "/locations", 1, "back-link"], [1, "muted"], [1, "card", "form-card", 3, "ngSubmit"], [1, "field"], ["for", "name"], ["id", "name", "name", "name", "placeholder", "e.g. Main Warehouse", 3, "ngModelChange", "ngModel"], ["for", "zone"], ["id", "zone", "name", "zone", "placeholder", "Optional, e.g. A", 3, "ngModelChange", "ngModel"], [1, "error"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"]], template: function LocationFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to locations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "form", 3);
        \u0275\u0275listener("ngSubmit", function LocationFormComponent_Template_form_ngSubmit_7_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(8, "div", 4)(9, "label", 5);
        \u0275\u0275text(10, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function LocationFormComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.name, $event) || (ctx.model.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 4)(13, "label", 7);
        \u0275\u0275text(14, "Zone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function LocationFormComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.zone, $event) || (ctx.model.zone = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(16, LocationFormComponent_Conditional_16_Template, 2, 1, "p", 9);
        \u0275\u0275elementStart(17, "div", 10)(18, "button", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 12);
        \u0275\u0275listener("click", function LocationFormComponent_Template_button_click_20_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(21, "Cancel");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Edit location" : "New location");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Update this stock location." : "Add a place where stock is held.");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.zone);
        \u0275\u0275advance();
        \u0275\u0275conditional(16, ctx.error() ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : ctx.isEdit ? "Save changes" : "Create location", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\nh1[_ngcontent-%COMP%]    + .muted[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 var(--space-5);\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n}\n@media (max-width: 560px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=location-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocationFormComponent, { className: "LocationFormComponent", filePath: "src/app/pages/location-form/location-form.component.ts", lineNumber: 18 });
})();
export {
  LocationFormComponent
};
//# sourceMappingURL=location-form.component-JOOZTCT5.js.map
