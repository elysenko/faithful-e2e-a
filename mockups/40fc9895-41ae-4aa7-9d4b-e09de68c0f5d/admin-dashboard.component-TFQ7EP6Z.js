import {
  RouterLink,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QZ7UG3YY.js";

// src/app/features/admin/dashboard/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ modal: "add-source" });
var _c1 = () => ({ modal: "add-category" });
function AdminDashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
    \u0275\u0275text(1, " Queuing\u2026 ");
  }
}
function AdminDashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u21BB Refresh all feeds ");
  }
}
function AdminDashboardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 23);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.refreshStatus(), " ");
  }
}
function AdminDashboardComponent_For_48_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const source_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(source_r2.lastError);
  }
}
function AdminDashboardComponent_For_48_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Paused");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_For_48_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Healthy");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16);
    \u0275\u0275element(1, "span", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275template(8, AdminDashboardComponent_For_48_Conditional_8_Template, 2, 1, "span", 28)(9, AdminDashboardComponent_For_48_Conditional_9_Template, 2, 0)(10, AdminDashboardComponent_For_48_Conditional_10_Template, 2, 0);
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const source_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("ok", !source_r2.lastError && source_r2.active)("err", !!source_r2.lastError)("off", !source_r2.active && !source_r2.lastError);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(source_r2.name);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("chip chip-cat cat-", source_r2.categorySlug, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(source_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(8, source_r2.lastError ? 8 : !source_r2.active ? 9 : 10);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Fetched ", ctx_r0.timeAgo(source_r2.lastFetchedAt), "");
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor() {
    this.sources = signal([
      {
        id: "s1",
        name: "The Verge",
        url: "https://www.theverge.com/rss/index.xml",
        category: "Technology",
        categorySlug: "tech",
        active: true,
        lastFetchedAt: this.minsAgo(4),
        lastError: null,
        articleCount: 128
      },
      {
        id: "s2",
        name: "Reuters Business",
        url: "https://feeds.reuters.com/reuters/businessNews",
        category: "Business",
        categorySlug: "business",
        active: true,
        lastFetchedAt: this.minsAgo(4),
        lastError: null,
        articleCount: 94
      },
      {
        id: "s3",
        name: "BBC World",
        url: "https://feeds.bbci.co.uk/news/world/rss.xml",
        category: "World News",
        categorySlug: "world",
        active: true,
        lastFetchedAt: this.minsAgo(4),
        lastError: null,
        articleCount: 156
      },
      {
        id: "s4",
        name: "Indie Sports Blog",
        url: "https://indie-sports.example.com/feed",
        category: "Sports",
        categorySlug: "sports",
        active: true,
        lastFetchedAt: this.hoursAgo(6),
        lastError: "Request timed out after 10s",
        articleCount: 41
      },
      {
        id: "s5",
        name: "Science Daily",
        url: "https://www.sciencedaily.com/rss/all.xml",
        category: "Science",
        categorySlug: "science",
        active: false,
        lastFetchedAt: this.hoursAgo(30),
        lastError: "404 Not Found \u2014 feed URL may have moved",
        articleCount: 63
      }
    ]);
    this.categories = signal([
      { id: "c1", name: "Technology", slug: "tech", articleCount: 128 },
      { id: "c2", name: "World News", slug: "world", articleCount: 156 },
      { id: "c3", name: "Business", slug: "business", articleCount: 94 },
      { id: "c4", name: "Sports", slug: "sports", articleCount: 41 },
      { id: "c5", name: "Science", slug: "science", articleCount: 63 }
    ]);
    this.totalSources = computed(() => this.sources().length);
    this.activeSources = computed(() => this.sources().filter((s) => s.active).length);
    this.totalCategories = computed(() => this.categories().length);
    this.totalArticles = computed(() => this.sources().reduce((sum, s) => sum + s.articleCount, 0));
    this.failingSources = computed(() => this.sources().filter((s) => !!s.lastError));
    this.refreshing = signal(false);
    this.refreshStatus = signal(null);
  }
  refreshAll() {
    this.refreshing.set(true);
    this.refreshStatus.set(null);
    setTimeout(() => {
      this.refreshing.set(false);
      this.refreshStatus.set(`Refresh queued for ${this.activeSources()} active source(s). New articles will appear shortly.`);
    }, 900);
  }
  timeAgo(iso) {
    if (!iso)
      return "never";
    const then = new Date(iso).getTime();
    const mins = Math.round((Date.now() - then) / 6e4);
    if (mins < 1)
      return "just now";
    if (mins < 60)
      return `${mins}m ago`;
    const hours = Math.round(mins / 60);
    if (hours < 24)
      return `${hours}h ago`;
    return `${Math.round(hours / 24)}d ago`;
  }
  minsAgo(m) {
    return new Date(Date.now() - m * 6e4).toISOString();
  }
  hoursAgo(h) {
    return new Date(Date.now() - h * 36e5).toISOString();
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 66, vars: 14, consts: [[1, "admin-page"], [1, "page-head"], [1, "page-title"], [1, "page-sub"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["role", "status", 1, "banner", "banner-success"], [1, "kpi-grid"], [1, "kpi", "card"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-foot"], [1, "panel", "card"], [1, "panel-head"], [1, "panel-title"], ["routerLink", "/admin/sources", 1, "panel-link"], [1, "health-list"], [1, "health-row"], [1, "quick-actions"], ["routerLink", "/admin/sources", 1, "action-card", "card", 3, "queryParams"], ["aria-hidden", "true", 1, "action-icon"], [1, "action-text"], ["routerLink", "/admin/categories", 1, "action-card", "card", 3, "queryParams"], ["aria-hidden", "true", 1, "spinner"], ["aria-hidden", "true", 1, "banner-icon"], [1, "status-dot"], [1, "health-main"], [1, "health-name"], [1, "health-status"], [1, "health-error"], [1, "health-time"], [1, "health-muted"], [1, "health-ok"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Overview of your feeds and articles.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_7_listener() {
          return ctx.refreshAll();
        });
        \u0275\u0275template(8, AdminDashboardComponent_Conditional_8_Template, 2, 0)(9, AdminDashboardComponent_Conditional_9_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, AdminDashboardComponent_Conditional_10_Template, 4, 1, "div", 5);
        \u0275\u0275elementStart(11, "section", 6)(12, "div", 7)(13, "span", 8);
        \u0275\u0275text(14, "Total sources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 9);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 10);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 7)(20, "span", 8);
        \u0275\u0275text(21, "Articles collected");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 9);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 10);
        \u0275\u0275text(25, "across all feeds");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 7)(27, "span", 8);
        \u0275\u0275text(28, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 9);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 10);
        \u0275\u0275text(32, "used for filtering");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 7)(34, "span", 8);
        \u0275\u0275text(35, "Feeds with errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 9);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 10);
        \u0275\u0275text(39, "need attention");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "section", 11)(41, "div", 12)(42, "h2", 13);
        \u0275\u0275text(43, "Feed health");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "a", 14);
        \u0275\u0275text(45, "Manage sources \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "ul", 15);
        \u0275\u0275repeaterCreate(47, AdminDashboardComponent_For_48_Template, 13, 13, "li", 16, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "section", 17)(50, "a", 18)(51, "span", 19);
        \u0275\u0275text(52, "\uFF0B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "span", 20)(54, "strong");
        \u0275\u0275text(55, "Add a feed source");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span");
        \u0275\u0275text(57, "Paste an RSS or Atom URL and tag it with a category.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "a", 21)(59, "span", 19);
        \u0275\u0275text(60, "\u{1F3F7}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "span", 20)(62, "strong");
        \u0275\u0275text(63, "Create a category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "span");
        \u0275\u0275text(65, "Group sources so readers can filter the public feed.");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.refreshing());
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.refreshing() ? 8 : 9);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(10, ctx.refreshStatus() ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.totalSources());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.activeSources(), " active");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.totalArticles());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.totalCategories());
        \u0275\u0275advance(3);
        \u0275\u0275classProp("kpi-warn", ctx.failingSources().length > 0);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.failingSources().length);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.sources());
        \u0275\u0275advance(3);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(12, _c0));
        \u0275\u0275advance(8);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(13, _c1));
      }
    }, dependencies: [RouterLink], styles: ["\n\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.kpi[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  padding: var(--space-4);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  font-weight: var(--font-semibold);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-faint);\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n  font-weight: var(--font-bold);\n  line-height: 1.1;\n}\n.kpi-foot[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--color-text-muted);\n}\n.kpi-warn[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.health-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.health-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) 0;\n  border-top: 1px solid var(--color-border);\n}\n.health-row[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  flex: 0 0 10px;\n  border-radius: 50%;\n  background: var(--color-border-strong);\n}\n.status-dot.ok[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.status-dot.err[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n}\n.status-dot.off[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n}\n.health-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  min-width: 0;\n  flex: 1;\n}\n.health-name[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold);\n  font-size: var(--text-sm);\n}\n.health-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n  text-align: right;\n}\n.health-ok[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  font-weight: var(--font-semibold);\n  color: var(--color-success);\n}\n.health-muted[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  font-weight: var(--font-semibold);\n  color: var(--color-warning);\n}\n.health-error[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  font-weight: var(--font-semibold);\n  color: var(--color-danger);\n  max-width: 24ch;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.health-time[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--color-text-faint);\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: var(--space-4);\n}\n.action-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  padding: var(--space-4);\n  transition: box-shadow var(--transition-base), transform var(--transition-fast);\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n.action-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  border-radius: var(--radius-md);\n  display: grid;\n  place-items: center;\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n  font-size: 1.2rem;\n}\n.action-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.action-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n}\n.action-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: var(--color-text-muted);\n}\n@media (max-width: 768px) {\n  .health-error[_ngcontent-%COMP%] {\n    max-width: 16ch;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/dashboard/admin-dashboard.component.ts", lineNumber: 12 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=admin-dashboard.component-TFQ7EP6Z.js.map
