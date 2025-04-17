import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MyContext from './MyContext';
import axios from 'axios';

const MyContextProvider = ({children}) => {

  const apiUrl = process.env.REACT_APP_API_URL ;

  // const url = 'https://manuback.vercel.app'
  const url = 'http://localhost:5000'


    //for api calling start

 const[apiloader,setApiloader]=useState(true)
 const[api,setApi] = useState([])
 

   const fetchData = async () => {
     try {
       const response = await axios.get(`${url}/api/products`);
       setApi(response.data)
     } catch (error) {
       console.error('Error fetching data:', error);
     } finally {
       setApiloader(false);
     }
   };

 // for api calling end

 useEffect(() => {
  fetchData();
}
, [url]);

       // location common
  const location = useLocation()  
  // for location end

  // for navigation start
  const Navigate = useNavigate()
  // for navigation end

 //for header modal start

    const [openmodal, setOpenmodal] = useState(false)
  
 //for header modal end


 //Filter.jsx start

   const [selectedCategory, setSelectedCategory] = useState('');
   const [selectedPriceRange, setSelectedPriceRange] = useState('');
 //Filter.jsx end


 //Banner.jsx start

 const [index, setIndex] = useState(0);
 //Banner.jsx end


 //CategoryPage.jsx start

 const [products, setProducts] = useState([]);
 const [filteredProducts, setFilteredProducts] = useState([]);
 const [mainimg, setMainimg] = useState('');
 const [priceFilter, setPriceFilter] = useState('');

  //CategoryPage.jsx end

  //ProductDetails.jsx start
   const [product, setProduct] = useState(null);
  //ProductDetails.jsx end

   //ProductList.jsx start
  const [allProducts, setAllProducts] = useState([]);
  //ProductList.jsx end

  //ProductType.jsx start

  const [categories, setCategories] = useState([]);

  //ProductType.jsx end
  return (
    <div>
      
    <MyContext.Provider value={{
        openmodal, setOpenmodal, 
        location,
        Navigate,url,
        apiUrl,api,apiloader,
        selectedCategory, setSelectedCategory,selectedPriceRange, setSelectedPriceRange,
        index, setIndex,categories, setCategories,
        products, setProducts,filteredProducts, setFilteredProducts,
    mainimg, setMainimg,priceFilter, setPriceFilter,product, setProduct,allProducts, setAllProducts
    }}>
        
{children}
        </MyContext.Provider>
    </div>
  )
}

export default MyContextProvider
