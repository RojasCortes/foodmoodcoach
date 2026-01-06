import { Card, CardContent } from "@/components/ui/card";
import { t, type Language } from "@/lib/i18n";
import { getTranslatedRecipe } from "@/lib/recipe-translations";
import type { MealRecommendation } from "@shared/schema";

interface MealCardProps {
  meal: MealRecommendation;
  mealType: 'breakfast' | 'lunch' | 'dinner';
  icon: string;
  iconBg: string;
  iconColor: string;
  cardBg: string;
  benefitBg: string;
  benefitTextColor: string;
  benefitTitleColor: string;
  time: string;
  language: Language;
}

export default function MealCard({
  meal,
  mealType,
  icon,
  iconBg,
  iconColor,
  cardBg,
  benefitBg,
  benefitTextColor,
  benefitTitleColor,
  time,
  language
}: MealCardProps) {
  // Get translated recipe based on current language passed as prop
  const translatedRecipe = meal.recipeKey 
    ? getTranslatedRecipe(meal.recipeKey, language) 
    : null;
  
  // Use translated values if available, otherwise fall back to stored values
  const displayName = translatedRecipe?.name || meal.name;
  const displayDescription = translatedRecipe?.description || meal.description;
  const displayBenefits = translatedRecipe?.benefits || meal.benefits;

  return (
    <Card className="overflow-hidden shadow-sm border border-slate-200">
      <div className={`flex items-center p-4 ${cardBg}`}>
        <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center mr-3`}>
          <span className={`text-xl ${iconColor}`}>{icon}</span>
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">{t(mealType)}</h4>
          <p className="text-sm text-slate-600">{time} - {meal.calories} kcal</p>
        </div>
      </div>
      
      <CardContent className="p-4">
        <img 
          src={meal.image} 
          alt={displayName}
          className="w-full h-40 object-cover rounded-lg mb-3"
          onError={(e) => {
            e.currentTarget.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200`;
          }}
        />
        
        <h5 className="font-semibold text-slate-800 mb-2">{displayName}</h5>
        <p className="text-sm text-slate-600 mb-3">{displayDescription}</p>
        
        <div className={`${benefitBg} rounded-lg p-3`}>
          <h6 className={`text-sm font-medium ${benefitTitleColor} mb-1`}>💡 {t('moodBenefits')}:</h6>
          <p className={`text-sm ${benefitTextColor}`}>{displayBenefits}</p>
        </div>
      </CardContent>
    </Card>
  );
}
