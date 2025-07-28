# FoodMood - Mood-Based Nutrition App

## Overview

FoodMood is a mobile-first Progressive Web App (PWA) that provides personalized food recommendations based on users' moods and weight goals. The application combines emotional well-being with nutritional guidance, offering daily meal plans that adapt to how users feel while helping them achieve their weight objectives.

## User Preferences

Preferred communication style: Simple, everyday language.
Layout preference: Full-width responsive design that uses entire browser width for better screen utilization.

## System Architecture

The application follows a monorepo structure with a clear separation between client, server, and shared components:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling and esbuild for backend

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript and functional components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state, local storage for user data
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Mobile-First Design**: Responsive layout optimized for mobile devices

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Design**: RESTful endpoints following resource-based patterns
- **Data Validation**: Zod schemas for request/response validation
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database implementations
- **Middleware**: Request logging, JSON parsing, error handling

### Database Schema
The application uses three main entities:
- **Users**: Stores profile information including height, weight goals, and current mood
- **Weight Entries**: Tracks weight measurements over time
- **Daily Recommendations**: Stores generated meal plans with nutritional information

## Data Flow

1. **User Onboarding**: Collects basic profile information and preferences
2. **Mood Selection**: Users indicate their current emotional state
3. **Recommendation Generation**: System generates personalized meal plans based on mood and goals
4. **Weight Tracking**: Users can log weight entries to track progress
5. **Data Persistence**: User data stored locally with API sync capability

### Client-Server Communication
- RESTful API endpoints for CRUD operations
- JSON request/response format with Zod validation
- Error handling with appropriate HTTP status codes
- Local storage for offline capability

## External Dependencies

### Core Frontend Dependencies
- React ecosystem (React, React DOM)
- TanStack Query for server state management
- Wouter for routing
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- React Hook Form with Zod resolvers for form handling

### Backend Dependencies
- Express.js web framework
- Drizzle ORM for database operations
- Neon Database serverless PostgreSQL
- Connect-pg-simple for session storage
- Various utility libraries (date-fns, nanoid)

### Development Tools
- Vite for development server and building
- TypeScript for type safety
- ESBuild for backend bundling
- Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR (Hot Module Replacement)
- Express server with middleware integration
- Replit-specific tooling for development workflow
- Source map support for debugging

### Production Build
- Frontend: Vite builds optimized static assets
- Backend: ESBuild creates bundled Node.js application
- Database: Drizzle migrations for schema management
- Environment variables for configuration

### Database Configuration
- PostgreSQL database with connection pooling
- Drizzle Kit for schema migrations
- Environment-based configuration (DATABASE_URL)
- Schema validation with Zod integration

### Progressive Web App Features
- Service worker for offline caching
- Web app manifest for installability
- Mobile-optimized viewport and touch interactions
- Responsive design for various screen sizes

The architecture prioritizes simplicity, type safety, and mobile user experience while maintaining flexibility for future enhancements and scaling.

## Recent Changes (January 2025)

### Internationalization System (July 2025)
- **Complete translation system**: Implemented full i18n support with Spanish, English, and French
- **Dynamic language switching**: Users can change language in Profile settings with immediate effect
- **Comprehensive translations**: All UI elements, navigation, forms, and messages are translated
- **Language persistence**: Selected language is saved to localStorage and maintained across sessions
- **Error handling**: Fixed null/undefined errors in history page recommendations display
- **Mobile-first approach**: All translations optimized for mobile interface

### Navigation and Layout Improvements
- **Full-width responsive design**: Removed container width limits to use entire browser width
- **Enhanced navigation flow**: Fixed onboarding-to-main-app transition with proper state management
- **Improved grid layouts**: Added more responsive columns for larger screens (up to 5 columns on 2xl screens)
- **Better spacing**: Implemented adaptive padding that scales with screen size
- **Fixed routing issues**: Added event listeners and auto-reload for seamless user experience after profile creation

### Technical Updates
- Added comprehensive i18n system with t() function and useLanguage hook
- Created translation files for ES, EN, FR with support for additional languages
- Updated all major pages (Home, Profile, History, Weight Tracker, Onboarding) with translations
- Fixed null checking for recommendations data to prevent runtime errors
- Enhanced local storage utilities to dispatch custom events when user data is saved
- Implemented timeout-based navigation with page reload for reliable state transitions
- Optimized responsive breakpoints for desktop, tablet, and mobile layouts