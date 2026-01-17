import React from 'react'

export const Wrapper = ({children}) => {
  return (
    <div className=' max-w-7xl mx-auto'>
        {children}
    </div>
  )
}

export default Wrapper