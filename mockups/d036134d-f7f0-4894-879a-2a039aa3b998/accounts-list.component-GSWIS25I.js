import {
  toSignal
} from "./chunk-FSFIGSYB.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56EPECIG.js";
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
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-UJBMV62H.js";

// src/app/features/accounts/accounts-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/accounts", a0];
function AccountsListComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 9)(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, a_r1.id));
    \u0275\u0275attribute("data-testid", "account-row-" + a_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r1.industry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.website || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.phone || "\u2014");
  }
}
function AccountsListComponent_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2, "No accounts match your search.");
    \u0275\u0275elementEnd()();
  }
}
function AccountsListComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "div", 17)(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, a_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.industry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r2.website || "\u2014", " \xB7 ", a_r2.phone || "\u2014", "");
  }
}
function AccountsListComponent_ForEmpty_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "No accounts match your search.");
    \u0275\u0275elementEnd();
  }
}
function AccountsListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function AccountsListComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCreate());
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275listener("click", function AccountsListComponent_Conditional_31_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 21)(3, "h2", 22);
    \u0275\u0275text(4, "New account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function AccountsListComponent_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCreate());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 24);
    \u0275\u0275listener("ngSubmit", function AccountsListComponent_Conditional_31_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submit());
    });
    \u0275\u0275elementStart(8, "div", 25)(9, "label", 26);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 25)(13, "label", 28);
    \u0275\u0275text(14, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 25)(17, "label", 30);
    \u0275\u0275text(18, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25)(21, "label", 32);
    \u0275\u0275text(22, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 34)(25, "button", 35);
    \u0275\u0275listener("click", function AccountsListComponent_Conditional_31_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCreate());
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 36);
    \u0275\u0275text(28, "Create");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx_r3.form.invalid);
  }
}
var AccountsListComponent = class _AccountsListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.accounts = signal([
      { id: "1", name: "Globex Corporation", industry: "Manufacturing", website: "globex.com", phone: "+1 415 555 0132" },
      { id: "2", name: "Initech", industry: "Software", website: "initech.io", phone: "+1 512 555 0148" },
      { id: "3", name: "Umbrella Co", industry: "Healthcare", website: "umbrella.co", phone: "+1 212 555 0199" },
      { id: "4", name: "Soylent Industries", industry: "Food & Beverage", website: "soylent.com", phone: "+1 305 555 0170" }
    ]);
    this.search = signal("");
    this.filtered = computed(() => {
      const q = this.search().toLowerCase().trim();
      if (!q)
        return this.accounts();
      return this.accounts().filter((a) => a.name.toLowerCase().includes(q) || a.industry.toLowerCase().includes(q));
    });
    this.queryModal = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("modal"))), { initialValue: this.route.snapshot.queryParamMap.get("modal") });
    this.showCreate = computed(() => this.queryModal() === "new");
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      industry: ["", [Validators.required]],
      website: [""],
      phone: [""]
    });
  }
  onSearch(value) {
    this.search.set(value);
  }
  openCreate() {
    this.router.navigate([], { queryParams: { modal: "new" }, queryParamsHandling: "merge" });
  }
  closeCreate() {
    this.form.reset();
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  submit() {
    if (this.form.invalid)
      return;
    const v = this.form.value;
    const account = {
      id: "tmp-" + this.accounts().length,
      name: v.name,
      industry: v.industry,
      website: v.website || void 0,
      phone: v.phone || void 0
    };
    this.accounts.update((list) => [account, ...list]);
    this.closeCreate();
  }
  static {
    this.\u0275fac = function AccountsListComponent_Factory(t) {
      return new (t || _AccountsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountsListComponent, selectors: [["app-accounts-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 6, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["data-testid", "accounts-new", 1, "btn", "btn-primary", 3, "click"], [1, "toolbar"], ["type", "search", "placeholder", "Search accounts\u2026", "data-testid", "accounts-search", 1, "input", "search", 3, "input", "value"], [1, "card", "table-wrap"], [1, "table"], [1, "row", 3, "routerLink"], [1, "cards"], [1, "acc-card", "card", 3, "routerLink"], [1, "muted"], [1, "overlay"], [1, "strong"], [1, "badge"], ["colspan", "4", 1, "muted", "empty"], [1, "acc-top"], [1, "muted", "small"], [1, "overlay", 3, "click"], ["data-testid", "account-create-modal", 1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn-link", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "a-name"], ["id", "a-name", "formControlName", "name", "data-testid", "account-name", "placeholder", "Acme Inc.", 1, "input"], ["for", "a-industry"], ["id", "a-industry", "formControlName", "industry", "placeholder", "Software", 1, "input"], ["for", "a-website"], ["id", "a-website", "formControlName", "website", "placeholder", "acme.com", 1, "input"], ["for", "a-phone"], ["id", "a-phone", "formControlName", "phone", "placeholder", "+1 555 000 0000", 1, "input"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", "data-testid", "account-save", 1, "btn", "btn-primary", 3, "disabled"]], template: function AccountsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function AccountsListComponent_Template_button_click_7_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275text(8, "+ New account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "input", 6);
        \u0275\u0275listener("input", function AccountsListComponent_Template_input_input_10_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "table", 8)(13, "thead")(14, "tr")(15, "th");
        \u0275\u0275text(16, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Industry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "Phone");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "tbody");
        \u0275\u0275repeaterCreate(24, AccountsListComponent_For_25_Template, 10, 8, "tr", 9, _forTrack0, false, AccountsListComponent_ForEmpty_26_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 10);
        \u0275\u0275repeaterCreate(28, AccountsListComponent_For_29_Template, 8, 7, "a", 11, _forTrack0, false, AccountsListComponent_ForEmpty_30_Template, 2, 0, "p", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, AccountsListComponent_Conditional_31_Template, 29, 2, "div", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.filtered().length, " of ", ctx.accounts().length, " accounts");
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.search());
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.filtered());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.filtered());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(31, ctx.showCreate() ? 31 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=accounts-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountsListComponent, { className: "AccountsListComponent", filePath: "src/app/features/accounts/accounts-list.component.ts", lineNumber: 17 });
})();
export {
  AccountsListComponent
};
//# sourceMappingURL=accounts-list.component-GSWIS25I.js.map
