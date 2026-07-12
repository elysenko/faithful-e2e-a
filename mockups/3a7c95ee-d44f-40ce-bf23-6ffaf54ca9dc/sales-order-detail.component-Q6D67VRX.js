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
  Router,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I3S7QF5E.js";

// src/app/pages/sales-order-detail/sales-order-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/invoices", a0];
function SalesOrderDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_For_50_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 17)(1, "button", 22);
    \u0275\u0275listener("click", function SalesOrderDetailComponent_Conditional_5_Conditional_0_For_50_Conditional_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const l_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeLine(l_r2.id));
    });
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd()();
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 17)(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SalesOrderDetailComponent_Conditional_5_Conditional_0_For_50_Conditional_12_Template, 3, 0, "td", 17);
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
    \u0275\u0275classProp("badge-danger", l_r2.qty > ctx_r2.onHandFor(l_r2.productId))("badge-muted", l_r2.qty <= ctx_r2.onHandFor(l_r2.productId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.onHandFor(l_r2.productId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.money(l_r2.unitPriceCents));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.money(l_r2.qty * l_r2.unitPriceCents));
    \u0275\u0275advance();
    \u0275\u0275conditional(12, ctx_r2.isDraft() && ctx_r2.canEdit() ? 12 : -1);
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_ForEmpty_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No line items yet.");
    \u0275\u0275elementEnd()();
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_61_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", p_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", p_r5.name, " \u2014 ", ctx_r2.money(p_r5.priceCents), " (", p_r5.onHand, " on hand)");
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h3", 24);
    \u0275\u0275text(2, "Add line");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "div", 26)(5, "label", 27);
    \u0275\u0275text(6, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_61_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newLine.productId, $event) || (ctx_r2.newLine.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_61_For_9_Template, 2, 4, "option", 29, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 30)(11, "label", 31);
    \u0275\u0275text(12, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_61_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newLine.qty, $event) || (ctx_r2.newLine.qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 33);
    \u0275\u0275listener("click", function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_61_Template_button_click_14_listener() {
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
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.confirm());
    });
    \u0275\u0275text(1, "Confirm order");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const o_r7 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.working() || ((tmp_5_0 = o_r7.lines == null ? null : o_r7.lines.length) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : 0) === 0);
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.fulfill());
    });
    \u0275\u0275text(1, "Fulfill (ship stock)");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r2.working());
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.generateInvoice());
    });
    \u0275\u0275text(1, "Generate invoice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r2.working());
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275text(1, "View invoice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r2.createdInvoiceId()));
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "Invoiced");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_4_Conditional_2_Template, 2, 3, "a", 38);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, ctx_r2.createdInvoiceId() ? 2 : -1);
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_1_Template, 2, 1, "button", 34)(2, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_2_Template, 2, 1)(3, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_3_Template, 2, 1)(4, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Conditional_4_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, o_r7.status === "draft" ? 1 : o_r7.status === "confirmed" ? 2 : o_r7.status === "fulfilled" ? 3 : 4);
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, "Only sales or admin can edit and progress this order.");
    \u0275\u0275elementEnd();
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
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
    \u0275\u0275text(10, "Confirmed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14, "Fulfilled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 8);
    \u0275\u0275text(16, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 7);
    \u0275\u0275text(18, "Invoiced");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "div", 11)(22, "span", 12);
    \u0275\u0275text(23, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 13);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 11)(27, "span", 12);
    \u0275\u0275text(28, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 13);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "h2", 14);
    \u0275\u0275text(32, "Line items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 15)(34, "table", 16)(35, "thead")(36, "tr")(37, "th");
    \u0275\u0275text(38, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 17);
    \u0275\u0275text(40, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 17);
    \u0275\u0275text(42, "On hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 17);
    \u0275\u0275text(44, "Unit price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 17);
    \u0275\u0275text(46, "Line total");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_47_Template, 1, 0, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "tbody");
    \u0275\u0275repeaterCreate(49, SalesOrderDetailComponent_Conditional_5_Conditional_0_For_50_Template, 13, 10, "tr", null, _forTrack0, false, SalesOrderDetailComponent_Conditional_5_Conditional_0_ForEmpty_51_Template, 3, 0, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "tfoot")(53, "tr")(54, "td", 18)(55, "strong");
    \u0275\u0275text(56, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "td", 17)(58, "strong");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_60_Template, 1, 0, "td");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(61, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_61_Template, 16, 2, "div", 9)(62, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_62_Template, 2, 1, "p", 19)(63, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_63_Template, 5, 1, "div", 20)(64, SalesOrderDetailComponent_Conditional_5_Conditional_0_Conditional_64_Template, 2, 0);
  }
  if (rf & 2) {
    const o_r7 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("SO ", o_r7.id.toUpperCase(), "");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("done", o_r7.status !== "draft")("current", o_r7.status === "draft");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("done", o_r7.status === "fulfilled" || o_r7.status === "invoiced")("current", o_r7.status === "confirmed");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("done", o_r7.status === "invoiced")("current", o_r7.status === "fulfilled");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("current", o_r7.status === "invoiced");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((o_r7.customer == null ? null : o_r7.customer.name) || o_r7.customerId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r7.status);
    \u0275\u0275advance(17);
    \u0275\u0275conditional(47, ctx_r2.isDraft() && ctx_r2.canEdit() ? 47 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(o_r7.lines);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.money(ctx_r2.totalCents()));
    \u0275\u0275advance();
    \u0275\u0275conditional(60, ctx_r2.isDraft() && ctx_r2.canEdit() ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(61, ctx_r2.isDraft() && ctx_r2.canEdit() ? 61 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(62, ctx_r2.error() ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(63, ctx_r2.canEdit() ? 63 : 64);
  }
}
function SalesOrderDetailComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 40);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Sales order not found.");
    \u0275\u0275elementEnd()();
  }
}
function SalesOrderDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SalesOrderDetailComponent_Conditional_5_Conditional_0_Template, 65, 24)(1, SalesOrderDetailComponent_Conditional_5_Conditional_1_Template, 5, 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r2.order()) ? 0 : 1, tmp_1_0);
  }
}
var SalesOrderDetailComponent = class _SalesOrderDetailComponent {
  constructor(auth, route, router) {
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.working = signal(false);
    this.createdInvoiceId = signal(null);
    this.id = "";
    this.products = signal([
      { id: "p1", sku: "WID-001", name: "Widget", costCents: 450, priceCents: 999, onHand: 120 },
      { id: "p2", sku: "GAD-002", name: "Gadget", costCents: 1200, priceCents: 2499, onHand: 64 },
      { id: "p3", sku: "SPR-003", name: "Sprocket", costCents: 80, priceCents: 249, onHand: 5 }
    ]);
    this.order = signal({
      id: "so1",
      customerId: "c1",
      status: "draft",
      customer: { id: "c1", name: "Northwind Traders", email: "orders@northwind.example" },
      lines: [
        {
          id: "l1",
          soId: "so1",
          productId: "p1",
          qty: 50,
          unitPriceCents: 999,
          product: { id: "p1", sku: "WID-001", name: "Widget", costCents: 450, priceCents: 999, onHand: 120 }
        }
      ]
    });
    this.canEdit = computed(() => this.auth.isSales());
    this.isDraft = computed(() => this.order().status === "draft");
    this.totalCents = computed(() => (this.order().lines ?? []).reduce((sum, l) => sum + l.qty * l.unitPriceCents, 0));
    this.newLine = { productId: "", qty: "1" };
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    this.newLine.productId = this.products()[0]?.id ?? "";
  }
  money(cents) {
    return (cents / 100).toLocaleString(void 0, { style: "currency", currency: "USD" });
  }
  onHandFor(productId) {
    return this.products().find((p) => p.id === productId)?.onHand ?? 0;
  }
  addLine() {
    const p = this.products().find((x) => x.id === this.newLine.productId);
    if (!p)
      return;
    const qty = Math.max(1, parseInt(this.newLine.qty || "1", 10));
    const line = {
      id: "l" + Date.now(),
      soId: this.order().id,
      productId: p.id,
      qty,
      unitPriceCents: p.priceCents,
      product: p
    };
    this.order.update((o) => __spreadProps(__spreadValues({}, o), { lines: [...o.lines ?? [], line] }));
    this.newLine.qty = "1";
  }
  removeLine(lineId) {
    this.order.update((o) => __spreadProps(__spreadValues({}, o), { lines: (o.lines ?? []).filter((l) => l.id !== lineId) }));
  }
  confirm() {
    this.working.set(true);
    this.order.update((o) => __spreadProps(__spreadValues({}, o), { status: "confirmed" }));
    this.working.set(false);
  }
  fulfill() {
    this.error.set(null);
    const short = (this.order().lines ?? []).find((l) => l.qty > this.onHandFor(l.productId));
    if (short) {
      this.error.set(`Insufficient stock for ${short.product?.name || short.productId}: need ${short.qty}, only ${this.onHandFor(short.productId)} on hand.`);
      return;
    }
    this.working.set(true);
    this.order.update((o) => __spreadProps(__spreadValues({}, o), { status: "fulfilled" }));
    this.working.set(false);
  }
  generateInvoice() {
    this.working.set(true);
    const invId = "inv-" + this.order().id;
    this.order.update((o) => __spreadProps(__spreadValues({}, o), { status: "invoiced" }));
    this.createdInvoiceId.set(invId);
    this.working.set(false);
  }
  static {
    this.\u0275fac = function SalesOrderDetailComponent_Factory(t) {
      return new (t || _SalesOrderDetailComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesOrderDetailComponent, selectors: [["app-sales-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "page"], [1, "page-head"], ["routerLink", "/sales-orders", 1, "btn", "btn-ghost", "btn-sm"], [1, "state"], [1, "spinner"], [1, "spacer"], [1, "steps"], [1, "step"], [1, "step-sep"], [1, "card", "card-pad"], [1, "dl"], [1, "dl-row"], [1, "dl-key"], [1, "dl-val"], [2, "font-size", "var(--fs-lg)", "margin-top", "var(--space-5)"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], ["colspan", "4", 1, "num"], [1, "error", 2, "margin-top", "var(--space-4)"], [1, "toolbar", 2, "margin-top", "var(--space-5)"], [1, "badge"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["colspan", "6", 1, "muted", "center"], [2, "font-size", "var(--fs-md)", "margin-bottom", "var(--space-3)"], [1, "row", "row-wrap"], [1, "field", 2, "flex", "2", "margin", "0"], ["for", "soprod"], ["id", "soprod", "name", "productId", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "field", 2, "flex", "1", "margin", "0"], ["for", "soqty"], ["id", "soqty", "type", "number", "min", "1", "name", "qty", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-outline", 2, "align-self", "flex-end", 3, "click"], [1, "btn", "btn-primary", 3, "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-accent", 3, "click", "disabled"], [1, "badge", "badge-brand"], [1, "btn", "btn-outline", 3, "routerLink"], [1, "hint", 2, "margin-top", "var(--space-4)"], [1, "state-icon"]], template: function SalesOrderDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Sales orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, SalesOrderDetailComponent_Conditional_4_Template, 4, 0, "div", 3)(5, SalesOrderDetailComponent_Conditional_5_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.loading() ? 4 : 5);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink], styles: ["\n\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--color-border);\n}\n/*# sourceMappingURL=sales-order-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesOrderDetailComponent, { className: "SalesOrderDetailComponent", filePath: "src/app/pages/sales-order-detail/sales-order-detail.component.ts", lineNumber: 22 });
})();
export {
  SalesOrderDetailComponent
};
//# sourceMappingURL=sales-order-detail.component-Q6D67VRX.js.map
