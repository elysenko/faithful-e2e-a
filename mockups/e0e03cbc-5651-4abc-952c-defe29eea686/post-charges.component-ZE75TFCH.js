import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-VXD3V2JR.js";
import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  ActivatedRoute
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5S2USPPB.js";

// src/app/pages/post-charges/post-charges.component.ts
var _forTrack0 = ($index, $item) => $item.leaseId;
function PostChargesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function PostChargesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Post charges for ", ctx_r0.period.value, " ");
  }
}
function PostChargesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function PostChargesComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.postAgain());
    });
    \u0275\u0275text(1, " Post again ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.posting());
  }
}
function PostChargesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Posting charges for ", ctx_r0.period.value, "\u2026");
  }
}
function PostChargesComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function PostChargesComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2, "\u{1F9FE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Select a period and post charges to see results.");
    \u0275\u0275elementEnd()();
  }
}
function PostChargesComponent_Conditional_23_For_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Late fee");
    \u0275\u0275elementEnd();
  }
}
function PostChargesComponent_Conditional_23_For_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PostChargesComponent_Conditional_23_For_18_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Posted");
    \u0275\u0275elementEnd();
  }
}
function PostChargesComponent_Conditional_23_For_18_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Skipped");
    \u0275\u0275elementEnd();
  }
}
function PostChargesComponent_Conditional_23_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, PostChargesComponent_Conditional_23_For_18_Conditional_9_Template, 2, 0, "span", 23)(10, PostChargesComponent_Conditional_23_For_18_Conditional_10_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, PostChargesComponent_Conditional_23_For_18_Conditional_12_Template, 2, 0, "span", 24)(13, PostChargesComponent_Conditional_23_For_18_Conditional_13_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 2);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Unit ", r_r3.unitNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.tenantName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, r_r3.amountCents));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(9, r_r3.lateFeeApplied ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(12, r_r3.posted ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.note);
  }
}
function PostChargesComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "table", 19)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 20);
    \u0275\u0275text(9, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Late fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Result");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Note");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, PostChargesComponent_Conditional_23_For_18_Template, 16, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.results());
  }
}
var PostChargesComponent = class _PostChargesComponent {
  constructor(route) {
    this.route = route;
    this.posting = signal(false);
    this.error = signal("");
    this.hasPosted = signal(false);
    this.results = signal([]);
    this.period = new FormControl("2026-07", { nonNullable: true });
  }
  ngOnInit() {
    this.sub = this.route.queryParamMap.subscribe((params) => {
      const p = params.get("period");
      if (p && /^\d{4}-\d{2}$/.test(p)) {
        this.period.setValue(p);
      }
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  /** Post charges for the selected month — populates fresh (posted) rows. */
  post() {
    this.runPost(true);
  }
  /** Re-post the same month — demonstrates idempotency (all skipped). */
  postAgain() {
    this.runPost(false);
  }
  runPost(fresh) {
    this.posting.set(true);
    this.error.set("");
    setTimeout(() => {
      this.results.set(fresh ? this.freshRows() : this.skippedRows());
      this.hasPosted.set(true);
      this.posting.set(false);
    }, 500);
  }
  freshRows() {
    return [
      { leaseId: "l1", unitNumber: "101", tenantName: "Alex Rivera", posted: true, lateFeeApplied: false, amountCents: 12e4, note: "Rent charge posted" },
      { leaseId: "l2", unitNumber: "102", tenantName: "Bailey Chen", posted: true, lateFeeApplied: false, amountCents: 18e4, note: "Rent charge posted" },
      { leaseId: "l3", unitNumber: "201", tenantName: "Casey Morgan", posted: true, lateFeeApplied: true, amountCents: 195e3, note: "Rent + $50 late fee" }
    ];
  }
  skippedRows() {
    return this.freshRows().map((r) => __spreadProps(__spreadValues({}, r), {
      posted: false,
      note: "Already charged \u2014 skipped"
    }));
  }
  static {
    this.\u0275fac = function PostChargesComponent_Factory(t) {
      return new (t || _PostChargesComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostChargesComponent, selectors: [["app-post-charges"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 5, consts: [[1, "page", "stack"], [1, "page-head"], [1, "muted"], [1, "card", "card-pad"], [1, "row", "controls"], [1, "stack", "period-field"], ["type", "month", 1, "field", 3, "formControl"], [1, "spacer"], [1, "row", "actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner"], [1, "btn", "btn-outline", 3, "disabled"], [1, "muted", "note"], ["role", "status", "aria-live", "polite", 1, "state"], [1, "btn", "btn-outline", 3, "click", "disabled"], [1, "state"], [1, "state-icon"], [1, "error"], [1, "table-wrap", "card"], [1, "table"], [1, "num"], [1, "nowrap"], [1, "strong"], [1, "badge", "badge-warn"], [1, "badge", "badge-ok"], [1, "badge", "badge-muted"]], template: function PostChargesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h1");
        \u0275\u0275text(3, "Post Monthly Charges");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Run rent (and late fees) for a billing period.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "label", 5)(9, "span");
        \u0275\u0275text(10, "Billing period");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "input", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "span", 7);
        \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
        \u0275\u0275listener("click", function PostChargesComponent_Template_button_click_14_listener() {
          return ctx.post();
        });
        \u0275\u0275template(15, PostChargesComponent_Conditional_15_Template, 1, 0, "span", 10)(16, PostChargesComponent_Conditional_16_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, PostChargesComponent_Conditional_17_Template, 2, 1, "button", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "p", 12);
        \u0275\u0275text(19, " Posting the same month again is a no-op \u2014 existing charges are skipped. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, PostChargesComponent_Conditional_20_Template, 4, 1, "div", 13)(21, PostChargesComponent_Conditional_21_Template, 5, 1)(22, PostChargesComponent_Conditional_22_Template, 5, 0)(23, PostChargesComponent_Conditional_23_Template, 19, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("formControl", ctx.period);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.posting());
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.posting() ? 15 : 16);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(17, ctx.hasPosted() ? 17 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(20, ctx.posting() ? 20 : ctx.error() ? 21 : !ctx.hasPosted() ? 22 : 23);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.controls[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.period-field[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.actions[_ngcontent-%COMP%] {\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.note[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table[_ngcontent-%COMP%] {\n  min-width: 720px;\n}\n.table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.state-icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n/*# sourceMappingURL=post-charges.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostChargesComponent, { className: "PostChargesComponent", filePath: "src/app/pages/post-charges/post-charges.component.ts", lineNumber: 16 });
})();
export {
  PostChargesComponent
};
//# sourceMappingURL=post-charges.component-ZE75TFCH.js.map
