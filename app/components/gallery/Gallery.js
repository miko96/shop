import React from 'react';
import './Gallery.css';

export default function Gallery({ children }) {
  return (
    <section className="gallery_container">
      {children}
    </section>
  );
}
