import React, { useState, useEffect } from "react";

const Curosal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      sm: "https://www.asus.com/us/site/gaming/oled-gaming-monitor/assets/images/hero/banner-2@mobile.webp",
      md: "https://www.pcinvasion.com/wp-content/uploads/2020/09/msi-rtx-3000-cards.jpg",
      xl:"https://storage-asset.msi.com/global/picture/banner/banner_1710739762945b9405e21d873be6823104840bed7e.jpeg",
      
    },
    {
      sm: "https://my-live-01.slatic.net/p/05203032257f64bcbec834a938e63f9b.png",
      md: "https://cdn.wccftech.com/wp-content/uploads/2024/01/ASUS-ROG-SWIFT-OLED-QD-OLED-Gaming-Monitors-Flat-Screen-4K-Dual-Mode-Technology-_-Slide-_1.png",
      xl: "https://www.ezpzsolutions.in/wp-content/uploads/2022/01/asus-gaming-chair-banner.jpeg",
    },
    {
      sm: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/dc621715176897.5c46b95ebbcb0.jpg",
      md: "https://pbs.twimg.com/media/EVEZqDZU8AEx4ni.png",
      xl: "https://storage-asset.msi.com/global/picture/banner/banner_1715216216b09446b6cacbdd8584241bc095df70fb.jpeg",
    },
    {
      sm: "https://www.mobigyaan.com/wp-content/uploads/2019/07/ASUS-ROG-Phone-2-launch-poster.jpeg",
      md: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxyY7Y7xsRriZFt0Bvehl0piebnUwUr9zdqXbAi_1nxXk1yNjorvaYu3iUQnc4Z-N-ofVsjoQgQarx5yfQ3A6RRcJCtbclaVc1kEcFVkkuvZTDfv4gk_yHQ2bvKnGuDwRa_NWhRKZEvG7m/s1600/PR2.jpg",
      xl: "https://images.acer.com/is/image/acer/Keyboards_main%20banner-1:Secondary-Hero-XL",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleManualChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[40vh] lg:h-[40vh] xl:h-[80vh] overflow-hidden">
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet={images[currentImageIndex].sm}
        />
        <source
          media="(max-width: 1024px)"
          srcSet={images[currentImageIndex].md}
        />
        <img
          src={images[currentImageIndex].xl}
          alt={`Slide ${currentImageIndex}`}
          className="absolute w-full h-full object-cover object-center transition-transform duration-700 ease-in-out"
        />
      </picture>

      
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualChange(index)}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? "bg-red" : "bg--400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Curosal;


