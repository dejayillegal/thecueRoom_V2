import { renderHook } from '@testing-library/react';
import { FeatureFlagProvider, useFeatureFlag } from './featureFlags';
import { describe, it, expect } from 'vitest';

describe('feature flags', () => {
  it('provides enabled flag', () => {
    const wrapper = ({ children }: any) => (
      <FeatureFlagProvider flags={{ ai_feed: true }}>{children}</FeatureFlagProvider>
    );
    const { result } = renderHook(() => useFeatureFlag('ai_feed'), { wrapper });
    expect(result.current).toBe(true);
  });
});
