import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryItem.css';

export default function GalleryItem({ product }) {
  return (
    <section className="gallery_item_container">
      <Link
        key={product.productKey}
        to={`/shop/products/${product.productItemId}`}
        className="gallery_item"
      >
        <div className="gallery_item_media">
          <img max-width="2000px" src={`http://localhost:8181/content/images/${product.imageKey}`} alt="img" />
        </div>
        <div className="gallery_item_details">
          <div>{product.name}</div>
          <div>{product.description}</div>
        </div>
      </Link>
    </section>
  );
}
