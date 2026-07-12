import {
  AuthService
} from "./chunk-HEI6KB7T.js";
import {
  SeedService
} from "./chunk-E63MY2RY.js";
import {
  CommonModule,
  RouterLink,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-A62IECG2.js";

// src/app/features/portal/portal-notifications/portal-notifications.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PortalNotificationsComponent_Conditional_16_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
function PortalNotificationsComponent_Conditional_16_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Unread");
    \u0275\u0275elementEnd();
  }
}
function PortalNotificationsComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275template(3, PortalNotificationsComponent_Conditional_16_For_2_Conditional_3_Template, 1, 0, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PortalNotificationsComponent_Conditional_16_For_2_Conditional_10_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", ctx_r1.isUnread(n_r1));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, ctx_r1.isUnread(n_r1) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r1.body);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r1.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, ctx_r1.isUnread(n_r1) ? 10 : -1);
  }
}
function PortalNotificationsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 10);
    \u0275\u0275repeaterCreate(1, PortalNotificationsComponent_Conditional_16_For_2_Template, 11, 7, "li", 12, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.notifications());
  }
}
function PortalNotificationsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "No notifications.");
    \u0275\u0275elementEnd();
  }
}
var PortalNotificationsComponent = class _PortalNotificationsComponent {
  constructor(seed, auth) {
    this.seed = seed;
    this.auth = auth;
    this.allRead = signal(false);
    this.notifications = computed(() => this.seed.portalNotifications());
    this.unreadCount = computed(() => this.allRead() ? 0 : this.notifications().filter((n) => !n.read).length);
  }
  isUnread(n) {
    return !this.allRead() && !n.read;
  }
  markAllRead() {
    this.allRead.set(true);
  }
  static {
    this.\u0275fac = function PortalNotificationsComponent_Factory(t) {
      return new (t || _PortalNotificationsComponent)(\u0275\u0275directiveInject(SeedService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalNotificationsComponent, selectors: [["app-portal-notifications"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 3, consts: [[1, "page"], [1, "page-header", "header-row"], [1, "page-title"], [1, "page-sub"], [1, "btn", "btn-sm", 3, "click", "disabled"], [1, "grid", "stat-grid"], [1, "card", "card-pad"], [1, "muted", "stat-label"], [1, "stat-value"], [1, "card", "card-pad", "list-card"], [1, "list"], ["routerLink", "/portal", 1, "btn", "btn-ghost", "btn-sm", "back"], [1, "list-item", 3, "unread"], [1, "list-item"], [1, "ni-main"], [1, "ni-title"], ["aria-label", "unread", 1, "dot"], [1, "muted", "ni-body"], [1, "right"], [1, "muted", "ni-date"], [1, "badge", "badge-info", "ni-badge"], [1, "muted"]], template: function PortalNotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Updates on your orders, quotes, and documents.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function PortalNotificationsComponent_Template_button_click_7_listener() {
          return ctx.markAllRead();
        });
        \u0275\u0275text(8, "Mark all read");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7);
        \u0275\u0275text(12, "Unread");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9);
        \u0275\u0275template(16, PortalNotificationsComponent_Conditional_16_Template, 3, 0, "ul", 10)(17, PortalNotificationsComponent_Conditional_17_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 11);
        \u0275\u0275text(19, "\u2190 Back to portal home");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.unreadCount() === 0);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.unreadCount());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(16, ctx.notifications().length ? 16 : 17);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--sp-4);\n  flex-wrap: wrap;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 700;\n  margin-top: 6px;\n}\n.list-card[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--sp-4);\n  padding: var(--sp-4) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.list-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.list-item.unread[_ngcontent-%COMP%] {\n  background: var(--color-brand-50);\n}\n.ni-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fs-base);\n}\n.ni-body[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  margin-top: 4px;\n}\n.ni-date[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  white-space: nowrap;\n  display: block;\n}\n.ni-badge[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--color-accent-600);\n  margin-right: 4px;\n}\n.back[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n}\n/*# sourceMappingURL=portal-notifications.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalNotificationsComponent, { className: "PortalNotificationsComponent", filePath: "src/app/features/portal/portal-notifications/portal-notifications.component.ts", lineNumber: 15 });
})();
export {
  PortalNotificationsComponent
};
//# sourceMappingURL=portal-notifications.component-MAAJ3HHY.js.map
