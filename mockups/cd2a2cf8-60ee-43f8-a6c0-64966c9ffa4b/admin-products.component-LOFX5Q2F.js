import {
  ProductService
} from "./chunk-V333DRWV.js";
import {
  MoneyPipe
} from "./chunk-7MEJQ5O4.js";
import {
  CommonModule,
  RouterLink,
  RouterOutlet,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-JG2HHNQL.js";

// src/app/features/admin/admin-products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => [a0, "edit"];
function AdminProductsComponent_For_24_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r2.stockQty);
  }
}
function AdminProductsComponent_For_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 6);
    \u0275\u0275template(9, AdminProductsComponent_For_24_Conditional_9_Template, 2, 1, "span")(10, AdminProductsComponent_For_24_Conditional_10_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 7)(12, "div", 11)(13, "a", 12);
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275listener("click", function AdminProductsComponent_For_24_Template_button_click_15_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(product_r2.id, product_r2.name));
    });
    \u0275\u0275text(16, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "admin-row-" + product_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", product_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, product_r2.priceCents));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(9, product_r2.stockQty > 0 ? 9 : 10);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, product_r2.id));
    \u0275\u0275attribute("data-testid", "edit-" + product_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-testid", "delete-" + product_r2.id);
  }
}
var AdminProductsComponent = class _AdminProductsComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = this.productService.products;
  }
  remove(id, name) {
    if (confirm(`Delete \u201C${name}\u201D? This cannot be undone.`)) {
      this.productService.remove(id);
    }
  }
  static {
    this.\u0275fac = function AdminProductsComponent_Factory(t) {
      return new (t || _AdminProductsComponent)(\u0275\u0275directiveInject(ProductService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductsComponent, selectors: [["app-admin-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 2, consts: [[1, "page"], [1, "admin-head"], [1, "muted"], ["routerLink", "new", "data-testid", "new-product", 1, "btn", "btn-primary"], [1, "card", "table-wrap"], [1, "admin-table"], [1, "num"], [1, "actions-col"], [1, "prod-cell"], ["width", "44", "height", "44", 3, "src", "alt"], [1, "prod-name"], [1, "row-actions"], [1, "btn", "btn-secondary", "btn-sm", 3, "routerLink"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "badge", "badge-warning"]], template: function AdminProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Manage products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3);
        \u0275\u0275text(8, "+ New product");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "router-outlet");
        \u0275\u0275elementStart(10, "div", 4)(11, "table", 5)(12, "thead")(13, "tr")(14, "th");
        \u0275\u0275text(15, "Product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th", 6);
        \u0275\u0275text(17, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th", 6);
        \u0275\u0275text(19, "Stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th", 7);
        \u0275\u0275text(21, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275repeaterCreate(23, AdminProductsComponent_For_24_Template, 17, 13, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.products().length, " product", ctx.products().length === 1 ? "" : "s", " in the catalog");
        \u0275\u0275advance(17);
        \u0275\u0275repeater(ctx.products());
      }
    }, dependencies: [CommonModule, RouterLink, RouterOutlet, MoneyPipe], styles: ["\n\n.admin-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-5);\n}\n.admin-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  margin-bottom: 2px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-top: var(--space-4);\n}\n.admin-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 560px;\n}\n.admin-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .admin-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: var(--space-3) var(--space-4);\n  border-bottom: 1px solid var(--color-border);\n}\n.admin-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.prod-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.prod-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n}\n.prod-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: var(--space-2);\n}\n/*# sourceMappingURL=admin-products.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductsComponent, { className: "AdminProductsComponent", filePath: "src/app/features/admin/admin-products.component.ts", lineNumber: 14 });
})();
export {
  AdminProductsComponent
};
//# sourceMappingURL=admin-products.component-LOFX5Q2F.js.map
