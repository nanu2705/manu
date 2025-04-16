import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.scss';

const ProductDetails = () => {
  const { route } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the single product by its route slug
    axios
      .get(`http://localhost:5000/api/products/${route}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Product fetch error:", err));
  }, [route]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details-page">
      <div className="image-wrapper">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="details">
        <h2>{product.name}</h2>
        <p className="desc">{product.description}</p>
        <p className="price">&#8377; {product.price}</p>
        <p className="sizes">
          <strong>Available Sizes:</strong> {product.sizes.join(', ')}
        </p>
        <p className="colors">
          <strong>Colors:</strong> {product.colors.join(', ')}
        </p>
        <div className="actions">
          <button className="btn cart">Add to Cart</button>
          <button className="btn wishlist">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
