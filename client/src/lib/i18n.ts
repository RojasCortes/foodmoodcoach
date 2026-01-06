// Internationalization system for FoodMood
export type Language = 'es' | 'en' | 'fr' | 'pt' | 'it' | 'de' | 'ja';

export const translations: Record<Language, Record<string, string>> = {
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
    whatIsYourGoal: '¿Cuál es tu meta?',
    howDoYouFeelToday: '¿Cómo te sientes hoy?',
    createProfile: 'Crear Perfil',
    yourName: 'Tu nombre',
    creatingProfile: 'Creando perfil...',
    startHealthyJourney: 'Comenzar mi viaje saludable',
    
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
    todaysMenu: 'Menú de Hoy',
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
    fiber: 'Fibra',
    hello: '¡Hola',
    menuUpdated: '¡Menú actualizado!',
    newRecommendationsGenerated: 'Se han generado nuevas recomendaciones para hoy.',
    errorUpdatingMenu: 'No se pudo actualizar el menú. Inténtalo de nuevo.',
    noRecommendations: 'No hay recomendaciones disponibles para hoy.',
    generateRecommendations: 'Generar Recomendaciones',
    dailySummary: 'Resumen del día',
    howDoYouFeel: '¿Cómo te sientes?',
    updateMenu: 'Actualizar Menú',
    moodBenefits: 'Beneficios para tu estado de ánimo',
    
    // Weight Tracker
    weightTracking: 'Control de Peso',
    addWeight: 'Agregar Peso',
    progressLast7Days: 'Progreso últimos 7 días',
    recentEntries: 'Registros Recientes',
    recentRecords: 'Registros Recientes',
    noWeightRecords: 'No hay registros de peso aún.',
    noWeightData: 'Sin datos de peso',
    addFirstRecord: 'Agrega tu primer registro para comenzar el seguimiento.',
    addFirstRecordToStart: 'Agrega tu primer registro para comenzar el seguimiento.',
    noWeightRecordsYet: 'No hay registros de peso aún.',
    addFirstRecordMessage: 'Agrega tu primer registro para comenzar el seguimiento.',
    weightAdded: 'Peso agregado exitosamente',
    actual: 'Actual',
    today: 'Hoy',
    errorAddingWeight: 'No se pudo agregar el peso. Inténtalo de nuevo.',
    
    // History
    menuHistory: 'Historial de Menús',
    weightHistory: 'Historial de Peso',
    recommendations: 'Recomendaciones',
    last7Days: 'Últimos 7 días de recomendaciones',
    lastDaysRecommendations: 'Últimos 7 días de recomendaciones',
    allWeightRecords: 'Todos tus registros de peso',
    noRecommendationsForDay: 'Sin recomendaciones para este día',
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
    areYouSure: '¿Estás seguro?',
    deleteWarning: 'Esta acción no se puede deshacer. Se eliminarán permanentemente tu cuenta y todos los datos asociados.',
    deleteAccountWarning: 'Esta acción no se puede deshacer. Se eliminarán permanentemente tu cuenta y todos los datos asociados.',
    initialWeight: 'Peso Inicial',
    objective: 'Objetivo',
    bmi: 'IMC (Índice de Masa Corporal)',
    bmiIndex: 'IMC (Índice de Masa Corporal)',
    saveChanges: 'Guardar Cambios',
    saving: 'Guardando...',
    moodState: 'Estado de Ánimo',
    
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
    welcomeSubtitle: "Let's set up your profile for personalized recommendations",
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
    creatingProfile: 'Creating profile...',
    startHealthyJourney: 'Start my healthy journey',
    
    // Goals
    loseWeight: 'Lose weight',
    maintainWeight: 'Maintain weight',
    gainWeight: 'Gain weight',
    loseWeightDesc: 'Get leaner',
    maintainWeightDesc: 'Normal and healthy weight',
    gainWeightDesc: 'Increase body mass',
    
    // Moods
    happy: 'Happy',
    sad: 'Sad',
    energetic: 'Energetic',
    calm: 'Calm',
    stressed: 'Stressed',
    neutral: 'Normal',
    
    // Home
    todayMenu: "Today's Menu",
    todaysMenu: "Today's Menu",
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
    fiber: 'Fiber',
    hello: 'Hello',
    menuUpdated: 'Menu updated!',
    newRecommendationsGenerated: 'New recommendations have been generated for today.',
    errorUpdatingMenu: 'Could not update the menu. Please try again.',
    noRecommendations: 'No recommendations available for today.',
    generateRecommendations: 'Generate Recommendations',
    dailySummary: 'Daily Summary',
    howDoYouFeel: 'How do you feel?',
    updateMenu: 'Update Menu',
    moodBenefits: 'Benefits for your mood',
    
    // Weight Tracker
    weightTracking: 'Weight Tracking',
    addWeight: 'Add Weight',
    progressLast7Days: 'Progress last 7 days',
    recentEntries: 'Recent Entries',
    recentRecords: 'Recent Records',
    noWeightRecords: 'No weight records yet.',
    noWeightData: 'No weight data',
    addFirstRecord: 'Add your first record to start tracking.',
    addFirstRecordToStart: 'Add your first record to start tracking.',
    noWeightRecordsYet: 'No weight records yet.',
    addFirstRecordMessage: 'Add your first record to start tracking.',
    weightAdded: 'Weight added successfully',
    actual: 'Current',
    today: 'Today',
    errorAddingWeight: 'Could not add weight. Please try again.',
    
    // History
    menuHistory: 'Menu History',
    weightHistory: 'Weight History',
    recommendations: 'Recommendations',
    last7Days: 'Last 7 days of recommendations',
    lastDaysRecommendations: 'Last 7 days of recommendations',
    allWeightRecords: 'All your weight records',
    noRecommendationsForDay: 'No recommendations for this day',
    goToTracker: 'Go to Tracker',
    
    // Profile
    personalInformation: 'Personal Information',
    settings: 'Settings',
    language: 'Language',
    changeLanguage: 'Change app language',
    dangerZone: 'Danger Zone',
    deleteAccount: 'Delete Account',
    deleteAccountDesc: 'Permanently delete your account and all data',
    deleteConfirm: 'Are you sure?',
    areYouSure: 'Are you sure?',
    deleteWarning: 'This action cannot be undone. Your account and all associated data will be permanently deleted.',
    deleteAccountWarning: 'This action cannot be undone. Your account and all associated data will be permanently deleted.',
    initialWeight: 'Initial Weight',
    objective: 'Objective',
    bmi: 'BMI (Body Mass Index)',
    bmiIndex: 'BMI (Body Mass Index)',
    saveChanges: 'Save Changes',
    saving: 'Saving...',
    moodState: 'Mood State',
    
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
    requiredFields: 'Please complete all fields',
    errorCreatingProfile: 'Could not create your profile. Please try again.',
    errorUpdatingProfile: 'Could not update your profile. Please try again.',
    
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
    personalInfo: 'Informations Personnelles',
    name: 'Nom',
    height: 'Taille (cm)',
    weight: 'Poids (kg)',
    goal: 'Objectif',
    currentMood: 'Humeur Actuelle',
    startJourney: 'Commencer mon parcours santé',
    whatIsYourGoal: 'Quel est votre objectif ?',
    howDoYouFeelToday: 'Comment vous sentez-vous aujourd\'hui ?',
    createProfile: 'Créer le Profil',
    yourName: 'Votre nom',
    creatingProfile: 'Création du profil...',
    startHealthyJourney: 'Commencer mon parcours santé',
    
    // Goals
    loseWeight: 'Perdre du poids',
    maintainWeight: 'Maintenir le poids',
    gainWeight: 'Prendre du poids',
    loseWeightDesc: 'Devenir plus mince',
    maintainWeightDesc: 'Poids normal et sain',
    gainWeightDesc: 'Augmenter la masse corporelle',
    
    // Moods
    happy: 'Heureux',
    sad: 'Triste',
    energetic: 'Énergique',
    calm: 'Calme',
    stressed: 'Stressé',
    neutral: 'Normal',
    
    // Home
    todayMenu: "Menu d'Aujourd'hui",
    todaysMenu: "Menu d'Aujourd'hui",
    generateMenu: 'Générer un Nouveau Menu',
    currentWeight: 'Poids Actuel',
    goalWeight: 'Poids Cible',
    remaining: 'Restant',
    change: 'Changement',
    breakfast: 'Petit-déjeuner',
    lunch: 'Déjeuner',
    dinner: 'Dîner',
    benefits: 'Bienfaits',
    calories: 'calories',
    protein: 'protéines',
    fiber: 'Fibres',
    hello: 'Bonjour',
    menuUpdated: 'Menu mis à jour !',
    newRecommendationsGenerated: 'De nouvelles recommandations ont été générées pour aujourd\'hui.',
    errorUpdatingMenu: 'Impossible de mettre à jour le menu. Veuillez réessayer.',
    noRecommendations: 'Pas de recommandations disponibles pour aujourd\'hui.',
    generateRecommendations: 'Générer des Recommandations',
    dailySummary: 'Résumé du jour',
    howDoYouFeel: 'Comment vous sentez-vous ?',
    updateMenu: 'Mettre à jour le Menu',
    moodBenefits: 'Bienfaits pour votre humeur',
    
    // Weight Tracker
    weightTracking: 'Suivi du Poids',
    addWeight: 'Ajouter le Poids',
    progressLast7Days: 'Progrès des 7 derniers jours',
    recentEntries: 'Entrées Récentes',
    recentRecords: 'Enregistrements Récents',
    noWeightRecords: 'Pas encore de records de poids.',
    noWeightData: 'Pas de données de poids',
    addFirstRecord: 'Ajoutez votre premier enregistrement pour commencer le suivi.',
    addFirstRecordToStart: 'Ajoutez votre premier enregistrement pour commencer le suivi.',
    noWeightRecordsYet: 'Pas encore de records de poids.',
    addFirstRecordMessage: 'Ajoutez votre premier enregistrement pour commencer le suivi.',
    weightAdded: 'Poids ajouté avec succès',
    actual: 'Actuel',
    today: "Aujourd'hui",
    errorAddingWeight: 'Impossible d\'ajouter le poids. Veuillez réessayer.',
    
    // History
    menuHistory: 'Historique des Menus',
    weightHistory: 'Historique du Poids',
    recommendations: 'Recommandations',
    last7Days: 'Recommandations des 7 derniers jours',
    lastDaysRecommendations: 'Recommandations des 7 derniers jours',
    allWeightRecords: 'Tous vos enregistrements de poids',
    noRecommendationsForDay: 'Pas de recommandations pour ce jour',
    goToTracker: 'Aller au Suivi',
    
    // Profile
    personalInformation: 'Informations Personnelles',
    settings: 'Paramètres',
    language: 'Langue',
    changeLanguage: 'Changer la langue de l\'application',
    dangerZone: 'Zone de Danger',
    deleteAccount: 'Supprimer le Compte',
    deleteAccountDesc: 'Supprime définitivement votre compte et toutes les données',
    deleteConfirm: 'Êtes-vous sûr ?',
    areYouSure: 'Êtes-vous sûr ?',
    deleteWarning: 'Cette action est irréversible. Votre compte et toutes les données associées seront définitivement supprimés.',
    deleteAccountWarning: 'Cette action est irréversible. Votre compte et toutes les données associées seront définitivement supprimés.',
    initialWeight: 'Poids Initial',
    objective: 'Objectif',
    bmi: 'IMC (Indice de Masse Corporelle)',
    bmiIndex: 'IMC (Indice de Masse Corporelle)',
    saveChanges: 'Enregistrer les Modifications',
    saving: 'Enregistrement...',
    moodState: 'État d\'Humeur',
    
    // BMI Categories
    underweight: 'Insuffisance pondérale',
    normalWeight: 'Poids normal',
    overweight: 'Surpoids',
    obesity: 'Obésité',
    
    // Messages
    profileCreated: 'Profil créé avec succès',
    profileUpdated: 'Profil mis à jour avec succès',
    accountDeleted: 'Compte supprimé avec succès',
    languageChanged: 'Langue changée',
    invalidHeight: 'La taille doit être entre 100 et 250 cm',
    invalidWeight: 'Le poids doit être entre 30 et 300 kg',
    requiredFields: 'Veuillez remplir tous les champs',
    errorCreatingProfile: 'Impossible de créer votre profil. Veuillez réessayer.',
    errorUpdatingProfile: 'Impossible de mettre à jour votre profil. Veuillez réessayer.',
    
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
  },
  
  pt: {
    // Navigation
    home: 'Início',
    weightTracker: 'Peso',
    history: 'Histórico',
    profile: 'Perfil',
    
    // Common
    save: 'Salvar',
    cancel: 'Cancelar',
    edit: 'Editar',
    delete: 'Excluir',
    close: 'Fechar',
    back: 'Voltar',
    loading: 'Carregando...',
    error: 'Erro',
    success: 'Sucesso',
    
    // Onboarding
    welcome: 'Bem-vindo ao FoodMood!',
    welcomeSubtitle: 'Vamos configurar seu perfil para recomendações personalizadas',
    personalInfo: 'Informações Pessoais',
    name: 'Nome',
    height: 'Altura (cm)',
    weight: 'Peso (kg)',
    goal: 'Objetivo',
    currentMood: 'Humor Atual',
    startJourney: 'Começar minha jornada saudável',
    whatIsYourGoal: 'Qual é seu objetivo?',
    howDoYouFeelToday: 'Como você se sente hoje?',
    createProfile: 'Criar Perfil',
    yourName: 'Seu nome',
    creatingProfile: 'Criando perfil...',
    startHealthyJourney: 'Começar minha jornada saudável',
    
    // Goals
    loseWeight: 'Perder peso',
    maintainWeight: 'Manter peso',
    gainWeight: 'Ganhar peso',
    loseWeightDesc: 'Ficar mais magro/a',
    maintainWeightDesc: 'Peso normal e saudável',
    gainWeightDesc: 'Aumentar massa corporal',
    
    // Moods
    happy: 'Feliz',
    sad: 'Triste',
    energetic: 'Energético',
    calm: 'Calmo',
    stressed: 'Estressado',
    neutral: 'Normal',
    
    // Home
    todayMenu: 'Menu de Hoje',
    todaysMenu: 'Menu de Hoje',
    generateMenu: 'Gerar Novo Menu',
    currentWeight: 'Peso Atual',
    goalWeight: 'Peso Meta',
    remaining: 'Restante',
    change: 'Mudança',
    breakfast: 'Café da Manhã',
    lunch: 'Almoço',
    dinner: 'Jantar',
    benefits: 'Benefícios',
    calories: 'calorias',
    protein: 'proteína',
    fiber: 'Fibra',
    hello: 'Olá',
    menuUpdated: 'Menu atualizado!',
    newRecommendationsGenerated: 'Novas recomendações foram geradas para hoje.',
    errorUpdatingMenu: 'Não foi possível atualizar o menu. Tente novamente.',
    noRecommendations: 'Nenhuma recomendação disponível para hoje.',
    generateRecommendations: 'Gerar Recomendações',
    dailySummary: 'Resumo do dia',
    howDoYouFeel: 'Como você se sente?',
    updateMenu: 'Atualizar Menu',
    moodBenefits: 'Benefícios para seu humor',
    
    // Weight Tracker
    weightTracking: 'Controle de Peso',
    addWeight: 'Adicionar Peso',
    progressLast7Days: 'Progresso dos últimos 7 dias',
    recentEntries: 'Entradas Recentes',
    recentRecords: 'Registros Recentes',
    noWeightRecords: 'Ainda não há registros de peso.',
    noWeightData: 'Sem dados de peso',
    addFirstRecord: 'Adicione seu primeiro registro para começar o acompanhamento.',
    addFirstRecordToStart: 'Adicione seu primeiro registro para começar o acompanhamento.',
    noWeightRecordsYet: 'Ainda não há registros de peso.',
    addFirstRecordMessage: 'Adicione seu primeiro registro para começar o acompanhamento.',
    weightAdded: 'Peso adicionado com sucesso',
    actual: 'Atual',
    today: 'Hoje',
    errorAddingWeight: 'Não foi possível adicionar o peso. Tente novamente.',
    
    // History
    menuHistory: 'Histórico de Menus',
    weightHistory: 'Histórico de Peso',
    recommendations: 'Recomendações',
    last7Days: 'Recomendações dos últimos 7 dias',
    lastDaysRecommendations: 'Recomendações dos últimos 7 dias',
    allWeightRecords: 'Todos os seus registros de peso',
    noRecommendationsForDay: 'Sem recomendações para este dia',
    goToTracker: 'Ir para o Rastreador',
    
    // Profile
    personalInformation: 'Informações Pessoais',
    settings: 'Configurações',
    language: 'Idioma',
    changeLanguage: 'Alterar idioma do aplicativo',
    dangerZone: 'Zona de Perigo',
    deleteAccount: 'Excluir Conta',
    deleteAccountDesc: 'Exclui permanentemente sua conta e todos os dados',
    deleteConfirm: 'Tem certeza?',
    areYouSure: 'Tem certeza?',
    deleteWarning: 'Esta ação não pode ser desfeita. Sua conta e todos os dados associados serão permanentemente excluídos.',
    deleteAccountWarning: 'Esta ação não pode ser desfeita. Sua conta e todos os dados associados serão permanentemente excluídos.',
    initialWeight: 'Peso Inicial',
    objective: 'Objetivo',
    bmi: 'IMC (Índice de Massa Corporal)',
    bmiIndex: 'IMC (Índice de Massa Corporal)',
    saveChanges: 'Salvar Alterações',
    saving: 'Salvando...',
    moodState: 'Estado de Humor',
    
    // BMI Categories
    underweight: 'Abaixo do peso',
    normalWeight: 'Peso normal',
    overweight: 'Sobrepeso',
    obesity: 'Obesidade',
    
    // Messages
    profileCreated: 'Perfil criado com sucesso',
    profileUpdated: 'Perfil atualizado com sucesso',
    accountDeleted: 'Conta excluída com sucesso',
    languageChanged: 'Idioma alterado',
    invalidHeight: 'A altura deve estar entre 100 e 250 cm',
    invalidWeight: 'O peso deve estar entre 30 e 300 kg',
    requiredFields: 'Por favor, preencha todos os campos',
    errorCreatingProfile: 'Não foi possível criar seu perfil. Tente novamente.',
    errorUpdatingProfile: 'Não foi possível atualizar seu perfil. Tente novamente.',
    
    // Days of the week
    monday: 'segunda-feira',
    tuesday: 'terça-feira', 
    wednesday: 'quarta-feira',
    thursday: 'quinta-feira',
    friday: 'sexta-feira',
    saturday: 'sábado',
    sunday: 'domingo',
    
    // Months  
    january: 'janeiro',
    february: 'fevereiro',
    march: 'março', 
    april: 'abril',
    may: 'maio',
    june: 'junho',
    july: 'julho',
    august: 'agosto',
    september: 'setembro',
    october: 'outubro',
    november: 'novembro',
    december: 'dezembro',
  },
  
  it: {
    // Navigation
    home: 'Home',
    weightTracker: 'Peso',
    history: 'Cronologia',
    profile: 'Profilo',
    
    // Common
    save: 'Salva',
    cancel: 'Annulla',
    edit: 'Modifica',
    delete: 'Elimina',
    close: 'Chiudi',
    back: 'Indietro',
    loading: 'Caricamento...',
    error: 'Errore',
    success: 'Successo',
    
    // Onboarding
    welcome: 'Benvenuto su FoodMood!',
    welcomeSubtitle: 'Configuriamo il tuo profilo per raccomandazioni personalizzate',
    personalInfo: 'Informazioni Personali',
    name: 'Nome',
    height: 'Altezza (cm)',
    weight: 'Peso (kg)',
    goal: 'Obiettivo',
    currentMood: 'Umore Attuale',
    startJourney: 'Inizia il mio percorso salutare',
    whatIsYourGoal: 'Qual è il tuo obiettivo?',
    howDoYouFeelToday: 'Come ti senti oggi?',
    createProfile: 'Crea Profilo',
    yourName: 'Il tuo nome',
    creatingProfile: 'Creazione profilo...',
    startHealthyJourney: 'Inizia il mio percorso salutare',
    
    // Goals
    loseWeight: 'Perdere peso',
    maintainWeight: 'Mantenere peso',
    gainWeight: 'Aumentare peso',
    loseWeightDesc: 'Diventare più magro/a',
    maintainWeightDesc: 'Peso normale e sano',
    gainWeightDesc: 'Aumentare la massa corporea',
    
    // Moods
    happy: 'Felice',
    sad: 'Triste',
    energetic: 'Energico',
    calm: 'Calmo',
    stressed: 'Stressato',
    neutral: 'Normale',
    
    // Home
    todayMenu: 'Menu di Oggi',
    todaysMenu: 'Menu di Oggi',
    generateMenu: 'Genera Nuovo Menu',
    currentWeight: 'Peso Attuale',
    goalWeight: 'Peso Obiettivo',
    remaining: 'Rimanente',
    change: 'Variazione',
    breakfast: 'Colazione',
    lunch: 'Pranzo',
    dinner: 'Cena',
    benefits: 'Benefici',
    calories: 'calorie',
    protein: 'proteine',
    fiber: 'Fibre',
    hello: 'Ciao',
    menuUpdated: 'Menu aggiornato!',
    newRecommendationsGenerated: 'Sono state generate nuove raccomandazioni per oggi.',
    errorUpdatingMenu: 'Impossibile aggiornare il menu. Riprova.',
    noRecommendations: 'Nessuna raccomandazione disponibile per oggi.',
    generateRecommendations: 'Genera Raccomandazioni',
    dailySummary: 'Riepilogo del giorno',
    howDoYouFeel: 'Come ti senti?',
    updateMenu: 'Aggiorna Menu',
    moodBenefits: 'Benefici per il tuo umore',
    
    // Weight Tracker
    weightTracking: 'Monitoraggio Peso',
    addWeight: 'Aggiungi Peso',
    progressLast7Days: 'Progresso ultimi 7 giorni',
    recentEntries: 'Voci Recenti',
    recentRecords: 'Registrazioni Recenti',
    noWeightRecords: 'Ancora nessun record di peso.',
    noWeightData: 'Nessun dato sul peso',
    addFirstRecord: 'Aggiungi il tuo primo record per iniziare il monitoraggio.',
    addFirstRecordToStart: 'Aggiungi il tuo primo record per iniziare il monitoraggio.',
    noWeightRecordsYet: 'Ancora nessun record di peso.',
    addFirstRecordMessage: 'Aggiungi il tuo primo record per iniziare il monitoraggio.',
    weightAdded: 'Peso aggiunto con successo',
    actual: 'Attuale',
    today: 'Oggi',
    errorAddingWeight: 'Impossibile aggiungere il peso. Riprova.',
    
    // History
    menuHistory: 'Cronologia Menu',
    weightHistory: 'Cronologia Peso',
    recommendations: 'Raccomandazioni',
    last7Days: 'Raccomandazioni degli ultimi 7 giorni',
    lastDaysRecommendations: 'Raccomandazioni degli ultimi 7 giorni',
    allWeightRecords: 'Tutti i tuoi record di peso',
    noRecommendationsForDay: 'Nessuna raccomandazione per questo giorno',
    goToTracker: 'Vai al Tracker',
    
    // Profile
    personalInformation: 'Informazioni Personali',
    settings: 'Impostazioni',
    language: 'Lingua',
    changeLanguage: 'Cambia lingua dell\'app',
    dangerZone: 'Zona Pericolosa',
    deleteAccount: 'Elimina Account',
    deleteAccountDesc: 'Elimina permanentemente il tuo account e tutti i dati',
    deleteConfirm: 'Sei sicuro?',
    areYouSure: 'Sei sicuro?',
    deleteWarning: 'Questa azione non può essere annullata. Il tuo account e tutti i dati associati saranno eliminati permanentemente.',
    deleteAccountWarning: 'Questa azione non può essere annullata. Il tuo account e tutti i dati associati saranno eliminati permanentemente.',
    initialWeight: 'Peso Iniziale',
    objective: 'Obiettivo',
    bmi: 'IMC (Indice di Massa Corporea)',
    bmiIndex: 'IMC (Indice di Massa Corporea)',
    saveChanges: 'Salva Modifiche',
    saving: 'Salvataggio...',
    moodState: 'Stato d\'Umore',
    
    // BMI Categories
    underweight: 'Sottopeso',
    normalWeight: 'Peso normale',
    overweight: 'Sovrappeso',
    obesity: 'Obesità',
    
    // Messages
    profileCreated: 'Profilo creato con successo',
    profileUpdated: 'Profilo aggiornato con successo',
    accountDeleted: 'Account eliminato con successo',
    languageChanged: 'Lingua cambiata',
    invalidHeight: 'L\'altezza deve essere tra 100 e 250 cm',
    invalidWeight: 'Il peso deve essere tra 30 e 300 kg',
    requiredFields: 'Per favore compila tutti i campi',
    errorCreatingProfile: 'Impossibile creare il tuo profilo. Riprova.',
    errorUpdatingProfile: 'Impossibile aggiornare il tuo profilo. Riprova.',
    
    // Days of the week
    monday: 'lunedì',
    tuesday: 'martedì', 
    wednesday: 'mercoledì',
    thursday: 'giovedì',
    friday: 'venerdì',
    saturday: 'sabato',
    sunday: 'domenica',
    
    // Months  
    january: 'gennaio',
    february: 'febbraio',
    march: 'marzo', 
    april: 'aprile',
    may: 'maggio',
    june: 'giugno',
    july: 'luglio',
    august: 'agosto',
    september: 'settembre',
    october: 'ottobre',
    november: 'novembre',
    december: 'dicembre',
  },
  
  de: {
    // Navigation
    home: 'Startseite',
    weightTracker: 'Gewicht',
    history: 'Verlauf',
    profile: 'Profil',
    
    // Common
    save: 'Speichern',
    cancel: 'Abbrechen',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    close: 'Schließen',
    back: 'Zurück',
    loading: 'Laden...',
    error: 'Fehler',
    success: 'Erfolg',
    
    // Onboarding
    welcome: 'Willkommen bei FoodMood!',
    welcomeSubtitle: 'Lass uns dein Profil für personalisierte Empfehlungen einrichten',
    personalInfo: 'Persönliche Informationen',
    name: 'Name',
    height: 'Größe (cm)',
    weight: 'Gewicht (kg)',
    goal: 'Ziel',
    currentMood: 'Aktuelle Stimmung',
    startJourney: 'Meine gesunde Reise beginnen',
    whatIsYourGoal: 'Was ist dein Ziel?',
    howDoYouFeelToday: 'Wie fühlst du dich heute?',
    createProfile: 'Profil erstellen',
    yourName: 'Dein Name',
    creatingProfile: 'Profil wird erstellt...',
    startHealthyJourney: 'Meine gesunde Reise beginnen',
    
    // Goals
    loseWeight: 'Gewicht verlieren',
    maintainWeight: 'Gewicht halten',
    gainWeight: 'Gewicht zunehmen',
    loseWeightDesc: 'Schlanker werden',
    maintainWeightDesc: 'Normales und gesundes Gewicht',
    gainWeightDesc: 'Körpermasse erhöhen',
    
    // Moods
    happy: 'Glücklich',
    sad: 'Traurig',
    energetic: 'Energiegeladen',
    calm: 'Ruhig',
    stressed: 'Gestresst',
    neutral: 'Normal',
    
    // Home
    todayMenu: 'Heutiges Menü',
    todaysMenu: 'Heutiges Menü',
    generateMenu: 'Neues Menü generieren',
    currentWeight: 'Aktuelles Gewicht',
    goalWeight: 'Zielgewicht',
    remaining: 'Verbleibend',
    change: 'Änderung',
    breakfast: 'Frühstück',
    lunch: 'Mittagessen',
    dinner: 'Abendessen',
    benefits: 'Vorteile',
    calories: 'Kalorien',
    protein: 'Protein',
    fiber: 'Ballaststoffe',
    hello: 'Hallo',
    menuUpdated: 'Menü aktualisiert!',
    newRecommendationsGenerated: 'Neue Empfehlungen wurden für heute generiert.',
    errorUpdatingMenu: 'Menü konnte nicht aktualisiert werden. Bitte versuche es erneut.',
    noRecommendations: 'Keine Empfehlungen für heute verfügbar.',
    generateRecommendations: 'Empfehlungen generieren',
    dailySummary: 'Tageszusammenfassung',
    howDoYouFeel: 'Wie fühlst du dich?',
    updateMenu: 'Menü aktualisieren',
    moodBenefits: 'Vorteile für deine Stimmung',
    
    // Weight Tracker
    weightTracking: 'Gewichtsverfolgung',
    addWeight: 'Gewicht hinzufügen',
    progressLast7Days: 'Fortschritt der letzten 7 Tage',
    recentEntries: 'Letzte Einträge',
    recentRecords: 'Letzte Aufzeichnungen',
    noWeightRecords: 'Noch keine Gewichtseinträge.',
    noWeightData: 'Keine Gewichtsdaten',
    addFirstRecord: 'Füge deinen ersten Eintrag hinzu, um mit der Verfolgung zu beginnen.',
    addFirstRecordToStart: 'Füge deinen ersten Eintrag hinzu, um mit der Verfolgung zu beginnen.',
    noWeightRecordsYet: 'Noch keine Gewichtseinträge.',
    addFirstRecordMessage: 'Füge deinen ersten Eintrag hinzu, um mit der Verfolgung zu beginnen.',
    weightAdded: 'Gewicht erfolgreich hinzugefügt',
    actual: 'Aktuell',
    today: 'Heute',
    errorAddingWeight: 'Gewicht konnte nicht hinzugefügt werden. Bitte versuche es erneut.',
    
    // History
    menuHistory: 'Menüverlauf',
    weightHistory: 'Gewichtsverlauf',
    recommendations: 'Empfehlungen',
    last7Days: 'Empfehlungen der letzten 7 Tage',
    lastDaysRecommendations: 'Empfehlungen der letzten 7 Tage',
    allWeightRecords: 'Alle deine Gewichtseinträge',
    noRecommendationsForDay: 'Keine Empfehlungen für diesen Tag',
    goToTracker: 'Zum Tracker',
    
    // Profile
    personalInformation: 'Persönliche Informationen',
    settings: 'Einstellungen',
    language: 'Sprache',
    changeLanguage: 'App-Sprache ändern',
    dangerZone: 'Gefahrenzone',
    deleteAccount: 'Konto löschen',
    deleteAccountDesc: 'Löscht dauerhaft dein Konto und alle Daten',
    deleteConfirm: 'Bist du sicher?',
    areYouSure: 'Bist du sicher?',
    deleteWarning: 'Diese Aktion kann nicht rückgängig gemacht werden. Dein Konto und alle zugehörigen Daten werden dauerhaft gelöscht.',
    deleteAccountWarning: 'Diese Aktion kann nicht rückgängig gemacht werden. Dein Konto und alle zugehörigen Daten werden dauerhaft gelöscht.',
    initialWeight: 'Anfangsgewicht',
    objective: 'Ziel',
    bmi: 'BMI (Body-Mass-Index)',
    bmiIndex: 'BMI (Body-Mass-Index)',
    saveChanges: 'Änderungen speichern',
    saving: 'Speichern...',
    moodState: 'Stimmungszustand',
    
    // BMI Categories
    underweight: 'Untergewicht',
    normalWeight: 'Normalgewicht',
    overweight: 'Übergewicht',
    obesity: 'Fettleibigkeit',
    
    // Messages
    profileCreated: 'Profil erfolgreich erstellt',
    profileUpdated: 'Profil erfolgreich aktualisiert',
    accountDeleted: 'Konto erfolgreich gelöscht',
    languageChanged: 'Sprache geändert',
    invalidHeight: 'Die Größe muss zwischen 100 und 250 cm liegen',
    invalidWeight: 'Das Gewicht muss zwischen 30 und 300 kg liegen',
    requiredFields: 'Bitte fülle alle Felder aus',
    errorCreatingProfile: 'Dein Profil konnte nicht erstellt werden. Bitte versuche es erneut.',
    errorUpdatingProfile: 'Dein Profil konnte nicht aktualisiert werden. Bitte versuche es erneut.',
    
    // Days of the week
    monday: 'Montag',
    tuesday: 'Dienstag', 
    wednesday: 'Mittwoch',
    thursday: 'Donnerstag',
    friday: 'Freitag',
    saturday: 'Samstag',
    sunday: 'Sonntag',
    
    // Months  
    january: 'Januar',
    february: 'Februar',
    march: 'März', 
    april: 'April',
    may: 'Mai',
    june: 'Juni',
    july: 'Juli',
    august: 'August',
    september: 'September',
    october: 'Oktober',
    november: 'November',
    december: 'Dezember',
  },
  
  ja: {
    // Navigation
    home: 'ホーム',
    weightTracker: '体重',
    history: '履歴',
    profile: 'プロフィール',
    
    // Common
    save: '保存',
    cancel: 'キャンセル',
    edit: '編集',
    delete: '削除',
    close: '閉じる',
    back: '戻る',
    loading: '読み込み中...',
    error: 'エラー',
    success: '成功',
    
    // Onboarding
    welcome: 'FoodMoodへようこそ！',
    welcomeSubtitle: 'パーソナライズされたおすすめのためにプロフィールを設定しましょう',
    personalInfo: '個人情報',
    name: '名前',
    height: '身長 (cm)',
    weight: '体重 (kg)',
    goal: '目標',
    currentMood: '現在の気分',
    startJourney: '健康な旅を始める',
    whatIsYourGoal: 'あなたの目標は？',
    howDoYouFeelToday: '今日の気分は？',
    createProfile: 'プロフィール作成',
    yourName: 'あなたの名前',
    creatingProfile: 'プロフィール作成中...',
    startHealthyJourney: '健康な旅を始める',
    
    // Goals
    loseWeight: '減量する',
    maintainWeight: '体重を維持する',
    gainWeight: '増量する',
    loseWeightDesc: 'スリムになる',
    maintainWeightDesc: '正常で健康的な体重',
    gainWeightDesc: '体重を増やす',
    
    // Moods
    happy: '嬉しい',
    sad: '悲しい',
    energetic: 'エネルギッシュ',
    calm: '穏やか',
    stressed: 'ストレス',
    neutral: '普通',
    
    // Home
    todayMenu: '今日のメニュー',
    todaysMenu: '今日のメニュー',
    generateMenu: '新しいメニューを生成',
    currentWeight: '現在の体重',
    goalWeight: '目標体重',
    remaining: '残り',
    change: '変化',
    breakfast: '朝食',
    lunch: '昼食',
    dinner: '夕食',
    benefits: '効果',
    calories: 'カロリー',
    protein: 'タンパク質',
    fiber: '食物繊維',
    hello: 'こんにちは',
    menuUpdated: 'メニューが更新されました！',
    newRecommendationsGenerated: '今日の新しいおすすめが生成されました。',
    errorUpdatingMenu: 'メニューを更新できませんでした。もう一度お試しください。',
    noRecommendations: '今日のおすすめはありません。',
    generateRecommendations: 'おすすめを生成',
    dailySummary: '日次サマリー',
    howDoYouFeel: '今日の気分は？',
    updateMenu: 'メニューを更新',
    moodBenefits: '気分への効果',
    
    // Weight Tracker
    weightTracking: '体重管理',
    addWeight: '体重を追加',
    progressLast7Days: '過去7日間の進捗',
    recentEntries: '最近の記録',
    recentRecords: '最近の記録',
    noWeightRecords: 'まだ体重記録がありません。',
    noWeightData: '体重データなし',
    addFirstRecord: '追跡を開始するために最初の記録を追加してください。',
    addFirstRecordToStart: '追跡を開始するために最初の記録を追加してください。',
    noWeightRecordsYet: 'まだ体重記録がありません。',
    addFirstRecordMessage: '追跡を開始するために最初の記録を追加してください。',
    weightAdded: '体重が追加されました',
    actual: '現在',
    today: '今日',
    errorAddingWeight: '体重を追加できませんでした。もう一度お試しください。',
    
    // History
    menuHistory: 'メニュー履歴',
    weightHistory: '体重履歴',
    recommendations: 'おすすめ',
    last7Days: '過去7日間のおすすめ',
    lastDaysRecommendations: '過去7日間のおすすめ',
    allWeightRecords: 'すべての体重記録',
    noRecommendationsForDay: 'この日のおすすめはありません',
    goToTracker: 'トラッカーへ',
    
    // Profile
    personalInformation: '個人情報',
    settings: '設定',
    language: '言語',
    changeLanguage: 'アプリの言語を変更',
    dangerZone: '危険ゾーン',
    deleteAccount: 'アカウント削除',
    deleteAccountDesc: 'アカウントとすべてのデータを完全に削除します',
    deleteConfirm: '本当に削除しますか？',
    areYouSure: '本当に削除しますか？',
    deleteWarning: 'この操作は取り消せません。アカウントと関連するすべてのデータが完全に削除されます。',
    deleteAccountWarning: 'この操作は取り消せません。アカウントと関連するすべてのデータが完全に削除されます。',
    initialWeight: '初期体重',
    objective: '目標',
    bmi: 'BMI（体格指数）',
    bmiIndex: 'BMI（体格指数）',
    saveChanges: '変更を保存',
    saving: '保存中...',
    moodState: '気分の状態',
    
    // BMI Categories
    underweight: '低体重',
    normalWeight: '標準体重',
    overweight: '過体重',
    obesity: '肥満',
    
    // Messages
    profileCreated: 'プロフィールが作成されました',
    profileUpdated: 'プロフィールが更新されました',
    accountDeleted: 'アカウントが削除されました',
    languageChanged: '言語が変更されました',
    invalidHeight: '身長は100〜250cmの間である必要があります',
    invalidWeight: '体重は30〜300kgの間である必要があります',
    requiredFields: 'すべてのフィールドを入力してください',
    errorCreatingProfile: 'プロフィールを作成できませんでした。もう一度お試しください。',
    errorUpdatingProfile: 'プロフィールを更新できませんでした。もう一度お試しください。',
    
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
  }
};

// Detect browser/device language and map to supported languages
function detectBrowserLanguage(): Language {
  const browserLang = navigator.language || (navigator as any).userLanguage || 'es';
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Map browser language to supported languages
  const languageMap: Record<string, Language> = {
    'es': 'es',
    'en': 'en',
    'fr': 'fr',
    'pt': 'pt',
    'it': 'it',
    'de': 'de',
    'ja': 'ja'
  };
  
  return languageMap[langCode] || 'es'; // Default to Spanish if not supported
}

export function getLanguage(): Language {
  const storedLang = localStorage.getItem('foodmood_language') as Language;
  
  if (storedLang) {
    return storedLang;
  }
  
  // Auto-detect browser language on first visit
  const detectedLang = detectBrowserLanguage();
  localStorage.setItem('foodmood_language', detectedLang);
  return detectedLang;
}

export function setLanguage(lang: Language) {
  localStorage.setItem('foodmood_language', lang);
  window.dispatchEvent(new Event('languageChanged'));
}

export function t(key: string): string {
  const language = getLanguage();
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

export function getDayName(dayNumber: number): string {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return t(days[dayNumber]);
}

export function getMonthName(monthNumber: number): string {
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 
                  'july', 'august', 'september', 'october', 'november', 'december'];
  return t(months[monthNumber]);
}

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

export function formatShortDate(date: Date): string {
  const day = date.getDate();
  const monthName = getMonthName(date.getMonth());
  const language = getLanguage();
  
  if (language === 'ja') {
    return `${monthName}${day}日`;
  } else {
    return `${day} ${monthName}`;
  }
}
