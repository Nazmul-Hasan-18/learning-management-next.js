import Link from 'next/link';
import React from 'react';
import { AiFillSpotify } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
const Left = (text) => {
    return (
        <div>
            <div>
                <div className='flex items-center gap-4 bg-white justify-center py-1 rounded-full w-80'>
                    <div className='bg-gray-200 p-2 rounded-full text-[#07a596]'>
                        <AiFillSpotify />
                    </div>
                    <p>Welcome to Online Education</p>
                </div>
                <h1 className='text-5xl font-semibold leading-16 mt-5'>Start learning from
                    <br /> the world’s <span className=' text-[#07a596]'> best institutions</span></h1>
                <div className='flex items-center mt-9 gap-8'>
                    <Link href="/"><p className='font-semibold text-white bg-[#07a596] py-[14px]  px-9 rounded-full'>Get Started</p></Link>
                    <div className='flex items-center gap-2 font-semibold cursor-pointer '>
                       <div className='bg-white text-[#07a596] p-4 rounded-full text-lg '>
                         <FaPlay />
                       </div>
                       <p className='text-gray-700'>Watch Video</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center mt-8 '>
                        <img className='border rounded-full border-white' src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-1.png" alt="" />
                        <img className='ml-[-15px] border rounded-full border-white' src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-2.png" alt="" />
                        <img  className='ml-[-15px] border rounded-full border-white'  src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-3.png" alt="" />
                        <img  className='ml-[-15px] border rounded-full border-white' src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-4.png" alt="" />
                        <p className='text-gray-700 ml-5'><span className='text-[#07a596]'>10K </span>Enrolment</p>
                    </div>
                    <div className='text-xl font-semibold text-gray-700 mt-8'>
                        <p>Explore <span className='text-[#07a596]'> 1350+</span> Courses within Subject</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left;