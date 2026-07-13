import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
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

  private id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')), {
    initialValue: '',
  });
  private confirmParam = toSignal(
    this.route.queryParamMap.pipe(map((p) => p.get('confirm'))),
    { initialValue: null },
  );

  readonly recipe = computed(() => this.recipeService.getById(this.id()));
  readonly showDeleteConfirm = computed(() => this.confirmParam() === 'delete');

  toggleFavorite(): void {
    const r = this.recipe();
    if (r) this.recipeService.toggleFavorite(r.id);
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
    if (r) this.recipeService.remove(r.id);
    this.router.navigate(['/']);
  }
}
