import { ConceptPage, ContactPage, CorporatePage, ServicePage, TopPage } from '@/constants/PageInformation';
import PageInformation from '@/types/PageInformationType';
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import HeaderNavItem from './HeaderNavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const SPNavDialog = (props: { isMenuOpen: Boolean, setIsMenuOpen: Function }) => {
  const { isMenuOpen, setIsMenuOpen } = props;
  const Pages: Array<PageInformation> = [TopPage, ConceptPage, ServicePage, CorporatePage, ContactPage];

  const close = {
    left: '100%',
  }

  const open = {
    left: '0',
  }

  return (
    <AnimatePresence mode='wait'>
      {isMenuOpen && (
        <motion.div
          initial={close}
          animate={open}
          exit={close}
          transition={{ duration: .25 }}
          className='lg:hidden h-screen w-full bg-main-dark fixed top-0'
        >

          <div className="relative">
            <nav className="mx-auto flex max-w-7xl items-center lg:justify-between justify-center p-6 lg:px-8" aria-label="Global">
              {/* <HeaderLogo /> */}
            </nav>
            <div className="absolute right-4 top-7  w-4 lg:hidden">

              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700  bg-main-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faXmark} style={{ color: "#fafafa", }} />
                <span className="sr-only">Close main menu</span>
              </button>

            </div>
          </div>


          <div className=" flow-root scrolling-auto">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 pb-5">
                {Pages.map((p, i) =>
                  <HeaderNavItem key={i} pageInfo={p} isSmartPhone={true} setIsMenuOpen={setIsMenuOpen} />
                )}
                <a href="tel:0455503364" className='px-6 py-3 border-b font-thin flex align-middle flex-col'>
                  <span className='block'>お電話</span>
                  <span className='block text-xs mx-1'>TEL</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      )}

    </AnimatePresence>

  )
}

export default SPNavDialog