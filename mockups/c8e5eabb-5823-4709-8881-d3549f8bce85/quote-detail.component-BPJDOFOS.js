import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
  Router,
  RouterLink,
  TitleCasePipe,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-A62IECG2.js";

// src/app/features/quotes/quote-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function QuoteDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
    \u0275\u0275text(2, "Quote not found");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 3)(4, "span");
    \u0275\u0275text(5, "No quote matches this id.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 4)(7, "a", 5);
    \u0275\u0275text(8, "\u2190 Back to quotes");
    \u0275\u0275elementEnd()();
  }
}
function QuoteDetailComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " must be resolved before submittal. Notably: XT6 side-mount accessory X-spacing (40X \u2192 42X) overage flagged. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.errorLines().length, " validation error(s)");
  }
}
function QuoteDetailComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.warningLines().length, " validation warning(s) to review before submittal.");
  }
}
function QuoteDetailComponent_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2, "No validation issues \u2014 quote is clean.");
    \u0275\u0275elementEnd()();
  }
}
function QuoteDetailComponent_Conditional_2_For_45_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const li_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(li_r3.validationNote);
  }
}
function QuoteDetailComponent_Conditional_2_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275template(5, QuoteDetailComponent_Conditional_2_For_45_Conditional_5_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 24);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 24);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "titlecase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const li_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(li_r3.partNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", li_r3.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(5, li_r3.validationStatus !== "ok" && li_r3.validationNote ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(li_r3.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 9, li_r3.unitPrice, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(13, 12, ctx_r1.lineTotal(li_r3), "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.lineBadge(li_r3.validationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, li_r3.validationStatus));
  }
}
function QuoteDetailComponent_Conditional_2_ForEmpty_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, "No line items on this quote.");
    \u0275\u0275elementEnd()();
  }
}
function QuoteDetailComponent_Conditional_2_Conditional_47_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 8)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const li_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(li_r4.partNumber);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.lineBadge(li_r4.validationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, li_r4.validationStatus));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(li_r4.validationNote);
  }
}
function QuoteDetailComponent_Conditional_2_Conditional_47_ForEmpty_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2, "All checks passed.");
    \u0275\u0275elementEnd()();
  }
}
function QuoteDetailComponent_Conditional_2_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 19)(1, "h3");
    \u0275\u0275text(2, "Validation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4, "Engine results for this quote.");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, QuoteDetailComponent_Conditional_2_Conditional_47_For_6_Template, 9, 7, "div", 26, _forTrack0, false, QuoteDetailComponent_Conditional_2_Conditional_47_ForEmpty_7_Template, 3, 0, "div", 27);
    \u0275\u0275elementStart(8, "p", 4)(9, "a", 28);
    \u0275\u0275text(10, "Open validation engine");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.issueLines());
  }
}
function QuoteDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 6)(2, "a", 7);
    \u0275\u0275text(3, "Quotes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " /");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8)(6, "h1", 2);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 10);
    \u0275\u0275listener("click", function QuoteDetailComponent_Conditional_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleValidationPanel());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, QuoteDetailComponent_Conditional_2_Conditional_19_Template, 5, 1, "div", 12)(20, QuoteDetailComponent_Conditional_2_Conditional_20_Template, 3, 1)(21, QuoteDetailComponent_Conditional_2_Conditional_21_Template, 3, 0);
    \u0275\u0275elementStart(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "h3");
    \u0275\u0275text(26, "Line items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 16)(28, "table", 17)(29, "thead")(30, "tr")(31, "th");
    \u0275\u0275text(32, "Part #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 18);
    \u0275\u0275text(36, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 18);
    \u0275\u0275text(38, "Unit price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 18);
    \u0275\u0275text(40, "Line total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Validation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "tbody");
    \u0275\u0275repeaterCreate(44, QuoteDetailComponent_Conditional_2_For_45_Template, 18, 17, "tr", null, _forTrack0, false, QuoteDetailComponent_Conditional_2_ForEmpty_46_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(47, QuoteDetailComponent_Conditional_2_Conditional_47_Template, 11, 1, "aside", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.quote.number, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.statusBadge(ctx_r1.quote.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, ctx_r1.quote.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.panelOpen() ? "Hide validation" : "Run validation", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.quote.accountName, " \xB7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(17, 15, ctx_r1.quote.amount, "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \xB7 created ", ctx_r1.quote.createdAt, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(19, ctx_r1.errorLines().length > 0 ? 19 : ctx_r1.warningLines().length > 0 ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("detail-layout-panel", ctx_r1.panelOpen());
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.lineItems());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(47, ctx_r1.panelOpen() ? 47 : -1);
  }
}
var QuoteDetailComponent = class _QuoteDetailComponent {
  constructor(seed, route, router) {
    this.seed = seed;
    this.route = route;
    this.router = router;
    this.lineItems = signal([]);
    this.panelOpen = signal(false);
    this.errorLines = computed(() => this.lineItems().filter((l) => l.validationStatus === "error"));
    this.warningLines = computed(() => this.lineItems().filter((l) => l.validationStatus === "warning"));
    this.issueLines = computed(() => this.lineItems().filter((l) => l.validationStatus !== "ok"));
    this.id = this.route.snapshot.paramMap.get("id");
    this.quote = this.id ? this.seed.quoteById(this.id) : void 0;
    if (this.id)
      this.lineItems.set(this.seed.lineItemsForQuote(this.id));
    this.panelOpen.set(this.route.snapshot.queryParamMap.get("panel") === "validation");
  }
  lineTotal(li) {
    return li.qty * li.unitPrice;
  }
  toggleValidationPanel() {
    const next = !this.panelOpen();
    this.panelOpen.set(next);
    this.router.navigate([], {
      queryParams: { panel: next ? "validation" : null },
      queryParamsHandling: "merge"
    });
  }
  lineBadge(status) {
    switch (status) {
      case "ok":
        return "badge-success";
      case "warning":
        return "badge-warning";
      case "error":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  statusBadge(status) {
    switch (status) {
      case "draft":
        return "badge-neutral";
      case "submitted":
        return "badge-info";
      case "won":
        return "badge-success";
      case "lost":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  static {
    this.\u0275fac = function QuoteDetailComponent_Factory(t) {
      return new (t || _QuoteDetailComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuoteDetailComponent, selectors: [["app-quote-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "alert", "alert-warning"], [2, "margin-top", "var(--sp-4)"], ["routerLink", "/quotes", 1, "btn", "btn-sm"], [1, "muted"], ["routerLink", "/quotes"], [1, "row", 2, "justify-content", "space-between", "align-items", "center"], [1, "badge"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "page-sub"], [1, "alert", "alert-danger", 2, "margin-bottom", "var(--sp-4)"], [1, "detail-layout"], [1, "card", "detail-main"], [1, "card-pad"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "card", "card-pad", "detail-panel"], [1, "alert", "alert-warning", 2, "margin-bottom", "var(--sp-4)"], [1, "alert", "alert-info", 2, "margin-bottom", "var(--sp-4)"], [1, "mono"], [1, "muted", "line-note"], [1, "right", "mono"], ["colspan", "6", 1, "muted"], [1, "issue-item"], [1, "alert", "alert-info", 2, "margin-top", "var(--sp-3)"], ["routerLink", "/validation", 1, "btn", "btn-sm"]], template: function QuoteDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, QuoteDetailComponent_Conditional_1_Template, 9, 0)(2, QuoteDetailComponent_Conditional_2_Template, 48, 18);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, !ctx.quote ? 1 : 2);
      }
    }, dependencies: [CommonModule, DecimalPipe, TitleCasePipe, RouterLink], styles: ["\n\n.line-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  margin-top: var(--sp-1);\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--sp-4);\n  align-items: start;\n}\n.detail-layout-panel[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);\n}\n.detail-main[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.detail-panel[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--color-accent-600);\n}\n.issue-item[_ngcontent-%COMP%] {\n  padding: var(--sp-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n@media (max-width: 768px) {\n  .detail-layout-panel[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=quote-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuoteDetailComponent, { className: "QuoteDetailComponent", filePath: "src/app/features/quotes/quote-detail.component.ts", lineNumber: 14 });
})();
export {
  QuoteDetailComponent
};
//# sourceMappingURL=quote-detail.component-BPJDOFOS.js.map
