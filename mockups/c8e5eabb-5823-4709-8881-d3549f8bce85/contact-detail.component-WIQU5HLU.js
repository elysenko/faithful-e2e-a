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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A62IECG2.js";

// src/app/features/contacts/contact-detail.component.ts
var _forTrack0 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.label;
var _c0 = (a0) => ["/accounts", a0];
var _c1 = () => [];
var _c2 = (a0) => ({ tab: a0 });
function ContactDetailComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "\u2605 Champion");
    \u0275\u0275elementEnd();
  }
}
function ContactDetailComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, a_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.name);
  }
}
function ContactDetailComponent_Conditional_1_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === t_r2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c1))("queryParams", \u0275\u0275pureFunction1(6, _c2, t_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function ContactDetailComponent_Conditional_1_Conditional_21_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275element(1, "span", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "div", 20)(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.typeBadge(item_r4.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.summary);
  }
}
function ContactDetailComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "ul", 16);
    \u0275\u0275repeaterCreate(2, ContactDetailComponent_Conditional_1_Conditional_21_For_3_Template, 10, 5, "li", 17, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.timeline);
  }
}
function ContactDetailComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h2", 22);
    \u0275\u0275text(2, "General notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Relationship is ", c_r5.relationshipStrength, ". Last meaningful touch ", ctx_r2.daysSince(c_r5.lastTouch), " days ago. Keep summaries written and concise; route technical questions to the specifier. Add follow-up notes here after each interaction.");
  }
}
function ContactDetailComponent_Conditional_1_Conditional_23_For_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6);
  }
}
function ContactDetailComponent_Conditional_1_Conditional_23_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275repeaterCreate(7, ContactDetailComponent_Conditional_1_Conditional_23_For_4_For_8_Template, 2, 1, "span", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r7.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, e_r7.receivedAt, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(e_r7.signals);
  }
}
function ContactDetailComponent_Conditional_1_Conditional_23_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "No email signals recorded for this contact yet.");
    \u0275\u0275elementEnd();
  }
}
function ContactDetailComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h2", 22);
    \u0275\u0275text(2, "Email signals");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ContactDetailComponent_Conditional_1_Conditional_23_For_4_Template, 9, 5, "div", 23, _forTrack1, false, ContactDetailComponent_Conditional_1_Conditional_23_ForEmpty_5_Template, 2, 0, "p", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.signalEmails());
  }
}
function ContactDetailComponent_Conditional_1_Conditional_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "strong");
    \u0275\u0275text(2, "Reconnect prompt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r2.daysSince(c_r5.lastTouch), " days since last touch. Reach out with a low-pressure check-in. ");
  }
}
function ContactDetailComponent_Conditional_1_Conditional_24_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(note_r8);
  }
}
function ContactDetailComponent_Conditional_1_Conditional_24_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 31);
    \u0275\u0275repeaterCreate(1, ContactDetailComponent_Conditional_1_Conditional_24_Conditional_5_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(c_r5.hospitalityNotes);
  }
}
function ContactDetailComponent_Conditional_1_Conditional_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "No hospitality notes recorded.");
    \u0275\u0275elementEnd();
  }
}
function ContactDetailComponent_Conditional_1_Conditional_24_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const occ_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(occ_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(occ_r9.date);
  }
}
function ContactDetailComponent_Conditional_1_Conditional_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ContactDetailComponent_Conditional_1_Conditional_24_Conditional_10_For_1_Template, 5, 2, "div", 33, _forTrack2);
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(c_r5.occasions);
  }
}
function ContactDetailComponent_Conditional_1_Conditional_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "No occasions on file.");
    \u0275\u0275elementEnd();
  }
}
function ContactDetailComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ContactDetailComponent_Conditional_1_Conditional_24_Conditional_0_Template, 4, 1, "div", 28);
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 30)(3, "h2", 22);
    \u0275\u0275text(4, "Hospitality notes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ContactDetailComponent_Conditional_1_Conditional_24_Conditional_5_Template, 3, 0, "ul", 31)(6, ContactDetailComponent_Conditional_1_Conditional_24_Conditional_6_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 30)(8, "h2", 22);
    \u0275\u0275text(9, "Upcoming occasions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ContactDetailComponent_Conditional_1_Conditional_24_Conditional_10_Template, 2, 0)(11, ContactDetailComponent_Conditional_1_Conditional_24_Conditional_11_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 32)(13, "h2", 22);
    \u0275\u0275text(14, "Gesture tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 8);
    \u0275\u0275text(16, "No gestures logged yet. Track cards, gifts and hospitality here to keep relationships warm and compliant.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r2.reconnectNeeded() ? 0 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(5, c_r5.hospitalityNotes.length ? 5 : 6);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(10, c_r5.occasions.length ? 10 : 11);
  }
}
function ContactDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 2);
    \u0275\u0275text(2, "\u2190 Contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h1", 5);
    \u0275\u0275text(8);
    \u0275\u0275template(9, ContactDetailComponent_Conditional_1_Conditional_9_Template, 2, 0, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "span", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 9);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ContactDetailComponent_Conditional_1_Conditional_17_Template, 2, 4, "a", 11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 12);
    \u0275\u0275repeaterCreate(19, ContactDetailComponent_Conditional_1_For_20_Template, 2, 8, "button", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ContactDetailComponent_Conditional_1_Conditional_21_Template, 4, 0, "div", 14)(22, ContactDetailComponent_Conditional_1_Conditional_22_Template, 5, 2, "div", 14)(23, ContactDetailComponent_Conditional_1_Conditional_23_Template, 6, 1, "div", 14)(24, ContactDetailComponent_Conditional_1_Conditional_24_Template, 17, 3);
  }
  if (rf & 2) {
    let tmp_9_0;
    const c_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r5.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(9, c_r5.isChampion ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.title);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("href", "mailto:", c_r5.email, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.phone);
    \u0275\u0275advance();
    \u0275\u0275conditional(17, (tmp_9_0 = ctx_r2.account()) ? 17 : -1, tmp_9_0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(21, ctx_r2.activeTab() === "timeline" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(22, ctx_r2.activeTab() === "notes" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(23, ctx_r2.activeTab() === "signals" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(24, ctx_r2.activeTab() === "hospitality" ? 24 : -1);
  }
}
function ContactDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h1", 5);
    \u0275\u0275text(2, "Contact not found");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275text(4, "We couldn't find that contact. ");
    \u0275\u0275elementStart(5, "a", 37);
    \u0275\u0275text(6, "Back to contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ".");
    \u0275\u0275elementEnd();
  }
}
var ContactDetailComponent = class _ContactDetailComponent {
  daysSince(iso) {
    const then = new Date(iso).getTime();
    return Math.round((this.today.getTime() - then) / 864e5);
  }
  typeBadge(type) {
    switch (type) {
      case "Email":
        return "badge-info";
      case "Call":
        return "badge-success";
      case "Meeting":
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
    this.today = /* @__PURE__ */ new Date("2026-07-10");
    this.tabs = ["timeline", "notes", "signals", "hospitality"];
    this.activeTab = signal("timeline");
    this.contact = computed(() => this.seed.contactById(this.id));
    this.account = computed(() => {
      const c = this.contact();
      return c ? this.seed.accountById(c.accountId) : void 0;
    });
    this.signalEmails = computed(() => {
      const c = this.contact();
      if (!c)
        return [];
      return this.seed.emails().filter((e) => e.from === c.name);
    });
    this.reconnectNeeded = computed(() => {
      const c = this.contact();
      return c ? this.daysSince(c.lastTouch) > 30 : false;
    });
    this.timeline = [
      { type: "Email", date: "2026-07-06", summary: "Confirmed Volition Canyon submittal schedule; positive tone." },
      { type: "Call", date: "2026-06-24", summary: "20-min check-in on data hall B expansion timing." },
      { type: "Meeting", date: "2026-06-11", summary: "On-site walkthrough with facilities team; lineup reviewed." },
      { type: "Email", date: "2026-05-28", summary: "Shared budgetary pricing for E6.2 4000A breakers." },
      { type: "Call", date: "2026-05-09", summary: "Intro call \u2014 mapped decision process and champions." }
    ];
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    const t = this.route.snapshot.queryParamMap.get("tab");
    this.activeTab.set(t && this.tabs.includes(t) ? t : "timeline");
    this.route.queryParamMap.subscribe((q) => {
      const tab = q.get("tab");
      this.activeTab.set(tab && this.tabs.includes(tab) ? tab : "timeline");
    });
  }
  static {
    this.\u0275fac = function ContactDetailComponent_Factory(t) {
      return new (t || _ContactDetailComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactDetailComponent, selectors: [["app-contact-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "page"], [1, "page-header"], ["routerLink", "/contacts", 1, "btn", "btn-ghost", "btn-sm", "back"], [1, "c-header"], [1, "avatar-lg"], [1, "page-title"], [1, "badge", "badge-warning", "champion-badge"], [1, "head-meta"], [1, "muted"], [1, "mono", 3, "href"], [1, "muted", "mono"], [3, "routerLink"], [1, "tabs"], ["queryParamsHandling", "merge", 1, "tab", 3, "active", "routerLink", "queryParams"], [1, "card", "card-pad"], ["queryParamsHandling", "merge", 1, "tab", 3, "routerLink", "queryParams"], [1, "timeline"], [1, "tl-item"], [1, "tl-dot"], [1, "tl-body"], [1, "tl-head"], [1, "badge"], [1, "panel-title"], [1, "signal-item"], [1, "signal-subj"], [1, "muted", "mono", "signal-date"], [1, "signal-badges"], [1, "badge", "badge-info"], [1, "alert", "alert-warning", "reconnect"], [1, "row", "hosp-row"], [1, "card", "card-pad", "hosp-card"], [1, "hosp-list"], [1, "card", "card-pad", "gesture-card"], [1, "occasion"], [1, "occ-label"], [1, "badge", "badge-neutral", "mono"], [1, "alert", "alert-warning"], ["routerLink", "/contacts"]], template: function ContactDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ContactDetailComponent_Conditional_1_Template, 25, 13)(2, ContactDetailComponent_Conditional_2_Template, 8, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance();
        \u0275\u0275conditional(1, (tmp_0_0 = ctx.contact()) ? 1 : 2, tmp_0_0);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink], styles: ['\n\n.back[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: var(--sp-3);\n}\n.c-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n}\n.avatar-lg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 999px;\n  background: var(--color-brand-600);\n  color: #fff;\n  font-weight: 700;\n  font-size: var(--fs-lg);\n  flex-shrink: 0;\n}\n.champion-badge[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  vertical-align: middle;\n}\n.head-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  flex-wrap: wrap;\n  margin-top: 6px;\n  font-size: var(--fs-sm);\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--sp-4);\n}\n.timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.tl-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-4);\n  padding-bottom: var(--sp-4);\n  position: relative;\n}\n.tl-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 16px;\n  bottom: 0;\n  width: 2px;\n  background: var(--color-border);\n}\n.tl-item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.tl-item[_ngcontent-%COMP%]:last-child::before {\n  display: none;\n}\n.tl-dot[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 999px;\n  background: var(--color-brand-600);\n  border: 3px solid var(--color-surface);\n  flex-shrink: 0;\n  margin-top: 3px;\n  z-index: 1;\n}\n.tl-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.tl-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n}\n.signal-item[_ngcontent-%COMP%] {\n  padding: var(--sp-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.signal-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.signal-subj[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.signal-date[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  margin: 2px 0 6px;\n}\n.signal-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.reconnect[_ngcontent-%COMP%] {\n  margin-bottom: var(--sp-4);\n}\n.hosp-row[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n.hosp-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 280px;\n}\n.hosp-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.occasion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--sp-3);\n  padding: 8px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.occasion[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.occ-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.gesture-card[_ngcontent-%COMP%] {\n  margin-top: var(--sp-4);\n}\n/*# sourceMappingURL=contact-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactDetailComponent, { className: "ContactDetailComponent", filePath: "src/app/features/contacts/contact-detail.component.ts", lineNumber: 15 });
})();
export {
  ContactDetailComponent
};
//# sourceMappingURL=contact-detail.component-WIQU5HLU.js.map
