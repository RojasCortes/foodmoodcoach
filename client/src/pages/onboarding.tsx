import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocation } from "wouter";
import { Utensils, Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { createUser } from "@/lib/local-storage";
import { t } from "@/lib/i18n";
import { useLanguage } from "@/hooks/use-language";
import type { InsertUser, Mood, Goal } from "@shared/schema";

function getMoods() {
  return [
    { value: 'happy' as Mood, emoji: '😊', label: t('happy') },
    { value: 'sad' as Mood, emoji: '😔', label: t('sad') },
    { value: 'energetic' as Mood, emoji: '⚡', label: t('energetic') },
    { value: 'calm' as Mood, emoji: '😌', label: t('calm') },
    { value: 'stressed' as Mood, emoji: '😰', label: t('stressed') },
    { value: 'neutral' as Mood, emoji: '😐', label: t('neutral') }
  ];
}

function getGoals() {
  return [
    { value: 'lose' as Goal, title: t('loseWeight'), description: t('loseWeightDesc') },
    { value: 'maintain' as Goal, title: t('maintainWeight'), description: t('maintainWeightDesc') },
    { value: 'gain' as Goal, title: t('gainWeight'), description: t('gainWeightDesc'), warning: true }
  ];
}

export default function Onboarding() {
  const [, navigate] = useLocation();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    height: '',
    weight: '',
    goal: '' as Goal,
    mood: '' as Mood
  });

  const moods = getMoods();
  const goals = getGoals();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.height || !formData.weight || !formData.goal || !formData.mood) {
      toast({
        title: t('requiredFields'),
        description: t('requiredFields'),
        variant: "destructive",
      });
      return;
    }

    const height = parseInt(formData.height);
    const weight = parseFloat(formData.weight);

    if (height < 100 || height > 250) {
      toast({
        title: t('error'),
        description: t('invalidHeight'),
        variant: "destructive",
      });
      return;
    }

    if (weight < 30 || weight > 300) {
      toast({
        title: t('error'),
        description: t('invalidWeight'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
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

      // Create user directly in localStorage (offline mode)
      console.log('[Onboarding] Creating user offline:', userData);
      createUser(userData);

      toast({
        title: t('profileCreated'),
        description: t('profileCreated'),
      });

      // Navigate to home
      setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error('[Onboarding] Error creating user:', error);
      toast({
        title: t('error'),
        description: t('errorCreatingProfile'),
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

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
          <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('welcome')}</h2>
          <p className="text-slate-600">{t('welcomeSubtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-lg text-slate-800 mb-4">{t('personalInfo')}</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('name')}</Label>
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
                    <Label htmlFor="weight">{t('weight')}</Label>
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
                    <Label htmlFor="height">{t('height')}</Label>
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
              <h3 className="font-semibold text-lg text-slate-800 mb-4">{t('whatIsYourGoal')}</h3>
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
              <h3 className="font-semibold text-lg text-slate-800 mb-4">{t('howDoYouFeelToday')}</h3>
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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {t('creatingProfile')}
              </>
            ) : (
              t('startHealthyJourney')
            )}
          </Button>
        </form>
        </div>
      </div>
    </>
  );
}
