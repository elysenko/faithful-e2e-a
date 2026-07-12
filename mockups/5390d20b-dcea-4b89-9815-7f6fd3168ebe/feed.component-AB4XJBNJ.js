import {
  Router
} from "./chunk-34OIK6OJ.js";
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ODOZMLE5.js";

// src/app/features/feed/feed.component.ts
function FeedComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.remaining(), " nearby");
  }
}
function FeedComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 5);
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = ctx;
    \u0275\u0275advance();
    \u0275\u0275property("src", n_r3.pictureUrl, \u0275\u0275sanitizeUrl)("alt", n_r3.name);
  }
}
function FeedComponent_Conditional_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "LIKE");
    \u0275\u0275elementEnd();
  }
}
function FeedComponent_Conditional_5_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "NOPE");
    \u0275\u0275elementEnd();
  }
}
function FeedComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 11);
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275template(2, FeedComponent_Conditional_5_Conditional_2_Conditional_2_Template, 2, 0, "span", 12)(3, FeedComponent_Conditional_5_Conditional_2_Conditional_3_Template, 2, 0, "span", 13);
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 20);
    \u0275\u0275listener("click", function FeedComponent_Conditional_5_Conditional_2_Template_button_click_16_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewProfile(p_r5.id));
    });
    \u0275\u0275text(17, " View full profile \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("fly-left", ctx_r0.lastDirection() === "left")("fly-right", ctx_r0.lastDirection() === "right");
    \u0275\u0275advance();
    \u0275\u0275property("src", p_r5.pictureUrl, \u0275\u0275sanitizeUrl)("alt", p_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ctx_r0.lastDirection() === "right" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx_r0.lastDirection() === "left" ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r5.distanceKm, " km away");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r5.jobTitle, " \xB7 ", p_r5.employer, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r5.mutualConnections, " mutual connections");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.bio);
  }
}
function FeedComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, FeedComponent_Conditional_5_Conditional_1_Template, 2, 2, "article", 5)(2, FeedComponent_Conditional_5_Conditional_2_Template, 18, 14, "article", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "button", 8);
    \u0275\u0275listener("click", function FeedComponent_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.swipe("left"));
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 9);
    \u0275\u0275listener("click", function FeedComponent_Conditional_5_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.swipe("right"));
    });
    \u0275\u0275text(7, "\u2665");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (tmp_1_0 = ctx_r0.next()) ? 1 : -1, tmp_1_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (tmp_2_0 = ctx_r0.current()) ? 2 : -1, tmp_2_0);
  }
}
function FeedComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 23);
    \u0275\u0275element(3, "circle", 24)(4, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "No more profiles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 26);
    \u0275\u0275text(8, "You're all caught up. Check back soon for new professionals in your area.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 27);
    \u0275\u0275listener("click", function FeedComponent_Conditional_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reset());
    });
    \u0275\u0275text(10, "Start over");
    \u0275\u0275elementEnd()();
  }
}
var FeedComponent = class _FeedComponent {
  constructor() {
    this.router = inject(Router);
    this.toast = inject(ToastService);
    this.http = inject(HttpClient);
    this.apiUrl = environment.apiUrl;
    this.profiles = signal([]);
    this.index = signal(0);
    this.lastDirection = signal(null);
    this.current = computed(() => this.profiles()[this.index()] ?? null);
    this.next = computed(() => this.profiles()[this.index() + 1] ?? null);
    this.exhausted = computed(() => this.index() >= this.profiles().length);
    this.remaining = computed(() => Math.max(0, this.profiles().length - this.index()));
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.http.get(`${this.apiUrl}/feed`).subscribe({
      next: (profiles) => {
        this.profiles.set(profiles ?? []);
        this.index.set(0);
      },
      error: () => this.profiles.set([])
    });
  }
  swipe(direction) {
    const profile = this.current();
    if (!profile)
      return;
    this.lastDirection.set(direction);
    this.http.post(`${this.apiUrl}/swipes`, { targetId: profile.id, direction }).subscribe({
      next: (res) => {
        if (res?.match) {
          this.toast.push("match", "It's a match!", `You and ${profile.name} liked each other.`);
        }
      },
      error: () => {
      }
    });
    setTimeout(() => {
      this.index.update((i) => i + 1);
      this.lastDirection.set(null);
    }, 180);
  }
  viewProfile(id) {
    this.router.navigate(["/users", id]);
  }
  reset() {
    this.load();
  }
  static {
    this.\u0275fac = function FeedComponent_Factory(t) {
      return new (t || _FeedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedComponent, selectors: [["app-feed"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 2, consts: [[1, "page", "feed-page"], [1, "page-header"], [1, "page-title"], [1, "badge", "badge-admin"], [1, "deck"], ["aria-hidden", "true", 1, "swipe-card", "swipe-card--behind"], [1, "swipe-card", 3, "fly-left", "fly-right"], [1, "swipe-actions"], ["aria-label", "Pass", "data-testid", "swipe-left", 1, "action", "action-nope", 3, "click"], ["aria-label", "Like", "data-testid", "swipe-right", 1, "action", "action-like", 3, "click"], ["width", "600", "height", "600", 1, "swipe-photo", 3, "src", "alt"], [1, "swipe-card"], [1, "stamp", "stamp-like"], [1, "stamp", "stamp-nope"], [1, "swipe-overlay"], [1, "swipe-headline"], [1, "dist"], [1, "swipe-role"], [1, "swipe-mutual"], [1, "swipe-bio"], [1, "btn", "btn-ghost", "swipe-more", 3, "click"], [1, "empty-state", "feed-empty"], ["aria-hidden", "true", 1, "empty-emoji"], ["width", "52", "height", "52", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "9"], ["d", "m8 12 2.8 2.8L16 9.5"], [1, "muted"], [1, "btn", "btn-outline", 3, "click"]], template: function FeedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Discover");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, FeedComponent_Conditional_4_Template, 2, 1, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, FeedComponent_Conditional_5_Template, 8, 2)(6, FeedComponent_Conditional_6_Template, 11, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, !ctx.exhausted() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(5, !ctx.exhausted() ? 5 : 6);
      }
    }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.deck[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 3 / 4;\n  max-height: 62vh;\n  margin: 0 auto;\n}\n.swipe-card[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: var(--color-surface);\n  box-shadow: var(--shadow-lg);\n  transition: transform 0.18s ease, opacity 0.18s ease;\n}\n.swipe-card--behind[_ngcontent-%COMP%] {\n  transform: scale(0.95) translateY(10px);\n  filter: brightness(0.96);\n}\n.swipe-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.stamp[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 24px;\n  padding: 4px 14px;\n  border: 3px solid;\n  border-radius: var(--radius-sm);\n  font-weight: 800;\n  font-size: var(--text-xl);\n  letter-spacing: 1px;\n}\n.stamp-like[_ngcontent-%COMP%] {\n  right: 20px;\n  color: var(--color-like);\n  border-color: var(--color-like);\n  transform: rotate(12deg);\n}\n.stamp-nope[_ngcontent-%COMP%] {\n  left: 20px;\n  color: var(--color-nope);\n  border-color: var(--color-nope);\n  transform: rotate(-12deg);\n}\n.fly-left[_ngcontent-%COMP%] {\n  transform: translateX(-140%) rotate(-16deg);\n  opacity: 0;\n}\n.fly-right[_ngcontent-%COMP%] {\n  transform: translateX(140%) rotate(16deg);\n  opacity: 0;\n}\n.swipe-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: var(--space-6) var(--space-4) var(--space-4);\n  color: var(--color-text-oncolor);\n  background:\n    linear-gradient(\n      to top,\n      rgba(19, 26, 33, 0.92) 0%,\n      rgba(19, 26, 33, 0.55) 55%,\n      transparent 100%);\n}\n.swipe-headline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: var(--space-3);\n}\n.swipe-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\n.dist[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  opacity: 0.85;\n}\n.swipe-role[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n  font-weight: 600;\n  margin-top: 2px;\n}\n.swipe-mutual[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  opacity: 0.9;\n  margin-top: var(--space-1);\n}\n.swipe-bio[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  margin-top: var(--space-2);\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.swipe-more[_ngcontent-%COMP%] {\n  color: var(--color-text-oncolor);\n  padding-left: 0;\n  margin-top: var(--space-2);\n  min-height: 40px;\n}\n.swipe-more[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.swipe-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: var(--space-6);\n  margin-top: var(--space-5);\n}\n.action[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  border-radius: var(--radius-pill);\n  background: var(--color-surface);\n  box-shadow: var(--shadow-md);\n  font-size: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.08s ease;\n}\n.action[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n.action-nope[_ngcontent-%COMP%] {\n  color: var(--color-nope);\n}\n.action-like[_ngcontent-%COMP%] {\n  color: var(--color-like);\n}\n.feed-empty[_ngcontent-%COMP%]   .empty-emoji[_ngcontent-%COMP%] {\n  font-size: 52px;\n  margin-bottom: var(--space-3);\n}\n.feed-empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n}\n.feed-empty[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n}\n/*# sourceMappingURL=feed.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedComponent, { className: "FeedComponent", filePath: "src/app/features/feed/feed.component.ts", lineNumber: 20 });
})();
export {
  FeedComponent
};
//# sourceMappingURL=feed.component-AB4XJBNJ.js.map
