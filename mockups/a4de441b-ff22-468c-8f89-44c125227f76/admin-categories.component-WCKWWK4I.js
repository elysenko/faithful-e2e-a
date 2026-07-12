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
  ɵNgNoValidate
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NK42F6RC.js";

// src/app/features/admin-categories/admin-categories.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminCategoriesComponent_Conditional_9_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.rowError().message);
  }
}
function AdminCategoriesComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "app-category-chip", 9);
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function AdminCategoriesComponent_Conditional_9_For_2_Template_button_click_3_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteCategory(c_r2));
    });
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12)(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275text(10, "sources");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 12)(12, "span", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 14);
    \u0275\u0275text(15, "articles");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, AdminCategoriesComponent_Conditional_9_For_2_Conditional_16_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", c_r2.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r2.sourceCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.articleCount);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(16, ctx_r2.rowError() && ctx_r2.rowError().id === c_r2.id ? 16 : -1);
  }
}
function AdminCategoriesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, AdminCategoriesComponent_Conditional_9_For_2_Template, 17, 4, "div", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.categories());
  }
}
function AdminCategoriesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "app-empty-state", 17)(2, "button", 3);
    \u0275\u0275listener("click", function AdminCategoriesComponent_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAddModal());
    });
    \u0275\u0275text(3, "+ Add category");
    \u0275\u0275elementEnd()()();
  }
}
function AdminCategoriesComponent_Conditional_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.submitError);
  }
}
function AdminCategoriesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function AdminCategoriesComponent_Conditional_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275listener("click", function AdminCategoriesComponent_Conditional_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "h2");
    \u0275\u0275text(4, "Add category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function AdminCategoriesComponent_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 22);
    \u0275\u0275listener("ngSubmit", function AdminCategoriesComponent_Conditional_11_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCategory());
    });
    \u0275\u0275elementStart(8, "div", 23)(9, "label", 24);
    \u0275\u0275text(10, "Category name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCategoriesComponent_Conditional_11_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newName, $event) || (ctx_r2.newName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AdminCategoriesComponent_Conditional_11_Conditional_12_Template, 2, 1, "div", 15);
    \u0275\u0275elementStart(13, "div", 26)(14, "button", 27);
    \u0275\u0275listener("click", function AdminCategoriesComponent_Conditional_11_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 28);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newName);
    \u0275\u0275advance();
    \u0275\u0275conditional(12, ctx_r2.submitError ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.submitting ? "Saving\u2026" : "Create category", " ");
  }
}
function AdminCategoriesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.toast());
  }
}
var AdminCategoriesComponent = class _AdminCategoriesComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.categories = signal([
      { id: "c1", name: "Tech", sourceCount: 2, articleCount: 202 },
      { id: "c2", name: "Sports", sourceCount: 1, articleCount: 96 },
      { id: "c3", name: "World News", sourceCount: 1, articleCount: 210 },
      { id: "c4", name: "Business", sourceCount: 1, articleCount: 0 },
      { id: "c5", name: "Science", sourceCount: 0, articleCount: 0 }
    ]);
    this.modalOpen = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("modal") === "add-category")), { initialValue: false });
    this.newName = "";
    this.submitError = "";
    this.submitting = false;
    this.rowError = signal(null);
    this.toast = signal("");
    this.hasCategories = computed(() => this.categories().length > 0);
  }
  openAddModal() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: "add-category" },
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
  addCategory() {
    this.submitError = "";
    const name = this.newName.trim();
    if (!name) {
      this.submitError = "Enter a category name.";
      return;
    }
    const exists = this.categories().some((c) => c.name.toLowerCase() === name.toLowerCase());
    if (exists) {
      this.submitError = `409 \u2014 a category named "${name}" already exists.`;
      return;
    }
    this.submitting = true;
    this.categories.update((list) => [
      ...list,
      { id: "new-" + list.length, name, sourceCount: 0, articleCount: 0 }
    ]);
    this.submitting = false;
    this.newName = "";
    this.showToast("Category created.");
    this.closeModal();
  }
  deleteCategory(cat) {
    this.rowError.set(null);
    if (cat.sourceCount > 0) {
      this.rowError.set({
        id: cat.id,
        message: `422 \u2014 ${cat.sourceCount} active source(s) still assigned. Reassign or delete them first.`
      });
      return;
    }
    this.categories.update((list) => list.filter((c) => c.id !== cat.id));
    this.showToast("Category deleted.");
  }
  showToast(msg) {
    this.toast.set(msg);
    setTimeout(() => this.toast.set(""), 2600);
  }
  static {
    this.\u0275fac = function AdminCategoriesComponent_Factory(t) {
      return new (t || _AdminCategoriesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCategoriesComponent, selectors: [["app-admin-categories"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [[1, "admin-page"], [1, "page-head"], [1, "sub"], [1, "btn", "btn-primary", 3, "click"], [1, "cards"], [1, "modal-backdrop"], [1, "toast"], [1, "card", "cat-card"], [1, "cat-head"], [3, "name"], [1, "btn", "btn-danger", "sm", 3, "click"], [1, "cat-stats"], [1, "stat-cell"], [1, "num"], [1, "lbl"], [1, "banner", "error-banner"], [1, "card"], ["icon", "\u{1F3F7}\uFE0F", "title", "No categories yet", "message", "Create a category to organize your sources and power the feed filter."], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-head"], ["aria-label", "Close", 1, "modal-close", 3, "click"], [3, "ngSubmit"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "name", "name", "placeholder", "e.g. Science", "autocomplete", "off", 1, "input", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function AdminCategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function AdminCategoriesComponent_Template_button_click_7_listener() {
          return ctx.openAddModal();
        });
        \u0275\u0275text(8, "+ Add category");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, AdminCategoriesComponent_Conditional_9_Template, 3, 0, "div", 4)(10, AdminCategoriesComponent_Conditional_10_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, AdminCategoriesComponent_Conditional_11_Template, 18, 4, "div", 5)(12, AdminCategoriesComponent_Conditional_12_Template, 2, 1, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("Group sources and let readers filter the feed. ", ctx.categories().length, " total.");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(9, ctx.hasCategories() ? 9 : 10);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.modalOpen() ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.toast() ? 12 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CategoryChipComponent, EmptyStateComponent], styles: ["\n\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: var(--sp-3);\n}\n.cat-card[_ngcontent-%COMP%] {\n  padding: var(--sp-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.cat-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-2);\n}\n.btn.sm[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 0 var(--sp-3);\n  font-size: var(--fs-xs);\n}\n.cat-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-5);\n}\n.stat-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-cell[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 800;\n  line-height: 1.1;\n}\n.stat-cell[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-text-subtle);\n}\n/*# sourceMappingURL=admin-categories.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCategoriesComponent, { className: "AdminCategoriesComponent", filePath: "src/app/features/admin-categories/admin-categories.component.ts", lineNumber: 18 });
})();
export {
  AdminCategoriesComponent
};
//# sourceMappingURL=admin-categories.component-WCKWWK4I.js.map
