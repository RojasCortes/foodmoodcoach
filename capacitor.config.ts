import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.foodmood.coach',
  appName: 'FoodMood',
  webDir: 'dist/public',
  server: {
    // For development with emulator - allows HTTP connections
    cleartext: true, // Allow HTTP connections for development
    androidScheme: 'http' // Use HTTP for local development
  },
  android: {
    allowMixedContent: true,
    backgroundColor: '#10B981'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#10B981',
      showSpinner: false
    }
  }
};

export default config;
