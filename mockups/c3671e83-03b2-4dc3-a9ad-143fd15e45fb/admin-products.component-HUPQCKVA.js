import {
  toSignal
} from "./chunk-5T3QUQ7K.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7PVF4TBR.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-5PRKSMZW.js";
import {
  CommonModule,
  CurrencyPipe,
  __spreadValues,
  combineLatest,
  computed,
  inject,
  map,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LLQROSRE.js";

// src/app/features/admin/admin-products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/admin/products", a0, "edit"];
function AdminProductsComponent_Conditional_1_For_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Out");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_1_For_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", p_r4.stockQty, " ");
  }
}
function AdminProductsComponent_Conditional_1_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 6);
    \u0275\u0275element(2, "img", 7);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, AdminProductsComponent_Conditional_1_For_20_Conditional_11_Template, 2, 0, "span", 8)(12, AdminProductsComponent_Conditional_1_For_20_Conditional_12_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 9)(14, "a", 10);
    \u0275\u0275text(15, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 11);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_1_For_20_Template_button_click_16_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(p_r4));
    });
    \u0275\u0275text(17, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r4.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.manufacturer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, p_r4.priceCents / 100));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(11, p_r4.stockQty === 0 ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, p_r4.id));
  }
}
function AdminProductsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
    \u0275\u0275text(2, "Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 3);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275text(4, "+ New product");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "table", 5)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Manufacturer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, AdminProductsComponent_Conditional_1_For_20_Template, 18, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.products());
  }
}
function AdminProductsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(1, "\u2190 Back to products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 13);
    \u0275\u0275listener("ngSubmit", function AdminProductsComponent_Conditional_2_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(5, "div", 14)(6, "label", 15);
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "label", 17);
    \u0275\u0275text(11, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 19)(14, "div", 14)(15, "label", 20);
    \u0275\u0275text(16, "Price (cents)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14)(19, "label", 22);
    \u0275\u0275text(20, "Stock qty");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 19)(23, "div", 14)(24, "label", 24);
    \u0275\u0275text(25, "Manufacturer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 14)(28, "label", 26);
    \u0275\u0275text(29, "Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 28)(32, "button", 29);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_2_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 30);
    \u0275\u0275text(35, "Save product");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.mode() === "edit" ? "Edit product" : "New product");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
  }
}
var AdminProductsComponent = class _AdminProductsComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.loading = signal(false);
    this.products = signal([
      { id: "p-1", name: "Class J Time-Delay Fuse 30A", description: "600V AC current-limiting.", priceCents: 1899, imageUrl: "https://placehold.co/80x80?text=30A", stockQty: 48, manufacturer: "Bussmann" },
      { id: "p-2", name: "Class CC Fast-Acting Fuse 15A", description: "600V rejection-style.", priceCents: 1299, imageUrl: "https://placehold.co/80x80?text=15A", stockQty: 0, manufacturer: "Mersen" },
      { id: "p-3", name: "DIN-Rail Fuse Holder 1P", description: "Finger-safe, 32A.", priceCents: 749, imageUrl: "https://placehold.co/80x80?text=Hold", stockQty: 120, manufacturer: "Mersen" },
      { id: "p-4", name: "VFD 3HP 480V Drive", description: "Sensorless vector, Modbus RTU.", priceCents: 42900, imageUrl: "https://placehold.co/80x80?text=VFD", stockQty: 12, manufacturer: "ABB" }
    ]);
    this.editId = toSignal(this.route.paramMap.pipe(map((p) => p.get("id"))), { initialValue: null });
    this.formParam = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("form"))), { initialValue: null });
    this.mode = computed(() => {
      if (this.editId())
        return "edit";
      if (this.formParam() === "new")
        return "new";
      return "list";
    });
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      priceCents: [0, [Validators.required, Validators.min(0)]],
      stockQty: [0, [Validators.required, Validators.min(0)]],
      imageUrl: [""],
      manufacturer: [""]
    });
    this.hydrated = toSignal(combineLatest([this.route.paramMap]).pipe(map(([p]) => {
      const id = p.get("id");
      const found = id ? this.products().find((x) => x.id === id) : null;
      if (found) {
        this.form.patchValue({
          name: found.name,
          description: found.description,
          priceCents: found.priceCents,
          stockQty: found.stockQty,
          imageUrl: found.imageUrl,
          manufacturer: found.manufacturer ?? ""
        });
      } else {
        this.form.reset({ name: "", description: "", priceCents: 0, stockQty: 0, imageUrl: "", manufacturer: "" });
      }
      return id;
    })), { initialValue: null });
  }
  openNew() {
    this.router.navigate([], { relativeTo: this.route, queryParams: { form: "new" } });
  }
  cancel() {
    this.router.navigate(["/admin/products"]);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    if (this.mode() === "edit" && this.editId()) {
      this.products.update((list) => list.map((p) => p.id === this.editId() ? __spreadValues(__spreadValues({}, p), v) : p));
    } else {
      const id = "p-" + (this.products().length + 1);
      this.products.update((list) => [...list, __spreadValues({ id }, v)]);
    }
    this.cancel();
  }
  remove(p) {
    this.products.update((list) => list.filter((x) => x.id !== p.id));
  }
  static {
    this.\u0275fac = function AdminProductsComponent_Factory(t) {
      return new (t || _AdminProductsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductsComponent, selectors: [["app-admin-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "page"], [1, "admin-head"], [1, "page-title"], ["data-testid", "new-product", 1, "btn", "btn-primary", 3, "click"], [1, "card", "table-wrap"], [1, "table"], [1, "cell-name"], ["width", "40", "height", "40", 3, "src", "alt"], [1, "badge", "badge-placed"], [1, "cell-actions"], [1, "btn", "btn-sm", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "back", 3, "click"], [1, "card", "product-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "formControlName", "name", "data-testid", "product-name", 1, "input"], ["for", "description"], ["id", "description", "formControlName", "description", 1, "textarea"], [1, "grid-2"], ["for", "priceCents"], ["id", "priceCents", "type", "number", "formControlName", "priceCents", 1, "input"], ["for", "stockQty"], ["id", "stockQty", "type", "number", "formControlName", "stockQty", 1, "input"], ["for", "manufacturer"], ["id", "manufacturer", "formControlName", "manufacturer", 1, "input"], ["for", "imageUrl"], ["id", "imageUrl", "formControlName", "imageUrl", 1, "input"], [1, "form-actions"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", "data-testid", "save-product", 1, "btn", "btn-primary"]], template: function AdminProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AdminProductsComponent_Conditional_1_Template, 21, 0)(2, AdminProductsComponent_Conditional_2_Template, 36, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.mode() === "list" ? 1 : 2);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.admin-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--sp-4);\n  gap: var(--sp-3);\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--sp-3);\n  color: var(--color-info);\n  font-weight: 600;\n  cursor: pointer;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 560px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: var(--sp-3);\n  border-bottom: 1px solid var(--color-border);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--color-muted);\n}\n.cell-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  font-weight: 600;\n}\n.cell-name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n}\n.cell-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  justify-content: flex-end;\n}\n.product-form[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  max-width: 640px;\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--sp-4);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  margin-top: var(--sp-3);\n}\n@media (max-width: 768px) {\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-products.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductsComponent, { className: "AdminProductsComponent", filePath: "src/app/features/admin/admin-products.component.ts", lineNumber: 17 });
})();
export {
  AdminProductsComponent
};
//# sourceMappingURL=admin-products.component-HUPQCKVA.js.map
