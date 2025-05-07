import React, { useEffect, useRef } from 'react';

const Cards = () => {
  const products = [
    {
      id: '6755bf6d9f72529cc63f2f3d',
      img: 'https://asset.msi.com/resize/image/global/product/product_173028034930f57092f6b23f2405f88e4320a5171d.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
      title: 'Quantum Viper',
      desc: 'The MSI PRO Z890-S WIFI WHITE boasts robust cooling, WiFi 7, and ample PCIe 5.0 slots for unmatched performance.',
      price: '$165.99',
      rating: '★★★★★'
    },
    {
      id: '6753dfc3fbaa1f03cbe2be95',
      img: 'https://images.acer.com/is/image/acer/Predator-Orion-7000-Homepage-Photo?$responsive$',
      title: 'Pulsar Phantom',
      desc: 'Keep frames high and temps low with Predator FrostBlade™ 2.0 fans, which optimize airflow while reducing vibration and noise.',
      price: '$99.99',
      rating: '★★★★★'
    },
    {
      id: '6759a8942f61b7bf3fb983de',
      img: 'https://dlcdnwebimgs.asus.com/gain/DDA5D7BA-6EAB-4EA8-A35E-464BE1B40848/w1000/h732',
      title: 'Onyx Predator',
      desc: 'NVIDIA® GeForce RTX™ 40 Series GPUs deliver a quantum leap in performance and AI-powered graphics.',
      price: '$220.99',
      rating: '★★★★★'
    },
    {
      id: '66fae4d5430510aba5ac0870',
      img: 'https://dlcdnwebimgs.asus.com/gain/43993576-CA02-46A8-9BBE-10D6F11F2E25/w1000/h732',
      title: 'ROG Chariot X Core',
      desc: 'The ROG Chariot X Core gaming chair offers premium features like memory-foam lumbar support and 4D armrests.',
      price: '$299.99',
      rating: '★★★★★'
    }
  ];

  const scrollRef = useRef(null);
  let scrollInterval;

  useEffect(() => {
    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 1;
          if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }, 20);
    };
    startScrolling();

    const stopScrolling = () => clearInterval(scrollInterval);

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('mouseenter', stopScrolling);
    scrollContainer.addEventListener('mouseleave', startScrolling);

    return () => {
      stopScrolling();
      scrollContainer.removeEventListener('mouseenter', stopScrolling);
      scrollContainer.removeEventListener('mouseleave', startScrolling);
    };
  }, []);

  return (
    <div className="bg-black text-white py-10 ">
      <div className="max-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-8">
        {/* Info Section */}
        <div className="bg-gradient-to-br from-pink-600 to-blue-600 rounded-lg p-6 flex flex-col justify-between w-96 md:col-span-1 row-span-2 z-40 h-full xl:h-[60vh] mt-4">
          <div>
            <h2 className="text-2xl font-bold mb-2 game">Top 12 Bestsellers of This Week</h2>
            <p className="text-sm mb-4 font-mono">The Hottest Gaming Gear Capturing the Attention of the Discerning Gamer</p>
            <a href="#" className="underline text-sm takota">View All Collection →</a>
          </div>
          <div className="mt-6 flex items-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full">←</button>
            <button className="w-10 h-10 flex items-center justify-center bg-pink-600 text-white rounded-full">→</button>
          </div>
        </div>
        {/* Product Cards in Bento Grid */}
        <div ref={scrollRef} className="overflow-x-auto flex space-x-6 col-span-2 md:col-span-3 w-full py-4 h-full scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="bg-white/10 rounded-lg p-4 w-full h-full xl:w-80 xl:h-[60vh] flex-shrink-0 hover:scale-105 transition-transform space">
              <img src={product.img} alt={product.title} className="w-full h-60 object-contain" />
              <h3 className="text-lg font-semibold mt-2 font-mono ">{product.title}</h3>
              <p className="text-sm text-gray-400 mt-2 font-mono">{product.desc}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold font-mono">{product.price}</span>
                {/* <span className="text-yellow-400">{product.rating}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
