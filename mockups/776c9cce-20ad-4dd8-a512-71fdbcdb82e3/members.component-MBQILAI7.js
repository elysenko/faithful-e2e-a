import {
  RouterLink
} from "./chunk-GFN35O44.js";
import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate
} from "./chunk-KFEQ7DOY.js";

// src/app/pages/members/members.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/members", a0];
function MembersComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4, "No members match your search.");
    \u0275\u0275elementEnd()();
  }
}
function MembersComponent_Conditional_10_For_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1.level);
  }
}
function MembersComponent_Conditional_10_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 11)(1, "td")(2, "a", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, MembersComponent_Conditional_10_For_14_Conditional_7_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, m_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, m_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, m_r1.level ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(m_r1.role === "coach" ? "badge-info" : "badge-neutral");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1.role);
  }
}
function MembersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Role");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, MembersComponent_Conditional_10_For_14_Template, 11, 12, "tr", 11, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
var MembersComponent = class _MembersComponent {
  constructor() {
    this.query = signal("");
    this.members = signal([
      { id: "u1", name: "Coach Dana", email: "coach@demo", role: "coach", level: "competitive" },
      { id: "u2", name: "Alex Rivers", email: "alex@demo", role: "member", level: "intermediate" },
      { id: "u3", name: "Sam Brooks", email: "sam@demo", role: "member", level: "novice" },
      { id: "u4", name: "Jordan Lake", email: "jordan@demo", role: "member", level: "competitive" },
      { id: "u5", name: "Casey Waters", email: "casey@demo", role: "member", level: "intermediate" },
      { id: "u6", name: "Robin Shore", email: "robin@demo", role: "member", level: "novice" }
    ]);
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      if (!q)
        return this.members();
      return this.members().filter((m) => [m.name, m.email].filter((v) => !!v).some((v) => v.toLowerCase().includes(q)));
    });
  }
  static {
    this.\u0275fac = function MembersComponent_Factory(t) {
      return new (t || _MembersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MembersComponent, selectors: [["app-members"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "container", "stack"], [1, "section-title"], [1, "stack", 2, "gap", "var(--sp-1)"], [1, "eyebrow"], [1, "filter-bar"], ["type", "text", "placeholder", "Search by name or email", 1, "input", 3, "input", "value"], [1, "state"], [1, "state-icon"], [1, "muted"], [1, "table-wrap"], [1, "data"], [1, "clickable", 3, "routerLink"], [3, "routerLink"], [1, "tag"], [1, "badge"]], template: function MembersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Members");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4)(8, "input", 5);
        \u0275\u0275listener("input", function MembersComponent_Template_input_input_8_listener($event) {
          return ctx.query.set($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, MembersComponent_Conditional_9_Template, 5, 0, "div", 6)(10, MembersComponent_Conditional_10_Template, 15, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("value", ctx.query());
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.filtered().length === 0 ? 9 : 10);
      }
    }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MembersComponent, { className: "MembersComponent", filePath: "src/app/pages/members/members.component.ts", lineNumber: 12 });
})();
export {
  MembersComponent
};
//# sourceMappingURL=members.component-MBQILAI7.js.map
