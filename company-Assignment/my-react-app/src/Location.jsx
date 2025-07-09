import React, { useEffect, useState } from "react";

function Location({ onLocationChange }) {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
          .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch location name");
            return res.json();
          })
          .then((data) => {
            const address = data.address;
            let locationName = "Unknown location";
            
            if (address) {
              locationName = address.city || 
                           address.town || 
                           address.village || 
                           address.county || 
                           address.state || 
                           address.country || 
                           "Unknown location";
            }
            
            setLocation(locationName);
            onLocationChange(locationName);
            setLoading(false);
          })
          .catch((err) => {
            setError("Could not get location name");
            setLoading(false);
          });
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }, [onLocationChange]);

  if (loading) return <div className="location-section">Fetching location...</div>;
  if (error) return <div className="location-section" style={{ color: "red" }}>Location error: {error}</div>;
  return (
    <div className="location-section">
      <strong>Your Location:</strong> <br />
      {location}
    </div>
  );
}

export default Location; 