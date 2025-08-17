import * as Dialog from '@radix-ui/react-dialog';
import { useEffect } from 'react';

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginModal({ open, onOpenChange }: LoginModalProps) {
  useEffect(() => {
    const handler = () => onOpenChange(true);
    const triggers = document.querySelectorAll('#cta-join, .js-login-link');
    triggers.forEach(el => el.addEventListener('click', handler));
    return () => {
      triggers.forEach(el => el.removeEventListener('click', handler));
    };
  }, [onOpenChange]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-background-subtle text-text rounded-lg p-6 w-full max-w-md relative">
            <Dialog.Title className="text-lg font-bold mb-4">Sign in</Dialog.Title>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-white text-black rounded" aria-label="Sign in with Google">Continue with Google</button>
              <button className="w-full px-4 py-2 bg-black text-white border border-white rounded" aria-label="Sign in with Apple">Continue with Apple</button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded" aria-label="Sign in with Instagram">Continue with Instagram</button>
            </div>
            <Dialog.Close asChild>
              <button aria-label="Close" className="absolute top-2 right-2 text-text">×</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
