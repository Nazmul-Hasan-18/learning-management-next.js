import React from 'react';
import img1 from './../../../img/team-1.png'
import img2 from './../../../img/team-2.png'
import img3 from './../../../img/team-3.png'
import img4 from './../../../img/team-4.png'
import Image from 'next/image';
import { AiFillSpotify } from 'react-icons/ai';
import { FaBehance, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const items = [
    {
        image: img1,
        name: "Zaramane Mass Likan"
    },
    {
        image: img2,
        name: "Amelia Grace Lily"
    },
    {
        image: img3,
        name: "Mason Logan Dee"
    },
    {
        image: img4,
        name: "Lsabella Charlotte"
    },
]
const Team = () => {
    return (
        <div className='bg-[#dff0ff] py-23'>
            <div className='container mx-auto px-20 flex flex-col items-center justify-center'>
                <div className='flex flex-col justify-center items-center' data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className='flex items-center gap-2 bg-white  py-1 rounded-full w-50 '>
                        <div className='bg-gray-200 p-2 rounded-full text-[#07a596] ml-3'>
                            <AiFillSpotify />
                        </div>
                        <p>Why Choose Us</p>
                    </div>
                    <h1 className='text-4xl font-semibold  text-gray-800 leading-12 mt-3 tracking-wider '>
                        Explore Our World's Best Courses</h1>
                </div>
                <div className=' grid grid-cols-4 gap-8  pt-12 'data-aos="zoom-in">
                    {
                        items.map((item, index) => (
                            <div key={index} className=' group'>
                                <div className='relative'>
                                    <div className='relative  '>
                                        <div className='group-hover:bg-black/50 duration-500  w-full absolute h-full rounded-xl'>

                                        </div>
                                        <Image className='rounded-2xl  ' src={item.image} height={50} width={330} alt=''></Image>
                                        <div className=' bg-white w-80 py-6 px-7 absolute top-69 rounded-b-xl'>
                                            <h2 className='text-xl font-semibold'>{item.name}</h2>
                                            <p className='text-[#07a596] mt-0.5'>Online Teacher</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 absolute -translate-y-58 group-hover:-translate-y-60 duration-500 left-23 opacity-0 group-hover:opacity-100 '>
                                        <div className='text- bg-white text-[#07a596] p-3.5 rounded-full hover:bg-[#07a596] hover:text-white duration-300 cursor-pointer'>
                                            <FaFacebookF />
                                        </div>
                                        <div className='text- bg-white text-[#07a596] p-3.5 rounded-full hover:bg-[#07a596] hover:text-white duration-300 cursor-pointer'>
                                            <FaLinkedinIn />
                                        </div>
                                        <div className='text- bg-white text-[#07a596] p-3.5 rounded-full hover:bg-[#07a596] hover:text-white duration-300 cursor-pointer'>
                                            <FaBehance />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;