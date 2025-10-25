export interface RecipeIngredient {
  item: string;
  quantity: string;
}

export interface Recipe {
  name: string;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
}
