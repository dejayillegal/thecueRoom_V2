import { render, screen } from '@testing-library/react';
import Header from './Header';
import { test, expect } from 'vitest';

test('header is sticky', () => {
  render(<Header onLogin={() => {}} />);
  const header = screen.getByRole('banner');
  expect(header.className).toContain('sticky');
  expect(header.className).toContain('top-0');
});
