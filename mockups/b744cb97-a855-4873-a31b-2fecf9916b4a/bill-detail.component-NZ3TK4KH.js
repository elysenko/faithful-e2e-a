import {
  AuthService
} from "./chunk-PNFJAIEQ.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-FGE4ALCS.js";
import {
  ActivatedRoute,
  CommonModule,
  Router,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UQ66P35U.js";

// src/app/pages/bill-detail/bill-detail.component.ts
var _forTrack0 = ($index, $item) => $item.legislatorId;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.entity;
var _c0 = (a0) => ["/bills", a0, "edit"];
var _c1 = (a0) => ["/legislators", a0];
function BillDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Loading bill\u2026");
    \u0275\u0275elementEnd();
  }
}
function BillDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2);
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "a", 30);
    \u0275\u0275text(2, "Edit bill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_18_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openModal("add-sponsor"));
    });
    \u0275\u0275text(4, "Add sponsor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openModal("set-votes"));
    });
    \u0275\u0275text(6, "Set votes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, b_r4.id));
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0 ", ctx_r0.conflictCount(), " flagged");
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "No conflicts");
    \u0275\u0275elementEnd();
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_For_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Primary");
    \u0275\u0275elementEnd();
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_For_29_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Conflict");
    \u0275\u0275elementEnd();
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_For_29_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "matches bill sector");
    \u0275\u0275elementEnd();
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_For_29_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BillDetailComponent_Conditional_2_Conditional_0_For_29_For_8_Conditional_4_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    \u0275\u0275classProp("hit", i_r5.isConflict);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r5.entity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", i_r5.sector, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(4, i_r5.isConflict ? 4 : -1);
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "a", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BillDetailComponent_Conditional_2_Conditional_0_For_29_Conditional_4_Template, 2, 0, "span", 36)(5, BillDetailComponent_Conditional_2_Conditional_0_For_29_Conditional_5_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 37);
    \u0275\u0275repeaterCreate(7, BillDetailComponent_Conditional_2_Conditional_0_For_29_For_8_Template, 5, 5, "li", 38, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275classProp("is-conflict", row_r6.isConflict);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, row_r6.legislatorId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.legislatorName);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, row_r6.isPrimary ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, row_r6.isConflict ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(row_r6.interests);
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openModal("add-sponsor"));
    });
    \u0275\u0275text(1, "\uFF0B Add");
    \u0275\u0275elementEnd();
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_For_38_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Primary");
    \u0275\u0275elementEnd();
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23)(1, "a", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BillDetailComponent_Conditional_2_Conditional_0_For_38_Conditional_5_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, s_r8.legislatorId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r8.legislator == null ? null : s_r8.legislator.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", s_r8.legislator == null ? null : s_r8.legislator.party, " \xB7 ", s_r8.legislator == null ? null : s_r8.legislator.district, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(5, s_r8.isPrimary ? 5 : -1);
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openModal("set-votes"));
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, v_r10.legislatorId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r10.legislator == null ? null : v_r10.legislator.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r10.legislator == null ? null : v_r10.legislator.chamber);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("vote-" + v_r10.choice);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r10.choice);
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_63_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_63_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Add sponsor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "label", 46);
    \u0275\u0275text(6, "Legislator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 47)(8, "option");
    \u0275\u0275text(9, "Sen. Grace Tillman");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option");
    \u0275\u0275text(11, "Rep. Owen Barnett");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "label", 48);
    \u0275\u0275element(13, "input", 49);
    \u0275\u0275text(14, " Primary sponsor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 50)(16, "button", 51);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_63_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(17, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 52);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_63_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(19, "Add sponsor");
    \u0275\u0275elementEnd()()()();
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_Conditional_64_For_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275property("value", c_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r13);
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_Conditional_64_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 55);
    \u0275\u0275repeaterCreate(4, BillDetailComponent_Conditional_2_Conditional_0_Conditional_64_For_6_For_5_Template, 2, 2, "option", 55, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r14.legislator == null ? null : v_r14.legislator.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", v_r14.choice);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.choices);
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_64_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_64_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Set roll-call votes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53);
    \u0275\u0275repeaterCreate(5, BillDetailComponent_Conditional_2_Conditional_0_Conditional_64_For_6_Template, 6, 2, "div", 54, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 50)(8, "button", 51);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_64_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(9, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 52);
    \u0275\u0275listener("click", function BillDetailComponent_Conditional_2_Conditional_0_Conditional_64_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(11, "Save votes");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.votes());
  }
}
function BillDetailComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1, "\u2190 All bills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h1");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 9);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10);
    \u0275\u0275repeaterCreate(16, BillDetailComponent_Conditional_2_Conditional_0_For_17_Template, 2, 1, "span", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, BillDetailComponent_Conditional_2_Conditional_0_Conditional_18_Template, 7, 3, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "section", 13)(20, "div", 14)(21, "h2");
    \u0275\u0275text(22, "Who profits?");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, BillDetailComponent_Conditional_2_Conditional_0_Conditional_23_Template, 2, 1, "span", 15)(24, BillDetailComponent_Conditional_2_Conditional_0_Conditional_24_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 16);
    \u0275\u0275text(26, "Sponsors whose disclosed interests overlap this bill's sectors.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 17);
    \u0275\u0275repeaterCreate(28, BillDetailComponent_Conditional_2_Conditional_0_For_29_Template, 9, 8, "div", 18, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 19)(31, "section", 20)(32, "div", 14)(33, "h2");
    \u0275\u0275text(34, "Sponsors");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, BillDetailComponent_Conditional_2_Conditional_0_Conditional_35_Template, 2, 0, "button", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ul", 22);
    \u0275\u0275repeaterCreate(37, BillDetailComponent_Conditional_2_Conditional_0_For_38_Template, 6, 7, "li", 23, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "section", 20)(40, "div", 14)(41, "h2");
    \u0275\u0275text(42, "Roll call");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, BillDetailComponent_Conditional_2_Conditional_0_Conditional_43_Template, 2, 0, "button", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 24)(45, "span", 25);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 26);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 27);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "table", 28)(52, "thead")(53, "tr")(54, "th");
    \u0275\u0275text(55, "Legislator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th");
    \u0275\u0275text(57, "Chamber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "Vote");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "tbody");
    \u0275\u0275repeaterCreate(61, BillDetailComponent_Conditional_2_Conditional_0_For_62_Template, 9, 8, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(63, BillDetailComponent_Conditional_2_Conditional_0_Conditional_63_Template, 20, 0, "div", 29)(64, BillDetailComponent_Conditional_2_Conditional_0_Conditional_64_Template, 12, 0, "div", 29);
  }
  if (rf & 2) {
    const b_r4 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(b_r4.number);
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + b_r4.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Session ", b_r4.session, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.summary);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(b_r4.sectors);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(18, ctx_r0.isEditor() ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(23, ctx_r0.conflictCount() > 0 ? 23 : 24);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.whoProfits());
    \u0275\u0275advance(7);
    \u0275\u0275conditional(35, ctx_r0.isEditor() ? 35 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.sponsors());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(43, ctx_r0.isEditor() ? 43 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.tally().yea, " yea");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.tally().nay, " nay");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.tally().absent, " absent");
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r0.votes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(63, ctx_r0.modal() === "add-sponsor" ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(64, ctx_r0.modal() === "set-votes" ? 64 : -1);
  }
}
function BillDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BillDetailComponent_Conditional_2_Conditional_0_Template, 65, 16);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.bill()) ? 0 : -1, tmp_1_0);
  }
}
function BillDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Bill not found. ");
    \u0275\u0275elementStart(2, "a", 56);
    \u0275\u0275text(3, "Back to bills");
    \u0275\u0275elementEnd()();
  }
}
var BillDetailComponent = class _BillDetailComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.isEditor = this.auth.isEditor;
    this.choices = ["yea", "nay", "absent"];
    this.billId = signal("");
    this.modal = signal("");
    this.loading = signal(false);
    this.error = signal("");
    this.bills = signal([
      {
        id: "b1",
        number: "HB0042",
        title: "Renewable Energy Tax Incentives",
        summary: "Establishes refundable tax credits for solar and wind installations across Utah counties, with a five-year sunset review and reporting requirements for utility-scale projects.",
        status: "committee",
        session: 2025,
        sectors: ["energy", "environment"]
      }
    ]);
    this.sponsors = signal([
      {
        id: "s1",
        billId: "b1",
        legislatorId: "l1",
        isPrimary: true,
        legislator: { id: "l1", name: "Sen. Marcia Holloway", chamber: "senate", district: "S-12", party: "Republican" }
      },
      {
        id: "s2",
        billId: "b1",
        legislatorId: "l2",
        isPrimary: false,
        legislator: { id: "l2", name: "Rep. David Cho", chamber: "house", district: "H-40", party: "Democrat" }
      },
      {
        id: "s3",
        billId: "b1",
        legislatorId: "l3",
        isPrimary: false,
        legislator: { id: "l3", name: "Rep. Ana Whitfield", chamber: "house", district: "H-08", party: "Republican" }
      }
    ]);
    this.votes = signal([
      { id: "v1", billId: "b1", legislatorId: "l1", choice: "yea", legislator: { id: "l1", name: "Sen. Marcia Holloway", chamber: "senate", district: "S-12", party: "Republican" } },
      { id: "v2", billId: "b1", legislatorId: "l2", choice: "yea", legislator: { id: "l2", name: "Rep. David Cho", chamber: "house", district: "H-40", party: "Democrat" } },
      { id: "v3", billId: "b1", legislatorId: "l3", choice: "nay", legislator: { id: "l3", name: "Rep. Ana Whitfield", chamber: "house", district: "H-08", party: "Republican" } },
      { id: "v4", billId: "b1", legislatorId: "l4", choice: "absent", legislator: { id: "l4", name: "Sen. Grace Tillman", chamber: "senate", district: "S-03", party: "Democrat" } }
    ]);
    this.whoProfits = signal([
      {
        legislatorId: "l1",
        legislatorName: "Sen. Marcia Holloway",
        isPrimary: true,
        isConflict: true,
        interests: [
          { entity: "Wasatch Solar Holdings", sector: "energy", isConflict: true },
          { entity: "Holloway Family Trust", sector: "real-estate", isConflict: false }
        ]
      },
      {
        legislatorId: "l2",
        legislatorName: "Rep. David Cho",
        isPrimary: false,
        isConflict: true,
        interests: [{ entity: "GreenGrid Consulting", sector: "energy", isConflict: true }]
      },
      {
        legislatorId: "l3",
        legislatorName: "Rep. Ana Whitfield",
        isPrimary: false,
        isConflict: false,
        interests: [{ entity: "Whitfield Law LLC", sector: "legal", isConflict: false }]
      }
    ]);
    this.bill = computed(() => {
      const id = this.billId();
      const list = this.bills();
      return list.find((b) => b.id === id) ?? list[0];
    });
    this.tally = computed(() => {
      const t = { yea: 0, nay: 0, absent: 0 };
      this.votes().forEach((v) => t[v.choice] += 1);
      return t;
    });
    this.conflictCount = computed(() => this.whoProfits().filter((r) => r.isConflict).length);
  }
  ngOnInit() {
    this.billId.set(this.route.snapshot.paramMap.get("id") ?? "");
    this.modal.set(this.route.snapshot.queryParamMap.get("modal") ?? "");
  }
  openModal(name) {
    this.modal.set(name);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: name },
      queryParamsHandling: "merge"
    });
  }
  closeModal() {
    this.modal.set("");
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { modal: null },
      queryParamsHandling: "merge"
    });
  }
  static {
    this.\u0275fac = function BillDetailComponent_Factory(t) {
      return new (t || _BillDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillDetailComponent, selectors: [["app-bill-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "state", "muted"], [1, "state", "error"], ["routerLink", "/bills", 1, "back-link"], [1, "detail-head", "card"], [1, "detail-head-main"], [1, "detail-top"], [1, "bill-number"], [1, "badge", "status-badge"], [1, "muted"], [1, "summary"], [1, "sectors"], [1, "sector-tag"], [1, "detail-actions"], [1, "card", "panel", "who-profits"], [1, "panel-head"], [1, "badge", "badge-conflict"], [1, "muted", "panel-sub"], [1, "wp-list"], [1, "wp-row", 3, "is-conflict"], [1, "two-col"], [1, "card", "panel"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm"], [1, "sponsor-list"], [1, "sponsor-row"], [1, "tally"], [1, "tally-item", "yea"], [1, "tally-item", "nay"], [1, "tally-item", "absent"], [1, "vote-table"], [1, "modal-scrim"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "badge", "badge-ok"], [1, "wp-row"], [1, "wp-name"], [3, "routerLink"], [1, "badge", "badge-primary"], [1, "wp-interests"], [3, "hit"], [1, "hit-flag"], ["type", "button", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "sponsor-meta", "muted"], [1, "badge", "vote-badge"], [1, "modal-scrim", 3, "click"], [1, "modal", "card", 3, "click"], [1, "field"], ["for", "leg"], ["id", "leg"], [1, "check"], ["type", "checkbox"], [1, "modal-foot"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "vote-editor"], [1, "vote-edit-row"], [3, "value"], ["routerLink", "/bills"]], template: function BillDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BillDetailComponent_Conditional_0_Template, 2, 0, "p", 0)(1, BillDetailComponent_Conditional_1_Template, 2, 1)(2, BillDetailComponent_Conditional_2_Template, 1, 1)(3, BillDetailComponent_Conditional_3_Template, 4, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.loading() ? 0 : ctx.error() ? 1 : ctx.bill() ? 2 : 3);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, RouterLink], styles: ["\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--space-3);\n  font-size: var(--fs-sm);\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  text-align: center;\n}\n.detail-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-5);\n  margin-bottom: var(--space-4);\n}\n.detail-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n  font-size: var(--fs-sm);\n}\n.detail-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0;\n  font-size: var(--fs-xl);\n  line-height: 1.2;\n}\n.summary[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-3);\n  color: var(--color-ink-soft);\n  max-width: 60ch;\n}\n.bill-number[_ngcontent-%COMP%] {\n  font-family: var(--font-mono);\n  font-weight: 700;\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  flex-shrink: 0;\n}\n.sectors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-1);\n}\n.sector-tag[_ngcontent-%COMP%] {\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-size: var(--fs-xs);\n  font-weight: 600;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.panel-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-lg);\n}\n.panel-sub[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 var(--space-3);\n  font-size: var(--fs-sm);\n}\n.status-badge[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.status-introduced[_ngcontent-%COMP%] {\n  background: var(--color-info-bg);\n  color: var(--color-info);\n}\n.status-committee[_ngcontent-%COMP%] {\n  background: var(--color-warning-bg);\n  color: var(--color-warning);\n}\n.status-passed[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.status-signed[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.status-vetoed[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n}\n.badge-primary[_ngcontent-%COMP%] {\n  background: var(--color-info-bg);\n  color: var(--color-info);\n}\n.badge-conflict[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n}\n.who-profits[_ngcontent-%COMP%] {\n  border-color: var(--color-border-strong);\n}\n.wp-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.wp-row[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-surface-alt);\n}\n.wp-row.is-conflict[_ngcontent-%COMP%] {\n  border-color: var(--color-danger);\n  background: var(--color-danger-bg);\n}\n.wp-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  font-weight: 600;\n}\n.wp-interests[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 0;\n  padding-left: var(--space-4);\n  font-size: var(--fs-sm);\n}\n.wp-interests[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.wp-interests[_ngcontent-%COMP%]   li.hit[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.hit-flag[_ngcontent-%COMP%] {\n  margin-left: var(--space-2);\n  padding: 1px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-danger);\n  color: #fff;\n  font-size: var(--fs-xs);\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: var(--space-4);\n}\n.sponsor-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.sponsor-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.sponsor-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sponsor-meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.tally[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  margin-bottom: var(--space-3);\n}\n.tally-item[_ngcontent-%COMP%] {\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-sm);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.tally-item.yea[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.tally-item.nay[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n}\n.tally-item.absent[_ngcontent-%COMP%] {\n  background: var(--color-surface-alt);\n  color: var(--color-muted);\n}\n.vote-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--fs-sm);\n}\n.vote-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .vote-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: var(--space-2) var(--space-2);\n  border-bottom: 1px solid var(--color-border);\n}\n.vote-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-weight: 600;\n}\n.vote-badge[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.vote-yea[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.vote-nay[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  color: var(--color-danger);\n}\n.vote-absent[_ngcontent-%COMP%] {\n  background: var(--color-surface-alt);\n  color: var(--color-muted);\n}\n.modal-scrim[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  background: rgba(20, 24, 31, .45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  padding: var(--space-5);\n}\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: var(--fs-lg);\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-size: var(--fs-sm);\n  margin-bottom: var(--space-4);\n}\n.check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-height: auto;\n}\n.vote-editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  margin-bottom: var(--space-4);\n}\n.vote-edit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3);\n}\n.vote-edit-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-height: 44px;\n  font-size: 16px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius);\n  padding: 0 var(--space-2);\n}\n.modal-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n@media (max-width: 768px) {\n  .detail-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .detail-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .modal-scrim[_ngcontent-%COMP%] {\n    align-items: flex-end;\n    padding: 0;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n  }\n}\n/*# sourceMappingURL=bill-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillDetailComponent, { className: "BillDetailComponent", filePath: "src/app/pages/bill-detail/bill-detail.component.ts", lineNumber: 15 });
})();
export {
  BillDetailComponent
};
//# sourceMappingURL=bill-detail.component-NZ3TK4KH.js.map
