import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import 'flowbite';
import Home from './Pages/Home';
import LoadingScreen from './Components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  // Prevent scrolling when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      // Add a slight delay before showing content for a smoother transition
      const timer = setTimeout(() => {
        setContentReady(true);
        document.body.style.overflow = 'auto';
      }, 100);

      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading && (
          <LoadingScreen
            key='loading-screen'
            onLoadingComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            key='content'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: contentReady || !loading ? 'block' : 'none' }}
          >
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
