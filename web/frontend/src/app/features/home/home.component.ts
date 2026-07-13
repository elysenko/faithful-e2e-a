import { Component, OnInit, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { RecipeService } from '../../core/services/recipe.service';
import { RecipeGridComponent } from '../../shared/recipe-grid/recipe-grid.component';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { EmptyStateComponent } from '../../shared/empty-state/empty-state.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RecipeGridComponent, SearchBarComponent, EmptyStateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private query = toSignal(
    this.route.queryParamMap.pipe(map((p) => p.get('q') ?? '')),
    { initialValue: '' },
  );

  readonly q = computed(() => this.query());
  readonly allRecipes = this.recipeService.recipes;
  readonly loading = this.recipeService.loading;
  readonly error = this.recipeService.error;

  ngOnInit(): void {
    // Restore the search from the `?q=` URL param so the state is deep-linkable,
    // and let the API perform the case-insensitive title filtering.
    this.recipeService.load(this.query());
  }

  readonly filtered = computed(() => {
    const term = this.query().trim().toLowerCase();
    return this.allRecipes().filter((r) => !term || r.title.toLowerCase().includes(term));
  });

  readonly favoriteCount = computed(() => this.allRecipes().filter((r) => r.isFavorite).length);

  onSearch(value: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: value || null },
      queryParamsHandling: 'merge',
    });
    // Re-query the API with the new term (server-side `?q=` filtering).
    this.recipeService.load(value);
  }

  onFavorite(id: string): void {
    this.recipeService.toggleFavorite(id).subscribe();
  }
}
