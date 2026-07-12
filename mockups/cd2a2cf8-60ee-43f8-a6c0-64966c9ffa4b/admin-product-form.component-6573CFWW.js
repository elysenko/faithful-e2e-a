import {
  ProductService
} from "./chunk-V333DRWV.js";
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
} from "./chunk-BFWEJMPJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JG2HHNQL.js";

// src/app/features/admin/admin-product-form.component.ts
function AdminProductFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function AdminProductFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Description is required");
    \u0275\u0275elementEnd();
  }
}
var AdminProductFormComponent = class _AdminProductFormComponent {
  constructor(fb, productService, router, route) {
    this.fb = fb;
    this.productService = productService;
    this.router = router;
    this.route = route;
    this.editingId = signal(null);
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      priceDollars: [0, [Validators.required, Validators.min(0)]],
      imageUrl: [""],
      stockQty: [0, [Validators.required, Validators.min(0)]]
    });
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      const product = this.productService.getById(id);
      if (product) {
        this.editingId.set(id);
        this.form.patchValue({
          name: product.name,
          description: product.description,
          priceDollars: product.priceCents / 100,
          imageUrl: product.imageUrl ?? "",
          stockQty: product.stockQty
        });
      }
    }
  }
  save() {
    if (this.form.invalid)
      return;
    const v = this.form.value;
    const payload = {
      name: v.name,
      description: v.description,
      priceCents: Math.round(Number(v.priceDollars) * 100),
      imageUrl: v.imageUrl || `https://picsum.photos/seed/${encodeURIComponent(v.name)}/600/600`,
      stockQty: Number(v.stockQty)
    };
    const id = this.editingId();
    if (id) {
      this.productService.update(id, payload);
    } else {
      this.productService.create(payload);
    }
    this.close();
  }
  close() {
    this.router.navigate(["/admin/products"]);
  }
  static {
    this.\u0275fac = function AdminProductFormComponent_Factory(t) {
      return new (t || _AdminProductFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductFormComponent, selectors: [["app-admin-product-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 6, consts: [["data-testid", "product-form", 1, "card", "form-panel"], [1, "form-head"], ["aria-label", "Close", "data-testid", "form-close", 1, "icon-btn", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "data-testid", "form-name", "placeholder", "Product name"], [1, "error"], ["for", "description"], ["id", "description", "rows", "3", "formControlName", "description", "data-testid", "form-description", "placeholder", "Short description"], [1, "field-row"], ["for", "priceDollars"], ["id", "priceDollars", "type", "number", "min", "0", "step", "0.01", "formControlName", "priceDollars", "data-testid", "form-price"], ["for", "stockQty"], ["id", "stockQty", "type", "number", "min", "0", "step", "1", "formControlName", "stockQty", "data-testid", "form-stock"], ["for", "imageUrl"], [1, "muted"], ["id", "imageUrl", "type", "url", "formControlName", "imageUrl", "data-testid", "form-image", "placeholder", "https://\u2026"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", "data-testid", "form-save", 1, "btn", "btn-primary", 3, "disabled"]], template: function AdminProductFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function AdminProductFormComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275text(5, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 3);
        \u0275\u0275listener("ngSubmit", function AdminProductFormComponent_Template_form_ngSubmit_6_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(7, "div", 4)(8, "label", 5);
        \u0275\u0275text(9, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 6);
        \u0275\u0275template(11, AdminProductFormComponent_Conditional_11_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 4)(13, "label", 8);
        \u0275\u0275text(14, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "textarea", 9);
        \u0275\u0275template(16, AdminProductFormComponent_Conditional_16_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 4)(19, "label", 11);
        \u0275\u0275text(20, "Price (USD)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 4)(23, "label", 13);
        \u0275\u0275text(24, "Stock quantity");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 4)(27, "label", 15);
        \u0275\u0275text(28, "Image URL ");
        \u0275\u0275elementStart(29, "span", 16);
        \u0275\u0275text(30, "(optional)");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(31, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 18)(33, "button", 19);
        \u0275\u0275listener("click", function AdminProductFormComponent_Template_button_click_33_listener() {
          return ctx.close();
        });
        \u0275\u0275text(34, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 20);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.editingId() ? "Edit product" : "New product");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(11, ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.touched) ? 11 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(16, ((tmp_3_0 = ctx.form.get("description")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("description")) == null ? null : tmp_3_0.touched) ? 16 : -1);
        \u0275\u0275advance(19);
        \u0275\u0275property("disabled", ctx.form.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.editingId() ? "Save changes" : "Create product", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.form-panel[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  margin-bottom: var(--space-4);\n  border-color: var(--color-primary);\n  box-shadow: var(--shadow-md);\n}\n.form-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-4);\n}\n.form-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-lg);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: var(--text-base);\n  border-radius: var(--radius-sm);\n}\n.icon-btn[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n  flex: 1;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-3);\n  margin-top: var(--space-2);\n}\n@media (max-width: 560px) {\n  .field-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=admin-product-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductFormComponent, { className: "AdminProductFormComponent", filePath: "src/app/features/admin/admin-product-form.component.ts", lineNumber: 14 });
})();
export {
  AdminProductFormComponent
};
//# sourceMappingURL=admin-product-form.component-6573CFWW.js.map
