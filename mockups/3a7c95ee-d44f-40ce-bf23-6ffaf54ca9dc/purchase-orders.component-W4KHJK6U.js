import {
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  NgClass,
  computed,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I3S7QF5E.js";

// src/app/pages/purchase-orders/purchase-orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ modal: "new" });
var _c1 = (a0) => ["/purchase-orders", a0];
function PurchaseOrdersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1, "+ New PO");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function PurchaseOrdersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading purchase orders\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseOrdersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "\u{1F9FE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No purchase orders yet.");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseOrdersComponent_Conditional_8_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 11)(1, "td", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, o_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.id.toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((o_r1.supplier == null ? null : o_r1.supplier.name) || o_r1.supplierId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.statusClass(o_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.money(o_r1.totalCents));
  }
}
function PurchaseOrdersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "PO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 10);
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, PurchaseOrdersComponent_Conditional_8_For_14_Template, 10, 8, "tr", 11, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
function PurchaseOrdersComponent_Conditional_9_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275property("value", s_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4.name);
  }
}
function PurchaseOrdersComponent_Conditional_9_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function PurchaseOrdersComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_Conditional_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h2");
    \u0275\u0275text(4, "New purchase order");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 17);
    \u0275\u0275listener("ngSubmit", function PurchaseOrdersComponent_Conditional_9_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275elementStart(6, "div", 18)(7, "label", 19);
    \u0275\u0275text(8, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrdersComponent_Conditional_9_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.supplierId, $event) || (ctx_r1.form.supplierId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(10, PurchaseOrdersComponent_Conditional_9_For_11_Template, 2, 2, "option", 21, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 22);
    \u0275\u0275text(13, "A draft PO is created; add line items on the next screen.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PurchaseOrdersComponent_Conditional_9_Conditional_14_Template, 2, 1, "p", 23);
    \u0275\u0275elementStart(15, "div", 24)(16, "button", 25);
    \u0275\u0275listener("click", function PurchaseOrdersComponent_Conditional_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 26);
    \u0275\u0275text(19, "Create draft");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.supplierId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.suppliers());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(14, ctx_r1.error() ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
var PurchaseOrdersComponent = class _PurchaseOrdersComponent {
  constructor(auth, route, router) {
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.saving = signal(false);
    this.suppliers = signal([
      { id: "s1", name: "Globex Supply Co", email: "sales@globex.example" },
      { id: "s2", name: "Initech Components", email: "orders@initech.example" }
    ]);
    this.orders = signal([
      {
        id: "po1",
        supplierId: "s1",
        status: "draft",
        createdAt: "2026-07-08T10:00:00Z",
        supplier: { id: "s1", name: "Globex Supply Co", email: "sales@globex.example" },
        totalCents: 9e4
      },
      {
        id: "po2",
        supplierId: "s2",
        status: "ordered",
        createdAt: "2026-07-05T09:00:00Z",
        supplier: { id: "s2", name: "Initech Components", email: "orders@initech.example" },
        totalCents: 48e3
      },
      {
        id: "po3",
        supplierId: "s1",
        status: "received",
        createdAt: "2026-06-30T14:00:00Z",
        supplier: { id: "s1", name: "Globex Supply Co", email: "sales@globex.example" },
        totalCents: 128e3
      }
    ]);
    this.canEdit = computed(() => this.auth.isPurchasing());
    this.modalOpen = signal(false);
    this.form = { supplierId: "" };
  }
  ngOnInit() {
    this.route.queryParams.subscribe((q) => {
      this.modalOpen.set(q["modal"] === "new" && this.canEdit());
      if (this.modalOpen())
        this.form = { supplierId: this.suppliers()[0]?.id ?? "" };
    });
  }
  money(cents) {
    return ((cents ?? 0) / 100).toLocaleString(void 0, { style: "currency", currency: "USD" });
  }
  statusClass(s) {
    return s === "received" ? "badge-ok" : s === "ordered" ? "badge-info" : "badge-muted";
  }
  close() {
    this.router.navigate([], { queryParams: {} });
    this.modalOpen.set(false);
  }
  create() {
    if (!this.form.supplierId) {
      this.error.set("Choose a supplier.");
      return;
    }
    this.saving.set(true);
    const sup = this.suppliers().find((s) => s.id === this.form.supplierId) ?? null;
    const id = "po" + (this.orders().length + 1);
    this.orders.update((list) => [
      { id, supplierId: this.form.supplierId, status: "draft", supplier: sup, totalCents: 0, createdAt: "2026-07-12T00:00:00Z" },
      ...list
    ]);
    this.saving.set(false);
    this.modalOpen.set(false);
    this.router.navigate(["/purchase-orders", id]);
  }
  static {
    this.\u0275fac = function PurchaseOrdersComponent_Factory(t) {
      return new (t || _PurchaseOrdersComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseOrdersComponent, selectors: [["app-purchase-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "page"], [1, "page-head"], [1, "spacer"], ["routerLink", "/purchase-orders", 1, "btn", "btn-primary", 3, "queryParams"], [1, "state"], [1, "modal-backdrop"], [1, "spinner"], [1, "state-icon"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], [1, "link-row", 3, "routerLink"], [1, "mono"], [1, "badge", 3, "ngClass"], [1, "modal-backdrop", 3, "click"], [1, "modal", "card", 3, "click"], [1, "modal-head"], [3, "ngSubmit"], [1, "field"], ["for", "posup"], ["id", "posup", "name", "supplierId", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "hint"], [1, "error"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function PurchaseOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Purchase Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275template(5, PurchaseOrdersComponent_Conditional_5_Template, 2, 2, "a", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, PurchaseOrdersComponent_Conditional_6_Template, 4, 0, "div", 4)(7, PurchaseOrdersComponent_Conditional_7_Template, 5, 0)(8, PurchaseOrdersComponent_Conditional_8_Template, 15, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, PurchaseOrdersComponent_Conditional_9_Template, 20, 3, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.canEdit() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.orders().length === 0 ? 7 : 8);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(9, ctx.modalOpen() ? 9 : -1);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n/*# sourceMappingURL=purchase-orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseOrdersComponent, { className: "PurchaseOrdersComponent", filePath: "src/app/pages/purchase-orders/purchase-orders.component.ts", lineNumber: 19 });
})();
export {
  PurchaseOrdersComponent
};
//# sourceMappingURL=purchase-orders.component-W4KHJK6U.js.map
