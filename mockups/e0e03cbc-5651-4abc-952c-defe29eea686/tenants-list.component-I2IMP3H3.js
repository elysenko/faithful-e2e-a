import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  RouterLink
} from "./chunk-PGTF2OAP.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5S2USPPB.js";

// src/app/pages/tenants-list/tenants-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TenantsListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading tenants\u2026");
    \u0275\u0275elementEnd()();
  }
}
function TenantsListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function TenantsListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No tenants yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 2);
    \u0275\u0275text(6, "Add a tenant to get started.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 4);
    \u0275\u0275text(8, "Add Tenant");
    \u0275\u0275elementEnd()();
  }
}
function TenantsListComponent_Conditional_13_For_18_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Delinquent");
    \u0275\u0275elementEnd();
  }
}
function TenantsListComponent_Conditional_13_For_18_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Current");
    \u0275\u0275elementEnd();
  }
}
function TenantsListComponent_Conditional_13_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, TenantsListComponent_Conditional_13_For_18_Conditional_11_Template, 2, 0, "span", 16)(12, TenantsListComponent_Conditional_13_For_18_Conditional_12_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 13)(14, "a", 17);
    \u0275\u0275text(15, "Add another");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Unit ", ctx_r0.rowFor(t_r2).unitNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, ctx_r0.rowFor(t_r2).rentCents));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(11, ctx_r0.rowFor(t_r2).delinquent ? 11 : 12);
  }
}
function TenantsListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 11)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 12);
    \u0275\u0275text(11, "Rent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Lease");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 13);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, TenantsListComponent_Conditional_13_For_18_Template, 16, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.tenants());
  }
}
var TenantsListComponent = class _TenantsListComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal("");
    this.tenants = signal([
      { id: "t1", name: "Alex Rivera", email: "tenant1@demo", role: "tenant" },
      { id: "t2", name: "Bailey Chen", email: "tenant2@demo", role: "tenant" },
      { id: "t3", name: "Casey Morgan", email: "tenant3@demo", role: "tenant" }
    ]);
    this.meta = {
      t1: { unit: "101", rentCents: 12e4, delinquent: false },
      t2: { unit: "102", rentCents: 18e4, delinquent: false },
      t3: { unit: "201", rentCents: 19e4, delinquent: true }
    };
  }
  rowFor(user) {
    const m = this.meta[user.id] ?? { unit: "\u2014", rentCents: 0, delinquent: false };
    return { user, unitNumber: m.unit, rentCents: m.rentCents, delinquent: m.delinquent };
  }
  static {
    this.\u0275fac = function TenantsListComponent_Factory(t) {
      return new (t || _TenantsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantsListComponent, selectors: [["app-tenants-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 1, consts: [[1, "page", "stack"], [1, "page-head", "row"], [1, "muted"], [1, "spacer"], ["routerLink", "/tenants/new", 1, "btn", "btn-primary"], ["role", "status", "aria-live", "polite", 1, "state"], [1, "spinner"], [1, "state"], [1, "state-icon"], [1, "error"], [1, "table-wrap", "card"], [1, "table"], [1, "num"], [1, "actions-col"], [1, "strong"], [1, "nowrap"], [1, "badge", "badge-danger"], ["routerLink", "/tenants/new", 1, "btn", "btn-outline", "btn-sm"], [1, "badge", "badge-ok"]], template: function TenantsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Tenants");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Manage the people on your leases.");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(7, "span", 3);
        \u0275\u0275elementStart(8, "a", 4);
        \u0275\u0275text(9, "Add Tenant");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, TenantsListComponent_Conditional_10_Template, 4, 0, "div", 5)(11, TenantsListComponent_Conditional_11_Template, 5, 1)(12, TenantsListComponent_Conditional_12_Template, 9, 0)(13, TenantsListComponent_Conditional_13_Template, 19, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(10, ctx.loading() ? 10 : ctx.error() ? 11 : ctx.tenants().length === 0 ? 12 : 13);
      }
    }, dependencies: [CommonModule, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  gap: var(--space-3);\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table[_ngcontent-%COMP%] {\n  min-width: 640px;\n}\n.table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.state-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n/*# sourceMappingURL=tenants-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantsListComponent, { className: "TenantsListComponent", filePath: "src/app/pages/tenants-list/tenants-list.component.ts", lineNumber: 21 });
})();
export {
  TenantsListComponent
};
//# sourceMappingURL=tenants-list.component-I2IMP3H3.js.map
