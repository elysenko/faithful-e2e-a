import {
  toSignal
} from "./chunk-AO7EV4LS.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4ZKGBDGO.js";

// src/app/features/conversation/conversation.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ConversationComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
}
function ConversationComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ConversationComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewProfile());
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275element(2, "app-avatar", 16);
    \u0275\u0275template(3, ConversationComponent_Conditional_5_Conditional_3_Template, 1, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275property("name", c_r3.name)("size", 40);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, c_r3.online ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.online ? "Active now" : c_r3.jobTitle);
  }
}
function ConversationComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-avatar", 16);
    \u0275\u0275elementStart(2, "p")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx;
    \u0275\u0275advance();
    \u0275\u0275property("name", c_r4.name)("size", 56);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("You matched with ", c_r4.name.split(" ")[0], "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r4.jobTitle, " \xB7 ", c_r4.employer, "");
  }
}
function ConversationComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mine", m_r5.senderId === ctx_r1.myId);
    \u0275\u0275advance();
    \u0275\u0275classProp("mine", m_r5.senderId === ctx_r1.myId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r5.body, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.createdAt);
  }
}
function ConversationComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "Say hello to start the conversation.");
    \u0275\u0275elementEnd();
  }
}
var ConversationComponent = class _ConversationComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.matchId = toSignal(this.route.paramMap.pipe(map((p) => p.get("matchId") ?? "")), {
      initialValue: ""
    });
    this.myId = "me";
    this.contacts = signal([
      { id: "m1", userId: "u201", name: "Priya Nair", jobTitle: "Senior Data Scientist", employer: "Helix Bio", lastMessage: "", lastActivity: "2m", unread: 0, online: true },
      { id: "m2", userId: "u203", name: "Sofia Ramos", jobTitle: "Brand Strategist", employer: "Wieden+Kennedy", lastMessage: "", lastActivity: "1h", unread: 0, online: true },
      { id: "m3", userId: "u205", name: "Aisha Khan", jobTitle: "Product Manager", employer: "Notion", lastMessage: "", lastActivity: "3h", unread: 0, online: false },
      { id: "m4", userId: "u208", name: "Jordan Lee", jobTitle: "UX Researcher", employer: "Airbnb", lastMessage: "", lastActivity: "1d", unread: 0, online: false },
      { id: "m5", userId: "u211", name: "Elena Petrova", jobTitle: "VC Associate", employer: "Index Ventures", lastMessage: "", lastActivity: "2d", unread: 0, online: false }
    ]);
    this.messages = signal([
      { id: "x1", matchId: "m1", senderId: "u201", body: "Hi Alex! Loved your profile \u2014 a design lead who runs trails is rare.", createdAt: "9:41 AM" },
      { id: "x2", matchId: "m1", senderId: "me", body: "Ha, guilty. Though I mostly run to justify the ramen afterwards.", createdAt: "9:44 AM" },
      { id: "x3", matchId: "m1", senderId: "u201", body: "Now THAT is a philosophy I can get behind.", createdAt: "9:45 AM" },
      { id: "x4", matchId: "m1", senderId: "u201", body: "Ramen debate settled \u2014 I know the spot. Free Thursday?", createdAt: "9:46 AM" },
      { id: "x5", matchId: "m2", senderId: "u203", body: "That gallery opening looks amazing, count me in!", createdAt: "Yesterday" },
      { id: "x6", matchId: "m3", senderId: "me", body: "A PM who writes haiku? I had to swipe right.", createdAt: "Mon" },
      { id: "x7", matchId: "m3", senderId: "u205", body: "Haiku accepted. Your move. \u{1F60C}", createdAt: "Mon" }
    ]);
    this.contact = computed(() => this.contacts().find((c) => c.id === this.matchId()) ?? null);
    this.thread = computed(() => this.messages().filter((m) => m.matchId === this.matchId()));
    this.draft = signal("");
  }
  send() {
    const body = this.draft().trim();
    if (!body)
      return;
    this.messages.update((list) => [
      ...list,
      { id: "local-" + list.length, matchId: this.matchId(), senderId: this.myId, body, createdAt: "Now" }
    ]);
    this.draft.set("");
  }
  back() {
    this.router.navigate(["/matches"]);
  }
  viewProfile() {
    const c = this.contact();
    if (c)
      this.router.navigate(["/profile", c.userId]);
  }
  static {
    this.\u0275fac = function ConversationComponent_Factory(t) {
      return new (t || _ConversationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConversationComponent, selectors: [["app-conversation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [[1, "chat"], [1, "chat-head"], ["aria-label", "Back to matches", 1, "back-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M15.75 19.5 8.25 12l7.5-7.5", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "chat-peer"], [1, "thread"], [1, "match-note"], [1, "bubble-row", 3, "mine"], [1, "empty"], [1, "composer", 3, "ngSubmit"], ["type", "text", "placeholder", "Write a message\u2026", "name", "draft", "autocomplete", "off", 1, "composer-input", 3, "ngModelChange", "ngModel"], ["type", "submit", "aria-label", "Send", 1, "send-btn", 3, "disabled"], ["d", "M6 12 3.27 3.9a.6.6 0 0 1 .81-.74l16.5 7.8a.6.6 0 0 1 0 1.08l-16.5 7.8a.6.6 0 0 1-.81-.74L6 12zm0 0h6", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "chat-peer", 3, "click"], [1, "peer-avatar"], [3, "name", "size"], [1, "online-dot"], [1, "peer-meta"], [1, "subtle"], [1, "bubble-row"], [1, "bubble"], [1, "bubble-time"]], template: function ConversationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ConversationComponent_Template_button_click_2_listener() {
          return ctx.back();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, ConversationComponent_Conditional_5_Template, 9, 5, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275template(7, ConversationComponent_Conditional_7_Template, 7, 5, "div", 7);
        \u0275\u0275repeaterCreate(8, ConversationComponent_For_9_Template, 5, 6, "div", 8, _forTrack0);
        \u0275\u0275template(10, ConversationComponent_Conditional_10_Template, 2, 0, "p", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 10);
        \u0275\u0275listener("ngSubmit", function ConversationComponent_Template_form_ngSubmit_11_listener() {
          return ctx.send();
        });
        \u0275\u0275elementStart(12, "input", 11);
        \u0275\u0275listener("ngModelChange", function ConversationComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.draft.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 12);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 3);
        \u0275\u0275element(15, "path", 13);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, (tmp_0_0 = ctx.contact()) ? 5 : -1, tmp_0_0);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(7, (tmp_1_0 = ctx.contact()) ? 7 : -1, tmp_1_0);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.thread());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(10, ctx.thread().length === 0 ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.draft());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.draft().trim());
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, AvatarComponent], styles: ["\n\n.chat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  max-width: var(--content-max);\n  margin: 0 auto;\n  width: 100%;\n  background: var(--color-surface);\n}\n.chat-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-2) var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface);\n  position: sticky;\n  top: 0;\n  z-index: 5;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border: none;\n  background: none;\n  border-radius: var(--radius-full);\n  color: var(--color-text-muted);\n}\n.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.back-btn[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.chat-peer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: none;\n  border: none;\n  padding: 4px;\n  flex: 1;\n  min-width: 0;\n}\n.peer-avatar[_ngcontent-%COMP%] {\n  position: relative;\n}\n.peer-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.peer-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n}\n.peer-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.online-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: var(--color-success);\n  border: 2px solid var(--color-surface);\n}\n.thread[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n  padding: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  background: var(--color-bg);\n}\n.match-note[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-4) 0 var(--space-5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.match-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n}\n.match-note[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.bubble-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.bubble-row.mine[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.bubble[_ngcontent-%COMP%] {\n  max-width: 78%;\n  padding: 10px 14px 20px;\n  border-radius: 18px 18px 18px 4px;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  font-size: var(--text-sm);\n  line-height: 1.45;\n  position: relative;\n}\n.bubble.mine[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: #fff;\n  border-color: transparent;\n  border-radius: 18px 18px 4px 18px;\n}\n.bubble-time[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  bottom: 5px;\n  font-size: 10px;\n  opacity: 0.7;\n}\n.composer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: var(--space-3) var(--space-3);\n  padding-bottom: calc(var(--space-3) + env(safe-area-inset-bottom));\n  border-top: 1px solid var(--color-border);\n  background: var(--color-surface);\n}\n.composer-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: var(--radius-full);\n  background: var(--color-surface-alt);\n  border-color: transparent;\n}\n.send-btn[_ngcontent-%COMP%] {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 48px;\n  height: 48px;\n  border: none;\n  border-radius: var(--radius-full);\n  background: var(--color-primary);\n  color: #fff;\n  transition: background 0.15s ease, transform 0.06s ease;\n}\n.send-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.send-btn[_ngcontent-%COMP%]:disabled {\n  background: var(--color-border-strong);\n  cursor: default;\n}\n.send-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.94);\n}\n/*# sourceMappingURL=conversation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConversationComponent, { className: "ConversationComponent", filePath: "src/app/features/conversation/conversation.component.ts", lineNumber: 17 });
})();
export {
  ConversationComponent
};
//# sourceMappingURL=conversation.component-4DSTZWUC.js.map
