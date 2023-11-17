"use client";

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import GlobalConstant from '@/constants/GlobalConstant';
import LoadingAnimation from './LoadingAnimation';
import { LoadScript } from '@react-google-maps/api';
import LoadingBlank from './LoadingBlank';

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const googleMapApiKey = String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, GlobalConstant.PageLoader.waitTime)

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      <LoadScript loadingElement={(<LoadingBlank />)} googleMapsApiKey={googleMapApiKey}>
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
      </LoadScript>

    </div>
  )
}

export default LoaderWrapper