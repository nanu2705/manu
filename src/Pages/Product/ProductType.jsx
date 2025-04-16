import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProductType.scss';

const ProductType = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-types">
      <h2>Categories</h2>
      <div className="categories">
        {categories.map(cat => (
          <div
            className="category-card"
            key={cat.category}
            onClick={() => navigate(`/category/${encodeURIComponent(cat.category)}`)}
          >
            <img src={cat.mainimg} alt={cat.category} />
            <h3>{cat.category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductType;
