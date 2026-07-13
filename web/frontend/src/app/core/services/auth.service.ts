import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, from, switchMap, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/models';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user';

export interface AuthResponse {
  user: User;
  token: string;
}

/**
 * AuthService — wired to the NestJS `/api/v1/auth/*` endpoints.
 * The JWT is persisted under `auth_token` (read by the auth interceptor) and the
 * user profile under `user`, so guards resolve synchronously on reload.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private readonly base = `${environment.apiUrl}/auth`;

  private _user = signal<User | null>(this.restoreUser());

  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => !!this._user());
  readonly isAdmin = computed(() => this._user()?.role === 'admin');

  constructor() {
    // Validate/refresh the persisted session on startup.
    if (localStorage.getItem(TOKEN_KEY)) {
      this.refreshMe();
    }
  }

  /** POST /auth/login — exchanges credentials for a JWT + user profile. */
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.base}/login`, { email, password })
      .pipe(tap((res) => this.persist(res)));
  }

  /** POST /auth/register — creates an account and logs the user in. */
  signup(name: string, email: string, password: string, passwordconf: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.base}/register`, { name, email, password, passwordconf })
      .pipe(tap((res) => this.persist(res)));
  }

  /**
   * Demo Mode — logs in as the seeded demo account (`user@example.com`) using the
   * deterministic seed password, so reviewers can explore the real, data-backed UI.
   */
  demoLogin(): Observable<AuthResponse> {
    const email = 'user@example.com';
    return from(this.deriveSeedPassword(email)).pipe(
      switchMap((password) => this.login(email, password)),
    );
  }

  /** GET /auth/me — re-hydrates the current user from the token. */
  refreshMe(): void {
    this.http.get<User>(`${this.base}/me`).subscribe({
      next: (u) => {
        this._user.set(u);
        localStorage.setItem(USER_KEY, JSON.stringify(u));
      },
      error: () => this.clear(),
    });
  }

  logout(): void {
    this.clear();
    this.router.navigate(['/login']);
  }

  private persist(res: AuthResponse): void {
    localStorage.setItem(TOKEN_KEY, res.token);
    localStorage.setItem(USER_KEY, JSON.stringify(res.user));
    this._user.set(res.user);
  }

  private clear(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this._user.set(null);
  }

  private restoreUser(): User | null {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  }

  /** Mirrors the backend seed: sha256(email + SEED_SECRET).slice(0, 16). */
  private async deriveSeedPassword(email: string): Promise<string> {
    const data = new TextEncoder().encode(email + 'colossus-seed');
    const digest = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
      .slice(0, 16);
  }
}
