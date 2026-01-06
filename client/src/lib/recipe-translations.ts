import type { Language } from "./i18n";
import { recipeTranslations as dbTranslations } from "./recipe-database";

export interface TranslatedRecipe {
  name: string;
  description: string;
  benefits: string;
}

export function getTranslatedRecipe(recipeKey: string, language: Language): TranslatedRecipe | null {
  const supportedLanguages: Language[] = ['es', 'en', 'fr', 'pt', 'it', 'de', 'ja'];
  const lang = supportedLanguages.includes(language) ? language : 'es';
  
  const translation = dbTranslations[recipeKey]?.[lang];
  if (translation) {
    return {
      name: translation.name,
      description: translation.description,
      benefits: translation.benefits
    };
  }
  
  const fallback = dbTranslations[recipeKey]?.es;
  if (fallback) {
    return {
      name: fallback.name,
      description: fallback.description,
      benefits: fallback.benefits
    };
  }
  
  return null;
}
