import {
  AuthService
} from "./chunk-PNFJAIEQ.js";
import {
  FormsModule
} from "./chunk-FGE4ALCS.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate2
} from "./chunk-UQ66P35U.js";

// src/app/pages/legislator-detail/legislator-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/legislators", a0, "edit"];
var _c1 = (a0) => ["/bills", a0];
function LegislatorDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function LegislatorDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "a", 15);
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openModal("add-interest"));
    });
    \u0275\u0275text(4, "Add interest");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, l_r3.id));
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "No sponsorships recorded.");
    \u0275\u0275elementEnd();
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_18_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Primary");
    \u0275\u0275elementEnd();
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_18_For_2_Conditional_5_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c1, s_r4.billId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.bill == null ? null : s_r4.bill.number);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r4.bill == null ? null : s_r4.bill.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(5, s_r4.isPrimary ? 5 : -1);
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 17);
    \u0275\u0275repeaterCreate(1, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_18_For_2_Template, 6, 6, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.sponsorships());
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "No votes recorded.");
    \u0275\u0275elementEnd();
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_23_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, v_r5.billId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.billNumber(v_r5.billId));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("vote-" + v_r5.choice);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r5.choice);
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 21)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Bill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Vote");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275repeaterCreate(8, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_23_For_9_Template, 7, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.votes());
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openModal("add-interest"));
    });
    \u0275\u0275text(1, "\uFF0B Add");
    \u0275\u0275elementEnd();
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "No disclosed interests.");
    \u0275\u0275elementEnd();
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 26)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7.entity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7.sector);
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 25);
    \u0275\u0275repeaterCreate(1, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_30_For_2_Template, 5, 2, "li", 26, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.interests());
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275listener("click", function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_31_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Add disclosed interest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "label", 32);
    \u0275\u0275text(6, "Entity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31)(9, "label", 34);
    \u0275\u0275text(10, "Sector");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 36)(13, "button", 37);
    \u0275\u0275listener("click", function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_31_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 38);
    \u0275\u0275listener("click", function LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_31_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(16, "Add interest");
    \u0275\u0275elementEnd()()()();
  }
}
function LegislatorDetailComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1, "\u2190 All legislators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 3)(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6)(9, "span", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_12_Template, 5, 3, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9)(14, "section", 10)(15, "h2");
    \u0275\u0275text(16, "Sponsorships");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_17_Template, 2, 0, "p", 11)(18, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_18_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "section", 10)(20, "h2");
    \u0275\u0275text(21, "Voting record");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_22_Template, 2, 0, "p", 11)(23, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_23_Template, 10, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "section", 10)(25, "div", 12)(26, "h2");
    \u0275\u0275text(27, "Disclosed interests");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_28_Template, 2, 0, "button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_29_Template, 2, 0, "p", 11)(30, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_30_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, LegislatorDetailComponent_Conditional_2_Conditional_0_Conditional_31_Template, 17, 0, "div", 14);
  }
  if (rf & 2) {
    const l_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(l_r3.name.slice(4, 6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("chamber-" + l_r3.chamber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r3.chamber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", l_r3.party, " \xB7 District ", l_r3.district, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(12, ctx_r0.isEditor() ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(17, ctx_r0.sponsorships().length === 0 ? 17 : 18);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(22, ctx_r0.votes().length === 0 ? 22 : 23);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(28, ctx_r0.isEditor() ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(29, ctx_r0.interests().length === 0 ? 29 : 30);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(31, ctx_r0.modal() === "add-interest" ? 31 : -1);
  }
}
function LegislatorDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LegislatorDetailComponent_Conditional_2_Conditional_0_Template, 32, 13);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.legislator()) ? 0 : -1, tmp_1_0);
  }
}
function LegislatorDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Legislator not found. ");
    \u0275\u0275elementStart(2, "a", 39);
    \u0275\u0275text(3, "Back");
    \u0275\u0275elementEnd()();
  }
}
var LegislatorDetailComponent = class _LegislatorDetailComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.isEditor = this.auth.isEditor;
    this.legislatorId = signal("");
    this.modal = signal("");
    this.loading = signal(false);
    this.error = signal("");
    this.legislators = signal([
      { id: "l1", name: "Sen. Marcia Holloway", chamber: "senate", district: "S-12", party: "Republican" }
    ]);
    this.sponsorships = signal([
      {
        id: "s1",
        billId: "b1",
        legislatorId: "l1",
        isPrimary: true,
        bill: { id: "b1", number: "HB0042", title: "Renewable Energy Tax Incentives", summary: "", status: "committee", session: 2025, sectors: ["energy", "environment"] }
      },
      {
        id: "s4",
        billId: "b4",
        legislatorId: "l1",
        isPrimary: false,
        bill: { id: "b4", number: "SB0075", title: "Grid Resilience & Storage Standards", summary: "", status: "signed", session: 2024, sectors: ["energy"] }
      }
    ]);
    this.votes = signal([
      { id: "v1", billId: "b1", legislatorId: "l1", choice: "yea" },
      { id: "v10", billId: "b4", legislatorId: "l1", choice: "yea" },
      { id: "v11", billId: "b2", legislatorId: "l1", choice: "nay" }
    ]);
    this.interests = signal([
      { id: "i1", legislatorId: "l1", entity: "Wasatch Solar Holdings", sector: "energy" },
      { id: "i2", legislatorId: "l1", entity: "Holloway Family Trust", sector: "real-estate" }
    ]);
    this.billIndex = signal({
      b1: "HB0042",
      b2: "SB0110",
      b4: "SB0075"
    });
    this.legislator = computed(() => {
      const id = this.legislatorId();
      const list = this.legislators();
      return list.find((l) => l.id === id) ?? list[0];
    });
  }
  ngOnInit() {
    this.legislatorId.set(this.route.snapshot.paramMap.get("id") ?? "");
    this.modal.set(this.route.snapshot.queryParamMap.get("modal") ?? "");
  }
  billNumber(billId) {
    return this.billIndex()[billId] ?? billId;
  }
  openModal(name) {
    this.modal.set(name);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: name },
      queryParamsHandling: "merge"
    });
  }
  closeModal() {
    this.modal.set("");
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: null },
      queryParamsHandling: "merge"
    });
  }
  static {
    this.\u0275fac = function LegislatorDetailComponent_Factory(t) {
      return new (t || _LegislatorDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LegislatorDetailComponent, selectors: [["app-legislator-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "state", "muted"], [1, "state", "error"], ["routerLink", "/legislators", 1, "back-link"], [1, "detail-head", "card"], [1, "leg-avatar"], [1, "detail-head-main"], [1, "leg-meta"], [1, "badge", "chamber-badge"], [1, "detail-actions"], [1, "two-col"], [1, "card", "panel"], [1, "muted"], [1, "panel-head"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm"], [1, "modal-scrim"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "link-list"], [3, "routerLink"], [1, "bill-number"], [1, "badge", "badge-primary"], [1, "vote-table"], [1, "bill-number", 3, "routerLink"], [1, "badge", "vote-badge"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "interest-list"], [1, "interest-row"], [1, "interest-entity"], [1, "sector-tag"], [1, "modal-scrim", 3, "click"], [1, "modal", "card", 3, "click"], [1, "field"], ["for", "entity"], ["id", "entity", "type", "text", "placeholder", "Company or organization"], ["for", "sector"], ["id", "sector", "type", "text", "placeholder", "energy"], [1, "modal-foot"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["routerLink", "/legislators"]], template: function LegislatorDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LegislatorDetailComponent_Conditional_0_Template, 2, 0, "p", 0)(1, LegislatorDetailComponent_Conditional_1_Template, 2, 1)(2, LegislatorDetailComponent_Conditional_2_Template, 1, 1)(3, LegislatorDetailComponent_Conditional_3_Template, 4, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.loading() ? 0 : ctx.error() ? 1 : ctx.legislator() ? 2 : 3);
      }
    }, dependencies: [CommonModule, FormsModule, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  text-align: center;\n}\n.detail-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  padding: var(--space-5);\n  margin-bottom: var(--space-4);\n}\n.detail-head-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.detail-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: var(--fs-xl);\n}\n.leg-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  margin: 0;\n  color: var(--color-ink-soft);\n  font-size: var(--fs-sm);\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  flex-shrink: 0;\n}\n.leg-avatar[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 56px;\n  height: 56px;\n  flex-shrink: 0;\n  border-radius: var(--radius-pill);\n  background: var(--color-steel);\n  color: #fff;\n  font-weight: 700;\n  font-size: var(--fs-md);\n}\n.chamber-badge[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.chamber-house[_ngcontent-%COMP%] {\n  background: var(--color-info-bg);\n  color: var(--color-info);\n}\n.chamber-senate[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--space-4);\n}\n.panel[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-3);\n  font-size: var(--fs-lg);\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-3);\n}\n.panel-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.link-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.link-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  padding: var(--space-2) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.link-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.bill-number[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-weight: 700;\n  font-size: var(--fs-sm);\n}\n.badge-primary[_ngcontent-%COMP%] {\n  background: var(--color-info-bg);\n  color: var(--color-info);\n}\n.vote-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--fs-sm);\n}\n.vote-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .vote-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: var(--space-2);\n  border-bottom: 1px solid var(--color-border);\n}\n.vote-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-weight: 600;\n}\n.vote-badge[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.vote-yea[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.vote-nay[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n}\n.vote-absent[_ngcontent-%COMP%] {\n  background: var(--color-surface-alt);\n  color: var(--color-muted);\n}\n.interest-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.interest-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n  padding: var(--space-2) var(--space-3);\n  background: var(--color-surface-alt);\n  border-radius: var(--radius);\n}\n.interest-entity[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.sector-tag[_ngcontent-%COMP%] {\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-size: var(--fs-xs);\n  font-weight: 600;\n}\n.modal-scrim[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  background: rgba(20, 24, 31, .45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--space-5);\n}\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: var(--fs-lg);\n}\n.modal-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n@media (max-width: 768px) {\n  .detail-head[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .detail-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .modal-scrim[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    padding: 0;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n  }\n}\n/*# sourceMappingURL=legislator-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LegislatorDetailComponent, { className: "LegislatorDetailComponent", filePath: "src/app/pages/legislator-detail/legislator-detail.component.ts", lineNumber: 15 });
})();
export {
  LegislatorDetailComponent
};
//# sourceMappingURL=legislator-detail.component-RBJA6W5B.js.map
