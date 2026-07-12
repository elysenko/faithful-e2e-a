import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  RouterLink,
  __spreadProps,
  __spreadValues,
  computed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-A62IECG2.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/orders", a0];
var _c1 = (a0) => ["/accounts", a0];
function DashboardComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "All clear \u2014 nothing flagged.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "strong");
    \u0275\u0275text(2, "Order slippage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, o_r1.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" \u2014 ", o_r1.poNumber, " (", o_r1.accountName, ") slipped ", o_r1.slippageDays, " days past RDD. ");
  }
}
function DashboardComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span")(2, "strong");
    \u0275\u0275text(3, "Design-in at risk");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" \u2014 ", d_r2.projectName, ": ", d_r2.competingBod, ". Protect the ", d_r2.breakerFamily, " spec.");
  }
}
function DashboardComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17)(1, "strong");
    \u0275\u0275text(2, "At-risk account");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c1, a_r3.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" \u2014 ", a_r3.name, ": ", a_r3.healthWhy, " ");
  }
}
function DashboardComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18)(1, "strong");
    \u0275\u0275text(2, "Warranty SLA breached");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" \u2014 ", w_r4.claimNumber, " (", w_r4.accountName, ") open ", w_r4.ageDays, " days. ");
  }
}
function DashboardComponent_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 27);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r5.priorityBadge(t_r5.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5.priority);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, t_r5.due, "MMM d"));
  }
}
function DashboardComponent_ForEmpty_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "No tasks due today.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_70_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7);
  }
}
function DashboardComponent_For_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275repeaterCreate(9, DashboardComponent_For_70_For_10_Template, 2, 1, "span", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r8 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r8.from);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r5.toneBadge(e_r8.tone));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r8.tone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r8.subject);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(e_r8.signals);
  }
}
function DashboardComponent_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24)(1, "div", 33)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 36);
    \u0275\u0275element(8, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r9 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, a_r9.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 5, a_r9.backlogValue, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", a_r9.pct, "%");
  }
}
var DashboardComponent = class _DashboardComponent {
  toneBadge(tone) {
    switch (tone) {
      case "positive":
        return "badge-success";
      case "concerned":
        return "badge-warning";
      case "urgent":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  priorityBadge(priority) {
    switch (priority) {
      case "high":
        return "badge-danger";
      case "medium":
        return "badge-warning";
      default:
        return "badge-neutral";
    }
  }
  constructor(seed) {
    this.seed = seed;
    this.today = "2026-07-10";
    this.totalBacklog = computed(() => this.seed.accounts().reduce((sum, a) => sum + a.backlogValue, 0));
    this.ytdRevenue = computed(() => this.seed.accounts().reduce((sum, a) => sum + a.ytdRevenue, 0));
    this.openQuotes = computed(() => this.seed.quotes().filter((q) => q.status === "submitted" || q.status === "draft").length);
    this.overdueTasks = computed(() => this.seed.tasks().filter((t) => t.bucket === "overdue").length);
    this.slippageOrders = computed(() => this.seed.orders().filter((o) => o.slippage));
    this.protectionAlerts = computed(() => this.seed.designIns().filter((d) => d.protectionAlert));
    this.atRiskAccounts = computed(() => this.seed.accounts().filter((a) => a.connectionLevel === "at-risk"));
    this.slaBreaches = computed(() => this.seed.warrantyClaims().filter((w) => w.slaBreached));
    this.todaysTasks = computed(() => this.seed.tasks().filter((t) => t.bucket === "today" || t.bucket === "overdue"));
    this.recentEmails = computed(() => [...this.seed.emails()].sort((a, b) => b.receivedAt.localeCompare(a.receivedAt)));
    this.topAccounts = computed(() => {
      const list = this.seed.accounts().filter((a) => a.backlogValue > 0);
      const max = Math.max(1, ...list.map((a) => a.backlogValue));
      return [...list].sort((a, b) => b.backlogValue - a.backlogValue).map((a) => __spreadProps(__spreadValues({}, a), { pct: Math.round(a.backlogValue / max * 100) }));
    });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 79, vars: 19, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "muted", "stat-note"], [1, "grid", "dash-grid"], [1, "card", "card-pad"], [1, "panel-head"], [1, "panel-title"], [1, "badge", "badge-danger"], [1, "muted"], [1, "alert", "alert-danger", "alert-link", 3, "routerLink"], [1, "alert", "alert-warning"], [1, "alert", "alert-warning", "alert-link", 3, "routerLink"], ["routerLink", "/warranty", 1, "alert", "alert-danger", "alert-link"], ["routerLink", "/tasks", 1, "btn", "btn-ghost", "btn-sm"], ["routerLink", "/tasks", 1, "task-row"], ["routerLink", "/email", 1, "btn", "btn-ghost", "btn-sm"], ["routerLink", "/email", 1, "email-row"], ["routerLink", "/accounts", 1, "btn", "btn-ghost", "btn-sm"], [1, "bar-row", 3, "routerLink"], [1, "badge"], [1, "task-title"], [1, "muted", "mono", "task-due"], [1, "email-top"], [1, "email-from"], [1, "email-subject"], [1, "signal-row"], [1, "badge", "badge-info"], [1, "bar-head"], [1, "bar-name"], [1, "mono"], [1, "bar-track"], [1, "bar-fill"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Good morning \u2014 here's your book of business");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
        \u0275\u0275text(10, "Total backlog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8);
        \u0275\u0275text(15, "Across all active accounts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 5)(17, "div", 6);
        \u0275\u0275text(18, "YTD revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 7);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 8);
        \u0275\u0275text(23, "Recognized this year");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 5)(25, "div", 6);
        \u0275\u0275text(26, "Open quotes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 7);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 8);
        \u0275\u0275text(30, "Draft & submitted");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 5)(32, "div", 6);
        \u0275\u0275text(33, "Overdue tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 7);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 8);
        \u0275\u0275text(37, "Need attention now");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 9)(39, "div", 10)(40, "div", 11)(41, "h2", 12);
        \u0275\u0275text(42, "Attention needed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 13);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(45, DashboardComponent_Conditional_45_Template, 2, 0, "p", 14);
        \u0275\u0275repeaterCreate(46, DashboardComponent_For_47_Template, 4, 6, "a", 15, _forTrack0);
        \u0275\u0275repeaterCreate(48, DashboardComponent_For_49_Template, 5, 3, "div", 16, _forTrack0);
        \u0275\u0275repeaterCreate(50, DashboardComponent_For_51_Template, 4, 5, "a", 17, _forTrack0);
        \u0275\u0275repeaterCreate(52, DashboardComponent_For_53_Template, 4, 3, "a", 18, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 10)(55, "div", 11)(56, "h2", 12);
        \u0275\u0275text(57, "Today's tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "a", 19);
        \u0275\u0275text(59, "View all");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(60, DashboardComponent_For_61_Template, 8, 8, "a", 20, _forTrack0, false, DashboardComponent_ForEmpty_62_Template, 2, 0, "p", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 10)(64, "div", 11)(65, "h2", 12);
        \u0275\u0275text(66, "Recent email signals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "a", 21);
        \u0275\u0275text(68, "Inbox");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(69, DashboardComponent_For_70_Template, 11, 5, "a", 22, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 10)(72, "div", 11)(73, "h2", 12);
        \u0275\u0275text(74, "Top accounts by backlog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "a", 23);
        \u0275\u0275text(76, "All accounts");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(77, DashboardComponent_For_78_Template, 9, 10, "a", 24, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("Nexus Power CRM \xB7 executive snapshot for ", \u0275\u0275pipeBind2(6, 10, ctx.today, "fullDate"), "");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(13, 13, ctx.totalBacklog(), "1.0-0"), "");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(21, 16, ctx.ytdRevenue(), "1.0-0"), "");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.openQuotes());
        \u0275\u0275advance(6);
        \u0275\u0275classProp("stat-alert", ctx.overdueTasks() > 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.overdueTasks());
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.slippageOrders().length + ctx.protectionAlerts().length + ctx.atRiskAccounts().length + ctx.slaBreaches().length);
        \u0275\u0275advance();
        \u0275\u0275conditional(45, ctx.slippageOrders().length + ctx.protectionAlerts().length + ctx.atRiskAccounts().length + ctx.slaBreaches().length === 0 ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.slippageOrders());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.protectionAlerts());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.atRiskAccounts());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.slaBreaches());
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.todaysTasks());
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.recentEmails());
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.topAccounts());
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterLink], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.stat-value.stat-alert[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.stat-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.dash-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\n  margin-top: var(--sp-5);\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--sp-4);\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.alert[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-2);\n}\n.alert-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.alert-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  filter: brightness(0.98);\n}\n.task-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: 10px 0;\n  border-bottom: 1px solid var(--color-border);\n  color: var(--color-text);\n  text-decoration: none;\n}\n.task-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.task-row[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.task-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.task-due[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n}\n.email-row[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--sp-3) 0;\n  border-bottom: 1px solid var(--color-border);\n  color: var(--color-text);\n  text-decoration: none;\n}\n.email-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.email-row[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: var(--color-surface-2);\n}\n.email-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-2);\n}\n.email-from[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.email-subject[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-text-muted);\n  margin: 2px 0 6px;\n}\n.signal-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px 0;\n  text-decoration: none;\n  color: var(--color-text);\n}\n.bar-row[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.bar-row[_ngcontent-%COMP%]:hover   .bar-name[_ngcontent-%COMP%] {\n  color: var(--color-brand-600);\n}\n.bar-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--fs-sm);\n  margin-bottom: 5px;\n}\n.bar-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 10px;\n  background: var(--color-surface-2);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-brand-600);\n  border-radius: 999px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 13 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-PHTEZARF.js.map
