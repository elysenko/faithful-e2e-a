import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  Router,
  RouterLink,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/email/email.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.account;
function EmailComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function EmailComponent_For_8_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function EmailComponent_Conditional_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function EmailComponent_Conditional_9_For_3_Template_button_click_0_listener() {
      const e_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.select(e_r5.id));
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275element(2, "span", 17);
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const e_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("msg-active", ((tmp_11_0 = ctx_r2.selectedEmail()) == null ? null : tmp_11_0.id) === e_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("unread", e_r5.unread);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r5.from);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.toneBadge(e_r5.tone));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r5.tone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r5.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r5.preview);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", e_r5.account, " \xB7 ", \u0275\u0275pipeBind2(13, 12, e_r5.receivedAt, "MMM d, h:mm a"), "");
  }
}
function EmailComponent_Conditional_9_Conditional_5_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7);
  }
}
function EmailComponent_Conditional_9_Conditional_5_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 39)(2, "span", 34);
    \u0275\u0275text(3, "Health score & connection level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 40)(7, "div", 41);
    \u0275\u0275element(8, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 44);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const acc_r8 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.healthBadge(acc_r8.connectionLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(acc_r8.connectionLevel);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", acc_r8.healthScore, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r8.healthScore);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.connectionWhy());
  }
}
function EmailComponent_Conditional_9_Conditional_5_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function EmailComponent_Conditional_9_Conditional_5_For_36_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.noop());
    });
    \u0275\u0275text(4, "Add to tasks");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r10);
  }
}
function EmailComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div")(2, "h2", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5, "From ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 27);
    \u0275\u0275text(15, "The full thread continues below. Reply in your voice to keep the relationship warm and the momentum going.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 28)(17, "button", 29);
    \u0275\u0275listener("click", function EmailComponent_Conditional_9_Conditional_5_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDraft());
    });
    \u0275\u0275text(18, "Draft reply in your voice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 30);
    \u0275\u0275text(20, "Open tasks");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 31)(22, "div", 32)(23, "h3", 33);
    \u0275\u0275text(24, "AI analysis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 19);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 34);
    \u0275\u0275text(28, "Signals detected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 35);
    \u0275\u0275repeaterCreate(30, EmailComponent_Conditional_9_Conditional_5_For_31_Template, 2, 1, "span", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, EmailComponent_Conditional_9_Conditional_5_Conditional_32_Template, 13, 7, "div", 37);
    \u0275\u0275elementStart(33, "div", 34);
    \u0275\u0275text(34, "Extracted tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(35, EmailComponent_Conditional_9_Conditional_5_For_36_Template, 5, 1, "div", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const e_r11 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r11.subject);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(e_r11.from);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \xB7 ", e_r11.account, " \xB7 ", \u0275\u0275pipeBind2(9, 12, e_r11.receivedAt, "medium"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.toneBadge(e_r11.tone));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r11.tone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r11.preview);
    \u0275\u0275advance(12);
    \u0275\u0275classMap(ctx_r2.toneBadge(e_r11.tone));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("tone: ", e_r11.tone, "");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(e_r11.signals);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(32, (tmp_12_0 = ctx_r2.selectedAccountHealth()) ? 32 : -1, tmp_12_0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(e_r11.extractedTasks);
  }
}
function EmailComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Select a message to read it.");
    \u0275\u0275elementEnd();
  }
}
function EmailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12);
    \u0275\u0275repeaterCreate(2, EmailComponent_Conditional_9_For_3_Template, 14, 15, "button", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275template(5, EmailComponent_Conditional_9_Conditional_5_Template, 37, 15)(6, EmailComponent_Conditional_9_Conditional_6_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.seed.emails());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(5, (tmp_2_0 = ctx_r2.selectedEmail()) ? 5 : 6, tmp_2_0);
  }
}
function EmailComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 16)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("To: ", s_r12.to, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r12.account);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r12.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r12.preview);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Sent ", \u0275\u0275pipeBind2(12, 5, s_r12.sentAt, "MMM d, h:mm a"), "");
  }
}
function EmailComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, EmailComponent_Conditional_10_For_2_Template, 13, 8, "div", 47, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.sent);
  }
}
function EmailComponent_Conditional_11_For_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r13.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("via ", s_r13.from, "");
  }
}
function EmailComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 32)(2, "h3", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, EmailComponent_Conditional_11_For_2_For_7_Template, 5, 2, "div", 49, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(g_r14.account);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.toneBadge(g_r14.tone));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r14.tone);
    \u0275\u0275advance();
    \u0275\u0275repeater(g_r14.signals);
  }
}
function EmailComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, EmailComponent_Conditional_11_For_2_Template, 8, 4, "div", 9, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.signalGroups());
  }
}
function EmailComponent_Conditional_12_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 52);
    \u0275\u0275element(1, "input", 53);
    \u0275\u0275elementStart(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r15.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r15.account);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("from ", t_r15.from, "");
  }
}
function EmailComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 32)(2, "h3", 33);
    \u0275\u0275text(3, "Extracted from your inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 51);
    \u0275\u0275text(5, "Open task list");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, EmailComponent_Conditional_12_For_7_Template, 8, 3, "label", 52, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.aggregatedTasks());
  }
}
function EmailComponent_Conditional_13_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r17);
  }
}
function EmailComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function EmailComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDraft());
    });
    \u0275\u0275elementStart(1, "div", 56);
    \u0275\u0275listener("click", function EmailComponent_Conditional_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 57)(3, "h3", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function EmailComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDraft());
    });
    \u0275\u0275text(6, "Close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 58)(8, "div", 59)(9, "span");
    \u0275\u0275text(10, "Written in your voice: warm, flowing, and human. No bullet points, no dashes \u2014 just how you'd actually say it.");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(11, EmailComponent_Conditional_13_For_12_Template, 2, 1, "p", 60, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 61)(14, "button", 29);
    \u0275\u0275listener("click", function EmailComponent_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.noop());
    });
    \u0275\u0275text(15, "Send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 62);
    \u0275\u0275listener("click", function EmailComponent_Conditional_13_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.noop());
    });
    \u0275\u0275text(17, "Copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 46);
    \u0275\u0275listener("click", function EmailComponent_Conditional_13_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDraft());
    });
    \u0275\u0275text(19, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Draft reply to ", ctx.from, "");
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.draftReply());
  }
}
var EmailComponent = class _EmailComponent {
  toneBadge(tone) {
    switch (tone) {
      case "positive":
        return "badge-success";
      case "neutral":
        return "badge-neutral";
      case "concerned":
        return "badge-warning";
      case "urgent":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  healthBadge(level) {
    switch (level) {
      case "strong":
        return "badge-success";
      case "developing":
        return "badge-warning";
      case "at-risk":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  setTab(tab) {
    this.router.navigate([], { queryParams: { tab }, queryParamsHandling: "merge" });
  }
  select(id) {
    this.router.navigate([], { queryParams: { panel: id }, queryParamsHandling: "merge" });
  }
  openDraft() {
    this.router.navigate([], { queryParams: { modal: "draft" }, queryParamsHandling: "merge" });
  }
  closeDraft() {
    this.router.navigate([], { queryParams: { modal: null }, queryParamsHandling: "merge" });
  }
  noop() {
  }
  constructor(seed, route, router) {
    this.seed = seed;
    this.route = route;
    this.router = router;
    this.tabs = ["inbox", "sent", "signals", "tasks"];
    this.activeTab = signal("inbox");
    this.selectedId = signal(null);
    this.draftOpen = signal(false);
    this.sent = [
      { id: "s-1", to: "Erich Weber", account: "NOVVA", subject: "Re: ARES \u2014 XT6 accessory spacing question", preview: "Confirmed the 42X spacing is correct and attached the validation result so you can lock the basis of design with confidence.", sentAt: "2026-07-07T17:40:00" },
      { id: "s-2", to: "Stephanie Facemyer", account: "QES", subject: "SafeGear submittal schedule \u2014 Volition Canyon", preview: "Sending over the submittal timing you asked about; the team is tracking two weeks ahead of the milestone we set at kickoff.", sentAt: "2026-07-08T10:15:00" },
      { id: "s-3", to: "Ricardo Vasquez", account: "IE", subject: "PO-IE-0007 \u2014 schedule update", preview: "Wanted to get ahead of the crane window question and share where production currently has the bus stack landing.", sentAt: "2026-07-09T15:02:00" }
    ];
    this.selectedEmail = computed(() => {
      const id = this.selectedId();
      return id ? this.seed.emailById(id) : this.seed.emails()[0];
    });
    this.unreadCount = computed(() => this.seed.emails().filter((e) => e.unread).length);
    this.signalGroups = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const e of this.seed.emails()) {
        let g = map.get(e.account);
        if (!g) {
          g = { account: e.account, tone: e.tone, signals: [] };
          map.set(e.account, g);
        }
        for (const s of e.signals)
          g.signals.push({ text: s, from: e.from });
      }
      return Array.from(map.values());
    });
    this.aggregatedTasks = computed(() => {
      const out = [];
      for (const e of this.seed.emails()) {
        for (const t of e.extractedTasks) {
          out.push({ text: t, account: e.account, from: e.from, emailId: e.id });
        }
      }
      return out;
    });
    this.selectedAccountHealth = computed(() => {
      const e = this.selectedEmail();
      if (!e)
        return void 0;
      const token = e.account.toLowerCase();
      return this.seed.accounts().find((a) => a.name.toLowerCase().includes(token));
    });
    this.connectionWhy = computed(() => {
      const acc = this.selectedAccountHealth();
      const e = this.selectedEmail();
      if (!acc || !e)
        return "Connection strength reflects recent two-way engagement on this thread.";
      return `${acc.name.split("\u2014")[0].trim()} shows ${acc.connectionLevel} connection: ${acc.healthWhy} This ${e.tone} note from ${e.from} was factored into the current score.`;
    });
    this.draftReply = computed(() => {
      const e = this.selectedEmail();
      if (!e)
        return [];
      const first = e.from.split(" ")[0];
      switch (e.account) {
        case "IE":
          return [
            `Hi ${first}, thank you for the quick note and for flagging the crane window so clearly. I completely understand how much rides on that timing, and I want you to feel confident heading into your leadership conversation.`,
            `I have already pulled production into the loop and I am putting a firm written commit in front of you today so there are no surprises. You have my word that I will keep you ahead of any movement, and I am genuinely grateful for how closely you have partnered with us on this stack.`
          ];
        case "QES":
          return [
            `Hi ${first}, it truly made my day to read this, and I am so glad the team feels good about the lineup after the walkthrough. Moments like that are exactly why we love working with you on Volition Canyon.`,
            `On the SafeGear submittal timing, I am putting together a clear schedule and will have it to you shortly so you can plan around it easily. Thank you again for the trust you continue to place in us, and please pass along my appreciation to the whole team.`
          ];
        case "NOVVA":
          return [
            `Hi ${first}, great question, and I appreciate you double checking the spacing before you lock the basis of design. That kind of care is exactly what keeps these designs clean, and it is a pleasure to dig into the details with you.`,
            `The layout does call for the 42X spacing, and I am attaching our validation result so you have it on record as you finalize. Thank you for keeping me close on this, and do not hesitate to send anything else you want a second set of eyes on.`
          ];
        default:
          return [
            `Hi ${first}, it is genuinely good to hear from you, and no need to apologize at all. I know how these timelines shift, and I would much rather reconnect at the right moment than rush anything.`,
            `Let us line up a time next quarter to pick the roadmap conversation back up, and in the meantime I will keep a few relevant updates handy for you. Thank you for staying in touch, and I am looking forward to getting back into it together.`
          ];
      }
    });
    this.route.queryParamMap.subscribe((q) => {
      const t = q.get("tab");
      this.activeTab.set(t && this.tabs.includes(t) ? t : "inbox");
      this.selectedId.set(q.get("panel"));
      this.draftOpen.set(q.get("modal") === "draft");
    });
  }
  static {
    this.\u0275fac = function EmailComponent_Factory(t) {
      return new (t || _EmailComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailComponent, selectors: [["app-email"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 6, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "tabs"], [1, "tab", 3, "active"], [1, "mail"], [1, "card", "mail-list", "mail-list-full"], [1, "grid", "signal-grid"], [1, "card", "card-pad"], [1, "modal-scrim"], [1, "tab", 3, "click"], [1, "card", "mail-list"], [1, "msg", 3, "msg-active"], [1, "card", "card-pad", "mail-read"], [1, "msg", 3, "click"], [1, "msg-top"], [1, "msg-dot"], [1, "msg-from"], [1, "badge"], [1, "msg-subject"], [1, "msg-preview", "muted"], [1, "msg-meta", "muted", "mono"], [1, "read-head"], [1, "read-subject"], [1, "muted"], [1, "read-body"], [1, "read-body", "muted"], [1, "row", "read-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["routerLink", "/tasks", 1, "btn", "btn-sm"], [1, "card", "card-pad", "analysis"], [1, "analysis-head"], [1, "analysis-title"], [1, "analysis-label"], [1, "signal-row"], [1, "badge", "badge-info"], [1, "health-widget"], [1, "xtask"], [1, "health-head"], [1, "health-row"], [1, "bar-track"], [1, "bar-fill"], [1, "mono", "health-score"], [1, "muted", "health-why"], [1, "xtask-text"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "msg", "msg-static"], [1, "badge", "badge-neutral"], [1, "sig-line"], [1, "muted", "mono"], ["routerLink", "/tasks", 1, "btn", "btn-ghost", "btn-sm"], [1, "check-row"], ["type", "checkbox", 1, "check-box"], [1, "check-title"], [1, "modal-scrim", 3, "click"], [1, "modal", "card", 3, "click"], [1, "modal-head"], [1, "modal-body"], [1, "alert", "alert-info", "voice-note"], [1, "draft-para"], [1, "row", "modal-actions"], [1, "btn", "btn-sm", 3, "click"]], template: function EmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Inbox & signals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275repeaterCreate(7, EmailComponent_For_8_Template, 2, 3, "button", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, EmailComponent_Conditional_9_Template, 7, 1, "div", 6)(10, EmailComponent_Conditional_10_Template, 3, 0, "div", 7)(11, EmailComponent_Conditional_11_Template, 3, 0, "div", 8)(12, EmailComponent_Conditional_12_Template, 8, 0, "div", 9)(13, EmailComponent_Conditional_13_Template, 20, 1, "div", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_6_0;
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("Nexus Power CRM \xB7 relationship intelligence on every thread \xB7 ", ctx.unreadCount(), " unread");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(9, ctx.activeTab() === "inbox" ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.activeTab() === "sent" ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.activeTab() === "signals" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.activeTab() === "tasks" ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(13, (tmp_6_0 = ctx.draftOpen() && ctx.selectedEmail()) ? 13 : -1, tmp_6_0);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ["\n\n.mail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  gap: var(--sp-4);\n  align-items: start;\n}\n.mail-list[_ngcontent-%COMP%] {\n  padding: var(--sp-2);\n  display: flex;\n  flex-direction: column;\n}\n.mail-list-full[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.msg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: var(--sp-3);\n  cursor: pointer;\n  border-bottom: 1px solid var(--color-border);\n}\n.msg[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.msg[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-2);\n}\n.msg-active[_ngcontent-%COMP%] {\n  background: var(--color-brand-50);\n}\n.msg-static[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.msg-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n}\n.msg-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: transparent;\n  flex: 0 0 auto;\n}\n.msg-dot.unread[_ngcontent-%COMP%] {\n  background: var(--color-accent-600);\n}\n.msg-from[_ngcontent-%COMP%] {\n  font-weight: 600;\n  flex: 1;\n}\n.msg-subject[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  margin: 4px 0 2px;\n}\n.msg-preview[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.msg-meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  margin-top: 6px;\n}\n.mail-read[_ngcontent-%COMP%] {\n  min-height: 300px;\n}\n.read-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-3);\n}\n.read-subject[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  margin-bottom: 4px;\n}\n.read-body[_ngcontent-%COMP%] {\n  font-size: var(--fs-base);\n}\n.read-actions[_ngcontent-%COMP%] {\n  margin: var(--sp-4) 0;\n}\n.analysis[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n  margin-top: var(--sp-4);\n}\n.analysis-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--sp-3);\n}\n.analysis-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.analysis-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n  margin: var(--sp-4) 0 6px;\n}\n.signal-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.health-widget[_ngcontent-%COMP%] {\n  margin-top: var(--sp-4);\n  padding: var(--sp-3);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n}\n.health-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.health-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  margin: var(--sp-2) 0;\n}\n.health-score[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.health-why[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  margin: 0;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 10px;\n  flex: 1;\n  background: var(--color-surface-2);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-brand-600);\n  border-radius: 999px;\n}\n.xtask[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  padding: 8px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.xtask[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.xtask-text[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.signal-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n.sig-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: 6px 0;\n}\n.check-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: 10px 0;\n  border-bottom: 1px solid var(--color-border);\n  cursor: pointer;\n}\n.check-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.check-box[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  min-height: 18px;\n  flex: 0 0 auto;\n}\n.check-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-scrim[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(11, 28, 44, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-4);\n  z-index: 50;\n}\n.modal[_ngcontent-%COMP%] {\n  max-width: 560px;\n  width: 100%;\n  box-shadow: var(--shadow-lg);\n}\n.modal-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-4) var(--sp-5);\n  border-bottom: 1px solid var(--color-border);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: var(--sp-5);\n}\n.voice-note[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.draft-para[_ngcontent-%COMP%] {\n  font-size: var(--fs-base);\n  line-height: 1.6;\n  margin: 0 0 var(--sp-3);\n}\n.modal-actions[_ngcontent-%COMP%] {\n  padding: var(--sp-4) var(--sp-5);\n  border-top: 1px solid var(--color-border);\n}\n@media (max-width: 768px) {\n  .mail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mail-list[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n}\n/*# sourceMappingURL=email.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailComponent, { className: "EmailComponent", filePath: "src/app/features/email/email.component.ts", lineNumber: 36 });
})();
export {
  EmailComponent
};
//# sourceMappingURL=email.component-72O2FGGJ.js.map
