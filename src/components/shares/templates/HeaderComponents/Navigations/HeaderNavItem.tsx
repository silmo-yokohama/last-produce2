"use client"

import PageInfo from '@/types/PageInformationType'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const HeaderNavItem = (props: { pageInfo: PageInfo, setIsMenuOpen: Function | null, isSmartPhone: Boolean }) => {
  const { pageInfo, isSmartPhone, setIsMenuOpen } = props;
  const pathName = usePathname();
  const isCurrentPage = pageInfo.url === pathName;

  const wrapperClasses =
    isSmartPhone ?
      'px-6 py-3 border-b font-thin flex align-middle flex-col text-gray-50' :
      'text-center font-thin flex align-middle flex-col text-gray-50';
  const currentClass = isCurrentPage ? ' ' : '';

  return (
    <Link href={pageInfo.url} className={wrapperClasses + currentClass} onClick={setIsMenuOpen ? () => setIsMenuOpen(false) : () => { }}>
      <span className='block text-sm tracking-wide'>{pageInfo.pageName}</span>
      <span className='block text-xs mx-1'>{pageInfo.pageDescription}</span>
    </Link>
  )
}

export default HeaderNavItem
