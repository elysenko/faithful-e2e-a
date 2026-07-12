import {
  AuthService
} from "./chunk-MIYGEFMU.js";
import {
  ActivatedRoute,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G3BCJOAS.js";

// src/app/pages/item-detail/item-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [];
var _c1 = () => ["/movements/new"];
var _c2 = () => ({ type: "IN" });
var _c3 = () => ({ type: "OUT" });
var _c4 = () => ({ type: "TRANSFER" });
var _c5 = (a0) => ["/items", a0, "edit"];
function ItemDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "span", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ItemDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 4);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ItemDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 4);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Item not found.");
    \u0275\u0275elementEnd()();
  }
}
function ItemDetailComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item().description);
  }
}
function ItemDetailComponent_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "a", 20);
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c5, ctx_r0.item().id));
  }
}
function ItemDetailComponent_Conditional_6_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Low stock");
    \u0275\u0275elementEnd();
  }
}
function ItemDetailComponent_Conditional_6_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "In stock");
    \u0275\u0275elementEnd();
  }
}
function ItemDetailComponent_Conditional_6_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 4);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No stock recorded at any location.");
    \u0275\u0275elementEnd()();
  }
}
function ItemDetailComponent_Conditional_6_Conditional_33_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.locationName(s_r2.locationId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r2.qty, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().unit);
  }
}
function ItemDetailComponent_Conditional_6_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 22)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 23);
    \u0275\u0275text(6, "Quantity");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275repeaterCreate(8, ItemDetailComponent_Conditional_6_Conditional_33_For_9_Template, 7, 3, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.item().stockLevels);
  }
}
function ItemDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div")(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ItemDetailComponent_Conditional_6_Conditional_6_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ItemDetailComponent_Conditional_6_Conditional_7_Template, 3, 3, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10)(9, "div", 11)(10, "span", 12);
    \u0275\u0275text(11, "On hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "small");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
    \u0275\u0275text(18, "Reorder at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementStart(21, "small");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 11)(24, "span", 12);
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 13);
    \u0275\u0275template(27, ItemDetailComponent_Conditional_6_Conditional_27_Template, 2, 0, "span", 14)(28, ItemDetailComponent_Conditional_6_Conditional_28_Template, 2, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "h2", 15);
    \u0275\u0275text(30, "Stock by location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 16);
    \u0275\u0275template(32, ItemDetailComponent_Conditional_6_Conditional_32_Template, 5, 0, "div", 2)(33, ItemDetailComponent_Conditional_6_Conditional_33_Template, 10, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 17)(35, "a", 18);
    \u0275\u0275text(36, "Stock In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 19);
    \u0275\u0275text(38, "Stock Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "a", 19);
    \u0275\u0275text(40, "Transfer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item().sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().name);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r0.item().description ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r0.auth.isManager() ? 7 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.item().onHand, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().unit);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.item().reorderAt, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().unit);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(27, ctx_r0.isLow(ctx_r0.item()) ? 27 : 28);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(32, ((tmp_10_0 = ctx_r0.item().stockLevels) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : \u0275\u0275pureFunction0(16, _c0)).length === 0 ? 32 : 33);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c1))("queryParams", \u0275\u0275pureFunction0(18, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c1))("queryParams", \u0275\u0275pureFunction0(20, _c3));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c1))("queryParams", \u0275\u0275pureFunction0(22, _c4));
  }
}
var ItemDetailComponent = class _ItemDetailComponent {
  constructor(auth, route) {
    this.auth = auth;
    this.route = route;
    this.loading = signal(false);
    this.error = signal(null);
    this.itemId = signal("");
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
        description: "Zinc-plated hex bolt, 6mm thread.",
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
        description: "Bare copper wire, 2mm gauge, sold by the metre.",
        stockLevels: [{ id: "s3", itemId: "i2", locationId: "l1", qty: 85 }]
      },
      {
        id: "i3",
        sku: "SKU-1003",
        name: "PVC Pipe 20mm",
        unit: "pcs",
        reorderAt: 50,
        onHand: 12,
        description: "3m lengths of 20mm PVC pipe.",
        stockLevels: [{ id: "s4", itemId: "i3", locationId: "l2", qty: 12 }]
      },
      {
        id: "i6",
        sku: "SKU-1006",
        name: "Rubber Gasket 50mm",
        unit: "pcs",
        reorderAt: 80,
        onHand: 0,
        description: "Nitrile rubber gasket, 50mm outer diameter.",
        stockLevels: []
      }
    ]);
    this.item = computed(() => this.items().find((it) => it.id === this.itemId()));
  }
  ngOnInit() {
    this.route.paramMap.subscribe((p) => this.itemId.set(p.get("id") ?? ""));
  }
  isLow(it) {
    return (it.onHand ?? 0) < it.reorderAt;
  }
  locationName(id) {
    return this.locations().find((l) => l.id === id)?.name ?? id;
  }
  static {
    this.\u0275fac = function ItemDetailComponent_Factory(t) {
      return new (t || _ItemDetailComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemDetailComponent, selectors: [["app-item-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "container"], ["routerLink", "/", 1, "back-link"], [1, "state"], [1, "spinner"], [1, "state-icon"], [1, "error"], [1, "detail-head"], [1, "mono", "muted"], [1, "muted", "desc"], [1, "head-actions"], [1, "stat-grid"], [1, "card", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "badge", "badge-danger"], [1, "section-title"], [1, "card", "table-wrap"], [1, "detail-cta"], [1, "btn", "btn-accent", 3, "routerLink", "queryParams"], [1, "btn", "btn-outline", 3, "routerLink", "queryParams"], [1, "btn", "btn-outline", 3, "routerLink"], [1, "badge", "badge-ok"], [1, "table"], [1, "num"], [1, "muted", "unit"]], template: function ItemDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to items");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ItemDetailComponent_Conditional_3_Template, 4, 0, "div", 2)(4, ItemDetailComponent_Conditional_4_Template, 5, 1)(5, ItemDetailComponent_Conditional_5_Template, 5, 0)(6, ItemDetailComponent_Conditional_6_Template, 41, 23);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.error() ? 4 : !ctx.item() ? 5 : 6);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n}\n.detail-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.detail-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-top: var(--space-1);\n}\n.desc[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 0;\n  max-width: 60ch;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-6);\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: var(--space-4);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--color-muted);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 700;\n}\n.stat-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  color: var(--color-muted);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--space-3);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.unit[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.detail-cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-top: var(--space-6);\n}\n@media (max-width: 768px) {\n  .detail-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .detail-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=item-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemDetailComponent, { className: "ItemDetailComponent", filePath: "src/app/pages/item-detail/item-detail.component.ts", lineNumber: 18 });
})();
export {
  ItemDetailComponent
};
//# sourceMappingURL=item-detail.component-NE2GIMZ4.js.map
