import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './mindfulness-app.jsx';
import AuthScreen from './components/AuthScreen.jsx';
import SetPasswordScreen from './components/SetPasswordScreen.jsx';
import { supabase } from './supabaseClient.js';

function Root() {
  const [session, setSession] = useState(undefined);
  const [recovering, setRecovering] = useState(false);
  const [urlError, setUrlError] = useState('');

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.slice(1));
    if (hash.get('error')) {
      setUrlError(hash.get('error_description')?.replace(/\+/g, ' ') ?? 'Link is invalid or has expired.');
      window.history.replaceState(null, '', window.location.pathname);
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') setRecovering(true);
      setSession(session ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (session === undefined) return null;
  if (session === null) return <AuthScreen urlError={urlError} />;
  if (recovering) return <SetPasswordScreen onDone={() => setRecovering(false)} />;
  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
