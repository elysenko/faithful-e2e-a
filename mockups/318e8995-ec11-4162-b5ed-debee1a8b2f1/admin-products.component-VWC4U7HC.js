import {
  toSignal
} from "./chunk-5VJSRZDM.js";
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
} from "./chunk-GWKRIMRY.js";
import {
  MoneyPipe
} from "./chunk-ZIOGLSPH.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  __spreadValues,
  computed,
  effect,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-POJ4OZZ3.js";

// src/app/features/admin/admin-products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminProductsComponent_For_23_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_For_23_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.stockQty);
  }
}
function AdminProductsComponent_For_23_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", p_r2.stockQty, " ");
  }
}
function AdminProductsComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 7);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 7);
    \u0275\u0275template(12, AdminProductsComponent_For_23_Conditional_12_Template, 2, 0, "span", 12)(13, AdminProductsComponent_For_23_Conditional_13_Template, 2, 1)(14, AdminProductsComponent_For_23_Conditional_14_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 13)(16, "button", 14);
    \u0275\u0275listener("click", function AdminProductsComponent_For_23_Template_button_click_16_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEdit(p_r2.id));
    });
    \u0275\u0275text(17, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 15);
    \u0275\u0275listener("click", function AdminProductsComponent_For_23_Template_button_click_18_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(p_r2.id));
    });
    \u0275\u0275text(19, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, p_r2.priceCents));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(12, p_r2.stockQty === 0 ? 12 : p_r2.stockQty <= 5 ? 13 : 14);
  }
}
function AdminProductsComponent_Conditional_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_24_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 19)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 21);
    \u0275\u0275listener("ngSubmit", function AdminProductsComponent_Conditional_24_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(8, "div", 22)(9, "label", 23);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 24);
    \u0275\u0275template(12, AdminProductsComponent_Conditional_24_Conditional_12_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 22)(14, "label", 26);
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "textarea", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 28)(18, "div", 22)(19, "label", 29);
    \u0275\u0275text(20, "Price (USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 22)(23, "label", 31);
    \u0275\u0275text(24, "Stock quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 22)(27, "label", 33);
    \u0275\u0275text(28, "Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 35)(31, "button", 36);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_24_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(32, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 37);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.isEditing() ? "Edit product" : "New product");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(12, ctx_r2.form.controls.name.invalid && ctx_r2.form.controls.name.touched ? 12 : -1);
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx_r2.isEditing() ? "Save changes" : "Create product");
  }
}
var AdminProductsComponent = class _AdminProductsComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  // Backend-provided data — declared as a signal per the mockup data contract (GET /api/products).
  products = signal([
    { id: "p-1", name: "Aurora Wireless Headphones", description: "Over-ear noise-cancelling headphones with 30-hour battery life.", priceCents: 12999, imageUrl: "https://picsum.photos/seed/aurora/400/300", stockQty: 24 },
    { id: "p-2", name: "Nimbus Mechanical Keyboard", description: "Hot-swappable 75% mechanical keyboard with PBT keycaps.", priceCents: 8900, imageUrl: "https://picsum.photos/seed/nimbus/400/300", stockQty: 12 },
    { id: "p-3", name: "Terra Insulated Bottle 1L", description: "Double-walled stainless steel bottle, keeps drinks cold for 24h.", priceCents: 3200, imageUrl: "https://picsum.photos/seed/terra/400/300", stockQty: 60 },
    { id: "p-4", name: "Lumen LED Desk Lamp", description: "Dimmable desk lamp with wireless charging base and USB-C port.", priceCents: 4500, imageUrl: "https://picsum.photos/seed/lumen/400/300", stockQty: 0 },
    { id: "p-5", name: "Pulse Fitness Tracker", description: "Water-resistant tracker with heart-rate and sleep monitoring.", priceCents: 7999, imageUrl: "https://picsum.photos/seed/pulse/400/300", stockQty: 5 },
    { id: "p-6", name: "Vertex Laptop Backpack", description: "Weatherproof 22L backpack with padded 16-inch laptop sleeve.", priceCents: 6400, imageUrl: "https://picsum.photos/seed/vertex/400/300", stockQty: 33 }
  ]);
  params = toSignal(this.route.queryParamMap.pipe(map((p) => ({ modal: p.get("modal"), edit: p.get("edit") }))), { initialValue: { modal: null, edit: null } });
  showForm = computed(() => this.params().modal === "new" || !!this.params().edit);
  editingId = computed(() => this.params().edit);
  isEditing = computed(() => !!this.editingId());
  form = this.fb.nonNullable.group({
    name: ["", [Validators.required]],
    description: ["", [Validators.required]],
    priceDollars: [0, [Validators.required, Validators.min(0)]],
    imageUrl: ["", [Validators.required]],
    stockQty: [0, [Validators.required, Validators.min(0)]]
  });
  constructor() {
    effect(() => {
      const id = this.editingId();
      const isNew = this.params().modal === "new";
      if (id) {
        const p = this.products().find((x) => x.id === id);
        if (p) {
          this.form.setValue({
            name: p.name,
            description: p.description,
            priceDollars: p.priceCents / 100,
            imageUrl: p.imageUrl,
            stockQty: p.stockQty
          });
        }
      } else if (isNew) {
        this.form.reset({ name: "", description: "", priceDollars: 0, imageUrl: "https://picsum.photos/seed/new/400/300", stockQty: 0 });
      }
    });
  }
  openNew() {
    this.router.navigate([], { relativeTo: this.route, queryParams: { modal: "new", edit: null } });
  }
  openEdit(id) {
    this.router.navigate([], { relativeTo: this.route, queryParams: { edit: id, modal: null } });
  }
  closeForm() {
    this.router.navigate([], { relativeTo: this.route, queryParams: { modal: null, edit: null } });
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const patch = {
      name: v.name,
      description: v.description,
      priceCents: Math.round(v.priceDollars * 100),
      imageUrl: v.imageUrl,
      stockQty: v.stockQty
    };
    const id = this.editingId();
    if (id) {
      this.products.update((list) => list.map((p) => p.id === id ? __spreadValues(__spreadValues({}, p), patch) : p));
    } else {
      this.products.update((list) => [...list, __spreadValues({ id: "p-" + (list.length + 1) + "-" + Date.now() }, patch)]);
    }
    this.closeForm();
  }
  remove(id) {
    this.products.update((list) => list.filter((p) => p.id !== id));
  }
  static \u0275fac = function AdminProductsComponent_Factory(t) {
    return new (t || _AdminProductsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductsComponent, selectors: [["app-admin-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 2, consts: [[1, "page"], [1, "page-header", "row-between"], [1, "page-title"], [1, "page-sub"], ["type", "button", "data-testid", "new-product", 1, "btn", "btn-primary", 3, "click"], [1, "card", "table-wrap"], [1, "table"], [1, "right"], [1, "overlay"], ["width", "44", "height", "44", 1, "thumb", 3, "src", "alt"], [1, "pname"], [1, "muted", "pdesc"], [1, "badge", "badge-danger"], [1, "right", "nowrap"], ["type", "button", 1, "btn", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-ghost", "del", 3, "click"], [1, "badge", "badge-warning"], [1, "overlay", 3, "click"], [1, "modal", "card", 3, "click"], [1, "modal-head"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-sm", "btn-ghost", 3, "click"], [1, "modal-body", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "data-testid", "product-name"], [1, "error"], ["for", "description"], ["id", "description", "rows", "3", "formControlName", "description"], [1, "two-col"], ["for", "price"], ["id", "price", "type", "number", "min", "0", "step", "0.01", "formControlName", "priceDollars"], ["for", "stock"], ["id", "stock", "type", "number", "min", "0", "step", "1", "formControlName", "stockQty"], ["for", "imageUrl"], ["id", "imageUrl", "type", "text", "formControlName", "imageUrl"], [1, "modal-foot"], ["type", "button", 1, "btn", 3, "click"], ["type", "submit", "data-testid", "save-product", 1, "btn", "btn-primary"]], template: function AdminProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function AdminProductsComponent_Template_button_click_7_listener() {
        return ctx.openNew();
      });
      \u0275\u0275text(8, "+ New product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "table", 6)(11, "thead")(12, "tr");
      \u0275\u0275element(13, "th");
      \u0275\u0275elementStart(14, "th");
      \u0275\u0275text(15, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th", 7);
      \u0275\u0275text(17, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th", 7);
      \u0275\u0275text(19, "Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "tbody");
      \u0275\u0275repeaterCreate(22, AdminProductsComponent_For_23_Template, 20, 8, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(24, AdminProductsComponent_Conditional_24_Template, 35, 4, "div", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.products().length, " products in the catalog");
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.products());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(24, ctx.showForm() ? 24 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MoneyPipe], styles: ["\n\n.thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  display: block;\n}\n.pname[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.pdesc[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  max-width: 340px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.del[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n  background: rgba(11, 28, 44, 0.45);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: var(--sp-5);\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  margin-top: 6vh;\n}\n.modal-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--sp-4) var(--sp-5);\n  border-bottom: 1px solid var(--color-border);\n}\n.modal-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--sp-4);\n}\n.modal-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--sp-3);\n  margin-top: var(--sp-3);\n}\n@media (max-width: 768px) {\n  .overlay[_ngcontent-%COMP%] {\n    padding: 0;\n    align-items: flex-end;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-width: none;\n    margin-top: 0;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n  }\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-products.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductsComponent, { className: "AdminProductsComponent", filePath: "src/app/features/admin/admin-products.component.ts", lineNumber: 17 });
})();
export {
  AdminProductsComponent
};
//# sourceMappingURL=admin-products.component-VWC4U7HC.js.map
