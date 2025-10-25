import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuggestionBoxComponent } from './suggestion-box/suggestion-box.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SuggestionBoxComponent, RecipeCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
