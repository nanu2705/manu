import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Collection from './Pages/Collection/Collection';
import Orders from './Pages/Orders/Orders';
import Wishlist from './Pages/Wishlist/Wishlist';
import NoPage from './Pages/NoPage/NoPage';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Drawer from './Pages/Header/Drawer';
import MyContextProvider from './Pages/Context/MyContextProvider';
import Search from './Pages/Header/Search/Search';
import ProductDetails from './Pages/Product/ProductDetails';
import CategoryPage from './Pages/Product/CategoryPage';

function App() {
  return (
    <div>
     
     <BrowserRouter>


     <MyContextProvider>
     <Header/>
     <Search/>
     <Drawer/>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NoPage/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/order' element={<Orders/>}/>
        <Route path='/whislist' element={<Wishlist/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path="/product/:route" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        

      </Routes>
      <Footer/>
      </MyContextProvider>


     </BrowserRouter>
    </div>
  );
}

export default App;
