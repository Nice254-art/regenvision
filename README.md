ReGenVision - AI for Land Health

🌍 Live Demo: https://regenvision-frontend-tkju.bolt.host

ReGenVision is a modern web application that leverages artificial intelligence and satellite imagery to monitor, analyze, and predict soil and vegetation health. The platform empowers farmers, land managers, and environmental scientists to make data-driven decisions for sustainable and regenerative land management.

Quick Architecture Overview
                   ┌──────────────────────────────┐
                   │        User (Farmer)         │
                   │  ────────────────┐           │
                   │  Access via web  │           │
                   │  or mobile view  │           │
                   └────────┬─────────┘
                            │
                            ▼
                 ┌──────────────────────────────┐
                 │     Frontend (React + Vite)  │
                 │  - Landing & Dashboard UI     │
                 │  - Auth (Supabase)            │
                 │  - Launch Streamlit App       │
                 └────────┬─────────┬───────────┘
                          │         │
                          │         ▼
                          │   ┌─────────────────────┐
                          │   │ Supabase Backend    │
                          │   │ - PostgreSQL DB     │
                          │   │ - Auth + Profiles   │
                          │   │ - Trial Tracking    │
                          │   └─────────────────────┘
                          │
                          ▼
            ┌───────────────────────────────────────┐
            │ Streamlit AI Dashboard (Python)        │
            │ - Fetches Sentinel-2, CHIRPS, SoilGrids│
            │ - Computes NDVI, EVI, SAVI indices     │
            │ - Runs XGBoost yield/health prediction │
            │ - Displays heatmaps & analytics        │
            └───────────────────────────────────────┘


Flow Summary:

User signs up and logs in via React app (Supabase Auth).

Each dashboard access is tracked (limited to 3 free trials).

Streamlit app fetches geospatial data and runs the trained XGBoost model.

Predictions and health metrics are visualized as interactive maps.

Trial usage updates automatically in Supabase.

Features
Landing Page

Professional hero section with clear value proposition

Overview of AI-powered land health monitoring capabilities

Feature highlights for vegetation monitoring, soil analysis, and predictive insights

Clean, responsive design

Authentication System

Secure login and registration (Supabase Auth)

Protected routes for logged-in users

Automatic profile creation on signup

Free Trial Management

3 free sessions per new user

Real-time progress tracking

Dashboard access to Streamlit analytics

Session history and auto-expiration

Dashboard

Personalized user interface

Live trial counter and progress bar

One-click access to AI Land Health Dashboard

Responsive and mobile-ready design

Tech Stack

Frontend: React 18 + TypeScript + Tailwind CSS + Vite

Routing: React Router v7

Database: Supabase (PostgreSQL + RLS)

Authentication: Supabase Auth

External Analytics: Streamlit App (Python)

AI Model: XGBoost (Vegetation & Soil Health Prediction)

Machine Learning Model & Metrics

The predictive engine uses an XGBoost Regressor trained on combined Earth observation datasets from:

Sentinel-2: NDVI, EVI, SAVI vegetation indices

CHIRPS: Rainfall and climate data

SoilGrids: Soil organic carbon, texture, and pH

Metrics Used
Metric	Description	Purpose
R² (Coefficient of Determination)	Measures how well the model explains yield variation	Target > 0.75
RMSE (Root Mean Squared Error)	Measures the prediction deviation from actual values	Lower = Better
MAE (Mean Absolute Error)	Averages absolute prediction errors	Stability indicator
Feature Importance	Highlights which variables most affect yield/health	NDVI, SOC, Rainfall top
Training

Data preprocessed with missing-value imputation and normalization

80/20 train-test split

XGBoost hyperparameters tuned using GridSearchCV

Validation against multiple seasons of regional data

Streamlit Dashboard Overview

The Streamlit app provides analytical and visualization capabilities:

Key Functions

Data Ingestion – Retrieves imagery from Sentinel-2 and CHIRPS APIs.

Computation Layer – Derives NDVI, EVI, and other vegetation metrics.

AI Prediction – Runs XGBoost model to estimate yield/health class.

Visualization – Generates dynamic maps and time-series graphs.

Reporting – Allows export of seasonal summaries as PDF or CSV.

Integration

Each dashboard launch is authenticated and logged through Supabase.

Usage status updates automatically after each session.

Access

👉 Open Live Dashboard

Configuration
Trial Limit

Edit in src/components/Dashboard.tsx:

const TRIAL_LIMIT = 3;

Streamlit Link

Modify in src/components/Dashboard.tsx:

const STREAMLIT_URL = 'https://regenvision-frontend-tkju.bolt.host';

Future Enhancements

Integration with FastAPI backend

SMS/WhatsApp alerts for farmers

Automated NDVI anomaly detection

Payment & subscription system

Mobile application

Support

For inquiries or premium access:
📧 contact@regenvision.com

🐛 Open an issue on GitHub

Team ReGenVision
Powered by AI, Earth Engine & Open Data
