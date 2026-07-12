import {
  Router
} from "./chunk-OCSIP44N.js";
import {
  CommonModule,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YT626SJK.js";

// src/app/pages/returns-list/returns-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReturnsListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading your returns\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReturnsListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ReturnsListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No returns yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, "Start your first return to walk through the guided interview.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 3);
    \u0275\u0275listener("click", function ReturnsListComponent_Conditional_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newReturn());
    });
    \u0275\u0275text(8, "Start a return");
    \u0275\u0275elementEnd()();
  }
}
function ReturnsListComponent_Conditional_10_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Next step: ", ctx_r0.stepLabels[r_r4.currentStep], " ");
  }
}
function ReturnsListComponent_Conditional_10_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" Filed \xB7 ", r_r4.updatedAt, " ");
  }
}
function ReturnsListComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ReturnsListComponent_Conditional_10_For_2_Template_button_click_0_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.open(r_r4));
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275template(9, ReturnsListComponent_Conditional_10_For_2_Conditional_9_Template, 1, 1)(10, ReturnsListComponent_Conditional_10_For_2_Conditional_10_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.year);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-ok", r_r4.status === "complete")("badge-warn", r_r4.status === "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.status === "complete" ? "Complete" : "Draft", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusLabels[r_r4.filingStatus]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, r_r4.status === "draft" ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r4.status === "complete" ? "View return \u2192" : "Resume \u2192", " ");
  }
}
function ReturnsListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, ReturnsListComponent_Conditional_10_For_2_Template, 13, 9, "button", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.returns());
  }
}
var ReturnsListComponent = class _ReturnsListComponent {
  constructor(router) {
    this.router = router;
    this.loading = signal(false);
    this.error = signal("");
    this.returns = signal([
      {
        id: "r-2024",
        userId: "me",
        year: 2024,
        filingStatus: "single",
        currentStep: "income",
        status: "draft",
        updatedAt: "2026-03-14"
      },
      {
        id: "r-2023",
        userId: "me",
        year: 2023,
        filingStatus: "married_joint",
        currentStep: "review",
        status: "complete",
        updatedAt: "2025-04-02"
      }
    ]);
    this.stepLabels = {
      filing_status: "Filing status",
      dependents: "Dependents",
      income: "Income",
      deductions: "Deductions",
      review: "Review"
    };
    this.statusLabels = {
      single: "Single",
      married_joint: "Married filing jointly",
      married_separate: "Married filing separately",
      head_of_household: "Head of household"
    };
  }
  newReturn() {
    const year = (/* @__PURE__ */ new Date()).getFullYear() - 1;
    const id = "r-" + year + "-" + this.returns().length;
    const created = {
      id,
      userId: "me",
      year,
      filingStatus: "single",
      currentStep: "filing_status",
      status: "draft"
    };
    this.returns.update((rs) => [created, ...rs]);
    this.router.navigate(["/returns", id, "wizard", "filing-status"]);
  }
  open(r) {
    this.router.navigate(["/returns", r.id, "wizard"]);
  }
  static {
    this.\u0275fac = function ReturnsListComponent_Factory(t) {
      return new (t || _ReturnsListComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReturnsListComponent, selectors: [["app-returns-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "page"], [1, "page-head"], [1, "spacer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "state"], [1, "state", "state-error"], [1, "card", "card-pad", "empty"], [1, "empty-emoji"], [1, "muted"], [1, "returns-grid"], ["type", "button", 1, "return-card", "card"], ["type", "button", 1, "return-card", "card", 3, "click"], [1, "rc-top"], [1, "rc-year"], [1, "badge"], [1, "rc-status"], [1, "rc-meta", "muted"], [1, "rc-cta"]], template: function ReturnsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "My tax returns");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function ReturnsListComponent_Template_button_click_5_listener() {
          return ctx.newReturn();
        });
        \u0275\u0275text(6, " + New return ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ReturnsListComponent_Conditional_7_Template, 2, 0, "div", 4)(8, ReturnsListComponent_Conditional_8_Template, 2, 1)(9, ReturnsListComponent_Conditional_9_Template, 9, 0)(10, ReturnsListComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.loading() ? 7 : ctx.error() ? 8 : ctx.returns().length === 0 ? 9 : 10);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.returns-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: var(--space-4);\n}\n.return-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: var(--space-5);\n  text-align: left;\n  cursor: pointer;\n  font-family: inherit;\n  transition:\n    box-shadow .15s,\n    transform .05s,\n    border-color .15s;\n}\n.return-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow);\n  border-color: var(--color-border-strong);\n}\n.return-card[_ngcontent-%COMP%]:active {\n  transform: scale(.99);\n}\n.rc-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.rc-year[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 800;\n  color: var(--color-ink);\n}\n.rc-status[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-ink-soft);\n}\n.rc-meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.rc-cta[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  color: var(--color-brand);\n  font-weight: 700;\n  font-size: var(--fs-sm);\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 420px;\n  margin: var(--space-6) auto;\n}\n.empty-emoji[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n/*# sourceMappingURL=returns-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReturnsListComponent, { className: "ReturnsListComponent", filePath: "src/app/pages/returns-list/returns-list.component.ts", lineNumber: 14 });
})();
export {
  ReturnsListComponent
};
//# sourceMappingURL=returns-list.component-F4WL4IRC.js.map
