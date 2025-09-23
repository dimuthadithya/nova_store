import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import 'flowbite';
import Home from './Pages/Home';
import LoadingScreen from './Components/LoadingScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/AdminDashboard';
import Login from './Pages/Login';
import AdminDashboard from './Pages/AdminDashboard';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  // Prevent scrolling when loading
  useEffect(() => {
    if (loading) {
      // document.body.style.overflow = 'hidden';
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
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <AnimatePresence mode='wait'>
                {loading ? (
                  <LoadingScreen
                    key='loading-screen'
                    onLoadingComplete={() => setLoading(false)}
                  />
                ) : (
                  <motion.div
                    key='content'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                      display: contentReady || !loading ? 'block' : 'none'
                    }}
                  >
                    <Home />
                  </motion.div>
                )}
              </AnimatePresence>
            }
          />
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
