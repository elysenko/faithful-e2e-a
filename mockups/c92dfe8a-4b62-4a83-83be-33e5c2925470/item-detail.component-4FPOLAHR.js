import {
  AuthService
} from "./chunk-2ZMDFIT5.js";
import {
  toSignal
} from "./chunk-BS3KOYW4.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-JU25ONEJ.js";
import {
  CommonModule,
  DatePipe,
  computed,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-DARMOPX2.js";

// src/app/features/items/item-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ type: "IN" });
var _c1 = (a0) => ["/admin/items", a0, "edit"];
function ItemDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function ItemDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ItemDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Item not found.");
    \u0275\u0275elementEnd();
  }
}
function ItemDetailComponent_Conditional_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ctx_r0.item().id));
  }
}
function ItemDetailComponent_Conditional_5_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Low stock");
    \u0275\u0275elementEnd();
  }
}
function ItemDetailComponent_Conditional_5_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "In stock");
    \u0275\u0275elementEnd();
  }
}
function ItemDetailComponent_Conditional_5_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sl_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sl_r2.location == null ? null : sl_r2.location.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sl_r2.location == null ? null : sl_r2.location.zone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sl_r2.qty);
  }
}
function ItemDetailComponent_Conditional_5_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "No movements recorded for this item.");
    \u0275\u0275elementEnd();
  }
}
function ItemDetailComponent_Conditional_5_Conditional_48_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 12, m_r3.createdAt, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-in", m_r3.type === "IN")("badge-out", m_r3.type === "OUT")("badge-transfer", m_r3.type === "TRANSFER");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((m_r3.fromLocation == null ? null : m_r3.fromLocation.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((m_r3.toLocation == null ? null : m_r3.toLocation.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.note || "\u2014");
  }
}
function ItemDetailComponent_Conditional_5_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "table", 17)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 18);
    \u0275\u0275text(14, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Note");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, ItemDetailComponent_Conditional_5_Conditional_48_For_19_Template, 15, 15, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.itemMovements());
  }
}
function ItemDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
    \u0275\u0275text(10, "\u{1F501} Record Movement");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ItemDetailComponent_Conditional_5_Conditional_11_Template, 2, 3, "a", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11);
    \u0275\u0275text(15, "Total on hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "div", 11);
    \u0275\u0275text(20, "Reorder threshold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 10)(24, "div", 11);
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 13);
    \u0275\u0275template(27, ItemDetailComponent_Conditional_5_Conditional_27_Template, 2, 0, "span", 14)(28, ItemDetailComponent_Conditional_5_Conditional_28_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "h2");
    \u0275\u0275text(30, "Balances by location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 15)(32, "div", 16)(33, "table", 17)(34, "thead")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Zone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 18);
    \u0275\u0275text(41, "Quantity");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "tbody");
    \u0275\u0275repeaterCreate(43, ItemDetailComponent_Conditional_5_For_44_Template, 8, 3, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "h2", 19);
    \u0275\u0275text(46, "Movement history");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, ItemDetailComponent_Conditional_5_Conditional_47_Template, 4, 0, "div", 1)(48, ItemDetailComponent_Conditional_5_Conditional_48_Template, 20, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.item().sku, " \xB7 ", ctx_r0.item().unit, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().description);
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(11, ctx_r0.auth.isAdmin() ? 11 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.item().totalQty);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.item().reorderAt);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(27, ctx_r0.isLow(ctx_r0.item()) ? 27 : 28);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r0.item().stockLevels);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(47, ctx_r0.itemMovements().length === 0 ? 47 : 48);
  }
}
var ItemDetailComponent = class _ItemDetailComponent {
  constructor(route, auth) {
    this.route = route;
    this.auth = auth;
    this.loading = signal(false);
    this.error = signal(null);
    this.itemId = toSignal(this.route.paramMap.pipe(map((p) => p.get("id") ?? "1")), { initialValue: "1" });
    this.items = signal([
      {
        id: "2",
        sku: "SR-1002",
        name: "Hex Nut M6",
        description: "Standard hex nut",
        unit: "pcs",
        reorderAt: 100,
        totalQty: 80,
        stockLevels: [
          { id: "sl1", itemId: "2", locationId: "L1", location: { id: "L1", name: "Main Warehouse", zone: "A" }, qty: 50 },
          { id: "sl2", itemId: "2", locationId: "L2", location: { id: "L2", name: "Overflow Depot", zone: "B" }, qty: 30 },
          { id: "sl3", itemId: "2", locationId: "L3", location: { id: "L3", name: "Front Store", zone: "C" }, qty: 0 }
        ]
      },
      {
        id: "1",
        sku: "SR-1001",
        name: "Steel Bolt M6",
        description: "Zinc-plated hex bolt",
        unit: "pcs",
        reorderAt: 100,
        totalQty: 340,
        stockLevels: [
          { id: "sl4", itemId: "1", locationId: "L1", location: { id: "L1", name: "Main Warehouse", zone: "A" }, qty: 200 },
          { id: "sl5", itemId: "1", locationId: "L2", location: { id: "L2", name: "Overflow Depot", zone: "B" }, qty: 90 },
          { id: "sl6", itemId: "1", locationId: "L3", location: { id: "L3", name: "Front Store", zone: "C" }, qty: 50 }
        ]
      }
    ]);
    this.movements = signal([
      { id: "m1", type: "IN", itemId: "2", toLocId: "L1", toLocation: { id: "L1", name: "Main Warehouse", zone: "A" }, qty: 100, note: "Supplier delivery", userId: "u1", user: { email: "manager@demo" }, createdAt: "2026-07-10T09:12:00Z" },
      { id: "m2", type: "OUT", itemId: "2", fromLocId: "L1", fromLocation: { id: "L1", name: "Main Warehouse", zone: "A" }, qty: 20, note: "Line 3 assembly", userId: "u2", user: { email: "clerk@demo" }, createdAt: "2026-07-11T14:03:00Z" },
      { id: "m3", type: "TRANSFER", itemId: "2", fromLocId: "L1", toLocId: "L2", fromLocation: { id: "L1", name: "Main Warehouse", zone: "A" }, toLocation: { id: "L2", name: "Overflow Depot", zone: "B" }, qty: 30, note: "Rebalance", userId: "u1", user: { email: "manager@demo" }, createdAt: "2026-07-12T08:40:00Z" }
    ]);
    this.item = computed(() => {
      const id = this.itemId();
      return this.items().find((i) => i.id === id) ?? this.items()[0];
    });
    this.itemMovements = computed(() => this.movements().filter((m) => m.itemId === this.item()?.id));
  }
  isLow(item) {
    return item.totalQty < item.reorderAt;
  }
  static {
    this.\u0275fac = function ItemDetailComponent_Factory(t) {
      return new (t || _ItemDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemDetailComponent, selectors: [["app-item-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [["routerLink", "/items", 1, "back", "muted", "text-sm"], [1, "state"], [1, "state-icon"], [1, "page-title-row"], [1, "muted", "mono"], [1, "muted"], [1, "row", "wrap"], ["routerLink", "/movements/new", 1, "btn", "btn-secondary", 3, "queryParams"], [1, "btn", "btn-ghost", 3, "routerLink"], [1, "summary"], [1, "card", "card-pad", "stat"], [1, "muted", "text-sm"], [1, "stat-value", "mono"], [1, "stat-value"], [1, "badge", "badge-danger"], [1, "card"], [1, "table-wrap"], [1, "data"], [1, "text-right"], [1, "mt"], [1, "badge", "badge-success"], [1, "text-right", "mono"], [1, "muted", "text-sm", "mono"], [1, "badge"]], template: function ItemDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275text(1, "\u2190 Back to items");
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, ItemDetailComponent_Conditional_2_Template, 4, 0, "div", 1)(3, ItemDetailComponent_Conditional_3_Template, 4, 1)(4, ItemDetailComponent_Conditional_4_Template, 4, 0)(5, ItemDetailComponent_Conditional_5_Template, 49, 11);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, ctx.loading() ? 2 : ctx.error() ? 3 : !ctx.item() ? 4 : 5);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n}\n.summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  margin-top: var(--space-1);\n}\n.mt[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n}\n/*# sourceMappingURL=item-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemDetailComponent, { className: "ItemDetailComponent", filePath: "src/app/features/items/item-detail.component.ts", lineNumber: 16 });
})();
export {
  ItemDetailComponent
};
//# sourceMappingURL=item-detail.component-4FPOLAHR.js.map
