import { Injectable, signal, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SystemSetting } from '../models/models';

/**
 * SettingsService — wired to the admin-only NestJS `/api/v1/admin/settings`
 * endpoints. `settings` stays a `signal<SystemSetting[]>` populated by `load()`;
 * values come back masked with a `configured` flag (never the raw secret).
 */
@Injectable({ providedIn: 'root' })
export class SettingsService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/admin/settings`;

  readonly settings = signal<SystemSetting[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  /** GET /admin/settings — catalog of service credential keys with masked values. */
  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<SystemSetting[]>(this.base).subscribe({
      next: (list) => {
        this.settings.set(list);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(this.messageFrom(err));
        this.loading.set(false);
      },
    });
  }

  /** PATCH /admin/settings — upserts a single key/value pair, returns the refreshed catalog. */
  save(key: string, value: string): Observable<SystemSetting[]> {
    return this.http
      .patch<SystemSetting[]>(this.base, { items: [{ key, value }] })
      .pipe(tap((list) => this.settings.set(list)));
  }

  private messageFrom(err: HttpErrorResponse): string {
    if (err.status === 503 || err.status === 0) {
      return 'Settings service is temporarily unavailable.';
    }
    return err.error?.message || 'Could not load settings.';
  }
}
