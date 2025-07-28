import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Utensils, ArrowLeft, Clock, TrendingUp, TrendingDown } from 'lucide-react';
import BottomNavigation from '@/components/bottom-navigation';
import { getUserFromLocalStorage } from '@/lib/local-storage';
import { useLocation } from 'wouter';
import { format, subDays } from 'date-fns';
import { es } from 'date-fns/locale';

export default function History() {
  const [, navigate] = useLocation();
  const [user, setUser] = useState(getUserFromLocalStorage());
  
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  // Fetch weight history
  const { data: weightEntries = [], isLoading: weightLoading } = useQuery({
    queryKey: ['/api/users', user?.id, 'weight-entries'],
    enabled: !!user?.id
  });

  // Fetch recommendations history for last 7 days
  const { data: recommendationsHistory = [], isLoading: recommendationsLoading } = useQuery({
    queryKey: ['/api/users', user?.id, 'recommendations-history'],
    queryFn: async () => {
      const promises = [];
      for (let i = 0; i < 7; i++) {
        const date = format(subDays(new Date(), i), 'yyyy-MM-dd');
        promises.push(
          fetch(`/api/users/${user!.id}/recommendations/${date}`)
            .then(res => res.json())
            .then(data => ({ date, recommendations: data }))
            .catch(() => ({ date, recommendations: [] }))
        );
      }
      return Promise.all(promises);
    },
    enabled: !!user?.id
  });

  if (!user) return null;

  return (
    <>
      {/* Header */}
      <header className="bg-primary text-white p-4 sticky top-0 z-50">
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
          <h1 className="text-xl font-semibold">Historial</h1>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 pb-20">
        <div className="w-full space-y-6">
          
          <Tabs defaultValue="recommendations" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="recommendations" className="flex items-center gap-2">
                <Utensils className="h-4 w-4" />
                Recomendaciones
              </TabsTrigger>
              <TabsTrigger value="weight" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Peso
              </TabsTrigger>
            </TabsList>

            {/* Recommendations History */}
            <TabsContent value="recommendations" className="space-y-4">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Historial de Menús</h2>
                <p className="text-slate-600">Últimos 7 días de recomendaciones</p>
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
                  {recommendationsHistory.map(({ date, recommendations }) => (
                    <Card key={date} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          {format(new Date(date), 'EEEE, d MMMM', { locale: es })}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {recommendations.length === 0 ? (
                          <p className="text-slate-500 text-sm">Sin recomendaciones para este día</p>
                        ) : (
                          recommendations.map((rec: any, index: number) => (
                            <div key={index} className="p-3 bg-slate-50 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-primary capitalize">
                                  {rec.mealType === 'breakfast' ? 'Desayuno' : 
                                   rec.mealType === 'lunch' ? 'Almuerzo' : 'Cena'}
                                </span>
                                <Clock className="h-3 w-3 text-slate-400" />
                              </div>
                              <h4 className="font-semibold text-slate-800 mb-1">{rec.dishName}</h4>
                              <p className="text-sm text-slate-600 line-clamp-2">{rec.benefits}</p>
                              <div className="mt-2 text-xs text-slate-500">
                                {rec.calories} cal • {rec.protein}g proteína
                              </div>
                            </div>
                          ))
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Weight History */}
            <TabsContent value="weight" className="space-y-4">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Historial de Peso</h2>
                <p className="text-slate-600">Todos tus registros de peso</p>
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
                    <p>No hay registros de peso aún.</p>
                    <p className="text-sm mt-1">Ve al tracker de peso para agregar tu primer registro.</p>
                    <Button 
                      className="mt-4"
                      onClick={() => navigate('/weight-tracker')}
                    >
                      Ir al Tracker
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
                                {format(new Date(entry.recordedAt), 'EEEE, d MMMM', { locale: es })}
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