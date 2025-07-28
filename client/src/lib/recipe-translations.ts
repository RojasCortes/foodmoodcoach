import type { Language } from "./i18n";

export interface TranslatedRecipe {
  name: string;
  description: string;
  benefits: string;
  calories: number;
  protein: number;
  fiber: number;
  image: string;
}

// Recipe translations database
export const recipeTranslations: Record<Language, Record<string, TranslatedRecipe>> = {
  es: {
    'avocado_toast_happy': {
      name: "Tostada de Aguacate con Huevo",
      description: "Pan integral, aguacate fresco, huevo pochado y semillas de chía",
      benefits: "Las grasas saludables del aguacate y las proteínas del huevo mantienen tu energía y buen humor durante la mañana.",
      calories: 380,
      protein: 18,
      fiber: 12,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_bowl_happy': {
      name: "Bowl de Yogur con Frutas",
      description: "Yogur griego, arándanos, plátano, granola casera y miel",
      benefits: "Los probióticos del yogur y las vitaminas de las frutas refuerzan tu sistema inmune y mantienen tu alegría natural.",
      calories: 340,
      protein: 20,
      fiber: 8,
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'chocolate_oats_sad': {
      name: "Avena con Chocolate y Nueces",
      description: "Avena integral, cacao puro, nueces, plátano y canela",
      benefits: "El chocolate libera endorfinas que mejoran el estado de ánimo, mientras la avena proporciona energía estable.",
      calories: 420,
      protein: 16,
      fiber: 14,
      image: "https://images.unsplash.com/photo-1571197119282-7c4c1f0838bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'green_smoothie_energetic': {
      name: "Smoothie Energético Verde",
      description: "Espinacas, plátano, mango, jengibre, semillas de lino y agua de coco",
      benefits: "Las vitaminas y minerales te darán un impulso natural de energía sin el bajón posterior del café.",
      calories: 290,
      protein: 8,
      fiber: 10,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'almond_toast_calm': {
      name: "Pan Tostado con Mantequilla de Almendras",
      description: "Pan integral, mantequilla de almendras natural, rodajas de pera y canela",
      benefits: "Las almendras contienen magnesio que ayuda a relajar los músculos y mantiene la calma mental.",
      calories: 350,
      protein: 14,
      fiber: 9,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_parfait_stressed': {
      name: "Parfait de Yogur con Granola",
      description: "Yogur natural, granola sin azúcar, fresas, kiwi y semillas de girasol",
      benefits: "La vitamina C de las frutas y el magnesio de las semillas ayudan a reducir los niveles de cortisol.",
      calories: 320,
      protein: 18,
      fiber: 7,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  },
  
  en: {
    'avocado_toast_happy': {
      name: "Avocado Toast with Egg",
      description: "Whole grain bread, fresh avocado, poached egg and chia seeds",
      benefits: "Healthy fats from avocado and egg proteins maintain your energy and good mood throughout the morning.",
      calories: 380,
      protein: 18,
      fiber: 12,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_bowl_happy': {
      name: "Fruit Yogurt Bowl",
      description: "Greek yogurt, blueberries, banana, homemade granola and honey",
      benefits: "Yogurt probiotics and fruit vitamins strengthen your immune system and maintain your natural joy.",
      calories: 340,
      protein: 20,
      fiber: 8,
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'chocolate_oats_sad': {
      name: "Chocolate Oats with Nuts",
      description: "Whole oats, pure cocoa, walnuts, banana and cinnamon",
      benefits: "Chocolate releases endorphins that improve mood, while oats provide stable energy.",
      calories: 420,
      protein: 16,
      fiber: 14,
      image: "https://images.unsplash.com/photo-1571197119282-7c4c1f0838bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'green_smoothie_energetic': {
      name: "Energetic Green Smoothie",
      description: "Spinach, banana, mango, ginger, flax seeds and coconut water",
      benefits: "Vitamins and minerals will give you a natural energy boost without the coffee crash.",
      calories: 290,
      protein: 8,
      fiber: 10,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'almond_toast_calm': {
      name: "Toast with Almond Butter",
      description: "Whole grain bread, natural almond butter, pear slices and cinnamon",
      benefits: "Almonds contain magnesium that helps relax muscles and maintain mental calm.",
      calories: 350,
      protein: 14,
      fiber: 9,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_parfait_stressed': {
      name: "Yogurt Granola Parfait",
      description: "Natural yogurt, sugar-free granola, strawberries, kiwi and sunflower seeds",
      benefits: "Vitamin C from fruits and magnesium from seeds help reduce cortisol levels.",
      calories: 320,
      protein: 18,
      fiber: 7,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  },
  
  ja: {
    'avocado_toast_happy': {
      name: "アボカドトーストと卵",
      description: "全粒粉パン、新鮮なアボカド、ポーチドエッグ、チアシード",
      benefits: "アボカドの健康的な脂質と卵のタンパク質が朝のエネルギーと気分を維持します。",
      calories: 380,
      protein: 18,
      fiber: 12,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_bowl_happy': {
      name: "フルーツヨーグルトボウル",
      description: "ギリシャヨーグルト、ブルーベリー、バナナ、手作りグラノーラ、ハチミツ",
      benefits: "ヨーグルトの乳酸菌と果物のビタミンが免疫システムを強化し、自然な喜びを維持します。",
      calories: 340,
      protein: 20,
      fiber: 8,
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'chocolate_oats_sad': {
      name: "チョコレートオーツとナッツ",
      description: "全粒オーツ、純ココア、クルミ、バナナ、シナモン",
      benefits: "チョコレートは気分を改善するエンドルフィンを放出し、オーツは安定したエネルギーを提供します。",
      calories: 420,
      protein: 16,
      fiber: 14,
      image: "https://images.unsplash.com/photo-1571197119282-7c4c1f0838bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'green_smoothie_energetic': {
      name: "エナジェティックグリーンスムージー",
      description: "ほうれん草、バナナ、マンゴー、ジンジャー、亜麻仁、ココナッツウォーター",
      benefits: "ビタミンとミネラルがコーヒーのクラッシュなしに自然なエネルギーブーストを与えます。",
      calories: 290,
      protein: 8,
      fiber: 10,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'almond_toast_calm': {
      name: "アーモンドバタートースト",
      description: "全粒粉パン、天然アーモンドバター、梨のスライス、シナモン",
      benefits: "アーモンドに含まれるマグネシウムが筋肉をリラックスさせ、精神的な平静を維持します。",
      calories: 350,
      protein: 14,
      fiber: 9,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_parfait_stressed': {
      name: "ヨーグルトグラノーラパフェ",
      description: "天然ヨーグルト、無糖グラノーラ、イチゴ、キウイ、ひまわりの種",
      benefits: "果物のビタミンCと種のマグネシウムがコルチゾールレベルの低下を助けます。",
      calories: 320,
      protein: 18,
      fiber: 7,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  },

  fr: {
    'avocado_toast_happy': {
      name: "Toast à l'Avocat avec Œuf",
      description: "Pain complet, avocat frais, œuf poché et graines de chia",
      benefits: "Les graisses saines de l'avocat et les protéines de l'œuf maintiennent votre énergie et bonne humeur le matin.",
      calories: 380,
      protein: 18,
      fiber: 12,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_bowl_happy': {
      name: "Bol de Yaourt aux Fruits",
      description: "Yaourt grec, myrtilles, banane, granola maison et miel",
      benefits: "Les probiotiques du yaourt et les vitamines des fruits renforcent votre système immunitaire et maintiennent votre joie naturelle.",
      calories: 340,
      protein: 20,
      fiber: 8,
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'chocolate_oats_sad': {
      name: "Avoine au Chocolat et Noix",
      description: "Avoine complète, cacao pur, noix, banane et cannelle",
      benefits: "Le chocolat libère des endorphines qui améliorent l'humeur, tandis que l'avoine fournit une énergie stable.",
      calories: 420,
      protein: 16,
      fiber: 14,
      image: "https://images.unsplash.com/photo-1571197119282-7c4c1f0838bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'green_smoothie_energetic': {
      name: "Smoothie Vert Énergétique",
      description: "Épinards, banane, mangue, gingembre, graines de lin et eau de coco",
      benefits: "Les vitamines et minéraux vous donneront un coup de boost naturel sans la chute du café.",
      calories: 290,
      protein: 8,
      fiber: 10,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'almond_toast_calm': {
      name: "Toast au Beurre d'Amande",
      description: "Pain complet, beurre d'amande naturel, tranches de poire et cannelle",
      benefits: "Les amandes contiennent du magnésium qui aide à détendre les muscles et maintient le calme mental.",
      calories: 350,
      protein: 14,
      fiber: 9,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_parfait_stressed': {
      name: "Parfait Yaourt Granola",
      description: "Yaourt naturel, granola sans sucre, fraises, kiwi et graines de tournesol",
      benefits: "La vitamine C des fruits et le magnésium des graines aident à réduire les niveaux de cortisol.",
      calories: 320,
      protein: 18,
      fiber: 7,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  },

  pt: {
    'avocado_toast_happy': {
      name: "Torrada de Abacate com Ovo",
      description: "Pão integral, abacate fresco, ovo pochê e sementes de chia",
      benefits: "As gorduras saudáveis do abacate e as proteínas do ovo mantêm sua energia e bom humor durante a manhã.",
      calories: 380,
      protein: 18,
      fiber: 12,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_bowl_happy': {
      name: "Bowl de Iogurte com Frutas",
      description: "Iogurte grego, mirtilos, banana, granola caseira e mel",
      benefits: "Os probióticos do iogurte e as vitaminas das frutas fortalecem seu sistema imunológico e mantêm sua alegria natural.",
      calories: 340,
      protein: 20,
      fiber: 8,
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'chocolate_oats_sad': {
      name: "Aveia com Chocolate e Nozes",
      description: "Aveia integral, cacau puro, nozes, banana e canela",
      benefits: "O chocolate libera endorfinas que melhoram o humor, enquanto a aveia fornece energia estável.",
      calories: 420,
      protein: 16,
      fiber: 14,
      image: "https://images.unsplash.com/photo-1571197119282-7c4c1f0838bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'green_smoothie_energetic': {
      name: "Smoothie Verde Energético",
      description: "Espinafre, banana, manga, gengibre, sementes de linhaça e água de coco",
      benefits: "As vitaminas e minerais darão um impulso natural de energia sem a queda posterior do café.",
      calories: 290,
      protein: 8,
      fiber: 10,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'almond_toast_calm': {
      name: "Torrada com Manteiga de Amêndoa",
      description: "Pão integral, manteiga de amêndoa natural, fatias de pêra e canela",
      benefits: "As amêndoas contêm magnésio que ajuda a relaxar os músculos e manter a calma mental.",
      calories: 350,
      protein: 14,
      fiber: 9,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_parfait_stressed': {
      name: "Parfait de Iogurte com Granola",
      description: "Iogurte natural, granola sem açúcar, morangos, kiwi e sementes de girassol",
      benefits: "A vitamina C das frutas e o magnésio das sementes ajudam a reduzir os níveis de cortisol.",
      calories: 320,
      protein: 18,
      fiber: 7,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  },

  it: {
    'avocado_toast_happy': {
      name: "Toast all'Avocado con Uovo",
      description: "Pane integrale, avocado fresco, uovo in camicia e semi di chia",
      benefits: "I grassi sani dell'avocado e le proteine dell'uovo mantengono la tua energia e buon umore durante la mattina.",
      calories: 380,
      protein: 18,
      fiber: 12,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_bowl_happy': {
      name: "Ciotola di Yogurt con Frutta",
      description: "Yogurt greco, mirtilli, banana, granola fatta in casa e miele",
      benefits: "I probiotici dello yogurt e le vitamine della frutta rafforzano il sistema immunitario e mantengono la gioia naturale.",
      calories: 340,
      protein: 20,
      fiber: 8,
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'chocolate_oats_sad': {
      name: "Avena con Cioccolato e Noci",
      description: "Avena integrale, cacao puro, noci, banana e cannella",
      benefits: "Il cioccolato rilascia endorfine che migliorano l'umore, mentre l'avena fornisce energia stabile.",
      calories: 420,
      protein: 16,
      fiber: 14,
      image: "https://images.unsplash.com/photo-1571197119282-7c4c1f0838bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'green_smoothie_energetic': {
      name: "Smoothie Verde Energetico",
      description: "Spinaci, banana, mango, zenzero, semi di lino e acqua di cocco",
      benefits: "Vitamine e minerali ti daranno una spinta naturale di energia senza il calo del caffè.",
      calories: 290,
      protein: 8,
      fiber: 10,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'almond_toast_calm': {
      name: "Toast con Burro di Mandorle",
      description: "Pane integrale, burro di mandorle naturale, fette di pera e cannella",
      benefits: "Le mandorle contengono magnesio che aiuta a rilassare i muscoli e mantiene la calma mentale.",
      calories: 350,
      protein: 14,
      fiber: 9,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_parfait_stressed': {
      name: "Parfait di Yogurt con Granola",
      description: "Yogurt naturale, granola senza zucchero, fragole, kiwi e semi di girasole",
      benefits: "La vitamina C della frutta e il magnesio dei semi aiutano a ridurre i livelli di cortisolo.",
      calories: 320,
      protein: 18,
      fiber: 7,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  },

  de: {
    'avocado_toast_happy': {
      name: "Avocado-Toast mit Ei",
      description: "Vollkornbrot, frische Avocado, pochiertes Ei und Chiasamen",
      benefits: "Gesunde Fette aus Avocado und Ei-Proteine halten Ihre Energie und gute Laune am Morgen aufrecht.",
      calories: 380,
      protein: 18,
      fiber: 12,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_bowl_happy': {
      name: "Frucht-Joghurt-Schüssel",
      description: "Griechischer Joghurt, Blaubeeren, Banane, hausgemachtes Granola und Honig",
      benefits: "Joghurt-Probiotika und Fruchtvitamine stärken Ihr Immunsystem und erhalten Ihre natürliche Freude.",
      calories: 340,
      protein: 20,
      fiber: 8,
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'chocolate_oats_sad': {
      name: "Schokoladen-Haferflocken mit Nüssen",
      description: "Vollkorn-Haferflocken, reiner Kakao, Walnüsse, Banane und Zimt",
      benefits: "Schokolade setzt Endorphine frei, die die Stimmung verbessern, während Haferflocken stabile Energie liefern.",
      calories: 420,
      protein: 16,
      fiber: 14,
      image: "https://images.unsplash.com/photo-1571197119282-7c4c1f0838bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'green_smoothie_energetic': {
      name: "Energetischer Grüner Smoothie",
      description: "Spinat, Banane, Mango, Ingwer, Leinsamen und Kokoswasser",
      benefits: "Vitamine und Mineralien geben Ihnen einen natürlichen Energieschub ohne den Kaffee-Absturz.",
      calories: 290,
      protein: 8,
      fiber: 10,
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'almond_toast_calm': {
      name: "Toast mit Mandelbutter",
      description: "Vollkornbrot, natürliche Mandelbutter, Birnenscheiben und Zimt",
      benefits: "Mandeln enthalten Magnesium, das hilft, Muskeln zu entspannen und geistige Ruhe zu bewahren.",
      calories: 350,
      protein: 14,
      fiber: 9,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    'yogurt_parfait_stressed': {
      name: "Joghurt-Granola-Parfait",
      description: "Naturjoghurt, zuckerfreies Granola, Erdbeeren, Kiwi und Sonnenblumenkerne",
      benefits: "Vitamin C aus Früchten und Magnesium aus Samen helfen, Cortisolspiegel zu reduzieren.",
      calories: 320,
      protein: 18,
      fiber: 7,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  }
};

// Helper function to get translated recipe by key and language
export function getTranslatedRecipe(recipeKey: string, language: Language): TranslatedRecipe | null {
  const supportedLanguage = (['es', 'en', 'fr', 'pt', 'it', 'de', 'ja'].includes(language)) ? language : 'es';
  return recipeTranslations[supportedLanguage]?.[recipeKey] || recipeTranslations.es[recipeKey] || null;
}