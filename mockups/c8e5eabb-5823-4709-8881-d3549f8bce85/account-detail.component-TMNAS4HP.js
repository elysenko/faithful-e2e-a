import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/accounts/account-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [];
var _c1 = (a0) => ({ tab: a0 });
var _c2 = (a0) => ["/contacts", a0];
var _c3 = (a0) => ["/projects", a0];
var _c4 = (a0) => ["/quotes", a0];
function AccountDetailComponent_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "strong");
    \u0275\u0275text(2, "Single-thread risk");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2014 this relationship depends on one contact. Build a bench of contacts to protect continuity. ");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_1_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab() === t_r1);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0))("queryParams", \u0275\u0275pureFunction1(6, _c1, t_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1);
  }
}
function AccountDetailComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 22)(2, "div", 23);
    \u0275\u0275text(3, "Backlog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "div", 23);
    \u0275\u0275text(9, "YTD revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 24);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 22)(14, "div", 23);
    \u0275\u0275text(15, "Open quotes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 24);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 22)(19, "div", 23);
    \u0275\u0275text(20, "Health score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 24);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 4, a_r3.backlogValue, "1.0-0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(12, 7, a_r3.ytdRevenue, "1.0-0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(a_r3.openQuotes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r3.healthScore);
  }
}
function AccountDetailComponent_Conditional_1_Conditional_26_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_1_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275template(7, AccountDetailComponent_Conditional_1_Conditional_26_For_2_Conditional_7_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const a_r3 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c2, c_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", a_r3.logoColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, c_r4.isChampion ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.strengthBadge(c_r4.relationshipStrength));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.relationshipStrength);
  }
}
function AccountDetailComponent_Conditional_1_Conditional_26_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "No contacts recorded for this account.");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, AccountDetailComponent_Conditional_1_Conditional_26_For_2_Template, 12, 12, "a", 25, _forTrack0, false, AccountDetailComponent_Conditional_1_Conditional_26_ForEmpty_3_Template, 2, 0, "p", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.contacts());
  }
}
function AccountDetailComponent_Conditional_1_Conditional_27_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c3, p_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.stageBadge(p_r5.stage));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5.stage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(8, 7, p_r5.value, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.targetClose);
  }
}
function AccountDetailComponent_Conditional_1_Conditional_27_ForEmpty_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2, "No projects for this account.");
    \u0275\u0275elementEnd()();
  }
}
function AccountDetailComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 31)(2, "table", 32)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 33);
    \u0275\u0275text(10, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Target close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, AccountDetailComponent_Conditional_1_Conditional_27_For_15_Template, 11, 12, "tr", 34, _forTrack0, false, AccountDetailComponent_Conditional_1_Conditional_27_ForEmpty_16_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.projects());
  }
}
function AccountDetailComponent_Conditional_1_Conditional_28_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 35);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c4, q_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r6.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r6.accountName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 6, q_r6.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r6.createdAt);
  }
}
function AccountDetailComponent_Conditional_1_Conditional_28_ForEmpty_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "No matching quotes.");
    \u0275\u0275elementEnd()();
  }
}
function AccountDetailComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 31)(2, "table", 32)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 33);
    \u0275\u0275text(12, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Created");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, AccountDetailComponent_Conditional_1_Conditional_28_For_17_Template, 13, 11, "tr", 34, _forTrack0, false, AccountDetailComponent_Conditional_1_Conditional_28_ForEmpty_18_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.quotes());
  }
}
function AccountDetailComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 39);
    \u0275\u0275text(2, "Backlog vs YTD revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "span", 41);
    \u0275\u0275text(5, "Backlog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42);
    \u0275\u0275element(7, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 44);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 40)(12, "span", 41);
    \u0275\u0275text(13, "YTD revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 42);
    \u0275\u0275element(15, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 44);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 46);
    \u0275\u0275text(20, "Margin detail is role-gated and hidden in this view.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("width", ctx_r1.backlogPct(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 6, a_r3.backlogValue, "1.0-0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.ytdPct(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(18, 9, a_r3.ytdRevenue, "1.0-0"), "");
  }
}
function AccountDetailComponent_Conditional_1_Conditional_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1, "Single-thread risk is active for this account.");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_1_Conditional_30_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, "Multiple active threads \u2014 continuity risk is low.");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AccountDetailComponent_Conditional_1_Conditional_30_Conditional_7_Template, 2, 0, "div", 49)(8, AccountDetailComponent_Conditional_1_Conditional_30_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.healthScore);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.healthBadge(a_r3.connectionLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.connectionLevel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.healthWhy);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, a_r3.singleThreadRisk ? 7 : 8);
  }
}
function AccountDetailComponent_Conditional_1_Conditional_31_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function AccountDetailComponent_Conditional_1_Conditional_31_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, AccountDetailComponent_Conditional_1_Conditional_31_For_5_Conditional_5_Template, 2, 0, "span", 56);
  }
  if (rf & 2) {
    const part_r7 = ctx.$implicit;
    const i_r8 = ctx.$index;
    const \u0275i_285_r9 = ctx.$index;
    const \u0275$count_285_r10 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, !(\u0275i_285_r9 === \u0275$count_285_r10 - 1) ? 5 : -1);
  }
}
function AccountDetailComponent_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h2", 39);
    \u0275\u0275text(2, "Channel chain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51);
    \u0275\u0275repeaterCreate(4, AccountDetailComponent_Conditional_1_Conditional_31_For_5_Template, 6, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 52);
    \u0275\u0275text(7, "You sell and support through this channel \u2014 visibility flows through the distributor to the end customer.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.channelParts());
  }
}
function AccountDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 2);
    \u0275\u0275text(2, "\u2190 Accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "h1", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(16, AccountDetailComponent_Conditional_1_Conditional_16_Template, 4, 0, "div", 11);
    \u0275\u0275elementStart(17, "div", 12)(18, "span", 13);
    \u0275\u0275text(19, "Why this score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275repeaterCreate(23, AccountDetailComponent_Conditional_1_For_24_Template, 2, 8, "button", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AccountDetailComponent_Conditional_1_Conditional_25_Template, 23, 10, "div", 16)(26, AccountDetailComponent_Conditional_1_Conditional_26_Template, 4, 1, "div", 17)(27, AccountDetailComponent_Conditional_1_Conditional_27_Template, 17, 1, "div", 18)(28, AccountDetailComponent_Conditional_1_Conditional_28_Template, 19, 1, "div", 18)(29, AccountDetailComponent_Conditional_1_Conditional_29_Template, 21, 12, "div", 19)(30, AccountDetailComponent_Conditional_1_Conditional_30_Template, 9, 6, "div", 20)(31, AccountDetailComponent_Conditional_1_Conditional_31_Template, 8, 0, "div", 19);
  }
  if (rf & 2) {
    const a_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", a_r3.logoColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r3.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.healthBadge(a_r3.connectionLevel));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r3.connectionLevel, " \xB7 ", a_r3.healthScore, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.channel);
    \u0275\u0275advance();
    \u0275\u0275conditional(16, a_r3.singleThreadRisk ? 16 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r3.healthWhy);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(25, ctx_r1.activeTab() === "overview" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(26, ctx_r1.activeTab() === "contacts" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(27, ctx_r1.activeTab() === "projects" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(28, ctx_r1.activeTab() === "quotes" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(29, ctx_r1.activeTab() === "revenue" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(30, ctx_r1.activeTab() === "health" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(31, ctx_r1.activeTab() === "channel" ? 31 : -1);
  }
}
function AccountDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1", 6);
    \u0275\u0275text(2, "Account not found");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 49);
    \u0275\u0275text(4, "We couldn't find that account. ");
    \u0275\u0275elementStart(5, "a", 57);
    \u0275\u0275text(6, "Back to accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ".");
    \u0275\u0275elementEnd();
  }
}
var AccountDetailComponent = class _AccountDetailComponent {
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
  strengthBadge(strength) {
    switch (strength) {
      case "strong":
        return "badge-success";
      case "developing":
        return "badge-warning";
      case "new":
        return "badge-info";
      default:
        return "badge-neutral";
    }
  }
  stageBadge(stage) {
    switch (stage) {
      case "awarded":
        return "badge-success";
      case "closed":
        return "badge-neutral";
      case "negotiation":
        return "badge-info";
      case "submitted":
        return "badge-warning";
      default:
        return "badge-neutral";
    }
  }
  setTab(tab) {
    this.router.navigate([], { queryParams: { tab }, queryParamsHandling: "merge" });
  }
  constructor(seed, route, router) {
    this.seed = seed;
    this.route = route;
    this.router = router;
    this.tabs = ["overview", "contacts", "projects", "quotes", "revenue", "health", "channel"];
    this.activeTab = signal("overview");
    this.account = computed(() => this.seed.accountById(this.id));
    this.contacts = computed(() => this.seed.contactsForAccount(this.id));
    this.projects = computed(() => this.seed.projectsForAccount(this.id));
    this.quotes = computed(() => {
      const acc = this.account();
      if (!acc)
        return [];
      const token = acc.name.split(/[\s—-]+/)[0].toLowerCase();
      return this.seed.quotes().filter((q) => q.accountName.toLowerCase().includes(token));
    });
    this.revenueMax = computed(() => {
      const a = this.account();
      return Math.max(1, a?.backlogValue ?? 0, a?.ytdRevenue ?? 0);
    });
    this.backlogPct = computed(() => Math.round((this.account()?.backlogValue ?? 0) / this.revenueMax() * 100));
    this.ytdPct = computed(() => Math.round((this.account()?.ytdRevenue ?? 0) / this.revenueMax() * 100));
    this.channelParts = computed(() => {
      const raw = this.account()?.channel ?? "";
      return raw.split("\u2192").map((p) => p.trim()).filter((p) => !!p);
    });
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    const t = this.route.snapshot.queryParamMap.get("tab");
    this.activeTab.set(t && this.tabs.includes(t) ? t : "overview");
    this.route.queryParamMap.subscribe((q) => {
      const tab = q.get("tab");
      this.activeTab.set(tab && this.tabs.includes(tab) ? tab : "overview");
    });
  }
  static {
    this.\u0275fac = function AccountDetailComponent_Factory(t) {
      return new (t || _AccountDetailComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountDetailComponent, selectors: [["app-account-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "page"], [1, "page-header"], ["routerLink", "/accounts", 1, "btn", "btn-ghost", "btn-sm", "back"], [1, "acct-header"], [1, "avatar-lg"], [1, "acct-head-body"], [1, "page-title"], [1, "head-meta"], [1, "badge", "badge-neutral"], [1, "badge"], [1, "muted", "mono"], [1, "alert", "alert-warning", "single-thread"], [1, "callout", "card", "card-pad"], [1, "callout-label"], [1, "tabs"], ["queryParamsHandling", "merge", 1, "tab", 3, "active", "routerLink", "queryParams"], [1, "grid", "stat-grid"], [1, "row"], [1, "card"], [1, "card", "card-pad"], [1, "card", "card-pad", "health-card"], ["queryParamsHandling", "merge", 1, "tab", 3, "routerLink", "queryParams"], [1, "card", "card-pad", "stat"], [1, "stat-label"], [1, "stat-value"], [1, "card", "card-pad", "contact-card", 3, "routerLink"], [1, "muted"], [1, "contact-top"], [1, "avatar"], [1, "acct-name"], ["title", "Champion", 1, "champion"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "clickable", 3, "routerLink"], [1, "right", "mono"], [1, "mono"], ["colspan", "4", 1, "muted"], ["colspan", "5", 1, "muted"], [1, "panel-title"], [1, "rev-row"], [1, "rev-label"], [1, "bar-track"], [1, "bar-fill", "backlog"], [1, "mono", "rev-val"], [1, "bar-fill", "ytd"], [1, "alert", "alert-info", "rev-note"], [1, "health-score"], [1, "health-why"], [1, "alert", "alert-warning"], [1, "alert", "alert-info"], [1, "stepper"], [1, "alert", "alert-info", "channel-note"], [1, "step"], [1, "step-dot"], [1, "step-label"], [1, "step-arrow"], ["routerLink", "/accounts"]], template: function AccountDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AccountDetailComponent_Conditional_1_Template, 32, 19)(2, AccountDetailComponent_Conditional_2_Template, 8, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance();
        \u0275\u0275conditional(1, (tmp_0_0 = ctx.account()) ? 1 : 2, tmp_0_0);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink], styles: ["\n\n.back[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: var(--sp-3);\n}\n.acct-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n}\n.avatar-lg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  color: #fff;\n  font-weight: 700;\n  font-size: var(--fs-lg);\n  flex-shrink: 0;\n}\n.head-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  flex-wrap: wrap;\n  margin-top: 6px;\n}\n.single-thread[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.callout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: var(--sp-5);\n  border-left: 3px solid var(--color-brand-500);\n}\n.callout-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  font-weight: 700;\n  color: var(--color-brand-600);\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  font-weight: 700;\n  color: var(--color-brand-700);\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.acct-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.contact-card[_ngcontent-%COMP%] {\n  min-width: 280px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n  text-decoration: none;\n  color: var(--color-text);\n  align-items: flex-start;\n}\n.contact-card[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: var(--shadow);\n}\n.contact-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n}\n.champion[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.rev-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 110px 1fr auto;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-bottom: var(--sp-3);\n}\n.rev-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.rev-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 14px;\n  background: var(--color-surface-2);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n}\n.bar-fill.backlog[_ngcontent-%COMP%] {\n  background: var(--color-brand-600);\n}\n.bar-fill.ytd[_ngcontent-%COMP%] {\n  background: var(--chart-2);\n}\n.rev-note[_ngcontent-%COMP%], .channel-note[_ngcontent-%COMP%] {\n  margin-top: var(--sp-4);\n}\n.health-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--sp-3);\n}\n.health-score[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 800;\n  color: var(--color-brand-700);\n  line-height: 1;\n}\n.health-why[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-muted);\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  flex-wrap: wrap;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  padding: 10px 16px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  background: var(--color-surface-2);\n}\n.step-dot[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 999px;\n  background: var(--color-brand-600);\n  color: #fff;\n  font-weight: 700;\n  font-size: var(--fs-xs);\n}\n.step-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.step-arrow[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n  font-size: var(--fs-lg);\n}\n/*# sourceMappingURL=account-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountDetailComponent, { className: "AccountDetailComponent", filePath: "src/app/features/accounts/account-detail.component.ts", lineNumber: 13 });
})();
export {
  AccountDetailComponent
};
//# sourceMappingURL=account-detail.component-TMNAS4HP.js.map
