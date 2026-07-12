import {
  CategoryChipComponent
} from "./chunk-VOV5DTNJ.js";
import {
  CommonModule,
  RouterLink,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NK42F6RC.js";

// src/app/features/admin-dashboard/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = () => ({ modal: "add-source" });
var _c1 = () => ({ modal: "add-category" });
function AdminDashboardComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-tone", stat_r1.tone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
function AdminDashboardComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10)(1, "div", 21);
    \u0275\u0275element(2, "app-category-chip", 22);
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 25);
    \u0275\u0275text(9, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", a_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.sourceName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.relativeTime(a_r2.publishedAt));
  }
}
function AdminDashboardComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275element(1, "app-category-chip", 22);
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("name", c_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r4.articleCount, " articles");
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor() {
    this.sources = signal([
      { id: "s1", url: "https://techcrunch.com/feed/", category: "Tech", active: true, lastFetchedAt: this.minsAgo(3), lastError: null, articleCount: 128 },
      { id: "s2", url: "https://www.espn.com/espn/rss/news", category: "Sports", active: true, lastFetchedAt: this.minsAgo(4), lastError: null, articleCount: 96 },
      { id: "s3", url: "https://feeds.reuters.com/reuters/worldNews", category: "World News", active: true, lastFetchedAt: this.minsAgo(2), lastError: null, articleCount: 210 },
      { id: "s4", url: "https://www.wired.com/feed/rss", category: "Tech", active: true, lastFetchedAt: this.minsAgo(6), lastError: null, articleCount: 74 },
      { id: "s5", url: "https://example.com/broken/feed.xml", category: "Business", active: false, lastFetchedAt: this.minsAgo(52), lastError: "ECONNREFUSED \u2014 host unreachable", articleCount: 0 }
    ]);
    this.categories = signal([
      { id: "c1", name: "Tech", sourceCount: 2, articleCount: 202 },
      { id: "c2", name: "Sports", sourceCount: 1, articleCount: 96 },
      { id: "c3", name: "World News", sourceCount: 1, articleCount: 210 },
      { id: "c4", name: "Business", sourceCount: 1, articleCount: 0 }
    ]);
    this.recentArticles = signal([
      { id: "a1", title: "Chip makers race to ship 2nm silicon as AI demand surges", sourceName: "TechCrunch", category: "Tech", url: "#", publishedAt: this.minsAgo(12) },
      { id: "a2", title: "Global summit ends with landmark emissions agreement", sourceName: "Reuters", category: "World News", url: "#", publishedAt: this.minsAgo(48) },
      { id: "a3", title: "Underdog side clinches league title in stoppage time", sourceName: "ESPN", category: "Sports", url: "#", publishedAt: this.minsAgo(95) },
      { id: "a4", title: "Open-source framework hits 1.0 after three years in beta", sourceName: "Wired", category: "Tech", url: "#", publishedAt: this.minsAgo(140) }
    ]);
    this.activeSources = computed(() => this.sources().filter((s) => s.active).length);
    this.totalArticles = computed(() => this.sources().reduce((sum, s) => sum + s.articleCount, 0));
    this.erroredSources = computed(() => this.sources().filter((s) => s.lastError).length);
    this.stats = computed(() => [
      { label: "Total articles", value: this.totalArticles().toLocaleString(), icon: "\u{1F4F0}", tone: "primary" },
      { label: "Active sources", value: `${this.activeSources()} / ${this.sources().length}`, icon: "\u{1F6F0}\uFE0F", tone: "success" },
      { label: "Categories", value: `${this.categories().length}`, icon: "\u{1F3F7}\uFE0F", tone: "accent" },
      { label: "Feeds with errors", value: `${this.erroredSources()}`, icon: "\u26A0\uFE0F", tone: this.erroredSources() ? "warning" : "muted" }
    ]);
  }
  relativeTime(iso) {
    const mins = Math.round((Date.now() - new Date(iso).getTime()) / 6e4);
    if (mins < 1)
      return "just now";
    if (mins < 60)
      return `${mins}m ago`;
    const hrs = Math.round(mins / 60);
    if (hrs < 24)
      return `${hrs}h ago`;
    return `${Math.round(hrs / 24)}d ago`;
  }
  minsAgo(m) {
    return new Date(Date.now() - m * 6e4).toISOString();
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 4, consts: [[1, "admin-page"], [1, "page-head"], [1, "sub"], [1, "stats"], [1, "stat", "card"], [1, "grid"], [1, "card", "panel"], [1, "panel-head"], ["routerLink", "/feed", 1, "link"], [1, "recent"], [1, "recent-item"], [1, "side-col"], [1, "actions"], ["routerLink", "/admin/sources", 1, "btn", "btn-primary", "full", 3, "queryParams"], ["routerLink", "/admin/categories", 1, "btn", "btn-secondary", "full", 3, "queryParams"], ["routerLink", "/admin/sources", 1, "btn", "btn-ghost", "full"], [1, "cat-list"], [1, "cat-row"], ["aria-hidden", "true", 1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], [1, "recent-main"], [3, "name"], [1, "recent-title"], [1, "recent-meta"], [1, "dot"], [1, "cat-count"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Overview of your aggregated feeds and articles.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275repeaterCreate(8, AdminDashboardComponent_For_9_Template, 7, 4, "div", 4, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "div", 7)(13, "h2");
        \u0275\u0275text(14, "Recently collected");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 8);
        \u0275\u0275text(16, "View feed \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "ul", 9);
        \u0275\u0275repeaterCreate(18, AdminDashboardComponent_For_19_Template, 12, 4, "li", 10, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 11)(21, "div", 6)(22, "div", 7)(23, "h2");
        \u0275\u0275text(24, "Quick actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 12)(26, "a", 13);
        \u0275\u0275text(27, " + Add source ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "a", 14);
        \u0275\u0275text(29, " + Add category ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "a", 15);
        \u0275\u0275text(31, "Manage sources");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 6)(33, "div", 7)(34, "h2");
        \u0275\u0275text(35, "Categories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "ul", 16);
        \u0275\u0275repeaterCreate(37, AdminDashboardComponent_For_38_Template, 4, 2, "li", 17, _forTrack1);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.stats());
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.recentArticles());
        \u0275\u0275advance(8);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(2, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(3, _c1));
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.categories());
      }
    }, dependencies: [CommonModule, RouterLink, CategoryChipComponent], styles: ["\n\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-5);\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-1);\n  padding: var(--sp-4);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-text-muted);\n}\n.stat[data-tone=warning][_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.stat[data-tone=success][_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr;\n  gap: var(--sp-4);\n  align-items: start;\n}\n.side-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-4);\n}\n.recent[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.recent-item[_ngcontent-%COMP%] {\n  padding: var(--sp-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.recent-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.recent-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--sp-2);\n}\n.recent-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  line-height: 1.35;\n}\n.recent-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  margin-top: var(--sp-1);\n  padding-left: 2px;\n  font-size: var(--fs-xs);\n  color: var(--color-text-subtle);\n}\n.recent-meta[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: var(--color-border-strong);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-2);\n}\n.cat-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-2);\n}\n.cat-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.cat-count[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-text-subtle);\n}\n@media (max-width: 860px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin-dashboard/admin-dashboard.component.ts", lineNumber: 14 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=admin-dashboard.component-5VCD7LO4.js.map
