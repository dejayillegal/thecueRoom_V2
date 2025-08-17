import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AppShell } from './AppShell';

describe('AppShell', () => {
  it('has sticky header with body scroll', () => {
    const { container } = render(
      <AppShell>
        <div style={{ height: '200vh' }}>content</div>
      </AppShell>
    );
    const header = container.querySelector('header');
    expect(header?.className).toContain('sticky');
    expect(header?.className).toContain('top-0');
    expect(document.body.style.overflow).toBe('');
  });
});
