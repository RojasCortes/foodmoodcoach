import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.foodmood.coach',
  appName: 'FoodMood',
  webDir: 'dist/public',
  server: {
    // For development, point to your local server
    // In production, this should be commented out or point to your production API
    // url: 'http://10.0.2.2:5000', // Android emulator localhost
    // url: 'http://192.168.1.XXX:5000', // Physical device - replace with your computer's IP
    androidScheme: 'https',
    cleartext: true // Allow HTTP connections for development
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
