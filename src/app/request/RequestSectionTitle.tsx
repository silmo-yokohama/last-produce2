import React from 'react'

const RequestSectionTitle = ({ title }: { title: string }) => {
  return (
    <h3 className='mb-6 text-2xl lg:text-3xl font-normal tracking-wider flex items-center overflow-hidden'>
      {title}
      <span></span>
      <div className="flex-1 inline-block w-full h-1px bg-gold ml-6"></div>
    </h3>
  )
}

export default RequestSectionTitle