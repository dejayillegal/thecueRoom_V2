import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { LoginModal } from './LoginModal';

function Wrapper() {
  return (
    <>
      <button id="cta-join">open</button>
      <LoginModal />
    </>
  );
}

describe('LoginModal accessibility', () => {
  it('opens and closes with ESC and click outside', async () => {
    const user = userEvent.setup();
    render(<Wrapper />);
    await user.click(screen.getByText('open'));
    expect(screen.getByText('Continue with Google')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByText('Continue with Google')).toBeNull();
    await user.click(screen.getByText('open'));
    const overlay = await screen.findByTestId('login-overlay');
    await user.click(overlay);
    expect(screen.queryByText('Continue with Google')).toBeNull();
  });
});
