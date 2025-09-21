import React from 'react';

function Card2() {
  return (
    <>
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
        {/* Image Container with Discount Badge */}
        <div className='relative p-4 bg-gray-50'>
          {/* Discount Badge */}
          <div className='absolute top-3 left-3 z-10'>
            <span className='bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full'>
              Save 26%
            </span>
          </div>

          {/* Product Image */}
          <div className='flex justify-center'>
            <img
              src='https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop'
              alt='Anker Soundcore R50i True Wireless Earbuds'
              className='w-64 h-48 object-contain'
            />
          </div>
        </div>

        {/* Product Details */}
        <div className='p-5'>
          {/* Product Title */}
          <h3 className='text-lg font-medium text-gray-900 mb-3 line-clamp-2'>
            Anker Soundcore R50i True Wireless Earbuds
          </h3>

          {/* Price Section */}
          <div className='mb-3'>
            <div className='flex items-center gap-2 mb-1'>
              <span className='text-sm text-gray-500 line-through'>
                Rs 5,699.00
              </span>
              <span className='text-xl font-semibold text-red-600'>
                Rs 4,199.00
              </span>
            </div>

            {/* Payment Option */}
            <div className='flex items-center gap-1 text-sm text-gray-600'>
              <span>or pay in 3 x</span>
              <span className='font-semibold'>Rs 1,441.66</span>
              <span>with</span>
              <span className='font-bold text-blue-600'>KOKO</span>
              <span className='w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold'>
                ?
              </span>
              <span className='text-gray-500'>*T&C Apply</span>
            </div>
          </div>

          {/* Colors Available */}
          <div className='mb-3'>
            <span className='text-sm text-gray-600'>Available in 3 colors</span>
          </div>

          {/* Rating */}
          <div className='flex items-center gap-2 mb-3'>
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

          {/* Stock Status */}
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            <span className='text-sm text-green-600 font-medium'>In stock</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
