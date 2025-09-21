import React from 'react';
import Card2 from './Card2';

function CardRow2() {
  return (
    <>
      <div className='flex flex-wrap gap-4 p-4 justify-center'>
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </>
  );
}

export default CardRow2;
