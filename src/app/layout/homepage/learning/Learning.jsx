import React from 'react';
import bg from './../../../img/request-bg.png'
import img from './../../../img/request-img-1.png'
import Image from 'next/image';
import { AiFillSpotify } from 'react-icons/ai';
const Learning = () => {
    return (
        <div>
            <div className='relative'>
                <Image src={bg} height={200} width={1900} alt=''></Image>
                <div className='top-9.5 absolute grid grid-cols-2 items-center gap-10'>
                    <div className='ml-14' data-aos="fade-up"
                        data-aos-duration="3000">
                        <Image src={img} height={400} width={840} alt=''></Image>
                    </div>
                    <div className='pr-45' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='flex items-center gap-2 bg-white  py-1 rounded-full w-60 border border-gray-200'>
                            <div className='bg-gray-200 p-2 rounded-full text-[#07a596] ml-3'>
                                <AiFillSpotify />
                            </div>
                            <p>Subscribe Newsletter</p>
                        </div>
                        <h1 className='text-4xl font-semibold  text-white leading-12 mt-4 tracking-wider '>
                            Find Your Best Course With Us</h1>
                        <p className='text-sm text-gray-400 mt-4 leading-7'>This includes offering personalized feedback, fostering a sense of community through discussion forums and group projects, and providing continuous support to address challenges and improve.</p>
                        <div className='flex  items-center gap-8 text-white mt-7'>
                            <input className='border border-gray-400 text-white outline-none pl-6 py-4 text-sm w-[50%] rounded-full' type="text" placeholder=' Course Name' />
                            <input className='border border-gray-400 text-white outline-none pl-6 py-4 text-sm w-[50%] rounded-full' type="email" placeholder='Email Adress' />
                        </div>
                        <p className='text-sm font-semibold bg-[#07a596] py-4 text-center rounded-full text-white w-44 mt-8'>Subscribe Now</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>

    );
};

export default Learning;