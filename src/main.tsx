import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { AppSettingsProvider } from './contexts/AppSettingsContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppSettingsProvider>
        <App />
      </AppSettingsProvider>
    </AuthProvider>
  </StrictMode>,
);
