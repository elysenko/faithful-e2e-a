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
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-56EPECIG.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-UJBMV62H.js";

// src/app/features/contacts/contacts-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ContactsListComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "contact-row-" + c_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.phone || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.accountName);
  }
}
function ContactsListComponent_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2, "No contacts match your search.");
    \u0275\u0275elementEnd()();
  }
}
function ContactsListComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 16)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r2.email, "", c_r2.phone ? " \xB7 " + c_r2.phone : "", "");
  }
}
function ContactsListComponent_ForEmpty_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "No contacts match your search.");
    \u0275\u0275elementEnd();
  }
}
function ContactsListComponent_Conditional_31_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275property("value", a_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r5.name);
  }
}
function ContactsListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function ContactsListComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCreate());
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275listener("click", function ContactsListComponent_Conditional_31_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "h2", 21);
    \u0275\u0275text(4, "New contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function ContactsListComponent_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCreate());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 23);
    \u0275\u0275listener("ngSubmit", function ContactsListComponent_Conditional_31_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submit());
    });
    \u0275\u0275elementStart(8, "div", 24)(9, "label", 25);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 24)(13, "label", 27);
    \u0275\u0275text(14, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 24)(17, "label", 29);
    \u0275\u0275text(18, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 24)(21, "label", 31);
    \u0275\u0275text(22, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 32)(24, "option", 33);
    \u0275\u0275text(25, "Select account\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, ContactsListComponent_Conditional_31_For_27_Template, 2, 2, "option", 34, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 35)(29, "button", 36);
    \u0275\u0275listener("click", function ContactsListComponent_Conditional_31_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCreate());
    });
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 37);
    \u0275\u0275text(32, "Create");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r3.accountOptions());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r3.form.invalid);
  }
}
var ContactsListComponent = class _ContactsListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.contacts = signal([
      { id: "c1", name: "Hank Scorpio", email: "hank@globex.com", phone: "+1 415 555 0140", accountId: "1", accountName: "Globex Corporation" },
      { id: "c2", name: "Mona Vale", email: "mona@globex.com", accountId: "1", accountName: "Globex Corporation" },
      { id: "c3", name: "Peter Gibbons", email: "peter@initech.io", phone: "+1 512 555 0150", accountId: "2", accountName: "Initech" },
      { id: "c4", name: "Bill Lumbergh", email: "bill@initech.io", accountId: "2", accountName: "Initech" },
      { id: "c5", name: "Alice Abernathy", email: "alice@umbrella.co", phone: "+1 212 555 0161", accountId: "3", accountName: "Umbrella Co" },
      { id: "c6", name: "Albert Wesker", email: "wesker@umbrella.co", accountId: "3", accountName: "Umbrella Co" },
      { id: "c7", name: "Sam Weir", email: "sam@soylent.com", accountId: "4", accountName: "Soylent Industries" },
      { id: "c8", name: "Lindsay Weir", email: "lindsay@soylent.com", phone: "+1 305 555 0182", accountId: "4", accountName: "Soylent Industries" }
    ]);
    this.accountOptions = signal([
      { id: "1", name: "Globex Corporation" },
      { id: "2", name: "Initech" },
      { id: "3", name: "Umbrella Co" },
      { id: "4", name: "Soylent Industries" }
    ]);
    this.search = signal("");
    this.filtered = computed(() => {
      const q = this.search().toLowerCase().trim();
      if (!q)
        return this.contacts();
      return this.contacts().filter((c) => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || (c.accountName ?? "").toLowerCase().includes(q));
    });
    this.queryModal = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("modal"))), {
      initialValue: this.route.snapshot.queryParamMap.get("modal")
    });
    this.showCreate = computed(() => this.queryModal() === "new");
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      accountId: ["", Validators.required]
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
    const accountName = this.accountOptions().find((a) => a.id === v.accountId)?.name;
    const contact = {
      id: "tmp-" + this.contacts().length,
      name: v.name,
      email: v.email,
      phone: v.phone || void 0,
      accountId: v.accountId,
      accountName
    };
    this.contacts.update((list) => [contact, ...list]);
    this.closeCreate();
  }
  static {
    this.\u0275fac = function ContactsListComponent_Factory(t) {
      return new (t || _ContactsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsListComponent, selectors: [["app-contacts-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 6, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["data-testid", "contacts-new", 1, "btn", "btn-primary", 3, "click"], [1, "toolbar"], ["type", "search", "placeholder", "Search contacts\u2026", "data-testid", "contacts-search", 1, "input", "search", 3, "input", "value"], [1, "card", "table-wrap"], [1, "table"], [1, "cards"], [1, "acc-card", "card"], [1, "muted"], [1, "overlay"], [1, "strong"], [1, "badge", "badge-info"], ["colspan", "4", 1, "muted", "empty"], [1, "acc-top"], [1, "muted", "small"], [1, "overlay", 3, "click"], ["data-testid", "contact-create-modal", 1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn-link", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "c-name"], ["id", "c-name", "formControlName", "name", "data-testid", "contact-name", "placeholder", "Jane Doe", 1, "input"], ["for", "c-email"], ["id", "c-email", "type", "email", "formControlName", "email", "placeholder", "jane@company.com", 1, "input"], ["for", "c-phone"], ["id", "c-phone", "formControlName", "phone", "placeholder", "+1 555 000 0000", 1, "input"], ["for", "c-account"], ["id", "c-account", "formControlName", "accountId", 1, "select"], ["value", ""], [3, "value"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", "data-testid", "contact-save", 1, "btn", "btn-primary", 3, "disabled"]], template: function ContactsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Contacts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function ContactsListComponent_Template_button_click_7_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275text(8, "+ New contact");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "input", 6);
        \u0275\u0275listener("input", function ContactsListComponent_Template_input_input_10_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "table", 8)(13, "thead")(14, "tr")(15, "th");
        \u0275\u0275text(16, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "Account");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "tbody");
        \u0275\u0275repeaterCreate(24, ContactsListComponent_For_25_Template, 10, 5, "tr", null, _forTrack0, false, ContactsListComponent_ForEmpty_26_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 9);
        \u0275\u0275repeaterCreate(28, ContactsListComponent_For_29_Template, 8, 4, "div", 10, _forTrack0, false, ContactsListComponent_ForEmpty_30_Template, 2, 0, "p", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, ContactsListComponent_Conditional_31_Template, 33, 2, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.filtered().length, " of ", ctx.contacts().length, " contacts");
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.search());
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.filtered());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.filtered());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(31, ctx.showCreate() ? 31 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=contacts-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsListComponent, { className: "ContactsListComponent", filePath: "src/app/features/contacts/contacts-list.component.ts", lineNumber: 16 });
})();
export {
  ContactsListComponent
};
//# sourceMappingURL=contacts-list.component-YVDECRTH.js.map
