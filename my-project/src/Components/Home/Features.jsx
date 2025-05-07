import { animate, spring } from 'framer-motion';
import React from 'react';
import { FaShippingFast, FaUndo, FaPiggyBank, FaHeadset } from 'react-icons/fa';

const features = [
  { icon: <FaShippingFast size={40} />, title: 'Free Shipping', description: 'Free Shipping to Make Your Shopping Experience Seamless.' },
  { icon: <FaUndo size={40} style={animate-spring}/>, title: 'Return Policy', description: 'Flexible Returns to Ensure a Positive Shopping Experience.' },
  { icon: <FaPiggyBank size={40} />, title: 'Save Money', description: 'Shop Smarter and Save Big with Our Money-Saving Solutions.' },
  { icon: <FaHeadset size={40} />, title: 'Support 24/7', description: 'Unparalleled Support, Tailored to Your Needs 24 Hours a Day.' }
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-black h-1/2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-4 bg-black shadow-md rounded-lg p-4 max-w-sm mx-auto">
          <div className="flex justify-center items-center w-12 h-12 lg:w-8 lg:h-8 p-2 md:w-28 md:h-20 xl:h-12 xl:w-12 rounded-full border-2 border-purple-400 text-white/50 animate-">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-md font-light bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text font-mono">{feature.title}</h3>
            <p className="text-xs text-gray-300 font-mono ">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;

