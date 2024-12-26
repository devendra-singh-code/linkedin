import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { profileState, showProfile } from '../../store/stateSlice';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

const ProfileDropdown = () => {
//    const [option, setOption] = useState(false)
    const option = useSelector(state => state.stateManage.profileBtn)

   const dispatch = useDispatch()
   const logoutHandler = () => {
    authService.logout().then(() => {
        dispatch(logout())
    })
   }

    return (
        <div onClick={() => dispatch(profileState())} className='relative flex flex-col items-center cursor-pointer rounded-md'>
            <div className='bg-green-600 rounded-full w-6 h-6 flex items-center justify-center'><p className='text-white text-[12px]'>D</p></div>
            <div className='flex items-center text-gray-600'>
                <p className='text-[12px] text-gray-600'>Me</p>
                <FaCaretDown />
            </div>
            {option && 
          
            <div className='absolute top-16 right-2 z-20 bg-white p-3 border border-gray-400 rounded w-[300px] flex flex-col gap-3'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center justify-center h-12 w-12 bg-green-600 rounded-full text-white'><p>D</p></div>
                    <div>
                        <p className='font-semibold'>Devendra Singh</p>
                        <p className='text-sm text-gray-600'>Web Developer</p>
                    </div>
                </div>
                <div className='border-2 border-blue-400 hover:border-blue-800 rounded-3xl w-full cursor-pointer'>
                    <p className='w-full text-center text-blue-600 hover:text-blue-900 py-1 font-semibold text-[15px]'>View profile</p>
                </div>
                <div className=' border-t-2 border-b-2 py-2 flex flex-col gap-1'>
                    <p className='font-semibold'>Account</p>
                    <p className='text-sm hover:underline'>Try 1 month of Premium fo $0</p>
                    <p className='text-sm text-gray-600 hover:underline'>Settings & Privacy</p>
                    <p className='text-sm text-gray-600 hover:underline'>Help</p>
                    <p className='text-sm text-gray-600 hover:underline'> Language</p>
                </div>
                <div className=' border-t-2 border-b-2 py-2 flex flex-col gap-1'>
                    <p className='font-semibold'>Manage</p>
                    <p className='text-sm text-gray-600 hover:underline'>Posts & Activity</p>
                    <p className='text-sm text-gray-600 hover:underline'>Job Posting Account</p>
                </div>
                <div onClick={logoutHandler}>
                    <p className='text-sm text-gray-600 hover:underline'>Sign Out</p>
                </div>
            </div>
                  }
        </div>
    )
}

export default ProfileDropdown
