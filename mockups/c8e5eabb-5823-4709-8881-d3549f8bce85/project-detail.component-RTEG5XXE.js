import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
  Router,
  RouterLink,
  TitleCasePipe,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-A62IECG2.js";

// src/app/features/projects/project-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.name;
var _forTrack3 = ($index, $item) => $item.title;
var _c0 = (a0) => ["/accounts", a0];
var _c1 = (a0) => ["/quotes", a0];
var _c2 = (a0) => ["/orders", a0];
function ProjectDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
    \u0275\u0275text(2, "Project not found");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 3)(4, "span");
    \u0275\u0275text(5, "No project matches this id.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 4)(7, "a", 5);
    \u0275\u0275text(8, "\u2190 Back to projects");
    \u0275\u0275elementEnd()();
  }
}
function ProjectDetailComponent_Conditional_2_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("step-current", s_r1 === ctx_r2.project.stage)("step-done", ctx_r2.stageIndex(s_r1) < ctx_r2.stageIndex(ctx_r2.project.stage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, s_r1));
  }
}
function ProjectDetailComponent_Conditional_2_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_2_For_18_Template_button_click_0_listener() {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectTab(t_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === t_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, t_r5));
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 16)(2, "div", 22);
    \u0275\u0275text(3, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "div", 22);
    \u0275\u0275text(9, "Margin (internal)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 16)(13, "div", 22);
    \u0275\u0275text(14, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 16)(18, "h3");
    \u0275\u0275text(19, "Scope");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 24);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 25);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(6, 5, ctx_r2.project.value, "1.0-0"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.project.margin, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.project.documents);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.project.scope);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.weightedNote);
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_20_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 31);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 32);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const li_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(li_r6.partNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(li_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(li_r6.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(9, 7, li_r6.unitPrice, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.lineBadge(li_r6.validationStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, li_r6.validationStatus));
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 26)(2, "p", 6);
    \u0275\u0275text(3, "Representative line items (illustrative across quotes).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 27)(5, "table", 28)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Part #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 29);
    \u0275\u0275text(13, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 29);
    \u0275\u0275text(15, "Unit price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Validation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, ProjectDetailComponent_Conditional_2_Conditional_20_For_20_Template, 14, 12, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.lineItems());
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_21_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 33)(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 31);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 34);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c1, q_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r7.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r7.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.quoteBadge(q_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, q_r7.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(11, 10, q_r7.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r7.createdAt);
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_21_ForEmpty_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "No quotes linked to this project.");
    \u0275\u0275elementEnd()();
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 27)(2, "table", 28)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Quote #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 29);
    \u0275\u0275text(12, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Created");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, ProjectDetailComponent_Conditional_2_Conditional_21_For_17_Template, 14, 15, "tr", 33, _forTrack0, false, ProjectDetailComponent_Conditional_2_Conditional_21_ForEmpty_18_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.projectQuotes());
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_22_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 33)(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 31);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c2, o_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r8.poNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r8.accountName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 7, o_r8.amount, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.orderBadge(o_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, o_r8.status));
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_22_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, "No matching purchase orders.");
    \u0275\u0275elementEnd()();
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 26)(2, "p", 6);
    \u0275\u0275text(3, "Purchase orders (illustrative \u2014 matched by account).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 27)(5, "table", 28)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "PO #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 29);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, ProjectDetailComponent_Conditional_2_Conditional_22_For_18_Template, 12, 14, "tr", 33, _forTrack0, false, ProjectDetailComponent_Conditional_2_Conditional_22_ForEmpty_19_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.projectOrders());
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_23_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 41);
    \u0275\u0275element(1, "span", 42);
    \u0275\u0275elementStart(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    \u0275\u0275classProp("timeline-done", m_r9.done);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r9.date);
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span");
    \u0275\u0275text(2, "Watch for slippage: scheduled ship dates can move past requested delivery. Review linked orders for firm commits.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 16)(4, "h3");
    \u0275\u0275text(5, "Delivery milestones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 38);
    \u0275\u0275repeaterCreate(7, ProjectDetailComponent_Conditional_2_Conditional_23_For_8_Template, 6, 4, "li", 39, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 4)(10, "a", 40);
    \u0275\u0275text(11, "View orders");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.milestones);
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_24_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r10.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.date);
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " documents on file.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45)(6, "table", 28)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, ProjectDetailComponent_Conditional_2_Conditional_24_For_17_Template, 8, 3, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "p", 25);
    \u0275\u0275text(19, "Showing recent items; full library in ");
    \u0275\u0275elementStart(20, "a", 46);
    \u0275\u0275text(21, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, ".");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.project.documents);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.projectDocs);
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_25_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div")(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 49);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_2_Conditional_25_For_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.snooze());
    });
    \u0275\u0275text(8, "Snooze");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Due ", r_r12.due, "");
  }
}
function ProjectDetailComponent_Conditional_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3");
    \u0275\u0275text(2, "Reminders");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ProjectDetailComponent_Conditional_2_Conditional_25_For_4_Template, 9, 2, "div", 48, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.reminders);
  }
}
function ProjectDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 6)(2, "a", 7);
    \u0275\u0275text(3, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " /");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 2);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 8);
    \u0275\u0275text(8, " Account: ");
    \u0275\u0275elementStart(9, "a", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
    \u0275\u0275repeaterCreate(14, ProjectDetailComponent_Conditional_2_For_15_Template, 6, 8, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275repeaterCreate(17, ProjectDetailComponent_Conditional_2_For_18_Template, 3, 5, "button", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ProjectDetailComponent_Conditional_2_Conditional_19_Template, 24, 8)(20, ProjectDetailComponent_Conditional_2_Conditional_20_Template, 21, 0, "div", 15)(21, ProjectDetailComponent_Conditional_2_Conditional_21_Template, 19, 1, "div", 15)(22, ProjectDetailComponent_Conditional_2_Conditional_22_Template, 20, 1, "div", 15)(23, ProjectDetailComponent_Conditional_2_Conditional_23_Template, 12, 0)(24, ProjectDetailComponent_Conditional_2_Conditional_24_Template, 23, 1, "div", 16)(25, ProjectDetailComponent_Conditional_2_Conditional_25_Template, 5, 0, "div", 16);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.project.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, ctx_r2.project.accountId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r2.seed.accountById(ctx_r2.project.accountId)) == null ? null : tmp_3_0.name) || ctx_r2.project.accountId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Owner: ", ctx_r2.project.ownerName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.stageOrder);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(19, ctx_r2.activeTab() === "scope" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(20, ctx_r2.activeTab() === "lineitems" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(21, ctx_r2.activeTab() === "quotes" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(22, ctx_r2.activeTab() === "pos" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(23, ctx_r2.activeTab() === "delivery" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(24, ctx_r2.activeTab() === "documents" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(25, ctx_r2.activeTab() === "reminders" ? 25 : -1);
  }
}
var ProjectDetailComponent = class _ProjectDetailComponent {
  constructor(seed, route, router) {
    this.seed = seed;
    this.route = route;
    this.router = router;
    this.stageOrder = ["quoting", "submitted", "negotiation", "awarded", "closed"];
    this.tabs = ["scope", "lineitems", "quotes", "pos", "delivery", "documents", "reminders"];
    this.activeTab = signal("scope");
    this.milestones = [
      { label: "Submittal package approved", date: "2026-06-20", done: true },
      { label: "Release to manufacturing", date: "2026-07-15", done: true },
      { label: "Factory acceptance test", date: "2026-08-28", done: false },
      { label: "Ship to site", date: "2026-09-18", done: false },
      { label: "On-site commissioning", date: "2026-10-05", done: false }
    ];
    this.projectDocs = [
      { name: "One-line diagram rev C", type: "Drawing", date: "2026-06-12" },
      { name: "Submittal package rev 3", type: "Spec", date: "2026-06-28" },
      { name: "Signed PO scan", type: "PO", date: "2026-07-01" }
    ];
    this.reminders = [
      { title: "Follow up on FAT scheduling window", due: "2026-08-01" },
      { title: "Confirm site readiness with GC", due: "2026-09-01" }
    ];
    this.weightedNote = "Margin is role-gated / internal.";
    this.id = this.route.snapshot.paramMap.get("id");
    this.project = this.id ? this.seed.projectById(this.id) : void 0;
    const tab = this.route.snapshot.queryParamMap.get("tab");
    if (tab && this.tabs.includes(tab))
      this.activeTab.set(tab);
  }
  selectTab(tab) {
    this.activeTab.set(tab);
    this.router.navigate([], { queryParams: { tab }, queryParamsHandling: "merge" });
  }
  projectQuotes() {
    return this.project ? this.seed.quotes().filter((q) => q.projectId === this.project.id) : [];
  }
  // First word of the account name, used to loosely match illustrative orders.
  accountFirstWord() {
    const name = this.project ? this.seed.accountById(this.project.accountId)?.name ?? "" : "";
    return name.split(/[\s—-]+/)[0]?.toLowerCase() ?? "";
  }
  projectOrders() {
    const word = this.accountFirstWord();
    if (!word)
      return [];
    return this.seed.orders().filter((o) => o.accountName.toLowerCase().includes(word));
  }
  lineItems() {
    return this.seed.lineItems();
  }
  lineBadge(status) {
    switch (status) {
      case "ok":
        return "badge-success";
      case "warning":
        return "badge-warning";
      case "error":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  quoteBadge(status) {
    switch (status) {
      case "draft":
        return "badge-neutral";
      case "submitted":
        return "badge-info";
      case "won":
        return "badge-success";
      case "lost":
        return "badge-danger";
      default:
        return "badge-neutral";
    }
  }
  orderBadge(status) {
    switch (status) {
      case "confirmed":
        return "badge-info";
      case "in-production":
        return "badge-warning";
      case "shipped":
        return "badge-success";
      case "delivered":
        return "badge-success";
      default:
        return "badge-neutral";
    }
  }
  stageIndex(stage) {
    return this.stageOrder.indexOf(stage);
  }
  snooze() {
  }
  static {
    this.\u0275fac = function ProjectDetailComponent_Factory(t) {
      return new (t || _ProjectDetailComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailComponent, selectors: [["app-project-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "alert", "alert-warning"], [2, "margin-top", "var(--sp-4)"], ["routerLink", "/projects", 1, "btn", "btn-sm"], [1, "muted"], ["routerLink", "/projects"], [1, "page-sub"], [3, "routerLink"], [1, "card", "card-pad", "stepper-card"], [1, "stepper"], [1, "step", 3, "step-current", "step-done"], [1, "tabs"], [1, "tab", 3, "active"], [1, "card"], [1, "card", "card-pad"], [1, "step"], [1, "step-dot"], [1, "step-label"], [1, "tab", 3, "click"], [1, "grid", "stat-grid", 2, "margin-bottom", "var(--sp-5)"], [1, "muted", "stat-label"], [1, "stat-value"], [2, "margin-top", "var(--sp-2)"], [1, "muted", 2, "margin-top", "var(--sp-3)"], [1, "card-pad"], [1, "table-wrap"], [1, "table"], [1, "right"], [1, "mono"], [1, "right", "mono"], [1, "badge"], [1, "clickable", 3, "routerLink"], [1, "nowrap"], ["colspan", "5", 1, "muted"], ["colspan", "4", 1, "muted"], [1, "alert", "alert-warning", 2, "margin-bottom", "var(--sp-4)"], [1, "timeline"], [1, "timeline-item", 3, "timeline-done"], ["routerLink", "/orders", 1, "btn", "btn-sm"], [1, "timeline-item"], [1, "timeline-dot"], [1, "timeline-label"], [1, "muted", "nowrap"], [1, "table-wrap", 2, "margin-top", "var(--sp-3)"], ["routerLink", "/documents"], [1, "badge", "badge-neutral"], [1, "row", "reminder-row"], [1, "btn", "btn-sm", "btn-ghost", 3, "click"]], template: function ProjectDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ProjectDetailComponent_Conditional_1_Template, 9, 0)(2, ProjectDetailComponent_Conditional_2_Template, 26, 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, !ctx.project ? 1 : 2);
      }
    }, dependencies: [CommonModule, DecimalPipe, TitleCasePipe, RouterLink], styles: ["\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 600;\n  margin-top: var(--sp-1);\n}\ntr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.stepper-card[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-5);\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-2);\n  overflow-x: auto;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--sp-2);\n  flex: 1 1 0;\n  min-width: 90px;\n  position: relative;\n}\n.step-dot[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-surface-2);\n  border: 2px solid var(--color-border-strong);\n  color: var(--color-text-muted);\n  font-weight: 700;\n  font-size: var(--fs-sm);\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.step-done[_ngcontent-%COMP%]   .step-dot[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  border-color: var(--color-success);\n  color: var(--color-success);\n}\n.step-current[_ngcontent-%COMP%]   .step-dot[_ngcontent-%COMP%] {\n  background: var(--color-brand-600);\n  border-color: var(--color-brand-600);\n  color: var(--color-text-invert);\n}\n.step-current[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: var(--color-brand-600);\n  font-weight: 700;\n}\n.timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: var(--sp-3) 0 0;\n  padding: 0;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: var(--sp-2) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.timeline-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.timeline-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 999px;\n  border: 2px solid var(--color-border-strong);\n  background: var(--color-surface);\n  flex: 0 0 auto;\n}\n.timeline-done[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  border-color: var(--color-success);\n}\n.reminder-row[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--sp-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n/*# sourceMappingURL=project-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailComponent, { className: "ProjectDetailComponent", filePath: "src/app/features/projects/project-detail.component.ts", lineNumber: 18 });
})();
export {
  ProjectDetailComponent
};
//# sourceMappingURL=project-detail.component-RTEG5XXE.js.map
