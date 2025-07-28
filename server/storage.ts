import { type User, type InsertUser, type WeightEntry, type InsertWeightEntry, type DailyRecommendation, type InsertDailyRecommendation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, updates: Partial<InsertUser>): Promise<User>;
  
  // Weight tracking operations
  getWeightEntries(userId: string): Promise<WeightEntry[]>;
  addWeightEntry(entry: InsertWeightEntry): Promise<WeightEntry>;
  getLatestWeight(userId: string): Promise<WeightEntry | undefined>;
  
  // Daily recommendations operations
  getDailyRecommendation(userId: string, date: string): Promise<DailyRecommendation | undefined>;
  saveDailyRecommendation(recommendation: InsertDailyRecommendation): Promise<DailyRecommendation>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private weightEntries: Map<string, WeightEntry>;
  private dailyRecommendations: Map<string, DailyRecommendation>;

  constructor() {
    this.users = new Map();
    this.weightEntries = new Map();
    this.dailyRecommendations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: string, updates: Partial<InsertUser>): Promise<User> {
    const existingUser = this.users.get(id);
    if (!existingUser) {
      throw new Error('User not found');
    }
    const updatedUser = { ...existingUser, ...updates };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async getWeightEntries(userId: string): Promise<WeightEntry[]> {
    return Array.from(this.weightEntries.values())
      .filter(entry => entry.userId === userId)
      .sort((a, b) => b.recordedAt!.getTime() - a.recordedAt!.getTime());
  }

  async addWeightEntry(insertEntry: InsertWeightEntry): Promise<WeightEntry> {
    const id = randomUUID();
    const entry: WeightEntry = {
      ...insertEntry,
      id,
      recordedAt: new Date()
    };
    this.weightEntries.set(id, entry);
    return entry;
  }

  async getLatestWeight(userId: string): Promise<WeightEntry | undefined> {
    const entries = await this.getWeightEntries(userId);
    return entries[0]; // Already sorted by date desc
  }

  async getDailyRecommendation(userId: string, date: string): Promise<DailyRecommendation | undefined> {
    return Array.from(this.dailyRecommendations.values())
      .find(rec => rec.userId === userId && rec.date === date);
  }

  async saveDailyRecommendation(insertRecommendation: InsertDailyRecommendation): Promise<DailyRecommendation> {
    const id = randomUUID();
    const recommendation: DailyRecommendation = {
      ...insertRecommendation,
      id,
      createdAt: new Date()
    };
    this.dailyRecommendations.set(id, recommendation);
    return recommendation;
  }
}

export const storage = new MemStorage();
