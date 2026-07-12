import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-FI25ZY7O.js";
import {
  errorMessage
} from "./chunk-YJSS5FSF.js";
import {
  AuthService,
  ChangeDetectionStrategy,
  Component,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UEP77ZUH.js";

// src/app/auth/signup.component.ts
function SignupComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var SignupComponent = class _SignupComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.name = signal("");
    this.email = signal("");
    this.password = signal("");
    this.confirm = signal("");
    this.error = signal(null);
    this.loading = signal(false);
  }
  submit() {
    this.error.set(null);
    if (!this.name().trim()) {
      this.error.set("Please enter your name.");
      return;
    }
    if (!this.email().includes("@")) {
      this.error.set("Please enter a valid email address.");
      return;
    }
    if (this.password().length < 8) {
      this.error.set("Password must be at least 8 characters.");
      return;
    }
    if (this.password() !== this.confirm()) {
      this.error.set("Passwords do not match.");
      return;
    }
    this.loading.set(true);
    this.auth.signup(this.name().trim(), this.email(), this.password()).then(() => this.router.navigate(["/dashboard"])).catch((err) => this.error.set(errorMessage(err, "Could not create your account."))).finally(() => this.loading.set(false));
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], decls: 35, vars: 7, consts: [[1, "auth-shell"], [1, "auth-card", "card"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "muted"], ["data-testid", "signup-error", 1, "error-text"], [3, "ngSubmit"], [1, "form-field"], ["for", "name"], ["id", "name", "type", "text", "name", "name", "autocomplete", "name", "placeholder", "Jane Rivera", "data-testid", "signup-name", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "autocomplete", "email", "placeholder", "you@company.com", "data-testid", "signup-email", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "autocomplete", "new-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "data-testid", "signup-password", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "confirm"], ["id", "confirm", "type", "password", "name", "confirm", "autocomplete", "new-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "data-testid", "signup-confirm", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "signup-submit", 1, "btn", "btn-primary", "block", 3, "disabled"], [1, "switch", "muted"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u2601");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Cloudline CRM");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1");
        \u0275\u0275text(8, "Create account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10, "Start managing your pipeline in minutes.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, SignupComponent_Conditional_11_Template, 2, 1, "p", 6);
        \u0275\u0275elementStart(12, "form", 7);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_12_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(13, "div", 8)(14, "label", 9);
        \u0275\u0275text(15, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 10);
        \u0275\u0275listener("ngModelChange", function SignupComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.name.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 8)(18, "label", 11);
        \u0275\u0275text(19, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 12);
        \u0275\u0275listener("ngModelChange", function SignupComponent_Template_input_ngModelChange_20_listener($event) {
          return ctx.email.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 8)(22, "label", 13);
        \u0275\u0275text(23, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 14);
        \u0275\u0275listener("ngModelChange", function SignupComponent_Template_input_ngModelChange_24_listener($event) {
          return ctx.password.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 8)(26, "label", 15);
        \u0275\u0275text(27, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 16);
        \u0275\u0275listener("ngModelChange", function SignupComponent_Template_input_ngModelChange_28_listener($event) {
          return ctx.confirm.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "button", 17);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "p", 18);
        \u0275\u0275text(32, " Already have an account? ");
        \u0275\u0275elementStart(33, "a", 19);
        \u0275\u0275text(34, "Sign in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.error() ? 11 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.name());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.email());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.password());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.confirm());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Creating\u2026" : "Create account", " ");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ["\n\n.auth-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-primary-light),\n      var(--color-bg));\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  box-shadow: var(--shadow-md);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-4);\n  font-weight: 700;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  background: var(--color-primary);\n  color: var(--color-text-inverse);\n}\n.brand-name[_ngcontent-%COMP%] {\n  color: var(--color-primary-dark);\n}\n.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-1);\n}\n.auth-card[_ngcontent-%COMP%]    > .muted[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-5);\n}\n.block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.switch[_ngcontent-%COMP%] {\n  margin: var(--space-4) 0 0;\n  text-align: center;\n  font-size: 0.9rem;\n}\n.switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n.btn-demo[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: var(--space-4);\n  padding: var(--space-2);\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  font: inherit;\n  font-size: 0.85rem;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.btn-demo[_ngcontent-%COMP%]:active {\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=auth.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupComponent, [{
    type: Component,
    args: [{ selector: "app-signup", standalone: true, imports: [FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="auth-shell">
  <div class="auth-card card">
    <div class="brand">
      <span class="brand-mark">\u2601</span>
      <span class="brand-name">Cloudline CRM</span>
    </div>
    <h1>Create account</h1>
    <p class="muted">Start managing your pipeline in minutes.</p>

    @if (error()) {
      <p class="error-text" data-testid="signup-error">{{ error() }}</p>
    }

    <form (ngSubmit)="submit()">
      <div class="form-field">
        <label for="name">Full name</label>
        <input id="name" class="input" type="text" name="name" autocomplete="name"
          placeholder="Jane Rivera"
          [ngModel]="name()" (ngModelChange)="name.set($event)"
          data-testid="signup-name" />
      </div>
      <div class="form-field">
        <label for="email">Email</label>
        <input id="email" class="input" type="email" name="email" autocomplete="email"
          placeholder="you@company.com"
          [ngModel]="email()" (ngModelChange)="email.set($event)"
          data-testid="signup-email" />
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <input id="password" class="input" type="password" name="password" autocomplete="new-password"
          placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
          [ngModel]="password()" (ngModelChange)="password.set($event)"
          data-testid="signup-password" />
      </div>
      <div class="form-field">
        <label for="confirm">Confirm password</label>
        <input id="confirm" class="input" type="password" name="confirm" autocomplete="new-password"
          placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
          [ngModel]="confirm()" (ngModelChange)="confirm.set($event)"
          data-testid="signup-confirm" />
      </div>
      <button class="btn btn-primary block" type="submit" [disabled]="loading()"
        data-testid="signup-submit">
        {{ loading() ? 'Creating\u2026' : 'Create account' }}
      </button>
    </form>

    <p class="switch muted">
      Already have an account? <a routerLink="/login">Sign in</a>
    </p>
  </div>
</div>
`, styles: ["/* src/app/auth/auth.css */\n.auth-shell {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-primary-light),\n      var(--color-bg));\n}\n.auth-card {\n  width: 100%;\n  max-width: 400px;\n  box-shadow: var(--shadow-md);\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-4);\n  font-weight: 700;\n}\n.brand-mark {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  background: var(--color-primary);\n  color: var(--color-text-inverse);\n}\n.brand-name {\n  color: var(--color-primary-dark);\n}\n.auth-card h1 {\n  margin-bottom: var(--space-1);\n}\n.auth-card > .muted {\n  margin: 0 0 var(--space-5);\n}\n.block {\n  width: 100%;\n}\n.switch {\n  margin: var(--space-4) 0 0;\n  text-align: center;\n  font-size: 0.9rem;\n}\n.switch a {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n.btn-demo {\n  display: block;\n  width: 100%;\n  margin-top: var(--space-4);\n  padding: var(--space-2);\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  font: inherit;\n  font-size: 0.85rem;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.btn-demo:active {\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=auth.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/auth/signup.component.ts", lineNumber: 15 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=chunk-P2K22E6L.js.map
