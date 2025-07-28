// Internationalization system for FoodMood
export type Language = 'es' | 'en' | 'fr' | 'pt' | 'it' | 'de' | 'ja';

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
    
    // Weight tracking translations
    addWeight: 'Agregar Peso',
    weightTracking: 'Control de Peso',
    progressLast7Days: 'Progreso últimos 7 días',
    recentRecords: 'Registros Recientes',
    noWeightData: 'Sin datos de peso',
    addFirstRecord: 'Agrega tu primer registro para comenzar el seguimiento.',
    noWeightRecords: 'No hay registros de peso aún.',
    addFirstRecordToStart: 'Agrega tu primer registro para comenzar el seguimiento.',
    actual: 'Actual',
    change: 'Cambio',
    remaining: 'Restante',
    initialWeight: 'Peso Inicial',
    objective: 'Objetivo',
    moodState: 'Estado de Ánimo',
    bmiIndex: 'IMC (Índice de Masa Corporal)',
    errorAddingWeight: 'No se pudo agregar el peso. Inténtalo de nuevo.',
    today: 'Hoy',
    
    // Days of the week
    monday: 'lunes',
    tuesday: 'martes', 
    wednesday: 'miércoles',
    thursday: 'jueves',
    friday: 'viernes',
    saturday: 'sábado',
    sunday: 'domingo',
    
    // Months  
    january: 'enero',
    february: 'febrero',
    march: 'marzo', 
    april: 'abril',
    may: 'mayo',
    june: 'junio',
    july: 'julio',
    august: 'agosto',
    september: 'septiembre',
    october: 'octubre',
    november: 'noviembre',
    december: 'diciembre',
    
    // Home page
    todaysMenu: 'Menú de Hoy',
    menuHistory: 'Historial de Menús',
    lastDaysRecommendations: 'Últimos 7 días de recomendaciones',
    noRecommendationsForDay: 'Sin recomendaciones para este día',
    updateMenu: 'actualizar Menú',
    howDoYouFeel: '¿Cómo te sientes?',
    currentWeight: 'Peso Actual',
    goalWeight: 'Peso Objetivo',
    dailySummary: 'Resumen diario',
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
    
    // Weight tracking translations
    addWeight: 'Add Weight',
    weightTracking: 'Weight Tracking',
    progressLast7Days: 'Progress last 7 days',
    recentRecords: 'Recent Records',
    noWeightData: 'No weight data',
    addFirstRecord: 'Add your first record to start tracking.',
    noWeightRecords: 'No weight records yet.',
    addFirstRecordToStart: 'Add your first record to start tracking.',
    actual: 'Current',
    change: 'Change',
    remaining: 'Remaining',
    initialWeight: 'Initial Weight',
    objective: 'Objective',
    moodState: 'Mood State',
    bmiIndex: 'BMI (Body Mass Index)',
    errorAddingWeight: 'Could not add weight. Please try again.',
    today: 'Today',
    
    // Days of the week
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday', 
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    
    // Months
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April', 
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',
    
    // Home page
    todaysMenu: 'Today\'s Menu',
    menuHistory: 'Menu History',
    lastDaysRecommendations: 'Last 7 days of recommendations',
    noRecommendationsForDay: 'No recommendations for this day',
    updateMenu: 'Update Menu',
    howDoYouFeel: 'How do you feel?',
    currentWeight: 'Current Weight',
    goalWeight: 'Goal Weight',
    dailySummary: 'Daily Summary',
    
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
    
    // Weight tracking translations
    addWeight: 'Ajouter Poids',
    weightTracking: 'Suivi du Poids',
    progressLast7Days: 'Progrès 7 derniers jours',
    recentRecords: 'Enregistrements Récents',
    noWeightData: 'Aucune donnée de poids',
    addFirstRecord: 'Ajoutez votre premier enregistrement pour commencer le suivi.',
    noWeightRecords: 'Aucun enregistrement de poids pour le moment.',
    addFirstRecordToStart: 'Ajoutez votre premier enregistrement pour commencer le suivi.',
    actual: 'Actuel',
    change: 'Changement',
    remaining: 'Restant',
    initialWeight: 'Poids Initial',
    objective: 'Objectif',
    moodState: 'État d\'humeur',
    bmiIndex: 'IMC (Indice de Masse Corporelle)',
    errorAddingWeight: 'Impossible d\'ajouter le poids. Veuillez réessayer.',
    today: 'Aujourd\'hui',
    
    // Days of the week
    monday: 'lundi',
    tuesday: 'mardi',
    wednesday: 'mercredi',
    thursday: 'jeudi', 
    friday: 'vendredi',
    saturday: 'samedi',
    sunday: 'dimanche',
    
    // Months
    january: 'janvier',
    february: 'février',
    march: 'mars',
    april: 'avril',
    may: 'mai',
    june: 'juin', 
    july: 'juillet',
    august: 'août',
    september: 'septembre',
    october: 'octobre',
    november: 'novembre',
    december: 'décembre',
    
    // Home page
    todaysMenu: 'Menu d\'Aujourd\'hui',
    menuHistory: 'Historique des Menus',
    lastDaysRecommendations: 'Derniers 7 jours de recommandations',
    noRecommendationsForDay: 'Aucune recommandation pour ce jour',
    updateMenu: 'Mettre à Jour le Menu',
    howDoYouFeel: 'Comment vous sentez-vous?',
    currentWeight: 'Poids Actuel',
    goalWeight: 'Poids Objectif',
    dailySummary: 'Résumé quotidien',
  },

  // Portuguese translations
  pt: {
    // Navigation
    dashboard: 'Painel',
    profile: 'Perfil',
    history: 'Histórico',
    weightTracker: 'Controle de Peso',
    
    // Welcome
    welcome: 'Bem-vindo ao FoodMood',
    welcomeDescription: 'Sua jornada para uma vida mais saudável baseada no seu humor e objetivos pessoais.',
    
    // Goals
    loseWeight: 'Perder peso',
    maintainWeight: 'Manter peso',
    gainWeight: 'Ganhar peso',
    loseWeightDesc: 'Criar um déficit calórico saudável',
    maintainWeightDesc: 'Manter seu peso atual',
    gainWeightDesc: 'Aumentar massa muscular de forma saudável',
    
    // Moods
    happy: 'Feliz',
    sad: 'Triste',
    energetic: 'Energético',
    calm: 'Calmo',
    stressed: 'Estressado',
    neutral: 'Neutro',
    
    // Form fields
    name: 'Nome',
    height: 'Altura (cm)',
    weight: 'Peso (kg)',
    goalWeight: 'Peso objetivo (kg)',
    goal: 'Objetivo',
    currentMood: 'Humor atual',
    
    // Actions
    next: 'Próximo',
    back: 'Voltar',
    save: 'Salvar',
    cancel: 'Cancelar',
    update: 'Atualizar',
    delete: 'Excluir',
    confirm: 'Confirmar',
    settings: 'Configurações',
    
    // Meals
    breakfast: 'Café da manhã',
    lunch: 'Almoço',
    dinner: 'Jantar',
    
    // Messages
    profileUpdated: 'Perfil atualizado com sucesso!',
    error: 'Erro',
    errorUpdatingProfile: 'Não foi possível atualizar o perfil. Tente novamente.',
    invalidHeight: 'A altura deve estar entre 100 e 250 cm.',
    invalidWeight: 'O peso deve estar entre 30 e 300 kg.',
    accountDeleted: 'Conta excluída com sucesso!',
    languageChanged: 'Idioma alterado',
    
    // Home
    todaysMenu: 'Menu de Hoje',
    hello: 'Olá',
    menuUpdated: 'Menu atualizado!',
    newRecommendationsGenerated: 'Novas recomendações foram geradas para hoje.',
    errorUpdatingMenu: 'Não foi possível atualizar o menu. Tente novamente.',
    creatingProfile: 'Criando perfil...',
    startHealthyJourney: 'Iniciar minha jornada saudável',
    
    // Additional home and profile translations
    noRecommendations: 'Nenhuma recomendação disponível para hoje.',
    generateRecommendations: 'Gerar Recomendações',
    dailySummary: 'Resumo do dia',
    calories: 'Calorias',
    protein: 'Proteína',
    fiber: 'Fibra',
    
    // BMI categories
    underweight: 'Abaixo do peso',
    normalWeight: 'Peso normal',
    overweight: 'Sobrepeso',
    obesity: 'Obesidade',
    
    // Settings
    language: 'Idioma',
    changeLanguage: 'Alterar idioma da aplicação',
    moodState: 'Estado de Humor',
    
    // Delete account
    dangerZone: 'Zona de Perigo',
    deleteAccount: 'Excluir Conta',
    deleteAccountDesc: 'Excluir permanentemente sua conta e todos os dados',
    areYouSure: 'Tem certeza?',
    deleteAccountWarning: 'Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e todos os dados associados.',
    
    // Additional
    personalInformation: 'Informações Pessoais',
    saving: 'Salvando...',
    saveChanges: 'Salvar Alterações',
    weightAdded: 'Peso adicionado com sucesso!',
    errorCreatingProfile: 'Não foi possível criar seu perfil. Tente novamente.',
    errorUpdatingProfile: 'Não foi possível atualizar seu perfil. Tente novamente.',
    
    // Weight tracking
    addWeight: 'Adicionar Peso',
    weightTracking: 'Controle de Peso',
    progressLast7Days: 'Progresso últimos 7 dias',
    recentRecords: 'Registros Recentes',
    noWeightData: 'Sem dados de peso',
    addFirstRecord: 'Adicione seu primeiro registro para começar o acompanhamento.',
    noWeightRecords: 'Não há registros de peso ainda.',
    addFirstRecordToStart: 'Adicione seu primeiro registro para começar o acompanhamento.',
    actual: 'Atual',
    change: 'Mudança',
    remaining: 'Restante',
    initialWeight: 'Peso Inicial',
    objective: 'Objetivo',
    moodState: 'Estado de Humor',
    bmiIndex: 'IMC (Índice de Massa Corporal)',
    errorAddingWeight: 'Não foi possível adicionar o peso. Tente novamente.',
  },

  // Italian translations
  it: {
    // Navigation
    dashboard: 'Dashboard',
    profile: 'Profilo',
    history: 'Cronologia',
    weightTracker: 'Controllo Peso',
    
    // Welcome
    welcome: 'Benvenuto su FoodMood',
    welcomeDescription: 'Il tuo viaggio verso una vita più sana basata sul tuo umore e obiettivi personali.',
    
    // Goals
    loseWeight: 'Perdere peso',
    maintainWeight: 'Mantenere peso',
    gainWeight: 'Aumentare peso',
    loseWeightDesc: 'Creare un deficit calorico sano',
    maintainWeightDesc: 'Mantenere il peso attuale',
    gainWeightDesc: 'Aumentare massa muscolare in modo sano',
    
    // Moods
    happy: 'Felice',
    sad: 'Triste',
    energetic: 'Energico',
    calm: 'Calmo',
    stressed: 'Stressato',
    neutral: 'Neutrale',
    
    // Form fields
    name: 'Nome',
    height: 'Altezza (cm)',
    weight: 'Peso (kg)',
    goalWeight: 'Peso obiettivo (kg)',
    goal: 'Obiettivo',
    currentMood: 'Umore attuale',
    
    // Actions
    next: 'Avanti',
    back: 'Indietro',
    save: 'Salva',
    cancel: 'Annulla',
    update: 'Aggiorna',
    delete: 'Elimina',
    confirm: 'Conferma',
    settings: 'Impostazioni',
    
    // Meals
    breakfast: 'Colazione',
    lunch: 'Pranzo',
    dinner: 'Cena',
    
    // Messages
    profileUpdated: 'Profilo aggiornato con successo!',
    error: 'Errore',
    errorUpdatingProfile: 'Impossibile aggiornare il profilo. Riprova.',
    invalidHeight: 'L\'altezza deve essere tra 100 e 250 cm.',
    invalidWeight: 'Il peso deve essere tra 30 e 300 kg.',
    accountDeleted: 'Account eliminato con successo!',
    languageChanged: 'Lingua cambiata',
    
    // Home
    todaysMenu: 'Menu di Oggi',
    hello: 'Ciao',
    menuUpdated: 'Menu aggiornato!',
    newRecommendationsGenerated: 'Sono state generate nuove raccomandazioni per oggi.',
    errorUpdatingMenu: 'Impossibile aggiornare il menu. Riprova.',
    creatingProfile: 'Creazione profilo...',
    startHealthyJourney: 'Inizia il mio viaggio sano',
    
    // Additional home and profile translations
    noRecommendations: 'Nessuna raccomandazione disponibile per oggi.',
    generateRecommendations: 'Genera Raccomandazioni',
    dailySummary: 'Riepilogo del giorno',
    calories: 'Calorie',
    protein: 'Proteine',
    fiber: 'Fibre',
    
    // BMI categories
    underweight: 'Sottopeso',
    normalWeight: 'Peso normale',
    overweight: 'Sovrappeso',
    obesity: 'Obesità',
    
    // Settings
    language: 'Lingua',
    changeLanguage: 'Cambia lingua dell\'applicazione',
    moodState: 'Stato d\'Umore',
    
    // Delete account
    dangerZone: 'Zona Pericolosa',
    deleteAccount: 'Elimina Account',
    deleteAccountDesc: 'Elimina permanentemente il tuo account e tutti i dati',
    areYouSure: 'Sei sicuro?',
    deleteAccountWarning: 'Questa azione non può essere annullata. Eliminerà permanentemente il tuo account e tutti i dati associati.',
    
    // Additional
    personalInformation: 'Informazioni Personali',
    saving: 'Salvataggio...',
    saveChanges: 'Salva Modifiche',
    weightAdded: 'Peso aggiunto con successo!',
    errorCreatingProfile: 'Impossibile creare il tuo profilo. Riprova.',
    errorUpdatingProfile: 'Impossibile aggiornare il tuo profilo. Riprova.',
    
    // Weight tracking
    addWeight: 'Aggiungi Peso',
    weightTracking: 'Controllo Peso',
    progressLast7Days: 'Progresso ultimi 7 giorni',
    recentRecords: 'Registri Recenti',
    noWeightData: 'Nessun dato peso',
    addFirstRecord: 'Aggiungi il tuo primo registro per iniziare il monitoraggio.',
    noWeightRecords: 'Non ci sono ancora registri di peso.',
    addFirstRecordToStart: 'Aggiungi il tuo primo registro per iniziare il monitoraggio.',
    actual: 'Attuale',
    change: 'Cambio',
    remaining: 'Rimanente',
    initialWeight: 'Peso Iniziale',
    objective: 'Obiettivo',
    moodState: 'Stato d\'Umore',
    bmiIndex: 'IMC (Indice di Massa Corporea)',
    errorAddingWeight: 'Impossibile aggiungere il peso. Riprova.',
  },

  // German translations
  de: {
    // Navigation
    dashboard: 'Dashboard',
    profile: 'Profil',
    history: 'Verlauf',
    weightTracker: 'Gewichtskontrolle',
    
    // Welcome
    welcome: 'Willkommen bei FoodMood',
    welcomeDescription: 'Ihre Reise zu einem gesünderen Leben basierend auf Ihrer Stimmung und persönlichen Zielen.',
    
    // Goals
    loseWeight: 'Gewicht verlieren',
    maintainWeight: 'Gewicht halten',
    gainWeight: 'Gewicht zunehmen',
    loseWeightDesc: 'Ein gesundes Kaloriendefizit schaffen',
    maintainWeightDesc: 'Ihr aktuelles Gewicht halten',
    gainWeightDesc: 'Gesund Muskelmasse aufbauen',
    
    // Moods
    happy: 'Glücklich',
    sad: 'Traurig',
    energetic: 'Energiegeladen',
    calm: 'Ruhig',
    stressed: 'Gestresst',
    neutral: 'Neutral',
    
    // Form fields
    name: 'Name',
    height: 'Größe (cm)',
    weight: 'Gewicht (kg)',
    goalWeight: 'Zielgewicht (kg)',
    goal: 'Ziel',
    currentMood: 'Aktuelle Stimmung',
    
    // Actions
    next: 'Weiter',
    back: 'Zurück',
    save: 'Speichern',
    cancel: 'Abbrechen',
    update: 'Aktualisieren',
    delete: 'Löschen',
    confirm: 'Bestätigen',
    settings: 'Einstellungen',
    
    // Meals
    breakfast: 'Frühstück',
    lunch: 'Mittagessen',
    dinner: 'Abendessen',
    
    // Messages
    profileUpdated: 'Profil erfolgreich aktualisiert!',
    error: 'Fehler',
    errorUpdatingProfile: 'Profil konnte nicht aktualisiert werden. Versuchen Sie es erneut.',
    invalidHeight: 'Die Größe muss zwischen 100 und 250 cm liegen.',
    invalidWeight: 'Das Gewicht muss zwischen 30 und 300 kg liegen.',
    accountDeleted: 'Konto erfolgreich gelöscht!',
    languageChanged: 'Sprache geändert',
    
    // Home
    todaysMenu: 'Heutiges Menü',
    hello: 'Hallo',
    menuUpdated: 'Menü aktualisiert!',
    newRecommendationsGenerated: 'Neue Empfehlungen für heute wurden generiert.',
    errorUpdatingMenu: 'Menü konnte nicht aktualisiert werden. Versuchen Sie es erneut.',
    creatingProfile: 'Profil wird erstellt...',
    startHealthyJourney: 'Meine gesunde Reise beginnen',
    
    // Additional home and profile translations
    noRecommendations: 'Keine Empfehlungen für heute verfügbar.',
    generateRecommendations: 'Empfehlungen Generieren',
    dailySummary: 'Tageszusammenfassung',
    calories: 'Kalorien',
    protein: 'Protein',
    fiber: 'Ballaststoffe',
    
    // BMI categories
    underweight: 'Untergewicht',
    normalWeight: 'Normalgewicht',
    overweight: 'Übergewicht',
    obesity: 'Adipositas',
    
    // Settings
    language: 'Sprache',
    changeLanguage: 'Anwendungssprache ändern',
    moodState: 'Stimmungszustand',
    
    // Delete account
    dangerZone: 'Gefahrenzone',
    deleteAccount: 'Konto Löschen',
    deleteAccountDesc: 'Ihr Konto und alle Daten dauerhaft löschen',
    areYouSure: 'Sind Sie sicher?',
    deleteAccountWarning: 'Diese Aktion kann nicht rückgängig gemacht werden. Dies wird Ihr Konto und alle zugehörigen Daten dauerhaft löschen.',
    
    // Additional
    personalInformation: 'Persönliche Informationen',
    saving: 'Speichern...',
    saveChanges: 'Änderungen Speichern',
    weightAdded: 'Gewicht erfolgreich hinzugefügt!',
    errorCreatingProfile: 'Ihr Profil konnte nicht erstellt werden. Versuchen Sie es erneut.',
    errorUpdatingProfile: 'Ihr Profil konnte nicht aktualisiert werden. Versuchen Sie es erneut.',
    
    // Weight tracking
    addWeight: 'Gewicht Hinzufügen',
    weightTracking: 'Gewichtskontrolle',
    progressLast7Days: 'Fortschritt letzte 7 Tage',
    recentRecords: 'Aktuelle Aufzeichnungen',
    noWeightData: 'Keine Gewichtsdaten',
    addFirstRecord: 'Fügen Sie Ihren ersten Eintrag hinzu, um die Verfolgung zu beginnen.',
    noWeightRecords: 'Es gibt noch keine Gewichtsaufzeichnungen.',
    addFirstRecordToStart: 'Fügen Sie Ihren ersten Eintrag hinzu, um die Verfolgung zu beginnen.',
    actual: 'Aktuell',
    change: 'Änderung',
    remaining: 'Verbleibend',
    initialWeight: 'Anfangsgewicht',
    objective: 'Ziel',
    moodState: 'Stimmungszustand',
    bmiIndex: 'BMI (Body-Mass-Index)',
    errorAddingWeight: 'Gewicht konnte nicht hinzugefügt werden. Versuchen Sie es erneut.',
  },

  // Japanese translations
  ja: {
    // Navigation
    dashboard: 'ダッシュボード',
    profile: 'プロフィール',
    history: '履歴',
    weightTracker: '体重管理',
    
    // Welcome
    welcome: 'FoodMoodへようこそ',
    welcomeDescription: 'あなたの気分と個人的な目標に基づいた、より健康的な生活への旅。',
    
    // Goals
    loseWeight: '体重を減らす',
    maintainWeight: '体重を維持する',
    gainWeight: '体重を増やす',
    loseWeightDesc: '健康的なカロリー不足を作る',
    maintainWeightDesc: '現在の体重を維持する',
    gainWeightDesc: '健康的に筋肉量を増やす',
    
    // Moods
    happy: '嬉しい',
    sad: '悲しい',
    energetic: '元気',
    calm: '穏やか',
    stressed: 'ストレス',
    neutral: '普通',
    
    // Form fields
    name: '名前',
    height: '身長 (cm)',
    weight: '体重 (kg)',
    goalWeight: '目標体重 (kg)',
    goal: '目標',
    currentMood: '現在の気分',
    
    // Actions
    next: '次へ',
    back: '戻る',
    save: '保存',
    cancel: 'キャンセル',
    update: '更新',
    delete: '削除',
    confirm: '確認',
    settings: '設定',
    
    // Meals
    breakfast: '朝食',
    lunch: '昼食',
    dinner: '夕食',
    
    // Messages
    profileUpdated: 'プロフィールが正常に更新されました！',
    error: 'エラー',
    errorUpdatingProfile: 'プロフィールを更新できませんでした。もう一度お試しください。',
    invalidHeight: '身長は100〜250cmの間である必要があります。',
    invalidWeight: '体重は30〜300kgの間である必要があります。',
    accountDeleted: 'アカウントが正常に削除されました！',
    languageChanged: '言語が変更されました',
    
    // Home
    todaysMenu: '今日のメニュー',
    hello: 'こんにちは',
    menuUpdated: 'メニューが更新されました！',
    newRecommendationsGenerated: '今日の新しい推奨事項が生成されました。',
    errorUpdatingMenu: 'メニューを更新できませんでした。もう一度お試しください。',
    creatingProfile: 'プロフィールを作成中...',
    startHealthyJourney: '健康な旅を始める',
    
    // Additional home and profile translations
    noRecommendations: '今日の推奨事項はありません。',
    generateRecommendations: '推奨事項を生成',
    dailySummary: '日次サマリー',
    calories: 'カロリー',
    protein: 'タンパク質',
    fiber: '食物繊維',
    
    // BMI categories
    underweight: '低体重',
    normalWeight: '標準体重',
    overweight: '過体重',
    obesity: '肥満',
    
    // Settings
    language: '言語',
    changeLanguage: 'アプリケーションの言語を変更',
    moodState: '気分状態',
    
    // Delete account
    dangerZone: '危険ゾーン',
    deleteAccount: 'アカウント削除',
    deleteAccountDesc: 'アカウントとすべてのデータを完全に削除',
    areYouSure: '本当によろしいですか？',
    deleteAccountWarning: 'この操作は元に戻せません。アカウントと関連するすべてのデータが完全に削除されます。',
    
    // Additional
    personalInformation: '個人情報',
    saving: '保存中...',
    saveChanges: '変更を保存',
    weightAdded: '体重が正常に追加されました！',
    errorCreatingProfile: 'プロフィールを作成できませんでした。もう一度お試しください。',
    errorUpdatingProfile: 'プロフィールを更新できませんでした。もう一度お試しください。',
    
    // Weight tracking
    addWeight: '体重を追加',
    weightTracking: '体重管理', 
    progressLast7Days: '過去7日間の進捗',
    recentRecords: '最近の記録',
    noWeightData: '体重データなし',
    addFirstRecord: '追跡を開始するために最初の記録を追加してください。',
    noWeightRecords: 'まだ体重記録がありません。',
    addFirstRecordToStart: '追跡を開始するために最初の記録を追加してください。',
    actual: '現在',
    change: '変化',
    remaining: '残り',
    initialWeight: '初期体重',
    objective: '目標',
    moodState: '気分状態',
    bmiIndex: 'BMI（体格指数）',
    errorAddingWeight: '体重を追加できませんでした。もう一度お試しください。',
    today: '今日',
    
    // Days of the week
    monday: '月曜日',
    tuesday: '火曜日',
    wednesday: '水曜日',
    thursday: '木曜日',
    friday: '金曜日',
    saturday: '土曜日',
    sunday: '日曜日',
    
    // Months
    january: '1月',
    february: '2月',
    march: '3月',
    april: '4月',
    may: '5月',
    june: '6月',
    july: '7月',
    august: '8月',
    september: '9月',
    october: '10月',
    november: '11月',
    december: '12月',
    
    // Home page
    todaysMenu: '今日のメニュー',
    menuHistory: 'メニュー履歴',
    lastDaysRecommendations: '過去7日間のレコメンデーション',
    noRecommendationsForDay: '今日のレコメンデーションはありません',
    updateMenu: 'メニューを更新',
    howDoYouFeel: '今日の気分は？',
    currentWeight: '現在の体重',
    goalWeight: '目標体重',
    dailySummary: '日次サマリー',
  }
};

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
  const supportedLanguage = (['es', 'en', 'fr', 'pt', 'it', 'de', 'ja'].includes(language)) ? language : 'es';
  return translations[supportedLanguage]?.[key] || translations.es[key] || key;
}

export const languages = [
  { code: 'es' as Language, name: 'Español' },
  { code: 'en' as Language, name: 'English' },
  { code: 'fr' as Language, name: 'Français' },
  { code: 'pt' as Language, name: 'Português' },
  { code: 'it' as Language, name: 'Italiano' },
  { code: 'de' as Language, name: 'Deutsch' },
  { code: 'ja' as Language, name: '日本語' }
];

// Helper function to get day name in current language
export function getDayName(dayNumber: number): string {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return t(days[dayNumber]);
}

// Helper function to get month name in current language
export function getMonthName(monthNumber: number): string {
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 
                  'july', 'august', 'september', 'october', 'november', 'december'];
  return t(months[monthNumber]);
}

// Helper function to format date in current language
export function formatDate(date: Date): string {
  const dayName = getDayName(date.getDay());
  const day = date.getDate();
  const monthName = getMonthName(date.getMonth());
  
  const language = getLanguage();
  
  if (language === 'ja') {
    return `${monthName}${day}日`;
  } else if (language === 'en') {
    return `${dayName}, ${monthName} ${day}`;
  } else {
    return `${dayName}, ${day} ${monthName}`;
  }
}

// Helper function to format short date for weight tracker
export function formatShortDate(date: Date): string {
  const dayName = getDayName(date.getDay()).substring(0, 3); // First 3 letters
  const day = date.getDate();
  const monthName = getMonthName(date.getMonth()).substring(0, 3); // First 3 letters
  
  const language = getLanguage();
  
  if (language === 'ja') {
    return `${monthName}${day}日`;
  } else {
    return `${dayName}, ${day} ${monthName}`;
  }
}