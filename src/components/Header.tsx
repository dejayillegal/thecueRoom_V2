import Logo from './Logo';

interface HeaderProps {
  onLogin: () => void;
}

export default function Header({ onLogin }: HeaderProps) {
  return (
    <header className="w-full bg-background border-b border-border/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        <div className="flex-shrink-0 w-72">
          <a href="/" className="flex items-center space-x-3 cursor-pointer group">
            <Logo className="w-8 h-8" />
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-white group-hover:scale-105 transition-transform duration-300">
                TheCueRoom
              </h1>
              <p className="text-xs text-gray-300 -mt-1 hidden sm:block">
                Underground Music Community
              </p>
            </div>
          </a>
        </div>
        <div className="flex-1" />
        <button className="js-login-link text-sm text-text" onClick={onLogin}>Login</button>
      </div>
    </header>
  );
}
