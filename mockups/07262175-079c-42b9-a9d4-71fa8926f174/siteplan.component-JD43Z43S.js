import {
  AuthService
} from "./chunk-YAQBASOF.js";
import "./chunk-PG5KNRNN.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-7UZQWTM6.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RDDARQHK.js";

// src/app/features/siteplan/siteplan.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [125, 250, 375, 500, 625, 750, 875];
var _c1 = () => [80, 160, 240, 320, 400, 480, 560];
function SiteplanComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 19);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMode("select"));
    });
    \u0275\u0275text(2, "\u270B Move");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMode("equipment"));
    });
    \u0275\u0275text(4, "\uFF0B Equipment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMode("hazard"));
    });
    \u0275\u0275text(6, "\uFF0B Hazard");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.mode() === "select");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.mode() === "equipment");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.mode() === "hazard");
  }
}
function SiteplanComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "View only");
    \u0275\u0275elementEnd();
  }
}
function SiteplanComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Drag a marker to reposition it, or tap one to view details. ");
  }
}
function SiteplanComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Tap anywhere on the plan to drop a ", ctx_r1.mode(), " marker. ");
  }
}
function SiteplanComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SiteplanComponent_Conditional_9_Conditional_0_Template, 1, 0)(1, SiteplanComponent_Conditional_9_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r1.mode() === "select" ? 0 : 1);
  }
}
function SiteplanComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tap a marker to view its details. ");
  }
}
function SiteplanComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 10);
  }
  if (rf & 2) {
    const gx_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("x1", gx_r3)("x2", gx_r3)("y2", ctx_r1.H);
  }
}
function SiteplanComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 11);
  }
  if (rf & 2) {
    const gy_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("y1", gy_r4)("x2", ctx_r1.W)("y2", gy_r4);
  }
}
function SiteplanComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 21);
    \u0275\u0275listener("pointerdown", function SiteplanComponent_For_27_Template_g_pointerdown_0_listener($event) {
      const m_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMarkerDown($event, m_r6));
    })("pointermove", function SiteplanComponent_For_27_Template_g_pointermove_0_listener($event) {
      const m_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMarkerMove($event, m_r6));
    })("pointerup", function SiteplanComponent_For_27_Template_g_pointerup_0_listener() {
      const m_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMarkerUp(m_r6));
    });
    \u0275\u0275element(1, "circle", 22);
    \u0275\u0275elementStart(2, "text", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "title");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", m_r6.id === ctx_r1.selectedId())("editable", ctx_r1.auth.isPlanner() && ctx_r1.mode() === "select");
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", ctx_r1.cx(m_r6))("cy", ctx_r1.cy(m_r6))("fill", m_r6.type === "hazard" ? "var(--color-marker-hazard)" : "var(--color-marker-equipment)");
    \u0275\u0275advance();
    \u0275\u0275attribute("x", ctx_r1.cx(m_r6))("y", ctx_r1.cy(m_r6) + 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r6.type === "hazard" ? "!" : "\u25A3", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r6.type, " \u2014 ", m_r6.note, "");
  }
}
function SiteplanComponent_Conditional_28_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 32);
    \u0275\u0275listener("input", function SiteplanComponent_Conditional_28_Conditional_9_Template_textarea_input_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateNote($event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r9 = \u0275\u0275nextContext();
    \u0275\u0275property("value", sel_r9.note || "");
  }
}
function SiteplanComponent_Conditional_28_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sel_r9.note || "\u2014");
  }
}
function SiteplanComponent_Conditional_28_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_28_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteSelected());
    });
    \u0275\u0275text(1, " \u{1F5D1} Delete marker ");
    \u0275\u0275elementEnd();
  }
}
function SiteplanComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 18)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 26);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.select(null));
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 27)(7, "label", 28);
    \u0275\u0275text(8, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SiteplanComponent_Conditional_28_Conditional_9_Template, 1, 1, "textarea", 29)(10, SiteplanComponent_Conditional_28_Conditional_10_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SiteplanComponent_Conditional_28_Conditional_13_Template, 2, 0, "button", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r9 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(sel_r9.type === "hazard" ? "badge-danger" : "badge-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sel_r9.type === "hazard" ? "\u26A0\uFE0F Hazard" : "\u{1F69C} Equipment", " ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(9, ctx_r1.auth.isPlanner() ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Position: ", (sel_r9.x * 100).toFixed(0), "% \xD7 ", (sel_r9.y * 100).toFixed(0), "% ");
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r1.auth.isPlanner() ? 13 : -1);
  }
}
var SiteplanComponent = class _SiteplanComponent {
  constructor(auth, route, router) {
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.projectId = signal("");
    this.W = 1e3;
    this.H = 640;
    this.plan = signal({
      id: "sp1",
      projectId: "p1",
      imageUrl: "https://placehold.co/1000x640/eaeef4/5c6b80?text=Site+Plan"
    });
    this.markers = signal([
      { id: "mk1", planId: "sp1", x: 0.22, y: 0.3, type: "equipment", note: "Tower crane TC-1" },
      { id: "mk2", planId: "sp1", x: 0.62, y: 0.24, type: "equipment", note: "Material laydown yard" },
      { id: "mk3", planId: "sp1", x: 0.44, y: 0.58, type: "hazard", note: "Open excavation \u2014 fall risk" },
      { id: "mk4", planId: "sp1", x: 0.78, y: 0.66, type: "hazard", note: "Overhead power lines" },
      { id: "mk5", planId: "sp1", x: 0.3, y: 0.74, type: "equipment", note: "Site office trailer" }
    ]);
    this.mode = signal("select");
    this.selectedId = signal(null);
    this.dragId = null;
    this.selected = computed(() => {
      const id = this.selectedId();
      return this.markers().find((m) => m.id === id) ?? null;
    });
    this.hazardCount = computed(() => this.markers().filter((m) => m.type === "hazard").length);
    this.equipCount = computed(() => this.markers().filter((m) => m.type === "equipment").length);
  }
  ngOnInit() {
    this.route.parent?.paramMap.subscribe((p) => this.projectId.set(p.get("id") ?? ""));
    this.route.queryParamMap.subscribe((q) => this.selectedId.set(q.get("marker")));
  }
  cx(m) {
    return m.x * this.W;
  }
  cy(m) {
    return m.y * this.H;
  }
  setMode(mode) {
    if (!this.auth.isPlanner())
      return;
    this.mode.set(mode);
  }
  select(id) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { marker: id },
      queryParamsHandling: "merge"
    });
  }
  // ---- Add on canvas click (planner, add mode) ----
  onCanvasClick(evt) {
    if (!this.auth.isPlanner())
      return;
    const m = this.mode();
    if (m === "select")
      return;
    const { x, y } = this.norm(evt);
    const id = "mk" + (this.markers().length + 1) + "-" + Math.round(x * 100);
    const marker = { id, planId: this.plan().id, x, y, type: m, note: "" };
    this.markers.update((list) => [...list, marker]);
    this.select(id);
  }
  // ---- Drag existing marker (planner) ----
  onMarkerDown(evt, m) {
    evt.stopPropagation();
    this.select(m.id);
    if (!this.auth.isPlanner())
      return;
    evt.target.setPointerCapture?.(evt.pointerId);
    this.dragId = m.id;
  }
  onMarkerMove(evt, m) {
    if (this.dragId !== m.id)
      return;
    const { x, y } = this.norm(evt);
    this.markers.update((list) => list.map((k) => k.id === m.id ? __spreadProps(__spreadValues({}, k), { x, y }) : k));
  }
  onMarkerUp(m) {
    if (this.dragId === m.id) {
      this.dragId = null;
    }
  }
  deleteSelected() {
    const id = this.selectedId();
    if (!id || !this.auth.isPlanner())
      return;
    this.markers.update((list) => list.filter((m) => m.id !== id));
    this.select(null);
  }
  updateNote(note) {
    const id = this.selectedId();
    if (!id)
      return;
    this.markers.update((list) => list.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { note }) : m));
  }
  norm(evt) {
    const target = evt.currentTarget;
    const svg = target.ownerSVGElement ?? target;
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm)
      return { x: 0, y: 0 };
    const loc = pt.matrixTransform(ctm.inverse());
    return {
      x: Math.max(0, Math.min(1, loc.x / this.W)),
      y: Math.max(0, Math.min(1, loc.y / this.H))
    };
  }
  static {
    this.\u0275fac = function SiteplanComponent_Factory(t) {
      return new (t || _SiteplanComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteplanComponent, selectors: [["app-siteplan"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 15, consts: [[1, "sp-head"], [1, "sp-counts"], [1, "badge", "badge-info"], [1, "badge", "badge-danger"], ["role", "group", "aria-label", "Marker tools", 1, "sp-tools"], [1, "hint", "sp-hint"], [1, "sp-layout"], [1, "card", "sp-canvas-card"], ["width", "100%", "preserveAspectRatio", "xMidYMid meet", "role", "img", "aria-label", "Site plan with equipment and hazard markers", 1, "sp-svg", 3, "click"], ["x", "0", "y", "0", "fill", "var(--color-canvas)"], ["y1", "0", "stroke", "var(--color-border)", "stroke-width", "1"], ["x1", "0", "stroke", "var(--color-border)", "stroke-width", "1"], ["x", "150", "y", "120", "width", "320", "height", "200", "rx", "8", "fill", "var(--color-surface)", "stroke", "var(--color-border-strong)", "stroke-width", "2"], ["x", "560", "y", "360", "width", "260", "height", "150", "rx", "8", "fill", "var(--color-surface)", "stroke", "var(--color-border-strong)", "stroke-width", "2"], ["x", "165", "y", "150", 1, "sp-annot"], ["x", "575", "y", "390", 1, "sp-annot"], ["x", "0", "y", "0", "preserveAspectRatio", "xMidYMid slice", "opacity", "0.0"], [1, "marker", 3, "selected", "editable"], [1, "card", "sp-panel"], ["type", "button", 1, "tool", 3, "click"], [1, "badge", "badge-muted"], [1, "marker", 3, "pointerdown", "pointermove", "pointerup"], ["r", "16", "stroke", "var(--color-surface)", "stroke-width", "3"], ["text-anchor", "middle", 1, "marker-icon"], [1, "panel-head"], [1, "badge"], ["type", "button", "aria-label", "Close", 1, "icon-x", 3, "click"], [1, "field"], ["for", "note"], ["id", "note", "placeholder", "Describe this marker\u2026", 3, "value"], [1, "panel-coords", "muted"], ["type", "button", 1, "btn", "btn-danger", "btn-block"], ["id", "note", "placeholder", "Describe this marker\u2026", 3, "input", "value"], [1, "panel-note"], ["type", "button", 1, "btn", "btn-danger", "btn-block", 3, "click"]], template: function SiteplanComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, SiteplanComponent_Conditional_6_Template, 7, 6, "div", 4)(7, SiteplanComponent_Conditional_7_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275template(9, SiteplanComponent_Conditional_9_Template, 2, 1)(10, SiteplanComponent_Conditional_10_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 8);
        \u0275\u0275listener("click", function SiteplanComponent_Template_svg_click_13_listener($event) {
          return ctx.onCanvasClick($event);
        });
        \u0275\u0275element(14, "rect", 9);
        \u0275\u0275repeaterCreate(15, SiteplanComponent_For_16_Template, 1, 3, ":svg:line", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(17, SiteplanComponent_For_18_Template, 1, 3, ":svg:line", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275element(19, "rect", 12)(20, "rect", 13);
        \u0275\u0275elementStart(21, "text", 14);
        \u0275\u0275text(22, "Main Structure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "text", 15);
        \u0275\u0275text(24, "Annex");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "image", 16);
        \u0275\u0275repeaterCreate(26, SiteplanComponent_For_27_Template, 6, 12, ":svg:g", 17, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, SiteplanComponent_Conditional_28_Template, 14, 7, "aside", 18);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_14_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\u{1F69C} ", ctx.equipCount(), " equipment");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx.hazardCount(), " hazards");
        \u0275\u0275advance();
        \u0275\u0275conditional(6, ctx.auth.isPlanner() ? 6 : 7);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(9, ctx.auth.isPlanner() ? 9 : 10);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("adding", ctx.auth.isPlanner() && ctx.mode() !== "select");
        \u0275\u0275attribute("viewBox", "0 0 " + ctx.W + " " + ctx.H);
        \u0275\u0275advance();
        \u0275\u0275attribute("width", ctx.W)("height", ctx.H);
        \u0275\u0275advance();
        \u0275\u0275repeater(\u0275\u0275pureFunction0(13, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(14, _c1));
        \u0275\u0275advance(8);
        \u0275\u0275attribute("href", ctx.plan().imageUrl)("width", ctx.W)("height", ctx.H);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.markers());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(28, (tmp_14_0 = ctx.selected()) ? 28 : -1, tmp_14_0);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.sp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-2);\n}\n.sp-counts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.sp-tools[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-1);\n  margin-left: auto;\n  flex-wrap: wrap;\n}\n.tool[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  color: var(--color-ink-soft);\n  font-family: inherit;\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  cursor: pointer;\n}\n.tool[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n}\n.tool.active[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n  border-color: var(--color-brand);\n  color: var(--color-text-inverse);\n}\n.sp-hint[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.sp-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  align-items: flex-start;\n}\n.sp-canvas-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: var(--space-2);\n  overflow: hidden;\n}\n.sp-svg[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: var(--radius);\n  touch-action: none;\n}\n.sp-svg.adding[_ngcontent-%COMP%] {\n  cursor: crosshair;\n}\n.sp-annot[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  fill: var(--color-muted);\n  font-family: var(--font-sans);\n}\n.marker[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.marker.editable[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n.marker.editable[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.marker-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  fill: var(--color-text-inverse);\n  pointer-events: none;\n  font-family: var(--font-sans);\n}\n.marker.selected[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: var(--color-ink);\n  stroke-width: 4;\n}\n.marker[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  transition: r .08s;\n}\n.marker.selected[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  r: 19;\n}\n.sp-panel[_ngcontent-%COMP%] {\n  width: 300px;\n  flex: none;\n  padding: var(--space-4);\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: var(--space-3);\n}\n.panel-head[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.icon-x[_ngcontent-%COMP%] {\n  width: 36px;\n  min-height: 36px;\n  border: none;\n  border-radius: var(--radius);\n  background: var(--color-surface-alt);\n  font-size: var(--fs-base);\n  cursor: pointer;\n}\n.panel-note[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: var(--space-2) 0;\n}\n.panel-coords[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  margin-bottom: var(--space-4);\n}\n@media (max-width: 860px) {\n  .sp-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .sp-panel[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: calc(var(--bottomnav-h) + var(--safe-bottom));\n    width: 100%;\n    box-shadow: var(--shadow-lg);\n  }\n}\n/*# sourceMappingURL=siteplan.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteplanComponent, { className: "SiteplanComponent", filePath: "src/app/features/siteplan/siteplan.component.ts", lineNumber: 27 });
})();
export {
  SiteplanComponent
};
//# sourceMappingURL=siteplan.component-JD43Z43S.js.map
