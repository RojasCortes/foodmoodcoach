import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Onboarding from "@/pages/onboarding";
import WeightTracker from "@/pages/weight-tracker";
import History from "@/pages/history";
import Profile from "@/pages/profile";
import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@/lib/local-storage";
import { initializeCapacitor, setupBackButtonHandler } from "@/lib/capacitor-utils";

function Router() {
  const [hasUser, setHasUser] = useState<boolean | null>(null);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const checkUser = () => {
      const user = getUserFromLocalStorage();
      setHasUser(!!user);
    };
    
    checkUser();
    
    // Listen for storage changes (when user is saved from onboarding)
    const handleStorageChange = () => {
      checkUser();
    };
    
    window.addEventListener('storage', handleStorageChange);
    // Also listen for custom events
    window.addEventListener('userSaved', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userSaved', handleStorageChange);
    };
  }, []);

  // Setup Android back button handler
  useEffect(() => {
    const cleanup = setupBackButtonHandler(navigate, location);
    return cleanup;
  }, [location, navigate]);

  if (hasUser === null) {
    // Loading state
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/" component={hasUser ? Home : Onboarding} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/weight-tracker" component={WeightTracker} />
      <Route path="/history" component={History} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    initializeCapacitor();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="w-full bg-white min-h-screen">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
