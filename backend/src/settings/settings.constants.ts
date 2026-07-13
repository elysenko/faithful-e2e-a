export const PLACEHOLDER = 'PLACEHOLDER_CONFIGURE_IN_SETTINGS';

export type SettingService = 'postgresql' | 'minio';

export interface SettingCatalogEntry {
  key: string;
  label: string;
  service: SettingService;
}

/**
 * Catalog of infrastructure/service credential keys surfaced in the admin
 * settings panel. Each entry maps an env/DB key to a human label and the
 * service it belongs to, matching the frontend SystemSetting contract.
 */
export const SETTINGS_CATALOG: SettingCatalogEntry[] = [
  { key: 'DATABASE_URL', label: 'Connection URL', service: 'postgresql' },
  { key: 'MINIO_ENDPOINT', label: 'Endpoint', service: 'minio' },
  { key: 'MINIO_ACCESS_KEY', label: 'Access Key', service: 'minio' },
  { key: 'MINIO_SECRET_KEY', label: 'Secret Key', service: 'minio' },
  { key: 'MINIO_BUCKET', label: 'Bucket', service: 'minio' },
];
