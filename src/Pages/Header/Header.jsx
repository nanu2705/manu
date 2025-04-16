import React, { useContext } from 'react'
import "./Header.scss"
import {assets} from "../../Assets/assets/frontend_assets/assets"
import { Link } from 'react-router-dom'
import MyContext from '../Context/MyContext'


const Header = () => {

  const { setOpenmodal} =useContext(MyContext)
  return (
    <div className='header-main'>

      <div className='header-logo'>
      <a href='/'><img src={assets.logo} alt='logo'/></a>
      </div>

      <div className="header-center">
       
      
        <span><a href='/'>Home</a></span>
        <span><a href='/about'>About</a></span>
        <span><a href='/contact'>Contact</a></span>
        <span><a href='/collection'>Collection</a></span>
    
      </div>

      <div className="header-right">

      

       <div className="header-profile">
       <img src={assets.profile_icon} alt="" />

       <div className="header-dropdown">
        <p>My Profile</p>
        <p>Orders</p>
        <p>Wishlist</p>
        <p>Logout</p>
       </div>

       </div>
      
      <Link to="/cart" className="header-cart">
      <img src={assets.cart_icon} alt="" />
      <p>10</p>
      </Link>

      <Link to="/whislist" className="header-wishlist">
      <img src={assets.wishlist_icon} alt="" />
      <p>10</p>
      </Link>

      <div className="header-mobileview">
      <img src={assets.menu_icon} alt="" onClick={() => setOpenmodal(true)} />

</div>

        
      </div>
    </div>
  )
}

export default Header
