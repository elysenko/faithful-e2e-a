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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/accounts/accounts.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/accounts", a0];
function AccountsComponent_For_46_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Single-thread");
    \u0275\u0275elementEnd();
  }
}
function AccountsComponent_For_46_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AccountsComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 14)(1, "td")(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 22);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 22);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 23);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275template(21, AccountsComponent_For_46_Conditional_21_Template, 2, 0, "span", 24)(22, AccountsComponent_For_46_Conditional_22_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c0, a_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", a_r2.logoColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2.name.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.industry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(13, 14, a_r2.backlogValue, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(16, 17, a_r2.ytdRevenue, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.healthBadge(a_r2.connectionLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r2.connectionLevel, " \xB7 ", a_r2.healthScore, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(21, a_r2.singleThreadRisk ? 21 : 22);
  }
}
function AccountsComponent_ForEmpty_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('No accounts match "', ctx_r0.filter(), '".');
  }
}
function AccountsComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", p_r3.logoColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r3.industry, " \xB7 ", p_r3.region, "");
  }
}
var AccountsComponent = class _AccountsComponent {
  healthBadge(level) {
    switch (level) {
      case "strong":
        return "badge-success";
      case "developing":
        return "badge-warning";
      case "at-risk":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  onFilter(value) {
    this.filter.set(value);
  }
  constructor(seed) {
    this.seed = seed;
    this.filter = signal("");
    this.customers = computed(() => this.seed.accounts().filter((a) => a.type !== "manufacturer" && a.type !== "distributor"));
    this.partners = computed(() => this.seed.accounts().filter((a) => a.type === "manufacturer" || a.type === "distributor"));
    this.filteredCustomers = computed(() => {
      const q = this.filter().trim().toLowerCase();
      if (!q)
        return this.customers();
      return this.customers().filter((a) => a.name.toLowerCase().includes(q));
    });
    this.totalAccounts = computed(() => this.customers().length);
    this.totalBacklog = computed(() => this.customers().reduce((sum, a) => sum + a.backlogValue, 0));
    this.atRiskCount = computed(() => this.customers().filter((a) => a.connectionLevel === "at-risk").length);
  }
  static {
    this.\u0275fac = function AccountsComponent_Factory(t) {
      return new (t || _AccountsComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountsComponent, selectors: [["app-accounts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 10, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "card", "card-pad", "filter-bar"], ["type", "text", "placeholder", "Filter accounts by name\u2026", 3, "input", "value"], [1, "card"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "clickable", 3, "routerLink"], [1, "partners-section"], [1, "panel-title"], [1, "row"], [1, "card", "card-pad", "partner-card"], [1, "acct-cell"], [1, "avatar"], [1, "acct-name"], [1, "right", "mono"], [1, "badge"], [1, "badge", "badge-danger"], [1, "muted"], ["colspan", "7", 1, "muted"]], template: function AccountsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Customer relationships, backlog and health across the book.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Total accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6);
        \u0275\u0275text(14, "Total backlog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 5)(19, "div", 6);
        \u0275\u0275text(20, "At-risk accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 7);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 8)(24, "input", 9);
        \u0275\u0275listener("input", function AccountsComponent_Template_input_input_24_listener($event) {
          return ctx.onFilter($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 10)(26, "div", 11)(27, "table", 12)(28, "thead")(29, "tr")(30, "th");
        \u0275\u0275text(31, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Industry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35, "Region");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th", 13);
        \u0275\u0275text(37, "Backlog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th", 13);
        \u0275\u0275text(39, "YTD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Health");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Risk");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "tbody");
        \u0275\u0275repeaterCreate(45, AccountsComponent_For_46_Template, 23, 22, "tr", 14, _forTrack0, false, AccountsComponent_ForEmpty_47_Template, 3, 1, "tr");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div", 15)(49, "h2", 16);
        \u0275\u0275text(50, "Channel partners");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 17);
        \u0275\u0275repeaterCreate(52, AccountsComponent_For_53_Template, 8, 6, "div", 18, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.totalAccounts());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(17, 7, ctx.totalBacklog(), "1.0-0"), "");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("stat-alert", ctx.atRiskCount() > 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.atRiskCount());
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.filter());
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.filteredCustomers());
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.partners());
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.stat-value.stat-alert[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  margin: var(--sp-4) 0;\n  padding: var(--sp-3) var(--sp-4);\n}\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.acct-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n}\n.acct-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  color: #fff;\n  font-weight: 700;\n  font-size: var(--fs-sm);\n  flex-shrink: 0;\n}\n.partners-section[_ngcontent-%COMP%] {\n  margin-top: var(--sp-6);\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.partner-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  min-width: 260px;\n}\n/*# sourceMappingURL=accounts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountsComponent, { className: "AccountsComponent", filePath: "src/app/features/accounts/accounts.component.ts", lineNumber: 13 });
})();
export {
  AccountsComponent
};
//# sourceMappingURL=accounts.component-NMQVPCMY.js.map
