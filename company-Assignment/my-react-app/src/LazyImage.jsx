import React, { useRef, useState, useEffect } from "react";

function LazyImage({ src, alt, ...rest }) {
  const imgRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} style={{ minHeight: 200, background: "#eee" }}>
      {visible ? (
        <img src={src} alt={alt} style={{ width: "100%", display: "block" }} {...rest} />
      ) : (
        <div style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>Loading...</div>
      )}
    </div>
  );
}

export default LazyImage; 