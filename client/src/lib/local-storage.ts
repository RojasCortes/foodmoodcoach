import type { User, WeightEntry, DailyRecommendation, InsertUser } from "@shared/schema";

const USER_STORAGE_KEY = 'foodmood_user';
const WEIGHT_ENTRIES_KEY = 'foodmood_weight_entries';
const RECOMMENDATIONS_KEY = 'foodmood_recommendations';

// Generate a simple UUID
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// ============ USER FUNCTIONS ============

export function createUser(userData: InsertUser): User {
  const user: User = {
    ...userData,
    id: generateId(),
    createdAt: new Date(),
    currentMood: userData.currentMood || null
  };
  saveUserToLocalStorage(user);
  return user;
}

export function saveUserToLocalStorage(user: User): void {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    // Dispatch custom event to notify about user being saved
    window.dispatchEvent(new Event('userSaved'));
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
  }
}

export function getUserFromLocalStorage(): User | null {
  try {
    const userJson = localStorage.getItem(USER_STORAGE_KEY);
    return userJson ? JSON.parse(userJson) : null;
  } catch (error) {
    console.error('Error getting user from localStorage:', error);
    return null;
  }
}

export function updateUserInLocalStorage(updates: Partial<User>): User | null {
  try {
    const currentUser = getUserFromLocalStorage();
    if (!currentUser) return null;
    
    const updatedUser = { ...currentUser, ...updates };
    saveUserToLocalStorage(updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('Error updating user in localStorage:', error);
    return null;
  }
}

export function clearUserFromLocalStorage(): void {
  try {
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(WEIGHT_ENTRIES_KEY);
    localStorage.removeItem(RECOMMENDATIONS_KEY);
  } catch (error) {
    console.error('Error clearing user from localStorage:', error);
  }
}

// ============ WEIGHT ENTRY FUNCTIONS ============

export function getWeightEntries(userId: string): WeightEntry[] {
  try {
    const entriesJson = localStorage.getItem(WEIGHT_ENTRIES_KEY);
    const allEntries: WeightEntry[] = entriesJson ? JSON.parse(entriesJson) : [];
    return allEntries
      .filter(entry => entry.userId === userId)
      .sort((a, b) => new Date(b.recordedAt!).getTime() - new Date(a.recordedAt!).getTime());
  } catch (error) {
    console.error('Error getting weight entries from localStorage:', error);
    return [];
  }
}

export function addWeightEntry(userId: string, weight: number): WeightEntry {
  try {
    const entriesJson = localStorage.getItem(WEIGHT_ENTRIES_KEY);
    const allEntries: WeightEntry[] = entriesJson ? JSON.parse(entriesJson) : [];

    const newEntry: WeightEntry = {
      id: generateId(),
      userId,
      weight,
      recordedAt: new Date()
    };

    allEntries.push(newEntry);
    localStorage.setItem(WEIGHT_ENTRIES_KEY, JSON.stringify(allEntries));
    return newEntry;
  } catch (error) {
    console.error('Error adding weight entry to localStorage:', error);
    throw error;
  }
}

export function getLatestWeight(userId: string): WeightEntry | null {
  const entries = getWeightEntries(userId);
  return entries.length > 0 ? entries[0] : null;
}

// ============ DAILY RECOMMENDATION FUNCTIONS ============

export function getDailyRecommendation(userId: string, date: string): DailyRecommendation | null {
  try {
    const recsJson = localStorage.getItem(RECOMMENDATIONS_KEY);
    const allRecs: DailyRecommendation[] = recsJson ? JSON.parse(recsJson) : [];
    return allRecs.find(rec => rec.userId === userId && rec.date === date) || null;
  } catch (error) {
    console.error('Error getting recommendation from localStorage:', error);
    return null;
  }
}

export function saveDailyRecommendation(recommendation: Omit<DailyRecommendation, 'id' | 'createdAt'>): DailyRecommendation {
  try {
    const recsJson = localStorage.getItem(RECOMMENDATIONS_KEY);
    const allRecs: DailyRecommendation[] = recsJson ? JSON.parse(recsJson) : [];

    // Remove existing recommendation for same user and date
    const filteredRecs = allRecs.filter(rec =>
      !(rec.userId === recommendation.userId && rec.date === recommendation.date)
    );

    const newRec: DailyRecommendation = {
      ...recommendation,
      id: generateId(),
      createdAt: new Date()
    };

    filteredRecs.push(newRec);
    localStorage.setItem(RECOMMENDATIONS_KEY, JSON.stringify(filteredRecs));
    return newRec;
  } catch (error) {
    console.error('Error saving recommendation to localStorage:', error);
    throw error;
  }
}

export function getRecommendationsHistory(userId: string, days: number = 7): DailyRecommendation[] {
  try {
    const recsJson = localStorage.getItem(RECOMMENDATIONS_KEY);
    const allRecs: DailyRecommendation[] = recsJson ? JSON.parse(recsJson) : [];
    return allRecs
      .filter(rec => rec.userId === userId)
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, days);
  } catch (error) {
    console.error('Error getting recommendations history from localStorage:', error);
    return [];
  }
}
