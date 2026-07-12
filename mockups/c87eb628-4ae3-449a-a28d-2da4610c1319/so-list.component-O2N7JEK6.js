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

// src/app/pages/so-list/so-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [];
var _c1 = () => ({ status: null });
var _c2 = () => ({ status: "draft" });
var _c3 = () => ({ status: "confirmed" });
var _c4 = () => ({ status: "fulfilled" });
var _c5 = () => ({ status: "invoiced" });
var _c6 = (a0) => ["/sales-orders", a0];
function SoListComponent_Conditional_20_For_18_Template(rf, ctx) {
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
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c6, o_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.customerName);
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
function SoListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 8)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
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
    \u0275\u0275repeaterCreate(17, SoListComponent_Conditional_20_For_18_Template, 15, 13, "tr", 10, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
function SoListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4, "No sales orders match this filter.");
    \u0275\u0275elementEnd()();
  }
}
var SoListComponent = class _SoListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.orders = signal([
      {
        id: "so1",
        reference: "SO-2001",
        customerId: "c1",
        customerName: "Northwind Traders",
        status: "confirmed",
        createdAt: "2026-07-09",
        total: 730,
        lines: [
          { id: "sol1", productId: "p1", productName: "Steel Bolt M8", sku: "STL-001", qty: 200, unitPrice: 1.2 },
          { id: "sol2", productId: "p8", productName: "Proximity Sensor", sku: "SEN-200", qty: 10, unitPrice: 49 }
        ]
      },
      {
        id: "so2",
        reference: "SO-2002",
        customerId: "c2",
        customerName: "Contoso Ltd",
        status: "draft",
        createdAt: "2026-07-10",
        total: 150,
        lines: [
          { id: "sol3", productId: "p3", productName: "PVC Pipe 50mm", sku: "PIP-050", qty: 20, unitPrice: 7.5 }
        ]
      },
      {
        id: "so3",
        reference: "SO-2003",
        customerId: "c3",
        customerName: "Fabrikam Inc",
        status: "fulfilled",
        createdAt: "2026-07-06",
        total: 880,
        lines: [
          { id: "sol4", productId: "p5", productName: "Copper Wire 14AWG", sku: "WIR-014", qty: 10, unitPrice: 24 },
          { id: "sol5", productId: "p7", productName: "Control Panel", sku: "PNL-100", qty: 2, unitPrice: 320 }
        ]
      },
      {
        id: "so4",
        reference: "SO-2000",
        customerId: "c1",
        customerName: "Northwind Traders",
        status: "invoiced",
        createdAt: "2026-07-02",
        total: 735,
        lines: [
          { id: "sol6", productId: "p8", productName: "Proximity Sensor", sku: "SEN-200", qty: 15, unitPrice: 49 }
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
      case "confirmed":
        return "badge badge-info";
      case "fulfilled":
        return "badge badge-warning";
      case "invoiced":
        return "badge badge-success";
    }
  }
  static {
    this.\u0275fac = function SoListComponent_Factory(t) {
      return new (t || _SoListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SoListComponent, selectors: [["app-so-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 31, consts: [[1, "container", "stack"], [1, "section-title", "row-between"], [1, "stack"], [1, "eyebrow"], ["routerLink", "/sales-orders/new", 1, "btn", "btn-primary"], [1, "filter-bar"], [1, "pill", 3, "routerLink", "queryParams"], [1, "table-wrap"], [1, "data"], [1, "num"], [1, "card-hover", 3, "routerLink"], [1, "muted"], [1, "state"], [1, "state-icon"]], template: function SoListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Sales Orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, "New sales order");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "a", 6);
        \u0275\u0275text(11, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 6);
        \u0275\u0275text(13, "Draft");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 6);
        \u0275\u0275text(15, "Confirmed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 6);
        \u0275\u0275text(17, "Fulfilled");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 6);
        \u0275\u0275text(19, "Invoiced");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, SoListComponent_Conditional_20_Template, 19, 0, "div", 7)(21, SoListComponent_Conditional_21_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", ctx.status() === "");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c0))("queryParams", \u0275\u0275pureFunction0(22, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.status() === "draft");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c0))("queryParams", \u0275\u0275pureFunction0(24, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.status() === "confirmed");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c0))("queryParams", \u0275\u0275pureFunction0(26, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.status() === "fulfilled");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(27, _c0))("queryParams", \u0275\u0275pureFunction0(28, _c4));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.status() === "invoiced");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(29, _c0))("queryParams", \u0275\u0275pureFunction0(30, _c5));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(20, ctx.filtered().length ? 20 : 21);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SoListComponent, { className: "SoListComponent", filePath: "src/app/pages/so-list/so-list.component.ts", lineNumber: 12 });
})();
export {
  SoListComponent
};
//# sourceMappingURL=so-list.component-O2N7JEK6.js.map
