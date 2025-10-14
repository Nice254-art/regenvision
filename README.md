# ReGenVision - AI for Land Health

ReGenVision is a modern web application that leverages artificial intelligence and satellite imagery to monitor, analyze, and predict soil and vegetation health. The platform empowers farmers, land managers, and environmental scientists to make data-driven decisions for sustainable and regenerative land management.

## Features

### Landing Page
- Professional hero section with clear value proposition
- Overview of AI-powered land health monitoring capabilities
- Feature highlights for vegetation monitoring, soil analysis, and predictive insights
- Clean, responsive design with green/white color scheme

### Authentication System
- Secure user registration and login powered by Supabase Auth
- Email and password authentication
- Protected routes for authenticated users
- Automatic profile creation on signup

### Free Trial Management
- New users automatically receive 3 free trial sessions
- Real-time trial counter and progress tracking
- Dashboard access to external Streamlit analytics platform
- Session tracking and usage history
- Automatic trial expiration after 3 sessions

### Dashboard
- Personalized user welcome with account information
- Visual trial status display with progress bar
- One-click launch to AI Land Health Dashboard (Streamlit)
- Session tracking and automatic trial count updates
- Responsive design for all devices

### Trial Expiration
- Clear messaging when trial limit is reached
- Upgrade information and benefits overview
- Contact options for premium access
- Account summary display

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend/Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **External Integration**: Streamlit Dashboard

## Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx        # Main dashboard with trial management
│   ├── Landing.tsx          # Landing page
│   ├── Login.tsx            # Login page
│   ├── Register.tsx         # Registration page
│   ├── TrialExpired.tsx     # Trial expiration page
│   └── ProtectedRoute.tsx   # Route protection wrapper
├── contexts/
│   └── AuthContext.tsx      # Authentication context and hooks
├── lib/
│   └── supabase.ts          # Supabase client configuration
├── App.tsx                  # Main app with routing
└── main.tsx                 # Application entry point

supabase/
└── migrations/
    └── create_users_and_trials_tables.sql  # Database schema
```

## Database Schema

### Tables

#### `profiles`
- Extends Supabase auth.users with additional user data
- Tracks trial count and trial status
- Automatically created via trigger on user signup

#### `trial_sessions`
- Records each dashboard access session
- Links to user profiles
- Provides session history and analytics

### Security
- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Secure authentication policies

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account (database already configured)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Environment variables are already configured in `.env`:
```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

## Usage

### For Users

1. **Sign Up**: Create a new account on the registration page
2. **Login**: Access your account with email and password
3. **Dashboard**: View your trial status and remaining sessions
4. **Launch Dashboard**: Click to open the AI Land Health Dashboard (Streamlit app)
5. **Trial Tracking**: Each launch counts as one session (max 3 free sessions)
6. **Upgrade**: Contact us when your trial expires for unlimited access

### For Developers

#### Authentication Context
```typescript
import { useAuth } from './contexts/AuthContext';

const { user, profile, signIn, signUp, signOut, refreshProfile } = useAuth();
```

#### Protected Routes
```typescript
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

## Configuration

### Trial Settings
The trial limit is set to 3 sessions. To modify this, update the `TRIAL_LIMIT` constant in `src/components/Dashboard.tsx`:

```typescript
const TRIAL_LIMIT = 3;
```

### External Dashboard URL
The Streamlit dashboard URL can be modified in `src/components/Dashboard.tsx`:

```typescript
const STREAMLIT_URL = 'https://soilhealt.streamlit.app/';
```

## Future Enhancements

This frontend is designed to integrate with a FastAPI backend for:
- Enhanced user management
- Advanced analytics and reporting
- Payment processing for premium subscriptions
- Additional dashboard features and customization
- API endpoints for mobile applications

## Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Make your changes with clear commit messages
4. Test thoroughly
5. Submit a pull request

## Support

For questions, issues, or upgrade requests:
- Email: contact@regenvision.com
- Open an issue on GitHub

## License

[Specify your license here]

## Team

Built by Team ReGenVision

Powered by AI, Earth Engine & Open Data

---

**Note**: This application requires an active internet connection to access the Supabase backend and external Streamlit dashboard.
