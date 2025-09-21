import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start with a slight delay for better perceived performance
    const initialDelay = setTimeout(() => {
      // Simulate loading progress
      const timer = setInterval(() => {
        setProgress((prev) => {
          // Simulate loading with a varying speed - slower at the beginning,
          // faster in the middle, and then slowing down at the end
          let increment;
          if (prev < 30) {
            increment = 1.5; // Slow start
          } else if (prev < 70) {
            increment = 2.5; // Speed up in the middle
          } else if (prev < 90) {
            increment = 1; // Slow down near the end
          } else {
            increment = 0.5; // Very slow at the very end
          }

          const newProgress = Math.min(100, prev + increment);

          if (newProgress >= 100) {
            clearInterval(timer);
            // Notify parent component that loading is complete after the final animation
            setTimeout(() => onLoadingComplete?.(), 800);
            return 100;
          }
          return newProgress;
        });
      }, 50);

      return () => clearInterval(timer);
    }, 300); // Initial delay before starting the progress

    return () => clearTimeout(initialDelay);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key='loading-screen'
        className='fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center z-50'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut'
        }}
        onAnimationComplete={() => {
          if (progress >= 100) {
            document.body.style.overflow = 'auto';
          }
        }}
      >
        <div className='relative'>
          {/* Letter N with filling effect */}
          <div className='relative'>
            {/* N letter outline */}
            <svg
              width='200'
              height='200'
              viewBox='0 0 100 100'
              className='loading-n'
              strokeWidth='4'
              fill='none'
              stroke='rgba(59, 130, 246, 0.5)'
            >
              <path
                d='M20,20 L20,80 L80,20 L80,80'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            {/* N letter filling */}
            <svg
              width='200'
              height='200'
              viewBox='0 0 100 100'
              className='absolute top-0 left-0'
              strokeWidth='4'
              fill='none'
            >
              <clipPath id='n-clip'>
                <path
                  d='M20,20 L20,80 L80,20 L80,80'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </clipPath>

              <rect
                x='0'
                y='0'
                width='100'
                height='100'
                clipPath='url(#n-clip)'
                fill='url(#n-gradient)'
                style={{
                  transformOrigin: 'bottom',
                  transform: `scaleY(${progress / 100})`,
                  transformBox: 'fill-box'
                }}
              />

              <defs>
                <linearGradient
                  id='n-gradient'
                  x1='0%'
                  y1='0%'
                  x2='0%'
                  y2='100%'
                >
                  <stop offset='0%' stopColor='#60A5FA' />
                  <stop offset='50%' stopColor='#3B82F6' />
                  <stop offset='100%' stopColor='#2563EB' />
                </linearGradient>
              </defs>
            </svg>

            {/* Shine effect overlay */}
            {progress > 95 && (
              <>
                <svg
                  width='200'
                  height='200'
                  viewBox='0 0 100 100'
                  className='absolute top-0 left-0 shine-effect'
                  strokeWidth='4'
                  fill='none'
                >
                  <path
                    d='M20,20 L20,80 L80,20 L80,80'
                    stroke='rgba(255, 255, 255, 0.8)'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                {/* Final flourish animation */}
                <svg
                  width='220'
                  height='220'
                  viewBox='0 0 110 110'
                  className='absolute -top-[10px] -left-[10px]'
                  style={{
                    animation: 'complete-flourish 0.8s ease-out forwards'
                  }}
                >
                  <circle
                    cx='55'
                    cy='55'
                    r='50'
                    fill='none'
                    stroke='rgba(59, 130, 246, 0.2)'
                    strokeWidth='1.5'
                  />
                </svg>
              </>
            )}
          </div>

          {/* Loading text */}
          <motion.div
            className='absolute bottom-0 left-0 right-0 flex flex-col items-center -mb-16'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className='text-white text-lg font-medium mb-2'>
              Loading NOVA STORE
            </div>
            <div className='w-44 h-1.5 bg-gray-700 rounded-full overflow-hidden'>
              <motion.div
                className='h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full'
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
              />
            </div>
            <div className='text-gray-400 text-sm mt-2'>{progress}%</div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
