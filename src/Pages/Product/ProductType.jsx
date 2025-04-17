import React, { useContext, useEffect} from 'react';
import axios from 'axios';
import './ProductType.scss';
import MyContext from '../Context/MyContext';

const ProductType = () => {


  const {url,Navigate,categories, setCategories} =useContext(MyContext)
  

  useEffect(() => {
    axios.get(`${url}/api/products`)
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, );

  return (
    <div className="product-types">
      <h2>Categories</h2>
      <div className="categories">
        {categories.map(cat => (
          <div
            className="category-card"
            key={cat.category}
            onClick={() => Navigate(`/category/${encodeURIComponent(cat.category)}`)}
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
