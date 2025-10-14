ReGenVision - AI for Land Health

🌍 Live Demo: https://regenvision-frontend-tkju.bolt.host

ReGenVision is a modern web application that leverages artificial intelligence and satellite imagery to monitor, analyze, and predict soil and vegetation health. The platform empowers farmers, land managers, and environmental scientists to make data-driven decisions for sustainable and regenerative land management.

Features
Landing Page

Professional hero section with clear value proposition

Overview of AI-powered land health monitoring capabilities

Feature highlights for vegetation monitoring, soil analysis, and predictive insights

Clean, responsive design with green/white color scheme

Authentication System

Secure user registration and login powered by Supabase Auth

Email and password authentication

Protected routes for authenticated users

Automatic profile creation on signup

Free Trial Management

New users automatically receive 3 free trial sessions

Real-time trial counter and progress tracking

Dashboard access to external Streamlit analytics platform

Session tracking and usage history

Automatic trial expiration after 3 sessions

Dashboard

Personalized user welcome with account information

Visual trial status display with progress bar

One-click launch to AI Land Health Dashboard (Streamlit)

Session tracking and automatic trial count updates

Responsive design for all devices

Trial Expiration

Clear messaging when trial limit is reached

Upgrade information and benefits overview

Contact options for premium access

Account summary display

Tech Stack

Frontend Framework: React 18 with TypeScript

Build Tool: Vite

Routing: React Router v7

Styling: Tailwind CSS

Icons: Lucide React

Backend/Database: Supabase (PostgreSQL)

Authentication: Supabase Auth

External Integration: Streamlit Dashboard

Project Structure
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

Database Schema
Tables
profiles

Extends Supabase auth.users with additional user data

Tracks trial count and trial status

Automatically created via trigger on user signup

trial_sessions

Records each dashboard access session

Links to user profiles

Provides session history and analytics

Security

Row Level Security (RLS) enabled on all tables

Users can only access their own data

Secure authentication policies

Getting Started
Prerequisites

Node.js 18+ and npm

Supabase account (database already configured)

Installation

Clone the repository:

git clone <repository-url>
cd project


Install dependencies:

npm install


Configure environment variables:

VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>


Run the development server:

npm run dev


Build for production:

npm run build


Preview production build:

npm run preview

Usage
For Users

Sign Up – Create a new account

Login – Access your personalized dashboard

Dashboard – View your trial status and remaining sessions

Launch Dashboard – Open the AI Land Health Dashboard (Streamlit app)

Trial Tracking – Each Streamlit session counts as one usage

Upgrade – Contact support for premium access

Machine Learning Metrics and Model Explanation

The AI model behind ReGenVision uses XGBoost (Extreme Gradient Boosting) to predict vegetation and soil health based on satellite data sources including Sentinel-2 (NDVI, EVI, SAVI), CHIRPS (rainfall), and SoilGrids (soil properties).

Input Features

NDVI, EVI, SAVI (vegetation indices)

Rainfall (monthly averages)

Soil organic carbon and pH (from SoilGrids)

Land surface temperature and evapotranspiration

Model Metrics

To evaluate the model’s predictive accuracy and reliability, we used the following metrics:

Metric	Description	Target
R² (Coefficient of Determination)	Measures how well predictions match actual yield values.	> 0.75
RMSE (Root Mean Squared Error)	Quantifies prediction error magnitude.	< 0.10
MAE (Mean Absolute Error)	Average absolute difference between predicted and true values.	Low values indicate precision
Feature Importance	Determines which input factors most influence yield and health predictions.	NDVI, rainfall, and SOC are top

The model was trained and validated using historical yield and environmental data from East African smallholder farms.

Streamlit Dashboard Overview

The Streamlit app acts as the analytical layer of ReGenVision and is integrated with the React frontend.

Core Functions

Data Ingestion – Users select a region or upload coordinates, and the app fetches relevant satellite data (Sentinel-2, CHIRPS, SoilGrids).

Feature Computation – Vegetation indices (NDVI, EVI) and soil moisture proxies are computed dynamically.

Model Prediction – The trained XGBoost model predicts yield potential or vegetation health score.

Visualization – Interactive maps (via Folium/Leaflet) display NDVI heatmaps, soil health zones, and predicted yield classes.

Reports – Exportable visual reports summarize trends and predictions for a given season.

Access

The Streamlit dashboard can be launched directly from the web app or accessed here:
👉 AI Land Health Dashboard

Configuration
Trial Settings

You can modify the number of free trial sessions in:

const TRIAL_LIMIT = 3;

External Dashboard URL

Update Streamlit link in:

const STREAMLIT_URL = 'https://regenvision-frontend-tkju.bolt.host';

Future Enhancements

Integration with FastAPI backend

Real-time NDVI anomaly detection

Payment plans for premium users

SMS/WhatsApp alerts for farmers

Mobile app integration

Contributing

Fork the repository

Create a feature branch

Implement changes with clear commits

Submit a pull request

Support

For technical issues or upgrade requests:
📧 contact@regenvision.com

🐛 Open a GitHub issue

License

[Specify your license here]

Team ReGenVision
Powered by AI, Earth Engine & Open Data
