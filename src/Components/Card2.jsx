import React from 'react';

function Card2() {
  return (
    <>
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden'>
        {/* Image Container with Discount Badge */}
        <div className='relative w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100'>
          {/* Discount Badge */}
          <div className='absolute top-3 left-3 z-10'>
            <span className='bg-red-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md'>
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
        <div className='p-5 space-y-4'>
          {/* Product Title */}
          <h3 className='text-lg font-semibold text-gray-900 leading-tight line-clamp-2 hover:text-blue-600 transition-colors duration-200'>
            Anker Soundcore R50i True Wireless Earbuds
          </h3>

          {/* Rating and Colors Row */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className='w-4 h-4 text-yellow-400 fill-current'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                  </svg>
                ))}
              </div>
              <span className='text-sm font-medium text-gray-700'>4.82</span>
            </div>
            <span className='text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>
              3 colors
            </span>
          </div>

          {/* Price Section */}
          <div className='bg-gray-50 p-3 rounded-lg'>
            <div className='flex items-center gap-3 mb-2'>
              <span className='text-sm text-gray-500 line-through'>
                Rs 5,699.00
              </span>
              <span className='text-2xl font-bold text-red-600'>
                Rs 4,199.00
              </span>
            </div>

            {/* Payment Option */}
            <div className='flex items-center flex-wrap gap-1 text-sm text-gray-600'>
              <span>or pay in 3 x</span>
              <span className='font-semibold text-blue-600'>Rs 1,441.66</span>
              <span>with</span>
              <span className='font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded'>
                KOKO
              </span>
              <span className='w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold'>
                ?
              </span>
              <span className='text-gray-400 text-xs'>*T&C Apply</span>
            </div>
          </div>

          {/* Stock Status */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
              <span className='text-sm text-green-600 font-medium'>
                In stock
              </span>
            </div>
            <button className='bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
