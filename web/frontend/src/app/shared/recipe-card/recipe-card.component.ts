import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../core/models/models';
import { FavoriteToggleComponent } from '../favorite-toggle/favorite-toggle.component';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink, FavoriteToggleComponent],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: Recipe;
  @Output() favorite = new EventEmitter<string>();
}
