
# Nettlinx Limited - ISP Website

A premium enterprise-grade full-stack web application for Nettlinx Limited, a Class B Internet Service Provider operating in Telangana and Andhra Pradesh, India. Built with modern technologies featuring cutting-edge design with Codi.com-inspired aesthetics, Uber.com typography, and Quant.network-style animations.

## 🚀 Features

### Frontend Highlights
- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Premium UI/UX**: Shadcn/ui components with custom styling
- **Advanced Animations**: Framer Motion with smooth transitions and micro-interactions
- **3D Graphics**: Interactive COBE globe and Spline 3D scenes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Glass Morphism**: Premium glass effects with backdrop filters
- **Interactive Elements**: Hover animations, loading states, and form feedback

### Backend Capabilities
- **Express.js Server**: RESTful API with TypeScript
- **Database Integration**: PostgreSQL with Drizzle ORM
- **Session Management**: Secure authentication system
- **File Handling**: PDF document management for investor relations
- **WebSocket Support**: Real-time communication capabilities

### Business Features
- **Service Showcase**: Internet Leased Lines, Broadband, Hosting solutions
- **Investor Relations**: Complete document management system
- **Company Information**: About, subsidiaries, and corporate governance
- **Resource Center**: Blog, case studies, careers, and FAQs
- **Support Portal**: Contact forms and ticket management

## 🛠 Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with CSS custom properties
- **Component Library**: Radix UI with shadcn/ui styling
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion
- **3D Graphics**: Spline, COBE globe
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL storage
- **File Storage**: Local storage with abstracted interface

### Development Tools
- **Build**: Vite, ESBuild
- **Type Checking**: TypeScript
- **Database**: Drizzle Kit for migrations
- **Development**: TSX for TypeScript execution

## 🎨 Design System

### Color Scheme
- **Primary**: `#194cb2` (Nettlinx Blue)
- **Secondary**: `#ff8e00` (Orange accent)
- **Background**: `#F2F8FF` (Light blue background)
- **Typography**: UberMove/UberMoveText inspired fonts

### UI Components
- **Glass Morphism**: Multi-layer glass effects with backdrop filters
- **Gradient Text**: Animated premium gradients with shimmer effects
- **Interactive Buttons**: Premium CTA buttons with hover animations
- **Cards**: Floating components with 3D hover effects

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── navigation/ # Navbar and routing components
│   │   │   ├── sections/   # Page-specific sections
│   │   │   ├── ui/         # Shadcn/ui components
│   │   │   └── assets/     # Images and media files
│   │   ├── data/          # Static data and configurations
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   ├── pages/         # Page components
│   │   └── App.tsx        # Main application component
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # File storage abstraction
│   └── vite.ts           # Vite integration
├── shared/               # Shared TypeScript types
├── public/              # Static assets and PDFs
└── dist/               # Production build output
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nettlinx-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   SESSION_SECRET=your_session_secret
   ```

4. **Database Setup**
   ```bash
   npm run db:push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking with TypeScript
- `npm run db:push` - Push database schema changes

## 📱 Pages & Features

### Main Pages
- **Home** (`/`) - Hero section with 3D globe, services showcase, testimonials
- **About** (`/about`) - Company overview, board of directors, journey timeline
- **Services** (`/services`) - Technical specifications, service offerings
- **Subsidiaries** (`/subsidiaries`) - Business divisions and technologies
- **Resources** (`/resources`) - Blog, case studies, careers, FAQs
- **Support** (`/support`) - Contact forms and help center

### Investor Relations (`/investors`)
- Annual reports and financial documents
- Corporate governance information
- Shareholding patterns and policies
- Interactive document viewer with PDF support
- Searchable and filterable document library

### Service Sections
- **Internet Leased Lines**: Enterprise connectivity solutions
- **Broadband**: High-speed internet for businesses and homes
- **Hosting & Co-location**: Data center and cloud services
- **Technical Specifications**: Network infrastructure details
- **App Development**: Custom software solutions

## 🎯 Key Components

### Navigation
- Responsive navbar with dropdown menus
- Mobile-friendly hamburger menu
- Smooth scrolling and hash-based navigation
- Login/authentication integration

### Interactive Elements
- **3D Globe**: COBE-powered interactive globe showing service locations
- **Spline Scenes**: Premium 3D animated scenes
- **Form Validation**: Real-time validation with Zod schemas
- **Document Viewer**: PDF viewing with zoom and navigation
- **Search & Filter**: Advanced filtering for investor documents

### Animations
- Framer Motion page transitions
- Stagger animations for content sections
- Hover effects and micro-interactions
- Loading states and skeleton screens

## 🔧 Configuration

### Vite Configuration
- React plugin with Fast Refresh
- Path aliases for clean imports
- Development server proxy for API routes
- Build optimization for production

### Tailwind CSS
- Custom color scheme integration
- Typography plugin for content
- Animation utilities
- Responsive design utilities

### Database Schema
- User management with authentication
- Document storage and categorization
- Extensible design for future features

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables for Production
```env
DATABASE_URL=production_postgresql_url
NODE_ENV=production
SESSION_SECRET=secure_session_secret
```

### Replit Deployment
This project is optimized for Replit deployment with:
- Automatic dependency installation
- Environment variable management
- Hot reload in development
- Production-ready build process

## 🔒 Security Features

- CORS configuration for API security
- Session-based authentication
- Input validation with Zod schemas
- SQL injection prevention with Drizzle ORM
- Secure file upload handling

## 📊 Performance Optimizations

- Code splitting with dynamic imports
- Image optimization and lazy loading
- Efficient bundle size with tree shaking
- Database query optimization
- Caching strategies for static content

## 🧪 Development Guidelines

### Code Style
- TypeScript strict mode enabled
- ESLint and Prettier configuration
- Component composition patterns
- Custom hooks for reusable logic

### File Organization
- Feature-based folder structure
- Shared components in `/ui` directory
- Page-specific components in `/sections`
- Utilities and configurations in `/lib`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Company Website**: [Nettlinx Limited](https://nettlinx.com)
- **Documentation**: Available in `/docs` folder
- **API Reference**: Available at `/api/docs` when server is running

## 👥 Team

- **Development**: Full-stack team with React and Node.js expertise
- **Design**: UI/UX focused on modern ISP industry standards
- **Content**: Technical and business content management

## 📞 Support

For technical support or questions about this project:
- Create an issue in the repository
- Contact the development team
- Check the documentation in `/docs`

---

**Built with ❤️ for Nettlinx Limited - Empowering Digital Connectivity**
