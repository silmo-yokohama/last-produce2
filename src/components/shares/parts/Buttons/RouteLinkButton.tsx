import Link from 'next/link'
import React from 'react'

const RouteLinkButton = ({ href, children }: { children: React.ReactNode, href: string }) => {
  return (
    <Link href={href} className='py-4 px-5 lg:mt-5 border-t border-b border-c border-gray-800 transition-all duration-300 ease-out hover:bg-main-dark hover:text-white text-xs lg:text-base'>
      {children}
    </Link>
  )
}

export default RouteLinkButton