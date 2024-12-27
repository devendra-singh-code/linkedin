import React, { useEffect, useState } from 'react'

import Mesaging from './Mesaging';
import { useSelector } from 'react-redux';

const Container = ({ children }) => {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    // <div className='w-full max-w-[1200px] m-auto md:px-5'>
    <div className='w-full xl:max-w-[1200px]  m-auto md:px-5'>
      {children}
      <div className={`${authStatus === true ? 'fixed bottom-0 right-0 z-30' : 'hidden'} `}>
        <Mesaging />
      </div>
    </div>
  )
}

export default Container
