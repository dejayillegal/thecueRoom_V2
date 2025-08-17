import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppShell } from './app/layout/AppShell';
import { FlagProvider } from './app/flags';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FlagProvider>
      <AppShell>
        <div className="p-4 text-center">Welcome to TheCueRoom V2</div>
      </AppShell>
    </FlagProvider>
  </React.StrictMode>
);
