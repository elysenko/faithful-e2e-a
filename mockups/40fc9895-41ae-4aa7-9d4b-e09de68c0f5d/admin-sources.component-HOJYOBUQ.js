import {
  toSignal
} from "./chunk-6OHENYWF.js";
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
} from "./chunk-BFQPTTOK.js";
import {
  ActivatedRoute,
  Router,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  map,
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
} from "./chunk-QZ7UG3YY.js";

// src/app/features/admin/sources/admin-sources.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminSourcesComponent_Conditional_9_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Paused");
    \u0275\u0275elementEnd();
  }
}
function AdminSourcesComponent_Conditional_9_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 18);
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const source_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", source_r1.lastError, " ");
  }
}
function AdminSourcesComponent_Conditional_9_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "Delete?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 20);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_9_For_2_Conditional_20_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const source_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDelete(source_r1.id));
    });
    \u0275\u0275text(3, "Yes, delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_9_For_2_Conditional_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelDelete());
    });
    \u0275\u0275text(5, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function AdminSourcesComponent_Conditional_9_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_9_For_2_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const source_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleActive(source_r1.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 23);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_9_For_2_Conditional_21_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const source_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.askDelete(source_r1.id));
    });
    \u0275\u0275text(3, "\u{1F5D1}");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const source_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", source_r1.active ? "Pause" : "Resume", " ");
  }
}
function AdminSourcesComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275element(3, "span", 10);
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminSourcesComponent_Conditional_9_For_2_Conditional_8_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 15);
    \u0275\u0275text(15, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, AdminSourcesComponent_Conditional_9_For_2_Conditional_18_Template, 4, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 17);
    \u0275\u0275template(20, AdminSourcesComponent_Conditional_9_For_2_Conditional_20_Template, 6, 0)(21, AdminSourcesComponent_Conditional_9_For_2_Conditional_21_Template, 4, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const source_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ok", !source_r1.lastError && source_r1.active)("err", !!source_r1.lastError)("off", !source_r1.active && !source_r1.lastError);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(source_r1.name);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("chip chip-cat cat-", source_r1.categorySlug, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(source_r1.category);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, !source_r1.active ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("href", source_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(source_r1.url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", source_r1.articleCount, " articles");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Fetched ", ctx_r2.timeAgo(source_r1.lastFetchedAt), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(18, source_r1.lastError ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(20, ctx_r2.pendingDeleteId() === source_r1.id ? 20 : 21);
  }
}
function AdminSourcesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 5);
    \u0275\u0275repeaterCreate(1, AdminSourcesComponent_Conditional_9_For_2_Template, 22, 18, "li", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.sources());
  }
}
function AdminSourcesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "p");
    \u0275\u0275text(2, "No sources yet. Add your first RSS or Atom feed to start collecting articles.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAdd());
    });
    \u0275\u0275text(4, "\uFF0B Add source");
    \u0275\u0275elementEnd()();
  }
}
function AdminSourcesComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 45);
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formError(), " ");
  }
}
function AdminSourcesComponent_Conditional_11_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    \u0275\u0275property("value", cat_r7.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r7.name);
  }
}
function AdminSourcesComponent_Conditional_11_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 46);
    \u0275\u0275text(1, " Validating\u2026 ");
  }
}
function AdminSourcesComponent_Conditional_11_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Add source ");
  }
}
function AdminSourcesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "h2", 28);
    \u0275\u0275text(4, "Add feed source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "form", 31);
    \u0275\u0275listener("ngSubmit", function AdminSourcesComponent_Conditional_11_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitAdd());
    });
    \u0275\u0275template(9, AdminSourcesComponent_Conditional_11_Conditional_9_Template, 4, 1, "div", 32);
    \u0275\u0275elementStart(10, "div", 33)(11, "label", 34);
    \u0275\u0275text(12, "Display name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSourcesComponent_Conditional_11_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 33)(15, "label", 36);
    \u0275\u0275text(16, "Feed URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSourcesComponent_Conditional_11_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.url, $event) || (ctx_r2.form.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 38);
    \u0275\u0275text(19, "The feed is validated by fetching and parsing it before saving.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 33)(21, "label", 39);
    \u0275\u0275text(22, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSourcesComponent_Conditional_11_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.category, $event) || (ctx_r2.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(24, AdminSourcesComponent_Conditional_11_For_25_Template, 2, 2, "option", 41, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 42)(27, "button", 43);
    \u0275\u0275listener("click", function AdminSourcesComponent_Conditional_11_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(28, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 44);
    \u0275\u0275template(30, AdminSourcesComponent_Conditional_11_Conditional_30_Template, 2, 0)(31, AdminSourcesComponent_Conditional_11_Conditional_31_Template, 1, 0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(9, ctx_r2.formError() ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.url);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.category);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.categories());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.submitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(30, ctx_r2.submitting() ? 30 : 31);
  }
}
var AdminSourcesComponent = class _AdminSourcesComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
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
    this.modalParam = toSignal(this.route.queryParams.pipe(map((p) => p["modal"] ?? null)), { initialValue: null });
    this.showAddModal = computed(() => this.modalParam() === "add-source");
    this.form = { name: "", url: "", category: "" };
    this.formError = signal(null);
    this.submitting = signal(false);
    this.pendingDeleteId = signal(null);
  }
  openAdd() {
    this.formError.set(null);
    this.form = { name: "", url: "", category: this.categories()[0]?.name ?? "" };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: "add-source" },
      queryParamsHandling: "merge"
    });
  }
  closeModal() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: null },
      queryParamsHandling: "merge"
    });
  }
  submitAdd() {
    this.formError.set(null);
    const name = this.form.name.trim();
    const url = this.form.url.trim();
    const category = this.form.category;
    if (!name || !url || !category) {
      this.formError.set("All fields are required.");
      return;
    }
    if (!/^https?:\/\/.+\..+/.test(url)) {
      this.formError.set("422 \u2014 That URL could not be reached or is not a valid RSS/Atom feed.");
      return;
    }
    this.submitting.set(true);
    setTimeout(() => {
      const cat = this.categories().find((c) => c.name === category);
      const newSource = {
        id: "s" + (this.sources().length + 1),
        name,
        url,
        category,
        categorySlug: cat?.slug ?? "default",
        active: true,
        lastFetchedAt: null,
        lastError: null,
        articleCount: 0
      };
      this.sources.update((list) => [newSource, ...list]);
      this.submitting.set(false);
      this.closeModal();
    }, 700);
  }
  askDelete(id) {
    this.pendingDeleteId.set(id);
  }
  cancelDelete() {
    this.pendingDeleteId.set(null);
  }
  confirmDelete(id) {
    this.sources.update((list) => list.filter((s) => s.id !== id));
    this.pendingDeleteId.set(null);
  }
  toggleActive(id) {
    this.sources.update((list) => list.map((s) => s.id === id ? __spreadProps(__spreadValues({}, s), { active: !s.active }) : s));
  }
  timeAgo(iso) {
    if (!iso)
      return "never fetched";
    const mins = Math.round((Date.now() - new Date(iso).getTime()) / 6e4);
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
    this.\u0275fac = function AdminSourcesComponent_Factory(t) {
      return new (t || _AdminSourcesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSourcesComponent, selectors: [["app-admin-sources"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "admin-page"], [1, "page-head"], [1, "page-title"], [1, "page-sub"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "source-list"], [1, "modal-overlay"], [1, "source-row", "card"], [1, "source-info"], [1, "source-line1"], [1, "status-dot"], [1, "source-name"], [1, "chip", "chip-paused"], ["target", "_blank", "rel", "noopener noreferrer", 1, "source-url", 3, "href"], [1, "source-meta"], [1, "dot-sep"], [1, "source-error"], [1, "source-actions"], ["aria-hidden", "true"], [1, "confirm-text"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["type", "button", "aria-label", "Delete source", 1, "btn", "btn-ghost", "btn-sm", "icon-only", 3, "click"], [1, "empty-block", "card"], [1, "modal-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "add-source-title", 1, "modal", 3, "click"], [1, "modal-head"], ["id", "add-source-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "modal-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], ["role", "alert", 1, "banner", "banner-error"], [1, "form-row"], ["for", "src-name", 1, "field-label"], ["id", "src-name", "type", "text", "name", "name", "placeholder", "e.g. The Verge", 1, "text-input", 3, "ngModelChange", "ngModel"], ["for", "src-url", 1, "field-label"], ["id", "src-url", "type", "url", "name", "url", "placeholder", "https://example.com/rss.xml", 1, "text-input", 3, "ngModelChange", "ngModel"], [1, "field-hint"], ["for", "src-cat", 1, "field-label"], ["id", "src-cat", "name", "category", 1, "text-input", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["aria-hidden", "true", 1, "banner-icon"], ["aria-hidden", "true", 1, "spinner"]], template: function AdminSourcesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Sources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "RSS and Atom feeds the aggregator polls for new articles.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function AdminSourcesComponent_Template_button_click_7_listener() {
          return ctx.openAdd();
        });
        \u0275\u0275text(8, "\uFF0B Add source");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, AdminSourcesComponent_Conditional_9_Template, 3, 0, "ul", 5)(10, AdminSourcesComponent_Conditional_10_Template, 5, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, AdminSourcesComponent_Conditional_11_Template, 32, 6, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(9, ctx.sources().length > 0 ? 9 : 10);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.showAddModal() ? 11 : -1);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.source-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: var(--space-3);\n}\n.source-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-4);\n}\n.source-info[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.source-line1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-1);\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  flex: 0 0 9px;\n  border-radius: 50%;\n  background: var(--color-border-strong);\n}\n.status-dot.ok[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.status-dot.err[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n}\n.status-dot.off[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n}\n.source-name[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold);\n  font-size: var(--text-base);\n}\n.chip-paused[_ngcontent-%COMP%] {\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n}\n.source-url[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--text-xs);\n  color: var(--color-info);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.source-url[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.source-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-top: var(--space-2);\n  font-size: var(--text-xs);\n  color: var(--color-text-muted);\n}\n.dot-sep[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n}\n.source-error[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-sm);\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  font-size: var(--text-xs);\n  font-weight: var(--font-medium);\n}\n.source-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.icon-only[_ngcontent-%COMP%] {\n  min-width: 40px;\n  padding: 0;\n}\n.confirm-text[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  font-weight: var(--font-semibold);\n  color: var(--color-danger);\n}\n.empty-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-4);\n  padding: var(--space-8) var(--space-4);\n  text-align: center;\n  color: var(--color-text-muted);\n}\n@media (max-width: 768px) {\n  .source-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .source-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=admin-sources.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSourcesComponent, { className: "AdminSourcesComponent", filePath: "src/app/features/admin/sources/admin-sources.component.ts", lineNumber: 15 });
})();
export {
  AdminSourcesComponent
};
//# sourceMappingURL=admin-sources.component-HOJYOBUQ.js.map
