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
  Router
} from "./chunk-AFRLPGFB.js";
import {
  CommonModule,
  DatePipe,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G3BCJOAS.js";

// src/app/pages/movements-log/movements-log.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MovementsLogComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r1 = ctx.$implicit;
    \u0275\u0275property("value", it_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", it_r1.sku, " \u2014 ", it_r1.name, "");
  }
}
function MovementsLogComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "span", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function MovementsLogComponent_Conditional_30_Template(rf, ctx) {
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
function MovementsLogComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 18);
    \u0275\u0275text(2, "\u{1F9FE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No movements match your filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function MovementsLogComponent_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(6, "Reset filters");
    \u0275\u0275elementEnd()();
  }
}
function MovementsLogComponent_Conditional_32_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 10, m_r4.createdAt, "MMM d, y, HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.badgeClass(m_r4.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.itemLabel(m_r4.itemId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.locationName(m_r4.fromLocId), " \u2192 ", ctx_r1.locationName(m_r4.toLocId), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((m_r4.user == null ? null : m_r4.user.name) || (m_r4.user == null ? null : m_r4.user.email) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.note || "\u2014");
  }
}
function MovementsLogComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "From \u2192 To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 23);
    \u0275\u0275text(13, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Note");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, MovementsLogComponent_Conditional_32_For_20_Template, 17, 13, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
var MovementsLogComponent = class _MovementsLogComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.itemFilter = signal("");
    this.from = signal("");
    this.to = signal("");
    this.items = signal([
      { id: "i1", sku: "SKU-1001", name: "Steel Bolt M6", unit: "pcs", reorderAt: 100 },
      { id: "i2", sku: "SKU-1002", name: "Copper Wire 2mm", unit: "m", reorderAt: 200 },
      { id: "i3", sku: "SKU-1003", name: "PVC Pipe 20mm", unit: "pcs", reorderAt: 50 },
      { id: "i6", sku: "SKU-1006", name: "Rubber Gasket 50mm", unit: "pcs", reorderAt: 80 }
    ]);
    this.locations = signal([
      { id: "l1", name: "Main Warehouse", zone: "A" },
      { id: "l2", name: "Storefront", zone: "B" },
      { id: "l3", name: "Overflow Depot", zone: "C" }
    ]);
    this.movements = signal([
      {
        id: "m1",
        type: "IN",
        itemId: "i1",
        toLocId: "l1",
        qty: 200,
        userId: "u1",
        user: { id: "u1", email: "clerk@demo", name: "Demo Clerk", role: "clerk" },
        note: "PO-4821",
        createdAt: "2026-07-12T09:15:00Z"
      },
      {
        id: "m2",
        type: "TRANSFER",
        itemId: "i1",
        fromLocId: "l1",
        toLocId: "l2",
        qty: 80,
        userId: "u2",
        user: { id: "u2", email: "manager@demo", name: "Demo Manager", role: "manager" },
        note: "Restock storefront",
        createdAt: "2026-07-11T16:40:00Z"
      },
      {
        id: "m3",
        type: "OUT",
        itemId: "i3",
        fromLocId: "l2",
        qty: 38,
        userId: "u1",
        user: { id: "u1", email: "clerk@demo", name: "Demo Clerk", role: "clerk" },
        note: "Job #221",
        createdAt: "2026-07-11T11:05:00Z"
      },
      {
        id: "m4",
        type: "IN",
        itemId: "i2",
        toLocId: "l1",
        qty: 85,
        userId: "u2",
        user: { id: "u2", email: "manager@demo", name: "Demo Manager", role: "manager" },
        note: null,
        createdAt: "2026-07-10T08:30:00Z"
      },
      {
        id: "m5",
        type: "OUT",
        itemId: "i6",
        fromLocId: "l3",
        qty: 80,
        userId: "u1",
        user: { id: "u1", email: "clerk@demo", name: "Demo Clerk", role: "clerk" },
        note: "Damaged batch",
        createdAt: "2026-07-09T14:20:00Z"
      }
    ]);
    this.filtered = computed(() => {
      const item = this.itemFilter();
      const from = this.from();
      const to = this.to();
      return this.movements().filter((m) => {
        if (item && m.itemId !== item)
          return false;
        const day = (m.createdAt ?? "").slice(0, 10);
        if (from && day < from)
          return false;
        if (to && day > to)
          return false;
        return true;
      });
    });
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((p) => {
      this.itemFilter.set(p.get("itemId") ?? "");
      this.from.set(p.get("from") ?? "");
      this.to.set(p.get("to") ?? "");
    });
  }
  applyFilters() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        itemId: this.itemFilter() || null,
        from: this.from() || null,
        to: this.to() || null
      },
      queryParamsHandling: "merge"
    });
  }
  clear() {
    this.itemFilter.set("");
    this.from.set("");
    this.to.set("");
    this.applyFilters();
  }
  itemLabel(id) {
    const it = this.items().find((i) => i.id === id);
    return it ? `${it.sku} \u2014 ${it.name}` : id;
  }
  locationName(id) {
    if (!id)
      return "\u2014";
    return this.locations().find((l) => l.id === id)?.name ?? id;
  }
  badgeClass(type) {
    if (type === "IN")
      return "badge-ok";
    if (type === "OUT")
      return "badge-danger";
    return "badge-info";
  }
  static {
    this.\u0275fac = function MovementsLogComponent_Factory(t) {
      return new (t || _MovementsLogComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovementsLogComponent, selectors: [["app-movements-log"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 4, consts: [[1, "container"], [1, "page-head"], [1, "muted"], [1, "filters", "card", 3, "ngSubmit"], [1, "field"], ["for", "item"], ["id", "item", "name", "item", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "from"], ["id", "from", "type", "date", "name", "from", 3, "ngModelChange", "ngModel"], ["for", "to"], ["id", "to", "type", "date", "name", "to", 3, "ngModelChange", "ngModel"], [1, "filter-actions"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], [1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "card", "table-wrap"], [1, "table"], [1, "num"], [1, "nowrap"], [1, "badge"]], template: function MovementsLogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Movements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Audit log of every stock movement, newest first.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "form", 3);
        \u0275\u0275listener("ngSubmit", function MovementsLogComponent_Template_form_ngSubmit_7_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(8, "div", 4)(9, "label", 5);
        \u0275\u0275text(10, "Item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function MovementsLogComponent_Template_select_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.itemFilter, $event) || (ctx.itemFilter = $event);
          return $event;
        });
        \u0275\u0275elementStart(12, "option", 7);
        \u0275\u0275text(13, "All items");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, MovementsLogComponent_For_15_Template, 2, 3, "option", 8, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 4)(17, "label", 9);
        \u0275\u0275text(18, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function MovementsLogComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.from, $event) || (ctx.from = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 4)(21, "label", 11);
        \u0275\u0275text(22, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function MovementsLogComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.to, $event) || (ctx.to = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 13)(25, "button", 14);
        \u0275\u0275text(26, "Apply");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 15);
        \u0275\u0275listener("click", function MovementsLogComponent_Template_button_click_27_listener() {
          return ctx.clear();
        });
        \u0275\u0275text(28, "Clear");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(29, MovementsLogComponent_Conditional_29_Template, 4, 0, "div", 16)(30, MovementsLogComponent_Conditional_30_Template, 5, 1)(31, MovementsLogComponent_Conditional_31_Template, 7, 0)(32, MovementsLogComponent_Conditional_32_Template, 21, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.itemFilter);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.from);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.to);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(29, ctx.loading() ? 29 : ctx.error() ? 30 : ctx.filtered().length === 0 ? 31 : 32);
      }
    }, dependencies: [CommonModule, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: var(--space-4);\n  padding: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.filters[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  flex: 1 1 180px;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=movements-log.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovementsLogComponent, { className: "MovementsLogComponent", filePath: "src/app/pages/movements-log/movements-log.component.ts", lineNumber: 19 });
})();
export {
  MovementsLogComponent
};
//# sourceMappingURL=movements-log.component-HVTA3TY3.js.map
