import {
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VVK4PSXI.js";

// src/app/pages/suppliers-list/suppliers-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/suppliers", a0];
function SuppliersListComponent_Conditional_6_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 5)(1, "td")(2, "a", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, s_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, s_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.contactName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.phone);
  }
}
function SuppliersListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "table", 4)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275repeaterCreate(13, SuppliersListComponent_Conditional_6_For_14_Template, 10, 10, "tr", 5, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.suppliers());
  }
}
function SuppliersListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4, "No suppliers found.");
    \u0275\u0275elementEnd()();
  }
}
var SuppliersListComponent = class _SuppliersListComponent {
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
  }
  static {
    this.\u0275fac = function SuppliersListComponent_Factory(t) {
      return new (t || _SuppliersListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuppliersListComponent, selectors: [["app-suppliers-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "container", "stack"], [1, "section-title"], [1, "eyebrow"], [1, "table-wrap"], [1, "data"], [3, "routerLink"], [1, "muted"], [1, "state"], [1, "state-icon"]], template: function SuppliersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Suppliers");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, SuppliersListComponent_Conditional_6_Template, 15, 0, "div", 3)(7, SuppliersListComponent_Conditional_7_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.suppliers().length ? 6 : 7);
      }
    }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuppliersListComponent, { className: "SuppliersListComponent", filePath: "src/app/pages/suppliers-list/suppliers-list.component.ts", lineNumber: 12 });
})();
export {
  SuppliersListComponent
};
//# sourceMappingURL=suppliers-list.component-JW66UAEM.js.map
