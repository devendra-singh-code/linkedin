import React, { useState } from 'react'
import photo from '../../assets/1.png'
import photo1 from '../../assets/photo.png'
import video from '../../assets/video.png'
import article from '../../assets/article.png'
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa6";
import { ImLoop } from "react-icons/im";
import { BsSendFill } from "react-icons/bs";
import aws from '../../assets/aws.jpg'
import aws1 from '../../assets/aws1.jpg'
import { BsThreeDots } from "react-icons/bs";
import Options from './Options'
import { useDispatch } from 'react-redux'
import { show } from '../../store/stateSlice'

const Middle = () => {

    const dispatch = useDispatch()

    const [options, setOptions] = useState(false)

    return (
        <>
            <div className='flex flex-col gap-3'>
                <div className=' relative px-4 py-4 bg-white rounded-xl flex flex-col gap-3 justify-center ' >
                    <img className='w-[160px] m-auto' src={photo} alt="" />
                    <p className='text-xl font-semibold text-center'>Hi Devendra, are you looking for a job right now?</p>
                    <p className='text-gray-700 text-center'>Your response is only visible to you.</p>
                    <div className='flex gap-2'>
                        <button className=' p-[6px] text-blue-700 font-semibold border-2 border-blue-300 hover:border-blue-500 hover:border-2 hover:bg-blue-50 rounded-full w-full cursor-pointer'>Yes</button>
                        <button className=' border-2 text-blue-700 font-semibold border-blue-300 hover:border-blue-500 hover:border-2 hover:bg-blue-50 rounded-full w-full cursor-pointer'>No, but I am open</button>
                    </div>
                    <div className='absolute right-6 top-3'>
                        <p className='font-semibold text-xl text-gray-600 cursor-pointer'>x</p>
                    </div>
                </div>

                <div className='px-4 py-4 bg-white rounded-xl flex flex-col gap-3'>
                    <div className='flex gap-2 justify-center'>
                        <div className=" left-6 h-12 w-14 flex items-center justify-center  bg-green-600 rounded-full border-2 border-white">
                            <p className="text-[22px] text-white">D</p>
                        </div>
                        <div onClick={() => dispatch(show())} className='border border-blue-700 hover:bg-gray-100 rounded-full w-full flex items-center pl-6 cursor-pointer'>
                            <p className='text-gray-600 text-[14px] font-semibold '>Start a post, try writing with AI</p>
                        </div>
                    </div>
                    <div className='flex justify-between px-8'>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <img className='w-10' src={photo1} />
                            <p className='text-sm font-semibold text-gray-700'>Photo</p>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <img className='w-9' src={video} alt="" />
                            <p className='text-sm font-semibold text-gray-700'>Video</p>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <img className='w-9' src={article} alt="" />
                            <p className='text-sm font-semibold text-gray-700'>Write articles</p>
                        </div>
                    </div>
                </div>


                <div className='relative bg-white rounded-xl flex flex-col gap-3'>
                    <div className='absolute right-5 top-3 cursor-pointer' onClick={() => setOptions((prev) => !prev)}>
                        <BsThreeDots />
                    </div>
                    {options &&
                        <div className='absolute  bg-white p-5 top-10 right-3 border border-gray-400 rounded-lg'>
                            <Options />
                        </div>
                    }
                    <div className='px-4 pt-4 flex flex-col gap-3'>
                        <div className='flex gap-4 items-center'>
                            <img className='w-12' src={aws} alt="" />
                            <div>
                                <p className='font-semibold text-gray- text=[14px] '>Amazon Web Services (AWS)</p>
                                <p className='  text-[12px] text-gray-500'>9,726,993 followers</p>
                                <p className=' leading-3 text-[12px] text-gray-500'>Promoted</p>
                            </div>
                        </div>
                        <div >
                            <p className='text-[15px] font-semibold text-gray-800 leading-4'>Ready to explore the clod but dont know where to start? Get an AWS learning recommendation just selecting experience level, role and <span>..more</span></p>
                        </div>
                    </div>
                    <div>
                        <img src={aws1} alt="" />
                    </div>
                    <div className='flex items-center justify-between px-4'>
                        <div></div>
                        <div>
                            <p className='text-[15px] font-semibold text-gray-700'>43 comments 5 reports</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between px-4 py-4 border-t border-gray-400'>
                        <div className='flex items-center gap-2 text-gray-800 cursor-pointer'>
                            <SlLike />
                            <p>Like</p>
                        </div>
                        <div className='flex items-center gap-2 text-gray-800 cursor-pointer'>
                            <FaRegCommentDots />
                            <p>Comment</p>
                        </div>
                        <div className='flex items-center gap-2 text-gray-800 cursor-pointer'>
                            <ImLoop />
                            <p>Report</p>
                        </div>
                        <div className='flex items-center gap-2 text-gray-800 cursor-pointer'>
                            <BsSendFill />
                            <p>Send</p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Middle
