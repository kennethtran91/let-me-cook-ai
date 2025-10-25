import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../interface/recipe.interface';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class RecipeCardComponent {
  @Input() recipe?: Recipe | null;
}
