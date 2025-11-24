"use client";
import React, { useState } from 'react';
import { LuTableOfContents } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
const Bottom = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='border-b border-gray-300   '>
            <div className='container mx-auto px-16 flex items-center justify-between py-4'>
                <div>
                    <img className='w-45' src="https://html.rrdevs.net/edcare/assets/img/logo/logo-1.png" alt="" />
                </div>
                <div className='flex bg-gray-200 items-center rounded-full pl-8 py-2 pr-1'>
                    <div className='relative'>
                        <div className='flex items-center gap-2 border-r border-gray-300 pr-5' onClick={() => setOpen(!open)}>
                            <div className='text-2xl'>
                                <LuTableOfContents />
                            </div>
                            <p className=''>Categories</p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        {open && (
                            <div className=' top-10 absolute'>
                                <p>1</p>
                            </div>
                        )}
                    </div>
                    <input className='outline-none pl-5 pr-10 ' type="text" placeholder='Search.....' />
                    <div className='flex items-center gap-2 bg-[#07a698] text-white  py-2 px-5 rounded-full'>
                        <TfiSearch />
                        <p>Search</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='border border-gray-300 p-2 rounded-full text-2xl'>
                        <CiHeart />
                    </div>
                    <div className='border border-gray-300 p-2 rounded-full text-2xl'>
                        <IoCartOutline />
                    </div>
                    <p className='text-sm bg-[#07a596] text-white py-3 px-6 rounded-full'>Start Free Trial </p>
                </div>
            </div>
        </div>
    );
};

export default Bottom;