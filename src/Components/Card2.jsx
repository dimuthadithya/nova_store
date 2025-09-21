import React from 'react';
import { motion } from 'framer-motion';

function Card2() {
  return (
    <>
      <motion.div
        className='w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.03,
          boxShadow:
            '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        {/* Image Container with Discount Badge */}
        <motion.div className='relative w-full h-44 bg-gradient-to-br from-gray-50 to-gray-100'>
          {/* Discount Badge */}
          <motion.div
            className='absolute top-2 left-2 z-10'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 15,
              delay: 0.2
            }}
          >
            <motion.span
              className='bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Save 26%
            </motion.span>
          </motion.div>

          {/* Product Image - Full Width */}
          <motion.img
            src='https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop'
            alt='Anker Soundcore R50i True Wireless Earbuds'
            className='w-full h-full object-cover'
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'tween', duration: 0.3 }}
          />
        </motion.div>

        {/* Product Details */}
        <motion.div
          className='p-3 space-y-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Product Title */}
          <motion.h3
            className='text-sm font-semibold text-gray-900 leading-tight line-clamp-2 hover:text-blue-600'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ color: '#2563EB' }}
          >
            Anker Soundcore R50i True Wireless Earbuds
          </motion.h3>

          {/* Rating */}
          <motion.div
            className='flex items-center gap-1'
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className='flex items-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                staggerChildren: 0.1,
                delayChildren: 0.6
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.svg
                  key={star}
                  className='w-3 h-3 text-yellow-400 fill-current'
                  viewBox='0 0 20 20'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 15,
                    delay: star * 0.1
                  }}
                >
                  <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                </motion.svg>
              ))}
            </motion.div>
            <motion.span
              className='text-xs font-medium text-gray-700'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              4.82
            </motion.span>
            <motion.span
              className='ml-1 text-xs text-gray-500'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              • 3 colors
            </motion.span>
          </motion.div>

          {/* Price Section */}
          <motion.div
            className='bg-gray-50 p-2 rounded'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ backgroundColor: '#F5F7FF' }}
          >
            <motion.div className='flex items-center gap-2'>
              <motion.span
                className='text-xs text-gray-500 line-through'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.8 }}
              >
                Rs 5,699
              </motion.span>
              <motion.span
                className='text-lg font-bold text-red-600'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                Rs 4,199
              </motion.span>
            </motion.div>

            {/* Payment Option - Simplified */}
            <motion.div
              className='flex items-center flex-wrap gap-1 text-xs text-gray-600'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <span>or 3 x </span>
              <motion.span
                className='font-medium text-blue-600'
                whileHover={{ scale: 1.05 }}
              >
                Rs 1,441
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Stock Status and Button */}
          <motion.div
            className='flex items-center justify-between pt-1'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.div className='flex items-center gap-1'>
              <motion.div
                className='w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 10,
                  delay: 1.2
                }}
              ></motion.div>
              <motion.span
                className='text-xs text-green-600 font-medium'
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
              >
                In stock
              </motion.span>
            </motion.div>
            <motion.button
              className='bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded'
              whileHover={{
                backgroundColor: '#1E40AF',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Card2;
