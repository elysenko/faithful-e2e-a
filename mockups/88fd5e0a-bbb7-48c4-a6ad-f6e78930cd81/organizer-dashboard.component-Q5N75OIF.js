import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPEXCG3O.js";
import {
  ApiService
} from "./chunk-F5YUZCKE.js";
import {
  CommonModule,
  RouterLink,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HZTH2ON3.js";

// src/app/pages/organizer-dashboard/organizer-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/organizer/events", a0];
function OrganizerDashboardComponent_Conditional_27_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    \u0275\u0275property("value", v_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r3.name);
  }
}
function OrganizerDashboardComponent_Conditional_27_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError());
  }
}
function OrganizerDashboardComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function OrganizerDashboardComponent_Conditional_27_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createEvent());
    });
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "Create event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14)(5, "label", 15);
    \u0275\u0275text(6, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizerDashboardComponent_Conditional_27_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.title, $event) || (ctx_r1.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "label", 17);
    \u0275\u0275text(10, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizerDashboardComponent_Conditional_27_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.category, $event) || (ctx_r1.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "label", 19);
    \u0275\u0275text(14, "Venue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizerDashboardComponent_Conditional_27_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.venueId, $event) || (ctx_r1.form.venueId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 21);
    \u0275\u0275text(17, "Select a venue");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, OrganizerDashboardComponent_Conditional_27_For_19_Template, 2, 2, "option", 22, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "label", 23);
    \u0275\u0275text(22, "Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizerDashboardComponent_Conditional_27_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.capacity, $event) || (ctx_r1.form.capacity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "label", 25);
    \u0275\u0275text(26, "Starts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizerDashboardComponent_Conditional_27_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.startsAt, $event) || (ctx_r1.form.startsAt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 14)(29, "label", 27);
    \u0275\u0275text(30, "Ends");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizerDashboardComponent_Conditional_27_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.endsAt, $event) || (ctx_r1.form.endsAt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 14)(33, "label", 29);
    \u0275\u0275text(34, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizerDashboardComponent_Conditional_27_Template_textarea_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, OrganizerDashboardComponent_Conditional_27_Conditional_36_Template, 2, 1, "p", 31);
    \u0275\u0275elementStart(37, "div", 32)(38, "button", 33);
    \u0275\u0275listener("click", function OrganizerDashboardComponent_Conditional_27_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleForm());
    });
    \u0275\u0275text(39, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 34);
    \u0275\u0275text(41, "Create event");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.venueId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.venues());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.capacity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.startsAt);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.endsAt);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(36, ctx_r1.formError() ? 36 : -1);
  }
}
function OrganizerDashboardComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 35);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function OrganizerDashboardComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 37);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function OrganizerDashboardComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 37);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No events yet. Create your first one.");
    \u0275\u0275elementEnd()();
  }
}
function OrganizerDashboardComponent_Conditional_31_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 43)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 44);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td", 45)(17, "a", 46);
    \u0275\u0275text(18, "Attendees");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const e_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.when(e_r4.startsAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.venue == null ? null : e_r4.venue.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", (tmp_15_0 = e_r4.confirmedCount) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 0, "/", e_r4.capacity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.spotsLabel(e_r4));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, e_r4.id));
  }
}
function OrganizerDashboardComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "When");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Venue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "RSVPs");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, OrganizerDashboardComponent_Conditional_31_For_15_Template, 19, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.events());
  }
}
var OrganizerDashboardComponent = class _OrganizerDashboardComponent {
  constructor(api) {
    this.api = api;
    this.loading = signal(false);
    this.error = signal(null);
    this.showForm = signal(false);
    this.events = signal([]);
    this.venues = signal([]);
    this.totalConfirmed = computed(() => this.events().reduce((s, e) => s + (e.confirmedCount ?? 0), 0));
    this.totalWaitlist = computed(() => this.events().reduce((s, e) => s + (e.waitlistCount ?? 0), 0));
    this.form = { title: "", category: "", venueId: "", startsAt: "", endsAt: "", capacity: 50, description: "" };
    this.formError = signal(null);
  }
  ngOnInit() {
    this.loadEvents();
    this.api.listVenues().subscribe({
      next: (venues) => this.venues.set(venues),
      error: () => {
      }
    });
  }
  loadEvents() {
    this.loading.set(true);
    this.error.set(null);
    this.api.listEvents().subscribe({
      next: (events) => {
        this.events.set(events);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Could not load events. Please try again.");
        this.loading.set(false);
      }
    });
  }
  toggleForm() {
    this.showForm.update((v) => !v);
    this.formError.set(null);
  }
  createEvent() {
    if (!this.form.title || !this.form.venueId || !this.form.startsAt) {
      this.formError.set("Title, venue and start time are required.");
      return;
    }
    const startsAt = new Date(this.form.startsAt).toISOString();
    const endsAt = new Date(this.form.endsAt || this.form.startsAt).toISOString();
    const payload = {
      venueId: this.form.venueId,
      title: this.form.title,
      description: this.form.description,
      category: this.form.category || "General",
      startsAt,
      endsAt,
      capacity: Number(this.form.capacity) || 1
    };
    this.formError.set(null);
    this.api.createEvent(payload).subscribe({
      next: () => {
        this.form = { title: "", category: "", venueId: "", startsAt: "", endsAt: "", capacity: 50, description: "" };
        this.showForm.set(false);
        this.loadEvents();
      },
      error: () => this.formError.set("Could not create the event. Check the details and try again.")
    });
  }
  spotsLabel(e) {
    const left = Math.max(0, e.capacity - (e.confirmedCount ?? 0));
    return left > 0 ? `${left} spots left` : "Full";
  }
  when(iso) {
    return new Date(iso).toLocaleString(void 0, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }
  static {
    this.\u0275fac = function OrganizerDashboardComponent_Factory(t) {
      return new (t || _OrganizerDashboardComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganizerDashboardComponent, selectors: [["app-organizer-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 6, consts: [[1, "page"], [1, "page-head"], [1, "spacer"], ["routerLink", "/organizer/venues", 1, "btn", "btn-outline", "btn-sm"], ["routerLink", "/organizer/settings", 1, "btn", "btn-outline", "btn-sm"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "stats"], [1, "card", "stat"], [1, "stat-num"], [1, "stat-lbl"], [1, "card", "card-pad", "new-form"], [1, "state"], [1, "card", "card-pad", "new-form", 3, "ngSubmit"], [1, "form-grid"], [1, "field"], ["for", "title"], ["id", "title", "name", "title", "placeholder", "Event title", 3, "ngModelChange", "ngModel"], ["for", "category"], ["id", "category", "name", "category", "placeholder", "Music, Workshop\u2026", 3, "ngModelChange", "ngModel"], ["for", "venue"], ["id", "venue", "name", "venue", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "capacity"], ["id", "capacity", "name", "capacity", "type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["for", "starts"], ["id", "starts", "name", "starts", "type", "datetime-local", 3, "ngModelChange", "ngModel"], ["for", "ends"], ["id", "ends", "name", "ends", "type", "datetime-local", 3, "ngModelChange", "ngModel"], ["for", "desc"], ["id", "desc", "name", "desc", "placeholder", "What's this event about?", 3, "ngModelChange", "ngModel"], [1, "error"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "spinner"], [1, "state", "state-error"], [1, "state-icon"], [1, "card", "table-wrap"], [1, "table"], [1, "cell-title"], [1, "badge", "badge-muted"], [1, "nowrap"], [1, "rsvp-cell"], [1, "hint"], [1, "right"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"]], template: function OrganizerDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Organizer");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "span", 2);
        \u0275\u0275elementStart(5, "a", 3);
        \u0275\u0275text(6, "Venues");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function OrganizerDashboardComponent_Template_button_click_9_listener() {
          return ctx.toggleForm();
        });
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "span", 8);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 9);
        \u0275\u0275text(16, "Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 7)(18, "span", 8);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 9);
        \u0275\u0275text(21, "Confirmed RSVPs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 7)(23, "span", 8);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 9);
        \u0275\u0275text(26, "Waitlisted");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, OrganizerDashboardComponent_Conditional_27_Template, 42, 8, "form", 10)(28, OrganizerDashboardComponent_Conditional_28_Template, 4, 0, "div", 11)(29, OrganizerDashboardComponent_Conditional_29_Template, 5, 1)(30, OrganizerDashboardComponent_Conditional_30_Template, 5, 0)(31, OrganizerDashboardComponent_Conditional_31_Template, 16, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.showForm() ? "Close" : "+ New event", " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.events().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.totalConfirmed());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.totalWaitlist());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(27, ctx.showForm() ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(28, ctx.loading() ? 28 : ctx.error() ? 29 : ctx.events().length === 0 ? 30 : 31);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n  padding: var(--space-4);\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-muted);\n}\n.new-form[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.new-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  margin-bottom: var(--space-4);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--space-3);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n  margin-top: var(--space-2);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.cell-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 2px;\n}\n.nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.rsvp-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=organizer-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganizerDashboardComponent, { className: "OrganizerDashboardComponent", filePath: "src/app/pages/organizer-dashboard/organizer-dashboard.component.ts", lineNumber: 21 });
})();
export {
  OrganizerDashboardComponent
};
//# sourceMappingURL=organizer-dashboard.component-Q5N75OIF.js.map
