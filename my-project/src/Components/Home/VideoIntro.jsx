import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Features from './Features';

export default function VideoCarousel() {
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    const startAutoScroll = () => {
      scrollInterval.current = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 2; 
        }
      }, 50);
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval.current);
  }, []);

  const handleMouseEnter = () => clearInterval(scrollInterval.current);
  const handleMouseLeave = () => {
    const startAutoScroll = () => {
      scrollInterval.current = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 2;
        }
      }, 50);
    };
    startAutoScroll();
  };

  const videoSources = [
    '/videos/mouse-keyboard-1.mp4',
    '/videos/mouse-keyboard-2.mp4',
    '/videos/mouse-keyboard-3.mp4',
    '/videos/mouse-keyboard-4.mp4',
    '/videos/mouse-keyboard-5.mp4',
  ];

  return (
    <div className="relative w-full bg-[url('https://cdn.prod.website-files.com/607ef7a9757a0319beb2dae2/650036a17c5d8668c4a39c69_gaming-peripherals-desk.jpg')] bg-cover text-white px-8 py-16 h-full">
      <div className="p-3 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="space-y-6">
          <h1 className="text-xl md:text-5xl font-bold leading-tight game">
            Elevate Your Game With Our Premium Gaming Gear
          </h1>
          <button className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                  />
                </svg>
              </div>
            </div>
            <span className="text-lg space">Watch Video</span>
          </button>
          <p className="text-gray-50 space max-w-lg text-sm">
            Engineered for Unparalleled Performance and Uncompromising Quality. Crafted with the finest materials and state-of-the-art technologies, our gaming gear is designed.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {videoSources.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-72"
            >
              <video
                src={src}
                controls
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* <Features/> */}
    </div>
  );
}
