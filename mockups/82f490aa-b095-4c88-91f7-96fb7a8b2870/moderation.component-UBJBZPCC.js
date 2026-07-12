import {
  AdminApiService
} from "./chunk-NNAVLRYJ.js";
import {
  RouterLink
} from "./chunk-34OIK6OJ.js";
import {
  ToastService
} from "./chunk-3BTWHIAD.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-ODOZMLE5.js";

// src/app/features/admin/moderation.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ModerationComponent_For_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Banned");
    \u0275\u0275elementEnd();
  }
}
function ModerationComponent_For_26_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", u_r1.reports, " reports");
  }
}
function ModerationComponent_For_26_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ModerationComponent_For_26_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const u_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.unban(u_r1));
    });
    \u0275\u0275text(1, "Unban");
    \u0275\u0275elementEnd();
  }
}
function ModerationComponent_For_26_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ModerationComponent_For_26_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const u_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.ban(u_r1));
    });
    \u0275\u0275text(1, "Ban");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-testid", "ban-" + u_r1.id);
  }
}
function ModerationComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "div", 14)(2, "div", 15)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ModerationComponent_For_26_Conditional_5_Template, 2, 0, "span", 16)(6, ModerationComponent_For_26_Conditional_6_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ModerationComponent_For_26_Conditional_9_Template, 2, 0, "button", 18)(10, ModerationComponent_For_26_Conditional_10_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r1 = ctx.$implicit;
    \u0275\u0275classProp("is-banned", u_r1.banned);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, u_r1.banned ? 5 : u_r1.reports > 0 ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", u_r1.jobTitle, " \xB7 ", u_r1.employer, " \xB7 joined ", u_r1.joinedAt, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(9, u_r1.banned ? 9 : 10);
  }
}
var ModerationComponent = class _ModerationComponent {
  constructor() {
    this.admin = inject(AdminApiService);
    this.toast = inject(ToastService);
    this.users = signal([]);
    this.totalUsers = computed(() => this.users().length);
    this.bannedCount = computed(() => this.users().filter((u) => u.banned).length);
    this.flaggedCount = computed(() => this.users().filter((u) => u.reports > 0 && !u.banned).length);
  }
  ngOnInit() {
    this.admin.users().subscribe({
      next: (users) => this.users.set(users ?? []),
      error: () => this.users.set([])
    });
  }
  ban(user) {
    this.admin.ban(user.id).subscribe({
      next: () => {
        this.users.update((list) => list.map((u) => u.id === user.id ? __spreadProps(__spreadValues({}, u), { banned: true }) : u));
        this.toast.push("message", "User banned", `${user.name} has been removed and logged out.`);
      },
      error: () => {
      }
    });
  }
  unban(user) {
    this.admin.unban(user.id).subscribe({
      next: () => {
        this.users.update((list) => list.map((u) => u.id === user.id ? __spreadProps(__spreadValues({}, u), { banned: false }) : u));
      },
      error: () => {
      }
    });
  }
  static {
    this.\u0275fac = function ModerationComponent_Factory(t) {
      return new (t || _ModerationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModerationComponent, selectors: [["app-moderation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 3, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], ["routerLink", "/admin/reports", 1, "btn", "btn-ghost", "reports-link"], [1, "stats"], [1, "stat", "card"], [1, "stat-num"], [1, "stat-label"], [1, "stat-num", "warn"], [1, "stat-num", "danger"], [1, "section-title"], [1, "user-list"], [1, "user-row", "card", 3, "is-banned"], [1, "user-row", "card"], [1, "user-info"], [1, "user-name"], [1, "badge", "badge-banned"], [1, "muted", "user-sub"], [1, "btn", "btn-outline", "btn-sm"], [1, "badge", "badge-pending"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function ModerationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 3);
        \u0275\u0275text(5, "Reports \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11, "Members");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "span", 8);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 7);
        \u0275\u0275text(16, "Flagged");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 5)(18, "span", 9);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 7);
        \u0275\u0275text(21, "Banned");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "h2", 10);
        \u0275\u0275text(23, "Members");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "ul", 11);
        \u0275\u0275repeaterCreate(25, ModerationComponent_For_26_Template, 11, 8, "li", 12, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.totalUsers());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.flaggedCount());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.bannedCount());
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.users());
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.reports-link[_ngcontent-%COMP%] {\n  padding: 0 var(--space-3);\n  min-height: 40px;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.stat[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-2);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: 800;\n}\n.stat-num.warn[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.stat-num.danger[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--color-text-muted);\n}\n.user-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  padding: var(--space-3) var(--space-4);\n}\n.is-banned[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.user-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.user-sub[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  display: block;\n  margin-top: 2px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 var(--space-4);\n  font-size: var(--text-sm);\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=moderation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModerationComponent, { className: "ModerationComponent", filePath: "src/app/features/admin/moderation.component.ts", lineNumber: 15 });
})();
export {
  ModerationComponent
};
//# sourceMappingURL=moderation.component-UBJBZPCC.js.map
