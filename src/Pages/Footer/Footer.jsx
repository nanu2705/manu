import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We craft timeless jewelry pieces that celebrate elegance and grace. Explore our unique
            collection made with love and precision.
          </p>
        </div>

        {/* Newsletter Signup
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Stay updated with new arrivals & exclusive offers</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div> */}

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Exchanges</li>
            <li>Warranty Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Gold Jewelry</li>
            <li>Diamond Collection</li>
            <li>New Arrivals</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
          <a
  href="https://www.instagram.com"
  target="_blank"
  rel="noopener noreferrer"
  title="Follow us on Instagram"
  className="social-icon instagram-icon"
  data-ga-event="instagram_click"
>
  <FaInstagram />
</a>

<a
  href="https://www.facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  title="Follow us on Facebook"
  className="social-icon facebook-icon"
>
  <FaFacebookF />
</a>

<a
  href="https://www.twitter.com"
  target="_blank"
  rel="noopener noreferrer"
  title="Follow us on Twitter"
  className="social-icon twitter-icon"
>
  <FaTwitter />
</a>

<a
  href="https://www.pinterest.com"
  target="_blank"
  rel="noopener noreferrer"
  title="Follow us on Pinterest"
  className="social-icon pinterest-icon"
>
  <FaPinterestP />
</a>


          </div>

         
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Forever. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
