import React from "react";
import { motion } from "framer-motion";

const PO = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.div
          className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Order Placed Successfully!
          </h1>
        </motion.div>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Thank you for your purchase! Your order is now being processed. You’ll receive a confirmation email shortly.
        </p>
        <motion.button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Order Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PO;
