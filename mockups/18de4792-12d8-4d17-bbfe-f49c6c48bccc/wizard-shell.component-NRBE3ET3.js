import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet
} from "./chunk-OCSIP44N.js";
import {
  CommonModule,
  filter,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YT626SJK.js";

// src/app/pages/wizard/wizard-shell.component.ts
var _forTrack0 = ($index, $item) => $item.slug;
function WizardShellComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "button", 7);
    \u0275\u0275listener("click", function WizardShellComponent_For_8_Template_button_click_1_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(s_r2.slug));
    });
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const i_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("done", i_r4 < ctx_r2.activeIndex())("active", i_r4 === ctx_r2.activeIndex());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-current", i_r4 === ctx_r2.activeIndex() ? "step" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 < ctx_r2.activeIndex() ? "\u2713" : i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.label);
  }
}
var WizardShellComponent = class _WizardShellComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.steps = [
      { slug: "filing-status", step: "filing_status", label: "Filing status" },
      { slug: "dependents", step: "dependents", label: "Dependents" },
      { slug: "income", step: "income", label: "Income" },
      { slug: "deductions", step: "deductions", label: "Deductions" },
      { slug: "review", step: "review", label: "Review" }
    ];
    this.returnId = "";
    this.activeSlug = signal("filing-status");
    this.taxReturn = signal({
      id: "r-2024",
      userId: "me",
      year: 2024,
      filingStatus: "single",
      currentStep: "income",
      status: "draft"
    });
  }
  ngOnInit() {
    this.returnId = this.route.snapshot.paramMap.get("id") ?? "";
    const child = this.route.snapshot.firstChild;
    if (!child) {
      const saved = this.taxReturn()?.currentStep ?? "filing_status";
      const slug = this.steps.find((s) => s.step === saved)?.slug ?? "filing-status";
      this.router.navigate([slug], { relativeTo: this.route, replaceUrl: true });
    }
    this.syncActive(this.router.url);
    this.sub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => this.syncActive(e.urlAfterRedirects));
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  syncActive(url) {
    const match = this.steps.find((s) => url.includes("/wizard/" + s.slug));
    if (match)
      this.activeSlug.set(match.slug);
  }
  activeIndex() {
    return Math.max(0, this.steps.findIndex((s) => s.slug === this.activeSlug()));
  }
  goTo(slug) {
    this.router.navigate(["/returns", this.returnId, "wizard", slug]);
  }
  exit() {
    this.router.navigate(["/returns"]);
  }
  static {
    this.\u0275fac = function WizardShellComponent_Factory(t) {
      return new (t || _WizardShellComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardShellComponent, selectors: [["app-wizard-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "page", "wizard"], [1, "wizard-head", "no-print"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", "exit", 3, "click"], [1, "stepper", "no-print"], [1, "step", 3, "done", "active"], [1, "wizard-body"], [1, "step"], ["type", "button", 1, "step-btn", 3, "click"], [1, "step-num"], [1, "step-label"]], template: function WizardShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function WizardShellComponent_Template_button_click_2_listener() {
          return ctx.exit();
        });
        \u0275\u0275text(3, "\u2190 All returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "ol", 3);
        \u0275\u0275repeaterCreate(7, WizardShellComponent_For_8_Template, 6, 7, "li", 4, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275element(10, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", (tmp_0_0 = ctx.taxReturn()) == null ? null : tmp_0_0.year, " return");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.steps);
      }
    }, dependencies: [CommonModule, RouterOutlet], styles: ["\n\n.wizard[_ngcontent-%COMP%] {\n  max-width: 760px;\n}\n.wizard-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.wizard-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-lg);\n}\n.exit[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  list-style: none;\n  margin: 0 0 var(--space-5);\n  padding: 0;\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n}\n.step[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 84px;\n}\n.step-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-1);\n  width: 100%;\n  min-height: 48px;\n  padding: var(--space-2);\n  border: none;\n  background: transparent;\n  color: var(--color-muted);\n  font-family: inherit;\n  font-size: var(--fs-xs);\n  font-weight: 600;\n  cursor: pointer;\n  border-top: 3px solid var(--color-border);\n}\n.step.done[_ngcontent-%COMP%]   .step-btn[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n  border-top-color: var(--color-brand);\n}\n.step.active[_ngcontent-%COMP%]   .step-btn[_ngcontent-%COMP%] {\n  color: var(--color-brand-dark);\n  border-top-color: var(--color-brand);\n}\n.step-num[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--color-surface-inset);\n  color: var(--color-muted);\n  font-weight: 800;\n}\n.step.done[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%], .step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n}\n.step-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n@media (max-width: 520px) {\n  .step-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .step[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=wizard-shell.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardShellComponent, { className: "WizardShellComponent", filePath: "src/app/pages/wizard/wizard-shell.component.ts", lineNumber: 31 });
})();
export {
  WizardShellComponent
};
//# sourceMappingURL=wizard-shell.component-NRBE3ET3.js.map
