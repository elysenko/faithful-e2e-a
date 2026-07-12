import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-2HXCFDQC.js";
import {
  AuthService
} from "./chunk-Q2IOEOSU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-CBFZCQFA.js";
import {
  CommonModule,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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
} from "./chunk-I3S7QF5E.js";

// src/app/pages/customers/customers.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ modal: "new" });
var _c1 = (a0) => ["/customers", a0];
var _c2 = (a0) => ({ edit: a0 });
function CustomersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1, "+ New customer");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function CustomersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading customers\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CustomersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 7);
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No customers yet.");
    \u0275\u0275elementEnd()();
  }
}
function CustomersComponent_Conditional_8_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_8_For_13_Conditional_8_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_8_For_13_Conditional_8_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const c_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(c_r2.id, $event));
    });
    \u0275\u0275text(3, "Delete");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c2, c_r2.id));
  }
}
function CustomersComponent_Conditional_8_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 10)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 12);
    \u0275\u0275template(8, CustomersComponent_Conditional_8_For_13_Conditional_8_Template, 4, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, c_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(8, ctx_r2.canEdit() ? 8 : -1);
  }
}
function CustomersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, CustomersComponent_Conditional_8_For_13_Template, 9, 7, "tr", 10, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r2.customers());
  }
}
function CustomersComponent_Conditional_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function CustomersComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 17)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 18);
    \u0275\u0275listener("ngSubmit", function CustomersComponent_Conditional_9_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(6, "div", 19)(7, "label", 20);
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 19)(11, "label", 22);
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_9_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.email, $event) || (ctx_r2.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 19)(15, "label", 24);
    \u0275\u0275text(16, "Phone (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_Conditional_9_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.phone, $event) || (ctx_r2.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, CustomersComponent_Conditional_9_Conditional_18_Template, 2, 1, "p", 26);
    \u0275\u0275elementStart(19, "div", 27)(20, "button", 28);
    \u0275\u0275listener("click", function CustomersComponent_Conditional_9_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(21, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 29);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingId() ? "Edit customer" : "New customer");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.phone);
    \u0275\u0275advance();
    \u0275\u0275conditional(18, ctx_r2.error() ? 18 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving() ? "Saving\u2026" : "Save", " ");
  }
}
var CustomersComponent = class _CustomersComponent {
  constructor(auth, route, router) {
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.loading = signal(false);
    this.error = signal(null);
    this.saving = signal(false);
    this.customers = signal([
      { id: "c1", name: "Northwind Traders", email: "orders@northwind.example", phone: "+1 202 555 0180" },
      { id: "c2", name: "Contoso Ltd", email: "ap@contoso.example", phone: "+1 415 555 0142" },
      { id: "c3", name: "Fabrikam Inc", email: "buy@fabrikam.example", phone: null }
    ]);
    this.canEdit = computed(() => this.auth.isSales());
    this.modalOpen = signal(false);
    this.editingId = signal(null);
    this.form = { name: "", email: "", phone: "" };
  }
  ngOnInit() {
    this.route.queryParams.subscribe((q) => {
      if (q["modal"] === "new" && this.canEdit()) {
        this.openCreate();
      } else if (q["edit"]) {
        this.openEdit(q["edit"]);
      } else {
        this.modalOpen.set(false);
      }
    });
  }
  openCreate() {
    this.editingId.set(null);
    this.form = { name: "", email: "", phone: "" };
    this.modalOpen.set(true);
  }
  openEdit(id) {
    const c = this.customers().find((x) => x.id === id);
    if (!c)
      return;
    this.editingId.set(id);
    this.form = { name: c.name, email: c.email, phone: c.phone ?? "" };
    this.modalOpen.set(true);
  }
  close() {
    this.router.navigate([], { queryParams: {} });
    this.modalOpen.set(false);
  }
  save() {
    if (!this.form.name || !this.form.email) {
      this.error.set("Name and email are required.");
      return;
    }
    this.saving.set(true);
    const id = this.editingId();
    if (id) {
      this.customers.update((list) => list.map((c) => c.id === id ? __spreadValues(__spreadValues({}, c), this.form) : c));
    } else {
      this.customers.update((list) => [
        __spreadValues({ id: "c" + (list.length + 1) }, this.form),
        ...list
      ]);
    }
    this.saving.set(false);
    this.close();
  }
  remove(id, ev) {
    ev.stopPropagation();
    if (!this.canEdit())
      return;
    this.customers.update((list) => list.filter((c) => c.id !== id));
  }
  static {
    this.\u0275fac = function CustomersComponent_Factory(t) {
      return new (t || _CustomersComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersComponent, selectors: [["app-customers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "page"], [1, "page-head"], [1, "spacer"], ["routerLink", "/customers", 1, "btn", "btn-primary", 3, "queryParams"], [1, "state"], [1, "modal-backdrop"], [1, "spinner"], [1, "state-icon"], [1, "card", "table-wrap"], [1, "table"], [1, "link-row", 3, "routerLink"], [1, "muted"], [1, "num"], ["routerLink", "/customers", 1, "btn", "btn-ghost", "btn-sm", 3, "click", "queryParams"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", "card", 3, "click"], [1, "modal-head"], [3, "ngSubmit"], [1, "field"], ["for", "cname"], ["id", "cname", "name", "name", "placeholder", "Company or contact name", 3, "ngModelChange", "ngModel"], ["for", "cemail"], ["id", "cemail", "type", "email", "name", "email", "placeholder", "orders@example.com", 3, "ngModelChange", "ngModel"], ["for", "cphone"], ["id", "cphone", "name", "phone", "placeholder", "+1 555 0100", 3, "ngModelChange", "ngModel"], [1, "error"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function CustomersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275template(5, CustomersComponent_Conditional_5_Template, 2, 2, "a", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, CustomersComponent_Conditional_6_Template, 4, 0, "div", 4)(7, CustomersComponent_Conditional_7_Template, 5, 0)(8, CustomersComponent_Conditional_8_Template, 14, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, CustomersComponent_Conditional_9_Template, 24, 7, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.canEdit() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(6, ctx.loading() ? 6 : ctx.customers().length === 0 ? 7 : 8);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(9, ctx.modalOpen() ? 9 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.num[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: var(--space-1);\n}\n/*# sourceMappingURL=customers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersComponent, { className: "CustomersComponent", filePath: "src/app/pages/customers/customers.component.ts", lineNumber: 21 });
})();
export {
  CustomersComponent
};
//# sourceMappingURL=customers.component-CG6KLI2B.js.map
