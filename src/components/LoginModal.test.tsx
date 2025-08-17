import { render, fireEvent } from '@testing-library/react';
import LoginModal from './LoginModal';
import { test, expect, vi } from 'vitest';

test('esc closes modal', () => {
  const onOpenChange = vi.fn();
  render(<LoginModal open={true} onOpenChange={onOpenChange} />);
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(onOpenChange).toHaveBeenCalledWith(false);
});
