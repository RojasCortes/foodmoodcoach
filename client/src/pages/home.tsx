import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Menu, RotateCcw } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";
import { getUserFromLocalStorage, updateUserInLocalStorage } from "@/lib/local-storage";
import { generateDailyRecommendations } from "@/lib/food-recommendations-new";
import MealCard from "@/components/meal-card";
import BottomNavigation from "@/components/bottom-navigation";
import AdSpace from "@/components/ad-space";
import { t } from "@/lib/i18n";
import { useLanguage } from "@/hooks/use-language";
import type { User, DailyRecommendation, WeightEntry, Mood, Goal, MealRecommendation } from "@shared/schema";

export default function Home() {
  const queryClient = useQueryClient();
  const { language } = useLanguage();
  const [user, setUser] = useState<User | null>(null);
  const [currentDate] = useState(() => new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const userData = getUserFromLocalStorage();
    setUser(userData);
  }, []);

  // Fetch latest weight
  const { data: latestWeight } = useQuery<WeightEntry>({
    queryKey: ['/api/users', user?.id, 'latest-weight'],
    enabled: !!user?.id,
  });

  // Fetch today's recommendations
  const { data: todayRecommendations, isLoading: recommendationsLoading } = useQuery<DailyRecommendation>({
    queryKey: ['/api/users', user?.id, 'recommendations', currentDate],
    enabled: !!user?.id,
  });

  // Generate recommendations mutation
  const generateRecommendationsMutation = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error('No user found');
      
      const recommendations = generateDailyRecommendations((user.currentMood as Mood) || 'neutral', user.goal as Goal);
      
      const dailyRecommendation = {
        userId: user.id,
        date: currentDate,
        mood: (user.currentMood as Mood) || 'neutral',
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
        title: t('menuUpdated'),
        description: t('newRecommendationsGenerated'),
      });
    },
    onError: () => {
      toast({
        title: t('error'),
        description: t('errorUpdatingMenu'),
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

  return (
    <>
      {/* Header */}
      <header className="bg-primary text-white p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Utensils className="h-6 w-6" />
            <h1 className="text-xl font-semibold">FoodMood</h1>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-green-600"
            onClick={() => window.location.href = '/profile'}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 pb-20">
        <div className="w-full space-y-6">
        
          {/* User Status Card */}
          <div className="bg-gradient-to-r from-primary to-green-600 rounded-xl p-4 sm:p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">{t('hello')}, {user.name}!</h2>
                <p className="text-green-100 text-sm sm:text-base lg:text-lg">{t('howDoYouFeel')}</p>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl">
                {user.currentMood === 'happy' && '😊'}
                {user.currentMood === 'sad' && '😔'}
                {user.currentMood === 'energetic' && '⚡'}
                {user.currentMood === 'calm' && '😌'}
                {user.currentMood === 'stressed' && '😰'}
                {user.currentMood === 'neutral' && '😐'}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-xs sm:text-sm lg:text-base text-green-100">{t('currentWeight')}</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-semibold">{currentWeight.toFixed(1)} kg</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-xs sm:text-sm lg:text-base text-green-100">{t('goalWeight')}</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-semibold">{user.goalWeight.toFixed(1)} kg</div>
              </div>
            </div>
          </div>

          {/* Layout for larger screens */}
          <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:gap-8 space-y-6 lg:space-y-0">
            <div className="lg:col-span-2 xl:col-span-3 2xl:col-span-4 space-y-6">
              {/* Daily Menu Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800">{t('todaysMenu')}</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => generateRecommendationsMutation.mutate()}
                    disabled={generateRecommendationsMutation.isPending}
                    className="text-primary font-medium"
                  >
                    <RotateCcw className={`h-4 w-4 mr-1 ${generateRecommendationsMutation.isPending ? 'animate-spin' : ''}`} />
{t('updateMenu')}
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
                ) : todayRecommendations && todayRecommendations.breakfast ? (
                  <>
                    <MealCard
                      meal={todayRecommendations.breakfast as MealRecommendation}
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
                      meal={todayRecommendations.lunch as MealRecommendation}
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

                    <MealCard
                      meal={todayRecommendations.dinner as MealRecommendation}
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
                      <p className="text-slate-600">{t('noRecommendations')}</p>
                      <Button 
                        onClick={() => generateRecommendationsMutation.mutate()}
                        className="mt-4"
                      >
{t('generateRecommendations')}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Sidebar for larger screens */}
            <div className="space-y-6">
              {/* Ad Space 1 */}
              <AdSpace size="banner" />

              {/* Daily Totals */}
              {todayRecommendations && (
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-3">{t('dailySummary')}</h4>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{todayRecommendations.totalCalories || 0}</div>
                        <div className="text-sm text-slate-600">{t('calories')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">{todayRecommendations.totalProtein ? todayRecommendations.totalProtein.toFixed(0) : 0}g</div>
                        <div className="text-sm text-slate-600">{t('protein')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{todayRecommendations.totalFiber ? todayRecommendations.totalFiber.toFixed(0) : 0}g</div>
                        <div className="text-sm text-slate-600">{t('fiber')}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Ad Space 2 */}
              <AdSpace size="large" />
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation currentScreen="dashboard" />
    </>
  );
}