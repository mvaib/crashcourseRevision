import React, { useState } from "react";
import Navbar from "./Navbar";
import Location from "./Location";
import Gallery from "./Gallery";
import './App.css';

function App() {
  const [locationName, setLocationName] = useState(null);
  const [networkStatus, setNetworkStatus] = useState({ online: navigator.onLine, type: "unknown" });

  return (
    <>
      <Navbar networkStatus={networkStatus} setNetworkStatus={setNetworkStatus} />
      <div className="main-wrapper">
        <div style={{ maxWidth: 800, width: "100%", padding: 24 }}>
          <Location onLocationChange={setLocationName} />
          <Gallery locationName={locationName} />
        </div>
      </div>
    </>
  );
}

export default App;
