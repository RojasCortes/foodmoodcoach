import { Home, Weight, History, User } from "lucide-react";
import { useLocation } from "wouter";

interface BottomNavigationProps {
  currentScreen: string;
}

export default function BottomNavigation({ currentScreen }: BottomNavigationProps) {
  const [, navigate] = useLocation();

  const navItems = [
    { id: 'dashboard', label: 'Inicio', icon: Home, path: '/' },
    { id: 'weightTracker', label: 'Peso', icon: Weight, path: '/weight-tracker' },
    { id: 'history', label: 'Historial', icon: History, path: '/history' },
    { id: 'profile', label: 'Perfil', icon: User, path: '/profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 max-w-md w-full bg-white border-t border-slate-200">
      <div className="grid grid-cols-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-slate-400'
              }`}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
