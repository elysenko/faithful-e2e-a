import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../../core/services/settings.service';
import { SystemSetting } from '../../core/models/models';

interface ServiceGroup {
  service: 'postgresql' | 'minio';
  name: string;
  description: string;
  configured: boolean;
  settings: SystemSetting[];
}

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.css',
})
export class AdminSettingsComponent {
  private settingsService = inject(SettingsService);

  drafts: Record<string, string> = {};
  savedKey: string | null = null;

  readonly groups = computed<ServiceGroup[]>(() => {
    const all = this.settingsService.settings();
    const meta: Record<ServiceGroup['service'], { name: string; description: string }> = {
      postgresql: { name: 'PostgreSQL', description: 'Primary database connection.' },
      minio: { name: 'MinIO', description: 'Object storage for recipe images (optional).' },
    };
    return (['postgresql', 'minio'] as const).map((service) => {
      const settings = all.filter((s) => s.service === service);
      return {
        service,
        name: meta[service].name,
        description: meta[service].description,
        configured: settings.length > 0 && settings.every((s) => s.configured),
        settings,
      };
    });
  });

  save(key: string): void {
    this.settingsService.save(key, this.drafts[key] ?? '');
    this.drafts[key] = '';
    this.savedKey = key;
  }
}
