export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface Recipe {
  id: string;
  ownerId: string;
  title: string;
  ingredients: string[];
  instructions: string;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SystemSetting {
  key: string;
  label: string;
  service: 'postgresql' | 'minio';
  value: string;      // masked when configured
  configured: boolean;
}
