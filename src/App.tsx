import { useState } from 'react';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import { FeatureFlagProvider, FeatureFlags } from './featureFlags';

const defaultFlags: FeatureFlags = {
  ai_feed: false,
  meme_tools: false,
  stage_plot: false,
  epk_export: false,
  gig_radar: false,
  news_rail: false,
  reactions_particles: false,
  dm_encryption_badge: false,
};

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <FeatureFlagProvider flags={defaultFlags}>
      <Header onLogin={() => setOpen(true)} />
      <main className="p-4 mt-16 space-y-4">
        <button
          id="cta-join"
          className="px-4 py-2 bg-accent-lime text-black rounded"
        >
          Join
        </button>
      </main>
      <LoginModal open={open} onOpenChange={setOpen} />
    </FeatureFlagProvider>
  );
}
