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
} from "./chunk-ZBJUN66K.js";
import {
  toSignal
} from "./chunk-A5Y7O3ZK.js";
import {
  MoneyPipe
} from "./chunk-GJW2SICY.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  computed,
  effect,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
} from "./chunk-RUEYC2SA.js";

// src/app/features/admin/admin-products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminProductsComponent_For_22_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Out");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_For_22_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", p_r2.stockQty, " ");
  }
}
function AdminProductsComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 7);
    \u0275\u0275element(3, "img", 8);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, AdminProductsComponent_For_22_Conditional_10_Template, 2, 0, "span", 9)(11, AdminProductsComponent_For_22_Conditional_11_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 10)(13, "button", 11);
    \u0275\u0275listener("click", function AdminProductsComponent_For_22_Template_button_click_13_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEdit(p_r2));
    });
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 12);
    \u0275\u0275listener("click", function AdminProductsComponent_For_22_Template_button_click_15_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(p_r2));
    });
    \u0275\u0275text(16, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "admin-row-" + p_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", p_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, p_r2.priceCents));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(10, p_r2.stockQty === 0 ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-testid", "admin-edit-" + p_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-testid", "admin-delete-" + p_r2.id);
  }
}
function AdminProductsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_23_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 15)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 17);
    \u0275\u0275listener("ngSubmit", function AdminProductsComponent_Conditional_23_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(8, "div", 18)(9, "label", 19);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18)(13, "label", 21);
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 23)(17, "div", 24)(18, "label", 25);
    \u0275\u0275text(19, "Price (USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 24)(22, "label", 27);
    \u0275\u0275text(23, "Stock qty");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 18)(26, "label", 29);
    \u0275\u0275text(27, "Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 31)(30, "button", 32);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_23_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 33);
    \u0275\u0275text(33, "Save product");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.modal() === "edit" ? "Edit product" : "New product");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(25);
    \u0275\u0275property("disabled", ctx_r2.form.invalid);
  }
}
var AdminProductsComponent = class _AdminProductsComponent {
  constructor(fb, route, router) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.query = toSignal(this.route.queryParamMap, { initialValue: null });
    this.modal = computed(() => this.query()?.get("modal") ?? null);
    this.editId = computed(() => this.query()?.get("id") ?? null);
    this.products = signal([
      { id: "p1", name: "Aurora Wireless Headphones", description: "Noise-cancelling over-ear.", priceCents: 14999, imageUrl: "https://picsum.photos/seed/headphones/64/64", stockQty: 12 },
      { id: "p2", name: "Nimbus Mechanical Keyboard", description: "Hot-swappable 75%.", priceCents: 9900, imageUrl: "https://picsum.photos/seed/keyboard/64/64", stockQty: 34 },
      { id: "p3", name: "Vertex 4K Webcam", description: "4K auto-framing webcam.", priceCents: 7999, imageUrl: "https://picsum.photos/seed/webcam/64/64", stockQty: 8 },
      { id: "p4", name: "Terra Standing Desk Mat", description: "Anti-fatigue mat.", priceCents: 5499, imageUrl: "https://picsum.photos/seed/deskmat/64/64", stockQty: 20 },
      { id: "p5", name: "Lumen Desk Lamp", description: "LED lamp with wireless charging.", priceCents: 6299, imageUrl: "https://picsum.photos/seed/lamp/64/64", stockQty: 15 },
      { id: "p6", name: "Cobalt Travel Backpack", description: "Water-resistant 22L backpack.", priceCents: 11999, imageUrl: "https://picsum.photos/seed/backpack/64/64", stockQty: 0 }
    ]);
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      priceDollars: [0, [Validators.required, Validators.min(0)]],
      imageUrl: ["", [Validators.required]],
      stockQty: [0, [Validators.required, Validators.min(0)]]
    });
    effect(() => {
      const mode = this.modal();
      const id = this.editId();
      if (mode === "edit" && id) {
        const p = this.products().find((x) => x.id === id);
        if (p) {
          this.form.reset({
            name: p.name,
            description: p.description,
            priceDollars: p.priceCents / 100,
            imageUrl: p.imageUrl,
            stockQty: p.stockQty
          });
        }
      } else if (mode === "new") {
        this.form.reset({ name: "", description: "", priceDollars: 0, imageUrl: "", stockQty: 0 });
      }
    });
  }
  openNew() {
    this.router.navigate([], { relativeTo: this.route, queryParams: { modal: "new" } });
  }
  openEdit(p) {
    this.router.navigate([], { relativeTo: this.route, queryParams: { modal: "edit", id: p.id } });
  }
  closeModal() {
    this.router.navigate([], { relativeTo: this.route, queryParams: {} });
  }
  save() {
    if (this.form.invalid)
      return;
    const v = this.form.value;
    const payload = {
      id: this.editId() ?? "p" + (this.products().length + 1),
      name: v.name,
      description: v.description,
      priceCents: Math.round(v.priceDollars * 100),
      imageUrl: v.imageUrl,
      stockQty: v.stockQty
    };
    if (this.modal() === "edit") {
      this.products.update((list) => list.map((p) => p.id === payload.id ? payload : p));
    } else {
      this.products.update((list) => [...list, payload]);
    }
    this.closeModal();
  }
  remove(p) {
    this.products.update((list) => list.filter((x) => x.id !== p.id));
  }
  static {
    this.\u0275fac = function AdminProductsComponent_Factory(t) {
      return new (t || _AdminProductsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductsComponent, selectors: [["app-admin-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 1, consts: [["data-testid", "admin-products", 1, "page"], [1, "page-header"], [1, "muted"], ["data-testid", "admin-new-product", 1, "btn", 3, "click"], [1, "table-wrap"], [1, "data"], [1, "modal-backdrop"], [1, "row"], ["width", "40", "height", "40", 1, "admin-thumb", 3, "src", "alt"], [1, "badge", "badge-out"], [1, "text-right"], [1, "btn-ghost", 3, "click"], [1, "btn-ghost", "danger-link", 3, "click"], [1, "modal-backdrop", 3, "click"], ["data-testid", "admin-modal", 1, "modal", "card", 3, "click"], [1, "row", "between"], ["aria-label", "Close", 1, "btn-ghost", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "p-name"], ["id", "p-name", "type", "text", "formControlName", "name", "data-testid", "admin-field-name"], ["for", "p-desc"], ["id", "p-desc", "formControlName", "description", "data-testid", "admin-field-description"], [1, "row", "row-wrap"], [1, "field", 2, "flex", "1", "min-width", "140px"], ["for", "p-price"], ["id", "p-price", "type", "number", "min", "0", "step", "0.01", "formControlName", "priceDollars", "data-testid", "admin-field-price"], ["for", "p-stock"], ["id", "p-stock", "type", "number", "min", "0", "step", "1", "formControlName", "stockQty", "data-testid", "admin-field-stock"], ["for", "p-image"], ["id", "p-image", "type", "url", "formControlName", "imageUrl", "data-testid", "admin-field-image", "placeholder", "https://\u2026"], [1, "row", "between", "mt-4"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", "data-testid", "admin-save", 1, "btn", 3, "disabled"]], template: function AdminProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Manage products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Create, edit, and remove catalog items.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function AdminProductsComponent_Template_button_click_7_listener() {
          return ctx.openNew();
        });
        \u0275\u0275text(8, "+ New product");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "table", 5)(11, "thead")(12, "tr")(13, "th");
        \u0275\u0275text(14, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "th");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "tbody");
        \u0275\u0275repeaterCreate(21, AdminProductsComponent_For_22_Template, 17, 10, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(23, AdminProductsComponent_Conditional_23_Template, 34, 3, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.products());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(23, ctx.modal() === "new" || ctx.modal() === "edit" ? 23 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MoneyPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductsComponent, { className: "AdminProductsComponent", filePath: "src/app/features/admin/admin-products.component.ts", lineNumber: 15 });
})();
export {
  AdminProductsComponent
};
//# sourceMappingURL=admin-products.component-NI2F2N22.js.map
