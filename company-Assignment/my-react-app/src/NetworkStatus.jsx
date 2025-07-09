import React, { useEffect, useState } from "react";

const getConnection = () => {
  return navigator.connection || navigator.mozConnection || navigator.webkitConnection;
};

function NetworkStatus() {
  const [status, setStatus] = useState({
    online: navigator.onLine,
    type: getConnection()?.effectiveType || "unknown",
  });

  useEffect(() => {
    const updateStatus = () => {
      setStatus({
        online: navigator.onLine,
        type: getConnection()?.effectiveType || "unknown",
      });
    };
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    const conn = getConnection();
    if (conn) conn.addEventListener("change", updateStatus);
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
      if (conn) conn.removeEventListener("change", updateStatus);
    };
  }, []);

  return (
    <div className="network-status">
      <strong>Network Status:</strong> {status.online ? "Online" : "Offline"} <br />
      <strong>Connection Type:</strong> {status.type}
    </div>
  );
}

export default NetworkStatus; 