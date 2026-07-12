import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
  computed,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5S2USPPB.js";

// src/app/pages/receipt/receipt.component.ts
function ReceiptComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading receipt\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ReceiptComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ReceiptComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Receipt not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6, "This receipt may have been removed or the link is incorrect.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 7);
    \u0275\u0275text(8, "Back to My Lease");
    \u0275\u0275elementEnd()();
  }
}
function ReceiptComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "header", 9)(2, "div", 10)(3, "span", 11);
    \u0275\u0275text(4, "RD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6, "RentDesk");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8, "Paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 14)(10, "p", 15);
    \u0275\u0275text(11, "Payment Receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 16)(13, "span", 17);
    \u0275\u0275text(14, "Amount paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 18);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "dl", 19)(19, "div", 20)(20, "dt");
    \u0275\u0275text(21, "Receipt number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dd", 21);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 20)(25, "dt");
    \u0275\u0275text(26, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 20)(30, "dt");
    \u0275\u0275text(31, "Lease / unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd");
    \u0275\u0275text(33, "Unit 101");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 20)(35, "dt");
    \u0275\u0275text(36, "Tenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dd");
    \u0275\u0275text(38, "Alex Rivera");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "footer", 22)(40, "a", 23);
    \u0275\u0275text(41, "Back to My Lease");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "a", 24);
    \u0275\u0275text(43, "View statement");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 3, ctx_r0.receipt().amountCents));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.receipt().number);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.receipt().createdAt);
  }
}
var ReceiptComponent = class _ReceiptComponent {
  constructor(route) {
    this.route = route;
    this.loading = signal(false);
    this.error = signal("");
    this.receipts = signal([
      { id: "r1", number: "R-00001", ledgerEntryId: "e2", amountCents: 12e4, createdAt: "2026-05-03", leaseId: "l1" },
      { id: "r2", number: "R-00002", ledgerEntryId: "e4", amountCents: 12e4, createdAt: "2026-06-04", leaseId: "l1" },
      { id: "r3", number: "R-00003", ledgerEntryId: "e5", amountCents: 12e4, createdAt: "2026-07-12", leaseId: "l1" }
    ]);
    this.id = signal(null);
    this.receipt = computed(() => {
      const id = this.id();
      if (!id)
        return null;
      return this.receipts().find((r) => r.id === id) ?? null;
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id.set(params.get("id"));
    });
  }
  static {
    this.\u0275fac = function ReceiptComponent_Factory(t) {
      return new (t || _ReceiptComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceiptComponent, selectors: [["app-receipt"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page"], ["role", "status", "aria-live", "polite", 1, "state"], [1, "spinner"], [1, "state"], [1, "state-icon"], [1, "error"], [1, "muted"], ["routerLink", "/my-lease", 1, "btn", "btn-primary"], [1, "card", "receipt"], [1, "receipt-head"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "badge", "badge-ok"], [1, "receipt-body"], [1, "eyebrow"], [1, "amount-block"], [1, "amount-label"], [1, "amount"], [1, "detail-list"], [1, "detail-row"], [1, "mono"], [1, "receipt-foot"], ["routerLink", "/my-lease", 1, "btn", "btn-outline", "btn-block"], ["routerLink", "/my-lease/statement", 1, "btn", "btn-primary", "btn-block"]], template: function ReceiptComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275template(1, ReceiptComponent_Conditional_1_Template, 4, 0, "div", 1)(2, ReceiptComponent_Conditional_2_Template, 5, 1)(3, ReceiptComponent_Conditional_3_Template, 9, 0)(4, ReceiptComponent_Conditional_4_Template, 44, 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.loading() ? 1 : ctx.error() ? 2 : !ctx.receipt() ? 3 : 4);
      }
    }, dependencies: [CommonModule, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 480px;\n  margin: 0 auto;\n}\n.receipt[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.receipt-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  padding: var(--space-4) var(--space-5);\n  background: var(--color-brand);\n  color: #fff;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius);\n  background: rgba(255, 255, 255, .18);\n  font-weight: 800;\n  font-size: var(--fs-sm);\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  letter-spacing: .01em;\n  font-size: var(--fs-md);\n}\n.receipt-body[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-5);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n}\n.amount-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-1);\n  padding: var(--space-4);\n  border-radius: var(--radius-lg);\n  background: var(--color-accent-light);\n  text-align: center;\n}\n.amount-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  font-weight: 700;\n  color: var(--color-accent-dark);\n}\n.amount[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n  line-height: 1;\n  color: var(--color-ink);\n}\n.detail-list[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: var(--space-3);\n  padding: var(--space-3) 0;\n  border-bottom: 1px dashed var(--color-border);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n}\n.detail-row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  letter-spacing: .02em;\n}\n.receipt-foot[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  padding: var(--space-5);\n  padding-top: 0;\n}\n@media (min-width: 420px) {\n  .receipt-foot[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .receipt-foot[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=receipt.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceiptComponent, { className: "ReceiptComponent", filePath: "src/app/pages/receipt/receipt.component.ts", lineNumber: 14 });
})();
export {
  ReceiptComponent
};
//# sourceMappingURL=receipt.component-QZDVO7BH.js.map
