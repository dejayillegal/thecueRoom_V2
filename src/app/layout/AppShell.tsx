import { ReactNode } from 'react';
import { LoginModal } from '../auth/LoginModal';
import { Logo } from './Logo';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <LoginModal />
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo />
              <div className="hidden md:block h-6 w-px bg-border/50" />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-foreground">TheCueRoom</h1>
                <p className="text-sm text-muted-foreground">Underground Music Community</p>
              </div>
            </div>
            <button id="cta-join" className="px-4 py-2 rounded-md bg-accent-lime text-black font-medium focus:outline-none focus:ring-2 focus:ring-focus">Join</button>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
