"use client";
import React from 'react';
import { AiFillSpotify } from 'react-icons/ai';
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";


const DashboardContant = () => {
    const [open, setOpen] = useState(false);
    const [flg, setFlag] = useState(false);
    const [op, setOp] = useState(false);
    const toggle = () => setOpen(!open);
    const toggle1 = () => setFlag(!flg);
    const toggle2 = () => setOp(!op);
    return (
        <div>
            <div data-aos="fade-up"
     data-aos-duration="3000">
                <div className='  flex flex-col py-10'>
                    <div className='flex items-center gap-2 bg-white  py-1 rounded-full w-50'>
                        <div className='bg-gray-200 p-2 rounded-full text-[#07a596] ml-3'>
                            <AiFillSpotify />
                        </div>
                        <p>Why Choose Us</p>
                    </div>
                    <h1 className='text-4xl font-semibold  text-gray-800 leading-12 mt-3 tracking-wider'>
                        Powerful Dashboard And High <br /> Performance Framework</h1>
                    <div className='mt-8'>
                        <div className="">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={toggle}
                            >
                                <h2 className="text-lg font-semibold text-gray-600">01. What courses do you offer?</h2>
                                <div className='text-gray-600'>
                                    <FaAngleDown />
                                </div>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-1000 border-t border-gray-300 mt-3  ${open ? "bg- opacity-100 max-h-40" : "opacity-0 max-h-0"
                                    }`}
                            >
                                <p className="mt-3 text-gray-600 text-sm  pb-4 pt-">
                                    We offer a wide range of courses in various subjects, including science, <br /> technology, engineering, mathematics, humanities, and social sciences. <br /> Our courses are designed for different education levels, from primary school to <br /> university.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <div
                                className="flex justify-between items-center cursor-pointer mt-3"
                                onClick={toggle1}
                            >
                                <h2 className="text-lg font-semibold text-gray-600">02. How can theacher effectively manage</h2>
                                <div className='text-gray-600'>
                                    <FaAngleDown />
                                </div>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-1000 border-t border-gray-300 mt-3 ${flg ? "bg- opacity-100 max-h-40" : "opacity-0 max-h-0"
                                    }`}
                            >
                                <p className="mt-3 text-gray-600 text-sm  pb-4 ">
                                    We offer a wide range of courses in various subjects, including science, <br /> technology, engineering, mathematics, humanities, and social sciences. <br /> Our courses are designed for different education levels, from primary school to <br /> university.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <div
                                className="flex justify-between items-center cursor-pointer mt-3"
                                onClick={toggle2}
                            >
                                <h2 className="text-lg font-semibold text-gray-600">03. How is special education delivered  </h2>
                                <div className='text-gray-600'>
                                    <FaAngleDown />
                                </div>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-1000 border-t border-gray-300 mt-3 ${op ? "bg- opacity-100 max-h-40" : "opacity-0 max-h-0"
                                    }`}
                            >
                                <p className="mt-3 text-gray-700 text-sm  pb-4 pt-">
                                    We offer a wide range of courses in various subjects, including science, <br /> technology, engineering, mathematics, humanities, and social sciences. <br /> Our courses are designed for different education levels, from primary school to <br /> university.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardContant;