# 🌍 ReGenVision – AI-Powered Land Health Analytics

![Land Health](https://via.placeholder.com/1200x600/22c55e/ffffff?text=ReGenVision+AI+Land+Health+Monitoring)

## 🚀 Live Demo
**[Experience ReGenVision Live](https://regenvision-frontend-tkju.bolt.host)** | **[AI Dashboard](https://soilhealt.streamlit.app)**
<img width="1360" height="766" alt="image" src="https://github.com/user-attachments/assets/d61301fd-54ea-4721-9b17-d3b3576efc67" />


## 📖 Overview

ReGenVision is an intelligent web platform that combines cutting-edge AI, satellite data, and geospatial analytics to monitor, analyze, and predict soil, vegetation, and land health conditions. Our mission is to empower farmers, land managers, and environmental scientists with data-driven insights for sustainable and regenerative land use.

### 🌟 Why ReGenVision?
- **Increase yields** through precise land health monitoring
- **Reduce degradation** with early risk detection
- **Promote climate-resilient** agriculture practices
- **Make informed decisions** with real-time analytics

---

## ✨ Key Features

### 🌱 **Landing Experience**
- Elegant, professional UI with clear value proposition
- Showcases AI-driven land health monitoring capabilities
- Modern, responsive green-white design for optimal accessibility
- Comprehensive feature explanations

### 🔐 **Secure Authentication**
- Enterprise-grade security with **Supabase Auth**
- Email-password authentication system
- Protected routes and session management
- Automatic user profile creation

### 🧭 **Smart Trial Management**
- **3 free trial sessions** for every new user
- Real-time trial counter with visual progress bar
- Direct access to AI Land Health Dashboard
- Automatic lockout upon trial expiration

### 📊 **Interactive Dashboard**
- Personalized user dashboard
- Account information and trial status tracking
- One-click access to external AI analytics
- Session usage history and analytics
- Fully responsive across all devices

### ⏳ **Trial Expiration Handling**
- Clear notifications and alerts
- Comprehensive trial summary display
- Upgrade options and premium contact
- Extension request capabilities

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** + **TypeScript** - Modern, type-safe development
- **Tailwind CSS** - Utility-first styling
- **React Router v7** - Seamless navigation

### **Backend & Database**
- **Supabase** - PostgreSQL database with real-time capabilities
- **Supabase Auth** - Secure authentication system

### **AI & Analytics**
- **Streamlit** - Python-based dashboard framework
- **scikit-learn** - Machine learning models
- **joblib** - Model persistence
- **folium** - Geospatial visualization
- **Google Earth Engine** - Satellite data processing

---

## 📁 Project Structure

```
regenvision/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── Landing.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── TrialExpired.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── lib/
│   │   └── supabase.ts
│   ├── App.tsx
│   └── main.tsx
├── .env
├── package.json
└── vite.config.ts
```

---

## 🧠 AI Model Architecture

### **Predictive Engine Metrics**

| Model | Purpose | Core Features | Evaluation Metric |
|-------|---------|---------------|-------------------|
| **NDVI Regressor** (`model_ndvi_regressor.pkl`) | Predicts vegetation health | Rainfall, SOC, Slope, Elevation, NDVI | RMSE: **0.00097** |
| **Soil Quality Classifier** (`model_soil_classifier.pkl`) | Classifies soil fertility | SOC, NDVI, Rainfall | Precision, Recall, F1-score |
| **Land Degradation Risk Classifier** (`model_risk_classifier.pkl`) | Detects degradation risk zones | Rainfall Intensity, Slope, Vegetation Density | Accuracy: **100%** |
| **Erosion Susceptibility Classifier** (`model_erosion_classifier.pkl`) | Identifies erosion-prone areas | Slope × Rainfall – NDVI | Accuracy: **96%** |

### **Training Performance**
- **NDVI RMSE**: 0.00097
- **Soil Quality Accuracy**: 99%
- **Land Degradation Risk Accuracy**: 100%
- **Erosion Susceptibility Accuracy**: 96%

*Models trained using simulated geospatial datasets with compatibility for real Earth Engine data sources (Sentinel-2, CHIRPS, SoilGrids).*

---

## 💻 Streamlit Dashboard

### **Workflow Process**

#### 1️⃣ **Input Features**
- Intuitive sidebar sliders and forms
- Parameters: rainfall, slope, SOC, NDVI, and more

#### 2️⃣ **Prediction Engine**
```python
prediction = model.predict(input_data)
```
- Dynamic model loading based on analysis type
- Real-time inference execution

#### 3️⃣ **Visual Output**
- 🌿 **NDVI** and vegetation predictions
- 🧱 **Soil fertility** classification ("Poor" → "Rich")
- ⚠️ **Land degradation** risk heatmaps
- 🌊 **Erosion susceptibility** overlays

#### 4️⃣ **Visualization Tools**
- 🗺️ Interactive **Folium Maps** - Risk and health zone visualization
- 📈 **Charts & Graphs** - Model output summarization
- 🧾 **Export Options** - CSV reports and data downloads

### **Available Models**
- `model_ndvi_regressor.pkl`
- `model_soil_classifier.pkl`
- `model_risk_classifier.pkl`
- `model_erosion_classifier.pkl`
- `model_scaler.pkl`

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Supabase account

### **Local Development**

1. **Clone & Install**
   ```bash
   git clone https://github.com/Nice254-art/regenvision.git
   cd regenvision
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Launch Streamlit Dashboard**
   ```bash
   streamlit run app.py
   ```

### **Configuration**
| Setting | Location | Default |
|---------|----------|---------|
| Trial Limit | `src/components/Dashboard.tsx` | 3 sessions |
| Streamlit URL | `src/components/Dashboard.tsx` | Your deployed endpoint |

---

## 🎯 Future Roadmap

### **Coming Soon**
- ⚡ **FastAPI Integration** - Advanced backend analytics
- 💳 **Payment System** - Subscription management
- 🌎 **Multi-region Support** - Africa-first datasets
- 📱 **Mobile App** - Native mobile experience

### **Planned Enhancements**
- 🔔 **SMS & WhatsApp Alerts** for farmers
- 🛰️ **Automated NDVI Anomaly Detection**
- 🤖 **Advanced ML Models** with retraining capabilities
- 📊 **Comparative Analytics** across regions

---

## 💬 Support & Community

### **Get Help**
- 📧 **Email**: contact@regenvision.com
- 🐛 **GitHub Issues**: [Report Bugs & Features](https://github.com/Nice254-art/regenvision/issues)
- 💬 **Discussions**: Community support forum

### **Contribute**
We welcome contributions! Please see our contributing guidelines and code of conduct.

---

## 👥 Team ReGenVision

Built with passion for regenerative agriculture, powered by:
- **AI & Machine Learning**
- **Google Earth Engine**
- **Open Environmental Data**
- **Sustainable Technology**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### **Ready to transform land management?**
[**Get Started Now**](https://regenvision-frontend-tkju.bolt.host) · [**View Demo**](https://soilhealt.streamlit.app)

*Empowering sustainable agriculture through AI innovation* 🌱

</div>
