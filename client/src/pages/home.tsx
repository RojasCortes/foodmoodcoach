import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Menu, RotateCcw } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";
import { getUserFromLocalStorage, updateUserInLocalStorage } from "@/lib/local-storage";
import { generateDailyRecommendations } from "@/lib/food-recommendations";
import MealCard from "@/components/meal-card";
import BottomNavigation from "@/components/bottom-navigation";
import AdSpace from "@/components/ad-space";
import type { User, DailyRecommendation } from "@shared/schema";

export default function Home() {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(null);
  const [currentDate] = useState(() => new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const userData = getUserFromLocalStorage();
    setUser(userData);
  }, []);

  // Fetch latest weight
  const { data: latestWeight } = useQuery({
    queryKey: ['/api/users', user?.id, 'latest-weight'],
    enabled: !!user?.id,
  });

  // Fetch today's recommendations
  const { data: todayRecommendations, isLoading: recommendationsLoading } = useQuery({
    queryKey: ['/api/users', user?.id, 'recommendations', currentDate],
    enabled: !!user?.id,
  });

  // Generate recommendations mutation
  const generateRecommendationsMutation = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error('No user found');
      
      const recommendations = generateDailyRecommendations(user.currentMood || 'neutral', user.goal);
      
      const dailyRecommendation = {
        userId: user.id,
        date: currentDate,
        mood: user.currentMood || 'neutral',
        breakfast: recommendations.breakfast,
        lunch: recommendations.lunch,
        dinner: recommendations.dinner,
        totalCalories: recommendations.totalCalories,
        totalProtein: recommendations.totalProtein,
        totalFiber: recommendations.totalFiber,
      };

      const response = await apiRequest('POST', `/api/users/${user.id}/recommendations`, dailyRecommendation);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/users', user?.id, 'recommendations', currentDate] });
      toast({
        title: "¡Menú actualizado!",
        description: "Se han generado nuevas recomendaciones para hoy.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo actualizar el menú. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  // Generate initial recommendations if none exist
  useEffect(() => {
    if (user && !todayRecommendations && !recommendationsLoading && !generateRecommendationsMutation.isPending) {
      generateRecommendationsMutation.mutate();
    }
  }, [user, todayRecommendations, recommendationsLoading]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const currentWeight = latestWeight?.weight || user.initialWeight;
  const progressToGoal = user.goalWeight - currentWeight;

  return (
    <>
      {/* Header */}
      <header className="bg-primary text-white p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Utensils className="h-6 w-6" />
            <h1 className="text-xl font-semibold">FoodMood</h1>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-green-600">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="p-6 space-y-6 pb-20">
        
        {/* User Status Card */}
        <div className="bg-gradient-to-r from-primary to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">¡Hola, {user.name}!</h2>
              <p className="text-green-100">¿Cómo te sientes hoy?</p>
            </div>
            <div className="text-3xl">
              {user.currentMood === 'happy' && '😊'}
              {user.currentMood === 'sad' && '😔'}
              {user.currentMood === 'energetic' && '⚡'}
              {user.currentMood === 'calm' && '😌'}
              {user.currentMood === 'stressed' && '😰'}
              {user.currentMood === 'neutral' && '😐'}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-1 bg-white/20 rounded-lg p-3">
              <div className="text-sm text-green-100">Peso actual</div>
              <div className="text-xl font-semibold">{currentWeight.toFixed(1)} kg</div>
            </div>
            <div className="flex-1 bg-white/20 rounded-lg p-3">
              <div className="text-sm text-green-100">Meta</div>
              <div className="text-xl font-semibold">{user.goalWeight.toFixed(1)} kg</div>
            </div>
          </div>
        </div>

        {/* Ad Space 1 */}
        <AdSpace size="banner" />

        {/* Daily Menu Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Menú de Hoy</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => generateRecommendationsMutation.mutate()}
              disabled={generateRecommendationsMutation.isPending}
              className="text-primary font-medium"
            >
              <RotateCcw className={`h-4 w-4 mr-1 ${generateRecommendationsMutation.isPending ? 'animate-spin' : ''}`} />
              Actualizar
            </Button>
          </div>

          {recommendationsLoading || generateRecommendationsMutation.isPending ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                  <div className="animate-pulse">
                    <div className="h-4 bg-slate-200 rounded w-1/4 mb-2"></div>
                    <div className="h-40 bg-slate-200 rounded mb-3"></div>
                    <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-slate-200 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : todayRecommendations ? (
            <>
              <MealCard
                meal={todayRecommendations.breakfast}
                mealType="breakfast"
                icon="☀️"
                iconBg="bg-amber-100"
                iconColor="text-amber-600"
                cardBg="bg-amber-50"
                benefitBg="bg-amber-50"
                benefitTextColor="text-amber-700"
                benefitTitleColor="text-amber-800"
                time="8:00 AM"
              />

              <MealCard
                meal={todayRecommendations.lunch}
                mealType="lunch"
                icon="☀️"
                iconBg="bg-orange-100"
                iconColor="text-orange-600"
                cardBg="bg-orange-50"
                benefitBg="bg-blue-50"
                benefitTextColor="text-blue-700"
                benefitTitleColor="text-blue-800"
                time="1:00 PM"
              />

              {/* Ad Space 2 */}
              <AdSpace size="banner" />

              <MealCard
                meal={todayRecommendations.dinner}
                mealType="dinner"
                icon="🌙"
                iconBg="bg-purple-100"
                iconColor="text-purple-600"
                cardBg="bg-purple-50"
                benefitBg="bg-purple-50"
                benefitTextColor="text-purple-700"
                benefitTitleColor="text-purple-800"
                time="7:00 PM"
              />
            </>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-slate-600">No hay recomendaciones disponibles para hoy.</p>
                <Button 
                  onClick={() => generateRecommendationsMutation.mutate()}
                  className="mt-4"
                >
                  Generar Recomendaciones
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Daily Totals */}
          {todayRecommendations && (
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold text-slate-800 mb-3">Resumen del día</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{todayRecommendations.totalCalories}</div>
                    <div className="text-sm text-slate-600">Calorías</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{todayRecommendations.totalProtein.toFixed(0)}g</div>
                    <div className="text-sm text-slate-600">Proteína</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{todayRecommendations.totalFiber.toFixed(0)}g</div>
                    <div className="text-sm text-slate-600">Fibra</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <BottomNavigation currentScreen="dashboard" />
    </>
  );
}
