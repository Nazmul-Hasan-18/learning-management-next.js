import React from 'react';
import Image from 'next/image';
import img from './../../../../img/post-1.jpg'
import img1 from './../../../../img/post-2.png'
import { IoMdTime } from 'react-icons/io';
import { GoFileDirectory } from "react-icons/go";
const Updateleft = () => {
    return (
        <div className='grid grid-cols-2 gap-9 mt-14'>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className='relative'>
                    <div className='bg-black/50 h-108.5 w-148.5 absolute rounded-xl'>
                    </div>
                    <Image className='rounded-xl' src={img} height={10} width={593} alt=''></Image>
                    <div className='top-60 absolute flex flex-col justify-center px-10'>
                        <p className='text-sm text-[#07a596] uppercase bg-white w-26 text-center py-1 rounded-full'>Learning</p>
                        <h2 className='text-2xl cursor-pointer mt-4 text-white font-semibold'>Repurpose mission critical action life items rather total linkage suds</h2>
                        <div className='flex items-center gap-5 mt-6'>
                            <div className='flex items-center gap-1 text-white'>
                                <div className='text-xl'>
                                    <IoMdTime />
                                </div>
                                <p className='flex items-center gap-1 text-white text-sm'>
                                    August 15,2025</p>
                            </div>

                            <div className='flex items-center gap-1'>
                                <div className='text-xl text-white'>
                                    <GoFileDirectory />
                                </div>
                                <p className=' text-white text-sm'>
                                    Marketing</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className='relative'>
                    <div className='bg-black/60 h-108.5 w-150 absolute rounded-xl'>
                    </div>
                    <Image className='rounded-xl' src={img1} height={10} width={600} alt=''></Image>
                    <div className='top-60 absolute flex flex-col justify-center px-10'>
                        <p className='text-sm text-[#07a596] uppercase bg-white w-26 text-center py-1 rounded-full'>Learning</p>
                        <h2 className='text-2xl cursor-pointer mt-4 text-white font-semibold'>post
                            Learning
                            Strategies for Managing Stress and Preventing Burnout </h2>
                        <div className='flex items-center gap-5 mt-6'>
                            <div className='flex items-center gap-1 text-white'>
                                <div className='text-xl'>
                                    <IoMdTime />
                                </div>
                                <p className='flex items-center gap-1 text-white text-sm'>
                                    August 15,2025</p>
                            </div>

                            <div className='flex items-center gap-1'>
                                <div className='text-xl text-white'>
                                    <GoFileDirectory />
                                </div>
                                <p className=' text-white text-sm'>
                                    Marketing</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updateleft;