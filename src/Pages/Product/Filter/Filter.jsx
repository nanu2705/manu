import React, { useContext } from 'react';
import './Filter.scss';
import MyContext from '../../Context/MyContext';

const Filter = ({ onFilterChange }) => {
const {selectedCategory, setSelectedCategory,selectedPriceRange, setSelectedPriceRange} = useContext(MyContext)

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange('category', e.target.value);
  };

  const handlePriceChange = (e) => {
    setSelectedPriceRange(e.target.value);
    onFilterChange('price', e.target.value);
  };

  return (
    <div className="filter">
      <h4>Filter Products</h4>
      <div className="filter-category">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="diamond">Diamond</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="filter-price">
        <label htmlFor="price">Price</label>
        <select
          id="price"
          value={selectedPriceRange}
          onChange={handlePriceChange}
        >
          <option value="">All</option>
          <option value="low">Under ₹1000</option>
          <option value="mid">₹1000 - ₹5000</option>
          <option value="high">Above ₹5000</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
