import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  Router,
  RouterLink
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5S2USPPB.js";

// src/app/pages/my-lease/my-lease.component.ts
function MyLeaseComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your lease\u2026");
    \u0275\u0275elementEnd()();
  }
}
function MyLeaseComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function MyLeaseComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "\u{1F3E0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No active lease found for your account.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 2);
    \u0275\u0275text(6, "Please contact your property manager.");
    \u0275\u0275elementEnd()();
  }
}
function MyLeaseComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function MyLeaseComponent_Conditional_9_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Balance due");
    \u0275\u0275elementEnd();
  }
}
function MyLeaseComponent_Conditional_9_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Paid in full");
    \u0275\u0275elementEnd();
  }
}
function MyLeaseComponent_Conditional_9_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Rent for July 2026 is outstanding.");
    \u0275\u0275elementEnd();
  }
}
function MyLeaseComponent_Conditional_9_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "You're all caught up. Thank you!");
    \u0275\u0275elementEnd();
  }
}
function MyLeaseComponent_Conditional_9_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "strong");
    \u0275\u0275text(5, "Payment successful");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 2);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 28);
    \u0275\u0275listener("click", function MyLeaseComponent_Conditional_9_Conditional_41_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewReceipt());
    });
    \u0275\u0275text(10, " View receipt ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" Receipt ", ctx_r0.lastReceiptNumber(), " \u2014 ", \u0275\u0275pipeBind1(8, 2, 12e4), " paid. ");
  }
}
function MyLeaseComponent_Conditional_9_Conditional_42_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
    \u0275\u0275text(1, " Processing\u2026 ");
  }
}
function MyLeaseComponent_Conditional_9_Conditional_42_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Confirm ");
  }
}
function MyLeaseComponent_Conditional_9_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "p", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "button", 32);
    \u0275\u0275listener("click", function MyLeaseComponent_Conditional_9_Conditional_42_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmPay());
    });
    \u0275\u0275template(6, MyLeaseComponent_Conditional_9_Conditional_42_Conditional_6_Template, 2, 0)(7, MyLeaseComponent_Conditional_9_Conditional_42_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 33);
    \u0275\u0275listener("click", function MyLeaseComponent_Conditional_9_Conditional_42_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelPay());
    });
    \u0275\u0275text(9, " Cancel ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pay ", \u0275\u0275pipeBind1(3, 4, ctx_r0.balance()), " now?");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.paying());
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r0.paying() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.paying());
  }
}
function MyLeaseComponent_Conditional_9_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function MyLeaseComponent_Conditional_9_Conditional_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startPay());
    });
    \u0275\u0275text(1, " Pay full balance ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.balance() === 0);
  }
}
function MyLeaseComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "span", 11);
    \u0275\u0275text(4, "Unit 101");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MyLeaseComponent_Conditional_9_Conditional_5_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 13);
    \u0275\u0275text(7, "Unit 101 \xB7 1 bed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "dl", 14)(9, "div", 15)(10, "dt");
    \u0275\u0275text(11, "Lease term");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13, "Jan 1, 2025 \u2013 Dec 31, 2026");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "dt");
    \u0275\u0275text(16, "Monthly rent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "cents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "dt");
    \u0275\u0275text(22, "Due date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dd");
    \u0275\u0275text(24, "Due on the 1st");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "a", 16);
    \u0275\u0275text(26, " View full statement ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 17)(28, "div", 18)(29, "div", 10)(30, "span", 19);
    \u0275\u0275text(31, "Current balance");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "span", 20);
    \u0275\u0275template(33, MyLeaseComponent_Conditional_9_Conditional_33_Template, 2, 0, "span", 21)(34, MyLeaseComponent_Conditional_9_Conditional_34_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 22);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "cents");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, MyLeaseComponent_Conditional_9_Conditional_38_Template, 2, 0, "p", 23)(39, MyLeaseComponent_Conditional_9_Conditional_39_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 24);
    \u0275\u0275template(41, MyLeaseComponent_Conditional_9_Conditional_41_Template, 11, 4, "div", 25)(42, MyLeaseComponent_Conditional_9_Conditional_42_Template, 10, 6)(43, MyLeaseComponent_Conditional_9_Conditional_43_Template, 2, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(5, ctx_r0.lease().status === "current" ? 5 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 6, 12e4));
    \u0275\u0275advance(15);
    \u0275\u0275conditional(33, ctx_r0.balance() > 0 ? 33 : 34);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 8, ctx_r0.balance()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(38, ctx_r0.balance() > 0 ? 38 : 39);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(41, ctx_r0.paid() ? 41 : ctx_r0.confirming() ? 42 : 43);
  }
}
var MyLeaseComponent = class _MyLeaseComponent {
  constructor(router) {
    this.router = router;
    this.loading = signal(false);
    this.error = signal("");
    this.lease = signal({
      id: "l1",
      unitId: "u1",
      tenantId: "t1",
      startsOn: "2025-01-01",
      endsOn: "2026-12-31",
      rentCents: 12e4,
      dueDay: 1,
      status: "current"
    });
    this.balance = signal(12e4);
    this.confirming = signal(false);
    this.paying = signal(false);
    this.paid = signal(false);
    this.lastReceiptId = signal(null);
    this.lastReceiptNumber = signal(null);
  }
  startPay() {
    if (this.balance() === 0)
      return;
    this.confirming.set(true);
  }
  cancelPay() {
    this.confirming.set(false);
  }
  confirmPay() {
    this.paying.set(true);
    setTimeout(() => {
      this.balance.set(0);
      this.lastReceiptNumber.set("R-00003");
      this.lastReceiptId.set("r3");
      this.paying.set(false);
      this.confirming.set(false);
      this.paid.set(true);
    }, 600);
  }
  viewReceipt() {
    const id = this.lastReceiptId();
    if (id)
      this.router.navigate(["/receipt", id]);
  }
  static {
    this.\u0275fac = function MyLeaseComponent_Factory(t) {
      return new (t || _MyLeaseComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyLeaseComponent, selectors: [["app-my-lease"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "page", "stack"], [1, "page-head"], [1, "muted"], ["role", "status", "aria-live", "polite", 1, "state"], [1, "spinner"], [1, "state"], [1, "state-icon"], [1, "error"], [1, "lease-grid"], [1, "card", "card-pad", "summary"], [1, "row"], [1, "badge", "badge-info"], [1, "badge", "badge-ok"], [1, "unit-title"], [1, "detail-list"], [1, "detail-row"], ["routerLink", "/my-lease/statement", 1, "btn", "btn-outline", "btn-block"], [1, "card", "card-pad", "hero"], [1, "hero-top"], [1, "hero-label"], [1, "spacer"], [1, "badge", "badge-warn"], [1, "hero-amount"], [1, "muted", "hero-sub"], [1, "hero-bottom"], [1, "success-card"], [1, "success-icon"], [1, "success-body"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "confirm-panel"], [1, "confirm-q"], [1, "confirm-actions"], ["type", "button", 1, "btn", "btn-accent", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline", 3, "click", "disabled"], [1, "spinner", "spinner-sm"], ["type", "button", 1, "btn", "btn-accent", "btn-block", 3, "click", "disabled"]], template: function MyLeaseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h1");
        \u0275\u0275text(3, "My Lease");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Welcome back, Alex Rivera");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, MyLeaseComponent_Conditional_6_Template, 4, 0, "div", 3)(7, MyLeaseComponent_Conditional_7_Template, 5, 1)(8, MyLeaseComponent_Conditional_8_Template, 7, 0)(9, MyLeaseComponent_Conditional_9_Template, 44, 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.error() ? 7 : !ctx.lease() ? 8 : 9);
      }
    }, dependencies: [CommonModule, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.lease-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4);\n  align-items: start;\n}\n.card-pad[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.unit-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.detail-list[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: var(--space-3);\n  padding-bottom: var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.detail-row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n}\n.detail-row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: var(--color-ink);\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-5);\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-brand-light),\n      var(--color-surface) 55%);\n  border-color: var(--color-brand-light);\n}\n.hero-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.hero-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  font-weight: 700;\n  color: var(--color-muted);\n}\n.hero-amount[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n  line-height: 1;\n  color: var(--color-ink);\n}\n.hero-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-sm);\n}\n.hero-bottom[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: var(--space-4);\n  border-top: 1px solid var(--color-border);\n}\n.confirm-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.confirm-q[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  font-size: var(--fs-md);\n  color: var(--color-ink);\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n}\n.confirm-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.success-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: var(--space-3);\n  padding: var(--space-4);\n  border-radius: var(--radius);\n  background: var(--color-success-bg);\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-pill);\n  background: var(--color-success);\n  color: #fff;\n  font-size: 1.4rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.success-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.success-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.success-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-sm);\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n}\n@media (max-width: 720px) {\n  .lease-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=my-lease.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyLeaseComponent, { className: "MyLeaseComponent", filePath: "src/app/pages/my-lease/my-lease.component.ts", lineNumber: 14 });
})();
export {
  MyLeaseComponent
};
//# sourceMappingURL=my-lease.component-JOTE2KRL.js.map
