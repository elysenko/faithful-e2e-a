import {
  ActivatedRoute,
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  CurrencyPipe,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VVK4PSXI.js";

// src/app/pages/po-list/po-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [];
var _c1 = () => ({ status: null });
var _c2 = () => ({ status: "draft" });
var _c3 = () => ({ status: "ordered" });
var _c4 = () => ({ status: "received" });
var _c5 = (a0) => ["/purchase-orders", a0];
function PoListComponent_Conditional_18_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 10)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 9);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c5, o_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.supplierName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusBadge(o_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.lines.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, o_r1.total));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r1.createdAt);
  }
}
function PoListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 8)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Lines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 9);
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Created");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, PoListComponent_Conditional_18_For_18_Template, 15, 13, "tr", 10, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
function PoListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4, "No purchase orders match this filter.");
    \u0275\u0275elementEnd()();
  }
}
var PoListComponent = class _PoListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.orders = signal([
      {
        id: "po1",
        reference: "PO-1001",
        supplierId: "s1",
        supplierName: "Acme Industrial Supply",
        status: "ordered",
        createdAt: "2026-07-08",
        total: 560,
        lines: [
          { id: "pol1", productId: "p3", productName: "PVC Pipe 50mm", sku: "PIP-050", qty: 100, unitCost: 3.2 },
          { id: "pol2", productId: "p5", productName: "Copper Wire 14AWG", sku: "WIR-014", qty: 20, unitCost: 12 }
        ]
      },
      {
        id: "po2",
        reference: "PO-1002",
        supplierId: "s2",
        supplierName: "Globex Materials",
        status: "draft",
        createdAt: "2026-07-10",
        total: 375,
        lines: [
          { id: "pol3", productId: "p1", productName: "Steel Bolt M8", sku: "STL-001", qty: 500, unitCost: 0.45 },
          { id: "pol4", productId: "p2", productName: "Steel Nut M8", sku: "STL-002", qty: 500, unitCost: 0.3 }
        ]
      },
      {
        id: "po3",
        reference: "PO-1000",
        supplierId: "s1",
        supplierName: "Acme Industrial Supply",
        status: "received",
        createdAt: "2026-07-01",
        total: 725,
        lines: [
          { id: "pol5", productId: "p7", productName: "Control Panel", sku: "PNL-100", qty: 5, unitCost: 145 }
        ]
      }
    ]);
    this.status = signal(this.route.snapshot.queryParamMap.get("status") ?? "");
    this.filtered = computed(() => this.status() ? this.orders().filter((o) => o.status === this.status()) : this.orders());
    this.route.queryParamMap.subscribe((params) => {
      this.status.set(params.get("status") ?? "");
    });
  }
  statusBadge(s) {
    switch (s) {
      case "draft":
        return "badge badge-neutral";
      case "ordered":
        return "badge badge-info";
      case "received":
        return "badge badge-success";
    }
  }
  static {
    this.\u0275fac = function PoListComponent_Factory(t) {
      return new (t || _PoListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PoListComponent, selectors: [["app-po-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 25, consts: [[1, "container", "stack"], [1, "section-title", "row-between"], [1, "stack"], [1, "eyebrow"], ["routerLink", "/purchase-orders/new", 1, "btn", "btn-primary"], [1, "filter-bar"], [1, "pill", 3, "routerLink", "queryParams"], [1, "table-wrap"], [1, "data"], [1, "num"], [1, "card-hover", 3, "routerLink"], [1, "muted"], [1, "state"], [1, "state-icon"]], template: function PoListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Procurement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Purchase Orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, "New purchase order");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "a", 6);
        \u0275\u0275text(11, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 6);
        \u0275\u0275text(13, "Draft");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 6);
        \u0275\u0275text(15, "Ordered");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 6);
        \u0275\u0275text(17, "Received");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, PoListComponent_Conditional_18_Template, 19, 0, "div", 7)(19, PoListComponent_Conditional_19_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", ctx.status() === "");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c0))("queryParams", \u0275\u0275pureFunction0(18, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.status() === "draft");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c0))("queryParams", \u0275\u0275pureFunction0(20, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.status() === "ordered");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c0))("queryParams", \u0275\u0275pureFunction0(22, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.status() === "received");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c0))("queryParams", \u0275\u0275pureFunction0(24, _c4));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(18, ctx.filtered().length ? 18 : 19);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PoListComponent, { className: "PoListComponent", filePath: "src/app/pages/po-list/po-list.component.ts", lineNumber: 12 });
})();
export {
  PoListComponent
};
//# sourceMappingURL=po-list.component-WC5DLJVT.js.map
