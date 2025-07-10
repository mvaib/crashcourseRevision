import React, { useState } from 'react';

const API_BASE = 'https://candidate-refral-dashboard.onrender.com/api'; // Replace with actual backend port

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch(`${API_BASE}/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setTimeout(() => onRegister(), 1200);
      } else {
        setError(data.msg || 'Registration failed');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#20232a' }}>
      <form onSubmit={handleSubmit} style={{ background: '#23272f', padding: '2.5rem 2rem', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', minWidth: 320 }}>
        <h2 style={{ color: '#7b9cff', marginBottom: '1.5rem', textAlign: 'center' }}>Register</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ color: '#fff', display: 'block', marginBottom: 6 }}>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required style={{ width: '100%', padding: '0.7em', borderRadius: 8, border: '1px solid #313543', background: '#181c24', color: '#fff' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ color: '#fff', display: 'block', marginBottom: 6 }}>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '0.7em', borderRadius: 8, border: '1px solid #313543', background: '#181c24', color: '#fff' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ color: '#fff', display: 'block', marginBottom: 6 }}>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: '0.7em', borderRadius: 8, border: '1px solid #313543', background: '#181c24', color: '#fff' }} />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        {success && <div style={{ color: 'green', marginBottom: 12 }}>Registration successful! Redirecting...</div>}
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.8em', borderRadius: 8, background: '#7b9cff', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1.1em' }}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register; 