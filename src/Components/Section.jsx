import React from 'react';
import SectionHeading from './SectionHeading';
import Card2 from './Card2';
import CardRow2 from './CardRow2';

function Section({ heading }) {
  return (
    <>
      <div className='bg-gray-900'>
        <SectionHeading heading={heading} />
        <div className='flex flex-wrap justify-center gap-6 px-4 py-8 md:gap-8 lg:gap-12'>
          <CardRow2 />
        </div>
      </div>
    </>
  );
}

export default Section;
