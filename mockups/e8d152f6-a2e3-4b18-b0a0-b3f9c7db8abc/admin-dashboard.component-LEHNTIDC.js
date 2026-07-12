import {
  AvatarComponent
} from "./chunk-2YFTR47U.js";
import {
  CommonModule,
  Router,
  RouterLink,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-4ZKGBDGO.js";

// src/app/features/admin/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboardComponent_For_36_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_For_36_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Banned");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_For_36_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", m_r1.reports, " report", m_r1.reports === 1 ? "" : "s", "");
  }
}
function AdminDashboardComponent_For_36_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function AdminDashboardComponent_For_36_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const m_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleBan(m_r1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("unban", m_r1.banned);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1.banned ? "Unban" : "Ban");
  }
}
function AdminDashboardComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275element(1, "app-avatar", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "div", 20)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminDashboardComponent_For_36_Conditional_6_Template, 2, 0, "span", 21)(7, AdminDashboardComponent_For_36_Conditional_7_Template, 2, 0, "span", 22)(8, AdminDashboardComponent_For_36_Conditional_8_Template, 2, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, AdminDashboardComponent_For_36_Conditional_13_Template, 2, 3, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275classProp("is-banned", m_r1.banned);
    \u0275\u0275advance();
    \u0275\u0275property("name", m_r1.name)("size", 46);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, m_r1.role === "admin" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, m_r1.banned ? 7 : m_r1.reports > 0 ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", m_r1.jobTitle, " \xB7 ", m_r1.employer, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r1.email, " \xB7 joined ", m_r1.joinedAt, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(13, m_r1.role !== "admin" ? 13 : -1);
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor() {
    this.router = inject(Router);
    this.members = signal([
      { id: "u201", name: "Priya Nair", email: "priya.nair@example.com", jobTitle: "Senior Data Scientist", employer: "Helix Bio", role: "user", banned: false, reports: 0, joinedAt: "Jun 2026" },
      { id: "u203", name: "Sofia Ramos", email: "sofia.ramos@example.com", jobTitle: "Brand Strategist", employer: "Wieden+Kennedy", role: "user", banned: false, reports: 1, joinedAt: "Jun 2026" },
      { id: "u212", name: "Rick Vaughn", email: "rick.v@example.com", jobTitle: "Sales Director", employer: "Freelance", role: "user", banned: false, reports: 3, joinedAt: "Jul 2026" },
      { id: "u205", name: "Aisha Khan", email: "aisha.khan@example.com", jobTitle: "Product Manager", employer: "Notion", role: "user", banned: false, reports: 0, joinedAt: "May 2026" },
      { id: "u219", name: "Deleted Spammer", email: "promo@spam.example", jobTitle: "Growth", employer: "\u2014", role: "user", banned: true, reports: 5, joinedAt: "Jul 2026" },
      { id: "me", name: "Alex Morgan", email: "alex.morgan@example.com", jobTitle: "Product Design Lead", employer: "Northwind Labs", role: "admin", banned: false, reports: 0, joinedAt: "Apr 2026" }
    ]);
    this.search = signal("");
    this.filtered = computed(() => {
      const q = this.search().trim().toLowerCase();
      if (!q)
        return this.members();
      return this.members().filter((m) => m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q));
    });
    this.total = computed(() => this.members().length);
    this.active = computed(() => this.members().filter((m) => !m.banned).length);
    this.banned = computed(() => this.members().filter((m) => m.banned).length);
    this.flagged = computed(() => this.members().filter((m) => m.reports > 0 && !m.banned).length);
  }
  onSearch(value) {
    this.search.set(value);
  }
  toggleBan(member) {
    this.members.update((list) => list.map((m) => m.id === member.id ? __spreadProps(__spreadValues({}, m), { banned: !m.banned }) : m));
  }
  viewReports() {
    this.router.navigate(["/admin/reports"]);
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 5, consts: [[1, "page"], [1, "page-header", "admin-head"], [1, "page-title"], [1, "page-subtitle"], ["routerLink", "/admin/reports", 1, "btn", "btn-outline", "reports-btn"], [1, "stats"], [1, "stat", "card"], [1, "stat-num"], [1, "stat-label", "muted"], [1, "stat-num", "warn"], [1, "stat-num", "danger"], [1, "search-wrap"], ["viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true"], ["d", "m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z", "stroke", "currentColor", "stroke-width", "1.7", "stroke-linecap", "round"], ["type", "text", "placeholder", "Search members by name or email", 3, "input", "value"], [1, "member-list"], [1, "member-row", "card", 3, "is-banned"], [1, "member-row", "card"], [3, "name", "size"], [1, "member-meta"], [1, "member-top"], [1, "pill", "pill-primary"], [1, "pill", "pill-danger"], [1, "subtle"], [1, "ban-btn", 3, "unban"], [1, "pill", "pill-warning"], [1, "ban-btn", 3, "click"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Moderation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Members & safety overview");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, " Reports queue ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "span", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Members");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 6)(16, "span", 7);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 8);
        \u0275\u0275text(19, "Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 6)(21, "span", 9);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 8);
        \u0275\u0275text(24, "Flagged");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 6)(26, "span", 10);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 8);
        \u0275\u0275text(29, "Banned");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 12);
        \u0275\u0275element(32, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "input", 14);
        \u0275\u0275listener("input", function AdminDashboardComponent_Template_input_input_33_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "ul", 15);
        \u0275\u0275repeaterCreate(35, AdminDashboardComponent_For_36_Template, 14, 12, "li", 16, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.total());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.active());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.flagged());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.banned());
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.search());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.filtered());
      }
    }, dependencies: [CommonModule, RouterLink, AvatarComponent], styles: ["\n\n.admin-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n}\n.reports-btn[_ngcontent-%COMP%] {\n  flex: none;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin-bottom: var(--space-5);\n}\n.stat[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  align-items: flex-start;\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  font-weight: 800;\n}\n.stat-num.warn[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.stat-num.danger[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: var(--space-4);\n}\n.search-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 18px;\n  height: 18px;\n  color: var(--color-text-subtle);\n}\n.search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n.member-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.member-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3);\n}\n.member-row.is-banned[_ngcontent-%COMP%] {\n  opacity: 0.62;\n}\n.member-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.member-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.member-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: var(--text-xs);\n}\n.ban-btn[_ngcontent-%COMP%] {\n  flex: none;\n  min-height: 40px;\n  padding: 0 16px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-danger);\n  background: var(--color-surface);\n  color: var(--color-danger);\n  font-weight: 600;\n  font-size: var(--text-sm);\n  transition: background 0.12s ease;\n}\n.ban-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-danger-soft);\n}\n.ban-btn.unban[_ngcontent-%COMP%] {\n  border-color: var(--color-border-strong);\n  color: var(--color-text-muted);\n}\n.ban-btn.unban[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n}\n@media (max-width: 560px) {\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/admin-dashboard.component.ts", lineNumber: 14 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=admin-dashboard.component-LEHNTIDC.js.map
