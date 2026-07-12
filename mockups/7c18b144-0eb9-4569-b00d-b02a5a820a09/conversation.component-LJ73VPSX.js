import {
  ActivatedRoute,
  RouterLink
} from "./chunk-Y5LH5DTG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-Y254YSMO.js";
import {
  CommonModule,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UGB4PC52.js";

// src/app/features/conversation/conversation.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/users", a0];
function ConversationComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r1 = ctx.$implicit;
    \u0275\u0275classProp("mine", msg_r1.mine);
    \u0275\u0275advance();
    \u0275\u0275classProp("bubble-mine", msg_r1.mine);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", msg_r1.body, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r1.createdAt);
  }
}
var ConversationComponent = class _ConversationComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.matchId = this.route.snapshot.paramMap.get("matchId") ?? "m1";
    this.partners = signal([
      { id: "m1", user: { id: "u1", name: "Maya Chen", jobTitle: "Senior Product Designer", employer: "Figma", bio: "", pictureUrl: "https://i.pravatar.cc/150?img=47", photos: [], distanceKm: 3, mutualConnections: 12 }, lastMessage: "", lastMessageAt: "", unread: 0 },
      { id: "m2", user: { id: "u3", name: "Priya Raman", jobTitle: "VC Partner", employer: "Sequoia", bio: "", pictureUrl: "https://i.pravatar.cc/150?img=32", photos: [], distanceKm: 15, mutualConnections: 21 }, lastMessage: "", lastMessageAt: "", unread: 0 },
      { id: "m3", user: { id: "u4", name: "Alex Rivera", jobTitle: "Founder & CEO", employer: "Northwind Labs", bio: "", pictureUrl: "https://i.pravatar.cc/150?img=52", photos: [], distanceKm: 6, mutualConnections: 9 }, lastMessage: "", lastMessageAt: "", unread: 0 }
    ]);
    this.messages = signal([
      { id: "x1", matchId: "m1", senderId: "u1", body: "Hey! We matched \u2014 I loved that you also lead a design system.", createdAt: "10:02", mine: false },
      { id: "x2", matchId: "m1", senderId: "me", body: "Right?! Tokens or components, I could talk shop forever.", createdAt: "10:04", mine: true },
      { id: "x3", matchId: "m1", senderId: "u1", body: "Same. Also, off the clock \u2014 best ramen in the city, go.", createdAt: "10:05", mine: false },
      { id: "x4", matchId: "m1", senderId: "me", body: "Easy. There is a tiny spot in Japantown. Let me take you?", createdAt: "10:07", mine: true },
      { id: "x5", matchId: "m1", senderId: "u1", body: "Ramen this weekend? I know a great spot", createdAt: "10:08", mine: false }
    ]);
    this.draft = signal("");
    this.partner = computed(() => this.partners().find((p) => p.id === this.matchId) ?? this.partners()[0]);
    this.thread = computed(() => this.messages().filter((m) => m.matchId === this.matchId || this.matchId === "m1"));
  }
  send() {
    const body = this.draft().trim();
    if (!body)
      return;
    this.messages.update((list) => [
      ...list,
      { id: "local-" + list.length, matchId: this.matchId, senderId: "me", body, createdAt: "now", mine: true }
    ]);
    this.draft.set("");
  }
  static {
    this.\u0275fac = function ConversationComponent_Factory(t) {
      return new (t || _ConversationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConversationComponent, selectors: [["app-conversation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 15, consts: [[1, "convo-page"], [1, "convo-header"], ["routerLink", "/matches", "aria-label", "Back to matches", 1, "back"], [1, "peer", 3, "routerLink"], ["width", "40", "height", "40", 3, "src", "alt"], [1, "peer-meta"], [1, "muted"], ["aria-label", "View profile", 1, "peer-view", 3, "routerLink"], [1, "thread"], [1, "match-banner"], ["width", "64", "height", "64", 3, "src", "alt"], [1, "bubble-row", 3, "mine"], [1, "composer", 3, "ngSubmit"], ["type", "text", "name", "draft", "placeholder", "Message\u2026", "autocomplete", "off", "data-testid", "message-input", 1, "composer-input", 3, "ngModelChange", "ngModel"], ["type", "submit", "aria-label", "Send", 1, "composer-send", 3, "disabled"], [1, "bubble-row"], [1, "bubble"], [1, "bubble-time"]], template: function ConversationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "a", 3);
        \u0275\u0275element(5, "img", 4);
        \u0275\u0275elementStart(6, "div", 5)(7, "strong");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "a", 7);
        \u0275\u0275text(12, "\u24D8");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
        \u0275\u0275element(15, "img", 10);
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17, "You matched with ");
        \u0275\u0275elementStart(18, "strong");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " \xB7 say hi");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(21, ConversationComponent_For_22_Template, 5, 6, "div", 11, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "form", 12);
        \u0275\u0275listener("ngSubmit", function ConversationComponent_Template_form_ngSubmit_23_listener() {
          return ctx.send();
        });
        \u0275\u0275elementStart(24, "input", 13);
        \u0275\u0275listener("ngModelChange", function ConversationComponent_Template_input_ngModelChange_24_listener($event) {
          return ctx.draft.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 14);
        \u0275\u0275text(26, "\u27A4");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, ctx.partner().user.id));
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.partner().user.pictureUrl, \u0275\u0275sanitizeUrl)("alt", ctx.partner().user.name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.partner().user.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.partner().user.jobTitle);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, ctx.partner().user.id));
        \u0275\u0275advance(4);
        \u0275\u0275property("src", ctx.partner().user.pictureUrl, \u0275\u0275sanitizeUrl)("alt", ctx.partner().user.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.partner().user.name);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.thread());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.draft());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.draft().trim());
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.convo-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100svh - var(--nav-height) - var(--safe-bottom));\n  max-width: var(--content-max);\n  margin: 0 auto;\n  background: var(--color-surface);\n}\n.convo-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-2) var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-surface);\n}\n.back[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 1;\n  min-width: 40px;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  color: var(--color-primary);\n}\n.peer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex: 1;\n  min-width: 0;\n}\n.peer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-pill);\n  object-fit: cover;\n}\n.peer-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.peer-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.peer-view[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n  font-size: var(--text-lg);\n}\n.thread[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n  padding: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  background: var(--color-bg);\n}\n.match-banner[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-3);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n}\n.match-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: var(--radius-pill);\n  object-fit: cover;\n  margin: 0 auto var(--space-2);\n  border: 3px solid var(--color-accent);\n}\n.bubble-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.bubble-row.mine[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.bubble[_ngcontent-%COMP%] {\n  max-width: 78%;\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-md);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  font-size: var(--text-sm);\n  line-height: 1.35;\n  border-bottom-left-radius: var(--space-1);\n}\n.bubble-mine[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-text-oncolor);\n  border-color: var(--color-primary);\n  border-bottom-left-radius: var(--radius-md);\n  border-bottom-right-radius: var(--space-1);\n}\n.bubble-time[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  opacity: 0.6;\n  margin-top: 2px;\n  text-align: right;\n}\n.composer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-2) var(--space-3);\n  border-top: 1px solid var(--color-border);\n  background: var(--color-surface);\n}\n.composer-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 44px;\n  padding: 0 var(--space-4);\n  border-radius: var(--radius-pill);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-surface-alt);\n}\n.composer-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n}\n.composer-send[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-pill);\n  background: var(--color-primary);\n  color: var(--color-text-oncolor);\n  font-size: var(--text-base);\n}\n.composer-send[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=conversation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConversationComponent, { className: "ConversationComponent", filePath: "src/app/features/conversation/conversation.component.ts", lineNumber: 14 });
})();
export {
  ConversationComponent
};
//# sourceMappingURL=conversation.component-LJ73VPSX.js.map
