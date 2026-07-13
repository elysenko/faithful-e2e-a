import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRole } from '../models/models';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

/**
 * Mockup AuthService — no real backend calls.
 * State is held in signals; a demo user is stored in localStorage so the
 * full authenticated UI is inspectable without an API.
 * The service_agent stage will wire login/signup/me to /api/auth/* later.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(this.restoreUser());

  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => !!this._user());
  readonly isAdmin = computed(() => this._user()?.role === 'admin');

  constructor(private router: Router) {}

  private restoreUser(): User | null {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  }

  private persist(user: User, role: UserRole): void {
    const token = `mock.${role}.token`;
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem('access_token', token);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this._user.set(user);
  }

  /** Mock login — accepts any credentials in the mockup. */
  login(email: string): void {
    this.persist(
      { id: 'u-current', email, name: this.nameFromEmail(email), role: 'user' },
      'user',
    );
  }

  /** Mock signup — first-ever user becomes admin (mirrors backend rule). */
  signup(name: string, email: string): void {
    const firstUser = !localStorage.getItem('has_signed_up');
    localStorage.setItem('has_signed_up', 'true');
    const role: UserRole = firstUser ? 'admin' : 'user';
    this.persist({ id: 'u-current', email, name, role }, role);
  }

  /** Demo Mode bypass — logs in as an admin so reviewers see every screen. */
  demoLogin(): void {
    this.persist(
      { id: 'u-demo-admin', email: 'demo@reciperack.app', name: 'Demo Chef', role: 'admin' },
      'admin',
    );
    this.router.navigate(['/']);
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('access_token');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem(USER_KEY);
    this._user.set(null);
    this.router.navigate(['/login']);
  }

  private nameFromEmail(email: string): string {
    const handle = email.split('@')[0] || 'Cook';
    return handle.charAt(0).toUpperCase() + handle.slice(1);
  }
}
