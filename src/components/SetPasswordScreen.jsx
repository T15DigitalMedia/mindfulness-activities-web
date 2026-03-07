import { useState } from 'react';
import { supabase } from '../supabaseClient.js';
import { SKY, DARK_NAVY, globalStyles } from '../theme.js';
import Clouds from './Clouds.jsx';

export default function SetPasswordScreen({ onDone }) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (password !== confirm) { setError('Passwords do not match.'); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (updateError) { setError(updateError.message); return; }
    onDone();
  }

  return (
    <div style={{ width: '100vw', height: '100vh', background: SKY, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{globalStyles}</style>
      <Clouds />
      <form
        onSubmit={handleSubmit}
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(8px)',
          borderRadius: 20,
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: 320,
          boxShadow: '0 8px 32px rgba(26,42,74,0.18)',
          animation: 'fadeIn 0.5s ease both',
        }}
      >
        <h1 style={{ color: DARK_NAVY, textAlign: 'center', fontSize: '1.4rem', marginBottom: '0.5rem', letterSpacing: 1 }}>
          Set your password
        </h1>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, color: DARK_NAVY, fontSize: '0.85rem', fontWeight: 'bold' }}>
          New password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            style={inputStyle}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, color: DARK_NAVY, fontSize: '0.85rem', fontWeight: 'bold' }}>
          Confirm password
          <input
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            required
            autoComplete="new-password"
            style={inputStyle}
          />
        </label>

        {error && (
          <p style={{ color: '#c0392b', fontSize: '0.82rem', textAlign: 'center', margin: 0 }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: '0.5rem',
            background: DARK_NAVY,
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '0.75rem',
            fontSize: '1rem',
            cursor: loading ? 'default' : 'pointer',
            opacity: loading ? 0.7 : 1,
            fontFamily: 'inherit',
          }}
        >
          {loading ? 'Saving…' : 'Set password'}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  border: '1.5px solid #b0c4d8',
  borderRadius: 8,
  padding: '0.5rem 0.75rem',
  fontSize: '0.95rem',
  fontFamily: 'inherit',
  outline: 'none',
  background: 'rgba(255,255,255,0.9)',
  color: '#1a2a4a',
};
