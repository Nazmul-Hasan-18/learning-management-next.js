import React from 'react';
import { FaArrowRight, FaArrowRightLong, FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { IoCall } from "react-icons/io5";
import img from './../../../../img/footer-post-1.png'
import img1 from './../../../../img/footer-post-2.png'
import Image from 'next/image';
import { CiCalendarDate } from 'react-icons/ci';
const FooterMiddle = () => {
    return (
        <div  data-aos="fade-up"
                        data-aos-duration="3000">
            <div className='grid grid-cols-4 justify-center  gap-12 py-16 '>
                <div className=''>
                    <div className=''>
                        <h2 className='text-white  uppercase text-xl font-semibold tracking-wider '>Get in touch!</h2>
                        <div className='border border-white w-20 mt-3'>

                        </div>
                    </div>
                    <p className='text-sm text-white mt-8'>Fusce varius, dolor tempor interdum tristiquei bibendum.</p>
                    <div className='flex items-center gap-3 text-white mt-9'>
                        <div className='text-3xl'>
                            <IoCall />
                        </div>
                        <div>
                            <p className='text-xl  '>01756-966371</p>
                        </div>
                    </div>
                    <p className='text-sm text-white mt-3'>nazmulhasan.official98@gmail.com</p>
                    <div className='flex items-center gap-2 text-[#07a596] mt-5'>
                        <div className='bg-white p-3 rounded-full hover:text-white hover:bg-[#07a596] duration-500 cursor-pointer'>
                            <FaFacebookF />
                        </div>
                        <div className='bg-white p-3 rounded-full hover:text-white hover:bg-[#07a596] duration-500 cursor-pointer'>
                            <FaInstagram />
                        </div>
                        <div className='bg-white p-3 rounded-full hover:text-white hover:bg-[#07a596] duration-500 cursor-pointer'>
                            <FaBehance />
                        </div>
                        <div className='bg-white p-3 rounded-full hover:text-white hover:bg-[#07a596] duration-500 cursor-pointer'>
                            <FaLinkedinIn />
                        </div>
                        <div className='bg-white p-3 rounded-full hover:text-white hover:bg-[#07a596] duration-500 cursor-pointer'>
                            <FaYoutube />
                        </div>
                    </div>
                </div>
                <div className='ml-7'>
                    <div className=''>
                        <h2 className='text-white  uppercase text-xl font-semibold tracking-wider '>company info</h2>
                        <div className='border border-white w-20 mt-3'>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 mt-8'>
                        <div className='text-white flex items-center gap-3 hover:text-[#07a596] duration-500 cursor-pointer'>
                            <div>
                                <FaArrowRight />
                            </div>
                            <p className='text-[15px] tracking-wider'>About Us</p>
                        </div>
                        <div className='text-white flex items-center gap-3 hover:text-[#07a596] duration-500 cursor-pointer'>
                            <div>
                                <FaArrowRight />
                            </div>
                            <p className='text-[15px] tracking-wider'>Resource Center</p>
                        </div>
                        <div className='text-white flex items-center gap-3 hover:text-[#07a596] duration-500 cursor-pointer'>
                            <div>
                                <FaArrowRight />
                            </div>
                            <p className='text-[15px] tracking-wider'>Careers</p>
                        </div>
                        <div className='text-white flex items-center gap-3 hover:text-[#07a596] duration-500 cursor-pointer'>
                            <div>
                                <FaArrowRight />
                            </div>
                            <p className='text-[15px] tracking-wider'>Instructor</p>
                        </div>
                        <div className='text-white flex items-center gap-3 hover:text-[#07a596] duration-500 cursor-pointer'>
                            <div>
                                <FaArrowRight />
                            </div>
                            <p className='text-[15px] tracking-wider'>Become A Teacher</p>
                        </div>
                    </div>
                </div>
                <div className='ml-7'>
                    <div className=''>
                        <h2 className='text-white  uppercase text-xl font-semibold tracking-wider '>Useful Links</h2>
                        <div className='border border-white w-20 mt-3'>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 mt-8'>
                        <div className='text-white flex items-center gap-3 hover:text-[#07a596] duration-500 cursor-pointer'>
                            <div>
                                <FaArrowRight />
                            </div>
                            <p className='text-[15px] tracking-wider'>All Courses</p>
                        </div>
                        <div className='text-white flex items-center gap-3 hover:text-[#07a596] duration-500 cursor-pointer'>
                            <div>
                                <FaArrowRight />
                            </div>
                            <p className='text-[15px] tracking-wider'>Digital Marketing</p>
                        </div>
                        <div className='text-white flex items-center gap-3 hover:text-[#07a596] duration-500 cursor-pointer'>
                            <div>
                                <FaArrowRight />
                            </div>
                            <p className='text-[15px] tracking-wider'>Design & Branding</p>
                        </div>
                        <div className='text-white flex items-center gap-3 hover:text-[#07a596] duration-500 cursor-pointer'>
                            <div>
                                <FaArrowRight />
                            </div>
                            <p className='text-[15px] tracking-wider'>InStorytelling & Voice Over</p>
                        </div>
                        <div className='text-white flex items-center gap-3 hover:text-[#07a596] duration-500 cursor-pointer'>
                            <div>
                                <FaArrowRight />
                            </div>
                            <p className='text-[15px] tracking-wider'>News & Blogs</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className=''>
                        <h2 className='text-white  uppercase text-xl font-semibold tracking-wider '>company info</h2>
                        <div className='border border-white w-20 mt-3'>
                        </div>
                    </div>
                   <div className='mt-8'>
                    <div className='flex items-center gap-5'>
                        <div>
                            <Image src={img} height={50} width={120} alt=''></Image>
                        </div>
                        <div>
                            <h2 className='text-lg text-white font-semibold'>Where Dreams Find a Home</h2>
                            <div className='flex items-center gap-2 text-[#07a596] mt-2'>
                                <CiCalendarDate />
                                <p className='text-sm text-white'>20 April, 2025</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mt-6'>
                        <div>
                            <Image src={img1} height={50} width={120} alt=''></Image>
                        </div>
                        <div>
                            <h2 className='text-lg text-white font-semibold'>Where Dreams Find a Home</h2>
                            <div className='flex items-center gap-2 text-[#07a596] mt-2'>
                                <CiCalendarDate />
                                <p className='text-sm text-white'>20 April, 2025</p>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
               
            </div>
        </div>
    );
};

export default FooterMiddle;