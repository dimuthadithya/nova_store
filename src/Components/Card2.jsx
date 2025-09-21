import React from 'react';

function Card2() {
  return (
    <>
      <div className='w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden'>
        {/* Image Container with Discount Badge */}
        <div className='relative w-full h-44 bg-gradient-to-br from-gray-50 to-gray-100'>
          {/* Discount Badge */}
          <div className='absolute top-2 left-2 z-10'>
            <span className='bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm'>
              Save 26%
            </span>
          </div>

          {/* Product Image - Full Width */}
          <img
            src='https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop'
            alt='Anker Soundcore R50i True Wireless Earbuds'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>

        {/* Product Details */}
        <div className='p-3 space-y-2'>
          {/* Product Title */}
          <h3 className='text-sm font-semibold text-gray-900 leading-tight line-clamp-2 hover:text-blue-600 transition-colors duration-200'>
            Anker Soundcore R50i True Wireless Earbuds
          </h3>

          {/* Rating */}
          <div className='flex items-center gap-1'>
            <div className='flex items-center'>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className='w-3 h-3 text-yellow-400 fill-current'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                </svg>
              ))}
            </div>
            <span className='text-xs font-medium text-gray-700'>4.82</span>
            <span className='ml-1 text-xs text-gray-500'>• 3 colors</span>
          </div>

          {/* Price Section */}
          <div className='bg-gray-50 p-2 rounded'>
            <div className='flex items-center gap-2'>
              <span className='text-xs text-gray-500 line-through'>
                Rs 5,699
              </span>
              <span className='text-lg font-bold text-red-600'>
                Rs 4,199
              </span>
            </div>

            {/* Payment Option - Simplified */}
            <div className='flex items-center flex-wrap gap-1 text-xs text-gray-600'>
              <span>or 3 x </span>
              <span className='font-medium text-blue-600'>Rs 1,441</span>
            </div>
          </div>

          {/* Stock Status and Button */}
          <div className='flex items-center justify-between pt-1'>
            <div className='flex items-center gap-1'>
              <div className='w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse'></div>
              <span className='text-xs text-green-600 font-medium'>
                In stock
              </span>
            </div>
            <button className='bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1 rounded transition-colors duration-200'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
