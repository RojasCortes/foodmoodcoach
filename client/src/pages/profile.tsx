import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { User, ArrowLeft, Settings, Globe, Trash2, Edit3, Save, X } from 'lucide-react';
import BottomNavigation from '@/components/bottom-navigation';
import { getUserFromLocalStorage, saveUserToLocalStorage, clearUserFromLocalStorage } from '@/lib/local-storage';
import { useLocation } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import type { Goal, Mood } from '@shared/schema';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' }
];

const goals: { value: Goal; title: string; description: string }[] = [
  { value: 'lose', title: 'Perder peso', description: 'Estar más delgado/a' },
  { value: 'maintain', title: 'Mantener peso', description: 'Peso normal y saludable' },
  { value: 'gain', title: 'Subir de peso', description: 'Aumentar masa corporal' }
];

const moods: { value: Mood; emoji: string; label: string }[] = [
  { value: 'happy', emoji: '😊', label: 'Feliz' },
  { value: 'sad', emoji: '😔', label: 'Triste' },
  { value: 'energetic', emoji: '⚡', label: 'Enérgico' },
  { value: 'calm', emoji: '😌', label: 'Tranquilo' },
  { value: 'stressed', emoji: '😰', label: 'Estresado' },
  { value: 'neutral', emoji: '😐', label: 'Normal' }
];

export default function Profile() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('foodmood_language') || 'es');
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    height: user?.height?.toString() || '',
    goalWeight: user?.goalWeight?.toString() || '',
    goal: user?.goal || 'maintain' as Goal,
    currentMood: user?.currentMood || 'neutral' as Mood
  });
  
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const updateUserMutation = useMutation({
    mutationFn: async (userData: any) => {
      const response = await apiRequest('PATCH', `/api/users/${user!.id}`, userData);
      return response.json();
    },
    onSuccess: (updatedUser) => {
      saveUserToLocalStorage(updatedUser);
      setUser(updatedUser);
      setIsEditing(false);
      toast({
        title: "Perfil actualizado",
        description: "Tus cambios se han guardado exitosamente.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo actualizar tu perfil. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  const handleSaveChanges = () => {
    const height = parseInt(editForm.height);
    const goalWeight = parseFloat(editForm.goalWeight);
    
    if (height < 100 || height > 250) {
      toast({
        title: "Altura inválida",
        description: "La altura debe estar entre 100 y 250 cm.",
        variant: "destructive",
      });
      return;
    }

    if (goalWeight < 30 || goalWeight > 300) {
      toast({
        title: "Peso meta inválido",
        description: "El peso meta debe estar entre 30 y 300 kg.",
        variant: "destructive",
      });
      return;
    }

    updateUserMutation.mutate({
      name: editForm.name,
      height,
      goalWeight,
      goal: editForm.goal,
      currentMood: editForm.currentMood
    });
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem('foodmood_language', newLanguage);
    toast({
      title: "Idioma cambiado",
      description: `Idioma cambiado a ${languages.find(l => l.code === newLanguage)?.name}`,
    });
  };

  const handleDeleteAccount = () => {
    clearUserFromLocalStorage();
    toast({
      title: "Cuenta eliminada",
      description: "Tu cuenta ha sido eliminada exitosamente.",
    });
    navigate('/');
    window.location.reload();
  };

  const calculateBMI = () => {
    if (!user?.height || !user?.initialWeight) return null;
    const heightInM = user.height / 100;
    return (user.initialWeight / (heightInM * heightInM)).toFixed(1);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Bajo peso', color: 'text-blue-600' };
    if (bmi < 25) return { category: 'Peso normal', color: 'text-green-600' };
    if (bmi < 30) return { category: 'Sobrepeso', color: 'text-yellow-600' };
    return { category: 'Obesidad', color: 'text-red-600' };
  };

  if (!user) return null;

  const bmi = calculateBMI();
  const bmiCategory = bmi ? getBMICategory(parseFloat(bmi)) : null;

  return (
    <>
      {/* Header */}
      <header className="bg-primary text-white p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/20 p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <User className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Perfil</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="text-white hover:bg-white/20"
          >
            {isEditing ? <X className="h-5 w-5" /> : <Edit3 className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 pb-20">
        <div className="w-full space-y-6 max-w-4xl mx-auto">
          
          {/* Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Información Personal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEditing ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Altura (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={editForm.height}
                      onChange={(e) => setEditForm({ ...editForm, height: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goalWeight">Peso Meta (kg)</Label>
                    <Input
                      id="goalWeight"
                      type="number"
                      step="0.1"
                      value={editForm.goalWeight}
                      onChange={(e) => setEditForm({ ...editForm, goalWeight: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Objetivo</Label>
                    <Select value={editForm.goal} onValueChange={(value: Goal) => setEditForm({ ...editForm, goal: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {goals.map((goal) => (
                          <SelectItem key={goal.value} value={goal.value}>
                            {goal.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Estado de Ánimo Actual</Label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {moods.map((mood) => (
                        <button
                          key={mood.value}
                          type="button"
                          onClick={() => setEditForm({ ...editForm, currentMood: mood.value })}
                          className={`p-3 rounded-lg border-2 text-center transition-all ${
                            editForm.currentMood === mood.value
                              ? 'border-primary bg-primary/10'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="text-2xl mb-1">{mood.emoji}</div>
                          <div className="text-xs font-medium">{mood.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 flex gap-2">
                    <Button 
                      onClick={handleSaveChanges}
                      disabled={updateUserMutation.isPending}
                      className="flex-1"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      {updateUserMutation.isPending ? 'Guardando...' : 'Guardar Cambios'}
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setIsEditing(false);
                        setEditForm({
                          name: user.name,
                          height: user.height?.toString() || '',
                          goalWeight: user.goalWeight?.toString() || '',
                          goal: user.goal,
                          currentMood: user.currentMood || 'neutral'
                        });
                      }}
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <div className="text-sm text-slate-600">Nombre</div>
                    <div className="font-semibold text-lg">{user.name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Altura</div>
                    <div className="font-semibold text-lg">{user.height} cm</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Peso Inicial</div>
                    <div className="font-semibold text-lg">{user.initialWeight} kg</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Peso Meta</div>
                    <div className="font-semibold text-lg">{user.goalWeight} kg</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Objetivo</div>
                    <div className="font-semibold text-lg">
                      {goals.find(g => g.value === user.goal)?.title}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Estado de Ánimo</div>
                    <div className="font-semibold text-lg flex items-center gap-2">
                      {moods.find(m => m.value === user.currentMood)?.emoji}
                      {moods.find(m => m.value === user.currentMood)?.label}
                    </div>
                  </div>
                  {bmi && (
                    <div className="md:col-span-2 lg:col-span-3">
                      <div className="text-sm text-slate-600">IMC (Índice de Masa Corporal)</div>
                      <div className="font-semibold text-lg">
                        {bmi} - <span className={bmiCategory?.color || ''}>{bmiCategory?.category}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Configuración
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Idioma</div>
                    <div className="text-sm text-slate-600">Cambiar idioma de la aplicación</div>
                  </div>
                </div>
                <Select value={language} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center gap-2">
                <Trash2 className="h-5 w-5" />
                Zona de Peligro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-red-600">Eliminar Cuenta</div>
                  <div className="text-sm text-slate-600">Elimina permanentemente tu cuenta y todos los datos</div>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                      Eliminar Cuenta
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta acción no se puede deshacer. Se eliminarán permanentemente tu cuenta y todos los datos asociados.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
                        Eliminar Cuenta
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <BottomNavigation currentScreen="profile" />
    </>
  );
}