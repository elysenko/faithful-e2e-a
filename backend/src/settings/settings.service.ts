import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  PLACEHOLDER,
  SETTINGS_CATALOG,
  SettingService,
} from './settings.constants';
import { SettingItemDto } from './dto/update-settings.dto';

export interface ResolvedSetting {
  key: string;
  label: string;
  service: SettingService;
  value: string; // masked when configured, '' otherwise
  configured: boolean;
}

@Injectable()
export class SettingsService {
  private readonly logger = new Logger('SettingsService');

  constructor(private prisma: PrismaService) {}

  /**
   * Resolves a config value with priority:
   *   1. Environment variable (deploy-time, ignoring the placeholder sentinel)
   *   2. SystemSetting DB row (set via the admin panel)
   *   3. null — feature/service is unconfigured
   */
  async resolveConfig(key: string): Promise<string | null> {
    const envVal = process.env[key];
    if (envVal && envVal !== PLACEHOLDER) return envVal;

    const row = await this.prisma.systemSetting.findUnique({ where: { key } });
    if (row?.value && row.value !== PLACEHOLDER) return row.value;

    return null;
  }

  /** Mask a resolved secret; only reveals configured/unconfigured state. */
  private mask(value: string | null): string {
    return value ? '••••••••' : '';
  }

  /** Returns every catalog key with its masked effective value + configured flag. */
  async list(): Promise<ResolvedSetting[]> {
    const rows = await this.prisma.systemSetting.findMany();
    const dbMap = new Map(rows.map((r) => [r.key, r.value]));

    return SETTINGS_CATALOG.map((entry) => {
      const envVal = process.env[entry.key];
      const dbVal = dbMap.get(entry.key);
      const envGood = !!envVal && envVal !== PLACEHOLDER;
      const dbGood = !!dbVal && dbVal !== PLACEHOLDER;
      const effective = envGood ? envVal! : dbGood ? dbVal! : null;

      return {
        key: entry.key,
        label: entry.label,
        service: entry.service,
        value: this.mask(effective),
        configured: !!effective,
      };
    });
  }

  /** Upserts admin-provided key/value pairs into SystemSetting. */
  async update(items: SettingItemDto[]): Promise<ResolvedSetting[]> {
    await Promise.all(
      items.map(({ key, value }) =>
        this.prisma.systemSetting.upsert({
          where: { key },
          update: { value },
          create: { key, value },
        }),
      ),
    );
    this.logger.log(`PATCH admin/settings: upserted ${items.length} setting(s)`);
    return this.list();
  }
}
