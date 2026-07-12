import {
  RouterLink
} from "./chunk-Y5LH5DTG.js";
import {
  CommonModule,
  computed,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UGB4PC52.js";

// src/app/features/matches/matches.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/matches", a0];
function MatchesComponent_Conditional_4_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275element(1, "img", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, m_r1.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", m_r1.user.pictureUrl, \u0275\u0275sanitizeUrl)("alt", m_r1.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.user.name.split(" ")[0]);
  }
}
function MatchesComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "h2", 4);
    \u0275\u0275text(2, "New matches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275repeaterCreate(4, MatchesComponent_Conditional_4_Conditional_0_For_5_Template, 4, 6, "a", 7, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.newMatches());
  }
}
function MatchesComponent_Conditional_4_For_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.unread);
  }
}
function MatchesComponent_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 9);
    \u0275\u0275element(2, "img", 10);
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, MatchesComponent_Conditional_4_For_5_Conditional_11_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, m_r3.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", m_r3.user.pictureUrl, \u0275\u0275sanitizeUrl)("alt", m_r3.user.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r3.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.lastMessageAt);
    \u0275\u0275advance();
    \u0275\u0275classProp("unreadtext", m_r3.unread > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.lastMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, m_r3.unread > 0 ? 11 : -1);
  }
}
function MatchesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatchesComponent_Conditional_4_Conditional_0_Template, 6, 0, "section", 3);
    \u0275\u0275elementStart(1, "h2", 4);
    \u0275\u0275text(2, "Conversations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 5);
    \u0275\u0275repeaterCreate(4, MatchesComponent_Conditional_4_For_5_Template, 12, 11, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r1.newMatches().length ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.matches());
  }
}
function MatchesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 18);
    \u0275\u0275element(3, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "No matches yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 20);
    \u0275\u0275text(7, "Keep swiping in Discover \u2014 when you both like each other, they'll show up here.");
    \u0275\u0275elementEnd()();
  }
}
var MatchesComponent = class _MatchesComponent {
  constructor() {
    this.matches = signal([
      {
        id: "m1",
        user: { id: "u1", name: "Maya Chen", jobTitle: "Senior Product Designer", employer: "Figma", bio: "", pictureUrl: "https://i.pravatar.cc/150?img=47", photos: [], distanceKm: 3, mutualConnections: 12 },
        lastMessage: "Ramen this weekend? I know a great spot",
        lastMessageAt: "2m",
        unread: 2
      },
      {
        id: "m2",
        user: { id: "u3", name: "Priya Raman", jobTitle: "VC Partner", employer: "Sequoia", bio: "", pictureUrl: "https://i.pravatar.cc/150?img=32", photos: [], distanceKm: 15, mutualConnections: 21 },
        lastMessage: "Loved your take on climate tech.",
        lastMessageAt: "1h",
        unread: 0
      },
      {
        id: "m3",
        user: { id: "u4", name: "Alex Rivera", jobTitle: "Founder & CEO", employer: "Northwind Labs", bio: "", pictureUrl: "https://i.pravatar.cc/150?img=52", photos: [], distanceKm: 6, mutualConnections: 9 },
        lastMessage: "You: Coffee near the ferry building?",
        lastMessageAt: "Yesterday",
        unread: 0
      }
    ]);
    this.newMatches = computed(() => this.matches().filter((m) => m.unread > 0));
    this.hasMatches = computed(() => this.matches().length > 0);
  }
  static {
    this.\u0275fac = function MatchesComponent_Factory(t) {
      return new (t || _MatchesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatchesComponent, selectors: [["app-matches"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "new-matches"], [1, "section-title"], [1, "convo-list"], [1, "avatar-row"], [1, "avatar-item", 3, "routerLink"], ["width", "72", "height", "72", 3, "src", "alt"], [1, "convo", 3, "routerLink"], ["width", "56", "height", "56", 1, "convo-avatar", 3, "src", "alt"], [1, "convo-main"], [1, "convo-top"], [1, "convo-time", "muted"], [1, "convo-preview"], [1, "unread-dot"], [1, "empty-state"], ["aria-hidden", "true", 1, "empty-emoji"], ["width", "52", "height", "52", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.4 1-1.1a5.5 5.5 0 0 0 0-7.8z"], [1, "muted"]], template: function MatchesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Matches");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, MatchesComponent_Conditional_4_Template, 6, 1)(5, MatchesComponent_Conditional_5_Template, 8, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.hasMatches() ? 4 : 5);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.new-matches[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.avatar-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  overflow-x: auto;\n  overscroll-behavior-x: contain;\n  padding-bottom: var(--space-2);\n}\n.avatar-item[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-1);\n  font-size: var(--text-xs);\n  font-weight: 600;\n}\n.avatar-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-pill);\n  object-fit: cover;\n  border: 3px solid var(--color-accent);\n  padding: 2px;\n}\n.convo-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.convo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 72px;\n  padding: var(--space-3);\n  border-radius: var(--radius-md);\n  transition: background 0.12s ease;\n}\n.convo[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.convo-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-pill);\n  object-fit: cover;\n}\n.convo-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.convo-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.convo-time[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.convo-preview[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--color-text-muted);\n  margin-top: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.unreadtext[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-weight: 600;\n}\n.unread-dot[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 6px;\n  border-radius: var(--radius-pill);\n  background: var(--color-accent);\n  color: var(--color-text-oncolor);\n  font-size: var(--text-xs);\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-emoji[_ngcontent-%COMP%] {\n  font-size: 52px;\n  margin-bottom: var(--space-3);\n}\n/*# sourceMappingURL=matches.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchesComponent, { className: "MatchesComponent", filePath: "src/app/features/matches/matches.component.ts", lineNumber: 13 });
})();
export {
  MatchesComponent
};
//# sourceMappingURL=matches.component-AFTNLPHR.js.map
