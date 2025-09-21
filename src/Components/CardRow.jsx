import React from 'react';
import Card from './Card';
function CardRow() {
  return (
    <>
      <div className='flex gap-4 p-4 flex-wrap justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default CardRow;
