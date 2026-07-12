import {
  ProductService
} from "./chunk-DUMMOMHU.js";
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
} from "./chunk-TBK5QOPH.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-GPQOFHD2.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2VXAXVQ7.js";

// src/app/admin/admin-product-form/admin-product-form.component.ts
function AdminProductFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function AdminProductFormComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Description is required");
    \u0275\u0275elementEnd();
  }
}
function AdminProductFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Enter a price \u2265 0");
    \u0275\u0275elementEnd();
  }
}
function AdminProductFormComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Enter a stock \u2265 0");
    \u0275\u0275elementEnd();
  }
}
function AdminProductFormComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var AdminProductFormComponent = class _AdminProductFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.productService = inject(ProductService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.editId = signal(null);
    this.saving = signal(false);
    this.errorMessage = signal("");
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      priceDollars: [0, [Validators.required, Validators.min(0)]],
      stockQty: [0, [Validators.required, Validators.min(0)]],
      imageUrl: [""]
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id)
      return;
    this.editId.set(id);
    this.productService.get(id).subscribe({
      next: (p) => this.form.patchValue({
        name: p.name,
        description: p.description,
        priceDollars: p.priceCents / 100,
        stockQty: p.stockQty,
        imageUrl: p.imageUrl ?? ""
      }),
      error: () => {
      }
    });
  }
  save() {
    if (this.form.invalid)
      return;
    this.saving.set(true);
    this.errorMessage.set("");
    const v = this.form.value;
    const input = {
      name: v.name,
      description: v.description,
      priceCents: Math.round(Number(v.priceDollars) * 100),
      stockQty: Number(v.stockQty),
      imageUrl: v.imageUrl?.trim() ? v.imageUrl.trim() : null
    };
    const id = this.editId();
    const request$ = id ? this.productService.update(id, input) : this.productService.create(input);
    request$.subscribe({
      next: () => this.router.navigate(["/admin/products"]),
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(err?.error?.message ?? "Could not save product.");
      }
    });
  }
  static {
    this.\u0275fac = function AdminProductFormComponent_Factory(t) {
      return new (t || _AdminProductFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductFormComponent, selectors: [["app-admin-product-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 9, consts: [[1, "container", "narrow"], ["routerLink", "/admin/products", 1, "back", "link-btn"], ["novalidate", "", 1, "card", "form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "data-testid", "product-name", "placeholder", "Product name"], [1, "error"], ["for", "description"], ["id", "description", "formControlName", "description", "data-testid", "product-description", "placeholder", "Product description"], [1, "row"], ["for", "priceDollars"], ["id", "priceDollars", "type", "number", "min", "0", "step", "0.01", "formControlName", "priceDollars", "data-testid", "product-price"], ["for", "stockQty"], ["id", "stockQty", "type", "number", "min", "0", "step", "1", "formControlName", "stockQty", "data-testid", "product-stock"], ["for", "imageUrl"], ["id", "imageUrl", "type", "text", "formControlName", "imageUrl", "data-testid", "product-image", "placeholder", "https://\u2026"], [1, "alert", "alert-danger"], [1, "form-actions"], ["routerLink", "/admin/products", 1, "btn", "btn-secondary"], ["type", "submit", "data-testid", "save-product", 1, "btn", "btn-primary", 3, "disabled"]], template: function AdminProductFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 2);
        \u0275\u0275listener("ngSubmit", function AdminProductFormComponent_Template_form_ngSubmit_5_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(6, "div", 3)(7, "label", 4);
        \u0275\u0275text(8, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "input", 5);
        \u0275\u0275template(10, AdminProductFormComponent_Conditional_10_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 3)(12, "label", 7);
        \u0275\u0275text(13, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "textarea", 8);
        \u0275\u0275template(15, AdminProductFormComponent_Conditional_15_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 3)(18, "label", 10);
        \u0275\u0275text(19, "Price (USD)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 11);
        \u0275\u0275template(21, AdminProductFormComponent_Conditional_21_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 3)(23, "label", 12);
        \u0275\u0275text(24, "Stock quantity");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 13);
        \u0275\u0275template(26, AdminProductFormComponent_Conditional_26_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 3)(28, "label", 14);
        \u0275\u0275text(29, "Image URL (optional)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, AdminProductFormComponent_Conditional_31_Template, 2, 1, "div", 16);
        \u0275\u0275elementStart(32, "div", 17)(33, "a", 18);
        \u0275\u0275text(34, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 19);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.editId() ? "Edit product" : "New product");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(10, ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.touched) ? 10 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(15, ((tmp_3_0 = ctx.form.get("description")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("description")) == null ? null : tmp_3_0.touched) ? 15 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(21, ((tmp_4_0 = ctx.form.get("priceDollars")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("priceDollars")) == null ? null : tmp_4_0.touched) ? 21 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(26, ((tmp_5_0 = ctx.form.get("stockQty")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("stockQty")) == null ? null : tmp_5_0.touched) ? 26 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(31, ctx.errorMessage() ? 31 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : ctx.editId() ? "Save changes" : "Create product", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--sp-4);\n}\n.form[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n}\n.row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--sp-4);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  margin-top: var(--sp-4);\n}\n@media (max-width: 768px) {\n  .row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=admin-product-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductFormComponent, { className: "AdminProductFormComponent", filePath: "src/app/admin/admin-product-form/admin-product-form.component.ts", lineNumber: 14 });
})();
export {
  AdminProductFormComponent
};
//# sourceMappingURL=admin-product-form.component-7TM4YSNT.js.map
