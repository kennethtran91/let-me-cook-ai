import { Component } from '@angular/core';
import { Recipe } from './interface/recipe.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'let-me-cook-ai';
  suggestions: Recipe[] = [];

  onSuggestions(suggestions: Recipe[]) {
    this.suggestions = suggestions || [];
  }
}
