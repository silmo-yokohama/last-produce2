"use client"

import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer'

type Props = {
  title: string;
  children: string;
  theme?: string;
  backgroundImage?: string;
}


const ConceptItem = ({ title, children, theme, backgroundImage }: Props) => {
  const control = useAnimation();
  const [ref, isInView] = useInView();

  const wrapperClasses = 'mx-auto max-w-screen-2xl p-8 lg:p-16 flex flex-1 flex-col items-center' + theme === 'dark' ? ' bg-main-dark text-gold' : ''

  const inViewBgVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        type: "spring"
      },
    },
    hidden: {
      opacity: 0
    }
  }


  const inViewTitleVariants = {
    visible: {
      y: 0,
      opacity: 0.8,
      transition: {
        duration: 1,
        delay: 1.3,
        type: "spring"
      }
    },
    hidden: {
      y: 40,
      opacity: 0
    }
  }


  const textLines = children.split(' ');
  const defDelay = 0.02;
  let counter = 1;

  const textElements = textLines.map(l => {
    const charMap = l.split('');

    return (
      <p className='my-2 lg:my-4 text-xs lg:text-base  text-white'>
        {charMap.map(c => {
          const inViewTextVariables = {
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 1.8 + counter++ * defDelay,
                type: "spring"
              }
            },
            hidden: {
              y: 10,
              opacity: 0
            }
          }

          return (
            <motion.span
              className='inline-block'
              ref={ref}
              variants={inViewTextVariables}
              initial="hidden"
              animate={control}
              key={counter}
            >
              {c}
            </motion.span>
          )
        })}
      </p>
    )
  })


  useEffect(() => {
    if (isInView) control.start('visible')
  }, [isInView])



  return (
    <div>
      <motion.section
        className='py-24 lg:py-52 bg-cover bg-right'
        style={{ backgroundImage: backgroundImage ? " url(" + backgroundImage + ")" : '' }}
        ref={ref}
        variants={inViewBgVariants}
        initial="hidden"
        animate={control}
      >

        <motion.div
          className="w-11/12 lg:w-full mx-auto max-w-screen-2xl p-8 lg:p-16 flex flex-1 flex-col items-center bg-main-dark text-gold"
          ref={ref}
          variants={inViewTitleVariants}
          initial="hidden"
          animate={control}
        >
          <h2 className='text-xl lg:text-4xl text-center'>{title}</h2>

          <div className='w-12 lg:w-16 border-solid rounded-sm border-2 lg:border-3 my-8'></div>

          {textElements}
        </motion.div>

      </motion.section>
    </div>
  )
}


export default ConceptItem