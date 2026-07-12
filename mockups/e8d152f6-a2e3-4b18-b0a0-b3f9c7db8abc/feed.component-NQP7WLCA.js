import {
  AuthService
} from "./chunk-REEGUVE2.js";
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
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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

// src/app/shared/match-modal/match-modal.component.ts
var MatchModalComponent = class _MatchModalComponent {
  constructor() {
    this.matchedName = "Your match";
    this.myName = "You";
    this.message = new EventEmitter();
    this.dismiss = new EventEmitter();
  }
  static {
    this.\u0275fac = function MatchModalComponent_Factory(t) {
      return new (t || _MatchModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatchModalComponent, selectors: [["app-match-modal"]], inputs: { matchedName: "matchedName", myName: "myName" }, outputs: { message: "message", dismiss: "dismiss" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 7, consts: [[1, "overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "match-card", 3, "click"], [1, "match-kicker"], [1, "match-title"], [1, "match-avatars"], [3, "name", "size", "ring"], ["aria-hidden", "true", 1, "match-heart"], ["viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"], [1, "match-copy", "muted"], [1, "match-actions"], [1, "btn", "btn-accent", "btn-block", 3, "click"], [1, "btn", "btn-ghost", "btn-block", 3, "click"]], template: function MatchModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function MatchModalComponent_Template_div_click_0_listener() {
          return ctx.dismiss.emit();
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275listener("click", function MatchModalComponent_Template_div_click_1_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(2, "p", 2);
        \u0275\u0275text(3, "It's a match!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "app-avatar", 5);
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 7);
        \u0275\u0275element(10, "path", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(11, "app-avatar", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 9);
        \u0275\u0275text(13, " Say hello while the moment's fresh \u2014 matched professionals reply 3\xD7 more often. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
        \u0275\u0275listener("click", function MatchModalComponent_Template_button_click_15_listener() {
          return ctx.message.emit();
        });
        \u0275\u0275text(16, "Send a message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 12);
        \u0275\u0275listener("click", function MatchModalComponent_Template_button_click_17_listener() {
          return ctx.dismiss.emit();
        });
        \u0275\u0275text(18, "Keep discovering");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("You and ", ctx.matchedName, " liked each other");
        \u0275\u0275advance(2);
        \u0275\u0275property("name", ctx.myName)("size", 88)("ring", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("name", ctx.matchedName)("size", 88)("ring", true);
      }
    }, dependencies: [CommonModule, AvatarComponent], styles: ["\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n  background:\n    radial-gradient(\n      120% 80% at 50% 0%,\n      rgba(236, 77, 107, 0.35),\n      transparent 60%),\n    rgba(23, 26, 33, 0.62);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  animation: _ngcontent-%COMP%_fade 0.2s ease;\n}\n.match-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-lg);\n  padding: var(--space-6) var(--space-5);\n  text-align: center;\n  animation: _ngcontent-%COMP%_pop 0.25s cubic-bezier(0.18, 0.9, 0.32, 1.2);\n}\n.match-kicker[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: var(--text-xs);\n  font-weight: 800;\n  color: var(--color-accent);\n}\n.match-title[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  margin-top: 8px;\n  line-height: 1.2;\n}\n.match-avatars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin: var(--space-5) 0;\n}\n.match-heart[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  display: grid;\n  place-items: center;\n}\n.match-heart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\n.match-copy[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n  font-size: var(--text-sm);\n}\n.match-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n@keyframes _ngcontent-%COMP%_fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_pop {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=match-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchModalComponent, { className: "MatchModalComponent", filePath: "src/app/shared/match-modal/match-modal.component.ts", lineNumber: 14 });
})();

// src/app/features/feed/feed.component.ts
function FeedComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.remaining(), " left today");
  }
}
function FeedComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "var(--grad-4)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.name.charAt(0));
  }
}
function FeedComponent_Conditional_9_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Verified ");
    \u0275\u0275elementEnd();
  }
}
function FeedComponent_Conditional_9_Conditional_1_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r4);
  }
}
function FeedComponent_Conditional_9_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", c_r3.mutuals, " shared connection", c_r3.mutuals === 1 ? "" : "s", " ");
  }
}
function FeedComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 12)(1, "button", 13);
    \u0275\u0275listener("click", function FeedComponent_Conditional_9_Conditional_1_Template_button_click_1_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewProfile(c_r3.id));
    });
    \u0275\u0275element(2, "app-avatar", 14);
    \u0275\u0275template(3, FeedComponent_Conditional_9_Conditional_1_Conditional_3_Template, 4, 0, "span", 15);
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5, "Tap to view full profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17)(7, "div", 18)(8, "h2", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 23);
    \u0275\u0275element(16, "path", 24)(17, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "p", 26);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 27);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 28);
    \u0275\u0275repeaterCreate(24, FeedComponent_Conditional_9_Conditional_1_For_25_Template, 2, 1, "span", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, FeedComponent_Conditional_9_Conditional_1_Conditional_26_Template, 4, 2, "p", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("fly-like", ctx_r0.lastAction() === "like")("fly-pass", ctx_r0.lastAction() === "pass");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "View profile: " + c_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("name", c_r3.name)("size", 128);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, c_r3.verified ? 3 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", c_r3.name, ", ", c_r3.age, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r3.jobTitle, " \xB7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.employer);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", c_r3.location, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u201C", c_r3.headline, "\u201D");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.bio);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(c_r3.interests);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(26, c_r3.mutuals > 0 ? 26 : -1);
  }
}
function FeedComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FeedComponent_Conditional_9_Conditional_0_Template, 4, 3, "article", 8)(1, FeedComponent_Conditional_9_Conditional_1_Template, 27, 16, "article", 9);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.next()) ? 0 : -1, tmp_1_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (tmp_2_0 = ctx_r0.current()) ? 1 : -1, tmp_2_0);
  }
}
function FeedComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 31);
    \u0275\u0275element(3, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "You're all caught up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 21);
    \u0275\u0275text(7, "You've seen everyone new for now. Check back soon \u2014 fresh professionals join daily.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 37);
    \u0275\u0275listener("click", function FeedComponent_Conditional_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reset());
    });
    \u0275\u0275text(9, "Review again");
    \u0275\u0275elementEnd()();
  }
}
function FeedComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 38);
    \u0275\u0275listener("click", function FeedComponent_Conditional_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pass());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275element(3, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function FeedComponent_Conditional_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewProfile(ctx_r0.current().id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 39);
    \u0275\u0275element(6, "path", 42)(7, "circle", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 44);
    \u0275\u0275listener("click", function FeedComponent_Conditional_11_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.like());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 31);
    \u0275\u0275element(10, "path", 36);
    \u0275\u0275elementEnd()()();
  }
}
function FeedComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-match-modal", 45);
    \u0275\u0275listener("message", function FeedComponent_Conditional_12_Template_app_match_modal_message_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToMessages());
    })("dismiss", function FeedComponent_Conditional_12_Template_app_match_modal_dismiss_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeMatch());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matchedName", ctx_r0.matchedName())("myName", ctx_r0.myName());
  }
}
var FeedComponent = class _FeedComponent {
  constructor() {
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.auth = inject(AuthService);
    this.myName = computed(() => this.auth.user()?.name ?? "You");
    this.candidates = signal([
      {
        id: "u201",
        name: "Priya Nair",
        age: 29,
        jobTitle: "Senior Data Scientist",
        employer: "Helix Bio",
        location: "Boston, MA",
        headline: "Turning messy data into calm decisions",
        bio: "ML researcher by day, trail runner by weekend. Looking for someone who is curious, kind, and can debate the best ramen spot in town.",
        mutuals: 4,
        interests: ["Running", "Jazz", "Startups", "Ramen"],
        verified: true,
        likesYou: true
      },
      {
        id: "u202",
        name: "Daniel Osei",
        age: 33,
        jobTitle: "Engineering Manager",
        employer: "Stripe",
        location: "Brooklyn, NY",
        headline: "Building teams and weekend furniture",
        bio: "I lead a payments team and moonlight as an amateur woodworker. Big on live music, small on doom-scrolling.",
        mutuals: 2,
        interests: ["Woodworking", "Live music", "Cycling"],
        verified: true,
        likesYou: false
      },
      {
        id: "u203",
        name: "Sofia Ramos",
        age: 27,
        jobTitle: "Brand Strategist",
        employer: "Wieden+Kennedy",
        location: "Portland, OR",
        headline: "Storyteller who over-orders at brunch",
        bio: "I make brands sound human. Seeking a partner in crime for gallery openings, farmers markets, and terrible karaoke.",
        mutuals: 6,
        interests: ["Design", "Film", "Coffee", "Travel"],
        verified: false,
        likesYou: true
      },
      {
        id: "u204",
        name: "Marcus Feld",
        age: 35,
        jobTitle: "Corporate Lawyer",
        employer: "Latham & Watkins",
        location: "Chicago, IL",
        headline: "Reads contracts and cook books equally closely",
        bio: "Recovering workaholic learning to actually take weekends off. Would love someone to explore the city and its restaurants with.",
        mutuals: 1,
        interests: ["Cooking", "Tennis", "Wine"],
        verified: true,
        likesYou: false
      },
      {
        id: "u205",
        name: "Aisha Khan",
        age: 31,
        jobTitle: "Product Manager",
        employer: "Notion",
        location: "San Francisco, CA",
        headline: "PM energy, poet heart",
        bio: "I ship software and write bad haiku. Looking for depth, humour, and a fellow enthusiast of long walks with no destination.",
        mutuals: 3,
        interests: ["Poetry", "Hiking", "Board games"],
        verified: true,
        likesYou: true
      },
      {
        id: "u206",
        name: "Tom Bergstr\xF6m",
        age: 30,
        jobTitle: "Architect",
        employer: "Sn\xF8hetta",
        location: "Oslo, NO",
        headline: "Designs buildings, collects vinyl",
        bio: "Scandinavian minimalist looking for maximal conversation. Fan of sauna culture, sailing, and strong filter coffee.",
        mutuals: 0,
        interests: ["Sailing", "Vinyl", "Architecture"],
        verified: false,
        likesYou: false
      }
    ]);
    this.index = signal(0);
    this.lastAction = signal(null);
    this.current = computed(() => this.candidates()[this.index()] ?? null);
    this.next = computed(() => this.candidates()[this.index() + 1] ?? null);
    this.remaining = computed(() => Math.max(0, this.candidates().length - this.index()));
    this.exhausted = computed(() => this.index() >= this.candidates().length);
    this.showMatch = signal(false);
    this.matchedName = signal("");
    this.route.queryParamMap.subscribe((params) => {
      const isMatch = params.get("modal") === "match";
      this.showMatch.set(isMatch);
      if (isMatch)
        this.matchedName.set(params.get("name") ?? "Your match");
    });
  }
  pass() {
    if (this.exhausted())
      return;
    this.lastAction.set("pass");
    this.advance();
  }
  like() {
    const c = this.current();
    if (!c)
      return;
    this.lastAction.set("like");
    this.advance();
    if (c.likesYou) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { modal: "match", name: c.name, id: c.id }
      });
    }
  }
  advance() {
    this.index.update((i) => i + 1);
    setTimeout(() => this.lastAction.set(null), 320);
  }
  viewProfile(id) {
    this.router.navigate(["/profile", id]);
  }
  reset() {
    this.index.set(0);
  }
  goToMessages() {
    this.router.navigate(["/matches"]);
  }
  closeMatch() {
    this.router.navigate([], { relativeTo: this.route, queryParams: {} });
  }
  static {
    this.\u0275fac = function FeedComponent_Factory(t) {
      return new (t || _FeedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedComponent, selectors: [["app-feed"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [[1, "feed"], [1, "feed-head"], [1, "feed-title"], [1, "muted", "feed-sub"], [1, "pill", "pill-primary"], [1, "deck"], [1, "actions"], [3, "matchedName", "myName"], ["aria-hidden", "true", 1, "swipe-card", "behind"], [1, "swipe-card", "top", 3, "fly-like", "fly-pass"], [1, "card-photo"], [1, "photo-initials"], [1, "swipe-card", "top"], [1, "card-photo", 3, "click"], [3, "name", "size"], ["title", "LinkedIn verified", 1, "verified-badge"], [1, "tap-hint"], [1, "card-body"], [1, "card-name-row"], [1, "card-name"], [1, "card-role"], [1, "muted"], [1, "card-location"], ["viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true"], ["d", "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z", "stroke", "currentColor", "stroke-width", "1.6"], ["d", "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z", "stroke", "currentColor", "stroke-width", "1.6"], [1, "card-headline"], [1, "card-bio"], [1, "chips"], [1, "pill"], [1, "mutuals"], ["viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "deck-empty", "card"], ["aria-hidden", "true", 1, "empty-emoji"], ["d", "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"], [1, "btn", "btn-outline", 3, "click"], ["aria-label", "Pass", 1, "fab", "fab-pass", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M6 18 18 6M6 6l12 12", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-label", "View profile", 1, "fab", "fab-info", 3, "click"], ["d", "M11.25 11.25h1.5v5.25M12 7.5h.008v.008H12z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "9", "stroke", "currentColor", "stroke-width", "1.8"], ["aria-label", "Like", 1, "fab", "fab-like", 3, "click"], [3, "message", "dismiss", "matchedName", "myName"]], template: function FeedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Discover");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Curated professionals near you");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, FeedComponent_Conditional_7_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275template(9, FeedComponent_Conditional_9_Template, 2, 2)(10, FeedComponent_Conditional_10_Template, 10, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, FeedComponent_Conditional_11_Template, 11, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, FeedComponent_Conditional_12_Template, 1, 2, "app-match-modal", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, !ctx.exhausted() ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(9, !ctx.exhausted() ? 9 : 10);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, !ctx.exhausted() ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.showMatch() ? 12 : -1);
      }
    }, dependencies: [CommonModule, AvatarComponent, MatchModalComponent], styles: ["\n\n.feed[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4);\n  display: flex;\n  flex-direction: column;\n}\n.feed-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: var(--space-4);\n}\n.feed-title[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\n.feed-sub[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: var(--text-sm);\n}\n.deck[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 520px;\n}\n.swipe-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-md);\n  overflow: hidden;\n}\n.swipe-card.behind[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  transform: scale(0.95) translateY(14px);\n  opacity: 0.7;\n  z-index: 1;\n}\n.swipe-card.top[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}\n.swipe-card.top.fly-like[_ngcontent-%COMP%] {\n  transform: translateX(120%) rotate(12deg);\n  opacity: 0;\n}\n.swipe-card.top.fly-pass[_ngcontent-%COMP%] {\n  transform: translateX(-120%) rotate(-12deg);\n  opacity: 0;\n}\n.card-photo[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 240px;\n  border: none;\n  cursor: pointer;\n  background:\n    radial-gradient(\n      130% 120% at 50% -10%,\n      rgba(255, 255, 255, 0.28),\n      transparent 55%),\n    var(--grad-1);\n}\n.card-photo[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n}\n.photo-initials[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 56px;\n  font-weight: 800;\n}\n.verified-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  border-radius: var(--radius-full);\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--color-primary);\n  font-size: var(--text-xs);\n  font-weight: 700;\n}\n.verified-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.tap-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  right: 14px;\n  font-size: var(--text-xs);\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n}\n.card-name[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\n.card-role[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-weight: 600;\n}\n.card-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 6px;\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n}\n.card-location[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.card-headline[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  font-style: italic;\n  color: var(--color-primary);\n  font-weight: 600;\n}\n.card-bio[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  line-height: 1.55;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: var(--space-4);\n}\n.mutuals[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: var(--space-4);\n  padding-top: var(--space-3);\n  border-top: 1px solid var(--color-border);\n  font-size: var(--text-sm);\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.mutuals[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: var(--color-primary);\n}\n.deck-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-7) var(--space-5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n}\n.empty-emoji[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-full);\n  background: var(--color-accent-soft);\n  color: var(--color-accent);\n}\n.empty-emoji[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-5);\n  margin-top: var(--space-5);\n}\n.fab[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  border-radius: var(--radius-full);\n  background: var(--color-surface);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--color-border);\n  transition: transform 0.08s ease, box-shadow 0.15s ease;\n}\n.fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n.fab-pass[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  color: var(--color-text-muted);\n}\n.fab-pass[_ngcontent-%COMP%]:hover {\n  color: var(--color-danger);\n  border-color: var(--color-danger);\n}\n.fab-info[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  color: var(--color-primary);\n}\n.fab-like[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  color: #fff;\n  background: var(--color-accent);\n  border-color: transparent;\n  box-shadow: 0 8px 20px rgba(236, 77, 107, 0.4);\n}\n.fab-like[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent-hover);\n}\n/*# sourceMappingURL=feed.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedComponent, { className: "FeedComponent", filePath: "src/app/features/feed/feed.component.ts", lineNumber: 16 });
})();
export {
  FeedComponent
};
//# sourceMappingURL=feed.component-NQP7WLCA.js.map
