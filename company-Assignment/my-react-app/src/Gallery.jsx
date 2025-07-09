import React, { useEffect, useState } from "react";
import LazyImage from "./LazyImage";
import { UNSPLASH_ACCESS_KEY } from "./config";

const IMAGES_PER_PAGE = 4;

function Gallery({ locationName }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!locationName) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const locationParts = locationName.split(', ');
    const searchQuery = locationParts.slice(0, 2).join(', '); 

    fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=12`, {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch images");
        return res.json();
      })
      .then((data) => {
        setImages(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [locationName]);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const startIdx = (page - 1) * IMAGES_PER_PAGE;
  const currentImages = images.slice(startIdx, startIdx + IMAGES_PER_PAGE);

  if (!locationName) return <div className="gallery-section">Waiting for location...</div>;
  if (loading) return <div className="gallery-section">Loading images for {locationName}...</div>;
  if (error) return <div className="gallery-section" style={{ color: "red" }}>Error: {error}</div>;
  if (images.length === 0) return <div className="gallery-section">No images found for {locationName}</div>;

  return (
    <div className="gallery-section">
      <h2>Images from {locationName}</h2>
      <div className="gallery-grid">
        {currentImages.map((img) => (
          <img
            className="gallery-image"
            key={img.id}
            src={img.urls.regular}
            alt={img.alt_description || img.description || 'Location image'}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          Prev
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Gallery; 