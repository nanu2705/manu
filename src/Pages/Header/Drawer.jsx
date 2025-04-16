import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'
import "./Drawer.scss"

const Drawer = () => {
  const { openmodal, setOpenmodal } = useContext(MyContext)

  return (
    <div className={`drawer-overlay ${openmodal ? 'show' : ''}`} onClick={() => setOpenmodal(false)}>
      <div className="drawer-main" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setOpenmodal(false)}>✕</button>
        {/* Drawer content here */}
        <div className="drawer-list">
        <span><a href='/'>Home</a></span>
        <span><a href='/about'>About</a></span>
        <span><a href='/contact'>Contact</a></span>
        <span><a href='/collection'>Collection</a></span>
        </div>
      </div>
    </div>
  )
}

export default Drawer
