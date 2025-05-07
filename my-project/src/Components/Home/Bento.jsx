import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GamingDealsUI = ({ targetDate }) => {
  const products = [
    {
      name: 'Controllers',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20221015/pngtree-game-controller-home-games-remote-mechanical-keyboard-photo-image_34240612.jpg',
      link: '/accs',
    },
    {
      name: 'Mouse Gaming',
      image: 'https://png.pngtree.com/thumb_back/fw800/background/20241225/pngtree-high-tech-gaming-led-enhanced-mouse-design-image_16869525.jpg',
      link: '/accs',
    },
    {
      name: 'Keyboard Gaming',
      image: 'https://www.aukey.com/cdn/shop/articles/02_01a2c5f4-68fa-4de9-92ae-a2007931d50a.jpg?v=1660865630',
      link: '/keyboard',
    },
  ];

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className='container mx-auto h-full mb-6 mt-8'>
      {/* <h1 className='text-xl md:text-4xl night  bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text text-center'>Our daily <span className='text-white'>deals</span> </h1> */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-5 xl:p-12">
      <div className="md:col-span-2 md:row-span-2 flex items-center justify-center bg-gradient-to-r from-[#FF2ECE] to-blue-900 rounded-2xl p-6 relative text-white">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-light takota">Weekly Deals</h1>
          <p className="mt-2 text-sm md:text-lg space">Hurry Up, Limited-Time Savings!</p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="text-white px-4 py-2 rounded-lg text-xs lg:text-xl game font-bold">
              {String(timeLeft.days).padStart(2, '0')} DAYS
            </div>
            <div className="text-white px-4 py-2 rounded-lg text-xs lg:text-xl game font-bold">
              {String(timeLeft.hours).padStart(2, '0')} HOURS
            </div>
            <div className="text-white px-4 py-2 rounded-lg text-xs lg:text-xl game font-bold">
              {String(timeLeft.minutes).padStart(2, '0')} MINUTES
            </div>
            <div className="text-white px-4 py-2 rounded-lg text-xs lg:text-xl game font-bold">
              {String(timeLeft.seconds).padStart(2, '0')} SECONDS
            </div>
          </div>
          <button className="mt-6 bg-black hover:bg-white hover:text-black px-6 py-2 rounded-full w-28 h-28 lg:h-32 lg:w-32 animate-bounce text-white">
            Shop Now →
          </button>
        </div>
      </div>

      {products.map((category, index) => (
             <div
             key={category}
             className={`relative bg-black rounded-2xl overflow-hidden group ${index === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}
           >
            <Link to={category.link}>
            <img
               src={category.image}
               alt={category.name}
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
             />
            </Link>
            
         <Link to={category.link}>    <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
               {category.name} →
             </div></Link>
           </div>
  
      ))}
    </div>
    </div>
  );
};

export default GamingDealsUI;