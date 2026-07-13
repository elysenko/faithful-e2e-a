import { Injectable, signal } from '@angular/core';
import { SystemSetting } from '../models/models';

/**
 * Mockup admin settings service.
 * DATA CONTRACT: `settings` stays a `signal<SystemSetting[]>([...])` so it can
 * be emptied by mockup_cleaner and wired to GET/PATCH /api/admin/settings.
 */
@Injectable({ providedIn: 'root' })
export class SettingsService {
  readonly settings = signal<SystemSetting[]>([
    {
      key: 'DATABASE_URL',
      label: 'Connection URL',
      service: 'postgresql',
      value: 'postgres://••••••@postgres:5432/reciperack',
      configured: true,
    },
    {
      key: 'MINIO_ENDPOINT',
      label: 'Endpoint',
      service: 'minio',
      value: '',
      configured: false,
    },
    {
      key: 'MINIO_ACCESS_KEY',
      label: 'Access Key',
      service: 'minio',
      value: '',
      configured: false,
    },
  ]);

  save(key: string, value: string): void {
    this.settings.update((list) =>
      list.map((s) =>
        s.key === key
          ? { ...s, value: value ? '••••••••' : '', configured: value.trim().length > 0 }
          : s,
      ),
    );
  }
}
