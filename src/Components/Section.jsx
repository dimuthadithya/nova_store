import React from 'react';
import SectionHeading from './SectionHeading';
import Card2 from './Card2';

function Section({ heading }) {
  return (
    <>
      <div className='bg-gray-900'>
        <SectionHeading heading={heading} />
        <Card2 />
      </div>
    </>
  );
}

export default Section;
