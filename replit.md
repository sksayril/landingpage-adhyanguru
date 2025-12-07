# Adhyan Guru - AI-Powered Education Platform

## Overview

Adhyan Guru is a comprehensive education technology platform built with modern web technologies. The application provides AI-powered tutoring, real-time student tracking, parent dashboards, competitive exam preparation, and a social platform for students to showcase their talents. The platform targets students from Class 1-12, covering CBSE, ICSE, and State Board syllabi, as well as competitive exam preparation for JEE, NEET, UPSC, SSC, and other exams.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for client-side routing instead of React Router, providing a lightweight routing solution
- **SPA (Single Page Application)** architecture with client-side rendering

**UI Component System**
- **shadcn/ui** component library with Radix UI primitives for accessible, unstyled components
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component architecture follows the "New York" style variant from shadcn
- Custom theme system supporting light/dark modes with CSS custom properties

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management, caching, and data synchronization
- Custom query client configured with specific error handling and cache policies
- Form state managed by **React Hook Form** with **Zod** schema validation via `@hookform/resolvers`

**Animation & Interactions**
- **Framer Motion** for declarative animations and transitions
- **Embla Carousel** for carousel/slider functionality
- Custom hooks for responsive behavior (`useIsMobile`, `useToast`)

**Design System**
- Typography: Inter and Poppins Google Fonts
- Color system based on HSL values with CSS custom properties for theme flexibility
- Spacing follows Tailwind's default scale (4, 6, 8, 12, 16, 20, 24)
- Container max-width: 7xl (1280px) with responsive padding
- Border radius: Custom values (lg: 9px, md: 6px, sm: 3px)

### Backend Architecture

**Server Framework**
- **Express.js** on Node.js for the HTTP server
- **ESM (ES Modules)** throughout the codebase (type: "module" in package.json)
- HTTP server wrapped for potential WebSocket support

**API Design**
- RESTful API endpoints under `/api` prefix
- JSON request/response format
- Zod schema validation for request payloads
- Centralized error handling with proper HTTP status codes

**Development Workflow**
- **tsx** for running TypeScript directly in development
- **esbuild** for production server bundling with selective dependency bundling
- Vite middleware integration for development HMR
- Custom build script that bundles both client and server assets

### Data Storage

**Database Strategy**
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- Schema defined in TypeScript with automatic type inference
- Migration support via drizzle-kit
- Currently using in-memory storage implementation (`MemStorage`) as a placeholder/development strategy
- Database schema includes:
  - Users table with UUID primary keys
  - Contact submissions table for form data
  - Schema validation via `drizzle-zod` integration

**Session Management**
- Prepared for PostgreSQL-backed sessions via `connect-pg-simple`
- Session store configuration ready but not yet implemented

### Authentication & Authorization

**Planned Implementation**
- User schema includes username/password fields
- Infrastructure prepared for authentication but not yet implemented
- Session management dependencies installed (express-session, passport, passport-local)

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (accordion, alert-dialog, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- **cmdk**: Command palette/menu component
- **lucide-react**: Icon library for consistent iconography
- **react-icons**: Additional icon sets (Simple Icons for brand logos)
- **class-variance-authority**: Utility for managing component variants
- **clsx** + **tailwind-merge**: Class name merging utilities

**Date & Time**
- **date-fns**: Modern date utility library for formatting and manipulation

**Development Tools**
- **Replit integrations**: 
  - `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
  - `@replit/vite-plugin-cartographer`: Development mapping tool
  - `@replit/vite-plugin-dev-banner`: Development environment banner
- **TypeScript** with strict mode enabled for type safety
- Path aliases configured: `@/` for client source, `@shared/` for shared code

**Build & Deployment**
- Production build creates static assets in `dist/public` (client)
- Server bundled to `dist/index.cjs` as CommonJS for Node.js execution
- Selective dependency bundling to reduce cold start times (allowlist strategy)
- Static file serving in production mode

**Validation**
- **Zod**: Schema validation library used throughout for type-safe runtime validation
- **zod-validation-error**: User-friendly error messages from Zod validation failures

**Future Integrations (Dependencies Installed)**
- Google Generative AI
- OpenAI API
- Stripe payment processing
- Nodemailer for email
- JWT for token-based auth
- Multer for file uploads
- WebSocket support (ws)
- Excel file handling (xlsx)
- UUID generation
- Rate limiting (express-rate-limit)
- CORS handling