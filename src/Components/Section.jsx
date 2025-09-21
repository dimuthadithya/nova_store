import React from 'react';
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
      <div className='bg-gradient-to-r from-gray-900 to-gray-800 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <div className='mb-8'>
            <SectionHeading heading={heading} description={getDescription()} />
          </div>

          {/* View All link */}
          <div className='flex justify-between items-center mb-6'>
            <div className='w-full md:w-1/3'></div>
            <div className='flex items-center group cursor-pointer'>
              <span className='text-gray-300 group-hover:text-white text-sm transition-colors duration-300'>
                View All
              </span>
              <svg
                className='w-4 h-4 ml-1 text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                ></path>
              </svg>
            </div>
          </div>

          {/* Cards Container - No additional wrapping div needed */}
          <CardRow2 />
        </div>
      </div>
    </>
  );
}

export default Section;
