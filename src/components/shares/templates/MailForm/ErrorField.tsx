import React from 'react'

const ErrorField = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <span className='mt-1 text-xs font-light text-rose-500'>{children}</span>
    </div>
  )
}

export default ErrorField