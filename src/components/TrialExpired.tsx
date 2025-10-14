import { useNavigate } from 'react-router-dom';
import { Globe, Mail, AlertCircle, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const TrialExpired = () => {
  const navigate = useNavigate();
  const { profile, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleContactUs = () => {
    window.location.href = 'mailto:contact@regenvision.com?subject=Upgrade Request';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <nav className="px-6 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-800">ReGenVision</span>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-orange-100 rounded-full">
              <AlertCircle className="w-16 h-16 text-orange-600" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Free Trial Expired
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            You've used all 3 of your free trial sessions. We hope you found ReGenVision valuable!
          </p>

          {profile && (
            <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="space-y-2 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Your Account:</span>
                  <span className="text-gray-900">{profile.full_name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Sessions Used:</span>
                  <span className="text-gray-900">3 / 3</span>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Upgrade to Premium</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Unlimited dashboard access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Advanced analytics and historical data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Priority support from our team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Custom reports and insights</span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleContactUs}
            className="w-full py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
          >
            <Mail className="w-6 h-6" />
            <span>Contact Us to Upgrade</span>
          </button>

          <p className="mt-6 text-sm text-gray-500">
            Questions? Reach out to us at contact@regenvision.com
          </p>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
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
