import React from 'react';
import { motion } from 'framer-motion';

const AboutCompany = () => {
  return (
    <div className="bg-black text-white py-10 px-6 md:px-20">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono text-red-600">About Santics</h1>
        <p className="text-sm md:text-md font-mono">
          Your ultimate destination for top-tier gaming accessories. We bring quality,
          performance, and style to gamers worldwide.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white/10 rounded-lg shadow-lg font-mono"
        >
          <h2 className="text-2xl font-semibold mb-4 text-red-600">High-Quality Products</h2>
          <p className='text-sm'>
            Our gaming accessories are designed to meet the demands of professional
            gamers and enthusiasts alike, ensuring reliability and peak performance.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white/10 font-mono rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Innovative Designs</h2>
          <p className='text-sm'>
            Combining aesthetics with functionality, our designs provide a seamless gaming
            experience and complement your gaming setup.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white/10 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-red-600 font-mono">Exceptional Support</h2>
          <p className='text-sm font-mono'>
            Our customer support team is here to assist you at every step, ensuring you
            have the best experience possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white/10 font-mono rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Sustainability</h2>
          <p className='text-sm '>
            We are committed to sustainable practices and ensuring our products are
            eco-friendly, paving the way for a better tomorrow.
          </p>
        </motion.div>
      </div>

           <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center font-mono"
      >
        <h2 className="text-3xl font-semibold mb-4 text-red-600">Our Vision</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          At Santics, our vision is to revolutionize the gaming experience by providing
          unparalleled accessories that blend technology, design, and performance.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutCompany;
