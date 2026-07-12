import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-2HXCFDQC.js";
import {
  AuthService
} from "./chunk-Q2IOEOSU.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-CBFZCQFA.js";
import {
  CommonModule,
  __spreadProps,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I3S7QF5E.js";

// src/app/pages/purchase-order-detail/purchase-order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PurchaseOrderDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_For_44_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 17)(1, "button", 21);
    \u0275\u0275listener("click", function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_For_44_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const l_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeLine(l_r2.id));
    });
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_For_44_Conditional_9_Template, 3, 0, "td", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((l_r2.product == null ? null : l_r2.product.name) || l_r2.productId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.money(l_r2.unitCostCents));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.money(l_r2.qty * l_r2.unitCostCents));
    \u0275\u0275advance();
    \u0275\u0275conditional(9, ctx_r2.isDraft() && ctx_r2.canEdit() ? 9 : -1);
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_ForEmpty_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, "No line items yet.");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_55_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", p_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r5.name, " \u2014 ", ctx_r2.money(p_r5.costCents), "");
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 23);
    \u0275\u0275text(2, "Add line");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 25)(5, "label", 26);
    \u0275\u0275text(6, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_55_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newLine.productId, $event) || (ctx_r2.newLine.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_55_For_9_Template, 2, 3, "option", 28, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 29)(11, "label", 30);
    \u0275\u0275text(12, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_55_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newLine.qty, $event) || (ctx_r2.newLine.qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 32);
    \u0275\u0275listener("click", function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_55_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addLine());
    });
    \u0275\u0275text(15, "Add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newLine.productId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.products());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newLine.qty);
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_56_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_56_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.placeOrder());
    });
    \u0275\u0275text(1, "Place order");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const o_r7 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.working() || ((tmp_5_0 = o_r7.lines == null ? null : o_r7.lines.length) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : 0) === 0);
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_56_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_56_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.receive());
    });
    \u0275\u0275text(1, "Receive stock");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r2.working());
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_56_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Received \u2014 stock updated");
    \u0275\u0275elementEnd();
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_56_Conditional_1_Template, 2, 1, "button", 33)(2, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_56_Conditional_2_Template, 2, 1)(3, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_56_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, o_r7.status === "draft" ? 1 : o_r7.status === "ordered" ? 2 : 3);
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1, "Only purchasing or admin can edit and progress this order.");
    \u0275\u0275elementEnd();
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 5);
    \u0275\u0275elementStart(4, "div", 6)(5, "span", 7);
    \u0275\u0275text(6, "Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 7);
    \u0275\u0275text(10, "Ordered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14, "Received");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "span", 12);
    \u0275\u0275text(19, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 13);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 11)(23, "span", 12);
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 13);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "h2", 14);
    \u0275\u0275text(28, "Line items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 15)(30, "table", 16)(31, "thead")(32, "tr")(33, "th");
    \u0275\u0275text(34, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 17);
    \u0275\u0275text(36, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 17);
    \u0275\u0275text(38, "Unit cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 17);
    \u0275\u0275text(40, "Line total");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_41_Template, 1, 0, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tbody");
    \u0275\u0275repeaterCreate(43, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_For_44_Template, 10, 5, "tr", null, _forTrack0, false, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_ForEmpty_45_Template, 3, 0, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "tfoot")(47, "tr")(48, "td", 18)(49, "strong");
    \u0275\u0275text(50, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "td", 17)(52, "strong");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_54_Template, 1, 0, "td");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(55, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_55_Template, 16, 2, "div", 19)(56, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_56_Template, 4, 1, "div", 20)(57, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Conditional_57_Template, 2, 0);
  }
  if (rf & 2) {
    const o_r7 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("PO ", o_r7.id.toUpperCase(), "");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("done", o_r7.status !== "draft")("current", o_r7.status === "draft");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("done", o_r7.status === "received")("current", o_r7.status === "ordered");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("current", o_r7.status === "received");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((o_r7.supplier == null ? null : o_r7.supplier.name) || o_r7.supplierId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r7.status);
    \u0275\u0275advance(15);
    \u0275\u0275conditional(41, ctx_r2.isDraft() && ctx_r2.canEdit() ? 41 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(o_r7.lines);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.money(ctx_r2.totalCents()));
    \u0275\u0275advance();
    \u0275\u0275conditional(54, ctx_r2.isDraft() && ctx_r2.canEdit() ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(55, ctx_r2.isDraft() && ctx_r2.canEdit() ? 55 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(56, ctx_r2.canEdit() ? 56 : 57);
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 38);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Purchase order not found.");
    \u0275\u0275elementEnd()();
  }
}
function PurchaseOrderDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PurchaseOrderDetailComponent_Conditional_5_Conditional_0_Template, 58, 19)(1, PurchaseOrderDetailComponent_Conditional_5_Conditional_1_Template, 5, 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r2.order()) ? 0 : 1, tmp_1_0);
  }
}
var PurchaseOrderDetailComponent = class _PurchaseOrderDetailComponent {
  constructor(auth, route) {
    this.auth = auth;
    this.route = route;
    this.loading = signal(false);
    this.error = signal(null);
    this.working = signal(false);
    this.id = "";
    this.products = signal([
      { id: "p1", sku: "WID-001", name: "Widget", costCents: 450, priceCents: 999, onHand: 120 },
      { id: "p2", sku: "GAD-002", name: "Gadget", costCents: 1200, priceCents: 2499, onHand: 64 },
      { id: "p3", sku: "SPR-003", name: "Sprocket", costCents: 80, priceCents: 249, onHand: 340 }
    ]);
    this.order = signal({
      id: "po1",
      supplierId: "s1",
      status: "draft",
      createdAt: "2026-07-08T10:00:00Z",
      supplier: { id: "s1", name: "Globex Supply Co", email: "sales@globex.example" },
      lines: [
        {
          id: "l1",
          poId: "po1",
          productId: "p1",
          qty: 100,
          unitCostCents: 450,
          product: { id: "p1", sku: "WID-001", name: "Widget", costCents: 450, priceCents: 999, onHand: 120 }
        },
        {
          id: "l2",
          poId: "po1",
          productId: "p3",
          qty: 500,
          unitCostCents: 80,
          product: { id: "p3", sku: "SPR-003", name: "Sprocket", costCents: 80, priceCents: 249, onHand: 340 }
        }
      ]
    });
    this.canEdit = computed(() => this.auth.isPurchasing());
    this.isDraft = computed(() => this.order().status === "draft");
    this.totalCents = computed(() => (this.order().lines ?? []).reduce((sum, l) => sum + l.qty * l.unitCostCents, 0));
    this.newLine = { productId: "", qty: "1" };
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    this.newLine.productId = this.products()[0]?.id ?? "";
  }
  money(cents) {
    return (cents / 100).toLocaleString(void 0, { style: "currency", currency: "USD" });
  }
  addLine() {
    const p = this.products().find((x) => x.id === this.newLine.productId);
    if (!p)
      return;
    const qty = Math.max(1, parseInt(this.newLine.qty || "1", 10));
    const line = {
      id: "l" + Date.now(),
      poId: this.order().id,
      productId: p.id,
      qty,
      unitCostCents: p.costCents,
      product: p
    };
    this.order.update((o) => __spreadProps(__spreadValues({}, o), { lines: [...o.lines ?? [], line] }));
    this.newLine.qty = "1";
  }
  removeLine(lineId) {
    this.order.update((o) => __spreadProps(__spreadValues({}, o), { lines: (o.lines ?? []).filter((l) => l.id !== lineId) }));
  }
  placeOrder() {
    this.working.set(true);
    this.order.update((o) => __spreadProps(__spreadValues({}, o), { status: "ordered" }));
    this.working.set(false);
  }
  receive() {
    this.working.set(true);
    this.order.update((o) => __spreadProps(__spreadValues({}, o), { status: "received" }));
    this.working.set(false);
  }
  static {
    this.\u0275fac = function PurchaseOrderDetailComponent_Factory(t) {
      return new (t || _PurchaseOrderDetailComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseOrderDetailComponent, selectors: [["app-purchase-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "page"], [1, "page-head"], ["routerLink", "/purchase-orders", 1, "btn", "btn-ghost", "btn-sm"], [1, "state"], [1, "spinner"], [1, "spacer"], [1, "steps"], [1, "step"], [1, "step-sep"], [1, "card", "card-pad", "stack"], [1, "dl"], [1, "dl-row"], [1, "dl-key"], [1, "dl-val"], [2, "font-size", "var(--fs-lg)", "margin-top", "var(--space-5)"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], ["colspan", "3", 1, "num"], [1, "card", "card-pad"], [1, "toolbar", 2, "margin-top", "var(--space-5)"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["colspan", "5", 1, "muted", "center"], [2, "font-size", "var(--fs-md)", "margin-bottom", "var(--space-3)"], [1, "row", "row-wrap"], [1, "field", 2, "flex", "2", "margin", "0"], ["for", "poprod"], ["id", "poprod", "name", "productId", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "field", 2, "flex", "1", "margin", "0"], ["for", "poqty"], ["id", "poqty", "type", "number", "min", "1", "name", "qty", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-outline", 2, "align-self", "flex-end", 3, "click"], [1, "btn", "btn-primary", 3, "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-accent", 3, "click", "disabled"], [1, "badge", "badge-ok"], [1, "hint", 2, "margin-top", "var(--space-4)"], [1, "state-icon"]], template: function PurchaseOrderDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Purchase orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, PurchaseOrderDetailComponent_Conditional_4_Template, 4, 0, "div", 3)(5, PurchaseOrderDetailComponent_Conditional_5_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.loading() ? 4 : 5);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink], styles: ["\n\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--color-border);\n}\n/*# sourceMappingURL=purchase-order-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseOrderDetailComponent, { className: "PurchaseOrderDetailComponent", filePath: "src/app/pages/purchase-order-detail/purchase-order-detail.component.ts", lineNumber: 21 });
})();
export {
  PurchaseOrderDetailComponent
};
//# sourceMappingURL=purchase-order-detail.component-DUVYHFBR.js.map
