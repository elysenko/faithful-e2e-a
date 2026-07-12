import {
  ActivatedRoute,
  Router
} from "./chunk-OCSIP44N.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtextInterpolate
} from "./chunk-YT626SJK.js";

// src/app/pages/wizard/filing-status/filing-status.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function FilingStatusComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function FilingStatusComponent_For_7_Template_button_click_0_listener() {
      const opt_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.choose(opt_r2.value));
    });
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "span", 8)(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selected() === opt_r2.value);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(opt_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r2.hint);
  }
}
var FilingStatusComponent = class _FilingStatusComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.returnId = "";
    this.saving = signal(false);
    this.selected = signal("single");
    this.options = [
      { value: "single", label: "Single", hint: "Unmarried or legally separated" },
      { value: "married_joint", label: "Married filing jointly", hint: "Combine income with your spouse" },
      { value: "married_separate", label: "Married filing separately", hint: "File apart from your spouse" },
      { value: "head_of_household", label: "Head of household", hint: "Unmarried and supporting a dependent" }
    ];
    this.returnId = this.route.parent?.snapshot.paramMap.get("id") ?? "";
  }
  choose(value) {
    this.selected.set(value);
  }
  next() {
    this.saving.set(true);
    this.router.navigate(["/returns", this.returnId, "wizard", "dependents"]);
  }
  static {
    this.\u0275fac = function FilingStatusComponent_Factory(t) {
      return new (t || _FilingStatusComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilingStatusComponent, selectors: [["app-filing-status"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 0, consts: [[1, "wiz-step"], [1, "lead"], [1, "status-list"], ["type", "button", 1, "status-opt", 3, "selected"], [1, "wiz-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "status-opt", 3, "click"], ["aria-hidden", "true", 1, "radio"], [1, "opt-main"], [1, "opt-label"], [1, "opt-hint"]], template: function FilingStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2");
        \u0275\u0275text(2, "What's your filing status?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4, "This determines your standard deduction and tax brackets.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2);
        \u0275\u0275repeaterCreate(6, FilingStatusComponent_For_7_Template, 7, 4, "button", 3, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
        \u0275\u0275listener("click", function FilingStatusComponent_Template_button_click_9_listener() {
          return ctx.next();
        });
        \u0275\u0275text(10, " Continue ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.options);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.status-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.status-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  width: 100%;\n  min-height: 64px;\n  padding: var(--space-4);\n  text-align: left;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  font-family: inherit;\n  cursor: pointer;\n  transition: border-color .15s, background .15s;\n}\n.status-opt[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-border-strong);\n}\n.status-opt.selected[_ngcontent-%COMP%] {\n  border-color: var(--color-brand);\n  background: var(--color-brand-tint);\n}\n.radio[_ngcontent-%COMP%] {\n  flex: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid var(--color-border-strong);\n}\n.status-opt.selected[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n  border-color: var(--color-brand);\n  background:\n    radial-gradient(\n      circle at center,\n      var(--color-brand) 0 6px,\n      transparent 7px);\n}\n.opt-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.opt-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.opt-hint[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n}\n/*# sourceMappingURL=filing-status.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilingStatusComponent, { className: "FilingStatusComponent", filePath: "src/app/pages/wizard/filing-status/filing-status.component.ts", lineNumber: 20 });
})();
export {
  FilingStatusComponent
};
//# sourceMappingURL=filing-status.component-CTZNZX2N.js.map
