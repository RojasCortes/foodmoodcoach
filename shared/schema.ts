import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, real, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  height: integer("height").notNull(), // in cm
  initialWeight: real("initial_weight").notNull(), // in kg
  goalWeight: real("goal_weight").notNull(), // in kg
  goal: text("goal").notNull(), // 'lose', 'maintain', 'gain'
  currentMood: text("current_mood"), // 'happy', 'sad', 'energetic', 'calm', 'stressed', 'neutral'
  createdAt: timestamp("created_at").defaultNow(),
});

export const weightEntries = pgTable("weight_entries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  weight: real("weight").notNull(),
  recordedAt: timestamp("recorded_at").defaultNow(),
});

export const dailyRecommendations = pgTable("daily_recommendations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  date: text("date").notNull(), // YYYY-MM-DD format
  mood: text("mood").notNull(),
  breakfast: jsonb("breakfast").notNull(), // {name, description, benefits, calories, image}
  lunch: jsonb("lunch").notNull(),
  dinner: jsonb("dinner").notNull(),
  totalCalories: integer("total_calories").notNull(),
  totalProtein: real("total_protein").notNull(),
  totalFiber: real("total_fiber").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Zod schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertWeightEntrySchema = createInsertSchema(weightEntries).omit({
  id: true,
  recordedAt: true,
});

export const insertDailyRecommendationSchema = createInsertSchema(dailyRecommendations).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertWeightEntry = z.infer<typeof insertWeightEntrySchema>;
export type WeightEntry = typeof weightEntries.$inferSelect;

export type InsertDailyRecommendation = z.infer<typeof insertDailyRecommendationSchema>;
export type DailyRecommendation = typeof dailyRecommendations.$inferSelect;

// Additional types for frontend
export type Mood = 'happy' | 'sad' | 'energetic' | 'calm' | 'stressed' | 'neutral';
export type Goal = 'lose' | 'maintain' | 'gain';

export type MealRecommendation = {
  name: string;
  description: string;
  benefits: string;
  calories: number;
  protein: number;
  fiber: number;
  image: string;
};
