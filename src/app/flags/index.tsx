import { createContext, useContext, ReactNode } from 'react';

export type FeatureFlag =
  | 'ai_feed'
  | 'meme_tools'
  | 'stage_plot'
  | 'epk_export'
  | 'gig_radar'
  | 'news_rail'
  | 'reactions_particles'
  | 'dm_encryption_badge';

type Flags = Record<FeatureFlag, boolean>;

const defaultFlags: Flags = {
  ai_feed: false,
  meme_tools: false,
  stage_plot: false,
  epk_export: false,
  gig_radar: false,
  news_rail: false,
  reactions_particles: false,
  dm_encryption_badge: false,
};

const FlagContext = createContext<Flags>(defaultFlags);

export function FlagProvider({ flags = {}, children }: { flags?: Partial<Flags>; children: ReactNode }) {
  return <FlagContext.Provider value={{ ...defaultFlags, ...flags }}>{children}</FlagContext.Provider>;
}

export function useFlag(name: FeatureFlag): boolean {
  return useContext(FlagContext)[name];
}

export function Flag({ name, children }: { name: FeatureFlag; children: ReactNode }) {
  return useFlag(name) ? <>{children}</> : null;
}
