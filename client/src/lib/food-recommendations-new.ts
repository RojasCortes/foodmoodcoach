import type { Mood, Goal, MealRecommendation } from "@shared/schema";
import { getLanguage } from "./i18n";
import { getTranslatedRecipe } from "./recipe-translations";

interface DailyRecommendations {
  breakfast: MealRecommendation;
  lunch: MealRecommendation;
  dinner: MealRecommendation;
  totalCalories: number;
  totalProtein: number;
  totalFiber: number;
}

// Recipe keys for mood-based recommendations
const recipeDatabase = {
  breakfast: {
    happy: ['avocado_toast_happy', 'yogurt_bowl_happy'],
    sad: ['chocolate_oats_sad'],
    energetic: ['green_smoothie_energetic'],
    calm: ['almond_toast_calm'],
    stressed: ['yogurt_parfait_stressed'],
    neutral: ['avocado_toast_happy'] // fallback
  },
  lunch: {
    happy: ['avocado_toast_happy'], // We'll use breakfast recipes for now
    sad: ['chocolate_oats_sad'],
    energetic: ['green_smoothie_energetic'],
    calm: ['almond_toast_calm'],
    stressed: ['yogurt_parfait_stressed'],
    neutral: ['yogurt_bowl_happy']
  },
  dinner: {
    happy: ['yogurt_bowl_happy'],
    sad: ['chocolate_oats_sad'],
    energetic: ['green_smoothie_energetic'],
    calm: ['almond_toast_calm'],
    stressed: ['yogurt_parfait_stressed'],
    neutral: ['avocado_toast_happy']
  }
};

function getRandomRecipe(recipeKeys: string[]): MealRecommendation {
  const currentLanguage = getLanguage();
  const randomKey = recipeKeys[Math.floor(Math.random() * recipeKeys.length)];
  const recipe = getTranslatedRecipe(randomKey, currentLanguage);
  
  if (!recipe) {
    // Fallback recipe in case translation is missing
    return {
      dishName: "Healthy Meal",
      description: "A nutritious meal",
      benefits: "Provides essential nutrients",
      calories: 350,
      protein: 15,
      fiber: 8,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    };
  }

  return {
    dishName: recipe.name,
    description: recipe.description,
    benefits: recipe.benefits,
    calories: recipe.calories,
    protein: recipe.protein,
    fiber: recipe.fiber,
    image: recipe.image
  };
}

export function generateDailyRecommendations(mood: Mood, goal: Goal): DailyRecommendations {
  // Get recipes based on mood
  const breakfastKeys = recipeDatabase.breakfast[mood] || recipeDatabase.breakfast.neutral;
  const lunchKeys = recipeDatabase.lunch[mood] || recipeDatabase.lunch.neutral;
  const dinnerKeys = recipeDatabase.dinner[mood] || recipeDatabase.dinner.neutral;

  const breakfast = getRandomRecipe(breakfastKeys);
  const lunch = getRandomRecipe(lunchKeys);
  const dinner = getRandomRecipe(dinnerKeys);

  // Adjust calories based on goal
  let calorieMultiplier = 1;
  if (goal === 'loseWeight') {
    calorieMultiplier = 0.85;
  } else if (goal === 'gainWeight') {
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