import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import './CategoryPage.scss';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [mainimg, setMainimg] = useState('');

  useEffect(() => {
    console.log('Fetching category data for:', decodeURIComponent(categoryName));
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        console.log('All categories:', res.data);
        const categoryObj = res.data.find(
          (cat) => cat.category === decodeURIComponent(categoryName)
        );
        console.log('Found categoryObj:', categoryObj);
        if (categoryObj) {
          setProducts(categoryObj.products);
          setMainimg(categoryObj.mainimg);
        }
      })
      .catch(err => console.error(err));
  }, [categoryName]);

  if (!products.length) return <p>No products found in this category.</p>;

  return (
    <div className="category-page">
      {mainimg && (
        <div className="category-banner">
          <img src={mainimg} alt={categoryName} />
          <h1>{decodeURIComponent(categoryName)}</h1>
        </div>
      )}
      <div className="product-list">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
          
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
