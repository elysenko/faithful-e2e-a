import {
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NK42F6RC.js";

// src/app/shared/category-chip/category-chip.component.ts
var CategoryChipComponent = class _CategoryChipComponent {
  constructor() {
    this._name = signal("");
    this.style = computed(() => {
      const key = this._name().toLowerCase();
      const map = {
        tech: ["--cat-tech", "--cat-tech-soft"],
        technology: ["--cat-tech", "--cat-tech-soft"],
        sports: ["--cat-sports", "--cat-sports-soft"],
        "world news": ["--cat-world", "--cat-world-soft"],
        world: ["--cat-world", "--cat-world-soft"],
        business: ["--cat-business", "--cat-business-soft"],
        science: ["--cat-science", "--cat-science-soft"]
      };
      const [fg, bg] = map[key] ?? ["--color-text-muted", "--color-surface-alt"];
      return { color: `var(${fg})`, background: `var(${bg})` };
    });
  }
  set name(value) {
    this._name.set(value);
  }
  get name() {
    return this._name();
  }
  static {
    this.\u0275fac = function CategoryChipComponent_Factory(t) {
      return new (t || _CategoryChipComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryChipComponent, selectors: [["app-category-chip"]], inputs: { name: "name" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 5, consts: [[1, "chip"]], template: function CategoryChipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("color", ctx.style().color)("background", ctx.style().background);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.name);
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n}\n/*# sourceMappingURL=category-chip.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryChipComponent, { className: "CategoryChipComponent", filePath: "src/app/shared/category-chip/category-chip.component.ts", lineNumber: 10 });
})();

export {
  CategoryChipComponent
};
//# sourceMappingURL=chunk-VOV5DTNJ.js.map
