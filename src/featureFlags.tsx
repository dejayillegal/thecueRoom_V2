import { createContext, useContext, ReactNode } from 'react';

export type FeatureFlags = {
  ai_feed: boolean;
  meme_tools: boolean;
  stage_plot: boolean;
  epk_export: boolean;
  gig_radar: boolean;
  news_rail: boolean;
  reactions_particles: boolean;
  dm_encryption_badge: boolean;
};

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

const FeatureFlagContext = createContext<FeatureFlags>(defaultFlags);

export function FeatureFlagProvider({ flags, children }: { flags?: Partial<FeatureFlags>; children: ReactNode }) {
  return (
    <FeatureFlagContext.Provider value={{ ...defaultFlags, ...flags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export function useFeatureFlag(flag: keyof FeatureFlags) {
  const flags = useContext(FeatureFlagContext);
  return flags[flag];
}
