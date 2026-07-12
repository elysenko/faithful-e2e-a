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
  ɵɵclassMap,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-UJBMV62H.js";

// src/app/features/leads/leads-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LeadsListComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function LeadsListComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "lead-row-" + l_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.company || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.source || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + ctx_r2.statusClass(l_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r2.status);
  }
}
function LeadsListComponent_ForEmpty_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275text(2, "No leads for this filter.");
    \u0275\u0275elementEnd()();
  }
}
function LeadsListComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 18)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r4.name);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge " + ctx_r2.statusClass(l_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", l_r4.company || "\u2014", "", l_r4.email ? " \xB7 " + l_r4.email : "", "");
  }
}
function LeadsListComponent_ForEmpty_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "No leads for this filter.");
    \u0275\u0275elementEnd();
  }
}
function LeadsListComponent_Conditional_37_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275property("value", s_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6);
  }
}
function LeadsListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function LeadsListComponent_Conditional_37_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreate());
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275listener("click", function LeadsListComponent_Conditional_37_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 22)(3, "h2", 23);
    \u0275\u0275text(4, "New lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function LeadsListComponent_Conditional_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreate());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 25);
    \u0275\u0275listener("ngSubmit", function LeadsListComponent_Conditional_37_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275elementStart(8, "div", 26)(9, "label", 27);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 26)(13, "label", 29);
    \u0275\u0275text(14, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 26)(17, "label", 31);
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 26)(21, "label", 33);
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 34);
    \u0275\u0275repeaterCreate(24, LeadsListComponent_Conditional_37_For_25_Template, 2, 2, "option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 26)(27, "label", 35);
    \u0275\u0275text(28, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 37)(31, "button", 38);
    \u0275\u0275listener("click", function LeadsListComponent_Conditional_37_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCreate());
    });
    \u0275\u0275text(32, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 39);
    \u0275\u0275text(34, "Create");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.statuses);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r2.form.invalid);
  }
}
var LeadsListComponent = class _LeadsListComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.statuses = ["New", "Working", "Qualified", "Unqualified"];
    this.leads = signal([
      { id: "l1", name: "Diane Nguyen", email: "diane@acme.io", company: "Acme IO", status: "New", source: "Website" },
      { id: "l2", name: "Todd Chavez", email: "todd@hollyhock.co", company: "Hollyhock Co", status: "Working", source: "Referral" },
      { id: "l3", name: "Carolyn Park", email: "carolyn@vim.dev", company: "Vim Dev", status: "Qualified", source: "Event" },
      { id: "l4", name: "Marcus Lee", email: "marcus@northwind.com", company: "Northwind", status: "New", source: "Cold outreach" },
      { id: "l5", name: "Priya Shah", company: "Contoso", status: "Unqualified", source: "Website" }
    ]);
    this.statusFilter = signal("");
    this.filtered = computed(() => {
      const f = this.statusFilter();
      if (!f)
        return this.leads();
      return this.leads().filter((l) => l.status === f);
    });
    this.queryModal = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("modal"))), {
      initialValue: this.route.snapshot.queryParamMap.get("modal")
    });
    this.showCreate = computed(() => this.queryModal() === "new");
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.email],
      company: [""],
      status: ["New", Validators.required],
      source: [""]
    });
  }
  setFilter(value) {
    this.statusFilter.set(value);
    this.router.navigate([], { queryParams: { status: value || null }, queryParamsHandling: "merge" });
  }
  statusClass(status) {
    switch (status) {
      case "Qualified":
        return "badge-success";
      case "Working":
        return "badge-warning";
      case "Unqualified":
        return "badge-danger";
      default:
        return "badge-info";
    }
  }
  openCreate() {
    this.router.navigate([], { queryParams: { modal: "new" }, queryParamsHandling: "merge" });
  }
  closeCreate() {
    this.form.reset({ status: "New" });
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  submit() {
    if (this.form.invalid)
      return;
    const v = this.form.value;
    const lead = {
      id: "tmp-" + this.leads().length,
      name: v.name,
      email: v.email || void 0,
      company: v.company || void 0,
      status: v.status,
      source: v.source || void 0
    };
    this.leads.update((list) => [lead, ...list]);
    this.closeCreate();
  }
  static {
    this.\u0275fac = function LeadsListComponent_Factory(t) {
      return new (t || _LeadsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeadsListComponent, selectors: [["app-leads-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 6, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["data-testid", "leads-new", 1, "btn", "btn-primary", 3, "click"], [1, "toolbar"], ["data-testid", "leads-filter", 1, "select", "search", 3, "change", "value"], ["value", ""], [3, "value"], [1, "card", "table-wrap"], [1, "table"], [1, "cards"], [1, "acc-card", "card"], [1, "muted"], [1, "overlay"], [1, "strong"], [1, "badge"], ["colspan", "5", 1, "muted", "empty"], [1, "acc-top"], [1, "muted", "small"], [1, "overlay", 3, "click"], ["data-testid", "lead-create-modal", 1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "btn-link", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "l-name"], ["id", "l-name", "formControlName", "name", "data-testid", "lead-name", "placeholder", "Jane Doe", 1, "input"], ["for", "l-company"], ["id", "l-company", "formControlName", "company", "placeholder", "Acme Inc.", 1, "input"], ["for", "l-email"], ["id", "l-email", "type", "email", "formControlName", "email", "placeholder", "jane@acme.com", 1, "input"], ["for", "l-status"], ["id", "l-status", "formControlName", "status", 1, "select"], ["for", "l-source"], ["id", "l-source", "formControlName", "source", "placeholder", "Website, Referral\u2026", 1, "input"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", "data-testid", "lead-save", 1, "btn", "btn-primary", 3, "disabled"]], template: function LeadsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Leads");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function LeadsListComponent_Template_button_click_7_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275text(8, "+ New lead");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "select", 6);
        \u0275\u0275listener("change", function LeadsListComponent_Template_select_change_10_listener($event) {
          return ctx.setFilter($event.target.value);
        });
        \u0275\u0275elementStart(11, "option", 7);
        \u0275\u0275text(12, "All statuses");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(13, LeadsListComponent_For_14_Template, 2, 2, "option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "table", 10)(17, "thead")(18, "tr")(19, "th");
        \u0275\u0275text(20, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th");
        \u0275\u0275text(24, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26, "Source");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th");
        \u0275\u0275text(28, "Status");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "tbody");
        \u0275\u0275repeaterCreate(30, LeadsListComponent_For_31_Template, 12, 8, "tr", null, _forTrack0, false, LeadsListComponent_ForEmpty_32_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 11);
        \u0275\u0275repeaterCreate(34, LeadsListComponent_For_35_Template, 8, 6, "div", 12, _forTrack0, false, LeadsListComponent_ForEmpty_36_Template, 2, 0, "p", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(37, LeadsListComponent_Conditional_37_Template, 35, 2, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.filtered().length, " of ", ctx.leads().length, " leads");
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.statusFilter());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.statuses);
        \u0275\u0275advance(17);
        \u0275\u0275repeater(ctx.filtered());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.filtered());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(37, ctx.showCreate() ? 37 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=leads-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeadsListComponent, { className: "LeadsListComponent", filePath: "src/app/features/leads/leads-list.component.ts", lineNumber: 16 });
})();
export {
  LeadsListComponent
};
//# sourceMappingURL=leads-list.component-JBEESPKD.js.map
