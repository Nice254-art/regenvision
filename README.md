ReGenVision – AI for Land Health

🚀 Live Demo: ReGenVision AI Dashboard

ReGenVision is an intelligent platform that uses AI and satellite data to monitor, analyze, and predict soil, vegetation, and land health conditions.
It empowers farmers, land managers, and environmental scientists to make data-driven decisions for sustainable and regenerative land use.

✨ Key Features
🌱 Landing Page

Professional design with a clear value proposition

Highlights AI-based land health monitoring

Explains vegetation, soil, and erosion analysis capabilities

Modern green/white responsive layout

🔐 Authentication System

Secure signup/login via Supabase Auth

Email-password authentication with protected routes

Automatic user profile creation and session tracking

🧭 Free Trial Management

Each user gets 3 free trial sessions

Real-time trial counter and progress bar

Direct access to the AI Land Health Dashboard (Streamlit app)

Automatic lock after trials expire

📊 Dashboard

Personalized dashboard showing account details and trial status

One-click access to external AI dashboard

Tracks session count and usage history

Mobile-friendly responsive design

⏳ Trial Expiration

Clear notice when trials end

Upgrade info and contact options

Displays user’s trial summary and usage record

⚙️ Tech Stack
Layer	Technology
Frontend	React 18 + TypeScript + Tailwind CSS
Routing	React Router v7
Backend/Database	Supabase (PostgreSQL + Auth)
Icons	Lucide React
AI Integration	External Streamlit app (Python, scikit-learn, joblib, folium, Earth Engine)
📂 Project Structure
src/
├── components/
│   ├── Dashboard.tsx
│   ├── Landing.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── TrialExpired.tsx
│   └── ProtectedRoute.tsx
├── contexts/
│   └── AuthContext.tsx
├── lib/
│   └── supabase.ts
├── App.tsx
└── main.tsx

🧠 AI Model Metrics & Training

ReGenVision’s AI is built on multiple trained models that assess land health using satellite-derived indicators.

Model	Purpose	Core Metrics Used	Evaluation Metric
NDVI Regressor (model_ndvi_regressor.pkl)	Predicts vegetation health	Rainfall, SOC, Slope, Elevation, NDVI	RMSE (Root Mean Square Error)
Soil Quality Classifier (model_soil_classifier.pkl)	Classifies soil fertility (poor → rich)	Soil Organic Carbon (SOC), NDVI, Rainfall	Precision, Recall, F1-score
Land Degradation Risk (model_risk_classifier.pkl)	Predicts degradation risk	Rainfall Intensity, Slope, Vegetation Density	Accuracy, Macro Avg F1
Erosion Susceptibility (model_erosion_classifier.pkl)	Identifies erosion-prone areas	Slope × Rainfall – NDVI	Accuracy, Weighted Avg F1
📈 Example Output (Training Results)
NDVI RMSE: 0.00097
Soil Quality Accuracy: 99%
Land Degradation Risk Accuracy: 100%
Erosion Susceptibility Accuracy: 96%


These results were obtained using Random Forest models trained on simulated geospatial data.
The models can later be retrained using real Earth Engine layers like Sentinel-2 (NDVI), CHIRPS (rainfall), and SoilGrids (SOC).

💻 How the Streamlit App Works

The Streamlit dashboard acts as the AI analytics front-end.
It connects to your trained .pkl models and allows users to simulate or upload real environmental data for prediction.

🧩 Workflow

Input Features
Users provide values for rainfall, slope, SOC, NDVI, etc. via sidebar sliders or number inputs.

Prediction Engine
Streamlit loads the corresponding model (joblib.load()) and runs:

prediction = model.predict(input_data)


Visual Output
Results are displayed as:

NDVI predictions

Soil class labels (e.g., “Moderate”, “Rich”)

Land degradation risk maps

Erosion susceptibility warnings

Visualization Tools

🌍 Interactive folium map for visualizing risk zones

📈 Charts summarizing model outputs

🧾 Downloadable CSV summaries (optional)

🧠 Models Used by the Streamlit App
model_ndvi_regressor.pkl
model_soil_classifier.pkl
model_risk_classifier.pkl
model_erosion_classifier.pkl
model_scaler.pkl


Each is loaded dynamically depending on the selected analysis type.

🔗 Live Demo

You can try the live demo of ReGenVision’s web interface here:
👉 https://regenvision-frontend-tkju.bolt.host

⚡ Getting Started Locally
1️⃣ Clone & Install
git clone <repository-url>
cd project
npm install

2️⃣ Environment Setup

Create .env:

VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>

3️⃣ Start Development
npm run dev

4️⃣ Launch AI Dashboard (Streamlit)
streamlit run app.py

🧩 Configuration
Setting	Location	Default
Trial Limit	src/components/Dashboard.tsx	3 sessions
Streamlit Dashboard URL	src/components/Dashboard.tsx	https://soilhealt.streamlit.app/ or your deployed dashboard
🚀 Future Enhancements

FastAPI backend for advanced analytics

Payment and subscription management

Multi-region support (Africa-first datasets)

Mobile-friendly app interface

💌 Support

Email: contact@regenvision.com

GitHub: Open an issue for bugs or feature requests

👥 Team ReGenVision

Built with passion for regenerative agriculture, powered by:

AI, Earth Engine, and Open Environmental Data
