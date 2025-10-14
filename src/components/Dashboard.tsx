import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, ExternalLink, LogOut, User, BarChart3 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

const TRIAL_LIMIT = 3;
const STREAMLIT_URL = 'https://soilhealt.streamlit.app/';

export const Dashboard = () => {
  const { user, profile, signOut, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    if (!profile?.trial_active && profile?.trial_count >= TRIAL_LIMIT) {
      navigate('/trial-expired');
    }
  }, [profile, navigate]);

  const handleLaunchDashboard = async () => {
    if (!user || !profile) return;

    setLaunching(true);

    try {
      const newTrialCount = profile.trial_count + 1;
      const trialActive = newTrialCount < TRIAL_LIMIT;

      await supabase
        .from('profiles')
        .update({
          trial_count: newTrialCount,
          trial_active: trialActive,
        })
        .eq('id', user.id);

      await supabase
        .from('trial_sessions')
        .insert({
          user_id: user.id,
        });

      await refreshProfile();

      window.open(STREAMLIT_URL, '_blank');

      if (!trialActive) {
        setTimeout(() => {
          navigate('/trial-expired');
        }, 1000);
      }
    } catch (error) {
      console.error('Error updating trial count:', error);
    } finally {
      setLaunching(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const remainingTrials = TRIAL_LIMIT - profile.trial_count;

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

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-emerald-100 rounded-full">
              <User className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome, {profile.full_name}
              </h1>
              <p className="text-gray-600">{profile.email}</p>
            </div>
          </div>

          <div className="mb-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="w-6 h-6 text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-800">Free Trial Status</h2>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Sessions Used:</span>
                <span className="font-semibold text-emerald-600">
                  {profile.trial_count} / {TRIAL_LIMIT}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Remaining Sessions:</span>
                <span className="font-semibold text-emerald-600">{remainingTrials}</span>
              </div>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-emerald-600 h-full transition-all duration-500"
                style={{ width: `${(profile.trial_count / TRIAL_LIMIT) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Land Health Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Access our advanced AI-powered platform to analyze soil health, vegetation indices,
              and land regeneration metrics. Get real-time insights powered by satellite data and
              machine learning.
            </p>
          </div>

          <button
            onClick={handleLaunchDashboard}
            disabled={launching || !profile.trial_active}
            className="w-full py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-[1.02] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg"
          >
            {launching ? (
              <>
                <div className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                <span>Launching...</span>
              </>
            ) : (
              <>
                <ExternalLink className="w-6 h-6" />
                <span>Launch Dashboard</span>
              </>
            )}
          </button>

          {remainingTrials <= 1 && remainingTrials > 0 && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                You have {remainingTrials} trial session{remainingTrials !== 1 ? 's' : ''} remaining.
                Contact us to upgrade for unlimited access.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
