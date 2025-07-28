// Internationalization system for FoodMood
export type Language = 'es' | 'en' | 'fr' | 'de' | 'it' | 'pt';

export const translations = {
  es: {
    // Navigation
    home: 'Inicio',
    weightTracker: 'Peso',
    history: 'Historial',
    profile: 'Perfil',
    
    // Common
    save: 'Guardar',
    cancel: 'Cancelar',
    edit: 'Editar',
    delete: 'Eliminar',
    close: 'Cerrar',
    back: 'Volver',
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    
    // Onboarding
    welcome: '¡Bienvenido a FoodMood!',
    welcomeSubtitle: 'Configuremos tu perfil para recomendaciones personalizadas',
    personalInfo: 'Información Personal',
    name: 'Nombre',
    height: 'Altura (cm)',
    weight: 'Peso (kg)',
    goal: 'Objetivo',
    currentMood: 'Estado de Ánimo Actual',
    startJourney: 'Comenzar mi viaje saludable',
    
    // Goals
    loseWeight: 'Perder peso',
    maintainWeight: 'Mantener peso',
    gainWeight: 'Subir de peso',
    loseWeightDesc: 'Estar más delgado/a',
    maintainWeightDesc: 'Peso normal y saludable',
    gainWeightDesc: 'Aumentar masa corporal',
    
    // Moods
    happy: 'Feliz',
    sad: 'Triste',
    energetic: 'Enérgico',
    calm: 'Tranquilo',
    stressed: 'Estresado',
    neutral: 'Normal',
    
    // Home
    todayMenu: 'Menú de Hoy',
    generateMenu: 'Generar Nuevo Menú',
    currentWeight: 'Peso Actual',
    goalWeight: 'Peso Meta',
    remaining: 'Restante',
    change: 'Cambio',
    breakfast: 'Desayuno',
    lunch: 'Almuerzo',
    dinner: 'Cena',
    benefits: 'Beneficios',
    calories: 'calorías',
    protein: 'proteína',
    
    // Weight Tracker
    weightTracking: 'Seguimiento de Peso',
    addWeight: 'Agregar Peso',
    progressLast7Days: 'Progreso últimos 7 días',
    recentEntries: 'Registros Recientes',
    noWeightRecords: 'No hay registros de peso aún.',
    addFirstRecord: 'Agrega tu primer registro para comenzar el seguimiento.',
    weightAdded: 'Peso agregado exitosamente',
    
    // History
    menuHistory: 'Historial de Menús',
    weightHistory: 'Historial de Peso',
    recommendations: 'Recomendaciones',
    last7Days: 'Últimos 7 días de recomendaciones',
    allWeightRecords: 'Todos tus registros de peso',
    noRecommendations: 'Sin recomendaciones para este día',
    goToTracker: 'Ir al Tracker',
    
    // Profile
    personalInformation: 'Información Personal',
    settings: 'Configuración',
    language: 'Idioma',
    changeLanguage: 'Cambiar idioma de la aplicación',
    dangerZone: 'Zona de Peligro',
    deleteAccount: 'Eliminar Cuenta',
    deleteAccountDesc: 'Elimina permanentemente tu cuenta y todos los datos',
    deleteConfirm: '¿Estás seguro?',
    deleteWarning: 'Esta acción no se puede deshacer. Se eliminarán permanentemente tu cuenta y todos los datos asociados.',
    initialWeight: 'Peso Inicial',
    objective: 'Objetivo',
    bmi: 'IMC (Índice de Masa Corporal)',
    saveChanges: 'Guardar Cambios',
    saving: 'Guardando...',
    
    // BMI Categories
    underweight: 'Bajo peso',
    normalWeight: 'Peso normal',
    overweight: 'Sobrepeso',
    obesity: 'Obesidad',
    
    // Messages
    profileCreated: 'Perfil creado exitosamente',
    profileUpdated: 'Perfil actualizado exitosamente',
    accountDeleted: 'Cuenta eliminada exitosamente',
    languageChanged: 'Idioma cambiado',
    invalidHeight: 'La altura debe estar entre 100 y 250 cm',
    invalidWeight: 'El peso debe estar entre 30 y 300 kg',
    requiredFields: 'Por favor completa todos los campos',
    errorCreatingProfile: 'No se pudo crear tu perfil. Inténtalo de nuevo.',
    errorUpdatingProfile: 'No se pudo actualizar tu perfil. Inténtalo de nuevo.',
    errorAddingWeight: 'No se pudo registrar el peso. Inténtalo de nuevo.',
    
    // Additional onboarding
    whatIsYourGoal: '¿Cuál es tu meta?',
    howDoYouFeelToday: '¿Cómo te sientes hoy?',
    createProfile: 'Crear Perfil',
    yourName: 'Tu nombre',
    
    // Home page additional
    hello: '¡Hola',
    menuUpdated: '¡Menú actualizado!',
    newRecommendationsGenerated: 'Se han generado nuevas recomendaciones para hoy.',
    errorUpdatingMenu: 'No se pudo actualizar el menú. Inténtalo de nuevo.',
    creatingProfile: 'Creando perfil...',
    startHealthyJourney: 'Comenzar mi viaje saludable',
    
    // Additional home and profile translations
    noRecommendations: 'No hay recomendaciones disponibles para hoy.',
    generateRecommendations: 'Generar Recomendaciones',
    dailySummary: 'Resumen del día',
    calories: 'Calorías',
    protein: 'Proteína',
    fiber: 'Fibra',
    
    // BMI categories
    underweight: 'Bajo peso',
    normalWeight: 'Peso normal',
    overweight: 'Sobrepeso',
    obesity: 'Obesidad',
    
    // Settings
    language: 'Idioma',
    changeLanguage: 'Cambiar idioma de la aplicación',
    moodState: 'Estado de Ánimo',
    
    // Delete account
    dangerZone: 'Zona de Peligro',
    deleteAccount: 'Eliminar Cuenta',
    deleteAccountDesc: 'Elimina permanentemente tu cuenta y todos los datos',
    areYouSure: '¿Estás seguro?',
    deleteAccountWarning: 'Esta acción no se puede deshacer. Se eliminarán permanentemente tu cuenta y todos los datos asociados.',
  },
  
  en: {
    // Navigation
    home: 'Home',
    weightTracker: 'Weight',
    history: 'History',
    profile: 'Profile',
    
    // Common
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    close: 'Close',
    back: 'Back',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    
    // Onboarding
    welcome: 'Welcome to FoodMood!',
    welcomeSubtitle: 'Let\'s set up your profile for personalized recommendations',
    personalInfo: 'Personal Information',
    name: 'Name',
    height: 'Height (cm)',
    weight: 'Weight (kg)',
    goal: 'Goal',
    currentMood: 'Current Mood',
    startJourney: 'Start my healthy journey',
    whatIsYourGoal: 'What is your goal?',
    howDoYouFeelToday: 'How do you feel today?',
    createProfile: 'Create Profile',
    yourName: 'Your name',
    
    // Home page additional
    hello: 'Hello',
    menuUpdated: 'Menu updated!',
    newRecommendationsGenerated: 'New recommendations have been generated for today.',
    errorUpdatingMenu: 'Could not update menu. Please try again.',
    creatingProfile: 'Creating profile...',
    startHealthyJourney: 'Start my healthy journey',
    
    // Additional home and profile translations
    noRecommendations: 'No recommendations available for today.',
    generateRecommendations: 'Generate Recommendations',
    dailySummary: 'Daily Summary',
    calories: 'Calories',
    protein: 'Protein',
    fiber: 'Fiber',
    
    // BMI categories
    underweight: 'Underweight',
    normalWeight: 'Normal weight',
    overweight: 'Overweight',
    obesity: 'Obesity',
    
    // Settings
    language: 'Language',
    changeLanguage: 'Change application language',
    moodState: 'Mood State',
    
    // Delete account
    dangerZone: 'Danger Zone',
    deleteAccount: 'Delete Account',
    deleteAccountDesc: 'Permanently delete your account and all data',
    areYouSure: 'Are you sure?',
    deleteAccountWarning: 'This action cannot be undone. This will permanently delete your account and all associated data.',
    
    // Goals
    loseWeight: 'Lose weight',
    maintainWeight: 'Maintain weight',
    gainWeight: 'Gain weight',
    loseWeightDesc: 'Get slimmer',
    maintainWeightDesc: 'Normal and healthy weight',
    gainWeightDesc: 'Increase body mass',
    
    // Moods
    happy: 'Happy',
    sad: 'Sad',
    energetic: 'Energetic',
    calm: 'Calm',
    stressed: 'Stressed',
    neutral: 'Neutral',
    
    // Home
    todayMenu: 'Today\'s Menu',
    generateMenu: 'Generate New Menu',
    currentWeight: 'Current Weight',
    goalWeight: 'Goal Weight',
    remaining: 'Remaining',
    change: 'Change',
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    benefits: 'Benefits',
    calories: 'calories',
    protein: 'protein',
    
    // Weight Tracker
    weightTracking: 'Weight Tracking',
    addWeight: 'Add Weight',
    progressLast7Days: 'Progress last 7 days',
    recentEntries: 'Recent Entries',
    noWeightRecords: 'No weight records yet.',
    addFirstRecord: 'Add your first record to start tracking.',
    weightAdded: 'Weight added successfully',
    
    // History
    menuHistory: 'Menu History',
    weightHistory: 'Weight History',
    recommendations: 'Recommendations',
    last7Days: 'Last 7 days of recommendations',
    allWeightRecords: 'All your weight records',
    noRecommendations: 'No recommendations for this day',
    goToTracker: 'Go to Tracker',
    
    // Profile
    personalInformation: 'Personal Information',
    settings: 'Settings',
    language: 'Language',
    changeLanguage: 'Change application language',
    dangerZone: 'Danger Zone',
    deleteAccount: 'Delete Account',
    deleteAccountDesc: 'Permanently delete your account and all data',
    deleteConfirm: 'Are you sure?',
    deleteWarning: 'This action cannot be undone. Your account and all associated data will be permanently deleted.',
    initialWeight: 'Initial Weight',
    objective: 'Objective',
    bmi: 'BMI (Body Mass Index)',
    saveChanges: 'Save Changes',
    saving: 'Saving...',
    
    // BMI Categories
    underweight: 'Underweight',
    normalWeight: 'Normal weight',
    overweight: 'Overweight',
    obesity: 'Obesity',
    
    // Messages
    profileCreated: 'Profile created successfully',
    profileUpdated: 'Profile updated successfully',
    accountDeleted: 'Account deleted successfully',
    languageChanged: 'Language changed',
    invalidHeight: 'Height must be between 100 and 250 cm',
    invalidWeight: 'Weight must be between 30 and 300 kg',
    requiredFields: 'Please fill in all fields',
    errorCreatingProfile: 'Could not create your profile. Please try again.',
    errorUpdatingProfile: 'Could not update your profile. Please try again.',
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    weightTracker: 'Poids',
    history: 'Historique',
    profile: 'Profil',
    
    // Common
    save: 'Enregistrer',
    cancel: 'Annuler',
    edit: 'Modifier',
    delete: 'Supprimer',
    close: 'Fermer',
    back: 'Retour',
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    
    // Onboarding
    welcome: 'Bienvenue sur FoodMood !',
    welcomeSubtitle: 'Configurons votre profil pour des recommandations personnalisées',
    personalInfo: 'Informations personnelles',
    name: 'Nom',
    height: 'Taille (cm)',
    weight: 'Poids (kg)',
    goal: 'Objectif',
    currentMood: 'Humeur actuelle',
    startJourney: 'Commencer mon voyage santé',
    
    // Goals
    loseWeight: 'Perdre du poids',
    maintainWeight: 'Maintenir le poids',
    gainWeight: 'Prendre du poids',
    loseWeightDesc: 'Être plus mince',
    maintainWeightDesc: 'Poids normal et sain',
    gainWeightDesc: 'Augmenter la masse corporelle',
    
    // Moods
    happy: 'Heureux',
    sad: 'Triste',
    energetic: 'Énergique',
    calm: 'Calme',
    stressed: 'Stressé',
    neutral: 'Neutre',
    
    // Home
    todayMenu: 'Menu d\'aujourd\'hui',
    generateMenu: 'Générer un nouveau menu',
    currentWeight: 'Poids actuel',
    goalWeight: 'Poids objectif',
    remaining: 'Restant',
    change: 'Changement',
    breakfast: 'Petit-déjeuner',
    lunch: 'Déjeuner',
    dinner: 'Dîner',
    benefits: 'Avantages',
    calories: 'calories',
    protein: 'protéines',
    
    // Weight Tracker
    weightTracking: 'Suivi du poids',
    addWeight: 'Ajouter un poids',
    progressLast7Days: 'Progrès des 7 derniers jours',
    recentEntries: 'Entrées récentes',
    noWeightRecords: 'Aucun enregistrement de poids pour le moment.',
    addFirstRecord: 'Ajoutez votre premier enregistrement pour commencer le suivi.',
    weightAdded: 'Poids ajouté avec succès',
    
    // History
    menuHistory: 'Historique des menus',
    weightHistory: 'Historique du poids',
    recommendations: 'Recommandations',
    last7Days: '7 derniers jours de recommandations',
    allWeightRecords: 'Tous vos enregistrements de poids',
    noRecommendations: 'Aucune recommandation pour ce jour',
    goToTracker: 'Aller au tracker',
    
    // Profile
    personalInformation: 'Informations personnelles',
    settings: 'Paramètres',
    language: 'Langue',
    changeLanguage: 'Changer la langue de l\'application',
    dangerZone: 'Zone dangereuse',
    deleteAccount: 'Supprimer le compte',
    deleteAccountDesc: 'Supprimer définitivement votre compte et toutes les données',
    deleteConfirm: 'Êtes-vous sûr ?',
    deleteWarning: 'Cette action ne peut pas être annulée. Votre compte et toutes les données associées seront définitivement supprimés.',
    initialWeight: 'Poids initial',
    objective: 'Objectif',
    bmi: 'IMC (Indice de masse corporelle)',
    saveChanges: 'Enregistrer les modifications',
    saving: 'Enregistrement...',
    
    // BMI Categories
    underweight: 'Insuffisance pondérale',
    normalWeight: 'Poids normal',
    overweight: 'Surpoids',
    obesity: 'Obésité',
    
    // Messages
    profileCreated: 'Profil créé avec succès',
    profileUpdated: 'Profil mis à jour avec succès',
    accountDeleted: 'Compte supprimé avec succès',
    languageChanged: 'Langue modifiée',
    invalidHeight: 'La taille doit être comprise entre 100 et 250 cm',
    invalidWeight: 'Le poids doit être compris entre 30 et 300 kg',
    requiredFields: 'Veuillez remplir tous les champs',
    errorCreatingProfile: 'Impossible de créer votre profil. Veuillez réessayer.',
    errorUpdatingProfile: 'Impossible de mettre à jour votre profil. Veuillez réessayer.',
    weightAdded: 'Poids ajouté avec succès!',
    
    // Additional onboarding
    whatIsYourGoal: 'Quel est votre objectif?',
    howDoYouFeelToday: 'Comment vous sentez-vous aujourd\'hui?',
    createProfile: 'Créer le Profil',
    yourName: 'Votre nom',
    
    // Home page additional
    hello: 'Bonjour',
    menuUpdated: 'Menu mis à jour!',
    newRecommendationsGenerated: 'De nouvelles recommandations ont été générées pour aujourd\'hui.',
    errorUpdatingMenu: 'Impossible de mettre à jour le menu. Veuillez réessayer.',
    creatingProfile: 'Création du profil...',
    startHealthyJourney: 'Commencer mon voyage santé',
    
    // Additional home and profile translations
    noRecommendations: 'Aucune recommandation disponible pour aujourd\'hui.',
    generateRecommendations: 'Générer des Recommandations',
    dailySummary: 'Résumé de la journée',
    calories: 'Calories',
    protein: 'Protéine',
    fiber: 'Fibre',
    
    // BMI categories
    underweight: 'Poids insuffisant',
    normalWeight: 'Poids normal',
    overweight: 'Surpoids',
    obesity: 'Obésité',
    
    // Settings
    language: 'Langue',
    changeLanguage: 'Changer la langue de l\'application',
    moodState: 'État d\'humeur',
    
    // Delete account
    dangerZone: 'Zone de Danger',
    deleteAccount: 'Supprimer le Compte',
    deleteAccountDesc: 'Supprime définitivement votre compte et toutes les données',
    areYouSure: 'Êtes-vous sûr?',
    deleteAccountWarning: 'Cette action ne peut pas être annulée. Cela supprimera définitivement votre compte et toutes les données associées.',
  }
};

// Add other languages (de, it, pt) with basic translations
(translations as any).de = { ...translations.en };
(translations as any).it = { ...translations.en };
(translations as any).pt = { ...translations.en };

export function getLanguage(): Language {
  return (localStorage.getItem('foodmood_language') as Language) || 'es';
}

export function setLanguage(lang: Language) {
  localStorage.setItem('foodmood_language', lang);
  window.dispatchEvent(new Event('languageChanged'));
}

export function t(key: string): string {
  const language = getLanguage();
  // Ensure we only use supported languages
  const supportedLanguage = (['es', 'en', 'fr'].includes(language)) ? language : 'es';
  return translations[supportedLanguage]?.[key] || translations.es[key] || key;
}

export const languages = [
  { code: 'es' as Language, name: 'Español' },
  { code: 'en' as Language, name: 'English' },
  { code: 'fr' as Language, name: 'Français' },
  { code: 'de' as Language, name: 'Deutsch' },
  { code: 'it' as Language, name: 'Italiano' },
  { code: 'pt' as Language, name: 'Português' }
];