import type { Mood, Goal, MealRecommendation } from "@shared/schema";

interface DailyRecommendations {
  breakfast: MealRecommendation;
  lunch: MealRecommendation;
  dinner: MealRecommendation;
  totalCalories: number;
  totalProtein: number;
  totalFiber: number;
}

// Food database with mood and goal-based recommendations
const foodDatabase = {
  breakfast: {
    happy: [
      {
        name: "Tostada de Aguacate con Huevo",
        description: "Pan integral, aguacate fresco, huevo pochado y semillas de chía",
        benefits: "Las grasas saludables del aguacate y las proteínas del huevo mantienen tu energía y buen humor durante la mañana.",
        calories: 380,
        protein: 18,
        fiber: 12,
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      },
      {
        name: "Bowl de Yogur con Frutas",
        description: "Yogur griego, arándanos, plátano, granola casera y miel",
        benefits: "Los probióticos del yogur y las vitaminas de las frutas refuerzan tu sistema inmune y mantienen tu alegría natural.",
        calories: 340,
        protein: 20,
        fiber: 8,
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    sad: [
      {
        name: "Avena con Chocolate y Nueces",
        description: "Avena integral, cacao puro, nueces, plátano y canela",
        benefits: "El chocolate libera endorfinas que mejoran el estado de ánimo, mientras la avena proporciona energía estable.",
        calories: 420,
        protein: 16,
        fiber: 14,
        image: "https://images.unsplash.com/photo-1571197119282-7c4c1f0838bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    energetic: [
      {
        name: "Smoothie Energético Verde",
        description: "Espinacas, plátano, mango, jengibre, semillas de lino y agua de coco",
        benefits: "Las vitaminas y minerales te darán un impulso natural de energía sin el bajón posterior del café.",
        calories: 290,
        protein: 8,
        fiber: 10,
        image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    calm: [
      {
        name: "Pan Tostado con Mantequilla de Almendras",
        description: "Pan integral, mantequilla de almendras natural, rodajas de pera y canela",
        benefits: "Las almendras contienen magnesio que ayuda a relajar los músculos y mantiene la calma mental.",
        calories: 350,
        protein: 14,
        fiber: 9,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    stressed: [
      {
        name: "Parfait de Yogur con Granola",
        description: "Yogur natural, granola sin azúcar, fresas, kiwi y semillas de girasol",
        benefits: "La vitamina C de las frutas y el magnesio de las semillas ayudan a reducir los niveles de cortisol.",
        calories: 320,
        protein: 18,
        fiber: 7,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    neutral: [
      {
        name: "Huevos Revueltos con Verduras",
        description: "Huevos orgánicos, espinacas, tomate, cebolla y queso cottage",
        benefits: "Una combinación equilibrada de proteínas y vegetales que te preparará para cualquier desafío del día.",
        calories: 360,
        protein: 22,
        fiber: 6,
        image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ]
  },
  lunch: {
    happy: [
      {
        name: "Bowl de Salmón con Quinoa",
        description: "Salmón a la plancha, quinoa, espinacas frescas, tomates cherry y aderezo de limón",
        benefits: "Los omega-3 del salmón potencian la felicidad y la quinoa aporta energía sostenida para mantener tu buen humor.",
        calories: 520,
        protein: 32,
        fiber: 8,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    sad: [
      {
        name: "Sopa de Lentejas con Verduras",
        description: "Lentejas rojas, zanahoria, apio, cebolla, espinacas y especias reconfortantes",
        benefits: "Las lentejas son ricas en folato, un nutriente clave para la producción de serotonina y mejorar el estado de ánimo.",
        calories: 380,
        protein: 18,
        fiber: 16,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    energetic: [
      {
        name: "Ensalada de Pollo con Aguacate",
        description: "Pechuga de pollo, aguacate, lechuga, tomate, pepino y vinagreta de mostaza",
        benefits: "La proteína magra del pollo y las grasas del aguacate mantienen tus niveles de energía estables.",
        calories: 450,
        protein: 35,
        fiber: 12,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    calm: [
      {
        name: "Bowl de Tofu con Vegetales al Vapor",
        description: "Tofu marinado, brócoli, zanahorias, calabacín y arroz integral",
        benefits: "El tofu contiene isoflavonas que ayudan a equilibrar las hormonas y mantener la tranquilidad.",
        calories: 420,
        protein: 20,
        fiber: 14,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    stressed: [
      {
        name: "Wrap de Hummus con Vegetales",
        description: "Tortilla integral, hummus casero, pepino, zanahoria, pimientos y brotes",
        benefits: "Los garbanzos del hummus son ricos en triptófano, precursor de la serotonina que ayuda a reducir el estrés.",
        calories: 380,
        protein: 16,
        fiber: 18,
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    neutral: [
      {
        name: "Poke Bowl de Atún",
        description: "Atún fresco, arroz integral, edamame, pepino, aguacate y salsa ponzu",
        benefits: "Una combinación perfecta de proteínas, carbohidratos complejos y grasas saludables para un almuerzo balanceado.",
        calories: 480,
        protein: 28,
        fiber: 10,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ]
  },
  dinner: {
    happy: [
      {
        name: "Pasta de Calabacín con Pesto",
        description: "Espaguetis de calabacín, pesto de albahaca, tomates cherry, piñones y queso parmesano",
        benefits: "Las hierbas del pesto tienen propiedades relajantes y los vegetales aportan antioxidantes que prolongan tu bienestar.",
        calories: 380,
        protein: 16,
        fiber: 12,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    sad: [
      {
        name: "Salmón con Puré de Camote",
        description: "Salmón al horno, puré de camote, espárragos al vapor y hierbas frescas",
        benefits: "El salmón aporta omega-3 para mejorar el ánimo, mientras el camote provee vitamina A y beta-carotenos reconfortantes.",
        calories: 460,
        protein: 30,
        fiber: 8,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    energetic: [
      {
        name: "Salteado de Pollo con Vegetales",
        description: "Tiras de pollo, brócoli, pimientos, cebolla, jengibre y salsa de soja baja en sodio",
        benefits: "El jengibre estimula la digestión y el metabolismo, mientras que las proteínas reparan tus músculos después del ejercicio.",
        calories: 420,
        protein: 32,
        fiber: 10,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    calm: [
      {
        name: "Curry de Garbanzos con Coco",
        description: "Garbanzos, leche de coco, espinacas, tomate, cúrcuma y arroz basmati",
        benefits: "La cúrcuma tiene propiedades antiinflamatorias y relajantes, perfecta para una cena tranquila y reparadora.",
        calories: 440,
        protein: 18,
        fiber: 16,
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    stressed: [
      {
        name: "Sopa Miso con Tofu y Algas",
        description: "Caldo miso, tofu sedoso, algas wakame, cebolletas y setas shiitake",
        benefits: "El miso contiene probióticos que mejoran la salud intestinal y el bienestar mental, reduciendo la ansiedad.",
        calories: 280,
        protein: 20,
        fiber: 6,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ],
    neutral: [
      {
        name: "Pescado a la Plancha con Quinoa",
        description: "Filete de pescado blanco, quinoa con hierbas, calabacín grillado y limón",
        benefits: "Una cena ligera pero nutritiva que proporciona proteínas completas y carbohidratos complejos para una buena digestión nocturna.",
        calories: 400,
        protein: 28,
        fiber: 8,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
      }
    ]
  }
};

function getRandomMeal(meals: any[]): MealRecommendation {
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
}

function adjustCaloriesForGoal(baseMeal: MealRecommendation, goal: Goal, mealType: 'breakfast' | 'lunch' | 'dinner'): MealRecommendation {
  let calorieMultiplier = 1;
  
  if (goal === 'lose') {
    calorieMultiplier = 0.85; // Reduce calories by 15%
  } else if (goal === 'gain') {
    calorieMultiplier = 1.2; // Increase calories by 20%
  }
  
  return {
    ...baseMeal,
    calories: Math.round(baseMeal.calories * calorieMultiplier),
    protein: Math.round(baseMeal.protein * calorieMultiplier * 10) / 10,
    fiber: Math.round(baseMeal.fiber * calorieMultiplier * 10) / 10,
  };
}

export function generateDailyRecommendations(mood: Mood, goal: Goal): DailyRecommendations {
  // Get meals based on mood
  const breakfastOptions = foodDatabase.breakfast[mood] || foodDatabase.breakfast.neutral;
  const lunchOptions = foodDatabase.lunch[mood] || foodDatabase.lunch.neutral;
  const dinnerOptions = foodDatabase.dinner[mood] || foodDatabase.dinner.neutral;
  
  // Select random meals
  let breakfast = getRandomMeal(breakfastOptions);
  let lunch = getRandomMeal(lunchOptions);
  let dinner = getRandomMeal(dinnerOptions);
  
  // Adjust calories based on goal
  breakfast = adjustCaloriesForGoal(breakfast, goal, 'breakfast');
  lunch = adjustCaloriesForGoal(lunch, goal, 'lunch');
  dinner = adjustCaloriesForGoal(dinner, goal, 'dinner');
  
  // Calculate totals
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
