import {
  AuthService
} from "./chunk-MIYGEFMU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-3DEXCJGJ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-AFRLPGFB.js";
import {
  CommonModule,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G3BCJOAS.js";

// src/app/pages/items-list/items-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/items", a0];
var _c1 = (a0) => ["/items", a0, "edit"];
function ItemsListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1, "+ New item");
    \u0275\u0275elementEnd();
  }
}
function ItemsListComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r1 = ctx.$implicit;
    \u0275\u0275property("value", l_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r1.name);
  }
}
function ItemsListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "span", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading items\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ItemsListComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 18);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ItemsListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 18);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No items match your filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function ItemsListComponent_Conditional_28_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(6, "Reset filters");
    \u0275\u0275elementEnd()();
  }
}
function ItemsListComponent_Conditional_29_For_18_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Low stock");
    \u0275\u0275elementEnd();
  }
}
function ItemsListComponent_Conditional_29_For_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "OK");
    \u0275\u0275elementEnd();
  }
}
function ItemsListComponent_Conditional_29_For_18_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, it_r4.id));
  }
}
function ItemsListComponent_Conditional_29_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "a", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 28);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, ItemsListComponent_Conditional_29_For_18_Conditional_13_Template, 2, 0, "span", 29)(14, ItemsListComponent_Conditional_29_For_18_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 24)(16, "div", 30)(17, "a", 31);
    \u0275\u0275text(18, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ItemsListComponent_Conditional_29_For_18_Conditional_19_Template, 2, 3, "a", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const it_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r4.sku);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, it_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", it_r4.onHand, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r4.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r4.reorderAt);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(13, ctx_r1.isLow(it_r4) ? 13 : 14);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, it_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(19, ctx_r1.auth.isManager() ? 19 : -1);
  }
}
function ItemsListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 23);
    \u0275\u0275text(9, "On hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 23);
    \u0275\u0275text(11, "Reorder at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 24);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, ItemsListComponent_Conditional_29_For_18_Template, 20, 13, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
var ItemsListComponent = class _ItemsListComponent {
  constructor(auth, route, router) {
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.q = signal("");
    this.locationFilter = signal("");
    this.locations = signal([
      { id: "l1", name: "Main Warehouse", zone: "A" },
      { id: "l2", name: "Storefront", zone: "B" },
      { id: "l3", name: "Overflow Depot", zone: "C" }
    ]);
    this.items = signal([
      {
        id: "i1",
        sku: "SKU-1001",
        name: "Steel Bolt M6",
        unit: "pcs",
        reorderAt: 100,
        onHand: 340,
        stockLevels: [
          { id: "s1", itemId: "i1", locationId: "l1", qty: 260 },
          { id: "s2", itemId: "i1", locationId: "l2", qty: 80 }
        ]
      },
      {
        id: "i2",
        sku: "SKU-1002",
        name: "Copper Wire 2mm",
        unit: "m",
        reorderAt: 200,
        onHand: 85,
        stockLevels: [{ id: "s3", itemId: "i2", locationId: "l1", qty: 85 }]
      },
      {
        id: "i3",
        sku: "SKU-1003",
        name: "PVC Pipe 20mm",
        unit: "pcs",
        reorderAt: 50,
        onHand: 12,
        stockLevels: [{ id: "s4", itemId: "i3", locationId: "l2", qty: 12 }]
      },
      {
        id: "i4",
        sku: "SKU-1004",
        name: "Wood Screw 40mm",
        unit: "pcs",
        reorderAt: 150,
        onHand: 620,
        stockLevels: [
          { id: "s5", itemId: "i4", locationId: "l1", qty: 400 },
          { id: "s6", itemId: "i4", locationId: "l3", qty: 220 }
        ]
      },
      {
        id: "i5",
        sku: "SKU-1005",
        name: "Aluminium Sheet A4",
        unit: "pcs",
        reorderAt: 30,
        onHand: 45,
        stockLevels: [{ id: "s7", itemId: "i5", locationId: "l1", qty: 45 }]
      },
      {
        id: "i6",
        sku: "SKU-1006",
        name: "Rubber Gasket 50mm",
        unit: "pcs",
        reorderAt: 80,
        onHand: 0,
        stockLevels: []
      },
      {
        id: "i7",
        sku: "SKU-1007",
        name: "LED Bulb 9W",
        unit: "pcs",
        reorderAt: 40,
        onHand: 210,
        stockLevels: [
          { id: "s8", itemId: "i7", locationId: "l2", qty: 150 },
          { id: "s9", itemId: "i7", locationId: "l3", qty: 60 }
        ]
      },
      {
        id: "i8",
        sku: "SKU-1008",
        name: "Paint Can White 5L",
        unit: "cans",
        reorderAt: 25,
        onHand: 18,
        stockLevels: [{ id: "s10", itemId: "i8", locationId: "l3", qty: 18 }]
      }
    ]);
    this.filtered = computed(() => {
      const term = this.q().trim().toLowerCase();
      const loc = this.locationFilter();
      return this.items().filter((it) => {
        const matchesTerm = !term || it.sku.toLowerCase().includes(term) || it.name.toLowerCase().includes(term);
        const matchesLoc = !loc || (it.stockLevels ?? []).some((s) => s.locationId === loc && s.qty > 0);
        return matchesTerm && matchesLoc;
      });
    });
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((p) => {
      this.q.set(p.get("q") ?? "");
      this.locationFilter.set(p.get("location") ?? "");
    });
  }
  applyFilters() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: this.q().trim() || null,
        location: this.locationFilter() || null
      },
      queryParamsHandling: "merge"
    });
  }
  clear() {
    this.q.set("");
    this.locationFilter.set("");
    this.applyFilters();
  }
  isLow(it) {
    return (it.onHand ?? 0) < it.reorderAt;
  }
  locationName(id) {
    return this.locations().find((l) => l.id === id)?.name ?? id;
  }
  static {
    this.\u0275fac = function ItemsListComponent_Factory(t) {
      return new (t || _ItemsListComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemsListComponent, selectors: [["app-items-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 4, consts: [[1, "container"], [1, "page-head"], [1, "muted"], ["routerLink", "/items/new", 1, "btn", "btn-primary"], [1, "filters", "card", 3, "ngSubmit"], [1, "field", "search-field"], ["for", "q"], ["id", "q", "type", "search", "name", "q", "placeholder", "SKU or name\u2026", 3, "ngModelChange", "ngModel"], [1, "field"], ["for", "loc"], ["id", "loc", "name", "loc", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "filter-actions"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], [1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], [1, "actions-col"], [1, "mono"], [3, "routerLink"], [1, "muted", "unit"], [1, "num", "muted"], [1, "badge", "badge-danger"], [1, "row-actions"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"], [1, "badge", "badge-ok"]], template: function ItemsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Catalog with live on-hand totals across all locations.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ItemsListComponent_Conditional_7_Template, 2, 0, "a", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "form", 4);
        \u0275\u0275listener("ngSubmit", function ItemsListComponent_Template_form_ngSubmit_8_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
        \u0275\u0275text(11, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ItemsListComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.q, $event) || (ctx.q = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8)(14, "label", 9);
        \u0275\u0275text(15, "Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ItemsListComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.locationFilter, $event) || (ctx.locationFilter = $event);
          return $event;
        });
        \u0275\u0275elementStart(17, "option", 11);
        \u0275\u0275text(18, "All locations");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(19, ItemsListComponent_For_20_Template, 2, 2, "option", 12, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 13)(22, "button", 14);
        \u0275\u0275text(23, "Apply");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 15);
        \u0275\u0275listener("click", function ItemsListComponent_Template_button_click_24_listener() {
          return ctx.clear();
        });
        \u0275\u0275text(25, "Clear");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(26, ItemsListComponent_Conditional_26_Template, 4, 0, "div", 16)(27, ItemsListComponent_Conditional_27_Template, 5, 1)(28, ItemsListComponent_Conditional_28_Template, 7, 0)(29, ItemsListComponent_Conditional_29_Template, 19, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.auth.isManager() ? 7 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.q);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.locationFilter);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.locations());
        \u0275\u0275advance(7);
        \u0275\u0275conditional(26, ctx.loading() ? 26 : ctx.error() ? 27 : ctx.filtered().length === 0 ? 28 : 29);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: var(--space-4);\n  padding: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.filters[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.search-field[_ngcontent-%COMP%] {\n  flex: 1 1 240px;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.unit[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: var(--space-2);\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .page-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=items-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemsListComponent, { className: "ItemsListComponent", filePath: "src/app/pages/items-list/items-list.component.ts", lineNumber: 21 });
})();
export {
  ItemsListComponent
};
//# sourceMappingURL=items-list.component-DWT6QICW.js.map
