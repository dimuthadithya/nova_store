import React from 'react';

function SectionHeading({ heading, description }) {
  return (
    <div className='relative pb-4 mb-6'>
      {/* Background accent element */}
      <div className='absolute -left-2 top-1/2 w-1.5 h-12 bg-blue-500 rounded-full transform -translate-y-1/2 opacity-80'></div>

      <div className='pl-6'>
        {/* Main heading with gradient text */}
        <h2 className='text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
          {heading}
        </h2>

        {/* Optional description */}
        {description && (
          <p className='text-gray-400 text-sm md:text-base max-w-2xl'>
            {description}
          </p>
        )}

        {/* Decorative element */}
        <div className='flex items-center mt-3'>
          <div className='w-10 h-0.5 bg-blue-500 rounded'></div>
          <div className='w-20 h-0.5 bg-gray-600 ml-1 rounded'></div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
