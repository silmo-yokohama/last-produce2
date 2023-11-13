"use client"

import React from 'react'

import { motion } from 'framer-motion';
import Image from 'next/image';
import BigLogo from '/public/images/logo-large.png'

const LoadingAnimation = () => {

  const init = {
    top: '100%',
  }

  const animate = {
    top: '0',
  }

  const hide = {
    opacity: 0,
    marginTop: '35px',
  }

  const fadeIn = {
    marginTop: '0',
    opacity: 1,
  }

  return (
    <div>
      <motion.div
        initial={init}
        animate={animate}
        exit={{ opacity: 0 }}
        transition={{
          delay: 2,
          duration: '0.5',
          ease: 'easeIn'
        }}
        className='z-50 bg-main fixed h-screen w-full'
      >
      </motion.div>
      <div className='bg-gray-800 fixed left-0 top-0 w-full h-screen z-30'>
        <div className='flex justify-center items-center h-full'>

          <motion.div
            initial={hide}
            animate={fadeIn}
            transition={{ duration: '0.75' }}
            className='flex justify-center items-center flex-col text-center'
          >
            <Image src={BigLogo} alt="Last Produce" className='w-4/5' />
          </motion.div>

        </div>
      </div>
    </div>

  )

}

export default LoadingAnimation