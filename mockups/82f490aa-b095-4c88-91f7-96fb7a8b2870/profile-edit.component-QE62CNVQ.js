import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-MFDUJOSK.js";
import {
  ToastService
} from "./chunk-3BTWHIAD.js";
import {
  CommonModule,
  HttpClient,
  computed,
  environment,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ODOZMLE5.js";

// src/app/features/profile-edit/profile-edit.component.ts
function ProfileEditComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Add at least one photo and a short bio to appear in Discover.");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementStart(2, "button", 24);
    \u0275\u0275listener("click", function ProfileEditComponent_For_12_Template_button_click_2_listener() {
      const photo_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removePhoto(photo_r2));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", photo_r2, \u0275\u0275sanitizeUrl);
  }
}
function ProfileEditComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ProfileEditComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPhoto());
    });
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Add photo");
    \u0275\u0275elementEnd()();
  }
}
var ProfileEditComponent = class _ProfileEditComponent {
  constructor() {
    this.toast = inject(ToastService);
    this.http = inject(HttpClient);
    this.apiUrl = environment.apiUrl;
    this.name = signal("");
    this.jobTitle = signal("");
    this.employer = signal("");
    this.bio = signal("");
    this.photos = signal([]);
    this.saved = signal(false);
    this.maxBio = 500;
    this.bioCount = computed(() => this.bio().length);
    this.hasPhoto = computed(() => this.photos().length > 0);
    this.hasBio = computed(() => this.bio().trim().length > 0);
    this.complete = computed(() => this.hasPhoto() && this.hasBio());
  }
  ngOnInit() {
    this.http.get(`${this.apiUrl}/profile`).subscribe({
      next: (p) => this.hydrate(p),
      error: () => {
      }
    });
  }
  hydrate(p) {
    if (!p)
      return;
    this.name.set(p.name ?? "");
    this.jobTitle.set(p.jobTitle ?? "");
    this.employer.set(p.employer ?? "");
    this.bio.set(p.bio ?? "");
    this.photos.set([...p.photos ?? []]);
  }
  addPhoto() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {
      const file = input.files?.[0];
      if (file)
        this.uploadPhoto(file);
    };
    input.click();
  }
  uploadPhoto(file) {
    const form = new FormData();
    form.append("photo", file);
    this.http.post(`${this.apiUrl}/profile/photos`, form).subscribe({
      next: (res) => {
        if (res?.photos) {
          this.photos.set([...res.photos]);
        } else if (res?.url) {
          this.photos.update((p) => [...p, res.url]);
        }
      },
      error: () => {
      }
    });
  }
  removePhoto(url) {
    this.photos.update((p) => p.filter((x) => x !== url));
  }
  save() {
    this.http.put(`${this.apiUrl}/profile`, {
      name: this.name(),
      jobTitle: this.jobTitle(),
      employer: this.employer(),
      bio: this.bio()
    }).subscribe({
      next: () => {
        this.saved.set(true);
        this.toast.push("message", "Profile saved", "Your changes are now visible to other members.");
        setTimeout(() => this.saved.set(false), 1600);
      },
      error: () => {
      }
    });
  }
  static {
    this.\u0275fac = function ProfileEditComponent_Factory(t) {
      return new (t || _ProfileEditComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileEditComponent, selectors: [["app-profile-edit"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 18, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "badge"], [1, "hint"], [1, "card", "block"], [1, "section-title"], [1, "photo-grid"], [1, "photo-tile"], ["data-testid", "add-photo", 1, "photo-add"], [1, "muted", "photo-hint"], ["for", "name", 1, "field-label"], ["id", "name", 1, "input", 3, "ngModelChange", "ngModel"], [1, "two-col"], ["for", "title", 1, "field-label"], ["id", "title", "placeholder", "e.g. Product Manager", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "employer", 1, "field-label"], ["id", "employer", "placeholder", "e.g. Acme Inc", 1, "input", 3, "ngModelChange", "ngModel"], [1, "muted", "linkedin-note"], [1, "bio-head"], [1, "muted", "count"], ["placeholder", "Share what you're into outside of work\u2026", "data-testid", "bio-input", 1, "textarea", 3, "ngModelChange", "ngModel", "maxlength"], ["data-testid", "save-profile", 1, "btn", "btn-primary", "btn-block", "save-btn", 3, "click", "disabled"], ["alt", "Profile photo", "width", "300", "height", "300", 3, "src"], ["aria-label", "Remove photo", 1, "photo-remove", 3, "click"], ["data-testid", "add-photo", 1, "photo-add", 3, "click"], [1, "plus"]], template: function ProfileEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Your profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, ProfileEditComponent_Conditional_6_Template, 2, 0, "div", 4);
        \u0275\u0275elementStart(7, "section", 5)(8, "h2", 6);
        \u0275\u0275text(9, "Photos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275repeaterCreate(11, ProfileEditComponent_For_12_Template, 4, 1, "div", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275template(13, ProfileEditComponent_Conditional_13_Template, 5, 0, "button", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 10);
        \u0275\u0275text(15, "JPEG, PNG or WebP \xB7 up to 10\xA0MB each");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "section", 5)(17, "h2", 6);
        \u0275\u0275text(18, "From LinkedIn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "label", 11);
        \u0275\u0275text(20, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 12);
        \u0275\u0275listener("ngModelChange", function ProfileEditComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.name.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 13)(23, "div")(24, "label", 14);
        \u0275\u0275text(25, "Job title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 15);
        \u0275\u0275listener("ngModelChange", function ProfileEditComponent_Template_input_ngModelChange_26_listener($event) {
          return ctx.jobTitle.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div")(28, "label", 16);
        \u0275\u0275text(29, "Employer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "input", 17);
        \u0275\u0275listener("ngModelChange", function ProfileEditComponent_Template_input_ngModelChange_30_listener($event) {
          return ctx.employer.set($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "p", 18);
        \u0275\u0275text(32, "Title & employer import from LinkedIn when available \u2014 edit them anytime.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "section", 5)(34, "div", 19)(35, "h2", 6);
        \u0275\u0275text(36, "Bio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 20);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "textarea", 21);
        \u0275\u0275listener("ngModelChange", function ProfileEditComponent_Template_textarea_ngModelChange_39_listener($event) {
          return ctx.bio.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "button", 22);
        \u0275\u0275listener("click", function ProfileEditComponent_Template_button_click_40_listener() {
          return ctx.save();
        });
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275classProp("badge-reviewed", ctx.complete())("badge-pending", !ctx.complete());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.complete() ? "Complete" : "Incomplete", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(6, !ctx.complete() ? 6 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.photos());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(13, ctx.photos().length < 6 ? 13 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.name());
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.jobTitle());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.employer());
        \u0275\u0275advance(7);
        \u0275\u0275classProp("count-max", ctx.bioCount() > ctx.maxBio);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2("", ctx.bioCount(), "/", ctx.maxBio, "");
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.bio())("maxlength", ctx.maxBio);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.complete());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saved() ? "\u2713 Saved" : "Save profile", " ");
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.hint[_ngcontent-%COMP%] {\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n  border-radius: var(--radius-md);\n  padding: var(--space-3) var(--space-4);\n  font-size: var(--text-sm);\n  margin-bottom: var(--space-4);\n}\n.block[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.photo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));\n  gap: var(--space-3);\n}\n.photo-tile[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n}\n.photo-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: var(--radius-md);\n}\n.photo-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 26px;\n  height: 26px;\n  border-radius: var(--radius-pill);\n  background: var(--color-danger);\n  color: var(--color-text-oncolor);\n  font-size: var(--text-xs);\n  box-shadow: var(--shadow-sm);\n}\n.photo-add[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border: 2px dashed var(--color-border-strong);\n  border-radius: var(--radius-md);\n  color: var(--color-text-muted);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-1);\n  font-size: var(--text-xs);\n  font-weight: 600;\n}\n.photo-add[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.plus[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 1;\n}\n.photo-hint[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  margin-top: var(--space-3);\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-3);\n  margin-top: var(--space-3);\n}\n.two-col[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.linkedin-note[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  margin-top: var(--space-3);\n}\n.bio-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.count[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.count-max[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.save-btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n}\n@media (max-width: 420px) {\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile-edit.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileEditComponent, { className: "ProfileEditComponent", filePath: "src/app/features/profile-edit/profile-edit.component.ts", lineNumber: 16 });
})();
export {
  ProfileEditComponent
};
//# sourceMappingURL=profile-edit.component-QE62CNVQ.js.map
