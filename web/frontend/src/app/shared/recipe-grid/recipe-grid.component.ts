import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../core/models/models';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-grid',
  standalone: true,
  imports: [RecipeCardComponent],
  templateUrl: './recipe-grid.component.html',
  styleUrl: './recipe-grid.component.css',
})
export class RecipeGridComponent {
  @Input() recipes: Recipe[] = [];
  @Output() favorite = new EventEmitter<string>();
}
