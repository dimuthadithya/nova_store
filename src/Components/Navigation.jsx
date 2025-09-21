import React from 'react';
import { motion } from 'framer-motion';

function Navigation() {
  return (
    <>
      <motion.div
        className='lg:ms-64'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.nav
          className='bg-white border-gray-200 dark:bg-gray-900'
          initial={{ boxShadow: '0 0 0 rgba(0, 0, 0, 0)' }}
          animate={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
            <motion.a
              href=''
              className='flex items-center space-x-3 rtl:space-x-reverse'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img src='' className='h-8' alt='Nova Store Logo' />
              <motion.span
                className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Nova Store
              </motion.span>
            </motion.a>
            <motion.div
              className='flex items-center space-x-6 rtl:space-x-reverse'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.a
                href='tel:5541251234'
                className='text-sm text-gray-500 dark:text-white hover:underline'
                whileHover={{ scale: 1.1, color: '#3B82F6' }}
              >
                (555) 412-1234
              </motion.a>
              <motion.a
                href='#'
                className='text-sm text-blue-600 dark:text-blue-500 hover:underline'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.a>
            </motion.div>
          </div>
        </motion.nav>
        <motion.nav
          className='bg-gray-50 dark:bg-gray-700'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className='max-w-screen-xl px-4 py-3 mx-auto'>
            <div className='flex items-center'>
              <motion.ul
                className='flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href='#'
                    className='text-gray-900 dark:text-white hover:underline'
                    aria-current='page'
                    whileHover={{ scale: 1.1, color: '#3B82F6' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Home
                  </motion.a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <motion.a
                    href='#'
                    className='text-gray-900 dark:text-white hover:underline'
                    whileHover={{ scale: 1.1, color: '#3B82F6' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Company
                  </motion.a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <motion.a
                    href='#'
                    className='text-gray-900 dark:text-white hover:underline'
                    whileHover={{ scale: 1.1, color: '#3B82F6' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Team
                  </motion.a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <motion.a
                    href='#'
                    className='text-gray-900 dark:text-white hover:underline'
                    whileHover={{ scale: 1.1, color: '#3B82F6' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Features
                  </motion.a>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}

export default Navigation;
