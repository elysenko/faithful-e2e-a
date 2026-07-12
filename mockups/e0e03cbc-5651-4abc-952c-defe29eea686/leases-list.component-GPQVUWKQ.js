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
  ɵɵclassMap,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5S2USPPB.js";

// src/app/pages/leases-list/leases-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({});
var _c1 = () => ({ status: "current" });
var _c2 = () => ({ status: "delinquent" });
var _c3 = (a0) => ["/leases", a0];
function LeasesListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading leases\u2026");
    \u0275\u0275elementEnd()();
  }
}
function LeasesListComponent_Conditional_18_Template(rf, ctx) {
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
function LeasesListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No leases match this filter.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 12);
    \u0275\u0275text(6, "Create a lease");
    \u0275\u0275elementEnd()();
  }
}
function LeasesListComponent_Conditional_20_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 15);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const lease_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c3, lease_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Unit ", lease_r2.unit == null ? null : lease_r2.unit.number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lease_r2.tenant == null ? null : lease_r2.tenant.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", lease_r2.startsOn, " \u2013 ", lease_r2.endsOn, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, lease_r2.rentCents));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("owed", ((tmp_16_0 = lease_r2.balanceCents) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, lease_r2.balanceCents), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.statusBadge(lease_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(lease_r2.status), " ");
  }
}
function LeasesListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Term");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 15);
    \u0275\u0275text(11, "Rent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 15);
    \u0275\u0275text(13, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, LeasesListComponent_Conditional_20_For_18_Template, 16, 18, "tr", 16, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.filtered());
  }
}
var U1 = { id: "u1", number: "101", bedrooms: 1, rentCents: 12e4 };
var U2 = { id: "u2", number: "102", bedrooms: 2, rentCents: 18e4 };
var U3 = { id: "u3", number: "201", bedrooms: 2, rentCents: 19e4 };
var T1 = { id: "t1", name: "Alex Rivera", email: "tenant1@demo", role: "tenant" };
var T2 = { id: "t2", name: "Bailey Chen", email: "tenant2@demo", role: "tenant" };
var T3 = { id: "t3", name: "Casey Morgan", email: "tenant3@demo", role: "tenant" };
var LeasesListComponent = class _LeasesListComponent {
  constructor(route) {
    this.route = route;
    this.loading = signal(false);
    this.error = signal("");
    this.leases = signal([
      { id: "l1", unitId: "u1", unit: U1, tenantId: "t1", tenant: T1, startsOn: "2025-01-01", endsOn: "2026-12-31", rentCents: 12e4, dueDay: 1, balanceCents: 12e4, status: "current" },
      { id: "l2", unitId: "u2", unit: U2, tenantId: "t2", tenant: T2, startsOn: "2025-03-01", endsOn: "2026-02-28", rentCents: 18e4, dueDay: 1, balanceCents: 0, status: "current" },
      { id: "l3", unitId: "u3", unit: U3, tenantId: "t3", tenant: T3, startsOn: "2024-06-01", endsOn: "2026-05-31", rentCents: 19e4, dueDay: 1, balanceCents: 24e4, status: "delinquent" }
    ]);
    this.statusFilter = signal("all");
    this.filtered = computed(() => {
      const f = this.statusFilter();
      if (f === "all")
        return this.leases();
      return this.leases().filter((l) => l.status === f);
    });
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const raw = params.get("status");
      this.statusFilter.set(raw === "current" || raw === "delinquent" ? raw : "all");
    });
  }
  statusBadge(status) {
    return status === "delinquent" ? "badge-danger" : "badge-ok";
  }
  statusLabel(status) {
    return status === "delinquent" ? "Delinquent" : "Current";
  }
  static {
    this.\u0275fac = function LeasesListComponent_Factory(t) {
      return new (t || _LeasesListComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeasesListComponent, selectors: [["app-leases-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 13, consts: [[1, "page", "stack"], [1, "page-head", "row"], [1, "muted"], [1, "spacer"], ["routerLink", "/leases/new", 1, "btn", "btn-primary"], ["role", "tablist", "aria-label", "Filter leases by status", 1, "chips", "row"], ["routerLink", "/leases", 1, "chip", 3, "queryParams"], ["role", "status", "aria-live", "polite", 1, "state"], [1, "spinner"], [1, "state"], [1, "state-icon"], [1, "error"], ["routerLink", "/leases/new", 1, "btn", "btn-primary", "btn-sm"], [1, "table-wrap", "card"], [1, "table"], [1, "num"], [1, "row-link", 3, "routerLink"], [1, "strong"], [1, "nowrap", "muted"], [1, "badge"]], template: function LeasesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Leases");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Active tenancies across your portfolio.");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(7, "span", 3);
        \u0275\u0275elementStart(8, "a", 4);
        \u0275\u0275text(9, "New Lease");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "a", 6);
        \u0275\u0275text(12, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 6);
        \u0275\u0275text(14, "Current");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 6);
        \u0275\u0275text(16, "Delinquent");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, LeasesListComponent_Conditional_17_Template, 4, 0, "div", 7)(18, LeasesListComponent_Conditional_18_Template, 5, 1)(19, LeasesListComponent_Conditional_19_Template, 7, 0)(20, LeasesListComponent_Conditional_20_Template, 19, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275classProp("chip-active", ctx.statusFilter() === "all");
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(10, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("chip-active", ctx.statusFilter() === "current");
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(11, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("chip-active", ctx.statusFilter() === "delinquent");
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(12, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(17, ctx.loading() ? 17 : ctx.error() ? 18 : ctx.filtered().length === 0 ? 19 : 20);
      }
    }, dependencies: [CommonModule, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.chips[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  gap: var(--space-2);\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 36px;\n  padding: 0 var(--space-4);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-pill);\n  background: var(--color-surface);\n  color: var(--color-ink-soft);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: var(--color-surface-alt);\n}\n.chip-active[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n  border-color: var(--color-brand);\n  color: #fff;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table[_ngcontent-%COMP%] {\n  min-width: 720px;\n}\n.table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.num.owed[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-weight: 700;\n}\n.row-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background .12s;\n}\n.row-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n}\n.badge[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n/*# sourceMappingURL=leases-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeasesListComponent, { className: "LeasesListComponent", filePath: "src/app/pages/leases-list/leases-list.component.ts", lineNumber: 24 });
})();
export {
  LeasesListComponent
};
//# sourceMappingURL=leases-list.component-GPQVUWKQ.js.map
