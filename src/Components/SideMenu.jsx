import React from 'react';
import Slider from './Slider';
import {
  Cpu,
  Monitor,
  Tv,
  Laptop,
  Headphones,
  MousePointer,
  Printer,
  Gamepad,
  HardDrive,
  Box
  // add other icons you need from lucide-react
} from 'lucide-react';
import CardRow from './CardRow';

function SideMenu() {
  const itemsWithIcons = [
    { name: 'PBA Systems', icon: Cpu },
    { name: 'APPLE', icon: Laptop },
    { name: 'ALL in One Systems', icon: Monitor },
    { name: 'Desktop Workstations', icon: Cpu },
    { name: 'TELEVISION (TV)', icon: Tv },
    { name: 'Console & Handheld Gaming', icon: Gamepad },
    { name: 'Graphics Tablets', icon: MousePointer },
    { name: 'Laptop', icon: Laptop },
    { name: 'Power Banks, Laptop Bags, Cooler & Monitor Arms', icon: Box },
    { name: 'Processor', icon: Cpu },
    { name: 'Motherboards', icon: Cpu },
    { name: 'Memory (RAM)', icon: Cpu },
    { name: 'Graphics Card', icon: Cpu },
    { name: 'POWER SUPPLY, UPS & SURGE PROTECTORS', icon: Box },
    { name: 'Cooling & Lighting', icon: Box },
    { name: 'STORAGE & NAS', icon: HardDrive },
    { name: 'CASINGS', icon: Box },
    { name: 'MONITORS', icon: Monitor },
    { name: 'Speakers, Headsets & Ear-Buds', icon: Headphones },
    { name: 'Keyboard,Mouse & Gamepad (Controller)', icon: Gamepad },
    { name: 'Printers', icon: Printer },
    { name: 'Gaming Chairs', icon: Box },
    { name: 'Cables & Connectors', icon: Box },
    { name: 'External Storage', icon: HardDrive },
    { name: 'Live Streaming & Recording', icon: Tv },
    { name: 'Expansion Cards & Networking', icon: Cpu },
    { name: 'OS & Software', icon: Box },
    { name: 'Projectors', icon: Tv }
  ];
  return (
    <>
      <button
        data-drawer-target='cta-button-sidebar'
        data-drawer-toggle='cta-button-sidebar'
        aria-controls='cta-button-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clip-rule='evenodd'
            fill-rule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        id='cta-button-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto hide-scrollbar bg-gray-50 dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            {itemsWithIcons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx}>
                  <a
                    href='#'
                    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                  >
                    <Icon className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    <span className='ms-3'>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            id='dropdown-cta'
            className='p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900'
            role='alert'
          >
            <div className='flex items-center mb-3'>
              <span className='bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-orange-200 dark:text-orange-900'>
                Beta
              </span>
              <button
                type='button'
                className='ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800'
                data-dismiss-target='#dropdown-cta'
                aria-label='Close'
              >
                <span className='sr-only'>Close</span>
                <svg
                  className='w-2.5 h-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
              </button>
            </div>
            <p className='mb-3 text-sm text-blue-800 dark:text-blue-400'>
              Preview the new Flowbite dashboard navigation! You can turn the
              new navigation off for a limited time in your profile.
            </p>
            <a
              className='text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300'
              href='#'
            >
              Turn new navigation off
            </a>
          </div>
        </div>
      </aside>

      <div className='sm:ml-64'>
        <div className='border-gray-200 rounded-lg dark:border-gray-700'>
          <div className='lg:h-[500px]'>
            <Slider />
          </div>
          <div className='mb-5 mt-4'>
            <CardRow />
          </div>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div className='flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  className='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div className='flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  className='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div className='flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  className='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div className='flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  className='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>
              <svg
                className='w-3.5 h-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </p>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  className='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div className='flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  className='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div className='flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  className='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
            <div className='flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>
                <svg
                  className='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
