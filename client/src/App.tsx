import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Onboarding from "@/pages/onboarding";
import WeightTracker from "@/pages/weight-tracker";
import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@/lib/local-storage";

function Router() {
  const [hasUser, setHasUser] = useState<boolean | null>(null);

  useEffect(() => {
    const user = getUserFromLocalStorage();
    setHasUser(!!user);
  }, []);

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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
