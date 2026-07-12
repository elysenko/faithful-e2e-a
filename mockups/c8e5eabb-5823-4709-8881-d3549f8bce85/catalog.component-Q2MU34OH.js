import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FO3CHQ4J.js";
import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  DecimalPipe,
  RouterLink,
  computed,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CatalogComponent_For_28_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r4);
  }
}
function CatalogComponent_For_28_ForEmpty_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CatalogComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 14);
    \u0275\u0275listener("click", function CatalogComponent_For_28_Template_tr_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(p_r2.id));
    });
    \u0275\u0275elementStart(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275repeaterCreate(9, CatalogComponent_For_28_For_10_Template, 2, 1, "span", 17, \u0275\u0275repeaterTrackByIdentity, false, CatalogComponent_For_28_ForEmpty_11_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 19);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 19);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("part-active", ((tmp_10_0 = ctx_r2.selectedPart()) == null ? null : tmp_10_0.id) === p_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.partNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.family);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r2.crossRefs);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(14, 8, p_r2.listPrice, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(17, 11, p_r2.lastQuoted, "1.0-0"), "");
  }
}
function CatalogComponent_ForEmpty_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2, "No parts match that filter.");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3, "Voltage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28)(7, "span", 29);
    \u0275\u0275text(8, "Frame");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 28)(12, "span", 29);
    \u0275\u0275text(13, "Accessory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r5 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r5.voltage);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r5.frame);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r5.accessory);
  }
}
function CatalogComponent_Conditional_33_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementStart(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r2.barPct(v_r6), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(4, 3, v_r6, "1.0-0"), "");
  }
}
function CatalogComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, CatalogComponent_Conditional_33_Conditional_2_Template, 16, 3, "div", 22);
    \u0275\u0275elementStart(3, "div", 23)(4, "span");
    \u0275\u0275text(5, "Decode validated against active configuration rules. ");
    \u0275\u0275elementStart(6, "a", 24);
    \u0275\u0275text(7, "Open validation rules");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "h3", 25);
    \u0275\u0275text(9, "Pricing history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26);
    \u0275\u0275repeaterCreate(11, CatalogComponent_Conditional_33_For_12_Template, 5, 6, "div", 27, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const p_r7 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r7.partNumber, " \xB7 ", p_r7.family, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (tmp_3_0 = ctx_r2.decode()) ? 2 : -1, tmp_3_0);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r2.priceHistory());
  }
}
function CatalogComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Click a part to decode it, validate against rules, and see its pricing history.");
    \u0275\u0275elementEnd();
  }
}
var CatalogComponent = class _CatalogComponent {
  onFilter(value) {
    this.filterText.set(value);
  }
  barPct(v) {
    return Math.round(v / this.priceHistoryMax() * 100);
  }
  select(id) {
    this.selectedId.set(this.selectedId() === id ? null : id);
  }
  constructor(seed) {
    this.seed = seed;
    this.filterText = signal("");
    this.selectedId = signal(null);
    this.filtered = computed(() => {
      const q = this.filterText().trim().toLowerCase();
      if (!q)
        return this.seed.catalog();
      return this.seed.catalog().filter((p) => p.partNumber.toLowerCase().includes(q) || p.family.toLowerCase().includes(q));
    });
    this.selectedPart = computed(() => {
      const id = this.selectedId();
      return id ? this.seed.catalog().find((p) => p.id === id) : void 0;
    });
    this.decode = computed(() => {
      const p = this.selectedPart();
      if (!p)
        return void 0;
      switch (p.family) {
        case "Tmax XT":
          return { voltage: "600V AC", frame: "XT6 moulded case, 800A frame", accessory: "Side-mount aux, 42X spacing" };
        case "Emax 2":
          return { voltage: "690V AC", frame: "E6.2 air frame, 4000A", accessory: "Ekip Touch trip unit" };
        case "VD4":
          return { voltage: "12kV", frame: "VD4 vacuum, 1250A", accessory: "Motor charge, shunt trip" };
        case "ADVAC":
          return { voltage: "15kV", frame: "ADVAC vacuum, 2000A", accessory: "Racking interlock" };
        case "SafeGear":
          return { voltage: "15kV", frame: "Arc-resistant MV cell", accessory: "UL 891 Annex G, Type 2B" };
        default:
          return { voltage: "\u2014", frame: "Standard frame", accessory: "None specified" };
      }
    });
    this.priceHistory = computed(() => {
      const p = this.selectedPart();
      if (!p)
        return [];
      const base = p.lastQuoted;
      return [Math.round(base * 1.06), Math.round(base * 1.02), Math.round(base * 0.99), base];
    });
    this.priceHistoryMax = computed(() => Math.max(1, ...this.priceHistory()));
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(t) {
      return new (t || _CatalogComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 3, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "row", "filter-row"], ["type", "text", "placeholder", "Filter by part number or family\u2026", 1, "filter-input", 3, "ngModelChange", "ngModel"], [1, "catalog-grid"], [1, "card"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "part-row", 3, "part-active"], [1, "card", "card-pad", "decode"], [1, "decode-title"], [1, "part-row", 3, "click"], [1, "mono"], [1, "badge", "badge-neutral"], [1, "badge", "badge-info", "xref"], [1, "muted"], [1, "right", "mono"], ["colspan", "6", 1, "muted"], [1, "muted", "decode-sub", "mono"], [1, "decode-fields"], [1, "alert", "alert-info", "validate-note"], ["routerLink", "/validation"], [1, "spark-title"], [1, "spark"], [1, "spark-col"], [1, "decode-field"], [1, "decode-label"], [1, "spark-bar"], [1, "spark-val", "mono"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Product catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Nexus Power CRM \xB7 breaker families, cross-references, list and last-quoted pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "input", 5);
        \u0275\u0275listener("ngModelChange", function CatalogComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.onFilter($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "table", 9)(12, "thead")(13, "tr")(14, "th");
        \u0275\u0275text(15, "Part");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Family");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Cross-refs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th", 10);
        \u0275\u0275text(23, "List");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th", 10);
        \u0275\u0275text(25, "Last quoted");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "tbody");
        \u0275\u0275repeaterCreate(27, CatalogComponent_For_28_Template, 18, 14, "tr", 11, _forTrack0, false, CatalogComponent_ForEmpty_29_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 12)(31, "h2", 13);
        \u0275\u0275text(32, "Part decode & validate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, CatalogComponent_Conditional_33_Template, 13, 3)(34, CatalogComponent_Conditional_34_Template, 2, 0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.filterText());
        \u0275\u0275advance(20);
        \u0275\u0275repeater(ctx.filtered());
        \u0275\u0275advance(6);
        \u0275\u0275conditional(33, (tmp_2_0 = ctx.selectedPart()) ? 33 : 34, tmp_2_0);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.filter-row[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.filter-input[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.catalog-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: var(--sp-4);\n  align-items: start;\n}\n.part-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.part-active[_ngcontent-%COMP%] {\n  background: var(--color-brand-50);\n}\n.xref[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.decode[_ngcontent-%COMP%] {\n  position: sticky;\n  top: var(--sp-4);\n}\n.decode-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.decode-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 var(--sp-4);\n}\n.decode-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-4);\n}\n.decode-field[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  font-size: var(--fs-sm);\n  border-bottom: 1px solid var(--color-border);\n  padding-bottom: 6px;\n}\n.decode-label[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.validate-note[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.spark-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  margin-bottom: var(--sp-3);\n}\n.spark[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--sp-3);\n  height: 120px;\n}\n.spark-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n  gap: 6px;\n}\n.spark-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--color-brand-600);\n  border-radius: var(--radius-sm) var(--radius-sm) 0 0;\n  min-height: 4px;\n}\n.spark-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n@media (max-width: 768px) {\n  .catalog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .decode[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "src/app/features/catalog/catalog.component.ts", lineNumber: 21 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=catalog.component-Q2MU34OH.js.map
