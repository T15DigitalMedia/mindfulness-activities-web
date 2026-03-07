import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './mindfulness-app.jsx';
import AuthScreen from './components/AuthScreen.jsx';
import SetPasswordScreen from './components/SetPasswordScreen.jsx';
import { supabase } from './supabaseClient.js';

function Root() {
  const [session, setSession] = useState(undefined);
  const [recovering, setRecovering] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session ?? null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') setRecovering(true);
      setSession(session ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (session === undefined) return null;
  if (session === null) return <AuthScreen />;
  if (recovering) return <SetPasswordScreen onDone={() => setRecovering(false)} />;
  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
