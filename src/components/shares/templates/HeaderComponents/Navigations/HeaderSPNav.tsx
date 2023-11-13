"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SPNavDialog from './SPNavDialog';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderSPNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className='scrolling-auto'>
      <div className="absolute right-4 top-7  w-4 lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-main-dark"
          onClick={() => setIsMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#FFF", }} />
          <span className="sr-only">Open main menu</span>
        </button>

      </div>
      <SPNavDialog isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  )
}

export default HeaderSPNav