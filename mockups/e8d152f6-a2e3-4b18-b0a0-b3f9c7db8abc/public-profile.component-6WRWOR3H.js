import {
  toSignal
} from "./chunk-AO7EV4LS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-R7WOM4WC.js";
import {
  AvatarComponent
} from "./chunk-2YFTR47U.js";
import {
  ActivatedRoute,
  CommonModule,
  EventEmitter,
  Router,
  computed,
  inject,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4ZKGBDGO.js";

// src/app/shared/report-modal/report-modal.component.ts
function ReportModalComponent_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function ReportModalComponent_Conditional_3_For_8_Template_button_click_0_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.reason.set(r_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r3.reason() === r_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3);
  }
}
function ReportModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 5);
    \u0275\u0275text(5, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275repeaterCreate(7, ReportModalComponent_Conditional_3_For_8_Template, 2, 3, "button", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 8);
    \u0275\u0275text(10, "Add detail (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 9);
    \u0275\u0275listener("ngModelChange", function ReportModalComponent_Conditional_3_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.detail.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
    \u0275\u0275listener("click", function ReportModalComponent_Conditional_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.dismiss.emit());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 12);
    \u0275\u0275listener("click", function ReportModalComponent_Conditional_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submit());
    });
    \u0275\u0275text(16, " Submit report ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Report ", ctx_r3.targetName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Reports are confidential and reviewed by our moderation team. ", ctx_r3.targetName, " won't know you reported them. ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.reasons);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.detail());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r3.reason());
  }
}
function ReportModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2", 3);
    \u0275\u0275text(5, "Report submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 18);
    \u0275\u0275text(7, "Thanks for helping keep Rapport safe. Our team will review it shortly.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 19);
    \u0275\u0275listener("click", function ReportModalComponent_Conditional_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.dismiss.emit());
    });
    \u0275\u0275text(9, "Done");
    \u0275\u0275elementEnd()();
  }
}
var ReportModalComponent = class _ReportModalComponent {
  constructor() {
    this.targetName = "this member";
    this.submitted = new EventEmitter();
    this.dismiss = new EventEmitter();
    this.reasons = [
      "Inappropriate photos",
      "Fake or impersonated profile",
      "Harassment or abusive messages",
      "Spam or solicitation",
      "Off-platform / scam behaviour",
      "Other"
    ];
    this.reason = signal("");
    this.detail = signal("");
    this.done = signal(false);
  }
  submit() {
    if (!this.reason())
      return;
    this.done.set(true);
    this.submitted.emit({ reason: this.reason(), detail: this.detail() });
  }
  static {
    this.\u0275fac = function ReportModalComponent_Factory(t) {
      return new (t || _ReportModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportModalComponent, selectors: [["app-report-modal"]], inputs: { targetName: "targetName" }, outputs: { submitted: "submitted", dismiss: "dismiss" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "sheet", 3, "click"], ["aria-hidden", "true", 1, "grabber"], [1, "sheet-title"], [1, "muted", "sheet-sub"], ["for", "report-reason"], [1, "reasons"], ["type", "button", 1, "reason-chip", 3, "selected"], ["for", "report-detail"], ["id", "report-detail", "rows", "3", "placeholder", "Share anything that helps our team review this report.", 3, "ngModelChange", "ngModel"], [1, "sheet-actions"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-danger", 3, "click", "disabled"], ["type", "button", 1, "reason-chip", 3, "click"], [1, "report-done"], ["aria-hidden", "true", 1, "check"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M4.5 12.75l6 6 9-13.5", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "muted"], [1, "btn", "btn-primary", "btn-block", 3, "click"]], template: function ReportModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function ReportModalComponent_Template_div_click_0_listener() {
          return ctx.dismiss.emit();
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275listener("click", function ReportModalComponent_Template_div_click_1_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275template(3, ReportModalComponent_Conditional_3_Template, 17, 4)(4, ReportModalComponent_Conditional_4_Template, 10, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, !ctx.done() ? 3 : 4);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  background: rgba(23, 26, 33, 0.55);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  animation: _ngcontent-%COMP%_fade 0.2s ease;\n}\n.sheet[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n  background: var(--color-surface);\n  border-radius: var(--radius-xl) var(--radius-xl) 0 0;\n  box-shadow: var(--shadow-lg);\n  padding: var(--space-3) var(--space-5) var(--space-6);\n  padding-bottom: calc(var(--space-6) + env(safe-area-inset-bottom));\n  animation: _ngcontent-%COMP%_slide-up 0.25s cubic-bezier(0.18, 0.9, 0.32, 1.1);\n}\n.grabber[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  border-radius: var(--radius-full);\n  background: var(--color-border-strong);\n  margin: 4px auto var(--space-4);\n}\n.sheet-title[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\n.sheet-sub[_ngcontent-%COMP%] {\n  margin: 6px 0 var(--space-5);\n  font-size: var(--text-sm);\n}\n.reasons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: var(--space-4);\n}\n.reason-chip[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  min-height: 40px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-surface);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  font-weight: 600;\n  transition: all 0.12s ease;\n}\n.reason-chip.selected[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  border-color: var(--color-danger);\n  color: var(--color-danger);\n}\n.sheet-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr;\n  gap: 10px;\n  margin-top: var(--space-5);\n}\n.report-done[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-4) 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n}\n.check[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-full);\n  background: var(--color-success-soft);\n  color: var(--color-success);\n}\n.check[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n@media (min-width: 560px) {\n  .overlay[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .sheet[_ngcontent-%COMP%] {\n    border-radius: var(--radius-xl);\n    margin-bottom: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=report-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportModalComponent, { className: "ReportModalComponent", filePath: "src/app/shared/report-modal/report-modal.component.ts", lineNumber: 18 });
})();

// src/app/features/public-profile/public-profile.component.ts
function PublicProfileComponent_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    \u0275\u0275classProp("active", i_r3 === 0);
  }
}
function PublicProfileComponent_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Verified ");
    \u0275\u0275elementEnd();
  }
}
function PublicProfileComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r4.mutuals, " shared professional connection", p_r4.mutuals === 1 ? "" : "s", " on LinkedIn ");
  }
}
function PublicProfileComponent_Conditional_1_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r5);
  }
}
function PublicProfileComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 3);
    \u0275\u0275listener("click", function PublicProfileComponent_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 4);
    \u0275\u0275element(3, "path", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 6);
    \u0275\u0275listener("click", function PublicProfileComponent_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openReport());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 4);
    \u0275\u0275element(6, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275element(8, "app-avatar", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275repeaterCreate(10, PublicProfileComponent_Conditional_1_For_11_Template, 1, 2, "span", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "h1", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, PublicProfileComponent_Conditional_1_Conditional_16_Template, 4, 0, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 16);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "span", 17);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 19);
    \u0275\u0275element(23, "path", 20)(24, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, PublicProfileComponent_Conditional_1_Conditional_26_Template, 2, 2, "div", 22);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "section", 23)(28, "h2", 24);
    \u0275\u0275text(29, "Headline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 25);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "section", 23)(33, "h2", 24);
    \u0275\u0275text(34, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 26);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "section", 23)(38, "h2", 24);
    \u0275\u0275text(39, "Interests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 27);
    \u0275\u0275repeaterCreate(41, PublicProfileComponent_Conditional_1_For_42_Template, 2, 1, "span", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 29);
    \u0275\u0275listener("click", function PublicProfileComponent_Conditional_1_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openReport());
    });
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 30)(46, "button", 31);
    \u0275\u0275listener("click", function PublicProfileComponent_Conditional_1_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(47, "Back to discover");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 32);
    \u0275\u0275listener("click", function PublicProfileComponent_Conditional_1_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.message());
    });
    \u0275\u0275text(49, "Message");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("background", "var(--grad-2)");
    \u0275\u0275advance();
    \u0275\u0275property("name", p_r4.name)("size", 120);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.photoIndexes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", p_r4.name, ", ", p_r4.age, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(16, p_r4.verified ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r4.jobTitle, " \xB7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.employer);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", p_r4.location, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(26, p_r4.mutuals > 0 ? 26 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u201C", p_r4.headline, "\u201D");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r4.bio);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(p_r4.interests);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Report ", p_r4.name.split(" ")[0], "");
  }
}
function PublicProfileComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-report-modal", 35);
    \u0275\u0275listener("submitted", function PublicProfileComponent_Conditional_2_Template_app_report_modal_submitted_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReportSubmitted($event));
    })("dismiss", function PublicProfileComponent_Conditional_2_Template_app_report_modal_dismiss_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReport());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("targetName", ctx_r1.person().name);
  }
}
var PublicProfileComponent = class _PublicProfileComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.userId = toSignal(this.route.paramMap.pipe(map((p) => p.get("userId") ?? "")), {
      initialValue: ""
    });
    this.showReport = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("modal") === "report")), { initialValue: false });
    this.directory = signal([
      { id: "u201", name: "Priya Nair", age: 29, jobTitle: "Senior Data Scientist", employer: "Helix Bio", location: "Boston, MA", headline: "Turning messy data into calm decisions", bio: "ML researcher by day, trail runner by weekend. Looking for someone who is curious, kind, and can debate the best ramen spot in town.", mutuals: 4, interests: ["Running", "Jazz", "Startups", "Ramen"], verified: true, likesYou: true },
      { id: "u203", name: "Sofia Ramos", age: 27, jobTitle: "Brand Strategist", employer: "Wieden+Kennedy", location: "Portland, OR", headline: "Storyteller who over-orders at brunch", bio: "I make brands sound human. Seeking a partner in crime for gallery openings, farmers markets, and terrible karaoke.", mutuals: 6, interests: ["Design", "Film", "Coffee", "Travel"], verified: false, likesYou: true },
      { id: "u205", name: "Aisha Khan", age: 31, jobTitle: "Product Manager", employer: "Notion", location: "San Francisco, CA", headline: "PM energy, poet heart", bio: "I ship software and write bad haiku. Looking for depth, humour, and a fellow enthusiast of long walks with no destination.", mutuals: 3, interests: ["Poetry", "Hiking", "Board games"], verified: true, likesYou: true }
    ]);
    this.person = computed(() => {
      const found = this.directory().find((c) => c.id === this.userId());
      return found ?? this.fallback;
    });
    this.fallback = {
      id: "unknown",
      name: "Jordan Lee",
      age: 32,
      jobTitle: "UX Researcher",
      employer: "Airbnb",
      location: "Seattle, WA",
      headline: "Curious about people and good coffee",
      bio: "Researcher who believes the best product decisions start with listening. Off the clock: bouldering, pour-over experiments, and losing at chess.",
      mutuals: 2,
      interests: ["Bouldering", "Coffee", "Chess", "Podcasts"],
      verified: true,
      likesYou: false
    };
    this.photoCount = 4;
    this.photoIndexes = [0, 1, 2, 3];
  }
  back() {
    this.router.navigate(["/feed"]);
  }
  openReport() {
    this.router.navigate([], { relativeTo: this.route, queryParams: { modal: "report" } });
  }
  closeReport() {
    this.router.navigate([], { relativeTo: this.route, queryParams: {} });
  }
  onReportSubmitted(_payload) {
  }
  message() {
    this.router.navigate(["/matches"]);
  }
  static {
    this.\u0275fac = function PublicProfileComponent_Factory(t) {
      return new (t || _PublicProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicProfileComponent, selectors: [["app-public-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "profile"], [3, "targetName"], [1, "gallery"], ["aria-label", "Back", 1, "gallery-back", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M15.75 19.5 8.25 12l7.5-7.5", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-label", "Report member", 1, "gallery-report", 3, "click"], ["d", "M3 3v18M3 4.5h11.25l-1.5 4.5 1.5 4.5H3", "stroke", "currentColor", "stroke-width", "1.7", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "hero-photo"], [3, "name", "size"], [1, "gallery-dots"], [1, "dot", 3, "active"], [1, "profile-body", "page"], [1, "name-row"], [1, "p-name"], [1, "pill", "pill-primary"], [1, "p-role"], [1, "muted"], [1, "p-location"], ["viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true"], ["d", "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z", "stroke", "currentColor", "stroke-width", "1.6"], ["d", "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z", "stroke", "currentColor", "stroke-width", "1.6"], [1, "mutual-banner"], [1, "p-section"], [1, "p-section-title"], [1, "p-headline"], [1, "muted", "p-bio"], [1, "chips"], [1, "pill"], [1, "report-link", 3, "click"], [1, "profile-actions"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-accent", 3, "click"], [1, "dot"], ["d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [3, "submitted", "dismiss", "targetName"]], template: function PublicProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PublicProfileComponent_Conditional_1_Template, 50, 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, PublicProfileComponent_Conditional_2_Template, 1, 1, "app-report-modal", 1);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance();
        \u0275\u0275conditional(1, (tmp_0_0 = ctx.person()) ? 1 : -1, tmp_0_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(2, ctx.showReport() ? 2 : -1);
      }
    }, dependencies: [CommonModule, AvatarComponent, ReportModalComponent], styles: ["\n\n.profile[_ngcontent-%COMP%] {\n  max-width: var(--content-max);\n  margin: 0 auto;\n  width: 100%;\n  padding-bottom: 90px;\n}\n.gallery[_ngcontent-%COMP%] {\n  position: relative;\n  height: 320px;\n}\n.hero-photo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background:\n    radial-gradient(\n      120% 120% at 50% -10%,\n      rgba(255, 255, 255, 0.3),\n      transparent 55%),\n    var(--grad-2);\n}\n.gallery-back[_ngcontent-%COMP%], .gallery-report[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--space-4);\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  border: none;\n  border-radius: var(--radius-full);\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--color-text);\n  box-shadow: var(--shadow-sm);\n  z-index: 2;\n}\n.gallery-back[_ngcontent-%COMP%] {\n  left: var(--space-4);\n}\n.gallery-report[_ngcontent-%COMP%] {\n  right: var(--space-4);\n  color: var(--color-danger);\n}\n.gallery-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .gallery-report[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.gallery-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n}\n.gallery-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n}\n.gallery-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 20px;\n  border-radius: var(--radius-full);\n}\n.profile-body[_ngcontent-%COMP%] {\n  padding-top: var(--space-5);\n}\n.name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.p-name[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\n.p-role[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-weight: 600;\n}\n.p-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 6px;\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n}\n.p-location[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.mutual-banner[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  padding: 10px 14px;\n  border-radius: var(--radius-md);\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n.p-section[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n}\n.p-section-title[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-subtle);\n  margin-bottom: 6px;\n}\n.p-headline[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 600;\n  color: var(--color-primary);\n  font-size: var(--text-lg);\n}\n.p-bio[_ngcontent-%COMP%] {\n  line-height: 1.6;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.report-link[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n  background: none;\n  border: none;\n  color: var(--color-danger);\n  font-size: var(--text-sm);\n  font-weight: 600;\n  padding: 8px 0;\n}\n.profile-actions[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: grid;\n  grid-template-columns: 1fr 1.4fr;\n  gap: 10px;\n  max-width: var(--content-max);\n  margin: 0 auto;\n  padding: var(--space-3) var(--space-4);\n  padding-bottom: calc(var(--space-3) + env(safe-area-inset-bottom));\n  background: var(--color-surface);\n  border-top: 1px solid var(--color-border);\n  z-index: 10;\n}\n@media (max-width: 768px) {\n  .profile-actions[_ngcontent-%COMP%] {\n    bottom: calc(64px + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=public-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicProfileComponent, { className: "PublicProfileComponent", filePath: "src/app/features/public-profile/public-profile.component.ts", lineNumber: 17 });
})();
export {
  PublicProfileComponent
};
//# sourceMappingURL=public-profile.component-6WRWOR3H.js.map
