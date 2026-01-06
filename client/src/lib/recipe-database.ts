import type { Language } from "./i18n";

export interface Recipe {
  key: string;
  mealType: 'breakfast' | 'lunch' | 'dinner';
  moods: string[];
  calories: number;
  protein: number;
  fiber: number;
  image: string;
}

export interface TranslatedRecipeData {
  name: string;
  description: string;
  benefits: string;
}

export const recipes: Recipe[] = [
  // BREAKFAST RECIPES (20)
  { key: 'b_avocado_toast', mealType: 'breakfast', moods: ['happy', 'energetic', 'neutral'], calories: 380, protein: 18, fiber: 12, image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=200&fit=crop' },
  { key: 'b_yogurt_bowl', mealType: 'breakfast', moods: ['happy', 'calm', 'neutral'], calories: 340, protein: 20, fiber: 8, image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=200&fit=crop' },
  { key: 'b_chocolate_oats', mealType: 'breakfast', moods: ['sad', 'stressed'], calories: 420, protein: 16, fiber: 14, image: 'https://images.unsplash.com/photo-1571197119282-7c4c1f0838bc?w=400&h=200&fit=crop' },
  { key: 'b_green_smoothie', mealType: 'breakfast', moods: ['energetic', 'happy'], calories: 290, protein: 8, fiber: 10, image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=200&fit=crop' },
  { key: 'b_almond_toast', mealType: 'breakfast', moods: ['calm', 'neutral'], calories: 350, protein: 14, fiber: 9, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=200&fit=crop' },
  { key: 'b_yogurt_parfait', mealType: 'breakfast', moods: ['stressed', 'calm'], calories: 320, protein: 18, fiber: 7, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=200&fit=crop' },
  { key: 'b_banana_pancakes', mealType: 'breakfast', moods: ['happy', 'sad'], calories: 450, protein: 12, fiber: 6, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=200&fit=crop' },
  { key: 'b_eggs_spinach', mealType: 'breakfast', moods: ['energetic', 'neutral'], calories: 320, protein: 22, fiber: 4, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=200&fit=crop' },
  { key: 'b_chia_pudding', mealType: 'breakfast', moods: ['calm', 'happy'], calories: 280, protein: 10, fiber: 15, image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=200&fit=crop' },
  { key: 'b_fruit_toast', mealType: 'breakfast', moods: ['happy', 'energetic'], calories: 310, protein: 8, fiber: 6, image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=200&fit=crop' },
  { key: 'b_omelette_veggies', mealType: 'breakfast', moods: ['energetic', 'neutral'], calories: 360, protein: 24, fiber: 5, image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=200&fit=crop' },
  { key: 'b_berry_smoothie', mealType: 'breakfast', moods: ['sad', 'stressed'], calories: 270, protein: 12, fiber: 8, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=200&fit=crop' },
  { key: 'b_granola_milk', mealType: 'breakfast', moods: ['neutral', 'calm'], calories: 380, protein: 14, fiber: 10, image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&h=200&fit=crop' },
  { key: 'b_french_toast', mealType: 'breakfast', moods: ['happy', 'sad'], calories: 420, protein: 14, fiber: 4, image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=200&fit=crop' },
  { key: 'b_tropical_bowl', mealType: 'breakfast', moods: ['happy', 'energetic'], calories: 350, protein: 10, fiber: 12, image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&h=200&fit=crop' },
  { key: 'b_protein_shake', mealType: 'breakfast', moods: ['energetic', 'stressed'], calories: 320, protein: 30, fiber: 5, image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=400&h=200&fit=crop' },
  { key: 'b_overnight_oats', mealType: 'breakfast', moods: ['calm', 'neutral'], calories: 360, protein: 14, fiber: 12, image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&h=200&fit=crop' },
  { key: 'b_egg_muffins', mealType: 'breakfast', moods: ['energetic', 'happy'], calories: 280, protein: 20, fiber: 3, image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=200&fit=crop' },
  { key: 'b_acai_bowl', mealType: 'breakfast', moods: ['happy', 'energetic'], calories: 380, protein: 8, fiber: 14, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=200&fit=crop' },
  { key: 'b_warm_quinoa', mealType: 'breakfast', moods: ['calm', 'stressed'], calories: 340, protein: 12, fiber: 8, image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=200&fit=crop' },

  // LUNCH RECIPES (20)
  { key: 'l_chicken_salad', mealType: 'lunch', moods: ['energetic', 'happy', 'neutral'], calories: 450, protein: 35, fiber: 8, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop' },
  { key: 'l_quinoa_bowl', mealType: 'lunch', moods: ['calm', 'neutral'], calories: 420, protein: 18, fiber: 12, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop' },
  { key: 'l_salmon_veggies', mealType: 'lunch', moods: ['happy', 'calm'], calories: 480, protein: 32, fiber: 6, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=200&fit=crop' },
  { key: 'l_turkey_wrap', mealType: 'lunch', moods: ['energetic', 'neutral'], calories: 380, protein: 28, fiber: 8, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=200&fit=crop' },
  { key: 'l_veggie_soup', mealType: 'lunch', moods: ['sad', 'calm', 'stressed'], calories: 280, protein: 12, fiber: 10, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=200&fit=crop' },
  { key: 'l_tuna_sandwich', mealType: 'lunch', moods: ['energetic', 'happy'], calories: 420, protein: 30, fiber: 6, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=200&fit=crop' },
  { key: 'l_buddha_bowl', mealType: 'lunch', moods: ['calm', 'happy', 'neutral'], calories: 450, protein: 20, fiber: 14, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop' },
  { key: 'l_pasta_primavera', mealType: 'lunch', moods: ['happy', 'sad'], calories: 480, protein: 16, fiber: 8, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=200&fit=crop' },
  { key: 'l_grilled_chicken', mealType: 'lunch', moods: ['energetic', 'neutral'], calories: 420, protein: 38, fiber: 4, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=200&fit=crop' },
  { key: 'l_lentil_soup', mealType: 'lunch', moods: ['calm', 'stressed', 'sad'], calories: 320, protein: 18, fiber: 16, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=200&fit=crop' },
  { key: 'l_shrimp_salad', mealType: 'lunch', moods: ['happy', 'energetic'], calories: 380, protein: 28, fiber: 6, image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=200&fit=crop' },
  { key: 'l_veggie_stir_fry', mealType: 'lunch', moods: ['energetic', 'happy'], calories: 350, protein: 14, fiber: 10, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=200&fit=crop' },
  { key: 'l_greek_salad', mealType: 'lunch', moods: ['calm', 'neutral'], calories: 320, protein: 12, fiber: 8, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=200&fit=crop' },
  { key: 'l_burrito_bowl', mealType: 'lunch', moods: ['happy', 'energetic'], calories: 520, protein: 24, fiber: 12, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop' },
  { key: 'l_avocado_salad', mealType: 'lunch', moods: ['calm', 'happy'], calories: 380, protein: 10, fiber: 14, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop' },
  { key: 'l_chicken_soup', mealType: 'lunch', moods: ['sad', 'stressed', 'calm'], calories: 320, protein: 24, fiber: 6, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=200&fit=crop' },
  { key: 'l_falafel_wrap', mealType: 'lunch', moods: ['neutral', 'happy'], calories: 450, protein: 16, fiber: 12, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=200&fit=crop' },
  { key: 'l_poke_bowl', mealType: 'lunch', moods: ['happy', 'energetic'], calories: 480, protein: 28, fiber: 6, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop' },
  { key: 'l_caesar_salad', mealType: 'lunch', moods: ['neutral', 'calm'], calories: 380, protein: 22, fiber: 4, image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=200&fit=crop' },
  { key: 'l_mushroom_risotto', mealType: 'lunch', moods: ['calm', 'sad'], calories: 460, protein: 14, fiber: 6, image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=200&fit=crop' },

  // DINNER RECIPES (20)
  { key: 'd_grilled_salmon', mealType: 'dinner', moods: ['happy', 'calm', 'neutral'], calories: 480, protein: 38, fiber: 4, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=200&fit=crop' },
  { key: 'd_chicken_breast', mealType: 'dinner', moods: ['energetic', 'neutral'], calories: 420, protein: 42, fiber: 6, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=200&fit=crop' },
  { key: 'd_pasta_bolognese', mealType: 'dinner', moods: ['sad', 'happy'], calories: 550, protein: 28, fiber: 8, image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=200&fit=crop' },
  { key: 'd_veggie_curry', mealType: 'dinner', moods: ['calm', 'stressed'], calories: 420, protein: 14, fiber: 12, image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=200&fit=crop' },
  { key: 'd_steak_salad', mealType: 'dinner', moods: ['energetic', 'happy'], calories: 520, protein: 40, fiber: 6, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop' },
  { key: 'd_fish_tacos', mealType: 'dinner', moods: ['happy', 'energetic'], calories: 450, protein: 28, fiber: 8, image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=200&fit=crop' },
  { key: 'd_roasted_chicken', mealType: 'dinner', moods: ['calm', 'neutral', 'sad'], calories: 480, protein: 38, fiber: 4, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=200&fit=crop' },
  { key: 'd_shrimp_pasta', mealType: 'dinner', moods: ['happy', 'calm'], calories: 520, protein: 30, fiber: 6, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=200&fit=crop' },
  { key: 'd_turkey_meatballs', mealType: 'dinner', moods: ['neutral', 'happy'], calories: 450, protein: 32, fiber: 8, image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=200&fit=crop' },
  { key: 'd_veggie_stir_fry', mealType: 'dinner', moods: ['calm', 'stressed', 'neutral'], calories: 380, protein: 16, fiber: 10, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=200&fit=crop' },
  { key: 'd_baked_cod', mealType: 'dinner', moods: ['calm', 'neutral'], calories: 380, protein: 34, fiber: 4, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=200&fit=crop' },
  { key: 'd_chicken_fajitas', mealType: 'dinner', moods: ['happy', 'energetic'], calories: 480, protein: 32, fiber: 8, image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=200&fit=crop' },
  { key: 'd_stuffed_peppers', mealType: 'dinner', moods: ['neutral', 'calm'], calories: 420, protein: 22, fiber: 10, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=200&fit=crop' },
  { key: 'd_beef_stew', mealType: 'dinner', moods: ['sad', 'stressed', 'calm'], calories: 480, protein: 34, fiber: 8, image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400&h=200&fit=crop' },
  { key: 'd_grilled_tuna', mealType: 'dinner', moods: ['energetic', 'happy'], calories: 420, protein: 40, fiber: 4, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=200&fit=crop' },
  { key: 'd_mushroom_pasta', mealType: 'dinner', moods: ['calm', 'neutral'], calories: 450, protein: 16, fiber: 8, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=200&fit=crop' },
  { key: 'd_teriyaki_salmon', mealType: 'dinner', moods: ['happy', 'calm'], calories: 480, protein: 36, fiber: 4, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=200&fit=crop' },
  { key: 'd_chicken_soup', mealType: 'dinner', moods: ['sad', 'stressed', 'calm'], calories: 320, protein: 26, fiber: 6, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=200&fit=crop' },
  { key: 'd_lamb_chops', mealType: 'dinner', moods: ['energetic', 'happy'], calories: 520, protein: 38, fiber: 4, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=200&fit=crop' },
  { key: 'd_veggie_lasagna', mealType: 'dinner', moods: ['sad', 'happy', 'neutral'], calories: 480, protein: 22, fiber: 10, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=200&fit=crop' }
];

export const recipeTranslations: Record<string, Record<Language, TranslatedRecipeData>> = {
  // BREAKFAST TRANSLATIONS
  'b_avocado_toast': {
    es: { name: 'Tostada de Aguacate con Huevo', description: 'Pan integral tostado con aguacate cremoso, huevo pochado y semillas de chía', benefits: 'Las grasas saludables del aguacate y las proteínas del huevo mantienen tu energía y buen humor durante la mañana' },
    en: { name: 'Avocado Toast with Egg', description: 'Toasted whole grain bread with creamy avocado, poached egg and chia seeds', benefits: 'Healthy fats from avocado and egg proteins maintain your energy and good mood throughout the morning' },
    fr: { name: 'Toast à l\'Avocat avec Œuf', description: 'Pain complet grillé avec avocat crémeux, œuf poché et graines de chia', benefits: 'Les graisses saines de l\'avocat et les protéines de l\'œuf maintiennent votre énergie et bonne humeur le matin' },
    pt: { name: 'Torrada de Abacate com Ovo', description: 'Pão integral torrado com abacate cremoso, ovo pochê e sementes de chia', benefits: 'As gorduras saudáveis do abacate e as proteínas do ovo mantêm sua energia e bom humor durante a manhã' },
    it: { name: 'Toast all\'Avocado con Uovo', description: 'Pane integrale tostato con avocado cremoso, uovo in camicia e semi di chia', benefits: 'I grassi sani dell\'avocado e le proteine dell\'uovo mantengono energia e buon umore durante la mattina' },
    de: { name: 'Avocado-Toast mit Ei', description: 'Getoastetes Vollkornbrot mit cremiger Avocado, pochiertem Ei und Chiasamen', benefits: 'Gesunde Fette aus Avocado und Ei-Proteine halten Ihre Energie und gute Laune am Morgen aufrecht' },
    ja: { name: 'アボカドトーストと卵', description: '全粒粉トーストにクリーミーなアボカド、ポーチドエッグ、チアシード', benefits: 'アボカドの健康的な脂質と卵のタンパク質が朝のエネルギーと良い気分を維持します' }
  },
  'b_yogurt_bowl': {
    es: { name: 'Bowl de Yogur con Frutas', description: 'Yogur griego con arándanos frescos, plátano, granola casera y miel', benefits: 'Los probióticos del yogur y las vitaminas de las frutas refuerzan tu sistema inmune y mantienen tu alegría natural' },
    en: { name: 'Fruit Yogurt Bowl', description: 'Greek yogurt with fresh blueberries, banana, homemade granola and honey', benefits: 'Yogurt probiotics and fruit vitamins strengthen your immune system and maintain your natural joy' },
    fr: { name: 'Bol de Yaourt aux Fruits', description: 'Yaourt grec avec myrtilles fraîches, banane, granola maison et miel', benefits: 'Les probiotiques du yaourt et les vitamines des fruits renforcent votre système immunitaire et maintiennent votre joie naturelle' },
    pt: { name: 'Bowl de Iogurte com Frutas', description: 'Iogurte grego com mirtilos frescos, banana, granola caseira e mel', benefits: 'Os probióticos do iogurte e as vitaminas das frutas fortalecem seu sistema imunológico e mantêm sua alegria natural' },
    it: { name: 'Ciotola di Yogurt con Frutta', description: 'Yogurt greco con mirtilli freschi, banana, granola fatta in casa e miele', benefits: 'I probiotici dello yogurt e le vitamine della frutta rafforzano il sistema immunitario e mantengono la gioia naturale' },
    de: { name: 'Frucht-Joghurt-Schüssel', description: 'Griechischer Joghurt mit frischen Blaubeeren, Banane, hausgemachtem Müsli und Honig', benefits: 'Joghurt-Probiotika und Fruchtvitamine stärken Ihr Immunsystem und erhalten Ihre natürliche Freude' },
    ja: { name: 'フルーツヨーグルトボウル', description: 'ギリシャヨーグルトに新鮮なブルーベリー、バナナ、手作りグラノーラ、ハチミツ', benefits: 'ヨーグルトの乳酸菌と果物のビタミンが免疫システムを強化し、自然な喜びを維持します' }
  },
  'b_chocolate_oats': {
    es: { name: 'Avena con Chocolate y Nueces', description: 'Avena integral cocida con cacao puro, nueces crujientes, plátano y canela', benefits: 'El chocolate libera endorfinas que mejoran el estado de ánimo, mientras la avena proporciona energía estable' },
    en: { name: 'Chocolate Oatmeal with Nuts', description: 'Cooked whole oats with pure cocoa, crunchy walnuts, banana and cinnamon', benefits: 'Chocolate releases endorphins that improve mood, while oats provide stable energy' },
    fr: { name: 'Avoine au Chocolat et Noix', description: 'Avoine complète cuite avec cacao pur, noix croquantes, banane et cannelle', benefits: 'Le chocolat libère des endorphines qui améliorent l\'humeur, tandis que l\'avoine fournit une énergie stable' },
    pt: { name: 'Aveia com Chocolate e Nozes', description: 'Aveia integral cozida com cacau puro, nozes crocantes, banana e canela', benefits: 'O chocolate libera endorfinas que melhoram o humor, enquanto a aveia fornece energia estável' },
    it: { name: 'Avena con Cioccolato e Noci', description: 'Avena integrale cotta con cacao puro, noci croccanti, banana e cannella', benefits: 'Il cioccolato rilascia endorfine che migliorano l\'umore, mentre l\'avena fornisce energia stabile' },
    de: { name: 'Schokoladen-Haferflocken mit Nüssen', description: 'Gekochte Vollkorn-Haferflocken mit reinem Kakao, knusprigen Walnüssen, Banane und Zimt', benefits: 'Schokolade setzt Endorphine frei, die die Stimmung verbessern, während Haferflocken stabile Energie liefern' },
    ja: { name: 'チョコレートオーツとナッツ', description: '全粒オーツを純ココア、カリカリのクルミ、バナナ、シナモンで調理', benefits: 'チョコレートは気分を改善するエンドルフィンを放出し、オーツは安定したエネルギーを提供します' }
  },
  'b_green_smoothie': {
    es: { name: 'Smoothie Verde Energético', description: 'Espinacas frescas, plátano maduro, mango, jengibre, semillas de lino y agua de coco', benefits: 'Las vitaminas y minerales te darán un impulso natural de energía sin el bajón posterior del café' },
    en: { name: 'Energizing Green Smoothie', description: 'Fresh spinach, ripe banana, mango, ginger, flax seeds and coconut water', benefits: 'Vitamins and minerals will give you a natural energy boost without the coffee crash' },
    fr: { name: 'Smoothie Vert Énergisant', description: 'Épinards frais, banane mûre, mangue, gingembre, graines de lin et eau de coco', benefits: 'Les vitamines et minéraux vous donneront un coup de boost naturel sans la chute du café' },
    pt: { name: 'Smoothie Verde Energético', description: 'Espinafre fresco, banana madura, manga, gengibre, sementes de linhaça e água de coco', benefits: 'As vitaminas e minerais darão um impulso natural de energia sem a queda posterior do café' },
    it: { name: 'Smoothie Verde Energizzante', description: 'Spinaci freschi, banana matura, mango, zenzero, semi di lino e acqua di cocco', benefits: 'Vitamine e minerali ti daranno una spinta naturale di energia senza il calo del caffè' },
    de: { name: 'Energetisierender Grüner Smoothie', description: 'Frischer Spinat, reife Banane, Mango, Ingwer, Leinsamen und Kokoswasser', benefits: 'Vitamine und Mineralien geben Ihnen einen natürlichen Energieschub ohne den Kaffee-Absturz' },
    ja: { name: 'エナジーグリーンスムージー', description: '新鮮なほうれん草、熟したバナナ、マンゴー、ジンジャー、亜麻仁、ココナッツウォーター', benefits: 'ビタミンとミネラルがコーヒーのクラッシュなしに自然なエネルギーブーストを与えます' }
  },
  'b_almond_toast': {
    es: { name: 'Tostada con Mantequilla de Almendras', description: 'Pan integral tostado con mantequilla de almendras natural, rodajas de pera y canela', benefits: 'Las almendras contienen magnesio que ayuda a relajar los músculos y mantiene la calma mental' },
    en: { name: 'Almond Butter Toast', description: 'Toasted whole grain bread with natural almond butter, pear slices and cinnamon', benefits: 'Almonds contain magnesium that helps relax muscles and maintain mental calm' },
    fr: { name: 'Toast au Beurre d\'Amande', description: 'Pain complet grillé avec beurre d\'amande naturel, tranches de poire et cannelle', benefits: 'Les amandes contiennent du magnésium qui aide à détendre les muscles et maintient le calme mental' },
    pt: { name: 'Torrada com Manteiga de Amêndoa', description: 'Pão integral torrado com manteiga de amêndoa natural, fatias de pêra e canela', benefits: 'As amêndoas contêm magnésio que ajuda a relaxar os músculos e manter a calma mental' },
    it: { name: 'Toast con Burro di Mandorle', description: 'Pane integrale tostato con burro di mandorle naturale, fette di pera e cannella', benefits: 'Le mandorle contengono magnesio che aiuta a rilassare i muscoli e mantiene la calma mentale' },
    de: { name: 'Toast mit Mandelbutter', description: 'Getoastetes Vollkornbrot mit natürlicher Mandelbutter, Birnenscheiben und Zimt', benefits: 'Mandeln enthalten Magnesium, das hilft, Muskeln zu entspannen und geistige Ruhe zu bewahren' },
    ja: { name: 'アーモンドバタートースト', description: '全粒粉トーストに天然アーモンドバター、梨のスライス、シナモン', benefits: 'アーモンドに含まれるマグネシウムが筋肉をリラックスさせ、精神的な平静を維持します' }
  },
  'b_yogurt_parfait': {
    es: { name: 'Parfait de Yogur con Granola', description: 'Capas de yogur natural, granola sin azúcar, fresas frescas, kiwi y semillas de girasol', benefits: 'La vitamina C de las frutas y el magnesio de las semillas ayudan a reducir los niveles de cortisol' },
    en: { name: 'Yogurt Granola Parfait', description: 'Layers of natural yogurt, sugar-free granola, fresh strawberries, kiwi and sunflower seeds', benefits: 'Vitamin C from fruits and magnesium from seeds help reduce cortisol levels' },
    fr: { name: 'Parfait Yaourt Granola', description: 'Couches de yaourt naturel, granola sans sucre, fraises fraîches, kiwi et graines de tournesol', benefits: 'La vitamine C des fruits et le magnésium des graines aident à réduire les niveaux de cortisol' },
    pt: { name: 'Parfait de Iogurte com Granola', description: 'Camadas de iogurte natural, granola sem açúcar, morangos frescos, kiwi e sementes de girassol', benefits: 'A vitamina C das frutas e o magnésio das sementes ajudam a reduzir os níveis de cortisol' },
    it: { name: 'Parfait di Yogurt con Granola', description: 'Strati di yogurt naturale, granola senza zucchero, fragole fresche, kiwi e semi di girasole', benefits: 'La vitamina C della frutta e il magnesio dei semi aiutano a ridurre i livelli di cortisolo' },
    de: { name: 'Joghurt-Granola-Parfait', description: 'Schichten aus Naturjoghurt, zuckerfreiem Müsli, frischen Erdbeeren, Kiwi und Sonnenblumenkernen', benefits: 'Vitamin C aus Früchten und Magnesium aus Samen helfen, Cortisolspiegel zu reduzieren' },
    ja: { name: 'ヨーグルトグラノーラパフェ', description: '天然ヨーグルト、無糖グラノーラ、新鮮なイチゴ、キウイ、ひまわりの種の層', benefits: '果物のビタミンCと種のマグネシウムがコルチゾールレベルの低下を助けます' }
  },
  'b_banana_pancakes': {
    es: { name: 'Panqueques de Plátano', description: 'Panqueques esponjosos hechos con plátano maduro, avena y un toque de vainilla, con miel', benefits: 'Los carbohidratos complejos y el potasio del plátano proporcionan energía sostenida y mejoran el ánimo' },
    en: { name: 'Banana Pancakes', description: 'Fluffy pancakes made with ripe banana, oats and a touch of vanilla, with honey', benefits: 'Complex carbs and potassium from banana provide sustained energy and improve mood' },
    fr: { name: 'Pancakes à la Banane', description: 'Pancakes moelleux à la banane mûre, flocons d\'avoine et une touche de vanille, avec du miel', benefits: 'Les glucides complexes et le potassium de la banane fournissent une énergie soutenue et améliorent l\'humeur' },
    pt: { name: 'Panquecas de Banana', description: 'Panquecas fofas feitas com banana madura, aveia e um toque de baunilha, com mel', benefits: 'Carboidratos complexos e potássio da banana fornecem energia sustentada e melhoram o humor' },
    it: { name: 'Pancake alla Banana', description: 'Pancake soffici con banana matura, avena e un tocco di vaniglia, con miele', benefits: 'I carboidrati complessi e il potassio della banana forniscono energia sostenuta e migliorano l\'umore' },
    de: { name: 'Bananen-Pfannkuchen', description: 'Fluffige Pfannkuchen mit reifer Banane, Haferflocken und einem Hauch Vanille, mit Honig', benefits: 'Komplexe Kohlenhydrate und Kalium aus Bananen liefern anhaltende Energie und verbessern die Stimmung' },
    ja: { name: 'バナナパンケーキ', description: '熟したバナナ、オーツ、バニラで作ったふわふわパンケーキ、ハチミツ添え', benefits: '複合炭水化物とバナナのカリウムが持続的なエネルギーを提供し、気分を改善します' }
  },
  'b_eggs_spinach': {
    es: { name: 'Huevos Revueltos con Espinacas', description: 'Huevos revueltos cremosos con espinacas salteadas, tomate cherry y queso feta', benefits: 'Alto contenido proteico que te mantiene satisfecho y con energía durante toda la mañana' },
    en: { name: 'Scrambled Eggs with Spinach', description: 'Creamy scrambled eggs with sautéed spinach, cherry tomatoes and feta cheese', benefits: 'High protein content keeps you satisfied and energized throughout the morning' },
    fr: { name: 'Œufs Brouillés aux Épinards', description: 'Œufs brouillés crémeux avec épinards sautés, tomates cerises et feta', benefits: 'Haute teneur en protéines qui vous garde satisfait et énergique toute la matinée' },
    pt: { name: 'Ovos Mexidos com Espinafre', description: 'Ovos mexidos cremosos com espinafre salteado, tomate cereja e queijo feta', benefits: 'Alto teor de proteína que mantém você satisfeito e com energia durante toda a manhã' },
    it: { name: 'Uova Strapazzate con Spinaci', description: 'Uova strapazzate cremose con spinaci saltati, pomodorini e feta', benefits: 'Alto contenuto proteico che ti mantiene sazio ed energico per tutta la mattina' },
    de: { name: 'Rührei mit Spinat', description: 'Cremiges Rührei mit sautiertem Spinat, Kirschtomaten und Feta-Käse', benefits: 'Hoher Proteingehalt hält Sie den ganzen Morgen satt und energiegeladen' },
    ja: { name: 'ほうれん草入りスクランブルエッグ', description: 'ソテーしたほうれん草、チェリートマト、フェタチーズ入りクリーミーなスクランブルエッグ', benefits: '高タンパク質で午前中ずっと満足感とエネルギーを維持します' }
  },
  'b_chia_pudding': {
    es: { name: 'Pudín de Chía con Frutas', description: 'Semillas de chía remojadas en leche de almendras con mango fresco, coco rallado y miel', benefits: 'La fibra y los omega-3 de la chía promueven la calma digestiva y mental' },
    en: { name: 'Chia Pudding with Fruits', description: 'Chia seeds soaked in almond milk with fresh mango, shredded coconut and honey', benefits: 'Fiber and omega-3s from chia promote digestive and mental calm' },
    fr: { name: 'Pudding de Chia aux Fruits', description: 'Graines de chia trempées dans du lait d\'amande avec mangue fraîche, noix de coco râpée et miel', benefits: 'Les fibres et les oméga-3 du chia favorisent le calme digestif et mental' },
    pt: { name: 'Pudim de Chia com Frutas', description: 'Sementes de chia em leite de amêndoa com manga fresca, coco ralado e mel', benefits: 'A fibra e os ômega-3 da chia promovem a calma digestiva e mental' },
    it: { name: 'Budino di Chia con Frutta', description: 'Semi di chia in latte di mandorla con mango fresco, cocco grattugiato e miele', benefits: 'Le fibre e gli omega-3 della chia promuovono la calma digestiva e mentale' },
    de: { name: 'Chia-Pudding mit Früchten', description: 'Chiasamen in Mandelmilch mit frischer Mango, geraspelter Kokosnuss und Honig', benefits: 'Ballaststoffe und Omega-3 aus Chia fördern die Verdauungs- und geistige Ruhe' },
    ja: { name: 'チアプディングとフルーツ', description: 'アーモンドミルクに浸したチアシードに新鮮なマンゴー、ココナッツフレーク、ハチミツ', benefits: 'チアの食物繊維とオメガ3が消化と精神の落ち着きを促進します' }
  },
  'b_fruit_toast': {
    es: { name: 'Tostada con Frutas Frescas', description: 'Pan integral tostado con queso ricotta, fresas, arándanos y un chorrito de miel', benefits: 'Las frutas aportan antioxidantes y vitaminas que elevan el ánimo naturalmente' },
    en: { name: 'Fresh Fruit Toast', description: 'Toasted whole grain bread with ricotta cheese, strawberries, blueberries and a drizzle of honey', benefits: 'Fruits provide antioxidants and vitamins that naturally elevate mood' },
    fr: { name: 'Toast aux Fruits Frais', description: 'Pain complet grillé avec ricotta, fraises, myrtilles et un filet de miel', benefits: 'Les fruits apportent des antioxydants et vitamines qui élèvent naturellement l\'humeur' },
    pt: { name: 'Torrada com Frutas Frescas', description: 'Pão integral torrado com ricota, morangos, mirtilos e um fio de mel', benefits: 'As frutas fornecem antioxidantes e vitaminas que elevam naturalmente o humor' },
    it: { name: 'Toast con Frutta Fresca', description: 'Pane integrale tostato con ricotta, fragole, mirtilli e un filo di miele', benefits: 'La frutta fornisce antiossidanti e vitamine che elevano naturalmente l\'umore' },
    de: { name: 'Toast mit Frischen Früchten', description: 'Getoastetes Vollkornbrot mit Ricotta, Erdbeeren, Blaubeeren und einem Spritzer Honig', benefits: 'Früchte liefern Antioxidantien und Vitamine, die die Stimmung natürlich heben' },
    ja: { name: 'フレッシュフルーツトースト', description: '全粒粉トーストにリコッタチーズ、イチゴ、ブルーベリー、ハチミツを少々', benefits: '果物が抗酸化物質とビタミンを提供し、自然に気分を高めます' }
  },
  'b_omelette_veggies': {
    es: { name: 'Tortilla de Vegetales', description: 'Tortilla esponjosa con pimientos, champiñones, cebolla y queso cheddar', benefits: 'Proteínas de alta calidad y vegetales te dan energía duradera para el día' },
    en: { name: 'Veggie Omelette', description: 'Fluffy omelette with bell peppers, mushrooms, onion and cheddar cheese', benefits: 'High-quality proteins and vegetables give you lasting energy for the day' },
    fr: { name: 'Omelette aux Légumes', description: 'Omelette moelleuse avec poivrons, champignons, oignon et cheddar', benefits: 'Des protéines de haute qualité et des légumes vous donnent une énergie durable pour la journée' },
    pt: { name: 'Omelete de Vegetais', description: 'Omelete fofa com pimentões, cogumelos, cebola e queijo cheddar', benefits: 'Proteínas de alta qualidade e vegetais dão energia duradoura para o dia' },
    it: { name: 'Frittata di Verdure', description: 'Frittata soffice con peperoni, funghi, cipolla e cheddar', benefits: 'Proteine di alta qualità e verdure ti danno energia duratura per la giornata' },
    de: { name: 'Gemüse-Omelett', description: 'Fluffiges Omelett mit Paprika, Pilzen, Zwiebeln und Cheddar-Käse', benefits: 'Hochwertige Proteine und Gemüse geben Ihnen dauerhafte Energie für den Tag' },
    ja: { name: '野菜オムレツ', description: 'ピーマン、マッシュルーム、玉ねぎ、チェダーチーズ入りふわふわオムレツ', benefits: '高品質のタンパク質と野菜が一日を通して持続するエネルギーを与えます' }
  },
  'b_berry_smoothie': {
    es: { name: 'Smoothie de Frutos Rojos', description: 'Mezcla de fresas, frambuesas, arándanos con yogur griego y un toque de miel', benefits: 'Los frutos rojos son ricos en antioxidantes que combaten el estrés oxidativo y mejoran el ánimo' },
    en: { name: 'Berry Smoothie', description: 'Blend of strawberries, raspberries, blueberries with Greek yogurt and a touch of honey', benefits: 'Berries are rich in antioxidants that fight oxidative stress and improve mood' },
    fr: { name: 'Smoothie aux Fruits Rouges', description: 'Mélange de fraises, framboises, myrtilles avec yaourt grec et une touche de miel', benefits: 'Les fruits rouges sont riches en antioxydants qui combattent le stress oxydatif et améliorent l\'humeur' },
    pt: { name: 'Smoothie de Frutas Vermelhas', description: 'Mistura de morangos, framboesas, mirtilos com iogurte grego e um toque de mel', benefits: 'As frutas vermelhas são ricas em antioxidantes que combatem o estresse oxidativo e melhoram o humor' },
    it: { name: 'Smoothie ai Frutti di Bosco', description: 'Mix di fragole, lamponi, mirtilli con yogurt greco e un tocco di miele', benefits: 'I frutti di bosco sono ricchi di antiossidanti che combattono lo stress ossidativo e migliorano l\'umore' },
    de: { name: 'Beeren-Smoothie', description: 'Mischung aus Erdbeeren, Himbeeren, Blaubeeren mit griechischem Joghurt und einem Hauch Honig', benefits: 'Beeren sind reich an Antioxidantien, die oxidativen Stress bekämpfen und die Stimmung verbessern' },
    ja: { name: 'ベリースムージー', description: 'イチゴ、ラズベリー、ブルーベリーをギリシャヨーグルトとハチミツでブレンド', benefits: 'ベリーは酸化ストレスと戦い、気分を改善する抗酸化物質が豊富です' }
  },
  'b_granola_milk': {
    es: { name: 'Granola con Leche de Almendras', description: 'Granola casera crujiente con frutos secos, servida con leche de almendras fría', benefits: 'La combinación de carbohidratos complejos y grasas saludables mantiene niveles de energía estables' },
    en: { name: 'Granola with Almond Milk', description: 'Crunchy homemade granola with dried fruits, served with cold almond milk', benefits: 'The combination of complex carbs and healthy fats maintains stable energy levels' },
    fr: { name: 'Granola au Lait d\'Amande', description: 'Granola maison croustillant avec fruits secs, servi avec du lait d\'amande froid', benefits: 'La combinaison de glucides complexes et de graisses saines maintient des niveaux d\'énergie stables' },
    pt: { name: 'Granola com Leite de Amêndoa', description: 'Granola caseira crocante com frutas secas, servida com leite de amêndoa gelado', benefits: 'A combinação de carboidratos complexos e gorduras saudáveis mantém níveis de energia estáveis' },
    it: { name: 'Granola con Latte di Mandorla', description: 'Granola croccante fatta in casa con frutta secca, servita con latte di mandorla freddo', benefits: 'La combinazione di carboidrati complessi e grassi sani mantiene livelli di energia stabili' },
    de: { name: 'Müsli mit Mandelmilch', description: 'Knuspriges hausgemachtes Müsli mit Trockenfrüchten, serviert mit kalter Mandelmilch', benefits: 'Die Kombination aus komplexen Kohlenhydraten und gesunden Fetten hält den Energiespiegel stabil' },
    ja: { name: 'グラノーラとアーモンドミルク', description: 'ドライフルーツ入り自家製クランチグラノーラ、冷たいアーモンドミルクと一緒に', benefits: '複合炭水化物と健康的な脂質の組み合わせがエネルギーレベルを安定させます' }
  },
  'b_french_toast': {
    es: { name: 'Tostadas Francesas', description: 'Pan brioche bañado en huevo y canela, dorado a la perfección con frutos rojos', benefits: 'Un desayuno reconfortante que proporciona carbohidratos para energía y satisfacción emocional' },
    en: { name: 'French Toast', description: 'Brioche bread dipped in egg and cinnamon, golden cooked to perfection with berries', benefits: 'A comforting breakfast that provides carbohydrates for energy and emotional satisfaction' },
    fr: { name: 'Pain Perdu', description: 'Pain brioché trempé dans l\'œuf et la cannelle, doré à la perfection avec des fruits rouges', benefits: 'Un petit-déjeuner réconfortant qui fournit des glucides pour l\'énergie et la satisfaction émotionnelle' },
    pt: { name: 'Rabanada', description: 'Pão brioche mergulhado em ovo e canela, dourado na perfeição com frutas vermelhas', benefits: 'Um café da manhã reconfortante que fornece carboidratos para energia e satisfação emocional' },
    it: { name: 'French Toast', description: 'Pane brioche immerso in uovo e cannella, dorato alla perfezione con frutti di bosco', benefits: 'Una colazione confortante che fornisce carboidrati per energia e soddisfazione emotiva' },
    de: { name: 'French Toast', description: 'Brioche-Brot in Ei und Zimt getaucht, golden gebraten mit Beeren', benefits: 'Ein wohltuendes Frühstück, das Kohlenhydrate für Energie und emotionale Zufriedenheit liefert' },
    ja: { name: 'フレンチトースト', description: '卵とシナモンに浸したブリオッシュパンを完璧に焼き上げ、ベリーを添えて', benefits: 'エネルギーと感情的な満足のための炭水化物を提供する心地よい朝食' }
  },
  'b_tropical_bowl': {
    es: { name: 'Bowl Tropical', description: 'Mango fresco, piña, papaya con yogur de coco, granola y semillas de chía', benefits: 'Las frutas tropicales son ricas en vitamina C y enzimas que elevan el ánimo y la energía' },
    en: { name: 'Tropical Bowl', description: 'Fresh mango, pineapple, papaya with coconut yogurt, granola and chia seeds', benefits: 'Tropical fruits are rich in vitamin C and enzymes that elevate mood and energy' },
    fr: { name: 'Bol Tropical', description: 'Mangue fraîche, ananas, papaye avec yaourt à la noix de coco, granola et graines de chia', benefits: 'Les fruits tropicaux sont riches en vitamine C et en enzymes qui élèvent l\'humeur et l\'énergie' },
    pt: { name: 'Bowl Tropical', description: 'Manga fresca, abacaxi, mamão com iogurte de coco, granola e sementes de chia', benefits: 'As frutas tropicais são ricas em vitamina C e enzimas que elevam o humor e a energia' },
    it: { name: 'Bowl Tropicale', description: 'Mango fresco, ananas, papaya con yogurt al cocco, granola e semi di chia', benefits: 'I frutti tropicali sono ricchi di vitamina C ed enzimi che elevano l\'umore e l\'energia' },
    de: { name: 'Tropische Schüssel', description: 'Frische Mango, Ananas, Papaya mit Kokosjoghurt, Müsli und Chiasamen', benefits: 'Tropische Früchte sind reich an Vitamin C und Enzymen, die Stimmung und Energie heben' },
    ja: { name: 'トロピカルボウル', description: '新鮮なマンゴー、パイナップル、パパイヤにココナッツヨーグルト、グラノーラ、チアシード', benefits: 'トロピカルフルーツはビタミンCと酵素が豊富で、気分とエネルギーを高めます' }
  },
  'b_protein_shake': {
    es: { name: 'Batido Proteico', description: 'Proteína de suero, plátano, mantequilla de maní, leche de almendras y cacao', benefits: 'Alto en proteínas para construir músculo y mantener energía estable durante el estrés' },
    en: { name: 'Protein Shake', description: 'Whey protein, banana, peanut butter, almond milk and cocoa', benefits: 'High in protein to build muscle and maintain stable energy during stress' },
    fr: { name: 'Shake Protéiné', description: 'Protéine de lactosérum, banane, beurre de cacahuète, lait d\'amande et cacao', benefits: 'Riche en protéines pour construire le muscle et maintenir une énergie stable pendant le stress' },
    pt: { name: 'Shake de Proteína', description: 'Proteína de soro, banana, manteiga de amendoim, leite de amêndoa e cacau', benefits: 'Alto em proteínas para construir músculo e manter energia estável durante o estresse' },
    it: { name: 'Frullato Proteico', description: 'Proteine del siero, banana, burro di arachidi, latte di mandorla e cacao', benefits: 'Alto contenuto proteico per costruire muscoli e mantenere energia stabile durante lo stress' },
    de: { name: 'Protein-Shake', description: 'Molkenprotein, Banane, Erdnussbutter, Mandelmilch und Kakao', benefits: 'Reich an Proteinen zum Muskelaufbau und zur Aufrechterhaltung stabiler Energie bei Stress' },
    ja: { name: 'プロテインシェイク', description: 'ホエイプロテイン、バナナ、ピーナッツバター、アーモンドミルク、ココア', benefits: 'ストレス時に筋肉を作り、安定したエネルギーを維持するための高タンパク質' }
  },
  'b_overnight_oats': {
    es: { name: 'Avena Nocturna', description: 'Avena remojada toda la noche con leche de almendras, manzana, canela y nueces', benefits: 'Libera energía lentamente durante la mañana, manteniendo la calma y concentración' },
    en: { name: 'Overnight Oats', description: 'Oats soaked overnight with almond milk, apple, cinnamon and walnuts', benefits: 'Releases energy slowly throughout the morning, maintaining calm and focus' },
    fr: { name: 'Avoine Nocturne', description: 'Avoine trempée toute la nuit avec du lait d\'amande, pomme, cannelle et noix', benefits: 'Libère l\'énergie lentement pendant la matinée, maintenant le calme et la concentration' },
    pt: { name: 'Aveia Noturna', description: 'Aveia de molho durante a noite com leite de amêndoa, maçã, canela e nozes', benefits: 'Libera energia lentamente durante a manhã, mantendo a calma e a concentração' },
    it: { name: 'Avena Overnight', description: 'Avena in ammollo per tutta la notte con latte di mandorla, mela, cannella e noci', benefits: 'Rilascia energia lentamente durante la mattina, mantenendo calma e concentrazione' },
    de: { name: 'Overnight Oats', description: 'Über Nacht eingeweichte Haferflocken mit Mandelmilch, Apfel, Zimt und Walnüssen', benefits: 'Gibt den ganzen Morgen langsam Energie ab und erhält Ruhe und Konzentration' },
    ja: { name: 'オーバーナイトオーツ', description: 'アーモンドミルク、りんご、シナモン、クルミで一晩浸したオーツ', benefits: '午前中ゆっくりとエネルギーを放出し、落ち着きと集中力を維持します' }
  },
  'b_egg_muffins': {
    es: { name: 'Muffins de Huevo', description: 'Huevos horneados en molde con espinacas, tomate y queso parmesano', benefits: 'Proteína pura que te da energía inmediata y te mantiene activo durante horas' },
    en: { name: 'Egg Muffins', description: 'Baked eggs in molds with spinach, tomato and parmesan cheese', benefits: 'Pure protein that gives you immediate energy and keeps you active for hours' },
    fr: { name: 'Muffins aux Œufs', description: 'Œufs cuits au four dans des moules avec épinards, tomate et parmesan', benefits: 'Protéines pures qui vous donnent une énergie immédiate et vous gardent actif pendant des heures' },
    pt: { name: 'Muffins de Ovo', description: 'Ovos assados em forma com espinafre, tomate e parmesão', benefits: 'Proteína pura que dá energia imediata e mantém você ativo por horas' },
    it: { name: 'Muffin di Uova', description: 'Uova al forno in stampini con spinaci, pomodoro e parmigiano', benefits: 'Proteine pure che ti danno energia immediata e ti mantengono attivo per ore' },
    de: { name: 'Ei-Muffins', description: 'Im Ofen gebackene Eier in Formen mit Spinat, Tomate und Parmesan', benefits: 'Reines Protein, das sofortige Energie gibt und stundenlang aktiv hält' },
    ja: { name: 'エッグマフィン', description: 'ほうれん草、トマト、パルメザンチーズを入れた型で焼いた卵', benefits: '即座にエネルギーを与え、何時間もアクティブに保つ純粋なタンパク質' }
  },
  'b_acai_bowl': {
    es: { name: 'Bowl de Açaí', description: 'Açaí cremoso con plátano, granola, coco rallado y mantequilla de almendras', benefits: 'El açaí es uno de los superalimentos más ricos en antioxidantes para energía y vitalidad' },
    en: { name: 'Açaí Bowl', description: 'Creamy açaí with banana, granola, shredded coconut and almond butter', benefits: 'Açaí is one of the richest superfoods in antioxidants for energy and vitality' },
    fr: { name: 'Bol d\'Açaí', description: 'Açaí crémeux avec banane, granola, noix de coco râpée et beurre d\'amande', benefits: 'L\'açaí est l\'un des super-aliments les plus riches en antioxydants pour l\'énergie et la vitalité' },
    pt: { name: 'Bowl de Açaí', description: 'Açaí cremoso com banana, granola, coco ralado e manteiga de amêndoa', benefits: 'O açaí é um dos superalimentos mais ricos em antioxidantes para energia e vitalidade' },
    it: { name: 'Bowl di Açaí', description: 'Açaí cremoso con banana, granola, cocco grattugiato e burro di mandorle', benefits: 'L\'açaí è uno dei superfood più ricchi di antiossidanti per energia e vitalità' },
    de: { name: 'Açaí-Schüssel', description: 'Cremiges Açaí mit Banane, Müsli, geraspelter Kokosnuss und Mandelbutter', benefits: 'Açaí ist eines der antioxidantienreichsten Superfoods für Energie und Vitalität' },
    ja: { name: 'アサイーボウル', description: 'クリーミーなアサイーにバナナ、グラノーラ、ココナッツフレーク、アーモンドバター', benefits: 'アサイーはエネルギーと活力のための抗酸化物質が最も豊富なスーパーフードの一つです' }
  },
  'b_warm_quinoa': {
    es: { name: 'Quinoa Caliente con Frutas', description: 'Quinoa cocida con leche de coco, manzana caramelizada, pasas y canela', benefits: 'La quinoa contiene todos los aminoácidos esenciales y magnesio para reducir el estrés' },
    en: { name: 'Warm Quinoa with Fruits', description: 'Cooked quinoa with coconut milk, caramelized apple, raisins and cinnamon', benefits: 'Quinoa contains all essential amino acids and magnesium to reduce stress' },
    fr: { name: 'Quinoa Chaud aux Fruits', description: 'Quinoa cuit avec du lait de coco, pomme caramélisée, raisins secs et cannelle', benefits: 'Le quinoa contient tous les acides aminés essentiels et du magnésium pour réduire le stress' },
    pt: { name: 'Quinoa Quente com Frutas', description: 'Quinoa cozida com leite de coco, maçã caramelizada, passas e canela', benefits: 'A quinoa contém todos os aminoácidos essenciais e magnésio para reduzir o estresse' },
    it: { name: 'Quinoa Calda con Frutta', description: 'Quinoa cotta con latte di cocco, mela caramellata, uvetta e cannella', benefits: 'La quinoa contiene tutti gli aminoacidi essenziali e magnesio per ridurre lo stress' },
    de: { name: 'Warmer Quinoa mit Früchten', description: 'Gekochter Quinoa mit Kokosmilch, karamellisiertem Apfel, Rosinen und Zimt', benefits: 'Quinoa enthält alle essentiellen Aminosäuren und Magnesium zur Stressreduzierung' },
    ja: { name: 'フルーツ入りホットキヌア', description: 'ココナッツミルク、キャラメルアップル、レーズン、シナモンで調理したキヌア', benefits: 'キヌアはストレスを軽減するためのすべての必須アミノ酸とマグネシウムを含んでいます' }
  },

  // LUNCH TRANSLATIONS
  'l_chicken_salad': {
    es: { name: 'Ensalada de Pollo a la Parrilla', description: 'Pechuga de pollo a la parrilla sobre mezcla de lechugas con tomate, pepino y aderezo de limón', benefits: 'Alta en proteínas magras que te mantienen energético y satisfecho durante toda la tarde' },
    en: { name: 'Grilled Chicken Salad', description: 'Grilled chicken breast over mixed greens with tomato, cucumber and lemon dressing', benefits: 'High in lean protein that keeps you energetic and satisfied throughout the afternoon' },
    fr: { name: 'Salade de Poulet Grillé', description: 'Blanc de poulet grillé sur mélange de salades avec tomate, concombre et vinaigrette au citron', benefits: 'Riche en protéines maigres qui vous gardent énergique et satisfait tout l\'après-midi' },
    pt: { name: 'Salada de Frango Grelhado', description: 'Peito de frango grelhado sobre mix de folhas com tomate, pepino e molho de limão', benefits: 'Alta em proteínas magras que mantêm você energético e satisfeito durante toda a tarde' },
    it: { name: 'Insalata di Pollo alla Griglia', description: 'Petto di pollo grigliato su mix di insalate con pomodoro, cetriolo e condimento al limone', benefits: 'Ricca di proteine magre che ti mantengono energico e soddisfatto per tutto il pomeriggio' },
    de: { name: 'Gegrillter Hähnchensalat', description: 'Gegrillte Hähnchenbrust auf gemischtem Salat mit Tomate, Gurke und Zitronendressing', benefits: 'Reich an magerem Protein, das Sie den ganzen Nachmittag energisch und zufrieden hält' },
    ja: { name: 'グリルチキンサラダ', description: 'ミックスグリーンの上にグリルチキン、トマト、きゅうり、レモンドレッシング', benefits: '午後中ずっとエネルギッシュで満足感を維持する赤身タンパク質が豊富' }
  },
  'l_quinoa_bowl': {
    es: { name: 'Bowl de Quinoa con Vegetales', description: 'Quinoa esponjosa con aguacate, edamame, zanahoria rallada y aderezo de tahini', benefits: 'Proteína vegetal completa que proporciona calma y energía sostenida' },
    en: { name: 'Quinoa Veggie Bowl', description: 'Fluffy quinoa with avocado, edamame, shredded carrot and tahini dressing', benefits: 'Complete plant protein that provides calm and sustained energy' },
    fr: { name: 'Bol de Quinoa aux Légumes', description: 'Quinoa moelleux avec avocat, edamame, carotte râpée et sauce tahini', benefits: 'Protéine végétale complète qui fournit calme et énergie soutenue' },
    pt: { name: 'Bowl de Quinoa com Vegetais', description: 'Quinoa fofa com abacate, edamame, cenoura ralada e molho de tahini', benefits: 'Proteína vegetal completa que proporciona calma e energia sustentada' },
    it: { name: 'Bowl di Quinoa con Verdure', description: 'Quinoa soffice con avocado, edamame, carota grattugiata e salsa tahini', benefits: 'Proteina vegetale completa che fornisce calma e energia sostenuta' },
    de: { name: 'Quinoa-Gemüse-Bowl', description: 'Fluffiger Quinoa mit Avocado, Edamame, geraspelter Karotte und Tahini-Dressing', benefits: 'Vollständiges pflanzliches Protein, das Ruhe und anhaltende Energie bietet' },
    ja: { name: 'キヌア野菜ボウル', description: 'ふわふわキヌアにアボカド、枝豆、にんじん、タヒニドレッシング', benefits: '落ち着きと持続的なエネルギーを提供する完全な植物性タンパク質' }
  },
  'l_salmon_veggies': {
    es: { name: 'Salmón con Vegetales Asados', description: 'Filete de salmón al horno con espárragos, brócoli y batata asada', benefits: 'Omega-3 del salmón mejora la función cerebral y eleva el estado de ánimo naturalmente' },
    en: { name: 'Salmon with Roasted Vegetables', description: 'Baked salmon fillet with asparagus, broccoli and roasted sweet potato', benefits: 'Omega-3 from salmon improves brain function and naturally elevates mood' },
    fr: { name: 'Saumon avec Légumes Rôtis', description: 'Filet de saumon au four avec asperges, brocoli et patate douce rôtie', benefits: 'Les oméga-3 du saumon améliorent la fonction cérébrale et élèvent naturellement l\'humeur' },
    pt: { name: 'Salmão com Vegetais Assados', description: 'Filé de salmão assado com aspargos, brócolis e batata-doce assada', benefits: 'Ômega-3 do salmão melhora a função cerebral e eleva naturalmente o humor' },
    it: { name: 'Salmone con Verdure Arrosto', description: 'Filetto di salmone al forno con asparagi, broccoli e patata dolce arrostita', benefits: 'Gli omega-3 del salmone migliorano la funzione cerebrale e elevano naturalmente l\'umore' },
    de: { name: 'Lachs mit Geröstetem Gemüse', description: 'Gebackenes Lachsfilet mit Spargel, Brokkoli und gerösteter Süßkartoffel', benefits: 'Omega-3 aus Lachs verbessert die Gehirnfunktion und hebt natürlich die Stimmung' },
    ja: { name: 'サーモンとローストベジタブル', description: '焼きサーモンにアスパラガス、ブロッコリー、ローストさつまいも', benefits: 'サーモンのオメガ3が脳機能を改善し、自然に気分を高めます' }
  },
  'l_turkey_wrap': {
    es: { name: 'Wrap de Pavo', description: 'Tortilla integral con pavo, aguacate, lechuga, tomate y mostaza de miel', benefits: 'Proteína magra del pavo y grasas saludables te mantienen activo y concentrado' },
    en: { name: 'Turkey Wrap', description: 'Whole wheat tortilla with turkey, avocado, lettuce, tomato and honey mustard', benefits: 'Lean protein from turkey and healthy fats keep you active and focused' },
    fr: { name: 'Wrap de Dinde', description: 'Tortilla complète avec dinde, avocat, laitue, tomate et moutarde au miel', benefits: 'La protéine maigre de la dinde et les graisses saines vous gardent actif et concentré' },
    pt: { name: 'Wrap de Peru', description: 'Tortilha integral com peru, abacate, alface, tomate e mostarda com mel', benefits: 'Proteína magra do peru e gorduras saudáveis mantêm você ativo e focado' },
    it: { name: 'Wrap di Tacchino', description: 'Tortilla integrale con tacchino, avocado, lattuga, pomodoro e senape al miele', benefits: 'Proteine magre del tacchino e grassi sani ti mantengono attivo e concentrato' },
    de: { name: 'Truthahn-Wrap', description: 'Vollkorn-Tortilla mit Pute, Avocado, Salat, Tomate und Honig-Senf', benefits: 'Mageres Protein vom Truthahn und gesunde Fette halten Sie aktiv und konzentriert' },
    ja: { name: 'ターキーラップ', description: '全粒粉トルティーヤにターキー、アボカド、レタス、トマト、ハニーマスタード', benefits: 'ターキーの赤身タンパク質と健康的な脂質がアクティブで集中力を維持します' }
  },
  'l_veggie_soup': {
    es: { name: 'Sopa de Vegetales', description: 'Sopa casera con zanahorias, apio, papas, espinacas y hierbas frescas', benefits: 'Reconfortante y nutritiva, ideal para calmar el estrés y nutrir el cuerpo' },
    en: { name: 'Vegetable Soup', description: 'Homemade soup with carrots, celery, potatoes, spinach and fresh herbs', benefits: 'Comforting and nutritious, ideal for calming stress and nourishing the body' },
    fr: { name: 'Soupe de Légumes', description: 'Soupe maison avec carottes, céleri, pommes de terre, épinards et herbes fraîches', benefits: 'Réconfortante et nutritive, idéale pour calmer le stress et nourrir le corps' },
    pt: { name: 'Sopa de Legumes', description: 'Sopa caseira com cenouras, aipo, batatas, espinafre e ervas frescas', benefits: 'Reconfortante e nutritiva, ideal para acalmar o estresse e nutrir o corpo' },
    it: { name: 'Zuppa di Verdure', description: 'Zuppa fatta in casa con carote, sedano, patate, spinaci e erbe fresche', benefits: 'Confortante e nutriente, ideale per calmare lo stress e nutrire il corpo' },
    de: { name: 'Gemüsesuppe', description: 'Hausgemachte Suppe mit Karotten, Sellerie, Kartoffeln, Spinat und frischen Kräutern', benefits: 'Wohltuend und nahrhaft, ideal zur Stressberuhigung und Körpernährung' },
    ja: { name: '野菜スープ', description: 'にんじん、セロリ、じゃがいも、ほうれん草、フレッシュハーブの自家製スープ', benefits: '心地よく栄養豊富で、ストレスを落ち着かせ体を養うのに最適' }
  },
  'l_tuna_sandwich': {
    es: { name: 'Sándwich de Atún', description: 'Pan integral con atún, mayonesa light, lechuga, tomate y pepinillos', benefits: 'El atún es rico en proteínas y omega-3 que mejoran la energía y concentración' },
    en: { name: 'Tuna Sandwich', description: 'Whole grain bread with tuna, light mayo, lettuce, tomato and pickles', benefits: 'Tuna is rich in protein and omega-3 that improve energy and concentration' },
    fr: { name: 'Sandwich au Thon', description: 'Pain complet avec thon, mayonnaise légère, laitue, tomate et cornichons', benefits: 'Le thon est riche en protéines et oméga-3 qui améliorent l\'énergie et la concentration' },
    pt: { name: 'Sanduíche de Atum', description: 'Pão integral com atum, maionese light, alface, tomate e picles', benefits: 'O atum é rico em proteínas e ômega-3 que melhoram a energia e concentração' },
    it: { name: 'Sandwich al Tonno', description: 'Pane integrale con tonno, maionese light, lattuga, pomodoro e cetriolini', benefits: 'Il tonno è ricco di proteine e omega-3 che migliorano energia e concentrazione' },
    de: { name: 'Thunfisch-Sandwich', description: 'Vollkornbrot mit Thunfisch, leichter Mayo, Salat, Tomate und Gurken', benefits: 'Thunfisch ist reich an Protein und Omega-3, die Energie und Konzentration verbessern' },
    ja: { name: 'ツナサンドイッチ', description: '全粒粉パンにツナ、ライトマヨネーズ、レタス、トマト、ピクルス', benefits: 'ツナはエネルギーと集中力を改善するタンパク質とオメガ3が豊富' }
  },
  'l_buddha_bowl': {
    es: { name: 'Buddha Bowl', description: 'Arroz integral, garbanzos, aguacate, zanahoria, col roja y hummus', benefits: 'Combinación equilibrada de carbohidratos, proteínas y grasas para energía constante' },
    en: { name: 'Buddha Bowl', description: 'Brown rice, chickpeas, avocado, carrot, red cabbage and hummus', benefits: 'Balanced combination of carbs, protein and fats for steady energy' },
    fr: { name: 'Buddha Bowl', description: 'Riz brun, pois chiches, avocat, carotte, chou rouge et houmous', benefits: 'Combinaison équilibrée de glucides, protéines et graisses pour une énergie constante' },
    pt: { name: 'Buddha Bowl', description: 'Arroz integral, grão-de-bico, abacate, cenoura, repolho roxo e hummus', benefits: 'Combinação equilibrada de carboidratos, proteínas e gorduras para energia constante' },
    it: { name: 'Buddha Bowl', description: 'Riso integrale, ceci, avocado, carota, cavolo rosso e hummus', benefits: 'Combinazione equilibrata di carboidrati, proteine e grassi per energia costante' },
    de: { name: 'Buddha Bowl', description: 'Brauner Reis, Kichererbsen, Avocado, Karotte, Rotkohl und Hummus', benefits: 'Ausgewogene Kombination aus Kohlenhydraten, Protein und Fetten für stetige Energie' },
    ja: { name: 'ブッダボウル', description: '玄米、ひよこ豆、アボカド、にんじん、紫キャベツ、フムス', benefits: '安定したエネルギーのための炭水化物、タンパク質、脂質のバランスの取れた組み合わせ' }
  },
  'l_pasta_primavera': {
    es: { name: 'Pasta Primavera', description: 'Pasta con calabacín, pimientos, tomates cherry, albahaca y parmesano', benefits: 'Carbohidratos que elevan el ánimo con vegetales ricos en antioxidantes' },
    en: { name: 'Pasta Primavera', description: 'Pasta with zucchini, bell peppers, cherry tomatoes, basil and parmesan', benefits: 'Mood-boosting carbs with antioxidant-rich vegetables' },
    fr: { name: 'Pâtes Primavera', description: 'Pâtes avec courgette, poivrons, tomates cerises, basilic et parmesan', benefits: 'Glucides qui élèvent l\'humeur avec des légumes riches en antioxydants' },
    pt: { name: 'Massa Primavera', description: 'Massa com abobrinha, pimentões, tomates cereja, manjericão e parmesão', benefits: 'Carboidratos que elevam o humor com vegetais ricos em antioxidantes' },
    it: { name: 'Pasta Primavera', description: 'Pasta con zucchine, peperoni, pomodorini, basilico e parmigiano', benefits: 'Carboidrati che elevano l\'umore con verdure ricche di antiossidanti' },
    de: { name: 'Pasta Primavera', description: 'Pasta mit Zucchini, Paprika, Kirschtomaten, Basilikum und Parmesan', benefits: 'Stimmungsaufhellende Kohlenhydrate mit antioxidantienreichem Gemüse' },
    ja: { name: 'パスタプリマベーラ', description: 'ズッキーニ、パプリカ、チェリートマト、バジル、パルメザン入りパスタ', benefits: '抗酸化物質豊富な野菜と気分を高める炭水化物' }
  },
  'l_grilled_chicken': {
    es: { name: 'Pollo a la Parrilla con Arroz', description: 'Pechuga de pollo marinada con arroz integral y vegetales salteados', benefits: 'Proteína de alta calidad para mantener la energía y el rendimiento durante el día' },
    en: { name: 'Grilled Chicken with Rice', description: 'Marinated chicken breast with brown rice and sautéed vegetables', benefits: 'High-quality protein to maintain energy and performance throughout the day' },
    fr: { name: 'Poulet Grillé avec Riz', description: 'Blanc de poulet mariné avec riz brun et légumes sautés', benefits: 'Protéine de haute qualité pour maintenir l\'énergie et la performance toute la journée' },
    pt: { name: 'Frango Grelhado com Arroz', description: 'Peito de frango marinado com arroz integral e vegetais salteados', benefits: 'Proteína de alta qualidade para manter energia e desempenho durante o dia' },
    it: { name: 'Pollo alla Griglia con Riso', description: 'Petto di pollo marinato con riso integrale e verdure saltate', benefits: 'Proteine di alta qualità per mantenere energia e prestazioni durante il giorno' },
    de: { name: 'Gegrilltes Hähnchen mit Reis', description: 'Marinierte Hähnchenbrust mit braunem Reis und sautiertem Gemüse', benefits: 'Hochwertiges Protein zur Aufrechterhaltung von Energie und Leistung den ganzen Tag' },
    ja: { name: 'グリルチキンライス', description: 'マリネチキン胸肉に玄米とソテー野菜', benefits: '一日中エネルギーとパフォーマンスを維持する高品質タンパク質' }
  },
  'l_lentil_soup': {
    es: { name: 'Sopa de Lentejas', description: 'Lentejas cocidas con zanahoria, tomate, cebolla y especias aromáticas', benefits: 'Las lentejas son ricas en hierro y vitaminas B que combaten la fatiga y el estrés' },
    en: { name: 'Lentil Soup', description: 'Cooked lentils with carrot, tomato, onion and aromatic spices', benefits: 'Lentils are rich in iron and B vitamins that fight fatigue and stress' },
    fr: { name: 'Soupe de Lentilles', description: 'Lentilles cuites avec carotte, tomate, oignon et épices aromatiques', benefits: 'Les lentilles sont riches en fer et vitamines B qui combattent la fatigue et le stress' },
    pt: { name: 'Sopa de Lentilhas', description: 'Lentilhas cozidas com cenoura, tomate, cebola e especiarias aromáticas', benefits: 'As lentilhas são ricas em ferro e vitaminas B que combatem a fadiga e o estresse' },
    it: { name: 'Zuppa di Lenticchie', description: 'Lenticchie cotte con carota, pomodoro, cipolla e spezie aromatiche', benefits: 'Le lenticchie sono ricche di ferro e vitamine B che combattono fatica e stress' },
    de: { name: 'Linsensuppe', description: 'Gekochte Linsen mit Karotte, Tomate, Zwiebel und aromatischen Gewürzen', benefits: 'Linsen sind reich an Eisen und B-Vitaminen, die Müdigkeit und Stress bekämpfen' },
    ja: { name: 'レンズ豆のスープ', description: 'にんじん、トマト、玉ねぎ、香辛料で煮たレンズ豆', benefits: 'レンズ豆は疲労とストレスと戦う鉄分とビタミンBが豊富' }
  },
  'l_shrimp_salad': {
    es: { name: 'Ensalada de Camarones', description: 'Camarones a la parrilla sobre lechugas mixtas con mango, aguacate y vinagreta cítrica', benefits: 'Los camarones aportan proteína y zinc que mejoran el ánimo y la energía' },
    en: { name: 'Shrimp Salad', description: 'Grilled shrimp over mixed greens with mango, avocado and citrus vinaigrette', benefits: 'Shrimp provides protein and zinc that improve mood and energy' },
    fr: { name: 'Salade de Crevettes', description: 'Crevettes grillées sur mélange de salades avec mangue, avocat et vinaigrette aux agrumes', benefits: 'Les crevettes apportent protéines et zinc qui améliorent l\'humeur et l\'énergie' },
    pt: { name: 'Salada de Camarão', description: 'Camarões grelhados sobre mix de folhas com manga, abacate e vinagrete cítrico', benefits: 'Os camarões fornecem proteína e zinco que melhoram o humor e a energia' },
    it: { name: 'Insalata di Gamberi', description: 'Gamberi grigliati su mix di insalate con mango, avocado e vinaigrette agli agrumi', benefits: 'I gamberi forniscono proteine e zinco che migliorano l\'umore e l\'energia' },
    de: { name: 'Garnelensalat', description: 'Gegrillte Garnelen auf gemischtem Salat mit Mango, Avocado und Zitrus-Vinaigrette', benefits: 'Garnelen liefern Protein und Zink, die Stimmung und Energie verbessern' },
    ja: { name: 'エビサラダ', description: 'ミックスグリーンの上にグリルエビ、マンゴー、アボカド、シトラスビネグレット', benefits: 'エビは気分とエネルギーを改善するタンパク質と亜鉛を提供します' }
  },
  'l_veggie_stir_fry': {
    es: { name: 'Salteado de Vegetales', description: 'Brócoli, pimientos, zanahorias y tofu salteados con salsa de soja y jengibre', benefits: 'Vegetales coloridos ricos en vitaminas que aumentan la energía y vitalidad' },
    en: { name: 'Veggie Stir Fry', description: 'Broccoli, peppers, carrots and tofu stir-fried with soy sauce and ginger', benefits: 'Colorful vegetables rich in vitamins that boost energy and vitality' },
    fr: { name: 'Sauté de Légumes', description: 'Brocoli, poivrons, carottes et tofu sautés avec sauce soja et gingembre', benefits: 'Légumes colorés riches en vitamines qui augmentent l\'énergie et la vitalité' },
    pt: { name: 'Legumes Salteados', description: 'Brócolis, pimentões, cenouras e tofu salteados com molho de soja e gengibre', benefits: 'Vegetais coloridos ricos em vitaminas que aumentam a energia e vitalidade' },
    it: { name: 'Verdure Saltate', description: 'Broccoli, peperoni, carote e tofu saltati con salsa di soia e zenzero', benefits: 'Verdure colorate ricche di vitamine che aumentano energia e vitalità' },
    de: { name: 'Gemüsepfanne', description: 'Brokkoli, Paprika, Karotten und Tofu mit Sojasauce und Ingwer gebraten', benefits: 'Buntes Gemüse reich an Vitaminen, die Energie und Vitalität steigern' },
    ja: { name: '野菜炒め', description: 'ブロッコリー、パプリカ、にんじん、豆腐を醤油と生姜で炒め', benefits: 'エネルギーと活力を高めるビタミン豊富なカラフルな野菜' }
  },
  'l_greek_salad': {
    es: { name: 'Ensalada Griega', description: 'Tomate, pepino, aceitunas, cebolla roja, queso feta y aderezo de orégano', benefits: 'Grasas saludables del aceite de oliva y feta que promueven la calma mental' },
    en: { name: 'Greek Salad', description: 'Tomato, cucumber, olives, red onion, feta cheese and oregano dressing', benefits: 'Healthy fats from olive oil and feta that promote mental calm' },
    fr: { name: 'Salade Grecque', description: 'Tomate, concombre, olives, oignon rouge, feta et assaisonnement à l\'origan', benefits: 'Graisses saines de l\'huile d\'olive et de la feta qui favorisent le calme mental' },
    pt: { name: 'Salada Grega', description: 'Tomate, pepino, azeitonas, cebola roxa, queijo feta e molho de orégano', benefits: 'Gorduras saudáveis do azeite e feta que promovem a calma mental' },
    it: { name: 'Insalata Greca', description: 'Pomodoro, cetriolo, olive, cipolla rossa, feta e condimento all\'origano', benefits: 'Grassi sani dall\'olio d\'oliva e feta che promuovono la calma mentale' },
    de: { name: 'Griechischer Salat', description: 'Tomate, Gurke, Oliven, rote Zwiebel, Feta und Oregano-Dressing', benefits: 'Gesunde Fette aus Olivenöl und Feta, die geistige Ruhe fördern' },
    ja: { name: 'ギリシャサラダ', description: 'トマト、きゅうり、オリーブ、赤玉ねぎ、フェタチーズ、オレガノドレッシング', benefits: 'オリーブオイルとフェタの健康的な脂質が精神的な落ち着きを促進します' }
  },
  'l_burrito_bowl': {
    es: { name: 'Burrito Bowl', description: 'Arroz con frijoles negros, pollo, maíz, pico de gallo, aguacate y crema', benefits: 'Comida completa y satisfactoria que proporciona energía duradera y buen humor' },
    en: { name: 'Burrito Bowl', description: 'Rice with black beans, chicken, corn, pico de gallo, avocado and cream', benefits: 'Complete and satisfying meal that provides lasting energy and good mood' },
    fr: { name: 'Burrito Bowl', description: 'Riz avec haricots noirs, poulet, maïs, pico de gallo, avocat et crème', benefits: 'Repas complet et satisfaisant qui fournit une énergie durable et bonne humeur' },
    pt: { name: 'Burrito Bowl', description: 'Arroz com feijão preto, frango, milho, pico de gallo, abacate e creme', benefits: 'Refeição completa e satisfatória que proporciona energia duradoura e bom humor' },
    it: { name: 'Burrito Bowl', description: 'Riso con fagioli neri, pollo, mais, pico de gallo, avocado e panna', benefits: 'Pasto completo e soddisfacente che fornisce energia duratura e buon umore' },
    de: { name: 'Burrito Bowl', description: 'Reis mit schwarzen Bohnen, Hähnchen, Mais, Pico de Gallo, Avocado und Sahne', benefits: 'Vollständige und befriedigende Mahlzeit, die anhaltende Energie und gute Laune bietet' },
    ja: { name: 'ブリトーボウル', description: 'ライスに黒豆、チキン、コーン、ピコデガロ、アボカド、クリーム', benefits: '持続するエネルギーと良い気分を提供する完全で満足な食事' }
  },
  'l_avocado_salad': {
    es: { name: 'Ensalada de Aguacate', description: 'Aguacate cremoso con tomate, cebolla morada, cilantro y limón sobre lechugas', benefits: 'Las grasas saludables del aguacate nutren el cerebro y promueven la calma' },
    en: { name: 'Avocado Salad', description: 'Creamy avocado with tomato, red onion, cilantro and lime over greens', benefits: 'Healthy fats from avocado nourish the brain and promote calm' },
    fr: { name: 'Salade d\'Avocat', description: 'Avocat crémeux avec tomate, oignon rouge, coriandre et citron vert sur salade', benefits: 'Les graisses saines de l\'avocat nourrissent le cerveau et favorisent le calme' },
    pt: { name: 'Salada de Abacate', description: 'Abacate cremoso com tomate, cebola roxa, coentro e limão sobre folhas', benefits: 'As gorduras saudáveis do abacate nutrem o cérebro e promovem a calma' },
    it: { name: 'Insalata di Avocado', description: 'Avocado cremoso con pomodoro, cipolla rossa, coriandolo e lime su insalata', benefits: 'I grassi sani dell\'avocado nutrono il cervello e promuovono la calma' },
    de: { name: 'Avocado-Salat', description: 'Cremige Avocado mit Tomate, roter Zwiebel, Koriander und Limette auf Salat', benefits: 'Gesunde Fette aus Avocado nähren das Gehirn und fördern Ruhe' },
    ja: { name: 'アボカドサラダ', description: 'グリーンの上にクリーミーなアボカド、トマト、赤玉ねぎ、コリアンダー、ライム', benefits: 'アボカドの健康的な脂質が脳を養い、落ち着きを促進します' }
  },
  'l_chicken_soup': {
    es: { name: 'Sopa de Pollo', description: 'Caldo de pollo casero con fideos, zanahoria, apio y hierbas frescas', benefits: 'Sopa reconfortante que calma el estrés y proporciona hidratación y nutrientes' },
    en: { name: 'Chicken Soup', description: 'Homemade chicken broth with noodles, carrot, celery and fresh herbs', benefits: 'Comforting soup that calms stress and provides hydration and nutrients' },
    fr: { name: 'Soupe de Poulet', description: 'Bouillon de poulet maison avec nouilles, carotte, céleri et herbes fraîches', benefits: 'Soupe réconfortante qui calme le stress et fournit hydratation et nutriments' },
    pt: { name: 'Sopa de Frango', description: 'Caldo de frango caseiro com macarrão, cenoura, aipo e ervas frescas', benefits: 'Sopa reconfortante que acalma o estresse e fornece hidratação e nutrientes' },
    it: { name: 'Zuppa di Pollo', description: 'Brodo di pollo fatto in casa con tagliatelle, carota, sedano e erbe fresche', benefits: 'Zuppa confortante che calma lo stress e fornisce idratazione e nutrienti' },
    de: { name: 'Hühnersuppe', description: 'Hausgemachte Hühnerbrühe mit Nudeln, Karotte, Sellerie und frischen Kräutern', benefits: 'Wohltuende Suppe, die Stress beruhigt und Flüssigkeit und Nährstoffe liefert' },
    ja: { name: 'チキンスープ', description: '自家製チキンブロスに麺、にんじん、セロリ、フレッシュハーブ', benefits: 'ストレスを落ち着かせ、水分と栄養を提供する心地よいスープ' }
  },
  'l_falafel_wrap': {
    es: { name: 'Wrap de Falafel', description: 'Falafel crujiente con hummus, tomate, pepino, lechuga y salsa tahini', benefits: 'Proteína vegetal de los garbanzos que proporciona energía estable y satisfacción' },
    en: { name: 'Falafel Wrap', description: 'Crispy falafel with hummus, tomato, cucumber, lettuce and tahini sauce', benefits: 'Plant protein from chickpeas that provides stable energy and satisfaction' },
    fr: { name: 'Wrap de Falafel', description: 'Falafel croustillant avec houmous, tomate, concombre, laitue et sauce tahini', benefits: 'Protéine végétale des pois chiches qui fournit une énergie stable et satisfaction' },
    pt: { name: 'Wrap de Falafel', description: 'Falafel crocante com hummus, tomate, pepino, alface e molho tahini', benefits: 'Proteína vegetal do grão-de-bico que proporciona energia estável e satisfação' },
    it: { name: 'Wrap di Falafel', description: 'Falafel croccante con hummus, pomodoro, cetriolo, lattuga e salsa tahini', benefits: 'Proteine vegetali dei ceci che forniscono energia stabile e soddisfazione' },
    de: { name: 'Falafel-Wrap', description: 'Knuspriger Falafel mit Hummus, Tomate, Gurke, Salat und Tahini-Sauce', benefits: 'Pflanzliches Protein aus Kichererbsen, das stabile Energie und Zufriedenheit bietet' },
    ja: { name: 'ファラフェルラップ', description: 'カリカリファラフェルにフムス、トマト、きゅうり、レタス、タヒニソース', benefits: 'ひよこ豆の植物性タンパク質が安定したエネルギーと満足感を提供します' }
  },
  'l_poke_bowl': {
    es: { name: 'Poke Bowl', description: 'Atún fresco marinado con arroz, aguacate, edamame, alga y sésamo', benefits: 'Pescado crudo rico en omega-3 que mejora el ánimo y la función cerebral' },
    en: { name: 'Poke Bowl', description: 'Fresh marinated tuna with rice, avocado, edamame, seaweed and sesame', benefits: 'Raw fish rich in omega-3 that improves mood and brain function' },
    fr: { name: 'Poke Bowl', description: 'Thon frais mariné avec riz, avocat, edamame, algue et sésame', benefits: 'Poisson cru riche en oméga-3 qui améliore l\'humeur et la fonction cérébrale' },
    pt: { name: 'Poke Bowl', description: 'Atum fresco marinado com arroz, abacate, edamame, alga e gergelim', benefits: 'Peixe cru rico em ômega-3 que melhora o humor e a função cerebral' },
    it: { name: 'Poke Bowl', description: 'Tonno fresco marinato con riso, avocado, edamame, alghe e sesamo', benefits: 'Pesce crudo ricco di omega-3 che migliora l\'umore e la funzione cerebrale' },
    de: { name: 'Poke Bowl', description: 'Frischer marinierter Thunfisch mit Reis, Avocado, Edamame, Algen und Sesam', benefits: 'Roher Fisch reich an Omega-3, der Stimmung und Gehirnfunktion verbessert' },
    ja: { name: 'ポケボウル', description: '新鮮なマグロの漬けにライス、アボカド、枝豆、海藻、ゴマ', benefits: '気分と脳機能を改善するオメガ3が豊富な生魚' }
  },
  'l_caesar_salad': {
    es: { name: 'Ensalada César', description: 'Lechuga romana con pollo, crutones, parmesano y aderezo césar cremoso', benefits: 'Comida ligera pero satisfactoria que mantiene la mente clara y tranquila' },
    en: { name: 'Caesar Salad', description: 'Romaine lettuce with chicken, croutons, parmesan and creamy caesar dressing', benefits: 'Light but satisfying meal that keeps the mind clear and calm' },
    fr: { name: 'Salade César', description: 'Laitue romaine avec poulet, croûtons, parmesan et sauce césar crémeuse', benefits: 'Repas léger mais satisfaisant qui garde l\'esprit clair et calme' },
    pt: { name: 'Salada César', description: 'Alface romana com frango, croutons, parmesão e molho césar cremoso', benefits: 'Refeição leve mas satisfatória que mantém a mente clara e calma' },
    it: { name: 'Insalata Caesar', description: 'Lattuga romana con pollo, crostini, parmigiano e condimento caesar cremoso', benefits: 'Pasto leggero ma soddisfacente che mantiene la mente chiara e calma' },
    de: { name: 'Caesar-Salat', description: 'Römersalat mit Hähnchen, Croutons, Parmesan und cremigem Caesar-Dressing', benefits: 'Leichte aber befriedigende Mahlzeit, die den Geist klar und ruhig hält' },
    ja: { name: 'シーザーサラダ', description: 'ロメインレタスにチキン、クルトン、パルメザン、クリーミーシーザードレッシング', benefits: '心を明瞭で穏やかに保つ軽いが満足感のある食事' }
  },
  'l_mushroom_risotto': {
    es: { name: 'Risotto de Champiñones', description: 'Arroz arborio cremoso con champiñones variados, parmesano y trufa', benefits: 'Carbohidratos reconfortantes que elevan el ánimo y proporcionan satisfacción' },
    en: { name: 'Mushroom Risotto', description: 'Creamy arborio rice with mixed mushrooms, parmesan and truffle', benefits: 'Comforting carbs that elevate mood and provide satisfaction' },
    fr: { name: 'Risotto aux Champignons', description: 'Riz arborio crémeux avec champignons variés, parmesan et truffe', benefits: 'Glucides réconfortants qui élèvent l\'humeur et fournissent satisfaction' },
    pt: { name: 'Risoto de Cogumelos', description: 'Arroz arbório cremoso com cogumelos variados, parmesão e trufa', benefits: 'Carboidratos reconfortantes que elevam o humor e proporcionam satisfação' },
    it: { name: 'Risotto ai Funghi', description: 'Riso arborio cremoso con funghi misti, parmigiano e tartufo', benefits: 'Carboidrati confortanti che elevano l\'umore e forniscono soddisfazione' },
    de: { name: 'Pilzrisotto', description: 'Cremiger Arborio-Reis mit gemischten Pilzen, Parmesan und Trüffel', benefits: 'Wohltuende Kohlenhydrate, die die Stimmung heben und Zufriedenheit bieten' },
    ja: { name: 'マッシュルームリゾット', description: 'ミックスマッシュルーム、パルメザン、トリュフ入りクリーミーアルボリオライス', benefits: '気分を高め、満足感を提供する心地よい炭水化物' }
  },

  // DINNER TRANSLATIONS
  'd_grilled_salmon': {
    es: { name: 'Salmón a la Parrilla', description: 'Salmón marinado con hierbas, servido con puré de coliflor y espárragos', benefits: 'Omega-3 y proteínas que ayudan a relajar y preparar el cuerpo para un buen descanso' },
    en: { name: 'Grilled Salmon', description: 'Herb-marinated salmon served with cauliflower mash and asparagus', benefits: 'Omega-3 and proteins that help relax and prepare the body for good rest' },
    fr: { name: 'Saumon Grillé', description: 'Saumon mariné aux herbes, servi avec purée de chou-fleur et asperges', benefits: 'Oméga-3 et protéines qui aident à relaxer et préparer le corps pour un bon repos' },
    pt: { name: 'Salmão Grelhado', description: 'Salmão marinado com ervas, servido com purê de couve-flor e aspargos', benefits: 'Ômega-3 e proteínas que ajudam a relaxar e preparar o corpo para um bom descanso' },
    it: { name: 'Salmone alla Griglia', description: 'Salmone marinato alle erbe, servito con purè di cavolfiore e asparagi', benefits: 'Omega-3 e proteine che aiutano a rilassare e preparare il corpo per un buon riposo' },
    de: { name: 'Gegrillter Lachs', description: 'Mit Kräutern marinierter Lachs, serviert mit Blumenkohlpüree und Spargel', benefits: 'Omega-3 und Proteine, die beim Entspannen helfen und den Körper auf gute Erholung vorbereiten' },
    ja: { name: 'グリルサーモン', description: 'ハーブマリネのサーモン、カリフラワーマッシュとアスパラガス添え', benefits: 'リラックスを助け、良い休息のために体を準備するオメガ3とタンパク質' }
  },
  'd_chicken_breast': {
    es: { name: 'Pechuga de Pollo con Quinoa', description: 'Pechuga de pollo jugosa con quinoa y vegetales mediterráneos', benefits: 'Cena proteica que repara los músculos y mantiene energía para la noche' },
    en: { name: 'Chicken Breast with Quinoa', description: 'Juicy chicken breast with quinoa and Mediterranean vegetables', benefits: 'Protein dinner that repairs muscles and maintains energy for the night' },
    fr: { name: 'Blanc de Poulet avec Quinoa', description: 'Blanc de poulet juteux avec quinoa et légumes méditerranéens', benefits: 'Dîner protéiné qui répare les muscles et maintient l\'énergie pour la nuit' },
    pt: { name: 'Peito de Frango com Quinoa', description: 'Peito de frango suculento com quinoa e vegetais mediterrâneos', benefits: 'Jantar proteico que repara os músculos e mantém energia para a noite' },
    it: { name: 'Petto di Pollo con Quinoa', description: 'Petto di pollo succoso con quinoa e verdure mediterranee', benefits: 'Cena proteica che ripara i muscoli e mantiene l\'energia per la notte' },
    de: { name: 'Hähnchenbrust mit Quinoa', description: 'Saftige Hähnchenbrust mit Quinoa und mediterranem Gemüse', benefits: 'Protein-Abendessen, das Muskeln repariert und Energie für die Nacht erhält' },
    ja: { name: 'チキン胸肉とキヌア', description: 'ジューシーなチキン胸肉にキヌアと地中海野菜', benefits: '筋肉を修復し、夜のエネルギーを維持するタンパク質ディナー' }
  },
  'd_pasta_bolognese': {
    es: { name: 'Pasta Boloñesa', description: 'Espaguetis con salsa de carne casera, tomate, hierbas y parmesano', benefits: 'Comida reconfortante que satisface y eleva el ánimo después de un día difícil' },
    en: { name: 'Pasta Bolognese', description: 'Spaghetti with homemade meat sauce, tomato, herbs and parmesan', benefits: 'Comfort food that satisfies and elevates mood after a difficult day' },
    fr: { name: 'Pâtes Bolognaise', description: 'Spaghetti avec sauce à la viande maison, tomate, herbes et parmesan', benefits: 'Nourriture réconfortante qui satisfait et élève l\'humeur après une journée difficile' },
    pt: { name: 'Macarrão à Bolonhesa', description: 'Espaguete com molho de carne caseiro, tomate, ervas e parmesão', benefits: 'Comida reconfortante que satisfaz e eleva o humor após um dia difícil' },
    it: { name: 'Pasta alla Bolognese', description: 'Spaghetti con ragù fatto in casa, pomodoro, erbe e parmigiano', benefits: 'Cibo confortante che soddisfa e eleva l\'umore dopo una giornata difficile' },
    de: { name: 'Pasta Bolognese', description: 'Spaghetti mit hausgemachter Fleischsauce, Tomate, Kräutern und Parmesan', benefits: 'Wohlfühlessen, das nach einem schweren Tag zufriedenstellt und die Stimmung hebt' },
    ja: { name: 'パスタボロネーゼ', description: '自家製ミートソース、トマト、ハーブ、パルメザン入りスパゲッティ', benefits: '困難な日の後に満足感を与え、気分を高めるコンフォートフード' }
  },
  'd_veggie_curry': {
    es: { name: 'Curry de Vegetales', description: 'Curry cremoso de coco con garbanzos, espinacas, batata y especias', benefits: 'Las especias del curry reducen la inflamación y promueven la relajación nocturna' },
    en: { name: 'Vegetable Curry', description: 'Creamy coconut curry with chickpeas, spinach, sweet potato and spices', benefits: 'Curry spices reduce inflammation and promote nighttime relaxation' },
    fr: { name: 'Curry de Légumes', description: 'Curry crémeux au lait de coco avec pois chiches, épinards, patate douce et épices', benefits: 'Les épices du curry réduisent l\'inflammation et favorisent la relaxation nocturne' },
    pt: { name: 'Curry de Vegetais', description: 'Curry cremoso de coco com grão-de-bico, espinafre, batata-doce e especiarias', benefits: 'As especiarias do curry reduzem a inflamação e promovem o relaxamento noturno' },
    it: { name: 'Curry di Verdure', description: 'Curry cremoso al cocco con ceci, spinaci, patata dolce e spezie', benefits: 'Le spezie del curry riducono l\'infiammazione e promuovono il rilassamento notturno' },
    de: { name: 'Gemüse-Curry', description: 'Cremiges Kokos-Curry mit Kichererbsen, Spinat, Süßkartoffel und Gewürzen', benefits: 'Curry-Gewürze reduzieren Entzündungen und fördern die nächtliche Entspannung' },
    ja: { name: '野菜カレー', description: 'ひよこ豆、ほうれん草、さつまいも、スパイス入りクリーミーココナッツカレー', benefits: 'カレースパイスが炎症を減らし、夜のリラクゼーションを促進します' }
  },
  'd_steak_salad': {
    es: { name: 'Ensalada con Bistec', description: 'Bistec jugoso en rodajas sobre ensalada mixta con queso azul y nueces', benefits: 'Hierro y proteínas del bistec que dan energía y mejoran el ánimo' },
    en: { name: 'Steak Salad', description: 'Juicy sliced steak over mixed salad with blue cheese and walnuts', benefits: 'Iron and protein from steak that give energy and improve mood' },
    fr: { name: 'Salade au Steak', description: 'Steak juteux tranché sur salade mixte avec fromage bleu et noix', benefits: 'Fer et protéines du steak qui donnent de l\'énergie et améliorent l\'humeur' },
    pt: { name: 'Salada com Bife', description: 'Bife suculento fatiado sobre salada mista com queijo azul e nozes', benefits: 'Ferro e proteínas do bife que dão energia e melhoram o humor' },
    it: { name: 'Insalata con Bistecca', description: 'Bistecca succosa affettata su insalata mista con gorgonzola e noci', benefits: 'Ferro e proteine della bistecca che danno energia e migliorano l\'umore' },
    de: { name: 'Steak-Salat', description: 'Saftiges geschnittenes Steak auf gemischtem Salat mit Blauschimmelkäse und Walnüssen', benefits: 'Eisen und Protein vom Steak, die Energie geben und die Stimmung verbessern' },
    ja: { name: 'ステーキサラダ', description: 'ミックスサラダの上にジューシーなスライスステーキ、ブルーチーズ、クルミ', benefits: 'ステーキの鉄分とタンパク質がエネルギーを与え、気分を改善します' }
  },
  'd_fish_tacos': {
    es: { name: 'Tacos de Pescado', description: 'Pescado blanco empanizado con repollo, pico de gallo, aguacate y crema', benefits: 'Cena festiva y ligera que eleva el ánimo sin sentirse pesado' },
    en: { name: 'Fish Tacos', description: 'Breaded white fish with cabbage, pico de gallo, avocado and cream', benefits: 'Festive and light dinner that elevates mood without feeling heavy' },
    fr: { name: 'Tacos de Poisson', description: 'Poisson blanc pané avec chou, pico de gallo, avocat et crème', benefits: 'Dîner festif et léger qui élève l\'humeur sans sensation de lourdeur' },
    pt: { name: 'Tacos de Peixe', description: 'Peixe branco empanado com repolho, pico de gallo, abacate e creme', benefits: 'Jantar festivo e leve que eleva o humor sem se sentir pesado' },
    it: { name: 'Tacos di Pesce', description: 'Pesce bianco impanato con cavolo, pico de gallo, avocado e panna', benefits: 'Cena festiva e leggera che eleva l\'umore senza sentirsi pesanti' },
    de: { name: 'Fisch-Tacos', description: 'Panierter weißer Fisch mit Kohl, Pico de Gallo, Avocado und Sahne', benefits: 'Festliches und leichtes Abendessen, das die Stimmung hebt, ohne schwer im Magen zu liegen' },
    ja: { name: 'フィッシュタコス', description: 'パン粉をまぶした白身魚にキャベツ、ピコデガロ、アボカド、クリーム', benefits: '重く感じずに気分を高める軽くて祝祭的なディナー' }
  },
  'd_roasted_chicken': {
    es: { name: 'Pollo Asado con Vegetales', description: 'Pollo entero asado con papas, zanahorias, cebolla y romero', benefits: 'Cena tradicional reconfortante perfecta para calmar el ánimo y relajarse' },
    en: { name: 'Roasted Chicken with Vegetables', description: 'Whole roasted chicken with potatoes, carrots, onion and rosemary', benefits: 'Traditional comforting dinner perfect for calming mood and relaxing' },
    fr: { name: 'Poulet Rôti aux Légumes', description: 'Poulet entier rôti avec pommes de terre, carottes, oignon et romarin', benefits: 'Dîner traditionnel réconfortant parfait pour calmer l\'humeur et se détendre' },
    pt: { name: 'Frango Assado com Vegetais', description: 'Frango inteiro assado com batatas, cenouras, cebola e alecrim', benefits: 'Jantar tradicional reconfortante perfeito para acalmar o humor e relaxar' },
    it: { name: 'Pollo Arrosto con Verdure', description: 'Pollo intero arrosto con patate, carote, cipolla e rosmarino', benefits: 'Cena tradizionale confortante perfetta per calmare l\'umore e rilassarsi' },
    de: { name: 'Gebratenes Hähnchen mit Gemüse', description: 'Ganzes gebratenes Hähnchen mit Kartoffeln, Karotten, Zwiebeln und Rosmarin', benefits: 'Traditionelles wohltuendes Abendessen, perfekt zum Beruhigen der Stimmung und Entspannen' },
    ja: { name: 'ローストチキンと野菜', description: 'じゃがいも、にんじん、玉ねぎ、ローズマリーと一緒に丸ごとローストチキン', benefits: '気分を落ち着かせリラックスするのに最適な伝統的で心地よいディナー' }
  },
  'd_shrimp_pasta': {
    es: { name: 'Pasta con Camarones', description: 'Linguini con camarones salteados en ajo, vino blanco, tomates cherry y albahaca', benefits: 'Combinación deliciosa que satisface y proporciona nutrientes para una noche tranquila' },
    en: { name: 'Shrimp Pasta', description: 'Linguini with shrimp sautéed in garlic, white wine, cherry tomatoes and basil', benefits: 'Delicious combination that satisfies and provides nutrients for a peaceful night' },
    fr: { name: 'Pâtes aux Crevettes', description: 'Linguini avec crevettes sautées à l\'ail, vin blanc, tomates cerises et basilic', benefits: 'Combinaison délicieuse qui satisfait et fournit des nutriments pour une nuit paisible' },
    pt: { name: 'Macarrão com Camarões', description: 'Linguini com camarões salteados no alho, vinho branco, tomates cereja e manjericão', benefits: 'Combinação deliciosa que satisfaz e fornece nutrientes para uma noite tranquila' },
    it: { name: 'Pasta con Gamberi', description: 'Linguine con gamberi saltati in aglio, vino bianco, pomodorini e basilico', benefits: 'Combinazione deliziosa che soddisfa e fornisce nutrienti per una notte tranquilla' },
    de: { name: 'Garnelen-Pasta', description: 'Linguini mit in Knoblauch, Weißwein, Kirschtomaten und Basilikum sautierten Garnelen', benefits: 'Köstliche Kombination, die zufriedenstellt und Nährstoffe für eine friedliche Nacht liefert' },
    ja: { name: 'エビパスタ', description: 'ガーリック、白ワイン、チェリートマト、バジルでソテーしたエビ入りリングイネ', benefits: '満足感を与え、穏やかな夜のための栄養を提供する美味しい組み合わせ' }
  },
  'd_turkey_meatballs': {
    es: { name: 'Albóndigas de Pavo', description: 'Albóndigas de pavo en salsa de tomate casera con pasta integral', benefits: 'Proteína magra que es fácil de digerir y perfecta para una cena satisfactoria' },
    en: { name: 'Turkey Meatballs', description: 'Turkey meatballs in homemade tomato sauce with whole wheat pasta', benefits: 'Lean protein that is easy to digest and perfect for a satisfying dinner' },
    fr: { name: 'Boulettes de Dinde', description: 'Boulettes de dinde en sauce tomate maison avec pâtes complètes', benefits: 'Protéine maigre facile à digérer et parfaite pour un dîner satisfaisant' },
    pt: { name: 'Almôndegas de Peru', description: 'Almôndegas de peru em molho de tomate caseiro com macarrão integral', benefits: 'Proteína magra fácil de digerir e perfeita para um jantar satisfatório' },
    it: { name: 'Polpette di Tacchino', description: 'Polpette di tacchino in salsa di pomodoro fatta in casa con pasta integrale', benefits: 'Proteine magre facili da digerire e perfette per una cena soddisfacente' },
    de: { name: 'Putenfleischbällchen', description: 'Putenfleischbällchen in hausgemachter Tomatensauce mit Vollkornnudeln', benefits: 'Mageres Protein, das leicht verdaulich und perfekt für ein befriedigendes Abendessen ist' },
    ja: { name: 'ターキーミートボール', description: '自家製トマトソースのターキーミートボールと全粒粉パスタ', benefits: '消化しやすく、満足なディナーに最適な赤身タンパク質' }
  },
  'd_veggie_stir_fry': {
    es: { name: 'Salteado de Vegetales con Tofu', description: 'Tofu crujiente con brócoli, pimientos, champiñones y salsa de sésamo', benefits: 'Cena ligera y nutritiva que calma sin dejar sensación de pesadez' },
    en: { name: 'Veggie Stir Fry with Tofu', description: 'Crispy tofu with broccoli, peppers, mushrooms and sesame sauce', benefits: 'Light and nutritious dinner that calms without leaving feeling heavy' },
    fr: { name: 'Sauté de Légumes au Tofu', description: 'Tofu croustillant avec brocoli, poivrons, champignons et sauce sésame', benefits: 'Dîner léger et nutritif qui calme sans laisser de sensation de lourdeur' },
    pt: { name: 'Salteado de Vegetais com Tofu', description: 'Tofu crocante com brócolis, pimentões, cogumelos e molho de gergelim', benefits: 'Jantar leve e nutritivo que acalma sem deixar sensação de peso' },
    it: { name: 'Verdure Saltate con Tofu', description: 'Tofu croccante con broccoli, peperoni, funghi e salsa di sesamo', benefits: 'Cena leggera e nutriente che calma senza lasciare sensazione di pesantezza' },
    de: { name: 'Gemüsepfanne mit Tofu', description: 'Knuspriger Tofu mit Brokkoli, Paprika, Pilzen und Sesamsauce', benefits: 'Leichtes und nahrhaftes Abendessen, das beruhigt, ohne schwer im Magen zu liegen' },
    ja: { name: '豆腐野菜炒め', description: 'カリカリ豆腐にブロッコリー、パプリカ、マッシュルーム、ゴマソース', benefits: '重く感じずに落ち着かせる軽くて栄養豊富なディナー' }
  },
  'd_baked_cod': {
    es: { name: 'Bacalao al Horno', description: 'Bacalao al horno con costra de hierbas, puré de papas y judías verdes', benefits: 'Pescado blanco ligero y rico en proteínas perfecto para una cena tranquila' },
    en: { name: 'Baked Cod', description: 'Herb-crusted baked cod with mashed potatoes and green beans', benefits: 'Light white fish rich in protein perfect for a peaceful dinner' },
    fr: { name: 'Cabillaud au Four', description: 'Cabillaud au four en croûte d\'herbes avec purée et haricots verts', benefits: 'Poisson blanc léger et riche en protéines parfait pour un dîner paisible' },
    pt: { name: 'Bacalhau Assado', description: 'Bacalhau assado com crosta de ervas, purê de batatas e vagem', benefits: 'Peixe branco leve e rico em proteínas perfeito para um jantar tranquilo' },
    it: { name: 'Merluzzo al Forno', description: 'Merluzzo al forno in crosta di erbe con purè di patate e fagiolini', benefits: 'Pesce bianco leggero e ricco di proteine perfetto per una cena tranquilla' },
    de: { name: 'Gebackener Kabeljau', description: 'Mit Kräutern ummantelter gebackener Kabeljau mit Kartoffelpüree und grünen Bohnen', benefits: 'Leichter weißer Fisch reich an Protein, perfekt für ein friedliches Abendessen' },
    ja: { name: '焼きタラ', description: 'ハーブクラストのオーブン焼きタラ、マッシュポテト、いんげん添え', benefits: '穏やかなディナーに最適な軽くてタンパク質豊富な白身魚' }
  },
  'd_chicken_fajitas': {
    es: { name: 'Fajitas de Pollo', description: 'Pollo y pimientos salteados con cebolla, servidos con tortillas y guacamole', benefits: 'Cena divertida y colorida que eleva el ánimo y satisface el apetito' },
    en: { name: 'Chicken Fajitas', description: 'Sautéed chicken and peppers with onion, served with tortillas and guacamole', benefits: 'Fun and colorful dinner that elevates mood and satisfies appetite' },
    fr: { name: 'Fajitas de Poulet', description: 'Poulet et poivrons sautés avec oignon, servis avec tortillas et guacamole', benefits: 'Dîner amusant et coloré qui élève l\'humeur et satisfait l\'appétit' },
    pt: { name: 'Fajitas de Frango', description: 'Frango e pimentões salteados com cebola, servidos com tortilhas e guacamole', benefits: 'Jantar divertido e colorido que eleva o humor e satisfaz o apetite' },
    it: { name: 'Fajitas di Pollo', description: 'Pollo e peperoni saltati con cipolla, serviti con tortilla e guacamole', benefits: 'Cena divertente e colorata che eleva l\'umore e soddisfa l\'appetito' },
    de: { name: 'Hähnchen-Fajitas', description: 'Sautiertes Hähnchen und Paprika mit Zwiebeln, serviert mit Tortillas und Guacamole', benefits: 'Lustiges und buntes Abendessen, das die Stimmung hebt und den Appetit befriedigt' },
    ja: { name: 'チキンファヒータ', description: 'チキンとパプリカを玉ねぎと一緒にソテー、トルティーヤとワカモレ添え', benefits: '気分を高め、食欲を満たす楽しくてカラフルなディナー' }
  },
  'd_stuffed_peppers': {
    es: { name: 'Pimientos Rellenos', description: 'Pimientos rellenos de arroz, carne, tomate y queso gratinado', benefits: 'Comida casera nutritiva que proporciona comfort y satisfacción' },
    en: { name: 'Stuffed Peppers', description: 'Peppers stuffed with rice, meat, tomato and melted cheese', benefits: 'Nutritious home cooking that provides comfort and satisfaction' },
    fr: { name: 'Poivrons Farcis', description: 'Poivrons farcis au riz, viande, tomate et fromage gratiné', benefits: 'Cuisine maison nutritive qui apporte confort et satisfaction' },
    pt: { name: 'Pimentões Recheados', description: 'Pimentões recheados com arroz, carne, tomate e queijo gratinado', benefits: 'Comida caseira nutritiva que proporciona conforto e satisfação' },
    it: { name: 'Peperoni Ripieni', description: 'Peperoni ripieni di riso, carne, pomodoro e formaggio gratinato', benefits: 'Cucina casalinga nutriente che fornisce comfort e soddisfazione' },
    de: { name: 'Gefüllte Paprika', description: 'Mit Reis, Fleisch, Tomate und überbackenem Käse gefüllte Paprika', benefits: 'Nahrhaftes Hausmannskost, das Komfort und Zufriedenheit bietet' },
    ja: { name: 'スタッフドペッパー', description: 'ライス、肉、トマト、溶けたチーズを詰めたパプリカ', benefits: '快適さと満足感を提供する栄養豊富な家庭料理' }
  },
  'd_beef_stew': {
    es: { name: 'Estofado de Carne', description: 'Carne de res tierna cocida lentamente con papas, zanahorias y hierbas', benefits: 'Plato reconfortante ideal para días difíciles que calma y nutre profundamente' },
    en: { name: 'Beef Stew', description: 'Tender beef slowly cooked with potatoes, carrots and herbs', benefits: 'Comforting dish ideal for difficult days that deeply calms and nourishes' },
    fr: { name: 'Ragoût de Bœuf', description: 'Bœuf tendre cuit lentement avec pommes de terre, carottes et herbes', benefits: 'Plat réconfortant idéal pour les jours difficiles qui calme et nourrit profondément' },
    pt: { name: 'Ensopado de Carne', description: 'Carne tenra cozida lentamente com batatas, cenouras e ervas', benefits: 'Prato reconfortante ideal para dias difíceis que acalma e nutre profundamente' },
    it: { name: 'Stufato di Manzo', description: 'Manzo tenero cotto lentamente con patate, carote e erbe', benefits: 'Piatto confortante ideale per giorni difficili che calma e nutre profondamente' },
    de: { name: 'Rindfleischeintopf', description: 'Zartes Rindfleisch langsam gekocht mit Kartoffeln, Karotten und Kräutern', benefits: 'Wohltuendes Gericht ideal für schwere Tage, das tief beruhigt und nährt' },
    ja: { name: 'ビーフシチュー', description: 'じゃがいも、にんじん、ハーブとゆっくり煮込んだ柔らかい牛肉', benefits: '深く落ち着かせ栄養を与える、困難な日に最適な心地よい料理' }
  },
  'd_grilled_tuna': {
    es: { name: 'Atún a la Parrilla', description: 'Filete de atún sellado con sésamo, servido con ensalada de pepino', benefits: 'Atún rico en omega-3 y proteínas para energía y recuperación muscular' },
    en: { name: 'Grilled Tuna', description: 'Sesame-seared tuna steak served with cucumber salad', benefits: 'Tuna rich in omega-3 and protein for energy and muscle recovery' },
    fr: { name: 'Thon Grillé', description: 'Steak de thon saisi au sésame, servi avec salade de concombre', benefits: 'Thon riche en oméga-3 et protéines pour l\'énergie et la récupération musculaire' },
    pt: { name: 'Atum Grelhado', description: 'Filé de atum selado com gergelim, servido com salada de pepino', benefits: 'Atum rico em ômega-3 e proteínas para energia e recuperação muscular' },
    it: { name: 'Tonno alla Griglia', description: 'Trancio di tonno scottato al sesamo, servito con insalata di cetriolo', benefits: 'Tonno ricco di omega-3 e proteine per energia e recupero muscolare' },
    de: { name: 'Gegrillter Thunfisch', description: 'Mit Sesam gebratenes Thunfischsteak, serviert mit Gurkensalat', benefits: 'Thunfisch reich an Omega-3 und Protein für Energie und Muskelregeneration' },
    ja: { name: 'グリルツナ', description: 'ゴマをまぶして焼いたツナステーキ、きゅうりサラダ添え', benefits: 'エネルギーと筋肉回復のためのオメガ3とタンパク質が豊富なツナ' }
  },
  'd_mushroom_pasta': {
    es: { name: 'Pasta con Champiñones', description: 'Pasta con champiñones cremosos, ajo, tomillo y parmesano', benefits: 'Cena vegetariana reconfortante que satisface sin sentirse pesado' },
    en: { name: 'Mushroom Pasta', description: 'Pasta with creamy mushrooms, garlic, thyme and parmesan', benefits: 'Comforting vegetarian dinner that satisfies without feeling heavy' },
    fr: { name: 'Pâtes aux Champignons', description: 'Pâtes aux champignons crémeux, ail, thym et parmesan', benefits: 'Dîner végétarien réconfortant qui satisfait sans sensation de lourdeur' },
    pt: { name: 'Macarrão com Cogumelos', description: 'Macarrão com cogumelos cremosos, alho, tomilho e parmesão', benefits: 'Jantar vegetariano reconfortante que satisfaz sem sentir peso' },
    it: { name: 'Pasta ai Funghi', description: 'Pasta con funghi cremosi, aglio, timo e parmigiano', benefits: 'Cena vegetariana confortante che soddisfa senza sentirsi pesanti' },
    de: { name: 'Pilz-Pasta', description: 'Pasta mit cremigen Pilzen, Knoblauch, Thymian und Parmesan', benefits: 'Wohltuendes vegetarisches Abendessen, das sättigt, ohne schwer im Magen zu liegen' },
    ja: { name: 'マッシュルームパスタ', description: 'クリーミーなマッシュルーム、ガーリック、タイム、パルメザン入りパスタ', benefits: '重く感じずに満足感を与える心地よいベジタリアンディナー' }
  },
  'd_teriyaki_salmon': {
    es: { name: 'Salmón Teriyaki', description: 'Salmón glaseado con teriyaki, servido con arroz al vapor y edamame', benefits: 'Combinación de omega-3 y sabores umami que relaja y satisface' },
    en: { name: 'Teriyaki Salmon', description: 'Teriyaki-glazed salmon served with steamed rice and edamame', benefits: 'Combination of omega-3 and umami flavors that relaxes and satisfies' },
    fr: { name: 'Saumon Teriyaki', description: 'Saumon glacé teriyaki, servi avec riz vapeur et edamame', benefits: 'Combinaison d\'oméga-3 et de saveurs umami qui relaxe et satisfait' },
    pt: { name: 'Salmão Teriyaki', description: 'Salmão glaceado com teriyaki, servido com arroz no vapor e edamame', benefits: 'Combinação de ômega-3 e sabores umami que relaxa e satisfaz' },
    it: { name: 'Salmone Teriyaki', description: 'Salmone glassato teriyaki, servito con riso al vapore e edamame', benefits: 'Combinazione di omega-3 e sapori umami che rilassa e soddisfa' },
    de: { name: 'Teriyaki-Lachs', description: 'Mit Teriyaki glasierter Lachs, serviert mit gedämpftem Reis und Edamame', benefits: 'Kombination aus Omega-3 und Umami-Geschmack, die entspannt und zufriedenstellt' },
    ja: { name: '照り焼きサーモン', description: '照り焼きソースをかけたサーモン、蒸しライスと枝豆添え', benefits: 'リラックスさせ満足感を与えるオメガ3とうま味の組み合わせ' }
  },
  'd_chicken_soup': {
    es: { name: 'Sopa de Pollo Casera', description: 'Caldo de pollo con fideos, vegetales y hierbas aromáticas', benefits: 'La sopa de pollo tradicional que cura el alma y calma el estrés' },
    en: { name: 'Homemade Chicken Soup', description: 'Chicken broth with noodles, vegetables and aromatic herbs', benefits: 'Traditional chicken soup that heals the soul and calms stress' },
    fr: { name: 'Soupe de Poulet Maison', description: 'Bouillon de poulet avec nouilles, légumes et herbes aromatiques', benefits: 'Soupe de poulet traditionnelle qui guérit l\'âme et calme le stress' },
    pt: { name: 'Sopa de Frango Caseira', description: 'Caldo de frango com macarrão, vegetais e ervas aromáticas', benefits: 'Sopa de frango tradicional que cura a alma e acalma o estresse' },
    it: { name: 'Zuppa di Pollo Casalinga', description: 'Brodo di pollo con tagliatelle, verdure e erbe aromatiche', benefits: 'Zuppa di pollo tradizionale che cura l\'anima e calma lo stress' },
    de: { name: 'Hausgemachte Hühnersuppe', description: 'Hühnerbrühe mit Nudeln, Gemüse und aromatischen Kräutern', benefits: 'Traditionelle Hühnersuppe, die die Seele heilt und Stress beruhigt' },
    ja: { name: '自家製チキンスープ', description: '麺、野菜、香草入りチキンブロス', benefits: '魂を癒しストレスを和らげる伝統的なチキンスープ' }
  },
  'd_lamb_chops': {
    es: { name: 'Chuletas de Cordero', description: 'Chuletas de cordero a la parrilla con romero, servidas con puré de papas', benefits: 'Proteína de alta calidad y hierro que proporcionan energía y satisfacción' },
    en: { name: 'Lamb Chops', description: 'Grilled rosemary lamb chops served with mashed potatoes', benefits: 'High-quality protein and iron that provide energy and satisfaction' },
    fr: { name: 'Côtelettes d\'Agneau', description: 'Côtelettes d\'agneau grillées au romarin, servies avec purée de pommes de terre', benefits: 'Protéines de haute qualité et fer qui fournissent énergie et satisfaction' },
    pt: { name: 'Costeletas de Cordeiro', description: 'Costeletas de cordeiro grelhadas com alecrim, servidas com purê de batatas', benefits: 'Proteína de alta qualidade e ferro que proporcionam energia e satisfação' },
    it: { name: 'Costolette di Agnello', description: 'Costolette di agnello alla griglia con rosmarino, servite con purè di patate', benefits: 'Proteine di alta qualità e ferro che forniscono energia e soddisfazione' },
    de: { name: 'Lammkoteletts', description: 'Gegrillte Lammkoteletts mit Rosmarin, serviert mit Kartoffelpüree', benefits: 'Hochwertiges Protein und Eisen, die Energie und Zufriedenheit bieten' },
    ja: { name: 'ラムチョップ', description: 'ローズマリー風味のグリルラムチョップ、マッシュポテト添え', benefits: 'エネルギーと満足感を提供する高品質タンパク質と鉄分' }
  },
  'd_veggie_lasagna': {
    es: { name: 'Lasaña de Vegetales', description: 'Capas de pasta con espinacas, ricotta, salsa de tomate y mozzarella', benefits: 'Comfort food vegetariano perfecto para elevar el ánimo cualquier día' },
    en: { name: 'Veggie Lasagna', description: 'Pasta layers with spinach, ricotta, tomato sauce and mozzarella', benefits: 'Vegetarian comfort food perfect for elevating mood any day' },
    fr: { name: 'Lasagne Végétarienne', description: 'Couches de pâtes avec épinards, ricotta, sauce tomate et mozzarella', benefits: 'Comfort food végétarien parfait pour élever l\'humeur tous les jours' },
    pt: { name: 'Lasanha de Vegetais', description: 'Camadas de massa com espinafre, ricota, molho de tomate e mussarela', benefits: 'Comfort food vegetariano perfeito para elevar o humor qualquer dia' },
    it: { name: 'Lasagna di Verdure', description: 'Strati di pasta con spinaci, ricotta, salsa di pomodoro e mozzarella', benefits: 'Comfort food vegetariano perfetto per elevare l\'umore ogni giorno' },
    de: { name: 'Gemüse-Lasagne', description: 'Nudelschichten mit Spinat, Ricotta, Tomatensauce und Mozzarella', benefits: 'Vegetarisches Wohlfühlessen perfekt, um die Stimmung jeden Tag zu heben' },
    ja: { name: '野菜ラザニア', description: 'ほうれん草、リコッタ、トマトソース、モッツァレラのパスタ層', benefits: 'いつでも気分を高めるのに最適なベジタリアンコンフォートフード' }
  }
};

export function getRecipesByMealAndMood(mealType: 'breakfast' | 'lunch' | 'dinner', mood: string): Recipe[] {
  return recipes.filter(r => r.mealType === mealType && r.moods.includes(mood));
}

export function getTranslatedRecipeData(key: string, language: Language): TranslatedRecipeData | null {
  return recipeTranslations[key]?.[language] || recipeTranslations[key]?.es || null;
}
