import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5S2USPPB.js";

// src/app/pages/lease-detail/lease-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LeaseDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lease \u2014 Unit ", l_r1.unit == null ? null : l_r1.unit.number, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.statusBadge(l_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(l_r1.status));
  }
}
function LeaseDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading lease\u2026");
    \u0275\u0275elementEnd()();
  }
}
function LeaseDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 10);
    \u0275\u0275text(6, "Back to Leases");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Outstanding \u2014 payment due.");
    \u0275\u0275elementEnd();
  }
}
function LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Paid in full.");
    \u0275\u0275elementEnd();
  }
}
function LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, "\u{1F9FE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No ledger activity yet.");
    \u0275\u0275elementEnd()();
  }
}
function LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_41_For_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "cents");
  }
  if (rf & 2) {
    const e_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2212", \u0275\u0275pipeBind1(1, 1, e_r3.amountCents), " ");
  }
}
function LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_41_For_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "cents");
  }
  if (rf & 2) {
    const e_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, e_r3.amountCents), " ");
  }
}
function LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_41_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 26);
    \u0275\u0275template(9, LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_41_For_14_Conditional_9_Template, 2, 3)(10, LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_41_For_14_Conditional_10_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r3.postedOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r3.note);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.badgeClass(e_r3.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(e_r3.type));
    \u0275\u0275advance();
    \u0275\u0275classProp("credit", e_r3.type === "payment");
    \u0275\u0275advance();
    \u0275\u0275conditional(9, e_r3.type === "payment" ? 9 : 10);
  }
}
function LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "table", 25)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 26);
    \u0275\u0275text(11, "Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_41_For_14_Template, 11, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.ledger());
  }
}
function LeaseDetailComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "span", 14);
    \u0275\u0275text(4, "Tenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "span", 14);
    \u0275\u0275text(11, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 13)(15, "span", 14);
    \u0275\u0275text(16, "Term");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 17);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 13)(20, "span", 14);
    \u0275\u0275text(21, "Monthly rent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 17);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "cents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 13)(26, "span", 14);
    \u0275\u0275text(27, "Due day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 17);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 18)(31, "span", 14);
    \u0275\u0275text(32, "Current balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 19);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "cents");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_36_Template, 2, 0, "span", 20)(37, LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_37_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "h2", 21);
    \u0275\u0275text(39, "Ledger");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_40_Template, 5, 0, "div", 7)(41, LeaseDetailComponent_Conditional_7_Conditional_0_Conditional_41_Template, 15, 0);
    \u0275\u0275elementStart(42, "div", 22)(43, "a", 23);
    \u0275\u0275text(44, "Back to Leases");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_11_0;
    const l_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(l_r4.tenant == null ? null : l_r4.tenant.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r4.tenant == null ? null : l_r4.tenant.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Unit ", l_r4.unit == null ? null : l_r4.unit.number, " \xB7 ", l_r4.unit == null ? null : l_r4.unit.bedrooms, " bed");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", l_r4.startsOn, " \u2013 ", l_r4.endsOn, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 13, l_r4.rentCents));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Day ", l_r4.dueDay, " of each month");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("owed", ((tmp_9_0 = l_r4.balanceCents) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 15, l_r4.balanceCents), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(36, ((tmp_11_0 = l_r4.balanceCents) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : 0) > 0 ? 36 : 37);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(40, ctx_r1.ledger().length === 0 ? 40 : 41);
  }
}
function LeaseDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LeaseDetailComponent_Conditional_7_Conditional_0_Template, 45, 17);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r1.lease()) ? 0 : -1, tmp_1_0);
  }
}
var U1 = { id: "u1", number: "101", bedrooms: 1, rentCents: 12e4 };
var U2 = { id: "u2", number: "102", bedrooms: 2, rentCents: 18e4 };
var U3 = { id: "u3", number: "201", bedrooms: 2, rentCents: 19e4 };
var T1 = { id: "t1", name: "Alex Rivera", email: "tenant1@demo", role: "tenant" };
var T2 = { id: "t2", name: "Bailey Chen", email: "tenant2@demo", role: "tenant" };
var T3 = { id: "t3", name: "Casey Morgan", email: "tenant3@demo", role: "tenant" };
var LEASES = [
  { id: "l1", unitId: "u1", unit: U1, tenantId: "t1", tenant: T1, startsOn: "2025-01-01", endsOn: "2026-12-31", rentCents: 12e4, dueDay: 1, balanceCents: 12e4, status: "current" },
  { id: "l2", unitId: "u2", unit: U2, tenantId: "t2", tenant: T2, startsOn: "2025-03-01", endsOn: "2026-02-28", rentCents: 18e4, dueDay: 1, balanceCents: 0, status: "current" },
  { id: "l3", unitId: "u3", unit: U3, tenantId: "t3", tenant: T3, startsOn: "2024-06-01", endsOn: "2026-05-31", rentCents: 19e4, dueDay: 1, balanceCents: 24e4, status: "delinquent" }
];
var LEDGERS = {
  l1: [
    { id: "l1-e1", leaseId: "l1", type: "charge", amountCents: 12e4, postedOn: "2026-06-01", period: "2026-06", note: "Rent \u2014 June 2026" },
    { id: "l1-e2", leaseId: "l1", type: "payment", amountCents: 12e4, postedOn: "2026-06-03", note: "Payment received", receiptId: "r1" },
    { id: "l1-e3", leaseId: "l1", type: "charge", amountCents: 12e4, postedOn: "2026-07-01", period: "2026-07", note: "Rent \u2014 July 2026" }
  ],
  l2: [
    { id: "l2-e1", leaseId: "l2", type: "charge", amountCents: 18e4, postedOn: "2026-07-01", period: "2026-07", note: "Rent \u2014 July 2026" },
    { id: "l2-e2", leaseId: "l2", type: "payment", amountCents: 18e4, postedOn: "2026-07-02", note: "Payment received", receiptId: "r2" }
  ],
  l3: [
    { id: "l3-e1", leaseId: "l3", type: "charge", amountCents: 19e4, postedOn: "2026-06-01", period: "2026-06", note: "Rent \u2014 June 2026" },
    { id: "l3-e2", leaseId: "l3", type: "lateFee", amountCents: 5e3, postedOn: "2026-06-06", note: "Late fee \u2014 June 2026" },
    { id: "l3-e3", leaseId: "l3", type: "charge", amountCents: 19e4, postedOn: "2026-07-01", period: "2026-07", note: "Rent \u2014 July 2026" },
    { id: "l3-e4", leaseId: "l3", type: "payment", amountCents: 145e3, postedOn: "2026-07-04", note: "Partial payment", receiptId: "r3" }
  ]
};
var LeaseDetailComponent = class _LeaseDetailComponent {
  constructor(route) {
    this.route = route;
    this.loading = signal(false);
    this.error = signal("");
    this.lease = signal(null);
    this.ledger = signal([]);
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    const found = LEASES.find((l) => l.id === id) ?? null;
    if (!found) {
      this.error.set("Lease not found.");
      return;
    }
    this.lease.set(found);
    this.ledger.set(LEDGERS[found.id] ?? []);
  }
  badgeClass(type) {
    switch (type) {
      case "payment":
        return "badge-ok";
      case "lateFee":
        return "badge-danger";
      default:
        return "badge-info";
    }
  }
  typeLabel(type) {
    switch (type) {
      case "payment":
        return "Payment";
      case "lateFee":
        return "Late fee";
      default:
        return "Charge";
    }
  }
  statusBadge(status) {
    return status === "delinquent" ? "badge-danger" : "badge-ok";
  }
  statusLabel(status) {
    return status === "delinquent" ? "Delinquent" : "Current";
  }
  static {
    this.\u0275fac = function LeaseDetailComponent_Factory(t) {
      return new (t || _LeaseDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaseDetailComponent, selectors: [["app-lease-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page", "stack"], [1, "page-head"], ["routerLink", "/leases", 1, "back-link"], [1, "row", "title-row"], ["role", "status", "aria-live", "polite", 1, "state"], [1, "badge"], [1, "spinner"], [1, "state"], [1, "state-icon"], [1, "error"], ["routerLink", "/leases", 1, "btn", "btn-outline", "btn-sm"], [1, "detail-grid"], [1, "card", "card-pad", "summary", "stack"], [1, "summary-block"], [1, "k"], [1, "v", "strong"], [1, "v", "muted", "small"], [1, "v"], [1, "card", "card-pad", "balance"], [1, "balance-amount"], [1, "muted", "small"], [1, "section-title"], [1, "row", "actions"], ["routerLink", "/leases", 1, "btn", "btn-outline"], [1, "table-wrap", "card"], [1, "table"], [1, "num"], [1, "nowrap", "muted"], [1, "strong"]], template: function LeaseDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back to Leases");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, LeaseDetailComponent_Conditional_4_Template, 5, 4, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, LeaseDetailComponent_Conditional_5_Template, 4, 0, "div", 4)(6, LeaseDetailComponent_Conditional_6_Template, 7, 1)(7, LeaseDetailComponent_Conditional_7_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, (tmp_0_0 = ctx.lease()) ? 4 : -1, tmp_0_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.loading() ? 5 : ctx.error() ? 6 : ctx.lease() ? 7 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-muted);\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-brand);\n  text-decoration: none;\n}\n.title-row[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.badge[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n.card-pad[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);\n  gap: var(--space-4);\n  align-items: start;\n}\n.summary-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.summary-block[_ngcontent-%COMP%]   .k[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  font-weight: 700;\n  color: var(--color-muted);\n}\n.summary-block[_ngcontent-%COMP%]   .v[_ngcontent-%COMP%] {\n  font-size: var(--fs-base);\n  color: var(--color-ink);\n}\n.summary-block[_ngcontent-%COMP%]   .v.strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.balance[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  background: var(--color-surface-alt);\n}\n.balance[_ngcontent-%COMP%]   .k[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  font-weight: 700;\n  color: var(--color-muted);\n}\n.balance-amount[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n  color: var(--color-success);\n}\n.balance-amount.owed[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  margin-top: var(--space-2);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table[_ngcontent-%COMP%] {\n  min-width: 620px;\n}\n.table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-ink);\n}\n.num.credit[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-weight: 700;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n}\n@media (max-width: 640px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=lease-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaseDetailComponent, { className: "LeaseDetailComponent", filePath: "src/app/pages/lease-detail/lease-detail.component.ts", lineNumber: 46 });
})();
export {
  LeaseDetailComponent
};
//# sourceMappingURL=lease-detail.component-CHBQADVQ.js.map
