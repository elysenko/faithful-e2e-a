import {
  CommonModule,
  RouterLink,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UQ66P35U.js";

// src/app/pages/conflicts/conflicts.component.ts
var _forTrack0 = ($index, $item) => $item.billId + $item.legislatorId;
var _forTrack1 = ($index, $item) => $item.entity;
var _c0 = (a0) => ["/bills", a0];
var _c1 = (a0) => ["/legislators", a0];
function ConflictsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Loading conflicts\u2026");
    \u0275\u0275elementEnd();
  }
}
function ConflictsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ConflictsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "No conflicts flagged. \u{1F389}");
    \u0275\u0275elementEnd()();
  }
}
function ConflictsComponent_Conditional_9_For_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Primary sponsor");
    \u0275\u0275elementEnd();
  }
}
function ConflictsComponent_Conditional_9_For_7_For_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "sector match");
    \u0275\u0275elementEnd();
  }
}
function ConflictsComponent_Conditional_9_For_7_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ConflictsComponent_Conditional_9_For_7_For_13_Conditional_4_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    \u0275\u0275classProp("hit", i_r2.isConflict);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r2.entity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", i_r2.sector, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(4, i_r2.isConflict ? 4 : -1);
  }
}
function ConflictsComponent_Conditional_9_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "a", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 13)(8, "a", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ConflictsComponent_Conditional_9_For_7_Conditional_10_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 16);
    \u0275\u0275repeaterCreate(12, ConflictsComponent_Conditional_9_For_7_For_13_Template, 5, 5, "li", 17, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, r_r3.billId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.billNumber);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, r_r3.billId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.billTitle);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, r_r3.legislatorId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.legislatorName);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, r_r3.isPrimary ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r3.interests);
  }
}
function ConflictsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 1);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275repeaterCreate(6, ConflictsComponent_Conditional_9_For_7_Template, 14, 13, "div", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u26A0 ", ctx_r0.flagged().length, " flagged rows");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("across ", ctx_r0.billCount(), " bills");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.flagged());
  }
}
var ConflictsComponent = class _ConflictsComponent {
  constructor() {
    this.loading = signal(false);
    this.error = signal("");
    this.rows = signal([
      {
        billId: "b1",
        billNumber: "HB0042",
        billTitle: "Renewable Energy Tax Incentives",
        legislatorId: "l1",
        legislatorName: "Sen. Marcia Holloway",
        isPrimary: true,
        isConflict: true,
        interests: [{ entity: "Wasatch Solar Holdings", sector: "energy", isConflict: true }]
      },
      {
        billId: "b1",
        billNumber: "HB0042",
        billTitle: "Renewable Energy Tax Incentives",
        legislatorId: "l2",
        legislatorName: "Rep. David Cho",
        isPrimary: false,
        isConflict: true,
        interests: [{ entity: "GreenGrid Consulting", sector: "energy", isConflict: true }]
      },
      {
        billId: "b4",
        billNumber: "SB0075",
        billTitle: "Grid Resilience & Storage Standards",
        legislatorId: "l8",
        legislatorName: "Sen. Karl Osborne",
        isPrimary: true,
        isConflict: true,
        interests: [{ entity: "Beehive Power Partners", sector: "energy", isConflict: true }]
      },
      {
        billId: "b6",
        billNumber: "SB0158",
        billTitle: "Affordable Housing Density Bonus",
        legislatorId: "l5",
        legislatorName: "Rep. Owen Barnett",
        isPrimary: false,
        isConflict: true,
        interests: [{ entity: "Barnett Realty Group", sector: "real-estate", isConflict: true }]
      }
    ]);
    this.flagged = computed(() => this.rows().filter((r) => r.isConflict));
    this.billCount = computed(() => new Set(this.flagged().map((r) => r.billId)).size);
  }
  static {
    this.\u0275fac = function ConflictsComponent_Factory(t) {
      return new (t || _ConflictsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConflictsComponent, selectors: [["app-conflicts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "page-head"], [1, "muted"], [1, "state", "muted"], [1, "state", "error"], [1, "card", "state", "empty"], [1, "summary-bar", "card"], [1, "badge", "badge-conflict"], [1, "conflict-list"], [1, "card", "conflict-card"], [1, "cc-bill"], [1, "bill-number", 3, "routerLink"], [1, "cc-bill-title", 3, "routerLink"], [1, "cc-row"], [1, "cc-legislator"], [3, "routerLink"], [1, "badge", "badge-primary"], [1, "cc-interests"], [3, "hit"], [1, "hit-flag"]], template: function ConflictsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div")(2, "h1");
        \u0275\u0275text(3, "Conflicts of interest");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 1);
        \u0275\u0275text(5, " Sponsors whose disclosed interest sector overlaps a bill they sponsor \u2014 flagged across every tracked bill. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, ConflictsComponent_Conditional_6_Template, 2, 0, "p", 2)(7, ConflictsComponent_Conditional_7_Template, 2, 1)(8, ConflictsComponent_Conditional_8_Template, 3, 0)(9, ConflictsComponent_Conditional_9_Template, 8, 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.error() ? 7 : ctx.flagged().length === 0 ? 8 : 9);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: var(--fs-xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 65ch;\n  font-size: var(--fs-sm);\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  text-align: center;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.summary-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.badge-conflict[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n}\n.badge-primary[_ngcontent-%COMP%] {\n  background: var(--color-info-bg);\n  color: var(--color-info);\n}\n.conflict-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.conflict-card[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  border-left: 4px solid var(--color-danger);\n}\n.cc-bill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-3);\n  padding-bottom: var(--space-2);\n  border-bottom: 1px solid var(--color-border);\n}\n.bill-number[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-weight: 700;\n  font-size: var(--fs-sm);\n}\n.cc-bill-title[_ngcontent-%COMP%] {\n  color: var(--color-ink);\n  font-weight: 600;\n}\n.cc-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: var(--space-3);\n}\n.cc-legislator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  font-weight: 600;\n}\n.cc-interests[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: var(--space-4);\n  font-size: var(--fs-sm);\n}\n.cc-interests[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.cc-interests[_ngcontent-%COMP%]   li.hit[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.hit-flag[_ngcontent-%COMP%] {\n  margin-left: var(--space-2);\n  padding: 1px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-danger);\n  color: #fff;\n  font-size: var(--fs-xs);\n}\n@media (max-width: 768px) {\n  .cc-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=conflicts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConflictsComponent, { className: "ConflictsComponent", filePath: "src/app/pages/conflicts/conflicts.component.ts", lineNumber: 13 });
})();
export {
  ConflictsComponent
};
//# sourceMappingURL=conflicts.component-IDVRFRKQ.js.map
