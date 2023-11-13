"use client";

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import GlobalConstant from '@/constants/GlobalConstant';
import LoadingAnimation from './LoadingAnimation';

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, GlobalConstant.PageLoader.waitTime)

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {isLoading && (
        <AnimatePresence mode='wait'>
          <motion.div
            key="animation"
            initial={{ opacity: 1 }}
            exit={{ display: 'none' }}
          >
            <LoadingAnimation />
          </motion.div>


        </AnimatePresence>
      )}

      {!isLoading && (
        <motion.div
          key="contents"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, }}
          exit={{ opacity: 0 }}
        >
          {children}

        </motion.div>
      )}

    </div>
  )
}

export default LoaderWrapper