import React from 'react';
import Card2 from './Card2';

function CardRow2() {
  return (
    <>
      <div className='px-4 py-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          {/* You can add more cards here or generate them dynamically */}
        </div>
      </div>
    </>
  );
}

export default CardRow2;
