import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, img: 'https://via.placeholder.com/150', name: 'Gamer 1', feedback: 'Amazing performance and responsiveness.' },
  { id: 2, img: 'https://via.placeholder.com/300', name: 'Gamer 2', feedback: 'The best gaming experience ever!' },
  { id: 3, img: 'https://via.placeholder.com/150', name: 'Gamer 3', feedback: 'Precision and speed like no other.' },
  { id: 4, img: 'https://via.placeholder.com/150', name: 'Gamer 4', feedback: 'Totally transformed my gaming skills.' },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            className="relative w-40 h-60 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 text-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{t.feedback}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
