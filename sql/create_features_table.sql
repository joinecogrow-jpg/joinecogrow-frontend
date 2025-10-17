-- Create features table for JoinEcoGrow Platform
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS features (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  component_id UUID,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_features_category ON features(category);
CREATE INDEX IF NOT EXISTS idx_features_is_active ON features(is_active);
CREATE INDEX IF NOT EXISTS idx_features_created_at ON features(created_at);
CREATE INDEX IF NOT EXISTS idx_features_name ON features(name);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_features_updated_at 
    BEFORE UPDATE ON features 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for JoinEcoGrow Platform
INSERT INTO features (name, category, description) VALUES
-- DIY Eco-Growing Features (88 features)
('Hydroponic System Setup', 'diy', 'Complete guide to setting up a hydroponic growing system'),
('Composting Tutorial', 'diy', 'Learn how to create nutrient-rich compost from kitchen waste'),
('Seed Starting Guide', 'diy', 'Step-by-step guide to starting seeds indoors'),
('Container Gardening', 'diy', 'Growing vegetables in containers for small spaces'),
('Greenhouse Construction', 'diy', 'Build your own greenhouse for year-round growing'),

-- Tree Planting Features (91 features)
('Tree Species Selection', 'trees', 'Choose the right tree species for your climate'),
('Planting Calendar', 'trees', 'Optimal timing for planting different tree species'),
('Tree Care Guide', 'trees', 'Comprehensive care instructions for young trees'),
('Forest Restoration', 'trees', 'Large-scale reforestation project management'),
('Urban Tree Planting', 'trees', 'Planting trees in urban environments'),

-- Entertainment Features (63 features)
('Growing Challenges', 'entertainment', 'Fun challenges to motivate sustainable growing'),
('Photo Contests', 'entertainment', 'Share your growing progress with the community'),
('Educational Games', 'entertainment', 'Learn about sustainability through interactive games'),
('Virtual Tours', 'entertainment', 'Explore different growing environments virtually'),
('Achievement System', 'entertainment', 'Earn badges for your growing milestones'),

-- Gaming Features (55 features)
('Eco-Grow Simulator', 'gaming', 'Simulate different growing scenarios'),
('Leaderboards', 'gaming', 'Compete with other growers globally'),
('Quest System', 'gaming', 'Complete missions to unlock new features'),
('Virtual Garden', 'gaming', 'Create and manage a virtual garden'),
('Multiplayer Challenges', 'gaming', 'Collaborate with friends on growing projects'),

-- AI Features (68 features)
('Plant Health AI', 'ai', 'AI-powered plant health diagnosis'),
('Growth Prediction', 'ai', 'Predict optimal growing conditions'),
('Smart Recommendations', 'ai', 'Personalized growing advice'),
('Automated Monitoring', 'ai', 'AI-driven plant monitoring system'),
('Chatbot Assistant', 'ai', 'Get instant help with your growing questions'),

-- IoT Features (38 features)
('Sensor Integration', 'iot', 'Connect soil, light, and temperature sensors'),
('Automated Watering', 'iot', 'Smart irrigation system control'),
('Climate Monitoring', 'iot', 'Real-time environmental data tracking'),
('Remote Control', 'iot', 'Control your growing setup from anywhere'),
('Data Analytics', 'iot', 'Analyze sensor data for optimal growing'),

-- Blockchain Features (42 features)
('Carbon Credits', 'blockchain', 'Track and trade carbon credits'),
('NFT Certificates', 'blockchain', 'Mint certificates for your growing achievements'),
('Decentralized Marketplace', 'blockchain', 'Trade seeds and equipment peer-to-peer'),
('Smart Contracts', 'blockchain', 'Automated agreements for growing partnerships'),
('Token Rewards', 'blockchain', 'Earn tokens for sustainable practices'),

-- Community Features (87 features)
('Grower Network', 'community', 'Connect with local and global growers'),
('Knowledge Sharing', 'community', 'Share tips and experiences'),
('Mentorship Program', 'community', 'Learn from experienced growers'),
('Local Events', 'community', 'Find and organize local growing events'),
('Expert Q&A', 'community', 'Get advice from gardening experts'),

-- Analytics Features (47 features)
('Growth Tracking', 'analytics', 'Track your plants growth over time'),
('Yield Analysis', 'analytics', 'Analyze your harvest yields'),
('Cost Tracking', 'analytics', 'Monitor your growing expenses'),
('Performance Metrics', 'analytics', 'Measure your growing success'),
('Trend Analysis', 'analytics', 'Identify patterns in your growing data'),

-- Commerce Features (45 features)
('Seed Marketplace', 'commerce', 'Buy and sell seeds'),
('Equipment Store', 'commerce', 'Purchase growing equipment'),
('Subscription Boxes', 'commerce', 'Monthly deliveries of growing supplies'),
('Bulk Purchasing', 'commerce', 'Group buying for better prices'),
('Local Delivery', 'commerce', 'Get supplies delivered locally'),

-- Enterprise Features (74 features)
('Corporate Programs', 'enterprise', 'Sustainability programs for businesses'),
('Bulk Management', 'enterprise', 'Manage multiple growing locations'),
('Employee Engagement', 'enterprise', 'Engage employees in sustainability'),
('Reporting Dashboard', 'enterprise', 'Comprehensive reporting for management'),
('Integration APIs', 'enterprise', 'Connect with existing business systems'),

-- Admin Features (52 features)
('User Management', 'admin', 'Manage platform users and permissions'),
('Content Moderation', 'admin', 'Moderate community content'),
('Analytics Dashboard', 'admin', 'Platform-wide analytics and insights'),
('System Configuration', 'admin', 'Configure platform settings'),
('Backup Management', 'admin', 'Manage data backups and recovery')
ON CONFLICT (name) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE features ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for all users" ON features
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON features
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users" ON features
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users" ON features
    FOR DELETE USING (auth.role() = 'authenticated');
