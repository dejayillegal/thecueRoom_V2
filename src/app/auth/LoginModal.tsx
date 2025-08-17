import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';

export function LoginModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('#cta-join') || target.closest('.js-login-link')) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay data-testid="login-overlay" className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-80 -translate-x-1/2 -translate-y-1/2 bg-bg p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-focus">
          <Dialog.Title className="text-lg font-bold mb-4">Sign In</Dialog.Title>
          <div className="flex flex-col gap-2">
            <button className="py-2 px-4 rounded bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-focus">
              Continue with Google
            </button>
            <button className="py-2 px-4 rounded bg-black text-white font-medium focus:outline-none focus:ring-2 focus:ring-focus border border-white/20">
              Continue with Apple
            </button>
            <button className="py-2 px-4 rounded bg-accent-purple text-white font-medium focus:outline-none focus:ring-2 focus:ring-focus">
              Continue with Instagram
            </button>
          </div>
          <Dialog.Close className="absolute top-2 right-2 text-text focus:outline-none focus:ring-2 focus:ring-focus">
            ×
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
