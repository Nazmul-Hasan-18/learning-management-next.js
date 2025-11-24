import Link from 'next/link';
import React from 'react';
import { AiFillSpotify } from 'react-icons/ai';

const Right = () => {
    return (
        <div className='font-[poppins] ' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <div className='flex  items-center gap-2 outline outline-gray-200 py-1 w-55 rounded-full'>
                <div className='bg-gray-200 p-2 rounded-full text-[#07a596] ml-2'>
                    <AiFillSpotify />
                </div>
                <p>Get More About Us</p>
            </div>
            <h2 className='textt text-gray-800 mt-3'>Over 10 Years in Distant learning
                for Skill Development</h2>
            <p className='text-sm text-gray-600 mt-4 leading-6'>Compellingly procrastinate equity invested markets with efficient process improvements. actualize mission-critical partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.</p>
            <div className='flex items-center gap-20 mt-10'>
                <div className='flex gap-6 items-center'>
                    <img className='border p-4 rounded-full border-gray-300' src="https://html.rrdevs.net/edcare/assets/img/icon/about-1.png" alt="" />
                    <div className='w-55'>
                        <h2 className='text-4xl font-semibold text-[#07a596]'>9.5k+</h2>
                        <p className='text-sm text-gray-400 mt-2'>Total active students taking
                            gifted courses</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <img className='border p-4 rounded-full border-gray-300' src="https://html.rrdevs.net/edcare/assets/img/icon/about-2.png" alt="" />
                    <div className='w-55'>
                        <h2 className='text-4xl font-semibold text-[#07a596]'>6.7k+</h2>
                        <p className='text-sm text-gray-400 mt-2'>Total active students taking
                            gifted courses</p>
                    </div>
                </div>
            </div>
            <Link href="/"><p className='font-semibold text-sm text-white bg-[#07a596] py-4 mt-10 w-43 text-center rounded-full'>Short Free Trial</p></Link>
        </div>
    );
};

export default Right;