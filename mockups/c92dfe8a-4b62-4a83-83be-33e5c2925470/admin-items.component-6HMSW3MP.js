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

// src/app/features/admin/admin-items.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ form: "new" });
var _c1 = (a0) => ["/admin/items", a0, "edit"];
function AdminItemsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1, "+ New Item");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function AdminItemsComponent_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "SKU is required");
    \u0275\u0275elementEnd();
  }
}
function AdminItemsComponent_Conditional_7_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function AdminItemsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 4);
    \u0275\u0275listener("ngSubmit", function AdminItemsComponent_Conditional_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "label", 7);
    \u0275\u0275text(6, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 8);
    \u0275\u0275template(8, AdminItemsComponent_Conditional_7_Conditional_8_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "label", 10);
    \u0275\u0275text(11, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 6)(14, "label", 12);
    \u0275\u0275text(15, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 13);
    \u0275\u0275template(17, AdminItemsComponent_Conditional_7_Conditional_17_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 6)(19, "label", 14);
    \u0275\u0275text(20, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 6)(23, "label", 16);
    \u0275\u0275text(24, "Reorder threshold");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "button", 19);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 20);
    \u0275\u0275listener("click", function AdminItemsComponent_Conditional_7_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editing() ? "Edit item" : "New item");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(8, ((tmp_3_0 = ctx_r1.form.get("sku")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.form.get("sku")) == null ? null : tmp_3_0.touched) ? 8 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(17, ((tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.touched) ? 17 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : "Save item", " ");
  }
}
function AdminItemsComponent_Conditional_8_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 1);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 28)(13, "a", 29);
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 30);
    \u0275\u0275listener("click", function AdminItemsComponent_Conditional_8_For_18_Template_button_click_15_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(item_r4));
    });
    \u0275\u0275text(16, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.sku);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.totalQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.reorderAt);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, item_r4.id));
  }
}
function AdminItemsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "table", 23)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 24);
    \u0275\u0275text(12, "On hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 24);
    \u0275\u0275text(14, "Reorder");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, AdminItemsComponent_Conditional_8_For_18_Template, 17, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.items());
  }
}
var AdminItemsComponent = class _AdminItemsComponent {
  constructor(fb, route, router) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.saving = signal(false);
    this.items = signal([
      { id: "1", sku: "SR-1001", name: "Steel Bolt M6", description: "Zinc-plated hex bolt", unit: "pcs", reorderAt: 100, totalQty: 340 },
      { id: "2", sku: "SR-1002", name: "Hex Nut M6", description: "Standard hex nut", unit: "pcs", reorderAt: 100, totalQty: 80 },
      { id: "4", sku: "SR-1004", name: "PVC Pipe 20mm", description: "Rigid PVC conduit", unit: "m", reorderAt: 40, totalQty: 15 },
      { id: "6", sku: "SR-1006", name: "LED Panel 40W", description: "Ceiling LED panel", unit: "pcs", reorderAt: 20, totalQty: 12 }
    ]);
    this.ctx = toSignal(combineLatest([this.route.paramMap, this.route.queryParamMap]).pipe(map(([p, q]) => ({ id: p.get("id"), isNew: q.get("form") === "new" }))), { initialValue: { id: null, isNew: false } });
    this.editId = computed(() => this.ctx().id);
    this.showForm = computed(() => this.ctx().isNew || !!this.ctx().id);
    this.editing = computed(() => this.editId() ? this.items().find((i) => i.id === this.editId()) : void 0);
    this.form = this.fb.group({
      sku: ["", Validators.required],
      name: ["", Validators.required],
      description: [""],
      unit: ["pcs", Validators.required],
      reorderAt: [0, [Validators.required, Validators.min(0)]]
    });
    this.route.paramMap.subscribe(() => {
      const item = this.editing();
      if (item) {
        this.form.patchValue({
          sku: item.sku,
          name: item.name,
          description: item.description,
          unit: item.unit,
          reorderAt: item.reorderAt
        });
      } else {
        this.form.reset({ sku: "", name: "", description: "", unit: "pcs", reorderAt: 0 });
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
      this.router.navigate(["/admin/items"]);
    }, 300);
  }
  remove(item) {
    this.items.update((list) => list.filter((i) => i.id !== item.id));
  }
  cancel() {
    this.router.navigate(["/admin/items"]);
  }
  static {
    this.\u0275fac = function AdminItemsComponent_Factory(t) {
      return new (t || _AdminItemsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminItemsComponent, selectors: [["app-admin-items"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "page-title-row"], [1, "muted"], ["routerLink", "/admin/items", 1, "btn", "btn-primary", 3, "queryParams"], [1, "card", "card-pad", "form-card", 3, "formGroup"], [1, "card", "card-pad", "form-card", 3, "ngSubmit", "formGroup"], [1, "grid-2"], [1, "field"], ["for", "sku"], ["id", "sku", "formControlName", "sku", "placeholder", "SR-1009"], [1, "field-error"], ["for", "unit"], ["id", "unit", "formControlName", "unit", "placeholder", "pcs"], ["for", "name"], ["id", "name", "formControlName", "name", "placeholder", "Item name"], ["for", "description"], ["id", "description", "formControlName", "description"], ["for", "reorderAt"], ["id", "reorderAt", "type", "number", "min", "0", "formControlName", "reorderAt", "inputmode", "numeric"], [1, "row", "wrap"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "card"], [1, "table-wrap"], [1, "data"], [1, "text-right"], [1, "mono"], [1, "text-right", "mono"], [1, "text-right", "mono", "muted"], [1, "text-right", "actions-cell"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function AdminItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Manage Items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Create, edit, and remove inventory items. Manager only.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, AdminItemsComponent_Conditional_6_Template, 2, 2, "a", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, AdminItemsComponent_Conditional_7_Template, 31, 6, "form", 3)(8, AdminItemsComponent_Conditional_8_Template, 19, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, !ctx.showForm() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.showForm() ? 7 : 8);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.form-card[_ngcontent-%COMP%] {\n  max-width: 560px;\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: var(--space-3);\n}\n.btn-sm[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 0 var(--space-3);\n  font-size: var(--font-size-sm);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=admin-items.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminItemsComponent, { className: "AdminItemsComponent", filePath: "src/app/features/admin/admin-items.component.ts", lineNumber: 16 });
})();
export {
  AdminItemsComponent
};
//# sourceMappingURL=admin-items.component-6HMSW3MP.js.map
