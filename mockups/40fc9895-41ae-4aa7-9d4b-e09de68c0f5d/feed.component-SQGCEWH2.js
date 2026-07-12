import {
  toSignal
} from "./chunk-6OHENYWF.js";
import {
  ActivatedRoute,
  EventEmitter,
  Router,
  RouterLink,
  computed,
  inject,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QZ7UG3YY.js";

// src/app/features/feed/components/category-filter/category-filter.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CategoryFilterComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function CategoryFilterComponent_For_5_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.choose(cat_r2.name));
    });
    \u0275\u0275element(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.active === cat_r2.name);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("dot cat-", cat_r2.slug, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.articleCount);
  }
}
var CategoryFilterComponent = class _CategoryFilterComponent {
  constructor() {
    this.categories = [];
    this.active = null;
    this.select = new EventEmitter();
  }
  choose(name) {
    this.select.emit(name);
  }
  static {
    this.\u0275fac = function CategoryFilterComponent_Factory(t) {
      return new (t || _CategoryFilterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryFilterComponent, selectors: [["app-category-filter"]], inputs: { categories: "categories", active: "active" }, outputs: { select: "select" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 2, consts: [["aria-label", "Filter articles by category", 1, "filter"], [1, "filter-scroll"], ["type", "button", 1, "filter-chip", 3, "click"], ["type", "button", 1, "filter-chip", 3, "active"], ["aria-hidden", "true"], [1, "filter-count"]], template: function CategoryFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function CategoryFilterComponent_Template_button_click_2_listener() {
          return ctx.choose(null);
        });
        \u0275\u0275text(3, " All ");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(4, CategoryFilterComponent_For_5_Template, 5, 7, "button", 3, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.active === null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories);
      }
    }, styles: ["\n\n.filter[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filter-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  overflow-x: auto;\n  padding-bottom: var(--space-2);\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.filter-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex: 0 0 auto;\n  min-height: 40px;\n  padding: 0 var(--space-4);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-pill);\n  background: var(--color-surface);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast),\n    transform var(--transition-fast);\n}\n.filter-chip[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-sunken);\n  color: var(--color-text);\n}\n.filter-chip[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.filter-chip.active[_ngcontent-%COMP%] {\n  background: var(--color-navy);\n  border-color: var(--color-navy);\n  color: var(--color-text-on-dark);\n}\n.dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.filter-chip.active[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.filter-count[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  font-weight: var(--font-semibold);\n  padding: 1px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-surface-sunken);\n  color: var(--color-text-muted);\n}\n.filter-chip.active[_ngcontent-%COMP%]   .filter-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  color: var(--color-text-on-dark);\n}\n@media (max-width: 768px) {\n  .filter-chip[_ngcontent-%COMP%] {\n    min-height: 44px;\n  }\n}\n/*# sourceMappingURL=category-filter.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryFilterComponent, { className: "CategoryFilterComponent", filePath: "src/app/features/feed/components/category-filter/category-filter.component.ts", lineNumber: 11 });
})();

// src/app/features/feed/components/article-list/article-list.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function ArticleListComponent_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const article_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(article_r1.excerpt);
  }
}
function ArticleListComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 1)(1, "a", 2)(2, "div", 3)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "time", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h3", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ArticleListComponent_For_2_Conditional_13_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", article_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("chip ", ctx_r1.catClass(article_r1.categorySlug), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(article_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.sourceName);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("datetime", article_r1.publishedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.timeAgo(article_r1.publishedAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, article_r1.excerpt ? 13 : -1);
  }
}
var ArticleListComponent = class _ArticleListComponent {
  constructor() {
    this.articles = [];
  }
  /** Human-friendly relative time (e.g. "3h ago"). Falls back to a date string. */
  timeAgo(iso) {
    const then = new Date(iso).getTime();
    if (Number.isNaN(then))
      return "";
    const diff = Date.now() - then;
    const mins = Math.round(diff / 6e4);
    if (mins < 1)
      return "just now";
    if (mins < 60)
      return `${mins}m ago`;
    const hours = Math.round(mins / 60);
    if (hours < 24)
      return `${hours}h ago`;
    const days = Math.round(hours / 24);
    if (days < 7)
      return `${days}d ago`;
    return new Date(iso).toLocaleDateString(void 0, { month: "short", day: "numeric" });
  }
  catClass(slug) {
    const known = ["tech", "sports", "world", "business", "science"];
    return known.includes(slug) ? `cat-${slug}` : "cat-default";
  }
  static {
    this.\u0275fac = function ArticleListComponent_Factory(t) {
      return new (t || _ArticleListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleListComponent, selectors: [["app-article-list"]], inputs: { articles: "articles" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "article-list"], [1, "article-card"], ["target", "_blank", "rel", "noopener noreferrer", 1, "article-link", 3, "href"], [1, "article-meta"], [1, "article-source"], ["aria-hidden", "true", 1, "article-dot"], [1, "article-time"], [1, "article-title"], [1, "article-excerpt"]], template: function ArticleListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ul", 0);
        \u0275\u0275repeaterCreate(1, ArticleListComponent_For_2_Template, 14, 10, "li", 1, _forTrack02);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.articles);
      }
    }, styles: ["\n\n.article-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: var(--space-4);\n}\n.article-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  transition:\n    box-shadow var(--transition-base),\n    transform var(--transition-fast),\n    border-color var(--transition-base);\n}\n.article-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  border-color: var(--color-border-strong);\n}\n.article-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.995);\n}\n.article-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--space-5);\n}\n.article-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n  margin-bottom: var(--space-3);\n  font-size: var(--text-xs);\n  color: var(--color-text-muted);\n}\n.article-source[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold);\n  color: var(--color-text);\n}\n.article-dot[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n}\n.article-time[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n}\n.article-title[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: var(--text-xl);\n  font-weight: var(--font-bold);\n  line-height: 1.3;\n  color: var(--color-text);\n}\n.article-excerpt[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 0;\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  line-height: 1.55;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .article-link[_ngcontent-%COMP%] {\n    padding: var(--space-4);\n  }\n  .article-title[_ngcontent-%COMP%] {\n    font-size: var(--text-lg);\n  }\n}\n/*# sourceMappingURL=article-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleListComponent, { className: "ArticleListComponent", filePath: "src/app/features/feed/components/article-list/article-list.component.ts", lineNumber: 11 });
})();

// src/app/features/feed/components/pagination/pagination.component.ts
function PaginationComponent_Conditional_0_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function PaginationComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.go(1));
    });
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, PaginationComponent_Conditional_0_Conditional_4_Conditional_2_Template, 2, 0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, ctx_r1.pages[0] > 2 ? 2 : -1);
  }
}
function PaginationComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_For_6_Template_button_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.go(p_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r5 === ctx_r1.page);
    \u0275\u0275attribute("aria-current", p_r5 === ctx_r1.page ? "page" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r5, " ");
  }
}
function PaginationComponent_Conditional_0_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function PaginationComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, PaginationComponent_Conditional_0_Conditional_7_Conditional_0_Template, 2, 0, "span", 7);
    \u0275\u0275elementStart(1, "button", 6);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.totalPages));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, ctx_r1.pages[ctx_r1.pages.length - 1] < ctx_r1.totalPages - 1 ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.totalPages);
  }
}
function PaginationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 0)(1, "button", 1);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.page - 1));
    });
    \u0275\u0275text(2, " \u2039 Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275template(4, PaginationComponent_Conditional_0_Conditional_4_Template, 3, 1);
    \u0275\u0275repeaterCreate(5, PaginationComponent_Conditional_0_For_6_Template, 2, 4, "button", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(7, PaginationComponent_Conditional_0_Conditional_7_Template, 3, 2, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 5);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.page + 1));
    });
    \u0275\u0275text(9, " Next \u203A ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canPrev);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(4, ctx_r1.pages[0] > 1 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pages);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, ctx_r1.pages[ctx_r1.pages.length - 1] < ctx_r1.totalPages ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canNext);
  }
}
var PaginationComponent = class _PaginationComponent {
  constructor() {
    this.page = 1;
    this.totalPages = 1;
    this.pageChange = new EventEmitter();
  }
  get canPrev() {
    return this.page > 1;
  }
  get canNext() {
    return this.page < this.totalPages;
  }
  go(page) {
    if (page < 1 || page > this.totalPages || page === this.page)
      return;
    this.pageChange.emit(page);
  }
  /** Compact page-number window around the current page. */
  get pages() {
    const span = 2;
    const start = Math.max(1, this.page - span);
    const end = Math.min(this.totalPages, this.page + span);
    const out = [];
    for (let i = start; i <= end; i++)
      out.push(i);
    return out;
  }
  static {
    this.\u0275fac = function PaginationComponent_Factory(t) {
      return new (t || _PaginationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], inputs: { page: "page", totalPages: "totalPages" }, outputs: { pageChange: "pageChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["aria-label", "Pagination", 1, "pagination"], ["type", "button", "aria-label", "Previous page", 1, "page-btn", "page-arrow", 3, "click", "disabled"], [1, "page-numbers"], ["type", "button", 1, "page-btn", 3, "active"], ["type", "button", 1, "page-btn"], ["type", "button", "aria-label", "Next page", 1, "page-btn", "page-arrow", 3, "click", "disabled"], ["type", "button", 1, "page-btn", 3, "click"], ["aria-hidden", "true", 1, "page-ellipsis"]], template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PaginationComponent_Conditional_0_Template, 10, 4, "nav", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.totalPages > 1 ? 0 : -1);
      }
    }, styles: ["\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-1);\n}\n.page-btn[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n  background: var(--color-surface);\n  color: var(--color-text);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast),\n    transform var(--transition-fast);\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {\n  background: var(--color-surface-sunken);\n}\n.page-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.96);\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: var(--color-navy);\n  border-color: var(--color-navy);\n  color: var(--color-text-on-dark);\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.page-arrow[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.page-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 var(--space-1);\n  color: var(--color-text-faint);\n}\n/*# sourceMappingURL=pagination.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src/app/features/feed/components/pagination/pagination.component.ts", lineNumber: 10 });
})();

// src/app/features/feed/components/empty-state/empty-state.component.ts
var EmptyStateComponent = class _EmptyStateComponent {
  constructor() {
    this.title = "No articles yet";
    this.message = "There are no articles to show right now. Check back soon.";
    this.icon = "\u{1F4F0}";
  }
  static {
    this.\u0275fac = function EmptyStateComponent_Factory(t) {
      return new (t || _EmptyStateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyStateComponent, selectors: [["app-empty-state"]], inputs: { title: "title", message: "message", icon: "icon" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 3, consts: [[1, "empty"], ["aria-hidden", "true", 1, "empty-icon"], [1, "empty-title"], [1, "empty-message"]], template: function EmptyStateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h2", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.icon);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.message);
      }
    }, styles: ["\n\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: var(--space-8) var(--space-4);\n  background: var(--color-surface);\n  border: 1px dashed var(--color-border-strong);\n  border-radius: var(--radius-lg);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 1;\n  margin-bottom: var(--space-4);\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  font-weight: var(--font-bold);\n  margin-bottom: var(--space-2);\n}\n.empty-message[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 32ch;\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=empty-state.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyStateComponent, { className: "EmptyStateComponent", filePath: "src/app/features/feed/components/empty-state/empty-state.component.ts", lineNumber: 10 });
})();

// src/app/features/feed/feed.component.ts
function FeedComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " in ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.activeCategoryName());
  }
}
function FeedComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Page ", ctx_r0.page(), " of ", ctx_r0.totalPages(), "");
  }
}
function FeedComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-article-list", 17);
    \u0275\u0275elementStart(1, "div", 18)(2, "app-pagination", 19);
    \u0275\u0275listener("pageChange", function FeedComponent_Conditional_25_Template_app_pagination_pageChange_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("articles", ctx_r0.pagedArticles());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r0.page())("totalPages", ctx_r0.totalPages());
  }
}
function FeedComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("message", ctx_r0.activeCategoryName() ? "No articles found in this category. Try another topic or check back soon." : "No articles have been collected yet. Once feeds are added, they will appear here.");
  }
}
var PAGE_SIZE = 20;
var FeedComponent = class _FeedComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.categories = signal([
      { id: "c1", name: "Technology", slug: "tech", articleCount: 9 },
      { id: "c2", name: "World News", slug: "world", articleCount: 7 },
      { id: "c3", name: "Business", slug: "business", articleCount: 5 },
      { id: "c4", name: "Sports", slug: "sports", articleCount: 4 },
      { id: "c5", name: "Science", slug: "science", articleCount: 3 }
    ]);
    this.articles = signal([
      {
        id: "a1",
        title: "Open-source AI models close the gap with proprietary leaders in new benchmark",
        url: "https://example.com/ai-benchmark",
        sourceName: "The Verge",
        category: "Technology",
        categorySlug: "tech",
        publishedAt: this.minutesAgo(12),
        excerpt: "A fresh round of evaluations shows community-trained models matching flagship systems on reasoning and coding tasks, reshaping the cost calculus for startups."
      },
      {
        id: "a2",
        title: "Central banks signal a cautious path as inflation cools across major economies",
        url: "https://example.com/central-banks",
        sourceName: "Reuters",
        category: "Business",
        categorySlug: "business",
        publishedAt: this.minutesAgo(38),
        excerpt: "Policymakers hinted at gradual rate adjustments, balancing growth concerns against a softer but still-present price pressure."
      },
      {
        id: "a3",
        title: "Coastal cities unveil joint plan to fund climate-resilient infrastructure",
        url: "https://example.com/coastal-cities",
        sourceName: "BBC News",
        category: "World News",
        categorySlug: "world",
        publishedAt: this.minutesAgo(54),
        excerpt: "The coalition spans four continents and aims to pool financing for sea walls, drainage upgrades, and early-warning systems."
      },
      {
        id: "a4",
        title: "Underdogs stun defending champions in extra-time cup thriller",
        url: "https://example.com/cup-thriller",
        sourceName: "ESPN",
        category: "Sports",
        categorySlug: "sports",
        publishedAt: this.hoursAgo(2),
        excerpt: "A late equalizer forced overtime before a stoppage-time winner sent the away supporters into raptures."
      },
      {
        id: "a5",
        title: "Astronomers spot the most distant confirmed galaxy yet with new telescope data",
        url: "https://example.com/distant-galaxy",
        sourceName: "Nature",
        category: "Science",
        categorySlug: "science",
        publishedAt: this.hoursAgo(3),
        excerpt: "The observation pushes the cosmic frontier back further, offering a glimpse of star formation in the early universe."
      },
      {
        id: "a6",
        title: "Chipmaker unveils low-power processor aimed at on-device machine learning",
        url: "https://example.com/low-power-chip",
        sourceName: "Ars Technica",
        category: "Technology",
        categorySlug: "tech",
        publishedAt: this.hoursAgo(4),
        excerpt: "The new silicon promises longer battery life for laptops and phones while running inference workloads locally."
      },
      {
        id: "a7",
        title: "Diplomats reach framework agreement after marathon negotiation session",
        url: "https://example.com/framework-agreement",
        sourceName: "Associated Press",
        category: "World News",
        categorySlug: "world",
        publishedAt: this.hoursAgo(5),
        excerpt: "The tentative deal sets a timeline for further talks and eases tensions that had escalated over recent weeks."
      },
      {
        id: "a8",
        title: "Retail sales beat expectations as consumers keep spending on services",
        url: "https://example.com/retail-sales",
        sourceName: "Bloomberg",
        category: "Business",
        categorySlug: "business",
        publishedAt: this.hoursAgo(6),
        excerpt: "Analysts pointed to resilient demand for travel and dining even as goods purchases plateaued."
      },
      {
        id: "a9",
        title: "League announces expansion franchises in two new markets for next season",
        url: "https://example.com/league-expansion",
        sourceName: "The Athletic",
        category: "Sports",
        categorySlug: "sports",
        publishedAt: this.hoursAgo(7),
        excerpt: "The move adds thousands of seats and brings top-flight competition to fast-growing regions."
      },
      {
        id: "a10",
        title: "Researchers demonstrate a longer-lasting battery chemistry in the lab",
        url: "https://example.com/battery-chemistry",
        sourceName: "MIT Technology Review",
        category: "Science",
        categorySlug: "science",
        publishedAt: this.hoursAgo(8),
        excerpt: "Early results suggest improved energy density and cycle life, though scaling to production remains a challenge."
      },
      {
        id: "a11",
        title: "Major browser rolls out privacy feature blocking cross-site trackers by default",
        url: "https://example.com/browser-privacy",
        sourceName: "Wired",
        category: "Technology",
        categorySlug: "tech",
        publishedAt: this.hoursAgo(9),
        excerpt: "The change ships to all users this month and could reshape how advertisers measure campaigns."
      },
      {
        id: "a12",
        title: "Election observers report high turnout in closely watched regional vote",
        url: "https://example.com/regional-vote",
        sourceName: "Al Jazeera",
        category: "World News",
        categorySlug: "world",
        publishedAt: this.hoursAgo(11),
        excerpt: "Preliminary counts are expected overnight as monitors describe a largely peaceful process."
      },
      {
        id: "a13",
        title: "Startup raises fresh funding to expand its developer tooling platform",
        url: "https://example.com/startup-funding",
        sourceName: "TechCrunch",
        category: "Technology",
        categorySlug: "tech",
        publishedAt: this.hoursAgo(13),
        excerpt: "The round values the company higher than its last raise and will fuel hiring across engineering and sales."
      },
      {
        id: "a14",
        title: "Energy prices ease as supply concerns fade heading into shoulder season",
        url: "https://example.com/energy-prices",
        sourceName: "Financial Times",
        category: "Business",
        categorySlug: "business",
        publishedAt: this.hoursAgo(15),
        excerpt: "Milder weather and steady output combined to relieve pressure on wholesale markets."
      },
      {
        id: "a15",
        title: "National team names youthful squad ahead of continental tournament",
        url: "https://example.com/national-squad",
        sourceName: "Sky Sports",
        category: "Sports",
        categorySlug: "sports",
        publishedAt: this.hoursAgo(17),
        excerpt: "The manager leaned on emerging talent, signaling a rebuild after last cycle disappointments."
      },
      {
        id: "a16",
        title: "Cloud provider expands regional data centers to meet demand",
        url: "https://example.com/cloud-regions",
        sourceName: "ZDNet",
        category: "Technology",
        categorySlug: "tech",
        publishedAt: this.hoursAgo(19),
        excerpt: "New availability zones aim to reduce latency and satisfy data-residency requirements for enterprise clients."
      },
      {
        id: "a17",
        title: "Relief agencies scale up response following seasonal flooding",
        url: "https://example.com/flood-response",
        sourceName: "The Guardian",
        category: "World News",
        categorySlug: "world",
        publishedAt: this.hoursAgo(21),
        excerpt: "Thousands have been temporarily displaced as crews work to restore roads and power."
      },
      {
        id: "a18",
        title: "Manufacturer reports record quarterly output amid strong export demand",
        url: "https://example.com/manufacturing-output",
        sourceName: "CNBC",
        category: "Business",
        categorySlug: "business",
        publishedAt: this.hoursAgo(23),
        excerpt: "The results beat forecasts, though executives flagged rising input costs for the next quarter."
      },
      {
        id: "a19",
        title: "Marathon world record falls at a rain-soaked city event",
        url: "https://example.com/marathon-record",
        sourceName: "Runner\u2019s World",
        category: "Sports",
        categorySlug: "sports",
        publishedAt: this.hoursAgo(26),
        excerpt: "Perfect pacing and cool conditions produced a landmark time that stunned the running world."
      },
      {
        id: "a20",
        title: "New framework release focuses on faster builds and smaller bundles",
        url: "https://example.com/framework-release",
        sourceName: "InfoWorld",
        category: "Technology",
        categorySlug: "tech",
        publishedAt: this.hoursAgo(28),
        excerpt: "Maintainers highlighted incremental compilation and tree-shaking improvements in the headline update."
      },
      {
        id: "a21",
        title: "Summit closes with pledges on trade cooperation and supply chains",
        url: "https://example.com/summit-pledges",
        sourceName: "Reuters",
        category: "World News",
        categorySlug: "world",
        publishedAt: this.hoursAgo(30),
        excerpt: "Leaders committed to reduce bottlenecks and coordinate on critical mineral sourcing."
      },
      {
        id: "a22",
        title: "Deep-sea mission catalogs dozens of previously unrecorded species",
        url: "https://example.com/deep-sea-mission",
        sourceName: "National Geographic",
        category: "Science",
        categorySlug: "science",
        publishedAt: this.hoursAgo(33),
        excerpt: "The expedition\u2019s findings could inform conservation policy for fragile ocean habitats."
      },
      {
        id: "a23",
        title: "Small businesses report cautious optimism in latest sentiment survey",
        url: "https://example.com/business-sentiment",
        sourceName: "Bloomberg",
        category: "Business",
        categorySlug: "business",
        publishedAt: this.hoursAgo(36),
        excerpt: "Owners cited easing hiring pressures but remained wary about borrowing costs."
      },
      {
        id: "a24",
        title: "Open data initiative publishes transit datasets for public use",
        url: "https://example.com/open-data-transit",
        sourceName: "The Verge",
        category: "Technology",
        categorySlug: "tech",
        publishedAt: this.hoursAgo(40),
        excerpt: "Developers can now build apps on real-time schedules released under a permissive license."
      },
      {
        id: "a25",
        title: "Cross-border rail link reopens after months of maintenance",
        url: "https://example.com/rail-link",
        sourceName: "BBC News",
        category: "World News",
        categorySlug: "world",
        publishedAt: this.hoursAgo(44),
        excerpt: "Commuters welcomed the restored service, which cuts journey times between the two capitals."
      }
    ]);
    this.activeCategory = toSignal(this.route.queryParams.pipe(map((p) => p["category"] ?? null)), { initialValue: null });
    this.currentPage = toSignal(this.route.queryParams.pipe(map((p) => Math.max(1, Number(p["page"]) || 1))), { initialValue: 1 });
    this.activeCategoryName = computed(() => this.activeCategory());
    this.filtered = computed(() => {
      const cat = this.activeCategory();
      const all = this.articles();
      return cat ? all.filter((a) => a.category === cat) : all;
    });
    this.totalCount = computed(() => this.filtered().length);
    this.totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / PAGE_SIZE)));
    this.page = computed(() => Math.min(this.currentPage(), this.totalPages()));
    this.pagedArticles = computed(() => {
      const start = (this.page() - 1) * PAGE_SIZE;
      return this.filtered().slice(start, start + PAGE_SIZE);
    });
  }
  onCategorySelect(name) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: name, page: null },
      queryParamsHandling: "merge"
    });
  }
  onPageChange(page) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page === 1 ? null : page },
      queryParamsHandling: "merge"
    });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  minutesAgo(mins) {
    return new Date(Date.now() - mins * 6e4).toISOString();
  }
  hoursAgo(hours) {
    return new Date(Date.now() - hours * 36e5).toISOString();
  }
  static {
    this.\u0275fac = function FeedComponent_Factory(t) {
      return new (t || _FeedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedComponent, selectors: [["app-feed"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 7, consts: [[1, "page"], [1, "site-header"], [1, "site-header-inner"], ["routerLink", "/", 1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "brand-name"], ["routerLink", "/admin/login", 1, "admin-link"], [1, "content"], [1, "hero"], [1, "hero-kicker"], [1, "hero-title"], [1, "hero-sub"], [1, "filter-bar"], [3, "select", "categories", "active"], [1, "result-meta"], [1, "result-page"], [1, "site-footer"], [3, "articles"], [1, "pager"], [3, "pageChange", "page", "totalPages"], ["title", "No articles here yet", 3, "message"]], template: function FeedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
        \u0275\u0275text(5, "\u25B2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, "Newswire");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "a", 6);
        \u0275\u0275text(9, "Admin");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "main", 7)(11, "section", 8)(12, "p", 9);
        \u0275\u0275text(13, "Latest headlines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "h1", 10);
        \u0275\u0275text(15, "Your feeds, gathered in one place");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 11);
        \u0275\u0275text(17, " Fresh articles pulled from across the web \u2014 filter by topic and keep up with what matters. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 12)(19, "app-category-filter", 13);
        \u0275\u0275listener("select", function FeedComponent_Template_app_category_filter_select_19_listener($event) {
          return ctx.onCategorySelect($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 14)(21, "span");
        \u0275\u0275text(22);
        \u0275\u0275template(23, FeedComponent_Conditional_23_Template, 3, 1, "strong");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, FeedComponent_Conditional_24_Template, 2, 2, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, FeedComponent_Conditional_25_Template, 3, 3)(26, FeedComponent_Conditional_26_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "footer", 16)(28, "span");
        \u0275\u0275text(29, "Newswire \xB7 A news aggregator");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275property("categories", ctx.categories())("active", ctx.activeCategoryName());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", ctx.totalCount(), " article", ctx.totalCount() === 1 ? "" : "s", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(23, ctx.activeCategoryName() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(24, ctx.totalPages() > 1 ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(25, ctx.pagedArticles().length > 0 ? 25 : 26);
      }
    }, dependencies: [
      RouterLink,
      CategoryFilterComponent,
      ArticleListComponent,
      PaginationComponent,
      EmptyStateComponent
    ], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.site-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: var(--color-navy);\n  color: var(--color-text-on-dark);\n  box-shadow: var(--shadow-sm);\n}\n.site-header-inner[_ngcontent-%COMP%] {\n  max-width: var(--content-max);\n  margin: 0 auto;\n  height: var(--header-height);\n  padding: 0 var(--space-5);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: 1.1rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: var(--text-xl);\n  font-weight: var(--font-bold);\n  letter-spacing: -0.01em;\n}\n.admin-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 0 var(--space-4);\n  border-radius: var(--radius-md);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  color: var(--color-text-on-dark);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  transition: background var(--transition-fast);\n}\n.admin-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  max-width: var(--content-max);\n  margin: 0 auto;\n  padding: var(--space-6) var(--space-5) var(--space-8);\n}\n.hero[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.hero-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n  font-size: var(--text-xs);\n  font-weight: var(--font-bold);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--color-primary);\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: var(--text-3xl);\n  font-weight: var(--font-bold);\n  letter-spacing: -0.02em;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 0;\n  color: var(--color-text-muted);\n  max-width: 56ch;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: var(--header-height);\n  z-index: 10;\n  background: var(--color-bg);\n  padding: var(--space-3) 0;\n  margin-bottom: var(--space-2);\n}\n.result-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n  font-size: var(--text-sm);\n  color: var(--color-text-muted);\n}\n.result-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.result-page[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n}\n.pager[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n}\n.site-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding: var(--space-5);\n  text-align: center;\n  font-size: var(--text-sm);\n  color: var(--color-text-faint);\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: var(--space-5) var(--space-4) var(--space-8);\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: var(--text-2xl);\n  }\n}\n/*# sourceMappingURL=feed.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedComponent, { className: "FeedComponent", filePath: "src/app/features/feed/feed.component.ts", lineNumber: 26 });
})();
export {
  FeedComponent
};
//# sourceMappingURL=feed.component-SQGCEWH2.js.map
