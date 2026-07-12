import {
  STAGE_META
} from "./chunk-PDA44FSW.js";
import {
  toSignal
} from "./chunk-PAUVK2ZQ.js";
import {
  ActivatedRoute,
  CommonModule,
  CurrencyPipe,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S3A6C3F5.js";

// src/app/features/opportunities/opportunity-detail.component.ts
var _c0 = (a0) => ["/accounts", a0];
var _c1 = (a0) => ["/opportunities", a0, "edit"];
function OpportunityDetailComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function OpportunityDetailComponent_Conditional_59_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 18)(2, "h2");
    \u0275\u0275text(3, "Delete opportunity?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "Remove ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " from your pipeline? This cannot be undone.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 19)(10, "button", 20);
    \u0275\u0275listener("click", function OpportunityDetailComponent_Conditional_59_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(11, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 8);
    \u0275\u0275listener("click", function OpportunityDetailComponent_Conditional_59_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(13, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.opp().name);
  }
}
var OpportunityDetailComponent = class _OpportunityDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.stageMeta = STAGE_META;
    this.pm = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
    this.qm = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
    this.id = computed(() => this.pm().get("id") ?? "");
    this.showDelete = computed(() => this.qm().get("modal") === "delete");
    this.opportunities = signal([
      { id: "o1", name: "Acme \u2014 Platform Renewal", accountId: "a1", accountName: "Acme Corporation", stage: "NEGOTIATION", amount: 12e4, closeDate: "2026-08-15", probability: 75, owner: "Demo Admin" },
      { id: "o2", name: "Globex Data Migration", accountId: "a2", accountName: "Globex Industries", stage: "PROPOSAL", amount: 84e3, closeDate: "2026-07-30", probability: 60, owner: "Priya Nair" },
      { id: "o9", name: "Hooli Cloud Migration", accountId: "a8", accountName: "Hooli Cloud", stage: "NEGOTIATION", amount: 265e3, closeDate: "2026-07-18", probability: 80, owner: "Priya Nair" }
    ]);
    this.opp = computed(() => this.opportunities().find((o) => o.id === this.id()) ?? this.opportunities()[0]);
  }
  stageLabel(key) {
    return this.stageMeta.find((s) => s.key === key)?.label ?? key;
  }
  stageColor(key) {
    return this.stageMeta.find((s) => s.key === key)?.color ?? "var(--color-text-muted)";
  }
  askDelete() {
    this.router.navigate([], { queryParams: { modal: "delete" }, queryParamsHandling: "merge" });
  }
  cancelDelete() {
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  confirmDelete() {
    this.router.navigate(["/opportunities"]);
  }
  static {
    this.\u0275fac = function OpportunityDetailComponent_Factory(t) {
      return new (t || _OpportunityDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpportunityDetailComponent, selectors: [["app-opportunity-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 29, consts: [[1, "page"], ["routerLink", "/opportunities", 1, "crumb"], [1, "page-head"], [1, "muted"], [3, "routerLink"], [1, "badge"], [1, "toolbar"], [1, "btn", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], [1, "card", "card-pad"], [1, "detail-grid"], [1, "detail-field"], [1, "k"], [1, "v", "mono"], [1, "v"], [1, "section-title"], [1, "forecast", "mono"], [1, "scrim-modal", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "modal", "card"], [1, "form-actions"], [1, "btn", 3, "click"]], template: function OpportunityDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Opportunities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "header", 2)(4, "div")(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 3)(8, "a", 4);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " \xB7 ");
        \u0275\u0275elementStart(11, "span", 5);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 6)(14, "a", 7);
        \u0275\u0275text(15, "Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275listener("click", function OpportunityDetailComponent_Template_button_click_16_listener() {
          return ctx.askDelete();
        });
        \u0275\u0275text(17, "Delete");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "section", 9)(19, "div", 10)(20, "div", 11)(21, "span", 12);
        \u0275\u0275text(22, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 13);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 11)(27, "span", 12);
        \u0275\u0275text(28, "Probability");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 13);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 11)(32, "span", 12);
        \u0275\u0275text(33, "Stage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span", 14);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 11)(37, "span", 12);
        \u0275\u0275text(38, "Close date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 13);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 11)(42, "span", 12);
        \u0275\u0275text(43, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 14);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 11)(47, "span", 12);
        \u0275\u0275text(48, "Owner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 14);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "section", 9)(52, "h2", 15);
        \u0275\u0275text(53, "Weighted forecast");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p", 3);
        \u0275\u0275text(55, "Expected value at current probability");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p", 16);
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "currency");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(59, OpportunityDetailComponent_Conditional_59_Template, 14, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.opp().name);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c0, ctx.opp().accountId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.opp().accountName);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("color", ctx.stageColor(ctx.opp().stage));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.stageLabel(ctx.opp().stage));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c1, ctx.opp().id));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(25, 15, ctx.opp().amount, "USD", "symbol", "1.0-0"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.opp().probability, "%");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.stageLabel(ctx.opp().stage));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.opp().closeDate);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.opp().accountName);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.opp().owner);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(58, 20, ctx.opp().amount * ctx.opp().probability / 100, "USD", "symbol", "1.0-0"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(59, ctx.showDelete() ? 59 : -1);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.forecast[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: 700;\n  color: var(--color-brand-dark);\n  margin-top: var(--space-2);\n}\n/*# sourceMappingURL=opportunities.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpportunityDetailComponent, { className: "OpportunityDetailComponent", filePath: "src/app/features/opportunities/opportunity-detail.component.ts", lineNumber: 14 });
})();
export {
  OpportunityDetailComponent
};
//# sourceMappingURL=opportunity-detail.component-NCRUTUGP.js.map
