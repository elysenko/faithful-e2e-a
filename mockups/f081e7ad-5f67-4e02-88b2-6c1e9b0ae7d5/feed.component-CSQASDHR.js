import {
  EmptyStateComponent,
  toSignal
} from "./chunk-RTWI72Z5.js";
import {
  CategoryChipComponent
} from "./chunk-VOV5DTNJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  computed,
  inject,
  map,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NK42F6RC.js";

// src/app/features/feed/feed.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function FeedComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function FeedComponent_For_23_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(cat_r2.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCategory() === cat_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2.name, " ");
  }
}
function FeedComponent_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 15)(1, "div", 17);
    \u0275\u0275element(2, "app-category-chip", 18);
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const article_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", article_r4.category);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(article_r4.sourceName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.relativeTime(article_r4.publishedAt));
    \u0275\u0275advance();
    \u0275\u0275property("href", article_r4.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", article_r4.title, " ");
  }
}
function FeedComponent_Conditional_24_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function FeedComponent_Conditional_24_Conditional_3_For_4_Template_button_click_0_listener() {
      const n_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(n_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", n_r7 === ctx_r2.page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r7, " ");
  }
}
function FeedComponent_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 16)(1, "button", 23);
    \u0275\u0275listener("click", function FeedComponent_Conditional_24_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.page() - 1));
    });
    \u0275\u0275text(2, " \u2039 Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, FeedComponent_Conditional_24_Conditional_3_For_4_Template, 2, 3, "button", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function FeedComponent_Conditional_24_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.page() + 1));
    });
    \u0275\u0275text(6, " Next \u203A ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.page() === ctx_r2.totalPages());
  }
}
function FeedComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 14);
    \u0275\u0275repeaterCreate(1, FeedComponent_Conditional_24_For_2_Template, 11, 5, "li", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FeedComponent_Conditional_24_Conditional_3_Template, 7, 2, "nav", 16);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.pageItems());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.totalPages() > 1 ? 3 : -1);
  }
}
function FeedComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "app-empty-state", 27);
    \u0275\u0275elementEnd();
  }
}
var PAGE_SIZE = 8;
var FeedComponent = class _FeedComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.articles = signal([
      { id: "a1", title: "Chip makers race to ship 2nm silicon as demand for AI accelerators surges", sourceName: "TechCrunch", category: "Tech", url: "#", publishedAt: this.hoursAgo(1) },
      { id: "a2", title: "Underdog side clinches league title in stoppage-time thriller", sourceName: "ESPN", category: "Sports", url: "#", publishedAt: this.hoursAgo(2) },
      { id: "a3", title: "Global summit ends with landmark agreement on emissions targets", sourceName: "Reuters", category: "World News", url: "#", publishedAt: this.hoursAgo(3) },
      { id: "a4", title: "Open-source framework hits 1.0 after three years in beta", sourceName: "The Verge", category: "Tech", url: "#", publishedAt: this.hoursAgo(4) },
      { id: "a5", title: "Central bank holds rates steady amid cooling inflation data", sourceName: "Bloomberg", category: "Business", url: "#", publishedAt: this.hoursAgo(5) },
      { id: "a6", title: "Marathon world record falls by 34 seconds on a fast Berlin course", sourceName: "BBC Sport", category: "Sports", url: "#", publishedAt: this.hoursAgo(7) },
      { id: "a7", title: "Telescope captures sharpest image yet of a forming planetary system", sourceName: "Nature", category: "Science", url: "#", publishedAt: this.hoursAgo(9) },
      { id: "a8", title: "Startups pivot to on-device inference to cut cloud costs", sourceName: "Ars Technica", category: "Tech", url: "#", publishedAt: this.hoursAgo(11) },
      { id: "a9", title: "Coastal cities unveil joint plan to fund flood defenses", sourceName: "The Guardian", category: "World News", url: "#", publishedAt: this.hoursAgo(14) },
      { id: "a10", title: "Retail giant beats earnings expectations on strong online sales", sourceName: "CNBC", category: "Business", url: "#", publishedAt: this.hoursAgo(18) },
      { id: "a11", title: "Researchers demonstrate error-corrected qubits at record fidelity", sourceName: "MIT News", category: "Science", url: "#", publishedAt: this.hoursAgo(21) },
      { id: "a12", title: "Veteran quarterback signs two-year extension with hometown team", sourceName: "The Athletic", category: "Sports", url: "#", publishedAt: this.hoursAgo(26) },
      { id: "a13", title: "New privacy regulation reshapes how apps handle location data", sourceName: "Wired", category: "Tech", url: "#", publishedAt: this.hoursAgo(30) },
      { id: "a14", title: "Diplomats reopen trade talks after months of stalled negotiations", sourceName: "Associated Press", category: "World News", url: "#", publishedAt: this.hoursAgo(38) }
    ]);
    this.categories = signal([
      { id: "c1", name: "Tech", sourceCount: 4, articleCount: 4 },
      { id: "c2", name: "Sports", sourceCount: 3, articleCount: 3 },
      { id: "c3", name: "World News", sourceCount: 3, articleCount: 3 },
      { id: "c4", name: "Business", sourceCount: 2, articleCount: 2 },
      { id: "c5", name: "Science", sourceCount: 2, articleCount: 2 }
    ]);
    this.params = toSignal(this.route.queryParamMap.pipe(map((p) => ({
      category: p.get("category") ?? "",
      page: Math.max(1, Number(p.get("page") ?? "1") || 1)
    }))), { initialValue: { category: "", page: 1 } });
    this.activeCategory = computed(() => this.params().category);
    this.filtered = computed(() => {
      const cat = this.activeCategory();
      const all = this.articles();
      return cat ? all.filter((a) => a.category === cat) : all;
    });
    this.total = computed(() => this.filtered().length);
    this.pageSize = PAGE_SIZE;
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.total() / PAGE_SIZE)));
    this.page = computed(() => Math.min(this.params().page, this.totalPages()));
    this.pageItems = computed(() => {
      const start = (this.page() - 1) * PAGE_SIZE;
      return this.filtered().slice(start, start + PAGE_SIZE);
    });
    this.pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));
  }
  selectCategory(name) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: name || null, page: null },
      queryParamsHandling: "merge"
    });
  }
  goToPage(p) {
    if (p < 1 || p > this.totalPages())
      return;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: p === 1 ? null : p },
      queryParamsHandling: "merge"
    });
  }
  relativeTime(iso) {
    const diffMs = Date.now() - new Date(iso).getTime();
    const mins = Math.round(diffMs / 6e4);
    if (mins < 1)
      return "just now";
    if (mins < 60)
      return `${mins}m ago`;
    const hrs = Math.round(mins / 60);
    if (hrs < 24)
      return `${hrs}h ago`;
    const days = Math.round(hrs / 24);
    return `${days}d ago`;
  }
  hoursAgo(h) {
    return new Date(Date.now() - h * 36e5).toISOString();
  }
  static {
    this.\u0275fac = function FeedComponent_Factory(t) {
      return new (t || _FeedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedComponent, selectors: [["app-feed"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 4, consts: [[1, "page"], [1, "topbar"], [1, "topbar-inner"], ["routerLink", "/feed", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], ["routerLink", "/admin/login", 1, "admin-link"], ["aria-hidden", "true", 1, "admin-link-icon"], [1, "content"], [1, "feed-head"], [1, "sub"], ["aria-label", "Filter by category", 1, "filters"], [1, "filter", 3, "click"], [1, "filter", 3, "active"], [1, "articles"], [1, "article", "card"], ["aria-label", "Pagination", 1, "pagination"], [1, "article-meta"], [3, "name"], ["aria-hidden", "true", 1, "dot"], [1, "source"], [1, "time"], ["target", "_blank", "rel", "noopener", 1, "article-title", 3, "href"], [1, "page-btn", 3, "click", "disabled"], [1, "page-btn", "num", 3, "active"], [1, "page-btn", "num", 3, "click"], [1, "card", "empty-wrap"], ["icon", "\u{1F4ED}", "title", "No articles yet", "message", "Nothing has been collected for this filter. Once feeds are polled, the latest stories will appear here."]], template: function FeedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
        \u0275\u0275text(5, "NW");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, "NewsWire");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "a", 6)(9, "span", 7);
        \u0275\u0275text(10, "\u{1F511}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12, "Admin");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "main", 8)(14, "div", 9)(15, "h1");
        \u0275\u0275text(16, "Latest Headlines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 10);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "nav", 11)(20, "button", 12);
        \u0275\u0275listener("click", function FeedComponent_Template_button_click_20_listener() {
          return ctx.selectCategory("");
        });
        \u0275\u0275text(21, " All ");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(22, FeedComponent_For_23_Template, 2, 3, "button", 13, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, FeedComponent_Conditional_24_Template, 4, 1)(25, FeedComponent_Conditional_25_Template, 2, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate1("", ctx.total(), " articles \xB7 newest first");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeCategory() === "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(24, ctx.pageItems().length > 0 ? 24 : 25);
      }
    }, dependencies: [CommonModule, RouterLink, CategoryChipComponent, EmptyStateComponent], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  flex-direction: column;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n}\n.topbar-inner[_ngcontent-%COMP%] {\n  max-width: var(--content-max);\n  margin: 0 auto;\n  height: var(--topbar-height);\n  padding: 0 var(--sp-4);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  font-weight: 800;\n  font-size: var(--fs-lg);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  background: var(--color-accent);\n  color: #fff;\n  font-size: var(--fs-sm);\n  font-weight: 800;\n  letter-spacing: 0.5px;\n}\n.admin-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  min-height: 44px;\n  padding: 0 var(--sp-3);\n  border-radius: var(--radius-md);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.admin-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  color: var(--color-text);\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--content-max);\n  margin: 0 auto;\n  padding: var(--sp-5) var(--sp-4) var(--sp-8);\n  flex: 1;\n}\n.feed-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.feed-head[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  margin-top: var(--sp-1);\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  margin: var(--sp-5) 0;\n  overflow-x: auto;\n  padding-bottom: var(--sp-1);\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.filters[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-height: 40px;\n  padding: 0 var(--sp-4);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-pill);\n  background: var(--color-surface);\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  transition: all 0.12s ease;\n}\n.filter[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.filter.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: #fff;\n}\n.articles[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.article[_ngcontent-%COMP%] {\n  padding: var(--sp-4) var(--sp-5);\n  transition: box-shadow 0.15s ease, transform 0.05s ease;\n}\n.article[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n.article[_ngcontent-%COMP%]:active {\n  transform: scale(0.997);\n}\n.article-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  font-size: var(--fs-xs);\n  color: var(--color-text-subtle);\n  margin-bottom: var(--sp-2);\n}\n.article-meta[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.article-meta[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: var(--color-border-strong);\n}\n.article-meta[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.article-title[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-serif);\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  line-height: 1.3;\n  color: var(--color-text);\n}\n.article-title[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sp-2);\n  justify-content: center;\n  margin-top: var(--sp-6);\n}\n.page-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  min-width: 44px;\n  padding: 0 var(--sp-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n  background: var(--color-surface);\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  border-color: var(--color-primary);\n  color: #fff;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.empty-wrap[_ngcontent-%COMP%] {\n  margin-top: var(--sp-2);\n}\n@media (max-width: 768px) {\n  .article-title[_ngcontent-%COMP%] {\n    font-size: var(--fs-base);\n  }\n  .feed-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: var(--fs-xl);\n  }\n}\n/*# sourceMappingURL=feed.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedComponent, { className: "FeedComponent", filePath: "src/app/features/feed/feed.component.ts", lineNumber: 19 });
})();
export {
  FeedComponent
};
//# sourceMappingURL=feed.component-CSQASDHR.js.map
