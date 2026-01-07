import { Capacitor } from '@capacitor/core';

/**
 * Get the base API URL depending on the platform
 * - Web: Uses relative URLs (proxy handles routing)
 * - Android/iOS Native: Uses server URL configured here
 */
export function getApiBaseUrl(): string {
  if (Capacitor.isNativePlatform()) {
    // For native platforms (Android/iOS)
    // In development, you can use:
    // - Android emulator: 'http://10.0.2.2:5000'
    // - Physical device: 'http://YOUR_COMPUTER_IP:5000' (e.g., http://192.168.1.100:5000)
    // In production, use your production API URL

    // Check if we have an environment variable for the API URL
    const envApiUrl = import.meta.env.VITE_API_URL;
    if (envApiUrl) {
      return envApiUrl;
    }

    // Default to Android emulator localhost for development
    // Users should update this based on their setup
    return 'http://10.0.2.2:5000';
  }

  // For web, use relative URLs (Vite proxy handles this)
  return '';
}

/**
 * Build a full API URL from a path
 * @param path - The API path (e.g., '/api/users')
 * @returns The full URL
 */
export function buildApiUrl(path: string): string {
  const baseUrl = getApiBaseUrl();
  return `${baseUrl}${path}`;
}
