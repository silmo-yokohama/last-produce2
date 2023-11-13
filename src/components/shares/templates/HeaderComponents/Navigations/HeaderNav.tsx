import { ConceptPage, ContactPage, CorporatePage, ServicePage } from '@/constants/PageInformation'
import PageInformation from '@/types/PageInformationType'
import React from 'react'
import HeaderNavItem from './HeaderNavItem';

const HeaderNav = () => {
  const Pages: Array<PageInformation> = [ConceptPage, ServicePage, CorporatePage, ContactPage];

  return (
    <div className="hidden lg:flex lg:gap-x-12">

      {Pages.map((p, i) => {
        return (
          <HeaderNavItem key={i} pageInfo={p} isSmartPhone={false} setIsMenuOpen={null} />
        )
      })}

    </div>

  )
}

export default HeaderNav
