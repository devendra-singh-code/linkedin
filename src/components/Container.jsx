import React, { useEffect, useState } from 'react'

import Mesaging from './Mesaging';

const Container = ({ children }) => {
  return (
    <div className='w-full max-w-[1200px] m-auto md:px-5'>
      {children}
      <div className='fixed bottom-0 right-0 z-30'>
        <Mesaging />
      </div>
    </div>
  )
}

export default Container
