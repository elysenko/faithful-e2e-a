import {
  EmptyStateComponent,
  toSignal
} from "./chunk-RTWI72Z5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BB2CFAA3.js";
import {
  CategoryChipComponent
} from "./chunk-VOV5DTNJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NK42F6RC.js";

// src/app/features/admin-sources/admin-sources.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminSourcesComponent_Conditional_12_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u25CF Active");
    \u0275\u0275elementEnd();
  }
}
function AdminSourcesComponent_Conditional_12_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\u25CF Inactive");
    \u0275\u0275elementEnd();
  }
}
function AdminSourcesComponent_Conditional_12_For_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", s_r2.lastError, "");
  }
}
function AdminSourcesComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275element(3, "app-category-chip", 14);
    \u0275\u0275template(4, AdminSourcesComponent_Conditional_12_For_3_Conditional_4_Template, 2, 0, "span", 15)(5, AdminSourcesComponent_Conditional_12_For_3_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 18);
    \u0275\u0275text(12, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, AdminSourcesComponent_Conditional_12_For_3_Conditional_15_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 20);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_12_For_3_Template_button_click_16_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSource(s_r2.id));
    });
    \u0275\u0275text(17, "Delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inactive", !s_r2.active);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", s_r2.category);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, s_r2.active ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", s_r2.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", s_r2.articleCount, " articles");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("fetched ", ctx_r2.relativeTime(s_r2.lastFetchedAt), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(15, s_r2.lastError ? 15 : -1);
  }
}
function AdminSourcesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "ul", 9);
    \u0275\u0275repeaterCreate(2, AdminSourcesComponent_Conditional_12_For_3_Template, 18, 9, "li", 10, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.sources());
  }
}
function AdminSourcesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "app-empty-state", 23)(2, "button", 5);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAddModal());
    });
    \u0275\u0275text(3, "+ Add source");
    \u0275\u0275elementEnd()()();
  }
}
function AdminSourcesComponent_Conditional_14_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("value", c_r6.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.name);
  }
}
function AdminSourcesComponent_Conditional_14_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.submitError);
  }
}
function AdminSourcesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 26)(3, "h2");
    \u0275\u0275text(4, "Add source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 28);
    \u0275\u0275listener("ngSubmit", function AdminSourcesComponent_Conditional_14_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addSource());
    });
    \u0275\u0275elementStart(8, "div", 29)(9, "label", 30);
    \u0275\u0275text(10, "Feed URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSourcesComponent_Conditional_14_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newUrl, $event) || (ctx_r2.newUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 29)(13, "label", 32);
    \u0275\u0275text(14, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSourcesComponent_Conditional_14_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCategory, $event) || (ctx_r2.newCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 34);
    \u0275\u0275text(17, "Select a category\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, AdminSourcesComponent_Conditional_14_For_19_Template, 2, 2, "option", 35, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, AdminSourcesComponent_Conditional_14_Conditional_20_Template, 2, 1, "div", 36);
    \u0275\u0275elementStart(21, "p", 37);
    \u0275\u0275text(22, "The feed is validated for reachability before it is saved.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 38)(24, "button", 39);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_14_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(25, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 40);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCategory);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.categories());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(20, ctx_r2.submitError ? 20 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.submitting ? "Validating\u2026" : "Add source", " ");
  }
}
function AdminSourcesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.toast());
  }
}
var AdminSourcesComponent = class _AdminSourcesComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.sources = signal([
      { id: "s1", url: "https://techcrunch.com/feed/", category: "Tech", active: true, lastFetchedAt: this.minsAgo(3), lastError: null, articleCount: 128 },
      { id: "s2", url: "https://www.espn.com/espn/rss/news", category: "Sports", active: true, lastFetchedAt: this.minsAgo(4), lastError: null, articleCount: 96 },
      { id: "s3", url: "https://feeds.reuters.com/reuters/worldNews", category: "World News", active: true, lastFetchedAt: this.minsAgo(2), lastError: null, articleCount: 210 },
      { id: "s4", url: "https://www.wired.com/feed/rss", category: "Tech", active: true, lastFetchedAt: this.minsAgo(6), lastError: null, articleCount: 74 },
      { id: "s5", url: "https://example.com/broken/feed.xml", category: "Business", active: false, lastFetchedAt: this.minsAgo(52), lastError: "ECONNREFUSED \u2014 host unreachable at last poll", articleCount: 0 }
    ]);
    this.categories = signal([
      { id: "c1", name: "Tech", sourceCount: 2, articleCount: 202 },
      { id: "c2", name: "Sports", sourceCount: 1, articleCount: 96 },
      { id: "c3", name: "World News", sourceCount: 1, articleCount: 210 },
      { id: "c4", name: "Business", sourceCount: 1, articleCount: 0 },
      { id: "c5", name: "Science", sourceCount: 0, articleCount: 0 }
    ]);
    this.modalOpen = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("modal") === "add-source")), { initialValue: false });
    this.newUrl = "";
    this.newCategory = "";
    this.submitError = "";
    this.submitting = false;
    this.refreshing = signal(false);
    this.toast = signal("");
    this.hasSources = computed(() => this.sources().length > 0);
  }
  openAddModal() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: "add-source" },
      queryParamsHandling: "merge"
    });
  }
  closeModal() {
    this.submitError = "";
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: null },
      queryParamsHandling: "merge"
    });
  }
  addSource() {
    this.submitError = "";
    const url = this.newUrl.trim();
    if (!url || !this.newCategory) {
      this.submitError = "Please enter a feed URL and choose a category.";
      return;
    }
    this.submitting = true;
    const looksValid = /^https?:\/\/.+/i.test(url) && !/broken|invalid/i.test(url);
    if (!looksValid) {
      this.submitting = false;
      this.submitError = "422 \u2014 URL is not a reachable RSS/Atom feed. Source was not saved.";
      return;
    }
    const created = {
      id: "new-" + this.sources().length,
      url,
      category: this.newCategory,
      active: true,
      lastFetchedAt: null,
      lastError: null,
      articleCount: 0
    };
    this.sources.update((list) => [created, ...list]);
    this.submitting = false;
    this.newUrl = "";
    this.newCategory = "";
    this.showToast("Source added \u2014 initial fetch enqueued.");
    this.closeModal();
  }
  deleteSource(id) {
    this.sources.update((list) => list.filter((s) => s.id !== id));
    this.showToast("Source removed. Existing articles were retained.");
  }
  refreshAll() {
    this.refreshing.set(true);
    this.showToast("Refresh queued for all active feeds (202 Accepted).");
    setTimeout(() => this.refreshing.set(false), 1200);
  }
  relativeTime(iso) {
    if (!iso)
      return "never";
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
  showToast(msg) {
    this.toast.set(msg);
    setTimeout(() => this.toast.set(""), 2600);
  }
  minsAgo(m) {
    return new Date(Date.now() - m * 6e4).toISOString();
  }
  static {
    this.\u0275fac = function AdminSourcesComponent_Factory(t) {
      return new (t || _AdminSourcesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSourcesComponent, selectors: [["app-admin-sources"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 6, consts: [[1, "admin-page"], [1, "page-head"], [1, "sub"], [1, "head-actions"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click"], [1, "card", "table-wrap"], [1, "modal-backdrop"], [1, "toast"], [1, "rows"], [1, "row", 3, "inactive"], [1, "row"], [1, "row-main"], [1, "row-top"], [3, "name"], [1, "status", "ok"], ["target", "_blank", "rel", "noopener", 1, "url", 3, "href"], [1, "row-meta"], [1, "dot"], [1, "row-error"], [1, "btn", "btn-danger", "row-del", 3, "click"], [1, "status", "off"], [1, "card"], ["icon", "\u{1F6F0}\uFE0F", "title", "No sources yet", "message", "Add your first RSS or Atom feed to start collecting articles."], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-head"], ["aria-label", "Close", 1, "modal-close", 3, "click"], [3, "ngSubmit"], [1, "field"], ["for", "url"], ["id", "url", "type", "url", "name", "url", "placeholder", "https://example.com/feed.xml", "autocomplete", "off", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "cat"], ["id", "cat", "name", "cat", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value"], [1, "banner", "error-banner"], [1, "hint"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function AdminSourcesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Sources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "button", 4);
        \u0275\u0275listener("click", function AdminSourcesComponent_Template_button_click_8_listener() {
          return ctx.refreshAll();
        });
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275listener("click", function AdminSourcesComponent_Template_button_click_10_listener() {
          return ctx.openAddModal();
        });
        \u0275\u0275text(11, "+ Add source");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, AdminSourcesComponent_Conditional_12_Template, 4, 0, "div", 6)(13, AdminSourcesComponent_Conditional_13_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, AdminSourcesComponent_Conditional_14_Template, 28, 5, "div", 7)(15, AdminSourcesComponent_Conditional_15_Template, 2, 1, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("RSS / Atom feeds polled on a schedule. ", ctx.sources().length, " configured.");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.refreshing());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.refreshing() ? "Refreshing\u2026" : "\u21BB Refresh all", " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(12, ctx.hasSources() ? 12 : 13);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(14, ctx.modalOpen() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.toast() ? 15 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CategoryChipComponent, EmptyStateComponent], styles: ["\n\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  padding: var(--sp-2) var(--sp-4);\n}\n.rows[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--sp-3);\n  padding: var(--sp-4) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.row.inactive[_ngcontent-%COMP%] {\n  opacity: 0.72;\n}\n.row-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.row-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  margin-bottom: var(--sp-2);\n}\n.status[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  font-weight: 600;\n}\n.status.ok[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.status.off[_ngcontent-%COMP%] {\n  color: var(--color-text-subtle);\n}\n.url[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-text);\n  word-break: break-all;\n}\n.url[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n.row-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  margin-top: var(--sp-1);\n  font-size: var(--fs-xs);\n  color: var(--color-text-subtle);\n}\n.row-meta[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: var(--color-border-strong);\n}\n.row-error[_ngcontent-%COMP%] {\n  margin-top: var(--sp-2);\n  padding: var(--sp-2) var(--sp-3);\n  border-radius: var(--radius-sm);\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n  font-size: var(--fs-xs);\n}\n.row-del[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n@media (max-width: 560px) {\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .row-del[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n}\n/*# sourceMappingURL=admin-sources.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSourcesComponent, { className: "AdminSourcesComponent", filePath: "src/app/features/admin-sources/admin-sources.component.ts", lineNumber: 18 });
})();
export {
  AdminSourcesComponent
};
//# sourceMappingURL=admin-sources.component-ZP7T32BW.js.map
