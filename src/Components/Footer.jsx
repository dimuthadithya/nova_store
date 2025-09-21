import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaDiscord
} from 'react-icons/fa';

function Footer() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  return (
    <motion.footer
      className='bg-white dark:bg-gray-900 lg:ms-64'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className='mx-auto w-full max-w-screen-xl'
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Top Footer Links */}
        <motion.div
          className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'
          variants={containerVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {/* Company */}
          <motion.div variants={itemVariant}>
            <motion.h2
              className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'
              whileHover={{ scale: 1.05, x: 5 }}
            >
              Company
            </motion.h2>
            <motion.ul className='text-gray-500 dark:text-gray-400 font-medium'>
              {['About', 'Careers', 'Brand Center', 'Blog'].map((link) => (
                <motion.li
                  key={link}
                  className='mb-4'
                  variants={itemVariant}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <motion.a
                    href='#'
                    className='hover:underline'
                    whileHover={{ color: '#3B82F6' }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Help Center */}
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Help Center
            </h2>
            <ul className='text-gray-500 dark:text-gray-400 font-medium'>
              {['Discord Server', 'Twitter', 'Facebook', 'Contact Us'].map(
                (link) => (
                  <li key={link} className='mb-4'>
                    <a href='#' className='hover:underline'>
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Legal
            </h2>
            <ul className='text-gray-500 dark:text-gray-400 font-medium'>
              {['Privacy Policy', 'Licensing', 'Terms & Conditions'].map(
                (link) => (
                  <li key={link} className='mb-4'>
                    <a href='#' className='hover:underline'>
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Download
            </h2>
            <ul className='text-gray-500 dark:text-gray-400 font-medium'>
              {['iOS', 'Android', 'Windows', 'MacOS'].map((link) => (
                <li key={link} className='mb-4'>
                  <a href='#' className='hover:underline'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Social & Copyright */}
        <motion.div
          className='px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.span
            className='text-sm text-gray-500 dark:text-gray-300 sm:text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            © 2023{' '}
            <motion.a
              href='https://flowbite.com/'
              whileHover={{ color: '#3B82F6' }}
            >
              Flowbite™
            </motion.a>
            . All Rights Reserved.
          </motion.span>

          <motion.div
            className='flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {[FaFacebook, FaDiscord, FaTwitter, FaGithub, FaDribbble].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href='#'
                  className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div className='w-5 h-5'>
                    <Icon size={20} />
                  </motion.div>
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
