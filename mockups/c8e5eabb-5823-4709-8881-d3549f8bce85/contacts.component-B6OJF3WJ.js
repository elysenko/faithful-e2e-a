import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  RouterLink,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-A62IECG2.js";

// src/app/features/contacts/contacts.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/contacts", a0];
function ContactsComponent_For_41_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
}
function ContactsComponent_For_41_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.daysSince(c_r2.lastTouch), "d");
  }
}
function ContactsComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 13)(1, "td")(2, "div", 14)(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275template(7, ContactsComponent_For_41_Conditional_7_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 19);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ContactsComponent_For_41_Conditional_18_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const c_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, c_r2.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r2.name.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, c_r2.isChampion ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_15_0 = ctx_r0.seed.accountById(c_r2.accountId)) == null ? null : tmp_15_0.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.strengthBadge(c_r2.relationshipStrength));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.relationshipStrength);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.lastTouch);
    \u0275\u0275advance();
    \u0275\u0275conditional(18, ctx_r0.daysSince(c_r2.lastTouch) > 30 ? 18 : -1);
  }
}
function ContactsComponent_ForEmpty_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('No contacts match "', ctx_r0.filter(), '".');
  }
}
var ContactsComponent = class _ContactsComponent {
  daysSince(iso) {
    const then = new Date(iso).getTime();
    return Math.round((this.today.getTime() - then) / 864e5);
  }
  strengthBadge(strength) {
    switch (strength) {
      case "strong":
        return "badge-success";
      case "developing":
        return "badge-warning";
      case "new":
        return "badge-info";
      default:
        return "badge-neutral";
    }
  }
  onFilter(value) {
    this.filter.set(value);
  }
  constructor(seed) {
    this.seed = seed;
    this.today = /* @__PURE__ */ new Date("2026-07-10");
    this.filter = signal("");
    this.filtered = computed(() => {
      const q = this.filter().trim().toLowerCase();
      if (!q)
        return this.seed.contacts();
      return this.seed.contacts().filter((c) => c.name.toLowerCase().includes(q));
    });
    this.totalContacts = computed(() => this.seed.contacts().length);
    this.championCount = computed(() => this.seed.contacts().filter((c) => c.isChampion).length);
    this.staleCount = computed(() => this.seed.contacts().filter((c) => this.daysSince(c.lastTouch) > 30).length);
  }
  static {
    this.\u0275fac = function ContactsComponent_Factory(t) {
      return new (t || _ContactsComponent)(\u0275\u0275directiveInject(SeedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsComponent, selectors: [["app-contacts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 7, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "grid", "stat-grid"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "card", "card-pad", "filter-bar"], ["type", "text", "placeholder", "Filter contacts by name\u2026", 3, "input", "value"], [1, "card"], [1, "table-wrap"], [1, "table"], [1, "clickable", 3, "routerLink"], [1, "c-cell"], [1, "avatar"], [1, "c-name"], ["title", "Champion", 1, "champion"], [1, "badge"], [1, "mono"], [1, "badge", "badge-danger", "stale-badge"], ["colspan", "5", 1, "muted"]], template: function ContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Contacts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Relationships, champions and recency of touch.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9, "Total contacts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6);
        \u0275\u0275text(14, "Champions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 5)(18, "div", 6);
        \u0275\u0275text(19, "Not touched > 30 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 7);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 8)(23, "input", 9);
        \u0275\u0275listener("input", function ContactsComponent_Template_input_input_23_listener($event) {
          return ctx.onFilter($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 11)(26, "table", 12)(27, "thead")(28, "tr")(29, "th");
        \u0275\u0275text(30, "Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th");
        \u0275\u0275text(32, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Relationship");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Last touch");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "tbody");
        \u0275\u0275repeaterCreate(40, ContactsComponent_For_41_Template, 19, 13, "tr", 13, _forTrack0, false, ContactsComponent_ForEmpty_42_Template, 3, 1, "tr");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.totalContacts());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.championCount());
        \u0275\u0275advance(4);
        \u0275\u0275classProp("stat-alert", ctx.staleCount() > 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.staleCount());
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.filter());
        \u0275\u0275advance(17);
        \u0275\u0275repeater(ctx.filtered());
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.stat-value.stat-alert[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  margin: var(--sp-4) 0;\n  padding: var(--sp-3) var(--sp-4);\n}\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.c-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n}\n.c-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 999px;\n  background: var(--color-brand-600);\n  color: #fff;\n  font-weight: 700;\n  font-size: var(--fs-sm);\n  flex-shrink: 0;\n}\n.champion[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.stale-badge[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n/*# sourceMappingURL=contacts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsComponent, { className: "ContactsComponent", filePath: "src/app/features/contacts/contacts.component.ts", lineNumber: 13 });
})();
export {
  ContactsComponent
};
//# sourceMappingURL=contacts.component-B6OJF3WJ.js.map
