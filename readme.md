# Axionore Landing Page

A modern, full-stack landing page application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and TypeScript. This project features a comprehensive public-facing website with an admin dashboard for content management.

## 🚀 Features

### Public Website
- **Products**: Showcase of Axionore products including Quorix, AxionTrust, Vaulture, Board3, SentryOne ID, and EdgeRP
- **Solutions**: Industry-specific solutions for Cloud Security, Compliance Automation, Privileged Access, Identity Governance, Infrastructure Automation, Secure ERP, Financial Services, Healthcare, Manufacturing, and Technology
- **Resources**: Documentation, Analyst Reports, Case Studies, Awards, and Blog
- **Company Pages**: About, Contact, Careers, and Leadership
- **Responsive Design**: Modern UI built with Tailwind CSS and Shadcn UI components

### Admin Dashboard
- **Dashboard**: Overview and analytics
- **Blog Management**: Create, edit, and manage blog posts
- **Job Management**: Manage career postings
- **Contact Management**: Handle customer inquiries
- **Demo Requests**: Manage demo requests
- **Analytics**: View website analytics and metrics
- **Settings**: Configure application settings

## 🛠️ Tech Stack

### Frontend
- **[React.js](https://reactjs.org/)** - UI library
- **[Vite.js](https://vitejs.dev/)** - Build tool and dev server
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Component library
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Axios](https://axios-http.com/)** - HTTP client
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation

### Backend
- **[Express.js](https://expressjs.com/)** - Web framework
- **[Node.js](https://nodejs.org/)** - Runtime environment
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling
- **[Swagger](https://swagger.io/)** - API documentation
- **[Zod](https://zod.dev/)** - Schema validation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or cloud instance)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Axionore/Axionore-Landing.git
   cd Axionore-Landing
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/axionore
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/axionore

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Add other environment variables as needed
```

### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000/api/v1
# Add other environment variables as needed
```

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

### Production Mode

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Build the backend**
   ```bash
   cd backend
   npm run build
   ```

3. **Start the backend**
   ```bash
   cd backend
   npm start
   ```

## 📁 Project Structure

```
Axionore-Landing/
├── backend/
│   ├── src/
│   │   ├── api-specs/      # API documentation (Swagger)
│   │   ├── db/              # Database connection
│   │   ├── models/          # MongoDB models
│   │   ├── router/          # API routes
│   │   ├── app.ts           # Express app configuration
│   │   └── index.ts         # Server entry point
│   ├── dist/                # Compiled JavaScript
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── admin/       # Admin panel components
│   │   │   ├── layouts/     # Layout components
│   │   │   ├── pages/       # Page components
│   │   │   ├── sections/    # Section components
│   │   │   └── shared/      # Shared components
│   │   ├── contexts/        # React contexts
│   │   ├── helpers/         # Helper functions & services
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility libraries
│   │   ├── styles/          # Global styles
│   │   ├── types/           # TypeScript type definitions
│   │   ├── App.tsx          # Main App component
│   │   └── main.tsx         # Application entry point
│   ├── public/              # Static assets
│   ├── package.json
│   └── vite.config.ts
├── package.json
└── README.md
```

## 🛣️ API Routes

The backend API is available at `/api/v1` and includes:

- `/api/v1/blogs` - Blog management
- `/api/v1/jobs` - Job postings
- `/api/v1/contacts` - Contact submissions
- `/api/v1/products` - Product information
- `/api/v1/solutions` - Solution information
- `/api/v1/resources` - Resource management
- `/api/v1/admin/*` - Admin panel routes

## 🧪 Scripts

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)


**Note**: Make sure to configure all environment variables before running the application. The application requires a MongoDB database connection to function properly.

