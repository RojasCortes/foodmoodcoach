import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Utensils, Plus, TrendingDown, TrendingUp } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";
import { getUserFromLocalStorage } from "@/lib/local-storage";
import BottomNavigation from "@/components/bottom-navigation";
import WeightChart from "@/components/weight-chart";
import AdSpace from "@/components/ad-space";
import type { User, WeightEntry } from "@shared/schema";

export default function WeightTracker() {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(null);
  const [isAddWeightOpen, setIsAddWeightOpen] = useState(false);
  const [newWeight, setNewWeight] = useState('');

  useEffect(() => {
    const userData = getUserFromLocalStorage();
    setUser(userData);
  }, []);

  // Fetch weight entries
  const { data: weightEntries = [], isLoading } = useQuery({
    queryKey: ['/api/users', user?.id, 'weight-entries'],
    enabled: !!user?.id,
  });

  // Add weight mutation
  const addWeightMutation = useMutation({
    mutationFn: async (weight: number) => {
      if (!user) throw new Error('No user found');
      
      const response = await apiRequest('POST', `/api/users/${user.id}/weight-entries`, {
        weight
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/users', user?.id, 'weight-entries'] });
      queryClient.invalidateQueries({ queryKey: ['/api/users', user?.id, 'latest-weight'] });
      setIsAddWeightOpen(false);
      setNewWeight('');
      toast({
        title: "¡Peso registrado!",
        description: "Tu peso ha sido guardado exitosamente.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo registrar el peso. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  const handleAddWeight = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weight = parseFloat(newWeight);
    if (isNaN(weight) || weight < 30 || weight > 300) {
      toast({
        title: "Peso inválido",
        description: "El peso debe estar entre 30 y 300 kg.",
        variant: "destructive",
      });
      return;
    }

    addWeightMutation.mutate(weight);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const currentWeight = weightEntries[0]?.weight || user.initialWeight;
  const weightChange = weightEntries.length > 1 ? currentWeight - weightEntries[1].weight : 0;
  const goalRemaining = Math.abs(user.goalWeight - currentWeight);

  return (
    <>
      {/* Header */}
      <header className="bg-primary text-white p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Utensils className="h-6 w-6" />
            <h1 className="text-xl font-semibold">FoodMood</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-6 space-y-6 pb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">Seguimiento de Peso</h2>
          <Dialog open={isAddWeightOpen} onOpenChange={setIsAddWeightOpen}>
            <DialogTrigger asChild>
              <Button className="font-medium">
                <Plus className="h-4 w-4 mr-2" />
                Agregar
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Registrar Peso</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddWeight} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Peso (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    value={newWeight}
                    onChange={(e) => setNewWeight(e.target.value)}
                    placeholder="65.0"
                    className="text-center text-2xl font-semibold"
                    required
                  />
                </div>
                
                <div className="text-center text-sm text-slate-600">
                  <span>Hoy, {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setIsAddWeightOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1"
                    disabled={addWeightMutation.isPending}
                  >
                    {addWeightMutation.isPending ? 'Guardando...' : 'Guardar'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Weight Chart */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-800 mb-4">Progreso últimos 7 días</h3>
            
            <WeightChart entries={weightEntries.slice(0, 7)} />
            
            <div className="grid grid-cols-3 gap-4 mt-4 text-center">
              <div>
                <div className="text-lg font-semibold text-slate-800">{currentWeight.toFixed(1)} kg</div>
                <div className="text-sm text-slate-600">Actual</div>
              </div>
              <div>
                <div className={`text-lg font-semibold flex items-center justify-center ${
                  weightChange > 0 ? 'text-red-600' : weightChange < 0 ? 'text-green-600' : 'text-slate-600'
                }`}>
                  {weightChange !== 0 && (
                    weightChange > 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {weightChange > 0 ? '+' : ''}{weightChange.toFixed(1)} kg
                </div>
                <div className="text-sm text-slate-600">Cambio</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-secondary">{goalRemaining.toFixed(1)} kg</div>
                <div className="text-sm text-slate-600">Restante</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Entries */}
        <Card>
          <CardContent className="p-0">
            <div className="p-4 border-b border-slate-200">
              <h3 className="font-semibold text-slate-800">Registros Recientes</h3>
            </div>
            
            {isLoading ? (
              <div className="p-4">
                <div className="animate-pulse space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <div className="h-4 bg-slate-200 rounded w-16 mb-1"></div>
                        <div className="h-3 bg-slate-200 rounded w-24"></div>
                      </div>
                      <div className="h-4 bg-slate-200 rounded w-12"></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : weightEntries.length === 0 ? (
              <div className="p-8 text-center text-slate-600">
                <p>No hay registros de peso aún.</p>
                <p className="text-sm mt-1">Agrega tu primer registro para comenzar el seguimiento.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-200">
                {weightEntries.slice(0, 10).map((entry, index) => {
                  const previousEntry = weightEntries[index + 1];
                  const change = previousEntry ? entry.weight - previousEntry.weight : 0;
                  
                  return (
                    <div key={entry.id} className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-slate-800">{entry.weight.toFixed(1)} kg</div>
                        <div className="text-sm text-slate-600">
                          {new Date(entry.recordedAt!).toLocaleDateString('es-ES', {
                            weekday: 'long',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                      {change !== 0 && (
                        <div className={`text-sm font-medium flex items-center ${
                          change > 0 ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {change > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                          {change > 0 ? '+' : ''}{change.toFixed(1)} kg
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Ad Space */}
        <AdSpace size="large" />
      </div>

      <BottomNavigation currentScreen="weightTracker" />
    </>
  );
}
