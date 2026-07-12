import {
  AuthService
} from "./chunk-REEGUVE2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-R7WOM4WC.js";
import {
  AvatarComponent
} from "./chunk-2YFTR47U.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4ZKGBDGO.js";

// src/app/features/profile-edit/profile-edit.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProfileEditComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "strong");
    \u0275\u0275text(2, "Finish your profile to start discovering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4, "Add a short bio and at least one photo \u2014 that's all it takes to unlock the feed.");
    \u0275\u0275elementEnd()();
  }
}
function ProfileEditComponent_For_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Main");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, ProfileEditComponent_For_26_Conditional_1_Template, 2, 0, "span", 31);
    \u0275\u0275elementStart(2, "button", 32);
    \u0275\u0275listener("click", function ProfileEditComponent_For_26_Template_button_click_2_listener() {
      const photo_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removePhoto(photo_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 33);
    \u0275\u0275element(4, "path", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r4 = ctx.$index;
    \u0275\u0275styleProp("background", "var(--grad-" + (i_r4 % 6 + 1) + ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(1, i_r4 === 0 ? 1 : -1);
  }
}
function ProfileEditComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ProfileEditComponent_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPhoto());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Add photo");
    \u0275\u0275elementEnd()();
  }
}
function ProfileEditComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Profile saved");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "Add a bio and a photo to continue");
    \u0275\u0275elementEnd();
  }
}
var ProfileEditComponent = class _ProfileEditComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.user = this.auth.user;
    this.onboarding = this.route.snapshot.queryParamMap.get("onboarding") === "1";
    this.photos = signal([
      { id: "p1", url: "", sortOrder: 0 },
      { id: "p2", url: "", sortOrder: 1 }
    ]);
    this.bio = signal("Design lead who cares about the details most people never notice. Weekend trail runner, incurable ramen scout, and a sucker for a well-argued opinion. Looking for someone curious and warm.");
    this.jobTitle = signal("Product Design Lead");
    this.employer = signal("Northwind Labs");
    this.saved = signal(false);
    this.maxPhotos = 6;
    this.canAddPhoto = computed(() => this.photos().length < this.maxPhotos);
    this.bioCount = computed(() => this.bio().length);
    this.complete = computed(() => this.bio().trim().length > 0 && this.photos().length > 0);
  }
  addPhoto() {
    if (!this.canAddPhoto())
      return;
    this.photos.update((list) => [...list, { id: "p" + (list.length + 1), url: "", sortOrder: list.length }]);
  }
  removePhoto(id) {
    this.photos.update((list) => list.filter((p) => p.id !== id));
  }
  save() {
    this.saved.set(true);
    if (this.complete()) {
      this.auth.markProfileComplete();
    }
    if (this.onboarding && this.complete()) {
      this.router.navigate(["/feed"]);
      return;
    }
    setTimeout(() => this.saved.set(false), 2200);
  }
  static {
    this.\u0275fac = function ProfileEditComponent_Factory(t) {
      return new (t || _ProfileEditComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileEditComponent, selectors: [["app-profile-edit"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 17, consts: [[1, "page"], [1, "onboard-banner"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "ident"], [3, "name", "size"], [1, "ident-meta"], [1, "pill", "pill-primary"], ["viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true"], ["d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "section"], [1, "section-head"], [1, "section-title"], [1, "subtle"], [1, "section-hint", "muted"], [1, "photo-grid"], [1, "photo-tile", 3, "background"], [1, "photo-tile", "add-tile"], ["rows", "5", "maxlength", "500", "placeholder", "Share what makes you, you. What are you passionate about? What are you looking for?", 3, "ngModelChange", "ngModel"], [1, "field"], ["for", "jobTitle"], ["id", "jobTitle", "type", "text", 3, "ngModelChange", "ngModel"], ["for", "employer"], ["id", "employer", "type", "text", 3, "ngModelChange", "ngModel"], [1, "saved-toast"], [1, "save-bar"], [1, "req", "subtle"], [1, "btn", "btn-primary", "btn-block", 3, "click", "disabled"], [1, "muted"], [1, "photo-tile"], [1, "primary-tag"], ["aria-label", "Remove photo", 1, "remove-photo", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M6 18 18 6M6 6l12 12", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round"], [1, "photo-tile", "add-tile", 3, "click"], ["d", "M12 4.5v15m7.5-7.5h-15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"]], template: function ProfileEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ProfileEditComponent_Conditional_1_Template, 5, 0, "div", 1);
        \u0275\u0275elementStart(2, "header", 2)(3, "h1", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "This is what potential matches see. Imported from LinkedIn \u2014 edit anytime.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "section", 5);
        \u0275\u0275element(8, "app-avatar", 6);
        \u0275\u0275elementStart(9, "div", 7)(10, "strong");
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 9);
        \u0275\u0275element(14, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " LinkedIn verified ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "section", 11)(17, "div", 12)(18, "h2", 13);
        \u0275\u0275text(19, "Photos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 14);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "p", 15);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 16);
        \u0275\u0275repeaterCreate(25, ProfileEditComponent_For_26_Template, 5, 3, "div", 17, _forTrack0);
        \u0275\u0275template(27, ProfileEditComponent_Conditional_27_Template, 5, 0, "button", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "section", 11)(29, "div", 12)(30, "h2", 13);
        \u0275\u0275text(31, "About you");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 14);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "textarea", 19);
        \u0275\u0275listener("ngModelChange", function ProfileEditComponent_Template_textarea_ngModelChange_34_listener($event) {
          return ctx.bio.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "section", 11)(36, "h2", 13);
        \u0275\u0275text(37, "Professional details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p", 15);
        \u0275\u0275text(39, "Imported from LinkedIn where available \u2014 add them if missing.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 20)(41, "label", 21);
        \u0275\u0275text(42, "Job title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "input", 22);
        \u0275\u0275listener("ngModelChange", function ProfileEditComponent_Template_input_ngModelChange_43_listener($event) {
          return ctx.jobTitle.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 20)(45, "label", 23);
        \u0275\u0275text(46, "Employer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "input", 24);
        \u0275\u0275listener("ngModelChange", function ProfileEditComponent_Template_input_ngModelChange_47_listener($event) {
          return ctx.employer.set($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(48, ProfileEditComponent_Conditional_48_Template, 2, 0, "div", 25);
        \u0275\u0275elementStart(49, "div", 26);
        \u0275\u0275template(50, ProfileEditComponent_Conditional_50_Template, 2, 0, "span", 27);
        \u0275\u0275elementStart(51, "button", 28);
        \u0275\u0275listener("click", function ProfileEditComponent_Template_button_click_51_listener() {
          return ctx.save();
        });
        \u0275\u0275text(52);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.onboarding ? 1 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.onboarding ? "Complete your profile" : "Edit profile");
        \u0275\u0275advance(4);
        \u0275\u0275property("name", ((tmp_2_0 = ctx.user()) == null ? null : tmp_2_0.name) || "You")("size", 64);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(((tmp_4_0 = ctx.user()) == null ? null : tmp_4_0.name) || "Your name");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate2("", ctx.photos().length, "/", ctx.maxPhotos, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Add up to ", ctx.maxPhotos, ". JPEG, PNG or WebP, max 10\xA0MB each.");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.photos());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(27, ctx.canAddPhoto() ? 27 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.bioCount(), "/500");
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.bio());
        \u0275\u0275advance(9);
        \u0275\u0275property("ngModel", ctx.jobTitle());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.employer());
        \u0275\u0275advance();
        \u0275\u0275conditional(48, ctx.saved() && !ctx.onboarding ? 48 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(50, !ctx.complete() ? 50 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.complete());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.onboarding ? "Save & start discovering" : "Save changes", " ");
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, AvatarComponent], styles: ["\n\n.onboard-banner[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft);\n  border: 1px solid var(--color-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.onboard-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.onboard-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: var(--text-sm);\n}\n.ident[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.ident-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ident-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-6);\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n.section-hint[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  margin-bottom: var(--space-3);\n}\n.photo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-top: var(--space-2);\n}\n.photo-tile[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3 / 4;\n  border-radius: var(--radius-md);\n  border: none;\n  overflow: hidden;\n}\n.primary-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  padding: 3px 8px;\n  border-radius: var(--radius-full);\n  background: rgba(255, 255, 255, 0.9);\n  color: var(--color-primary);\n  font-size: 11px;\n  font-weight: 700;\n}\n.remove-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  width: 28px;\n  height: 28px;\n  display: grid;\n  place-items: center;\n  border: none;\n  border-radius: var(--radius-full);\n  background: rgba(23, 26, 33, 0.55);\n  color: #fff;\n}\n.remove-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.add-tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  background: var(--color-surface);\n  border: 2px dashed var(--color-border-strong);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n.add-tile[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.add-tile[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3);\n}\n.saved-toast[_ngcontent-%COMP%] {\n  background: var(--color-success-soft);\n  color: var(--color-success);\n  border-radius: var(--radius-md);\n  padding: 10px 14px;\n  font-weight: 600;\n  font-size: var(--text-sm);\n  text-align: center;\n  margin-bottom: var(--space-4);\n}\n.save-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  background:\n    linear-gradient(\n      to top,\n      var(--color-bg) 70%,\n      transparent);\n  padding: var(--space-4) 0 var(--space-2);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n}\n.req[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n/*# sourceMappingURL=profile-edit.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileEditComponent, { className: "ProfileEditComponent", filePath: "src/app/features/profile-edit/profile-edit.component.ts", lineNumber: 16 });
})();
export {
  ProfileEditComponent
};
//# sourceMappingURL=profile-edit.component-RJFJIFF2.js.map
