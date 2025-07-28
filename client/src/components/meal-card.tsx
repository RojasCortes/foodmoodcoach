import { Card, CardContent } from "@/components/ui/card";
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
  time
}: MealCardProps) {
  const mealTypeLabels = {
    breakfast: 'Desayuno',
    lunch: 'Almuerzo',
    dinner: 'Cena'
  };

  return (
    <Card className="overflow-hidden shadow-sm border border-slate-200">
      <div className={`flex items-center p-4 ${cardBg}`}>
        <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center mr-3`}>
          <span className={`text-xl ${iconColor}`}>{icon}</span>
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">{mealTypeLabels[mealType]}</h4>
          <p className="text-sm text-slate-600">{time} - {meal.calories} kcal</p>
        </div>
      </div>
      
      <CardContent className="p-4">
        <img 
          src={meal.image} 
          alt={meal.name}
          className="w-full h-40 object-cover rounded-lg mb-3"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            e.currentTarget.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200`;
          }}
        />
        
        <h5 className="font-semibold text-slate-800 mb-2">{meal.name}</h5>
        <p className="text-sm text-slate-600 mb-3">{meal.description}</p>
        
        <div className={`${benefitBg} rounded-lg p-3`}>
          <h6 className={`text-sm font-medium ${benefitTitleColor} mb-1`}>💡 Beneficios para tu estado de ánimo:</h6>
          <p className={`text-sm ${benefitTextColor}`}>{meal.benefits}</p>
        </div>
      </CardContent>
    </Card>
  );
}
