import type { Mood, Goal, MealRecommendation } from "@shared/schema";
import { recipes, getTranslatedRecipeData, getRecipesByMealAndMood } from "./recipe-database";

interface DailyRecommendations {
  breakfast: MealRecommendation;
  lunch: MealRecommendation;
  dinner: MealRecommendation;
  totalCalories: number;
  totalProtein: number;
  totalFiber: number;
}

function getRandomRecipeForMeal(mealType: 'breakfast' | 'lunch' | 'dinner', mood: Mood): MealRecommendation {
  // Get recipes matching this meal type and mood
  let availableRecipes = getRecipesByMealAndMood(mealType, mood);
  
  // If no recipes match, fall back to 'neutral' mood
  if (availableRecipes.length === 0) {
    availableRecipes = getRecipesByMealAndMood(mealType, 'neutral');
  }
  
  // If still no recipes, get any recipe of this meal type
  if (availableRecipes.length === 0) {
    availableRecipes = recipes.filter(r => r.mealType === mealType);
  }
  
  // Select a random recipe
  const selectedRecipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];
  
  // Get Spanish translation as default (translation happens at display time)
  const translation = getTranslatedRecipeData(selectedRecipe.key, 'es');
  
  return {
    name: translation?.name || 'Comida Saludable',
    description: translation?.description || 'Una comida nutritiva',
    benefits: translation?.benefits || 'Proporciona nutrientes esenciales',
    calories: selectedRecipe.calories,
    protein: selectedRecipe.protein,
    fiber: selectedRecipe.fiber,
    image: selectedRecipe.image,
    recipeKey: selectedRecipe.key
  };
}

export function generateDailyRecommendations(mood: Mood, goal: Goal): DailyRecommendations {
  // Get random recipes for each meal type based on mood
  const breakfast = getRandomRecipeForMeal('breakfast', mood);
  const lunch = getRandomRecipeForMeal('lunch', mood);
  const dinner = getRandomRecipeForMeal('dinner', mood);

  // Adjust calories based on goal
  let calorieMultiplier = 1;
  if (goal === 'lose') {
    calorieMultiplier = 0.85;
  } else if (goal === 'gain') {
    calorieMultiplier = 1.15;
  }

  // Apply calorie adjustment
  breakfast.calories = Math.round(breakfast.calories * calorieMultiplier);
  lunch.calories = Math.round(lunch.calories * calorieMultiplier);
  dinner.calories = Math.round(dinner.calories * calorieMultiplier);

  const totalCalories = breakfast.calories + lunch.calories + dinner.calories;
  const totalProtein = breakfast.protein + lunch.protein + dinner.protein;
  const totalFiber = breakfast.fiber + lunch.fiber + dinner.fiber;

  return {
    breakfast,
    lunch,
    dinner,
    totalCalories,
    totalProtein,
    totalFiber
  };
}
