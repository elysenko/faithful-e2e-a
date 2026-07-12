import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-6WBQSCB2.js";
import {
  toSignal
} from "./chunk-BS3KOYW4.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-JU25ONEJ.js";
import {
  CommonModule,
  combineLatest,
  computed,
  map,
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
  ɵɵtextInterpolate1
} from "./chunk-DARMOPX2.js";

// src/app/features/admin/admin-locations.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ form: "new" });
var _c1 = (a0) => ["/admin/locations", a0, "edit"];
function AdminLocationsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1, "+ New Location");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function AdminLocationsComponent_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function AdminLocationsComponent_Conditional_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Zone is required");
    \u0275\u0275elementEnd();
  }
}
function AdminLocationsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 4);
    \u0275\u0275listener("ngSubmit", function AdminLocationsComponent_Conditional_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "label", 6);
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 7);
    \u0275\u0275template(7, AdminLocationsComponent_Conditional_7_Conditional_7_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "label", 9);
    \u0275\u0275text(10, "Zone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 10);
    \u0275\u0275template(12, AdminLocationsComponent_Conditional_7_Conditional_12_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 13);
    \u0275\u0275listener("click", function AdminLocationsComponent_Conditional_7_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editing() ? "Edit location" : "New location");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(7, ((tmp_3_0 = ctx_r1.form.get("name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.form.get("name")) == null ? null : tmp_3_0.touched) ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(12, ((tmp_4_0 = ctx_r1.form.get("zone")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.form.get("zone")) == null ? null : tmp_4_0.touched) ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : "Save location", " ");
  }
}
function AdminLocationsComponent_Conditional_8_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 1);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 17)(7, "a", 18);
    \u0275\u0275text(8, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function AdminLocationsComponent_Conditional_8_For_12_Template_button_click_9_listener() {
      const loc_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(loc_r4));
    });
    \u0275\u0275text(10, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loc_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(loc_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Zone ", loc_r4.zone, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c1, loc_r4.id));
  }
}
function AdminLocationsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "table", 16)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Zone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, AdminLocationsComponent_Conditional_8_For_12_Template, 11, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.locations());
  }
}
var AdminLocationsComponent = class _AdminLocationsComponent {
  constructor(fb, route, router) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.saving = signal(false);
    this.locations = signal([
      { id: "L1", name: "Main Warehouse", zone: "A" },
      { id: "L2", name: "Overflow Depot", zone: "B" },
      { id: "L3", name: "Front Store", zone: "C" }
    ]);
    this.ctx = toSignal(combineLatest([this.route.paramMap, this.route.queryParamMap]).pipe(map(([p, q]) => ({ id: p.get("id"), isNew: q.get("form") === "new" }))), { initialValue: { id: null, isNew: false } });
    this.editId = computed(() => this.ctx().id);
    this.showForm = computed(() => this.ctx().isNew || !!this.ctx().id);
    this.editing = computed(() => this.editId() ? this.locations().find((l) => l.id === this.editId()) : void 0);
    this.form = this.fb.group({
      name: ["", Validators.required],
      zone: ["", Validators.required]
    });
    this.route.paramMap.subscribe(() => {
      const loc = this.editing();
      if (loc) {
        this.form.patchValue({ name: loc.name, zone: loc.zone });
      } else {
        this.form.reset({ name: "", zone: "" });
      }
    });
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    setTimeout(() => {
      this.saving.set(false);
      this.router.navigate(["/admin/locations"]);
    }, 300);
  }
  remove(loc) {
    this.locations.update((list) => list.filter((l) => l.id !== loc.id));
  }
  cancel() {
    this.router.navigate(["/admin/locations"]);
  }
  static {
    this.\u0275fac = function AdminLocationsComponent_Factory(t) {
      return new (t || _AdminLocationsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLocationsComponent, selectors: [["app-admin-locations"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "page-title-row"], [1, "muted"], ["routerLink", "/admin/locations", 1, "btn", "btn-primary", 3, "queryParams"], [1, "card", "card-pad", "form-card", 3, "formGroup"], [1, "card", "card-pad", "form-card", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "formControlName", "name", "placeholder", "e.g. Main Warehouse"], [1, "field-error"], ["for", "zone"], ["id", "zone", "formControlName", "zone", "placeholder", "e.g. A"], [1, "row", "wrap"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "card"], [1, "table-wrap"], [1, "data"], [1, "text-right", "actions-cell"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function AdminLocationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Manage Locations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Warehouses, depots, and store zones. Manager only.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, AdminLocationsComponent_Conditional_6_Template, 2, 2, "a", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, AdminLocationsComponent_Conditional_7_Template, 18, 6, "form", 3)(8, AdminLocationsComponent_Conditional_8_Template, 13, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, !ctx.showForm() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.showForm() ? 7 : 8);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.form-card[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 0 var(--space-3);\n  font-size: var(--font-size-sm);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=admin-locations.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLocationsComponent, { className: "AdminLocationsComponent", filePath: "src/app/features/admin/admin-locations.component.ts", lineNumber: 16 });
})();
export {
  AdminLocationsComponent
};
//# sourceMappingURL=admin-locations.component-KNSX5LOL.js.map
