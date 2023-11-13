import React from 'react'

const SubPageHeader = ({ title, subTitle, imageUrl }: { title: string, subTitle: string, imageUrl: string }) => {
  return (
    <div className='w-full h-40 lg:h-56 bg-center bg-cover table relative' style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="subpage-title table-cell align-middle text-center text-white tracking-wider">
        <h1 className='text-2xl mb-2 lg:text-4xl lg:mb-4 font-medium'>{title}</h1>
        <p className='text-md lg:text-lg leading-8'>{subTitle}</p>
      </div>
    </div>

  )
}

export default SubPageHeader