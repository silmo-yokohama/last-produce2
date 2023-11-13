import '@fortawesome/fontawesome-pro/css/all.min.css'
import Link from 'next/link'
import Image from 'next/image'
import GlobalConstant from '@/constants/GlobalConstant'

import HorizonLogo from '/public/images/horizontal-logo-small.png'
import HeaderNav from './Navigations/HeaderNav'
import { RequestPage } from '@/constants/PageInformation'
import HeaderSPNav from './Navigations/HeaderSPNav'

const Header = () => {

  return (
    <header className='fixed top-0 left-0 w-full z-10 bg-main-dark'>
      <div className='relative border-b'>
        <nav className="mx-auto flex max-w-7xl items-center lg:justify-between justify-center p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{GlobalConstant.companyName}</span>
              <Image className="h-8 w-auto" src={HorizonLogo} alt={GlobalConstant.companyName} />
            </Link>
          </div>

          <HeaderNav />
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href={RequestPage.url} className="text-sm leading-6 font-thin block rounded-lg bg-yellow-400 py-3 px-4 transition-all duration-300 ease-out hover:bg-main-dark hover:text-white">
              {RequestPage.pageName}
            </Link>
          </div>
        </nav>


      </div>

      <HeaderSPNav />

    </header>
  )
}

export default Header