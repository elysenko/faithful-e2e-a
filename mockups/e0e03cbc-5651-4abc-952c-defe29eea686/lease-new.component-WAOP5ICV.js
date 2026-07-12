import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VXD3V2JR.js";
import {
  CentsPipe
} from "./chunk-GBWKZWI4.js";
import {
  Router,
  RouterLink
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5S2USPPB.js";

// src/app/pages/lease-new/lease-new.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LeaseNewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LeaseNewComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", u_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unitLabel(u_r2));
  }
}
function LeaseNewComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1, "Please choose a unit.");
    \u0275\u0275elementEnd();
  }
}
function LeaseNewComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275property("value", t_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r3.name, " \xB7 ", t_r3.email, "");
  }
}
function LeaseNewComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1, "Please choose a tenant.");
    \u0275\u0275elementEnd();
  }
}
function LeaseNewComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1, "Start date is required.");
    \u0275\u0275elementEnd();
  }
}
function LeaseNewComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1, "End date is required.");
    \u0275\u0275elementEnd();
  }
}
function LeaseNewComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1, "Enter a monthly rent amount.");
    \u0275\u0275elementEnd();
  }
}
function LeaseNewComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1, "Enter a day between 1 and 31.");
    \u0275\u0275elementEnd();
  }
}
function LeaseNewComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
function LeaseNewComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create lease ");
  }
}
var LeaseNewComponent = class _LeaseNewComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.loading = signal(false);
    this.error = signal("");
    this.units = signal([
      { id: "u1", number: "101", bedrooms: 1, rentCents: 12e4 },
      { id: "u2", number: "102", bedrooms: 2, rentCents: 18e4 },
      { id: "u3", number: "201", bedrooms: 2, rentCents: 19e4 },
      { id: "u4", number: "202", bedrooms: 3, rentCents: 24e4 }
    ]);
    this.tenants = signal([
      { id: "t1", name: "Alex Rivera", email: "tenant1@demo", role: "tenant" },
      { id: "t2", name: "Bailey Chen", email: "tenant2@demo", role: "tenant" },
      { id: "t3", name: "Casey Morgan", email: "tenant3@demo", role: "tenant" }
    ]);
    this.form = this.fb.group({
      unitId: ["", [Validators.required]],
      tenantId: ["", [Validators.required]],
      startsOn: ["", [Validators.required]],
      endsOn: ["", [Validators.required]],
      rentDollars: [0, [Validators.required, Validators.min(0)]],
      dueDay: [1, [Validators.required, Validators.min(1), Validators.max(31)]]
    });
  }
  ngOnInit() {
    this.form.controls.unitId.valueChanges.subscribe((id) => {
      const unit = this.units().find((u) => u.id === id);
      if (unit) {
        this.form.controls.rentDollars.setValue(unit.rentCents / 100);
      }
    });
  }
  unitLabel(u) {
    const dollars = (u.rentCents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    return `${u.number} \xB7 ${u.bedrooms} bed \xB7 ${dollars}`;
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const raw = this.form.getRawValue();
    const payload = {
      unitId: raw.unitId,
      tenantId: raw.tenantId,
      startsOn: raw.startsOn,
      endsOn: raw.endsOn,
      rentCents: Math.round((Number(raw.rentDollars) || 0) * 100),
      dueDay: Number(raw.dueDay)
    };
    this.loading.set(true);
    console.log("Create lease", payload);
    setTimeout(() => {
      this.loading.set(false);
      this.router.navigate(["/leases"]);
    }, 450);
  }
  static {
    this.\u0275fac = function LeaseNewComponent_Factory(t) {
      return new (t || _LeaseNewComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaseNewComponent, selectors: [["app-lease-new"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 13, consts: [[1, "page", "stack"], [1, "page-head"], ["routerLink", "/leases", 1, "back-link"], [1, "muted"], [1, "card", "card-pad", "stack", 3, "ngSubmit", "formGroup"], [1, "error"], [1, "field"], ["for", "ln-unit"], ["id", "ln-unit", "formControlName", "unitId", 1, "field-input"], ["value", "", "disabled", ""], [3, "value"], ["for", "ln-tenant"], ["id", "ln-tenant", "formControlName", "tenantId", 1, "field-input"], [1, "grid-2"], ["for", "ln-starts"], ["id", "ln-starts", "type", "date", "formControlName", "startsOn", 1, "field-input"], ["for", "ln-ends"], ["id", "ln-ends", "type", "date", "formControlName", "endsOn", 1, "field-input"], ["for", "ln-rent"], ["id", "ln-rent", "type", "number", "min", "0", "step", "1", "formControlName", "rentDollars", 1, "field-input"], ["for", "ln-due"], ["id", "ln-due", "type", "number", "min", "1", "max", "31", "step", "1", "formControlName", "dueDay", 1, "field-input"], [1, "preview-line", "row"], [1, "spacer"], [1, "preview-val"], [1, "row", "form-actions"], ["routerLink", "/leases", 1, "btn", "btn-outline"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner"]], template: function LeaseNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back to Leases");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "New Lease");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "Assign a tenant to a unit and set the terms.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "form", 4);
        \u0275\u0275listener("ngSubmit", function LeaseNewComponent_Template_form_ngSubmit_8_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(9, LeaseNewComponent_Conditional_9_Template, 2, 1, "p", 5);
        \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
        \u0275\u0275text(12, "Unit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "select", 8)(14, "option", 9);
        \u0275\u0275text(15, "Select a unit\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(16, LeaseNewComponent_For_17_Template, 2, 2, "option", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, LeaseNewComponent_Conditional_18_Template, 2, 0, "small", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 6)(20, "label", 11);
        \u0275\u0275text(21, "Tenant");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "select", 12)(23, "option", 9);
        \u0275\u0275text(24, "Select a tenant\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(25, LeaseNewComponent_For_26_Template, 2, 3, "option", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, LeaseNewComponent_Conditional_27_Template, 2, 0, "small", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 13)(29, "div", 6)(30, "label", 14);
        \u0275\u0275text(31, "Starts on");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 15);
        \u0275\u0275template(33, LeaseNewComponent_Conditional_33_Template, 2, 0, "small", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 6)(35, "label", 16);
        \u0275\u0275text(36, "Ends on");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "input", 17);
        \u0275\u0275template(38, LeaseNewComponent_Conditional_38_Template, 2, 0, "small", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 13)(40, "div", 6)(41, "label", 18);
        \u0275\u0275text(42, "Monthly rent (USD)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "input", 19);
        \u0275\u0275template(44, LeaseNewComponent_Conditional_44_Template, 2, 0, "small", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 6)(46, "label", 20);
        \u0275\u0275text(47, "Due day");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "input", 21);
        \u0275\u0275template(49, LeaseNewComponent_Conditional_49_Template, 2, 0, "small", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 22)(51, "span", 3);
        \u0275\u0275text(52, "Rent stored as");
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "span", 23);
        \u0275\u0275elementStart(54, "span", 24);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "cents");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 25)(58, "a", 26);
        \u0275\u0275text(59, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "span", 23);
        \u0275\u0275elementStart(61, "button", 27);
        \u0275\u0275template(62, LeaseNewComponent_Conditional_62_Template, 1, 0, "span", 28)(63, LeaseNewComponent_Conditional_63_Template, 1, 0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.error() ? 9 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.units());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(18, ctx.form.controls.unitId.touched && ctx.form.controls.unitId.invalid ? 18 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.tenants());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(27, ctx.form.controls.tenantId.touched && ctx.form.controls.tenantId.invalid ? 27 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(33, ctx.form.controls.startsOn.touched && ctx.form.controls.startsOn.invalid ? 33 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(38, ctx.form.controls.endsOn.touched && ctx.form.controls.endsOn.invalid ? 38 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(44, ctx.form.controls.rentDollars.touched && ctx.form.controls.rentDollars.invalid ? 44 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(49, ctx.form.controls.dueDay.touched && ctx.form.controls.dueDay.invalid ? 49 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 11, (ctx.form.controls.rentDollars.value || 0) * 100), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(62, ctx.loading() ? 62 : 63);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, RouterLink, CentsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.page-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  margin-top: var(--space-2);\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-muted);\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-brand);\n  text-decoration: none;\n}\n.card-pad[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.field-input[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  color: var(--color-ink);\n  font-size: 16px;\n  font-family: inherit;\n}\n.field-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-brand);\n  box-shadow: 0 0 0 3px var(--color-brand-light);\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4);\n}\n.preview-line[_ngcontent-%COMP%] {\n  padding: var(--space-3) var(--space-4);\n  background: var(--color-surface-alt);\n  border-radius: var(--radius);\n}\n.preview-val[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--color-ink);\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n}\n@media (max-width: 560px) {\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=lease-new.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaseNewComponent, { className: "LeaseNewComponent", filePath: "src/app/pages/lease-new/lease-new.component.ts", lineNumber: 15 });
})();
export {
  LeaseNewComponent
};
//# sourceMappingURL=lease-new.component-WAOP5ICV.js.map
