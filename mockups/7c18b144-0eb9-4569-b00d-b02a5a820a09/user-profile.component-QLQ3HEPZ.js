import {
  ActivatedRoute,
  Router
} from "./chunk-Y5LH5DTG.js";
import {
  environment
} from "./chunk-QKG44OY5.js";
import {
  ToastService
} from "./chunk-BTWCFMW5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
} from "./chunk-Y254YSMO.js";
import {
  CommonModule,
  HttpClient,
  Location,
  computed,
  inject,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UGB4PC52.js";

// src/app/features/user-profile/user-profile.component.ts
function UserProfileComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const photo_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", photo_r1, \u0275\u0275sanitizeUrl)("alt", ctx_r1.profile().name + " photo");
  }
}
function UserProfileComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275repeaterCreate(1, UserProfileComponent_Conditional_19_For_2_Template, 1, 2, "img", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.profile().photos);
  }
}
function UserProfileComponent_Conditional_25_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 27)(1, "input", 28);
    \u0275\u0275listener("ngModelChange", function UserProfileComponent_Conditional_25_Conditional_7_For_4_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedReason.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("reason-active", ctx_r1.selectedReason() === r_r6);
    \u0275\u0275advance();
    \u0275\u0275property("value", r_r6)("ngModel", ctx_r1.selectedReason());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6);
  }
}
function UserProfileComponent_Conditional_25_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "Reports are confidential. Choose the reason that best applies.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "fieldset", 22);
    \u0275\u0275repeaterCreate(3, UserProfileComponent_Conditional_25_Conditional_7_For_4_Template, 4, 5, "label", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 24);
    \u0275\u0275text(6, "Additional details (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "textarea", 25);
    \u0275\u0275listener("ngModelChange", function UserProfileComponent_Conditional_25_Conditional_7_Template_textarea_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.details.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 26);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_25_Conditional_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitReport());
    });
    \u0275\u0275text(9, " Submit report ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.reasons());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.details());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.selectedReason());
  }
}
function UserProfileComponent_Conditional_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Thanks \u2014 we've received your report.");
    \u0275\u0275elementEnd()();
  }
}
function UserProfileComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReport());
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_25_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 19)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReport());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, UserProfileComponent_Conditional_25_Conditional_7_Template, 10, 2)(8, UserProfileComponent_Conditional_25_Conditional_8_Template, 5, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Report ", ctx_r1.profile().name, "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(7, !ctx_r1.submitted() ? 7 : 8);
  }
}
var EMPTY_PROFILE = {
  id: "",
  name: "",
  jobTitle: "",
  employer: "",
  bio: "",
  pictureUrl: "",
  photos: [],
  distanceKm: 0,
  mutualConnections: 0
};
var UserProfileComponent = class _UserProfileComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.location = inject(Location);
    this.toast = inject(ToastService);
    this.http = inject(HttpClient);
    this.apiUrl = environment.apiUrl;
    this.userId = this.route.snapshot.paramMap.get("userId") ?? "";
    this.reasons = signal([
      "Inappropriate photos",
      "Harassment or abuse",
      "Fake or impersonated profile",
      "Spam or solicitation",
      "Off-platform scam"
    ]);
    this.profile = signal(EMPTY_PROFILE);
    this.reportOpen = computed(() => this.route.snapshot.queryParamMap.get("modal") === "report");
    this.selectedReason = signal("");
    this.details = signal("");
    this.submitted = signal(false);
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.http.get(`${this.apiUrl}/users/${this.userId}`).subscribe({
      next: (p) => this.profile.set(p ?? EMPTY_PROFILE),
      error: () => this.profile.set(EMPTY_PROFILE)
    });
  }
  openReport() {
    this.router.navigate([], { queryParams: { modal: "report" }, queryParamsHandling: "merge" });
  }
  closeReport() {
    this.submitted.set(false);
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  submitReport() {
    if (!this.selectedReason())
      return;
    this.http.post(`${this.apiUrl}/reports`, {
      reportedId: this.profile().id || this.userId,
      reason: this.selectedReason()
    }).subscribe({
      next: () => {
        this.submitted.set(true);
        this.toast.push("message", "Report submitted", "Our moderation team will review it shortly.");
        setTimeout(() => this.closeReport(), 1400);
      },
      error: () => {
      }
    });
  }
  static {
    this.\u0275fac = function UserProfileComponent_Factory(t) {
      return new (t || _UserProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 10, consts: [[1, "profile-view"], [1, "cover"], ["aria-label", "Back", 1, "cover-back", 3, "click"], ["width", "600", "height", "600", 1, "cover-photo", 3, "src", "alt"], [1, "cover-fade"], [1, "cover-info"], [1, "cover-role"], [1, "cover-meta"], [1, "page", "profile-body"], [1, "card", "info-card"], [1, "section-title"], [1, "gallery"], [1, "profile-cta"], ["data-testid", "report-open", 1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-accent"], [1, "modal-scrim"], ["width", "300", "height", "300", 3, "src", "alt"], [1, "modal-scrim", 3, "click"], ["role", "dialog", "aria-modal", "true", "data-testid", "report-dialog", 1, "modal", "card", 3, "click"], [1, "modal-head"], ["aria-label", "Close", 1, "modal-close", 3, "click"], [1, "muted", "modal-sub"], [1, "reasons"], [1, "reason", 3, "reason-active"], ["for", "rd", 1, "field-label"], ["id", "rd", "placeholder", "Tell us what happened\u2026", 1, "textarea", 3, "ngModelChange", "ngModel"], ["data-testid", "report-submit", 1, "btn", "btn-danger", "btn-block", "modal-submit", 3, "click", "disabled"], [1, "reason"], ["type", "radio", "name", "reason", 3, "ngModelChange", "value", "ngModel"], [1, "report-done"], [1, "report-check"]], template: function UserProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function UserProfileComponent_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        \u0275\u0275text(3, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "img", 3)(5, "div", 4);
        \u0275\u0275elementStart(6, "div", 5)(7, "h1");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 8)(14, "section", 9)(15, "h2", 10);
        \u0275\u0275text(16, "About");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, UserProfileComponent_Conditional_19_Template, 3, 0, "section", 11);
        \u0275\u0275elementStart(20, "div", 12)(21, "button", 13);
        \u0275\u0275listener("click", function UserProfileComponent_Template_button_click_21_listener() {
          return ctx.openReport();
        });
        \u0275\u0275text(22, "Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 14);
        \u0275\u0275text(24, "\u2665 Like");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(25, UserProfileComponent_Conditional_25_Template, 9, 2, "div", 15);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("src", ctx.profile().pictureUrl, \u0275\u0275sanitizeUrl)("alt", ctx.profile().name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.profile().name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.profile().jobTitle, " \xB7 ", ctx.profile().employer, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.profile().distanceKm, " km away \xB7 ", ctx.profile().mutualConnections, " mutual connections");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.profile().bio);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.profile().photos.length > 1 ? 19 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(25, ctx.reportOpen() ? 25 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.cover[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  max-height: 52vh;\n  overflow: hidden;\n}\n.cover-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cover-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--space-3);\n  left: var(--space-3);\n  z-index: 2;\n  width: 40px;\n  height: 44px;\n  border-radius: var(--radius-pill);\n  background: rgba(19, 26, 33, 0.5);\n  color: var(--color-text-oncolor);\n  font-size: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cover-fade[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: auto 0 0 0;\n  height: 55%;\n  background:\n    linear-gradient(\n      to top,\n      rgba(19, 26, 33, 0.9),\n      transparent);\n}\n.cover-info[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: var(--space-5) var(--space-4) var(--space-4);\n  color: var(--color-text-oncolor);\n}\n.cover-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\n.cover-role[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 2px;\n}\n.cover-meta[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  opacity: 0.9;\n  margin-top: var(--space-1);\n}\n.profile-body[_ngcontent-%COMP%] {\n  padding-top: var(--space-4);\n}\n.info-card[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-4);\n  line-height: 1.5;\n}\n.gallery[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: var(--space-2);\n  margin-bottom: var(--space-4);\n}\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n  border-radius: var(--radius-md);\n}\n.profile-cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n}\n.profile-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-scrim[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 70;\n  background: var(--color-overlay);\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--content-max);\n  max-height: 88vh;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n  border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n  padding: var(--space-5) var(--space-4) calc(var(--space-5) + var(--safe-bottom));\n  animation: _ngcontent-%COMP%_sheet-up 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_sheet-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.modal-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-2);\n}\n.modal-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\n.modal-close[_ngcontent-%COMP%] {\n  min-width: 40px;\n  min-height: 40px;\n  font-size: var(--text-lg);\n  color: var(--color-text-muted);\n}\n.modal-sub[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  margin-bottom: var(--space-4);\n}\n.reasons[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0 0 var(--space-4);\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.reason[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 48px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n  font-size: var(--text-sm);\n}\n.reason[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: var(--color-primary);\n}\n.reason-active[_ngcontent-%COMP%] {\n  border-color: var(--color-primary);\n  background: var(--color-primary-soft);\n}\n.modal-submit[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n}\n.report-done[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-6) 0;\n}\n.report-check[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto var(--space-3);\n  border-radius: var(--radius-pill);\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  font-size: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=user-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "src/app/features/user-profile/user-profile.component.ts", lineNumber: 22 });
})();
export {
  UserProfileComponent
};
//# sourceMappingURL=user-profile.component-QLQ3HEPZ.js.map
