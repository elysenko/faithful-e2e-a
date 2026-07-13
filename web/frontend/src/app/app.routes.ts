import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { FlowRoute } from './flow-meta';

// `data.flow` is the single source of truth for the user-flow graph AND the runtime navbar.
// Angular `data` is NOT inherited by child routes — flow is repeated on each leaf below.
export const routes: Routes = ([
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
    data: { flow: { flowId: 'login', node: 'login', entry: true, edgesTo: ['home', 'signup'], label: 'Login' } },
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./features/signup/signup.component').then((m) => m.SignupComponent),
    data: { flow: { flowId: 'signup', node: 'signup', entry: true, edgesTo: ['home', 'login'], label: 'Sign up' } },
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/app-shell/app-shell.component').then((m) => m.AppShellComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent),
        data: {
          flow: {
            flowId: 'home',
            node: 'home',
            showInNavbar: true,
            label: 'Recipes',
            scope: 'all',
            edgesTo: ['recipe-new', 'recipe-detail', 'admin-settings'],
          },
        },
      },
      {
        path: 'recipes/new',
        loadComponent: () =>
          import('./features/recipe-form/recipe-form.component').then((m) => m.RecipeFormComponent),
        data: { flow: { flowId: 'recipe-new', node: 'recipe-new', label: 'Add recipe', edgesTo: ['recipe-detail', 'home'] } },
      },
      {
        path: 'recipes/:id',
        loadComponent: () =>
          import('./features/recipe-detail/recipe-detail.component').then((m) => m.RecipeDetailComponent),
        data: { flow: { flowId: 'recipe-detail', node: 'recipe-detail', label: 'Recipe', edgesTo: ['recipe-edit', 'home'] } },
      },
      {
        path: 'recipes/:id/edit',
        loadComponent: () =>
          import('./features/recipe-form/recipe-form.component').then((m) => m.RecipeFormComponent),
        data: { flow: { flowId: 'recipe-edit', node: 'recipe-edit', label: 'Edit recipe', edgesTo: ['recipe-detail', 'home'] } },
      },
      {
        path: 'admin/settings',
        loadComponent: () =>
          import('./features/admin-settings/admin-settings.component').then((m) => m.AdminSettingsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: 'admin-settings', node: 'admin-settings', showInNavbar: true, label: 'Settings', scope: 'admin', edgesTo: ['home'] } },
      },
    ],
  },
  { path: '**', redirectTo: '' },
] satisfies FlowRoute[]) as Routes;
