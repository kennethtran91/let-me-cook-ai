import { Injectable } from '@angular/core';
import { GoogleGenAI, Type } from '@google/genai';
import { Recipe } from '../interface/recipe.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    if (!environment.geminiApiKey) {
      throw new Error('API_KEY environment variable not set.');
    }
    this.ai = new GoogleGenAI({ apiKey: environment.geminiApiKey });
  }

  async getRecipeSuggestions(
    ingredients: string,
    cuisine: string
  ): Promise<Recipe[]> {
    const prompt = `
  You are an expert multilingual chef who can create delicious recipes in any language.

  Based on the following ingredients: "${ingredients}", and an optional preferred cuisine of "${
      cuisine || 'any'
    }", please suggest 3 distinct recipes.

  Before generating, detect the language of the provided ingredients automatically. 
  Then, write the entire output (dish names, descriptions, ingredients, and instructions) in that same language.

  For each recipe, provide the following details:
  1. A creative name for the dish.
  2. A brief, enticing description.
  3. A list of ingredients with quantities. Use mainly the provided ingredients, but you may include common pantry staples like oil, salt, pepper, water, fish sauce, oyster sauce or spices if needed.
  4. A clear, step-by-step set of cooking instructions.

  Provide the response as a valid JSON array of recipe objects that adheres to the provided schema.
`;

    const responseSchema = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: {
            type: Type.STRING,
            description: 'The name of the recipe.',
          },
          description: {
            type: Type.STRING,
            description: 'A short, enticing description of the dish.',
          },
          ingredients: {
            type: Type.ARRAY,
            description: 'List of ingredients for the recipe.',
            items: {
              type: Type.OBJECT,
              properties: {
                item: {
                  type: Type.STRING,
                  description: 'The name of the ingredient.',
                },
                quantity: {
                  type: Type.STRING,
                  description:
                    "The amount of the ingredient (e.g., '1 cup', '2 tbsp').",
                },
              },
              required: ['item', 'quantity'],
            },
          },
          instructions: {
            type: Type.ARRAY,
            description: 'Step-by-step cooking instructions.',
            items: {
              type: Type.STRING,
              description: 'A single step in the cooking process.',
            },
          },
        },
        required: ['name', 'description', 'ingredients', 'instructions'],
      },
    };

    const response = await this.ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });

    const text = response.text?.trim() ?? '';
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error('Failed to parse JSON response:', text);
      throw new Error(
        'Received an invalid format from the AI. Please try again.'
      );
    }
  }
}
