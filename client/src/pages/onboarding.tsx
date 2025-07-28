import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocation } from "wouter";
import { Utensils, Heart } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";
import { saveUserToLocalStorage } from "@/lib/local-storage";
import type { InsertUser, Mood, Goal } from "@shared/schema";

const moods: { value: Mood; emoji: string; label: string }[] = [
  { value: 'happy', emoji: '😊', label: 'Feliz' },
  { value: 'sad', emoji: '😔', label: 'Triste' },
  { value: 'energetic', emoji: '⚡', label: 'Enérgico' },
  { value: 'calm', emoji: '😌', label: 'Tranquilo' },
  { value: 'stressed', emoji: '😰', label: 'Estresado' },
  { value: 'neutral', emoji: '😐', label: 'Normal' }
];

const goals: { value: Goal; title: string; description: string; warning?: boolean }[] = [
  { value: 'lose', title: 'Perder peso', description: 'Estar más delgado/a' },
  { value: 'maintain', title: 'Mantener peso', description: 'Peso normal y saludable' },
  { value: 'gain', title: 'Subir de peso', description: 'Con precaución', warning: true }
];

export default function Onboarding() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    height: '',
    weight: '',
    goal: '' as Goal,
    mood: '' as Mood
  });

  const createUserMutation = useMutation({
    mutationFn: async (userData: InsertUser) => {
      const response = await apiRequest('POST', '/api/users', userData);
      return response.json();
    },
    onSuccess: (user) => {
      saveUserToLocalStorage(user);
      toast({
        title: "¡Perfil creado!",
        description: "Tu perfil ha sido configurado exitosamente.",
      });
      navigate('/');
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "No se pudo crear tu perfil. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.height || !formData.weight || !formData.goal || !formData.mood) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos.",
        variant: "destructive",
      });
      return;
    }

    const height = parseInt(formData.height);
    const weight = parseFloat(formData.weight);
    
    if (height < 100 || height > 250) {
      toast({
        title: "Altura inválida",
        description: "La altura debe estar entre 100 y 250 cm.",
        variant: "destructive",
      });
      return;
    }

    if (weight < 30 || weight > 300) {
      toast({
        title: "Peso inválido",
        description: "El peso debe estar entre 30 y 300 kg.",
        variant: "destructive",
      });
      return;
    }

    // Calculate goal weight based on BMI recommendations
    const bmi = weight / ((height / 100) ** 2);
    let goalWeight = weight;
    
    if (formData.goal === 'lose') {
      goalWeight = Math.max(weight * 0.9, (height / 100) ** 2 * 22); // 10% loss or healthy BMI
    } else if (formData.goal === 'gain') {
      goalWeight = Math.min(weight * 1.1, (height / 100) ** 2 * 24); // 10% gain or healthy BMI
    }

    const userData: InsertUser = {
      name: formData.name,
      height,
      initialWeight: weight,
      goalWeight,
      goal: formData.goal,
      currentMood: formData.mood
    };

    createUserMutation.mutate(userData);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-primary text-white p-4 sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Utensils className="h-6 w-6" />
          <h1 className="text-xl font-semibold">FoodMood</h1>
        </div>
      </header>

      {/* Onboarding Content */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 space-y-6 pb-20">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">¡Bienvenido a FoodMood!</h2>
          <p className="text-slate-600">Configuremos tu perfil para recomendaciones personalizadas</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-lg text-slate-800 mb-4">Información Personal</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Peso (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      value={formData.weight}
                      onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                      placeholder="65.0"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Altura (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={formData.height}
                      onChange={(e) => setFormData(prev => ({ ...prev, height: e.target.value }))}
                      placeholder="170"
                      required
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Goal Selection */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-slate-800 mb-4">¿Cuál es tu meta?</h3>
              <RadioGroup 
                value={formData.goal} 
                onValueChange={(value: Goal) => setFormData(prev => ({ ...prev, goal: value }))}
                className="space-y-3"
              >
                {goals.map((goal) => (
                  <div key={goal.value} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-white transition-colors">
                    <RadioGroupItem value={goal.value} id={goal.value} />
                    <div className="flex-1">
                      <Label htmlFor={goal.value} className="font-medium text-slate-800 cursor-pointer">
                        {goal.title}
                      </Label>
                      <div className={`text-sm ${goal.warning ? 'text-amber-600' : 'text-slate-600'}`}>
                        {goal.warning && '⚠️ '}{goal.description}
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Mood Selection */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-slate-800 mb-4">¿Cómo te sientes hoy?</h3>
              <div className="grid grid-cols-3 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, mood: mood.value }))}
                    className={`p-4 rounded-xl border-2 transition-colors ${
                      formData.mood === mood.value 
                        ? `mood-${mood.value} border-current` 
                        : 'border-transparent hover:border-slate-200'
                    }`}
                  >
                    <div className="text-3xl mb-2">{mood.emoji}</div>
                    <div className="text-sm font-medium">{mood.label}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button 
            type="submit" 
            className="w-full py-4 text-lg font-semibold"
            disabled={createUserMutation.isPending}
          >
            {createUserMutation.isPending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Creando perfil...
              </>
            ) : (
              'Comenzar mi viaje saludable'
            )}
          </Button>
        </form>
        </div>
      </div>
    </>
  );
}
