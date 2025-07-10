import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Candidates from './pages/Candidates';
import AddCandidate from './pages/AddCandidate';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  const [page, setPage] = useState('dashboard');
  const [auth, setAuth] = useState(!!localStorage.getItem('token'));
  const [showRegister, setShowRegister] = useState(true); // Show register by default
  const [theme, setTheme] = useState('dark');

  const handleLogin = () => {
    setAuth(true);
    setPage('dashboard');
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    setShowRegister(true); // Go back to register on logout
  };
  const handleRegister = () => {
    setShowRegister(false);
  };
  const handleAddedCandidate = () => {
    setPage('candidates');
  };

  // Theme toggle logic
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Set initial theme on mount
  if (document.documentElement.getAttribute('data-theme') !== theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  if (!auth) {
    return showRegister ? (
      <div>
        <Register onRegister={handleRegister} />
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <span style={{ color: '#fff' }}>Already have an account? </span>
          <button style={{ color: '#7b9cff', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setShowRegister(false)}>Login</button>
        </div>
      </div>
    ) : (
      <div>
        <Login onLogin={handleLogin} />
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <span style={{ color: '#fff' }}>Don't have an account? </span>
          <button style={{ color: '#7b9cff', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setShowRegister(true)}>Register</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      <Sidebar onNavigate={setPage} activePage={page} extraLinks={[{ label: 'Add Candidate', value: 'add-candidate' }]} />
      <main style={{ flex: 1 }}>
        <div style={{ textAlign: 'right', padding: '1rem 2rem 0 0', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 16 }}>
          <button onClick={toggleTheme} style={{ background: 'var(--card-bg)', color: 'var(--accent)', border: '1px solid var(--input-border)', borderRadius: 8, padding: '0.4em 1.2em', cursor: 'pointer', fontWeight: 500 }}>
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <button onClick={handleLogout} style={{ background: 'var(--danger)', color: '#fff', border: 'none', borderRadius: 8, padding: '0.4em 1.2em', cursor: 'pointer', fontWeight: 500 }}>Logout</button>
        </div>
        {page === 'dashboard' && <Dashboard />}
        {page === 'candidates' && <Candidates />}
        {page === 'add-candidate' && <AddCandidate onAdded={handleAddedCandidate} />}
      </main>
    </div>
  );
}

export default App;
