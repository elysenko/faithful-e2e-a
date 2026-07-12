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
} from "./chunk-2HXCFDQC.js";
import {
  AuthService
} from "./chunk-Q2IOEOSU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-CBFZCQFA.js";
import {
  CommonModule,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I3S7QF5E.js";

// src/app/pages/products/products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ modal: "new" });
var _c1 = (a0) => ["/products", a0];
var _c2 = (a0) => ({ edit: a0 });
function ProductsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1, "+ New product");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ProductsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Admin edits stock & pricing");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading products\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ProductsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 8);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No products yet.");
    \u0275\u0275elementEnd()();
  }
}
function ProductsComponent_Conditional_9_For_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275listener("click", function ProductsComponent_Conditional_9_For_17_Conditional_13_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 16);
    \u0275\u0275listener("click", function ProductsComponent_Conditional_9_For_17_Conditional_13_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const p_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(p_r2.id, $event));
    });
    \u0275\u0275text(3, "Delete");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c2, p_r2.id));
  }
}
function ProductsComponent_Conditional_9_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 11)(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 11);
    \u0275\u0275template(13, ProductsComponent_Conditional_9_For_17_Conditional_13_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, p_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.sku || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.money(p_r2.costCents));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.money(p_r2.priceCents));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-warn", p_r2.onHand < 25)("badge-ok", p_r2.onHand >= 25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.onHand);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(13, ctx_r2.canEdit() ? 13 : -1);
  }
}
function ProductsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 11);
    \u0275\u0275text(9, "Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 11);
    \u0275\u0275text(11, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 11);
    \u0275\u0275text(13, "On hand");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, ProductsComponent_Conditional_9_For_17_Template, 14, 13, "tr", 12, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.products());
  }
}
function ProductsComponent_Conditional_10_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function ProductsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function ProductsComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275listener("click", function ProductsComponent_Conditional_10_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 19)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 20);
    \u0275\u0275listener("ngSubmit", function ProductsComponent_Conditional_10_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(6, "div", 21)(7, "label", 22);
    \u0275\u0275text(8, "SKU (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Conditional_10_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.sku, $event) || (ctx_r2.form.sku = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 21)(11, "label", 24);
    \u0275\u0275text(12, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Conditional_10_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "div", 27)(16, "label", 28);
    \u0275\u0275text(17, "Cost ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Conditional_10_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.cost, $event) || (ctx_r2.form.cost = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 27)(20, "label", 30);
    \u0275\u0275text(21, "Price ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Conditional_10_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.price, $event) || (ctx_r2.form.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 21)(24, "label", 32);
    \u0275\u0275text(25, "On hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Conditional_10_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.onHand, $event) || (ctx_r2.form.onHand = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, ProductsComponent_Conditional_10_Conditional_27_Template, 2, 1, "p", 34);
    \u0275\u0275elementStart(28, "div", 35)(29, "button", 36);
    \u0275\u0275listener("click", function ProductsComponent_Conditional_10_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 37);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingId() ? "Edit product" : "New product");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.sku);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.cost);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.onHand);
    \u0275\u0275advance();
    \u0275\u0275conditional(27, ctx_r2.error() ? 27 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving() ? "Saving\u2026" : "Save", " ");
  }
}
var ProductsComponent = class _ProductsComponent {
  constructor(auth, route, router) {
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.saving = signal(false);
    this.products = signal([
      { id: "p1", sku: "WID-001", name: "Widget", costCents: 450, priceCents: 999, onHand: 120 },
      { id: "p2", sku: "GAD-002", name: "Gadget", costCents: 1200, priceCents: 2499, onHand: 64 },
      { id: "p3", sku: "SPR-003", name: "Sprocket", costCents: 80, priceCents: 249, onHand: 340 },
      { id: "p4", sku: "BLT-004", name: "Bolt (pack of 50)", costCents: 320, priceCents: 699, onHand: 210 },
      { id: "p5", sku: null, name: "Assembly Kit", costCents: 5400, priceCents: 8900, onHand: 22 }
    ]);
    this.canEdit = computed(() => this.auth.isAdmin());
    this.modalOpen = signal(false);
    this.editingId = signal(null);
    this.form = { sku: "", name: "", cost: "", price: "", onHand: "0" };
  }
  ngOnInit() {
    this.route.queryParams.subscribe((q) => {
      if (q["modal"] === "new" && this.canEdit()) {
        this.openCreate();
      } else if (q["edit"]) {
        this.openEdit(q["edit"]);
      } else {
        this.modalOpen.set(false);
      }
    });
  }
  money(cents) {
    return (cents / 100).toLocaleString(void 0, { style: "currency", currency: "USD" });
  }
  openCreate() {
    this.editingId.set(null);
    this.form = { sku: "", name: "", cost: "", price: "", onHand: "0" };
    this.modalOpen.set(true);
  }
  openEdit(id) {
    const p = this.products().find((x) => x.id === id);
    if (!p)
      return;
    this.editingId.set(id);
    this.form = {
      sku: p.sku ?? "",
      name: p.name,
      cost: (p.costCents / 100).toFixed(2),
      price: (p.priceCents / 100).toFixed(2),
      onHand: String(p.onHand)
    };
    this.modalOpen.set(true);
  }
  close() {
    this.router.navigate([], { queryParams: {} });
    this.modalOpen.set(false);
  }
  save() {
    if (!this.form.name) {
      this.error.set("Name is required.");
      return;
    }
    this.saving.set(true);
    const patch = {
      sku: this.form.sku || null,
      name: this.form.name,
      costCents: Math.round(parseFloat(this.form.cost || "0") * 100),
      priceCents: Math.round(parseFloat(this.form.price || "0") * 100),
      onHand: parseInt(this.form.onHand || "0", 10)
    };
    const id = this.editingId();
    if (id) {
      this.products.update((list) => list.map((p) => p.id === id ? __spreadValues(__spreadValues({}, p), patch) : p));
    } else {
      this.products.update((list) => [
        __spreadValues({ id: "p" + (list.length + 1) }, patch),
        ...list
      ]);
    }
    this.saving.set(false);
    this.close();
  }
  remove(id, ev) {
    ev.stopPropagation();
    if (!this.canEdit())
      return;
    this.products.update((list) => list.filter((p) => p.id !== id));
  }
  static {
    this.\u0275fac = function ProductsComponent_Factory(t) {
      return new (t || _ProductsComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [[1, "page"], [1, "page-head"], [1, "spacer"], ["routerLink", "/products", 1, "btn", "btn-primary", 3, "queryParams"], [1, "state"], [1, "modal-backdrop"], [1, "badge", "badge-muted"], [1, "spinner"], [1, "state-icon"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], [1, "link-row", 3, "routerLink"], [1, "mono", "muted"], [1, "badge"], ["routerLink", "/products", 1, "btn", "btn-ghost", "btn-sm", 3, "click", "queryParams"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", "card", 3, "click"], [1, "modal-head"], [3, "ngSubmit"], [1, "field"], ["for", "psku"], ["id", "psku", "name", "sku", "placeholder", "WID-001", 3, "ngModelChange", "ngModel"], ["for", "pname"], ["id", "pname", "name", "name", "placeholder", "Product name", 3, "ngModelChange", "ngModel"], [1, "row", "row-wrap"], [1, "field", 2, "flex", "1"], ["for", "pcost"], ["id", "pcost", "type", "number", "step", "0.01", "min", "0", "name", "cost", "placeholder", "0.00", 3, "ngModelChange", "ngModel"], ["for", "pprice"], ["id", "pprice", "type", "number", "step", "0.01", "min", "0", "name", "price", "placeholder", "0.00", 3, "ngModelChange", "ngModel"], ["for", "ponhand"], ["id", "ponhand", "type", "number", "min", "0", "name", "onHand", 3, "ngModelChange", "ngModel"], [1, "error"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Products");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275template(5, ProductsComponent_Conditional_5_Template, 2, 2, "a", 3)(6, ProductsComponent_Conditional_6_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ProductsComponent_Conditional_7_Template, 4, 0, "div", 4)(8, ProductsComponent_Conditional_8_Template, 5, 0)(9, ProductsComponent_Conditional_9_Template, 18, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, ProductsComponent_Conditional_10_Template, 33, 9, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.canEdit() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(7, ctx.loading() ? 7 : ctx.products().length === 0 ? 8 : 9);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(10, ctx.modalOpen() ? 10 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.num[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: var(--space-1);\n}\n/*# sourceMappingURL=products.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src/app/pages/products/products.component.ts", lineNumber: 20 });
})();
export {
  ProductsComponent
};
//# sourceMappingURL=products.component-SAAXDMMZ.js.map
