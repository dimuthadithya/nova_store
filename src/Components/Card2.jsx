import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Truck, 
  Clock, 
  Shield, 
  ChevronRight 
} from 'lucide-react';

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
        <motion.div className='relative w-full h-44 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden group'>
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
              className='bg-red-500 flex items-center text-white text-xs font-semibold px-2.5 py-1.5 rounded-full shadow-md'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Save 26%
            </motion.span>
          </motion.div>
          
          {/* Wishlist Button */}
          <motion.button
            className='absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 15,
              delay: 0.3
            }}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: 'rgba(255, 255, 255, 0.95)' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={16} className="text-gray-600 hover:text-red-500 transition-colors duration-200" />
          </motion.button>

          {/* Product Image - Full Width */}
          <motion.img
            src='https://www.simplytek.lk/cdn/shop/files/6_6cd4df53-d36a-4030-9092-247ee6ed035f.jpg?v=1694424266&width=596'
            alt='Anker Soundcore R50i True Wireless Earbuds'
            className='w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Product Details */}
        <motion.div
          className='p-4 space-y-3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Product Title */}
          <motion.h3
            className='cursor-pointer text-sm font-semibold text-gray-900 leading-tight line-clamp-2 hover:text-blue-600 transition-colors duration-200'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ color: '#2563EB' }}
          >
            Anker Soundcore R50i True Wireless Earbuds
          </motion.h3>
          
          {/* Rating Stars */}
          <motion.div 
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={`${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">(42 reviews)</span>
          </motion.div>

          {/* Price Section */}
          <motion.div
            className='bg-gray-50 p-3 rounded-lg border border-gray-100'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ 
              backgroundColor: '#F5F7FF',
              borderColor: '#E5EDFF' 
            }}
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

            {/* Payment Option - Enhanced */}
            <motion.div
              className='flex items-center flex-wrap gap-1 mt-1.5 text-xs text-gray-600'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <Clock size={12} className="text-blue-600" />
              <span>or 3 monthly payments of </span>
              <motion.span
                className='font-medium text-blue-600'
                whileHover={{ scale: 1.05 }}
              >
                Rs 1,441
              </motion.span>
            </motion.div>
            
            {/* Shipping Info */}
            <motion.div
              className='flex items-center gap-1.5 mt-2 text-xs text-gray-600'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <Truck size={12} className="text-green-600" />
              <span>Free shipping</span>
            </motion.div>
          </motion.div>

          {/* Stock Status and Product Details */}
          <motion.div
            className='flex flex-col gap-2 pt-1'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.div className='flex items-center gap-1.5'>
              <motion.div
                className='w-2 h-2 bg-green-500 rounded-full animate-pulse'
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
                In stock (23 units)
              </motion.span>
            </motion.div>
            
            {/* Warranty Info */}
            <motion.div 
              className="flex items-center text-xs text-gray-600 gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <Shield size={12} className="text-blue-600" />
              <span>1 Year Warranty</span>
            </motion.div>
            
            {/* Add to Cart Button - Enhanced */}
            <motion.button
              className='bg-blue-600 mt-2 w-full cursor-pointer text-white text-sm font-medium px-3 py-2 rounded-lg flex items-center justify-center gap-2'
              whileHover={{
                backgroundColor: '#1E40AF',
                scale: 1.02
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <ShoppingCart size={16} />
              Add to Cart
            </motion.button>
            
            {/* View Details Link */}
            <motion.a 
              href="#"
              className="flex items-center justify-center gap-1 text-xs text-blue-600 hover:text-blue-800 mt-1 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              whileHover={{ x: 3 }}
            >
              View full details
              <ChevronRight size={14} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Card2;
