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
  ɵNgNoValidate
} from "./chunk-BFQPTTOK.js";
import {
  ActivatedRoute,
  Router,
  computed,
  inject,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QZ7UG3YY.js";

// src/app/features/admin/categories/admin-categories.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminCategoriesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 9);
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.deleteError(), " ");
  }
}
function AdminCategoriesComponent_For_12_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Delete?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 15);
    \u0275\u0275listener("click", function AdminCategoriesComponent_For_12_Conditional_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const cat_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDelete(cat_r3.id));
    });
    \u0275\u0275text(3, "Yes, delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function AdminCategoriesComponent_For_12_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelDelete());
    });
    \u0275\u0275text(5, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function AdminCategoriesComponent_For_12_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AdminCategoriesComponent_For_12_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const cat_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.askDelete(cat_r3));
    });
    \u0275\u0275text(1, "\u{1F5D1}");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("title", cat_r3.sourceCount > 0 ? "In use by sources \u2014 cannot delete" : "Delete category");
  }
}
function AdminCategoriesComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "div", 10)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 12);
    \u0275\u0275text(8, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275template(12, AdminCategoriesComponent_For_12_Conditional_12_Template, 6, 0)(13, AdminCategoriesComponent_For_12_Conditional_13_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("chip chip-cat ", ctx_r0.catClass(cat_r3.slug), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", cat_r3.articleCount, " articles");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", cat_r3.sourceCount, " source", cat_r3.sourceCount === 1 ? "" : "s", "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, ctx_r0.pendingDeleteId() === cat_r3.id ? 12 : 13);
  }
}
function AdminCategoriesComponent_Conditional_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 9);
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formError(), " ");
  }
}
function AdminCategoriesComponent_Conditional_13_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 32);
    \u0275\u0275text(1, " Saving\u2026 ");
  }
}
function AdminCategoriesComponent_Conditional_13_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Add category ");
  }
}
function AdminCategoriesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function AdminCategoriesComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275listener("click", function AdminCategoriesComponent_Conditional_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "h2", 21);
    \u0275\u0275text(4, "Add category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function AdminCategoriesComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "form", 24);
    \u0275\u0275listener("ngSubmit", function AdminCategoriesComponent_Conditional_13_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitAdd());
    });
    \u0275\u0275template(9, AdminCategoriesComponent_Conditional_13_Conditional_9_Template, 4, 1, "div", 5);
    \u0275\u0275elementStart(10, "div", 25)(11, "label", 26);
    \u0275\u0275text(12, "Category name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCategoriesComponent_Conditional_13_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 28);
    \u0275\u0275text(15, "Names must be unique across the aggregator.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 29)(17, "button", 30);
    \u0275\u0275listener("click", function AdminCategoriesComponent_Conditional_13_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 31);
    \u0275\u0275template(20, AdminCategoriesComponent_Conditional_13_Conditional_20_Template, 2, 0)(21, AdminCategoriesComponent_Conditional_13_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(9, ctx_r0.formError() ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.name);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.submitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(20, ctx_r0.submitting() ? 20 : 21);
  }
}
var AdminCategoriesComponent = class _AdminCategoriesComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.categories = signal([
      { id: "c1", name: "Technology", slug: "tech", articleCount: 128, sourceCount: 3 },
      { id: "c2", name: "World News", slug: "world", articleCount: 156, sourceCount: 2 },
      { id: "c3", name: "Business", slug: "business", articleCount: 94, sourceCount: 1 },
      { id: "c4", name: "Sports", slug: "sports", articleCount: 41, sourceCount: 1 },
      { id: "c5", name: "Science", slug: "science", articleCount: 63, sourceCount: 1 },
      { id: "c6", name: "Culture", slug: "default", articleCount: 0, sourceCount: 0 }
    ]);
    this.modalParam = toSignal(this.route.queryParams.pipe(map((p) => p["modal"] ?? null)), { initialValue: null });
    this.showAddModal = computed(() => this.modalParam() === "add-category");
    this.form = { name: "" };
    this.formError = signal(null);
    this.submitting = signal(false);
    this.pendingDeleteId = signal(null);
    this.deleteError = signal(null);
  }
  openAdd() {
    this.formError.set(null);
    this.form = { name: "" };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: "add-category" },
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
    if (!name) {
      this.formError.set("Category name is required.");
      return;
    }
    const dup = this.categories().some((c) => c.name.toLowerCase() === name.toLowerCase());
    if (dup) {
      this.formError.set(`409 \u2014 A category named \u201C${name}\u201D already exists.`);
      return;
    }
    this.submitting.set(true);
    setTimeout(() => {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      this.categories.update((list) => [
        ...list,
        { id: "c" + (list.length + 1), name, slug: slug || "default", articleCount: 0, sourceCount: 0 }
      ]);
      this.submitting.set(false);
      this.closeModal();
    }, 600);
  }
  askDelete(cat) {
    this.deleteError.set(null);
    if (cat.sourceCount > 0) {
      this.deleteError.set(`409 \u2014 \u201C${cat.name}\u201D is used by ${cat.sourceCount} source(s). Reassign or remove them first.`);
      this.pendingDeleteId.set(null);
      return;
    }
    this.pendingDeleteId.set(cat.id);
  }
  cancelDelete() {
    this.pendingDeleteId.set(null);
  }
  confirmDelete(id) {
    this.categories.update((list) => list.filter((c) => c.id !== id));
    this.pendingDeleteId.set(null);
  }
  catClass(slug) {
    const known = ["tech", "sports", "world", "business", "science"];
    return known.includes(slug) ? `cat-${slug}` : "cat-default";
  }
  static {
    this.\u0275fac = function AdminCategoriesComponent_Factory(t) {
      return new (t || _AdminCategoriesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCategoriesComponent, selectors: [["app-admin-categories"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 2, consts: [[1, "admin-page"], [1, "page-head"], [1, "page-title"], [1, "page-sub"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["role", "alert", 1, "banner", "banner-error"], [1, "cat-list"], [1, "cat-row", "card"], [1, "modal-overlay"], ["aria-hidden", "true", 1, "banner-icon"], [1, "cat-info"], [1, "cat-meta"], [1, "dot-sep"], [1, "cat-actions"], [1, "confirm-text"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "button", "aria-label", "Delete category", 1, "btn", "btn-ghost", "btn-sm", "icon-only", 3, "click"], [1, "modal-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "add-cat-title", 1, "modal", 3, "click"], [1, "modal-head"], ["id", "add-cat-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "modal-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-row"], ["for", "cat-name", 1, "field-label"], ["id", "cat-name", "type", "text", "name", "name", "placeholder", "e.g. Culture", 1, "text-input", 3, "ngModelChange", "ngModel"], [1, "field-hint"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["aria-hidden", "true", 1, "spinner"]], template: function AdminCategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Topics used to tag sources and filter the public feed.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function AdminCategoriesComponent_Template_button_click_7_listener() {
          return ctx.openAdd();
        });
        \u0275\u0275text(8, "\uFF0B Add category");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, AdminCategoriesComponent_Conditional_9_Template, 4, 1, "div", 5);
        \u0275\u0275elementStart(10, "ul", 6);
        \u0275\u0275repeaterCreate(11, AdminCategoriesComponent_For_12_Template, 14, 8, "li", 7, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, AdminCategoriesComponent_Conditional_13_Template, 22, 4, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(9, ctx.deleteError() ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(13, ctx.showAddModal() ? 13 : -1);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.cat-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--space-3);\n}\n.cat-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  padding: var(--space-4);\n}\n.cat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  min-width: 0;\n}\n.cat-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-size: var(--text-xs);\n  color: var(--color-text-muted);\n}\n.dot-sep[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n}\n.cat-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.icon-only[_ngcontent-%COMP%] {\n  min-width: 40px;\n  padding: 0;\n}\n.confirm-text[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  font-weight: var(--font-semibold);\n  color: var(--color-danger);\n}\n/*# sourceMappingURL=admin-categories.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCategoriesComponent, { className: "AdminCategoriesComponent", filePath: "src/app/features/admin/categories/admin-categories.component.ts", lineNumber: 20 });
})();
export {
  AdminCategoriesComponent
};
//# sourceMappingURL=admin-categories.component-6DLEQRJ3.js.map
