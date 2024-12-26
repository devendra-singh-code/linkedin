import React from 'react'
import logo from '../../assets/linkedin.png'

const Right = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='px-4 py-4 bg-white rounded-xl flex flex-col gap-3 '>
        <p className='text-xl font-semibold text-gray-900'>Trending Now</p>
        <p className=' font-semibold text-gray-700'>curated by LinkedIn News</p>
        <div className='hover:bg-gray-100 cursor-pointer p-1'>
            <p className='text-sm font-semibold text-gray-800'>Semiconductor industry</p>
            <p className='text-gray-500 text-sm'>4d ago 9,734 readers</p>
        </div>
        <div className='hover:bg-gray-100 cursor-pointer p-1'>
            <p className='text-sm font-semibold text-gray-800'>COP29</p>
            <p className='text-gray-500 text-sm'>5d ago 5,040 readers</p>
        </div>
        <div className='hover:bg-gray-100 cursor-pointer p-1'>
            <p className=' font-semibold text-gray-800 text-sm'>Indian banks</p>
            <p className='text-gray-500 text-sm'>4d ago 4,508 readers</p>
        </div>
        <div className='hover:bg-gray-100 cursor-pointer p-1'>
            <p className='text-sm font-semibold text-gray-800'>Retail infliation</p>
            <p className= 'text-sm text-gray-500'>4d ago 3,210 readers</p>
        </div>
        <div className='hover:bg-gray-100 cursor-pointer p-1'>
            <p className='text-sm font-semibold text-gray-800'>Patent application in India</p>
            <p className='text-sm text-gray-500'>4d ago 2,250 readers</p>
        </div>
        <div className='hover:bg-gray-100 cursor-pointer p-1'>
            <p className=' font-semibold text-gray-500'>Show more ....</p>
        </div>
      </div>
      <div className='px-4 py-4 bg-white rounded-xl hover:underline cursor-pointer'>
        <p className='text-[14px] font-semibold text-gray-700'><span className='bg-orange-300 px-2 font-light'>Tip</span> Try LinkedIn on the Windows App</p>
      </div>
      <div className='px-4 py-4 flex flex-wrap gap-2 items-center justify-center rounded-xl'>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>About</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Accessibilty</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Accessibilty</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Help Center</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Privacy & Terms</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Ad Choice</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Advertising</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900 '>Business Service</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Get the linkedIn app</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>More</p>
      </div>
      <div className='px-4 rounded-xl flex items-center gap-2'>
        <img className='w-24' src={logo} alt="" />
        <p className='text-[12px] font-semibold text-gray-600'>LinkedIn Corporation @ 2024</p>
      </div>
    </div>
  )
}

export default Right
