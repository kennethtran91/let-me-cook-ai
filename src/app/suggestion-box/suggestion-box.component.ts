import { Component, EventEmitter, Output } from '@angular/core';
import { GeminiService } from '../services/gemini.service';
import { Recipe } from '../interface/recipe.interface';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suggestion-box',
  templateUrl: './suggestion-box.component.html',
  standalone: true,
  imports: [BrowserModule, FormsModule],
})
export class SuggestionBoxComponent {
  loading = false;
  suggestions: Recipe[] = [];
  ingredients: string = '';
  cuisine: string = '';
  @Output() suggestionsChange = new EventEmitter<Recipe[]>();

  constructor(private geminiService: GeminiService) {}

  async fetchingSuggestions() {
    this.loading = true;

    try {
      const result = await this.geminiService.getRecipeSuggestions(
        this.ingredients,
        this.cuisine
      );
      this.suggestions = result;
      // emit to parent so app component (or others) can render cards
      this.suggestionsChange.emit(this.suggestions);
    } catch (err: any) {
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
}
