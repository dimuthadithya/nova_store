import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Card2 from './Card2';
import CardRow2 from './CardRow2';

function Section({ heading, description }) {
  // Create descriptions based on section headings if not provided
  const getDescription = () => {
    if (description) return description;

    const descriptions = {
      'Featured Collections':
        'Curated collections of our best products handpicked for you',
      'Latest Products':
        'Fresh arrivals and the newest tech innovations on the market',
      'New Arrivals':
        'Just landed! Be the first to experience our newest products',
      'Back in Stock': 'Popular items now restocked and ready to ship',
      'Best Sellers':
        'Our most popular products loved by thousands of customers'
    };

    return (
      descriptions[heading] || 'Discover our selection of premium products'
    );
  };

  return (
    <>
      <motion.div
        className='bg-gradient-to-r from-gray-900 to-gray-800 py-12'
        initial={{
          background: 'linear-gradient(to right, #111827, #1F2937)'
        }}
        whileInView={{
          background: 'linear-gradient(to right, #111827, #1F2937)'
        }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div
            className='mb-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionHeading heading={heading} description={getDescription()} />
          </motion.div>

          {/* View All link */}
          <motion.div
            className='flex justify-between items-center mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className='w-full md:w-1/3'></div>
            <motion.div
              className='flex items-center group cursor-pointer'
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className='text-gray-300 group-hover:text-white text-sm transition-colors duration-300'
                whileHover={{ color: '#FFFFFF' }}
              >
                View All
              </motion.span>
              <motion.svg
                className='w-4 h-4 ml-1 text-gray-400 group-hover:text-white transition-colors duration-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                ></path>
              </motion.svg>
            </motion.div>
          </motion.div>

          {/* Cards Container - No additional wrapping div needed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CardRow2 />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Section;
