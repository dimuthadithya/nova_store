import React from 'react';
import Slider from './Slider';
import Section from './Section';
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
import CardRow2 from './CardRow2';

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
            clipRule='evenodd'
            fillRule='evenodd'
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
                    strokeLinecap='round'
                    stroke-linejoin='round'
                    strokeWidth='2'
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
          <div id='home' className='lg:h-[500px]'>
            <Slider />
          </div>
          <div id='featured-collections'>
            <Section heading='Featured Collections' />
          </div>
          <div id='latest-products'>
            <Section heading='Latest Products' />
          </div>
          <div id='new-arrivals'>
            <Section heading='New Arrivals' />
          </div>
          <div id='back-in-stock'>
            <Section heading='Back in Stock' />
          </div>

          {/* Popular Categories Section */}
          <div
            id='popular-categories'
            className='bg-gradient-to-r from-gray-900 to-gray-800 py-12'
          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='mb-8'>
                <div className='relative pb-4 mb-6'>
                  {/* Background accent element */}
                  <div className='absolute -left-2 top-1/2 w-1.5 h-12 bg-blue-500 rounded-full transform -translate-y-1/2 opacity-80'></div>

                  <div className='pl-6'>
                    {/* Main heading with gradient text */}
                    <h2 className='text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
                      Popular Categories
                    </h2>

                    {/* Description */}
                    <p className='text-gray-400 text-sm md:text-base max-w-2xl'>
                      Explore our most popular product categories
                    </p>

                    {/* Decorative element */}
                    <div className='flex items-center mt-3'>
                      <div className='w-10 h-0.5 bg-blue-500 rounded'></div>
                      <div className='w-20 h-0.5 bg-gray-600 ml-1 rounded'></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* View All link */}
              <div className='flex justify-between items-center mb-6'>
                <div className='w-full md:w-1/3'></div>
                <div className='flex items-center group cursor-pointer'>
                  <span className='text-gray-300 group-hover:text-white text-sm transition-colors duration-300'>
                    View All Categories
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

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                {/* Apple Products - Large Card */}
                <div className='md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-all duration-500 cursor-pointer'>
                  <div className='absolute inset-0 bg-gradient-to-br from-transparent to-black/50 z-10'></div>
                  <div className='relative h-80 md:h-full min-h-[400px] flex flex-col justify-between p-8'>
                    <div className='absolute inset-0 w-full h-full overflow-hidden'>
                      <img
                        src='https://www.simplytek.lk/cdn/shop/files/Apple_wallpaper.webp?v=1697199661&width=1280'
                        alt='iPhone'
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </div>
                    <div className='relative z-10'></div>
                    <div className='relative z-10 space-y-2 mt-auto bg-white/20 p-4 rounded-lg backdrop-blur-sm'>
                      <h3 className='text-3xl font-bold text-white drop-shadow-md'>
                        Apple Products
                      </h3>
                      <div className='flex items-center text-white group-hover:text-white/80 transition-colors'>
                        <span className='text-sm font-medium'>Explore</span>
                        <svg
                          className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Speakers */}
                <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-blue-900 hover:from-gray-800 hover:to-blue-800 transition-all duration-500 cursor-pointer'>
                  <div className='absolute inset-0 bg-gradient-to-br from-transparent to-black/50 z-10'></div>
                  <div className='relative h-48 flex flex-col justify-between p-6 text-white'>
                    <div className='absolute inset-0 w-full h-full overflow-hidden'>
                      <img
                        src='//www.simplytek.lk/cdn/shop/files/JBL_Speakers.jpg?v=1695033621&width=800'
                        alt='Speaker'
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </div>
                    <div className='relative z-10'></div>
                    <div className='relative z-10 space-y-1 mt-auto bg-black/30 p-3 rounded-lg backdrop-blur-sm'>
                      <h3 className='text-xl font-bold text-white drop-shadow-md'>
                        Speakers
                      </h3>
                      <div className='flex items-center text-white group-hover:text-blue-200 transition-colors'>
                        <span className='text-sm font-medium'>Explore</span>
                        <svg
                          className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cameras */}
                <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-500 cursor-pointer'>
                  <div className='absolute inset-0 bg-gradient-to-br from-transparent to-black/50 z-10'></div>
                  <div className='relative h-48 flex flex-col justify-between p-6 text-white'>
                    <div className='absolute inset-0 w-full h-full overflow-hidden'>
                      <img
                        src='https://www.simplytek.lk/cdn/shop/files/dash-cam-4k-a800-70mai-dash-cameras-sri-lanka-simplytek-4_1cdd7061-2949-41ad-8311-ddf3c649a3b3.jpg?v=1694425573&width=800'
                        alt='Camera'
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </div>
                    <div className='relative z-10'></div>
                    <div className='relative z-10 space-y-1 mt-auto bg-black/30 p-3 rounded-lg backdrop-blur-sm'>
                      <h3 className='text-xl font-bold text-white drop-shadow-md'>
                        Cameras
                      </h3>
                      <div className='flex items-center text-white group-hover:text-gray-300 transition-colors'>
                        <span className='text-sm font-medium'>Explore</span>
                        <svg
                          className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accessories */}
                <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-900 to-gray-900 hover:from-orange-800 hover:to-gray-800 transition-all duration-500 cursor-pointer'>
                  <div className='absolute inset-0 bg-gradient-to-br from-transparent to-black/50 z-10'></div>
                  <div className='relative h-48 flex flex-col justify-between p-6 text-white'>
                    <div className='absolute inset-0 w-full h-full overflow-hidden'>
                      <img
                        src='https://www.simplytek.lk/cdn/shop/files/Youpin-Lydsto-12V-Portable-Car-Tire-Inflator-Pump-5-5Bar-Air-Compressor-Tyre-Pressure-Detection-Built-Simplytek-LK-1.jpg?v=1696851982&width=800'
                        alt='Accessories'
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </div>
                    <div className='relative z-10'></div>
                    <div className='relative z-10 space-y-1 mt-auto bg-black/30 p-3 rounded-lg backdrop-blur-sm'>
                      <h3 className='text-xl font-bold text-white drop-shadow-md'>
                        Accessories
                      </h3>
                      <div className='flex items-center text-white group-hover:text-orange-200 transition-colors'>
                        <span className='text-sm font-medium'>Explore</span>
                        <svg
                          className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id='best-sellers'>
            <Section heading='Best Sellers' />
          </div>

          {/* Our Brands Section */}
          <div
            id='our-brands'
            className='bg-gradient-to-r from-gray-900 to-gray-800 py-16'
          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='mb-12'>
                <div className='relative pb-4 mb-6'>
                  {/* Background accent element */}
                  <div className='absolute -left-2 top-1/2 w-1.5 h-12 bg-blue-500 rounded-full transform -translate-y-1/2 opacity-80'></div>

                  <div className='pl-6'>
                    {/* Main heading with gradient text */}
                    <h2 className='text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
                      Our Brands
                    </h2>

                    {/* Description */}
                    <p className='text-gray-400 text-sm md:text-base max-w-2xl'>
                      Discover the latest products from a wide range of
                      electronic brands
                    </p>

                    {/* Decorative element */}
                    <div className='flex items-center mt-3'>
                      <div className='w-10 h-0.5 bg-blue-500 rounded'></div>
                      <div className='w-20 h-0.5 bg-gray-600 ml-1 rounded'></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* View All link */}
              <div className='flex justify-between items-center mb-8'>
                <div className='w-full md:w-1/3'></div>
                <div className='flex items-center group cursor-pointer'>
                  <span className='text-gray-300 group-hover:text-white text-sm transition-colors duration-300'>
                    View All Brands
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

              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
                {/* Apple */}
                <div className='group bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-600'>
                  <div className='flex items-center justify-center h-20'>
                    <svg
                      className='w-12 h-12 text-gray-800 group-hover:text-gray-900 transition-colors'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
                    </svg>
                  </div>
                </div>

                {/* JBL */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='text-center'>
                      <div className='bg-red-600 text-white px-4 py-2 rounded font-bold text-lg mb-1'>
                        JBL
                      </div>
                      <div className='text-xs text-gray-600 font-medium'>
                        HARMAN
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tronsmart */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='text-center'>
                      <div className='flex items-center gap-1'>
                        <div className='w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center'>
                          <div className='w-3 h-3 bg-white rounded-sm'></div>
                        </div>
                        <span className='text-xl font-bold text-blue-600'>
                          Tronsmart
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Xiaomi */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='text-center'>
                      <div className='bg-orange-500 text-white px-3 py-2 rounded-lg font-bold text-lg mb-1'>
                        Mi
                      </div>
                      <div className='text-sm text-gray-700 font-medium'>
                        Xiaomi
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marshall */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='text-2xl font-bold text-gray-900 font-serif italic'>
                      Marshall
                    </div>
                  </div>
                </div>

                {/* Sony */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='text-2xl font-bold text-gray-900 tracking-wider'>
                      SONY
                    </div>
                  </div>
                </div>

                {/* Samsung */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='text-xl font-bold text-gray-900 tracking-widest'>
                      SAMSUNG
                    </div>
                  </div>
                </div>

                {/* Fitbit */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='flex items-center gap-2'>
                      <div className='w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center'>
                        <div className='w-2 h-2 bg-white rounded-full'></div>
                      </div>
                      <span className='text-lg font-medium text-gray-900'>
                        fitbit
                      </span>
                    </div>
                  </div>
                </div>

                {/* Anker */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='text-xl font-bold text-gray-900 tracking-wider'>
                      ANKER
                    </div>
                  </div>
                </div>

                {/* Bose */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='text-xl font-bold text-gray-900 italic'>
                      BOSE
                    </div>
                  </div>
                </div>

                {/* Google */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='text-2xl font-bold'>
                      <span className='text-blue-500'>G</span>
                      <span className='text-red-500'>o</span>
                      <span className='text-yellow-500'>o</span>
                      <span className='text-blue-500'>g</span>
                      <span className='text-green-500'>l</span>
                      <span className='text-red-500'>e</span>
                    </div>
                  </div>
                </div>

                {/* Haylou */}
                <div className='group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200'>
                  <div className='flex items-center justify-center h-20'>
                    <div className='text-center'>
                      <div className='w-8 h-8 mx-auto mb-1 bg-blue-500 rounded-full flex items-center justify-center'>
                        <div className='w-3 h-3 border-2 border-white rounded-full'></div>
                      </div>
                      <div className='text-sm font-bold text-blue-500 tracking-wider'>
                        HAYLOU
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
