import { renderHook, render } from '@testing-library/react';
import { FlagProvider, useFlag, Flag } from './index';
import { describe, it, expect } from 'vitest';

describe('feature flags', () => {
  it('returns enabled flag', () => {
    const wrapper = ({ children }: any) => <FlagProvider flags={{ ai_feed: true }}>{children}</FlagProvider>;
    const { result } = renderHook(() => useFlag('ai_feed'), { wrapper });
    expect(result.current).toBe(true);
  });

  it('Flag component hides children when disabled', () => {
    const { container } = render(
      <FlagProvider>
        <Flag name="meme_tools">hi</Flag>
      </FlagProvider>
    );
    expect(container.textContent).toBe('');
  });
});
