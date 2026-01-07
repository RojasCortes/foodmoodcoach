# Configuración de Capacitor para FoodMood

Este documento explica los cambios realizados para hacer que la aplicación funcione correctamente en dispositivos Android con Capacitor.

## Problemas solucionados

### 1. Error de creación de perfil en Android

**Problema:** La aplicación intentaba conectarse a rutas relativas (`/api/users`) que no funcionan en dispositivos nativos.

**Solución:**
- Creado archivo `client/src/lib/config.ts` con funciones para manejar URLs base según la plataforma
- Actualizado `client/src/lib/queryClient.ts` para usar estas funciones
- Ahora detecta automáticamente si está corriendo en modo nativo y usa la URL del servidor configurada

**Configuración necesaria:**

Para desarrollo con emulador Android:
```bash
# La URL por defecto es http://10.0.2.2:5000 (localhost del emulador)
```

Para desarrollo con dispositivo físico:
```bash
# Crear archivo .env en la raíz del proyecto
echo "VITE_API_URL=http://TU_IP_LOCAL:5000" > .env
# Reemplazar TU_IP_LOCAL con la IP de tu computadora (ej: 192.168.1.100)
```

Para encontrar tu IP local:
- **Windows:** `ipconfig` en CMD (buscar IPv4)
- **macOS/Linux:** `ifconfig` o `ip addr` (buscar inet)

Para producción:
```bash
# Configurar VITE_API_URL con la URL de tu servidor en producción
echo "VITE_API_URL=https://tu-servidor.com" > .env
```

### 2. Márgenes no ajustados en Android (notch y bordes)

**Problema:** Los márgenes no se ajustaban correctamente en dispositivos Android con notch o bordes redondeados.

**Soluciones aplicadas:**

1. **Viewport configurado** (`client/index.html`):
   - Agregado `viewport-fit=cover` para usar toda el área de pantalla
   - Agregado meta tags para PWA

2. **Safe area CSS** (`client/src/index.css`):
   - Agregadas variables CSS `env(safe-area-inset-*)` en el body
   - Ahora respeta automáticamente los bordes del dispositivo

3. **Bottom Navigation** (`client/src/components/bottom-navigation.tsx`):
   - Agregado padding dinámico con `calc(0.5rem + env(safe-area-inset-bottom))`
   - Ahora no se solapa con los botones de navegación del sistema

4. **Headers de páginas** (todos los archivos en `client/src/pages/`):
   - Agregado padding superior para evitar solapamiento con la barra de estado
   - Padding lateral para dispositivos con bordes curvos
   - Aplicado en: home.tsx, onboarding.tsx, profile.tsx, weight-tracker.tsx, history.tsx

## Archivos creados/modificados

### Archivos nuevos:
- `capacitor.config.ts` - Configuración de Capacitor
- `client/src/lib/config.ts` - Manejo de URLs según plataforma
- `CAPACITOR_SETUP.md` - Este archivo de documentación

### Archivos modificados:
- `client/index.html` - Viewport y meta tags
- `client/src/index.css` - Safe area CSS
- `client/src/lib/queryClient.ts` - URLs dinámicas
- `client/src/components/bottom-navigation.tsx` - Safe area padding
- `client/src/pages/home.tsx` - Header con safe area
- `client/src/pages/onboarding.tsx` - Header con safe area
- `client/src/pages/profile.tsx` - Header con safe area
- `client/src/pages/weight-tracker.tsx` - Header con safe area
- `client/src/pages/history.tsx` - Header con safe area

## Comandos para construir la app Android

```bash
# 1. Instalar dependencias de Capacitor (si no están instaladas)
npm install @capacitor/cli @capacitor/core @capacitor/app

# 2. Construir la aplicación web
npm run build

# 3. Inicializar Capacitor (solo la primera vez)
npx cap init

# 4. Agregar plataforma Android (solo la primera vez)
npx cap add android

# 5. Sincronizar cambios
npx cap sync

# 6. Abrir en Android Studio
npx cap open android
```

## Testing

### Emulador Android:
1. La app usará automáticamente `http://10.0.2.2:5000`
2. Asegúrate de que tu servidor esté corriendo en el puerto 5000
3. Prueba crear un perfil para verificar la conexión

### Dispositivo físico:
1. Configura `VITE_API_URL` con tu IP local
2. Asegúrate de estar en la misma red WiFi
3. Verifica que tu firewall permita conexiones al puerto 5000
4. Reconstruye la app con `npm run build && npx cap sync`

## Solución de problemas

### "Could not create your profile"
- Verifica que el servidor esté corriendo
- Verifica la URL configurada en `.env` o en `client/src/lib/config.ts`
- Revisa los logs del servidor para ver si llegan las peticiones
- En dispositivo físico, asegúrate de estar en la misma red

### Márgenes aún no se ajustan
- Verifica que hayas reconstruido la app después de los cambios
- Prueba en un dispositivo real, los emuladores a veces no simulan bien los notches
- Abre las DevTools de Chrome Remote Debugging para ver si hay errores CSS

### App no se conecta al servidor
- Verifica que no haya firewall bloqueando
- Usa `http://` no `https://` en desarrollo local
- En Android 9+, asegúrate de tener `cleartext: true` en capacitor.config.ts (ya está configurado)

## Próximos pasos

1. **Configurar icono y splash screen:** Usar `@capacitor/assets` para generar todos los tamaños
2. **Testing en diferentes dispositivos:** Probar en varios tamaños y notches
3. **Configurar producción:** Actualizar la URL del API para producción
4. **Publicar en Play Store:** Seguir la guía oficial de Android

## Recursos

- [Documentación de Capacitor](https://capacitorjs.com/docs)
- [Safe Area en CSS](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
- [Android Studio](https://developer.android.com/studio)
