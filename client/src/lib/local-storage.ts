import type { User } from "@shared/schema";

const USER_STORAGE_KEY = 'foodmood_user';

export function saveUserToLocalStorage(user: User): void {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
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
  } catch (error) {
    console.error('Error clearing user from localStorage:', error);
  }
}
