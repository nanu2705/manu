import React, { useContext } from 'react'
import MyContext from '../Context/MyContext';

const Cart = () => {

  const {api} =useContext(MyContext)
  api.post('/cart/add', {
    userId: "user_id_here",
    product: {
      productId: "product_id_here",
      name: "Necklace",
      price: 999,
      img: "url"
    }
  })
  .then(res => console.log("Added to cart:", res.data))
  .catch(err => console.error("Error:", err));
  
  return (
    <div>
      Your Shopping Cart
    </div>
  )
}

export default Cart
