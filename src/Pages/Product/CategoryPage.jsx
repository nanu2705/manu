import React, { useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import './CategoryPage.scss';
import MyContext from '../Context/MyContext';

const CategoryPage = () => {
  const { categoryName } = useParams();
 

  const {url,Navigate,products, setProducts,filteredProducts, setFilteredProducts,
    mainimg, setMainimg,priceFilter, setPriceFilter
  } =useContext(MyContext)

  // Fetch category data from API
  useEffect(() => {
    console.log('Fetching category data for:', decodeURIComponent(categoryName));
    axios
      .get(`${url}/api/products`)
      .then((res) => {
        console.log('All categories:', res.data);
        const categoryObj = res.data.find(
          (cat) => cat.category === decodeURIComponent(categoryName)
        );
        if (categoryObj) {
          setProducts(categoryObj.products);
          setFilteredProducts(categoryObj.products);
          setMainimg(categoryObj.mainimg);
        }
      })
      .catch((err) => console.error(err));
  }, [categoryName,url,setFilteredProducts,setProducts,setMainimg]);

  // Handle price filter change
  const handlePriceFilter = (value) => {
    setPriceFilter(value);

    if (value === 'low') {
      setFilteredProducts(products.filter((prod) => prod.price < 1000));
    } else if (value === 'mid') {
      setFilteredProducts(products.filter((prod) => prod.price >= 1000 && prod.price <= 5000));
    } else if (value === 'high') {
      setFilteredProducts(products.filter((prod) => prod.price > 5000));
    } else {
      setFilteredProducts(products);
    }
  };

   // Check if there are products
   if (!filteredProducts.length) {
    return (
      <div className='no-products'>
        <p>No products found in this category.</p>
        <button onClick={() => Navigate('/')}>Return to Home</button>
      </div>
    );
  }

  return (
    <div className="category-page">
      {mainimg && (
        <div className="category-banner">
          <img src={mainimg} alt={categoryName} />
          <h1>{decodeURIComponent(categoryName)}</h1>
        </div>
      )}

      {/* Filter Section */}
      <div className="filter-section">
        <select
          value={priceFilter}
          onChange={(e) => handlePriceFilter(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="low">Under ₹1000</option>
          <option value="mid">₹1000 - ₹5000</option>
          <option value="high">Above ₹5000</option>
        </select>
      </div>

      {/* Product List */}
      <div className="product-list">
      {filteredProducts.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
      </div>
    </div>
  );
};

export default CategoryPage;
