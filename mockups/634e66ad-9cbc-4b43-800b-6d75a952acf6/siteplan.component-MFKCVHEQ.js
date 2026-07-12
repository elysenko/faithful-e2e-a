import {
  toSignal
} from "./chunk-6BXBCN5T.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7F3Y7YLT.js";
import {
  AuthService
} from "./chunk-CVPORU2Z.js";
import {
  SiteviewService
} from "./chunk-S3M52NQH.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-VMQX45X4.js";
import {
  CommonModule,
  NgClass,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VZ6O3Y2G.js";

// src/app/features/project/siteplan/siteplan.component.ts
var _c0 = ["stage"];
var _forTrack0 = ($index, $item) => $item.id;
function SiteplanComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Click the plan to add \xB7 drag markers to reposition. ");
  }
}
function SiteplanComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Read-only view. ");
  }
}
function SiteplanComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "No site plan uploaded for this project.");
    \u0275\u0275elementEnd();
  }
}
function SiteplanComponent_Conditional_16_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("pointerdown", function SiteplanComponent_Conditional_16_For_5_Template_button_pointerdown_0_listener($event) {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMarkerPointerDown(m_r4, $event));
    })("pointermove", function SiteplanComponent_Conditional_16_For_5_Template_button_pointermove_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMarkerPointerMove($event));
    })("pointerup", function SiteplanComponent_Conditional_16_For_5_Template_button_pointerup_0_listener($event) {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMarkerPointerUp(m_r4, $event));
    })("click", function SiteplanComponent_Conditional_16_For_5_Template_button_click_0_listener($event) {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectMarker(m_r4.id, $event));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("left", ctx_r1.markerLeft(m_r4), "%")("top", ctx_r1.markerTop(m_r4), "%");
    \u0275\u0275classProp("selected", ctx_r1.selectedId() === m_r4.id);
    \u0275\u0275property("ngClass", m_r4.type);
    \u0275\u0275attribute("aria-label", m_r4.type + ": " + m_r4.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.type === "hazard" ? "\u26A0" : "\u2699");
  }
}
function SiteplanComponent_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div")(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sm_r5 = ctx;
    \u0275\u0275property("ngClass", sm_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", sm_r5.type === "hazard" ? "badge-danger" : "badge-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sm_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sm_r5.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("x ", sm_r5.x.toFixed(2), ", y ", sm_r5.y.toFixed(2), "");
  }
}
function SiteplanComponent_Conditional_16_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_16_For_9_Template_li_click_0_listener($event) {
      const m_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectMarker(m_r7.id, $event));
    });
    \u0275\u0275element(1, "span", 20);
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedId() === m_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", m_r7.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r7.note);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", m_r7.type === "hazard" ? "badge-danger" : "badge-info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r7.type);
  }
}
function SiteplanComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9, 0);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStageClick($event));
    });
    \u0275\u0275element(3, "img", 10);
    \u0275\u0275repeaterCreate(4, SiteplanComponent_Conditional_16_For_5_Template, 3, 9, "button", 11, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SiteplanComponent_Conditional_16_Conditional_6_Template, 8, 6, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 13);
    \u0275\u0275repeaterCreate(8, SiteplanComponent_Conditional_16_For_9_Template, 6, 6, "li", 14, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("planner", ctx_r1.auth.isPlanner());
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.plan().imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.markers());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(6, (tmp_5_0 = ctx_r1.selectedMarker()) ? 6 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.markers());
  }
}
function SiteplanComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Add marker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24)(7, "label", 25);
    \u0275\u0275text(8, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function SiteplanComponent_Conditional_17_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.type, $event) || (ctx_r1.draft.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 27);
    \u0275\u0275text(11, "Equipment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 28);
    \u0275\u0275text(13, "Hazard");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 24)(15, "label", 29);
    \u0275\u0275text(16, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function SiteplanComponent_Conditional_17_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.note, $event) || (ctx_r1.draft.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 31)(19, "button", 32);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_17_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 33);
    \u0275\u0275listener("click", function SiteplanComponent_Conditional_17_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveMarker());
    });
    \u0275\u0275text(22, "Add marker");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Placed at x ", ctx_r1.pending.x.toFixed(2), ", y ", ctx_r1.pending.y.toFixed(2), "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.type);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.note);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.draft.note.trim());
  }
}
var SiteplanComponent = class _SiteplanComponent {
  constructor(auth, sv, router, route) {
    this.auth = auth;
    this.sv = sv;
    this.router = router;
    this.route = route;
    this.projectId = this.route.parent?.snapshot.paramMap.get("id") ?? "";
    this.qp = toSignal(this.route.queryParamMap, { requireSync: true });
    this.refresh = signal(0);
    this.plan = computed(() => this.sv.sitePlanForProject(this.projectId));
    this.markers = computed(() => {
      this.refresh();
      const p = this.plan();
      return p ? this.sv.markersForPlan(p.id) : [];
    });
    this.selectedId = computed(() => this.qp().get("marker"));
    this.modalOpen = computed(() => this.qp().get("modal") === "marker");
    this.draggingId = null;
    this.dragPos = signal(null);
    this.pending = { x: 0.5, y: 0.5 };
    this.draft = { type: "equipment", note: "" };
    this.selectedMarker = computed(() => this.markers().find((m) => m.id === this.selectedId()) ?? null);
  }
  markerLeft(m) {
    const d = this.dragPos();
    return (d && d.id === m.id ? d.x : m.x) * 100;
  }
  markerTop(m) {
    const d = this.dragPos();
    return (d && d.id === m.id ? d.y : m.y) * 100;
  }
  normFromEvent(ev) {
    const rect = this.stage.nativeElement.getBoundingClientRect();
    return {
      x: Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width)),
      y: Math.min(1, Math.max(0, (ev.clientY - rect.top) / rect.height))
    };
  }
  selectMarker(id, ev) {
    ev.stopPropagation();
    this.router.navigate([], { queryParams: { marker: id }, queryParamsHandling: "merge" });
  }
  // ---- Drag (planner only) ----
  onMarkerPointerDown(m, ev) {
    if (!this.auth.isPlanner())
      return;
    ev.preventDefault();
    ev.stopPropagation();
    this.draggingId = m.id;
    this.dragPos.set({ id: m.id, x: m.x, y: m.y });
    ev.target.setPointerCapture(ev.pointerId);
  }
  onMarkerPointerMove(ev) {
    if (!this.draggingId)
      return;
    const { x, y } = this.normFromEvent(ev);
    this.dragPos.set({ id: this.draggingId, x, y });
  }
  onMarkerPointerUp(m, ev) {
    if (this.draggingId !== m.id)
      return;
    const { x, y } = this.normFromEvent(ev);
    this.sv.moveMarker(m.id, x, y);
    this.draggingId = null;
    this.dragPos.set(null);
    this.refresh.update((n) => n + 1);
  }
  // ---- Add marker (planner) ----
  onStageClick(ev) {
    if (!this.auth.isPlanner() || !this.plan())
      return;
    const rect = this.stage.nativeElement.getBoundingClientRect();
    this.pending = {
      x: Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width)),
      y: Math.min(1, Math.max(0, (ev.clientY - rect.top) / rect.height))
    };
    this.draft = { type: "equipment", note: "" };
    this.router.navigate([], { queryParams: { modal: "marker" }, queryParamsHandling: "merge" });
  }
  closeModal() {
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  saveMarker() {
    const p = this.plan();
    if (!p || !this.draft.note.trim())
      return;
    const created = this.sv.createMarker({
      planId: p.id,
      x: this.pending.x,
      y: this.pending.y,
      type: this.draft.type,
      note: this.draft.note.trim()
    });
    this.refresh.update((n) => n + 1);
    this.router.navigate([], { queryParams: { modal: null, marker: created.id }, queryParamsHandling: "merge" });
  }
  static {
    this.\u0275fac = function SiteplanComponent_Factory(t) {
      return new (t || _SiteplanComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SiteviewService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteplanComponent, selectors: [["app-siteplan"]], viewQuery: function SiteplanComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stage = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 3, consts: [["stage", ""], [1, "sp-head"], [1, "muted"], [1, "legend"], [1, "dot", "equipment"], [1, "dot", "hazard"], [1, "state", "card"], [1, "modal-backdrop"], [1, "plan-card", "card"], [1, "stage", 3, "click"], ["width", "1000", "height", "700", "alt", "Site plan", "draggable", "false", 3, "src"], ["type", "button", 1, "marker", 3, "ngClass", "selected", "left", "top"], [1, "marker-detail", 3, "ngClass"], [1, "marker-list"], [1, "card", 3, "selected"], ["type", "button", 1, "marker", 3, "pointerdown", "pointermove", "pointerup", "click", "ngClass"], [1, "pin"], [1, "badge", 3, "ngClass"], [1, "coords", "muted"], [1, "card", 3, "click"], [1, "dot", 3, "ngClass"], [1, "m-note"], [1, "modal-backdrop", 3, "click"], [1, "modal", "card", 3, "click"], [1, "field"], ["for", "mtype"], ["id", "mtype", 3, "ngModelChange", "ngModel"], ["value", "equipment"], ["value", "hazard"], ["for", "mnote"], ["id", "mnote", "type", "text", "placeholder", "e.g. Tower crane TC-2", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function SiteplanComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div")(2, "h2");
        \u0275\u0275text(3, "Site Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, " Equipment & hazard markers. ");
        \u0275\u0275template(6, SiteplanComponent_Conditional_6_Template, 1, 0)(7, SiteplanComponent_Conditional_7_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "span");
        \u0275\u0275element(10, "i", 4);
        \u0275\u0275text(11, " Equipment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275element(13, "i", 5);
        \u0275\u0275text(14, " Hazard");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, SiteplanComponent_Conditional_15_Template, 2, 0, "div", 6)(16, SiteplanComponent_Conditional_16_Template, 10, 4)(17, SiteplanComponent_Conditional_17_Template, 23, 5, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.auth.isPlanner() ? 6 : 7);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(15, !ctx.plan() ? 15 : 16);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(17, ctx.modalOpen() ? 17 : -1);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.sp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-4);\n}\n.sp-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  font-size: var(--fs-sm);\n  color: var(--color-text-muted);\n}\n.legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n  flex: none;\n}\n.dot.equipment[_ngcontent-%COMP%] {\n  background: var(--color-equipment);\n}\n.dot.hazard[_ngcontent-%COMP%] {\n  background: var(--color-hazard);\n}\n.plan-card[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.stage[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 10 / 7;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background: var(--color-surface-inset);\n  touch-action: none;\n}\n.stage.planner[_ngcontent-%COMP%] {\n  cursor: crosshair;\n}\n.stage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n.marker[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 34px;\n  height: 34px;\n  margin-left: -17px;\n  margin-top: -17px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1rem;\n  border: 2px solid #fff;\n  box-shadow: var(--shadow-md);\n  touch-action: none;\n  transition: transform 0.05s ease;\n}\n.marker.equipment[_ngcontent-%COMP%] {\n  background: var(--color-equipment);\n}\n.marker.hazard[_ngcontent-%COMP%] {\n  background: var(--color-hazard);\n}\n.marker.selected[_ngcontent-%COMP%] {\n  outline: 3px solid var(--color-accent);\n  outline-offset: 2px;\n  z-index: 5;\n}\n.stage.planner[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n.stage.planner[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n  transform: scale(1.12);\n}\n.marker-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n  margin-top: var(--space-3);\n  padding: var(--space-3);\n  border-radius: var(--radius-sm);\n  background: var(--color-surface-inset);\n}\n.marker-detail[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-left: var(--space-2);\n}\n.coords[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-family: var(--font-mono);\n}\n.marker-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.marker-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) var(--space-4);\n  cursor: pointer;\n  min-height: 48px;\n}\n.marker-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-sm);\n}\n.marker-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n}\n.m-note[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 600;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n  background: rgba(27, 36, 48, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--space-5);\n}\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  margin-bottom: var(--space-2);\n}\n.field[_ngcontent-%COMP%] {\n  margin: var(--space-4) 0;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .modal-backdrop[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    padding: 0;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-width: none;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n    padding-bottom: calc(var(--space-5) + var(--safe-bottom));\n  }\n}\n/*# sourceMappingURL=siteplan.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteplanComponent, { className: "SiteplanComponent", filePath: "src/app/features/project/siteplan/siteplan.component.ts", lineNumber: 17 });
})();
export {
  SiteplanComponent
};
//# sourceMappingURL=siteplan.component-MFKCVHEQ.js.map
