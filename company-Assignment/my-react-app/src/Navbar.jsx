import React, { useEffect } from "react";
import "./App.css";

function Navbar({ networkStatus, setNetworkStatus }) {
  useEffect(() => {
    const getConnection = () => navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const updateStatus = () => {
      setNetworkStatus({
        online: navigator.onLine,
        type: getConnection()?.effectiveType || "unknown",
      });
    };
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    const conn = getConnection();
    if (conn) conn.addEventListener("change", updateStatus);
    updateStatus();
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
      if (conn) conn.removeEventListener("change", updateStatus);
    };
  }, [setNetworkStatus]);

  return (
    <nav className="navbar">
      <div className="navbar-title">Smart Photo Gallery</div>
      <div className="navbar-status">
        {networkStatus.online ? (
          <span className="wifi-icon online" title="Online">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/></svg>
            <span className="status-text">Online</span>
          </span>
        ) : (
          <span className="wifi-icon offline" title="Offline">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l22 22"/><path d="M16.72 11.06a10 10 0 0 0-9.44 0"/><path d="M9.53 14.53a5 5 0 0 1 4.94 0"/><path d="M12 20h.01"/></svg>
            <span className="status-text">Offline</span>
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 