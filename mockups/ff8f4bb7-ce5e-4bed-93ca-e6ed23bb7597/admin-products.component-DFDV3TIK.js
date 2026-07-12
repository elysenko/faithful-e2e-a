import {
  ProductService
} from "./chunk-DUMMOMHU.js";
import {
  RouterLink
} from "./chunk-GPQOFHD2.js";
import {
  CommonModule,
  formatPrice,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2VXAXVQ7.js";

// src/app/admin/admin-products/admin-products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/admin/products", a0, "edit"];
function AdminProductsComponent_For_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Out");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_For_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Low \xB7 ", product_r2.stockQty, "");
  }
}
function AdminProductsComponent_For_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", product_r2.stockQty, " ");
  }
}
function AdminProductsComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 8)(1, "td", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 6);
    \u0275\u0275template(6, AdminProductsComponent_For_23_Conditional_6_Template, 2, 0, "span", 10)(7, AdminProductsComponent_For_23_Conditional_7_Template, 2, 1)(8, AdminProductsComponent_For_23_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 11)(10, "a", 12);
    \u0275\u0275text(11, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 13);
    \u0275\u0275listener("click", function AdminProductsComponent_For_23_Template_button_click_12_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(product_r2));
    });
    \u0275\u0275text(13, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.format(product_r2.priceCents));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(6, product_r2.stockQty <= 0 ? 6 : product_r2.stockQty <= ctx_r2.LOW_STOCK ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, product_r2.id));
  }
}
var AdminProductsComponent = class _AdminProductsComponent {
  constructor() {
    this.productService = inject(ProductService);
    this.format = formatPrice;
    this.LOW_STOCK = 15;
    this.products = signal([
      { id: "1", name: "CLASS-J Time-Delay Fuse 30A", description: "", priceCents: 1899, imageUrl: null, stockQty: 120 },
      { id: "2", name: "CLASS-CC Fast-Acting Fuse 15A", description: "", priceCents: 1249, imageUrl: null, stockQty: 84 },
      { id: "3", name: "DIN-Rail Fuse Holder (3-Pole)", description: "", priceCents: 2450, imageUrl: null, stockQty: 46 },
      { id: "4", name: "Semiconductor Fuse 63A aR", description: "", priceCents: 5675, imageUrl: null, stockQty: 0 },
      { id: "5", name: "Fused Disconnect Switch 100A", description: "", priceCents: 18900, imageUrl: null, stockQty: 12 },
      { id: "6", name: "Midget Fuse 10A 500V (Pack of 10)", description: "", priceCents: 3200, imageUrl: null, stockQty: 200 }
    ]);
  }
  ngOnInit() {
    this.productService.list().subscribe({
      next: (list) => this.products.set(list),
      error: () => {
      }
    });
  }
  remove(product) {
    if (!confirm(`Delete "${product.name}"? This cannot be undone.`))
      return;
    this.productService.remove(product.id).subscribe({
      next: () => this.products.update((list) => list.filter((p) => p.id !== product.id)),
      error: () => this.products.update((list) => list.filter((p) => p.id !== product.id))
    });
  }
  static {
    this.\u0275fac = function AdminProductsComponent_Factory(t) {
      return new (t || _AdminProductsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductsComponent, selectors: [["app-admin-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 0, consts: [[1, "container"], [1, "admin-head"], [1, "muted"], ["routerLink", "/admin/products/new", "data-testid", "new-product", 1, "btn", "btn-primary"], [1, "card", "table-wrap"], [1, "admin-table"], [1, "num"], [1, "actions-col"], ["data-testid", "admin-product-row"], [1, "name-cell"], [1, "badge", "badge-danger"], [1, "actions"], [1, "link-btn", 3, "routerLink"], ["type", "button", 1, "link-btn", "danger", 3, "click"], [1, "badge", "badge-warning"]], template: function AdminProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Manage catalog inventory");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3);
        \u0275\u0275text(8, "+ New product");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "table", 5)(11, "thead")(12, "tr")(13, "th");
        \u0275\u0275text(14, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th", 6);
        \u0275\u0275text(16, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th", 6);
        \u0275\u0275text(18, "Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th", 7);
        \u0275\u0275text(20, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "tbody");
        \u0275\u0275repeaterCreate(22, AdminProductsComponent_For_23_Template, 14, 6, "tr", 8, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275repeater(ctx.products());
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.admin-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: var(--sp-4);\n  flex-wrap: wrap;\n  margin-bottom: var(--sp-5);\n}\n.admin-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-1);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.admin-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--fs-base);\n  min-width: 560px;\n}\n.admin-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .admin-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--sp-3);\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n}\n.admin-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n  text-transform: uppercase;\n  letter-spacing: .03em;\n}\n.admin-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.name-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-3);\n  justify-content: flex-end;\n}\n.actions[_ngcontent-%COMP%]   .link-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n}\n.danger[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n/*# sourceMappingURL=admin-products.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductsComponent, { className: "AdminProductsComponent", filePath: "src/app/admin/admin-products/admin-products.component.ts", lineNumber: 15 });
})();
export {
  AdminProductsComponent
};
//# sourceMappingURL=admin-products.component-DFDV3TIK.js.map
