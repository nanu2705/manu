import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import MyContext from '../Context/MyContext';

const ProductList = () => {
  const {url,allProducts, setAllProducts} =useContext(MyContext)

  useEffect(() => {
    axios.get(`${url}/api/products`)
      .then((res) => {
        const flatProducts = res.data.flatMap((cat) => cat.products);
        setAllProducts(flatProducts);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="product-list">
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />

         
        
      ))}
    </div>
  );
};

export default ProductList;
