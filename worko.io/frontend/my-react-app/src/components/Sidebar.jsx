import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ onNavigate, activePage, extraLinks = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsOpen(false); // close sidebar on navigation (for mobile)
  };

  // Optional: close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Toggle button (hamburger icon) */}
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">CRD</div>
        <nav className="sidebar-nav">
          <button
            className={activePage === 'dashboard' ? 'active' : ''}
            onClick={() => handleNavigate('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={activePage === 'candidates' ? 'active' : ''}
            onClick={() => handleNavigate('candidates')}
          >
            Candidates
          </button>
          {extraLinks.map((link) => (
            <button
              key={link.value}
              className={activePage === link.value ? 'active' : ''}
              onClick={() => handleNavigate(link.value)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
