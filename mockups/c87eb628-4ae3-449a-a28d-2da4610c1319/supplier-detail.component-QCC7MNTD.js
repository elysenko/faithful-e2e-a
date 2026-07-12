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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VVK4PSXI.js";

// src/app/pages/supplier-detail/supplier-detail.component.ts
var SupplierDetailComponent = class _SupplierDetailComponent {
  constructor() {
    this.suppliers = signal([
      {
        id: "s1",
        name: "Acme Industrial Supply",
        contactName: "Tom Reed",
        email: "tom@acme.example",
        phone: "555-0080",
        address: "400 Foundry Ln, Cleveland OH"
      },
      {
        id: "s2",
        name: "Globex Materials",
        contactName: "Lena Novak",
        email: "lena@globex.example",
        phone: "555-0071",
        address: "7 Depot St, Denver CO"
      }
    ]);
    this.id = inject(ActivatedRoute).snapshot.paramMap.get("id");
    this.supplier = computed(() => this.suppliers().find((s) => s.id === this.id) ?? this.suppliers()[0]);
  }
  static {
    this.\u0275fac = function SupplierDetailComponent_Factory(t) {
      return new (t || _SupplierDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierDetailComponent, selectors: [["app-supplier-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 74, vars: 12, consts: [[1, "container", "stack"], [1, "breadcrumb"], ["routerLink", "/suppliers"], [1, "section-title"], [1, "eyebrow"], [1, "grid-two"], [1, "card", "card-pad", "stack"], [1, "row-between"], [1, "muted"], [1, "divider"], [1, "table-wrap"], [1, "data"], [1, "badge", "badge-success"], [1, "num"], [1, "badge", "badge-warning"], ["routerLink", "/purchase-orders"], [1, "row"], ["routerLink", "/suppliers", 1, "btn", "btn-outline"]], template: function SupplierDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275text(3, "Suppliers");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "span", 4);
        \u0275\u0275text(7, "Supplier");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h2");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "h3", 3);
        \u0275\u0275text(13, "Contact details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "span", 8);
        \u0275\u0275text(16, "Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "div", 9);
        \u0275\u0275elementStart(20, "div", 7)(21, "span", 8);
        \u0275\u0275text(22, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(25, "div", 9);
        \u0275\u0275elementStart(26, "div", 7)(27, "span", 8);
        \u0275\u0275text(28, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(31, "div", 9);
        \u0275\u0275elementStart(32, "div", 7)(33, "span", 8);
        \u0275\u0275text(34, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span");
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 6)(38, "h3", 3);
        \u0275\u0275text(39, "Recent purchase orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 10)(41, "table", 11)(42, "thead")(43, "tr")(44, "th");
        \u0275\u0275text(45, "Order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49, "Total");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "tbody")(51, "tr")(52, "td");
        \u0275\u0275text(53, "PO-1042");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "td")(55, "span", 12);
        \u0275\u0275text(56, "Received");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "td", 13);
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "tr")(61, "td");
        \u0275\u0275text(62, "PO-1039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "td")(64, "span", 14);
        \u0275\u0275text(65, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "td", 13);
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "currency");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(69, "a", 15);
        \u0275\u0275text(70, "View all purchase orders");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "div", 16)(72, "a", 17);
        \u0275\u0275text(73, "Back to suppliers");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" / ", ctx.supplier().name, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.supplier().name);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.supplier().contactName);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.supplier().email);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.supplier().phone);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.supplier().address);
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 8, 4820));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 10, 1290));
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierDetailComponent, { className: "SupplierDetailComponent", filePath: "src/app/pages/supplier-detail/supplier-detail.component.ts", lineNumber: 12 });
})();
export {
  SupplierDetailComponent
};
//# sourceMappingURL=supplier-detail.component-QCC7MNTD.js.map
