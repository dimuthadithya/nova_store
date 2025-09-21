import React from 'react';
import { motion } from 'framer-motion';

function Card() {
  return (
    <>
      <motion.a
        href='#'
        className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.03,
          boxShadow:
            '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        <motion.img
          className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
          src='https://www.simplytek.lk/cdn/shop/files/Apple-airpods-4-Simplytek-lk-sri-lanka_1.jpg?v=1728384932&width=240'
          alt=''
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'tween' }}
        />
        <motion.div
          className='flex flex-col justify-between p-4 leading-normal'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h5
            className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Noteworthy technology acquisitions 2021
          </motion.h5>
          <motion.p
            className='mb-3 font-normal text-gray-700 dark:text-gray-400'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </motion.p>
        </motion.div>
      </motion.a>
    </>
  );
}

export default Card;
