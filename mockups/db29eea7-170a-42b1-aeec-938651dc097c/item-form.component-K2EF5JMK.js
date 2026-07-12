import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-3DEXCJGJ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-AFRLPGFB.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-G3BCJOAS.js";

// src/app/pages/item-form/item-form.component.ts
function ItemFormComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var ItemFormComponent = class _ItemFormComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.editId = signal(null);
    this.saving = signal(false);
    this.error = signal(null);
    this.items = signal([
      {
        id: "i1",
        sku: "SKU-1001",
        name: "Steel Bolt M6",
        unit: "pcs",
        reorderAt: 100,
        description: "Zinc-plated hex bolt, 6mm thread."
      },
      {
        id: "i2",
        sku: "SKU-1002",
        name: "Copper Wire 2mm",
        unit: "m",
        reorderAt: 200,
        description: "Bare copper wire, 2mm gauge, sold by the metre."
      }
    ]);
    this.model = { sku: "", name: "", description: "", unit: "pcs", reorderAt: 0 };
  }
  get isEdit() {
    return this.editId() !== null;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.editId.set(id);
      const existing = this.items().find((it) => it.id === id);
      if (existing) {
        this.model = {
          sku: existing.sku,
          name: existing.name,
          description: existing.description ?? "",
          unit: existing.unit,
          reorderAt: existing.reorderAt
        };
      }
    }
  }
  submit() {
    if (!this.model.sku || !this.model.name || !this.model.unit) {
      this.error.set("SKU, name and unit are required.");
      return;
    }
    this.error.set(null);
    this.saving.set(true);
    this.router.navigate(["/"]);
  }
  cancel() {
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function ItemFormComponent_Factory(t) {
      return new (t || _ItemFormComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemFormComponent, selectors: [["app-item-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 47, vars: 10, consts: [[1, "container", "narrow"], ["routerLink", "/", 1, "back-link"], [1, "muted"], [1, "card", "form-card", 3, "ngSubmit"], [1, "field"], ["for", "sku"], ["id", "sku", "name", "sku", "placeholder", "SKU-1009", 3, "ngModelChange", "ngModel"], ["for", "name"], ["id", "name", "name", "name", "placeholder", "e.g. Steel Bolt M6", 3, "ngModelChange", "ngModel"], ["for", "description"], ["id", "description", "name", "description", "placeholder", "Optional notes about the item", 3, "ngModelChange", "ngModel"], [1, "grid-2"], ["for", "unit"], ["id", "unit", "name", "unit", 3, "ngModelChange", "ngModel"], ["value", "pcs"], ["value", "m"], ["value", "kg"], ["value", "l"], ["value", "cans"], ["value", "box"], ["for", "reorderAt"], ["id", "reorderAt", "type", "number", "name", "reorderAt", "min", "0", 3, "ngModelChange", "ngModel"], [1, "error"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"]], template: function ItemFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2190 Back to items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "form", 3);
        \u0275\u0275listener("ngSubmit", function ItemFormComponent_Template_form_ngSubmit_7_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(8, "div", 4)(9, "label", 5);
        \u0275\u0275text(10, "SKU");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function ItemFormComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.sku, $event) || (ctx.model.sku = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 4)(13, "label", 7);
        \u0275\u0275text(14, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ItemFormComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.name, $event) || (ctx.model.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 4)(17, "label", 9);
        \u0275\u0275text(18, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "textarea", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ItemFormComponent_Template_textarea_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.description, $event) || (ctx.model.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 11)(21, "div", 4)(22, "label", 12);
        \u0275\u0275text(23, "Unit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function ItemFormComponent_Template_select_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.unit, $event) || (ctx.model.unit = $event);
          return $event;
        });
        \u0275\u0275elementStart(25, "option", 14);
        \u0275\u0275text(26, "pcs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 15);
        \u0275\u0275text(28, "m");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 16);
        \u0275\u0275text(30, "kg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 17);
        \u0275\u0275text(32, "l");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 18);
        \u0275\u0275text(34, "cans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 19);
        \u0275\u0275text(36, "box");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 4)(38, "label", 20);
        \u0275\u0275text(39, "Reorder threshold");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "input", 21);
        \u0275\u0275twoWayListener("ngModelChange", function ItemFormComponent_Template_input_ngModelChange_40_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.reorderAt, $event) || (ctx.model.reorderAt = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(41, ItemFormComponent_Conditional_41_Template, 2, 1, "p", 22);
        \u0275\u0275elementStart(42, "div", 23)(43, "button", 24);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 25);
        \u0275\u0275listener("click", function ItemFormComponent_Template_button_click_45_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(46, "Cancel");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Edit item" : "New item");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Update the catalog record for this item." : "Add a new item to the StockRoom catalog.");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.sku);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.description);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.unit);
        \u0275\u0275advance(16);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.reorderAt);
        \u0275\u0275advance();
        \u0275\u0275conditional(41, ctx.error() ? 41 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : ctx.isEdit ? "Save changes" : "Create item", " ");
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-4);\n  font-size: var(--fs-sm);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\nh1[_ngcontent-%COMP%]    + .muted[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 var(--space-5);\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n}\n@media (max-width: 560px) {\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=item-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemFormComponent, { className: "ItemFormComponent", filePath: "src/app/pages/item-form/item-form.component.ts", lineNumber: 19 });
})();
export {
  ItemFormComponent
};
//# sourceMappingURL=item-form.component-K2EF5JMK.js.map
