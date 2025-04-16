import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get('https://manuback.vercel.app/api/products')
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
