import React, { useState, useEffect } from 'react';
import './Banner.scss';
import { assets } from '../../Assets/assets/frontend_assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
  {
    img: assets.banner1,
    title: 'Discover Timeless Elegance',
    desc: 'Explore our curated collection of handcrafted gold, diamond and gemstone jewelry. Designed to celebrate every moment.',
  },
  {
    img: assets.banner2,
    title: 'Shine With Every Step',
    desc: 'Unveil your elegance with our exclusive new arrivals in fine jewelry. Crafted with precision.',
  },
  {
    img: assets.banner3,
    title: 'Celebrate Every Sparkle',
    desc: 'Mark your special moments with brilliant gems and timeless designs made for you.',
  }
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % banners.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="banner-slide"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="banner-image">
            <img src={banners[index].img} alt={banners[index].title} />
          </div>

          <div className="banner-content">
            <h1>{banners[index].title}</h1>
            <p>{banners[index].desc}</p>
            <button className="banner-button">Shop Now</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;
