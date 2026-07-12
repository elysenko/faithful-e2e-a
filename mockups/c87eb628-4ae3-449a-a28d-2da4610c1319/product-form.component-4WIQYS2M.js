import {
  AuthService
} from "./chunk-WUH3AZNU.js";
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
} from "./chunk-O3VZIQDQ.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  computed,
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
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VVK4PSXI.js";

// src/app/pages/product-form/product-form.component.ts
function ProductFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Out");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Low");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "OK");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Read-only \u2014 product editing requires admin.");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "SKU is required.");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Enter a valid cost.");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Enter a valid price.");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Enter a valid quantity.");
    \u0275\u0275elementEnd();
  }
}
var ProductFormComponent = class _ProductFormComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.fb = inject(FormBuilder);
    this.isAdmin = this.auth.hasRole("admin");
    this.id = inject(ActivatedRoute).snapshot.paramMap.get("id");
    this.products = signal([
      { id: "p1", sku: "STL-001", name: "Steel Bolt M8", cost: 0.45, price: 1.2, onHand: 1200 },
      { id: "p2", sku: "STL-002", name: "Steel Nut M8", cost: 0.3, price: 0.9, onHand: 1500 },
      { id: "p3", sku: "PIP-050", name: "PVC Pipe 50mm", cost: 3.2, price: 7.5, onHand: 340 },
      { id: "p4", sku: "PIP-075", name: "PVC Pipe 75mm", cost: 4.8, price: 10.9, onHand: 210 },
      { id: "p5", sku: "WIR-014", name: "Copper Wire 14AWG", cost: 12, price: 24, onHand: 85 },
      { id: "p6", sku: "WIR-012", name: "Copper Wire 12AWG", cost: 15.5, price: 30, onHand: 60 },
      { id: "p7", sku: "PNL-100", name: "Control Panel", cost: 145, price: 320, onHand: 18 },
      { id: "p8", sku: "SEN-200", name: "Proximity Sensor", cost: 22.5, price: 49, onHand: 140 },
      { id: "p9", sku: "VLV-030", name: "Ball Valve 30mm", cost: 9.75, price: 21, onHand: 0 },
      { id: "p10", sku: "GSK-008", name: "Rubber Gasket", cost: 0.85, price: 2.4, onHand: 4 }
    ]);
    this.product = computed(() => this.products().find((p) => p.id === this.id) ?? this.products()[0]);
    this.form = this.fb.group({
      sku: [this.product().sku, Validators.required],
      name: [this.product().name, Validators.required],
      cost: [this.product().cost, [Validators.required, Validators.min(0)]],
      price: [this.product().price, [Validators.required, Validators.min(0)]],
      onHand: [this.product().onHand, [Validators.required, Validators.min(0)]]
    });
    if (!this.isAdmin) {
      this.form.disable();
    }
  }
  save() {
    if (!this.isAdmin || this.form.invalid)
      return;
  }
  static {
    this.\u0275fac = function ProductFormComponent_Factory(t) {
      return new (t || _ProductFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFormComponent, selectors: [["app-product-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 11, consts: [[1, "container"], [1, "breadcrumb"], ["routerLink", "/products"], [1, "row-between", "section-title"], [1, "stack"], [1, "eyebrow"], [1, "row", "wrap-gap"], [1, "badge", "badge-danger"], [1, "alert", "alert-info"], [1, "card", "card-pad", 3, "ngSubmit", "formGroup"], [1, "grid-two"], [1, "field"], ["type", "text", "formControlName", "sku", 1, "input"], [1, "field-error"], ["type", "text", "formControlName", "name", 1, "input"], ["type", "number", "step", "0.01", "formControlName", "cost", 1, "input"], ["type", "number", "step", "0.01", "formControlName", "price", 1, "input"], ["type", "number", "formControlName", "onHand", 1, "input"], [1, "divider"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["routerLink", "/products", 1, "btn", "btn-ghost"], [1, "badge", "badge-warning"], [1, "badge", "badge-success"]], template: function ProductFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275text(3, "Products");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "span", 5);
        \u0275\u0275text(8, "Inventory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h2");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275template(12, ProductFormComponent_Conditional_12_Template, 2, 0, "span", 7)(13, ProductFormComponent_Conditional_13_Template, 2, 0)(14, ProductFormComponent_Conditional_14_Template, 2, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(15, ProductFormComponent_Conditional_15_Template, 2, 0, "div", 8);
        \u0275\u0275elementStart(16, "form", 9);
        \u0275\u0275listener("ngSubmit", function ProductFormComponent_Template_form_ngSubmit_16_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "label");
        \u0275\u0275text(20, "SKU");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 12);
        \u0275\u0275template(22, ProductFormComponent_Conditional_22_Template, 2, 0, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 11)(24, "label");
        \u0275\u0275text(25, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 14);
        \u0275\u0275template(27, ProductFormComponent_Conditional_27_Template, 2, 0, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 11)(29, "label");
        \u0275\u0275text(30, "Cost");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 15);
        \u0275\u0275template(32, ProductFormComponent_Conditional_32_Template, 2, 0, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 11)(34, "label");
        \u0275\u0275text(35, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 16);
        \u0275\u0275template(37, ProductFormComponent_Conditional_37_Template, 2, 0, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 11)(39, "label");
        \u0275\u0275text(40, "On hand");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "input", 17);
        \u0275\u0275template(42, ProductFormComponent_Conditional_42_Template, 2, 0, "span", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(43, "div", 18);
        \u0275\u0275elementStart(44, "div", 6)(45, "button", 19);
        \u0275\u0275text(46, "Save");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "a", 20);
        \u0275\u0275text(48, "Back");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" / ", ctx.product().name, " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.product().name);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(12, ctx.product().onHand === 0 ? 12 : ctx.product().onHand < 10 ? 13 : 14);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(15, !ctx.isAdmin ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(22, ctx.form.controls.sku.invalid && ctx.form.controls.sku.touched ? 22 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(27, ctx.form.controls.name.invalid && ctx.form.controls.name.touched ? 27 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(32, ctx.form.controls.cost.invalid && ctx.form.controls.cost.touched ? 32 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(37, ctx.form.controls.price.invalid && ctx.form.controls.price.touched ? 37 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(42, ctx.form.controls.onHand.invalid && ctx.form.controls.onHand.touched ? 42 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.isAdmin);
      }
    }, dependencies: [CommonModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFormComponent, { className: "ProductFormComponent", filePath: "src/app/pages/product-form/product-form.component.ts", lineNumber: 14 });
})();
export {
  ProductFormComponent
};
//# sourceMappingURL=product-form.component-4WIQYS2M.js.map
