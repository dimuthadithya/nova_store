import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react'; // ✅ Correct import

function Navigation() {
  // Function to handle smooth scrolling
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Adding an offset to account for the fixed navigation
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
      <motion.div
        className='lg:ms-64'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Top navigation */}
        <motion.nav
          className='bg-white border-gray-200 dark:bg-gray-900'
          initial={{ boxShadow: '0 0 0 rgba(0, 0, 0, 0)' }}
          animate={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl lg:py-8 px-4'>
            {/* Logo / Brand */}
            <motion.a
              href='#'
              className='flex items-center space-x-3 rtl:space-x-reverse group relative'
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {/* Gradient bar accent */}
              <motion.div
                className='absolute -left-3 -top-1 w-2.5 h-14 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-md shadow-lg'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 56, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              />

              <div className='flex flex-col ml-2'>
                <motion.div
                  className='flex items-baseline'
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {/* Animated NOVA */}
                  <div className='flex'>
                    {['N', 'O', 'V', 'A'].map((letter, index) => (
                      <motion.span
                        key={index}
                        className='text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-violet-600 tracking-tight'
                        style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.1)' }}
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>

                  {/* STORE */}
                  <motion.span
                    className='ml-3 text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-wide'
                    style={{ textShadow: '0px 1px 2px rgba(0,0,0,0.1)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    STORE
                  </motion.span>
                </motion.div>

                {/* Location */}
                <motion.div
                  className='text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1 flex items-center gap-1 -mt-1'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <span className='h-px w-5 bg-gradient-to-r from-blue-500 to-transparent'></span>
                  Kegalle, Sri Lanka
                </motion.div>
              </div>
            </motion.a>

            {/* Phone / Help */}
            <motion.div
              className='flex items-center space-x-6 rtl:space-x-reverse'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div className='relative group hidden lg:block'>
                {/* Help bubble */}
                <motion.div
                  className='absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-lg'
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  Need Help? Call Us!
                  <div className='absolute h-2 w-2 bg-blue-600 transform rotate-45 left-1/2 -bottom-1 -translate-x-1/2'></div>
                </motion.div>

                {/* Phone link */}
                <motion.a
                  href='tel:+94762085231'
                  className='flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-full transition-colors duration-300'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={18} className='text-blue-600' />
                  <span className='font-medium'>+94 76 208 5231</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.nav>

        {/* Bottom nav */}
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
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Featured', id: 'featured-collections' },
                  { name: 'New Arrivals', id: 'new-arrivals' },
                  { name: 'Categories', id: 'popular-categories' },
                  { name: 'Brands', id: 'our-brands' }
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <motion.a
                      href={`#${item.id}`}
                      className='text-gray-900 dark:text-white hover:underline'
                      whileHover={{ scale: 1.1, color: '#3B82F6' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => scrollToSection(e, item.id)}
                    >
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}

export default Navigation;
