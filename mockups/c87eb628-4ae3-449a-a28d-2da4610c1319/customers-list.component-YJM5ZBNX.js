import {
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VVK4PSXI.js";

// src/app/pages/customers-list/customers-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/customers", a0];
function CustomersListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4, "No customers match your search.");
    \u0275\u0275elementEnd()();
  }
}
function CustomersListComponent_Conditional_12_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td")(2, "a", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, c_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, c_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.contactName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.phone);
  }
}
function CustomersListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 11)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Phone");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, CustomersListComponent_Conditional_12_For_14_Template, 10, 10, "tr", 12, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
var CustomersListComponent = class _CustomersListComponent {
  constructor() {
    this.query = signal("");
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
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      if (!q)
        return this.customers();
      return this.customers().filter((c) => [c.name, c.contactName, c.email].filter((v) => !!v).some((v) => v.toLowerCase().includes(q)));
    });
  }
  static {
    this.\u0275fac = function CustomersListComponent_Factory(t) {
      return new (t || _CustomersListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersListComponent, selectors: [["app-customers-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "container", "stack"], [1, "row-between", "section-title"], [1, "stack"], [1, "eyebrow"], ["routerLink", "/customers/new", 1, "btn", "btn-primary"], [1, "filter-bar"], ["type", "text", "placeholder", "Search by name, contact, or email", 1, "input", 3, "input", "value"], [1, "state"], [1, "state-icon"], [1, "muted"], [1, "table-wrap"], [1, "data"], [1, "clickable", 3, "routerLink"], [3, "routerLink"]], template: function CustomersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Customers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, "New customer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "input", 6);
        \u0275\u0275listener("input", function CustomersListComponent_Template_input_input_10_listener($event) {
          return ctx.query.set($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, CustomersListComponent_Conditional_11_Template, 5, 0, "div", 7)(12, CustomersListComponent_Conditional_12_Template, 15, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("value", ctx.query());
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.filtered().length === 0 ? 11 : 12);
      }
    }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersListComponent, { className: "CustomersListComponent", filePath: "src/app/pages/customers-list/customers-list.component.ts", lineNumber: 12 });
})();
export {
  CustomersListComponent
};
//# sourceMappingURL=customers-list.component-YJM5ZBNX.js.map
