import {
  AuthService
} from "./chunk-YAQBASOF.js";
import "./chunk-PG5KNRNN.js";
import {
  ActivatedRoute
} from "./chunk-7UZQWTM6.js";
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RDDARQHK.js";

// src/app/features/milestones/milestones.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MilestonesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275text(1, "\uFF0B Add milestone");
    \u0275\u0275elementEnd();
  }
}
function MilestonesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2, "\u{1F6A9}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No milestones yet.");
    \u0275\u0275elementEnd()();
  }
}
function MilestonesComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.dotClass(m_r1.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r1.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.statusClass(m_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(m_r1.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Due ", ctx_r1.fmt(m_r1.dueOn), "");
  }
}
function MilestonesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 8);
    \u0275\u0275repeaterCreate(1, MilestonesComponent_Conditional_10_For_2_Template, 10, 7, "li", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sorted());
  }
}
var MilestonesComponent = class _MilestonesComponent {
  constructor(auth, route) {
    this.auth = auth;
    this.route = route;
    this.projectId = signal("");
    this.milestones = signal([
      { id: "m1", projectId: "p1", name: "Permits approved", dueOn: "2026-02-20", status: "done" },
      { id: "m2", projectId: "p1", name: "Foundation inspection passed", dueOn: "2026-04-18", status: "done" },
      { id: "m3", projectId: "p1", name: "Structural frame topped out", dueOn: "2026-05-15", status: "late" },
      { id: "m4", projectId: "p1", name: "Building dried-in (weather-tight)", dueOn: "2026-06-20", status: "pending" },
      { id: "m5", projectId: "p1", name: "Final occupancy inspection", dueOn: "2026-08-01", status: "pending" }
    ]);
    this.sorted = computed(() => [...this.milestones()].sort((a, b) => Date.parse(a.dueOn) - Date.parse(b.dueOn)));
    this.counts = computed(() => {
      const c = { done: 0, pending: 0, late: 0 };
      for (const m of this.milestones())
        c[m.status]++;
      return c;
    });
  }
  ngOnInit() {
    this.route.parent?.paramMap.subscribe((p) => this.projectId.set(p.get("id") ?? ""));
  }
  fmt(iso) {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  statusLabel(s) {
    return { pending: "Pending", done: "Done", late: "Late" }[s];
  }
  statusClass(s) {
    return { pending: "badge-muted", done: "badge-ok", late: "badge-danger" }[s];
  }
  dotClass(s) {
    return { pending: "pending", done: "done", late: "late" }[s];
  }
  static {
    this.\u0275fac = function MilestonesComponent_Factory(t) {
      return new (t || _MilestonesComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MilestonesComponent, selectors: [["app-milestones"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 5, consts: [[1, "ms-head"], [1, "ms-counts"], [1, "badge", "badge-ok"], [1, "badge", "badge-muted"], [1, "badge", "badge-danger"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"], [1, "state"], [1, "state-icon"], [1, "timeline", "card", "card-pad"], [1, "tl-item"], ["aria-hidden", "true", 1, "tl-dot"], [1, "tl-body"], [1, "tl-row"], [1, "tl-name"], [1, "badge"], [1, "tl-date", "muted"]], template: function MilestonesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, MilestonesComponent_Conditional_8_Template, 2, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, MilestonesComponent_Conditional_9_Template, 5, 0, "div", 6)(10, MilestonesComponent_Conditional_10_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", ctx.counts().done, " done");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.counts().pending, " pending");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.counts().late, " late");
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.auth.isPlanner() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.sorted().length === 0 ? 9 : 10);
      }
    }, dependencies: [CommonModule], styles: ['\n\n.ms-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-4);\n}\n.ms-counts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.ms-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: var(--space-5);\n}\n.tl-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: var(--space-4);\n  padding-bottom: var(--space-5);\n}\n.tl-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 18px;\n  bottom: 0;\n  width: 2px;\n  background: var(--color-border);\n}\n.tl-item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.tl-item[_ngcontent-%COMP%]:last-child::before {\n  display: none;\n}\n.tl-dot[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  flex: none;\n  width: 14px;\n  height: 14px;\n  margin-top: 4px;\n  border-radius: 50%;\n  border: 3px solid var(--color-surface);\n  box-shadow: 0 0 0 1px var(--color-border-strong);\n}\n.tl-dot.done[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  box-shadow: 0 0 0 1px var(--color-success);\n}\n.tl-dot.pending[_ngcontent-%COMP%] {\n  background: var(--color-faint);\n}\n.tl-dot.late[_ngcontent-%COMP%] {\n  background: var(--color-danger);\n  box-shadow: 0 0 0 1px var(--color-danger);\n}\n.tl-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.tl-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.tl-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.tl-date[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-sm);\n  margin-top: 2px;\n}\n/*# sourceMappingURL=milestones.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MilestonesComponent, { className: "MilestonesComponent", filePath: "src/app/features/milestones/milestones.component.ts", lineNumber: 22 });
})();
export {
  MilestonesComponent
};
//# sourceMappingURL=milestones.component-GJAGBH3P.js.map
