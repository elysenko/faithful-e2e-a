import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5S2USPPB.js";

// src/app/pages/units-list/units-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({});
var _c1 = () => ({ status: "occupied" });
var _c2 = () => ({ status: "vacant" });
var _c3 = (a0) => ["/units", a0];
function UnitsListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading units\u2026");
    \u0275\u0275elementEnd()();
  }
}
function UnitsListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function UnitsListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No units match this filter.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 2);
    \u0275\u0275text(6, "Try a different status or add a new unit.");
    \u0275\u0275elementEnd()();
  }
}
function UnitsListComponent_Conditional_20_For_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Occupied");
    \u0275\u0275elementEnd();
  }
}
function UnitsListComponent_Conditional_20_For_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Vacant");
    \u0275\u0275elementEnd();
  }
}
function UnitsListComponent_Conditional_20_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, UnitsListComponent_Conditional_20_For_16_Conditional_10_Template, 2, 0, "span", 18)(11, UnitsListComponent_Conditional_20_For_16_Conditional_11_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 15)(13, "a", 19);
    \u0275\u0275text(14, "View / Edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c3, unit_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", unit_r2.number, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(unit_r2.bedrooms);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, unit_r2.rentCents));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(10, ctx_r0.statusOf(unit_r2.id) === "occupied" ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c3, unit_r2.id));
  }
}
function UnitsListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Unit #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 14);
    \u0275\u0275text(7, "Bedrooms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 14);
    \u0275\u0275text(9, "Monthly Rent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 15);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, UnitsListComponent_Conditional_20_For_16_Template, 15, 12, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.filtered());
  }
}
var UnitsListComponent = class _UnitsListComponent {
  constructor(route) {
    this.route = route;
    this.loading = signal(false);
    this.error = signal("");
    this.units = signal([
      { id: "u1", number: "101", bedrooms: 1, rentCents: 12e4 },
      { id: "u2", number: "102", bedrooms: 2, rentCents: 18e4 },
      { id: "u3", number: "201", bedrooms: 2, rentCents: 19e4 },
      { id: "u4", number: "202", bedrooms: 3, rentCents: 24e4 }
    ]);
    this.occupancy = {
      u1: "occupied",
      u2: "occupied",
      u3: "occupied",
      u4: "vacant"
    };
    this.statusFilter = signal("");
    this.filtered = computed(() => {
      const filter = this.statusFilter();
      const list = this.units();
      if (!filter)
        return list;
      return list.filter((u) => this.statusOf(u.id) === filter);
    });
  }
  ngOnInit() {
    this.sub = this.route.queryParamMap.subscribe((params) => {
      const raw = params.get("status");
      this.statusFilter.set(raw === "occupied" || raw === "vacant" ? raw : "");
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  statusOf(id) {
    return this.occupancy[id] ?? "vacant";
  }
  static {
    this.\u0275fac = function UnitsListComponent_Factory(t) {
      return new (t || _UnitsListComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnitsListComponent, selectors: [["app-units-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 13, consts: [[1, "page", "stack"], [1, "page-head", "row"], [1, "muted"], [1, "spacer"], ["routerLink", "/units/new", 1, "btn", "btn-primary"], ["role", "group", "aria-label", "Filter units by status", 1, "chips"], ["routerLink", "/units", 1, "chip", 3, "queryParams"], ["role", "status", "aria-live", "polite", 1, "state"], [1, "spinner"], [1, "state"], [1, "state-icon"], [1, "error"], [1, "table-wrap", "card"], [1, "table"], [1, "num"], [1, "actions-col"], [1, "unit-link", 3, "routerLink"], [1, "num", "strong"], [1, "badge", "badge-ok"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], [1, "badge", "badge-muted"]], template: function UnitsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Units");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Manage your portfolio's units");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(7, "span", 3);
        \u0275\u0275elementStart(8, "a", 4);
        \u0275\u0275text(9, "Add Unit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "a", 6);
        \u0275\u0275text(12, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 6);
        \u0275\u0275text(14, "Occupied");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 6);
        \u0275\u0275text(16, "Vacant");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, UnitsListComponent_Conditional_17_Template, 4, 0, "div", 7)(18, UnitsListComponent_Conditional_18_Template, 5, 1)(19, UnitsListComponent_Conditional_19_Template, 7, 0)(20, UnitsListComponent_Conditional_20_Template, 17, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275classProp("active", ctx.statusFilter() === "");
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(10, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.statusFilter() === "occupied");
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(11, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.statusFilter() === "vacant");
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(12, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(17, ctx.loading() ? 17 : ctx.error() ? 18 : ctx.filtered().length === 0 ? 19 : 20);
      }
    }, dependencies: [CommonModule, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--space-4);\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  margin-top: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.page-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 44px;\n  padding: 0 var(--space-4);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-muted);\n  background: var(--color-surface);\n}\n.chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-brand);\n  text-decoration: none;\n}\n.chip.active[_ngcontent-%COMP%] {\n  border-color: var(--color-brand);\n  background: var(--color-brand);\n  color: var(--color-surface);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table[_ngcontent-%COMP%] {\n  min-width: 640px;\n}\n.table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.unit-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-brand);\n}\n.actions-col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.actions-col[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n}\n/*# sourceMappingURL=units-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnitsListComponent, { className: "UnitsListComponent", filePath: "src/app/pages/units-list/units-list.component.ts", lineNumber: 18 });
})();
export {
  UnitsListComponent
};
//# sourceMappingURL=units-list.component-55Z4DDWY.js.map
