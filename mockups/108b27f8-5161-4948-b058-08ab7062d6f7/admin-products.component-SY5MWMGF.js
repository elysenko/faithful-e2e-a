import {
  ApiService
} from "./chunk-Y35ABHFS.js";
import {
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IS4ZVKQ7.js";

// src/app/pages/admin-products/admin-products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/admin/products", a0];
function AdminProductsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading products\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminProductsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AdminProductsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "\u{1F3F7}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No products yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 3);
    \u0275\u0275text(6, "Create the first product");
    \u0275\u0275elementEnd()();
  }
}
function AdminProductsComponent_Conditional_10_For_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_10_For_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3.stockQty);
  }
}
function AdminProductsComponent_Conditional_10_For_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3.stockQty);
  }
}
function AdminProductsComponent_Conditional_10_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementStart(4, "div", 14)(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 10);
    \u0275\u0275template(12, AdminProductsComponent_Conditional_10_For_14_Conditional_12_Template, 2, 0, "span", 17)(13, AdminProductsComponent_Conditional_10_For_14_Conditional_13_Template, 2, 1)(14, AdminProductsComponent_Conditional_10_For_14_Conditional_14_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 11)(16, "div", 18)(17, "a", 19);
    \u0275\u0275text(18, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 20);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_10_For_14_Template_button_click_19_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(p_r3));
    });
    \u0275\u0275text(20, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", p_r3.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.money(p_r3.priceCents));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, p_r3.stockQty === 0 ? 12 : p_r3.stockQty <= 5 ? 13 : 14);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, p_r3.id));
  }
}
function AdminProductsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 10);
    \u0275\u0275text(7, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 10);
    \u0275\u0275text(9, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 11);
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, AdminProductsComponent_Conditional_10_For_14_Template, 21, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r0.products());
  }
}
var AdminProductsComponent = class _AdminProductsComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.products = signal([
      { id: "p1", name: "Aurora Wireless Headphones", description: "Noise-cancelling over-ear headphones.", priceCents: 18900, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&q=80", stockQty: 24 },
      { id: "p2", name: "Terra Insulated Bottle", description: "Stainless steel insulated bottle.", priceCents: 3200, imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=120&q=80", stockQty: 120 },
      { id: "p3", name: "Nomad Leather Backpack", description: "Full-grain leather commuter pack.", priceCents: 14500, imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=120&q=80", stockQty: 8 },
      { id: "p4", name: "Lumen Desk Lamp", description: "Dimmable LED lamp with wireless charging.", priceCents: 6400, imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=120&q=80", stockQty: 3 },
      { id: "p6", name: "Grove Ceramic Mug Set", description: "Set of four stoneware mugs.", priceCents: 4200, imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=120&q=80", stockQty: 0 }
    ]);
  }
  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
    this.api.listProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load products.");
        this.loading.set(false);
      }
    });
  }
  remove(product) {
    this.products.update((list) => list.filter((p) => p.id !== product.id));
    this.api.deleteProduct(product.id).subscribe({ error: () => {
    } });
  }
  money(cents) {
    return "$" + (cents / 100).toFixed(2);
  }
  static {
    this.\u0275fac = function AdminProductsComponent_Factory(t) {
      return new (t || _AdminProductsComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductsComponent, selectors: [["app-admin-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "container"], [1, "page-head"], [1, "spacer"], ["routerLink", "/admin/products/new", 1, "btn", "btn-primary"], [1, "state"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], [1, "actions-col"], [1, "prod-cell"], ["width", "48", "height", "48", 3, "src", "alt"], [1, "prod-text"], [1, "prod-name"], [1, "prod-desc", "muted"], [1, "badge", "badge-danger"], [1, "row-actions"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "badge", "badge-warn"], [1, "badge", "badge-ok"]], template: function AdminProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Products");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementStart(5, "a", 3);
        \u0275\u0275text(6, "+ New product");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, AdminProductsComponent_Conditional_7_Template, 4, 0, "div", 4)(8, AdminProductsComponent_Conditional_8_Template, 5, 1)(9, AdminProductsComponent_Conditional_9_Template, 7, 0)(10, AdminProductsComponent_Conditional_10_Template, 15, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.loading() ? 7 : ctx.error() ? 8 : ctx.products().length === 0 ? 9 : 10);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.prod-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.prod-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius);\n  object-fit: cover;\n  background: var(--color-surface-inset);\n}\n.prod-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.prod-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.prod-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  max-width: 340px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: var(--space-2);\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .prod-desc[_ngcontent-%COMP%] {\n    max-width: 160px;\n  }\n}\n/*# sourceMappingURL=admin-products.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductsComponent, { className: "AdminProductsComponent", filePath: "src/app/pages/admin-products/admin-products.component.ts", lineNumber: 18 });
})();
export {
  AdminProductsComponent
};
//# sourceMappingURL=admin-products.component-SY5MWMGF.js.map
