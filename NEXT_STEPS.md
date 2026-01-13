# 🎯 Próximos Pasos - FoodMood Offline

## ✅ Lo que YA funciona:

1. **Onboarding completamente offline**
   - Crear perfil sin servidor ✅
   - Guardar en localStorage ✅
   - Navegación al home ✅
   - No más errores de timeout ✅

2. **Sistema de localStorage completo**
   - Crear usuarios ✅
   - Guardar entradas de peso ✅
   - Guardar recomendaciones diarias ✅
   - Ver historial ✅

3. **Márgenes responsive**
   - Safe-area para Android ✅
   - Headers con padding correcto ✅
   - Bottom navigation ajustada ✅

---

## 🔧 Lo que falta actualizar:

Las siguientes páginas todavía usan **React Query + API calls** y necesitan convertirse a **localStorage directo**:

### 1. `client/src/pages/home.tsx`
**Cambios necesarios:**
```typescript
// ANTES:
const { data: latestWeight } = useQuery<WeightEntry>({
  queryKey: ['/api/users', user?.id, 'latest-weight'],
  enabled: !!user?.id,
});

// DESPUÉS:
const [latestWeight, setLatestWeight] = useState<WeightEntry | null>(null);
useEffect(() => {
  if (user) {
    const weight = getLatestWeight(user.id);
    setLatestWeight(weight);
  }
}, [user]);
```

**Importaciones a cambiar:**
```typescript
// Eliminar:
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

// Agregar:
import { getLatestWeight, getDailyRecommendation, saveDailyRecommendation } from "@/lib/local-storage";
```

### 2. `client/src/pages/weight-tracker.tsx`
**Cambios necesarios:**
```typescript
// ANTES:
const { data: weightEntries = [], isLoading } = useQuery<WeightEntry[]>({
  queryKey: ['/api/users', user?.id, 'weight-entries'],
  enabled: !!user?.id,
});

// DESPUÉS:
const [weightEntries, setWeightEntries] = useState<WeightEntry[]>([]);
useEffect(() => {
  if (user) {
    const entries = getWeightEntries(user.id);
    setWeightEntries(entries);
  }
}, [user]);
```

### 3. `client/src/pages/profile.tsx`
**Cambios necesarios:**
```typescript
// ANTES:
const updateUserMutation = useMutation({
  mutationFn: async (userData: any) => {
    const response = await apiRequest('PATCH', `/api/users/${user!.id}`, userData);
    return response.json();
  },
  ...
});

// DESPUÉS:
const handleSaveChanges = () => {
  const updatedUser = updateUserInLocalStorage(updates);
  if (updatedUser) {
    setUser(updatedUser);
    toast({ title: t('profileUpdated') });
  }
};
```

### 4. `client/src/pages/history.tsx`
**Cambios necesarios:**
```typescript
// ANTES:
const { data: recommendationsHistory = [], isLoading } = useQuery<...>({
  queryKey: ['/api/users', user?.id, 'recommendations-history'],
  queryFn: async () => { /* fetch calls */ },
  ...
});

// DESPUÉS:
const [recommendationsHistory, setRecommendationsHistory] = useState<DailyRecommendation[]>([]);
useEffect(() => {
  if (user) {
    const history = getRecommendationsHistory(user.id, 7);
    setRecommendationsHistory(history);
  }
}, [user]);
```

---

## 📝 Patrón general para convertir a offline:

### PASO 1: Cambiar imports
```typescript
// ❌ Eliminar:
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

// ✅ Agregar:
import {
  getUserFromLocalStorage,
  updateUserInLocalStorage,
  getWeightEntries,
  addWeightEntry,
  getLatestWeight,
  getDailyRecommendation,
  saveDailyRecommendation,
  getRecommendationsHistory
} from "@/lib/local-storage";
```

### PASO 2: Reemplazar useQuery con useState + useEffect
```typescript
// ❌ ANTES:
const { data, isLoading } = useQuery({
  queryKey: ['/api/endpoint'],
  enabled: !!user,
});

// ✅ DESPUÉS:
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  if (user) {
    const result = getFunctionFromLocalStorage(user.id);
    setData(result);
    setIsLoading(false);
  }
}, [user]);
```

### PASO 3: Reemplazar useMutation con función directa
```typescript
// ❌ ANTES:
const mutation = useMutation({
  mutationFn: async (data) => {
    const res = await apiRequest('POST', '/api/endpoint', data);
    return res.json();
  },
  onSuccess: () => { /* ... */ }
});

mutation.mutate(data);

// ✅ DESPUÉS:
const handleAction = () => {
  try {
    const result = saveFunctionToLocalStorage(data);
    toast({ title: 'Success!' });
    // Update local state
    setData(result);
  } catch (error) {
    toast({ title: 'Error', variant: 'destructive' });
  }
};

handleAction();
```

---

## 🚀 Para PROBAR el onboarding (ya funciona):

```bash
# 1. Obtén los cambios
git pull

# 2. Reconstruye
npm run build
npx cap sync

# 3. En Android Studio
# Build > Clean Project
# Build > Rebuild Project
# Run

# 4. ¡Prueba el onboarding!
# Debería funcionar sin errores ni timeouts
```

---

## 💡 IMPORTANTE:

**El onboarding YA FUNCIONA** completamente offline.

Las otras páginas (`home`, `profile`, `weight-tracker`, `history`) necesitan actualizarse siguiendo el mismo patrón, pero **puedes usar la app ahora** - solo que esas páginas pueden mostrar errores hasta que se actualicen.

---

## 📊 Integración de AdMob (cuando todo esté offline):

```bash
# 1. Instalar
npm install @capacitor-community/admob
npx cap sync

# 2. Configurar en capacitor.config.ts
plugins: {
  AdMob: {
    appId: 'ca-app-pub-XXXXX~YYYYYY', // Tu App ID de AdMob
    testingDevices: ['YOUR_DEVICE_ID']
  }
}

# 3. Usar en componentes
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';

await AdMob.showBanner({
  adId: 'ca-app-pub-XXXXX/ZZZZZZ',
  adSize: BannerAdSize.ADAPTIVE_BANNER,
  position: BannerAdPosition.BOTTOM_CENTER
});
```

---

## ✅ Checklist:

- [x] localStorage functions creadas
- [x] Onboarding convertido a offline
- [ ] Home convertido a offline
- [ ] Profile convertido a offline
- [ ] Weight-tracker convertido a offline
- [ ] History convertido a offline
- [ ] AdMob integrado
- [ ] Publicar en Play Store

---

¿Quieres que continúe convirtiendo las páginas restantes? O prefieres probar primero el onboarding para ver que funciona?
