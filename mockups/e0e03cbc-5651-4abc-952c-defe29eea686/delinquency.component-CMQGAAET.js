import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  RouterLink
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
  computed,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5S2USPPB.js";

// src/app/pages/delinquency/delinquency.component.ts
var _forTrack0 = ($index, $item) => $item.lease.id;
var _c0 = (a0) => ["/leases", a0];
function DelinquencyComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading report\u2026");
    \u0275\u0275elementEnd()();
  }
}
function DelinquencyComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
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
function DelinquencyComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No delinquent leases \u2014 everyone is current \u{1F389}");
    \u0275\u0275elementEnd()();
  }
}
function DelinquencyComponent_Conditional_9_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 19);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 16)(15, "a", 21);
    \u0275\u0275text(16, " View lease ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.tenant.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.tenant.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Unit ", r_r2.unit.number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, r_r2.balanceCents));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", r_r2.daysPastDue, " days");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, r_r2.lease.id));
  }
}
function DelinquencyComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Delinquent leases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9)(7, "span", 10);
    \u0275\u0275text(8, "Total overdue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cents");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "table", 14)(14, "thead")(15, "tr")(16, "th");
    \u0275\u0275text(17, "Tenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 15);
    \u0275\u0275text(21, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Days past due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 16);
    \u0275\u0275text(25, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275repeaterCreate(27, DelinquencyComponent_Conditional_9_For_28_Template, 17, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.delinquentCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 2, ctx_r0.totalOverdueCents()));
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.rows());
  }
}
var DelinquencyComponent = class _DelinquencyComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal("");
    this.rows = signal([
      {
        lease: {
          id: "l3",
          unitId: "u3",
          tenantId: "t3",
          startsOn: "2026-01-01",
          endsOn: "2026-12-31",
          rentCents: 19e4,
          dueDay: 1,
          status: "delinquent"
        },
        tenant: { id: "t3", name: "Casey Morgan", email: "tenant3@demo", role: "tenant" },
        unit: { id: "u3", number: "201", bedrooms: 2, rentCents: 19e4 },
        balanceCents: 24e4,
        daysPastDue: 42
      }
    ]);
    this.delinquentCount = computed(() => this.rows().length);
    this.totalOverdueCents = computed(() => this.rows().reduce((sum, r) => sum + r.balanceCents, 0));
  }
  static {
    this.\u0275fac = function DelinquencyComponent_Factory(t) {
      return new (t || _DelinquencyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DelinquencyComponent, selectors: [["app-delinquency"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "page", "stack"], [1, "page-head"], [1, "muted"], ["role", "status", "aria-live", "polite", 1, "state"], [1, "spinner"], [1, "state"], [1, "state-icon"], [1, "error"], [1, "row", "tiles"], [1, "card", "card-pad", "tile"], [1, "tile-label"], [1, "tile-value"], [1, "tile-value", "danger"], [1, "table-wrap", "card"], [1, "table"], [1, "num"], [1, "actions-col"], [1, "strong"], [1, "nowrap"], [1, "num", "danger", "strong"], [1, "badge", "badge-danger"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"]], template: function DelinquencyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h1");
        \u0275\u0275text(3, "Delinquency Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Leases with an outstanding balance past due.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, DelinquencyComponent_Conditional_6_Template, 4, 0, "div", 3)(7, DelinquencyComponent_Conditional_7_Template, 5, 1)(8, DelinquencyComponent_Conditional_8_Template, 5, 0)(9, DelinquencyComponent_Conditional_9_Template, 29, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.error() ? 7 : ctx.rows().length === 0 ? 8 : 9);
      }
    }, dependencies: [CommonModule, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.tiles[_ngcontent-%COMP%] {\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  flex: 1 1 180px;\n}\n.tile-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  font-weight: 700;\n  color: var(--color-muted);\n}\n.tile-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 800;\n  color: var(--color-ink);\n}\n.tile-value.danger[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table[_ngcontent-%COMP%] {\n  min-width: 640px;\n}\n.table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.danger[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.state-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n/*# sourceMappingURL=delinquency.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DelinquencyComponent, { className: "DelinquencyComponent", filePath: "src/app/pages/delinquency/delinquency.component.ts", lineNumber: 14 });
})();
export {
  DelinquencyComponent
};
//# sourceMappingURL=delinquency.component-CMQGAAET.js.map
