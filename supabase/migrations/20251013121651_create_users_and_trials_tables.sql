/*
  # ReGenVision Database Schema

  ## Overview
  Sets up the core database structure for ReGenVision - AI for Land Health application.
  Manages user authentication, trial tracking, and session management.

  ## New Tables

  ### 1. `profiles`
  Extends Supabase auth.users with additional user information
  - `id` (uuid, primary key) - References auth.users(id)
  - `email` (text) - User's email address
  - `full_name` (text) - User's full name
  - `trial_count` (integer) - Number of trial sessions used (default: 0)
  - `trial_active` (boolean) - Whether trial is still active (default: true)
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `trial_sessions`
  Tracks each dashboard access session
  - `id` (uuid, primary key) - Unique session identifier
  - `user_id` (uuid) - Foreign key to profiles.id
  - `session_timestamp` (timestamptz) - When the session occurred
  - `created_at` (timestamptz) - Record creation timestamp

  ## Security

  ### Row Level Security (RLS)
  - All tables have RLS enabled
  - Users can only read and update their own profile data
  - Users can only read their own trial session records
  - Insert policies ensure users can only create records for themselves

  ## Important Notes
  1. Trial limit is set to 3 sessions per user
  2. Each dashboard launch increments the trial_count
  3. When trial_count reaches 3, trial_active is set to false
  4. Profile is automatically created when user signs up (via trigger)
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text NOT NULL,
  trial_count integer DEFAULT 0 NOT NULL,
  trial_active boolean DEFAULT true NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create trial_sessions table
CREATE TABLE IF NOT EXISTS trial_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  session_timestamp timestamptz DEFAULT now() NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE trial_sessions ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Trial sessions policies
CREATE POLICY "Users can view own trial sessions"
  ON trial_sessions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own trial sessions"
  ON trial_sessions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', 'User')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();