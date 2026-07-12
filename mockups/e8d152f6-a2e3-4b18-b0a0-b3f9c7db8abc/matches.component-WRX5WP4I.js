import {
  AvatarComponent
} from "./chunk-2YFTR47U.js";
import {
  CommonModule,
  Router,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-4ZKGBDGO.js";

// src/app/features/matches/matches.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MatchesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "No matches yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function MatchesComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goDiscover());
    });
    \u0275\u0275text(4, "Start discovering");
    \u0275\u0275elementEnd()();
  }
}
function MatchesComponent_Conditional_7_Conditional_0_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
}
function MatchesComponent_Conditional_7_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function MatchesComponent_Conditional_7_Conditional_0_For_5_Template_button_click_0_listener() {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.open(m_r4));
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275element(2, "app-avatar", 14);
    \u0275\u0275template(3, MatchesComponent_Conditional_7_Conditional_0_For_5_Conditional_3_Template, 1, 0, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("name", m_r4.name)("size", 64)("ring", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, m_r4.online ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.name.split(" ")[0]);
  }
}
function MatchesComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h2", 8);
    \u0275\u0275text(2, "New matches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, MatchesComponent_Conditional_7_Conditional_0_For_5_Template, 6, 5, "button", 11, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.newMatches());
  }
}
function MatchesComponent_Conditional_7_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
}
function MatchesComponent_Conditional_7_For_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r6.unread);
  }
}
function MatchesComponent_Conditional_7_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 17);
    \u0275\u0275listener("click", function MatchesComponent_Conditional_7_For_6_Template_button_click_1_listener() {
      const m_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.open(m_r6));
    });
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275element(3, "app-avatar", 19);
    \u0275\u0275template(4, MatchesComponent_Conditional_7_For_6_Conditional_4_Template, 1, 0, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20)(6, "span", 21)(7, "strong", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 25);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, MatchesComponent_Conditional_7_For_6_Conditional_15_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("name", m_r6.name)("size", 52);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, m_r6.online ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r6.lastActivity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r6.jobTitle, " \xB7 ", m_r6.employer, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("unreadmsg", m_r6.unread > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r6.lastMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(15, m_r6.unread > 0 ? 15 : -1);
  }
}
function MatchesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatchesComponent_Conditional_7_Conditional_0_Template, 6, 0, "section", 6);
    \u0275\u0275elementStart(1, "section", 7)(2, "h2", 8);
    \u0275\u0275text(3, "Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 9);
    \u0275\u0275repeaterCreate(5, MatchesComponent_Conditional_7_For_6_Template, 16, 11, "li", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r1.newMatches().length > 0 ? 0 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.conversations());
  }
}
var MatchesComponent = class _MatchesComponent {
  constructor() {
    this.router = inject(Router);
    this.matches = signal([
      { id: "m1", userId: "u201", name: "Priya Nair", jobTitle: "Senior Data Scientist", employer: "Helix Bio", lastMessage: "Ramen debate settled \u2014 I know the spot. Free Thursday?", lastActivity: "2m", unread: 2, online: true },
      { id: "m2", userId: "u203", name: "Sofia Ramos", jobTitle: "Brand Strategist", employer: "Wieden+Kennedy", lastMessage: "That gallery opening looks amazing, count me in!", lastActivity: "1h", unread: 0, online: true },
      { id: "m3", userId: "u205", name: "Aisha Khan", jobTitle: "Product Manager", employer: "Notion", lastMessage: "Haiku accepted. Your move. \u{1F60C}", lastActivity: "3h", unread: 1, online: false },
      { id: "m4", userId: "u208", name: "Jordan Lee", jobTitle: "UX Researcher", employer: "Airbnb", lastMessage: "You matched \u2014 say hi \u{1F44B}", lastActivity: "1d", unread: 0, online: false },
      { id: "m5", userId: "u211", name: "Elena Petrova", jobTitle: "VC Associate", employer: "Index Ventures", lastMessage: "Loved your take on calm software.", lastActivity: "2d", unread: 0, online: false }
    ]);
    this.newMatches = computed(() => this.matches().filter((m) => m.lastMessage.includes("matched")));
    this.conversations = computed(() => this.matches().filter((m) => !m.lastMessage.includes("matched")));
  }
  open(match) {
    this.router.navigate(["/matches", match.id]);
  }
  goDiscover() {
    this.router.navigate(["/feed"]);
  }
  static {
    this.\u0275fac = function MatchesComponent_Factory(t) {
      return new (t || _MatchesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatchesComponent, selectors: [["app-matches"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "empty"], [1, "btn", "btn-primary", 3, "click"], [1, "new-matches"], [1, "conversations"], [1, "section-label"], [1, "conv-list"], [1, "new-row"], [1, "new-item"], [1, "new-item", 3, "click"], [1, "new-avatar"], [3, "name", "size", "ring"], [1, "online-dot"], [1, "new-name"], [1, "conv-row", 3, "click"], [1, "conv-avatar"], [3, "name", "size"], [1, "conv-main"], [1, "conv-top"], [1, "conv-name"], [1, "conv-time", "subtle"], [1, "conv-role", "subtle"], [1, "conv-msg"], [1, "unread-badge"]], template: function MatchesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Matches");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "People you both liked. Say hello and start the conversation.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, MatchesComponent_Conditional_6_Template, 5, 0, "div", 4)(7, MatchesComponent_Conditional_7_Template, 7, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.matches().length === 0 ? 6 : 7);
      }
    }, dependencies: [CommonModule, AvatarComponent], styles: ["\n\n.section-label[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--color-text-subtle);\n  margin-bottom: var(--space-3);\n}\n.new-matches[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-6);\n}\n.new-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  overflow-x: auto;\n  padding-bottom: 6px;\n  overscroll-behavior-x: contain;\n}\n.new-item[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  padding: 0;\n}\n.new-avatar[_ngcontent-%COMP%], .conv-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n}\n.new-name[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  font-weight: 600;\n}\n.online-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: var(--color-success);\n  border: 2px solid var(--color-surface);\n}\n.conv-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.conv-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n}\n.conv-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  width: 100%;\n  min-height: 76px;\n  padding: var(--space-3) var(--space-2);\n  background: none;\n  border: none;\n  text-align: left;\n  border-radius: var(--radius-md);\n  transition: background 0.12s ease;\n}\n.conv-row[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface);\n}\n.conv-row[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.conv-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.conv-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 8px;\n}\n.conv-name[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n}\n.conv-time[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  flex: none;\n}\n.conv-role[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.conv-msg[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.conv-msg.unreadmsg[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-weight: 600;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  flex: none;\n  display: grid;\n  place-items: center;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 6px;\n  border-radius: var(--radius-full);\n  background: var(--color-accent);\n  color: #fff;\n  font-size: var(--text-xs);\n  font-weight: 700;\n}\n/*# sourceMappingURL=matches.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchesComponent, { className: "MatchesComponent", filePath: "src/app/features/matches/matches.component.ts", lineNumber: 14 });
})();
export {
  MatchesComponent
};
//# sourceMappingURL=matches.component-WRX5WP4I.js.map
