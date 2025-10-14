🌍 ReGenVision – AI for Land Health

🚀 Live Demo: ReGenVision AI Dashboard

🌿 Overview

ReGenVision is an intelligent web platform that combines AI, satellite data, and geospatial analytics to monitor, analyze, and predict soil, vegetation, and land health conditions.

It empowers farmers, land managers, and environmental scientists to make data-driven decisions for sustainable and regenerative land use, improving yields, reducing degradation, and promoting climate-resilient agriculture.

✨ Key Features
🌱 Landing Page

Elegant, professional UI with a clear value proposition

Showcases AI-driven land health monitoring

Explains vegetation, soil, and erosion analysis capabilities

Modern, responsive green-white layout for accessibility

🔐 Authentication System

Secure signup/login powered by Supabase Auth

Email-password authentication with protected routes

Automatic user profile creation and session persistence

🧭 Free Trial Management

Each new user receives 3 free trial sessions

Real-time trial counter and progress bar on dashboard

Direct access to AI Land Health Dashboard (Streamlit)

Automatic lockout once free trials expire
**📊 Dashboard**

Personalized dashboard displaying account info & trial status

One-click access to external AI analytics dashboard

Tracks session usage and access history

Fully responsive across devices

**⏳ Trial Expiration**

Clear notice and alerts when trial access ends

Displays user’s trial summary, expiry, and upgrade options

Optional premium contact and extension request

**⚙️ Tech Stack**
Layer	Technologies
Frontend	React 18 + TypeScript + Tailwind CSS
Routing	React Router v7
Backend/Database	Supabase (PostgreSQL + Auth)
Icons	Lucide React
AI Integration	Streamlit (Python, scikit-learn, joblib, folium, Google Earth Engine)
**📂 Project Structure**
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

**🧠 AI Model Metrics & Training**

ReGenVision’s predictive engine is powered by multiple trained models that assess land health using satellite-derived environmental indicators.

Model	Purpose	Core Features	Evaluation Metric
NDVI Regressor (model_ndvi_regressor.pkl)	Predicts vegetation health	Rainfall, SOC, Slope, Elevation, NDVI	RMSE
Soil Quality Classifier (model_soil_classifier.pkl)	Classifies soil fertility (Poor → Rich)	SOC, NDVI, Rainfall	Precision, Recall, F1-score
Land Degradation Risk Classifier (model_risk_classifier.pkl)	Detects degradation risk zones	Rainfall Intensity, Slope, Vegetation Density	Accuracy, Macro Avg F1
Erosion Susceptibility Classifier (model_erosion_classifier.pkl)	Identifies erosion-prone areas	Slope × Rainfall – NDVI	Accuracy, Weighted F1
**📈 Example Model Results (Training Phase)**
Metric	Result
NDVI RMSE	0.00097
Soil Quality Accuracy	99%
Land Degradation Risk Accuracy	100%
Erosion Susceptibility Accuracy	96%

Models were initially trained using simulated geospatial datasets and can be retrained using real Earth Engine data sources like Sentinel-2 (NDVI), CHIRPS (Rainfall), and SoilGrids (SOC).

**💻 How the Streamlit App Works**

The Streamlit Dashboard serves as the AI analysis interface, connecting directly to pre-trained .pkl models.
It allows users to upload, simulate, and visualize environmental data to generate real-time land health predictions.

**🧩 Workflow**
1️⃣ Input Features

Users input parameters such as rainfall, slope, SOC, and NDVI through intuitive sidebar sliders or forms.

2️⃣ Prediction Engine

Streamlit loads the model dynamically using:

prediction = model.predict(input_data)


The corresponding AI model runs inference and outputs vegetation or soil health predictions.

3️⃣ Visual Output

Results are rendered as:

🌿 NDVI and vegetation predictions

🧱 Soil fertility classification (e.g., “Moderate”, “Rich”)

⚠️ Land degradation risk heatmaps

🌊 Erosion susceptibility overlays

4️⃣ Visualization Tools

🗺️ Interactive Folium Map – visualizes risk and health zones

📈 Charts & Graphs – summarize model outputs and trends

🧾 Export Options – download CSV summaries or reports

🧠 Models Used in Streamlit

model_ndvi_regressor.pkl

model_soil_classifier.pkl

model_risk_classifier.pkl

model_erosion_classifier.pkl

model_scaler.pkl

Each model is loaded dynamically based on the selected analysis type, ensuring modular and efficient execution.

🔗 Live Demo

🌍 Try ReGenVision’s interactive dashboard here:
👉 https://regenvision-frontend-tkju.bolt.host

⚡ Getting Started Locally
1️⃣ Clone & Install
git clone <repository-url>
cd regenvision
npm install

2️⃣ Environment Setup

Create a .env file:

VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>

3️⃣ Start Development
npm run dev

4️⃣ Launch Streamlit Dashboard
streamlit run app.py

🧩 Configuration
Setting	Location	Default
Trial Limit	src/components/Dashboard.tsx	3 sessions
Streamlit URL	src/components/Dashboard.tsx	https://soilhealt.streamlit.app
 or your deployed endpoint
🚀 Future Enhancements

⚡ Integration with FastAPI for advanced backend analytics

💳 Payment and subscription management

🌎 Multi-region support using Africa-first datasets

📱 Mobile-friendly app version

🔔 SMS & WhatsApp alerts for farmers

🛰️ Automated NDVI anomaly detection

💌 Support

📧 Email: contact@regenvision.com

🐛 GitHub Issues: For bugs, feature requests, or contributions

👥 Team ReGenVision

Built with a passion for regenerative agriculture, powered by:
AI · Google Earth Engine · Open Environmental Data
