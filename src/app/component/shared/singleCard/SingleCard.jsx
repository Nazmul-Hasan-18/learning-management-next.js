
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineFile } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';
import { LuUserRound } from 'react-icons/lu';

const SingleCard = ({ data }) => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">
            <div className='bg-white group rounded-xl border border-gray-300'>
                <div className='py-7  flex flex-col items-center overflow-hidden '>
                    <Image className='   duration-500 rounded-2xl group-hover:scale-110' src={data.course_image} width={380} height={400} alt={data.category} />
                </div>
                <div className=''>
                    <p className='text-sm text-[#07a596] bg-[#caebe7] font-semibold w-15 text-center ml-8  py-1 rounded-full'>{data.price_label}</p>
                    <h2 className='font-semibold text-xl px-8   text-gray-700 mt-5 leading-8'>{data.course_title}</h2>
                    <div className='flex  justify-between items-center mt-4 px-8 '>
                        <div className='flex items-center text-sm gap-2 text-gray-500'>
                            <AiOutlineFile />
                            <p className='text-sm text-gray-500'> Lessons:{data.lessons}</p>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <LuUserRound />
                            <p className='text-sm'>Students {data.students_enrolled}</p>
                        </div>
                        <div className='flex items-center  gap-2 text-gray-500'>
                            <IoEyeOutline />
                            <p className='text-sm'>View {data.total_views}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-4  px-8 mb-6'>
                        <div className='flex items-center gap-3'>
                            <div>
                                <Image src={data.instructor.image} height={30} width={50} alt={data.instructor.image}></Image>
                            </div>
                            <div>
                                <h3 className='font-semibold text-gray-700'>{data.instructor.name}</h3>
                                <p className='text-sm text-[#07a596]'>Instuctor</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 text-[#07a596] '>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <p>(4.7)</p>
                        </div>
                    </div>
                    <div className='border-t border-gray-200'>
                        <div className='px-8  flex items-center justify-between py-5'>
                            <h3 className='text-xl font-semibold text-gray-700'>${data.price}</h3>
                            <Link href={`courses/${data.id}`}><p className=' border border-gray-300 hover:border-[#07a596] duration-500 text-black py-2 px-5 rounded-full'>View Details</p> </Link>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default SingleCard;