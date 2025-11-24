import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Top = () => {
    return (
        <div className='bg-gray-800 text-white py-[14px]'>
            <div className='container mx-auto px-16 flex justify-between items-center '>
                <div className='flex items-center'>
                    <div className='flex items-center gap-1 border-r border-gray-400 pr-7'>
                        <div className='text-xl'>
                            <IoCallOutline />
                        </div>
                        <p className='hover:text-[#07a698]  cursor-pointer duration-300'>01756-966372</p>
                    </div>
                    <div className='flex items-center gap-1 px-7 border-r border-gray-400 '>
                        <div className='text-2xl'>
                            <CiLocationOn />
                        </div>
                        <p>Rampura,Dhaka</p>
                    </div>
                    <div className='flex items-center gap-1 pl-7'>
                        <div className='text-2xl'>
                            <IoIosTimer />

                        </div>
                        <p>Mon - Sat: 8:00 - 15:00</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex  items-center gap-1 border-r pr-6 border-gray-400'>
                        <div className='text-xl '>
                            <CiUser />
                        </div>
                        <p className='hover:text-[#07a698] duration-300 text-[15px]'>Login / Register</p>
                    </div>
                    <div className='flex  items-center gap-1 pl-6'>
                        <p className='hover:text-[#07a698] duration-300 text-[15px]'>Follow Us</p>
                    </div>
                    <div className='text-xl flex items-center gap-3 pl-6'>
                        <FaFacebookF />
                        <FaGithub />
                        <FaLinkedinIn />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;