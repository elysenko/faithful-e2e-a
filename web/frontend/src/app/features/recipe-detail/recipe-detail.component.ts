import { Component, computed, inject, signal } from '@angular/core';
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Recipe } from '../../core/models/models';
import { RecipeService } from '../../core/services/recipe.service';
import { FavoriteToggleComponent } from '../../shared/favorite-toggle/favorite-toggle.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { EmptyStateComponent } from '../../shared/empty-state/empty-state.component';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterLink, FavoriteToggleComponent, ConfirmDialogComponent, EmptyStateComponent],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private recipeService = inject(RecipeService);

  private confirmParam = toSignal(
    this.route.queryParamMap.pipe(map((p) => p.get('confirm'))),
    { initialValue: null },
  );

  readonly recipe = signal<Recipe | null>(null);
  readonly loading = signal(true);
  readonly showDeleteConfirm = computed(() => this.confirmParam() === 'delete');

  constructor() {
    // Fetch the recipe whenever the :id route param changes (supports deep links).
    this.route.paramMap
      .pipe(
        map((p) => p.get('id') ?? ''),
        takeUntilDestroyed(),
      )
      .subscribe((id) => {
        if (!id) {
          this.loading.set(false);
          this.recipe.set(null);
          return;
        }
        this.loading.set(true);
        this.recipeService.getById(id).subscribe({
          next: (r) => {
            this.recipe.set(r);
            this.loading.set(false);
          },
          error: () => {
            this.recipe.set(null);
            this.loading.set(false);
          },
        });
      });
  }

  toggleFavorite(): void {
    const r = this.recipe();
    if (!r) return;
    this.recipeService.toggleFavorite(r.id).subscribe({
      next: (updated) => this.recipe.set(updated),
    });
  }

  askDelete(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { confirm: 'delete' },
      queryParamsHandling: 'merge',
    });
  }

  cancelDelete(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { confirm: null },
      queryParamsHandling: 'merge',
    });
  }

  confirmDelete(): void {
    const r = this.recipe();
    if (!r) {
      this.router.navigate(['/']);
      return;
    }
    this.recipeService.remove(r.id).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => this.router.navigate(['/']),
    });
  }
}
