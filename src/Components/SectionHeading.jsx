import React from 'react';
import { motion } from 'framer-motion';

function SectionHeading({ heading, description }) {
  return (
    <motion.div
      className='relative pb-4 mb-6'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background accent element */}
      <motion.div
        className='absolute -left-2 top-1/2 w-1.5 h-12 bg-blue-500 rounded-full transform -translate-y-1/2 opacity-80'
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: '3rem', opacity: 0.8 }}
        transition={{
          duration: 0.7,
          ease: 'easeOut'
        }}
        viewport={{ once: true }}
      ></motion.div>

      <motion.div className='pl-6'>
        {/* Main heading with gradient text */}
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {heading}
        </motion.h2>

        {/* Optional description */}
        {description && (
          <motion.p
            className='text-gray-400 text-sm md:text-base max-w-2xl'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        )}

        {/* Decorative element */}
        <motion.div
          className='flex items-center mt-3'
          initial={{ width: 0 }}
          whileInView={{ width: 'auto' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='w-10 h-0.5 bg-blue-500 rounded'
            initial={{ width: 0 }}
            whileInView={{ width: '2.5rem' }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.div
            className='w-20 h-0.5 bg-gray-600 ml-1 rounded'
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SectionHeading;
