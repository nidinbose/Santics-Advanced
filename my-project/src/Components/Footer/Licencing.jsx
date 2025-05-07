import React from 'react';
import { motion } from 'framer-motion';

const Licensing = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Licensing Information</h1>
        <p className="text-lg md:text-xl">
          Understand our licensing terms and policies for Santics Gaming Accessories.
        </p>
      </motion.div>

      {/* Licensing Overview */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p>
          Santics Gaming Accessories are developed and distributed under strict licensing
          policies to ensure compliance with legal, ethical, and professional standards.
          Our licenses cover product usage, intellectual property, and brand guidelines.
        </p>
      </motion.div>

      {/* Licensing Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Product Usage License</h2>
          <p>
            All Santics products are licensed for personal and commercial use within the
            limits defined in our terms. Unauthorized reproduction or distribution is
            strictly prohibited.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p>
            All designs, trademarks, and technologies associated with Santics are
            protected under intellectual property laws. Any infringement will be pursued
            legally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Third-Party Usage</h2>
          <p>
            Third parties are permitted to use Santics products under explicit written
            consent and adherence to our licensing policies.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Warranty and Compliance</h2>
          <p>
            Santics products come with a warranty period and are compliant with
            international gaming accessory standards. Details are provided at the time of
            purchase.
          </p>
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          For any licensing inquiries or further details, feel free to reach out to our
          support team at <span className="text-blue-500">support@santicsgaming.com</span>.
        </p>
      </motion.div>
    </div>
  );
};

export default Licensing;
