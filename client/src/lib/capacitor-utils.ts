import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

export function isNativePlatform(): boolean {
  return Capacitor.isNativePlatform();
}

export function getPlatform(): string {
  return Capacitor.getPlatform();
}

export function setupBackButtonHandler(navigate: (path: string) => void, currentPath: string) {
  if (!isNativePlatform()) {
    return () => {};
  }

  const handleBackButton = App.addListener('backButton', ({ canGoBack }) => {
    if (currentPath === '/' || currentPath === '/home') {
      App.exitApp();
    } else if (canGoBack) {
      window.history.back();
    } else {
      navigate('/');
    }
  });

  return () => {
    handleBackButton.then(listener => listener.remove());
  };
}

export async function initializeCapacitor() {
  if (!isNativePlatform()) {
    console.log('Running in web browser mode');
    return;
  }

  console.log(`Running on ${getPlatform()} platform`);
  
  App.addListener('appStateChange', ({ isActive }) => {
    console.log('App state changed. Is active?', isActive);
  });

  App.addListener('appUrlOpen', (data) => {
    console.log('App opened with URL:', data.url);
  });
}
