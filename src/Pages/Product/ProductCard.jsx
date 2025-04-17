import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.route}`}>
        <div className="product-image">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="product-content">
          <h3>{product.name}</h3>
          <p>&#8377; {product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
