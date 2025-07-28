import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertWeightEntrySchema, insertDailyRecommendationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // User routes
  app.post('/api/users', async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error instanceof Error ? error.message : 'Invalid user data' });
    }
  });

  app.get('/api/users/:id', async (req, res) => {
    try {
      const user = await storage.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch user' });
    }
  });

  app.patch('/api/users/:id', async (req, res) => {
    try {
      const updates = insertUserSchema.partial().parse(req.body);
      const user = await storage.updateUser(req.params.id, updates);
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error instanceof Error ? error.message : 'Invalid update data' });
    }
  });

  // Weight tracking routes
  app.get('/api/users/:userId/weight-entries', async (req, res) => {
    try {
      const entries = await storage.getWeightEntries(req.params.userId);
      res.json(entries);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch weight entries' });
    }
  });

  app.post('/api/users/:userId/weight-entries', async (req, res) => {
    try {
      const entryData = insertWeightEntrySchema.parse({
        ...req.body,
        userId: req.params.userId
      });
      const entry = await storage.addWeightEntry(entryData);
      res.json(entry);
    } catch (error) {
      res.status(400).json({ message: error instanceof Error ? error.message : 'Invalid weight entry data' });
    }
  });

  app.get('/api/users/:userId/latest-weight', async (req, res) => {
    try {
      const entry = await storage.getLatestWeight(req.params.userId);
      res.json(entry || null);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch latest weight' });
    }
  });

  // Daily recommendations routes
  app.get('/api/users/:userId/recommendations/:date', async (req, res) => {
    try {
      const recommendation = await storage.getDailyRecommendation(req.params.userId, req.params.date);
      res.json(recommendation || null);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch recommendation' });
    }
  });

  app.post('/api/users/:userId/recommendations', async (req, res) => {
    try {
      const recommendationData = insertDailyRecommendationSchema.parse({
        ...req.body,
        userId: req.params.userId
      });
      const recommendation = await storage.saveDailyRecommendation(recommendationData);
      res.json(recommendation);
    } catch (error) {
      res.status(400).json({ message: error instanceof Error ? error.message : 'Invalid recommendation data' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
