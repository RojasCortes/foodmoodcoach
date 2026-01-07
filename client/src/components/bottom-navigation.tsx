import { Home, Weight, History, User } from "lucide-react";
import { useLocation } from "wouter";
import { t } from '@/lib/i18n';
import { useLanguage } from '@/hooks/use-language';

interface BottomNavigationProps {
  currentScreen: string;
}

export default function BottomNavigation({ currentScreen }: BottomNavigationProps) {
  const [, navigate] = useLocation();
  const { language } = useLanguage();

  const navItems = [
    { id: 'dashboard', label: t('home'), icon: Home, path: '/' },
    { id: 'weightTracker', label: t('weightTracker'), icon: Weight, path: '/weight-tracker' },
    { id: 'history', label: t('history'), icon: History, path: '/history' },
    { id: 'profile', label: t('profile'), icon: User, path: '/profile' }
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200"
      style={{
        paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)'
      }}
    >
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
