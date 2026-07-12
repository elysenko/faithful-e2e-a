import {
  RouterLink
} from "./chunk-AFRLPGFB.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G3BCJOAS.js";

// src/app/pages/locations-list/locations-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/locations", a0, "edit"];
function LocationsListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "span", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function LocationsListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LocationsListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No locations yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 8);
    \u0275\u0275text(6, "Add your first location");
    \u0275\u0275elementEnd()();
  }
}
function LocationsListComponent_Conditional_12_For_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Zone ", l_r2.zone, "");
  }
}
function LocationsListComponent_Conditional_12_For_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function LocationsListComponent_Conditional_12_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, LocationsListComponent_Conditional_12_For_12_Conditional_4_Template, 2, 1, "span", 12)(5, LocationsListComponent_Conditional_12_For_12_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 11)(7, "a", 13);
    \u0275\u0275text(8, "Edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, l_r2.zone ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, l_r2.id));
  }
}
function LocationsListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Zone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 11);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, LocationsListComponent_Conditional_12_For_12_Template, 9, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r0.locations());
  }
}
var LocationsListComponent = class _LocationsListComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal(null);
    this.locations = signal([
      { id: "l1", name: "Main Warehouse", zone: "A" },
      { id: "l2", name: "Storefront", zone: "B" },
      { id: "l3", name: "Overflow Depot", zone: "C" }
    ]);
  }
  static {
    this.\u0275fac = function LocationsListComponent_Factory(t) {
      return new (t || _LocationsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocationsListComponent, selectors: [["app-locations-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 1, consts: [[1, "container"], [1, "page-head"], [1, "muted"], ["routerLink", "/locations/new", 1, "btn", "btn-primary"], [1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], ["routerLink", "/locations/new", 1, "btn", "btn-primary", "btn-sm"], [1, "card", "table-wrap"], [1, "table"], [1, "actions-col"], [1, "badge", "badge-muted"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"]], template: function LocationsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Locations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Physical places where stock is held.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3);
        \u0275\u0275text(8, "+ New location");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, LocationsListComponent_Conditional_9_Template, 4, 0, "div", 4)(10, LocationsListComponent_Conditional_10_Template, 5, 1)(11, LocationsListComponent_Conditional_11_Template, 7, 0)(12, LocationsListComponent_Conditional_12_Template, 13, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(9, ctx.loading() ? 9 : ctx.error() ? 10 : ctx.locations().length === 0 ? 11 : 12);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .page-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .page-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=locations-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocationsListComponent, { className: "LocationsListComponent", filePath: "src/app/pages/locations-list/locations-list.component.ts", lineNumber: 17 });
})();
export {
  LocationsListComponent
};
//# sourceMappingURL=locations-list.component-622XFDP3.js.map
