import React from 'react';
import { AiFillSpotify } from 'react-icons/ai';
import img1 from './../../../../img/content-1.png'
import img2 from './../../../../img/content-2.png'
import Image from 'next/image';

const JourneyRight = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">
            <div className='mt-[-25]'>
                <div className=''>
                    <div className='flex items-center gap-2 bg-white  py-1 rounded-full w-64 border border-gray-200'>
                        <div className='bg-gray-200 p-2 rounded-full text-[#07a596] ml-3'>
                            <AiFillSpotify />
                        </div>
                        <p>How We Start Journey</p>
                    </div>
                    <h1 className='text-4xl font-semibold  text-gray-800 leading-12 mt-3 tracking-wider '>
                        We Care About Your Life For
                        Better Future</h1>
                    <p className='text-sm text-gray-600 mt-5 leading-7'>This includes offering personalized feedback, fostering a sense of community through discussion forums and group projects, and providing continuous support to address challenges and improve.</p>
                </div>
                <div className='mt-9'>
                    <div className='flex  items-center gap-6 border px-10 py-7 rounded-lg border-gray-200 hover:shadow-xl duration-500 cursor-pointer'>
                        <div className='bg-gray-200 py-4 px-5.5 rounded-full'>
                            <Image src={img1} width={35} height={50} alt=''></Image>
                        </div>
                        <div>
                            <h3 className='font-semibold text-xl'>Master Certified Trainer</h3>
                            <p className='text-sm text-gray-500 leading-6 mt-3' >This includes offering personalized feedback, fostering a sense of community through discussion.</p>
                        </div>
                    </div>
                    <div className='flex  items-center gap-6 border px-10 py-7 rounded-lg mt-9 border-gray-200 hover:shadow-xl duration-500 cursor-pointer'>
                        <div className='bg-gray-200 py-4 px-5.5 rounded-full'>
                            <Image src={img2} width={35} height={50} alt=''></Image>
                        </div>
                        <div>
                            <h3 className='font-semibold text-xl'>Coach Certification Program
                            </h3>
                            <p className='text-sm text-gray-500 leading-6 mt-3' >This includes offering personalized feedback, fostering a sense <br /> of community through discussion.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JourneyRight;