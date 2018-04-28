import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryItem.css';

export default function GalleryItem({ children, product }) {
  return (
    <section className="gallery_item_container">
      <Link
        key={product.Name}
        to={`/shop/product/${product.Name}`}
        className="gallery_item"
      >
        <div className="gallery_item_media">
          <img max-width="2000px" src="http://via.placeholder.com/700x700" alt="img" />
        </div>
        <div className="gallery_item_details">
          <div>{product.name}</div>
          <div>{product.description}</div>
        </div>
      </Link>
    </section>
  );
}
