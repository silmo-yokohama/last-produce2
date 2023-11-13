"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { AnimatePresence, motion } from 'framer-motion';


const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const siteKey = String(process.env.NEXT_PUBLIC_RECAPTCHA_KEY);

  const initStyle = {
    opacity: 0,
    marginTop: "2rem"
  };
  const visibleStyle = {
    opacity: 1,
    marginTop: 0
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey} language='ja'>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathName}
          initial={initStyle}
          animate={visibleStyle}
          exit={initStyle}
          transition={{ duration: '0.5', ease: 'linear' }}
          className='pt-20 lg:pt-24'
        >
          {children}
        </motion.div>
      </AnimatePresence>

    </GoogleReCaptchaProvider>
  )
}

export default ContentWrapper