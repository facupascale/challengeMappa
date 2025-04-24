# Restaurant Finder App

Aplicación móvil para buscar y filtrar restaurantes, desarrollada con React Native y Expo.

## 📱 Características Principales

- Autenticación de usuarios con:
  - Número de teléfono
  - Apple Sign-In
  - Google Sign-In
  - Facebook Sign-In
- Visualización de restaurantes en mapa interactivo con marcadores personalizados
- Tarjetas horizontales con información detallada de restaurantes
- Sistema de filtros avanzados:
  - Por tipo de cocina
  - Por rango de precios
  - Ordenamiento por rating, precio y distancia
- Diseño moderno y responsive
- Interfaz fluida y amigable
- Optimización de rendimiento con React.memo y useMemo

## 🛠 Tecnologías Utilizadas

- React Native 0.76.9
- Expo 52.0.46
- TypeScript 5.3.3
- React Navigation 7.x
- Zustand 5.0.3 (manejo de estado)
- react-native-maps 1.8.0
- Expo Location
- React Native Safe Area Context
- React Native Gesture Handler

## 📋 Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn
- Xcode (para iOS)
- Android Studio (para Android)
- CocoaPods (para iOS)

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd wireframesApp
```

2. Instalar dependencias:
```bash
npm install
```

3. Instalar pods (solo para iOS):
```bash
cd ios && pod install && cd ..
```

4. Realizar el prebuild de Expo:
```bash
npx expo prebuild
```

## 🏃‍♂️ Ejecución

### Desarrollo

Para desarrollo con hot reload:

```bash
# Para iOS
npx expo run:ios

# Para Android
npx expo run:android
```

## 📁 Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
├── screens/         # Pantallas principales
│   ├── Map/         # Pantalla de mapa con sus componentes
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── FiltersScreen.tsx
├── navigation/      # Configuración de navegación
├── store/          # Estado global con Zustand
│   └── useStore.ts
├── hooks/          # Hooks personalizados
│   └── useMainNavigation.ts
├── constants/      # Constantes y configuraciones
│   └── index.ts
└── types/          # Tipos TypeScript
    └── index.ts
```

## 📱 Pantallas Principales

### Map Screen
- Visualización de restaurantes en mapa con marcadores personalizados
- Búsqueda por ubicación y nombre
- Tarjetas horizontales con información detallada
- Integración con geolocalización
- Filtros y ordenamiento en tiempo real
- Optimización de rendimiento con React.memo

### Filters Screen
- Filtros por tipo de cocina
- Selección de rango de precios
- Opciones de ordenamiento
- Diseño modal para mejor UX
- Estado persistente con Zustand

## 🔄 Manejo de Estado

El estado global se maneja con Zustand y incluye:
- Filtros seleccionados
- Tipos de cocina
- Rangos de precio
- Criterios de ordenamiento
- Estado de autenticación

## 🎨 Estilos

La aplicación utiliza un sistema de diseño consistente con:
- Paleta de colores monocromática
- Tipografía coherente
- Componentes reutilizables
- Diseño adaptativo
- Estilos optimizados para rendimiento

## 📱 Compatibilidad

- iOS 13.0 o superior
- Android 6.0 o superior

## 🔐 Permisos Requeridos

- Ubicación (para funcionalidad de mapas)