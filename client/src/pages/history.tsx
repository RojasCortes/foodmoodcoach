import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Utensils, ArrowLeft, Clock, TrendingUp, TrendingDown } from 'lucide-react';
import BottomNavigation from '@/components/bottom-navigation';
import { getUserFromLocalStorage, getWeightEntries, getRecommendationsHistory } from '@/lib/local-storage';
import { useLocation } from 'wouter';
import { format, subDays } from 'date-fns';
import { t, formatDate, formatShortDate } from '@/lib/i18n';
import { useLanguage } from '@/hooks/use-language';
import { getTranslatedRecipe } from '@/lib/recipe-translations';
import type { DailyRecommendation, MealRecommendation, WeightEntry } from '@shared/schema';

export default function History() {
  const [, navigate] = useLocation();
  const { language } = useLanguage();
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [weightEntries, setWeightEntries] = useState<WeightEntry[]>([]);
  const [recommendationsHistory, setRecommendationsHistory] = useState<DailyRecommendation[]>([]);
  const [weightLoading, setWeightLoading] = useState(true);
  const [recommendationsLoading, setRecommendationsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    // Load weight entries from localStorage
    const entries = getWeightEntries(user.id);
    setWeightEntries(entries);
    setWeightLoading(false);

    // Load recommendations history from localStorage
    const recommendations = getRecommendationsHistory(user.id, 7);
    setRecommendationsHistory(recommendations);
    setRecommendationsLoading(false);
  }, [user, navigate]);

  if (!user) return null;

  return (
    <>
      {/* Header */}
      <header
        className="bg-primary text-white p-4 sticky top-0 z-50"
        style={{
          paddingTop: 'calc(1rem + env(safe-area-inset-top))',
          paddingLeft: 'calc(1rem + env(safe-area-inset-left))',
          paddingRight: 'calc(1rem + env(safe-area-inset-right))'
        }}
      >
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/20 p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Calendar className="h-6 w-6" />
          <h1 className="text-xl font-semibold">{t('history')}</h1>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 pb-20">
        <div className="w-full space-y-6">
          
          <Tabs defaultValue="recommendations" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="recommendations" className="flex items-center gap-2">
                <Utensils className="h-4 w-4" />
{t('recommendations')}
              </TabsTrigger>
              <TabsTrigger value="weight" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
{t('weightTracker')}
              </TabsTrigger>
            </TabsList>

            {/* Recommendations History */}
            <TabsContent value="recommendations" className="space-y-4">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">{t('menuHistory')}</h2>
                <p className="text-slate-600">{t('lastDaysRecommendations')}</p>
              </div>

              {recommendationsLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="animate-pulse space-y-3">
                          <div className="h-4 bg-slate-200 rounded w-32"></div>
                          <div className="space-y-2">
                            <div className="h-3 bg-slate-200 rounded"></div>
                            <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                  {recommendationsHistory.map(({ date, recommendation }) => {
                    const meals = recommendation ? [
                      { type: 'breakfast', data: recommendation.breakfast },
                      { type: 'lunch', data: recommendation.lunch },
                      { type: 'dinner', data: recommendation.dinner }
                    ].filter(m => m.data) : [];

                    return (
                      <Card key={date} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            {formatDate(new Date(date))}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          {meals.length === 0 ? (
                            <p className="text-slate-500 text-sm">{t('noRecommendationsForDay')}</p>
                          ) : (
                            meals.map((meal, index) => {
                              const rec = meal.data as MealRecommendation;
                              // Get translated recipe if recipeKey exists
                              const translatedRecipe = rec.recipeKey 
                                ? getTranslatedRecipe(rec.recipeKey, language) 
                                : null;
                              const displayName = translatedRecipe?.name || rec.name || (rec as any).dishName;
                              const displayBenefits = translatedRecipe?.benefits || rec.benefits;
                              
                              return (
                                <div key={index} className="p-3 bg-slate-50 rounded-lg">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-primary capitalize">
                                      {meal.type === 'breakfast' ? t('breakfast') : 
                                       meal.type === 'lunch' ? t('lunch') : t('dinner')}
                                    </span>
                                    <Clock className="h-3 w-3 text-slate-400" />
                                  </div>
                                  <h4 className="font-semibold text-slate-800 mb-1">{displayName}</h4>
                                  <p className="text-sm text-slate-600 line-clamp-2">{displayBenefits}</p>
                                  <div className="mt-2 text-xs text-slate-500">
                                    {rec.calories} {t('calories')} • {rec.protein}g {t('protein')}
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </TabsContent>

            {/* Weight History */}
            <TabsContent value="weight" className="space-y-4">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">{t('weightHistory')}</h2>
                <p className="text-slate-600">{t('allWeightRecords')}</p>
              </div>

              {weightLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="animate-pulse flex justify-between items-center">
                          <div>
                            <div className="h-4 bg-slate-200 rounded w-16 mb-1"></div>
                            <div className="h-3 bg-slate-200 rounded w-24"></div>
                          </div>
                          <div className="h-4 bg-slate-200 rounded w-12"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (weightEntries as any[]).length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center text-slate-600">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-slate-400" />
                    <p>{t('noWeightRecords')}</p>
                    <p className="text-sm mt-1">{t('addFirstRecord')}</p>
                    <Button 
                      className="mt-4"
                      onClick={() => navigate('/weight-tracker')}
                    >
                      {t('goToTracker')}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {(weightEntries as any[]).map((entry: any, index: number) => {
                    const previousEntry = (weightEntries as any[])[index + 1];
                    const change = previousEntry ? entry.weight - previousEntry.weight : 0;
                    
                    return (
                      <Card key={entry.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold text-slate-800">
                                {entry.weight.toFixed(1)} kg
                              </div>
                              <div className="text-sm text-slate-600">
                                {formatDate(new Date(entry.recordedAt))}
                              </div>
                              <div className="text-xs text-slate-500 mt-1">
                                {format(new Date(entry.recordedAt), 'HH:mm')}
                              </div>
                            </div>
                            {change !== 0 && (
                              <div className={`flex items-center text-sm font-medium ${
                                change > 0 ? 'text-red-600' : 'text-green-600'
                              }`}>
                                {change > 0 ? 
                                  <TrendingUp className="h-4 w-4 mr-1" /> : 
                                  <TrendingDown className="h-4 w-4 mr-1" />
                                }
                                {change > 0 ? '+' : ''}{change.toFixed(1)} kg
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <BottomNavigation currentScreen="history" />
    </>
  );
}