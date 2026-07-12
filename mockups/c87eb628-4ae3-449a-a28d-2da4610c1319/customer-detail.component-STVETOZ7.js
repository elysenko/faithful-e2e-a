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
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VVK4PSXI.js";

// src/app/pages/customer-detail/customer-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CustomerDetailComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, o_r1.total));
  }
}
var CustomerDetailComponent = class _CustomerDetailComponent {
  constructor() {
    this.id = inject(ActivatedRoute).snapshot.paramMap.get("id");
    this.customers = signal([
      {
        id: "c1",
        name: "Northwind Traders",
        contactName: "Maria Chen",
        email: "maria@northwind.example",
        phone: "555-0101",
        address: "12 Harbor Rd, Seattle WA"
      },
      {
        id: "c2",
        name: "Contoso Ltd",
        contactName: "David Park",
        email: "david@contoso.example",
        phone: "555-0144",
        address: "88 Market St, Austin TX"
      },
      {
        id: "c3",
        name: "Fabrikam Inc",
        contactName: "Aisha Bello",
        email: "aisha@fabrikam.example",
        phone: "555-0199",
        address: "5 Kings Ave, Boston MA"
      }
    ]);
    this.customer = computed(() => this.customers().find((c) => c.id === this.id) ?? this.customers()[0]);
    this.recentOrders = signal([
      { id: "so-1001", date: "2026-06-28", total: 4820 },
      { id: "so-1002", date: "2026-07-03", total: 1290 }
    ]);
  }
  static {
    this.\u0275fac = function CustomerDetailComponent_Factory(t) {
      return new (t || _CustomerDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerDetailComponent, selectors: [["app-customer-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 59, vars: 6, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/customers"], [1, "faint"], [1, "row-between", "section-title"], ["type", "button", 1, "btn", "btn-outline"], [1, "card", "card-pad", "stack"], [1, "section-title"], [1, "grid-two"], [1, "stack"], [1, "eyebrow"], [1, "row-between"], ["routerLink", "/sales-orders"], [1, "table-wrap"], [1, "data"], [1, "row"], ["routerLink", "/customers", 1, "btn", "btn-ghost"], [1, "num"]], template: function CustomerDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275text(3, "Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "h2");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275text(12, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 6)(14, "h3", 7);
        \u0275\u0275text(15, "Contact details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "span", 10);
        \u0275\u0275text(19, "Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 9)(23, "span", 10);
        \u0275\u0275text(24, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 9)(28, "span", 10);
        \u0275\u0275text(29, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 9)(33, "span", 10);
        \u0275\u0275text(34, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span");
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 6)(38, "div", 11)(39, "h3", 7);
        \u0275\u0275text(40, "Recent sales orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "a", 12);
        \u0275\u0275text(42, "View all sales orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 13)(44, "table", 14)(45, "thead")(46, "tr")(47, "th");
        \u0275\u0275text(48, "Order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "th");
        \u0275\u0275text(50, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th");
        \u0275\u0275text(52, "Total");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "tbody");
        \u0275\u0275repeaterCreate(54, CustomerDetailComponent_For_55_Template, 8, 5, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "div", 15)(57, "a", 16);
        \u0275\u0275text(58, "Back to customers");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.customer().name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.customer().name);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.customer().contactName);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.customer().email);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.customer().phone);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.customer().address);
        \u0275\u0275advance(18);
        \u0275\u0275repeater(ctx.recentOrders());
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerDetailComponent, { className: "CustomerDetailComponent", filePath: "src/app/pages/customer-detail/customer-detail.component.ts", lineNumber: 12 });
})();
export {
  CustomerDetailComponent
};
//# sourceMappingURL=customer-detail.component-STVETOZ7.js.map
