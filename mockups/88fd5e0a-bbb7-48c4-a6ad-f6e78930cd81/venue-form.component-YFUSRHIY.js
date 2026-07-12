import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-BPEXCG3O.js";
import {
  ApiService
} from "./chunk-F5YUZCKE.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
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
} from "./chunk-HZTH2ON3.js";

// src/app/pages/venue-form/venue-form.component.ts
function VenueFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var VenueFormComponent = class _VenueFormComponent {
  constructor(route, router, api) {
    this.route = route;
    this.router = router;
    this.api = api;
    this.isEdit = signal(false);
    this.saving = signal(false);
    this.error = signal(null);
    this.venueId = null;
    this.form = {
      name: "",
      address: "",
      defaultCapacity: 50
    };
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit.set(true);
      this.venueId = id;
      this.api.getVenue(id).subscribe({
        next: (venue) => {
          this.form = {
            name: venue.name,
            address: venue.address,
            defaultCapacity: venue.defaultCapacity
          };
        },
        error: () => this.error.set("Could not load this venue.")
      });
    }
  }
  save() {
    if (!this.form.name || !this.form.address) {
      this.error.set("Name and address are required.");
      return;
    }
    this.saving.set(true);
    this.error.set(null);
    const payload = {
      name: this.form.name,
      address: this.form.address,
      defaultCapacity: Number(this.form.defaultCapacity) || 0
    };
    const request$ = this.isEdit() && this.venueId ? this.api.updateVenue(this.venueId, payload) : this.api.createVenue(payload);
    request$.subscribe({
      next: () => this.router.navigate(["/organizer/venues"]),
      error: () => {
        this.error.set("Could not save the venue. Please try again.");
        this.saving.set(false);
      }
    });
  }
  cancel() {
    this.router.navigate(["/organizer/venues"]);
  }
  static {
    this.\u0275fac = function VenueFormComponent_Factory(t) {
      return new (t || _VenueFormComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VenueFormComponent, selectors: [["app-venue-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 7, consts: [[1, "page", "narrow"], ["routerLink", "/organizer/venues", 1, "back-link"], [1, "page-head"], [1, "card", "card-pad", 3, "ngSubmit"], [1, "field"], ["for", "name"], ["id", "name", "name", "name", "placeholder", "The Warehouse", 3, "ngModelChange", "ngModel"], ["for", "address"], ["id", "address", "name", "address", "placeholder", "12 Dock Road, Riverside", 3, "ngModelChange", "ngModel"], ["for", "cap"], ["id", "cap", "name", "cap", "type", "number", "min", "1", 3, "ngModelChange", "ngModel"], [1, "hint"], [1, "error"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function VenueFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Venues");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "h1");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 3);
        \u0275\u0275listener("ngSubmit", function VenueFormComponent_Template_form_ngSubmit_6_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(7, "div", 4)(8, "label", 5);
        \u0275\u0275text(9, "Venue name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function VenueFormComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "label", 7);
        \u0275\u0275text(13, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function VenueFormComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.address, $event) || (ctx.form.address = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "label", 9);
        \u0275\u0275text(17, "Default capacity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function VenueFormComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.defaultCapacity, $event) || (ctx.form.defaultCapacity = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 11);
        \u0275\u0275text(20, "Used to pre-fill capacity when creating events at this venue.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, VenueFormComponent_Conditional_21_Template, 2, 1, "p", 12);
        \u0275\u0275elementStart(22, "div", 13)(23, "button", 14);
        \u0275\u0275listener("click", function VenueFormComponent_Template_button_click_23_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(24, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 15);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Edit venue" : "New venue");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.address);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.defaultCapacity);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(21, ctx.error() ? 21 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : ctx.isEdit() ? "Save changes" : "Create venue", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 560px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n  margin-top: var(--space-2);\n}\n/*# sourceMappingURL=venue-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VenueFormComponent, { className: "VenueFormComponent", filePath: "src/app/pages/venue-form/venue-form.component.ts", lineNumber: 20 });
})();
export {
  VenueFormComponent
};
//# sourceMappingURL=venue-form.component-YFUSRHIY.js.map
