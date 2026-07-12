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
} from "./chunk-CHXIRGAM.js";
import {
  ApiService
} from "./chunk-Y35ABHFS.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-OKK7IX5Q.js";
import {
  CommonModule,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IS4ZVKQ7.js";

// src/app/pages/admin-product-form/admin-product-form.component.ts
function AdminProductFormComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminProductFormComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var AdminProductFormComponent = class _AdminProductFormComponent {
  constructor(api, router, route) {
    this.api = api;
    this.router = router;
    this.route = route;
    this.submitting = signal(false);
    this.error = signal(null);
    this.isEdit = signal(false);
    this.productId = "";
    this.name = "";
    this.description = "";
    this.priceDollars = null;
    this.imageUrl = "";
    this.stockQty = null;
    this.products = signal([
      { id: "p1", name: "Aurora Wireless Headphones", description: "Over-ear noise-cancelling headphones with 40-hour battery life.", priceCents: 18900, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", stockQty: 24 },
      { id: "p4", name: "Lumen Desk Lamp", description: "Dimmable LED desk lamp with wireless charging base.", priceCents: 6400, imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80", stockQty: 3 }
    ]);
  }
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id") ?? "";
    if (this.productId) {
      this.isEdit.set(true);
      const existing = this.products().find((p) => p.id === this.productId);
      if (existing)
        this.hydrate(existing);
      this.api.getProduct(this.productId).subscribe({
        next: (p) => this.hydrate(p),
        error: () => {
        }
      });
    }
  }
  hydrate(p) {
    this.name = p.name;
    this.description = p.description;
    this.priceDollars = p.priceCents / 100;
    this.imageUrl = p.imageUrl;
    this.stockQty = p.stockQty;
  }
  submit() {
    if (!this.name.trim() || this.priceDollars == null || this.stockQty == null) {
      this.error.set("Name, price and stock are required.");
      return;
    }
    const body = {
      name: this.name,
      description: this.description,
      priceCents: Math.round(this.priceDollars * 100),
      imageUrl: this.imageUrl,
      stockQty: this.stockQty
    };
    this.submitting.set(true);
    this.error.set(null);
    const req$ = this.isEdit() ? this.api.updateProduct(this.productId, body) : this.api.createProduct(body);
    req$.subscribe({
      next: () => {
        this.submitting.set(false);
        this.router.navigate(["/admin/products"]);
      },
      error: (err) => {
        this.submitting.set(false);
        this.error.set(err?.error?.message || "Could not save the product.");
      }
    });
  }
  static {
    this.\u0275fac = function AdminProductFormComponent_Factory(t) {
      return new (t || _AdminProductFormComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductFormComponent, selectors: [["app-admin-product-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 10, consts: [[1, "container", "narrow"], ["routerLink", "/admin/products", 1, "back-link"], [1, "page-title"], [1, "card", "form-card", 3, "ngSubmit"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "name", "name", "placeholder", "Aurora Wireless Headphones", 3, "ngModelChange", "ngModel"], ["for", "description"], ["id", "description", "name", "description", "placeholder", "Short product description", 3, "ngModelChange", "ngModel"], [1, "grid-2"], ["for", "price"], ["id", "price", "type", "number", "name", "price", "min", "0", "step", "0.01", "inputmode", "decimal", "placeholder", "189.00", 3, "ngModelChange", "ngModel"], ["for", "stock"], ["id", "stock", "type", "number", "name", "stock", "min", "0", "step", "1", "inputmode", "numeric", "placeholder", "24", 3, "ngModelChange", "ngModel"], ["for", "imageUrl"], ["id", "imageUrl", "type", "url", "name", "imageUrl", "placeholder", "https://\u2026", 3, "ngModelChange", "ngModel"], [1, "preview"], [1, "error"], [1, "form-actions"], ["routerLink", "/admin/products", 1, "btn", "btn-ghost"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["alt", "Preview", "width", "120", "height", "120", 3, "src"]], template: function AdminProductFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 3);
        \u0275\u0275listener("ngSubmit", function AdminProductFormComponent_Template_form_ngSubmit_5_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(6, "div", 4)(7, "label", 5);
        \u0275\u0275text(8, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AdminProductFormComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 4)(11, "label", 7);
        \u0275\u0275text(12, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "textarea", 8);
        \u0275\u0275twoWayListener("ngModelChange", function AdminProductFormComponent_Template_textarea_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 4)(16, "label", 10);
        \u0275\u0275text(17, "Price (USD)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function AdminProductFormComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.priceDollars, $event) || (ctx.priceDollars = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 4)(20, "label", 12);
        \u0275\u0275text(21, "Stock quantity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function AdminProductFormComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.stockQty, $event) || (ctx.stockQty = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 4)(24, "label", 14);
        \u0275\u0275text(25, "Image URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function AdminProductFormComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.imageUrl, $event) || (ctx.imageUrl = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(27, AdminProductFormComponent_Conditional_27_Template, 2, 1, "div", 16)(28, AdminProductFormComponent_Conditional_28_Template, 2, 1, "p", 17);
        \u0275\u0275elementStart(29, "div", 18)(30, "a", 19);
        \u0275\u0275text(31, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 20);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEdit() ? "Edit product" : "New product");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.description);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.priceDollars);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.stockQty);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.imageUrl);
        \u0275\u0275advance();
        \u0275\u0275conditional(27, ctx.imageUrl ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(28, ctx.error() ? 28 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.submitting());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting() ? "Saving\u2026" : ctx.isEdit() ? "Save changes" : "Create product", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-bottom: var(--space-5);\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4);\n}\n.preview[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  overflow: hidden;\n  width: 120px;\n  height: 120px;\n  background: var(--color-surface-inset);\n}\n.preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-3);\n  margin-top: var(--space-2);\n}\n@media (max-width: 768px) {\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=admin-product-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductFormComponent, { className: "AdminProductFormComponent", filePath: "src/app/pages/admin-product-form/admin-product-form.component.ts", lineNumber: 19 });
})();
export {
  AdminProductFormComponent
};
//# sourceMappingURL=admin-product-form.component-5OGPE65V.js.map
