import {
  toSignal
} from "./chunk-BS3KOYW4.js";
import {
  ActivatedRoute,
  Router
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-DARMOPX2.js";

// src/app/features/movements/audit-log.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AuditLogComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("value", item_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", item_r1.sku, " \u2014 ", item_r1.name, "");
  }
}
function AuditLogComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function AuditLogComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function AuditLogComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "No movements match these filters.");
    \u0275\u0275elementEnd();
  }
}
function AuditLogComponent_Conditional_28_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 1);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 1);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 21);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 22);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 22);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 15, m_r3.createdAt, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-in", m_r3.type === "IN")("badge-out", m_r3.type === "OUT")("badge-transfer", m_r3.type === "TRANSFER");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r3.item == null ? null : m_r3.item.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.item == null ? null : m_r3.item.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((m_r3.fromLocation == null ? null : m_r3.fromLocation.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((m_r3.toLocation == null ? null : m_r3.toLocation.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.user == null ? null : m_r3.user.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.note || "\u2014");
  }
}
function AuditLogComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "table", 17)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 18);
    \u0275\u0275text(16, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Note");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, AuditLogComponent_Conditional_28_For_23_Template, 22, 18, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
var AuditLogComponent = class _AuditLogComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.items = signal([
      { id: "1", sku: "SR-1001", name: "Steel Bolt M6", description: "", unit: "pcs", reorderAt: 100, totalQty: 340 },
      { id: "2", sku: "SR-1002", name: "Hex Nut M6", description: "", unit: "pcs", reorderAt: 100, totalQty: 80 },
      { id: "6", sku: "SR-1006", name: "LED Panel 40W", description: "", unit: "pcs", reorderAt: 20, totalQty: 12 }
    ]);
    this.movements = signal([
      { id: "m3", type: "TRANSFER", itemId: "2", item: { id: "2", sku: "SR-1002", name: "Hex Nut M6" }, fromLocId: "L1", toLocId: "L2", fromLocation: { id: "L1", name: "Main Warehouse", zone: "A" }, toLocation: { id: "L2", name: "Overflow Depot", zone: "B" }, qty: 30, note: "Rebalance", userId: "u1", user: { email: "manager@demo" }, createdAt: "2026-07-12T08:40:00Z" },
      { id: "m2", type: "OUT", itemId: "2", item: { id: "2", sku: "SR-1002", name: "Hex Nut M6" }, fromLocId: "L1", fromLocation: { id: "L1", name: "Main Warehouse", zone: "A" }, qty: 20, note: "Line 3 assembly", userId: "u2", user: { email: "clerk@demo" }, createdAt: "2026-07-11T14:03:00Z" },
      { id: "m4", type: "OUT", itemId: "6", item: { id: "6", sku: "SR-1006", name: "LED Panel 40W" }, fromLocId: "L3", fromLocation: { id: "L3", name: "Front Store", zone: "C" }, qty: 8, note: "Store fit-out", userId: "u2", user: { email: "clerk@demo" }, createdAt: "2026-07-11T10:22:00Z" },
      { id: "m1", type: "IN", itemId: "2", item: { id: "2", sku: "SR-1002", name: "Hex Nut M6" }, toLocId: "L1", toLocation: { id: "L1", name: "Main Warehouse", zone: "A" }, qty: 100, note: "Supplier delivery", userId: "u1", user: { email: "manager@demo" }, createdAt: "2026-07-10T09:12:00Z" },
      { id: "m5", type: "IN", itemId: "1", item: { id: "1", sku: "SR-1001", name: "Steel Bolt M6" }, toLocId: "L1", toLocation: { id: "L1", name: "Main Warehouse", zone: "A" }, qty: 200, note: "Bulk order", userId: "u1", user: { email: "manager@demo" }, createdAt: "2026-07-09T16:45:00Z" }
    ]);
    this.qp = toSignal(this.route.queryParamMap.pipe(map((p) => ({ itemId: p.get("itemId") ?? "", from: p.get("from") ?? "", to: p.get("to") ?? "" }))), { initialValue: { itemId: "", from: "", to: "" } });
    this.filterItemId = computed(() => this.qp().itemId);
    this.filterFrom = computed(() => this.qp().from);
    this.filterTo = computed(() => this.qp().to);
    this.filtered = computed(() => {
      const { itemId, from, to } = this.qp();
      return this.movements().filter((m) => {
        if (itemId && m.itemId !== itemId)
          return false;
        const d = m.createdAt.slice(0, 10);
        if (from && d < from)
          return false;
        if (to && d > to)
          return false;
        return true;
      });
    });
  }
  updateFilter(patch) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: patch,
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  onItem(event) {
    this.updateFilter({ itemId: event.target.value || "" });
  }
  onFrom(event) {
    this.updateFilter({ from: event.target.value || "" });
  }
  onTo(event) {
    this.updateFilter({ to: event.target.value || "" });
  }
  clearFilters() {
    this.router.navigate([], { relativeTo: this.route, queryParams: {} });
  }
  static {
    this.\u0275fac = function AuditLogComponent_Factory(t) {
      return new (t || _AuditLogComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditLogComponent, selectors: [["app-audit-log"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 4, consts: [[1, "page-title-row"], [1, "muted"], [1, "card", "card-pad", "filters"], [1, "field"], ["for", "fItem"], ["id", "fItem", 3, "change", "value"], ["value", ""], [3, "value"], ["for", "fFrom"], ["id", "fFrom", "type", "date", 3, "change", "value"], ["for", "fTo"], ["id", "fTo", "type", "date", 3, "change", "value"], ["type", "button", 1, "btn", "btn-ghost", "clear-btn", 3, "click"], [1, "state"], [1, "state-icon"], [1, "card"], [1, "table-wrap"], [1, "data"], [1, "text-right"], [1, "muted", "text-sm", "mono"], [1, "badge"], [1, "text-right", "mono"], [1, "muted", "text-sm"]], template: function AuditLogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Audit Log");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, "Every stock movement, most recent first. Manager only.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "label", 4);
        \u0275\u0275text(9, "Item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "select", 5);
        \u0275\u0275listener("change", function AuditLogComponent_Template_select_change_10_listener($event) {
          return ctx.onItem($event);
        });
        \u0275\u0275elementStart(11, "option", 6);
        \u0275\u0275text(12, "All items");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(13, AuditLogComponent_For_14_Template, 2, 3, "option", 7, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 3)(16, "label", 8);
        \u0275\u0275text(17, "From date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 9);
        \u0275\u0275listener("change", function AuditLogComponent_Template_input_change_18_listener($event) {
          return ctx.onFrom($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 3)(20, "label", 10);
        \u0275\u0275text(21, "To date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 11);
        \u0275\u0275listener("change", function AuditLogComponent_Template_input_change_22_listener($event) {
          return ctx.onTo($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 12);
        \u0275\u0275listener("click", function AuditLogComponent_Template_button_click_23_listener() {
          return ctx.clearFilters();
        });
        \u0275\u0275text(24, "Clear");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, AuditLogComponent_Conditional_25_Template, 4, 0, "div", 13)(26, AuditLogComponent_Conditional_26_Template, 4, 1)(27, AuditLogComponent_Conditional_27_Template, 4, 0)(28, AuditLogComponent_Conditional_28_Template, 24, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("value", ctx.filterItemId());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.filterFrom());
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.filterTo());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(25, ctx.loading() ? 25 : ctx.error() ? 26 : ctx.filtered().length === 0 ? 27 : 28);
      }
    }, dependencies: [CommonModule, DatePipe], styles: ["\n\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) auto;\n  gap: var(--space-3);\n  align-items: end;\n  margin-bottom: var(--space-4);\n}\n.filters[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  min-width: 88px;\n}\n@media (max-width: 768px) {\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .clear-btn[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n}\n/*# sourceMappingURL=audit-log.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditLogComponent, { className: "AuditLogComponent", filePath: "src/app/features/movements/audit-log.component.ts", lineNumber: 15 });
})();
export {
  AuditLogComponent
};
//# sourceMappingURL=audit-log.component-J4J53GQD.js.map
