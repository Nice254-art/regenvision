import { useNavigate } from 'react-router-dom';
import { Globe, Sprout, TrendingUp, Droplets } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/register');
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <nav className="px-6 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-800">ReGenVision</span>
          </div>
          {!user && (
            <button
              onClick={handleLogin}
              className="px-6 py-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-emerald-100 rounded-full">
              <Globe className="w-20 h-20 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI for Regenerative Land Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            ReGenVision harnesses the power of artificial intelligence and satellite imagery
            to monitor, analyze, and predict soil and vegetation health. Our advanced system
            helps farmers, land managers, and environmental scientists make data-driven decisions
            for sustainable land management practices.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Using machine learning algorithms trained on Earth Engine data, we provide real-time
            insights into land health metrics including soil moisture, vegetation indices, erosion
            risk, and regenerative potential. Transform your approach to land stewardship with
            actionable intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </button>
            {!user && (
              <button
                onClick={handleLogin}
                className="px-8 py-4 bg-white text-emerald-600 text-lg font-semibold rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-all"
              >
                Login / Register
              </button>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Sprout className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Vegetation Monitoring</h3>
            <p className="text-gray-600">
              Track NDVI, biomass, and plant health over time with satellite-based analysis.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Droplets className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Soil Health Analysis</h3>
            <p className="text-gray-600">
              Monitor soil moisture, organic matter, and erosion patterns with AI-powered predictions.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Predictive Insights</h3>
            <p className="text-gray-600">
              Get forecasts and recommendations for optimal land management decisions.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">Team ReGenVision</span>
            </div>
            <p className="text-gray-600 text-center md:text-right">
              Powered by AI, Earth Engine & Open Data
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
