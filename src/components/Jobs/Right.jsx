import React from 'react'
import logo from '../../assets/1.png'
import wipro from '../../assets/wipro.png'
import agoda from '../../assets/agoda.png'
import microsoft from '../../assets/microsoft1.png'
import { IoClose } from "react-icons/io5";

const Right = () => {
    const jobPicks = [
        {
            photo: wipro,
            title: "Bangaluru, Karnataka, India (On-site)",
            subtitle: "Wipro - Bangaluru, Karnataka, India (On-site)",
            location: "Bangaluru, Karnataka, India (On-site)"
        },
        {
            photo: agoda,
            title: "Staff Full Stack Software Engineer (Gurugram Based )",
            subtitle: "Agoda - Greater Kolkata Area",
            location: "Greater Kolkata Area"
        },
        {
            photo: microsoft,
            title: "Web Developer ( Wordpress, Php, HTML, CSS )",
            subtitle: "Noiad, Uttar Pradesh, India ( Remote )",
            location: "Noida"
        },

    ]
    return (
        <div className='w-full'>
            <div className='flex justify-center gap-4 flex-col'>
                <div className='px-4 py-4 bg-white rounded-xl flex  gap-3 justify-between'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className='text-lg font-semibold'>Devendra, are you looking for a new job?</p>
                            <p className='text-gray-700 text-sm'>Add your preference to find relevant jobs and get notified about new open roles</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className='bg-blue-600 text-white px-4 py-1 rounded-full'>Actively looking</button>
                            <button className='border border-blue-600 text-blue-700 rounded-full px-4 py-1 font-semibold'>Casually browsing</button>
                        </div>
                    </div>
                    <div>
                        <img className='w-32' src={logo} alt="" />
                    </div>
                </div>

                <div className='px-4 py-4 bg-white rounded-xl flex flex-col gap-2'>
                    <p className='text-lg font-semibold'>Recommended for you</p>
                    <div className='flex gap-5'>
                        <p className='font-semibold py-2 border-b border-black cursor-pointer'>Job picks</p>
                        <p className='font-semibold py-2 cursor-pointer'>Top applicant</p>
                    </div>
                    <div>
                        <div>
                            <p className='text-[14px] pb-3 font-semibold text-gray-700'>Based on your profile, prefences, and activity like applies, searches, and saves</p>
                            <div className='flex flex-col'>

                                {jobPicks.map((item) => (
                                    <div className=' relative flex gap-5 border-t border-gray-300 py-3'>
                                    <div className='absolute right-5 top-4 cursor-pointer'>
                                    <IoClose className='text-gray-600' />
                                    </div>
                                    <div>
                                        <img className='w-14' src={item.photo} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-blue-600 font-semibold text-lg'>{item.title}</p>
                                        <p className='text-[15px]'>{item.subtitle}</p>
                                        <p className='text-gray-600 text-sm'>{item.location}</p>
                                        <p className='text-gray-600 text-sm'>Promoted</p>
                                    </div>
                                </div>
                                ))}
                                
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Right
